#!/usr/bin/env python3
"""把管理员维护的 XLSX 转成浏览器可直接读取的本地配置。仅使用 Python 标准库。"""
from __future__ import annotations

import json
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BOOK = ROOT / "游戏数据配置.xlsx"
OUTPUT = ROOT / "config" / "game-config.js"
NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main", "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"}
REL_NS = {"p": "http://schemas.openxmlformats.org/package/2006/relationships"}


def col_index(ref: str) -> int:
    letters = re.match(r"[A-Z]+", ref).group(0)
    value = 0
    for ch in letters:
        value = value * 26 + ord(ch) - 64
    return value - 1


def read_xlsx(path: Path) -> dict[str, list[list[object]]]:
    with zipfile.ZipFile(path) as zf:
        shared = []
        if "xl/sharedStrings.xml" in zf.namelist():
            root = ET.fromstring(zf.read("xl/sharedStrings.xml"))
            for item in root.findall("m:si", NS):
                shared.append("".join(t.text or "" for t in item.findall(".//m:t", NS)))
        wb = ET.fromstring(zf.read("xl/workbook.xml"))
        rels = ET.fromstring(zf.read("xl/_rels/workbook.xml.rels"))
        targets = {r.attrib["Id"]: r.attrib["Target"] for r in rels.findall("p:Relationship", REL_NS)}
        sheets = {}
        for node in wb.findall("m:sheets/m:sheet", NS):
            name = node.attrib["name"]
            target = targets[node.attrib[f"{{{NS['r']}}}id"]].lstrip("/")
            xml_path = target if target.startswith("xl/") else f"xl/{target}"
            root = ET.fromstring(zf.read(xml_path))
            rows = []
            for row in root.findall("m:sheetData/m:row", NS):
                values = []
                for cell in row.findall("m:c", NS):
                    idx = col_index(cell.attrib["r"])
                    while len(values) <= idx:
                        values.append("")
                    cell_type = cell.attrib.get("t", "")
                    if cell_type == "inlineStr":
                        value = "".join(t.text or "" for t in cell.findall(".//m:t", NS))
                    else:
                        raw = cell.findtext("m:v", default="", namespaces=NS)
                        if cell_type == "s" and raw != "":
                            value = shared[int(raw)]
                        elif cell_type == "b":
                            value = raw == "1"
                        elif raw == "":
                            value = ""
                        else:
                            try:
                                value = float(raw)
                                if value.is_integer():
                                    value = int(value)
                            except ValueError:
                                value = raw
                    values[idx] = value
                rows.append(values)
            sheets[name] = rows
        return sheets


def records(rows, key_header):
    header_index = next((i for i, row in enumerate(rows) if key_header in row), None)
    if header_index is None:
        return []
    headers = [str(x).strip() for x in rows[header_index]]
    result = []
    for row in rows[header_index + 1:]:
        data = {headers[i]: row[i] if i < len(row) else "" for i in range(len(headers)) if headers[i]}
        if data.get(key_header, "") in ("", None):
            continue
        result.append(data)
    return result


def yes(value) -> bool:
    return str(value).strip().lower() in {"是", "yes", "true", "1"}


def num(value, fallback=0):
    try:
        return float(value)
    except (TypeError, ValueError):
        return fallback


def optional_num(value):
    if value in ("", None):
        return None


def parse_json(value, fallback):
    if value in ("", None):
        return fallback
    try:
        return json.loads(str(value))
    except (TypeError, ValueError, json.JSONDecodeError):
        return fallback
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def main():
    sheets = read_xlsx(BOOK)
    params = {r["参数ID"]: r["数值"] for r in records(sheets.get("经营参数", []), "参数ID")}
    project_rows = records(sheets.get("项目卡", []), "项目ID")
    projects = []
    for r in project_rows:
        projects.append({
            "id": str(r["项目ID"]), "cost": num(r.get("总成本_万元")),
            "months": int(num(r.get("基础完成月数"), 0)), "max": int(num(r.get("最多完成次数"), 1)),
            "benefitMode": "linear" if str(r.get("收益释放方式", "")).strip() == "按月线性" else "complete",
            "repeatable": yes(r.get("可重复安排")), "dynamicCost": yes(r.get("是否动态成本")),
            "enabled": yes(r.get("启用", "是")),
        })
    action_rows = records(sheets.get("日常行动", []), "行动ID")
    actions = {str(r["行动ID"]): {"text": str(r.get("日志文案", "")), "stress": num(r.get("压力变化")), "relation": num(r.get("好感变化")), "weight": max(0, num(r.get("出现权重"), 100)), "enabled": yes(r.get("启用", "是"))} for r in action_rows}
    daily_event_rows = records(sheets.get("日常事件", []), "事件ID")
    daily_events = []
    for r in daily_event_rows:
        if not yes(r.get("启用", "是")) or num(r.get("出现权重")) <= 0:
            continue
        daily_events.append({
            "id": str(r["事件ID"]), "category": str(r.get("分类", "")),
            "title": str(r.get("标题", "日常事件")), "text": str(r.get("正文", "")),
            "season": str(r.get("季节条件", "")), "weather": str(r.get("天气条件", "")),
            "month": str(r.get("月份条件", "")), "minYear": int(num(r.get("最早年份"), 0)),
            "firstYear": yes(r.get("仅第一年")), "project": str(r.get("前置项目ID", "")),
            "anyProject": str(r.get("任一前置项目ID", "")), "weight": max(0, num(r.get("出现权重"), 100)),
            "once": yes(r.get("是否一次性")), "enabled": True,
        })
    event_rows = records(sheets.get("季度事件", []), "事件ID")
    events = []
    for r in event_rows:
        if not yes(r.get("启用")) or num(r.get("出现权重")) <= 0:
            continue
        events.append({
            "id": str(r["事件ID"]), "title": str(r.get("标题", "季度事件")), "condition": str(r.get("触发条件", "始终")),
            "weight": num(r.get("出现权重")), "once": yes(r.get("是否一次性")), "text": str(r.get("日志正文", "")),
            "fund": num(r.get("资金变化_万元")), "stress": num(r.get("压力变化")),
            "relationTarget": str(r.get("好感对象ID", "")), "relation": num(r.get("好感变化")), "project": str(r.get("关联项目ID", "")),
            "eventType": str(r.get("事件类型", "quarter")), "year": int(num(r.get("年份"), 0)),
            "season": str(r.get("季节", "")), "speakerId": str(r.get("说话人ID", "")),
            "speaker": str(r.get("说话人", "")), "choices": parse_json(r.get("选项JSON"), []),
            "missText": str(r.get("未触发文本", "")), "legacyCondition": str(r.get("原版条件", "")),
        })
    time_rows = records(sheets.get("经营时间序列", []), "年月")
    time_series = []
    fields = {
        "产能_万件年":"capacity", "国内销量_万件月":"domVolume", "国内单价_元件":"domPrice",
        "大客户销量_万件月":"keyVolume", "大客户单价_元件":"keyPrice", "出口销量_万件月":"expVolume", "出口单价_元件":"expPrice",
        "材料单位成本_元件":"materialUnit", "变动人工单位成本_元件":"laborVariableUnit", "固定人工_万元月":"laborFixedMonthly",
        "用电量_万kWh月":"electricityVolume", "电价_元kWh":"electricityPrice", "用气量_万m3月":"gasVolume", "气价_元m3":"gasPrice",
        "维护费_万元月":"maintenanceMonthly", "固定经营费_万元月":"fixedMonthly", "融资费_万元月":"financeMonthly",
        "所得税率":"taxRate", "上缴比例":"payoutRate",
        "经营收入_万元":"rev", "材料成本_万元":"mat", "人工成本_万元":"lab", "能源成本_万元":"eng",
        "经营总成本_万元":"cost", "所得税_万元":"tax", "净利润_万元":"net", "上缴集团_万元":"payout",
        "经营现金流_万元":"keep",
    }
    for r in time_rows:
        if not yes(r.get("启用")):
            continue
        item = {"period": str(r["年月"])}
        for source, target in fields.items():
            value = optional_num(r.get(source))
            if value is not None:
                item[target] = value
        time_series.append(item)
    cg_rows = records(sheets.get("CG配置", []), "CG_ID")
    cgs = []
    for r in cg_rows:
        if not yes(r.get("启用")):
            continue
        cgs.append({
            "id": str(r.get("CG_ID", "")), "person": str(r.get("人物ID", "")),
            "personName": str(r.get("人物名称", "")), "category": str(r.get("分类", "")),
            "threshold": int(num(r.get("解锁阈值"))), "title": str(r.get("CG标题", "")),
            "trigger": str(r.get("触发条件", "")), "scene": str(r.get("画面说明", "")),
            "story": str(r.get("剧情正文", "")), "gallery": str(r.get("图鉴文字", "")),
            "variants": str(r.get("分支替换文案", "")),
            "text": str(r.get("图鉴文字", r.get("CG说明文字", ""))),
            "image": str(r.get("图片文件名", "")), "enabled": True,
        })
    formula_rows = records(sheets.get("公式规则", []), "规则ID")
    formula_version = next((str(r.get("公式版本")) for r in formula_rows if r.get("公式版本")), "GF-OPERATING-1")
    project_formula_version = next((str(r.get("公式版本")) for r in formula_rows if str(r.get("规则ID", "")) == "F12"), "GF-PROJECT-3")
    event_formula_version = next((str(r.get("公式版本")) for r in formula_rows if str(r.get("规则ID", "")) == "F13"), "GF-EVENT-1")
    config = {"version": "xlsx-admin-v9-year-events", "formulaVersion": formula_version, "projectFormulaVersion": project_formula_version, "eventFormulaVersion": event_formula_version, "params": params, "projects": projects, "actions": actions, "dailyEvents": daily_events, "events": events, "timeSeries": time_series, "cgs": cgs}
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text("window.GAME_ADMIN_CONFIG = " + json.dumps(config, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"已更新：{OUTPUT}")
    print(f"读取项目 {len(projects)} 个、行动 {len(actions)} 条、启用日常事件 {len(daily_events)} 条、启用季度事件 {len(events)} 条、启用经营月份 {len(time_series)} 个、启用CG {len(cgs)} 个。")


if __name__ == "__main__":
    main()

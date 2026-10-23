window.GAME_ADMIN_CONFIG = {
  "version": "xlsx-admin-v9-year-events",
  "formulaVersion": "GF-OPERATING-1",
  "projectFormulaVersion": "GF-PROJECT-3",
  "eventFormulaVersion": "GF-EVENT-1",
  "params": {
    "startFund": 520,
    "startCapacity": 120,
    "startStress": 20,
    "freeActionsPerQuarter": 3,
    "idleStress": -10,
    "quarterProjectStress": 5,
    "quarterHolidayStress": -15,
    "dailyQuarterNoneRate": 20,
    "dailyQuarterOneRate": 65,
    "dailyQuarterTwoRate": 15,
    "rainSpring": 0.35,
    "rainSummer": 0.45,
    "rainAutumn": 0.25,
    "rainWinter": 0.15,
    "matCost": 44,
    "laborFix": 900,
    "laborVar": 5.5,
    "hireSalary": 38,
    "fixCost": 500,
    "maintBase": 400,
    "taxRate": 0.25,
    "payout": 0.4,
    "loanRate": 0.08,
    "pE": 0.65,
    "pG": 3.5,
    "pSell": 0.38,
    "ppaPrem": 0.08,
    "ppaPremInc": 0.006,
    "ppaFullFactor": 1.36,
    "gecPrice": 0.03,
    "essGain": 45,
    "emsSave": 0.012,
    "isoMaint": 6,
    "expFee": 8,
    "inflationRate": 0.02,
    "greenLoanPrincipal": 400,
    "greenLoanYears": 8,
    "loanAnnualPayment": 62,
    "price_dom": 92,
    "price_key": 108,
    "price_exp": 130,
    "demand_dom": 95,
    "demand_key": 35,
    "demand_exp": 40,
    "cap0": 120,
    "elecPer": 16.667,
    "gasPer": 1.1111,
    "EF_E": 6.096,
    "EF_G": 21.6,
    "refrig": 230,
    "forklift": 150,
    "pvGen": 200,
    "pvSu": 0.8,
    "pvSuEss": 0.95,
    "ppaCover0": 0.7,
    "yearEventChance": 0.5
  },
  "projects": [
    {
      "id": "idle",
      "cost": 0.0,
      "months": 0,
      "max": 999,
      "benefitMode": "complete",
      "repeatable": true,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "line2",
      "cost": 850.0,
      "months": 12,
      "max": 2,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "hire",
      "cost": 15.0,
      "months": 0,
      "max": 2,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "auto",
      "cost": 600.0,
      "months": 12,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "iso9",
      "cost": 55.0,
      "months": 1,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "iso14",
      "cost": 65.0,
      "months": 1,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "iso50",
      "cost": 70.0,
      "months": 1,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "credit",
      "cost": 0.0,
      "months": 0,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "brand",
      "cost": 120.0,
      "months": 0,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "digital",
      "cost": 160.0,
      "months": 3,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "fake",
      "cost": 8.0,
      "months": 0,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "motor",
      "cost": 180.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "energy",
      "cost": 150.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "boiler",
      "cost": 340.0,
      "months": 12,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "solar",
      "cost": 430.0,
      "months": 6,
      "max": 3,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "storage",
      "cost": 240.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "greenPower",
      "cost": 180.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "ppa2",
      "cost": 120.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "gec",
      "cost": 0.0,
      "months": 0,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "water",
      "cost": 90.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "reuse",
      "cost": 130.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "waste",
      "cost": 60.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "material",
      "cost": 70.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "process",
      "cost": 260.0,
      "months": 12,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "pollution",
      "cost": 140.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "design",
      "cost": 50.0,
      "months": 6,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "cfp",
      "cost": 60.0,
      "months": 6,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "effp",
      "cost": 120.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "supplier",
      "cost": 150.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "land",
      "cost": 200.0,
      "months": 6,
      "max": 1,
      "benefitMode": "linear",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "apply",
      "cost": 0.0,
      "months": 0,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "bribe",
      "cost": 90.0,
      "months": 0,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": false,
      "enabled": true
    },
    {
      "id": "cert",
      "cost": 0.0,
      "months": 0,
      "max": 1,
      "benefitMode": "complete",
      "repeatable": false,
      "dynamicCost": true,
      "enabled": true
    }
  ],
  "actions": {
    "idle_month": {
      "text": "这个月不启动新项目，维持日常生产经营。",
      "stress": -10.0,
      "relation": 0.0,
      "weight": 100.0,
      "enabled": true
    },
    "walk": {
      "text": "沿厂区走了一圈，头脑清醒了一些。",
      "stress": -10.0,
      "relation": 0.0,
      "weight": 100.0,
      "enabled": true
    },
    "meeting_speak": {
      "text": "临时被点名发言，会议结束后仍有些紧绷。",
      "stress": 8.0,
      "relation": 0.0,
      "weight": 50.0,
      "enabled": true
    },
    "meeting_listen": {
      "text": "以旁听为主，理清了接下来的工作。",
      "stress": -5.0,
      "relation": 0.0,
      "weight": 50.0,
      "enabled": true
    },
    "chat_leader": {
      "text": "分管领导问了问这个季度的经营重点，也提醒要把项目节奏讲清楚。",
      "stress": 5.0,
      "relation": 5.0,
      "weight": 100.0,
      "enabled": true
    },
    "chat_subordinate_unfamiliar": {
      "text": "聊了聊近期工作与现场情况。",
      "stress": 5.0,
      "relation": 5.0,
      "weight": 100.0,
      "enabled": true
    },
    "chat_subordinate_familiar": {
      "text": "聊了聊近期工作与现场情况。",
      "stress": -8.0,
      "relation": 5.0,
      "weight": 100.0,
      "enabled": true
    },
    "quarter_project": {
      "text": "这个季度的项目推进带来额外压力。",
      "stress": 5.0,
      "relation": 0.0,
      "weight": 100.0,
      "enabled": true
    },
    "quarter_holiday": {
      "text": "小长假让身心得到休息。",
      "stress": -15.0,
      "relation": 0.0,
      "weight": 100.0,
      "enabled": true
    }
  },
  "dailyEvents": [
    {
      "id": "A01",
      "category": "厂区的四季",
      "title": "门口的花",
      "text": "门卫室旁边的花开了。你路过时才发现，原来那片不起眼的角落已经热闹了好几天。",
      "season": "春季",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "A02",
      "category": "厂区的四季",
      "title": "一场春雨",
      "text": "雨后的厂区有一股湿润的泥土味。几只麻雀在屋檐下跳来跳去，似乎比工人们还着急开工。",
      "season": "春季",
      "weather": "雨天或雨后",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 145.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "A03",
      "category": "厂区的四季",
      "title": "夏天的柏油路",
      "text": "午后的阳光把厂区道路晒得发亮。远远望过去，路面上的空气似乎也在轻轻晃动。",
      "season": "夏季",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "A04",
      "category": "厂区的四季",
      "title": "雨停了",
      "text": "一场大雨刚刚过去，厂区的水洼里倒映着仓库的屋顶。有人经过时特意绕开了它，也有人一脚踩了进去。",
      "season": "",
      "weather": "雨天或雨后",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 140.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "A05",
      "category": "厂区的四季",
      "title": "第一片黄叶",
      "text": "办公楼外的树开始落叶了。你发现这件事，是因为有一片叶子正好落在了车前挡风玻璃上。",
      "season": "秋季",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "A06",
      "category": "厂区的四季",
      "title": "窗外的风",
      "text": "今天的风很大，办公室窗外的树枝一直晃个不停。下午开会时，有人忍不住朝窗外看了好几次。",
      "season": "秋季",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "A07",
      "category": "厂区的四季",
      "title": "冬天的早晨",
      "text": "早班员工陆续走进厂区，有人把双手揣进口袋，有人端着还冒热气的早餐。新的一天就在这样的寒冷里开始了。",
      "season": "冬季",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "A08",
      "category": "厂区的四季",
      "title": "天黑得早了",
      "text": "下班时，天已经暗了。办公楼和车间的灯一盏盏亮着，工厂看起来和平时有些不一样。",
      "season": "秋冬",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B01",
      "category": "生产线旁",
      "title": "熟悉的声音",
      "text": "你经过车间时，刘师傅正听着一台设备运转。他说机器开久了，哪怕不看仪表，也能听出和平时有什么不同。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B02",
      "category": "生产线旁",
      "title": "工具抽屉",
      "text": "陈工打开工具柜，里面的工具排得整整齐齐。他说倒不是有什么讲究，只是找不到工具的时候真的很耽误事。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B03",
      "category": "生产线旁",
      "title": "交接班",
      "text": "交接班记录本又写满了一页。有人的字工整得像打印出来的，有人的字则需要同班组的人才能认出来。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B04",
      "category": "生产线旁",
      "title": "最后一件产品",
      "text": "今天一批订单完成了最后一道工序。负责检验的员工在记录上画了一个小小的勾，然后准备迎接下一批产品。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B05",
      "category": "生产线旁",
      "title": "新人的笔记",
      "text": "新来的员工随身带着一个巴掌大的本子，上面记满了设备编号和操作要点。他说记性不太好，多写几遍总不会错。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B06",
      "category": "生产线旁",
      "title": "保养日",
      "text": "今天有几台设备按计划停机保养。车间里少了熟悉的机器声，反倒让人一时有些不习惯。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B07",
      "category": "生产线旁",
      "title": "换班时间",
      "text": "换班前的几分钟，大家陆续在指定区域整理工具、核对记录。上一班的人准备回家，下一班的人刚刚开始一天的工作。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "B08",
      "category": "生产线旁",
      "title": "师傅的习惯",
      "text": "刘师傅每次完成检查，都会把用过的笔放回同一个位置。有人问他为什么，他想了想，说大概是怕自己忘记了。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C01",
      "category": "熟悉的人",
      "title": "陈工的图纸",
      "text": "陈工又在一张图纸边上写满了注释。你问他是不是还有问题没解决，他说：“问题倒不大，就是还能再改改。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C02",
      "category": "熟悉的人",
      "title": "林经理的数字",
      "text": "林经理拿着计算器核对报表，同一个数字算了三遍。你问她是不是不相信电脑，她说：“我是不相信自己第一遍没按错。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C03",
      "category": "熟悉的人",
      "title": "周经理的电话",
      "text": "周经理刚结束一通客户电话，转头又接起了下一通。他把手机放下时长舒了一口气：“今天已经解释同一个问题四遍了。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C04",
      "category": "熟悉的人",
      "title": "刘师傅的照片",
      "text": "刘师傅在休息时翻出一张旧合照，照片里的人都穿着多年前的工作服。他指着其中一个年轻人说：“这个是我，那时候头发还挺多。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C05",
      "category": "熟悉的人",
      "title": "来自集团的消息",
      "text": "王经理发来消息，问工厂最近怎么样。你还在想应该怎么回答，下一条消息已经到了：“不用写得像汇报，简单说说就行。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C06",
      "category": "熟悉的人",
      "title": "记住名字",
      "text": "今天有位员工在走廊里向你打招呼。你想了半天才记起他的名字，幸好对方并没有发现你刚才那一瞬间的迟疑。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C07",
      "category": "熟悉的人",
      "title": "多出来的一份",
      "text": "会议结束后，有人在桌上留下了一份整理好的记录。你不知道是谁放的，但最重要的几个待办事项已经被画上了圈。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "C08",
      "category": "熟悉的人",
      "title": "楼梯间的闲聊",
      "text": "你在楼梯间遇见两位同事，正聊着周末要不要出去走走。看到你之后，他们自然地打了声招呼，又继续讨论天气预报。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D01",
      "category": "食堂与公共空间",
      "title": "今天吃什么",
      "text": "食堂今天的菜谱刚贴出来，就有人站在前面研究了半天。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D02",
      "category": "食堂与公共空间",
      "title": "最后一块西瓜",
      "text": "食堂午餐后准备了一些西瓜。最后一块在餐盘里放了好一会儿，谁路过都说让给别人，最后还是被食堂阿姨收走了。",
      "season": "夏季",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D03",
      "category": "食堂与公共空间",
      "title": "公告栏",
      "text": "公告栏上又多了一张通知，贴得稍微有点歪。第二天再经过时，你发现它已经被人重新贴正了。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D04",
      "category": "食堂与公共空间",
      "title": "失物招领",
      "text": "门卫室的失物招领处多了一把折叠伞，旁边还有一只没人认领的手套。门卫说，这些东西总会有人记起来的。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D05",
      "category": "食堂与公共空间",
      "title": "食堂阿姨",
      "text": "今天食堂阿姨问你最近是不是很忙。你还没来得及回答，她已经多给你盛了一勺菜：“看你这几天吃得少。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D06",
      "category": "食堂与公共空间",
      "title": "午后的休息区",
      "text": "午休时间，休息区难得安静下来。有人靠着椅背闭目养神，有人戴着耳机听歌，偶尔传来翻书的声音。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D07",
      "category": "食堂与公共空间",
      "title": "雨伞架",
      "text": "办公楼门口的伞架突然变得拥挤。下午雨停后，大家又陆续把自己的伞领走，剩下了几把颜色几乎一样的黑伞。",
      "season": "",
      "weather": "雨天或雨后",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 140.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "D08",
      "category": "食堂与公共空间",
      "title": "一张生日卡",
      "text": "休息区的桌上放着一张写满签名的生日卡。没有盛大的庆祝仪式，只是有人记得今天是谁的生日。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E01",
      "category": "围墙外的世界",
      "title": "早餐摊",
      "text": "厂门口的早餐摊今天来得特别早。你经过时，摊主已经能叫出好几位员工的名字，甚至知道他们平时吃什么。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E02",
      "category": "围墙外的世界",
      "title": "等车的人",
      "text": "下班时，公交站旁站着几个熟悉的身影。大家都低头看着手机，直到公交车从路口转过来，才一起抬起头。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E03",
      "category": "围墙外的世界",
      "title": "司机的路线",
      "text": "送货司机说，来厂里的这条路他已经跑了好几年。有时候导航还在提示转弯，他就已经知道前面哪个路口容易堵车。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E04",
      "category": "围墙外的世界",
      "title": "隔壁工厂",
      "text": "隔壁厂区传来了施工的声音，听说他们最近正在改造一栋老厂房。门卫和司机们已经讨论了好几天，猜测那边究竟要做什么。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E05",
      "category": "围墙外的世界",
      "title": "水果摊",
      "text": "路边的水果摊换上了当季的水果。你经过时听见摊主招呼熟客：“今天这个比上周的甜。”",
      "season": "夏秋",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 130.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E06",
      "category": "围墙外的世界",
      "title": "街角的小店",
      "text": "厂区附近那家经营多年的小店换了新招牌。老板还是原来的老板，只是门口的招牌看起来亮堂了不少。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E07",
      "category": "围墙外的世界",
      "title": "放学时间",
      "text": "下午经过工厂外的路口时，正好遇上附近学校放学。几名学生背着书包从人行道走过，叽叽喳喳地讨论着明天的考试。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "E08",
      "category": "围墙外的世界",
      "title": "回家的路",
      "text": "今天你比平时早了一点离开工厂。路边的店铺还没有打烊，天也没有完全黑下来，你突然发现这条路其实挺热闹的。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F01",
      "category": "厂长自己的日常",
      "title": "桌上的文件",
      "text": "你整理办公桌时发现一份找了两天的文件。它就夹在最常用的文件夹里，偏偏之前翻了好几遍都没看见。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F02",
      "category": "厂长自己的日常",
      "title": "第一声厂长",
      "text": "今天有人在走廊里喊了一声“厂长”，你过了半秒才反应过来是在叫自己。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": true,
      "project": "",
      "anyProject": "",
      "weight": 180.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F03",
      "category": "厂长自己的日常",
      "title": "会议结束之后",
      "text": "今天最后一场会议结束得比预想中早。你坐在办公室里，一时竟然有点不知道该先做什么。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F04",
      "category": "厂长自己的日常",
      "title": "便签纸",
      "text": "显示器旁边的便签越贴越多，颜色也越来越杂。你决定认真整理一次，结果发现其中三张写的是同一件事。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F05",
      "category": "厂长自己的日常",
      "title": "窗外的灯",
      "text": "傍晚，你抬头看见车间的灯已经亮了。你还没有完成手头的工作，但至少今天最棘手的几件事已经有了眉目。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F06",
      "category": "厂长自己的日常",
      "title": "写错的日期",
      "text": "你在文件上写下日期，才发现月份已经变了。把数字划掉重写时，你突然觉得上个月过得实在太快。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F07",
      "category": "厂长自己的日常",
      "title": "没响的电话",
      "text": "今天下午，办公室电话难得安静了很久。你甚至看了一眼手机，确认不是自己错过了什么消息。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "F08",
      "category": "厂长自己的日常",
      "title": "锁门之前",
      "text": "离开办公室前，你又回头看了一眼桌上的文件。明天还有不少事情要做，不过今天可以先到这里了。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G01",
      "category": "小意外与幽默",
      "title": "神秘的订书机",
      "text": "办公室那台总也找不到的订书机终于出现了，就放在打印机旁边。至于它之前去了哪里，至今没有人承认。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G02",
      "category": "小意外与幽默",
      "title": "同名文件",
      "text": "有人把《最终版》发到了群里，随后又发来《最终版2》。十分钟后，群里出现了《最终版_这次真的是最终版》。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G03",
      "category": "小意外与幽默",
      "title": "错误的会议室",
      "text": "你推开会议室的门，发现里面的人齐刷刷地看向自己。确认过会议主题后，你默默退了出去——原来走错了楼层。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G04",
      "category": "小意外与幽默",
      "title": "神奇的打印机",
      "text": "打印机今天连续卡了三次纸，维修人员到场后却运转得格外顺畅。站在旁边的同事小声说：“它可能就是想见你。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G05",
      "category": "小意外与幽默",
      "title": "表情包",
      "text": "工作群里有人发错了一张表情包，又迅速撤回。但根据随后几分钟突然活跃起来的聊天记录判断，应该有不少人已经看到了。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G06",
      "category": "小意外与幽默",
      "title": "消失的笔",
      "text": "你在办公室找了半天自己的签字笔，最后发现它一直夹在手中的笔记本上。还好没有人注意到。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G07",
      "category": "小意外与幽默",
      "title": "临时改名",
      "text": "会议室门外的预约牌出了点问题，把“生产协调会”显示成了“生产协商会”。参会的同事看了一眼，说：“也没什么区别。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "G08",
      "category": "小意外与幽默",
      "title": "集体认错",
      "text": "几位同事从远处看见一个穿着相似衬衫的人，纷纷喊了声“厂长”。直到那人转过身，大家才发现只是隔壁部门来送货的工作人员。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H01",
      "category": "绿色改变的痕迹",
      "title": "最后一个关灯的人",
      "text": "你经过一间刚结束会议的办公室，发现最后离开的人顺手关掉了灯。这个动作很普通，普通到几乎不会有人特别注意。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H02",
      "category": "绿色改变的痕迹",
      "title": "重新贴好的标识",
      "text": "车间的用水设施旁新贴了一张提醒标识。过了几天，你发现有人用透明胶带把翘起来的边角重新粘好了。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H03",
      "category": "绿色改变的痕迹",
      "title": "纸箱的第二次使用",
      "text": "仓库员工把一批完好、符合复用要求的纸箱留了下来，准备用于内部物料周转。箱子上原来的标签已经被仔细去除。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H04",
      "category": "绿色改变的痕迹",
      "title": "数字的变化",
      "text": "陈工指着新整理的能源使用记录，告诉你有几个车间的数据与上个月不太一样。他已经记下来，准备再看看究竟是什么原因。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "digital",
      "anyProject": "",
      "weight": 180.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H05",
      "category": "绿色改变的痕迹",
      "title": "换下来的灯",
      "text": "仓库一角放着刚换下来的旧灯具，等待按规定分类处置。走进改造后的车间，有员工说：“现在看东西确实清楚些了。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "lighting",
      "anyProject": "",
      "weight": 180.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H06",
      "category": "绿色改变的痕迹",
      "title": "屋顶上的新东西",
      "text": "厂区的屋顶和以前不一样了。今天有人在楼下抬头看了好一会儿，才想起自己已经有几天没注意过那些新装的光伏板。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "solar",
      "anyProject": "",
      "weight": 180.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H07",
      "category": "绿色改变的痕迹",
      "title": "分类的习惯",
      "text": "新设置的废弃物分类区前，有位员工停下来确认标识。想清楚该放在哪里之后，他才把手里的东西投进去。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "waste",
      "anyProject": "",
      "weight": 180.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "H08",
      "category": "绿色改变的痕迹",
      "title": "一张旧记录",
      "text": "整理改造资料时，陈工翻出了一张几年前的设备运行记录。他把新旧两张表并排放在一起，准备对照一下变化。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "motor|energy|boiler|auto|process",
      "weight": 180.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I01",
      "category": "时间与人来人往",
      "title": "新年日历",
      "text": "办公室的日历又换了一本。你把旧日历拿下来时，发现上面还记着一些已经完成、也有一些来不及完成的事。",
      "season": "",
      "weather": "",
      "month": "1",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 170.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I02",
      "category": "时间与人来人往",
      "title": "春节前的行李",
      "text": "临近春节，有些同事开始讨论回家的车票。休息区里多了不少关于天气、行李和家乡年夜饭的话题。",
      "season": "",
      "weather": "",
      "month": "1-2",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 150.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I03",
      "category": "时间与人来人往",
      "title": "新来的同事",
      "text": "今天有几位新员工来办理入职手续。他们站在厂区示意图前认真研究，看起来和当初第一次走进这里的你有些相似。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I04",
      "category": "时间与人来人往",
      "title": "一封告别邮件",
      "text": "一位同事即将离开工厂，发来一封简短的告别邮件。邮件最后写着：“以后有机会路过，我会回来看看。”",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 100.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I05",
      "category": "时间与人来人往",
      "title": "老照片",
      "text": "宣传栏上翻出了一张几年前的厂区照片。你盯着看了很久，才发现照片里那栋已经习以为常的建筑，当时还没有重新粉刷。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 3,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 150.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I06",
      "category": "时间与人来人往",
      "title": "又一个夏天",
      "text": "蝉鸣又一次从办公楼外传来。你忽然想起刚来工厂时，也曾在同样闷热的下午坐在这间办公室里看报表。",
      "season": "夏季",
      "weather": "",
      "month": "",
      "minYear": 3,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 160.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I07",
      "category": "时间与人来人往",
      "title": "换了好几支笔",
      "text": "整理抽屉时，你翻出一支早就写不出字的旧笔。想了半天才记起来，它好像是自己刚上任那年用的。",
      "season": "",
      "weather": "",
      "month": "",
      "minYear": 5,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 170.0,
      "once": true,
      "enabled": true
    },
    {
      "id": "I08",
      "category": "时间与人来人往",
      "title": "年末的灯",
      "text": "又到了一年的最后一个工作月。傍晚离开办公楼时，你看见车间、仓库和门卫室的灯依旧亮着，和平常一样。",
      "season": "",
      "weather": "",
      "month": "12",
      "minYear": 0,
      "firstYear": false,
      "project": "",
      "anyProject": "",
      "weight": 170.0,
      "once": true,
      "enabled": true
    }
  ],
  "events": [
    {
      "id": "GF15_Y01_SPRING_001",
      "title": "一号线电机烧了",
      "condition": "第1年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，一号线的电机又烧了。修一修还能转，可它吃电吃得凶。换新的要二十五万，而且得停线三天。后天那批货要交，您看着办。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 1,
      "season": "春",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "先修，货要紧",
          "hint": "花 8 万 · 当天复产 · 老周松口气",
          "result": "电机连夜拆下来，第二天中午一号线重新转起来，声音还是那么响。货按时出了。当月电费单来的时候，老赵看了一眼，没说话。",
          "effects": {
            "money": -8,
            "aff": {
              "zhou": 2,
              "chen": -1
            }
          }
        },
        {
          "id": "2",
          "text": "换新的，停三天也认了",
          "hint": "花 25 万 · 这批货要延期",
          "result": "客户在电话里发了火，最后同意延三天，但下一批订单转给了对门的宏远厂。新电机装好那周，陈工每天下班前去抄一次表——比老的省了将近一成。省下的电费，要两年才补得回丢掉的那批单。",
          "effects": {
            "money": -25,
            "orders": -7,
            "smoke": -4,
            "rival": 5,
            "aff": {
              "chen": 3,
              "zhou": -1,
              "zhao": -2
            },
            "flag": "motor",
            "fac": {
              "power": 1
            }
          }
        },
        {
          "id": "3",
          "text": "先修着，年底再换",
          "hint": "花 8 万 · 把选择推给未来的自己",
          "result": "你在本子上写下\"年底换电机\"。这个本子后来又记了很多类似的事。年底盘账的时候，这一条被划掉了——那年年底有更急的事。",
          "effects": {
            "money": -8,
            "smoke": 1,
            "aff": {
              "zhou": 1,
              "chen": -2
            }
          }
        }
      ],
      "missText": "电机一直没修利索，那两个月三天两头停机，交期一延再延。老周自己带人凑合修了三次，没跟你提第四次。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y01_AUTUMN_002",
      "title": "一笔压价的急单",
      "condition": "第1年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "有笔急单，量不小，但价压到了成本线上。宏远厂也在抢。接，这季度现金流就活了；不接，年底的账难看，明年集团给的额度也跟着缩。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 1,
      "season": "秋",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "接，先把现金流转起来",
          "hint": "钱多了 · 人要连轴转两个月",
          "result": "那两个月，三车间的灯一直亮到十一点。单子交了，钱进来了。老周说：\"钱是挣到了，人也快熬干了。\"年后走了两个人。",
          "effects": {
            "money": 32,
            "orders": 6,
            "morale": -8,
            "smoke": 3,
            "group": 6,
            "rival": -4,
            "aff": {
              "zhao": 2,
              "zhou": -2
            },
            "flag": "ord_take"
          }
        },
        {
          "id": "2",
          "text": "不接，这种价没意义",
          "hint": "老周赞成 · 集团那边不好交代",
          "result": "宏远厂接了，他们厂长在行业群里发了张加班的照片，配文\"感谢客户信任\"。年底集团经营分析会上，你的产能利用率排在后面，马副总问了句\"你们的产线是不是有点闲\"。",
          "effects": {
            "money": -4,
            "orders": -6,
            "morale": 4,
            "group": -8,
            "rival": 8,
            "aff": {
              "zhao": -2,
              "zhou": 3
            },
            "flag": "ord_refuse"
          }
        },
        {
          "id": "3",
          "text": "谈：价格照给，交期放宽",
          "hint": "要么谈成，要么谈崩",
          "result": "林薇跑了三趟。客户同意分两批交货，条件是账期拉到九十天。少赚，还压资金，但车间没有加班到半夜。她回来说：\"客户其实没那么难说话，是我们自己不敢开口。\"",
          "effects": {
            "money": 14,
            "orders": 4,
            "morale": 1,
            "group": 1,
            "aff": {
              "lin": 3,
              "zhao": -1
            },
            "flag": "ord_nego"
          }
        }
      ],
      "missText": "你没顾上表态，林薇按老规矩报了价，客户转头给了宏远。这种单子丢了不心疼，但老赵那本账上，这个季度是空的。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y02_SPRING_003",
      "title": "老赵问：这厂靠什么吃饭",
      "condition": "第2年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，来了快一年了，有句话我得问。这个厂到底靠什么吃饭？报价再低总有人比我们低，技术又比不过南方那几家。想清楚这个，我才知道每一笔钱该往哪儿批。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 2,
      "season": "春",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "靠成本：谁也别想比我们便宜",
          "hint": "接得多、赚得薄 · 绿色投入回本最慢",
          "result": "方向定了。往后几年，凡是能压的都压：采购比价、工时定额、能耗指标。老赵如鱼得水，报表越来越干净。但林薇提醒过一句：\"走这条路，客户永远只跟你谈价格，别的什么都不会跟你谈。\"",
          "effects": {
            "money": 20,
            "orders": 6,
            "morale": -2,
            "aff": {
              "zhao": 4,
              "lin": -2
            },
            "flag": "m_cost"
          }
        },
        {
          "id": "2",
          "text": "靠技术：做别人做不了的活",
          "hint": "前几年会很紧 · 但技改的效果会翻倍",
          "result": "方向定了。陈工听说以后，那天在办公室待到十点。往后你的钱大部分会花在设备和工艺上，账面会难看好几年。老赵说了句实话：\"这条路要是走成了，我们就不用天天跟人吵价钱；走不成，我们就死在半路上。\"",
          "effects": {
            "money": -15,
            "tech": 14,
            "aff": {
              "chen": 5,
              "zhao": -2
            },
            "flag": "m_tech"
          }
        },
        {
          "id": "3",
          "text": "靠客户：把牌子和口碑做起来",
          "hint": "要持续投合规和品牌 · 名声就是订单",
          "result": "方向定了。往后你会在认证、审核、宣传上花掉很多钱，这些钱短期看都是\"没有产出\"的。林薇很高兴，老赵不太高兴：\"这条路上，你花的每一分钱都要等别人认了才算数。\"",
          "effects": {
            "money": -10,
            "fame": 8,
            "aff": {
              "lin": 5,
              "zhao": -3
            },
            "flag": "m_brand"
          }
        }
      ],
      "missText": "这个问题被搁置了。往后几年每次做预算，老赵都得凭感觉批钱——没有方向的厂，钱花得最散。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y02_SUMMER_004",
      "title": "客户发来一份八页问卷",
      "condition": "第2年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "客户发来一份问卷，八页纸，问我们用不用绿电、一年排多少碳、有没有环保处罚记录。以前从来没人问过这些。宏远厂找了家咨询公司，两周就交上去了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 2,
      "season": "夏",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "随便填填交上去",
          "hint": "省事 · 把问题留到以后",
          "result": "问卷交了上去，大部分栏填的是\"符合相关要求\"。这一轮你留在了名单里。林薇把那份问卷打印出来压在玻璃板下——她说总有一天会再被问到。",
          "effects": {
            "orders": 2,
            "fame": -2,
            "flag": "q_fake",
            "aff": {
              "lin": -2
            }
          }
        },
        {
          "id": "2",
          "text": "照实填，不知道的就写不知道",
          "hint": "这一轮大概率出局",
          "result": "那份问卷一半是空的。三周后短名单公布，你们不在上面，宏远在。但采购回了封私人邮件，只有一句：\"感谢坦诚，两年后我们会复评，届时希望看到变化。\"林薇把邮件转给你，标题是\"两年\"。",
          "effects": {
            "orders": -8,
            "fame": 4,
            "rival": 6,
            "aff": {
              "lin": 3
            },
            "flag": "q_honest"
          }
        },
        {
          "id": "3",
          "text": "也找家咨询公司，做一份漂亮的",
          "hint": "花 6 万 · 好看，但是空的",
          "result": "代填的问卷很专业，图表都是彩色的。林薇翻了两页就合上：\"这上面写我们有能源管理体系。厂长，我们连电表都只有总表一块。\"这份材料留了底，两年后客户来现场时，它还在档案柜里。",
          "effects": {
            "money": -6,
            "orders": 4,
            "fame": 2,
            "flag": "q_fake",
            "aff": {
              "lin": -3,
              "chen": -2
            }
          }
        }
      ],
      "missText": "问卷过了期限没交。三周后短名单公布，你们不在上面。林薇打电话去问，对方说：没收到回复，就当贵司没兴趣。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y02_AUTUMN_005",
      "title": "陈工想装几块电表",
      "condition": "第2年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "我想在几个大车间装分表，六万块。现在全厂就一块总表，每个月电费单来了，我只能告诉您花了多少钱，说不清是哪儿花的。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 2,
      "season": "秋",
      "speakerId": "chen",
      "speaker": "陈工",
      "choices": [
        {
          "id": "1",
          "text": "装，我也想知道电花在哪",
          "hint": "花 6 万 · 车间会觉得是在盯着他们",
          "result": "表装上的第二个月，陈工拿着手画的图来找你：空压机房夜里没生产，用电却和白天差不多——管路漏了三年没人发现。补完当月省了一万一。但夜班的人私下嘀咕，说厂里开始查他们的岗了。",
          "effects": {
            "money": -6,
            "smoke": -3,
            "morale": -3,
            "aff": {
              "chen": 4,
              "zhou": -1
            },
            "flag": "meter",
            "fac": {
              "meter": 1
            }
          }
        },
        {
          "id": "2",
          "text": "六万块买几块表，没必要",
          "hint": "省下钱 · 陈工失望",
          "result": "陈工\"哦\"了一声就走了。后来很久他都没再提过建议。你偶尔在下班路上看见他一个人蹲在空压机房门口，拿着本子写写画画。",
          "effects": {
            "aff": {
              "chen": -4
            }
          }
        },
        {
          "id": "3",
          "text": "先装一块，看看有没有用",
          "hint": "花 2 万 · 算是给个机会",
          "result": "一块表装在三车间。数据不多，但足以让陈工发现夜班待机能耗高得离谱。他写了一页纸交上来，最后一行是：\"如果有第二块表，我能找出更多。\"",
          "effects": {
            "money": -2,
            "smoke": -1,
            "aff": {
              "chen": 2
            },
            "flag": "meter1"
          }
        }
      ],
      "missText": "六万块的事你一直没批。陈工后来再没提过，那几个月他一个人蹲在空压机房门口，拿本子写写画画。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y03_SPRING_006",
      "title": "老周私下说：废水的事",
      "condition": "第3年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，废水处理那套设备老了，处理量跟不上，近半年有几次是直接从雨水管走的。没人看见。要治得停线改造，四十万。这话我只跟您一个人说。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 3,
      "season": "春",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "停线改造，该花的钱花",
          "hint": "花 40 万 · 停产两周 · 现在最痛",
          "result": "两周停产，两笔订单延期，客户扣了违约金。改造完那天，老周站在新的调节池边上说：\"这钱花得肉疼，可我这心里踏实了。\"这件事厂里没几个人知道，但知道的人都记住了你是怎么做的。",
          "effects": {
            "money": -40,
            "orders": -8,
            "morale": 4,
            "fame": 2,
            "aff": {
              "zhou": 4,
              "zhao": -2
            },
            "flag": "water_fixed",
            "fac": {
              "water": 1
            }
          }
        },
        {
          "id": "2",
          "text": "先控制排放量，等年底再说",
          "hint": "能拖一阵 · 隐患留着",
          "result": "你让老周把生产排期错开，尽量不超负荷。多数时候没问题，个别赶工的日子还是走了雨水管。这件事没有再被提起，直到很久以后。",
          "effects": {
            "money": -4,
            "risk": 1,
            "aff": {
              "zhou": 1
            },
            "flag": "water_risk"
          }
        },
        {
          "id": "3",
          "text": "这四十万，先给车间换空调和更衣室",
          "hint": "省 40 万 · 工人会很高兴",
          "result": "夏天车间第一次有了空调，更衣室也翻新了，班组的人见你都笑。老周站在新装的柜子前看了很久，说了句\"厂长办了件实事\"，然后补了一句：\"那个口的事，我就不再提了。\"这两句话隔了三秒，中间的那三秒你听懂了。",
          "effects": {
            "morale": 10,
            "risk": 2,
            "aff": {
              "zhou": -3
            },
            "flag": "water_risk"
          }
        }
      ],
      "missText": "你没接这个话头。老周站了几秒，说了句我知道了，转身走了。那半年赶工的日子，废水还是从雨水管走的——只是从此再没人跟你提起。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y03_SUMMER_007",
      "title": "执法人员上门检查",
      "condition": "第3年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "周三早上九点，两辆车停在厂门口。执法人员要看废气排口的在线监测记录、危废转移联单和排污许可证执行报告。老周在你身后小声说：那个柜子的钥匙在谁手里来着？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 3,
      "season": "夏",
      "speakerId": "narr",
      "speaker": "旁白",
      "choices": [
        {
          "id": "1",
          "text": "如实说：有些记录我们没做",
          "hint": "认罚，但态度在",
          "result": "你没有绕。执法人员反倒缓了语气，开了限期整改通知书，罚十五万。临走那位说：\"很多厂到这一步还在找钥匙。你们至少知道自己缺什么。\"整改期三个月，陈工第一次有了正当理由把台账制度建起来。",
          "effects": {
            "money": -15,
            "fame": -3,
            "morale": -2,
            "flag": "fined",
            "aff": {
              "chen": 2
            }
          }
        },
        {
          "id": "2",
          "text": "先带他们去看新装的设备",
          "hint": "拖一拖 · 不解决问题",
          "result": "那位很客气地看完设备，然后说：\"现在可以看台账了吗。\"该查的还是查了，罚了二十万，通报上了市局网站。宏远厂的人当天就在群里转发了那条链接。",
          "effects": {
            "money": -20,
            "fame": -6,
            "morale": -3,
            "rival": 4,
            "flag": "fined"
          }
        },
        {
          "id": "3",
          "text": "先打个电话，看能不能缓一缓",
          "hint": "这一次大概管用 · 以后就说不准了",
          "result": "电话打通了，那边说\"按程序走，我尽量说说\"。当天只开了一份责令改正，罚了五万。事情压下去了，但你欠了一份人情，而且从此厂里管台账的人都知道：查得严不严，是可以打电话的。往后三年，那个柜子的钥匙又不知道在谁手里了。",
          "effects": {
            "money": -5,
            "risk": 2,
            "group": -2,
            "morale": -2,
            "flag": "pulled_string"
          }
        }
      ],
      "missText": "你在外地开会，副手接待的。台账翻到一半就翻不下去了，开了整改通知书，罚二十万。回来后没有人愿意详细跟你讲那天的经过。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y03_AUTUMN_008",
      "title": "有人来谈屋顶光伏",
      "condition": "第3年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "一家做光伏的公司找上门，说你的厂房屋顶两万平米空着可惜。老周插了一句：厂长，那屋顶去年就在漏水，先修还是先铺板子？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 3,
      "season": "秋",
      "speakerId": "narr",
      "speaker": "旁白",
      "choices": [
        {
          "id": "1",
          "text": "连屋顶一起修，自己投",
          "hint": "花 62 万 · 账上会很紧",
          "result": "防水做完才铺的板。并网那天陈工在屋顶待了一下午，傍晚发来一张照片：一整片深蓝色的板子，后面是烧红的云。那年年底账上剩不到五十万，老赵开会时把计算器按得很响。",
          "effects": {
            "money": -62,
            "smoke": -12,
            "morale": 3,
            "aff": {
              "chen": 4,
              "zhao": -2
            },
            "flag": "pv_own",
            "fac": {
              "roof": 1
            }
          }
        },
        {
          "id": "2",
          "text": "租给他们，一分钱不用出",
          "hint": "免费 · 但这些电不算你的",
          "result": "合同签得很顺，二十年后资产归你，用电也便宜了些。屋顶漏水的事对方说不归他们管，你另外花八万补了几处。后来客户来问\"你们自己发多少绿电\"，你才知道租出去的屋顶答不上这道题。",
          "effects": {
            "money": -8,
            "smoke": -5,
            "flag": "pv_lease"
          }
        },
        {
          "id": "3",
          "text": "只修屋顶，板子的事以后再说",
          "hint": "花 12 万 · 车间不漏水了",
          "result": "雨季来的时候，三车间第一次没有接水盆，工人挺高兴。那家光伏公司的人走时留了张名片，说想通了随时联系。名片在抽屉里越压越下面。",
          "effects": {
            "money": -12,
            "morale": 5,
            "aff": {
              "zhou": 2
            }
          }
        }
      ],
      "missText": "你说再研究研究。那家公司的人留了张名片就走了，名片在抽屉里越压越下面。屋顶继续空着，也继续漏水。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y04_SPRING_009",
      "title": "大客户要收窄供应商名单",
      "condition": "第4年·春季",
      "weight": 100.0,
      "once": true,
      "text": "那家大客户要收窄供应商名单，留下来得有绿色工厂或者环境管理体系的资质。四十万，还要整整一年整改，车间要天天配合。宏远厂上个月已经启动了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 4,
      "season": "春",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "做，认认真真做一遍",
          "hint": "花 40 万 · 车间会被折腾一年",
          "result": "那一年厂里到处是人在整理文件、贴标识、补台账。老周嘴上抱怨\"天天搞形式\"，班组怨声载道。但审核那天，是他领着审核员一间间车间走的，每个问题都答得上来。证书下来那天他把复印件贴在了车间门口。",
          "effects": {
            "money": -40,
            "orders": 14,
            "fame": 8,
            "morale": -5,
            "smoke": -4,
            "group": 5,
            "rival": -6,
            "flag": "cert",
            "aff": {
              "lin": 3,
              "zhou": 2
            }
          }
        },
        {
          "id": "2",
          "text": "花钱买个证，别折腾车间",
          "hint": "花 18 万 · 两个月拿证 · 车间照常生产",
          "result": "证书两个月就到了，挂在会议室墙上，很好看。名单保住了，车间一天没停，省下的二十二万和一年工期都实打实。林薇看着那张纸说：\"客户明年要来现场审核。到时候他们不看墙，看车间。\"",
          "effects": {
            "money": -18,
            "orders": 11,
            "fame": 3,
            "morale": 2,
            "risk": 1,
            "flag": "cert_fake",
            "aff": {
              "lin": -2,
              "chen": -2
            }
          }
        },
        {
          "id": "3",
          "text": "不做，这单丢了就丢了",
          "hint": "四成的量",
          "result": "名单公布那天你们不在上面，宏远在。林薇在办公室坐了很久，然后开始一个个打电话找新客户。她没抱怨，但那个季度她瘦了七斤。",
          "effects": {
            "orders": -18,
            "morale": -4,
            "group": -6,
            "rival": 10,
            "aff": {
              "lin": -3
            }
          }
        }
      ],
      "missText": "名单公布那天你们不在上面，宏远在。这件事从头到尾你只在会上听林薇提过一次，当时手上正忙着别的。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y04_AUTUMN_010",
      "title": "涨工资还是买设备",
      "condition": "第4年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，班组三年没涨过工资了。陈工那边说要买套余热回收，也要这个数。钱只够一头。我不替谁说话，就是把话摆上来。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 4,
      "season": "秋",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "先给工人涨",
          "hint": "花 30 万 · 人心",
          "result": "涨薪通知贴出去那天，车间里有人放了挂鞭炮，被老周骂了一顿——厂区不许明火。但他自己笑得比谁都开。陈工的报价单又在抽屉里躺了一年，那年冬天蒸汽锅炉还是照常烧。",
          "effects": {
            "money": -30,
            "morale": 12,
            "smoke": 2,
            "aff": {
              "zhou": 4,
              "chen": -3
            }
          }
        },
        {
          "id": "2",
          "text": "先买设备，工资明年一定涨",
          "hint": "花 30 万 · 欠一句话",
          "result": "余热回收装好，锅炉负荷降了两成，一年省下的煤气钱比设备还贵。陈工很兴奋，老周没说什么，只是那阵子很少再来办公室坐了。你记着自己欠了一句话——这句话要么明年还，要么永远还不上。",
          "effects": {
            "money": -30,
            "smoke": -8,
            "morale": -8,
            "aff": {
              "chen": 4,
              "zhou": -4
            },
            "flag": "heat",
            "fac": {
              "power": 2
            }
          }
        },
        {
          "id": "3",
          "text": "两边各一半",
          "hint": "花 34 万 · 谁都不满意",
          "result": "工资涨了一点，设备买了个小的。老周说\"聊胜于无\"，陈工说\"这个功率不够\"。你发现有些事情是没法折中的，但当时你确实想不出更好的办法。",
          "effects": {
            "money": -34,
            "smoke": -3,
            "morale": 3,
            "aff": {
              "zhou": 1,
              "chen": 1
            }
          }
        }
      ],
      "missText": "两件事都没办。第二年春天走了四个熟练工，陈工的报价单在抽屉里又躺了一年。老周那阵子话很少。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y05_SPRING_011",
      "title": "陈工提出辞职",
      "condition": "第5年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，我想了很久……我打算走了。我来这儿五年，提过十七个方案，做成了三个。不是钱的事，是我看不到这厂有变化。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 5,
      "season": "春",
      "speakerId": "chen",
      "speaker": "陈工",
      "choices": [
        {
          "id": "1",
          "text": "把能源这一摊交给他，直接向我汇报",
          "hint": "他会留 · 老周那边不好交代",
          "result": "你把节能技改的立项权交给了他，还有一间小办公室。他愣了很久，说\"那我再试一年\"。老周知道后没说什么，只是在下一次生产会上当着所有人问：\"以后车间的事，是不是也归陈工管？\"你花了半年才把这件事捋顺。",
          "effects": {
            "morale": 2,
            "aff": {
              "chen": 6,
              "zhou": -3
            },
            "flag": "chen_stay"
          }
        },
        {
          "id": "2",
          "text": "加钱留人",
          "hint": "花 12 万/年 · 治标",
          "result": "他留下了，工资涨了。但那之后很少再提方案，交代什么做什么。有次你路过他办公室，看见他在看别的公司的招聘页面，很快就切走了。",
          "effects": {
            "money": -12,
            "aff": {
              "chen": 1
            },
            "flag": "chen_paid"
          }
        },
        {
          "id": "3",
          "text": "留不住就算了",
          "hint": "他走了",
          "result": "交接花了三天。走的那天他把五年的记录本全留下了，一共十一本，每页都是手写的表格和曲线。最上面一本扉页写着：\"总有一天有人会用得上。\"三个月后你听说，他去了宏远厂。厂里招了个技术员顶上，姓吴，刚毕业两年，人很勤快，只是那十一本记录他要看很久才看得懂。",
          "effects": {
            "smoke": 2,
            "morale": -5,
            "rival": 6,
            "flag": "chen_left"
          }
        }
      ],
      "missText": "你一直没找他谈。三周后他把辞呈放在了你桌上，这次没有再问你的意见。走的那天你在外地。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y05_SUMMER_012",
      "title": "危废合同到期了",
      "condition": "第5年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "危废处置的合同到期了。老单位涨价三成，一年要二十二万。另有一家报价九万，手续说是\"能办下来\"。仓库里那些桶已经堆到走道上了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 5,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "跟老单位续，贵就贵",
          "hint": "花 22 万/年 · 安全",
          "result": "合同续了。每次转移都有联单、有称重、有对方回执。老赵每次签字都要叹口气。这笔钱在报表上一直很扎眼，直到很多年后你才知道它替你挡掉了什么。",
          "effects": {
            "money": -22,
            "aff": {
              "zhao": -1
            },
            "flag": "haz_ok",
            "fac": {
              "waste": 1
            }
          }
        },
        {
          "id": "2",
          "text": "换便宜那家，当天就来拉",
          "hint": "省 13 万 · 走道立刻通了",
          "result": "对方第二天就开车来拉，两趟拉完，堆了半年的桶一次清空，消防隐患也解决了。安全员特意来道了谢。你没问那些桶最后去了哪里，对方也没主动说。这件事就这么过去了——大部分时候，它确实就这么过去了。",
          "effects": {
            "money": -9,
            "morale": 4,
            "risk": 2,
            "flag": "haz_cheap"
          }
        },
        {
          "id": "3",
          "text": "先减量：能不能少产生一点",
          "hint": "花 16 万 改工艺 · 慢，但是根上的办法",
          "result": "〔陈工和老周一起把清洗工序改了|老周带着新来的小吴，照着柜子里那些旧记录把清洗工序改了〕，溶剂用量降了四成，危废产生量跟着降。第二年处置费反而比原来还低。老周说：\"早知道能这么弄，何必年年跟人吵价钱。\"",
          "effects": {
            "money": -16,
            "smoke": -2,
            "aff": {
              "chen": 3,
              "zhou": 2
            },
            "flag": "haz_reduce",
            "fac": {
              "waste": 2
            }
          }
        }
      ],
      "missText": "合同断了两个月，桶越堆越多，最后是采购自己找了家便宜的拉走。手续齐不齐，没人问过。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y05_AUTUMN_013",
      "title": "海外客户要来验厂",
      "condition": "第5年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "海外客户要来验厂。清单提前发了：十二个月用电原始数据、危废联单、员工访谈。不是走过场，他们真的会问一线的班长。三天审核，车间得停一天配合。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 5,
      "season": "秋",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "照单准备，该补的补，该停的停",
          "hint": "花 10 万 · 停一天产",
          "result": "审核组待了三天，真的抽了三车间的班长问：\"你们车间一个月用多少电，你在哪儿能看到？\"班长愣了两秒，转身指了指墙上的看板。审核员点点头，在本子上记了一笔。停产那天的产量，两周后加班补了回来。",
          "effects": {
            "money": -10,
            "orders": 8,
            "fame": 5,
            "smoke": -3,
            "group": 3,
            "flag": "audit_ready"
          }
        },
        {
          "id": "2",
          "text": "临时抱佛脚，不停产",
          "hint": "能过就行",
          "result": "台账是连夜整理的，看板是审核前一天挂上去的。审核员问班长数据在哪看，班长指着看板说\"那儿\"，又补了一句\"上礼拜刚挂的\"。空气安静了两秒。结论是\"有条件通过，一年后复审\"。",
          "effects": {
            "fame": -3,
            "orders": 2,
            "flag": "audit_weak"
          }
        },
        {
          "id": "3",
          "text": "请客户改期，我们没准备好",
          "hint": "诚实 · 机会可能只有一次",
          "result": "林薇打了那个电话，对方沉默几秒，说可以推到明年。她挂了电话跟你说：\"厂长，这是最后一次改期的机会。\"这一年他们没下单，但也没把你从名单上划掉。",
          "effects": {
            "orders": -6,
            "fame": 2,
            "flag": "audit_delay",
            "aff": {
              "lin": 1
            }
          }
        }
      ],
      "missText": "没有专门准备，按平常的样子接待。审核员在车间转了两小时，问了三个问题，班长答了一个。结论是暂不列入合格供应商。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y06_SPRING_014",
      "title": "同行造假被通报，客户来查",
      "condition": "第6年·春季",
      "weight": 100.0,
      "once": true,
      "text": "隔壁市那家厂被通报了，碳数据造假。整个行业的客户都在重新查供应商台账。咱们……经得起查吗？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 6,
      "season": "春",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "经得起，让他们查",
          "hint": "取决于这几年攒的底",
          "result": "核查邮件来了三封，你们逐月回了原始记录。第四封是采购总监亲自写的：\"贵司是这次核查里唯一没有二次索要材料的供应商。\"那个月来了两笔新询价，其中一笔原来是宏远的。",
          "effects": {
            "orders": 12,
            "fame": 8,
            "group": 4,
            "rival": -8,
            "aff": {
              "zhao": 2
            }
          }
        },
        {
          "id": "2",
          "text": "先自查一遍，能补的补上",
          "hint": "花 8 万 · 熬几个通宵",
          "result": "财务和〔陈工|小吴〕那边熬了两周。补的过程中你才发现，有些数据不是不想给，是从来没人记录过。客户勉强过关，但备注栏写了一句\"建议加强原始数据管理\"。这两周之后，厂里第一次有了正式的台账制度。",
          "effects": {
            "money": -8,
            "fame": 1,
            "flag": "ledger"
          }
        },
        {
          "id": "3",
          "text": "能拖就拖，等风头过去",
          "hint": "风头总会过去 · 但名单会记下来",
          "result": "你把回复一拖再拖。风头确实过去了，客户也没再追问。只是第二年的供应商分级里，你们从 A 类掉到了 B 类——通知邮件里没有解释原因。",
          "effects": {
            "orders": -8,
            "fame": -4,
            "group": -3
          }
        }
      ],
      "missText": "客户的核查邮件你让办公室回的，回得含糊。第二年的供应商分级里，你们从 A 类掉到了 B 类，通知邮件没有解释原因。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y06_AUTUMN_015",
      "title": "高温限电，开五停二",
      "condition": "第6年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "今年热得邪门，电网下了有序用电通知，全市工业开五停二。厂长，咱们的单子交期都压着，怎么办？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 6,
      "season": "秋",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "按规定停，跟客户解释",
          "hint": "损失产量 · 讲信用",
          "result": "你亲自给三个客户打电话，能延的延、能调的调。有一家很不高兴，另外两家表示理解。老周说：\"厂长，你这电话打得比赶工强。\"宏远厂那边偷开了几天，被通报了。",
          "effects": {
            "orders": -6,
            "morale": 3,
            "fame": 3,
            "rival": -6
          }
        },
        {
          "id": "2",
          "text": "想办法多开几天",
          "hint": "有风险",
          "result": "托了些关系多开三天。单子交上去了，但月底通报里出现了你们的名字。罚款不多，那条通报却被客户的合规部门看见了，年度评价扣了分。",
          "effects": {
            "money": -8,
            "fame": -6,
            "orders": -3,
            "group": -3,
            "risk": 1,
            "flag": "fined"
          }
        }
      ],
      "missText": "你没有专门处理，车间按通知停了。交期全线延后，有客户在电话里发了很大的火，林薇挨的骂比你多。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y07_SPRING_016",
      "title": "第 7 年春季事件",
      "condition": "第7年·春季",
      "weight": 100.0,
      "once": true,
      "text": "中央生态环境保护督察组进驻本省，为期一个月。本市所有涉危废、涉废水的企业全面自查，随时可能被抽到。老周和〔陈工|小吴〕这两天都没怎么回家。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 7,
      "season": "春",
      "speakerId": "narr",
      "speaker": "旁白",
      "choices": [
        {
          "id": "1",
          "text": "（等消息）",
          "hint": "",
          "result": "",
          "effects": {}
        }
      ],
      "missText": "",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y07_SUMMER_017",
      "title": "马副总要砍掉一个项目",
      "condition": "第7年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "集团今年压降资本性支出，各厂一律砍一个在建项目。我知道你在推技改，也知道那些有用。但我在董事会上要有个能说出口的理由——你给我一个。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 7,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "砍技改，先保生产",
          "hint": "集团满意 · 转型停一年",
          "result": "技改停了，生产照常。年底集团报表上你的成本控制排进前三，马副总在会上点名表扬。只是〔陈工那本方案本子又厚了一层，一个字都没动过。他后来说了句：\"停一年，赶回来要三年。\"|陈工留下的那十一本记录，又在柜子里多待了一年。小吴翻过几次，说看不太懂里面的批注。〕",
          "effects": {
            "money": 22,
            "smoke": 5,
            "group": 10,
            "aff": {
              "chen": -4,
              "zhao": 2
            }
          }
        },
        {
          "id": "2",
          "text": "把客户审核的要求摆出来，让他替我们说话",
          "hint": "需要拿得出东西",
          "result": "你把客户审核清单、认证要求和整改期限整理成两页纸发过去。马副总看完打来电话：\"这个我能拿去说。\"董事会上他替你挡了下来，条件是你要在半年内拿出成效。这不是人情，是弹药。",
          "effects": {
            "money": -10,
            "smoke": -4,
            "group": 4,
            "aff": {
              "ma": 3,
              "chen": 4
            },
            "flag": "held"
          }
        },
        {
          "id": "3",
          "text": "硬顶：技改不能停，理由我说不清但我知道是对的",
          "hint": "顶住 · 他也很难做",
          "result": "你在电话里争了二十分钟。马副总最后说：\"我信你，但我在会上没法这么说。\"技改保住了，代价是他替你担了责任。那年你的成本排名很难看，年中被叫去做了一次专项说明。半年后他来厂里，只问了一句：\"成效呢？\"",
          "effects": {
            "money": -16,
            "smoke": -5,
            "fame": 2,
            "group": -12,
            "aff": {
              "chen": 5,
              "ma": -3
            },
            "flag": "held"
          }
        },
        {
          "id": "4",
          "text": "把方案改小，两头都保一点",
          "hint": "各退一步",
          "result": "项目缩了一半规模报上去，勉强算是执行了集团要求。效果打了折扣，但至少没断。有时候把事情做成的办法不是赢，是让它别死。",
          "effects": {
            "money": 4,
            "smoke": -1,
            "group": 2
          }
        }
      ],
      "missText": "你没有回话。集团直接从名单上划掉了那个金额最大的技改项目，理由栏写着厂方未提出异议。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y07_AUTUMN_018",
      "title": "年度报告的数据怎么报",
      "condition": "第7年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "年度报告要报集团了。咱们的减排数据不好看，宏远报的比我们漂亮一倍。有些口径其实是可以调一调的。集团只看排名。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 7,
      "season": "秋",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "不调，是多少写多少",
          "hint": "排名难看 · 集团会问",
          "result": "报告报上去，排名中游偏后。马副总在电话里问了句\"你们这个数据怎么比宏远差这么多\"，你回：\"因为我们是实测的。\"他沉默几秒说\"知道了\"。那年的评优名单里没有你们。",
          "effects": {
            "fame": 3,
            "group": -6,
            "aff": {
              "zhao": -1
            },
            "flag": "honest_report"
          }
        },
        {
          "id": "2",
          "text": "调一调，跟同行差不多就行",
          "hint": "好看 · 埋下一颗雷",
          "result": "口径调整之后数据一下子体面了。集团年会上你们进了绿色制造标杆名单，马副总很高兴，配套奖励二十万当场落实，年终评优也有了你们的名字。老赵把报告交上去，什么也没说。这件事就这么过去了——大部分时候，它确实就这么过去了。",
          "effects": {
            "money": 20,
            "fame": 6,
            "group": 10,
            "risk": 1,
            "flag": "faked"
          }
        }
      ],
      "missText": "报告是老赵按老口径交的，数字很难看。集团年会上点评了一句个别厂的绿色指标明显落后，虽然没点名。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y08_SPRING_019",
      "title": "老周想退休了",
      "condition": "第8年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，我腰上的老毛病犯了，医生让我别再下车间。我想着，是不是该退了。三车间那帮兄弟，我推荐小刘，他跟了我八年。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 8,
      "season": "春",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "让老周带小刘一年再退",
          "hint": "传下去 · 这一年产能会打折",
          "result": "那一年老周坐在车间办公室里看着小刘跑，把二十六年攒的东西一样样交出去——哪台机器听声音就知道要出事，哪个供应商的料不能收。过渡期磕碰不少，废品率高了一阵。退休那天全车间来送他，他说了三句话就说不下去了。",
          "effects": {
            "money": -10,
            "orders": -4,
            "morale": 9,
            "aff": {
              "zhou": 4
            },
            "flag": "zhou_pass"
          }
        },
        {
          "id": "2",
          "text": "挽留他再干几年",
          "hint": "他会答应 · 但身体扛不住",
          "result": "他答应了，还是每天下车间。第二年冬天在楼梯上滑了一跤，住了三个月院。你去看他，他躺在病床上说的第一句话是\"三车间的电机换了没\"。",
          "effects": {
            "morale": -5,
            "aff": {
              "zhou": 2
            }
          }
        },
        {
          "id": "3",
          "text": "办退休手续，从外面招个厂长助理",
          "hint": "快 · 但断了",
          "result": "新人履历很漂亮，三个月后走了。第二个也没待满半年。车间里的人开始说\"外面来的不懂我们\"。老周那些经验，最后一样都没留下。",
          "effects": {
            "morale": -10,
            "orders": -3,
            "aff": {
              "zhou": -3
            },
            "flag": "zhou_quit"
          }
        }
      ],
      "missText": "你没有正面答复。他又硬撑了一年，冬天在楼梯上滑了一跤，住了三个月院。三车间那半年是散的。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y08_AUTUMN_020",
      "title": "大客户要求独家供货",
      "condition": "第8年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "最大的那家客户提出做独家供应商，量翻倍，但不许再供他们的竞争对手。他们占我们四成，翻倍就是七成。宏远厂去年签了同样的协议。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 8,
      "season": "秋",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "签，把产线填满",
          "hint": "订单大涨 · 命交给一家",
          "result": "产线立刻排满，报表好看得不像话，集团年中通报表扬了你们。庆功宴上林薇喝多了，说了句：\"从今天起，我们的经营计划要看别人的脸色定。\"第二天她说自己喝醉了，不算数。",
          "effects": {
            "orders": 22,
            "money": 20,
            "group": 6,
            "flag": "exclusive",
            "aff": {
              "lin": -1,
              "zhao": 2
            }
          }
        },
        {
          "id": "2",
          "text": "不签，宁可份额小一点",
          "hint": "短期掉量 · 睡得着",
          "result": "那家客户把三成份额转给了同行，但你们也接住了他们竞争对手的单子。林薇说：\"客户名单厚一点，冬天就没那么冷。\"这话第二年冬天应验了——宏远的独家客户砍单，他们空了两条线。",
          "effects": {
            "orders": -6,
            "fame": 2,
            "rival": -8,
            "aff": {
              "lin": 3
            }
          }
        },
        {
          "id": "3",
          "text": "谈条件：要三年承诺和预付款",
          "hint": "手上得有他们换不掉的东西",
          "result": "林薇跑了四趟，拿回来三年最低采购量承诺和一笔预付款。她把合同拍在桌上：\"他们答应了。因为我们现在有他们换不掉的东西。\"那些东西，是你这些年一件件攒下来的。",
          "effects": {
            "orders": 14,
            "money": 32,
            "group": 5,
            "aff": {
              "lin": 5
            },
            "flag": "good_deal"
          }
        }
      ],
      "missText": "你迟迟没有表态。对方等了两个月，把份额分给了别人一半。既没有拿到独家的量，也没有守住多元的客户。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y09_SPRING_021",
      "title": "排污许可证要换证",
      "condition": "第9年·春季",
      "weight": 100.0,
      "once": true,
      "text": "排污许可证下个月到期，换证要核对这五年的排放数据。〔有几个月的在线监测是断的，报表上是补录的|我翻了半个月，有几个月的在线监测是断的。前任留下的批注我也看不太懂〕。审核员会看原始数据。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 9,
      "season": "春",
      "speakerId": "chen",
      "speaker": "陈工",
      "choices": [
        {
          "id": "1",
          "text": "如实申报，把断档的说明清楚",
          "hint": "可能被降类 · 但不留把柄",
          "result": "环保局要求补做一次全项监测和一份说明，多花了十二万，换证晚了一个月。管理类别没降。经办人临走说：\"断档不可怕，可怕的是补得天衣无缝——那才是真要查的。\"〔|小吴把这句话记在了本子第一页。〕",
          "effects": {
            "money": -12,
            "orders": -2,
            "fame": 2,
            "flag": "permit_ok",
            "aff": {
              "chen": 2
            }
          }
        },
        {
          "id": "2",
          "text": "把断档的数据补齐再交",
          "hint": "省 12 万 · 不耽误生产 · 数据是编的",
          "result": "补录的曲线做得很自然，换证一次通过。〔陈工|小吴〕把那份表格存进文件夹，命名是\"最终版-勿动\"。他没说什么，但那天下班走得比平时早。",
          "effects": {
            "money": 6,
            "orders": 3,
            "risk": 2,
            "flag": "permit_fake",
            "aff": {
              "chen": -4
            }
          }
        }
      ],
      "missText": "换证材料是办公室按老数据填的。环保局发现断档，要求补做全项监测并说明，罚了八万，管理类别降了一档。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y09_AUTUMN_022",
      "title": "省媒体要来拍专题",
      "condition": "第9年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "省里的媒体要做绿色制造专题，集团报了两家，你们和宏远。他们只会选一家去拍。你们准备怎么讲这个故事？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 9,
      "season": "秋",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "让他们随便拍，车间也可以进",
          "hint": "敞开 · 万一拍到不该拍的",
          "result": "记者在厂里待了一天，什么都拍了，包括还没整改完的那个角落。最后那张照片是〔#zhou〕站在光伏板下面，安全帽拿在手里。稿子标题叫《一个车间主任的十年》。〔#zhou〕把报纸塑封了挂在家里。宏远那期没播。",
          "effects": {
            "fame": 12,
            "morale": 6,
            "orders": 6,
            "group": 6,
            "rival": -6
          }
        },
        {
          "id": "2",
          "text": "安排好路线，只看做得好的地方",
          "hint": "稳妥",
          "result": "稿子发出来了，四平八稳，像所有那类稿子一样。厂里没人转发。你后来想，如果当时让他们随便走走，会不会不一样。",
          "effects": {
            "fame": 3,
            "group": 2
          }
        },
        {
          "id": "3",
          "text": "让给宏远，我们没什么好讲的",
          "hint": "集团会记住这句话",
          "result": "马副总在电话里停顿很久，说了句\"好，我知道了\"。那期专题拍了宏远，他们厂长在镜头前讲了七分钟。年底集团的资源分配会上，你的名字排在后面。",
          "effects": {
            "fame": -3,
            "group": -8,
            "rival": 8,
            "aff": {
              "ma": -3
            }
          }
        }
      ],
      "missText": "你让办公室对接，走了个流程。那期专题最后拍的是宏远，他们厂长在镜头前讲了七分钟。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y10_SPRING_023",
      "title": "邻居投诉噪声和异味",
      "condition": "第10年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂东墙外新建了一片住宅，去年交房。这个月环保投诉平台上，关于夜间噪声和异味的举报来了十一条。街道办打了电话，语气还算客气。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 10,
      "season": "春",
      "speakerId": "narr",
      "speaker": "旁白",
      "choices": [
        {
          "id": "1",
          "text": "停夜班，白天生产",
          "hint": "产能掉两成 · 投诉会停",
          "result": "夜班停了，投诉也停了。但订单交期开始紧张，有两家客户转了单。老赵算给你看：一年少赚八十万。你说：\"这钱是从人家窗户底下抢的。\"他没接话。",
          "effects": {
            "orders": -10,
            "money": -20,
            "fame": 4,
            "morale": 2,
            "flag": "noise_fixed"
          }
        },
        {
          "id": "2",
          "text": "花钱做隔声和除臭",
          "hint": "花 46 万 · 根上解决",
          "result": "隔声屏和活性炭装置装了三个月。街道办后来把你们厂当成正面案例，在社区会上讲过一次。有位老太太送了面锦旗，上面写着\"还我安宁\"——〔#zhou〕把它挂在了传达室。",
          "effects": {
            "money": -46,
            "fame": 6,
            "morale": 3,
            "smoke": -2,
            "flag": "noise_fixed"
          }
        },
        {
          "id": "3",
          "text": "先跟街道解释，观察一段",
          "hint": "省 46 万 · 夜班照开 · 投诉不会自己消失",
          "result": "你去街道办说明情况，态度诚恳，又送了两台净化器给居委会。投诉少了一阵，夜班一天没停，那笔五十五万留在账上过了个宽裕的冬天。入夏投诉又多起来，有人开始往生态环境部门举报，还拍了视频。这件事没有结束，只是暂时安静。",
          "effects": {
            "money": 10,
            "risk": 2,
            "fame": -3,
            "flag": "noise_risk"
          }
        }
      ],
      "missText": "投诉一直没处理。入夏之后有人往生态环境部门举报，还拍了视频。街道办第三次打电话来时，语气已经不客气了。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y10_AUTUMN_024",
      "title": "一笔要加班两个月的大单",
      "condition": "第10年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "有笔大单，交期只有两个月。要接，车间得连着加两个月的班。厂长，我先说清楚：这单能让今年的数字很好看，集团那边也交代得过去。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 10,
      "season": "秋",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "接，全厂动员",
          "hint": "钱和面子 · 人会很累",
          "result": "两个月，车间的灯几乎没灭过。单子交了，年终奖发得比往年厚，集团通报点了名。但年后走了七个人，其中三个是干了十年以上的老师傅。〔#zhou〕说：\"钱能补，人补不回来。\"",
          "effects": {
            "money": 50,
            "orders": 8,
            "morale": -15,
            "smoke": 5,
            "group": 8
          }
        },
        {
          "id": "2",
          "text": "接一半，另一半推给同行",
          "hint": "少赚 · 人不垮",
          "result": "林薇把一半的量介绍给了另一家小厂，还拿了协调费。客户没有不满，反而觉得你们实在。年后没有人辞职。",
          "effects": {
            "money": 26,
            "orders": 4,
            "morale": 2,
            "aff": {
              "lin": 2
            }
          }
        },
        {
          "id": "3",
          "text": "不接，产能不够就是不够",
          "hint": "放弃",
          "result": "这单被宏远接走。老赵在会上算了笔账，说够全厂两个月的利润。你说：\"算不进去的是那七个人。\"他没再说话。",
          "effects": {
            "orders": -4,
            "morale": 7,
            "rival": 6,
            "group": -4
          }
        }
      ],
      "missText": "你没有下决心，林薇按常规产能报了个交期，客户嫌慢，转给了宏远。车间那两个月很轻松。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y11_SPRING_025",
      "title": "马副总一个人来了",
      "condition": "第11年·春季",
      "weight": 100.0,
      "once": true,
      "text": "（他这次是一个人来的，没带秘书，在车间外面站了很久）其实我知道你这些年做的是什么。但集团考核只有三个指标，没有一个跟这些有关。我快到年纪了，你有什么想说的，趁现在。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 11,
      "season": "春",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "请他把绿色投入单列一项考核",
          "hint": "他要为此得罪人",
          "result": "他听完只说\"我试试\"。半年后集团确实加了一项\"绿色制造\"考核，权重不高，但从此这些投入不再是\"额外的支出\"。代价是他在那次会上得罪了两位同级。他没跟你提过这件事，是老赵后来听说的。",
          "effects": {
            "group": 12,
            "fame": 4,
            "aff": {
              "ma": 5
            },
            "flag": "kpi"
          }
        },
        {
          "id": "2",
          "text": "请他多批点预算",
          "hint": "实在 · 但只解一时",
          "result": "他批了一百二十万专项。钱很快就花完了，用在了该用的地方。但第二年他退了，新来的人不认这笔账，问的第一个问题是\"去年那笔钱产出是多少\"。",
          "effects": {
            "money": 58,
            "group": 2,
            "aff": {
              "ma": 2
            }
          }
        },
        {
          "id": "3",
          "text": "什么都没说，陪他在车间外站着",
          "hint": "有些话说了也没用",
          "result": "你们抽了两根烟。他临走说：\"我在这个位子上二十年，见过太多厂长跟我讲道理。你算讲得少的。\"上车前他补了一句：\"厂子是你的，我是过路的。\"",
          "effects": {
            "aff": {
              "ma": 3
            },
            "morale": 1
          }
        }
      ],
      "missText": "你陪他在车间外站了会儿，聊的都是场面话。他上车前看了你一眼，什么也没说。半年后他退了。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y11_AUTUMN_026",
      "title": "本行业纳入了碳市场",
      "condition": "第11年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "本行业被纳入全国碳市场了。超出基准的排放要买配额清缴，我算了一下，按现在的排放水平，一年要多掏一笔不小的钱。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 11,
      "season": "秋",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "买配额，先把合规问题解决",
          "hint": "每年都要掏",
          "result": "配额买了，合规了。老赵每年做预算的时候都会单列这一行，数字一年比一年大。他说：\"这笔钱是白花的。\"你说：\"不是白花，是替过去的十年还账。\"",
          "effects": {
            "money": -30,
            "flag": "quota_buy"
          }
        },
        {
          "id": "2",
          "text": "借这个由头，把该做的技改一次做完",
          "hint": "花 70 万 · 一次性解决",
          "result": "你把碳市场当成了说服所有人的理由——包括集团、老赵、还有那些觉得节能是折腾的人。锅炉、空压、电机一起改完，第二年不但不用买配额，还富余出一点可以卖。老赵第一次主动说了句：\"这钱花得值。\"",
          "effects": {
            "money": -70,
            "smoke": -14,
            "group": 4,
            "fame": 4,
            "aff": {
              "zhao": 3,
              "chen": 4
            },
            "flag": "quota_cut"
          }
        },
        {
          "id": "3",
          "text": "先按最低标准应付，观望一年",
          "hint": "观望 · 明年配额只会更贵",
          "result": "你选择观望。第二年配额价格涨了四成，你多掏了将近一倍的钱。这类事情的规律是：越晚动手越贵，而每一年当时看都\"再等等也行\"。",
          "effects": {
            "money": -20,
            "smoke": 2,
            "flag": "quota_wait"
          }
        }
      ],
      "missText": "配额是财务按最低标准买的，多花了不少钱。这件事从此每年都要花一笔，而你始终没想明白它到底能不能省。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y12_SPRING_027",
      "title": "新客户要产品碳足迹报告",
      "condition": "第12年·春季",
      "weight": 100.0,
      "once": true,
      "text": "一家做储能的新客户来问，说他们的供应商必须提供产品碳足迹报告。这个客户所在的行业每年翻一倍。但报告要做，得先有这些年的完整数据。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 12,
      "season": "春",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "做，把这些年的数据整理出来",
          "hint": "花 25 万 · 要看你有没有底子",
          "result": "〔陈工|小吴照着陈工留下的那十一本记录，〕把这些年的表、单据、监测记录整理了两个月，做出了第一份产品碳足迹报告。客户看完只说了一句：\"你们这个是真做出来的，不是买的。\"当年就下了第一批单，第二年翻了三倍。",
          "effects": {
            "money": -25,
            "orders": 18,
            "fame": 8,
            "group": 4,
            "aff": {
              "chen": 4,
              "lin": 4
            },
            "flag": "cfp"
          }
        },
        {
          "id": "2",
          "text": "找家机构快速出一份",
          "hint": "花 15 万 · 数据是估的",
          "result": "报告出得很快，客户看完提了十七个问题，其中十一个你们答不上来。这单最后没成。林薇说：\"他们不是不信我们，是我们真的说不清。\"",
          "effects": {
            "money": -15,
            "orders": 2,
            "aff": {
              "lin": -2
            }
          }
        },
        {
          "id": "3",
          "text": "这个行业太新，先不碰",
          "hint": "放弃一条赛道",
          "result": "你婉拒了。三年后这个客户成了行业里的头部，宏远厂是他们的一级供应商。林薇偶尔会提起这件事，语气很平静，但每次都会提。",
          "effects": {
            "orders": -4,
            "rival": 10
          }
        }
      ],
      "missText": "你让办公室回了封客气的邮件，说正在筹备中。对方没有再来。三年后这家客户成了行业头部，一级供应商里有宏远。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y12_AUTUMN_028",
      "title": "VOCs 设施平时没开",
      "condition": "第12年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "〔zhou:厂长，有件事我憋了两年，今天跟您说。|老周退了以后没人再提这事，今天是我壮着胆子说的。〕VOCs 那套治理设施，这两年基本没开过，一开电费一个月多两万。老工人都知道，就是没人说。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 12,
      "season": "秋",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "从今天起必须开，电费我认",
          "hint": "20 万/年 · 没人会为此表扬你",
          "result": "设施开了，电费涨了，报表难看了。没有客户会因为这个多给你一分钱，没有媒体会来报道。三年后一次夜查，执法人员调了运行记录，看完什么也没说就走了——那一刻你才知道这笔钱买的是什么。",
          "effects": {
            "money": -20,
            "smoke": -2,
            "fame": 2,
            "flag": "voc_on",
            "aff": {
              "zhou": 3
            },
            "fac": {
              "air": 1
            }
          }
        },
        {
          "id": "2",
          "text": "检查的时候开，平时关",
          "hint": "一年省 20 万 · 这行大半都这么干",
          "result": "你没有明说，只是让车间\"灵活掌握\"。省下的电费，年底给全厂发了笔奖金，人人有份。厂里所有人都懂那句\"灵活掌握\"是什么意思，也没有人觉得有什么不对——这件事从此成了心照不宣的一部分，直到有一天它不再是。",
          "effects": {
            "money": 30,
            "morale": 5,
            "risk": 3,
            "flag": "voc_off"
          }
        },
        {
          "id": "3",
          "text": "改工艺，从源头少产生 VOCs",
          "hint": "花 58 万 · 贵，但一劳永逸",
          "result": "水性替代做了半年，产生量降了六成，治理设施常开也不心疼了。这笔钱花得比谁都多，但从此这项再没让你半夜惊醒过。〔陈工说：\"厂长，这是我这些年做过最有价值的项目。\"|小吴说：\"厂长，这个方案陈工的本子里写过，第七本第三页。\"〕",
          "effects": {
            "money": -58,
            "smoke": -4,
            "fame": 4,
            "aff": {
              "chen": 5,
              "zhou": 2
            },
            "flag": "voc_clean",
            "fac": {
              "air": 2
            }
          }
        }
      ],
      "missText": "这句话你听过就算了。设施照旧是检查才开，厂里所有人都懂那句灵活掌握是什么意思。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y13_SPRING_029",
      "title": "同行的产线挂出来卖",
      "condition": "第13年·春季",
      "weight": 100.0,
      "once": true,
      "text": "行业开始洗牌。有同行撑不住了，一条产线挂出来卖，价格是新线的四成。但那批设备能耗高，环保配套也不全。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 13,
      "season": "春",
      "speakerId": "narr",
      "speaker": "旁白",
      "choices": [
        {
          "id": "1",
          "text": "买下来，先把规模做起来",
          "hint": "花 82 万 · 便宜的产能从来不白捡",
          "result": "产能一下多了四成，订单接得下了。但那批设备的电耗和排放拖累了整体指标，第二年客户审核时被专门问到。你花了两年才把它改造过来——加起来比买新的还贵。",
          "effects": {
            "money": -82,
            "orders": 16,
            "smoke": 10,
            "group": 4
          }
        },
        {
          "id": "2",
          "text": "不买，把钱花在自己厂里",
          "hint": "错过规模 · 但不留包袱",
          "result": "那条线被宏远买走了。三年后他们因为这批设备的能耗问题丢掉了一个大客户。老赵后来说：\"当年不买，是这十几年最省钱的一次决定。\"",
          "effects": {
            "money": 0,
            "smoke": -1,
            "rival": 6,
            "aff": {
              "zhao": 2
            }
          }
        },
        {
          "id": "3",
          "text": "只买厂房和地，设备不要",
          "hint": "花 70 万 · 要慢一点",
          "result": "你只接了厂房。空着的车间等了一年半才装上新线，期间订单接不下来，眼看着机会溜走。但装进去的每一台设备都是你自己挑的。",
          "effects": {
            "money": -55,
            "orders": 6,
            "smoke": 2,
            "flag": "own_line"
          }
        }
      ],
      "missText": "你没顾上，那条线被宏远买走了。他们后来因为那批设备的能耗吃了亏，但当时谁也说不准。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y13_AUTUMN_030",
      "title": "宏远来挖人",
      "condition": "第13年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "宏远厂来挖〔陈工|小吴〕了，开的是能源总监，年薪翻一倍。他自己没提，是我从客户那边听来的。厂长，这次不是加钱能留住的。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 13,
      "season": "秋",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "找他谈一次，问他想要什么",
          "hint": "先听，再说",
          "result": "你们在食堂坐到很晚。他说他不缺钱，缺的是\"做完的事\"。你问他这些年最想做没做成的是哪一件，他报了三个项目的名字，一字不差。第二周你把这三个立项批了。他没有走。",
          "effects": {
            "money": -34,
            "smoke": -6,
            "morale": 4,
            "fame": 2,
            "aff": {
              "chen": 6
            },
            "flag": "tech_kept"
          }
        },
        {
          "id": "2",
          "text": "把年薪补齐，条件照给",
          "hint": "花 36 万/年 · 钱能解决的都不是最难的",
          "result": "他留下了，工资比宏远给的还高一点。但这一年他没再提新方案，会上发言也变少了。你后来才明白，当初他要的不是这个——你花钱买下的，只是他不走。",
          "effects": {
            "money": -36,
            "aff": {
              "chen": 1
            },
            "flag": "tech_paid"
          }
        },
        {
          "id": "3",
          "text": "祝他前程似锦",
          "hint": "放手 · 技术这条线会断一阵",
          "result": "送别那天他把柜子钥匙交给你，说里面的东西都留着。厂里的技改停了大半年才缓过来。半年后宏远发了个新闻稿，说他们建成了行业首个能碳管理平台——照片里那个站在屏幕前的人，你很熟。",
          "effects": {
            "smoke": 3,
            "orders": -4,
            "morale": -4,
            "rival": 10,
            "flag": "tech_gone"
          }
        }
      ],
      "missText": "这件事你知道得太晚。等你想起来找他谈，辞呈已经在桌上了。他说：厂长，您忙。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y14_SPRING_031",
      "title": "集团要选绿色制造标杆",
      "condition": "第14年·春季",
      "weight": 100.0,
      "once": true,
      "text": "集团要在下属工厂里选一个做绿色制造标杆，配套资源不少。需要三年完整的排放、能耗、合规记录。宏远那边听说也在报。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 14,
      "season": "春",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "报，把这些年的东西整理出来",
          "hint": "花 20 万 · 东西得是真的",
          "result": "材料交上去，评审组来了两天。他们没看 PPT，直接调了系统里的原始数据，抽了三个月份逐笔核对。结论下来那天，〔ma:马副总打来电话，第一句话是：\"我就知道。\"|集团那位新领导打来电话，只说了三个字：\"很好。\"接着问了一句：这个能不能复制到别的厂。〕",
          "effects": {
            "money": -20,
            "fame": 14,
            "orders": 10,
            "group": 14,
            "rival": -8,
            "flag": "flagship"
          }
        },
        {
          "id": "2",
          "text": "报，但有些材料要临时补",
          "hint": "花 20 万 · 心里没底",
          "result": "材料交上去了，评审组抽查时问到几个月份的原始记录，你们答得含糊。最后没选上，评语写着\"基础数据管理有待加强\"。老赵把这句话抄在了本子上。",
          "effects": {
            "money": -20,
            "fame": -2,
            "group": -4
          }
        },
        {
          "id": "3",
          "text": "不报，我们还没到那个份上",
          "hint": "清醒 · 也可能是自我设限",
          "result": "你没报。宏远报了，也没选上。这件事后来没人再提。你偶尔会想，如果当时报了会怎样——但你也说不清那是遗憾还是庆幸。",
          "effects": {
            "group": -2
          }
        }
      ],
      "missText": "材料没报。这件事在集团那边留了个印象：那个厂好像对什么都不太积极。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y14_AUTUMN_032",
      "title": "林薇要走了",
      "condition": "第14年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "我要走了。不是因为待遇，是有家公司让我做副总，管整个大区。厂长，这十四年我跑坏了六辆车。走之前我想问一句：这十四年，有没有哪一步，你到现在还后悔？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 14,
      "season": "秋",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "不后悔",
          "hint": "说给她听，也说给自己听",
          "result": "她笑了，说：\"我就知道你会这么说。\"临走那天她把这些年的客户档案整理成了一个文件夹，交接给了新人，最后一页写着每个客户最在意什么。有些人走的时候，把最值钱的东西留下了。",
          "effects": {
            "orders": -6,
            "morale": 2,
            "fame": 2,
            "aff": {
              "lin": 3
            },
            "flag": "lin_left"
          }
        },
        {
          "id": "2",
          "text": "有时候后悔",
          "hint": "实话",
          "result": "你说了实话：有几次夜里算账，确实想过如果当年换个走法，这厂会不会好过很多。她点点头说：\"那就对了。要是你说完全不后悔，我反而觉得你没往心里去。\"",
          "effects": {
            "orders": -6,
            "morale": 3,
            "aff": {
              "lin": 4
            },
            "flag": "lin_left"
          }
        },
        {
          "id": "3",
          "text": "开条件留她",
          "hint": "花 30 万/年 · 留得住人，留不住心",
          "result": "她留了下来，但眼神不太一样了。一年后她还是走了，去的是同一家公司，位置更高。这一年你多花了四十万，也多留了一年时间——这笔账怎么算，你到现在也没算明白。",
          "effects": {
            "money": -30,
            "orders": 4,
            "flag": "lin_left"
          }
        }
      ],
      "missText": "你没有挽留，也没有细谈。她把客户档案交接给了新人，最后一页写着每个客户最在意什么——这份东西你三年后才翻到。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y15_SPRING_033",
      "title": "集团问：这厂下一步往哪走",
      "condition": "第15年·春季",
      "weight": 100.0,
      "once": true,
      "text": "第十五年了。集团问你，这个厂下一步往哪走。账上的钱只够办成一件事。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 15,
      "season": "春",
      "speakerId": "you",
      "speaker": "你",
      "choices": [
        {
          "id": "1",
          "text": "冲一次绿色工厂认证",
          "hint": "花 44 万 · 给这十五年一个名分",
          "result": "申报材料整整装了三个箱子。评审组来现场那天，能源科调出了近三年逐月的能耗曲线，〔liu:小刘|接他班的那个年轻人〕领着他们把每个车间走了一遍。有位评审专家临走说：\"你们这个不是突击做出来的。\"",
          "effects": {
            "money": -44,
            "fame": 12,
            "smoke": -5,
            "orders": 6,
            "group": 6,
            "flag": "final_cert"
          }
        },
        {
          "id": "2",
          "text": "再上一条产线",
          "hint": "花 44 万 · 把规模做起来",
          "result": "新线年底投产，产能提了三成，集团很满意。只是那年冬天客户的问卷又来了一份，比十年前更厚，多了三页专门问能耗和碳数据。",
          "effects": {
            "money": -44,
            "orders": 16,
            "smoke": 9,
            "group": 8
          }
        },
        {
          "id": "3",
          "text": "把钱发给员工",
          "hint": "花 44 万 · 这十五年是他们扛的",
          "result": "年终大会上你宣布了这个决定，会场安静两秒，然后有人带头鼓掌。一个干了十七年的老师傅上来敬酒：\"厂长，我们知道这些年不容易。\"集团那边对这笔支出问了两次。",
          "effects": {
            "money": -44,
            "morale": 16,
            "group": -4
          }
        }
      ],
      "missText": "你没有给出明确的方向。那笔钱最后按惯例分摊到了各项日常开支里，年底盘账时谁也说不清它去了哪儿。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y04_SUMMER_034",
      "title": "客户要签绿色采购承诺函",
      "condition": "第4年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "有个客户要求我们签\"绿色采购承诺函\"，承诺三年内可再生电力用到三成。签了拿单，签不到做不到要赔违约金。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 4,
      "season": "夏",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "签，逼自己一把",
          "hint": "拿到单 · 三年后要兑现",
          "result": "单子拿到了。这三年里每次做预算，那份承诺函都摆在桌上——它逼着你把该做的做了。老赵说：\"这是你请人来管自己。\"",
          "effects": {
            "orders": 12,
            "money": 15,
            "flag": "pledge",
            "aff": {
              "lin": 3
            }
          }
        },
        {
          "id": "2",
          "text": "不签，做不到的事不承诺",
          "hint": "丢单 · 但不留把柄",
          "result": "客户很意外，说很少有供应商拒签。半年后他们又来了一次，这次带了技术团队，说想看看\"一家实话实说的厂是什么样\"。",
          "effects": {
            "orders": -8,
            "fame": 4,
            "aff": {
              "lin": 1
            }
          }
        },
        {
          "id": "3",
          "text": "签，但把比例改到一成五",
          "hint": "谈 · 拿一半的单",
          "result": "林薇拿着计算器跟对方磨了两个小时，改成了一成五。单子拿到六成。她说：\"能做到多少写多少，这个道理其实客户比我们懂。\"",
          "effects": {
            "orders": 5,
            "money": 8,
            "flag": "pledge_s",
            "aff": {
              "lin": 2
            }
          }
        }
      ],
      "missText": "承诺函没签。客户把这一项标成了未响应，那批单子给了别人。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y06_SUMMER_035",
      "title": "老锅炉又不达标了",
      "condition": "第6年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "二车间那台老锅炉，环保标准又提了一档。改造要八十万，换新的要一百四十万，还有一条路——买蒸汽。园区管网到咱们墙外了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 6,
      "season": "夏",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "改造老锅炉",
          "hint": "花 58 万 · 凑合达标",
          "result": "改完勉强达标。三年后标准又提了一档，这笔钱等于白花了一半。老周说：\"这种事就怕改一半，改一半等于改两次。\"",
          "effects": {
            "money": -58,
            "smoke": -5,
            "risk": -1,
            "fac": {
              "boiler": 1
            }
          }
        },
        {
          "id": "2",
          "text": "买园区蒸汽，锅炉停了",
          "hint": "花 30 万 接口费 · 从此不烧煤气",
          "result": "锅炉房空了出来，后来改成了工具间。热成本略高，但排放、环保手续、人工全省了。老周在空锅炉房里站了很久——他在这儿看了十六年的火。",
          "effects": {
            "money": -30,
            "smoke": -14,
            "morale": -3,
            "risk": -1,
            "flag": "steam",
            "fac": {
              "boiler": 2
            }
          }
        },
        {
          "id": "3",
          "text": "换台新的，一步到位",
          "hint": "花 95 万 · 账上会很难看",
          "result": "新锅炉效率高、排放低，指标漂亮。但这笔钱压得后面两年什么都做不了，几次机会都是眼看着过去的。",
          "effects": {
            "money": -95,
            "smoke": -11,
            "tech": 6,
            "risk": -1
          }
        }
      ],
      "missText": "锅炉一直拖着没动。第二年环保核查时被要求限期整改，罚了十八万，还停了半个月。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y08_SUMMER_036",
      "title": "银行来推绿色信贷",
      "condition": "第8年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "银行来推绿色信贷，利率比普通贷款低一截。但要提供三年的能耗和排放数据，还要接受年度核查。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 8,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "申请，把数据交上去",
          "hint": "省利息 · 从此年年被核查",
          "result": "贷款批了，一年省下三十多万利息。代价是每年要接受一次第三方核查，数据造不了假。老赵说：\"这钱省得踏实，也省得没有退路。\"",
          "effects": {
            "money": 38,
            "risk": -1,
            "flag": "green_loan"
          }
        },
        {
          "id": "2",
          "text": "先按银行的口径把数据补起来，明年再申请",
          "hint": "花 10 万 · 慢一年，但门开着",
          "result": "你请了家事务所帮着把口径理顺，用了大半年。第二年再去，银行的人翻了两页就说可以了。老赵算过一笔账：这一年多付的利息，比请人理数据的钱还多一点点。但从此这扇门是开着的。",
          "effects": {
            "money": -10,
            "tech": 5,
            "flag": "ledger"
          }
        },
        {
          "id": "3",
          "text": "不申请，不想被人年年查账",
          "hint": "省事 · 多付利息",
          "result": "你放弃了。多付的利息不多，但那份\"不想被人查\"的心态，老赵记了很久。他后来说：\"厂长，怕查的人，多半是有东西不想让人看见。\"",
          "effects": {
            "money": -14
          }
        }
      ],
      "missText": "你没顾上办。多付的利息不多，但老赵后来提过一句：那种便宜，是给准备好的人留的。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y10_SUMMER_037",
      "title": "集团要调走小刘",
      "condition": "第10年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "集团要在几个厂之间调一批人，你这儿的小刘被点了名，去总部做生产管理。对他是好事。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 10,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "放他走，替他高兴",
          "hint": "断层 · 但人得往前走",
          "result": "小刘走的那天，〔#zhou〕送到大门口，什么也没说。三车间的位置空了半年，最后从班组里提了个人，磕磕绊绊带了一年。你后来在总部见过小刘一次，他说起厂里的事还是\"我们厂\"。",
          "effects": {
            "orders": -5,
            "morale": 4,
            "group": 5,
            "aff": {
              "zhou": 2
            },
            "flag": "liu_out"
          }
        },
        {
          "id": "2",
          "text": "跟集团说这个人我留下",
          "hint": "留住骨干 · 但挡了别人的路",
          "result": "人留下了。小刘嘴上说\"听厂长安排\"，但那年之后他很少再主动加班。三年后他还是走了，去了一家民企。有些人你留得住一次，留不住第二次。",
          "effects": {
            "orders": 3,
            "morale": -4,
            "group": -5,
            "aff": {
              "zhou": -1
            }
          }
        }
      ],
      "missText": "调令直接下来了，你连挽留的话都没来得及说。小刘走的那天，〔#zhou〕送到大门口，回来跟你说了句厂长，这事您本该说句话的。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y12_SUMMER_038",
      "title": "车间问：绿色跟我们有啥关系",
      "condition": "第12年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，车间几个老师傅问，厂里这些年搞的这些绿色、认证、台账，跟他们到底有什么关系？他们说反正干的还是那点活。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 12,
      "season": "夏",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "开个会，把账算给他们看",
          "hint": "花半天工时 · 说清楚",
          "result": "你把这些年的电费单、订单来源、客户审核记录做成几张图，在食堂讲了四十分钟。有人听懂了，有人打瞌睡。散会后一个老师傅问你：\"那我省下的电，能不能算我的？\"这句话后来变成了厂里的节能提案奖。",
          "effects": {
            "morale": 8,
            "smoke": -4,
            "tech": 5,
            "flag": "shopfloor"
          }
        },
        {
          "id": "2",
          "text": "把节能省下的钱拿出一部分发下去",
          "hint": "花 30 万/年 · 直接兑现",
          "result": "节能奖金发下去那个月，三车间自己关掉了两台常年空转的风机。〔#zhou〕说：\"早该这么干。一句道理讲十遍，不如一笔钱发一次。\"",
          "effects": {
            "money": -30,
            "morale": 12,
            "smoke": -6,
            "flag": "shopfloor"
          }
        },
        {
          "id": "3",
          "text": "这事跟他们确实没关系",
          "hint": "省事 · 但从此是两张皮",
          "result": "你没回答。这些年厂里所有跟绿色有关的事，就一直是办公室那几个人的事。材料做得很漂亮，车间照旧。审核员来的时候，问一线的人总是问不出什么。",
          "effects": {
            "risk": 1,
            "morale": -3,
            "flag": "two_skins"
          }
        }
      ],
      "missText": "这个问题没人回答。厂里所有跟绿色有关的事，从此就一直是办公室那几个人的事，车间照旧。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y11_SUMMER_039",
      "title": "贸易商想包销三成产能",
      "condition": "第11年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "有家做出口的贸易商找上门，愿意包销我们三成产能。价格不高，但省了所有销售的事。只是这样一来，客户是谁我们就不知道了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 11,
      "season": "夏",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "签，省心",
          "hint": "稳定的量 · 从此看不见终端客户",
          "result": "产线稳了，销售压力小了。但从那以后，客户的要求都是转述的，问卷是贸易商代填的，你再也没直接见过用你产品的人。两年后贸易商换了供应商，你才知道自己什么也没积累下来。",
          "effects": {
            "orders": 14,
            "money": 20,
            "fame": -6,
            "flag": "oem"
          }
        },
        {
          "id": "2",
          "text": "不签，自己跑客户",
          "hint": "累 · 但知道自己在给谁做",
          "result": "林薇又开始一家家跑。三年后她拿回来一份客户名单，四十七家，每家后面都写着最在意什么。她说：\"这个东西，贸易商是不会给你的。\"",
          "effects": {
            "orders": -4,
            "fame": 6,
            "aff": {
              "lin": 4
            }
          }
        }
      ],
      "missText": "你一直没定，对方转头找了别家。这三成产能还得自己跑，林薇又多跑了一年。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y03_SUMMER_040",
      "title": "副厂长的位子空着",
      "condition": "第3年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "副厂长退休半年了，位子还空着。老周资格最老，但他只认车间那一套；外面招一个来得快，可这厂的人认不认，两说。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 3,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "提老周",
          "hint": "车间服气 · 但他不懂新东西",
          "result": "老周上任那天在食堂敬了一圈酒。车间从此上下一条心，交代什么办什么。只是往后凡是涉及新技术、新标准的事，他第一反应都是\"这个我们干不了\"，你得多花一倍的口舌。",
          "effects": {
            "morale": 9,
            "aff": {
              "zhou": 6,
              "chen": -2
            },
            "flag": "vp_zhou"
          }
        },
        {
          "id": "2",
          "text": "从外面招一个",
          "hint": "专业 · 但要磨合两年",
          "result": "新人履历漂亮，第一个月就做了三份改善方案。车间当面客气，背后叫他\"那个外面来的\"。两年后方案落地了一半，另一半死在了执行环节。",
          "effects": {
            "tech": 8,
            "morale": -6,
            "aff": {
              "zhou": -4
            },
            "flag": "vp_out"
          }
        },
        {
          "id": "3",
          "text": "先空着，我自己盯",
          "hint": "省事 · 你会很累",
          "result": "你一个人管到底，事无巨细。头两年效率很高，第三年开始你发现自己在会上讲的每句话都得重复三遍——一个人的精力就那么多。",
          "effects": {
            "money": 8,
            "morale": -2,
            "flag": "vp_none"
          }
        }
      ],
      "missText": "位子一直空着，两拨人各干各的。开会时谁也不看谁，你成了唯一的传声筒。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y04_SUMMER_041",
      "title": "集团派人来挂职",
      "condition": "第4年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "集团派了个年轻干部来挂职副厂长，一年。说是锻炼，但谁都知道他回去要写份报告。他昨天已经开始翻车间的台账了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 4,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "什么都给他看，包括不好看的",
          "hint": "赌他讲实话",
          "result": "你把该整改的清单和整改计划一起给了他。他在报告里写：这个厂的问题都摆在明面上，厂长知道每一个。集团后来批技改预算时，引用了这句话。",
          "effects": {
            "group": 10,
            "aff": {
              "ma": 3
            },
            "flag": "open_book"
          }
        },
        {
          "id": "2",
          "text": "安排好路线，只让他看做得好的",
          "hint": "稳妥",
          "result": "他一年待得很舒服，报告写得四平八稳。你既没得罪人，也没留下什么印象。这种报告集团一年要看几十份。",
          "effects": {
            "group": 2
          }
        },
        {
          "id": "3",
          "text": "把他当自己人带，教他真东西",
          "hint": "花你不少精力 · 可能是长线投资",
          "result": "你带着他跑客户、看设备、谈整改，什么都讲。他回集团三年后升了处长，分管的正好是技改预算。有些人情是在人还不重要的时候攒下的。",
          "effects": {
            "group": 6,
            "morale": -2,
            "aff": {
              "ma": 4
            },
            "flag": "ma_ally"
          }
        }
      ],
      "missText": "你没怎么搭理那位挂职干部。他半年后回集团，述职报告里对你的评价只有八个字：不太配合，情况不明。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y06_SUMMER_042",
      "title": "老周和〔陈工|小吴〕吵起来了",
      "condition": "第6年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，我跟〔陈工|小吴〕在会上吵起来了。他要停线三天改工艺，我说这个月的交期怎么办。当着全车间的面，谁也没让谁。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 6,
      "season": "夏",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "当众支持老周",
          "hint": "车间踏实 · 技术条线寒心",
          "result": "你在会上说了句\"生产是第一位的\"。车间的人心定了，交期保住了。散会后〔陈工|小吴〕一个人在办公室坐了很久，那份方案他没再拿出来过。",
          "effects": {
            "morale": 6,
            "orders": 4,
            "smoke": 2,
            "aff": {
              "zhou": 4,
              "chen": -6
            }
          }
        },
        {
          "id": "2",
          "text": "当众支持〔陈工|小吴〕",
          "hint": "技术条线来劲 · 老周下不来台",
          "result": "停线三天，工艺改成了。老周当着人没说什么，只是那之后他再没在会上主动发过言。有些人不是被否定打垮的，是被当众否定。",
          "effects": {
            "smoke": -5,
            "tech": 6,
            "morale": -6,
            "aff": {
              "chen": 5,
              "zhou": -6
            }
          }
        },
        {
          "id": "3",
          "text": "谁也不表态，会后分别谈",
          "hint": "累 · 但两个都保住了",
          "result": "你分别找他们谈了一下午，最后方案改成分批停线，交期延三天。两个人都觉得自己没输，也都觉得你偏袒了对方一点点——这大概就是当厂长的常态。",
          "effects": {
            "smoke": -3,
            "orders": -2,
            "morale": 2,
            "aff": {
              "zhou": 1,
              "chen": 1
            },
            "flag": "balanced_call"
          }
        }
      ],
      "missText": "你没有表态。这场架从此就摆在那儿，谁也不提，谁也不忘。车间和技术科从此各说各话，中间隔着一堵看不见的墙。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y09_SUMMER_043",
      "title": "有人越级告状",
      "condition": "第9年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "集团纪检来电话了。有人实名反映你违规发放节能奖金、擅自决定技改项目。信是从厂里发出去的，用的是内部信封。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 9,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "把所有材料交上去，请他们查",
          "hint": "查得清 · 但要停半个月配合",
          "result": "工作组查了半个月，结论是\"程序有瑕疵，无违纪问题\"。查清之后没人再提这事。但那半个月你什么也没干成，而且从此你知道，这厂里有人在盯着你。",
          "effects": {
            "money": -10,
            "orders": -4,
            "group": 4,
            "flag": "cleared"
          }
        },
        {
          "id": "2",
          "text": "先找出这是谁写的",
          "hint": "会查到 · 但代价是人心",
          "result": "你查到了，是财务科一个老同志，为了去年没提拔他。你什么也没做，但这事传开了。从那以后，没有人再在会上说反对意见——包括该说的那些。",
          "effects": {
            "morale": -9,
            "group": -2,
            "flag": "witch_hunt",
            "report": 1
          }
        },
        {
          "id": "3",
          "text": "不理，该干什么干什么",
          "hint": "清者自清 · 也可能越描越黑",
          "result": "你没有专门回应，只是把所有决策的会议纪要整理归档。三个月后事情不了了之。老赵说了句：\"厂长，您这次是运气好。下次记得先把纪要做全。\"",
          "effects": {
            "group": -3,
            "aff": {
              "zhao": 2
            },
            "report": 1
          }
        }
      ],
      "missText": "你没有回应。集团派了工作组来待了三天，什么也没查出来，但那三天里，全厂都知道有人告了你的状。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y12_SUMMER_044",
      "title": "新领导不认旧账",
      "condition": "第12年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "（马副总退了，来的是位新的）你们厂这些年在绿色上花的钱不少，产出我没看明白。老同志留下的账，我得重新算一遍。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 12,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "把这些年的数据一条条摆给他看",
          "hint": "要拿得出东西",
          "result": "你调出了历年能耗曲线、客户审核结论、罚款记录（一次都没有）。他看完只说了句：\"这些数据比我在集团看到的报表实在。\"往后他成了你在集团最稳的支持者。",
          "effects": {
            "group": 14,
            "fame": 4,
            "aff": {
              "ma": 4
            },
            "flag": "new_ally"
          }
        },
        {
          "id": "2",
          "text": "讲这些年的故事，讲人和事",
          "hint": "动情 · 但他要的是数",
          "result": "你讲了〔#zhou〕、讲了那次督察、讲了停线两周改废水。他听得很认真，最后说：\"都是好故事。数据整理一份给我。\"这句话你听了很多年，每次都是同一个意思。",
          "effects": {
            "group": 2
          }
        },
        {
          "id": "3",
          "text": "先摸他的路数，别急着表态",
          "hint": "谨慎 · 也可能错过窗口",
          "result": "你陪着看了一圈，没多说什么。他也没多问。半年后集团的资源分配方案下来，你们厂在中游偏后——不是被针对，只是没有存在感。",
          "effects": {
            "group": -5
          }
        }
      ],
      "missText": "新领导来厂里转了半小时就走了。往后两年，凡是需要集团点头的事，你都要多跑三趟。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y13_SUMMER_045",
      "title": "该提拔谁",
      "condition": "第13年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "技术科长的位子要定人。一个是跟了十年的老人，稳，但这些年没什么长进；一个是新来三年的，能干，但资历浅、脾气冲。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 13,
      "season": "夏",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "提老人",
          "hint": "人心稳 · 技术条线会闷住",
          "result": "老人上任，科里风平浪静。那个年轻人第二年走了，去了宏远。三年后你在行业会上见到他，他管着宏远的整个技术条线。",
          "effects": {
            "morale": 6,
            "tech": -6,
            "rival": 8,
            "aff": {
              "zhou": 3
            }
          }
        },
        {
          "id": "2",
          "text": "提年轻人",
          "hint": "能干活 · 老人会寒心",
          "result": "年轻人上任三个月就捅了两个娄子，也做成了三件老人十年没做成的事。那位老同志申请调去了后勤，走的时候什么也没说。",
          "effects": {
            "tech": 10,
            "smoke": -4,
            "morale": -7,
            "aff": {
              "zhou": -3
            }
          }
        },
        {
          "id": "3",
          "text": "让两个人竞聘，全厂投票",
          "hint": "公开 · 但会摆到台面上",
          "result": "投票结果年轻人赢了三票。过程是公开的，谁也没话说，但那三票把厂里的分歧摆到了明面上。〔#zhou〕说：\"厂长，有些事不投票，是为了不让人记恨。\"",
          "effects": {
            "tech": 6,
            "morale": -2,
            "smoke": -2,
            "flag": "open_vote"
          }
        }
      ],
      "missText": "位子一直空着，两个人都在等。半年后其中一个提了辞职，另一个也再没提过什么想法。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y08_SUMMER_058",
      "title": "副厂长的位子还空着",
      "condition": "第8年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，副厂长这个位子空了五年了。小刘现在能顶半个班，集团那边也可以派人下来。再拖下去，底下的人不知道该听谁的。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 8,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "提小刘",
          "hint": "自己人 · 他还嫩",
          "result": "小刘上任那天，老周在食堂多喝了两杯。他确实还嫩，头一年出过两次差错，但三年后他能独当一面了。从此有些事你终于可以放手。",
          "effects": {
            "morale": 6,
            "orders": -2,
            "aff": {
              "zhou": 4
            },
            "flag": "vp_zhou"
          }
        },
        {
          "id": "2",
          "text": "请集团派一个下来",
          "hint": "快 · 但他向集团负责",
          "result": "集团派来的人很能干，也很清楚自己该向谁汇报。厂里的事从此有两个人在管，有些话你不方便当着他说了——但精力确实腾出来了。",
          "effects": {
            "group": 6,
            "morale": -3,
            "tech": 5,
            "flag": "vp_out"
          }
        }
      ],
      "missText": "位子继续空着。你一个人扛到底，第十年开始发现自己在会上讲的每句话都要重复三遍。",
      "legacyCondition": "function(s){ return !s.flag.vp_zhou && !s.flag.vp_out; }"
    },
    {
      "id": "GF15_Y06_SUMMER_059",
      "title": "招个厂长助理",
      "condition": "第6年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，您一个人签的字比三个副厂长加起来还多。招个助理吧，一年三十万，帮您跑会、盯进度、整材料。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 6,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "招",
          "hint": "花 28 万/年 · 每年多一份精力",
          "result": "助理来的第一个月就把你桌上积了半年的材料清空了。往后每年你能多办一件事——这笔钱，是这些年花得最不显眼也最值的一笔。",
          "effects": {
            "money": -28,
            "flag": "assistant"
          }
        },
        {
          "id": "2",
          "text": "不招，我自己来",
          "hint": "省钱 · 也省不下多少",
          "result": "你继续一个人扛。省下的那笔钱，大概相当于每年少办一件事的代价——只是这笔账，没有人会替你算。",
          "effects": {
            "money": 12
          }
        }
      ],
      "missText": "招人的事一直没定。那些本该有人替你跑的会、写的材料、盯的进度，还是你自己在做。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y05_SUMMER_060",
      "title": "宏远在客户那儿说我们坏话",
      "condition": "第5年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "宏远的销售在客户那儿说，我们的环保手续有问题、随时可能被停产。客户昨天专门来问了我。厂长，这话不好听，但也不全是假的。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 5,
      "season": "夏",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "把手续和台账全部摆给客户看",
          "hint": "要经得起看",
          "result": "你把排污许可证、监测报告、整改记录装订成册寄了过去。客户的采购看完打了个电话：\"贵司比传言里干净得多。\"那一年他们加了两成的量，宏远的销售被换掉了。",
          "effects": {
            "orders": 12,
            "fame": 6,
            "rival": -10
          }
        },
        {
          "id": "2",
          "text": "请客户来厂里走一趟",
          "hint": "花 8 万 接待 · 眼见为实",
          "result": "客户来了半天，车间转了一圈。回去后没再提这事，但也没加量。有些疑虑消除不了，只能稀释。",
          "effects": {
            "money": -8,
            "orders": 3,
            "fame": 2
          }
        },
        {
          "id": "3",
          "text": "也去说他们两句",
          "hint": "互泼脏水",
          "result": "两家的销售在客户那儿吵起来，客户嫌烦，把这一档的份额分给了第三家。林薇后来说：\"那次是我这些年最丢人的一场仗。\"",
          "effects": {
            "orders": -8,
            "fame": -5,
            "rival": -4,
            "aff": {
              "lin": -3
            }
          }
        }
      ],
      "missText": "你没有回应。那家客户后来把份额调走了三成，理由是\"综合考量\"。有些话不解释，就成了事实。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y10_SUMMER_061",
      "title": "宏远来谈合并",
      "condition": "第10年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "宏远的董事长托人来问，愿不愿意谈合并。他们出钱，你们出产能和资质，合并后你做副总。厂子还在，但名字要换。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 10,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "谈，把厂子并进去",
          "hint": "提前上岸 · 但故事到此为止",
          "result": "谈了三个月，条件不错。签字那天你在会议室外站了很久，想起十年前第一次走进这个厂门的下午。",
          "effects": {
            "money": 90,
            "flag": "merged"
          }
        },
        {
          "id": "2",
          "text": "不谈",
          "hint": "硬扛 · 他们会更用力",
          "result": "你回绝得很干脆。那之后宏远在每一个客户、每一次招标上都咬着你。压力大了，但厂里的人反而拧成了一股绳——〔#zhou〕说：\"咱们厂长没卖我们。\"",
          "effects": {
            "morale": 8,
            "rival": 8,
            "orders": -4,
            "flag": "refused_merge"
          }
        },
        {
          "id": "3",
          "text": "反过来问他们卖不卖",
          "hint": "虚张声势 · 也可能真成",
          "result": "对方愣了几秒，笑了，说回去问问。这事没成，但从那以后，行业里再没人把你们当成随时能被吃掉的那一家。",
          "effects": {
            "fame": 6,
            "group": 4,
            "rival": -6
          }
        }
      ],
      "missText": "你没回话。三个月后他们收购了另一家同行，产能一下超过你们一倍。行业里从此只有\"宏远和其他\"。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y04_SUMMER_062",
      "title": "有个工伤要处理",
      "condition": "第4年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，二车间小张昨天让机器压了手，三根指头。按规矩该走工伤，但那台机器的防护罩三个月前就坏了，一直没换。这事怎么说，您定。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 4,
      "season": "夏",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "如实上报，该赔赔，该整改整改",
          "hint": "花 28 万 · 会被处罚",
          "result": "工伤认定、安监罚款、全厂设备排查，一样没落。老周带人把所有防护罩换了一遍。厂里从此有了个规矩：安全隐患上报当天必须闭环。这规矩后来救过至少两个人。",
          "effects": {
            "money": -28,
            "fame": -3,
            "morale": 9,
            "risk": -1,
            "aff": {
              "zhou": 5
            },
            "flag": "safety"
          }
        },
        {
          "id": "2",
          "text": "私下和解，别报了",
          "hint": "花 18 万 · 省事",
          "result": "家属拿了钱，字签了，事情压了下来。车间里没人再提这件事，但也没人再相信\"有问题及时报\"这句话。往后两年，小毛病都是自己扛着不说。",
          "effects": {
            "money": -18,
            "morale": -8,
            "risk": 2,
            "aff": {
              "zhou": -4
            },
            "flag": "hidden_injury"
          }
        },
        {
          "id": "3",
          "text": "按规矩办，但先追责班组",
          "hint": "严 · 但人心散",
          "result": "班长被处分，赔偿按最低标准给。程序上无可挑剔。老周只说了一句：\"厂长，防护罩坏了三个月，是我没盯住，不是他。\"从那以后他再没替谁说过话。",
          "effects": {
            "money": -22,
            "morale": -11,
            "aff": {
              "zhou": -6
            }
          }
        }
      ],
      "missText": "处理拖了两个月，家属堵了厂门。最后赔的钱比一开始谈的多了一倍，还上了本地新闻。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y12_SUMMER_063",
      "title": "集团内部两派要你站队",
      "condition": "第12年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "集团在争一个方案：一派要把下属厂整合成事业部，一派要各厂保持独立核算。两边都来找过你了。你怎么表态，他们都记着。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 12,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "支持整合",
          "hint": "顺势 · 但会失去自主权",
          "result": "方案通过了，你成了事业部下面的一个生产基地。资源多了，技改预算不用自己争了，但从此立项要报三级。有些事你再也做不了主。",
          "effects": {
            "group": 12,
            "money": 42,
            "tech": -4,
            "flag": "integrated"
          }
        },
        {
          "id": "2",
          "text": "支持独立核算",
          "hint": "保住自主 · 得罪另一派",
          "result": "独立核算保住了。你可以继续自己拍板，代价是那一派掌权之后，你的名字在几份名单上都排在后面。老赵说：\"厂长，您这是拿前程换了拍板权。\"",
          "effects": {
            "group": -10,
            "morale": 4,
            "flag": "independent"
          }
        },
        {
          "id": "3",
          "text": "谁也不得罪，说都有道理",
          "hint": "安全 · 但两边都不把你当自己人",
          "result": "你打了太极。方案定下来之后，你既没被整合掉，也没进核心圈。往后几年，凡是需要集团出面的事，你总要多等一轮。",
          "effects": {
            "group": -4,
            "money": -10
          }
        }
      ],
      "missText": "你两边都没表态。方案通过后，新体系里你们厂被划进了\"待整合\"那一类——不是惩罚，只是没人替你说话。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y05_SUMMER_064",
      "title": "老赵又问了一次",
      "condition": "第5年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "三年前我问过您一次，这厂靠什么吃饭。那次您没答，我就当您还在想。现在三年过去了，每一笔钱我都是凭感觉批的。厂长，我不是催您，我是快退休了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 5,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "靠成本：谁也别想比我们便宜",
          "hint": "晚了三年 · 该压的地方已经压过一轮",
          "result": "方向总算定了。老赵松了口气，但也说了实话：\"厂长，这三年该攒的成本优势，别人已经攒完了。我们现在做的，是补课。\"",
          "effects": {
            "money": 12,
            "orders": 4,
            "aff": {
              "zhao": 3,
              "lin": -2
            },
            "flag": "m_cost"
          }
        },
        {
          "id": "2",
          "text": "靠技术：做别人做不了的活",
          "hint": "晚了三年 · 起步的钱更贵了",
          "result": "方向定了。〔陈工|小吴〕听说以后什么也没说，只是把压在最下面那本方案翻了出来。老赵算了一遍：\"同样的事，三年前做要八十万，现在要一百二。等待也是有价钱的。\"",
          "effects": {
            "money": -22,
            "tech": 11,
            "aff": {
              "chen": 4,
              "zhao": -2
            },
            "flag": "m_tech"
          }
        },
        {
          "id": "3",
          "text": "靠客户：把牌子和口碑做起来",
          "hint": "晚了三年 · 名声要从头攒",
          "result": "方向定了。林薇很高兴，但也提醒你：\"名声这东西，前三年攒的最值钱，因为那时候没人看着你。现在开始攒，得跑得比别人快一倍。\"",
          "effects": {
            "money": -14,
            "fame": 6,
            "aff": {
              "lin": 4,
              "zhao": -2
            },
            "flag": "m_brand"
          }
        }
      ],
      "missText": "他没再问第三遍。往后做预算，凡是拿不准的，他一律按上一年的数照抄——一个没有方向的厂，钱花得最散，也最无声。",
      "legacyCondition": "function(s){ return !s.mode; }"
    },
    {
      "id": "GF15_Y09_SUMMER_065",
      "title": "集团当众问：你们厂到底是什么厂",
      "condition": "第9年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "（经营分析会上，他忽然打断了你）别念数字了。我就问一句：你们厂在集团里，到底是干什么的那一家？台下十几个厂长都在听。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 9,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "我们是成本最低的那一家",
          "hint": "当众定调 · 从此只能拼价格",
          "result": "你说完，会场安静了两秒。有个老厂长点了点头。散会后马副总说：\"这话说出去就收不回来了，往后集团给你的单子都是这一类。\"果然如此。",
          "effects": {
            "money": 20,
            "orders": 6,
            "fame": -4,
            "group": 5,
            "flag": "m_cost"
          }
        },
        {
          "id": "2",
          "text": "我们是能接别人接不了的活的那一家",
          "hint": "把话说满 · 半年内要拿出东西",
          "result": "马副总说：\"好，我记下了。半年后我来看。\"回厂的路上你才开始想，这话到底靠什么兑现。那半年〔陈工|小吴〕几乎住在车间——你把自己逼到了没有退路的位置。",
          "effects": {
            "money": -25,
            "tech": 16,
            "morale": -4,
            "group": 4,
            "aff": {
              "chen": 5
            },
            "flag": "m_tech"
          }
        },
        {
          "id": "3",
          "text": "我们是客户敢把名字挂上去的那一家",
          "hint": "漂亮话 · 也是最难兑现的那句",
          "result": "台下有人笑了一声。马副总没笑，他说：\"这句话我在集团听过三次，前两次说完都没了下文。\"这句话后来一直压在你心上——它逼着你在每一次可以省事的时候没有省。",
          "effects": {
            "money": -16,
            "fame": 9,
            "group": 3,
            "aff": {
              "lin": 4
            },
            "flag": "m_brand"
          }
        }
      ],
      "missText": "你在会上讲了二十分钟的生产数据，没有回答那个问题。散会后马副总跟你走了一段，说：\"下次别讲那么细，讲细了就是没话说。\"",
      "legacyCondition": "function(s){ return !s.mode; }"
    },
    {
      "id": "GF15_Y13_SPRING_066",
      "title": "年报上那一栏还空着",
      "condition": "第13年·春季",
      "weight": 100.0,
      "once": true,
      "text": "集团年报要各厂填一栏：核心竞争力。这栏咱们填了十二年\"性价比\"。厂长，我明年也该退了，这一栏，能不能这次填个真的。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 13,
      "season": "春",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "填\"成本\"，认了",
          "hint": "诚实 · 也是十二年的定论",
          "result": "你填了成本两个字。老赵看了很久，说：\"其实这十二年，咱们真的把成本做到了这一带最低。只是从来没人敢把它当成一件正经事来说。\"",
          "effects": {
            "money": 16,
            "orders": 4,
            "flag": "m_cost"
          }
        },
        {
          "id": "2",
          "text": "填\"技术\"，然后用剩下三年把它变成真的",
          "hint": "先立字据 · 逼自己一把",
          "result": "填完这两个字，你把剩下的钱全砸进了技改。老赵在退休前最后一次签字时说：\"厂长，您这是先写答案再做题。\"三年时间不够把它做成，但够把它做像。",
          "effects": {
            "money": -30,
            "tech": 14,
            "flag": "m_tech"
          }
        },
        {
          "id": "3",
          "text": "空着，等新厂长来填",
          "hint": "留白 · 集团会自己填",
          "result": "那一栏交上去是空的。集团办公室的人打电话来确认，你说就空着吧。第二年印出来的年报上，那一栏被人代填了四个字：\"产能配套\"。",
          "effects": {
            "group": -9,
            "fame": -3
          }
        }
      ],
      "missText": "那一栏最后填的是\"综合型制造企业\"。集团的人看到这六个字就明白了：这个厂没有想清楚过自己是谁。",
      "legacyCondition": "function(s){ return !s.mode; }"
    },
    {
      "id": "GF15_Y01_SUMMER_067",
      "title": "老周的侄子想进厂",
      "condition": "第1年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，有件私事。我侄子技校刚毕业，想进厂，从学徒干起。我知道这话不该我说。我在这厂二十六年，头一回开这个口。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 1,
      "season": "夏",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "收下，就当还老周一个人情",
          "hint": "老周记你的好 · 别人也会记这件事",
          "result": "小伙子进了三车间，干活还算利索。这事没人当面说什么，但那年招工，又来了三个\"谁谁家的孩子\"。你后来才知道，一个口子开了，关上要难十倍。",
          "effects": {
            "morale": -3,
            "aff": {
              "zhou": 7
            },
            "flag": "nepo_in"
          }
        },
        {
          "id": "2",
          "text": "不收，规矩是规矩",
          "hint": "干净 · 但你伤了他",
          "result": "老周站起来说了句\"我知道了，是我唐突\"，然后正常上班，正常汇报，正常交代。他再没有跟你说过一句厂子以外的话。有些距离一旦拉开，就再没有理由拉回来。",
          "effects": {
            "aff": {
              "zhou": -6
            },
            "flag": "nepo_out"
          }
        },
        {
          "id": "3",
          "text": "让他跟别人一起考，考上我不拦",
          "hint": "看起来最公道 · 两头都不落好",
          "result": "厂里第一次有了招工考试。他侄子考了第四，招三个。老周什么也没说，倒是别的班组的人私下议论：\"厂长这是不想收，又不想担名声。\"公道这东西，有时候比偏袒还伤人。",
          "effects": {
            "morale": 2,
            "aff": {
              "zhou": -3
            },
            "flag": "hire_exam"
          }
        }
      ],
      "missText": "这事你一直没答复。老周没再提，但那年之后凡是你交代的事，他都办得一丝不苟——太一丝不苟了，多一句话都没有。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y02_AUTUMN_068",
      "title": "前任留下的那家供应商",
      "condition": "第2年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "有家供料的，价格比市面高一成，质量倒是稳。他们老板是前任厂长的连襟。合同年底到期。厂长，这事您得知道，怎么办我不敢替您想。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 2,
      "season": "秋",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "换掉，走公开比价",
          "hint": "省钱 · 前任还在集团",
          "result": "比价换了一家，一年省下二十来万。三个月后集团一位老同志来厂里\"了解情况\"，什么也没查，临走说了句：\"年轻人做事，是要利落一点。\"这句话你琢磨了很久。",
          "effects": {
            "money": 26,
            "group": -6,
            "flag": "cut_crony"
          }
        },
        {
          "id": "2",
          "text": "留着，不惹这个麻烦",
          "hint": "省事 · 每年多掏一笔",
          "result": "合同照续。这一成的差价此后年年都在，老赵每次做报表都会用红笔在那一行画个圈，然后什么也不说。",
          "effects": {
            "money": -14,
            "aff": {
              "zhao": -3
            },
            "flag": "keep_crony"
          }
        },
        {
          "id": "3",
          "text": "留着，但把标准提上去",
          "hint": "不撕破脸 · 要花力气盯",
          "result": "你重新签了合同，价格不动，但加了来料检验和考核条款。对方老板一开始不高兴，半年后反而认真起来。这条路最麻烦，你自己也说不清是聪明还是懦弱。",
          "effects": {
            "money": -4,
            "tech": 4,
            "aff": {
              "zhao": 2
            },
            "flag": "tame_crony"
          }
        }
      ],
      "missText": "这事你没碰。那家供应商又供了十几年，料价一直高一成。老赵每年都在报表上标出来，每年都没有人问。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y07_SUMMER_069",
      "title": "账上有一笔说不清的钱",
      "condition": "第7年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "去年那笔环保设备的款，付了款，设备到了，但验收单上的签字不是本人的。金额不大，十六万。厂长，我可以按流程补一份，也可以往上报。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 7,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "往上报，请集团来查",
          "hint": "干净 · 会牵出人",
          "result": "审计组来了十天。结论是采购员违规代签，没有资金问题，那人调离。老赵说：\"厂长，您这次做对了，但采购科那几个人，从此不会替您办任何一件不在纸面上的事。\"",
          "effects": {
            "money": -6,
            "group": 6,
            "morale": -6,
            "flag": "audit_self"
          }
        },
        {
          "id": "2",
          "text": "补一份，事情到此为止",
          "hint": "省事 · 你也签了字",
          "result": "手续补齐了，账平了。这件事从此有了两个知情人——你和老赵。他后来没再提过，只是每次遇到需要你签字的模糊地带，他都会多问一句\"确定吗\"。",
          "effects": {
            "risk": 1,
            "aff": {
              "zhao": -2
            },
            "flag": "covered"
          }
        },
        {
          "id": "3",
          "text": "先查清楚这钱到底去哪儿了",
          "hint": "自己动手 · 可能挖出更多",
          "result": "你查了两周，发现是采购员图省事替供应商代签，钱没有问题。但顺带翻出了另外三笔类似的操作。你把这些一起做了内部通报，没有报上去。厂里的人从此知道：这位厂长自己是会查账的。",
          "effects": {
            "morale": -3,
            "risk": -1,
            "group": 2,
            "aff": {
              "zhao": 4
            },
            "flag": "self_clean"
          }
        }
      ],
      "missText": "你没有处理。这笔钱在账上挂了很多年，每次审计都被问一次，每次都被含糊过去。它不大，但它一直在那儿。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y09_SUMMER_070",
      "title": "宏远挖走了你的销售骨干",
      "condition": "第9年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "我手下最能跑的那个去了宏远，带走了三家客户的联系人。他跟了我六年，我一点风声都没听到。厂长，我这两年是不是把人管松了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 9,
      "season": "夏",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "给销售团队重做一套提成和晋升",
          "hint": "花 26 万/年 · 治本，但要两年才见效",
          "result": "方案改了三稿才定。头一年成本上去了，业绩没动；第二年开始，跑客户的人明显多了。林薇说：\"以前他们是替我跑，现在是替自己跑。\"",
          "effects": {
            "money": -26,
            "orders": 9,
            "morale": 4,
            "aff": {
              "lin": 5
            },
            "flag": "sales_sys"
          }
        },
        {
          "id": "2",
          "text": "把那三家客户抢回来",
          "hint": "打一场 · 打赢打输都伤",
          "result": "林薇亲自跑了两个月，抢回来两家。宏远那边的报价压到了成本线以下，两家厂都没赚到钱。她回来的时候瘦了一圈，说：\"厂长，这种仗赢一次，我少活一年。\"",
          "effects": {
            "money": -10,
            "orders": 6,
            "rival": -6,
            "morale": -3,
            "aff": {
              "lin": -1
            }
          }
        },
        {
          "id": "3",
          "text": "不追了，让她重新带人",
          "hint": "认了 · 也是信任",
          "result": "你只说了一句\"人走了就走了，你重新带\"。林薇愣了一下。半年后她带出来两个新人，其中一个后来接了她的班。有些事不追究，本身就是一种交代。",
          "effects": {
            "orders": -5,
            "morale": 3,
            "aff": {
              "lin": 4
            },
            "flag": "lin_trust"
          }
        }
      ],
      "missText": "人走了，客户跟着走了两家。林薇一个人补了半年的窟窿，从那以后她再没跟你提过团队的事。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y11_SUMMER_071",
      "title": "副厂长和车间顶上了",
      "condition": "第11年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，副厂长和车间那位在生产会上又杠上了。一个说流程要改，一个说改了车间转不动。这两个人您都用得着，可现在底下人开会得先看谁先说话。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 11,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "把两摊事切开，各管各的",
          "hint": "不吵了 · 也不通气了",
          "result": "职责重新划了线，会开得顺了。但半年后出了一次交付事故，追下去发现是两边都以为对方在管。〔#zhou〕说：\"厂长，把人分开容易，把事分开难。\"",
          "effects": {
            "orders": -4,
            "morale": 4,
            "flag": "split_org"
          }
        },
        {
          "id": "2",
          "text": "让他们俩共同负责一个项目，绑在一起",
          "hint": "逼他们磨合 · 也可能一起搞砸",
          "result": "那个项目做得磕磕绊绊，延期两个月。但结束之后两个人能一起吃饭了。〔#zhou〕评价：\"厂长这是拿一个项目当学费。\"这笔学费花得值不值，得看后面三年。",
          "effects": {
            "orders": -3,
            "morale": 6,
            "tech": 5,
            "flag": "forged_pair"
          }
        },
        {
          "id": "3",
          "text": "明确一个人说了算",
          "hint": "快刀 · 另一个会走",
          "result": "你在会上说清楚了谁拍板。效率立刻上来，事故也少了。另一个人年底提了调动，走的时候只说了一句\"厂长，我明白\"。厂里的人也都明白了。",
          "effects": {
            "orders": 5,
            "morale": -7,
            "group": 2,
            "flag": "one_boss"
          }
        }
      ],
      "missText": "两个人的事你没有过问。半年后车间那位申请调岗去了后勤，副厂长从此一个人管两摊，什么都亲力亲为，也什么都慢了半拍。",
      "legacyCondition": "function(s){ return !!(s.flag.vp_zhou || s.flag.vp_out); }"
    },
    {
      "id": "GF15_Y12_SUMMER_072",
      "title": "宏远开始低价倾销",
      "condition": "第12年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "宏远今年报价压到了成本以下，几个片区一起压。他们背后有笔新融资，摆明了要先把人耗死。厂长，这一仗打不打？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 12,
      "season": "夏",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "跟，他们能扛多久我们扛多久",
          "hint": "硬碰 · 两败俱伤",
          "result": "两家厂在三个片区打了一年价格战。你守住了份额，账上少了一大截，年终奖砍了一半。宏远也没讨到便宜，但他们背后有钱，你背后是老赵的白头发。",
          "effects": {
            "money": -38,
            "orders": 6,
            "morale": -8,
            "rival": -6,
            "aff": {
              "zhao": -3
            }
          }
        },
        {
          "id": "2",
          "text": "不跟，把力气花在他们抢不走的客户上",
          "hint": "要有底子才敢这么说",
          "result": "你让林薇把资源全压在几家看资质、看数据、看审核的客户上。那年丢了三成低价单，但保住的那些客户，宏远的报价再低也进不去。林薇说：\"原来我们这些年做的东西，是在这时候用的。\"",
          "effects": {
            "orders": 8,
            "fame": 6,
            "money": 10,
            "rival": -4
          }
        },
        {
          "id": "3",
          "text": "退出那三个片区，保住利润",
          "hint": "止血 · 也是认输",
          "result": "你主动收缩。账面上比打价格战好看得多，但那三个片区从此没有你们的名字。两年后价格回升，回去的成本比当初守住要高三倍。",
          "effects": {
            "orders": -11,
            "money": 20,
            "rival": 10,
            "group": -4
          }
        }
      ],
      "missText": "你没有应对。那一年报价单发出去十七份，回来三份。老赵在年终会上把订单曲线投在墙上，一句话也没说。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y13_SUMMER_073",
      "title": "有人替你写了封表功信",
      "condition": "第13年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "办公室有人给集团写了封信，讲您这些年在绿色上做的事，写得挺动人。信还没发出去，被我压下来了。厂长，这封信，发还是不发？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 13,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "不发，做了就是做了",
          "hint": "干净 · 也可能白做",
          "result": "信被撕了。老赵说了句：\"厂长，您这样的人，集团一年能看见两三个，但记住的一个都没有。\"这句话你没反驳，因为你知道他说的是实话。",
          "effects": {
            "fame": 2,
            "aff": {
              "zhao": 3
            },
            "flag": "no_selfpr"
          }
        },
        {
          "id": "2",
          "text": "发，但把名字换成全厂",
          "hint": "不居功 · 效果打折",
          "result": "信改成了以厂部名义发的，通篇没提你。集团回了封表扬信，贴在厂里的公告栏上。车间的人第一次觉得这些事跟自己有关系。至于是谁做的，没有人特别在意——包括你。",
          "effects": {
            "group": 5,
            "morale": 7,
            "fame": 3,
            "flag": "credit_shared"
          }
        },
        {
          "id": "3",
          "text": "发，原样发",
          "hint": "争一次 · 有人会不舒服",
          "result": "信发上去了，集团批了一笔奖励。年会上你被点名表扬。回厂那周，办公室的气氛有点怪，老赵提醒你：\"写信那个人现在到处说这是他的主意。\"",
          "effects": {
            "group": 9,
            "money": 22,
            "morale": -5,
            "fame": 4,
            "report": 1
          }
        }
      ],
      "missText": "信递上去了，你事后才知道。集团有人看了，也有人在私下说\"那个厂长挺会来事\"。这两种印象后来一直纠缠在一起。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y14_SUMMER_074",
      "title": "集团要你写一份说明",
      "condition": "第14年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "集团在做任期审计。你这十几年在环保和技改上花的钱，要一笔笔说清楚产出。说实话，有些是说不清的——但说不清不等于没用。这份说明，你得自己写。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 14,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "一笔笔算，能量化的量化，不能的就写不能",
          "hint": "笨办法 · 也最经得起看",
          "result": "你写了十九页。有七笔算得出回收期，五笔只能写\"避免了处罚风险，金额无法量化\"。审计组的人后来说，这是他见过唯一一份敢写\"无法量化\"的说明。这份材料后来被集团当成模板发给了别的厂。",
          "effects": {
            "group": 11,
            "fame": 5,
            "flag": "honest_audit"
          }
        },
        {
          "id": "2",
          "text": "把能算的都往好里算",
          "hint": "好看 · 但每个数字都要经得起追问",
          "result": "说明写得很漂亮，回收期一律按最乐观口径。审计组挑了三笔追问，你答得含糊。最后结论是\"投入产出测算依据不足\"——比不写好一点，但只好一点。",
          "effects": {
            "group": -3,
            "risk": 1
          }
        },
        {
          "id": "3",
          "text": "不算钱，只写这些年少出过多少事",
          "hint": "另辟蹊径 · 赌他们听得懂",
          "result": "你列了同行这些年的处罚、停产、退单案例，然后写了一句：这些我们一次都没有过。审计组组长在会上念了这一段，有人点头，也有人说\"这不是财务语言\"。结论最后写的是\"管理成效显著，量化依据待完善\"。",
          "effects": {
            "group": 5,
            "fame": 6,
            "flag": "risk_story"
          }
        }
      ],
      "missText": "说明没写。集团按最不利的口径做了认定，那几年的技改投入被记成了\"效益不明确支出\"，写进了任期审计。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y15_SPRING_075",
      "title": "谁来接你的班",
      "condition": "第15年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，都传您快调走了。底下人问，接您班的是谁。〔zhou:我今年也快退了，有些话现在不说，以后就没机会说了。|老周退的时候交代过我一句：厂里的事，得有个准话。〕",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 15,
      "season": "春",
      "speakerId": "zhou",
      "speaker": "老周",
      "choices": [
        {
          "id": "1",
          "text": "推荐现在管三车间的那位",
          "hint": "接得住车间 · 未必接得住外面",
          "result": "你写了推荐信，附了他这些年经手的项目清单。集团批了。交接那天他说：\"厂长，您那套我学了七成，剩下三成我得自己摔。\"",
          "effects": {
            "morale": 9,
            "group": 3,
            "aff": {
              "zhou": 4
            },
            "flag": "succ_liu"
          }
        },
        {
          "id": "2",
          "text": "推荐〔陈工|小吴〕",
          "hint": "接得住方向 · 车间未必服",
          "result": "你推荐了技术这条线上的人。集团有些犹豫，最后还是批了。〔zhou:老周私下说|他私下说〕：\"厂长，他懂设备，可他不知道半夜三点车间为什么会停。\"这句话你记下了，也没有改主意。",
          "effects": {
            "tech": 6,
            "morale": -5,
            "group": 2,
            "aff": {
              "chen": 6
            },
            "flag": "succ_tech"
          }
        },
        {
          "id": "3",
          "text": "不推荐，让集团自己定",
          "hint": "不干预 · 也是把厂交出去",
          "result": "你没有写任何推荐。集团空降了一位年轻干部。你交接了三天，把所有台账、方案本、客户档案交出去，对方很认真地记了笔记。走出厂门那天你想：这厂往后是什么样，已经不归你管了。",
          "effects": {
            "group": 2,
            "morale": -3,
            "flag": "succ_none"
          }
        }
      ],
      "missText": "接班的事你没有安排。集团直接空降了一位，来的第一天开会讲了四十分钟战略，一句也没提这个厂过去十五年做过什么。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y15_SPRING_076",
      "title": "最后一个客户问题",
      "condition": "第15年·春季",
      "weight": 100.0,
      "once": true,
      "text": "又来了一份问卷，二十六页。比十五年前那份厚了三倍，问的东西具体到每一道工序。厂长，这可能是我替这个厂做的最后一件事了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 15,
      "season": "春",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "一栏栏填，填不出的照旧写填不出",
          "hint": "和十五年前一样的答法",
          "result": "这一次，二十六页里只有两栏是空的。林薇填完最后一页，把它和十五年前那份复印件订在了一起，放进档案柜最上面那一格。她说：\"厂长，您看，就差这么两栏。\"",
          "effects": {
            "orders": 10,
            "fame": 8,
            "group": 4,
            "flag": "last_form"
          }
        },
        {
          "id": "2",
          "text": "交给新人去填，她该歇歇了",
          "hint": "体面 · 但会差一点",
          "result": "新人填了三天，有六栏填错，两栏空着。客户回了封邮件要求澄清。林薇看到之后自己重做了一遍，只说了句：\"最后一次了，让我做完。\"",
          "effects": {
            "orders": 5,
            "fame": 3,
            "aff": {
              "lin": 3
            }
          }
        },
        {
          "id": "3",
          "text": "这次找机构代填，别为难人了",
          "hint": "花 12 万 · 兜了一个圈回到原点",
          "result": "报告做得很专业。客户来现场核对时问了七个问题，接待的新人答不上来四个。林薇没有说话，只是那天下班走得比谁都早。",
          "effects": {
            "money": -12,
            "orders": 3,
            "fame": -3,
            "aff": {
              "lin": -4
            }
          }
        }
      ],
      "missText": "那份问卷没有人回。这是十五年前的那一幕，只是这一次，连遗憾都淡了。",
      "legacyCondition": "function(s){ return !s.flag.lin_left; }"
    },
    {
      "id": "GF15_Y15_SUMMER_077",
      "title": "宏远上市了",
      "condition": "第15年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "宏远今年过会了。招股书里绿色制造那一章写了十一页，引用的标准和你这些年做的是同一套。集团那边问：我们厂算不算落后了。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 15,
      "season": "夏",
      "speakerId": "ma",
      "speaker": "马副总",
      "choices": [
        {
          "id": "1",
          "text": "把我们这十五年的东西也整理成一份材料报上去",
          "hint": "花 18 万 · 东西得是真的",
          "result": "材料交上去，集团第一次完整看到了这个厂十五年的曲线。有位副总在会上说：\"这家的数据没有一年是断的。\"这句话比任何一份招股书都值钱——虽然它不会写进任何一份招股书。",
          "effects": {
            "money": -18,
            "group": 12,
            "fame": 8,
            "orders": 6
          }
        },
        {
          "id": "2",
          "text": "实话说：我们落后，但不是落后在做没做，是落后在说没说",
          "hint": "坦白 · 集团未必爱听",
          "result": "你在电话里说了这句话。对面沉默了一会儿，说：\"这话你敢说，说明你心里有底。\"半年后集团请了家咨询公司来给下属厂做品牌梳理，第一站是你们。",
          "effects": {
            "group": 6,
            "fame": 5
          }
        },
        {
          "id": "3",
          "text": "不比了，这十五年不是为了跟谁比",
          "hint": "放下 · 也可能只是不想面对",
          "result": "你说厂子挺好的，不用比。〔#zhao〕后来说了句：\"厂长，您这话我信，可集团不信这个。\"那年集团的资源分配里，你们厂还是那个中游偏后的位置。",
          "effects": {
            "group": -5,
            "morale": 4
          }
        }
      ],
      "missText": "招股书你没有细看。倒是〔#zhao〕看完了，在办公室念了一段给你听，念到\"绿色制造是我们的核心竞争力\"那句时停了两秒，然后合上了。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y15_SUMMER_078",
      "title": "最后一次盘账",
      "condition": "第15年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "（他已经办完退休手续，是自己回来的）厂长，我把这十五年的账重新拉了一遍。有些当年我反对的，现在看是对的；有些当年我同意的，现在看是错的。要不要我做一份总账给您？",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 15,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "做，我想知道这十五年到底花在了哪儿",
          "hint": "面对",
          "result": "总账做出来是三十七页。最贵的三笔里，有两笔当年他都反对过。他在最后一页写了一行字：\"本表由赵德海编制，此人曾于第三年、第七年、第十一年三次提出反对意见，事后证明两次是错的。\"",
          "effects": {
            "fame": 4,
            "group": 5,
            "aff": {
              "zhao": 5
            },
            "flag": "final_ledger"
          }
        },
        {
          "id": "2",
          "text": "不用了，老赵，回家歇着吧",
          "hint": "体面收场",
          "result": "他坐了一会儿就走了。第二个月你收到一个包裹，里面是那三十七页，他还是做完了。附了一张纸条：\"厂长，我做完才睡得着。\"",
          "effects": {
            "morale": 3,
            "aff": {
              "zhao": 4
            }
          }
        },
        {
          "id": "3",
          "text": "做，但只做一件事：算算我们少赚了多少",
          "hint": "残酷 · 但你该知道",
          "result": "他算出来一个数字：这十五年，为了那些\"当时看不出产出\"的事，你少赚了大约六百八十万。他把纸推过来，又补了一句：\"另外我算了一下，同期倒掉的七家同行，加起来省了不止这个数。\"",
          "effects": {
            "fame": 3,
            "aff": {
              "zhao": 3
            },
            "flag": "cost_of_clean"
          }
        }
      ],
      "missText": "账最后是新来的会计盘的。那些年的技改台账、罚款记录、客户审核结论，被分门别类装了箱，谁也没有再翻开过。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y15_SPRING_079",
      "title": "新人拿着一份问卷来问",
      "condition": "第15年·春季",
      "weight": 100.0,
      "once": true,
      "text": "厂长，客户发来一份问卷，二十六页。林姐留下的档案里有十五年前那一份，一半是空的。我不知道该照着填，还是该照实填。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 15,
      "season": "春",
      "speakerId": "lin",
      "speaker": "林薇",
      "choices": [
        {
          "id": "1",
          "text": "照实填，填不出的就写填不出",
          "hint": "和十五年前一样的答法",
          "result": "这一次，二十六页里只有两栏是空的。你让她把这份和十五年前那份订在一起，放进档案柜最上面那一格。她翻着旧的那份问：\"厂长，这是林姐的字吧？\"你说是。她说：\"她在角上写了两个字，两年。\"",
          "effects": {
            "orders": 10,
            "fame": 8,
            "group": 4,
            "flag": "last_form"
          }
        },
        {
          "id": "2",
          "text": "把这十五年的东西都调出来，教她怎么填",
          "hint": "花你一整周 · 传下去",
          "result": "你陪着她把台账、监测报告、审核结论一份份翻出来，讲了一周。填完那天她说：\"原来这些不是材料，是这个厂真做过的事。\"这句话你在十五年里听过两次，上一次是林薇说的。",
          "effects": {
            "orders": 8,
            "fame": 6,
            "morale": 5,
            "flag": "last_form"
          }
        },
        {
          "id": "3",
          "text": "照着老档案填，别耽误时间",
          "hint": "快 · 也是回到了原点",
          "result": "她照着旧材料填完了，格式挑不出毛病。客户来现场核对时问了七个问题，答不上来四个。晚上你路过档案室，看见那两份问卷并排放着——十五年，好像什么都变了，又好像没有。",
          "effects": {
            "orders": 2,
            "fame": -4
          }
        }
      ],
      "missText": "那份问卷没有人回。新人后来说她问过两次，没等到回话，就当这事过去了。这是十五年前的那一幕，只是这一次，连遗憾都淡了。",
      "legacyCondition": "function(s){ return !!s.flag.lin_left; }"
    },
    {
      "id": "GF15_Y14_SUMMER_080",
      "title": "园区要收回西边那块地",
      "condition": "第14年·夏季",
      "weight": 100.0,
      "once": true,
      "text": "园区要收回西边那块地做道路，那是咱们的成品仓和一半停车位。补偿谈得好是笔钱，谈不好是场麻烦。管委会那边等您一句话。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 14,
      "season": "夏",
      "speakerId": "zhao",
      "speaker": "老赵",
      "choices": [
        {
          "id": "1",
          "text": "配合，痛快签，换后面的关系",
          "hint": "吃点亏 · 换一份长期人情",
          "result": "你三天就签了，补偿按评估价打了九折。管委会主任在会上点了名：\"这家企业讲大局。\"后来两年，凡是园区的配套指标、用电扩容、危废转运通道，你申请什么批什么。有些便宜是从吃亏里长出来的。",
          "effects": {
            "money": -14,
            "group": 6,
            "fame": 5,
            "flag": "yard_deal"
          }
        },
        {
          "id": "2",
          "text": "咬住评估价，一分不让",
          "hint": "钱到位 · 也把关系耗掉了",
          "result": "谈了七个月，最后按评估价全额拿到。老赵很高兴。只是那两年凡是需要园区盖章的事，你都得多跑三趟，而且从来没有人给你解释为什么慢。",
          "effects": {
            "money": 34,
            "group": -7,
            "morale": -3
          }
        },
        {
          "id": "3",
          "text": "不谈钱，谈条件：让他们把管网接到我们墙外",
          "hint": "不要现钱 · 要一件真正管用的事",
          "result": "你提出用这块地换园区蒸汽管网和污水专管接到厂界。管委会犹豫了两个月，最后同意了。这笔账当年在报表上是亏的，第二年锅炉和废水两头都省了钱——〔#zhao〕说：\"厂长，您这是拿地换了十年的运行成本。\"",
          "effects": {
            "money": -6,
            "smoke": -6,
            "risk": -1,
            "group": 2,
            "fac": {
              "boiler": 1
            },
            "flag": "yard_pipe"
          }
        }
      ],
      "missText": "你一直没表态。收地的文件按最不利的方案下来了，补偿是评估价的六成，仓库限期三个月搬空。",
      "legacyCondition": ""
    },
    {
      "id": "GF15_Y15_AUTUMN_081",
      "title": "第 15 年秋季事件",
      "condition": "第15年·秋季",
      "weight": 100.0,
      "once": true,
      "text": "年底最后一天，厂区安静下来。你从车间一路走到大门口，回头看了一眼那根烟囱。十五年前你第一次站在这儿的时候，它冒的烟比现在浓得多。",
      "fund": 0.0,
      "stress": 0.0,
      "relationTarget": "",
      "relation": 0.0,
      "project": "",
      "eventType": "year_story",
      "year": 15,
      "season": "秋",
      "speakerId": "narr",
      "speaker": "旁白",
      "choices": [
        {
          "id": "1",
          "text": "（走出厂门）",
          "hint": "",
          "result": "",
          "effects": {}
        }
      ],
      "missText": "",
      "legacyCondition": ""
    }
  ],
  "timeSeries": [],
  "cgs": [
    {
      "id": "S01",
      "person": "",
      "personName": "",
      "category": "序章",
      "threshold": 0,
      "title": "上任第一天",
      "trigger": "首次开始新游戏",
      "scene": "2030年的工业园区、集团办公室与传统制造工厂依次出现，最后切换至厂长办公室。",
      "story": "2030年。\n这一年，中国迎来了碳达峰目标的重要时间节点。\n从节能降碳到资源循环，从生产工艺到产品全生命周期，绿色转型正逐渐成为制造业竞争的重要议题。\n越来越多的客户开始关注供应商的环境表现。企业不仅要把产品做好，还要回答一个新的问题：\n工厂如何在经营发展的同时，走上低碳转型之路？\n但对于许多传统制造企业来说，改变并没有那么容易。\n2030年1月。\n你今年32岁，在制造业工作了近十年。\n今天，你收到集团的一份任命书。\n从现在开始，你就是这座工厂的新任厂长。\n过去，你只需要做好自己负责的工作。\n而现在，生产、订单、成本、人员，以及工厂未来的发展，都需要你来决定。\n这是一座经营了多年的传统制造工厂。\n订单还算稳定，也有一些利润。但设备逐渐老化，能源和原材料成本不断上涨，能够用于改造的资金并不宽裕。\n更重要的是，外面的世界正在变化。\n客户开始提出新的绿色采购要求，同行陆续开展节能降碳改造，集团希望工厂继续增长，却又不愿承担过高的投资风险。\n是优先扩大生产，还是更新设备？是先改善利润，还是提前布局绿色转型？\n未来十年，这座工厂会变成什么样子？\n2030年1月。\n你的第一天，开始了。\n【开始经营】",
      "gallery": "十年的经营，从上任第一天开始。",
      "variants": "",
      "text": "十年的经营，从上任第一天开始。",
      "image": "S01_上任第一天.png",
      "enabled": true
    },
    {
      "id": "A01",
      "person": "chen_engineer",
      "personName": "陈工",
      "category": "人物关系",
      "threshold": 60,
      "title": "陈工：画到一半的图",
      "trigger": "陈工达到第一阶段好感度。",
      "scene": "傍晚的技术办公室，桌上摊着工程图纸，陈工正用铅笔在纸上修改细节。夕阳照在散落的尺子和笔记本上。",
      "story": "你来技术办公室找陈工，发现桌上放着一本画满了草图的旧笔记本。有设备结构，也有厂房、树木和办公室窗外的景色。\n“都是等设备跑数据的时候随手画的。”陈工有点不好意思地把本子合上。\n你这才知道，原来陈工除了喜欢研究机器，还挺喜欢画画。",
      "gallery": "有些人眼中的工厂，不只有机器和图纸。",
      "variants": "",
      "text": "有些人眼中的工厂，不只有机器和图纸。",
      "image": "A01_陈工_画到一半的图.png",
      "enabled": true
    },
    {
      "id": "A02",
      "person": "chen_engineer",
      "personName": "陈工",
      "category": "人物关系",
      "threshold": 100,
      "title": "陈工：没画完的那一页",
      "trigger": "陈工达到第二阶段好感度，且已经解锁A01。",
      "scene": "陈工和厂长站在办公室窗前，桌上摆着一本翻开的画册。画册记录了不同年份的工厂景象。",
      "story": "陈工把那本旧笔记本拿给你看，里面多了许多这几年画下的厂区景色。\n你从第一页翻到最后一页，发现办公楼前的树长高了，仓库换过屋顶，就连门卫室的样子也有些不同。\n最后一页只画了一半。\n“还没画完呢。”陈工笑了笑，“以后还会变的，留点地方。”",
      "gallery": "故事还没画完，工厂也一样。",
      "variants": "",
      "text": "故事还没画完，工厂也一样。",
      "image": "A02_陈工_没画完的那一页.png",
      "enabled": true
    },
    {
      "id": "A03",
      "person": "liu_master",
      "personName": "刘师傅",
      "category": "人物关系",
      "threshold": 60,
      "title": "刘师傅：窗台上的橘子",
      "trigger": "刘师傅达到第一阶段好感度。",
      "scene": "车间休息室，午后的阳光落在窗台上，两个人坐在旧桌旁剥橘子，桌上放着保温杯。",
      "story": "你路过休息室时，刘师傅招呼你坐下，从袋子里拿出两个橘子。\n“家里买多了，帮忙解决一下。”\n你们聊了一会儿设备、天气，还有厂区附近那家新开的面馆。\n快离开时，刘师傅又往你手里塞了一个：“这个也带着，别浪费。”",
      "gallery": "有些关心，不过是顺手多拿了一个橘子。",
      "variants": "",
      "text": "有些关心，不过是顺手多拿了一个橘子。",
      "image": "A03_刘师傅_窗台上的橘子.png",
      "enabled": true
    },
    {
      "id": "A04",
      "person": "liu_master",
      "personName": "刘师傅",
      "category": "人物关系",
      "threshold": 100,
      "title": "刘师傅：照片背面",
      "trigger": "刘师傅达到第二阶段好感度，且已经解锁A03。",
      "scene": "刘师傅在休息室拿着一张旧合照，照片里是年轻时的员工们。厂长坐在一旁，桌面上摊着几张不同年代的照片。",
      "story": "刘师傅翻出一张许多年前的车间合照，让你猜哪个是年轻时的自己。\n你猜了三次都没猜对，他笑得连眼角都皱了起来。\n照片背面写着日期，还有几个人的名字。\n“有的人早就不在这儿干了。”刘师傅用手指轻轻压平照片的一角，“不过那时候的事，现在想起来还是挺清楚的。”",
      "gallery": "照片会慢慢泛黄，记忆却总能找到回来的路。",
      "variants": "",
      "text": "照片会慢慢泛黄，记忆却总能找到回来的路。",
      "image": "A04_刘师傅_照片背面.png",
      "enabled": true
    },
    {
      "id": "A05",
      "person": "lin_manager",
      "personName": "林经理",
      "category": "人物关系",
      "threshold": 60,
      "title": "林经理：不在报表上的数字",
      "trigger": "林经理达到第一阶段好感度。",
      "scene": "傍晚的财务办公室，电脑屏幕已经熄灭，林经理正用便利贴折一只小小的纸鹤，旁边放着计算器和半杯水。",
      "story": "你发现林经理办公桌的一角摆着几只用废便签纸折成的小纸鹤。\n她说，每次遇到特别难处理的账，就会在休息时折一只，换换脑子。\n你数了数桌上的纸鹤，问她是不是最近工作特别辛苦。\n“也没有。”她停顿了一下，“有些是以前留下来的。”",
      "gallery": "报表之外，也有一些不需要计算的事情。",
      "variants": "",
      "text": "报表之外，也有一些不需要计算的事情。",
      "image": "A05_林经理_不在报表上的数字.png",
      "enabled": true
    },
    {
      "id": "A06",
      "person": "lin_manager",
      "personName": "林经理",
      "category": "人物关系",
      "threshold": 100,
      "title": "林经理：难得不算账",
      "trigger": "林经理达到第二阶段好感度，且已经解锁A05。",
      "scene": "周末的城市公园，林经理穿着休闲服坐在长椅上，手里拿着一本书。厂长在旁边，远处有人遛狗、散步。",
      "story": "周末，你在公园里偶遇了林经理。没有电脑，没有报表，她正坐在长椅上看书。\n你开玩笑问她，是不是连周末出来玩也要算一算时间成本。\n她合上书，认真想了两秒：“今天不算。”\n你们在公园里坐了一会儿，聊了许多与工厂无关的事。",
      "gallery": "偶尔不必计算得失，也是生活的一部分。",
      "variants": "",
      "text": "偶尔不必计算得失，也是生活的一部分。",
      "image": "A06_林经理_难得不算账.png",
      "enabled": true
    },
    {
      "id": "A07",
      "person": "shao_director",
      "personName": "邵总监",
      "category": "人物关系",
      "threshold": 60,
      "title": "邵总监：没带公文包的人",
      "trigger": "邵总监达到第一阶段好感度。",
      "scene": "普通书店的一角，邵总监穿着休闲外套，站在书架前翻书。厂长刚好从另一侧书架经过。",
      "story": "你在书店里意外碰见了邵总监。\n平时总是西装笔挺、带着公文包的他，今天穿了一件普通夹克，手里拿着一本旧版的小说。\n你们一时都有些不习惯在工作场合之外见到对方。\n“别愣着了。”他笑着说，“今天不用叫我邵总监。”",
      "gallery": "离开会议室以后，每个人也有自己的生活。",
      "variants": "",
      "text": "离开会议室以后，每个人也有自己的生活。",
      "image": "A07_邵总监_没带公文包的人.png",
      "enabled": true
    },
    {
      "id": "A08",
      "person": "shao_director",
      "personName": "邵总监",
      "category": "人物关系",
      "threshold": 100,
      "title": "邵总监：那张旧名片",
      "trigger": "邵总监达到第二阶段好感度，且已经解锁A07。",
      "scene": "安静的咖啡馆，桌上放着一张磨旧的名片。窗外行人经过，两人坐在窗边聊天。",
      "story": "邵总监从钱包里拿出一张很旧的名片，上面的职位和现在完全不同。\n他说，那是自己刚开始负责工厂业务时印的，后来换了好几次岗位，却一直没舍得扔。\n“那时候也不知道自己能干多久。”他把名片翻过来，又收回钱包里。\n你忽然发现，原来那些看起来经验丰富的人，也都曾经是第一次担任某个职位。",
      "gallery": "所谓经验，不过是许多个第一次留下来的痕迹。",
      "variants": "",
      "text": "所谓经验，不过是许多个第一次留下来的痕迹。",
      "image": "A08_邵总监_那张旧名片.png",
      "enabled": true
    },
    {
      "id": "A09",
      "person": "qi_supervisor",
      "personName": "祁主管",
      "category": "人物关系",
      "threshold": 60,
      "title": "祁主管：通话结束之后",
      "trigger": "祁主管达到第一阶段好感度。",
      "scene": "办公楼走廊尽头，祁主管坐在窗边台阶上，手机放在旁边，窗外是傍晚的工业园区。",
      "story": "你看见祁主管一个人坐在走廊尽头，难得没有打电话。\n他刚和客户结束一场漫长的沟通，正望着窗外发呆。\n“别担心，我没事。”看见你过来，他笑着摆摆手，“就是想享受一下手机不响的这五分钟。”\n你坐下来陪了他一会儿，谁也没有提工作的事。",
      "gallery": "有时候，最好的陪伴是一起安静五分钟。",
      "variants": "",
      "text": "有时候，最好的陪伴是一起安静五分钟。",
      "image": "A09_祁主管_通话结束之后.png",
      "enabled": true
    },
    {
      "id": "A10",
      "person": "qi_supervisor",
      "personName": "祁主管",
      "category": "人物关系",
      "threshold": 100,
      "title": "祁主管：没有目的地的周末",
      "trigger": "祁主管达到第二阶段好感度，且已经解锁A09。",
      "scene": "郊外的普通公路旁，祁主管背着相机，厂长站在旁边。远处是田野和树木，天空明亮。",
      "story": "祁主管邀请你去郊外走走，说自己难得有个不用赶行程的周末。\n一路上，他拍了很多照片：路边的老房子、田里的稻草堆，还有一只在树荫下睡觉的猫。\n你问他为什么突然喜欢拍这些。\n“平时到处跑，总觉得每个地方都待不够久。”他看了看相机里的照片，“今天不用赶下一站，挺好的。”",
      "gallery": "不是每一次出发，都需要一个目的地。",
      "variants": "B组｜绿色工厂建设CG",
      "text": "不是每一次出发，都需要一个目的地。",
      "image": "A10_祁主管_没有目的地的周末.png",
      "enabled": true
    },
    {
      "id": "B01",
      "person": "",
      "personName": "",
      "category": "绿色建设",
      "threshold": 0,
      "title": "灯亮起来了",
      "trigger": "完成车间照明节能改造。",
      "scene": "改造后的车间内部，新照明设备均匀照亮工作区域，员工正在正常作业。厂长站在车间通道上观察。",
      "story": "车间的照明改造终于完成了。\n你沿着生产线走了一圈，发现原先有些昏暗的角落现在也能看清了。几位员工正在新灯下检查产品，似乎还不太习惯这样的变化。\n“比以前亮堂多了。”有人抬头看了看灯，又继续手里的工作。",
      "gallery": "改变有时候很简单，不过是让灯亮得更合适一些。",
      "variants": "",
      "text": "改变有时候很简单，不过是让灯亮得更合适一些。",
      "image": "B01_灯亮起来了.png",
      "enabled": true
    },
    {
      "id": "B02",
      "person": "",
      "personName": "",
      "category": "绿色建设",
      "threshold": 0,
      "title": "第一次读懂曲线",
      "trigger": "建立能源分项计量和监测系统，并完成首轮有效数据分析。",
      "scene": "办公室内，电脑显示着不同车间的用能曲线。厂长和陈工站在屏幕前，桌边放着手写记录和旧数据表。",
      "story": "新的能源监测系统运行了一段时间，终于积累了足够的数据。\n屏幕上的曲线有高有低，有些符合预期，也有几处让人摸不着头脑。\n陈工把过去的记录摊在桌上，开始逐一比对。\n你第一次感觉到，那些过去只能从电费账单上看到的消耗，终于有了更清楚的模样。",
      "gallery": "看见问题，往往是改变问题的第一步。",
      "variants": "",
      "text": "看见问题，往往是改变问题的第一步。",
      "image": "B02_第一次读懂曲线.png",
      "enabled": true
    },
    {
      "id": "B03",
      "person": "",
      "personName": "",
      "category": "绿色建设",
      "threshold": 0,
      "title": "水的回程",
      "trigger": "完成符合工厂工艺要求的生产用水循环利用项目。",
      "scene": "设备间里，循环水管道、储水设施和水处理设备整齐排列。维护人员正在查看仪表，厂长站在一旁。",
      "story": "新的循环用水设施正式投入运行了。\n你跟着工作人员走过设备间，听对方讲解水经过处理后，如何重新回到适用的生产环节。\n那些过去看不见的用水过程，如今有了一条条可以追踪的管道和记录。\n走出设备间时，你发现地上还留着安装设备时画下的标线。",
      "gallery": "有些水的旅程，并不需要在使用一次后就结束。",
      "variants": "",
      "text": "有些水的旅程，并不需要在使用一次后就结束。",
      "image": "B03_水的回程.png",
      "enabled": true
    },
    {
      "id": "B04",
      "person": "",
      "personName": "",
      "category": "绿色建设",
      "threshold": 0,
      "title": "屋顶上的阳光",
      "trigger": "屋顶光伏项目完成并正常投入运行。",
      "scene": "从安全的厂区高处望去，阳光落在厂房屋顶排列整齐的光伏组件上。远处仍是普通的工业园区。",
      "story": "屋顶光伏系统通过验收，开始正式运行。\n你站在可以俯瞰厂房的位置，看着阳光落在一排排深蓝色组件上。厂房里依旧传来熟悉的生产声音，一切似乎和平时没什么不同。\n只是从今天起，这些过去只能遮风挡雨的屋顶，也开始承担新的工作了。",
      "gallery": "同样一片阳光，有了新的用处。",
      "variants": "",
      "text": "同样一片阳光，有了新的用处。",
      "image": "B04_屋顶上的阳光.png",
      "enabled": true
    },
    {
      "id": "B05",
      "person": "",
      "personName": "",
      "category": "绿色建设",
      "threshold": 0,
      "title": "腾出来的地方",
      "trigger": "完成厂区空间优化及物料、废弃物分类周转设施改造。",
      "scene": "整理后的仓储周转区域，货架和物料摆放有序，不同类别的物料及废弃物有清晰标识，原先拥挤的通道恢复宽敞。",
      "story": "仓储与物料周转区域的改造终于结束了。\n你沿着新规划的通道走过去，发现原来堆满杂物的一角，现在已经可以顺畅通行。\n仓库负责人拿着新旧两张平面图比划了半天，最后指着其中一处笑了笑。\n“早知道可以这样安排，当初就不用绕那么远了。”",
      "gallery": "未必需要更多地方，有时候只是需要重新安排。",
      "variants": "",
      "text": "未必需要更多地方，有时候只是需要重新安排。",
      "image": "B05_腾出来的地方.png",
      "enabled": true
    },
    {
      "id": "B06",
      "person": "",
      "personName": "",
      "category": "绿色建设",
      "threshold": 0,
      "title": "产品的另一张图纸",
      "trigger": "完成一项经过验证、不降低必要性能与质量要求的产品绿色设计改进。",
      "scene": "研发办公室里，两版产品结构图并排放在工作台上，旁边是新旧样品和测试记录。厂长与研发人员正在查看细节。",
      "story": "新版产品完成了最后一轮验证。\n它看起来和之前的产品没有太大不同，但部分材料、结构和制造方式已经悄悄发生了变化。\n研发人员把新旧两份图纸摊开，指给你看那些调整过的细节。\n你意识到，绿色改造不一定只发生在生产线上，有时也从一张图纸开始。",
      "gallery": "让产品变得更好，也可以从重新设计它开始。",
      "variants": "",
      "text": "让产品变得更好，也可以从重新设计它开始。",
      "image": "B06_产品的另一张图纸.png",
      "enabled": true
    },
    {
      "id": "B07",
      "person": "",
      "personName": "",
      "category": "绿色建设",
      "threshold": 0,
      "title": "从高处看这座工厂",
      "trigger": "工厂在能源、资源、生产、产品和厂区管理等方面达到较高的综合绿色发展水平。",
      "scene": "从高处俯瞰已经历多年改造的工厂。可以辨认出不同阶段建设的设施、更新后的厂房、清晰的物流通道，以及仍在正常运转的生产线。",
      "story": "今天，你有机会从一个平时很少经过的角度俯瞰整座工厂。\n新的设备、重新规划的厂区、改造过的屋顶，还有那些已经习以为常的变化，都安静地出现在眼前。\n你试着回忆自己刚来时这里的样子，发现有些细节已经记不太清了。\n这座工厂仍然需要解决新的问题，但它确实和从前不一样了。",
      "gallery": "改变不是一夜之间发生的，却能在某一天被清楚地看见。",
      "variants": "C组｜生产经营CG",
      "text": "改变不是一夜之间发生的，却能在某一天被清楚地看见。",
      "image": "B07_从高处看这座工厂.png",
      "enabled": true
    },
    {
      "id": "C01",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "第一份计划",
      "trigger": "玩家首次确认2030年的经营计划。",
      "scene": "厂长办公室，桌上摊着年度经营计划、几份资料和一支签字笔。厂长坐在办公桌前，窗外是正在运转的工厂。",
      "story": "你终于完成了上任后的第一份年度经营计划。\n纸上写着今年准备做的事情，有些已经考虑得很清楚，有些还需要走一步看一步。\n你又检查了一遍，确认没有遗漏，才把文件放到桌面最显眼的位置。\n明天，这些写在纸上的计划，就要一点点变成现实了。",
      "gallery": "十年的经营，从这张纸开始。",
      "variants": "",
      "text": "十年的经营，从这张纸开始。",
      "image": "C01_第一份计划.png",
      "enabled": true
    },
    {
      "id": "C02",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "第一年的最后一天",
      "trigger": "玩家完成2030年全部12个月的经营，首次进入年度结束结算。",
      "scene": "冬日傍晚的厂长办公室，夕阳落在办公桌上，桌边放着2030年的日历。厂长站在窗边，看着仍在运转的工厂。",
      "story": "这一年的最后一个工作月终于结束了。\n你翻看着年初制定的计划，有些事情顺利完成，有些比想象中困难，还有一些不得不留到明年。\n窗外，工厂依旧和往常一样忙碌。\n你把旧日历合上，忽然发现，自己已经在这里当了一整年的厂长。",
      "gallery": "原来一年的时间，真的可以发生这么多事。",
      "variants": "",
      "text": "原来一年的时间，真的可以发生这么多事。",
      "image": "C02_第一年的最后一天.png",
      "enabled": true
    },
    {
      "id": "C03",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "报表上的红字",
      "trigger": "首次出现年度经营亏损。",
      "scene": "夜晚的厂长办公室，办公桌上摊着年度经营报表，几项数字被红笔圈了起来。厂长独自坐在桌前，神情凝重。",
      "story": "今年的经营结果并不理想。\n你重新看了一遍报表，确认自己没有看错那些数字。收入、成本、投入，每一项都有来由，但放在一起，结果还是让人有些难以接受。\n办公室安静了很久。\n最后，你拿起笔，在新的一页纸上写下明年需要重新考虑的事情。",
      "gallery": "不是每一年的努力，都会换来满意的结果。",
      "variants": "",
      "text": "不是每一年的努力，都会换来满意的结果。",
      "image": "C03_报表上的红字.png",
      "enabled": true
    },
    {
      "id": "C04",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "还剩多少钱",
      "trigger": "可用资金首次进入预设的资金紧张区间。",
      "scene": "午后的办公室，厂长拿着资金情况表，桌边放着计算器和几份尚待安排的年度计划资料。窗外阳光很好，室内却显得格外安静。",
      "story": "你看着最新的可用资金数字，开始重新盘算接下来的安排。\n原本想做的事情还有不少，但钱显然不能同时花在所有地方。\n你把计划翻到第一页，又从头看了一遍。\n有些决定并不是不想做，只是眼下还需要再等等。",
      "gallery": "当钱不够用的时候，每一种选择都变得具体起来。",
      "variants": "",
      "text": "当钱不够用的时候，每一种选择都变得具体起来。",
      "image": "C04_还剩多少钱.png",
      "enabled": true
    },
    {
      "id": "C05",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "今天先到这里",
      "trigger": "厂长压力首次达到预设的较高水平。",
      "scene": "深夜的厂长办公室，台灯照着桌上的资料，窗外厂区大部分区域已经熄灯。厂长靠在椅背上，揉着眉心，桌上放着一杯已经凉掉的水。",
      "story": "你发现自己已经盯着同一页文件看了很久。\n这一阵子要考虑的事情实在太多，连平时很容易做出的决定，现在也要反复想上好几遍。\n你合上文件，伸手关掉台灯。\n剩下的事，明天再说吧。",
      "gallery": "厂长也不是一台可以一直运转的机器。",
      "variants": "",
      "text": "厂长也不是一台可以一直运转的机器。",
      "image": "C05_今天先到这里.png",
      "enabled": true
    },
    {
      "id": "C06",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "终于转正的数字",
      "trigger": "上一年度经营亏损，本年度经营重新实现盈利。",
      "scene": "明亮的办公室，厂长坐在桌前查看年度经营报表，阳光透过窗户照进来。报表上的经营结果已经由负转正。",
      "story": "你看到今年的经营结果时，忍不住又核对了一遍。\n那些曾经让人头疼的数字，终于重新回到了正数。\n这并不意味着所有问题都解决了。下一年依旧有很多需要考虑的事情，但至少此前做过的调整，有了一份看得见的结果。\n你把报表放回文件夹，心情比昨天轻松了不少。",
      "gallery": "有些好消息，需要等很久才能等到。",
      "variants": "",
      "text": "有些好消息，需要等很久才能等到。",
      "image": "C06_终于转正的数字.png",
      "enabled": true
    },
    {
      "id": "C07",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "平稳的三年",
      "trigger": "工厂连续三个完整经营年度实现盈利，首次达成时触发。",
      "scene": "厂长办公室的桌面上，三份不同年份的年度经营总结依次摆放。窗外阳光明亮，厂长正在整理文件，神情平静。",
      "story": "整理文件时，你把最近三年的经营总结放在了一起。\n这三年里，并不是每个月都顺利。成本有过波动，计划也调整过许多次。\n但至少到每年结束时，工厂都交出了一份盈利的成绩单。\n你把三份文件整齐地放进柜子里，忽然觉得，能够一直稳稳地经营下去，也是一件不容易的事。",
      "gallery": "比起偶尔的一次成功，平稳地走下去也需要本事。",
      "variants": "",
      "text": "比起偶尔的一次成功，平稳地走下去也需要本事。",
      "image": "C07_平稳的三年.png",
      "enabled": true
    },
    {
      "id": "C08",
      "person": "",
      "personName": "",
      "category": "生产经营",
      "threshold": 0,
      "title": "已经五年了",
      "trigger": "完成2034年12月的经营，正式度过前五个经营年度。",
      "scene": "与《上任第一天》相近的办公室构图。厂长站在窗前，办公桌上放着2030年和2034年的文件，窗外是经营五年后的工厂。",
      "story": "今天整理旧文件时，你翻出了2030年刚上任时制定的第一份年度计划。\n那时你刚坐进这间办公室，对许多事情还没有把握。\n如今五年过去，有些当年的计划已经完成，有些改变了方向，还有些问题仍然需要继续面对。\n你望向窗外，试着回忆自己第一次走进这间办公室时的心情。\n五年好像很长，又好像只是一转眼。",
      "gallery": "走到一半时，才发现自己已经走了很远。",
      "variants": "2040年结局CG",
      "text": "走到一半时，才发现自己已经走了很远。",
      "image": "C08_已经五年了.png",
      "enabled": true
    },
    {
      "id": "E01",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "第十年的春天",
      "trigger": "经营表现优秀，绿色表现优秀。",
      "scene": "2040年春天，厂长站在办公室窗前。窗外的厂区经过多年改造，仍然是一座普通的制造工厂，但比十年前更加整洁、完善。门卫室旁的花正在开放。",
      "story": "2040年春天，厂门口的花又开了。\n你翻看着过去十年的经营记录。工厂的利润比刚来时好了许多，能源、资源和生产方式也有了实实在在的改善。\n这十年并不是每一步都走得顺利。有过犹豫，有过资金紧张，也有些项目比预想中花了更长时间。\n但最终，那些当初一点点做出的决定，都在今天留下了痕迹。\n窗外，工人们正陆续走进车间。一切都和平时一样。\n你忽然想起，十年前第一次来到这里时，也是这样的一个早晨。",
      "gallery": "十年后，花照常开放，而这座工厂已经有了新的模样。",
      "variants": "",
      "text": "十年后，花照常开放，而这座工厂已经有了新的模样。",
      "image": "E01_第十年的春天.png",
      "enabled": true
    },
    {
      "id": "E02",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "留下来的改变",
      "trigger": "绿色表现优秀，但经营表现未达到优秀水平；未进入严重资金危机结局。",
      "scene": "厂长站在改造后的厂区，身边是这些年陆续更新的设备和设施。天气晴朗，但厂区并不繁华，整体仍显得朴素。",
      "story": "十年过去，这座工厂没有成为集团里最赚钱的那一家。\n一些年份的经营成绩还不错，另一些年份却过得很紧张。为了筹措资金，你不止一次重新调整过投资计划。\n好在许多绿色改造最终还是完成了。\n如今，工厂的能源利用效率、资源管理和生产条件都比从前有了明显改善。那些曾经需要反复解释的改造项目，也已经成了日常生产的一部分。\n只是经营上的难题并没有全部解决。\n你望着眼前的厂区，知道这十年的努力并没有白费，也知道接下来还有不少事情要做。",
      "gallery": "有些投入还没有得到理想的回报，但改变已经留了下来。",
      "variants": "",
      "text": "有些投入还没有得到理想的回报，但改变已经留了下来。",
      "image": "E02_留下来的改变.png",
      "enabled": true
    },
    {
      "id": "E03",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "两张成绩单",
      "trigger": "经营表现优秀，绿色表现中等。",
      "scene": "厂长办公室的桌面上，一边是经营报表，另一边是绿色工厂评价记录。窗外部分设备和建筑已经更新，仍有一些地方保留着过去的样子。",
      "story": "2040年的经营报告令人满意。\n利润增长了，账上的资金也更加充裕。至少从经营成绩来看，你把这座工厂管理得不错。\n这些年，工厂也做过不少绿色改造。有的项目已经产生了效果，有的还没有达到最初的预期。\n你把十年的经营报表和绿色绩效记录放在一起。\n两份成绩单都有进步，只是进步的幅度并不一样。\n你重新翻开了那份尚未完成的改造计划，在最后一页补上了今天的日期。",
      "gallery": "把生意做好了，也开始改变工厂，只是故事还没有写完。",
      "variants": "",
      "text": "把生意做好了，也开始改变工厂，只是故事还没有写完。",
      "image": "E03_两张成绩单.png",
      "enabled": true
    },
    {
      "id": "E04",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "漂亮的报表",
      "trigger": "经营表现优秀，绿色表现较弱。",
      "scene": "桌上整齐摆放着十年的经营报表，窗外的工厂繁忙而略显老旧。角落里放着几份多年前的绿色改造方案。",
      "story": "2040年的年度经营报告出来了。\n利润不错，账上的资金也很充裕。从财务数字来看，你确实把这座工厂经营得很好。\n只是当你翻到绿色绩效那一页时，才发现它与十年前相比并没有太大的变化。\n这些年，你做过很多选择，也抓住了不少经营机会。至于那些节能、节水和生产改造项目，总有更紧急的事情排在前面。\n如今的工厂仍然忙碌，设备每天照常运转。\n你把两份报告收进同一个文件夹，心里却很清楚，它们讲述的是两种不太一样的十年。",
      "gallery": "这是一份漂亮的成绩单，只是有些题目始终没有回答。",
      "variants": "",
      "text": "这是一份漂亮的成绩单，只是有些题目始终没有回答。",
      "image": "E04_漂亮的报表.png",
      "enabled": true
    },
    {
      "id": "E05",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "照常开门",
      "trigger": "经营表现平稳，绿色表现中等。",
      "scene": "2040年一个普通的早晨。厂长站在办公室窗前，门卫室的灯刚刚熄灭，工人陆续进入厂区，车间准备开始新一天的生产。",
      "story": "2040年，工厂照常开门。\n过去十年，没有发生什么足以让人津津乐道的大事。\n经营有起有伏，绿色改造也陆续做了一些。部分设备已经换过，几个困扰多年的问题终于得到改善，但还有不少事情没来得及完成。\n你曾经期待过，这座工厂会不会在自己手里发生翻天覆地的变化。\n现在回头看，变化好像并没有那么惊人。\n不过，车间还在运转，熟悉的声音依旧从窗外传来。\n你喝完杯子里最后一口水，拿起文件，准备开始今天的工作。",
      "gallery": "大多数日子平平常常，十年就是这样一点点过来的。",
      "variants": "",
      "text": "大多数日子平平常常，十年就是这样一点点过来的。",
      "image": "E05_照常开门.png",
      "enabled": true
    },
    {
      "id": "E06",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "明年再说",
      "trigger": "经营表现平稳，绿色表现较弱。",
      "scene": "厂长办公室内，几份不同年份的改造方案堆在文件柜里。窗外的厂房依旧有些老旧，工厂仍然正常生产。",
      "story": "整理文件时，你翻出了一份2031年的绿色改造计划。\n那年因为资金安排紧张，几个项目被推迟到了下一年。\n第二年，又出现了其他更急迫的经营事项。\n后来几年，这份计划被修改过很多次。有些内容已经不再适用，也有些直到今天仍然没有完成。\n工厂的经营倒是一直维持着，虽然没有特别亮眼的成绩，但也还算过得去。\n你看着那份旧文件，忽然发现，自己曾经说过很多次“明年再说”。\n如今，已经是2040年了。",
      "gallery": "明年总会到来，只是机会未必一直等在那里。",
      "variants": "",
      "text": "明年总会到来，只是机会未必一直等在那里。",
      "image": "E06_明年再说.png",
      "enabled": true
    },
    {
      "id": "E07",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "还没到放弃的时候",
      "trigger": "工厂经营困难，但尚未达到严重资金危机条件；绿色表现未达到优秀。",
      "scene": "阴天的厂长办公室，桌上散放着报表和计划，厂长坐在办公桌前重新整理文件。窗外工厂仍在生产，但整体显得有些冷清。",
      "story": "这十年的最后一份经营报表，仍然不太理想。\n过去几年，你已经多次调整过经营计划。有些办法起了作用，有些却没能改变结果。\n工厂也进行过一些改造，只是受到经营状况和资金的限制，许多计划始终没能推进下去。\n你看着桌上的文件，突然有些怀念刚上任的时候。\n那时你觉得，只要把计划安排得足够仔细，总能找到一条合适的路。\n十年过去，你终于明白，有些问题不是靠一份漂亮的计划就能解决的。\n不过，至少今天，工厂的大门仍然开着。",
      "gallery": "没有走到想去的地方，但你还没有停下来。",
      "variants": "",
      "text": "没有走到想去的地方，但你还没有停下来。",
      "image": "E07_还没到放弃的时候.png",
      "enabled": true
    },
    {
      "id": "E08",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "最后一份通知",
      "trigger": "严重资金危机，工厂已无法维持既定经营方式。优先于其他结局。",
      "scene": "冬日的厂长办公室。办公桌上放着一份经营调整通知和2030年的任命书，文件柜有些空了。厂长站在桌前整理物品，窗外是安静的工厂。",
      "story": "集团的通知终于下来了。\n长期的亏损和资金困难，让这座工厂已经无法继续按照原来的方式经营。经过讨论，集团决定对厂区业务和资产进行重新整合。\n通知上只有短短几段话，但接下来需要处理的事情还有很多。\n你开始整理办公室里的文件。\n十年经营记录、尚未完成的改造计划，还有一张不知道什么时候夹进文件夹里的旧照片。\n最后，你翻出了2030年的任命书。\n那时你32岁，第一次来到这里。你还记得自己走进办公室时，曾经认真打量过窗外的每一栋厂房。\n你把任命书折好，放进随身的文件夹。\n离开之前，你又看了一眼窗外。",
      "gallery": "十年没有按照预想的方式结束，但那些走过的日子都是真的。",
      "variants": "",
      "text": "十年没有按照预想的方式结束，但那些走过的日子都是真的。",
      "image": "E08_最后一份通知.png",
      "enabled": true
    },
    {
      "id": "E09",
      "person": "",
      "personName": "",
      "category": "2040结局",
      "threshold": 0,
      "title": "那份材料",
      "trigger": "玩家在2030—2039年的经营过程中，至少选择并执行过一次伪造数据截图或贿赂评审专家的行为，且在本轮游戏中被查实（90%概率）。",
      "scene": "阴沉的午后，厂长独自坐在办公室里。桌上摊着一份调查处理通知，旁边是几年前的绿色工厂评价材料。窗外仍然能看见正在运转的工厂，房间里却格外安静。",
      "story": "2040年，你收到了一份有关工厂绿色评价违规问题的调查处理通知。\n几年前的那次选择，终究还是被查了出来。\n当时，为了让评价顺利通过，你曾试图在材料或评审环节走一条捷径。那时候，你以为只要过了眼前这一关，事情就算结束了。\n如今，调查人员重新核对了相关记录。问题被确认，原有评价结果受到影响，工厂也需要承担相应的整改和责任追究。\n你翻出当年的申报文件。那些曾经让人紧张的指标、来回修改的表格，以及最后作出的那个决定，都还清清楚楚地留在里面。\n窗外，工厂依旧照常运转。\n只是有些东西，已经不能再像从前一样了。",
      "gallery": "走捷径省下的那段路，后来都要重新走一遍。",
      "variants": "根据玩家具体选择，替换正文中的一句话：\n- 伪造截图： “当年，为了让申报材料看起来符合要求，你提交了一份经过修改的数据截图。”\n- 贿赂专家： “当年，为了让评价顺利通过，你试图通过不正当利益影响评审专家的判断。”\n- 两种行为均有： “当年，那份经过修改的数据截图，以及评审期间的不正当安排，如今都成了需要重新核查的问题。”",
      "text": "走捷径省下的那段路，后来都要重新走一遍。",
      "image": "E09_那份材料.png",
      "enabled": true
    }
  ]
};

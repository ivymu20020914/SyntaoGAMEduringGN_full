#!/usr/bin/env node
import fs from 'node:fs';
import vm from 'node:vm';

const [sourcePath, outputPath] = process.argv.slice(2);
if (!sourcePath || !outputPath) {
  console.error('用法：node extract_legacy_events.mjs <原版HTML> <输出JSON>');
  process.exit(2);
}

const source = fs.readFileSync(sourcePath, 'utf8');
const marker = 'var ALL = [';
const start = source.indexOf(marker);
const finish = source.indexOf('var FACILITIES = [', start);
if (start < 0 || finish < 0) throw new Error('没有找到原版厂长事件数组');
const open = source.indexOf('[', start);
const beforeFacilities = source.lastIndexOf('];', finish);
const expression = source.slice(open, beforeFacilities + 1);
const events = vm.runInNewContext(`(${expression})`, {
  facLv: () => 0,
  Math,
});

const speakers = {
  zhou: '老周', lin: '林薇', chen: '陈工', zhao: '老赵', ma: '马副总',
  wu: '小吴', liu: '小刘', ban: '新任车间主任', ma2: '集团新领导',
  xin: '小周', you: '你', narr: '旁白', '': '旁白',
};
const seasonCode = { 春: 'SPRING', 夏: 'SUMMER', 秋: 'AUTUMN', 冬: 'WINTER' };
const stripHtml = value => String(value ?? '')
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .trim();
const jsonSafe = value => JSON.parse(JSON.stringify(value ?? {}, (_, v) => typeof v === 'function' ? undefined : v));

const normalized = events.map((event, index) => {
  const year = Number(event.y) || 1;
  const season = String(event.s || '春');
  const choices = Array.isArray(event.o) ? event.o.map((choice, choiceIndex) => ({
    id: `${choiceIndex + 1}`,
    text: stripHtml(choice.t || `选择 ${choiceIndex + 1}`),
    hint: stripHtml(choice.h || ''),
    result: stripHtml(choice.r || ''),
    effects: jsonSafe(choice.fx),
  })) : [];
  return {
    id: `GF15_Y${String(year).padStart(2, '0')}_${seasonCode[season] || 'SEASON'}_${String(index + 1).padStart(3, '0')}`,
    year,
    season,
    speakerId: String(event.who || 'narr'),
    speaker: speakers[String(event.who || '')] || String(event.who || '旁白'),
    title: stripHtml(event.title || `第 ${year} 年${season}季事件`),
    text: stripHtml(event.t || ''),
    missText: stripHtml(event.ig?.t || ''),
    choices,
    pool: Boolean(event.pool),
    build: Boolean(event.build),
    key: String(event.key || ''),
    hasLegacyCondition: typeof event.need === 'function' || Boolean(event.alt),
    legacyCondition: typeof event.need === 'function' ? String(event.need) : '',
    sourceIndex: index + 1,
  };
});

fs.writeFileSync(outputPath, JSON.stringify(normalized, null, 2), 'utf8');
const years = [...new Set(normalized.map(event => event.year))];
console.log(`已提取 ${normalized.length} 条厂长事件，覆盖第 ${Math.min(...years)}—${Math.max(...years)} 年。`);

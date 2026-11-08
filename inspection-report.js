let reportLang = localStorage.getItem('demo_lang') || 'zh';
const reportText = {
  zh: { label: 'DEMO 验车报告', mileage: '里程', accident: '事故记录', flood: '水灾迹象', road: '道路测试', passed: '通过', engine: '引擎与变速箱', chassis: '车架结构', brakes: '刹车与轮胎', electrical: '电子系统', interior: '内装', body: '车身与漆面', normal: '运作正常', structural: '未发现结构性修复', serviceable: '状态可正常使用', checked: '功能已检查', good: '状态良好', disclosure: '透明公开说明', note: '这是配合车辆资料生成的虚构演示报告，不是真实验车结果。', back: '返回车辆', none: '无已知记录', minor: '轻微外观修复', major: '重大事故', unknown: '未核实', noFlood: '无迹象', flood: '已公开水灾记录', missing: '找不到对应的 DEMO 车辆。' },
  en: { label: 'DEMO INSPECTION REPORT', mileage: 'Mileage', accident: 'Accident record', flood: 'Flood indication', road: 'Road test', passed: 'Passed', engine: 'Engine & transmission', chassis: 'Chassis', brakes: 'Brakes & tyres', electrical: 'Electrical', interior: 'Interior', body: 'Body & paint', normal: 'Normal operation', structural: 'No structural repair found', serviceable: 'Serviceable condition', checked: 'Functions checked', good: 'Good condition', disclosure: 'Transparent disclosure', note: 'This fictional report is generated to match the DEMO vehicle record. It is not a real inspection.', back: 'Back to vehicle', none: 'None known', minor: 'Minor cosmetic repair', major: 'Major accident', unknown: 'Not verified', noFlood: 'No indication', flood: 'Flood record disclosed', missing: 'Matching DEMO vehicle not found.' }
};
const reportScores = { 'CAR-20260811-002': 92, 'CAR-20260811-004': 94, 'CAR-20260811-005': 88 };
const reportEscape = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

function renderReport() {
  const copy = reportText[reportLang];
  const id = new URLSearchParams(location.search).get('car');
  const car = Store.getCars().find(item => item.id === id && item.report);
  document.documentElement.lang = reportLang;
  document.getElementById('reportLang').textContent = reportLang === 'zh' ? 'EN' : '中文';
  document.getElementById('backLabel').textContent = copy.back;
  if (!car) { document.getElementById('report').innerHTML = `<p>${copy.missing}</p>`; return; }
  const accident = copy[car.accident] || copy.unknown;
  const flood = car.flood === 'yes' ? copy.flood : car.flood === 'none' ? copy.noFlood : copy.unknown;
  const defect = reportLang === 'zh' ? (car.notesZh || car.notes) : (car.notesEn || car.notes);
  const reportDate = new Date('2026-08-11T10:00:00+08:00').toLocaleDateString(reportLang === 'zh' ? 'zh-MY' : 'en-MY', { year: 'numeric', month: 'short', day: 'numeric' });
  document.getElementById('report').innerHTML = `<header><div><p class="eyebrow">${copy.label}</p><h1>${car.year} ${reportEscape(car.brand)} ${reportEscape(car.model)}</h1><span class="report-meta">Report ID: ${reportEscape(car.id)} · ${reportDate}</span></div><div class="score">${reportScores[car.id] || 90}<small>/ 100</small></div></header><section class="summary"><div><small>${copy.mileage}</small><b>${car.mileage.toLocaleString('en-MY')} km</b></div><div><small>${copy.accident}</small><b>${accident}</b></div><div><small>${copy.flood}</small><b>${flood}</b></div><div><small>${copy.road}</small><b>${copy.passed}</b></div></section><section class="checks"><div class="check"><small>${copy.engine}</small><b class="ok">✓ ${copy.normal}</b></div><div class="check"><small>${copy.chassis}</small><b class="ok">✓ ${copy.structural}</b></div><div class="check"><small>${copy.brakes}</small><b class="ok">✓ ${copy.serviceable}</b></div><div class="check"><small>${copy.electrical}</small><b class="ok">✓ ${copy.checked}</b></div><div class="check"><small>${copy.interior}</small><b class="ok">✓ ${copy.good}</b></div><div class="check"><small>${copy.body}</small><b>! ${reportEscape(defect)}</b></div></section><p class="note"><b>${copy.disclosure}</b><br>${copy.note}</p>`;
}

document.getElementById('reportLang').addEventListener('click', () => { reportLang = reportLang === 'zh' ? 'en' : 'zh'; localStorage.setItem('demo_lang', reportLang); renderReport(); });
renderReport();

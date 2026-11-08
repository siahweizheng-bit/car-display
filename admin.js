const ADMIN_COPY = {
  zh: {
    vehicles: '车辆', leads: '询盘', staff: '员工', settings: '设置', viewSite: '查看网站', reset: '重置 DEMO', resetFull: '重置完整 DEMO 资料', logout: '退出后台', sandbox: '体验模式：你的修改只保存在当前装置，不会影响其他访客。', sheetPromise: '正式客户版会连接该车行独立的 Google Sheet。', inventory: '库存', inventoryHelp: '点击车辆编辑车况、图片和状态', addCar: '＋ 新增车辆', vehicle: '车辆', price: '价格', transparency: '透明等级', status: '状态', leadHelp: '选择客户查看跟进、负责人和预约', upcomingAppointments: '预约看板', selectLead: '选择一个询盘查看详情', connectionSettings: '正式客户数据连接', scriptUrl: 'Apps Script Web App URL', adminToken: '数据连接密钥', dealerWhatsapp: '车商 WhatsApp 号码', salesWhatsapp: 'Zach 销售 WhatsApp（config.js）', dealerSloganLabel: '中文 Slogan', dealerSloganEnLabel: '英文 Slogan', saveSettings: '保存设置', showroomFeature: '方案 A · 展示站功能', showroomFeatureHelp: '库存、车况、多图、报告与展示内容管理', leadSystemFeature: '方案 B · 系统版功能', leadSystemFeatureHelp: '询盘、跟进、分配、预约与成交管理', brandLabel: '品牌', modelLabel: '型号', year: '年份', priceRm: '价格（RM）', mileage: '里程（km）', accident: '事故记录', flood: '水灾记录', fees: '额外费用', negotiation: '议价方式', minimumPrice: '最低价格（RM）', reportUpload: '验车报告', uploadReport: '选择报告', gallery: '车辆图片与车况标注', galleryHelp: '上传、排序，并逐图标记瑕疵', uploadPhotos: '上传图片', notes: '已知瑕疵与说明', delete: '删除', save: '保存车辆', systemFeature: '方案 B · 系统版功能', systemFeatureHelp: '员工、佣金和薪资属于系统版进阶功能。',
    viewTitleVehicles: '车辆管理', viewTitleLeads: '询盘与预约', viewTitleStaff: '员工与佣金', viewTitleSettings: '系统设置', all: '全部', available: '在售', sold: '已售', hidden: '隐藏', vehicleOwner: '负责销售员', vehicleOwnerHelp: '新询盘会自动分配给这名销售员', gold: '黄金透明', silver: '白银透明', bronze: '基础透明', edit: '编辑', photos: '张图片', localSaved: '已保存在当前装置', syncPending: '正在同步…', syncSuccess: '已同步 Google Sheet', syncError: '同步失败', resetConfirm: '重置会恢复车辆、询盘、员工、薪资、设置和 PIN。确定继续？', resetDone: '完整 DEMO 默认资料已恢复。',
    newLead: '＋ 新增询盘', active: '进行中', won: '已成交', lost: '未成交', archived: '已封存', unassigned: '未分配', new: '新询盘', contacted: '已联系', testDrive: '已试驾', closedWon: '成交', closedLost: '未成交', phone: '电话', budget: '预算', area: '地区', intent: '需求', assigned: '负责人', appointment: '预约时间', appointmentType: '预约类型', leadStatus: '询盘状态', saveChanges: '保存更改', addNote: '新增跟进记录', notePlaceholder: '例如：已发送贷款估算', archive: '封存询盘', deleteForever: '永久删除', noLeads: '这里暂时没有询盘', overdue: '超过 10 分钟未分配', todayAppointments: '未来预约', openLeads: '进行中询盘', workload: '销售员工作量',
    staffTitle: '员工、佣金与薪资', staffHelp: '管理基本资料、成交表现和个别薪资规则', addStaff: '＋ 新增员工', payrollTitle: '月度薪资', payrollHelp: '底薪＋当月佣金＋津贴－扣款', generatePayroll: '生成本月薪资', activeStaff: '在职员工', carsSold: '本月成交车辆', salesValue: '本月成交额', commission: '本月佣金', base: '底薪', estimatedPay: '预计薪资', payrollEmpty: '这个月份尚未生成薪资', paid: '已发', pending: '待发',
    settingsDemo: 'DEMO · 当前装置本地沙盒', settingsClient: '正式客户模式 · 独立 Google Sheet', demoConnectionHelp: '公开 DEMO 已强制关闭 Sheet 写入；下列连接能力保留给正式客户模板。', settingsSaved: '设置已保存。', pinTitle: '进入车行后台', pinHelp: '输入 6 位 PIN；公开 DEMO 管理员 PIN 是 000000。', enter: '进入后台', forgotPin: '忘记 PIN？', forgotHelp: '重置 DEMO 密码为 000000', backSite: '返回展示网站', invalidPin: 'PIN 不正确，请重试。',
    addVehicle: '新增车辆', editVehicle: '编辑车辆', addStaffTitle: '新增员工', editStaffTitle: '编辑员工', saveStaff: '保存员工', deleteStaff: '删除员工', reportLocal: 'DEMO 报告保存在当前装置', noReport: '尚未上传报告', reportReady: '报告已准备', minimumLabel: '最低价', fixed: '固定价格', slightly: '可小议', welcome: '欢迎议价', none: '无已知记录', minor: '轻微事故', major: '重大事故', unknown: '未提供', floodYes: '有水灾记录'
  },
  en: {
    vehicles: 'Vehicles', leads: 'Leads', staff: 'Staff', settings: 'Settings', viewSite: 'View site', reset: 'Reset DEMO', resetFull: 'Reset complete DEMO data', logout: 'Log out', sandbox: 'Demo mode: your changes stay on this device and do not affect other visitors.', sheetPromise: 'The client version connects to that dealer’s own Google Sheet.', inventory: 'Inventory', inventoryHelp: 'Select a vehicle to edit condition, images and status', addCar: '+ Add vehicle', vehicle: 'Vehicle', price: 'Price', transparency: 'Transparency', status: 'Status', leadHelp: 'Select a customer to manage follow-up, owner and appointment', upcomingAppointments: 'Appointment board', selectLead: 'Select a lead to view details', connectionSettings: 'Client data connection', scriptUrl: 'Apps Script Web App URL', adminToken: 'Data connection key', dealerWhatsapp: 'Dealer WhatsApp number', salesWhatsapp: 'Zach sales WhatsApp (config.js)', dealerSloganLabel: 'Chinese slogan', dealerSloganEnLabel: 'English slogan', saveSettings: 'Save settings', showroomFeature: 'PLAN A · SHOWROOM FEATURE', showroomFeatureHelp: 'Inventory, condition, galleries, reports and display content', leadSystemFeature: 'PLAN B · SYSTEM FEATURE', leadSystemFeatureHelp: 'Leads, follow-ups, assignment, appointments and sales', brandLabel: 'Brand', modelLabel: 'Model', year: 'Year', priceRm: 'Price (RM)', mileage: 'Mileage (km)', accident: 'Accident record', flood: 'Flood record', fees: 'Extra fees', negotiation: 'Price terms', minimumPrice: 'Minimum price (RM)', reportUpload: 'Inspection report', uploadReport: 'Choose report', gallery: 'Vehicle photos and condition notes', galleryHelp: 'Upload, reorder and label defects on each photo', uploadPhotos: 'Upload photos', notes: 'Known defects and notes', delete: 'Delete', save: 'Save vehicle', systemFeature: 'PLAN B · SYSTEM FEATURE', systemFeatureHelp: 'Staff, commissions and payroll are advanced system features.',
    viewTitleVehicles: 'Vehicle management', viewTitleLeads: 'Leads & appointments', viewTitleStaff: 'Staff & commission', viewTitleSettings: 'Settings', all: 'All', available: 'Available', sold: 'Sold', hidden: 'Hidden', vehicleOwner: 'Sales owner', vehicleOwnerHelp: 'New enquiries are assigned to this salesperson automatically', gold: 'Gold transparency', silver: 'Silver transparency', bronze: 'Bronze transparency', edit: 'Edit', photos: 'photos', localSaved: 'Saved on this device', syncPending: 'Syncing…', syncSuccess: 'Synced to Google Sheet', syncError: 'Sync failed', resetConfirm: 'Reset vehicles, leads, staff, payroll, settings and PIN to the full defaults?', resetDone: 'Complete DEMO defaults restored.',
    newLead: '+ Add lead', active: 'Active', won: 'Won', lost: 'Lost', archived: 'Archived', unassigned: 'Unassigned', new: 'New', contacted: 'Contacted', testDrive: 'Test drive', closedWon: 'Closed won', closedLost: 'Closed lost', phone: 'Phone', budget: 'Budget', area: 'Area', intent: 'Intent', assigned: 'Assigned', appointment: 'Appointment', appointmentType: 'Appointment type', leadStatus: 'Lead status', saveChanges: 'Save changes', addNote: 'Add follow-up', notePlaceholder: 'For example: sent loan estimate', archive: 'Archive lead', deleteForever: 'Delete permanently', noLeads: 'No leads here yet', overdue: 'Unassigned for over 10 minutes', todayAppointments: 'Upcoming appointments', openLeads: 'Open leads', workload: 'Sales workload',
    staffTitle: 'Staff, commission & payroll', staffHelp: 'Manage profiles, sales performance and pay rules', addStaff: '+ Add staff', payrollTitle: 'Monthly payroll', payrollHelp: 'Base + monthly commission + allowance − deduction', generatePayroll: 'Generate payroll', activeStaff: 'Active staff', carsSold: 'Cars sold this month', salesValue: 'Monthly sales value', commission: 'Monthly commission', base: 'Base', estimatedPay: 'Estimated pay', payrollEmpty: 'Payroll not generated for this month', paid: 'Paid', pending: 'Pending',
    settingsDemo: 'DEMO · Local device sandbox', settingsClient: 'Client mode · Independent Google Sheet', demoConnectionHelp: 'The public DEMO blocks Sheet writes. Connection capability remains in the client template.', settingsSaved: 'Settings saved.', pinTitle: 'Enter dealer admin', pinHelp: 'Enter a 6-digit PIN. The public DEMO owner PIN is 000000.', enter: 'Enter admin', forgotPin: 'Forgot PIN?', forgotHelp: 'Reset DEMO PIN to 000000', backSite: 'Back to showroom', invalidPin: 'Incorrect PIN. Try again.',
    addVehicle: 'Add vehicle', editVehicle: 'Edit vehicle', addStaffTitle: 'Add staff', editStaffTitle: 'Edit staff', saveStaff: 'Save staff', deleteStaff: 'Delete staff', reportLocal: 'DEMO report stays on this device', noReport: 'No report uploaded', reportReady: 'Report ready', minimumLabel: 'Lowest price', fixed: 'Fixed price', slightly: 'Slightly negotiable', welcome: 'Negotiable', none: 'None known', minor: 'Minor accident', major: 'Major accident', unknown: 'Not provided', floodYes: 'Flood record disclosed'
  }
};

let lang = localStorage.getItem('demo_lang') || 'zh';
let currentView = new URLSearchParams(location.search).get('view') || 'vehicles';
let selectedLeadId = '';
let leadFilter = 'active';
let editingMedia = [];
let calendarDate = new Date();
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const tr = key => ADMIN_COPY[lang][key] || key;
const esc = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

function toast(message, tone = '') {
  const element = $('#adminToast');
  element.textContent = message;
  element.className = `admin-toast show ${tone}`;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { element.className = 'admin-toast'; }, 3500);
}

function fmt(value) {
  if (!value) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString(lang === 'zh' ? 'zh-MY' : 'en-MY', { timeZone: 'Asia/Kuala_Lumpur', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false });
}

function canonicalStatus(value) {
  const map = { '新询盘': 'New', '已联系': 'Contacted', '已试驾': 'Test drive', '成交': 'Closed won', '未成交': 'Closed lost' };
  return map[value] || value || 'New';
}

function normalizeLead(lead) {
  return { id: lead.id || `LEAD-${Date.now()}`, createdAt: lead.createdAt || new Date().toISOString(), assigned: lead.assigned || 'Unassigned', appointment: lead.appointment || '', timeline: Array.isArray(lead.timeline) ? lead.timeline : [], ...lead, status: canonicalStatus(lead.status) };
}

function currentAccess() {
  return { role: sessionStorage.getItem('demo_user_role') || 'owner', name: sessionStorage.getItem('demo_user_name') || 'Owner' };
}

function applyAccessRules() {
  const isStaff = currentAccess().role === 'staff';
  ['staff', 'settings'].forEach(view => {
    const nav = $(`.side-link[data-view="${view}"]`);
    if (nav) nav.classList.toggle('hidden', isStaff);
  });
  if (isStaff && ['staff', 'settings'].includes(currentView)) currentView = 'vehicles';
}

function renderLoginIdentity() {
  const access = currentAccess();
  $('#adminGreeting').textContent = `Hi, ${access.name}`;
  $('#adminRole').textContent = access.role === 'staff' ? (lang === 'zh' ? '员工账号' : 'Staff account') : (lang === 'zh' ? '老板账号' : 'Owner account');
}

function options(items, selected) {
  return items.map(([value, label]) => `<option value="${esc(value)}" ${value === selected ? 'selected' : ''}>${esc(label)}</option>`).join('');
}

function translateAdmin() {
  document.documentElement.lang = lang;
  $('#adminToast').textContent = '';
  $$('[data-i18n]').forEach(element => { element.textContent = tr(element.dataset.i18n); });
  $('#adminLangBtn').textContent = lang === 'zh' ? 'EN' : '中文';
  $('.pin-card h1').textContent = tr('pinTitle');
  $('.pin-card>p:not(.eyebrow)').innerHTML = `${tr('pinHelp')}<br><small>DEMO PIN · 000000</small>`;
  $('#pinForm .button').textContent = tr('enter');
  $('#resetPin b').textContent = tr('forgotPin');
  $('#resetPin small').textContent = tr('forgotHelp');
  $('.back-site b').textContent = tr('backSite');
  $('#staffSectionTitle').textContent = tr('staffTitle');
  $('#staffSectionHelp').textContent = tr('staffHelp');
  $('#addStaff').textContent = tr('addStaff');
  $('#payrollTitle').textContent = tr('payrollTitle');
  $('#payrollHelp').textContent = tr('payrollHelp');
  $('#generatePayroll').textContent = tr('generatePayroll');
  $('#addLead').textContent = tr('newLead');
  translateForms();
  $('#leadFilterbar').innerHTML = `<button class="${leadFilter === 'active' ? 'active' : ''}" data-lead-filter="active">${tr('active')}</button><button class="${leadFilter === 'won' ? 'active' : ''}" data-lead-filter="won">${tr('won')}</button><button class="${leadFilter === 'lost' ? 'active' : ''}" data-lead-filter="lost">${tr('lost')}</button><button class="${leadFilter === 'archived' ? 'active' : ''}" data-lead-filter="archived">${tr('archived')}</button>`;
  renderAdmin();
}

function translateForms() {
  const bilingual = (zh, en) => lang === 'zh' ? zh : en;
  const label = (form, name, zh, en) => {
    const input = document.forms[form]?.elements[name];
    const span = input?.closest('label')?.querySelector(':scope > span');
    if (span) span.textContent = bilingual(zh, en);
  };
  label('settingsForm', 'adminPin', '后台 6 位 PIN', '6-digit admin PIN');
  label('settingsForm', 'ownerEmail', '老板每日摘要 Email', 'Owner daily summary email');
  const ownerNote = $('#settingsForm input[name="ownerEmail"]')?.closest('label')?.querySelector('small');
  if (ownerNote) ownerNote.textContent = bilingual('每天约上午 9 点发送待跟进、未分配询盘和今日预约；留空即关闭。', 'Sent around 9am with open leads, unassigned leads and today’s appointments. Leave blank to disable.');
  const sloganInput = $('#settingsForm input[name="dealerSlogan"]');
  if (sloganInput) sloganInput.placeholder = bilingual('每一辆车，都经得起你细看。', 'Every car deserves a closer look.');
  [['name','客户姓名','Customer name'],['contact','电话','Contact'],['source','来源','Source'],['carId','目标车辆','Vehicle'],['assigned','负责人','Assigned'],['budget','预算','Budget'],['location','地区','Area'],['intent','需求','Intention'],['note','备注','Note']].forEach(values => label('leadForm', ...values));
  $('#leadForm [type="submit"]').textContent = bilingual('保存询盘', 'Save lead');
  const staffLabels = {name:['姓名','Name'],phone:['电话','Phone'],email:['Email','Email'],identity:['IC / Passport','IC / Passport'],role:['职位','Role'],startDate:['入职日期','Start date'],address:['地址','Address'],emergencyContact:['紧急联系人','Emergency contact'],pin:['个人登录 PIN','Personal login PIN'],status:['状态','Status'],baseSalary:['底薪（RM）','Base salary (RM)'],allowance:['每月津贴（RM）','Monthly allowance (RM)'],deduction:['每月扣款（RM）','Monthly deduction (RM)'],commissionType:['佣金计算方式','Commission method'],commissionValue:['佣金数值','Commission value']};
  $$('[data-staff-label]').forEach(element => { const values = staffLabels[element.dataset.staffLabel]; if (values) element.textContent = bilingual(values[0], values[1]); });
  const setOptions = (select, values) => { if (!select) return; const current = select.value; select.innerHTML = values.map(([value, zh, en]) => `<option value="${value}">${bilingual(zh, en)}</option>`).join(''); select.value = current || values[0][0]; };
  setOptions($('#staffForm select[name="status"]'), [['active','在职','Active'],['inactive','离职','Inactive']]);
  setOptions($('#staffForm select[name="commissionType"]'), [['fixed','每辆固定金额','Fixed per car'],['percent','成交价百分比','Percentage of sale']]);
  setOptions($('#carForm select[name="status"]'), [['available','在售','Available'],['hidden','隐藏','Hidden'],['sold','已售','Sold']]);
  setOptions($('#carForm select[name="accident"]'), [['none','无已知事故','None known'],['minor','轻微事故','Minor'],['major','重大事故','Major'],['unknown','未提供','Not provided']]);
  setOptions($('#carForm select[name="flood"]'), [['none','无已知水灾','None known'],['yes','有水灾记录','Flood record disclosed'],['unknown','未提供','Not provided']]);
  setOptions($('#carForm select[name="negotiation"]'), [['minimum','最低价','Lowest price'],['slightly','可小议','Slightly negotiable'],['welcome','欢迎议价','Negotiable'],['fixed','固定价格','Fixed price']]);
  $$('[data-toggle-pin]').forEach(button => { button.setAttribute('aria-label', bilingual('显示内容', 'Show value')); button.title = bilingual('显示内容', 'Show value'); });
  $('#removeReport').textContent = bilingual('移除报告', 'Remove report');
}

function viewTitle() {
  return tr({ vehicles: 'viewTitleVehicles', leads: 'viewTitleLeads', staff: 'viewTitleStaff', settings: 'viewTitleSettings' }[currentView]);
}

function switchView(view) {
  applyAccessRules();
  const allowed = currentAccess().role === 'staff' ? ['vehicles', 'leads'] : ['vehicles', 'leads', 'staff', 'settings'];
  currentView = allowed.includes(view) ? view : 'vehicles';
  $$('.side-link[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === currentView));
  ['vehicles', 'leads', 'staff', 'settings'].forEach(name => $(`#${name}View`).classList.toggle('hidden', name !== currentView));
  $('#viewTitle').textContent = viewTitle();
  history.replaceState({}, '', currentView === 'vehicles' ? 'admin.html' : `admin.html?view=${currentView}`);
  renderAdmin();
}

function renderStats(cars) {
  const groups = [
    [cars.length, tr('all')], [cars.filter(car => car.status === 'available').length, tr('available')],
    [cars.filter(car => car.status === 'sold').length, tr('sold')], [cars.filter(car => transparency(car) === 'gold').length, tr('gold')]
  ];
  $('#stats').innerHTML = groups.map(([value, label]) => `<div class="stat"><b>${value}</b><span>${label}</span></div>`).join('');
}

function renderVehicles(cars) {
  const staff = Store.getStaff();
  $('#vehicleRows').innerHTML = cars.map(car => {
    const level = transparency(car);
    const statusLabel = tr(car.status);
    const owner = staff.find(item => item.id === car.assignedStaffId);
    return `<tr data-car="${esc(car.id)}" tabindex="0"><td data-label="${tr('vehicle')}"><div class="vehicle-cell"><img src="${esc(carImages(car)[0].url)}" alt=""><div><strong>${esc(car.brand)} ${esc(car.model)}</strong><small>${car.year} · ${car.mileage.toLocaleString('en-MY')} km · ${carImages(car).length} ${tr('photos')}</small></div></div></td><td data-label="${tr('price')}">RM ${car.price.toLocaleString('en-MY')}</td><td data-label="${tr('vehicleOwner')}">${owner ? `<span class="vehicle-owner-cell"><b>${esc(owner.name)}</b><small>${esc(owner.phone || '—')}</small></span>` : `<span class="status hidden">${tr('unassigned')}</span>`}</td><td data-label="${tr('transparency')}"><span class="badge ${level}">${tr(level)}</span></td><td data-label="${tr('status')}"><span class="status ${car.status}">${statusLabel}</span></td><td><button class="row-action" data-edit-car="${esc(car.id)}">${tr('edit')}</button></td></tr>`;
  }).join('');
}

function leadMatches(lead) {
  const archived = String(lead.archived) === 'true';
  if (leadFilter === 'archived') return archived;
  if (archived) return false;
  if (leadFilter === 'won') return lead.status === 'Closed won';
  if (leadFilter === 'lost') return lead.status === 'Closed lost';
  return !['Closed won', 'Closed lost'].includes(lead.status);
}

function visibleLeads(leads) {
  const access = currentAccess();
  return access.role === 'staff' ? leads.filter(lead => lead.assigned === access.name) : leads;
}

function renderLeadOperations(leads) {
  const open = leads.filter(lead => !lead.archived && !['Closed won', 'Closed lost'].includes(lead.status));
  const overdue = open.filter(lead => (lead.assigned || 'Unassigned') === 'Unassigned' && Date.now() - new Date(lead.createdAt).getTime() > 10 * 60 * 1000);
  const upcoming = leads.filter(lead => lead.appointment && new Date(lead.appointment).getTime() >= Date.now());
  const access = currentAccess();
  const owners = Store.getStaff().filter(staff => access.role !== 'staff' || staff.name === access.name).map(staff => [staff.name, open.filter(lead => lead.assigned === staff.name).length]);
  $('#leadOps').innerHTML = `<div class="ops-metrics"><article class="ops-metric"><b>${open.length}</b><span>${tr('openLeads')}</span></article><article class="ops-metric urgent"><b>${overdue.length}</b><span>${tr('overdue')}</span></article><article class="ops-metric"><b>${upcoming.length}</b><span>${tr('todayAppointments')}</span></article></div><div class="workload-visual"><header><div><p class="eyebrow">WORKLOAD</p><h3>${tr('workload')}</h3></div></header><div class="workload-bars">${owners.map(([name, count]) => `<div class="workload-row"><div class="workload-name"><b>${esc(name)}</b><span>${count}</span></div><div class="workload-track"><i style="width:${Math.min(100, count * 25)}%"></i></div></div>`).join('')}</div></div>`;
}

function renderAppointments(leads) {
  const appointments = leads.filter(lead => lead.appointment && new Date(lead.appointment).getTime() >= Date.now()).sort((a, b) => new Date(a.appointment) - new Date(b.appointment));
  const grouped = new Map();
  appointments.slice(0, 9).forEach(lead => { const key = String(lead.appointment).slice(0, 10); if (!grouped.has(key)) grouped.set(key, []); grouped.get(key).push(lead); });
  $('#appointmentCards').innerHTML = [...grouped.entries()].map(([date, dayLeads]) => `<section class="appointment-day"><header><b>${new Date(`${date}T00:00`).toLocaleDateString(lang === 'zh' ? 'zh-MY' : 'en-MY', { weekday: 'short', month: 'short', day: 'numeric' })}</b><span>${dayLeads.length}</span></header>${dayLeads.map(lead => `<button class="appointment-card" type="button" data-lead="${esc(lead.id)}"><time>${String(lead.appointment).slice(11, 16)}</time><strong>${esc(lead.name)}</strong><small>${esc(lead.appointmentType || lead.intent || 'Viewing')}</small><footer><span>${esc(lead.assigned || tr('unassigned'))}</span></footer></button>`).join('')}</section>`).join('');
  renderCalendar(leads);
}

function renderCalendar(leads) {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay());
  $('#calendarTitle').textContent = new Date(year, month, 1).toLocaleDateString(lang === 'zh' ? 'zh-MY' : 'en-MY', { year: 'numeric', month: 'long' });
  const weekdayFormatter = new Intl.DateTimeFormat(lang === 'zh' ? 'zh-MY' : 'en-MY', { weekday: 'short' });
  $('#calendarWeek').innerHTML = Array.from({ length: 7 }, (_, index) => `<span>${weekdayFormatter.format(new Date(2026, 7, 2 + index))}</span>`).join('');
  $('#appointmentCalendar').innerHTML = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start); date.setDate(start.getDate() + index);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const events = leads.filter(lead => String(lead.appointment || '').slice(0, 10) === key);
    return `<div class="calendar-day ${date.getMonth() !== month ? 'outside' : ''}"><span>${date.getDate()}</span>${events.map(lead => `<button class="calendar-event" data-lead="${esc(lead.id)}" title="${esc(lead.name)}">${String(lead.appointment).slice(11, 16)} ${esc(lead.name)}</button>`).join('')}</div>`;
  }).join('');
}

function renderLeadDetail(lead, cars) {
  if (!lead) { $('#leadDetail').innerHTML = `<div class="empty-lead"><b>◎</b><span>${tr('selectLead')}</span></div>`; return; }
  const access = currentAccess();
  const staff = Store.getStaff().filter(item => item.status === 'active' && (access.role !== 'staff' || item.name === access.name));
  const vehicle = cars.find(car => car.id === lead.carId);
  const statuses = [['New', tr('new')], ['Contacted', tr('contacted')], ['Test drive', tr('testDrive')], ['Closed won', tr('closedWon')], ['Closed lost', tr('closedLost')]];
  $('#leadDetail').innerHTML = `<div class="lead-detail-head"><div><span>${esc(vehicle ? `${vehicle.year} ${vehicle.brand} ${vehicle.model}` : 'GENERAL')}</span><h2>${esc(lead.name)}</h2></div><span class="status ${lead.status.toLowerCase().replace(/\s+/g, '-')}">${esc(statuses.find(([value]) => value === lead.status)?.[1] || lead.status)}</span></div>
    <div class="lead-profile"><span><b>${lead.contact === 'WhatsApp conversation' ? 'WhatsApp' : tr('phone')}</b>${esc(lead.contact === 'WhatsApp conversation' ? (lang === 'zh' ? '直接对话接入' : 'Direct chat handoff') : (lead.contact || '—'))}</span><span><b>${tr('budget')}</b>${esc(lead.budget || '—')}</span><span><b>${tr('area')}</b>${esc(lead.location || '—')}</span><span><b>${tr('intent')}</b>${esc(lead.intent || lead.appointmentType || '—')}</span></div>
    <div class="lead-controls expanded"><label>${tr('assigned')}<select id="leadAssigned">${options([['Unassigned', tr('unassigned')], ...staff.map(item => [item.name, item.name])], lead.assigned || 'Unassigned')}</select></label><label>${tr('appointment')}<input id="leadAppointment" type="datetime-local" value="${esc(lead.appointment || '')}"></label><label>${tr('appointmentType')}<select id="leadAppointmentType">${options([['Viewing', lang === 'zh' ? '看车' : 'Viewing'], ['Test drive', tr('testDrive')], ['Loan', lang === 'zh' ? '贷款咨询' : 'Loan consultation']], lead.appointmentType || 'Viewing')}</select></label><label>${tr('leadStatus')}<select id="leadStatus">${options(statuses, lead.status)}</select></label><button class="button" data-save-lead="${esc(lead.id)}">${tr('saveChanges')}</button></div>
    <div class="timeline"><h3>${tr('addNote')}</h3><form id="timelineForm" data-lead="${esc(lead.id)}"><input name="note" required placeholder="${esc(tr('notePlaceholder'))}"><button class="ghost" type="submit">＋</button></form>${[...(lead.timeline || [])].reverse().map(item => `<article><time>${fmt(item.time)}</time><b>${esc(item.type || 'Follow-up')}</b><p>${esc(item.note || '')}</p></article>`).join('')}</div>
    <div class="lead-record-actions">${!lead.archived && ['Closed won', 'Closed lost'].includes(lead.status) ? `<button class="ghost" data-archive-lead="${esc(lead.id)}">${tr('archive')}</button>` : ''}${lead.archived ? `<button class="ghost danger" data-delete-lead="${esc(lead.id)}">${tr('deleteForever')}</button>` : ''}</div>`;
}

function renderLeads(leads, cars) {
  const permitted = visibleLeads(leads);
  renderLeadOperations(permitted);
  renderAppointments(permitted);
  const filtered = permitted.filter(leadMatches);
  if (!selectedLeadId || !filtered.some(lead => lead.id === selectedLeadId)) selectedLeadId = filtered[0]?.id || '';
  $('#leadRows').innerHTML = filtered.length ? filtered.map(lead => `<button class="lead-row ${lead.id === selectedLeadId ? 'active' : ''}" data-lead="${esc(lead.id)}"><div><b>${esc(lead.name)}</b><small>${esc(lead.source || 'Website')} · ${fmt(lead.createdAt)}</small></div><div class="lead-row-meta"><em>${esc(lead.status)}</em><span>${esc(lead.assigned === 'Unassigned' ? tr('unassigned') : lead.assigned)}</span></div></button>`).join('') : `<p class="empty-filter">${tr('noLeads')}</p>`;
  renderLeadDetail(permitted.find(lead => lead.id === selectedLeadId), cars);
}

function wonInMonth(lead, month) { return lead.status === 'Closed won' && String(lead.closedAt || lead.updatedAt || '').slice(0, 7) === month; }
function commissionFor(staff, month, leads, cars) {
  return leads.filter(lead => wonInMonth(lead, month) && lead.assigned === staff.name).reduce((total, lead) => { const price = cars.find(car => car.id === lead.carId)?.price || 0; return total + (staff.commissionType === 'percent' ? price * (+staff.commissionValue || 0) / 100 : (+staff.commissionValue || 0)); }, 0);
}

function renderPayroll(month) {
  const records = Store.getPayroll().filter(record => record.month === month);
  $('#payrollHead').innerHTML = `<tr><th>${tr('staff')}</th><th>${tr('base')}</th><th>${tr('commission')}</th><th>${lang === 'zh' ? '津贴／扣款' : 'Allowance / deduction'}</th><th>${lang === 'zh' ? '净薪资' : 'Net pay'}</th><th>${tr('status')}</th></tr>`;
  $('#payrollRows').innerHTML = records.length ? records.map(record => `<tr><td data-label="${tr('staff')}"><strong>${esc(record.staffName)}</strong></td><td data-label="${tr('base')}">RM ${(+record.baseSalary).toLocaleString('en-MY')}</td><td data-label="${tr('commission')}">RM ${(+record.commission).toLocaleString('en-MY')}</td><td>+RM ${(+record.allowance).toLocaleString('en-MY')} / −RM ${(+record.deduction).toLocaleString('en-MY')}</td><td><strong>RM ${(+record.total).toLocaleString('en-MY')}</strong></td><td><button class="payroll-status ${record.status === 'paid' ? 'paid' : ''}" data-payroll="${esc(record.id)}">${tr(record.status === 'paid' ? 'paid' : 'pending')}</button></td></tr>`).join('') : `<tr><td colspan="6" class="empty">${tr('payrollEmpty')}</td></tr>`;
}

function renderStaff(leads, cars) {
  const staff = Store.getStaff();
  const month = $('#payrollMonth').value || new Date().toISOString().slice(0, 7);
  const sales = leads.filter(lead => wonInMonth(lead, month));
  const revenue = sales.reduce((total, lead) => total + (cars.find(car => car.id === lead.carId)?.price || 0), 0);
  const totalCommission = staff.reduce((total, item) => total + commissionFor(item, month, leads, cars), 0);
  $('#staffStats').innerHTML = [[staff.filter(item => item.status === 'active').length, tr('activeStaff')], [sales.length, tr('carsSold')], [`RM ${revenue.toLocaleString('en-MY')}`, tr('salesValue')], [`RM ${totalCommission.toLocaleString('en-MY')}`, tr('commission')]].map(([value, label]) => `<article><b>${value}</b><span>${label}</span></article>`).join('');
  $('#staffGrid').innerHTML = staff.map(item => { const commission = commissionFor(item, month, leads, cars); const pay = (+item.baseSalary || 0) + commission + (+item.allowance || 0) - (+item.deduction || 0); return `<article class="staff-card"><header><span class="staff-avatar">${esc(item.name.slice(0, 1))}</span><div><h3>${esc(item.name)}</h3><p>${esc(item.role || 'Sales Advisor')} · ${item.status === 'active' ? tr('activeStaff') : tr('hidden')}</p></div><button class="row-action" data-edit-staff="${esc(item.id)}">${tr('edit')}</button></header><div class="staff-performance"><span><b>${sales.filter(lead => lead.assigned === item.name).length}</b>${tr('carsSold')}</span><span><b>RM ${commission.toLocaleString('en-MY')}</b>${tr('commission')}</span><span><b>RM ${pay.toLocaleString('en-MY')}</b>${tr('estimatedPay')}</span></div><footer><span>${item.commissionType === 'percent' ? `${item.commissionValue}%` : `RM ${(+item.commissionValue || 0).toLocaleString('en-MY')}`}</span><span>${tr('base')} RM ${(+item.baseSalary || 0).toLocaleString('en-MY')}</span></footer></article>`; }).join('');
  renderPayroll(month);
}

function renderSettings() {
  const form = $('#settingsForm');
  form.elements.scriptUrl.value = CLIENT_MODE ? (localStorage.getItem('demo_script_url') || '') : '';
  form.elements.adminToken.value = CLIENT_MODE ? (localStorage.getItem('demo_admin_token') || '') : '';
  form.elements.adminPin.value = localStorage.getItem('demo_admin_pin') || DEMO_PIN;
  form.elements.dealerWhatsapp.value = localStorage.getItem('demo_dealer_whatsapp') || window.APP_CONFIG?.dealerWhatsapp || '';
  form.elements.salesWhatsapp.value = window.APP_CONFIG?.salesWhatsapp || '';
  form.elements.dealerSlogan.value = localStorage.getItem('demo_dealer_slogan') || window.APP_CONFIG?.dealerSlogan || '';
  form.elements.dealerSloganEn.value = localStorage.getItem('demo_dealer_slogan_en') || window.APP_CONFIG?.dealerSloganEn || '';
  form.elements.facebookUrl.value = localStorage.getItem('demo_facebook_url') || window.APP_CONFIG?.facebookUrl || '';
  form.elements.instagramUrl.value = localStorage.getItem('demo_instagram_url') || window.APP_CONFIG?.instagramUrl || '';
  form.elements.ownerEmail.value = localStorage.getItem('demo_owner_email') || window.APP_CONFIG?.ownerEmail || '';
  form.elements.scriptUrl.disabled = DEMO_MODE;
  form.elements.adminToken.disabled = DEMO_MODE;
  $('#connectionState').textContent = DEMO_MODE ? `${tr('settingsDemo')} · ${tr('demoConnectionHelp')}` : tr('settingsClient');
}

function renderAdmin() {
  applyAccessRules();
  renderLoginIdentity();
  const cars = Store.getCars();
  const leads = Store.getLeads().map(normalizeLead);
  $('#viewTitle').textContent = viewTitle();
  renderStats(cars);
  renderVehicles(cars);
  renderLeads(leads, cars);
  renderStaff(leads, cars);
  renderSettings();
}

function renderMedia() {
  $('#mediaList').innerHTML = editingMedia.length ? editingMedia.map((image, index) => `<article class="media-item" draggable="true" data-media-index="${index}"><img src="${esc(image.url)}" alt=""><div><b>${index + 1}</b><input data-media-note="${index}" value="${esc(lang === 'zh' ? (image.noteZh || image.note || '') : (image.noteEn || image.note || ''))}" placeholder="${lang === 'zh' ? '图片说明／瑕疵位置' : 'Photo note / defect location'}"><div><button type="button" data-media-up="${index}" aria-label="Move up">↑</button><button type="button" data-media-down="${index}" aria-label="Move down">↓</button><button type="button" data-media-delete="${index}" aria-label="Delete">×</button></div></div></article>`).join('') : `<p class="empty">${lang === 'zh' ? '请上传至少 5 张一致车型图片' : 'Upload at least 5 consistent vehicle photos'}</p>`;
}

function nextVehicleId() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const max = Math.max(0, ...Store.getCars().map(car => +String(car.id).split('-').pop() || 0));
  return `CAR-${date}-${String(max + 1).padStart(3, '0')}`;
}

function openCarEditor(id = '') {
  const car = Store.getCars().find(item => item.id === id);
  const form = $('#carForm');
  form.reset();
  const value = car || { id: nextVehicleId(), year: new Date().getFullYear(), status: 'available', accident: 'unknown', flood: 'unknown', fees: 'RM0', negotiation: 'slightly', report: false };
  const activeStaff = Store.getStaff().filter(item => item.status === 'active');
  form.elements.assignedStaffId.innerHTML = options([['', tr('unassigned')], ...activeStaff.map(item => [item.id, `${item.name} · ${item.phone || '—'}`])], value.assignedStaffId || '');
  Object.entries(value).forEach(([key, item]) => { if (form.elements[key] && !['images'].includes(key)) { if (form.elements[key].type === 'checkbox') form.elements[key].checked = Boolean(item); else form.elements[key].value = item ?? ''; } });
  editingMedia = clone(value.images || []);
  form.elements.id.value = value.id;
  $('#vehicleIdPreview').textContent = value.id;
  $('#formTitle').textContent = car ? tr('editVehicle') : tr('addVehicle');
  $('#deleteCar').classList.toggle('hidden', !car);
  $('#reportUploadState').textContent = value.reportUrl ? tr('reportReady') : tr('noReport');
  $('#removeReport').classList.toggle('hidden', !value.reportUrl);
  renderMedia();
  $('#editDialog').showModal();
}

function readFiles(files) {
  return Promise.all([...files].map(file => new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve({ url: String(reader.result), note: file.name, noteZh: file.name, noteEn: file.name }); reader.onerror = reject; reader.readAsDataURL(file); })));
}

function saveCar(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const cars = Store.getCars();
  const id = String(data.get('id'));
  const existing = cars.find(car => car.id === id) || {};
  const car = normalizeCar({ ...existing, id, brand: data.get('brand'), model: data.get('model'), equipmentZh: data.get('equipmentZh'), equipmentEn: data.get('equipmentEn'), year: +data.get('year'), price: +data.get('price'), minimumPrice: +data.get('minimumPrice') || 0, mileage: +data.get('mileage'), status: data.get('status'), assignedStaffId: data.get('assignedStaffId'), accident: data.get('accident'), flood: data.get('flood'), fees: data.get('fees'), negotiation: data.get('negotiation'), reportUrl: data.get('reportUrl'), report: Boolean(data.get('reportUrl')), notes: data.get('notes'), notesZh: data.get('notes'), images: editingMedia, image: editingMedia[0]?.url || FALLBACK_CAR_IMAGE });
  const index = cars.findIndex(item => item.id === id);
  if (index >= 0) cars[index] = car; else cars.unshift(car);
  Store.saveCars(cars);
  $('#editDialog').close();
  renderAdmin();
}

function openLeadEditor() {
  const form = $('#leadForm');
  form.reset();
  const access = currentAccess();
  $('#newLeadCar').innerHTML = `<option value="">${lang === 'zh' ? '一般询盘' : 'General enquiry'}</option>${Store.getCars().map(car => `<option value="${esc(car.id)}">${car.year} ${esc(car.brand)} ${esc(car.model)}</option>`).join('')}`;
  const assignees = access.role === 'staff' ? [[access.name, access.name]] : [['Unassigned', tr('unassigned')], ...Store.getStaff().filter(staff => staff.status === 'active').map(staff => [staff.name, staff.name])];
  $('#newLeadStaff').innerHTML = options(assignees, access.role === 'staff' ? access.name : 'Unassigned');
  $('#leadFormTitle').textContent = tr('newLead').replace('＋ ', '').replace('+ ', '');
  $('#leadDialog').showModal();
}

function assignLeadOwnerFromVehicle() {
  const access = currentAccess();
  if (access.role === 'staff') { $('#newLeadStaff').value = access.name; return; }
  const car = Store.getCars().find(item => item.id === $('#newLeadCar').value);
  const owner = Store.getStaff().find(item => item.id === car?.assignedStaffId && item.status === 'active');
  $('#newLeadStaff').value = owner?.name || 'Unassigned';
}

function saveNewLead(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const now = new Date().toISOString();
  const access = currentAccess();
  const lead = { id: `LEAD-${Date.now()}`, createdAt: now, name: data.get('name'), contact: data.get('contact'), carId: data.get('carId'), source: data.get('source'), status: 'New', assigned: access.role === 'staff' ? access.name : data.get('assigned'), appointment: '', appointmentType: data.get('intent'), appointmentStatus: 'Scheduled', budget: data.get('budget'), location: data.get('location'), intent: data.get('intent'), note: data.get('note'), timeline: [{ time: now, type: 'Enquiry', note: data.get('note') || `${data.get('source')} enquiry` }] };
  const leads = Store.getLeads(); leads.unshift(lead); Store.saveLeads(leads); selectedLeadId = lead.id; leadFilter = 'active'; $('#leadDialog').close(); renderAdmin();
}

function saveLead(id) {
  const leads = Store.getLeads().map(normalizeLead);
  const lead = leads.find(item => item.id === id);
  if (!lead) return;
  const access = currentAccess();
  lead.assigned = access.role === 'staff' ? access.name : $('#leadAssigned').value;
  lead.appointment = $('#leadAppointment').value;
  lead.appointmentType = $('#leadAppointmentType').value;
  const previousStatus = lead.status;
  lead.status = $('#leadStatus').value;
  lead.updatedAt = new Date().toISOString();
  if (lead.status === 'Closed won' && previousStatus !== 'Closed won') lead.closedAt = lead.updatedAt;
  lead.timeline.push({ time: lead.updatedAt, type: 'Follow-up', note: `Assigned: ${lead.assigned} · Status: ${lead.status}${lead.appointment ? ` · Appointment: ${lead.appointment}` : ''}` });
  Store.saveLeads(leads); toast(tr('localSaved')); renderAdmin();
}

function openStaffEditor(id = '') {
  const form = $('#staffForm');
  form.reset();
  const staff = Store.getStaff().find(item => item.id === id);
  const value = staff || { id: `STAFF-${String(Math.max(0, ...Store.getStaff().map(item => +String(item.id).replace(/\D/g, '') || 0)) + 1).padStart(3, '0')}`, startDate: new Date().toISOString().slice(0, 10), status: 'active', allowance: 0, deduction: 0, commissionType: 'fixed', pin: String(Math.floor(100000 + Math.random() * 900000)) };
  Object.entries(value).forEach(([key, item]) => { if (form.elements[key]) form.elements[key].value = item ?? ''; });
  $('#staffFormTitle').textContent = staff ? tr('editStaffTitle') : tr('addStaffTitle');
  $('#deleteStaff').textContent = tr('deleteStaff');
  $('#deleteStaff').classList.toggle('hidden', !staff);
  form.querySelector('[type="submit"]').textContent = tr('saveStaff');
  $('#staffDialog').showModal();
}

function saveStaff(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  if (!/^\d{6}$/.test(data.pin)) return toast(lang === 'zh' ? '员工 PIN 必须是 6 位数字。' : 'Staff PIN must contain 6 digits.', 'error');
  const staff = Store.getStaff();
  if (staff.some(item => item.id !== data.id && item.pin === data.pin) || data.pin === (localStorage.getItem('demo_admin_pin') || DEMO_PIN)) return toast(lang === 'zh' ? '这个 PIN 已被使用。' : 'This PIN is already in use.', 'error');
  ['baseSalary', 'allowance', 'deduction', 'commissionValue'].forEach(key => { data[key] = +data[key] || 0; });
  const index = staff.findIndex(item => item.id === data.id);
  if (index >= 0) staff[index] = data; else staff.push(data);
  Store.saveStaff(staff); $('#staffDialog').close(); renderAdmin();
}

function generatePayroll() {
  const month = $('#payrollMonth').value;
  const staff = Store.getStaff().filter(item => item.status === 'active');
  const leads = Store.getLeads().map(normalizeLead);
  const cars = Store.getCars();
  const records = Store.getPayroll();
  staff.forEach(item => { const commission = commissionFor(item, month, leads, cars); const id = `${month}-${item.id}`; const prior = records.find(record => record.id === id); const record = { id, month, staffId: item.id, staffName: item.name, baseSalary: +item.baseSalary || 0, commission, allowance: +item.allowance || 0, deduction: +item.deduction || 0, total: (+item.baseSalary || 0) + commission + (+item.allowance || 0) - (+item.deduction || 0), status: prior?.status || 'pending', paidAt: prior?.paidAt || '' }; const index = records.findIndex(existing => existing.id === id); if (index >= 0) records[index] = record; else records.push(record); });
  Store.savePayroll(records); renderAdmin();
}

function saveSettings(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  if (CLIENT_MODE) { localStorage.setItem('demo_script_url', String(data.get('scriptUrl') || '')); localStorage.setItem('demo_admin_token', String(data.get('adminToken') || '')); }
  localStorage.setItem('demo_admin_pin', String(data.get('adminPin') || DEMO_PIN));
  localStorage.setItem('demo_dealer_whatsapp', String(data.get('dealerWhatsapp') || ''));
  localStorage.setItem('demo_dealer_slogan', String(data.get('dealerSlogan') || ''));
  localStorage.setItem('demo_dealer_slogan_en', String(data.get('dealerSloganEn') || ''));
  localStorage.setItem('demo_facebook_url', String(data.get('facebookUrl') || ''));
  localStorage.setItem('demo_instagram_url', String(data.get('instagramUrl') || ''));
  localStorage.setItem('demo_owner_email', String(data.get('ownerEmail') || ''));
  toast(tr('settingsSaved'));
}

function resetDemoData() {
  if (!confirm(tr('resetConfirm'))) return;
  Store.reset();
  selectedLeadId = '';
  toast(tr('resetDone'));
  renderAdmin();
}

function logoutAdminSession() {
  sessionStorage.removeItem('demo_admin_unlocked');
  sessionStorage.removeItem('demo_user_role');
  sessionStorage.removeItem('demo_user_name');
  document.body.classList.add('locked');
  $('#pinInput').value = '';
}

async function login(pin) {
  if (CLIENT_MODE && Remote.enabled()) {
    const user = await Remote.login(pin);
    sessionStorage.setItem('demo_user_role', user.role || 'owner');
    sessionStorage.setItem('demo_user_name', user.name || 'Owner');
    await Store.refreshRemote(true);
    return true;
  }
  const ownerPin = localStorage.getItem('demo_admin_pin') || DEMO_PIN;
  if (pin === ownerPin) { sessionStorage.setItem('demo_user_role', 'owner'); sessionStorage.setItem('demo_user_name', 'Owner'); return true; }
  const staff = Store.getStaff().find(item => item.status === 'active' && item.pin === pin);
  if (staff) { sessionStorage.setItem('demo_user_role', 'staff'); sessionStorage.setItem('demo_user_name', staff.name); return true; }
  return false;
}

function unlock() {
  document.body.classList.remove('locked');
  sessionStorage.setItem('demo_admin_unlocked', '1');
  applyAccessRules();
  switchView(currentView);
}

function bindAdminEvents() {
  $$('.side-link[data-view]').forEach(button => button.addEventListener('click', () => switchView(button.dataset.view)));
  $('#adminLangBtn').addEventListener('click', () => { lang = lang === 'zh' ? 'en' : 'zh'; localStorage.setItem('demo_lang', lang); translateAdmin(); });
  $('#addCar').addEventListener('click', () => openCarEditor());
  $('#vehicleRows').addEventListener('click', event => { const target = event.target.closest('[data-edit-car], tr[data-car]'); if (target) openCarEditor(target.dataset.editCar || target.dataset.car); });
  $('#vehicleRows').addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('tr[data-car]')) { event.preventDefault(); openCarEditor(event.target.dataset.car); } });
  $('#closeEdit').addEventListener('click', () => $('#editDialog').close());
  $('#carForm').addEventListener('submit', saveCar);
  $('#deleteCar').addEventListener('click', () => { const id = $('#carForm').elements.id.value; Store.saveCars(Store.getCars().filter(car => car.id !== id)); $('#editDialog').close(); renderAdmin(); });
  $('#photoUpload').addEventListener('change', async event => { editingMedia.push(...await readFiles(event.target.files)); renderMedia(); event.target.value = ''; });
  $('#mediaList').addEventListener('input', event => { const index = Number(event.target.dataset.mediaNote); if (Number.isInteger(index)) { editingMedia[index].note = event.target.value; if (lang === 'zh') editingMedia[index].noteZh = event.target.value; else editingMedia[index].noteEn = event.target.value; } });
  $('#mediaList').addEventListener('click', event => { const up = event.target.closest('[data-media-up]'); const down = event.target.closest('[data-media-down]'); const del = event.target.closest('[data-media-delete]'); if (up && +up.dataset.mediaUp > 0) [editingMedia[+up.dataset.mediaUp - 1], editingMedia[+up.dataset.mediaUp]] = [editingMedia[+up.dataset.mediaUp], editingMedia[+up.dataset.mediaUp - 1]]; if (down && +down.dataset.mediaDown < editingMedia.length - 1) [editingMedia[+down.dataset.mediaDown + 1], editingMedia[+down.dataset.mediaDown]] = [editingMedia[+down.dataset.mediaDown], editingMedia[+down.dataset.mediaDown + 1]]; if (del) editingMedia.splice(+del.dataset.mediaDelete, 1); renderMedia(); });
  $('#reportUpload').addEventListener('change', async event => { const file = event.target.files[0]; if (!file) return; if (file.size > 8 * 1024 * 1024) return toast(lang === 'zh' ? '报告不可超过 8MB。' : 'Report must be under 8MB.', 'error'); if (CLIENT_MODE && Remote.enabled()) $('#carForm').elements.reportUrl.value = await Remote.uploadReport(file); else { const result = await readFiles([file]); $('#carForm').elements.reportUrl.value = result[0].url; } $('#reportUploadState').textContent = tr('reportReady'); $('#removeReport').classList.remove('hidden'); });
  $('#removeReport').addEventListener('click', () => { $('#carForm').elements.reportUrl.value = ''; $('#reportUploadState').textContent = tr('noReport'); $('#removeReport').classList.add('hidden'); });
  $('#addLead').addEventListener('click', openLeadEditor);
  $('#closeLeadDialog').addEventListener('click', () => $('#leadDialog').close());
  $('#leadForm').addEventListener('submit', saveNewLead);
  $('#newLeadCar').addEventListener('change', assignLeadOwnerFromVehicle);
  $('#leadFilterbar').addEventListener('click', event => { const button = event.target.closest('[data-lead-filter]'); if (!button) return; leadFilter = button.dataset.leadFilter; translateAdmin(); });
  $('#leadRows').addEventListener('click', event => { const row = event.target.closest('[data-lead]'); if (row) { selectedLeadId = row.dataset.lead; renderAdmin(); } });
  $('#appointmentCards').addEventListener('click', event => { const card = event.target.closest('[data-lead]'); if (card) { selectedLeadId = card.dataset.lead; renderAdmin(); } });
  $('#appointmentCalendar').addEventListener('click', event => { const item = event.target.closest('[data-lead]'); if (item) { selectedLeadId = item.dataset.lead; renderAdmin(); } });
  $('#leadDetail').addEventListener('click', event => { const save = event.target.closest('[data-save-lead]'); if (save) saveLead(save.dataset.saveLead); const archive = event.target.closest('[data-archive-lead]'); if (archive) { const leads = Store.getLeads(); const lead = leads.find(item => item.id === archive.dataset.archiveLead); if (lead) lead.archived = true; Store.saveLeads(leads); selectedLeadId = ''; renderAdmin(); } const del = event.target.closest('[data-delete-lead]'); if (del && confirm(lang === 'zh' ? '永久删除后无法恢复，确定继续？' : 'Permanently delete this lead?')) { Store.saveLeads(Store.getLeads().filter(item => item.id !== del.dataset.deleteLead)); selectedLeadId = ''; renderAdmin(); } });
  $('#leadDetail').addEventListener('submit', event => { if (event.target.id !== 'timelineForm') return; event.preventDefault(); const leads = Store.getLeads(); const lead = leads.find(item => item.id === event.target.dataset.lead); const note = new FormData(event.target).get('note'); if (lead && note) lead.timeline = [...(lead.timeline || []), { time: new Date().toISOString(), type: 'Follow-up', note }]; Store.saveLeads(leads); renderAdmin(); });
  $('#calendarPrev').addEventListener('click', () => { calendarDate.setMonth(calendarDate.getMonth() - 1); renderAdmin(); });
  $('#calendarNext').addEventListener('click', () => { calendarDate.setMonth(calendarDate.getMonth() + 1); renderAdmin(); });
  $('#addStaff').addEventListener('click', () => openStaffEditor());
  $('#staffGrid').addEventListener('click', event => { const button = event.target.closest('[data-edit-staff]'); if (button) openStaffEditor(button.dataset.editStaff); });
  $('#closeStaff').addEventListener('click', () => $('#staffDialog').close());
  $('#staffForm').addEventListener('submit', saveStaff);
  $('#deleteStaff').addEventListener('click', () => { const id = $('#staffForm').elements.id.value; Store.saveStaff(Store.getStaff().filter(item => item.id !== id)); $('#staffDialog').close(); renderAdmin(); });
  $('#payrollMonth').addEventListener('change', renderAdmin);
  $('#generatePayroll').addEventListener('click', generatePayroll);
  $('#payrollRows').addEventListener('click', event => { const button = event.target.closest('[data-payroll]'); if (!button) return; const records = Store.getPayroll(); const record = records.find(item => item.id === button.dataset.payroll); if (record) { record.status = record.status === 'paid' ? 'pending' : 'paid'; record.paidAt = record.status === 'paid' ? new Date().toISOString() : ''; Store.savePayroll(records); renderAdmin(); } });
  $('#settingsForm').addEventListener('submit', saveSettings);
  $('#resetDemo').addEventListener('click', resetDemoData);
  $('#resetDemoSettings').addEventListener('click', resetDemoData);
  $('#logoutAdmin').addEventListener('click', logoutAdminSession);
  $('#logoutAdminSettings').addEventListener('click', logoutAdminSession);
  $('#pinForm').addEventListener('submit', async event => { event.preventDefault(); $('#pinMessage').textContent = ''; try { if (await login($('#pinInput').value)) unlock(); else $('#pinMessage').textContent = tr('invalidPin'); } catch (error) { $('#pinMessage').textContent = error.message; } });
  $('#resetPin').addEventListener('click', () => { localStorage.setItem('demo_admin_pin', DEMO_PIN); $('#pinInput').value = DEMO_PIN; toast(tr('resetDone')); });
  $$('[data-toggle-pin]').forEach(button => button.addEventListener('click', () => { const input = document.getElementById(button.dataset.togglePin); input.type = input.type === 'password' ? 'text' : 'password'; button.classList.toggle('showing', input.type === 'text'); button.setAttribute('aria-label', input.type === 'text' ? (lang === 'zh' ? '隐藏内容' : 'Hide value') : (lang === 'zh' ? '显示内容' : 'Show value')); }));
  window.addEventListener('store-sync-status', event => { const messages = { local: tr('localSaved'), pending: tr('syncPending'), success: tr('syncSuccess'), error: `${tr('syncError')}: ${event.detail.message}` }; toast(messages[event.detail.state] || event.detail.message, event.detail.state === 'error' ? 'error' : ''); });
}

$('#payrollMonth').value = new Date().toISOString().slice(0, 7);
bindAdminEvents();
translateAdmin();
if (sessionStorage.getItem('demo_admin_unlocked') === '1') unlock();

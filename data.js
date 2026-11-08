const PUBLIC_DEMO_HOSTS = new Set(['cardisplay.my', 'www.cardisplay.my']);
const LOCAL_HOSTS = new Set(['', 'localhost', '127.0.0.1']);
const CLIENT_MODE = document.documentElement.dataset.siteMode === 'client'
  && !PUBLIC_DEMO_HOSTS.has(location.hostname)
  && !LOCAL_HOSTS.has(location.hostname);
const DEMO_MODE = !CLIENT_MODE;
const SITE_CONFIG = window.APP_CONFIG || {};
const DEMO_PIN = SITE_CONFIG.demoAdminPin || '000000';
const DEMO_DATA_VERSION = '2026-08-12-vehicle-owner-v1';
const FALLBACK_CAR_IMAGE = 'assets/cars/myvi-1.webp';

const gallery = (slug, notes) => notes.map((note, index) => ({
  url: `assets/cars/${slug}-${index + 1}.webp`,
  note: note.en,
  noteZh: note.zh,
  noteEn: note.en
}));

const REAL_MEDIA = {
  'CAR-20260811-001': { url: 'assets/cars/real-myvi.jpg', sourceUrl: 'https://paultan.org/2021/12/16/2022-perodua-myvi-facelift-review/' },
  'CAR-20260811-002': { url: 'assets/cars/real-x50.jpg', sourceUrl: 'https://www.carsome.my/buy-car/proton/x50/0-proton-x50--/csak100' },
  'CAR-20260811-003': { url: 'assets/cars/real-vios.jpg', sourceUrl: 'https://www.dsf.my/2021/07/why-the-2020-vios-is-a-success/' },
  'CAR-20260811-004': { url: 'assets/cars/real-city.jpg', sourceUrl: 'https://paultan.org/2021/09/29/2021-honda-city-review-malaysia/' },
  'CAR-20260811-005': { url: 'assets/cars/real-cx5.jpg', sourceUrl: 'https://www.carsome.my/buy-car/mazda/cx-5/2019-mazda-cx-5-2.0/catd000' },
  'CAR-20260811-006': { url: 'assets/cars/real-ativa.jpg', sourceUrl: 'https://www.automachi.com/2022/09/suv-worth-to-buy-in-malaysia/' }
};

const VEHICLE_CATALOG = {
  'Perodua Myvi 1.5 AV': { specsZh: '引擎：1.5L 四缸汽油\n变速箱：D-CVT 自动\n驱动：前轮驱动\n座位：5 人\n车身：五门掀背', specsEn: 'Engine: 1.5L four-cylinder petrol\nTransmission: D-CVT automatic\nDrive: Front-wheel drive\nSeats: 5\nBody: Five-door hatchback', equipmentZh: 'Perodua Smart Drive Assist\n自适应巡航\n盲点监测与后方横向来车警示\n6 安全气囊\n触控式娱乐系统', equipmentEn: 'Perodua Smart Drive Assist\nAdaptive cruise control\nBlind-spot monitor and rear cross-traffic alert\n6 airbags\nTouchscreen infotainment' },
  'Proton X50 1.5 TGDi Premium': { specsZh: '引擎：1.5L 涡轮增压汽油\n变速箱：7 速双离合自动\n驱动：前轮驱动\n座位：5 人\n车身：紧凑型 SUV', specsEn: 'Engine: 1.5L turbo petrol\nTransmission: 7-speed dual-clutch automatic\nDrive: Front-wheel drive\nSeats: 5\nBody: Compact SUV', equipmentZh: '360° 全景影像\n自动紧急刹车\n自适应巡航\n车道保持辅助\n语音控制娱乐系统', equipmentEn: '360-degree camera\nAutonomous emergency braking\nAdaptive cruise control\nLane-keeping assist\nVoice-controlled infotainment' },
  'Toyota Vios 1.5G': { specsZh: '引擎：1.5L 四缸汽油\n变速箱：CVT 自动\n驱动：前轮驱动\n座位：5 人\n车身：四门轿车', specsEn: 'Engine: 1.5L four-cylinder petrol\nTransmission: CVT automatic\nDrive: Front-wheel drive\nSeats: 5\nBody: Four-door sedan', equipmentZh: '车辆稳定控制\n7 安全气囊\n倒车影像\n无钥匙进入与启动\n触控式娱乐系统', equipmentEn: 'Vehicle stability control\n7 airbags\nReverse camera\nKeyless entry and start\nTouchscreen infotainment' },
  'Honda City 1.5 V': { specsZh: '引擎：1.5L i-VTEC 汽油\n变速箱：CVT 自动\n驱动：前轮驱动\n座位：5 人\n车身：四门轿车', specsEn: 'Engine: 1.5L i-VTEC petrol\nTransmission: CVT automatic\nDrive: Front-wheel drive\nSeats: 5\nBody: Four-door sedan', equipmentZh: 'LED 头灯\n远程引擎启动\n倒车影像\n车辆稳定辅助\n触控式娱乐系统', equipmentEn: 'LED headlights\nRemote engine start\nReverse camera\nVehicle stability assist\nTouchscreen infotainment' },
  'Mazda CX-5 2.0G': { specsZh: '引擎：2.0L Skyactiv-G 汽油\n变速箱：6 速自动\n驱动：前轮驱动\n座位：5 人\n车身：中型 SUV', specsEn: 'Engine: 2.0L Skyactiv-G petrol\nTransmission: 6-speed automatic\nDrive: Front-wheel drive\nSeats: 5\nBody: Mid-size SUV', equipmentZh: 'LED 头灯\n盲点监测\n后方横向来车警示\n双区恒温空调\n电子驻车制动', equipmentEn: 'LED headlights\nBlind-spot monitoring\nRear cross-traffic alert\nDual-zone climate control\nElectronic parking brake' },
  'Perodua Ativa 1.0 AV': { specsZh: '引擎：1.0L 涡轮增压汽油\n变速箱：D-CVT 自动\n驱动：前轮驱动\n座位：5 人\n车身：紧凑型 SUV', specsEn: 'Engine: 1.0L turbo petrol\nTransmission: D-CVT automatic\nDrive: Front-wheel drive\nSeats: 5\nBody: Compact SUV', equipmentZh: '高级驾驶辅助系统\n自适应巡航\n车道保持控制\n盲点监测\n6 安全气囊', equipmentEn: 'Advanced driver assistance\nAdaptive cruise control\nLane-keeping control\nBlind-spot monitor\n6 airbags' }
};

function generatedVehicleContent(row) {
  const requested = `${row.brand || ''} ${row.model || ''}`.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const exact = Object.entries(VEHICLE_CATALOG).find(([key]) => key.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() === requested);
  if (exact) return { ...exact[1], matchedModel: exact[0] };
  const tokens = requested.split(' ').filter(token => token.length > 1);
  const fuzzy = Object.entries(VEHICLE_CATALOG).map(([key, value]) => ({ key, value, score: tokens.filter(token => key.toLowerCase().includes(token)).length })).sort((a, b) => b.score - a.score)[0];
  return fuzzy?.score >= 2 ? { ...fuzzy.value, matchedModel: fuzzy.key } : { specsZh: '', specsEn: '', equipmentZh: '', equipmentEn: '', matchedModel: '' };
}

const DEMO_CARS = [
  {
    id: 'CAR-20260811-001', brand: 'Perodua', model: 'Myvi 1.5 AV', year: 2022,
    price: 53800, minimumPrice: 52000, negotiation: 'slightly', mileage: 28300,
    status: 'available', accident: 'none', flood: 'none', fees: 'RM0', report: false,
    notes: 'One wheel has light curb rash; shown in the gallery.',
    notesZh: '一只轮圈有轻微刮痕，已在图集中公开。',
    images: gallery('myvi', [
      { zh: '左前外观', en: 'Front three-quarter exterior' },
      { zh: '右后外观', en: 'Rear three-quarter exterior' },
      { zh: '右驾内装', en: 'Right-hand-drive cabin' },
      { zh: '里程表：28,300 km', en: 'Odometer: 28,300 km' },
      { zh: '引擎舱检查', en: 'Engine bay inspection' }
    ])
  },
  {
    id: 'CAR-20260811-002', brand: 'Proton', model: 'X50 1.5 TGDi Premium', year: 2021,
    price: 76800, minimumPrice: 74500, negotiation: 'welcome', mileage: 46800,
    status: 'available', accident: 'none', flood: 'none', fees: 'RM500 transfer fee',
    report: true, reportUrl: 'inspection-report.html?car=CAR-20260811-002',
    notes: 'Left rear wheel has disclosed curb rash; no structural damage found.',
    notesZh: '左后轮圈有已公开刮痕；未发现结构性损伤。',
    images: gallery('x50', [
      { zh: '左前外观', en: 'Front three-quarter exterior' },
      { zh: '右后外观', en: 'Rear three-quarter exterior' },
      { zh: '右驾内装', en: 'Right-hand-drive cabin' },
      { zh: '里程表：46,802 km', en: 'Odometer: 46,802 km' },
      { zh: '左后轮圈刮痕', en: 'Disclosed left rear wheel curb rash' }
    ])
  },
  {
    id: 'CAR-20260811-003', brand: 'Toyota', model: 'Vios 1.5G', year: 2020,
    price: 59800, minimumPrice: 58000, negotiation: 'slightly', mileage: 61200,
    status: 'available', accident: 'unknown', flood: 'none', fees: 'RM0', report: false,
    notes: 'Rear bumper paint scratch shown. Accident history has not been independently verified.',
    notesZh: '后保险杠有漆面刮痕；事故历史尚未由独立机构核实。',
    images: gallery('vios', [
      { zh: '左前外观', en: 'Front three-quarter exterior' },
      { zh: '右后外观', en: 'Rear three-quarter exterior' },
      { zh: '右驾内装', en: 'Right-hand-drive cabin' },
      { zh: '里程表：61,200 km', en: 'Odometer: 61,200 km' },
      { zh: '后保险杠漆面刮痕', en: 'Rear bumper paint scratch' }
    ])
  },
  {
    id: 'CAR-20260811-004', brand: 'Honda', model: 'City 1.5 V', year: 2021,
    price: 68800, minimumPrice: 67000, negotiation: 'welcome', mileage: 52400,
    status: 'available', accident: 'none', flood: 'none', fees: 'RM0',
    report: true, reportUrl: 'inspection-report.html?car=CAR-20260811-004',
    notes: 'Normal cabin wear. Engine bay and underbody inspected.',
    notesZh: '内装有正常使用痕迹；引擎舱与底盘已检查。',
    images: gallery('city', [
      { zh: '左前外观', en: 'Front three-quarter exterior' },
      { zh: '右后外观', en: 'Rear three-quarter exterior' },
      { zh: '右驾内装', en: 'Right-hand-drive cabin' },
      { zh: '里程表：52,400 km', en: 'Odometer: 52,400 km' },
      { zh: '引擎舱检查', en: 'Engine bay inspection' }
    ])
  },
  {
    id: 'CAR-20260811-005', brand: 'Mazda', model: 'CX-5 2.0G', year: 2019,
    price: 89800, minimumPrice: 86500, negotiation: 'welcome', mileage: 78600,
    status: 'available', accident: 'minor', flood: 'none', fees: 'RM500 transfer fee',
    report: true, reportUrl: 'inspection-report.html?car=CAR-20260811-005',
    notes: 'Lower front bumper received a cosmetic paint repair; disclosed in the gallery and report.',
    notesZh: '前保险杠下方曾进行外观补漆，已在图集与报告中公开。',
    images: gallery('cx5', [
      { zh: '左前外观', en: 'Front three-quarter exterior' },
      { zh: '右后外观', en: 'Rear three-quarter exterior' },
      { zh: '右驾内装', en: 'Right-hand-drive cabin' },
      { zh: '里程表：78,600 km', en: 'Odometer: 78,600 km' },
      { zh: '前保险杠补漆位置', en: 'Disclosed front bumper paint repair' }
    ])
  },
  {
    id: 'CAR-20260811-006', brand: 'Perodua', model: 'Ativa 1.0 AV', year: 2023,
    price: 69800, minimumPrice: 0, negotiation: 'fixed', mileage: 19700,
    status: 'available', accident: 'none', flood: 'none', fees: 'RM0', report: false,
    notes: 'No known accident or flood record; inspection report not uploaded in this Silver example.',
    notesZh: '无已知事故或水灾记录；此白银示例尚未上传验车报告。',
    images: gallery('ativa', [
      { zh: '左前外观', en: 'Front three-quarter exterior' },
      { zh: '右后外观', en: 'Rear three-quarter exterior' },
      { zh: '右驾内装', en: 'Right-hand-drive cabin' },
      { zh: '里程表：19,708 km', en: 'Odometer: 19,708 km' },
      { zh: '引擎舱检查', en: 'Engine bay inspection' }
    ])
  }
].map((car, index) => {
  const media = REAL_MEDIA[car.id];
  const content = generatedVehicleContent(car);
  const images = media ? [{ url: media.url, noteZh: '真实车型参考照片', noteEn: 'Real vehicle reference photo', sourceUrl: media.sourceUrl }] : car.images;
  return { ...car, ...content, assignedStaffId: index % 2 === 0 ? 'STAFF-001' : 'STAFF-002', images, image: images[0].url, photos: images.length };
});

const DEMO_LEADS = [
  {
    id: 'LEAD-DEMO-001', name: 'Aiman', contact: '60123456780', carId: 'CAR-20260811-002',
    source: 'Facebook', status: 'New', createdAt: '2026-08-11T09:20:00+08:00', assigned: 'Unassigned',
    appointment: '', budget: '50000-80000', location: 'Johor Bahru', intent: 'Viewing',
    timeline: [{ time: '2026-08-11T09:20:00+08:00', type: 'Enquiry', note: 'Asked about inspection report.' }]
  },
  {
    id: 'LEAD-DEMO-002', name: 'Mei Ling', contact: '60123456781', carId: 'CAR-20260811-001',
    source: 'Website', status: 'Contacted', createdAt: '2026-08-10T14:10:00+08:00', assigned: 'Jason',
    appointment: '2026-08-13T11:00', appointmentType: 'Test drive', appointmentStatus: 'Scheduled',
    budget: '30000-50000', location: 'Skudai', intent: 'Test drive',
    timeline: [
      { time: '2026-08-10T14:10:00+08:00', type: 'Enquiry', note: 'Website enquiry received.' },
      { time: '2026-08-10T15:20:00+08:00', type: 'Appointment', note: 'Test drive arranged.' }
    ]
  },
  {
    id: 'LEAD-DEMO-003', name: 'Kumar', contact: '60123456782', carId: 'CAR-20260811-004',
    source: 'Google', status: 'Test drive', createdAt: '2026-08-09T18:30:00+08:00', assigned: 'Alicia',
    appointment: '2026-08-14T15:30', appointmentType: 'Test drive', appointmentStatus: 'Scheduled',
    budget: '50000-80000', location: 'Permas Jaya', intent: 'Price',
    timeline: [{ time: '2026-08-09T18:30:00+08:00', type: 'Enquiry', note: 'Requested final price and condition details.' }]
  }
];

const DEMO_STAFF = [
  { id: 'STAFF-001', name: 'Jason', phone: '60123450001', email: 'jason@example.com', identity: 'DEMO-IC-001', role: 'Senior Sales Advisor', startDate: '2024-01-15', address: 'Johor Bahru', emergencyContact: '60123459991', status: 'active', baseSalary: 2800, allowance: 300, deduction: 0, commissionType: 'percent', commissionValue: 1, pin: '111111' },
  { id: 'STAFF-002', name: 'Alicia', phone: '60123450002', email: 'alicia@example.com', identity: 'DEMO-IC-002', role: 'Sales Advisor', startDate: '2025-03-01', address: 'Johor Bahru', emergencyContact: '60123459992', status: 'active', baseSalary: 2400, allowance: 200, deduction: 0, commissionType: 'fixed', commissionValue: 500, pin: '222222' }
];

const DEMO_PAYROLL = [];
const DEMO_SETTINGS = {
  dealerWhatsapp: SITE_CONFIG.dealerWhatsapp || '',
  dealerSlogan: SITE_CONFIG.dealerSlogan || '',
  dealerSloganEn: SITE_CONFIG.dealerSloganEn || '',
  facebookUrl: SITE_CONFIG.facebookUrl || 'https://www.facebook.com/',
  instagramUrl: SITE_CONFIG.instagramUrl || 'https://www.instagram.com/',
  ownerEmail: SITE_CONFIG.ownerEmail || '',
  scriptUrl: '',
  adminToken: ''
};

const STORAGE_KEYS = {
  cars: 'demo_cars', leads: 'demo_leads', staff: 'demo_staff', payroll: 'demo_payroll',
  pin: 'demo_admin_pin', scriptUrl: 'demo_script_url', adminToken: 'demo_admin_token',
  dealerWhatsapp: 'demo_dealer_whatsapp', dealerSlogan: 'demo_dealer_slogan', dealerSloganEn: 'demo_dealer_slogan_en',
  facebookUrl: 'demo_facebook_url', instagramUrl: 'demo_instagram_url', ownerEmail: 'demo_owner_email'
};

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function safeNumber(value) {
  const cleaned = typeof value === 'string' ? value.replace(/[^0-9.-]/g, '') : value;
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : 0;
}
function safeJson(value, fallback) {
  if (!value) return clone(fallback);
  try { return typeof value === 'string' ? JSON.parse(value) : value; }
  catch { return clone(fallback); }
}
function validCarImage(url) {
  const value = String(url || '').trim();
  return /^(?:https?:\/\/|assets\/|data:image\/(?:jpeg|png|webp);base64,)/i.test(value);
}
function normalizeCar(row = {}) {
  const parsed = safeJson(row.imagesJson, row.images || []);
  const images = Array.isArray(parsed) ? parsed.filter(item => item && validCarImage(item.url)) : [];
  const generated = generatedVehicleContent(row);
  return {
    ...row,
    id: String(row.id || ''), brand: String(row.brand || ''), model: String(row.model || ''),
    year: safeNumber(row.year), price: safeNumber(row.price), minimumPrice: safeNumber(row.minimumPrice),
    mileage: safeNumber(row.mileage), status: row.status || 'hidden', accident: row.accident || 'unknown',
    flood: row.flood || 'unknown', fees: row.fees || 'Not provided', assignedStaffId: String(row.assignedStaffId || ''),
    equipmentZh: String(row.equipmentZh || generated.equipmentZh), equipmentEn: String(row.equipmentEn || generated.equipmentEn),
    report: String(row.report).toLowerCase() === 'true',
    image: validCarImage(row.image) ? row.image : (images[0]?.url || FALLBACK_CAR_IMAGE),
    images: images.length ? images : [{ url: validCarImage(row.image) ? row.image : FALLBACK_CAR_IMAGE, note: '' }],
    photos: images.length || safeNumber(row.photos)
  };
}
function carImages(car) {
  const images = Array.isArray(car.images) ? car.images.filter(item => validCarImage(item?.url)) : [];
  return images.length ? images : [{ url: validCarImage(car.image) ? car.image : FALLBACK_CAR_IMAGE, note: '' }];
}
function transparency(car) {
  const complete = carImages(car).length >= 5
    && car.accident !== 'unknown'
    && car.flood !== 'unknown'
    && car.fees
    && car.fees !== 'Not provided';
  if (complete && car.report && car.reportUrl) return 'gold';
  if (complete) return 'silver';
  return 'bronze';
}
function malaysiaDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value || '').slice(0, 16);
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kuala_Lumpur', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(date).filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
}

function dispatchSync(state, scope, message = '') {
  window.dispatchEvent(new CustomEvent('store-sync-status', { detail: { state, scope, message } }));
}

const Remote = {
  enabled() { return CLIENT_MODE && Boolean(this.url()); },
  url() { return localStorage.getItem(STORAGE_KEYS.scriptUrl) || ''; },
  token() { return localStorage.getItem(STORAGE_KEYS.adminToken) || ''; },
  session() { return sessionStorage.getItem('demo_remote_session') || ''; },
  role() { return sessionStorage.getItem('demo_user_role') || ''; },
  async get(action) {
    if (!this.enabled()) return null;
    const response = await fetch(`${this.url()}?action=${encodeURIComponent(action)}`);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || 'Connection failed');
    return payload.data;
  },
  async post(action, data = {}) {
    if (!this.enabled()) return null;
    const session = this.session();
    const response = await fetch(this.url(), {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, session, token: session ? '' : this.token(), ...data })
    });
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || 'Sync failed');
    return payload;
  },
  async login(pin) {
    if (!this.enabled()) return null;
    const response = await fetch(this.url(), {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'login', pin })
    });
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || 'Invalid PIN');
    sessionStorage.setItem('demo_remote_session', payload.session);
    return payload.user;
  },
  async uploadReport(file) {
    const encoded = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const result = await this.post('uploadReport', { file: { name: file.name, type: file.type, data: encoded } });
    return result.url;
  },
  vehicle: normalizeCar,
  lead(row) {
    const raw = String(row.appointment || '');
    return {
      ...row,
      appointment: /Z$|[+-]\d\d:\d\d$/.test(raw) ? malaysiaDateTime(raw) : raw.replace(' ', 'T').slice(0, 16),
      carId: row.vehicleId || row.carId,
      timeline: safeJson(row.timelineJson, [])
    };
  },
  async refresh(includePrivate = false) {
    if (!this.enabled()) return false;
    const rows = await this.get('vehicles');
    localStorage.setItem(STORAGE_KEYS.cars, JSON.stringify((rows || []).map(this.vehicle).filter(car => car.id)));
    if (includePrivate && (this.session() || this.token())) {
      const leads = await this.post('leads');
      localStorage.setItem(STORAGE_KEYS.leads, JSON.stringify((leads.data || []).map(row => this.lead(row))));
      if (this.role() !== 'staff') {
        const [staff, payroll] = await Promise.all([this.post('staff'), this.post('payroll')]);
        localStorage.setItem(STORAGE_KEYS.staff, JSON.stringify(staff.data || []));
        localStorage.setItem(STORAGE_KEYS.payroll, JSON.stringify(payroll.data || []));
      }
    }
    return true;
  },
  async syncCars(next, previous) {
    if (!this.enabled() || (!this.token() && !this.session())) return;
    const removed = previous.filter(item => !next.some(nextItem => nextItem.id === item.id));
    await Promise.all([
      ...next.map(data => this.post('saveVehicle', { data: { ...data, imagesJson: JSON.stringify(data.images || []) } })),
      ...removed.map(item => this.post('deleteVehicle', { id: item.id }))
    ]);
  },
  async syncLeads(next, previous) {
    if (!this.enabled()) return;
    const added = next.filter(item => !previous.some(old => old.id === item.id));
    const changed = next.filter(item => previous.some(old => old.id === item.id));
    const removed = previous.filter(item => !next.some(nextItem => nextItem.id === item.id));
    const authenticated = this.token() || this.session();
    await Promise.all([
      ...added.map(data => this.post('lead', { data: { ...data, vehicleId: data.carId, timelineJson: JSON.stringify(data.timeline || []) } })),
      ...(authenticated ? changed.map(data => this.post('updateLead', { data: { ...data, vehicleId: data.carId, timelineJson: JSON.stringify(data.timeline || []) } })) : []),
      ...(authenticated ? removed.map(item => this.post('deleteLead', { id: item.id })) : [])
    ]);
  },
  async syncStaff(next, previous) {
    if (!this.enabled() || (!this.token() && !this.session())) return;
    const removed = previous.filter(item => !next.some(nextItem => nextItem.id === item.id));
    await Promise.all([
      ...next.map(data => this.post('saveStaff', { data })),
      ...removed.map(item => this.post('deleteStaff', { id: item.id }))
    ]);
  },
  async syncPayroll(next) {
    if (!this.enabled() || (!this.token() && !this.session())) return;
    await Promise.all(next.map(data => this.post('savePayroll', { data })));
  }
};

function persistWithSync(scope, key, value, sync) {
  localStorage.setItem(key, JSON.stringify(value));
  if (!CLIENT_MODE || !Remote.enabled()) {
    dispatchSync('local', scope, 'Saved on this device');
    return;
  }
  dispatchSync('pending', scope, 'Syncing');
  sync().then(() => dispatchSync('success', scope, 'Synced'))
    .catch(error => dispatchSync('error', scope, error.message));
}

const Store = {
  getCars() { return safeJson(localStorage.getItem(STORAGE_KEYS.cars), DEMO_CARS).map(normalizeCar); },
  saveCars(cars) {
    const previous = this.getCars();
    persistWithSync('vehicles', STORAGE_KEYS.cars, cars, () => Remote.syncCars(cars, previous));
  },
  getLeads() { return safeJson(localStorage.getItem(STORAGE_KEYS.leads), DEMO_LEADS); },
  saveLeads(leads) {
    const previous = this.getLeads();
    persistWithSync('leads', STORAGE_KEYS.leads, leads, () => Remote.syncLeads(leads, previous));
  },
  getStaff() { return safeJson(localStorage.getItem(STORAGE_KEYS.staff), DEMO_STAFF); },
  saveStaff(staff) {
    const previous = this.getStaff();
    persistWithSync('staff', STORAGE_KEYS.staff, staff, () => Remote.syncStaff(staff, previous));
  },
  getPayroll() { return safeJson(localStorage.getItem(STORAGE_KEYS.payroll), DEMO_PAYROLL); },
  savePayroll(payroll) {
    persistWithSync('payroll', STORAGE_KEYS.payroll, payroll, () => Remote.syncPayroll(payroll));
  },
  refreshRemote(includePrivate = false) { return Remote.refresh(includePrivate); },
  reset() {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
    sessionStorage.removeItem('demo_remote_session');
    sessionStorage.removeItem('demo_user_role');
    sessionStorage.removeItem('demo_user_name');
    localStorage.setItem(STORAGE_KEYS.cars, JSON.stringify(DEMO_CARS));
    localStorage.setItem(STORAGE_KEYS.leads, JSON.stringify(DEMO_LEADS));
    localStorage.setItem(STORAGE_KEYS.staff, JSON.stringify(DEMO_STAFF));
    localStorage.setItem(STORAGE_KEYS.payroll, JSON.stringify(DEMO_PAYROLL));
    localStorage.setItem(STORAGE_KEYS.pin, DEMO_PIN);
    localStorage.setItem('demo_data_version', DEMO_DATA_VERSION);
    dispatchSync('local', 'reset', 'Demo defaults restored');
  }
};

if (localStorage.getItem('demo_data_version') !== DEMO_DATA_VERSION) Store.reset();
if (DEMO_MODE) {
  localStorage.removeItem(STORAGE_KEYS.scriptUrl);
  localStorage.removeItem(STORAGE_KEYS.adminToken);
}

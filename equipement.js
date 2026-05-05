/* ═══════════════════════════════════════════════════
   equipement.js — Injection des données équipements
   Enrichit MUN_EQUIPMENT_DATA de app.js au lieu de
   créer un popup concurrent.
   <script src="equipement.js" defer></script>
═══════════════════════════════════════════════════ */

/* ── DONNÉES COMPLÈTES (format cap = capacité) ── */
const EQUIP_DATA = {
  "المحرس":{"hr":22,"pop":45000,"equipment":[{"name":"شاحنة قالبة","count":1,"cap":"10 طن"},{"name":"شاحنة ضاغطة","count":1,"cap":"3,5 طن"},{"name":"شاحنة ضاغطة","count":1,"cap":"16 م3"},{"name":"جرار ومجرورة","count":4,"cap":"3 طن"},{"name":"شاحنة مجهزة بسلم","count":1,"cap":""},{"name":"سيارة خفيفة قالبة","count":1,"cap":""},{"name":"تراكتوبال","count":1,"cap":""}]},
  "عقارب":{"hr":0,"pop":0,"equipment":[{"name":"شاحنة","count":1,"cap":""},{"name":"آلة جارفة","count":1,"cap":""},{"name":"جرار","count":1,"cap":""},{"name":"مكنسة كهربائية","count":1,"cap":""}]},
  "الشيحية":{"hr":23,"pop":30014,"equipment":[{"name":"شاحنة قالبة","count":3,"cap":"7 طن"},{"name":"شاحنة قالبة","count":1,"cap":"3 طن"},{"name":"شاحنة ضاغطة","count":2,"cap":""},{"name":"تراكس","count":1,"cap":""},{"name":"آلة جارفة","count":1,"cap":""},{"name":"جرار","count":2,"cap":""}]},
  "الصخيرة":{"hr":13,"pop":0,"equipment":[{"name":"جرار","count":1,"cap":"3,5 طن"},{"name":"شاحنة ضاغطة","count":2,"cap":"7 طن"},{"name":"شاحنة","count":1,"cap":"10 طن"},{"name":"شاحنة","count":1,"cap":"7 طن"}]},
  "العامرة":{"hr":18,"pop":33450,"equipment":[{"name":"تراكس","count":2,"cap":""},{"name":"شاحنة قالبة","count":3,"cap":""},{"name":"شاحنة","count":1,"cap":""},{"name":"شاحنة رافعة","count":1,"cap":""},{"name":"جرار","count":3,"cap":""},{"name":"مجرورة","count":2,"cap":""},{"name":"آلة جارفة","count":1,"cap":""}]},
  "النصر":{"hr":8,"pop":18393,"equipment":[{"name":"شاحنة","count":1,"cap":""},{"name":"جرار فلاحي","count":3,"cap":""},{"name":"تراكس","count":1,"cap":""},{"name":"آلة جارفة صغيرة الحجم","count":1,"cap":""}]},
  "حزق اللوزة":{"hr":4,"pop":0,"equipment":[{"name":"تراكس","count":1,"cap":""},{"name":"آلة جارفة","count":1,"cap":""},{"name":"شاحنة ضاغطة","count":1,"cap":""},{"name":"شاحنة قالبة","count":1,"cap":""},{"name":"جرار","count":3,"cap":""},{"name":"حاوية","count":192,"cap":""}]},
  "ساقية الدائر":{"hr":62,"pop":91000,"equipment":[{"name":"شاحنة قالبة","count":4,"cap":""},{"name":"شاحنة ضاغطة","count":4,"cap":""},{"name":"رافعات","count":3,"cap":""},{"name":"جرارات","count":5,"cap":""}]},
  "طينة":{"hr":48,"pop":53349,"equipment":[{"name":"شاحنة","count":10,"cap":"0,9 طن"},{"name":"شاحنة ضاغطة","count":1,"cap":"5,4 طن"},{"name":"شاحنة","count":1,"cap":"5,1 طن"},{"name":"شاحنة قالبة","count":2,"cap":"6,4 طن"},{"name":"تراكتوبال","count":1,"cap":""},{"name":"ميني تراكس","count":1,"cap":""}]},
  "منزل شاكر":{"hr":12,"pop":0,"equipment":[{"name":"شاحنة ضاغطة","count":1,"cap":"7 م3"},{"name":"شاحنة ضاغطة","count":1,"cap":"5 م3"},{"name":"جرار ومجرورة","count":1,"cap":""},{"name":"آلة شحن وحفر","count":1,"cap":""},{"name":"شاحنة تفريغ الآبار","count":1,"cap":""}]},
  "العين":{"hr":41,"pop":53337,"equipment":[{"name":"آلة جارفة","count":2,"cap":""},{"name":"جرار","count":3,"cap":""},{"name":"شاحنة","count":5,"cap":"3,5 طن"},{"name":"شاحنة","count":2,"cap":"9 طن"},{"name":"آلة جارفة صغيرة الحجم","count":1,"cap":""},{"name":"شاحنة ذات صهريج","count":1,"cap":""}]},
  "صفاقس":{"hr":322,"pop":801272,"equipment":[{"name":"جرار","count":8,"cap":""},{"name":"تراكتوبال","count":2,"cap":""},{"name":"آلة جارفة صغيرة الحجم","count":3,"cap":""},{"name":"شاحنة قالبة","count":10,"cap":""},{"name":"شاحنة صغيرة الحجم","count":3,"cap":""},{"name":"حاوية غسيل","count":1,"cap":""},{"name":"شاحنة ضاغطة","count":15,"cap":""},{"name":"شاحنة ضاغطة صغيرة الحجم","count":10,"cap":""},{"name":"Compacteur","count":6,"cap":""},{"name":"مجرورة","count":24,"cap":""}]},
  "الغريبة":{"hr":9,"pop":0,"equipment":[{"name":"شاحنة قالبة","count":2,"cap":"3,5 طن"},{"name":"آلة جارفة صغيرة الحجم","count":1,"cap":""},{"name":"جرار ومجرورة","count":1,"cap":"2,5 طن"},{"name":"صهريج شفط المياه","count":1,"cap":"5 م3"}]},
  "قرقنة":{"hr":29,"pop":0,"equipment":[{"name":"شاحنة ضاغطة","count":6,"cap":"6 م3"},{"name":"شاحنة قالبة","count":3,"cap":"3,5 طن"},{"name":"شاحنة","count":2,"cap":"10 طن"},{"name":"آلة حفر","count":1,"cap":""},{"name":"آلة جارفة صغيرة الحجم","count":1,"cap":""},{"name":"شاحنة وصهريج شفط مياه","count":1,"cap":""},{"name":"جرافة","count":1,"cap":""}]},
  "ساقية الزيت":{"hr":21,"pop":0,"equipment":[{"name":"شاحنة ضاغطة","count":3,"cap":"16 م3"},{"name":"شاحنة قالبة","count":4,"cap":"5 طن"},{"name":"شاحنة","count":1,"cap":"34 م3"},{"name":"تراكس","count":1,"cap":""},{"name":"آلة شحن كبيرة","count":1,"cap":""},{"name":"آلة شحن صغيرة الحجم","count":1,"cap":""}]},
  "قرمدة":{"hr":0,"pop":0,"equipment":[]},
  "بئر علي الشمالية":{"hr":0,"pop":0,"equipment":[]},
  "بئر علي بن خليفة":{"hr":0,"pop":0,"equipment":[]},
  "الحنشة":{"hr":0,"pop":0,"equipment":[]},
  "جبنيانة":{"hr":0,"pop":0,"equipment":[]},
  "النور":{"hr":0,"pop":0,"equipment":[]},
  "الحاجب":{"hr":0,"pop":0,"equipment":[]},
  "العوابد الخزانات":{"hr":0,"pop":0,"equipment":[]}
};

/* ── INJECTION dans MUN_EQUIPMENT_DATA de app.js ──
   On convertit cap → capacity pour correspondre au format attendu
   par renderMunEquipment() dans app.js
── */
(function injectEquipData() {
  // Attendre que MUN_EQUIPMENT_DATA soit défini (app.js doit être chargé avant)
  if (typeof MUN_EQUIPMENT_DATA === 'undefined') {
    console.warn('[equipement.js] MUN_EQUIPMENT_DATA non trouvé — app.js doit être chargé en premier.');
    return;
  }

  Object.keys(EQUIP_DATA).forEach(function(mun) {
    var src = EQUIP_DATA[mun];
    MUN_EQUIPMENT_DATA[mun] = {
      hr: src.hr || 0,
      pop: src.pop || 0,
      equipment: (src.equipment || []).map(function(e) {
        return { name: e.name, count: e.count, capacity: e.cap || '' };
      })
    };
  });

  console.log('[equipement.js] Données injectées dans MUN_EQUIPMENT_DATA ✓');
})();

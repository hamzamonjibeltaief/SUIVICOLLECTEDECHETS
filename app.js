/* ══════════════════════════════════════════════════════════════════
   app.js — لوحة متابعة النظافة | بلديات ولاية صفاقس
   Compatible avec index.html + styles.css (Neumorphism Design System)
══════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════
   0. DONNÉES — 92 interventions, 21-30 Avril 2026
   Source: sfax_nettoyage_dashboard_v4
═══════════════════════════════════════════ */
const DATA = [
  {date:'2026-04-21',mun:'العامرة',ton:170,mk:0,type:'كنس يدوي / رفع فضالت مختلفة / رفع فضالت منزلية / رفع مصبات عشوائية',places:'الطريق الرئيسي المهدية / المنطقة الصناعية السعادي / العامرة / حومة الجامع العامرة / عمادة السلام',workers:'عدد 12 عامل',equip:'معدات خفيفة / عدد 03 شاحنة / عدد 01 bobcat / عدد 01 جرار / عدد 01 تراكس'},
  {date:'2026-04-21',mun:'الشيحية',ton:84,mk:0,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية / رفع فضلات منزلية',places:'شارع محمد علي / شارع الحبيب ثامر / شارع المنارة / شارع البيئة / شارع الإمام سحنون',workers:'أعوان بلدية الشيحية',equip:'شاحنة ثقيلة'},
  {date:'2026-04-21',mun:'النصر',ton:9,mk:0,type:'رفع فضلات منزلية / رفع نقاط سوداء',places:'منطقة الغرابة عمادة النصر / سيدي محمد بن عمر من / عمادة النصر',workers:'فريق النظافة',equip:'جرار / شاحنة'},
  {date:'2026-04-21',mun:'جبنيانة',ton:45,mk:0,type:'رفع الفواضل المختلفة / كنس ورفع األتربة وتقليع / الأعشاب من الرصيف. / رفع فواضل الزبيرة',places:'شارع البيئة',workers:'أعوان البلدية /',equip:'—'},
  {date:'2026-04-21',mun:'حزق اللوزة',ton:9.5,mk:0,type:'رفع فضلات منزلية',places:'كامل المنطقة البلدية',workers:'أعوان البلدية /',equip:'—'},
  {date:'2026-04-21',mun:'عقارب',ton:64,mk:0,type:'تنظيف وكنس / إزالة أتربة / جمع المواد البلاستيكية / رفع مصب عشوائي',places:'المنتزه البلدي / بطحاء الجربان / حي المنتزه / طريق المحروقة / حي بن ابراهيم1 / حي الخضراء',workers:'عدد 05 عملة البلدية / عدد 10 عملة من مصلحة / الغابات',equip:'جرار حمولة 4 طن / شاحنة حمولة 7 طن / آلة جارفة'},
  {date:'2026-04-21',mun:'منزل شاكر',ton:25,mk:0,type:'مواصلة برنامج السقي / رفع الفضلات المنزلية / تنظيف محيط المستشفى',places:'محيط المستشفى المحلي / بمنزل شاكر / عمادة منزل شاكر / عمادة بوثدي',workers:'6 عملة  / سائق',equip:'آلة شحن صغيرة / جرار + مجرورة / جرار + صهريج / شاحنة ضاغطة'},
  {date:'2026-04-21',mun:'قرمدة',ton:107,mk:0,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية / رفع فضلات منزلية',places:'شارع بوزيان كم 5 / طريق قرمدة كم 4.5 / شارع محمود مقديش / نهج الشيخ محمد اللحياني / شارع المناضل الطاهر كمون / شارع الامام سحنون / شارع 2 مارس / شارع الشهداء / زنقة القرقوري / زنقة النخلة',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-21',mun:'طينة',ton:72,mk:1000,type:'كنس حواشي األرصفة / تقليع الأعشاب الطفيلية / رفع النقاط السوداء',places:'قصاص التوتة \" تاك \" / المكتبة العمومية بطينة / تنظيف وادي الحكموني',workers:'أعوان البلدية  / إدارة المياه العمرانية',equip:'عدد 02 تراكتوبال / عدد 02 شاحنة قالبة / معدات يدوية'},
  {date:'2026-04-22',mun:'المحرس',ton:66,mk:3000,type:'إزالة الأعشاب الطفيلية و تجميع / النفايات البلاستيكية و البلورية / فضلات منزلية و مشابهة باعتبار / قرية نقطة وبوعكازين / رفع فضلات الزبيرة و الكنس / سقي بواسطة جرار و صهريج',places:'الفسحة الشاطئية الكورنيش / المنطقة البلدية المعنية بالنظافة / اليومية بطريقة باب باب / نهج الأغالبة على مستوى مفترق / الطريق الوطنية عدد 01 / نهج الأغالبة على مستوى مفترق / الطريق الوطنية عدد 01',workers:'أعوان البلدية / أهالي المنطقة',equip:'—'},
  {date:'2026-04-22',mun:'ساقية الزيت',ton:110,mk:1300,type:'كنس الأتربة / رفع فضلات مختلفة / رفع فضلات منزلية / ازالة الأعشاب الطفيلية',places:'شارع الحبيب بورقيبة / شارع محمد الخامس / المستودع البلدي بالأنس / دار الشباب سيدي صالح / منطقة سيدي صالح / الطريق المحاذي للسكة الحديدية / قاع المزود شارع الهادي شاكر',workers:'معدات خفيفة / عدد 03 شاحنة / عدد 01 bobcat / عدد 01 جرار',equip:'—'},
  {date:'2026-04-22',mun:'العامرة',ton:110,mk:0,type:'كنس يدوي / رفع فضلات مختلفة / رفع فضلات منزلية / العناية بالحدائق العمومية',places:'الطريق الرئيسي المهدية / حومة الجامع العامرة / جوار مغازة عزيزة العامرة / جوار مدرسة العامرة 1',workers:'عدد 12 عامل',equip:'معدات خفيفة / عدد 03 شاحنة / عدد 01 bobcat /'},
  {date:'2026-04-22',mun:'العين',ton:100,mk:0,type:'رفع المصبات العشوائية / تعهد الطرقات / كنس الطرقات / رفع الفضلات المختلفة / تنظيف حواشي الطرقات / إزالة الأعشاب الطفيلية',places:'زنقة الشيخ / طريق العين / نهج العباسية / نهج الشيخ اللخمي',workers:'أعوان البلدية  / مقاول كنس',equip:'—'},
  {date:'2026-04-22',mun:'النصر',ton:2.5,mk:0,type:'رفع فضلات منزلية',places:'منطقة الغرابة عمادة النصر / سيدي محمد بن عمر من / عمادة النصر',workers:'فريق النظافة',equip:'جرار / شاحنة'},
  {date:'2026-04-22',mun:'بئر علي بن خليفة',ton:160,mk:0,type:'رفع فضلات منزلية / رفع فضلات البناء و الأجنة',places:'حي المستقبل / السوق الاسبوعية وسط المدينة',workers:'أعوان البلدية /',equip:'جرار و مجرورة / شاحنة رفع فضالت / الة تراكس / آلة جارفة'},
  {date:'2026-04-22',mun:'جبنيانة',ton:55,mk:1600,type:'رفع الفواضل المختلفة / كنس ورفع األتربة وتقليع / الأعشاب من الرصيف. / رفع فواضل الزبيرة',places:'نهج علي الزواوي / شارغ البيئة',workers:'أعوان البلدية /',equip:'—'},
  {date:'2026-04-22',mun:'عقارب',ton:21,mk:0,type:'تنظيف وكنس / إزالة أتربة / رفع مصب هامشي',places:'المنتزه البلدي / حي العكاشات / السوق الاسبوعية و سوق الخضر / شارع البيئة',workers:'عدد 05 عملة البلدية / عدد 08 عملة من مقاولات الكنس',equip:'جرار حمولة 4 طن / شاحنة حمولة 7 طن / آلة جارفة'},
  {date:'2026-04-22',mun:'قرمدة',ton:125,mk:0,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية / رفع فضلات منزلية',places:'هج القيروان /شارع فلسطين / مدخل مقبرتي الرشاد والعموري / نهج الرشاد /شارع الشهداء / نهج الجمهورية /شارع 02 مارس / نهج المناضل الطاهر كمون /نهج غرة / ماي /طريق قرمدة /شارع بوزيان / محيط مستوصف مركز كمون / محيط جامع بلال /شارع المنجي سليم / شارع محمود كريشان',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-22',mun:'طينة',ton:101,mk:1000,type:'كنس حواشي األرصفة / تقليع الأعشاب الطفيلية / رفع النقاط السوداء',places:'حي الهواء / جنان القطي / مسلك عميرة / قصاص التوتة \" تاك\" / واد الحكموني',workers:'أعوان البلدية  / إدارة المياه العمرانية',equip:'عدد 02 تراكتوبال / عدد 03 شاحنة قالبة / معدات يدوية'},
  {date:'2026-04-23',mun:'صفاقس',ton:204,mk:1300,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية',places:'طريق العين  /  سيدي منصور',workers:'عدد 51 أعوان البلدية /  مقاولات المذيوب',equip:'—'},
  {date:'2026-04-23',mun:'الصخيرة',ton:7,mk:0,type:'تنظيف حواشي الطرقات / رفع فضلات مختلفة',places:'منطقة صبيح',workers:'عملة البلدية  /  عملة الحظائر الظرفية  / مقاول',equip:'عدد 02 شاحنة قالبة  / آلة تراكتوبال  / آلة ماسحة'},
  {date:'2026-04-23',mun:'ساقية الزيت',ton:110,mk:1000,type:'كنس حواشي الأرصفة  /  تقليع الأعشاب الطفيلية / رفع الأتربة / رفع فضلات مختلفة',places:'تقسيم الأنس / الطريق المحاذي للسكة الحديدية / نهج خير الدين باشا / شارع الحبيب بورقيبة / شارع محمد الخامس / المستودع البلدي بالأنس',workers:'',equip:'—'},
  {date:'2026-04-23',mun:'العامرة',ton:138,mk:0,type:'كنس يدوي / حملة نظافة شاملة: رفع نقاط سوداء / رفع فضلات منزلية',places:'الطريق الرئيسي المهدية / عمادة أولاد حسن / عمادة ذراع بن زياد: الحي والمركز',workers:'أنوان البلدية',equip:'معدات خفيفة / عدد 03 شاحنة / عدد 01 bobcat / عدد 01 جرار و مجرورة'},
  {date:'2026-04-23',mun:'الشيحية',ton:32,mk:0,type:'كنس الأتربة و إزالة الأعشاب الطفيلية / رفع فضلات منزلية',places:'شارع البيئة / الطريق الرئيسي',workers:'02 شاحنة',equip:'—'},
  {date:'2026-04-23',mun:'الغريبة',ton:15,mk:0,type:'حملة نظافة',places:'مقر قصر البلدية',workers:'03 عملة',equip:'—'},
  {date:'2026-04-23',mun:'النصر',ton:2.5,mk:0,type:'جمع ورفع فضلات منزلية',places:'منطقة الغرابة عمادة النصر / منطقة  حي دخان  / الأغوام  / الطهاهرة  / التكاتكة من عمادة دخان',workers:'فريق النظافة',equip:'جرار / شاحنة'},
  {date:'2026-04-23',mun:'بئر علي بن خليفة',ton:180,mk:0,type:'',places:'وسط المدينة  / حي النجاح / المعهد الثانوي بئر علي',workers:'عملة البلدية  /  مقاول التنظيف /',equip:'جرار و مجرورة  / شاحنة رفع الفضلات / الة تراكس  / BOBCAT'},
  {date:'2026-04-23',mun:'جبنيانة',ton:45,mk:600,type:'رفع الفواضل المختلفة  / كنس ورفع الأتربة وتقليع الأعشاب من الرصيف',places:'نهج سيدي أبي إسحاق  /  ساحة مقر سيدي أبي إسحاق / شارع الحبيب بورقيبة',workers:'أعوان البلدية /',equip:'—'},
  {date:'2026-04-23',mun:'قرمدة',ton:105,mk:0,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية / رفع فضلات منزلية',places:'نهج طارق إبن زياد/شارع الحبيب ثامر / تقسيم بن جماعة/مقبرة سيدي الطيبي / شارع فرحات حشاد/نهج علي الزواوي / زنقة المزغني/نهج القاضي عمر بن جماعة / شارع إبن سيناء/نهج أبو القاسم الشابي / شارع محمد الجمل/شارع الطبلبي / طريق قرمدة/شارع بوزيان / طريق الأفران/شارع الشهداء',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-23',mun:'ساقية الدائر',ton:115,mk:0,type:'رفع المصبات العشوائية / رفع النقاط السوداء / جهر الاتربة  / ازالة الاعشاب الطفيلية  / رفع فضلات ردم   / دهن حواشي الطرقات / الكنس اليدوي للفضلات / تشذيب أشجار النخيل',places:'مدخل المسلخ البلدي / مسرب الحاج حميد / زنقة الحداد / شارع فرحات حشاد/ نهج ابن شرف / نهج دكان الصافي / نهج 9 أفريل / طريق المهدية كلم 10 /شارع البيئة  / وسط الساقية  / من بشة الي مركز الحطاب / شارع فرحات حشاد',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-23',mun:'طينة',ton:76,mk:1000,type:'كنس حواشي الأرصفة  /  تقليع الأعشاب الطفيلية / رفع نقاط سوداء',places:'حي المعز / قصاص التوتة \" تاك\"  / حي بنسعيدة / طريق سيدي عبيد و حي الرياض',workers:'أعوان البلدية  /',equip:'عدد 02 تراكتوبال / عدد 03 شاحنة قالبة / معدات يدوية'},
  {date:'2026-04-24',mun:'صفاقس',ton:107,mk:600,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية',places:'طريق العين  /  وادي الشعبوني / قصاص شعبان / القائد محمد / زنقة الشيشمة / طريق تونس',workers:'42 عون بلدي / مقاولة التنظيف',equip:'—'},
  {date:'2026-04-24',mun:'المحرس',ton:358,mk:0,type:'إزالة النقاط السوداء / فضلات منزلية و مشابهة  /  إزالة مصب عشوائي / رفع و إزالة فضلات البناء',places:'*السوق الأسبوعية من جهة الكشافة / *المنطقة البلدية المعنية بالنظافة اليومية بطريقة باب باب  / *حي المعاصر  / *حي الهناء  / *شاطئ الشفار القديم / *منطقة نقطة وبوعكازين',workers:'بلدية المحرس عن طريق المقاولات بالتعاون مع وزارة البيئة',equip:'—'},
  {date:'2026-04-24',mun:'العامرة',ton:110,mk:0,type:'كنس يدوي / رفع نقاط سوداء / رفع فضلات منزلية /  إزالة الأعشاب الطفيلية',places:'الطريق الرئيسي المهدية  / منطقة العوابد من عمادة بودربالة / طريق انشلة من عمادة العامرة / جوار المستودع البلدي',workers:'',equip:'عدد 02 شاحنة / عدد 01 جرار ومجرورة / Bobcat / آلة تراكس'},
  {date:'2026-04-24',mun:'الشيحية',ton:29,mk:0,type:'معالجة النقاط السوداء / كنس الأترية / إزالة الأعشاب الطفيلية / متابعة عملية رفع الفضلات المنزلية / العناية بالمناطق الخضراء',places:'شارع الحبيب ثامر  / شارع افريقيا   / شارع قرطاج / شارع البيئة / شارع محمد علي / شارع غرة جوان / شارع الطبلبي',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-24',mun:'العين',ton:250,mk:0,type:'رفع المصبات العشوائية /  تعهد الطرقات /  كنس الطرقات /  رفع الفضلات المختلفة /  تشذيب الأشجار /  تنظيف حواشي الطرقات /  إزالة الأعشاب الطفيلية ورفع الأتربة',places:'طريق منزل شاكر / نهج تمغزة / شارع البيئة  / القاصة رقم 4',workers:'أعوان البلدية  / مقاولة كنس',equip:'—'},
  {date:'2026-04-24',mun:'النصر',ton:2,mk:0,type:'رفع فضلات منزلية',places:'منطقة الغرابة عمادة النصر / منطقة الصغايرة عمادة دخان / منطقة القصادلة من عمادة الجواودة / حي الجواودة / العمارات من عمادة الجواودة / أولاد حسين من عمادة الجواودة',workers:'أعوان البلدية',equip:'جرار / شاحنة'},
  {date:'2026-04-24',mun:'بئر علي بن خليفة',ton:190,mk:0,type:'رفع فضلات منزلية / رفع فضلات البناء و الحدائق',places:'وسط المدينة  / حي النصر 1 / الحديقة الكائنة بالطريق الوطنية 2 / حي الفتح / الطريق الوطنية رقم 14',workers:'أعوان البلدية  / مقاولة تنظيف',equip:'جرار و مجرورة  / شاحنة رفع الفضلات / الة تراكس  / BOBCAT'},
  {date:'2026-04-24',mun:'جبنيانة',ton:112,mk:750,type:'رفع الفواضل المختلفة  / كنس ورفع الأتربة وتقليع الأعشاب من الرصيف',places:'طريق أولاد حسن /  شارع البيئة /  نهج الإمام سحنون',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-24',mun:'عقارب',ton:72,mk:1400,type:'حملة نظافة / كنس وتنظيف سوق الخضر / رفع فضلات بلاستيكية / ازالة الأعشاب الطفيلية / كنس',places:'الطريق الرابطة بين منطقة الشعاشعة ومنطقة الأفرار / بطحاء الجربان / سوق الخضر / سوق الزيتون  / أمام معمل السلامي / مقبرة السوالم ومقبرة بن عربية / ساحة العلم بمدخل مدينة عقارب',workers:'عدد 05 عملة بلدية عقارب / عدد 10 عاملات من مصلحة الغابات',equip:'شاحنة حمولة 4 طن / جرار / مكنسة آلية / bobcat'},
  {date:'2026-04-24',mun:'قرمدة',ton:105,mk:0,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية',places:'شارع الطبلبي / شارع محمد الجمل / شارع محمود كريشان / نهج الياسمين / نهج مصطفى السلامي / شلرع المنجي سليم / نهج أبو بكر عبد الكافي / نهج مصطفى الفقي / شارع الحبيب ثامر طريق الأفران',workers:'أعوان النظافة  / مقاولة التنظيف',equip:'—'},
  {date:'2026-04-24',mun:'ساقية الدائر',ton:95,mk:0,type:'رفع المصبات العشوائية / رفع النقاط السوداء / جهر الاتربة  / ازالة الاعشاب الطفيلية  / رفع فضلات ردم   / دهن حواشي الطرقات / الكنس اليدوي للفضلات / تشذيب أشجار النخيل',places:'نهج الطاهر صفر/نهج البساتين /  نهج الشهداء/نهج النرجس /  نهج النور/وسط الساقية / نهج 9 أفريل/المستودع البلدي / وسط الساقية/شارع فرحات حشاد / من بشة الى مركز الحطاب',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-24',mun:'طينة',ton:78,mk:1200,type:'كنس حواشي الأرصفة  /  تقليع الأعشاب الطفيلية / رفع نقاط سوداء',places:'طريق المحارزة / حي العقاربة / طريق سيدي عبيد / مدخل حي طينة',workers:'أعوان البلدية',equip:'عدد 02 شاحنة قالبة  / عدد 02 آلة تراكتوبال  / معدات يدوية'},
  {date:'2026-04-25',mun:'العامرة',ton:78,mk:0,type:'كنس يدوي / رفع فضلات منزلية',places:'الطريق الرئيسي المهدية / عمادة السلام  / منطقة العقاربة من عمادة السعادي',workers:'أعوان البلدية',equip:'عدد 02 شاحنات / عدد 01 جرار ومجرورة / Bobcat / آلة تراكس'},
  {date:'2026-04-25',mun:'النصر',ton:2,mk:0,type:'رفع فضلات منزلية',places:'منطقة الغرابة عمادة النصر / منطقة الغيب والنيب  / حي بئر الشعبة من عمادة بئر الشعبة',workers:'أعوان البدية',equip:'جرار  / شاحنة'},
  {date:'2026-04-25',mun:'جبنيانة',ton:65,mk:650,type:'رفع الفواضل المختلفة  / كنس ورفع الأتربة وتقليع الأعشاب من الرصيف',places:'شارع الحبيب بورقيبة / حديقة سيدي أبي إسحاق',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-25',mun:'حزق اللوزة',ton:10,mk:0,type:'رفـــــع فضلات منزلية',places:'المنطقة البلدية',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-25',mun:'ساقية الدائر',ton:94,mk:0,type:'رفع المصبات العشوائية / رفع النقاط السوداء / جهر الاتربة  / ازالة الاعشاب الطفيلية  / رفع فضلات ردم   / دهن حواشي الطرقات / الكنس اليدوي للفضلات / تشذيب أشجار النخيل',places:'السوق الاسبوعي / سوق الحطاب / نهج المدرسة الاعدادية الحطاب / نهج 9 أفريل / وسط الساقية / مركز الحطاب / شارع فرحات حشاد / من بشة إلى مركز الحطاب',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-25',mun:'طينة',ton:47,mk:1000,type:'كنس حواشي الأرصفة  /  تقليع الأعشاب الطفيلية / رفع نقاط سوداء',places:'زنقة ميلاد / محيط معهد طينة  /  الملعب البلدي / حي البدراني',workers:'أعوان البلدية',equip:'عدد 02 شاحنة قالبة  / عدد 02 آلة تراكتوبال  / معدات يدوية'},
  {date:'2026-04-27',mun:'الصخيرة',ton:11,mk:0,type:'تنظيف حواشي الطرقات / رفع فضلات مختلفة',places:'شارع جمال عبد الناصر   / حي الأمل 1 و 2  / الحي التجاري',workers:'',equip:'عدد 02 شاحنة قالبة  / آلة تراكتوبال'},
  {date:'2026-04-27',mun:'المحرس',ton:116,mk:0,type:'*رفع فضلات منزلية / *رفع فضلات مختلفة / *إزالة ورفع فضلات بلاستيكية / *إزالة مصب عشوائي / *تجميع فضلات الهدم والبناء',places:'*طريق فلمش محيط معصرة زهرة بيبي / *المنطقة البلدية المعنية بالنظافة اليومية بطريقة باب باب  / *شارع فلسطين حي المعاصر  / *حي الهناء أرض السليمي  / *شاطئ الشفار القديم / *منطقة نقطة وبوعكازين',workers:'',equip:'—'},
  {date:'2026-04-27',mun:'ساقية الزيت',ton:215,mk:1200,type:'كنس حواشي الأرصفة  /  تقليع الأعشاب الطفيلية / رفع الأتربة / رفع فضلات مختلفة',places:'شارع المختار الزيادي / شارع الطيب المهيري / سيدي صالح / تقسيم الأنس / شارع الإستقلال / شارع الهادي شاكر / زنقة الشيخ / شارع الحبيب بورقيبة / شارع محمد الخامس / المستودع البلدي بالأنس',workers:'أعوان البلدية  / مقاولات النظافة',equip:'—'},
  {date:'2026-04-27',mun:'العامرة',ton:200,mk:0,type:'كنس يدوي /    رفع فضلات منزلية /    رفع نقاط سوداء',places:'الطريق الرئيسي المهدية /  جوار المكتبة العمومية / الطريق الرئيسي السلطنية',workers:'أعوان البلدية',equip:'معدات خفيفة / عدد 02 شاحنات / عدد 01 bobcat / عدد 01 جرار ومجرورة / تراكس'},
  {date:'2026-04-27',mun:'الشيحية',ton:91,mk:0,type:'معالجة النقاط السوداء / كنس الأتربة و إزالة الأعشاب الطفيلية / رفع فضلات منزلية / تشذيب أشجار التصفيف / تنظيف محيط الحاويات',places:'شارع الطبلبي  /  شارع الحرية / شارع المنجي سليم / شارع أبو القاسم الشابي / شارع البيئة  / شارع الحبيب بورقيبة / شارع الحبيب العيادي',workers:'',equip:'عدد 02 شاحنة  / عدد 02 مجرورة'},
  {date:'2026-04-27',mun:'الغريبة',ton:20,mk:0,type:'حملة نظافة',places:'شارع الجمهورية / شارع المغرب العربي',workers:'',equip:'—'},
  {date:'2026-04-27',mun:'النصر',ton:2,mk:0,type:'رفع فضلات منزلية',places:'منطقة الغرابة عمادة النصر',workers:'',equip:'جرار  / شاحنة'},
  {date:'2026-04-27',mun:'جبنيانة',ton:90,mk:0,type:'رفع الفواضل المختلفة',places:'طريق أولاد حمد / أمام مركز التكوين المهني / حديقة بالمحاجبة',workers:'',equip:'—'},
  {date:'2026-04-27',mun:'حزق اللوزة',ton:70,mk:0,type:'حملة نظافة / رفع فضلات منزلية / تنظيف حواشي الطرقات',places:'المنطقة البلدية',workers:'',equip:'—'},
  {date:'2026-04-27',mun:'عقارب',ton:35,mk:1000,type:'رفع مصبات عشوائية / كنس / أشغال بستنة',places:'شارع علي البلهوان / شارع الحبيب ثامر / طريق الوادي الكبير: اللوميرات / المنتزه البلدي / شارع الحبيب بورقيبة',workers:'',equip:'عدد 01 شاحنة       / عدد 01 Bobcat / عدد 01 مكنسة كهربائية / جرار'},
  {date:'2026-04-27',mun:'منزل شاكر',ton:25,mk:0,type:'تنظيف و كنس / قلع الأعشاب الطفيلية / رفع الفضلات المنزلية',places:'محيط المعتمدية   / محيط البلدية  / المعهد الثانوي  بمنزل شاكر  / عمادة منزل شاكر / عمادة الحاج قاسم',workers:'12 عامل',equip:'آلة شحن صغيرة   /  جرار و مجرورة  / عدد 2 شاحنة ضاغطة'},
  {date:'2026-04-27',mun:'قرمدة',ton:107,mk:0,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية / رفع فضلات منزلية',places:'نهج القيروان/ شارع فلسطين / مدخل مقبرتي الرشاد والعموري / نهج الرشاد /شارع الشهداء / نهج الجمهورية /شارع 02 مارس / نهج المناضل الطاهر كمون / نهج غرة ماي /طريق قرمدة / شارع بوزيان /شارع محود كريشان / محيط جامع بلال /شارع المنجي سليم / شارع الحبيب ثامر طريق الأفران / شارع الحبيب بورقيبة طريق قرمدة',workers:'أعوان النظافة  / مقاولة التنظيف',equip:'—'},
  {date:'2026-04-27',mun:'ساقية الدائر',ton:129,mk:0,type:'رفع المصبات العشوائية / رفع النقاط السوداء / جهر الاتربة  / ازالة الاعشاب الطفيلية  / رفع فضلات ردم   / دهن حواشي الطرقات / الكنس اليدوي للفضلات / تشذيب أشجار النخيل',places:'نهج مقبرة يعيش /  مسرب الحاج حمد /  زنقة الحداد -السلطنية / شارع بوعلي / نهج نصر القرقوري / وسط الساقية / السوق الاسبوعي / شارع فرحات حشاد / من بشة إلى مركز الحطاب',workers:'',equip:'—'},
  {date:'2026-04-27',mun:'طينة',ton:77,mk:0,type:'كنس حواشي الأرصفة  /  تقليع الأعشاب الطفيلية / رفع نقاط سوداء',places:'قصاص التوتة \" تاك \" / الطريق الرئيسية  / حي المعز / مدخل طينة',workers:'أعوان البلدية',equip:'عدد 02 شاحنة قالبة  / آلة تراكتوبال  / معدات يدوية'},
  {date:'2026-04-28',mun:'صفاقس',ton:203,mk:500,type:'حملة نظافة / الكنس اليدوي / تنظيف الأرصفة / تنظيف مجاري المياه / إزالة الأعشاب الطفيلية',places:'*دائرة المدينة: من مفترق ملعب الطيب المهيري في اتجاه طريق منزل شاكر / *دائرة سيدي منصور: خلف السيربت + حي البركة + سبخة الحجام + نهج الورود + الحفارة   *دائرة حي الحبيب: سوريماكس+ سيدي عبيد + حي المنزه وطريق المحارزة',workers:'عدد 25 عون بلدية  / مقاولات تنظيف',equip:'*عدد 01 شاحنة 3 طن / *عدد 2 شاحنة خفيفة قالبة / *عدد 1 حاوية 15 م³ / *تراكتوبال / *عدد 03 شاحنات 20 طن / *تراكس  / *شاحنة 20 م³'},
  {date:'2026-04-28',mun:'العامرة',ton:80,mk:0,type:'كنس يدوي / رفع فضلات منزلية / رفع مصبات عشوائية',places:'الطريق الرئيسي المهدية / عمادة أولاد حسن / جوار مقر الجمعية التنموية بالعامرة / عمادة المساترية',workers:'أعوان البلدية',equip:'معدات خفيفة / عدد 03 شاحنات / عدد 01 bobcat / عدد 01 جرار ومجرورة'},
  {date:'2026-04-28',mun:'الشيحية',ton:74,mk:0,type:'كنس الأتربة  / إزالة الأعشاب الطفيلية / معالجة النقاط السوداء / رفع فضلات منزلية / تشذيب أشجار التصفيف',places:'شارع محمد علي  / شارع غرة جوان / شارع المنجي سليم  / شارع البيئة / شارع الحبيب العيادي',workers:'أعوان البلدية',equip:'عدد 02 شاحنة'},
  {date:'2026-04-28',mun:'النصر',ton:2.5,mk:0,type:'',places:'منطقة سيدي محمد بن عمر من عمادة النصر / منطقة الغرابة من عمادة النصر',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-28',mun:'بئر علي الشمالية',ton:20,mk:0,type:'فضلات منزلية / رش المبيد الحشري بالحاويات والاماكن المحيطة بها / قلع الأعشاب الطفيلية  / رفع فضلات الزبيرة  / تنظيف الاتربة من حواشي الطريق',places:'حي الناظور  / أولاد عمارة / طريق الرقاب معهد ابن أبي الضياف',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-28',mun:'جبنيانة',ton:39,mk:0,type:'رفع الفواضل المختلفة  / تنظيف وتسريح مجاري المياه',places:'حي المحاجبة / الحديقة / السوق اليومي',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-28',mun:'قرمدة',ton:97,mk:0,type:'معالجة نقاط سوداء / كنس الأتربة / إزالة الأعشاب الطفيلية / رفع فضلات منزلية',places:'طريق الأفران / شارع الحبيب ثامر / شارع الشهداء /  نهج طارق إبن زياد /نهج إمحمد الجراية / تقسيم بن جماعة /مقبرة سيدي الطيبي / شارع فرحات حشاد /نهج علي الزواوي / زنقة المزغني /نهج القاضي عمر بن جماعة /شارع إبن سيناء / زنقة الجموسي/ شارع بوزيان  / شارع أبو القاسم الشابي/ شارع محمد الجمل /شارع الطبلبي طريق قرمدة / شارع المنجي سليم / شارع فلسطين /مدخل مقبرتي الرشاد والعموري / نهج الرشاد /شارع الشهداء /شارع 02 مارس',workers:'',equip:'—'},
  {date:'2026-04-28',mun:'طينة',ton:81,mk:800,type:'كنس حواشي الأرصفة  /  تقليع الأعشاب الطفيلية / رفع نقاط سوداء',places:'حي طينة / قصاص التوتة \" تاك\"  / حي بنسعيدة',workers:'أعوان البلدية',equip:'عدد 02 شاحنة قالبة  / آلة تراكتوبال  / معدات يداوية'},
  // ── 29 أفريل 2026 ──
  {date:'2026-04-29',mun:'المحرس',ton:324,mk:1000,type:'رفع فضلات منزلية / رفع فضلات مختلفة / كنس الطرقات',places:'*طريق الشاطئ القديم نقطة / *المنطقة البلدية المعنية بالنظافة اليومية بطريقة باب باب / *شارع الحبيب بورقيبة الكورنيش / *نهج الأغالبة / *شاطئ الشفار القديم / *منطقة نقطة وبوعكازين',workers:'أعوان مصلحة النظافة / المجتمع المدني / وزارة البيئة عن طريق المقاولات',equip:'—'},
  {date:'2026-04-29',mun:'العامرة',ton:90,mk:0,type:'رفع فضلات منزلية / كنس يدوي',places:'الطريق الرئيسي المهدية / منطقة المهارة من عمادة السلام / عمادة المساترية',workers:'أعوان البلدية',equip:'معدات خفيفة / عدد 02 شاحنات / عدد 01 bobcat / عدد 01 جرار ومجرورة'},
  {date:'2026-04-29',mun:'الشيحية',ton:84,mk:0,type:'جمع ورفع فضلات منزلية / معالجة نقاط سوداء / كنس الطرقات',places:'شارع علي البلهوان / شارع أبوالقاسم الشابي / شارع المنجي سليم / شارع البيئة / شارع قرطاج / شارع الطبلبي / شارع الزهور',workers:'أعوان البلدية',equip:'عدد 02 شاحنة'},
  {date:'2026-04-29',mun:'العين',ton:100,mk:0,type:'رفع المصبات العشوائية / تعهد الطرقات / كنس الطرقات / رفع الفضلات المختلفة / تنظيف حواشي الطرقات',places:'شارع البيئة',workers:'أعوان البلدية / مقاولة تنظيف',equip:'—'},
  {date:'2026-04-29',mun:'النصر',ton:11,mk:0,type:'رفع فضلات منزلية / رفع نقاط سوداء',places:'منطقة الغرابة من عمادة النصر',workers:'أعوان البلدية',equip:'جرار / شاحنة'},
  {date:'2026-04-29',mun:'بئر علي الشمالية',ton:30,mk:0,type:'رفع فضلات الزبيرة / تنظيف حواشي الطريق / رفع أكداس رمل وفضلات بناء / رفع فضلات منزلية',places:'مركز اللطائفة / المستشفى المحلي / الطريق الوطنية 14 / حي العرارمة',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-29',mun:'حزق اللوزة',ton:10,mk:0,type:'جمع ورفع فضلات منزلية',places:'المنطقة البلدية',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-29',mun:'عقارب',ton:35,mk:0,type:'ازالة مصبات عشوائية / كنس يدوي',places:'*الطريق الوطنية رقم 14 على مستوى مركز الصغار / *سوق الخضر والسوق الأسبوعية / *شوارع المدينة أمام المؤسسات الإدارية / *شارع الحبيب بورقيبة / *شارع فرحات حشاد / *شارع الهادي شاكر / *شارع المغرب العربي / *شارع الطيب المهيري',workers:'عدد 05 عملة البلدية / عدد 08 عملة مقاول الكنس',equip:'عدد 01 شاحنة حمولة 7 طن / عدد 1 شاحنة حمولة 4 طن / bobcat'},
  {date:'2026-04-29',mun:'قرمدة',ton:103,mk:0,type:'رفع نقاط سوداء / رفع فضلات منزلية',places:'شارع الحبيب ثامر طريق الأفران / شارع الحبيب بورقيبة طريق قرمدة / شارع بوزيان / شارع الشهداء / شارع 02 مارس / شارع المنجي سليم / نهج مصطفى الفقي / شارع محمود كريشان / نهج علي بن جماعة / نهج البلسم',workers:'أعوان البلدية / مقاول تنظيف',equip:'—'},
  {date:'2026-04-29',mun:'ساقية الدائر',ton:147,mk:0,type:'رفع المصبات العشوائية / رفع النقاط السوداء',places:'الوسيط / حي الغروبي / شارع فرحات حشاد / نهج ابن شرف / زنقة دكان الصافي / مدخل مخبزة الرباعي / من بشة الي مركز الحطاب / المستودع البلدي / وسط الساقية / المحيط الخارجي بالمدرسة الاعدادية ساقية الدائر',workers:'أعوان البلدية',equip:'—'},
  // ── 30 أفريل 2026 ──
  {date:'2026-04-30',mun:'صفاقس',ton:80,mk:600,type:'جمع ورفع فضلات منزلية / كنس / تدخلات أخرى',places:'طريق منزل شاكر / دائرة مركز شاكر : طريق منزل شاكر والقاصة بين شاكر والمطار / وراء مركب علياء / زنقة الصيدلية / أمام جامع الجموسي / مدخل زنقة البرنوص / دائرة حي الحبيب : طريق المحارزة بين المعاهد / زنقة 4 اتجاهات / زنقة بورقعة',workers:'أعوان البلدية / مقاولات تنظيف',equip:'—'},
  {date:'2026-04-30',mun:'العامرة',ton:90,mk:0,type:'جمع ورفع فضلات منزلية / معالجة نقاط سوداء / كنس',places:'الطريق الرئيسي المهدية / منطقة المهارة من عمادة السلام / عمادة المساترية',workers:'أعوان البلدية',equip:'معدات خفيفة / عدد 02 شاحنات / عدد 01 bobcat / عدد 01 جرار ومجرورة'},
  {date:'2026-04-30',mun:'الشيحية',ton:90,mk:0,type:'جمع ورفع فضلات منزلية / معالجة نقاط سوداء / كنس',places:'طريق تنيور من كلم 9 إلى كلم 10 / شارع افريقيا / شارع المنارة / شارع البيئة / شارع الحبيب بورقيبة / شارع قرطاج / شارع الطبلبي',workers:'أعوان البلدية',equip:'عدد 02 شاحنة'},
  {date:'2026-04-30',mun:'النصر',ton:2,mk:0,type:'جمع ورفع فضلات منزلية',places:'منطقة الغرابة عمادة النصر / منطقة الاغوام والشلابنة والشعايرية الفجارة والطهاهرة من عمادة دخان / منطقة سيدي محمد بن عمر من عمادة النصر',workers:'أعوان البلدية',equip:'جرار / شاحنة'},
  {date:'2026-04-30',mun:'بئر علي الشمالية',ton:37,mk:0,type:'جمع ورفع فضلات منزلية / جمع ورفع فضلات مختلفة',places:'حي الناظور / معهد ابن ابي ضياف / حي أولاد عمارة',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-30',mun:'جبنيانة',ton:125,mk:0,type:'رفع الفواضل المختلفة',places:'طريق الحنشة / شارع الحبيب بورقيبة',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-30',mun:'حزق اللوزة',ton:10,mk:0,type:'جمع ورفع فضلات منزلية',places:'المنطقة البلدية',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-30',mun:'عقارب',ton:42,mk:1200,type:'ازالة مصبات عشوائية / رفع فضلات مختلفة / كنس',places:'سوق الدواب سابقا / طريق المحروقة / شارع الحبيب ثامر / المنتزه البلدي / وسط المدينة / السوق الأسبوعية',workers:'عدد 07 عملة البلدية / عدد 10 عملة مقاول الكنس',equip:'عدد 01 شاحنة حمولة 7 طن / جرار / عدد 1 شاحنة حمولة 4 طن / bobcat'},
  {date:'2026-04-30',mun:'قرمدة',ton:110,mk:0,type:'رفع نقاط سوداء / رفع فضلات منزلية',places:'شارع الحبيب ثامر طريق الأفران / شارع الحبيب بورقيبة طريق قرمدة / شارع بوزيان / شارع الشهداء / شارع 02 مارس / شارع المنجي سليم / شارع محمود كريشان / تقسيم قرمدة الجديدة / شارع خالد إبن الوليد / شارع الهادي شاكر / شارع فرحات حشاد / نهج علي الزواوي / زنقة المزغني / شارع ابن سيناء / نهج القاضي عمر بن جماعة / نهج أبو القاسم الشابي',workers:'أعوان البلدية / مقاولة تنظيف',equip:'—'},
  {date:'2026-04-30',mun:'ساقية الدائر',ton:101,mk:0,type:'ازالة مصبات عشوائية / رفع فضلات مختلفة / كنس',places:'زنقة بشة / زنقة بن عطوش / نهج أبو القاسم الشابي / نهج الامام سحنون / من بشة الي مركز الحطاب / المستودع البلدي / وسط الساقية / شارع فرحات حشاد',workers:'أعوان البلدية',equip:'—'},
  {date:'2026-04-30',mun:'طينة',ton:42,mk:800,type:'ازالة مصبات عشوائية / رفع فضلات مختلفة / كنس',places:'الطريق الرئيسية / طريق المنطقة الصناعية',workers:'أعوان البلدية',equip:'عدد 01 تراكتوبال / عدد 02 شاحنة 7 م³ / معدات يدوية'},
  // ── 02 ماي 2026 ──
  {date:'2026-05-02',mun:'صفاقس',ton:9,mk:1320,type:'حملة نظافة مشتركة مع بلدية العين',places:'طريق المطار / دائرة حي الحبيب',workers:'أعوان البلدية / أعوان بلدية العين',equip:'—'},
  {date:'2026-05-02',mun:'الشيحية',ton:90,mk:0,type:'جمع ورفع فضلات منزلية / معالجة نقاط سوداء / كنس',places:'شارع البيئة / شارع الحبيب بورقيبة / شارع قرطاج / شارع الطبلبي',workers:'أعوان البلدية',equip:'شاحنة'},
  {date:'2026-05-02',mun:'العين',ton:60,mk:0,type:'جمع ورفع فضلات منزلية / معالجة نقاط سوداء / كنس',places:'طريق منزل شاكر الرئيسي / القاصة رقم 4 / المنطقة الصناعية',workers:'أعوان البلدية / أعوان بلدية صفاقس',equip:'—'},
  {date:'2026-05-02',mun:'النصر',ton:4,mk:0,type:'جمع ورفع فضلات منزلية',places:'منطقة الغرابة عمادة النصر / الطريق الرئيسي بعمادة بئر الشعبة',workers:'أعوان البلدية',equip:'شاحنة'},
  {date:'2026-05-02',mun:'ساقية الدائر',ton:171,mk:0,type:'جمع ورفع فضلات منزلية / معالجة نقاط سوداء / كنس / تدخلات أخرى',places:'نهج النور / التقسيم الشعري / نهج الياسمين / مسلك مقبرة يعيش / شارع الزيت / حي النور / وسط الساقية / الطريق الرئيسي مستوي بشة / شارع فرحات حشاد / من بشة الى مركز الحطاب',workers:'أعوان البلدية',equip:'—'},
];

/* ═══════════════════════════════════════════
   1. CONSTANTES & CONFIG
═══════════════════════════════════════════ */
const COLORS = [
  '#0b2545','#134e4a','#059669','#dc2626','#1d4ed8',
  '#7c3aed','#b45309','#0891b2','#be185d','#065f46',
  '#1e40af','#047857','#9333ea','#c2410c','#0f766e'
];

// Couleurs par bâtiment / municipalité (dégradés cohérents avec le design)
const MUN_COLORS = [
  ['#0b2545','#1e3a5f'], ['#134e4a','#0f766e'], ['#059669','#047857'],
  ['#1d4ed8','#1e40af'], ['#7c3aed','#6d28d9'], ['#b45309','#92400e'],
  ['#0891b2','#0e7490'], ['#be185d','#9d174d'], ['#dc2626','#b91c1c'],
  ['#065f46','#064e3b'], ['#1e40af','#1e3a8a'], ['#047857','#065f46'],
  ['#9333ea','#7e22ce'], ['#c2410c','#9a3412'], ['#0f766e','#115e59'],
  ['#374151','#1f2937'], ['#6d28d9','#5b21b6'], ['#0369a1','#075985'],
  ['#92400e','#78350f'], ['#166534','#14532d'], ['#1e3a5f','#0b2545'],
  ['#7f1d1d','#991b1b'], ['#312e81','#3730a3']
];

const MUN_LOGOS = {
  'المحرس': 'data:image/webp;base64,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PC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'النصر': 'data:image/webp;base64,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MDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6dGlmZj0naHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8nPgogIDx0aWZmOkJpdHNQZXJTYW1wbGU+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6Qml0c1BlclNhbXBsZT4KICA8dGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+MjwvcmRmOmxpPgogICAgPHJkZjpsaT4yPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6WUNiQ3JTdWJTYW1wbGluZz4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+AA==',
  'بئر علي بن خليفة': 'data:image/webp;base64,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LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6Qml0c1BlclNhbXBsZT4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjg8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvdGlmZjpCaXRzUGVyU2FtcGxlPgogIDx0aWZmOllDYkNyU3ViU2FtcGxpbmc+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaT4yPC9yZGY6bGk+CiAgICA8cmRmOmxpPjI8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvdGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9J3cnPz4A',
  'بئر علي الشمالية': 'data:image/webp;base64,UklGRkQZAABXRUJQVlA4WAoAAAAMAAAAywAAvwAAVlA4ILIMAAAQNwCdASrMAMAAPlEokkYjoqGhI7Y5KHAKCU3cLiU3P/HeZZy/0yef/HfsK5jOqvJt5e/5P3VfNv+o/6f2O/l//qe4L+tv4ve1V6kP26/ED4Af0T+5/9b/Oe7D/tP1w9x39i/rfsGf1P/PemF7EP9r/4nsAfs/6Zf7jfCb/Xf9j+2/tG//Wta85vt/PEyf9d39d6E/Uf936+v4rvn4BfszdYwBbqXcmceb5v7BP6Z9FfSo9Tej2mtOS84Ml5wZLzgyXnBh+i6CtX8PP+hrZxK4HdGiaiXElg5NgQXmyOKuz2cGVv+VndDJX3XWfmuoezzfz/UkWexC84N1reRzQPki4L7/uvg6s0Yt7NGZoFwPDv0xKQkvOHi3LfsLnY+rA//RKRy41yVtrO3RzELhErsEXx19dZwWE64Rvlqx+mJkoCHyyztRGu5RNxTssk2gyp2M5PMknlLP7e+gtKiVwcqcBJpXyz7uV9bfTTblQ/N6lmxvkTGO27FXGKE2UtSI8hdO71ZQ11T+NdaK39P5/5XFA9N/totVYpZrRCxD3VqxRycDa4N11W1eZytXel+LIHaFjScDa4kVgZ8GS84Ml5wYIAD+/6ywACR5jzV7W93tLAAJyKjjElfVTMqGoaqrAK9tMuTCD/fPgpdJmRKzck8QPGMBDI4pP3bHLrn9BIuxZhhLqADFDSN5s+B7EPM6I1gW7hA+PuhmN6EkxVfCSA8ho7QMJT4bCeoavF1yHysyieMZUH+bGIrJAEchAH5uNwyQA3BwKml3wRX6BePBIGIK8UcQgAEHH63/eOLdVi1lJKlh/7tWSzf7bFfDR+OkQnCRlVzCFWCkUIHFtqBLq5DttDn7Z/DKt7H/IH6uvbT7quY7jNsvh+mvuGONWQjcxyKywNqHOplhgkrGV6VVISJvJqdqoGnptjdWFqNHGchHUuFKdNP4V+pYXXT3zlGrkhQMy68l7+1iMFDceUeLI9A5ue+ei+nb81489iHWUS1ju5DAsNVmOr7rAor7lCga3S+jX5oRfK0G28tr9YAUmiarv5PJuxS38VZ385PCYwbT7KF1sEMOQPr+vGlL77k9WHeOhKywItYQzXCwdo1NdOLjU/fb9gY0busIr9/RoSrWyTPBjhnr06UKcTx57gtHqkuk+3fLP+2fEaGL50Y3DmaZmY5uZpwV3AeiEbM8+dOCQn/1PYYRy14enDvkzAFBziCWsRr/yn3q9jXBdooN9th+x+nnjaJAYAOYR6eC4SYL9+h/orKXxhTaNnn285QpJDGlyD6U1IkpuZR3+vHzkRRanI4bOTzMQ+GdxFCqBBCGwm0gMcG+r16CDI5pUqEihnJacFRRJIxd7vZd8SwNukNJbRMDQrs7Ri1NOtcdjwRZY079FAaFvxhuMSVfaq13fbI4nQEHWE+eBkOb0DVzA7hrb3fCpWZ60cagJiIW3Fui7+h+RaBOMRGqa6XwfiDScNUmNjIOuxtBeSqYCD+Pagp53KZUnvrhv1lcozh6p1lMLU8sde9Q4E+s+3i4HFLswHJuTWg2Iu1t/2XPDYdi9ZA8Gf4RoPZAOFjAglURwTcJmn5kRV641wRjuubzcf0nFzhySMEiEpkESBXMl8A6osP/iUV+zTgVanZDE4c6LpUbErUQ5LmZocIHgTuMjUiZrKQ/8aD9/ji2+iu1UGmtGccMAzagTT9+JTU7jgSa7YkNKwyH+iB6jXt0OnTHkJg2H9wQpHU1+uo1qGvlYs2JfylkUqxk35rGg70CNk3NDUV1aKCYoIIqafJoJfA5Hg3RIVcQ4j9v2HiOguhrDpFkRC7r5Hq5sXs8Tvb99VCmU/d2kXUwXO0JxD1W1bQt80Mk6cV0/nxYaEKyJIntvFQQKOkFSXHurIPxxPnC4SLIYHXmtY6m7s6DiHAcM+X78IoKRhbe6LF6sHNAgKIrLCTxC3t2qAcHGmN39ZkuWY03K5MNItOvv30eHvBLuhT8PQvMf6tCB0ckMDda9fBz00CRZjyC0K5Yr+ZkBBPsYWblwJPidsLVD5v6d090+afHg2fPnsTm4G77CuDKkYje0YVyUu1zx0NnF9dFF84IrEiEQ0Zu4lQlCi1htfz3NsiJpdRq2BYk/vZ+ju6425diZf3Z78OSFOgq25Tfb2xk9C1p32cW78V2hBb/ww6YEqCjlUMjILEMhFGnSHxFAM/5+yb/aM3ggRTP1yRdPlHRUtNF//1RkjE7OZBK1e0+sFLbHNm4RHucXcbJtluAW1qmWo2qH63jXZ/nm5bqnnipFZtwt2eA+63MK8bBh6KDahmlHMnGnAQZQ2cS8PbW+M1u0tr3dfv+OtAuFXlUt1Bn1wYQzkPNGV0UDUu5/14pva/ahZIJ41wozvd0U7B/C4ExYblf6iid6DMrygmidZFuBt3mGvf32BmU6fINKPNWkkOZ+BUhxsW2tX9Fd3ZlDWJZSaaDsajbAkYSRdyAGvILjNJ+nstt4BsSFWN3t9+nB/J1cQQoaNVfTksDF5QLC/T9yMsjB2fi64CVY0UCfv+lMzkFnXbrQEJWkUnaMcHhQspQ4wbr5MMu2rWrzK0nQv490u7SR6cABtwRfrR3ahbJCztfHZy+fVwjhgoPlUQNXrKFrK7oUwIh3R/a7Rrv1YC7rLihNyUvb94N7ZCFTXFR9Ij+nhG42ceAq28lrbgbghRnILDuqGl1Xhu8fkEE/vDcoJumlY9kD8ZCvdMHzGDkHT9WDRMqUQPsSr7Q1GykmGgbbhgwQQTJy5icKCAZV3TQF3EmcCHRAD8ZkyHY9g1QlO3aGG+/JX8b/PLMKzfigTS091sUVwzmbDDE4E9g13fRMcM2wWLh9TVMDvqTHQ5puE3nazWFg4kDWiujY57d02BdAYB3roYApM4/TFftTyOdNUBBwTXepQV/T3HUl0R8k3s+W7lJ+wxy0Pi9AfvfiCfjyO2m8MppFepvjyrQmtr4TgN+eVG/hjjP1nzuEWZx5c9oCq4s7uzsuxnEXlVeL5JFE6sbqGfEiBi5ls0OobV/dTYE1nuVfRTZdywf3X33MUiBono9fUvvDrYAXJ6+6C9MpfIY5AWuUVagDVJT/yJT/69jwwsOvE/s+G0KktA4eOpYOL2w8mYHWkipN8ZY5nsKCCalBfljXckXAvr1eCnG/Z5WiB7ZVFP/R1sjAenrXFArDJvFLb6j++o1WnHYo98BAd9PN8K8Nz7cdXhwXw1zGh5Mdnuf3b6+Iiar47LkzIy1JtP1N5Fm/biXoTrzqO9zeZxrTHKYuvtMSrW/ZuWgqEyYB/hp1/iZZ5XtvNpRq0EwNqGI1wvoPqkj019Tqfzq0wdVWAkkeqheJYWJHbn4CKnKOStCC2lWtI/xmc7RVDHNuD2FIXgjbhmR8K0DIbJblS59JnpW1Tq1VeuoPoozYq+xMSUlEj02xOi01Yz/MOqWlmwxVd4hCFCWOdq5JAmgEC+d+r3rjjAo3YFz+XT8xG3hfQUDJy2iuLCzd5HMLvgMr0JtPsYp4WiOdRQgp4aMqe58R9E8a8lAZ75s43KPkZl1yLAfwkLnWHNeulJIYehaoUQUiiCfkDXiYelQydIucHucv/ylaSP3bBwnZodgcXIoIYcmdxQ849QiPRNhN1cceLymoM1BA2+vdM4iKAUlfsckdikYvmZLfaDC/AH2lbJHL+OZ2W9+3XpRwrYe6MLWE9nqkXL2cqj+iSyWziy7v58JwuHHPDCFYd1ukomBNoEjj8kcRffzWU+w28Yjti/nUzGwkUKHiernOYtDL95wyFZ8nTdu3H4/ib0zH2KnIQyCWc7PMK5ko+9zTqKvgmyB3U61w8B6OEjsSnUPvM+BtWNnkuEnOW0wxnOjGB/J0yD0A6h20bZJiNOPpiNxZUtYE8lhGvu2JIhcn6NFRdtOWDVfqLL+0K8bsitcHvCeSjK6iGnA4Si2CFf6M25ljTIRty/Z+R9kLZxaJjKfmvR7l1GTf7Zg+HPR0/U/T4w7hIirg/ydk5QoeXMBLX+PFCKzp9s9N6EZOXChtnhQ/LPiYR5UgWtHOhLNDfPVGRZ7q4mhLs/I3HzCWAqHyV3ApvInrR8vlwpeHzm0sEsP808iYXRgdra1uQA59ejMjWjAb8yDwfqyDh0Uy6MWAuAe9FaxUmReTDBnKvQdufx9urGTqiYjn5g8S2ruDr7Q77bFZuJLyxaHbRIjbHLAehh1LHMJLF1HetkD7hLB8VYTc8pner7FsZ4S4O2zEfnr/ZZqjv0iTyMsjY1RRdtiqpCAVeHhxpPEh0QTFkKs2BO67hs5XyLxpTvUHdGRqgCOwm46Kt/UjR4K3riqV9TqBSsTrsFnAAAAAAAARVhJRsIAAABFeGlmAABJSSoAEAAAAEV4aWZNZXRhBgASAQMAAQAAAAEAAAAaAQUAAQAAAF4AAAAbAQUAAQAAAGYAAAAoAQMAAQAAAAEAAAATAgMAAQAAAAEAAABphwQAAQAAAG4AAAAAAAAAAQAAAAEAAAABAAAAAQAAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAADMAAAAA6AEAAEAAADAAAAAAAAAAFhNUCChCwAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEyLjY1Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnRpZmY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvJz4KICA8dGlmZjpCaXRzUGVyU2FtcGxlPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOkJpdHNQZXJTYW1wbGU+CiAgPHRpZmY6WUNiQ3JTdWJTYW1wbGluZz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjE8L3JkZjpsaT4KICAgIDxyZGY6bGk+MTwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'حزق اللوزة': 'data:image/webp;base64,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LmNvbS90aWZmLzEuMC8nPgogIDx0aWZmOkJpdHNQZXJTYW1wbGU+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6Qml0c1BlclNhbXBsZT4KICA8dGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+MTwvcmRmOmxpPgogICAgPHJkZjpsaT4xPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6WUNiQ3JTdWJTYW1wbGluZz4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+AA==',
  'ساقية الدائر': 'data:image/webp;base64,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PgogIDx0aWZmOllDYkNyU3ViU2FtcGxpbmc+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaT4yPC9yZGY6bGk+CiAgICA8cmRmOmxpPjI8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvdGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9J3cnPz4A',
  'ساقية الزيت': 'data:image/webp;base64,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U3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJyB4OnhtcHRrPSdJbWFnZTo6RXhpZlRvb2wgMTIuNjUnPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6dGlmZj0naHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8nPgogIDx0aWZmOkJpdHNQZXJTYW1wbGU+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6Qml0c1BlclNhbXBsZT4KICA8dGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+MjwvcmRmOmxpPgogICAgPHJkZjpsaT4yPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6WUNiQ3JTdWJTYW1wbGluZz4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+AA==',
  'صفاقس': 'data:image/webp;base64,UklGRtIwAABXRUJQVlA4WAoAAAAMAAAAywAAvwAAVlA4IEAkAADwbQCdASrMAMAAPlEgjkQjoiGW7C2cOAUEtQ+ADyqjYANL/AX5f1z2Bel/lr7G1cftf4c/s/7ffLDqk6f8sLyj9V/2v9g/dz/Y/OL/Leo/87/7T+4/vp9AP6l/9D+0euJ6hf21/ID4Bf1T+/fs37s/+h/7v+b9zX9o/zP4wfIB/Vf8H/6fbC/7vsN/4T/u+wb/SP97///XO/cv4Uv61/wP3B+Bz+ef5H/t/n/i4Pov2j8HfHv5z/b/2g87XwddO+Yn8v+8f5f+5fuh/fPoZ/G/8vwf+I3+d6hH5J/OP79+Yv9+4a+yHoC+2H0z/TfnT/nfhm+4/6Xod9i/+N9t32B/zz+uf7319/7Hhh+r+wH/U/8D/5/777uv9z/7f8/6M/qH/zf574GP57/b/+B/ffyk+djzxvak/YVtL19/ydk7l9gW6XWpKO/26qxm+OfnTIxJqWPsqqAhxFq5h1RlUZJtV33zyZ2e6m0yIZZO00pFBbu9bOjafq2l1ynTCcV4GZRwtlrU9rXWAjf+tjvZ2C8X44friUSBsqR2KRT/hMy536DP1AVj1RDO59B+uC4nT9Ys3iJqsKph53db/Thw0h/RJ0FxiSUZis1oYmRspDWgUDrKGEDVbO57BahnlcFhuqXxybaSEXETjhdQlsz+VGoi4AT7flp5c5y8c5LtpRwHW/jRKeOz5Qe65EmcYY0Ge4puWtZYtcyu8pbMX7jf3QP/3tKgLzU2eWqMAvnwq6KymVYddK7mG/iKTYu/PriH0sb7iiP7stB+IrGF8o5ZytVrvYNdcy/6iZJXVduNOdsYeuMn4llA6iTNo35CIE7BkYHUKb3lWaYEzi/QmjO96Cap+s1DMbMzbjPRQuLQaeUfPHUklrDBZAFyYBzVWXUwHL+BLFIHLdONbnj87zHq30XvsFnQCSbrUvNF0HkBdbsrT//lM1Ah7f8gmX5zkjzC/XI3HfiPNMNdRg4+6897LXE2+ihlKlbb3hiesBKg5Qc/cq8brhJP+SUKURjs+UZWzdA822kAe4qHLGivdnIakD+9wcQbMVhzudWqgzOKYU2aEI/XuhcFRyzKdx8ATzH1xkcQYfFMgIe93sz5p+jf1FGf4HupSJyqwDL5WNX68VypLrqLab+bMIHSQy4QBM2sO0y3yEI2D/SvevI6VpUn/jaHR/5EbVJDlAAA/v74aNDQ01EMaVaN2G5q2qvmK4TrR3DjhQZmo1/EtdioJJsEKYCZ+Su+F1SPDYlBuEa9wXtgZdoU65tl5kUXtTGyjILraDh4K12XpH8LDMJ+S0U2rqDyNIzTYrTEqMLEeLvsBW0Byd8yvGtA0GZK8nCOA0hQ1fFfMTJSyT3Od7Ps0rZ3gxyHyaUeMAAOz3T5mLAjHNuXJf3paADDCF27rCfk6unhTqbKjtWsjSV8edSRZU8FOYIBAjah60bTcvVR+qhFDnBHzHhakBymWBZ6xq28a7GBj/roJs7H0ydmp6X76wbpXK4K9DCz24acYMpmn8KUFxxXoE0pfyBW52d+P/wzZtxAYXTcHQQjX6c0NiYsMAUjvVQkJ8SFXBgkYAyEXqWDDshDYEEx8CCrQRwxD32tVdNgnGZhFY9H7o1H4UMHxdE3xf1P9qdzdN++IqJmpMZ3r5GweKAfnLVE5+/FVFKnoHg9XaVGd97XH/0ozAT7LMxbvkQy+tB23yXiybVGp+gp+3WrfsjlDmoxgjcgax3lRkuIy1iV7AXhzfriMfsukY71QRbvdYsNBe0AX7KASM2TazgYCrLEo54F3Kg1kxeTzbHh9tqaZkUzL+aAHbNzklje/Zrq4yLzM/KlXJSpuX7uAOGY7wjFUvPCSc0DOOuuQzHQCkV90mzQPaR5yn5MpAdG34nTAj/wA3ZNZS78yr6jMLEYwcSBVmpD4ZUKY0z6QE+u6CnqWN1N9cZPkwbEUM4X7X5TkW5KW+g4e/nNf/ymFnTcLfP22cqtnUKB5amlOOr/Jd8EnKgxqS/9Buyt/B3RVlpXgIoyf6gfMNaLf1M5Oms3nyFJBR0Kmqn+t+QysL0aEyp6nAVJpwSU7Yl3VDYZGnwPkf88+sNZvIMGBU6geLoZngfyQrvh391yaFx2F5XOvHHQ3PTc1rOu0RrsDgygZqJDV2z2B1pPF7YuyWxDLV/s/Jd0CbaFfmRa0xMP2AO/T3N3zSv/KAjy5z+gTPR5axkgoTizyHR0fPV6wBXAwDDPEHA5T/f7nlcdSlawFjBIZJbQcYSSFCxAuuo2eRZm8EBoBwCiKV7ft/eSaKUA1IvWwg1MYvzaybzKvLrUAdXjTNK9z0DLVZQ2IuAQX7xZgZgUv41rUyFw4/8ybdC6JwpObtpg15dc+lWTA5LRgJGzvSev/E4VGvGenjzhzZmxKW+9dNaK5IPnacaCdHsCpZ9a781Oud6h/DgNMSnPee03nd3NvwApGKnzT3sz7Np+hKyqUGsTn0tCfe++1KyTQSHZrhgsfz9BNyLc1R0jgT25vhtQD1OyOcnqr2maV6TVITF5LIUFiVB65v4I80Ip6f/BXZt9FRRZdSNgh4LIJUeSUV71cKof2zJb0xSdC/ICAhYMubLU0Guxvyc+NHJnTbCOikifosplM+RDzS1fes/41eedPC17WCm51iQX3cCwG6nShN5NLPqGtU11d/YS48Assmx1RWsjovFmTinNGDiGS3ji0F7mJkuNYfj5Pd5br3yEBbD2oJ4pzNmVmH8VpMH4VrKhrJcMjjfA3cTW+LMBHpV/0H3vtUWRFrhlPAe+rctSXMPK/4lJ5byk7RBAvVWkkRT4wIv8IXAMySeA5cMyKomAUHtkCoVqDqNHtCNsIW/8TR+9CK3rfRU3mdqdaeTToeuQaqHBRxjxDjPBL7GFVepA731Qz7+aKk8nKUyWdAf+0S+4JlOM5cpE1yd+M7XSRistAOLximEbw1Y8R4V8pcX2ZhzGh7iO0+v2PWvLOtRmwQa/gfQ+HX9AnXXvske6rGnz2DWdRmP/rkFcklPyvMMDl9NBqWv5LJPCjTjy21HC+qAc2Mdo6AM37eKZT9v+J7bqYDKTbYDJY/W+ofdtWo0hprgnVcObpAuREvQMSHCGH/qOgVMjjP2EUVvIm6xHfIZDkVLppZPqzzrLCmI5pXDZAfIQWyPKBQbN17boRQ5xTKP4j9pVycoKMPrZ4CEglNDs7NvYLxh/0vbX/THVJtzAxs3GlmSIof47cbcSTn87arLCeUUgN5OTxNCDMvbzf4UxDLMEAGTKwXIcEBo9PtSVyZYrjqNqtDxMdimPPw7yZICg1kd0aWBmjoAN0GP73GvsBjPCtNBieWZ7ImSZApQyBf6ctA+aOp2DU65VoU2zcsr8Eu/X4ZOBjNMP41/JQmwloUnib7PSllELSxMB1vIOct8mkqq4DVaLeEu+8fyZsFGjO4io7LWE6uUC9EzAesZioETEmzAby/ETLE0LYuSCc28yhMwWfht6iPw3XImFT8o9VtDq8PlyJzQ0WLknWqhCj5LGH1E4d/25eqIyUnCBYQm8vIB524s93UJb9RYCcaV4RemzR4BEAvWM7CHwEI8C4AROlwWzfBboc+2waXvuUpkE+/fLaGQR6UzuOxSiUGgXReESfCsl/mW98aJleJVK7Y0NAXNSeUhqQUYs4iCuGrwAxqCQiLktaoTRilbPASWZLA+/VWqc08RtS6ncEsaq5VTHXpd7KBj9YR7ILxibZMvIsua5ca+uPfoC4dKGMPl2aGXYun7PSw8majkB58TmK6BkZRJiPk5FqQNnH5AzZ0F9CG3zvVHc4mJjQwYbyNtFFUj1S5LbtATxKkuzSapZkl6s1cBA9svdO4WBnxlohApEdZWSYWjYWuPOiF8bu8QYW4yQa7gGMTjBlHpr9e+DDDw59jStBpmltBDsnbAJAAYx3b8TOn6hTkgIWNuTFG8uJTVybEhccpFpnjZ95ugBlCAAvsjrwXIdhT7kF6NkQh3zRY4aB8XGpqq4ePv2+hPxVwB0cJAmdYUib0y9hDdc3tytITL+/dWEvRNUDpyKq6/puugL20Az86KWfIOKr5L42yPtu082HEqBamUmkDjX3l7fJU90KjYBIeMlHJtd3MjogqdXGsFU0xag35NwtlxssYw2dU0BfL7lv+BmgyFHToNcPyEyaCPTXOLkdLDJlkvw5H5HBBUWJ7klhy8DxGkdaroLbGjk2LQ7OGbzFf03h6lQCRXkywKIwbEY86Xyp0MX3oS63hFv1qLMMVxhwR8IFd41FA5PWWtTEXXJ+fsjuaCg/W/3e+COhUpRinCTegBR/DKgP7+AE2E4WHgRcESaHWIHs+ELpRO6Ljn7OQzmaOLBp6ZGfpD2xWPD6WRRoH/Y6sLai1G9ubsrTKtpa58uwq61FFygIgE+vXaQCSaVxTUJRIy0BP/t/FGba2hqBylBs2HuGSCKm+ku5IKrrEYTVOyJGCoKKiX+3s/Kpj7xYB9+zRdpTA3DIttnoLdRyjTa4ZzAXV8jrptNg+646IhCj90VzkBJcP3TmwAZZnhtPihvxIosCbp93uQPYHApBH27RKXeJFD+PDWZxusDytTI/68KWzk3P2EAFg1TgNRxKrx42lZKGEslmNExZrTFXfgMMqiO2ujviKgCJqFTXZ3aDDjtUvCg4U8KOZyVzfvZP06YHxAXGWXUSt5r9BuFhyYoXbnv7rdthNkNuxM7tNqR5zI/gLQj+42cgjKzItTIFWy1tiv7Kkmmix9npvSkdPFoWpeNmoH8TtZW+wPaV19KN7HE7Po2tzALucQZMummVsxAFiYFoiKlclHJwnjJ0bsjPtH56ObmkWccnN+qNqO2gJXNljWUD+8x8lM+DFqnFPqqnfJdpd6qH2r+hjco6UuM/rWYqciIhBdtKXvK2Nqm+KodL6nKMC9nk8u+cZE/GhkDe6DDMovt9PgwwGnUfKK08JPQ8YLxHP92Kup7wEUPkBHZSkGFMOqFxI/okGK4fG8JcQzdZT3w52s8FYCd9UsG7Aa1LyETICYoQt2GSsArUtQUuNC/nlet8SYd6dxQ5LZRvMXpjgUJB1QKsHGmLqSUzcoC6QyBqPl/dE8NzISn9+ZC8l+pv11D0a9bwxC2oDOX+htGMstN/IufhCLZYUhfQfwEEPR/4yzsSVta5VYYYOwg32l1syFuMxfhsH3jcqy653bPCiHi0hqAeVZjHwZhieBUAgcKIkSZtTbOp8M60y6GqZdM8MHc13yFZ3SbU2QInIk8XX4OO722NqAbVxCT5bA0enNbPv/VB2bHSSTRO+Sk/hDwS1yhQXYY9sjkFFqG51D2mPRKKfoyKCLHDVhKMuKp+xtDR9DoiZZChEk/7o5E+dT9jIgTm+rbySIFqfSolpHtOdezyhFcA0R5o4WAG4LC9l71BZn8OIggdpQJaDkaKmyFCSIpVsmYTO01DWj/8qu58JltKm+QBLEtieH0408eiTMtFoaEIQCiizMkN6khgcBzJw6AR1CEFDnz8hgtnk71ML7XSruZDFFommq3EWhhoFUj6zhwbtsaijoZOBTjpkAs6InYqpHoa+UhQRN7NAwPaCaDquE+rHyvqzjk8i7Wow5JuUDlUWOQhrM0kdikEedJAgIQsMEaTzVLZ0xKVOUr/nuQ4sgmvg96rXY3Suyp9ZET6VKqc9WGi4PNnpP0nFgLSxbPDEfIZHxtKBuKlLiZAZ6MlfEdo7SQFlGg4zoamAkmDkvUUR9o5WnaV2lGz/bZk4iZXFWakp6i5gmDbzP1uvtQH/h/nnsuALV5tZmPYfBh7LpSZf1Llnd45HUBT/or5oQr1Ny/weBFi0KIRpbdvjASreD7rj/neiyI5Hv+54N6/E+tDppsJ2QYZlPLnwHqAUvht9vzEkKwxYX6T7mQL2FWj7HgNo+mJpIRUvbbYp3y7FfcO4PcJlWrDTEGarOSCKjERHeV+t5gn5AQ2iKpGYSIU+Rv71NyaOrxpjQskOk2dl5/90TWuAmDofbwdi+nrsIcAwlKLjBfLhK/FGGMwhF7PtqBHtReEM5NOK0ZhUyJM3zSzlpiRuThXFKP6plcKp/8WUNEkLpzIozZNktkbWVuP5GJmD8PwQ3P1B8qyDNAiyvEwcRCB+keH57/iSoOFJ2flThMY3r1eEkA0aaglkACXKHxU1grvsiNElhgIXNKb0M9jFPavhDnHViL3dmyBgCu6oKBeIIMk512EUzVWVRMR2Pb4XgZ0Ki2VCpt68QekMeHzv2v/36y0kI/Csl4JL9EYdr09dEznGSyDS1qpyjXW65aBIIV8RYs0/XS0QswA5HGAcXhC4MYiplA8R0TtLgyZ/5PJ2AJYTVB+ZuW9P4kTHcN73hnGJ/6Royb4UMiucKJWwN23K5AisF6E7RSEPr+xF81rYyWpt1ite17hzjp/MmrLS+FoknSq3thQyzaZN8Rcz1oiv4C5dK5k6Dp+DWsCT1tA7tYI6S0YNyZYstGRprMM4Q2MAg9twjilPFXUM5h2TAe4iLzjxuWFP4taExLfnsOdLSebCLv4wqzott5khXwjI/Nf/E/OEI6GW1UR4XshvKJhA/alHoR7XnqKn1GDvFmUGzkOz6+2hiy2xX2sTIV0j9HXq+GR21BQJmoS33+DaBmoIF4XZBdlLzUuqIfvFgxRHkKSmGKH5MCjo+59UyX3YcIGpN0ErNH6AS5Pg9ylBnHwN73NT7JSI4gDd3t0PvH9pAv5X9WhGzwDQR8Wr0z02C+AXKsslna4nlWEtvmYHjKOzvWs6aeRQg/3J0WuX4CJawEDJimui21B+bs3JFx3a4/gPmBbGepHybqpsu9w8aBcXv7711CdpWl4PEO5SfZRcihJ0MY29Dt7rZmCNEMtm8i8B7Hrvh5LBSoPXXX7nmM5CD6LrTRPygVl/dB58quk0ABFbLIQf2kdBduDA/uaend+ayNvyHLfY6ERo32p0eSgrwpyONjez2vtKeJHcrZ/VJ0IgErlvqPxj9smFcfnOOi17Pff+EhKSODOLDHiQlqmr6/JspYPc7iWVAbOWwUW3jjIR/fcdy0x3QysQ+0TabZ5LskHkx6IpSFHzVsBSgn2EuVjD+sUzTerVaN3AT4K6/jRqIpjKDH0oIL5fcQfstVnTbXHHbPEyCK0td+2gYRVdTXuYKkphzOxZPrtzajxRMWCqMxvuX2tiCVhdh1IZSktuaWjOsdxWtlX/PcN7RZkHrnukhyheeG/6LKSmyxtOYkoqxAA3dxv+d19BMg5uA+snd6HDbdIJXPUprkg3khtD4hA5euIpP4XXVUNz27IqzZJVq4NDK4OYeNLprIb559ZduBs7pXRUUjhgwve1kv2DiTYlxM1BTgwBY1n3WYg8E9JkA5pDX1eSP2iLZgewjSidJRkUjWJzJBmEPDn7HbvF8eXivuoPdDPVcS0ARFJ0hfkHogSovP/Itp+8ZoAUb7S/Os65bLOdM3UidHrSXUdYSW4eupRyDsF683cKNIrvjOvDle72FhBRK5XShJMzO2AU3ISq01vxcfpZD/VfFC5MKwPXpn7wRS8pKAVMKQP/+mHQ4oKzJablXt5W1rtPAEBDZYyYwCsG11jEv0cb812zb21f9AaKYBoK1SvFMjtVId2I90Bs5rD5KshIYIVTem9UOIVW+uW4ARN2QTdUg0knl3eEesSysUW7pVBVzypqouQKO+n/6qYviiDIwECwlf+StHTNwjqMOR2INLQ6CrO/+iKrYWOR94cCPROz56qejOVdSZ9+NCWogGPBc5AvoU5tuK4qDIG2IumOViTUBCL9SzMvrL4EDelacjZLSlPcFzINahpKPO42oKCOUMBF48jFlM47VngGnRISwi8QnMNh6p3AsS4vQETRrnFsUzbn56qOKvbfkC0mk5VryP9QPnNQtoj9gn0Qn2Z+59LZAT3F4Td+1GixpT5LVspC5g9WiRo9Uo8hQaFA+TIokk9pLBcnNpuNhPA1kTBragEO6m530cnyyj0aYsmTCWTNc9I1OmZ9/u/EfbNv2wOtP76uATZPBwaTu83dTS2C5oWHH0+N1NafkEtMhMkLWCLa8qBNIeK3egUzxxtCXrY61hLLUnpkKpYraTAbHQmeI3QgwXTFvGonT1DFNCWhYHaJlN2nqnvgY/A10FdS+WhNja/Nku4/s+k87WHvP7ACx6JCkv8Sr903i14JZzesonZMsuAAPXMnGLOxy/hZDDhjWXPMVaoXH8GoG8vHxICXsA47r6338gO/FnCZCd0vQTXk25C/nN+nRHWhRtUNwSkWG0rMvdx2Ya6IZwvjAnONxWUiPxIIfEScA/nCDEhVsEy284RxWZo0A/gLdkelDirXISqoAGHlV08wpFuJKoumm6F9NKkuw5K+g03g7WhguSmdz6GeQAfb0w/z3OfhkTNhwN4VPxNeDw3BLZG5AaxFkPzogaAhCGXEthaKOjHKvybTEwANW9oNxXnHGhmcrj5/m6hg0O/WTWlK+E6Zq4OSojEgGbsufsIpJ0h0fWAruxvFyrVZW92xI2YXmZvigk2W0Etw835JIXP3BLQxMmRcPkYGwB6UeFGJGIJ00lVmavKDcCMFxtsoIyyblT/4zTVXU7lpy+MAZ/y/zgUuhSma/9/h2k3GFfMh/DPGAKATzn6lH9f03zJpVBDP+CpZZsmGGqHnTiPcpfyAidg1CYf5fPBN8mDr5U3w6BsefypYCpdwv8DKVbll+Pb9X7EXDK7iqnc2VJ1C7sQF1k1T/GNmf4xeXUiG4Wj2bsPXS4OQ6yIdKOmt4yJ97Xi+q5NUFLRlQvYbbABmV81GI56n7Im/UMt6v4zCzLNl7EdjlafdTQpJhJFOzWq4jlt5D8OK4mf1DPLP6MDG6yff6k/Wndv/XlFj881f1eLqCVv6VXqWoj/LJ9EI98eIoCodC6hVl427mn1QuRLtflWdUEonCkP2BRp8+nWFMw040uenaG8cuWuiPOFIoUczGk1u33GmDfYfijpTJ9+jlDCT3vnXJN0vojaFhO+BDqo/qmb7/QCs5lzT8ST+dgBWGzU72jRnbphuE7t4Vpp8bxJ6rf/CKUvIjNRst1VFdHBcd9srLcC8H4UrdykYU6UWNcS5QmbrXGxmjMnUjG9Yc701ZiWnVNRP/Zm0xY5iH9HIElUjyB/tvrYIHRORW1uhDZZcmyvcLKy2jDyr+Pr5vfVweEH4hesNiLrVGYx1ZIcBVQGkyVbgBB4G2Mt/nGBL3VsTklWYilQ7w8TZZv5idOiiURmOQiL8MefKHyhj55TF7D0Ji2ILKhJ8tAdZDXmzAL9WWDk1dMcbeUKc/S7afHD7zFdxOXh1yYlsn9JJzkQrHdYkim2Teu+WNuUI0gJeux0kuXn7Jre17XVPaPgEvWgOrVr0jZgbxHZ1S3k2/UbwFnDGu+e1BbFlCyQGTJrNeuPNrMI6vTaLhxv367V4r0qApr4S0oAZuSjZq4xnAt7noO8ywnjVRp/fOmludAQc3gDyKj3TSV1LUPWTe0RbZ/xEqZ7AbAdw2UBMuV96GI+BmdherisDn20pngtYL1Mq+kBLnDAUNFQL6/2VeIcqQiz77r0ppRxsG1AMEjFupGnGS769yQUrR3I05pCrf3Q4+3zidblmLZB1sR/SbURgq5MgM/A4HLdmeszSqjUB0S5Wtm69mIKUSKIlo6/uetBqdf4+t3NPFRgaVRKEJtQ88RzZRqhpxYCPr9UOWWtyQnBV6g8EU7Q9pzDnaWiKOg1k2/y4Tfz+X+E2HMOVXlJgTQCG8it8UovpgMTKpCjXa1/WgTyLdmDvkTWfyqcGtVK+yqdyX4UE/n4n2xwu1d2bZfpDcLZq+OiRq51/1Yek7NbtVTzJ37ecdVD2SSogC62B62zi3KY3sd75vTpLHhfd73lQEzV/gcKHPKZMYRrysYVXPqbWPDABeYBfypteqT356UQwSb0XojXozW3/RK3v9c/FVpaZIaN34G3douTboyP4CR6f1CcKhOAYvz9Z95PTM2CQ6/I6adGRksKxGX+Z/DDX140MxthWgaWcV31ioTcpBNkYQpgfICBl6nlWGHT5fm4tKXaWiiSHiB+sBTlS7jJ8XgiJEoD16akjBc200MkQIdXCml+K+RgHbSokDqMC1Z09BdWgC8XFu0T5/s0w6t6FFCmICBvJ2zHEp5tWMcgYfmAbk0OUJ7GCKieuG68Os3e9PtHhyJuywRtUNiNeEekzxaDHgLDreE5yBRttba9U8nRwkQXscQ1/vzu8bn4NszJ5Ic9RQmcZ7zcBWoUrC54CHBp7wJ9Z6qCTk8NSyzOmR9GkEtb9olJ5JHrOn3wC/SbEY9I0H55A6xzWrKUli4evWXNM3qhdR8lBsvsaYA5CwOio7300EU2mRQl0Mjmly79Rb52zryegG7h0LUaoRT8jJBBNAv/isjb4VtwdO9DwgIKpbyFT8egY8hQtOWaf3oSOOw90m7AuSkbchDbyO4aPAQJ/t7yGSaK0UWqwC0nLUABPZ82Kx34lC7OfTv6FJYQtoHSBqVEzxh9NE1gWNsJfBx0hUjZxwC5VF5gIPUc1tjPep0HhNgRlvsPNBowl2QRQtAwNAxWL4MCedrj7glfO8MgPO+YQkvf83SAAlRuMyUBq+oAI4E/Th44v2HxmzAxnO4KD3e5SlnfUtbTT3i8BReJEFjNpyaxvuV8AUpTMFHNWPjZx8MB86F8ThNwVgjTWweA2e+zBOp14LdWjbrxfIvn0Lm0fmZu6LeUP+MuDe6n4eIYzEvp0mMszbxDdXkZX/tDAHXh4dtRz6FIux1qhnmy7jNfJzjGF/C5SKAuv7jpmpYqQJPGmjZRc6PaBLSMtixhNqoatTDp7deci0m9W5C7AKBVLCpn1oqdyohKaJ6IDyn+Nptyw7QMI/DC95En1srzMFLekXZZyWEDzP8098T9USfK/O/TX20nAdtzS4qeGgcIK609CqOnzHQy2T62TUQzBbvltBYt9TJ20ZB6HMWzR/0iWlN8Q+KgCNmFIWAOwr4rbs+kHAs4luPQFqFfzCDyr/ZT2m9XJoSRNV/WTvl+zpEThP3IPPaohcClySrxm6nBvevSdTfQKgT5G/AsGCA9uQUa3kiCYlHz98JvpzFrHWVIkWv+Q7B2hcq4Uub3/2oR7Tp2/WvENO+XO0w1VzlxGFDrjY+T3loq5lxECa2tiWZD6TgR4ju2C9EjwC46VIpmIdsW032o2PN5ziPqNMRctZ+pe0a/LV4gABQ4N2b3S3dOP8V5wqPCv6wuceHZc4MOfkpDBPOPfrqexpiCifitUvz6+340tuhdp5mwQWVoGuiZUAwHFbglyW2SdQhlaD9mW9R+Pn/X9qxLugtV9i/wbL18CnteoFY/pkYtdXKKi/tThvJy+mwB/72jt2vNhaDWFkhAI0nrpHOwG7T3vYhwJ/igHxJe1rCfuL0E5Z366DBA30OnCP2YQL/2sTZnCHd5J9gPymv97Kx84GKJd9m5uwtRTcziDhLuUkMlomxl+te5oMkWCA8k6Hh8ACe/jEB0QlWNxwv5f8eFw04+/J8G5qR9/J5CqnnDqqb/wPOz5kRq9U82tB9OVnRGz2fcdYAZBtp9xqatc/t3YRFEkdBL8klhx67j/rIi+QbhRfdPfiV0gFHojL7ZuEmmbrhrIV36dtwwQkshTNOKTYmrTinJT2HA08hEABjCT+2HuaKLP8VhyNcisyQrjKA20IOgUSPOap2mzm47p+XWRCjI165dD+WsPgzAMuhglubDc/S4ja6Wit+NycDkuzKPuTE5pUmZTs2JDbT3TNfOpf6wPua9OPhBGmrgj2kcLdZBpkeM6rvstZb+2nh347v4xqa/UMZPH9aOuz2FUYtoaXzfvvfG+4CpD3f2n8i9BDuBATsFRiaf8iEhU17vbuZa0Dz9PIfmPErZpnMobU4P1JFB77xbH6cVr2uk36TzIeUQGHH/1lEw9uyrOyk3cGaVUot3Wx5AVHsbZDgiEV6BPnZJzf1208o6lf6YmTNki/8xQGV/XDJOE7xMmmBetkoNbZSCh6n0nAFRY7L7eE4XclIX3c0em5q4wqXXshOxtmohifefl0yNELJWSmuBPzVk1Kmc15IDrb38fkeGkDqy1/EbRDMkAw+tSztlxEYXzL/AUAD/I/L8kBbZtLLiUF69gP9Wde2oggMAYHZkBtyXKumovb3oL8F/tlIXhHR5gsFKqZZv6aLAz2aW7QXVNQ6iZcVDGjBRcVmDJbf8LJcNvJ/HIygg9nfDxikPwh5Q9+rVBo3UqMTtSqRoKr2GKPmPHyr7un2P+BbHS3YoqJJxgWWzWxVSBDbpgyox9wAR9NGxGZ9UCiEpADdBqU0tsDwjYAWQB8BLfAB89J9ripi1eaDq2O32xPfsd81n4xYQBS9pPdnG9dX4AAAAAAARVhJRsIAAABFeGlmAABJSSoAEAAAAEV4aWZNZXRhBgASAQMAAQAAAAEAAAAaAQUAAQAAAF4AAAAbAQUAAQAAAGYAAAAoAQMAAQAAAAEAAAATAgMAAQAAAAEAAABphwQAAQAAAG4AAAAAAAAAAQAAAAEAAAABAAAAAQAAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAADMAAAAA6AEAAEAAADAAAAAAAAAAFhNUCChCwAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEyLjY1Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnRpZmY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvJz4KICA8dGlmZjpCaXRzUGVyU2FtcGxlPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOkJpdHNQZXJTYW1wbGU+CiAgPHRpZmY6WUNiQ3JTdWJTYW1wbGluZz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjE8L3JkZjpsaT4KICAgIDxyZGY6bGk+MTwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'طينة': 'data:image/webp;base64,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AZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABFAAAAA6AEAAEAAABcAAAAAAAAAFhNUCChCwAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEyLjY1Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnRpZmY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvJz4KICA8dGlmZjpCaXRzUGVyU2FtcGxlPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOkJpdHNQZXJTYW1wbGU+CiAgPHRpZmY6WUNiQ3JTdWJTYW1wbGluZz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjI8L3JkZjpsaT4KICAgIDxyZGY6bGk+MjwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'عقارب': 'data:image/webp;base64,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ZXJTYW1wbGU+CiAgPHRpZmY6WUNiQ3JTdWJTYW1wbGluZz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjI8L3JkZjpsaT4KICAgIDxyZGY6bGk+MjwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'قرقنة': 'data:image/webp;base64,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IDEyLjY1Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnRpZmY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvJz4KICA8dGlmZjpCaXRzUGVyU2FtcGxlPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOkJpdHNQZXJTYW1wbGU+CiAgPHRpZmY6WUNiQ3JTdWJTYW1wbGluZz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjI8L3JkZjpsaT4KICAgIDxyZGY6bGk+MjwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'قرمدة': 'data:image/webp;base64,UklGRmweAABXRUJQVlA4WAoAAAAMAAAAuAAArgAAVlA4INoRAACwRgCdASq5AK8APlEij0QjoiGVelYoOAUEtABoRiAdwLO/ij85+THsvck9anmrwt+SXKBGb68v3P9y/JD6If5X/jf2v+k/E7/Lf4X/oe4R+vv+16nfmU/ZH9bPc//3X7ce939ifYO/qP9a66P9tfZX/bD03P2z+KP9t/2c9ov//5615N/Fj8xy63t18md/e07+V/ez817Q+0PgEexfVLe3uCO9PnMfPeZ/17/4PnP+sXhY/df+j7BP8i/sP61+81/b+Zb60M5zKYYRTn5MC7hnEURcaI7LR/6/X0XFfzTrOVe7g/wGFKowHc2QQrE2smm+xrjqJvbqcptDXdHnvjlU9swAy+Uk2JpTdA8qdtCbMnjYpW5rcLPGfW7mWPFKX6yIv0AmTLEDzkoAQdpxq3odZvnQZ5NDfsxwqcvfLCgDxhH8vsz9pnM7eClMzHvtl7+3LQZz4Iru7G2taUEpJ1YJMz7jHyGIqPeJeReTCkq9VR864y0PO5xXAOiFMQr9cKn5JfUT8ImBffbAto6r/TaaCqwDk67eo9mG5ks7tt+b7gxXnVTzo7/+drhvRNLNSaa6OTxTnYvF5/aTuZVfS8JDi0scteN4IafKFu6ybT/vlCZzHU+eSRJPFuSyYVVUS3heF2YN1L7UY3GsbGqnoZp6XBaHUoFrkX8s1RmeeALuKNe1ONTXoavAor2NT/dAtWyU6wS351O65GfrDJDT8+DoSL2+oFUhUUdnaXdqx3aVoiLpTKhyF0tFgCwJrMAAAP7+q5//ZyDShA0/pCefD+3Lhzoaz/0VXivyn7SM0Rpf/EQPuIgQOJG5Das5F8Z7uTJkXe5+GaDGW5xGduPOA+eajzR0T6EGH/uV2rx5/EtV8LsUmxM0rcWdU3FmiI4TQgVHHXigduKLyJ6PL7NtPzQUJ3+I7wmuNB8gF3iQ9DWQBwgDXbs0dqX5FRwmGbNYgqn6wpHOJS5KtXrFN8TFRFEf6hpRbKSGSfnAi/W8mhk6+DzDTfItzoqSg9mcV38aZivgywpzKA77WymVLYCS90Q+S6qVHflyIFA/XrCZR4OuU8OiS6RnsZ5LH8I1xVHL14jrTU0qWctfvzobjmaOrxfrJtmK72Tq+4xmAxZLYKBGK2pgkwy1XsQ26ClxdwBWQK2xJQhmdr+HNVyZooLsI9hireYxlPRnwicaRD9otcTKWEYgb3bxkZOqHbtQnGUcx70eqazNcv3KZLzCD4PO6in3A0wnk8gZP+9WAKH7alGuRLqFfsrx92sQwz9DcQEgux+9twyKAhhi3iPFdIdP9ItyRedASxAAAdTvgM7yp9O17X38Jzsv1sF7i7N+id5dwRiPZUKa0xBD36yg90Q1xA2wj9PDXrXWrnYAFzGqJwEtJoen24qdWj5CYtJVIO4hmUyK9+oiVqvyjCUzbWGNlJmmg7Lm69fYO8F/eQ+dFkIBocjlYB00S+3hJn8Pio3NXTvvNgj83OB0LhUgEUQ1wxdH0ioC497udHjj4fYWRzaMIaqLjSwJ5Kk4e8UstI0GForzfAUjwGF0HehwNZPiPxNsfyKamy+pXoZSQWwWU4zXpyLNfqSNMnpMxJZ65E23FLulCFLm4zaszdYrEGpNFCvXUsw/70FEIn+MqTWOS6fSr1M/BJ8KDWC3TGlbAgyYucLNl5r8aryUhTTg9GJ0fxEFg5Or6bUg93/1FbfnEVEG8B5OhVWjQ3sAAAW2mTPpCDFZBJkxwxlEo8YJvRx2LBMcI2sp9hmbsHs15uTNcw4bMYmhlJ99t0NkOJ1Q117o3247pxB947QbOCjLcNbINOQkP3jIsYOdW9Hg7g+DuC8i2BWa/sKbLcrWiSYii/B7WPapR4Tba/+DLZdddOD9DWD51OuTCvF95Q4FpGbCQ2DjAE4a0PfPIiJ/Q+zt1nKjVETnDKMeM5jyWRFaGoivUx4HMc13H1sQsIVrwz/SggwYJdNDqSoY/kjtovY92ULGZ2AwupntmnhQBUSzsvyz/I63ELzSCUjlpLHfQE9CUyXVCJpfLBMRiFxoxZBzbgN0Fc1VW2yZKmZy94ATukSk6ovbQfYHXff0KOYvs5J3SrGNACg+36hT/TrxL+/HXp2Dlnhy0aApUWZ1FwBvzcZI38GGgRxLsVWrq8h85DXIwsuUoYXU6m2c+wwMbCycEOJxqGDCU0wSjFoWFR/7a0slEqY5drtT9xcdbKoly1TouCtmbCJjy3lZyH98DzOQt4naf9bnQV+Gd8/iAXsgdjoUcU/I6rdeS5yGwjyDMGhf2RmbFFBQuhWsmb61S85J9Pg5/4VPX4k+3/9IVmPu74GraYkb7qYz8habE9+kANRb0wQarR56/ucDEvX/D5Vj0F+2p7gla93Sk+mT8Z9PhIGH92+AURP73upZMU/o/nwR7i+6OuVUD/l/th82abgV1bfx1Q3dS1PsuAoAFegw5531fkNqCcLy0N0qGqlRgcUEntxctdzWM3HVE07qQ9GGskWh3MbwxxLrLPTzXT7rwcQSPTOvPAAR2gnqLQOGe+PT2VUYxkznC1X1/sFerVs5pM5y7voUzIeIAaL8P/Jlavuhcz8/hAnMMOrvOclYajm7PeqFazl5ow/6ctsYNyE37vTKmViv28C0LL/R0/E7etf2ZEJ5AKnVbhuNxW6oPxQntGtbSVPKpEpZh10+beCBz3INrqWCgx+WlhvrUqMvLBoa3lyDRZrc6KRxAiof1C4D1RnBvZmxpCC3VXN0Wyg7tQquV/rl8GXLhqC3VUjL5nYrh3tmIObU6WAQtZHi/UlbaE6GsFGqrwAOkbWQDE9S4iyG+aOU7rSWuTzcb6xQmRW7+63QzGbe8Uy3Mer9Bdoeo/bKatQb9o2sirM9ducN6Tf418lvGOxMa9DguK5/n02N+oUFOlwESBI4WqZPBm17aS44EIlGV/3iSgYs4wV8Lg/1ZxbTO+K7YBezDsymKe5rIkVKUQnMCT+vKUIygRt6XoWhwHNAUNh9hBZnzuD0iD6S8Af7XPWbOZqbSzbySTS8I3fbIQhILAEdZd2Tnv7GhidTiJFXCwu/lDmWDZBq2v8p2eh85ofON2R9G/sq0HAtgJIBykMIAO7HbjuVkKs+5/5VwtpTxhYVL627LXza/RxW4ELYJ4u6c7N5B8ZcV5/w9xSMMeTy96pu12sr8if+JsrQorI9rMgSHO4fvrmoVXAj+DDQfYl5rkifKsC2qq35RUvDSB9HA5XMPeRINpyCSOwVis6Kk1g9Ei4Us2JlieXowEfRt2SLN8Cxr2tPwPmGEw6y2IAnZr4QahLFGoe7KFqQ1mAqCw8acKkSo6yAD9TKMDq1PBiVCW62o9Q2Maotd67SLpS9m25MaKd68ll+MLs5ehoMGv0hex9rETUPrIA8n5iz6LFGyN2vGxEH60Yr40SB0arUy4oMlfwKphDDX71K2fGx5o22B8uJqWZjQkm9bYr1QF2pGZsIKI+uF77Zc8u3v4hVOkOfUMcOGKvutQTjwlD0iWgtgrZUUE8f6V+9F2pBDMpZ2DYoRMCCSE9jpZXbw/aO+rb5mUeBSv5eifKt0Kh1sLRdl7oU1GyGK7S8+LjYSeAqqCqvvs6WEOBobX42tZEl+maglugjEpPr12ZSew9NvEnwQKPWlJ/KWsLUlV212pGfn3zFgR8e2BNbXJMlEzyAecgUFNfnsL/iC+QupvoRyFSo6woEfz5PoelzJ+FnT/oT0ydfkmLGaOebUf7boZ0IywZhTms/MrxYPNwUMUVdUZTn65lsReHeA6B47mp9F+wiqMNpDUBqeTTkRvwmMaXP46mw7RcmhP8In+Nz87JXNd6SwaFuFTfiBWWMhuezyUDQM/MDkxBt19DxcJfBGd749q1770P5NSnIeh1x+ZaIROIJyDWx8R6OpeyutS+qq5ZYTSa61oj20hrWNFQ9+4NWGOuhhcGxIqaqFBxKy6J1tl1IdU2LinDiMvqQpBpAN3bYBr+5E+YnXjt1QCeHHdKTrXtRIm74WQuH/HFNGleX5BvaIIRu7knH/5A7983SBYEOwRTxMQn6oVWkX8/729WCQs7nftzAOe5ZDAJwHis0boz3ah4RDLc1PW+LDMNxHuStbN/mbnUyv0MTQRPDgNZU2zJ4wXYLBGwgqxnXPMSe3fAr7T4kadd9/qt7tZMmgSV6sbWkAs3goVN/bfS4w3LSTsv3Zhi998WeZpVGMJd/1Nir9ruW1so7SwcYUb7vD+Lsi5OLUP5LnjY4G/lems0dKaK0tDey1mrXLpKEtNk8GTXUX0BMEIxE0byw73eHcyNFUHqvhuc2y6ZB3dYj9vhHFu3djTIzPSQoNwNe8v9qpis2u3LQSWyl7YpR+N6zHf3qhPMLsWkAgKJLSE6HAQSM96wNZEhJA2tjtE9AsSlQAXSkWvi48rUUjdqJ8eBlLBUfbHGoE800Y/DWbYZlB1Drq7N8E5KwlG201pF4BvGQ9IzcNDUlzRczNEbI3O2fF2nwaHV3EFicBorRGTlWufB4rvQVem2VISc/of6eAw1e6cXmPpuIJM/UAP8dgqJhbhtZ1YDf0Je25BEBItOuaamVFq/83ZcjEkRusDd3Z4TTg8GFEq+WcjMdYTznCsH4ZJab2Rd6+qFmjxSNOjxDeja26p+aAtKJNAn6DFlk1m1dydV4VqvE75XMohwuriqzqOjpuPhvhswvNKoQtgg8Yaiwo9sEFqCJK4iKgSDBr/BYZW9+cx3ESFI8saa2O3w8SLYUe+9TJ8GRoyB06VrT1b5adQdw1KqBzoGYYI9TlK9yb+p+H5fPT9+ycDjZUCGpjk+ftdFHt8MEtc9Atv068fUzfKHB2EdsHcst+mIdpgrLH457vmyv4bHLBdCrtJER30zX/mHj+olii6f15uLVjnlmDo9syM/GrcM2ShPXjQ79eWUkvQtBBbsjtifPuByI/Ez0kW29E9knS+9OZd9zDf0rZhuz6H0ykTgei8JvIZt3C/RsMQMpb6iHdzsBGT+21d/T8Gbyf6TybFBNU/M/a3L9fDyfPxKMwoTojkDxaiixWFPOviZDN/FS3z0sSTJqHNlDb6xhLf/AAHiMfxFe59DN7FdP+T7o8A4TGdNw+gZHUOusHN0Z28axSjEqoTbTpJNRg/K2fW/hKHZogRkUHJY9LuH4ZB7CQgguSwH3tSPn3P+Ba6xispSDJ/uzFaJdpR2+DoxLFLINFiaxW/wu4htAZjbEfj2IY9/gp18lmhIczkdNI4O7JJCBpyLjXrX5gI5kwEdxER1v0fmSBDfOR9ntOZM+faBtC9cArlDJt8xcLlxM3Q4W27+vrSt6sb+kW87eVChVS80GR7/czGr4QRKLFH9Au+LXYNIUGXge0n5PgaZiiuRJ3tYkqkqctLfyCzKy5Ublzfotv5gV8cuEbn2tcT7WZVlQ/EaJSfBHNvpcG2R2N0E9sk1tF9txG16opPq+N90tbiGVa6Aiu1UWJ23ASmFE7fAqDGID8/+vj1D1NCtaK10gAAAa0yHDtHbaP/wq7nVId1G/9HMIItstXjG15362vhDsa7rXDjWBDsz+vh21ClxoJU6tZ1FMmOPQw0ReKo7eIBEHvEaNr8R9uJRMbor1g2+Gizv+H+ZqmJCLIZLYvA5NORk0p6hpjplAopE4OWvu6XyKITU2G2PN/04HGu8eA2errhGCP7JOfZAAAAKOSAoLPqlWajxnB8XsOoX5Y+Yst4+FF3JS+/4FLkP4LJIHb+cIeLc6WhA8U7TqHFBH+Zs9pAhbH0GSHdzMrVZUwV4o1zVdsm6I/9+aUEBzt6nSb4Hsb//mgsntGmttpyhTFKAEmHmORQQXO0AawbuWuV80lMJOgAAAu8JhNz6XEgaS3T9WD9IopqQH6DCNBotGbnLvN3GpvSosfH8PARbDGdut88BL0VdZsU/HKaA7lkY0+zfXdU8RFnnxCU+tdYtArLQwszY5vLcOiMB8WzZlvcJ/dIcMQ9kN4y1X17qqAAEPMxzGwHHSV13cX74La2ycl+Bw3UgFA+kFZeRNQPVa5SsnUQN81sJc2j+kQ5qtP/uiZQV+g6xfySXqC6tHI3ibacV1D/edT8i7ChxKx4LEYgnWYAAARVhJRsIAAABFeGlmAABJSSoAEAAAAEV4aWZNZXRhBgASAQMAAQAAAAEAAAAaAQUAAQAAAF4AAAAbAQUAAQAAAGYAAAAoAQMAAQAAAAEAAAATAgMAAQAAAAEAAABphwQAAQAAAG4AAAAAAAAAAQAAAAEAAAABAAAAAQAAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAC5AAAAA6AEAAEAAACvAAAAAAAAAFhNUCChCwAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEyLjY1Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnRpZmY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvJz4KICA8dGlmZjpCaXRzUGVyU2FtcGxlPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOkJpdHNQZXJTYW1wbGU+CiAgPHRpZmY6WUNiQ3JTdWJTYW1wbGluZz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjI8L3JkZjpsaT4KICAgIDxyZGY6bGk+MjwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'منزل شاكر': 'data:image/webp;base64,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AaADAAEAAAD//wAAAqAEAAEAAAA6AAAAA6AEAAEAAABcAAAAAAAAAFhNUCChCwAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEyLjY1Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnRpZmY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvJz4KICA8dGlmZjpCaXRzUGVyU2FtcGxlPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOkJpdHNQZXJTYW1wbGU+CiAgPHRpZmY6WUNiQ3JTdWJTYW1wbGluZz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPjE8L3JkZjpsaT4KICAgIDxyZGY6bGk+MTwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PgA=',
  'الشيحية': 'data:image/webp;base64,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',
  'الصخيرة': 'data:image/webp;base64,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',
  'العامرة': 'data:image/webp;base64,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',
  'الغريبة': 'data:image/webp;base64,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',
  'جبنيانة': 'data:image/webp;base64,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AwABAAAAAQAAAGmHBAABAAAAbgAAAAAAAAABAAAAAQAAAAEAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAABsCAAADoAQAAQAAAAYCAAAAAAAAWE1QIKELAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJyB4OnhtcHRrPSdJbWFnZTo6RXhpZlRvb2wgMTIuNjUnPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6dGlmZj0naHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8nPgogIDx0aWZmOkJpdHNQZXJTYW1wbGU+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6Qml0c1BlclNhbXBsZT4KICA8dGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+MjwvcmRmOmxpPgogICAgPHJkZjpsaT4yPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L3RpZmY6WUNiQ3JTdWJTYW1wbGluZz4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+AA==',
  '__gov__': 'data:image/webp;base64,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',
};

function getMunLogo(munName) {
  // Trim and fuzzy match
  const name = munName.trim();
  if (MUN_LOGOS[name]) return MUN_LOGOS[name];
  // Try partial match
  for (const key of Object.keys(MUN_LOGOS)) {
    if (key === "__gov__") continue;
    if (name.includes(key) || key.includes(name)) return MUN_LOGOS[key];
  }
  return MUN_LOGOS["__gov__"];
}

/* ═══════════════════════════════════════════
   2. UTILITAIRES
═══════════════════════════════════════════ */
function getMunTotals(dateFilter) {
  const map = {};
  DATA.filter(r => !dateFilter || dateFilter === 'all' || r.date === dateFilter)
    .forEach(r => {
      if (!map[r.mun]) map[r.mun] = { mun: r.mun, ton: 0, mk: 0, days: new Set(), entries: [] };
      map[r.mun].ton += r.ton;
      map[r.mun].mk  += (r.mk || 0);
      map[r.mun].days.add(r.date);
      map[r.mun].entries.push(r);
    });
  return Object.values(map).map(v => ({ ...v, days: v.days.size }));
}

function getUniqueDates() {
  return [...new Set(DATA.map(r => r.date))].sort();
}

// قائمة شاملة لجميع بلديات ولاية صفاقس (بما فيها النور)
const ALL_MUNS = [
  'صفاقس','الصخيرة','المحرس','النور','ساقية الزيت','قرقنة',
  'الحاجب','الحنشة','العوابد الخزانات','العامرة','الشيحية','العين',
  'الغريبة','النصر','بئر علي الشمالية','بئر علي بن خليفة','جبنيانة',
  'حزق اللوزة','عقارب','منزل شاكر','قرمدة','ساقية الدائر','طينة'
];

function getUniqueMuns() {
  const fromData = [...new Set(DATA.map(r => r.mun))];
  const combined = [...new Set([...ALL_MUNS, ...fromData])];
  return combined.sort((a, b) => a.localeCompare(b, 'ar'));
}

function fmtDate(d) {
  const parts = d.split('-');
  const months = ['','جانفي','فيفري','مارس','أفريل','ماي','جوان','جويلية','أوت','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  return `${parseInt(parts[2])} ${months[parseInt(parts[1])]}`;
}

function showToast(msg, type = 'success') {
  const wrap = document.getElementById('toastWrap');
  if (!wrap) return;
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 800);
}

/* ═══════════════════════════════════════════
   3. NAVIGATION
═══════════════════════════════════════════ */
function navTo(pageId, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');

  // Top nav
  document.querySelectorAll('.nav-btn[data-page]').forEach(b => b.classList.remove('active'));
  const topBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  if (topBtn) topBtn.classList.add('active');

  // Bottom nav
  document.querySelectorAll('.bottom-nav-btn[data-page]').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const bBtn = document.querySelector(`.bottom-nav-btn[data-page="${pageId}"]`);
    if (bBtn) bBtn.classList.add('active');
  }

  // Lazy render
  if (pageId === 'municipalities') renderMunGrid();
  if (pageId === 'quantities')     loadDailyInterventions();
  if (pageId === 'reports-admin')  loadReports();
}

/* ═══════════════════════════════════════════
   4. HORLOGE EN DIRECT
═══════════════════════════════════════════ */
function updateClock() {
  const el = document.getElementById('liveTime');
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString('ar-TN', { hour: '2-digit', minute: '2-digit' });
}

function updateIntervalLabel() {
  const el = document.getElementById('intervalLabel');
  if (!el) return;
  const dates = getUniqueDates();
  if (!dates.length) { el.textContent = '—'; return; }
  el.textContent = `${fmtDate(dates[0])} — ${fmtDate(dates[dates.length - 1])} ${dates[0].split('-')[0]}`;
}

/* ═══════════════════════════════════════════
   5. KPI CARDS
═══════════════════════════════════════════ */
function renderKPIs() {
  const totals  = getMunTotals('all');
  const grandTon = totals.reduce((s, d) => s + d.ton, 0);
  const grandMk  = totals.reduce((s, d) => s + d.mk,  0);
  const munCount = totals.length;
  const dates    = getUniqueDates();
  const avgDaily = dates.length ? Math.round(grandTon / dates.length) : 0;

  const kpis = [
    { icon:'📦', val: grandTon.toFixed(0),          lbl:'إجمالي الكميات',    sub:'(طن)',          c:'#059669' },
    { icon:'🏙️', val: munCount,                     lbl:'البلديات النشطة',   sub:`${dates.length} أيام`, c:'#0b2545' },
    { icon:'📏', val: grandMk.toLocaleString('ar'),  lbl:'المتر الخطي الجملي', sub:'م خ',          c:'#0891b2' },
    { icon:'📅', val: dates.length,                  lbl:'أيام التدخل',      sub:'يوم نشاط',      c:'#7c3aed' },
    { icon:'📈', val: avgDaily,                       lbl:'المعدل اليومي',    sub:'طن/يوم',        c:'#b45309' },
  ];

  const row = document.getElementById('kpiRow');
  if (!row) return;
  row.innerHTML = kpis.map((k, i) => `
    <div class="neu-card kpi" style="--c:${k.c};animation-delay:${i * 0.06}s">
      <span class="kpi-icon">${k.icon}</span>
      <div class="kpi-val">${k.val}</div>
      <div class="kpi-lbl">${k.lbl}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>`).join('');
}

/* ═══════════════════════════════════════════
   6. BAR CHART (dashboard)
═══════════════════════════════════════════ */
function renderBarChart() {
  const el = document.getElementById('barChart');
  if (!el) return;
  const totals = getMunTotals('all').sort((a, b) => b.ton - a.ton).slice(0, 12);
  const max = totals[0]?.ton || 1;
  el.innerHTML = totals.map((d, i) => {
    const pct = Math.round((d.ton / max) * 100);
    const color = COLORS[i % COLORS.length];
    return `
      <div class="bar-row anim-bar" style="animation-delay:${i * 0.05}s">
        <div class="bar-lbl">${d.mun}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${color},${color}cc)">
            <span>${d.ton.toFixed(0)} ط</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   7. MK BAR CHART (dashboard - optionnel)
═══════════════════════════════════════════ */
function renderMkBarChart() {
  const card = document.getElementById('mkChartCard');
  const el   = document.getElementById('mkBarChart');
  if (!card || !el) return;
  const totals = getMunTotals('all').filter(d => d.mk > 0).sort((a, b) => b.mk - a.mk);
  if (!totals.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  const max = totals[0].mk;
  el.innerHTML = totals.map((d, i) => {
    const pct = Math.round((d.mk / max) * 100);
    return `
      <div class="bar-row anim-bar" style="animation-delay:${i * 0.05}s">
        <div class="bar-lbl">${d.mun}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${pct}%;background:linear-gradient(90deg,#0891b2,#0e7490cc)">
            <span>${d.mk.toLocaleString('ar')} م</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   8. DONUT SVG (dashboard)
═══════════════════════════════════════════ */
function renderDonut() {
  const svg    = document.getElementById('donutSvg');
  const legend = document.getElementById('pieLegend');
  if (!svg || !legend) return;

  const totals  = getMunTotals('all').sort((a, b) => b.ton - a.ton);
  const top6    = totals.slice(0, 6);
  const others  = totals.slice(6).reduce((s, d) => s + d.ton, 0);
  const labels  = [...top6.map(d => d.mun), others > 0 ? 'أخرى' : null].filter(Boolean);
  const values  = [...top6.map(d => d.ton), others > 0 ? others : null].filter(Boolean);
  const colors  = [...COLORS.slice(0, 6), '#94a3b8'].slice(0, values.length);
  const total   = values.reduce((s, v) => s + v, 0);

  const cx = 110, cy = 110, R = 90, r = 55;
  let startAngle = -Math.PI / 2;
  let paths = '';

  values.forEach((v, i) => {
    const angle = (v / total) * 2 * Math.PI;
    const end   = startAngle + angle;
    const x1 = cx + R * Math.cos(startAngle), y1 = cy + R * Math.sin(startAngle);
    const x2 = cx + R * Math.cos(end),        y2 = cy + R * Math.sin(end);
    const ix1= cx + r * Math.cos(startAngle), iy1= cy + r * Math.sin(startAngle);
    const ix2= cx + r * Math.cos(end),        iy2= cy + r * Math.sin(end);
    const large = angle > Math.PI ? 1 : 0;
    paths += `<path d="M${x1},${y1} A${R},${R} 0 ${large},1 ${x2},${y2}
                L${ix2},${iy2} A${r},${r} 0 ${large},0 ${ix1},${iy1} Z"
              fill="${colors[i]}" opacity=".9"
              style="animation:donutSpin .6s ${i * 0.07}s ease both;transform-origin:${cx}px ${cy}px">
              <title>${labels[i]}: ${v.toFixed(1)} طن</title></path>`;
    startAngle = end;
  });

  const pct0 = Math.round((values[0] / total) * 100);
  svg.innerHTML = `
    ${paths}
    <circle cx="${cx}" cy="${cy}" r="${r - 4}" fill="var(--bg)" filter="url(#neu)"/>
    <text x="${cx}" y="${cy - 8}"  text-anchor="middle" font-size="22" font-weight="900" fill="${colors[0]}">${pct0}%</text>
    <text x="${cx}" y="${cy + 12}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-muted)">${labels[0]}</text>`;

  legend.innerHTML = labels.map((l, i) => {
    const p = Math.round((values[i] / total) * 100);
    return `<div class="pie-leg-row">
      <div class="pie-leg-dot" style="background:${colors[i]}"></div>
      <span style="flex:1">${l}</span>
      <span style="font-weight:800;color:var(--text)">${p}%</span>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   9. DECL STATS (zone réservée aux signalements — données vides par défaut)
═══════════════════════════════════════════ */
function renderDeclStats() {
  const grid = document.getElementById('declStatsGrid');
  const bar  = document.getElementById('declBarChart');
  const sev  = document.getElementById('declSevChart');
  if (!grid) return;

  const reports = REPORTS_DATA;
  const total      = reports.length;
  const pending    = reports.filter(r => r.status === 'pending').length;
  const inProgress = reports.filter(r => r.status === 'in_progress').length;
  const resolved   = reports.filter(r => r.status === 'resolved').length;

  const stats = [
    { icon:'📋', val: total,      lbl:'إجمالي البلاغات', c:'#dc2626' },
    { icon:'⏳', val: pending,    lbl:'قيد الانتظار',     c:'#b45309' },
    { icon:'🔧', val: inProgress, lbl:'جارٍ المعالجة',    c:'#1d4ed8' },
    { icon:'✅', val: resolved,   lbl:'تمّت المعالجة',    c:'#059669' },
  ];

  grid.innerHTML = stats.map(s => `
    <div class="decl-stat-card" style="--dsc:${s.c}">
      <div class="decl-stat-icon">${s.icon}</div>
      <div>
        <div class="decl-stat-val">${s.val}</div>
        <div class="decl-stat-lbl">${s.lbl}</div>
      </div>
    </div>`).join('');

  // Bar chart par municipalité
  if (bar) {
    const byMun = {};
    reports.forEach(r => {
      if (!byMun[r.municipality]) byMun[r.municipality] = 0;
      byMun[r.municipality]++;
    });
    const sorted = Object.entries(byMun).sort((a,b) => b[1]-a[1]).slice(0,10);
    const maxVal = sorted[0]?.[1] || 1;
    bar.innerHTML = sorted.map(([mun, cnt], i) => {
      const pct = Math.round((cnt / maxVal) * 100);
      const c = COLORS[i % COLORS.length];
      return `<div class="bar-row anim-bar" style="animation-delay:${i*0.05}s">
        <div class="bar-lbl">${mun}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${c},${c}cc)">
            <span>${cnt} بلاغ</span>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  // Sev chart
  if (sev) {
    const sevMap = { 'عالية': { c:'#dc2626', cnt:0 }, 'متوسطة': { c:'#b45309', cnt:0 }, 'منخفضة': { c:'#059669', cnt:0 } };
    reports.forEach(r => { if (sevMap[r.severity]) sevMap[r.severity].cnt++; });
    sev.innerHTML = Object.entries(sevMap).map(([label, { c, cnt }]) => `
      <div class="bar-row">
        <div class="bar-lbl">${label}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${Math.round(cnt/total*100)}%;background:linear-gradient(90deg,${c},${c}cc)">
            <span>${cnt}</span>
          </div>
        </div>
      </div>`).join('');
  }
}

/* ═══════════════════════════════════════════
   10. PAGE MUNICIPALITIES
═══════════════════════════════════════════ */
let _munFilter = { minTon: 0, unit: '', sort: 'ton_desc' };

function applyFilter() {
  _munFilter.minTon = parseFloat(document.getElementById('minTon')?.value || 0) || 0;
  _munFilter.unit   = document.getElementById('unitType')?.value || '';
  _munFilter.sort   = document.getElementById('sortBy')?.value   || 'ton_desc';
  renderMunGrid();
}

function resetFilter() {
  const minTon = document.getElementById('minTon');
  const unitType = document.getElementById('unitType');
  const sortBy = document.getElementById('sortBy');
  if (minTon)   minTon.value   = 0;
  if (unitType) unitType.value = '';
  if (sortBy)   sortBy.value   = 'ton_desc';
  _munFilter = { minTon: 0, unit: '', sort: 'ton_desc' };
  renderMunGrid();
}

function renderMunGrid() {
  const grid = document.getElementById('munGrid');
  const info = document.getElementById('filterInfo');
  if (!grid) return;

  let data = getMunTotals('all');

  // Filtres
  if (_munFilter.minTon > 0) data = data.filter(d => d.ton >= _munFilter.minTon);
  if (_munFilter.unit === 'ton')  data = data.filter(d => d.mk === 0);
  if (_munFilter.unit === 'mk')   data = data.filter(d => d.mk > 0);

  // Tri
  if (_munFilter.sort === 'ton_desc') data.sort((a, b) => b.ton - a.ton);
  else if (_munFilter.sort === 'ton_asc') data.sort((a, b) => a.ton - b.ton);
  else data.sort((a, b) => a.mun.localeCompare(b.mun, 'ar'));

  const maxTon  = data[0]?.ton || 1;
  const grandTon = data.reduce((s, d) => s + d.ton, 0);
  const allMuns = getMunTotals('all');

  if (info) info.textContent = `عرض ${data.length} بلدية من ${allMuns.length} — إجمالي ${grandTon.toFixed(1)} طن`;

  grid.innerHTML = data.map((d, i) => {
    const [c1, c2] = MUN_COLORS[i % MUN_COLORS.length];
    const pct  = Math.round((d.ton / maxTon) * 100);
    const share= Math.round((d.ton / grandTon) * 100);
    const rankClass = i === 0 ? 'tag-high' : i < 3 ? 'tag-med' : 'tag-low';
    const rankLabel = i === 0 ? '🥇 الأول' : i === 1 ? '🥈 الثاني' : i === 2 ? '🥉 الثالث' : `# ${i+1}`;

    return `
    <div class="mun-card" style="animation-delay:${Math.min(i * 0.04, 0.5)}s" onclick="openMunPopup(${i}, ${JSON.stringify(d.mun)})">
      <div class="mun-img-wrap" style="background:linear-gradient(135deg,${c1},${c2})">
        <img src="${getMunLogo(d.mun)}" alt="${d.mun}" style="width:100%;height:100%;object-fit:contain;padding:12px;box-sizing:border-box;background:rgba(255,255,255,0.07)" onerror="this.src=MUN_LOGOS['__gov__']">
        <div class="mun-img-overlay">
          <div class="mun-img-name">${d.mun}</div>
        </div>
      </div>
      <div class="mun-body">
        <div class="mun-meta">
          <div class="mun-ton" style="--mc:${c1}">${d.ton.toFixed(1)}<small> طن</small></div>
          <div class="mun-zones">${d.days} يوم</div>
        </div>
        <div class="mun-bar-bg">
          <div class="mun-bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${c1},${c2})"></div>
        </div>
        <span class="mun-tag ${rankClass}">${rankLabel} · ${share}%</span>
        ${d.mk > 0 ? `<div style="font-size:10px;color:#0891b2;font-weight:700;margin-bottom:6px">📏 ${d.mk.toLocaleString('ar')} م خ</div>` : ''}
        <button class="mun-report-btn" onclick="event.stopPropagation();openModalFor(${JSON.stringify(d.mun)})">
          🔴 إبلاغ عن نقطة سوداء
        </button>
      </div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   11. MUNICIPALITY POPUP
═══════════════════════════════════════════ */
function openMunPopup(idx, munName) {
  const totals  = getMunTotals('all').sort((a, b) => b.ton - a.ton);
  const d       = totals.find(t => t.mun === munName);
  if (!d) return;

  const rank    = totals.findIndex(t => t.mun === munName) + 1;
  const [c1, c2]= MUN_COLORS[idx % MUN_COLORS.length];

  // Header
  document.getElementById('munPopupHeader').style.setProperty('--mc', c1);
  document.getElementById('munPopupHeader').style.background = `linear-gradient(135deg,${c1},${c2})`;
  const logoSrc = getMunLogo(munName);
  document.getElementById('munPopupLogo').innerHTML = `<img src="${logoSrc}" alt="${munName}" style="width:100%;height:100%;object-fit:contain;border-radius:8px;background:rgba(255,255,255,0.1);padding:4px" onerror="this.src=MUN_LOGOS['__gov__']">`;
  document.getElementById('munPopupName').textContent  = munName;
  document.getElementById('munPopupRank').textContent  = `# ${rank} — ${Math.round((d.ton/getMunTotals('all').reduce((s,x)=>s+x.ton,0))*100)}%`;
  document.getElementById('munPopupDate').textContent  = `📅 ${d.days} أيام نشاط`;

  // Stats
  document.getElementById('munPopupTon').textContent   = d.ton.toFixed(1) + ' طن';
  document.getElementById('munPopupTon').style.color   = c1;
  document.getElementById('munPopupMK').textContent    = d.mk > 0 ? d.mk.toLocaleString('ar') + ' م خ' : '—';
  const zones = [...new Set((d.entries||[]).flatMap(e => (e.places||'').split('/').map(p=>p.trim()).filter(Boolean)))];
  document.getElementById('munPopupZones').textContent = zones.length;

  // Zones list
  document.getElementById('munPopupAreas').innerHTML = zones.slice(0, 8).map(z => `
    <div class="zone-item" style="margin-bottom:6px">
      <div class="zone-dot" style="background:${c1}"></div>
      <span style="font-size:11px">${z}</span>
    </div>`).join('');

  // Report button
  const btn = document.getElementById('munPopupReportBtn');
  if (btn) { btn.onclick = () => { closeMunPopup(); openModalFor(munName); }; }

  document.getElementById('munPopupBg').classList.add('open');
}

function closeMunPopup() {
  document.getElementById('munPopupBg')?.classList.remove('open');
}
function bgCloseMunPopup(e) {
  if (e.target === document.getElementById('munPopupBg')) closeMunPopup();
}

/* ═══════════════════════════════════════════
   12. PAGE QUANTITÉS JOURNALIÈRES
═══════════════════════════════════════════ */
let _currentDateFilter = 'all';

function filterByDate(date) {
  _currentDateFilter = date;
  // Mise à jour visuelle des boutons
  document.querySelectorAll('.date-filter-btn').forEach(b => {
    b.classList.toggle('date-filter-active', b.dataset.date === date);
  });
  renderQtyTable(date);
}

function loadDailyInterventions() {
  renderQtyTable(_currentDateFilter);
}

function renderQtyTable(dateFilter) {
  const rows  = DATA.filter(r => !dateFilter || dateFilter === 'all' || r.date === dateFilter);
  const total = rows.reduce((s, r) => s + r.ton, 0);
  const muns  = new Set(rows.map(r => r.mun));

  // Compteurs en-tête
  const cntTotal = document.getElementById('cnt-total-qty');
  const cntMun   = document.getElementById('cnt-mun-count');
  if (cntTotal) cntTotal.textContent = `📦 ${total.toFixed(1)} طن`;
  if (cntMun)   cntMun.textContent   = `🏙️ ${muns.size} بلدية`;

  // Totaux en bas
  const elTotal = document.getElementById('dailyTotalAmount');
  const elMun   = document.getElementById('munCountAmount');
  if (elTotal) elTotal.textContent = total.toFixed(1);
  if (elMun)   elMun.textContent   = muns.size;

  // Compteur filtre
  const qtyCount = document.getElementById('qtyCount');
  if (qtyCount) qtyCount.textContent = `${rows.length} تدخل`;

  // Corps du tableau
  const body = document.getElementById('dailyInterventionsBody');
  if (!body) return;

  if (!rows.length) {
    body.innerHTML = `<tr><td colspan="5" class="empty-state">
      <span>📭</span>لا توجد بيانات لهذا التاريخ
    </td></tr>`;
    return;
  }

  body.innerHTML = rows.map((r, i) => {
    const dateLabel = fmtDate(r.date);
    const typeShort = (r.type || '').split('/')[0].trim();
    const placesShort = (r.places || '').split('/').slice(0, 2).map(p => p.trim()).filter(Boolean).join(' / ');
    return `
    <tr>
      <td style="color:var(--text-muted);font-weight:800">${i + 1}</td>
      <td>
        <strong style="color:var(--text)">${r.mun}</strong>
        <div style="font-size:10px;color:var(--text-muted);margin-top:2px">📅 ${dateLabel}</div>
      </td>
      <td style="text-align:center">
        <span style="font-size:16px;font-weight:900;color:#059669">${r.ton}</span>
        <span style="font-size:10px;color:var(--text-muted)"> طن</span>
        ${r.mk > 0 ? `<div style="font-size:10px;color:#0891b2;font-weight:700;margin-top:2px">${r.mk} م خ</div>` : ''}
      </td>
      <td style="font-size:11px;color:var(--text-muted);max-width:220px;line-height:1.5">${typeShort}</td>
      <td style="font-size:11px;color:var(--text-muted);max-width:220px;line-height:1.5">${placesShort}</td>
    </tr>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   13. PAGE RAPPORTS ADMIN (structure vide + DATA signalements)
═══════════════════════════════════════════ */
// ═══════════════════════════════════════════
// DONNÉES STATIQUES — بلاغات النقاط السوداء
// Source: sfax_nettoyage_dashboard_v4
// ═══════════════════════════════════════════
const REPORTS_DATA = [
  {
    "id": "r001",
    "municipality": "الحنشة",
    "location": "سوق الزيتون",
    "description": "تراكم الفضلات في شارع سوق الزيتون في اتجاه اولاد حمد و في محيط معمل الخياطة",
    "severity": "متوسطة",
    "status": "in_progress",
    "municipality_answer": "نسبة الإنجاز 70%",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r002",
    "municipality": "الحنشة",
    "location": "ط و 1 في اتجاه. الجم على مستوى قنطرة اولاد حمد",
    "description": "تراكم الفضلات في السبخة",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r003",
    "municipality": "الحنشة",
    "location": "طريق منزل شاكر  على مستوى مركز  مصباح",
    "description": "تجمع الفضلات على جوانب الطريق في الاتجاهين",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r004",
    "municipality": "الحنشة",
    "location": "طريق منزل شاكر  شارع البيئة",
    "description": "تراكم الفضلات على جوانب الطريق إلى حدود معهد المسعدي",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r005",
    "municipality": "الحنشة",
    "location": "تجمع السكني الخراج",
    "description": "تجمع الفضلات وسط الحي المنطقة خضراء",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r006",
    "municipality": "الحنشة",
    "location": "حي الجنة الغربية",
    "description": "تجمع الفضلات في مداخل حي الجنة الغربية",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r007",
    "municipality": "الحنشة",
    "location": "شارع 14 جانفي الحنشة أمام مجمع الحليب",
    "description": "ابونات و تلوث و دخان مضر للمحيط و المتساكنين و سريع و حطب مطيش بجانب الحديقة. علما هناك تواطؤ من المكلف بالتسيير لشؤون البلدية و المعتمد و الامن الي هم على علم و هناك قرار ازالة بالبلدية",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r008",
    "municipality": "الحنشة",
    "location": "طريق منزل شاكر  منطقة العسيالة",
    "description": "تراكم الفضلات بجانب بئر الفلاحة",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r009",
    "municipality": "الحنشة",
    "location": "مفترق السكة الحديدية باولاد حمد الغراسة",
    "description": "فترق السكة الحديدية باولاد حمد الغراسة ،تراكم الفضلات على امتداد السكة من الجانبين وكذلك تكاثف الاشجار الضارة و التي تحجب الرؤية على المواطنين والمارة وكذلك تجاوز بعض المواطنين باقامة (ربط) على مستوى الطريق والرصيف مما يجعل الطريق غير آمن وقد جد مؤخرا حادث اليم تسبب في وفاة امراة أم لولدين والزوج في حالة حرجة ،كذلك من نقطة ثانية بجانب المستوصف بالمنطقة ونقطة ثالثة االعقلة بنفس المنطقة",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r010",
    "municipality": "الحنشة",
    "location": "عمادة مركز مصباح العسائلة بجانب البئر",
    "description": "تراكم الفظلات بجانب البئر",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r011",
    "municipality": "الحاجب",
    "location": "طريق المطار كم8 حي الخضراء من قرب من الجامع اين الحاويات",
    "description": "فضلات و اجسام بجامب حاوية الفضلات منظر مقرف",
    "severity": "متوسطة",
    "status": "resolved",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r012",
    "municipality": "الحاجب",
    "location": "طريق المطار كم 6 زنقة الشعري",
    "description": "هناك تراكمات عديدة من الفضلات منبثرة فى بعض الاراضى مما تسبب فى مناضر غير لائقة و مهينة بالبيئة و بالمنطقة السكنية و هناك المشكلة الأعظم لدينا كا منطقة سكنية وهى وجود مدجنة بصدد العمل رغم وجود فيها قرار هدم بذالك باصدارها الكثير من التلوث و الروائح الكريهة التى لا تطاق لذالك نطالب بالتدخل العاجل لتوقيفها عن العمل و هدمها بالكامل لانسه ليس من اللائق وجودها فى منطقة سكنية,",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r013",
    "municipality": "الشيحية",
    "location": "طريق القايد محمد شارع الطبلبي",
    "description": "إصلاح شركة توزيع المياه لعطب في خرطوم توزيع المياه وتركه على عراء و علو على الطريق ب 50سم مما يشكل خطر على مستعملي الطريق و إمكانية حدوث حوادث قاتلة لقدر الله ويجب التدخل السريع والسريع جدا لمعالجة وإزالة الخطر",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تمت معاينة تسرب المياه بشارع الطبلبي ألحق ضررا بالمعبد ويمثل خطر على مستعملي الطريق وسيتم التنسيق مع مصالح السوناد لاصلاح التسرب في مرحلة أولى ثم ارجاع المعبد إلى الحالة التي كان عليها",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r014",
    "municipality": "الشيحية",
    "location": "طريق تنيور كم 5,5 شارع أحمد التليلي",
    "description": "أمام منديلي مباشرة قطعة ارض علي ملك الجار مهمش اصبح مصب لالزبلة وتراكم بالحشرات السامة اصبح نقمة علي الجيران",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "سيتم التنبيه على صاحبها ودعوته لتركيب باب لحماية أرضه والقضاء نهائيا على هذه النقطة السوداء",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r015",
    "municipality": "الشيحية",
    "location": "تنيور كم 9.5 زنقة بوصلاعة نهج 9600 منطقة توسع",
    "description": "قامة معمل موبيليا و نجارة في وسط منطقة سكنية و الاستلاء على ارض الجيران لالقاء فضلات المعمل و تكديس اللوح ادى الى قدوم الحشرات السامة الى منازلنا مع كثرة الضجيج المتواصل دون مراعات الجيران",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r016",
    "municipality": "العوابد الخزانات",
    "location": "طريق المطار كلم 7 ثنية ڨبرج",
    "description": "مصبات عشوائية و جميع انواع الفواضل",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "تم رفع حوالي 68 طن من الفضلات بتاريخ 03 أفريل 2026",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r017",
    "municipality": "العوابد الخزانات",
    "location": "في اخر زنقة الي حذا جامع اليسر",
    "description": "في اخر الزنقة الي تعدي لزنقة الفارس فما زبلة حذا الحالية وبارشا زبلة اللوطا و علي طول الزنقة الي موش مكيسة",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r018",
    "municipality": "العوابد الخزانات",
    "location": "بجانب مقر دار الشباب الخزانات",
    "description": "تراكم فضلات بصفة يومية مع أعمال حرق تقريبا دورية, إفرازات وروائح كريهة مع دخان متواصل أثار انزعاج متواصل من المتساكنين واهالي الجهة و الوافدين على المؤسسة من شباب مواطنين واطارات",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r019",
    "municipality": "العوابد الخزانات",
    "location": "طريق المطار كم 7.5 حي الرياض",
    "description": "نفس رائحة حرق الفضلات في الشكاية الفارطة وواجب الجهات المختصة تحري هذا الاخلال رائحة لا تطاق لا يمكنني كمواطن الخروج ليلا لتحري المكان",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r020",
    "municipality": "العين",
    "location": "شارع فلسطين",
    "description": "مياه الامطار  صعوبة المرور أثر نزول الامطار",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r021",
    "municipality": "العين",
    "location": "نهج أنقرة الكائن بطريق العين كلم 8.5 أمام المركب الترفيهي GOLDEN PARK",
    "description": "نحن الممضون أسفله ، متساكنو نهج أنقرة (مدخل الشعري) الكائن بطريق العين كلم 8.5 أمام المركب الترفيهي GOLDEN PARK، نتقدم إلى سيادتكم بهذا المطلب قصد التدخل العاجل لإزالة الطابية المتواجدة في بداية النهج (على الطريق العام) و التي أصبحت تشكل وكرا للحشرات السامة ومصبا للفضلات ، حيث انها خطر على متساكني النهج و خاصة الأطفال ، كما انها تشوه جمالية الطريق العام و تعطي صورة سلبية على النظافة بطريق العين كلم 8.5 . تجدون صحبة هذا بعض الصور للتوضيح، إضافة الى صورة لمطالب تقدم بهم المتساكنون بتاريخ 04 جوان 2025 و لكن مازلنا في انتظار تدخلكم الى حد هذه اللحظة.",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "ورد على البلدية شكوى من متساكني نهج أنقرة بشأن وجود طابية  وقد تمت إحالة الشكاية إلى الشرطة البلدية بالعين",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r022",
    "municipality": "العين",
    "location": "طريق العين كلم 8,5 ، نهج أنقرة منطقة",
    "description": "مطلب تدخل عاجل لتنظيف نقطة سوداء على الطريق الرئيسي في بداية نهج أنقرة الكائن بطريق العين كلم 8,5 . وحيث أن هذه النقطة قد تحولت إلى وكر للحشرات السامة ومصب للفضلات وأعواد الزبيرة، فإنها أصبحت تمثل خطراً حقيقياً على سلامة المتساكنين، خاصة الأطفال، كما تتسبب في تشويه جمالية الطريق العام وتعكس صورة سلبية عن مستوى النظافة بالمنطقة.",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r023",
    "municipality": "العين",
    "location": "قصاص 20 مارس نهج جدة طريق العين شارع البيئة صفاقس",
    "description": "شكرا على المجهود إلي تقوموا بيه لكن بالله لفت شويه على الانهج وبالأخص الشوارع الضيقة أو الانهج المتفرعة (الزنق) البعيدة 6و7 كلم من البلاد راهم في حالة يرثى لها (عندي مثال وبالصور )وبالأخص بعد الأمطار الأخيرة وكذالك بدون انارة قصاص 20 مارس نهج جدة طريق العين شارع البيئة. شكرا",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r024",
    "municipality": "العين",
    "location": "شارع الشهداء قاصة واد الشعبوني كلم 4 القصاص العين بجانب محل الميكانيكي أمين بوتوتة",
    "description": "حيث تم استبدال فوانيس الانارة العادية للطريق العام بفوانيس جديدة بيضاء اللون اقتصادية وحيث تفطنا الى ان احد الفوانيس لا يعمل وهو الفانوس رقم 7 الذي يسبق محل الميكانيكي أمين بوتوتة مباشرة ، ولا نعرف سبب العطب هل من الفانوس أو من العمود الذي يحتويه ، وحيث ترتب عن عدم توفير الانارة على وقوع حادثين مرور متزامنين في نفس الوقت في الأسبوع الماضي ومن الطاف الله لم تكن هناك خسائر بشرية وانما خساىر مادية فادحة ، اذا الرجاء التدخل السريع والعمل على اصلاح الانارة بالفانوس المذكور",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r025",
    "municipality": "النصر",
    "location": "الغرابة على طريق الرئيسي طريق تونس",
    "description": "مشكلة الإضاءة على الطريق الرئيسي التي لا تشتغل انطلاقا من مخبزة الغرابة إلى بعد الجامع أكثر من 1 كيلومتر بدون إضاءة منذ أكثر من 15 يوم ، تتطلب تدخلا عاجلا",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "تم تشخيص العطب وهو عطب قديم مرتبط بتسرب مياه الامطار في الشبكة الارضية مما يستوجب أشغال إعادة الاسلاك و  سيقع التدخل الأسبوع القادم بعد يوم 7 أفريل تاريخ فتح استشارة على منظمة tuneps لاختيار مقاول الصيانة",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r026",
    "municipality": "النصر",
    "location": "غلب الشوارع الداخلية من مخبزة الغرابة إلى مركز الحرس الوطني\nالخطورة: عالية",
    "description": "تعاني أغلب الشوارع الداخلية للمنطقة انطلاقا من المخبزة إلى مركز الحرس الوطني من كثير \"الحفر\" و طريق مهترئة جدا و بنية تحتية ضعيفة صراحة تتطلب تدخلا عاجلا ، على الأقل القيام بالشارع بالشارع نظرا لأن العملية تتطلب و تأخذ وقتا و مالا و عديد الإجراءات ، ارجو منكم التدخل و شكرا",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "تم إعادة تهيئة الطريق الرابطة بين المخبزة و مركز الحرس الوطني بالغرابة (طريق سيدي محمد بن عمر) في نوفمبر 2024 و يمكن المقصود من البلاغ عدم إعادة تصليح عطب من قبل الشركة الوطنية لاستغلال و توزيع المياه على عرض الطريق و تم إعلام العديد من المرات الشركة بإصلاح مكان الأشغال",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r027",
    "municipality": "النصر",
    "location": "الغرابة على طريق الرئيسي طريق تونس",
    "description": "شكلة الإضاءة على الطريق الرئيسي التي لا تشتغل انطلاقا من مخبزة الغرابة إلى بعد الجامع أكثر من 1 كيلومتر بدون إضاءة منذ أكثر من 15 يوم ، تتطلب تدخلا عاجلا",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "تم تشخيص العطب وهو عطب قديم مرتبط بتسرب مياه الامطار في الشبكة الارضية مما يستوجب أشغال إعادة الاسلاك و  سيقع التدخل الأسبوع القادم بعد يوم 7 أفريل تاريخ فتح استشارة على منظمة tuneps لاختيار مقاول الصيانة",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r028",
    "municipality": "النصر",
    "location": "حانوت الطايع ماجل الدرج",
    "description": "نقطة سوداء",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "بلاغ تابع لبلدية النور بمعتمدية منزل شاكر",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r029",
    "municipality": "النصر",
    "location": "المفترق الدائري دخان على الطريق الرئيسي",
    "description": "نعدام الإضاءة في المكان رغم وجود شبكة تنوير لكن لا تشتغل منذ سنوات ، مع العلم أنه مدخل حيوي جدا و يتطلب تدخلا عاجلا ، نظرا لحدوث 4 حوادث مرورية منذ صيف 2025",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r030",
    "municipality": "النصر",
    "location": "من أمام مقهى جلال إلى حدود واد الاخضري",
    "description": "ضافة شبكة تنوير ضروري نظرا لوجود مصانع كثيرة على الطريق الرئيسي و إنعدام الإضاءة و كثرة الحوادث المرورية",
    "severity": "منخفضة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r031",
    "municipality": "النور",
    "location": "مدرسة ماجل الدرج",
    "description": "مجموعة اوراق واعشاب كثيرة قد تسبب حراءق",
    "severity": "متوسطة",
    "status": "resolved",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r032",
    "municipality": "النور",
    "location": "ماجل الدرج حانوت الطايع",
    "description": "نقطة سوداء",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r033",
    "municipality": "النور",
    "location": "مدرسة ماجل الدرج",
    "description": "حالة الملعب الرياضي اعشاب  واوساخ تسبب في حراءق مع العلم اتصلت عديد المرات بالكاتب العام ووعدني بتنظيف والى هذا اليوم لا جديد",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r034",
    "municipality": "النور",
    "location": "حانوت الطايع ماجل الدرج",
    "description": "نقطة سوداء",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r035",
    "municipality": "بئر علي بنخليفة",
    "location": "عمادة سديرات الجنوبية منطقة السوينية بقرب من جامع السوينية",
    "description": "منطقة سكانية و راحة غير مقبولة بقرب من سكان و طريق الرباط بين بئرعلى و الغريبة",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "سيتم برمجة حملة نظافة نظرا لبعد المسافة وعدم توفر قطعة أرض قريبة  لتجميع النفايات",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r036",
    "municipality": "جبنيانة",
    "location": "طريق أولاد حمد",
    "description": "كدس للفضلات حيث أصبح يحجب الرؤية",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "تم التدخل لإزالة المخالفة بتاريخ 08 جانفي 2026 وستتعهد البلدية بإتمام التدخل بتاريخ يوم 08 أفريل 2026",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r037",
    "municipality": "جبنيانة",
    "location": "طريق أولاد حمد",
    "description": "تكدس فضلات",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "تم التدخل لإزالة المخالفة بتاريخ 08 جانفي 2026 وتعهدت البلدية بإتمام التدخل بتاريخ يوم 08 أفريل 2026 كما وقع التدخل اليوم الثلاثاء الموافق ل2026/04/14 مرفوق بصور وسيقع  مواصلة التدخل بتاريخ 15و16افريل 2026",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r038",
    "municipality": "ساقية الدائر",
    "location": "طريق المهدية كم 4 مركز كعنيش",
    "description": "حالة كارثية في الزنقة، لكلها حفر، كراهبنا تفلقت، كتصب المطر، معادش نعرفو وين الحفرة الكبيرة و الصغيرة، الرجاء تعبيدها في اقرب وقت، على الأقل ينقص دعاء شر على المسؤولين المهملين لخدمتنا",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تابع بلدية صفاقس",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r039",
    "municipality": "ساقية الدائر",
    "location": "طريق المهدية زنقة كعنيش كلم 4",
    "description": "حالة الزنقة كارثية سكان زنقة كعنيش مطلبهم تعبيد الكياس في اقرب وقت",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تابع بلدية صفاقس",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r040",
    "municipality": "ساقية الدائر",
    "location": "ساقية الدائر قصاص بو علي",
    "description": "ارجو منكم ارجاع الحاويات التي كانة  بجانب مغازة عزيزة وشكرا لكم المكان قصاص بو على ساقية الدائر",
    "severity": "منخفضة",
    "status": "resolved",
    "municipality_answer": "تم إرجاع الحاويات مع العلم أنه تم رفعها في السابق بسبب خلاف متواصل بين الأجوار على مكان تركيزها و عدم رغبة اغلب المحلات في وجودها",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r041",
    "municipality": "ساقية الدائر",
    "location": "قصاص بوعلي وراء مقهى وجدي",
    "description": "طلب تدخل عاجل لتنظيف قطعة أرض مهجورة وإلزام مالكها بتسويرها",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تنظيف الأرض مع دعوتنا للمواطن المبلغ مساعدة البلدية في التعرف على المالك الحقيقي و عنوانه قصد اتخاذ إجراءات قانونية ضده لمعالجة الوضعية بصفة جذرية",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r042",
    "municipality": "ساقية الدائر",
    "location": "طريق المهدية كلم 4 مركز كعنيش",
    "description": "المطلوب تعبيد زنقة كعنيش، الحالة فيها كارثية، كراهبنا تفلقت من الحفر الموجودة، كتصب مطر معادش نعرفو من الحفرة الصغيرة و الكبيرة:",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تابع بلدية صفاقس",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r043",
    "municipality": "ساقية الدائر",
    "location": "طريق السلطنية كلم 6 نهج ابن سينا بالقرب من المدرسة الاعدادية بالسلطنية (زنقة صالة الحبيب الطرابلسي)",
    "description": "وجود قصب وحشيش وفضلات منزلية ومصب لجميع انواع الفضلات ردم وفواضل الزبيرة",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "ستتم المعاينة والتدخل في الابان",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r044",
    "municipality": "ساقية الدائر",
    "location": "طريق السلطنية كلم 6 زنقة اللجمي",
    "description": "بقايا حرق عشوائي على الأرض مع رماد وآثار نار.   تراكم نفايات منزلية وبلاستيكية وأوراق متناثرة بشكل غير منظم.   رمي فروع وأغصان أشجار مقطوعة بجانب الحائط وعلى الرصيف.   مظهر عام غير نظيف يضر بالبيئة والصحة العامة ويشوّه صورة الحي.  هذه الوضعية تمثل خطراً بيئياً وصحياً على السكان، خاصة مع إمكانية انتشار الروائح الكريهة والحشرات، إضافة إلى خطر إعادة إشعال النار. نرجو التدخل العاجل لرفع الفضلات، تنظيف المكان، ومنع تكرار الحرق العشوائي أو الإلقاء غير القانوني للنفايات.",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "ستتم المعاينة والتدخل في الابان",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r045",
    "municipality": "ساقية الدائر",
    "location": "طريق السلطانية كم ١١",
    "description": "Les déchets des entreprises sont jetés au bord de la route juste après l'école de saa3di entre route saltnia et sidi mansour  Tous les déchets des zones industrielles.  Zanga ili m9abla café chark  tri9 saltnia km 11 tous les déchets des entreprises sont devant les maisons",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "ستتم المعاينة والتدخل في الابان",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r046",
    "municipality": "ساقية الدائر",
    "location": "المنصورة طريق سيدي منصور كم 10",
    "description": "عدم رفع الفظلات داخل الانهج",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تابع بلدية صفاقس",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r047",
    "municipality": "ساقية الدائر",
    "location": "زنقة شرف الدين كلم 8",
    "description": "غياب كلي  لرفع الفضلات  ومتكرر.  ولايوجد طريق معبد",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r048",
    "municipality": "ساقية الدائر",
    "location": "طريق المهدية مركز كعنيش زنقة الباشا",
    "description": "صبات عشوائية للفضلات و اراضي أصبحت مصبات للفضلات و مكان لتكاثر البعوض و مرتع للكلاب السائبة",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r049",
    "municipality": "ساقية الدائر",
    "location": "كم 6 الترقيم الجديد حي مللاك",
    "description": "فضلات و طريق غير معبد ..و كلاب ساءبىة تشكل خطورة على الأطفال الصغار ....و نقص في الإنارة",
    "severity": "منخفضة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r050",
    "municipality": "ساقية الدائر",
    "location": "AVENUE SIDI OTHMAN/CITÉ ELONS BOUJELBEN / SALTANIA KM 4.5/NUM (Boujelben)",
    "description": "Terrain abandonné non clôturé. Trop d’ordures et de mauvaises herbes. Source de moustiques, serpents, de chiens et de chats errants. Les déchets bloquent une partie de la ruelle et j’ai du mal à sortir de ma maison située en face.",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r051",
    "municipality": "ساقية الدائر",
    "location": "وادي الزيادي من الجهة اليسرى في إتجاه ساقية الزيت",
    "description": "لكثير من الردم بجانب حاجز الوادي مما يسبب في تعطيل حركة السير للعربات وتضيق الممر خوفا من الإصطدام. كثير من الحفر التي تأدي إلى خلل في السيارات على كامل الطريق",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r052",
    "municipality": "ساقية الدائر",
    "location": "طريق المهدية كلم 5.5 نهج خيرية ساقية الدائر",
    "description": "ابية + تطهير منعدم + أوساخ + عقارب و حناش. + مياه راكدة + استغلال غير شرعي للطريق",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r053",
    "municipality": "ساقية الزيت",
    "location": "واد القراوة،شارع فلسطين بجانب غرفة كهربائية تابعة للشركة التونسية للكهرباء والغاز (STEG) و  عمود الاتصالات",
    "description": "مصب عشوائي به اطنان من الفضلات لم يقع تنظيفه من مدة طويلة  و أصبح خطر على المتساكنين",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r054",
    "municipality": "صفاقس",
    "location": "كعنيش صفاقس",
    "description": "إنقطاع إنجاز الأشغال من 4 سنوات حالة الطريق كارثية",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r055",
    "municipality": "صفاقس",
    "location": "طريق تنوير كم  2,5",
    "description": "كلاب سائبة تخوف و تجري وراء الأطفال لا يوجد حاوية للنفايات بالرغم من عمل عشرات المطالب يوجد رجل مريض ذهنيا اسمه حمدي يخوف الأطفال و يفتح كل الزبل",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تنظيم حملة قنص  بتاريخ 03 أفريل 2026 كما تم إضافة عدد 02 حاويات جديدة بتاريخ 07/04/2026",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r056",
    "municipality": "صفاقس",
    "location": "شارع خالد بن الوليد خلف مدرسة خالد بن الوليد مركز بوعصيدة",
    "description": "قمامة مختلفة مع بقايا زبيرة لأشجار",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تنظيف المكان ورفع مختلف الفضلات",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r057",
    "municipality": "صفاقس",
    "location": "زنقة تقتق أمام دار الشباب",
    "description": "اشجار نخخيل تحجب الرؤيا واكداس من الفظلات",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "الانطلاق في زبيرة أشجار النخيل",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r058",
    "municipality": "صفاقس",
    "location": "طريق العين كان 1قصاص المراكشي في اتجاه مركز شاكر أول زتقة على اليسار*جنان المراكشي",
    "description": "جنان مهمل منذ سنوات اصبح مرتع الكلاب الساءبة واشياء اخرى تقدمت الاجوار بعدة شكايات لتنظيفه",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تنظيم حملة بتاريخ 03 أفريل 2026",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r059",
    "municipality": "صفاقس",
    "location": "حزام برقيبة من السلطنية في اتجاه المهدية .الطريق الموازي لحزام برقيبة",
    "description": "قايا فضلات و نخلتين او اكثر  وفضلات بناء بجانب الغمقي لمواد البناء في بداية الطريق الموازي لحزام برقيبة على اساس باش تكون منطقة خضراء",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تنظيم حملة بتاريخ 03 أفريل 2026",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r060",
    "municipality": "صفاقس",
    "location": "طريق المهدية كلم 4 مركز كعنيش زنقة كعنيش صفاقس",
    "description": "الانقطاع عن تعبيد الطريق ما يقارب اربع سنوات مما سبب اضرار جسيمة على المواطنين,",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r061",
    "municipality": "صفاقس",
    "location": "حي البحري 1",
    "description": "نفايات متراكمة لمدة سنين",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "الرجاء تحديد الموقع",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r062",
    "municipality": "صفاقس",
    "location": "طريق المطار لكم 6زنقة الشعرى",
    "description": "هناك تراكمات عديدة من الفضلات منبثرة فى بعض الاراضى مما تسبب فى مناضر غير لائقة و مهينة بالبيئة و بالمنطقة السكنية و هناك المشكلة الأعظم لدينا كا منطقة سكنية وهى وجود مدجنة بصدد العمل رغم وجود فيها قرار هدم بذالك باصدارها الكثير من التلوث و الروائح الكريهة التى لا تطاق لذالك نطالب بالتدخل العاجل لتوقيفها عن العمل و هدمها بالكامل لانسه ليس من اللائق وجودها فى منطقة سكنية",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "مرجع نظر بلدية الحاجب",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r063",
    "municipality": "صفاقس",
    "location": "نهج كعنيش طريق المهدية كلم 4 ، ممرّ  12 ، جنان الفقيه بين نهج كعنيش  و  زنقة المكوّر",
    "description": "أرض سائبة و غير مسيّجة  أصبحت فضاء للكلاب السائبة ، و طابية  مهملة أصبحت مصبّ للزبلة و الفضلات.",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تنظيم حملة لقنص الكلاب  بتاريخ 10 أفريل 2026  كما تم تنظيف قطعة  أرض بنهج كعنيش طريق المهدية كلم 4 ، ممرّ  12 ، جنان الفقيه بين نهج كعنيش  و  زنقة المكوّر",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r064",
    "municipality": "صفاقس",
    "location": "طريق العين كم٢ زنقة المصحة",
    "description": "فضلات منزلية متراكمة على حافة الطريق تعيق مرور المترجلين و السيارات",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r065",
    "municipality": "صفاقس",
    "location": "زنقة تقتق أمام دار الشباب",
    "description": "اشجار نخخيل تحجب الرؤيا واكداس من الفظلات",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "الانطلاق في زبيرة أشجار النخيل تم تتنظيف المكان ورفع مختلف الفضلات",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r066",
    "municipality": "صفاقس",
    "location": "طريق المطار على حافة وادي عقارب",
    "description": "تراكم الفضلات في الأرض البيضاء قبل ولوج القنطرة كلم 5,5 طريق المطار على اليمين في الاتجاه إلى المطار",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "أرض على ملك  الشركة الجهوية للنقل بصفاقس",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r067",
    "municipality": "صفاقس",
    "location": "قرب مقهى القلعة و مدرسة بغداد",
    "description": "محيط مدرسة بغداد تنقصه النظاقة و محيط مقهى القلعة و الحدائق حيث تلقى فضلات الفحم و الشيشة و فضلات محلات بيع électroménager",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تتنظيف المكان ورفع مختلف الفضلات",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r068",
    "municipality": "صفاقس",
    "location": "طريق العين كم ٢ زنقة مصحة العالية بجانب مطبعة العربية",
    "description": "تكدس فضلات منزلية و أغصان أشجار",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم تتنظيف المكان ورفع مختلف الفضلات",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r069",
    "municipality": "صفاقس",
    "location": "طريق حبانة كلم 5 على مستوى حزام بورڨيبة",
    "description": "قطعة أرض على ملك خواص ( جماعة المزغني) مهملة وأصبحت مصبا للفضلات ومواد البناء وقد سبق إعلام البلدية عديد المرات بهذا الإشكال دون أن تتدخل إلى حد الآن...الأرض أصبحت مأوى للقوارض من فئران وثعابين ووشواشة في فصل الصيف",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "في انتظار استصدار قرار أشغال وجوبية ( ملك خواص)",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r070",
    "municipality": "صفاقس",
    "location": "نهج محمد بقلوطي",
    "description": "الرجاء التعبيد و تسريح البالوعات",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "نهج محمد البقلوطي ضمن برنامج تهيئة المجمع الصناعي بودريار",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r071",
    "municipality": "صفاقس",
    "location": "طريق المطار كلم4 حي النزهة (زنقة بوعواجة سابقا)",
    "description": "أرض بيضاء على ملك طبيب لقبه النوري وأعتقد اسمه مالك أضحت مصبا للنفايات وتكاثرت بها أشجار شوكية وباتت مصدرا للثعابين والحشرات ومأوى للكلاب المتشردة وملاذا لتلاميذ منحرفين ومصدر إزعاج للمتساكنين والبلدية والولاية والمعتمدية على علم بها ولكن التدخل كان جزئيا ودون المطلوب",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "في انتظار استصدار قرار أشغال وجوبية ( ملك خواص)",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r072",
    "municipality": "صفاقس",
    "location": "طريق الافران كلم 3.5...قبل مركب محسونة على اليسار بجانب محطة الحافلات",
    "description": "صيف عرضه 3 امتار لا يمكن المرور فيه بحكم انه ملئي بالاوساخ و التربة و الحشيش يتطلب تدخل دوري ( مرة كل نصف شهر ) حتى لا يضطر المترجل للنزول للمعبد",
    "severity": "متوسطة",
    "status": "resolved",
    "municipality_answer": "تم تتنظيف المكان ورفع مختلف الفضلات",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r073",
    "municipality": "صفاقس",
    "location": "طريق مطار كم2.5 امام مقهى سليم جدي و مدرسة مراكشي 2",
    "description": "قطة سوداء تتمثل في انارة ليلا تحت القنطرة الطريق الفرعي المؤدي الطريق منزل شاكر تركيز مطبات مخفضة السرعة امام مقهى سليم و مدرسة مراكشي 2 لتهور الساىقين في السرعة",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "منطقة التدخل من مشمولات التجهيز وتم إعلامهم عن طريق فاكس",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r074",
    "municipality": "صفاقس",
    "location": "Route sidi Mansour KLM 10 afh",
    "description": "Fuite de la part de sonde on a déclaré depuis 3 mars",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "الرجاء تحديد الموقع",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r075",
    "municipality": "صفاقس",
    "location": "طريق العين كلم0.5 مستشفى هادئ شاك",
    "description": "كنس حواشي مادة امام مستشفى و الطريق محاذية رفع فضلات من امام المفترق تقليم اشجار كنس اتربة على رصيف امام مستشفى الى غاية مفترق داىري 14 جانفي  الانتصاب فوضوي امام مستشفى و القاء باعة فضلات امام مستشفى كذلك من باب الامامي قسم ولادات رفع انتصاب فوضوي",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم برمجة حملة نظافة بطريق العين",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r076",
    "municipality": "صفاقس",
    "location": "طريق المطار كلم 4.5 حي الأمل نهج بن حليمة",
    "description": "تعبيد الطريق حتى اليوم لا يمكن المرور به و خاصتا عند المطر",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r077",
    "municipality": "صفاقس",
    "location": "شارع البئة طريق قابس جنان كمون 2كم",
    "description": "راكم الفضلات الصناعية وتم احراقها بصف. دورية من قبل مجهولين غياب تام اي مرافق للمواطن (تنوير. تعبيد .صرف صحي )مما يادي صعوبة التنقل للتلاميذ والسيارات خاصة عند تساقط الامطار و تجمع المياه  مع العلم زنقة جنان كمون لا تتجاوز 300 م طول  اضاءة ليلية منعدمة للطريق شارع البئة المحاذي للطريق قابس الرجاء الاستجابة و قدوم لزيارة ميدانية",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "في انتظار استصدار قرار أشغال وجوبية ( ملك خواص)",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r078",
    "municipality": "صفاقس",
    "location": "طريق سيدي منصور كم ١٠ AFH",
    "description": "هي منطقة خضراء لكن للأسف أصبحت مصب عشوائي،  ارجو التدخل السريع لأنها أصبحت مرتعا الحشرات السامة",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r079",
    "municipality": "قرقنة",
    "location": "العباسية قرقنة / البرابشة",
    "description": "انتشار الأمراض المعدية مثل التسممات الغذائية، الالتهابات المعوية، والتهابات الكبد الفيروسي، نتيجة وجود البكتيريا، الفيروسات والطفيليات المعوية في المياه العادمة. تلوث المزروعات والخضروات، ما يهدد المستهلك النهائي ويعرض الأطفال والنساء بشكل خاص للخطر. تعريض العمال والأعوان الذين يتعاملون مع هذه المياه لخطر الإصابة المباشرة بالأمراض. تدهور خصوبة التربة الزراعية نتيجة تراكم الجراثيم والمعادن الثقيلة والمواد العضوية الضارة. تلوث المياه الجوفية والآبار القريبة، ما يعرض مياه الشرب للسموم والملوثات البيولوجية. انبعاث روائح كريهة، وتكاثر الحشرات والبعوض، ما يزيد من انتشار الأمراض. انخفاض قيمة الأراضي الزراعية والعقارات المجاورة للمناطق المصروفة فيها المياه العادمة. فقدان الثقة وتهديد النشاط الفلاحي في الجزيرة. إحباط المجتمع المحلي وخلق شعور بالإهمال من قبل الجهات المعنية. نقل جميع المياه العادمة البشرية مباشرة إلى محطة المعالجة وعدم تصريفها في الأراضي الزراعية أو قرب المنازل. مراقبة شاحنات البلدية والتأكد من التزامها بالقوانين الصحية والبيئية. توفير حلول مستدامة للمواطنين غير المرتبطين بشبكة التطهير، بما يضمن سلامة المجتمع والبيئة. الخلاصة: إن استمرار هذا التصرف يشكل تهديدًا مباشراً للصحة العامة، للبيئة، ولثقة المواطنين في السلطات المحلية. هناك حاجة عاجلة لتدخل وزارة البيئة ووزارة الداخلية، وتفعيل الرقابة على مستوى البلدية والجهة، لضمان الالتزام بالقوانين وحماية المواطنين",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "الموضوع المطروح يتضمن معطيات غير دقيقة حيث أن المصب موضوع العريضة قديم العهد و تستغلها البلدية لتصريف المياه المستعملة لعدم توفر بديل في الوقت الحالي و تعمل البلدية بالتنسيق مع الديوان الوطني للتطهير لوضع خطة عمل لقبول المياه المجمعة عبر شاحنة البلدية بمحطة التطهير",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r080",
    "municipality": "قرقنة",
    "location": "العباسية",
    "description": "هذا البلافدغ هو بلاغ رسمي لمن يهمه الامر مرفق بفيديو يثبته . حيث تم رصد تصرف خطير و غير قانوني يتمثل في صب المياه العادمة البشرية (مياه المراحيض) و تفريغها مباشرة في اراضي بيضاء و بالقرب من مساكن المواطنين بمنطقة العباسية قرقنة و على بعد 500متر من مساكن المواطنين رغم وجود محطة خاصة بمعالجة المياه الميدستعملة مجهزة بجزر قرقنة . هذا التجاوز يعاقب  القانون من قام به و من تستر عنه.. لهذا نرجو من جنابكم التدخل العاجل و الحاسم",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "الموضوع المطروح يتضمن معطيات غير دقيقة حيث أن المصب موضوع العريضة قديم العهد و تستغلها البلدية لتصريف المياه المستعملة لعدم توفر بديل في الوقت الحالي و تعمل البلدية بالتنسيق مع الديوان الوطني للتطهير لوضع خطة عمل لقبول المياه المجمعة عبر شاحنة البلدية بمحطة التطهير",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r081",
    "municipality": "قرقنة",
    "location": "سبخة اولاد بوعلي قرقنة",
    "description": "وضع كميات كبيرة من الردم بقايا البناء والفضلات",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r082",
    "municipality": "قرقنة",
    "location": "أولاديانق",
    "description": "مصب فخلفات اشجار و حدائق وكر للجرذان و الثعابين و الفئران",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r083",
    "municipality": "قرقنة",
    "location": "بجانب منزل نافع زليلة",
    "description": "مجهولون يرمون ببقايا الاشجار و مخلفات حدائقهم بجانب منزلي في ارض بيضاء مالكها يقطن خارج المنطقة تتراكم الاوساخ و يختبئ فيه فئران و جرذان و فيه ايضا ثعابين",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r084",
    "municipality": "طينة",
    "location": "القصاص بين طريق المحارزة وطريق سيدي عبيد على مستوى وادي المعو",
    "description": "كمية كبيرة من فضلات المنازل  وفضلات الحيوانات ( متاتية من تربية الخرفان) واشعال حرائق تتسبب في الاختناق",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "يتم التدخل بصفة دورية باستعمال تراكتوبال و عدد 2 شاحنات",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r085",
    "municipality": "طينة",
    "location": "زنقة ميلاد",
    "description": "عدم وجود شبكة صرف صحي من بداية زنقة في 2026  الى ان وقفت الاشغال خطر بكل المقاييس على الابنية مازلنا 2026 بالبالوعات هل يعقل ارجوك التدخل العاجل ومدخل الزنقة كلو حفر يتصلح من هون أقل مطرة يرجع",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "بالنسبة لزنقة ميلاد حسب إفادة الديوان الوطني للتطهير تم برمجتها ضمن الجيل السادس الذي سينجز خلال سنة 2027 .                     البلدية في طور اعداد استشارة للصيانة المحدودة  لترقيع الحفر بكامل المنطقة البلدية",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r086",
    "municipality": "طينة",
    "location": "زنقة النوتة",
    "description": "حفر متوسطة العمق  بالجملة منذ اكثر من 10 سنوات ، عدم توفر حاويات للنفايات ، وجود مصب لي النفايات بجانب السكة الحديدية ، كلاب سائبة بالجملة",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "البلدية بصدد اعداد استشارة للصيانة المحدودة لترقيع الحفر بكامل المنطقة البلدية  ، الحاويات موجودة و سوف يتم العمل على تدعيمها بحاويات اضافية خلال سنة 2026 . البلدية تقوم بحملات دورية للنظافة في محيط السكة الحديدية ، يتم التنسيق مع فرقة الحرس البلدي لتكثيف حملات ابادة الكلاب السائبة",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r087",
    "municipality": "طينة",
    "location": "طريق قابس",
    "description": "من تقريبا طريق قابس كلم 7 الى طريق قابس كلم 1 , انعدام تام لحاويات النفايات ، و من ثم يتم تحميل المسؤلية كاملة على عاتق المواطن, جود شرخ على كامل الطريق في اتجاه المستشفى العسكري بصفاقس بجانب المنتزه الحضري سابقا",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "من كلم 1 الى كلم 5  يرجع بالنظر الى بلدية صفاقس و من كلم 5 الى كلم 14 فهو يرجع بالنظر لبلدية طينة و الحاويات موجودة و سوف يقع العمل على تدعيمها        و بالنسبة للشرخ الموجود بمعبد الطريق الرئيسية رقم 1 فهو من مشمولات الادارة الجهوية للتجهيز",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r088",
    "municipality": "طينة",
    "location": "طريق قابس كلم 7 حي المعز طينة صفاقس",
    "description": "نقطة سوداء شكلت وطالما تشكل خطرا على اهالي حي المعز وحي الامراء وهي تحت حائط الشقة التي اقطنها وتوليت رفع شكاية في الغرض الى السيدة المعتمدة بطينة والى الكاتب العام للبلدية الا ان التدخل لم يجدي نفعا فضلات متراكمة ترفع الان تتراكم في غضون سويعات روائح كريهة ، حشرات ، لدي عدد 2 ابناء يعانون من مشاكل صحية جراء هذا التلوث ومعاناة من لسعات الحشرات بسبب تراكمها على طوال اليوم منذ اكثر من 8 سنوات ونحن نعناي نفس المشكل الامر حقا لا يطاق وادي صور توثق المشهد المفزع للمكان الذي صار مصبا للفضلات دون حلول",
    "severity": "عالية",
    "status": "in_progress",
    "municipality_answer": "يتم التدخل بصفة دورية باستعمال تراكتوبال و شاحنة",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r089",
    "municipality": "طينة",
    "location": "طريق ڨابس كلم 9 قصاص الحاجب زنقة لولو",
    "description": "هي نقطة سوداء متواجدة على بعد 100 متر من الطريق العام على الرصيف أمام قطعة أرض مسيجة مكتوب على باب سياجها عبارة \"للبيع\". واقترح كحل بعد القيام بعملية الإزالة تركيز حاوية حديدية لتسهيل رفع الفضلات في هذا النهج",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r090",
    "municipality": "طينة",
    "location": "طريق ڨابس كلم 9 قصاص الحاجب زنقة لولو على بعد أقل من 100 متى على الطريق العام",
    "description": "هي نقطة سوداء موجودة على الرصيف أمام قطعة أرض بيضاء مسيجة مكتوب على باب سياجها \"للبيع\" و أقترح كحل لهذه الإشكالية تركيز حاوية حديدية في نفس المكان لتسهيل عملية رفع الفضلات",
    "severity": "متوسطة",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r091",
    "municipality": "عقارب",
    "location": "وراء ضريح الولي الصالح صيد عقارب(معلم مصنف ضمن التراث الوطني) و بقرب دار الشباب",
    "description": "وضعية كارثة جدا جدا جدا....كل اصناف النفايات المنزلية و فواضل البناء و فواضل الكنس ونفايات المحلات و المطاعم ومحلات ذبح الدواجن",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r092",
    "municipality": "عقارب",
    "location": "حي الخضراء بطحاء الجربان منزل قديم",
    "description": "منزل قديم مهجور على ملك امراة جعله المواطنين مصب النفيات المنزلية ويقومون بحرقها مما يسبب حالة من الاحتقان مشكورة بلدية عقارب دائما حريصة على تنظيفها لكن المواطنين يعودون الي صب الفضلات هناك لغياب اساليب الردع اولا المواطنين وحتى المرأة التي تركت منزلها بهاته الحالة فاصبحت مصبا",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r093",
    "municipality": "عقارب",
    "location": "شارع الحبيب بورقيبة و شارع الهادي شاكر و طريق منزل شاكر و شارع المغرب العربي و طريق المحروقة",
    "description": "الطرقات متسخة جدا و خاصة بالاتربة على حواشي الطرقات و تحت الارصفة من الجانبين و في وسطه",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r094",
    "municipality": "عقارب",
    "location": "جبانة السوالم",
    "description": "مصب نفايات منزلية و مواد بناء  في تعاظم مستمر بمحاذاة مقبرة ، منطقة فلاحية و سكنية",
    "severity": "عالية",
    "status": "pending",
    "municipality_answer": "",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r095",
    "municipality": "قرمدة",
    "location": "Route gremda, km 6, zankett Jaraya",
    "description": "Plusieurs points : Toute la zone est équipé par l'éclairage publique sans que nous le soyons Pas de déplacement d'un compteur d'eau pourtant promis par l'ancienne présidente de 'a municipalité Route impraticable et les flaques d'eau restent des semaines et des semaines impactant nos voitures et Habits Onas non disponible. Les zones de derrière sont très bien pris en charge, seulement notre zone qui reste sans aucun entretien ni pris en charge",
    "severity": "متوسطة",
    "status": "in_progress",
    "municipality_answer": "خصوص عداد الماء سيتم التنسيق مع الشركة الوطنية لإستغلال وتوزيع المياه والمالك قصد النظر في تحويله. خصوص تعبيد وتنوير النهج الفرعي سنقوم بالدراسات اللازمة والنظر في إمكانية الإنجاز",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r096",
    "municipality": "منزل شاكر",
    "location": "واد بوغرارة",
    "description": "نقطة سوداء",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم التدخل",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r097",
    "municipality": "منزل شاكر",
    "location": "مدخل بوغرارة الواد",
    "description": "نقطة سوداء",
    "severity": "عالية",
    "status": "resolved",
    "municipality_answer": "تم التدخل",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  },
  {
    "id": "r098",
    "municipality": "منزل شاكر",
    "location": "طريق منزل شاكر كلم1٫5حي الحرية",
    "description": "عبيد الطريق في حي الحرية لأن به حفرة مما يسبب ضررا لوساءل النقل",
    "severity": "متوسطة",
    "status": "resolved",
    "municipality_answer": "منطقة تتبع بلدية صفاقس",
    "name": "—",
    "phone": null,
    "lat": null,
    "lng": null,
    "created_at": null
  }
];

let _allReports = [];

async function loadReports() {
  const btnWrap = document.getElementById('munReportButtons');
  if (btnWrap) btnWrap.innerHTML = '<div class="spinner"></div>';

  ['cnt-pending','cnt-inprogress','cnt-resolved'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = el.textContent.replace(/\d+/, '—');
  });

  // Charger les données statiques du fichier Excel
  _allReports = REPORTS_DATA;
  renderReportStats();
  renderDeclStats();
}

function renderReportStats() {
  const pending    = _allReports.filter(r => r.status === 'pending').length;
  const inProgress = _allReports.filter(r => r.status === 'in_progress').length;
  const resolved   = _allReports.filter(r => r.status === 'resolved').length;

  const cntP = document.getElementById('cnt-pending');
  const cntI = document.getElementById('cnt-inprogress');
  const cntR = document.getElementById('cnt-resolved');
  if (cntP) cntP.textContent = `⏳ ${pending} انتظار`;
  if (cntI) cntI.textContent = `🔧 ${inProgress} معالجة`;
  if (cntR) cntR.textContent = `✅ ${resolved} حُلّت`;

  // Boutons par municipalité
  const btnWrap = document.getElementById('munReportButtons');
  if (!btnWrap) return;

  // Build counts per municipality - only show those with reports
  const byMun = {};
  _allReports.forEach(r => {
    if (!byMun[r.municipality]) byMun[r.municipality] = { p:0, i:0, r:0 };
    if (r.status === 'pending')     byMun[r.municipality].p++;
    if (r.status === 'in_progress') byMun[r.municipality].i++;
    if (r.status === 'resolved')    byMun[r.municipality].r++;
  });

  // Only municipalities with at least 1 report, sorted by total descending
  const munsWithReports = Object.keys(byMun)
    .filter(m => (byMun[m].p + byMun[m].i + byMun[m].r) > 0)
    .sort((a, b) => (byMun[b].p + byMun[b].i + byMun[b].r) - (byMun[a].p + byMun[a].i + byMun[a].r));

  if (!munsWithReports.length) {
    btnWrap.innerHTML = '<div class="empty-state"><span>📭</span>لا توجد بلاغات مسجّلة</div>';
    return;
  }

  const allMunsList = getUniqueMuns();
  btnWrap.innerHTML = munsWithReports.map(m => {
    const colorIdx = allMunsList.indexOf(m);
    const [c1] = MUN_COLORS[(colorIdx >= 0 ? colorIdx : 0) % MUN_COLORS.length];
    const s   = byMun[m];
    const tot = s.p + s.i + s.r;
    return `
    <button class="mun-report-stat-btn" style="--mc:${c1}" onclick="openMunReportsPopup(${JSON.stringify(m)})">
      <img src="${getMunLogo(m)}" alt="${m}" class="mrb-logo" onerror="this.style.display='none'">
      <div class="mrb-name">${m}</div>
      <div class="mrb-total">${tot}</div>
      <div class="mrb-pills">
        <span class="mrb-pill mrb-pill-p ${!s.p?'mrb-pill-0':''}">⏳ ${s.p}</span>
        <span class="mrb-pill mrb-pill-i ${!s.i?'mrb-pill-0':''}">🔧 ${s.i}</span>
        <span class="mrb-pill mrb-pill-r ${!s.r?'mrb-pill-0':''}">✅ ${s.r}</span>
      </div>
    </button>`;
  }).join('');
}

/* ── Popup liste rapports par municipalité ── */
let _currentMunReports = [];
let _currentMunName    = '';

function openMunReportsPopup(munName) {
  // Ensure _allReports is loaded
  if (!_allReports || !_allReports.length) {
    _allReports = REPORTS_DATA;
  }

  _currentMunName    = munName;
  _currentMunReports = _allReports.filter(r => r.municipality === munName);

  const total        = _currentMunReports.length;
  const p            = _currentMunReports.filter(r => r.status === 'pending').length;
  const iv           = _currentMunReports.filter(r => r.status === 'in_progress').length;
  const v            = _currentMunReports.filter(r => r.status === 'resolved').length;
  const high         = _currentMunReports.filter(r => r.severity === 'عالية').length;
  const med          = _currentMunReports.filter(r => r.severity === 'متوسطة').length;
  const low          = _currentMunReports.filter(r => r.severity === 'منخفضة').length;
  const resolvedRate = total > 0 ? Math.round((v / total) * 100) : 0;

  // Safe DOM updates
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('munReportsPopupName', munName);
  setTxt('munReportsPopupSub', `${total} بلاغ مسجّل — نسبة الحل ${resolvedRate}%`);
  setTxt('mrpBadgePending',  `⏳ ${p} انتظار`);
  setTxt('mrpBadgeProgress', `🔧 ${iv} معالجة`);
  setTxt('mrpBadgeResolved', `✅ ${v} حُلّت`);

  // Logo
  const logoEl = document.getElementById('munReportsPopupLogo');
  if (logoEl) {
    const src = (typeof getMunLogo === 'function') ? getMunLogo(munName) : '';
    logoEl.innerHTML = src
      ? `<img src="${src}" alt="${munName}" style="width:44px;height:44px;object-fit:contain;border-radius:8px;background:rgba(255,255,255,.15);padding:4px" onerror="this.style.display='none'">`
      : `<span style="font-size:26px">🏙️</span>`;
  }

  // Stats bar
  let statsBar = document.getElementById('mrpStatsBar');
  if (!statsBar) {
    const header = document.getElementById('munReportsPopupHeader');
    if (header) {
      statsBar = document.createElement('div');
      statsBar.id = 'mrpStatsBar';
      statsBar.style.cssText = 'margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;';
      header.appendChild(statsBar);
    }
  }
  if (statsBar) {
    statsBar.innerHTML = total === 0 ? '' : `
      <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:5px 11px;font-size:10px;font-weight:800;color:#fca5a5">🔴 عالية: ${high}</div>
      <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:5px 11px;font-size:10px;font-weight:800;color:#fde68a">🟡 متوسطة: ${med}</div>
      <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:5px 11px;font-size:10px;font-weight:800;color:#bbf7d0">🟢 منخفضة: ${low}</div>
      <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:5px 11px;font-size:10px;font-weight:800;color:#a5f3fc">📊 نسبة الحل: ${resolvedRate}%</div>`;
  }

  // Reset filters
  const fs = document.getElementById('mrpFilterStatus');
  const fv = document.getElementById('mrpFilterSev');
  if (fs) fs.value = '';
  if (fv) fv.value = '';

  renderMunReportsList();

  // Open popup
  const bg = document.getElementById('munReportsPopupBg');
  if (bg) {
    bg.style.display = 'flex';      // force display in case .open class fails
    bg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function renderMunReportsList() {
  const list    = document.getElementById('munReportsPopupList');
  const cntEl   = document.getElementById('mrpCount');
  if (!list) return;

  const fStatus = document.getElementById('mrpFilterStatus')?.value || '';
  const fSev    = document.getElementById('mrpFilterSev')?.value    || '';

  let rows = _currentMunReports;
  if (fStatus) rows = rows.filter(r => r.status === fStatus);
  if (fSev)    rows = rows.filter(r => r.severity === fSev);
  if (cntEl)   cntEl.textContent = `${rows.length} بلاغ`;

  if (!rows.length) {
    list.innerHTML = '<div class="empty-state"><span>📭</span>لا توجد بلاغات</div>';
    return;
  }

  list.innerHTML = rows.map(r => {
    const sevColor = r.severity === 'عالية' ? '#dc2626' : r.severity === 'متوسطة' ? '#b45309' : '#059669';
    return `
    <button class="mrp-row" onclick="openReportPopup(${JSON.stringify(r.id || r._id || '')})">
      <div class="mrp-sev-dot" style="background:${sevColor}"></div>
      <div class="mrp-info">
        <div class="mrp-loc">${r.location || '—'}</div>
        <div class="mrp-date">${r.created_at ? new Date(r.created_at).toLocaleDateString('ar-TN') : '—'}</div>
        <div class="mrp-badges">
          <span class="sev-badge ${r.severity==='عالية'?'sev-high':r.severity==='متوسطة'?'sev-med':'sev-low'}">${r.severity||'—'}</span>
          <span class="status-label status-label-${r.status}">${r.status==='pending'?'⏳ انتظار':r.status==='in_progress'?'🔧 معالجة':'✅ حُلّت'}</span>
        </div>
      </div>
    </button>`;
  }).join('');
}

function closeMunReportsPopup() {
  const bg = document.getElementById('munReportsPopupBg');
  if (bg) {
    bg.classList.remove('open');
    bg.style.display = '';
    document.body.style.overflow = '';
  }
}
function bgCloseMunReportsPopup(e) {
  if (e.target === document.getElementById('munReportsPopupBg')) closeMunReportsPopup();
}

/* ── Popup détail rapport ── */
function openReportPopup(id) {
  const r = _allReports.find(x => (x.id || x._id) === id);
  if (!r) return;
  document.getElementById('rpBadge').textContent      = r.severity || '—';
  document.getElementById('rpTitle').textContent      = r.description?.slice(0,60) || 'بلاغ';
  document.getElementById('rpSubtitle').textContent   = r.municipality || '—';
  document.getElementById('rpLocation').textContent   = r.location || '—';
  document.getElementById('rpMunicipality').textContent = r.municipality || '—';
  document.getElementById('rpDate').textContent       = r.created_at ? new Date(r.created_at).toLocaleDateString('ar-TN') : '—';
  document.getElementById('rpStatus').textContent     = r.status === 'pending' ? '⏳ انتظار' : r.status === 'in_progress' ? '🔧 معالجة' : '✅ حُلّت';
  document.getElementById('rpSeverity').textContent   = r.severity || '—';
  document.getElementById('rpName').textContent       = r.name || '—';
  document.getElementById('rpDesc').textContent       = r.description || '—';
  document.getElementById('rpPhotosGrid').innerHTML   = '<span class="rp-photo-empty">لا توجد صور مرفقة</span>';
  document.getElementById('reportPopupBg')?.classList.add('open');
}

function closeReportPopup() {
  document.getElementById('reportPopupBg')?.classList.remove('open');
}
function bgCloseReportPopup(e) {
  if (e.target === document.getElementById('reportPopupBg')) closeReportPopup();
}

function handleRpPhotoUpload() { /* géré côté API */ }

/* ═══════════════════════════════════════════
   14. MODAL SIGNALEMENT (formulaire)
═══════════════════════════════════════════ */
function openModal() {
  const bg = document.getElementById('modalBg');
  if (!bg) return;
  bg.classList.add('open');
  document.body.style.overflow = 'hidden';
  populateMunSelect();
}

function openModalFor(munName) {
  openModal();
  setTimeout(() => {
    const sel = document.getElementById('f_mun');
    if (sel) sel.value = munName;
  }, 50);
}

function closeModal() {
  document.getElementById('modalBg')?.classList.remove('open');
  document.body.style.overflow = '';
  // Reset form
  ['f_name','f_phone','f_location','f_desc'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('formWrap')?.style.removeProperty('display');
  const sw = document.getElementById('successWrap');
  if (sw) sw.style.display = 'none';
  // Remove errors
  document.querySelectorAll('.form-group.has-error').forEach(g => g.classList.remove('has-error'));
}

function bgClose(e) {
  if (e.target === document.getElementById('modalBg')) closeModal();
}

function populateMunSelect() {
  const sel = document.getElementById('f_mun');
  if (!sel || sel.options.length > 1) return;
  getUniqueMuns().forEach(m => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = m;
    sel.appendChild(opt);
  });
}

async function submitReport() {
  const btn = document.getElementById('btnSubmit');
  // Validation
  let valid = true;
  const fields = [
    { id: 'f_name',     fg: 'fg-name' },
    { id: 'f_mun',      fg: 'fg-mun' },
    { id: 'f_location', fg: 'fg-loc' },
    { id: 'f_desc',     fg: 'fg-desc' },
  ];
  fields.forEach(({ id, fg }) => {
    const el  = document.getElementById(id);
    const grp = document.getElementById(fg);
    const empty = !el?.value?.trim();
    grp?.classList.toggle('has-error', empty);
    if (empty) valid = false;
  });
  if (!valid) return;

  if (btn) { btn.disabled = true; btn.textContent = '⏳ جارٍ الإرسال…'; }

  const name        = document.getElementById('f_name')?.value?.trim();
  const municipality= document.getElementById('f_mun')?.value;
  const phone       = document.getElementById('f_phone')?.value?.trim() || 'غير محدد';
  const location    = document.getElementById('f_location')?.value?.trim();
  const severity    = document.getElementById('f_severity')?.value || 'متوسطة';
  const description = document.getElementById('f_desc')?.value?.trim();
  const lat         = window._geoLat  || null;
  const lng         = window._geoLng  || null;
  const coords      = (lat && lng) ? `${lat}, ${lng}` : 'غير محدد';

  // Try EmailJS
  try {
    if (typeof emailjs !== 'undefined') {
      await emailjs.send('default_service', 'template_sfax_report', {
        to_email:     'affairesmunicipale.sfax@outlook.fr',
        from_name:    name,
        municipality: municipality,
        phone:        phone,
        location:     location,
        severity:     severity,
        description:  description,
        coordinates:  coords,
      });
      document.getElementById('formWrap').style.display = 'none';
      document.getElementById('successWrap').style.display = 'block';
      showToast('✅ تم إرسال بلاغك بنجاح!');
      if (btn) { btn.disabled = false; btn.innerHTML = '<span>📤</span><span>إرسال البلاغ</span>'; }
      return;
    }
  } catch (e) { console.warn('EmailJS failed:', e); }

  // Fallback: open mailto
  try {
    const subject = encodeURIComponent(`بلاغ نقطة سوداء - ${municipality} - ${location}`);
    const body = encodeURIComponent(
      `المُبلِّغ: ${name}\nالهاتف: ${phone}\nالبلدية: ${municipality}\nالموقع: ${location}\nالخطورة: ${severity}\nالإحداثيات: ${coords}\n\nالوصف:\n${description}`
    );
    window.location.href = `mailto:affairesmunicipale.sfax@outlook.fr?subject=${subject}&body=${body}`;
    document.getElementById('formWrap').style.display = 'none';
    document.getElementById('successWrap').style.display = 'block';
    showToast('✅ سيتم فتح تطبيق البريد الإلكتروني');
  } catch (_) {
    document.getElementById('formWrap').style.display = 'none';
    document.getElementById('successWrap').style.display = 'block';
    showToast('✅ تم تسجيل البلاغ');
  }
  if (btn) { btn.disabled = false; btn.innerHTML = '<span>📤</span><span>إرسال البلاغ</span>'; }
}

/* ═══════════════════════════════════════════
   15. GÉOLOCALISATION
═══════════════════════════════════════════ */
window._geoLat = null;
window._geoLng = null;

function geoLocate() {
  const btn    = document.getElementById('geoLocateBtn');
  const status = document.getElementById('geoStatus');
  const coords = document.getElementById('geoCoords');
  const mapWrap= document.getElementById('geoMapWrap');
  const addrPrev=document.getElementById('geoAddressPreview');
  const applyBtn=document.getElementById('geoApplyBtn');

  if (!navigator.geolocation) {
    if (status) { status.className='geo-status geo-status-error'; status.textContent='❌ المتصفح لا يدعم تحديد الموقع'; }
    return;
  }
  if (btn) { btn.disabled = true; document.getElementById('geoLocateIcon').textContent='⏳'; document.getElementById('geoLocateTxt').textContent='جارٍ التحديد…'; }
  if (status) { status.className='geo-status geo-status-loading'; status.textContent='📡 جارٍ تحديد موقعك…'; }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude.toFixed(6);
      const lng = pos.coords.longitude.toFixed(6);
      window._geoLat = lat; window._geoLng = lng;

      if (document.getElementById('geoLat')) document.getElementById('geoLat').textContent = lat;
      if (document.getElementById('geoLng')) document.getElementById('geoLng').textContent = lng;
      if (document.getElementById('geoMapsLink')) document.getElementById('geoMapsLink').href = `https://maps.google.com/?q=${lat},${lng}`;

      if (coords)  { coords.classList.add('visible'); }
      if (mapWrap) { mapWrap.classList.add('visible'); document.getElementById('geoMap').src = `https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(lng)-.005},${parseFloat(lat)-.005},${parseFloat(lng)+.005},${parseFloat(lat)+.005}&layer=mapnik&marker=${lat},${lng}`; }
      if (applyBtn){ applyBtn.style.display='flex'; }

      // Accuracy bar
      const acc     = pos.coords.accuracy;
      const accBar  = document.getElementById('geoAccBar');
      const accFill = document.getElementById('geoAccFill');
      const accLbl  = document.getElementById('geoAccLabel');
      if (accBar)  accBar.style.display = 'flex';
      if (accFill) { const pct = Math.max(0, Math.min(100, 100 - acc / 2)); accFill.style.width = pct + '%'; accFill.style.background = acc < 50 ? '#059669' : acc < 200 ? '#b45309' : '#dc2626'; }
      if (accLbl)  accLbl.textContent = `± ${Math.round(acc)} م`;

      if (status)  { status.className='geo-status geo-status-success'; status.textContent=`✅ تم تحديد الموقع (± ${Math.round(acc)} م)`; }
      if (btn)     { btn.disabled=false; document.getElementById('geoLocateIcon').textContent='✅'; document.getElementById('geoLocateTxt').textContent='تم تحديد الموقع'; }

      // Reverse geocoding (Nominatim)
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=ar`)
        .then(r => r.json()).then(d => {
          const main   = d.display_name?.split(',').slice(0,2).join('، ') || '—';
          const detail = d.display_name || '';
          if (addrPrev)  { addrPrev.classList.add('visible'); document.getElementById('geoAddrMain').textContent = main; document.getElementById('geoAddrDetail').textContent = detail; }
        }).catch(()=>{});
    },
    err => {
      if (status)  { status.className='geo-status geo-status-error'; status.textContent = `❌ ${err.message}`; }
      if (btn)     { btn.disabled=false; document.getElementById('geoLocateIcon').textContent='📍'; document.getElementById('geoLocateTxt').textContent='إعادة المحاولة'; }
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

function geoApply() {
  const loc = document.getElementById('f_location');
  const addr= document.getElementById('geoAddrMain');
  const lat = window._geoLat, lng = window._geoLng;
  if (!lat || !lng) return;
  if (loc) loc.value = (addr?.textContent && addr.textContent !== '—')
    ? addr.textContent + ` (${lat}, ${lng})`
    : `${lat}, ${lng}`;
  showToast('✅ تم استخدام الموقع');
}

/* ═══════════════════════════════════════════
   16. IMPRESSION
═══════════════════════════════════════════ */
function printReports() { window.print(); }

/* ═══════════════════════════════════════════
   17. EXPORT JSON
═══════════════════════════════════════════ */
function exportJSON() {
  const dates  = getUniqueDates();
  const totals = getMunTotals('all').sort((a, b) => b.ton - a.ton);
  const out = {
    rapport:  'تقرير متابعة أنشطة النظافة — ولاية صفاقس',
    periode:  dates.length ? `${fmtDate(dates[0])} — ${fmtDate(dates[dates.length-1])} ${dates[0].split('-')[0]}` : '—',
    export_date: new Date().toISOString(),
    resume: {
      total_tonnes:               DATA.reduce((s,r) => s + r.ton, 0).toFixed(2),
      total_metres_lineaires:     DATA.reduce((s,r) => s + (r.mk||0), 0),
      municipalites_actives:      [...new Set(DATA.map(r=>r.mun))].length,
      jours_intervention:         dates.length,
    },
    totaux_par_municipalite: totals.map(d => ({
      municipalite: d.mun, tonnes: d.ton.toFixed(2),
      metres_lineaires: d.mk, jours: d.days,
    })),
    interventions_detail: DATA,
  };
  const blob = new Blob([JSON.stringify(out, null, 2)], { type:'application/json' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = `nettoyage_sfax_${dates[0]||'data'}_${dates[dates.length-1]||''}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('⬇ تم تصدير الملف');
}

/* ═══════════════════════════════════════════
   18. NAVIGATION — Wire-up top tabs
═══════════════════════════════════════════ */
function initNavigation() {
  document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      navTo(page, btn);
    });
  });
}

/* ═══════════════════════════════════════════
   19. INIT PRINCIPAL
═══════════════════════════════════════════ */
function initDashboard() {
  renderKPIs();
  renderBarChart();
  renderMkBarChart();
  renderDonut();
  renderDeclStats();
}

document.addEventListener('DOMContentLoaded', () => {
  // Horloge
  updateClock();
  updateIntervalLabel();
  setInterval(updateClock, 30000);

  // Navigation
  initNavigation();

  // Dashboard principal
  initDashboard();

  // Render initial de la page active
  renderQtyTable('all');
  loadReports();

  // Géolocation init (dès l'ouverture de la page pour accélérer)
  if (typeof geoLocate === 'function') {
    // Déclenché seulement à l'ouverture du modal
  }
});

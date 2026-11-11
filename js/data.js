// Multilingual Days & Months data. Each language has one line per word:
//   value | written form | pronunciation (optional) | extra note (optional)
// Days of the week use the values 1-7 (Monday = 1 ... Sunday = 7).
// Months of the year use the values 101-112 (January = 101 ... December = 112).
// A note that starts with "also" lists extra accepted spellings or names for Typing Mode.
// To fix a word, edit its line.
(function () {
  const languages = [
    { code: 'ja', name: 'Japanese', dir: 'ltr',
      note: 'Japanese weekdays are named after the moon, five elements and the sun (月 moon, 火 fire, 水 water, 木 wood, 金 metal, 土 earth, 日 sun) plus 曜日 (yōbi). Months are the number plus 月 (gatsu); April, July and September are always し, しち and く. Written forms here are in hiragana; kanji are shown as extra info.',
      raw: `
1|げつようび|getsuyōbi|月曜日
2|かようび|kayōbi|火曜日
3|すいようび|suiyōbi|水曜日
4|もくようび|mokuyōbi|木曜日
5|きんようび|kin'yōbi|金曜日
6|どようび|doyōbi|土曜日
7|にちようび|nichiyōbi|日曜日
101|いちがつ|ichigatsu|一月
102|にがつ|nigatsu|二月
103|さんがつ|sangatsu|三月
104|しがつ|shigatsu|四月 (always し, never よん)
105|ごがつ|gogatsu|五月
106|ろくがつ|rokugatsu|六月
107|しちがつ|shichigatsu|七月 (always しち, never なな)
108|はちがつ|hachigatsu|八月
109|くがつ|kugatsu|九月 (always く, never きゅう)
110|じゅうがつ|jūgatsu|十月
111|じゅういちがつ|jūichigatsu|十一月
112|じゅうにがつ|jūnigatsu|十二月` },
    { code: 'ru', name: 'Russian', dir: 'ltr',
      note: 'Russian day and month names are written in lowercase. They are shown in their basic form and change their ending in sentences, e.g. в январе (in January).',
      raw: `
1|понедельник|ponedel'nik
2|вторник|vtornik
3|среда|sreda
4|четверг|chetverg
5|пятница|pyatnitsa
6|суббота|subbota
7|воскресенье|voskresen'ye
101|январь|yanvar'
102|февраль|fevral'
103|март|mart
104|апрель|aprel'
105|май|may
106|июнь|iyun'
107|июль|iyul'
108|август|avgust
109|сентябрь|sentyabr'
110|октябрь|oktyabr'
111|ноябрь|noyabr'
112|декабрь|dekabr'` },
    { code: 'de', name: 'German', dir: 'ltr',
      note: 'German writes day and month names with a capital letter. Samstag is widely used, while Sonnabend is also heard in northern and eastern Germany. In Austria, January is often Jänner.',
      raw: `
1|Montag
2|Dienstag
3|Mittwoch
4|Donnerstag
5|Freitag
6|Samstag||also Sonnabend
7|Sonntag
101|Januar||also Jänner
102|Februar
103|März
104|April
105|Mai
106|Juni
107|Juli
108|August
109|September
110|Oktober
111|November
112|Dezember` },
    { code: 'fr', name: 'French', dir: 'ltr',
      note: 'French writes day and month names in lowercase (lundi, janvier), unlike English.',
      raw: `
1|lundi
2|mardi
3|mercredi
4|jeudi
5|vendredi
6|samedi
7|dimanche
101|janvier
102|février
103|mars
104|avril
105|mai
106|juin
107|juillet
108|août
109|septembre
110|octobre
111|novembre
112|décembre` },
    { code: 'tr', name: 'Turkish', dir: 'ltr',
      note: 'Turkish day and month names are shown with a capital letter, as on calendars. Pazar means both "Sunday" and "market".',
      raw: `
1|Pazartesi
2|Salı
3|Çarşamba
4|Perşembe
5|Cuma
6|Cumartesi
7|Pazar
101|Ocak
102|Şubat
103|Mart
104|Nisan
105|Mayıs
106|Haziran
107|Temmuz
108|Ağustos
109|Eylül
110|Ekim
111|Kasım
112|Aralık` },
    { code: 'ku', name: 'Kurdish (Kurmanji)', dir: 'ltr',
      note: 'Kurmanji is written in the Latin (Hawar) alphabet. Most weekdays are counted from Sunday: yekşem (1st), duşem (2nd), sêşem (3rd), çarşem (4th), pêncşem (5th); în is Friday and şemî is Saturday. Months have two common sets of names: the Kurdish set is shown first and the other set appears as extra info.',
      raw: `
1|Duşem
2|Sêşem
3|Çarşem
4|Pêncşem
5|În
6|Şemî
7|Yekşem
101|Rêbendan||also Kanûna Paşîn
102|Reşemî||also Sibat
103|Adar
104|Avrêl||also Nîsan
105|Gulan
106|Pûşper||also Hezîran
107|Tîrmeh
108|Gelawêj||also Tebax
109|Rezber||also Îlon
110|Kewçêr||also Çiriya Pêşîn
111|Sermawez||also Çiriya Paşîn
112|Berfanbar||also Kanûna Pêşîn` },
    { code: 'ar', name: 'Arabic', dir: 'rtl',
      note: 'Modern Standard Arabic. Day names are shown with the definite article (al-). Months have two common sets of names: يناير، فبراير… (Egypt, the Gulf, North Africa) and كانون الثاني، شباط… (Levant, Iraq). The first set is shown and the second appears as extra info.',
      raw: `
1|الاثنين|al-ithnayn|also written الإثنين
2|الثلاثاء|ath-thulāthāʾ
3|الأربعاء|al-arbiʿāʾ|also written الاربعاء
4|الخميس|al-khamīs
5|الجمعة|al-jumʿa
6|السبت|as-sabt
7|الأحد|al-aḥad|also written الاحد
101|يناير|yanāyir|also كانون الثاني
102|فبراير|fibrāyir|also شباط
103|مارس|māris|also آذار
104|أبريل|abrīl|also نيسان / ابريل
105|مايو|māyū|also أيار
106|يونيو|yūniyū|also حزيران
107|يوليو|yūliyū|also تموز
108|أغسطس|aghusṭus|also آب / اغسطس
109|سبتمبر|sibtambir|also أيلول
110|أكتوبر|uktūbir|also تشرين الأول / اكتوبر
111|نوفمبر|nūfambir|also تشرين الثاني
112|ديسمبر|dīsambir|also كانون الأول` }
  ];

  // Turn each language's text block into a lookup: words[value] = {w, r, a}
  languages.forEach(function (l) {
    l.words = {};
    l.raw.trim().split('\n').forEach(function (line) {
      const p = line.split('|');
      l.words[Number(p[0])] = { w: p[1], r: p[2] || '', a: p[3] || '' };
    });
    delete l.raw;
  });

  function range(from, to, step) {
    const out = [];
    for (let v = from; v <= to; v += step) out.push(v);
    return out;
  }

  // The two categories. Days and months are kept apart: they never share a value.
  const scales = [
    { id: 's1', title: 'Days of the Week', unit: 'days', values: range(1, 7, 1) },
    { id: 's2', title: 'Months of the Year', unit: 'months', values: range(101, 112, 1) }
  ];

  // English reference word shown for each value
  const names = {
    1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday',
    101: 'January', 102: 'February', 103: 'March', 104: 'April', 105: 'May', 106: 'June',
    107: 'July', 108: 'August', 109: 'September', 110: 'October', 111: 'November', 112: 'December'
  };
  function label(v) { return names[v] || String(v); }

  const allValues = [];
  scales.forEach(function (s) { s.values.forEach(function (v) { if (allValues.indexOf(v) < 0) allValues.push(v); }); });

  window.NUMBERS_DATA = { languages: languages, scales: scales, allValues: allValues, label: label };
})();
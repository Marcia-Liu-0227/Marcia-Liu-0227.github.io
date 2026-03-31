const i18n = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.exp": "Experience",
    "nav.proj": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "home.subtitle": "Front Office Financial Analyst | Investment Research | HKU",
    "about.title": "About Me",
    "info.name": "Name: Zheying Liu",
    "info.school": "Education: HKU BBA Accounting & Finance",
    "info.location": "Location: Hong Kong / Shanghai",
    "info.motto": "Motto: je veux la gloire à mes genoux",
    "exp.title": "Experience",
    "exp.ft": "Franklin Templeton | EME Research Intern",
    "exp.ft.desc": "Built forecasting models, analyzed industry trends.",
    "exp.citic": "CITIC Capital | Buyout Intern",
    "exp.citic.desc": "Industry research, target screening, investor reports.",
    "proj.title": "Projects",
    "proj.hejun": "Hejun Consulting",
    "proj.hejun.desc": "Cost optimization & revenue impact analysis.",
    "proj.bda": "BDA Consulting",
    "proj.bda.desc": "SKU analysis & subsidy strategy optimization.",
    "blog.title": "Zheying's Blog",
    "blog.n1": "Reading Notes",
    "blog.d1": "Sharing insights on investment, negotiation and history.",
    "blog.n2": "Investment Thoughts",
    "blog.d2": "Personal views on market logic and industry trends.",
    "contact.title": "Contact Me",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.msg": "Your Message",
    "contact.send": "Send Message"
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我",
    "nav.exp": "经历",
    "nav.proj": "项目",
    "nav.blog": "博客",
    "nav.contact": "联系",
    "home.subtitle": "金融前台分析师 | 投资研究 | 香港大学",
    "about.title": "关于我",
    "info.name": "姓名：刘哲瑛",
    "info.school": "教育：香港大学 会计与金融",
    "info.location": "地区：香港 / 上海",
    "info.motto": "格言：je veux la gloire à mes genoux",
    "exp.title": "实习经历",
    "exp.ft": "富兰克林邓普顿 | 新兴市场研究实习",
    "exp.ft.desc": "构建预测模型，分析行业趋势。",
    "exp.citic": "中信资本 | 并购分析实习",
    "exp.citic.desc": "行业研究、标的筛选、撰写报告。",
    "proj.title": "项目经历",
    "proj.hejun": "和君咨询",
    "proj.hejun.desc": "成本优化与收入影响分析。",
    "proj.bda": "BDA咨询",
    "proj.bda.desc": "SKU分析与补贴策略优化。",
    "blog.title": "刘哲瑛的博客",
    "blog.n1": "读书笔记",
    "blog.d1": "分享投资、谈判与历史思考。",
    "blog.n2": "投资思考",
    "blog.d2": "个人对市场逻辑与行业趋势的看法。",
    "contact.title": "联系我",
    "contact.name": "姓名",
    "contact.email": "邮箱",
    "contact.msg": "留言",
    "contact.send": "发送留言"
  },
  tw: {
    "nav.home": "首頁",
    "nav.about": "關於我",
    "nav.exp": "經歷",
    "nav.proj": "項目",
    "nav.blog": "部落格",
    "nav.contact": "聯繫",
    "home.subtitle": "金融前台分析師 | 投資研究 | 香港大學",
    "about.title": "關於我",
    "info.name": "姓名：劉哲瑛",
    "info.school": "教育：香港大學 會計與金融",
    "info.location": "地區：香港 / 上海",
    "info.motto": "格言：je veux la gloire à mes genoux",
    "exp.title": "實習經歷",
    "exp.ft": "富蘭克林鄧普頓 | 新興市場研究實習",
    "exp.ft.desc": "建構預測模型，分析產業趨勢。",
    "exp.citic": "中信資本 | 併購分析實習",
    "exp.citic.desc": "產業研究、標的篩選、撰寫報告。",
    "proj.title": "項目經歷",
    "proj.hejun": "和君諮詢",
    "proj.hejun.desc": "成本優化與收入影響分析。",
    "proj.bda": "BDA諮詢",
    "proj.bda.desc": "SKU分析與補貼策略優化。",
    "blog.title": "劉哲瑛的部落格",
    "blog.n1": "讀書筆記",
    "blog.d1": "分享投資、談判與歷史思考。",
    "blog.n2": "投資思考",
    "blog.d2": "個人對市場邏輯與產業趨勢的看法。",
    "contact.title": "聯繫我",
    "contact.name": "姓名",
    "contact.email": "信箱",
    "contact.msg": "訊息",
    "contact.send": "傳送訊息"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = i18n[currentLang][key];
      } else {
        el.innerText = i18n[currentLang][key];
      }
    }
  });

  const nameEl = document.getElementById('name-text');
  if (nameEl) {
    if (currentLang === 'en') {
      nameEl.innerText = 'Zheying Liu';
    } else if (currentLang === 'zh') {
      nameEl.innerText = '刘哲瑛';
    } else {
      nameEl.innerText = '劉哲瑛';
    }
  }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyLang();
}

// ------------------------------
// 实时时间
// ------------------------------
function updateTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timeStr = `${hh}:${mm}:${ss}`;
  const el = document.getElementById('real-time');
  if (el) el.innerHTML = `<i class="fa-solid fa-clock"></i> ${timeStr}`;
}
setInterval(updateTime, 1000);
updateTime();

// ------------------------------
// 上海 + 香港天气
// ------------------------------
async function loadWeather() {
  try {
    const shRes = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://weatherapi-com.p.rapidapi.com/current.json?q=shanghai'));
    const sh = await shRes.json();
    const shData = JSON.parse(sh.contents);
    document.getElementById('weather-sh').innerHTML = `<i class="fa-solid fa-cloud"></i> Shanghai ${shData.current.temp_c}°C`;
  } catch (e) {
    document.getElementById('weather-sh').innerText = 'Shanghai weather unavailable';
  }

  try {
    const hkRes = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://weatherapi-com.p.rapidapi.com/current.json?q=hong kong'));
    const hk = await hkRes.json();
    const hkData = JSON.parse(hk.contents);
    document.getElementById('weather-hk').innerHTML = `<i class="fa-solid fa-cloud"></i> Hong Kong ${hkData.current.temp_c}°C`;
  } catch (e) {
    document.getElementById('weather-hk').innerText = 'Hong Kong weather unavailable';
  }
}
loadWeather();

// ------------------------------
// 背景音乐
// ------------------------------
const bgm = document.getElementById('bgm');
const musicToggle = document.getElementById('musicToggle');
let playing = false;

if (musicToggle && bgm) {
  musicToggle.onclick = () => {
    if (playing) {
      bgm.pause();
      musicToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
    } else {
      bgm.play().catch(() => {});
      musicToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    playing = !playing;
  };
}

// ------------------------------
// 表单提交
// ------------------------------
const form = document.querySelector('.contact-form');
if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();
    alert(currentLang === 'en' ? 'Message received!'
      : currentLang === 'zh' ? '留言已收到！'
      : '訊息已收到！');
    form.reset();
  };
}

applyLang();

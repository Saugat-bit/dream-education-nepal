import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import campusLandscapeUrl from "./assets/images/campus-landscape-01.jpg";
import graduationLandscapeUrl from "./assets/images/graduation-landscape-01.jpg";
import studentPortraitOneUrl from "./assets/images/student-portrait-01.jpg";
import studentPortraitThreeUrl from "./assets/images/student-portrait-03.jpg";
import studentPortraitTwoUrl from "./assets/images/student-portrait-02.jpg";
import studentLifeLandscapeUrl from "./assets/images/studentlife-landscape-01.jpg";
import logoUrl from "./assets/logos/dream-education-logo.png";
import graduationVideoUrl from "./assets/videos/graduation01.mp4";
import animatedReelVideoUrl from "./assets/videos/hero-video.mp4.mp4";
import heroStudyAbroadVideoUrl from "./assets/videos/hero-study-abroad.mp4";
import libraryMotionVideoUrl from "./assets/videos/library-motion-01.mp4";
import { siteCopy, type LanguageCode } from "./data/site-copy";
import "./styles/main.css";

gsap.registerPlugin(ScrollTrigger);

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

const appRoot = app;
const state: { language: LanguageCode; loaded: boolean; destinationsExpanded: boolean } = {
  language: "en",
  loaded: false,
  destinationsExpanded: false,
};

const languageOrder: LanguageCode[] = ["en", "ja", "zh"];
const languageLabels: Record<LanguageCode, string> = {
  en: "EN",
  ja: "\u65e5\u672c\u8a9e",
  zh: "\u4e2d\u6587",
};

const destinationMapQueries = [
  "Japan universities",
  "India universities",
  "South Korea universities",
  "Europe universities",
  "United Kingdom universities",
  "United States universities",
  "Canada universities",
  "China universities",
  "New Zealand universities",
  "Australia universities",
  "Malaysia universities",
  "Thailand universities",
  "Dubai international universities",
];

const officeMapQuery = "Dream Manpower Nepal Rabi Bhavan Kathmandu";

function mapEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

const destinationPlannerCopy: Record<
  LanguageCode,
  { eyebrow: string; title: string; body: string; checks: string[]; cta: string }
> = {
  en: {
    eyebrow: "Not sure yet?",
    title: "Compare destinations with a counselor before choosing.",
    body: "We shortlist countries by budget, course, visa timing, language needs, family preference, and long-term career direction.",
    checks: ["Budget fit", "Course match", "Visa readiness", "Career path"],
    cta: "Book destination counseling",
  },
  ja: {
    eyebrow: "まだ迷っていますか？",
    title: "国を決める前に、カウンセラーと比較しましょう。",
    body: "費用、コース、ビザ時期、語学準備、家族の希望、将来のキャリアに合わせて留学先を絞り込みます。",
    checks: ["費用確認", "コース適合", "ビザ準備", "将来設計"],
    cta: "留学先相談を予約",
  },
  zh: {
    eyebrow: "还不确定？",
    title: "决定国家前，先和顾问一起比较。",
    body: "我们会根据预算、课程、签证时间、语言要求、家庭偏好和未来职业方向筛选目的地。",
    checks: ["预算匹配", "课程适合", "签证准备", "职业路径"],
    cta: "预约目的地咨询",
  },
};

const destinationToggleCopy: Record<LanguageCode, { more: string; less: string; summary: (visible: number, total: number) => string }> = {
  en: {
    more: "See all destinations",
    less: "See fewer destinations",
    summary: (visible, total) => `Showing ${visible} of ${total} study destinations`,
  },
  ja: {
    more: "すべての留学先を見る",
    less: "表示を少なくする",
    summary: (visible, total) => `${total}件中${visible}件の留学先を表示中`,
  },
  zh: {
    more: "查看全部目的地",
    less: "收起目的地",
    summary: (visible, total) => `正在显示 ${total} 个目的地中的 ${visible} 个`,
  },
};

const readinessOrbitLabels: Record<LanguageCode, string[]> = {
  en: ["Country", "Course", "Culture", "Career"],
  ja: ["国", "コース", "文化", "キャリア"],
  zh: ["国家", "课程", "文化", "职业"],
};

const destinationContent: Record<
  LanguageCode,
  {
    kicker: string;
    title: string;
    intro: string;
    labels: { education: string; life: string; jobs: string };
    countries: Array<{ name: string; education: string; life: string; jobs: string }>;
  }
> = {
  en: {
    kicker: "Destinations",
    title: "Choose the country that fits your study plan.",
    intro: "Each destination has its own education style, student lifestyle, and post-study opportunity path. We help students compare these before applying.",
    labels: { education: "Education", life: "Student life", jobs: "After-study jobs" },
    countries: [
      { name: "Japan", education: "Language schools, vocational colleges, and university routes suit students who want structured learning and a clear cultural pathway.", life: "Students experience safe cities, disciplined routines, strong public transport, and a respectful culture that rewards consistency.", jobs: "Part-time work can support daily life, while language growth opens skilled worker and professional career possibilities." },
      { name: "India", education: "Affordable universities, medical, management, and technical programs make India practical for students seeking value close to home.", life: "Students benefit from familiar regional culture, accessible travel, and a large academic community across major cities.", jobs: "Growing IT, health, education, and business networks create useful regional exposure after graduation." },
      { name: "Korea", education: "Modern universities, language programs, and technology-focused courses attract students interested in innovation and culture.", life: "Fast-moving student cities offer strong transport, digital convenience, campus clubs, and a globally popular youth culture.", jobs: "Technology, manufacturing, design, media, and service industries can create pathways for prepared graduates." },
      { name: "Europe", education: "Europe offers diverse programs, public universities, English-taught degrees, and country-specific scholarship possibilities.", life: "Students experience multicultural campuses, travel access, historic cities, and different learning styles across countries.", jobs: "Internships, graduate routes, and local language skills shape opportunities depending on each country." },
      { name: "UK", education: "The UK is known for globally recognized degrees, focused one-year master's programs, and strong academic traditions.", life: "Students join international communities, historic campuses, and cities with rich student support networks.", jobs: "Graduate route options and professional placements can help students gain early international work experience." },
      { name: "USA", education: "Flexible degrees, research universities, community colleges, and broad major choices suit students who want academic exploration.", life: "Large campuses offer clubs, sports, labs, student housing, and diverse cultural experiences.", jobs: "OPT pathways, internships, and industry exposure can support career building after study." },
      { name: "Canada", education: "Practical colleges, universities, co-op programs, and clear academic pathways make Canada a strong study destination.", life: "Welcoming communities, safe cities, and multicultural campuses help international students settle steadily.", jobs: "Co-op, part-time work, and post-study routes can connect students to Canadian work experience." },
      { name: "China", education: "Scholarship opportunities, medical and technical programs, and fast-growing universities make China increasingly attractive.", life: "Modern cities, affordable living options, and deep cultural exposure give students a different global perspective.", jobs: "Chinese language ability and regional business links can support careers in trade, technology, and international relations." },
      { name: "New Zealand", education: "Quality institutions, practical teaching, and smaller learning environments suit students who prefer focused support.", life: "Calm cities, outdoor lifestyle, and friendly communities make the student experience balanced and approachable.", jobs: "Selected fields offer post-study work opportunities, especially when students plan courses strategically." },
      { name: "Australia", education: "Popular universities, vocational education, pathway programs, and globally known cities make Australia a leading choice.", life: "Students enjoy active cities, diverse communities, beaches, events, and strong student service systems.", jobs: "Part-time work and graduate opportunities can support both living experience and future career direction." },
      { name: "Malaysia", education: "Affordable international campuses, twinning programs, and English-medium courses provide value and flexibility.", life: "A comfortable multicultural lifestyle, familiar food culture, and moderate costs make settling easier.", jobs: "Regional business, hospitality, IT, and service exposure can support early career development." },
      { name: "Thailand", education: "Growing international programs and modern campuses create options in business, tourism, health, and technology.", life: "Warm culture, affordable living, and lively cities create a friendly environment for international students.", jobs: "Tourism, hospitality, business, and regional market opportunities can be useful after study." },
      { name: "Dubai", education: "International branch campuses and business-focused programs connect students to a global commercial environment.", life: "Modern facilities, diverse communities, and a highly international city lifestyle shape the student experience.", jobs: "Hospitality, business, aviation, logistics, and service sectors offer strong exposure for career-minded students." },
    ],
  },
  ja: {
    kicker: "留学先",
    title: "学習計画に合う国を選びましょう。",
    intro: "国によって教育制度、学生生活、卒業後の就職機会は異なります。出願前に比較できるようサポートします。",
    labels: { education: "教育", life: "学生生活", jobs: "卒業後の就職機会" },
    countries: [
      { name: "日本", education: "日本語学校、専門学校、大学進学ルート。", life: "安全で規律があり、文化を深く学べる環境。", jobs: "アルバイトと専門職キャリアの可能性。" },
      { name: "インド", education: "費用を抑えた大学と技術系プログラム。", life: "近い距離と親しみやすい地域文化。", jobs: "IT、医療、ビジネス分野の成長機会。" },
      { name: "韓国", education: "現代的な大学と語学ルート。", life: "活気ある学生都市とポップカルチャー。", jobs: "テクノロジー、製造、サービス分野。" },
      { name: "ヨーロッパ", education: "多様な国と幅広いプログラム。", life: "多文化キャンパスと移動のしやすさ。", jobs: "国ごとに異なるインターンと卒業後ルート。" },
      { name: "英国", education: "世界的に評価される学位と短期プログラム。", life: "歴史あるキャンパスと国際的な学生環境。", jobs: "Graduate Routeと実務経験の機会。" },
      { name: "米国", education: "柔軟な学位制度と研究型大学。", life: "大規模キャンパスと豊富な学生活動。", jobs: "OPTと産業界での経験機会。" },
      { name: "カナダ", education: "実践的なカレッジと大学。", life: "受け入れやすい地域と学生に優しい都市。", jobs: "Co-op、アルバイト、卒業後の就労ルート。" },
      { name: "中国", education: "奨学金制度と強い理工系プログラム。", life: "近代都市と深い文化体験。", jobs: "語学力と地域ビジネスの強み。" },
      { name: "ニュージーランド", education: "実践重視の質の高い教育機関。", life: "落ち着いた都市と自然に近い生活。", jobs: "選択分野による卒業後就労の可能性。" },
      { name: "オーストラリア", education: "人気大学と職業教育ルート。", life: "活発な学生都市と多様なコミュニティ。", jobs: "アルバイトと卒業後の機会。" },
      { name: "マレーシア", education: "費用を抑えた国際キャンパス。", life: "快適で多文化な学生生活。", jobs: "地域ビジネスとホスピタリティ経験。" },
      { name: "タイ", education: "成長中の国際プログラムとキャンパス。", life: "温かい文化と暮らしやすい費用。", jobs: "観光、ビジネス、地域機会。" },
      { name: "ドバイ", education: "国際分校とビジネス系プログラム。", life: "近代的施設を備えたグローバル都市。", jobs: "ホスピタリティ、ビジネス、航空、サービス分野。" },
    ],
  },
  zh: {
    kicker: "留学目的地",
    title: "选择适合你学习计划的国家。",
    intro: "每个目的地都有不同的教育体系、学生生活和毕业后机会。我们帮助学生在申请前进行比较。",
    labels: { education: "教育", life: "学生生活", jobs: "毕业后机会" },
    countries: [
      { name: "日本", education: "语言学校、职业课程和大学路径。", life: "安全、有秩序且文化丰富的城市。", jobs: "兼职工作和技能职业路径。" },
      { name: "印度", education: "高性价比大学和技术课程。", life: "距离近，区域文化较熟悉。", jobs: "IT、医疗和商业网络快速发展。" },
      { name: "韩国", education: "现代大学和语言学习路径。", life: "快节奏学生城市与流行文化。", jobs: "科技、制造和服务业机会。" },
      { name: "欧洲", education: "多个国家和多样化课程。", life: "多元文化校园和便利旅行。", jobs: "实习和毕业路线因国家而异。" },
      { name: "英国", education: "全球认可学位和较短课程。", life: "历史校园和国际学生社区。", jobs: "毕业生路线与专业经验机会。" },
      { name: "美国", education: "灵活学位和研究型大学。", life: "大型校园和丰富学生活动。", jobs: "OPT路径和行业接触机会。" },
      { name: "加拿大", education: "实践型学院和大学。", life: "友好社区和学生友好城市。", jobs: "Co-op、兼职和毕业后路径。" },
      { name: "中国", education: "奖学金选择和强势技术课程。", life: "现代城市和深度文化体验。", jobs: "语言优势和区域商业联系。" },
      { name: "新西兰", education: "高质量机构和实践学习。", life: "平静城市和户外生活方式。", jobs: "部分领域有毕业后工作机会。" },
      { name: "澳大利亚", education: "热门大学和职业教育路径。", life: "活跃学生城市和多元社区。", jobs: "兼职与毕业后机会。" },
      { name: "马来西亚", education: "高性价比国际校区。", life: "舒适、多元文化的学生生活。", jobs: "区域商业和酒店管理经验。" },
      { name: "泰国", education: "不断发展的国际课程和校园。", life: "温暖文化和较低生活成本。", jobs: "旅游、商业和区域机会。" },
      { name: "迪拜", education: "国际分校和商业课程。", life: "现代设施完善的全球城市。", jobs: "酒店、商业、航空和服务行业。" },
    ],
  },
};

function render() {
  const copy = siteCopy[state.language];
  const destinations = destinationContent[state.language];
  const planner = destinationPlannerCopy[state.language];
  const destinationToggle = destinationToggleCopy[state.language];
  const readinessLabels = readinessOrbitLabels[state.language];
  const visibleDestinationCount = 6;
  const visibleCountries = state.destinationsExpanded ? destinations.countries : destinations.countries.slice(0, visibleDestinationCount);
  const destinationSummaryCount = state.destinationsExpanded ? destinations.countries.length : visibleCountries.length;
  document.documentElement.lang = state.language;

  appRoot.innerHTML = `
    <div class="loader" aria-hidden="true">
      <div class="loader-mark">
        <img class="loader-logo" src="${logoUrl}" alt="" />
        <span>${copy.brandTagline}</span>
      </div>
      <div class="loader-progress">
        <span class="loader-line"></span>
        <strong class="loader-count">0</strong>
      </div>
    </div>

    <header class="site-header" data-animate="header">
      <a class="brand" href="#home" aria-label="Dream Education Nepal home">
        <img src="${logoUrl}" alt="Dream Education Nepal logo" />
        <span>
          <strong>${copy.brand}</strong>
          <small>${copy.brandAccent}</small>
        </span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        ${copy.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
      <div class="language-switcher" aria-label="Language switcher">
        ${languageOrder
          .map(
            (language) => `
              <button class="language-option ${state.language === language ? "active" : ""}" type="button" data-language="${language}">
                ${languageLabels[language]}
              </button>
            `,
          )
          .join("")}
      </div>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero-canvas" aria-hidden="true">
          <span class="orb orb-one"></span>
          <span class="orb orb-two"></span>
          <span class="orb orb-three"></span>
          <span class="hero-kanji">ドリーム</span>
        </div>
        <div class="hero-shell">
          <div class="hero-video-card" data-animate="video-card">
            <video autoplay muted loop playsinline>
              <source src="${animatedReelVideoUrl}" type="video/mp4" />
            </video>
            <div class="video-logo-badge" aria-label="Dream Education animated logo">
              <img src="${logoUrl}" alt="" />
              <span></span>
            </div>
          </div>
          <div class="hero-inner">
            <div class="hero-badges" data-animate="hero-line">
              <p class="eyebrow">${copy.hero.badge}</p>
              <p class="eyebrow association-badge">${copy.hero.association}</p>
            </div>
            <h1 class="split-title" data-animate="headline">
              <span>${copy.hero.title}</span>
              <span>${copy.hero.highlight}</span>
            </h1>
            <p class="hero-copy" data-animate="hero-line">${copy.hero.description}</p>
            <div class="hero-stats" data-animate="hero-line">
              ${copy.hero.stats
                .map(
                  (stat) => `
                    <article>
                      <small>${stat.label}</small>
                    </article>
                  `,
                )
                .join("")}
            </div>
            <div class="hero-actions" data-animate="hero-line">
              <a class="primary-action" href="#journey">${copy.hero.primaryCta}</a>
              <a class="secondary-action" href="#contact">${copy.hero.secondaryCta}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="marquee-section" aria-label="Dream Education focus">
        <div class="marquee-track">
          ${[...copy.marquee, ...copy.marquee].map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="section manifesto" id="about">
        <div class="section-label">${copy.advantages.kicker}</div>
        <div class="manifesto-grid">
          <h2 data-animate="reveal">${copy.advantages.title}</h2>
          <p data-animate="reveal">${copy.advantages.body}</p>
        </div>
        <div class="principle-row">
          ${copy.advantages.cards
            .map(
              (card, index) => `
                <article class="principle-card" data-animate="card">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${card.title}</h3>
                  <p>${card.body}</p>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="study-gallery" data-animate="card">
          <figure class="gallery-card campus-card">
            <img src="${campusLandscapeUrl}" alt="Students walking on an international campus" />
            <figcaption>${copy.gallery.campus}</figcaption>
          </figure>
          <figure class="gallery-card graduation-card">
            <img src="${graduationLandscapeUrl}" alt="Graduation and study abroad success moment" />
            <figcaption>${copy.gallery.graduation}</figcaption>
          </figure>
        </div>
      </section>

      <section class="media-story" aria-label="Study abroad experience">
        <img class="media-story-image" src="${studentLifeLandscapeUrl}" alt="Students enjoying international campus life" data-animate="card" />
        <div class="media-story-copy" data-animate="reveal">
          <span class="section-label">${copy.mediaStory.kicker}</span>
          <h2>${copy.mediaStory.title}</h2>
          <p>${copy.mediaStory.body}</p>
        </div>
      </section>

      <section class="section journey" id="journey">
        <div class="journey-heading">
          <div>
            <span class="section-label">${destinations.kicker}</span>
            <h2 data-animate="reveal">${destinations.title}</h2>
          </div>
          <p data-animate="reveal">${destinations.intro}</p>
        </div>
        <div class="destination-grid">
          ${visibleCountries
            .map(
              (country, index) => `
                <article class="destination-card" data-animate="destination">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${country.name}</h3>
                  <div class="destination-details">
                    <section>
                      <strong>${destinations.labels.education}</strong>
                      <p>${country.education}</p>
                    </section>
                    <section>
                      <strong>${destinations.labels.life}</strong>
                      <p>${country.life}</p>
                    </section>
                    <section>
                      <strong>${destinations.labels.jobs}</strong>
                      <p>${country.jobs}</p>
                    </section>
                  </div>
                  <iframe
                    class="destination-map"
                    title="${country.name} map"
                    src="${mapEmbedUrl(destinationMapQueries[index])}"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </article>
              `,
            )
            .join("")}
          ${
            state.destinationsExpanded
              ? `
                <article class="destination-planner" data-animate="destination">
                  <span>${planner.eyebrow}</span>
                  <h3>${planner.title}</h3>
                  <p>${planner.body}</p>
                  <div class="planner-checks">
                    ${planner.checks.map((check) => `<small>${check}</small>`).join("")}
                  </div>
                  <a class="primary-action" href="#contact">${planner.cta}</a>
                </article>
              `
              : ""
          }
        </div>
        <div class="destination-actions" data-animate="reveal">
          <span>${destinationToggle.summary(destinationSummaryCount, destinations.countries.length)}</span>
          <button class="destination-toggle" type="button" data-destination-toggle>
            ${state.destinationsExpanded ? destinationToggle.less : destinationToggle.more}
          </button>
        </div>
      </section>

      <section class="video-scroll" aria-label="Study abroad video story">
        <div class="video-scroll-stage">
          <video class="scroll-video active" autoplay muted loop playsinline>
            <source src="${libraryMotionVideoUrl}" type="video/mp4" />
          </video>
          <video class="scroll-video" autoplay muted loop playsinline>
            <source src="${heroStudyAbroadVideoUrl}" type="video/mp4" />
          </video>
          <video class="scroll-video" autoplay muted loop playsinline>
            <source src="${graduationVideoUrl}" type="video/mp4" />
          </video>
          <div class="video-scroll-overlay">
            ${copy.videoStory
              .map(
                (story, index) => `
                  <article class="video-caption ${index === 0 ? "active" : ""}">
                    <span>${story.kicker}</span>
                    <h2>${story.title}</h2>
                    <p>${story.body}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section services" id="services">
        <div class="section-label">${copy.services.kicker}</div>
        <h2 data-animate="reveal">${copy.services.title}</h2>
        <div class="service-stack">
          ${copy.services.cards
            .map(
              (card) => `
                <article class="service-card" data-animate="service">
                  <span>${card.icon}</span>
                  <div>
                    <h3>${card.title}</h3>
                    <p>${card.body}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section hope-group" id="hope-group">
        <div class="hope-intro" data-animate="reveal">
          <span class="section-label">${copy.hopeGroup.kicker}</span>
          <h2>${copy.hopeGroup.title}</h2>
          <p>${copy.hopeGroup.body}</p>
          <div class="hope-highlights">
            ${copy.hopeGroup.highlights
              .map(
                (highlight) => `
                  <article>
                    <strong>${highlight.label}</strong>
                    <p>${highlight.body}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="hope-panel" data-animate="card">
          <div class="hope-panel-heading">
            <span>${copy.hopeGroup.institutionsTitle}</span>
            <strong>03</strong>
          </div>
          <div class="institution-grid">
            ${copy.hopeGroup.institutions
              .map(
                (institution) => `
                  <article class="institution-card">
                    <span>${institution.country}</span>
                    <h3>${institution.name}</h3>
                    <p>${institution.body}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
          <article class="manpower-note">
            <span>${copy.hopeGroup.manpowerTitle}</span>
            <p>${copy.hopeGroup.manpowerBody}</p>
          </article>
        </div>
      </section>

      <section class="section manpower-section" id="manpower">
        <div class="manpower-copy" data-animate="reveal">
          <span class="section-label">${copy.manpower.kicker}</span>
          <h2>${copy.manpower.title}</h2>
          <p>${copy.manpower.body}</p>
          <a class="primary-action" href="#contact">${copy.manpower.cta}</a>
        </div>
        <div class="manpower-grid">
          ${copy.manpower.points
            .map(
              (point, index) => `
                <article class="manpower-card" data-animate="card">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${point.label}</h3>
                  <p>${point.body}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section students">
        <div class="students-heading">
          <span class="section-label">${copy.students.kicker}</span>
          <h2 data-animate="reveal">${copy.students.title}</h2>
        </div>
        <div class="student-grid">
          ${[
            { image: studentPortraitOneUrl, ...copy.students.cards[0] },
            { image: studentPortraitTwoUrl, ...copy.students.cards[1] },
            { image: studentPortraitThreeUrl, ...copy.students.cards[2] },
          ]
            .map(
              (student) => `
                <article class="student-card" data-animate="card">
                  <img src="${student.image}" alt="${student.title}" />
                  <div>
                    <h3>${student.title}</h3>
                    <p>${student.body}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section translation" id="readiness">
        <div class="translation-copy">
          <span class="section-label">${copy.japan.kicker}</span>
          <h2 data-animate="reveal">${copy.japan.title}</h2>
          <p data-animate="reveal">${copy.japan.body}</p>
        </div>
          <div class="translation-stage" data-animate="translation">
            <div class="readiness-orbit" aria-hidden="true">
            ${readinessLabels.map((label) => `<span>${label}</span>`).join("")}
          </div>
          <div class="readiness-core">
            <strong>${copy.japan.kicker}</strong>
            <small>${copy.brandTagline}</small>
          </div>
          <ul class="readiness-list">
            ${copy.japan.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </div>
      </section>

      <section class="section office">
        <div class="office-panel" data-animate="card">
          <span class="section-label">${copy.office.kicker}</span>
          <h2>${copy.office.title}</h2>
          <p>${copy.office.address}</p>
          <a href="tel:${copy.office.phone.replace(/-/g, "")}">${copy.office.phone}</a>
          <a href="mailto:${copy.office.email}">${copy.office.email}</a>
          <small>${copy.office.hours}</small>
        </div>
        <div class="map-panel" data-animate="card">
          <iframe
            title="Dream Education Nepal office map"
            src="${mapEmbedUrl(officeMapQuery)}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <span>Kathmandu</span>
            <strong>Rabi Bhavan</strong>
            <small>Dream Education Nepal</small>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="contact-copy">
          <span class="section-label">${copy.contact.kicker}</span>
          <h2 data-animate="reveal">${copy.contact.title}</h2>
          <p>${copy.contact.body}</p>
          <a class="contact-email" href="mailto:${copy.office.email}">${copy.office.email}</a>
        </div>
        <form
          class="contact-form"
          data-animate="card"
        >
          <label>
            <span>${copy.contact.form.name}</span>
            <input name="name" type="text" autocomplete="name" required />
          </label>
          <label>
            <span>${copy.contact.form.phone}</span>
            <input name="phone" type="tel" autocomplete="tel" required />
          </label>
          <label class="message-field">
            <span>${copy.contact.form.message}</span>
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button class="primary-action" type="submit">${copy.contact.form.submit}</button>
          <p class="form-note" role="status"></p>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <img src="${logoUrl}" alt="Dream Education Nepal logo" />
        <p>${copy.footer.description}</p>
      </div>
      <nav aria-label="Footer navigation">
        ${copy.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
      <small>${copy.footer.copyright}</small>
    </footer>
  `;

  bindLanguageToggle();
  bindDestinationToggle();
  bindContactForm(copy.office.email);
  runAnimations();
}

function bindLanguageToggle() {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".language-option");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.language as LanguageCode | undefined;

      if (!nextLanguage || nextLanguage === state.language) {
        return;
      }

      state.language = nextLanguage;
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.to(appRoot, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.45,
      ease: "power3.inOut",
      onComplete: () => {
        render();
        gsap.fromTo(
          appRoot,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 0.55, ease: "power3.inOut" },
        );
      },
    });
    });
  });
}

function bindDestinationToggle() {
  const button = document.querySelector<HTMLButtonElement>("[data-destination-toggle]");

  button?.addEventListener("click", () => {
    state.destinationsExpanded = !state.destinationsExpanded;
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    render();
    document.querySelector("#journey")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bindContactForm(clientEmail: string) {
  const form = document.querySelector<HTMLFormElement>(".contact-form");
  const note = document.querySelector<HTMLElement>(".form-note");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent("New Dream Education website inquiry");
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${clientEmail}?subject=${subject}&body=${body}`;

    if (note) {
      note.textContent = "Your email app should open with the message ready to send.";
    }
  });
}

function runAnimations() {
  const loader = document.querySelector<HTMLElement>(".loader");
  const loaderCount = document.querySelector<HTMLElement>(".loader-count");

  if (loader && loaderCount && !state.loaded) {
    state.loaded = true;
    const loadState = { value: 0 };
    const tl = gsap.timeline();

    tl.to(loadState, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        loaderCount.textContent = String(Math.round(loadState.value));
      },
    })
      .to(".loader-line", { scaleX: 1, duration: 1.8, ease: "power2.out" }, 0)
      .to(".loader-logo", { scale: 1.08, duration: 1.8, ease: "power2.out" }, 0)
      .to(loader, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "power4.inOut" }, "+=0.15");
  } else {
    loader?.remove();
  }

  gsap.from("[data-animate='header']", {
    autoAlpha: 0,
    y: -22,
    duration: 0.8,
    delay: 1.5,
    ease: "power3.out",
  });

  gsap.from(".split-title span", {
    yPercent: 115,
    rotate: 3,
    duration: 1.2,
    delay: 1.55,
    stagger: 0.1,
    ease: "power4.out",
  });

  gsap.from("[data-animate='hero-line']", {
    autoAlpha: 0,
    y: 28,
    duration: 0.8,
    delay: 1.8,
    stagger: 0.12,
    ease: "power3.out",
  });

  gsap.from("[data-animate='video-card']", {
    autoAlpha: 0,
    clipPath: "inset(50% 50% 50% 50% round 28px)",
    scale: 0.8,
    duration: 1.1,
    delay: 1.85,
    ease: "power4.out",
  });

  gsap.to(".orb-one", { x: 80, y: -40, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".orb-two", { x: -70, y: 60, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".orb-three", { x: 60, y: 70, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".hero-kanji", { rotate: 8, y: -24, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });

  gsap.to(".marquee-track", {
    xPercent: -50,
    duration: 22,
    repeat: -1,
    ease: "none",
  });

  setupVideoScrollStory();

  gsap.utils.toArray<HTMLElement>("[data-animate='reveal'], [data-animate='card'], [data-animate='service'], [data-animate='translation']").forEach((element) => {
    gsap.from(element, {
      autoAlpha: 0,
      y: 42,
      rotateX: element.dataset.animate === "card" ? -8 : 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
      },
    });
  });

  const destinationGrid = document.querySelector<HTMLElement>(".destination-grid");
  gsap.from(".destination-card, .destination-planner", {
    autoAlpha: 0,
    y: 36,
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: destinationGrid,
      start: "top 82%",
    },
  });

  gsap.from(".hero-stats article", {
    autoAlpha: 0,
    y: 18,
    scale: 0.94,
    duration: 0.55,
    delay: 2.05,
    stagger: 0.08,
    ease: "back.out(1.5)",
  });

  gsap.to(".readiness-orbit", {
    rotate: 360,
    duration: 24,
    repeat: -1,
    ease: "none",
  });
}

function setupVideoScrollStory() {
  const section = document.querySelector<HTMLElement>(".video-scroll");
  const videos = gsap.utils.toArray<HTMLVideoElement>(".scroll-video");
  const captions = gsap.utils.toArray<HTMLElement>(".video-caption");

  if (!section || videos.length === 0 || captions.length === 0) {
    return;
  }

  gsap.set(videos, { autoAlpha: 0, scale: 1.06 });
  gsap.set(captions, { autoAlpha: 0, y: 42 });
  gsap.set(videos[0], { autoAlpha: 1, scale: 1 });
  gsap.set(captions[0], { autoAlpha: 1, y: 0 });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  videos.forEach((video, index) => {
    if (index === 0) {
      return;
    }

    timeline
      .to(captions[index - 1], { autoAlpha: 0, y: -34, duration: 0.32, ease: "power2.inOut" })
      .to(videos[index - 1], { autoAlpha: 0, scale: 1.04, duration: 0.42, ease: "power2.inOut" }, "<")
      .to(video, { autoAlpha: 1, scale: 1, duration: 0.48, ease: "power2.inOut" }, "<0.08")
      .fromTo(captions[index], { autoAlpha: 0, y: 42 }, { autoAlpha: 1, y: 0, duration: 0.38, ease: "power2.out" }, "<0.08")
      .to({}, { duration: 0.35 });
  });
}

render();


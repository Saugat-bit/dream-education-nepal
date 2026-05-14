export type LanguageCode = "en" | "ja" | "zh";

type Link = { label: string; href: string };
type TextBlock = { title: string; body: string };
type Card = TextBlock & { icon: string };
type Stat = { value: string; label: string; icon: string };

type SiteCopy = {
  brand: string;
  brandAccent: string;
  brandTagline: string;
  languageToggle: string;
  languageToggleLabel: string;
  nav: Link[];
  hero: {
    badge: string;
    association: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Stat[];
  };
  marquee: string[];
  advantages: {
    kicker: string;
    title: string;
    body: string;
    cards: Card[];
  };
  gallery: {
    campus: string;
    graduation: string;
  };
  mediaStory: {
    kicker: string;
    title: string;
    body: string;
  };
  process: {
    kicker: string;
    title: string;
    steps: TextBlock[];
  };
  videoStory: Array<TextBlock & { kicker: string }>;
  services: {
    kicker: string;
    title: string;
    cards: Card[];
  };
  students: {
    kicker: string;
    title: string;
    cards: TextBlock[];
  };
  japan: {
    kicker: string;
    title: string;
    body: string;
    points: string[];
  };
  office: {
    kicker: string;
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
    form: {
      name: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    description: string;
    copyright: string;
  };
};

const commonOffice = {
  address: "Rabi Bhavan, Kathmandu - 14, Bagmati Province, Nepal",
  phone: "+977-9761528448",
  email: "dmn.info2026@gmail.com",
};

export const siteCopy: Record<LanguageCode, SiteCopy> = {
  en: {
    brand: "Dream Education",
    brandAccent: "NEPAL",
    brandTagline: "Study abroad consultancy",
    languageToggle: "日本語",
    languageToggleLabel: "Switch site language to Japanese",
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Destinations", href: "#journey" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: "Study abroad guidance from Nepal",
      association: "Associated with Hope Group",
      title: "Your future",
      highlight: "starts beyond borders.",
      description:
        "Dream Education Nepal helps students choose the right country, course, institution, documents, and preparation plan for confident study abroad applications.",
      primaryCta: "Explore destinations",
      secondaryCta: "Book counseling",
      stats: [
        { value: "10+", label: "study destinations", icon: "01" },
        { value: "360", label: "application guidance", icon: "02" },
        { value: "1:1", label: "one-on-one counseling", icon: "03" },
      ],
    },
    marquee: ["Study abroad", "Course selection", "Admission support", "Visa preparation", "Pre-departure", "Student counseling"],
    advantages: {
      kicker: "Why Dream Education?",
      title: "Clear guidance for students planning a global education.",
      body: "We help students and families make practical decisions about destination, budget, course choice, documentation, interviews, and pre-departure readiness.",
      cards: [
        { icon: "01", title: "Personal counseling", body: "We understand your academic background, goals, budget, preferred country, and timeline before recommending a pathway." },
        { icon: "02", title: "Country-specific preparation", body: "Each destination has different requirements, so we prepare documents, language goals, and applications with the right checklist." },
        { icon: "03", title: "Transparent processing", body: "Students and parents receive clear updates through every stage, from planning and admission to visa preparation." },
      ],
    },
    gallery: { campus: "Campus selection", graduation: "Graduation goals" },
    mediaStory: {
      kicker: "Student life",
      title: "See the future before you choose it.",
      body: "Real campus scenes, classroom moments, and graduation energy make the journey easier to understand for students and families.",
    },
    process: {
      kicker: "Destinations",
      title: "Popular study abroad pathways",
      steps: [
        { title: "Japan", body: "Language school, vocational, and higher education pathways with culture and documentation preparation." },
        { title: "Australia and Canada", body: "Course selection, admission planning, financial documents, and English test guidance." },
        { title: "UK and USA", body: "University applications, SOP planning, scholarship awareness, and interview preparation." },
        { title: "South Korea and Europe", body: "Country-specific counseling for affordable programs, documentation, and student life planning." },
      ],
    },
    videoStory: [
      { kicker: "01 / Preparation", title: "Study plans become clearer when students can see the path.", body: "Language, documents, courses, and timelines are organized before applications begin." },
      { kicker: "02 / Destination", title: "Every country needs a different kind of readiness.", body: "We compare study goals, cost, lifestyle, and long-term opportunities before choosing a destination." },
      { kicker: "03 / Outcome", title: "The goal is not just admission. It is arrival with confidence.", body: "Students leave prepared for culture, campus life, travel, and the first weeks abroad." },
    ],
    services: {
      kicker: "Student support",
      title: "Everything needed for a strong study abroad application.",
      cards: [
        { icon: "A", title: "Destination and course selection", body: "We help match your goals, academic record, finances, and preferred lifestyle with suitable countries and institutions." },
        { icon: "B", title: "Language and test preparation", body: "Guidance for Japanese language, IELTS, PTE, interviews, and other destination-specific requirements." },
        { icon: "C", title: "Application and documentation", body: "Support for academic records, SOP, financial documents, admission forms, translations, and visa file preparation." },
        { icon: "D", title: "Pre-departure orientation", body: "Practical sessions about travel, accommodation, culture, student life, part-time work rules, and arrival planning." },
      ],
    },
    students: {
      kicker: "Student focus",
      title: "Guidance built around the student, not the form.",
      cards: [
        { title: "Find the right country", body: "We compare destination, course, cost, and long-term goals before students commit." },
        { title: "Prepare with confidence", body: "Language, interview, SOP, financial documents, and visa readiness stay organized." },
        { title: "Leave with clarity", body: "Pre-departure sessions help students understand travel, culture, housing, and campus life." },
      ],
    },
    japan: {
      kicker: "Global readiness",
      title: "Prepared for the country, the classroom, and the life after arrival.",
      body: "Dream Education helps students understand more than admission requirements. We prepare them for language expectations, cultural adjustment, family concerns, and practical decisions before they leave Nepal.",
      points: ["Language and interview readiness", "Country-specific planning", "Parent-friendly counseling", "Pre-departure confidence"],
    },
    office: { kicker: "Our office", title: "Visit or contact Dream Education Nepal.", ...commonOffice, hours: "Sunday - Friday: 9:30 AM - 5:30 PM" },
    contact: {
      kicker: "Contact",
      title: "Plan your study abroad journey with confidence.",
      body: "Talk with our counseling team about destinations, courses, documentation, language preparation, and application timing.",
      cta: "Email Dream Education",
      form: {
        name: "Full name",
        phone: "Phone number",
        message: "Your message",
        submit: "Submit inquiry",
      },
    },
    footer: {
      description: "Helping Nepali students prepare for global education through counseling, documentation, test guidance, and pre-departure support.",
      copyright: "© 2026 Dream Education Nepal. All rights reserved.",
    },
  },
  ja: {
    brand: "ドリームエデュケーション",
    brandAccent: "ネパール",
    brandTagline: "海外留学コンサルティング",
    languageToggle: "中文",
    languageToggleLabel: "中国語に切り替える",
    nav: [
      { label: "ホーム", href: "#home" },
      { label: "私たちについて", href: "#about" },
      { label: "サポート", href: "#services" },
      { label: "留学先", href: "#journey" },
      { label: "お問い合わせ", href: "#contact" },
    ],
    hero: {
      badge: "ネパールから海外留学をサポート",
      association: "Hope Group と提携",
      title: "未来は",
      highlight: "国境の先から始まる。",
      description: "Dream Education Nepalは、学生に合った国、コース、学校、書類準備、出発前の計画まで、海外留学申請を丁寧にサポートします。",
      primaryCta: "留学先を見る",
      secondaryCta: "相談を予約する",
      stats: [
        { value: "10+", label: "留学先", icon: "01" },
        { value: "360", label: "申請サポート", icon: "02" },
        { value: "1:1", label: "個別相談", icon: "03" },
      ],
    },
    marquee: ["海外留学", "コース選び", "入学サポート", "ビザ準備", "出発前準備", "学生相談"],
    advantages: {
      kicker: "選ばれる理由",
      title: "世界で学びたい学生のための分かりやすいガイダンス。",
      body: "留学先、費用、コース、書類、面接、出発前準備まで、学生と家族が現実的に判断できるよう支援します。",
      cards: [
        { icon: "01", title: "個別カウンセリング", body: "学歴、目標、予算、希望国、申請時期を確認し、一人ひとりに合った道を提案します。" },
        { icon: "02", title: "国別の準備", body: "留学先ごとの条件に合わせて、書類、語学、申請内容を適切なチェックリストで準備します。" },
        { icon: "03", title: "透明な進行管理", body: "計画、入学申請、ビザ準備まで、学生と保護者に分かりやすく進捗を共有します。" },
      ],
    },
    gallery: { campus: "キャンパス選び", graduation: "卒業の目標" },
    mediaStory: {
      kicker: "学生生活",
      title: "選ぶ前に、未来をイメージできるように。",
      body: "キャンパス、教室、卒業の雰囲気を伝えることで、学生と家族が留学後の姿を理解しやすくなります。",
    },
    process: {
      kicker: "留学先",
      title: "人気の海外留学ルート",
      steps: [
        { title: "日本", body: "日本語学校、専門学校、大学進学に向けた語学、文化、書類準備を支援します。" },
        { title: "オーストラリア・カナダ", body: "コース選び、入学申請、資金書類、英語試験準備を案内します。" },
        { title: "英国・米国", body: "大学申請、志望理由書、奨学金情報、面接準備を支援します。" },
        { title: "韓国・ヨーロッパ", body: "費用を抑えたプログラム、書類準備、学生生活について国別に相談できます。" },
      ],
    },
    videoStory: [
      { kicker: "01 / 準備", title: "道筋が見えると、留学計画はもっと明確になります。", body: "語学、書類、コース、申請時期を整理してから出願を進めます。" },
      { kicker: "02 / 留学先", title: "国ごとに必要な準備は異なります。", body: "学習目標、費用、生活環境、将来性を比較して留学先を選びます。" },
      { kicker: "03 / 成果", title: "目標は合格だけでなく、自信を持って出発することです。", body: "文化、学生生活、渡航、到着後の流れまで準備します。" },
    ],
    services: {
      kicker: "学生サポート",
      title: "海外留学申請に必要な準備をまとめて支援します。",
      cards: [
        { icon: "A", title: "留学先・コース選び", body: "目標、学歴、費用、希望する生活環境に合わせて、適切な国と学校を提案します。" },
        { icon: "B", title: "語学・試験準備", body: "日本語、IELTS、PTE、面接など、国別に必要な準備を案内します。" },
        { icon: "C", title: "申請・書類準備", body: "学歴資料、志望理由書、資金書類、申請書、翻訳、ビザ準備をサポートします。" },
        { icon: "D", title: "出発前オリエンテーション", body: "渡航、住居、文化、学生生活、アルバイト規則、到着後の流れを説明します。" },
      ],
    },
    students: {
      kicker: "学生中心",
      title: "書類ではなく、学生を中心にしたサポート。",
      cards: [
        { title: "自分に合う国を選ぶ", body: "留学先、コース、費用、将来の目標を比較してから決定します。" },
        { title: "自信を持って準備する", body: "語学、面接、志望理由書、資金書類、ビザ準備を整理します。" },
        { title: "安心して出発する", body: "渡航前に文化、住居、学生生活、到着後の流れを理解します。" },
      ],
    },
    japan: {
      kicker: "グローバル準備",
      title: "国、教室、到着後の生活まで見据えた準備。",
      body: "Dream Educationは入学条件だけでなく、語学、文化への適応、家族の不安、出発前の実践的な判断までサポートします。",
      points: ["語学・面接準備", "国別の計画", "保護者にも分かりやすい相談", "出発前の安心感"],
    },
    office: { kicker: "オフィス", title: "Dream Education Nepalへご相談ください。", ...commonOffice, hours: "日曜日 - 金曜日: 9:30 AM - 5:30 PM" },
    contact: {
      kicker: "お問い合わせ",
      title: "安心して海外留学の計画を始めましょう。",
      body: "留学先、コース、書類準備、語学学習、申請時期についてカウンセリングチームにご相談ください。",
      cta: "メールで相談する",
      form: {
        name: "お名前",
        phone: "電話番号",
        message: "メッセージ",
        submit: "送信する",
      },
    },
    footer: {
      description: "カウンセリング、書類準備、語学・試験案内、出発前サポートを通じて、ネパールの学生の海外留学を支援します。",
      copyright: "© 2026 Dream Education Nepal. All rights reserved.",
    },
  },
  zh: {
    brand: "梦想教育",
    brandAccent: "尼泊尔",
    brandTagline: "海外留学咨询",
    languageToggle: "English",
    languageToggleLabel: "切换到英语",
    nav: [
      { label: "首页", href: "#home" },
      { label: "关于我们", href: "#about" },
      { label: "服务", href: "#services" },
      { label: "留学目的地", href: "#journey" },
      { label: "联系", href: "#contact" },
    ],
    hero: {
      badge: "来自尼泊尔的海外留学指导",
      association: "与 Hope Group 合作",
      title: "你的未来",
      highlight: "从跨越国界开始。",
      description: "Dream Education Nepal帮助学生选择合适的国家、课程、院校、申请材料和准备计划，让海外留学申请更清晰、更有信心。",
      primaryCta: "查看目的地",
      secondaryCta: "预约咨询",
      stats: [
        { value: "10+", label: "留学目的地", icon: "01" },
        { value: "360", label: "申请指导", icon: "02" },
        { value: "1:1", label: "学生咨询", icon: "03" },
      ],
    },
    marquee: ["海外留学", "课程选择", "入学支持", "签证准备", "出发前指导", "学生咨询"],
    advantages: {
      kicker: "为什么选择我们？",
      title: "为计划全球教育的学生提供清晰指导。",
      body: "我们帮助学生和家庭在目的地、预算、课程选择、材料、面试和出发前准备方面做出实际决定。",
      cards: [
        { icon: "01", title: "个性化咨询", body: "我们了解学生的学术背景、目标、预算、目标国家和时间安排，再推荐合适路径。" },
        { icon: "02", title: "按国家准备", body: "不同国家要求不同，我们根据清单准备材料、语言目标和申请内容。" },
        { icon: "03", title: "透明流程", body: "从规划、录取申请到签证准备，学生和家长都能清楚了解进度。" },
      ],
    },
    gallery: { campus: "校园选择", graduation: "毕业目标" },
    mediaStory: {
      kicker: "学生生活",
      title: "在选择之前，先看见未来。",
      body: "校园、课堂和毕业场景能帮助学生与家庭更直观地理解留学生活。",
    },
    process: {
      kicker: "目的地",
      title: "热门海外留学路径",
      steps: [
        { title: "日本", body: "语言学校、职业课程和高等教育路径，包含文化与材料准备。" },
        { title: "澳大利亚和加拿大", body: "课程选择、录取规划、资金材料和英语考试指导。" },
        { title: "英国和美国", body: "大学申请、个人陈述、奖学金信息和面试准备。" },
        { title: "韩国和欧洲", body: "针对高性价比项目、申请材料和学生生活提供国家별咨询。" },
      ],
    },
    videoStory: [
      { kicker: "01 / 准备", title: "当学生看见路径，留学计划会更清晰。", body: "语言、材料、课程和时间线会在申请前整理清楚。" },
      { kicker: "02 / 目的地", title: "每个国家都需要不同的准备。", body: "我们比较学习目标、费用、生活方式和长期机会，再选择目的地。" },
      { kicker: "03 / 结果", title: "目标不只是录取，而是自信出发。", body: "学生会为文化、校园生活、旅行和抵达后的前几周做好准备。" },
    ],
    services: {
      kicker: "学生支持",
      title: "为强有力的海外留学申请准备一切。",
      cards: [
        { icon: "A", title: "目的地与课程选择", body: "根据目标、成绩、资金和生活偏好匹配合适国家与院校。" },
        { icon: "B", title: "语言与考试准备", body: "提供日语、IELTS、PTE、面试和国家별要求指导。" },
        { icon: "C", title: "申请与材料", body: "支持成绩材料、SOP、资金文件、申请表、翻译和签证材料准备。" },
        { icon: "D", title: "出发前指导", body: "说明旅行、住宿、文化、学生生活、兼职规则和抵达计划。" },
      ],
    },
    students: {
      kicker: "以学生为中心",
      title: "围绕学生，而不是只围绕表格。",
      cards: [
        { title: "找到合适国家", body: "在决定前比较目的地、课程、费用和长期目标。" },
        { title: "自信准备", body: "语言、面试、SOP、资金材料和签证准备保持有序。" },
        { title: "清楚出发", body: "出发前了解旅行、文化、住宿和校园生活。" },
      ],
    },
    japan: {
      kicker: "全球准备",
      title: "为目标国家、课堂和抵达后的生活做好准备。",
      body: "Dream Education不仅帮助学生了解入学要求，也帮助他们准备语言、文化适应、家庭顾虑和出发前的实际决定。",
      points: ["语言与面试准备", "按国家规划", "家长也容易理解的咨询", "出发前更有信心"],
    },
    office: { kicker: "办公室", title: "欢迎联系Dream Education Nepal。", ...commonOffice, hours: "星期日 - 星期五: 9:30 AM - 5:30 PM" },
    contact: {
      kicker: "联系",
      title: "自信规划你的海外留学旅程。",
      body: "与我们的咨询团队讨论目的地、课程、材料、语言准备和申请时间。",
      cta: "邮件咨询",
      form: {
        name: "姓名",
        phone: "电话号码",
        message: "留言",
        submit: "提交咨询",
      },
    },
    footer: {
      description: "通过咨询、材料准备、考试指导和出发前支持，帮助尼泊尔学生迈向全球教育。",
      copyright: "© 2026 Dream Education Nepal. All rights reserved.",
    },
  },
};

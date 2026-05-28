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
  hopeGroup: {
    kicker: string;
    title: string;
    body: string;
    institutionsTitle: string;
    institutions: Array<{ name: string; country: string }>;
    manpowerTitle: string;
    manpowerBody: string;
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
      { label: "Hope Group", href: "#hope-group" },
      { label: "Destinations", href: "#journey" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: "Japanese and English language training",
      association: "Member of Hope Education Group",
      title: "Your future",
      highlight: "starts beyond borders.",
      description:
        "Dream Education Nepal prepares students with Japanese and English language training, then supports study abroad applications, work visa guidance, and career pathways through our wider education and manpower network.",
      primaryCta: "Explore programs",
      secondaryCta: "Book counseling",
      stats: [
        { value: "10+", label: "Japanese language training", icon: "01" },
        { value: "360", label: "English test preparation", icon: "02" },
        { value: "1:1", label: "study and work visa support", icon: "03" },
      ],
    },
    marquee: ["Japanese language", "English training", "Hope Education Group", "Study abroad", "Work visa support", "Own manpower company"],
    advantages: {
      kicker: "Why Dream Education?",
      title: "Language-first guidance for study, work, and global mobility.",
      body: "We help students and candidates build Japanese and English language confidence first, then guide them through destination, institution, documentation, study visa, and work visa decisions.",
      cards: [
        { icon: "01", title: "Japanese language training", body: "Focused classes help students prepare for Japanese study pathways, interviews, cultural readiness, and daily life communication." },
        { icon: "02", title: "English language training", body: "We support English preparation for academic applications, interviews, and destination-specific test or communication needs." },
        { icon: "03", title: "Study and work visa guidance", body: "After language preparation, we support study abroad applications, work visa planning, and documentation with clear communication." },
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
      title: "Language training first, then complete study and visa support.",
      cards: [
        { icon: "JP", title: "Japanese language training", body: "Structured Japanese preparation for students and candidates aiming for Japan study, interviews, cultural readiness, and daily communication." },
        { icon: "EN", title: "English language training", body: "English support for study abroad applications, interviews, academic communication, and destination-specific preparation." },
        { icon: "SV", title: "Study abroad applications", body: "Guidance for institution selection, admission forms, academic documents, SOP, financial documents, translations, and visa file preparation." },
        { icon: "WV", title: "Work visa and manpower support", body: "We can guide eligible candidates toward work visa preparation and connect manpower-related support through our own manpower company." },
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
    hopeGroup: {
      kicker: "Hope Education Group",
      title: "A member of Hope Education Group with international academic links.",
      body: "Dream Education Nepal is connected with Hope Education Group, expanding our ability to support students through language preparation, overseas study pathways, and affiliated institution guidance.",
      institutionsTitle: "Overseas affiliated institutions mainly include",
      institutions: [
        { name: "INTI International University", country: "Malaysia" },
        { name: "Shinawatra University", country: "Thailand" },
        { name: "Wekerle Business School", country: "Hungary" },
      ],
      manpowerTitle: "Own manpower company support",
      manpowerBody: "Alongside education counseling, our group also has its own manpower company, helping us support eligible candidates with work visa planning and employment pathway guidance.",
    },
    japan: {
      kicker: "Global readiness",
      title: "Prepared for language, study, work, and life after arrival.",
      body: "Dream Education helps students and candidates understand more than admission requirements. We prepare them for language expectations, interviews, cultural adjustment, study visas, work visa planning, and practical decisions before they leave Nepal.",
      points: ["Japanese and English readiness", "Study abroad applications", "Work visa planning", "Manpower network support"],
    },
    office: { kicker: "Our office", title: "Visit or contact Dream Education Nepal.", ...commonOffice, hours: "Sunday - Friday: 9:30 AM - 5:30 PM" },
    contact: {
      kicker: "Contact",
      title: "Plan your study abroad journey with confidence.",
      body: "Talk with our counseling team about Japanese and English classes, affiliated institutions, study abroad applications, documentation, and work visa guidance.",
      cta: "Email Dream Education",
      form: {
        name: "Full name",
        phone: "Phone number",
        message: "Your message",
        submit: "Submit inquiry",
      },
    },
    footer: {
      description: "Helping Nepali students and candidates prepare for Japanese and English language training, study abroad applications, work visa guidance, and global opportunities.",
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
      { label: "Hope Group", href: "#hope-group" },
      { label: "留学先", href: "#journey" },
      { label: "お問い合わせ", href: "#contact" },
    ],
    hero: {
      badge: "日本語・英語トレーニング",
      association: "Hope Education Group メンバー",
      title: "未来は",
      highlight: "国境の先から始まる。",
      description: "Dream Education Nepalは、日本語・英語トレーニングを中心に、海外留学申請、就労ビザ相談、教育・人材ネットワークを通じた進路づくりをサポートします。",
      primaryCta: "プログラムを見る",
      secondaryCta: "相談を予約する",
      stats: [
        { value: "10+", label: "日本語トレーニング", icon: "01" },
        { value: "360", label: "英語試験準備", icon: "02" },
        { value: "1:1", label: "留学・就労ビザサポート", icon: "03" },
      ],
    },
    marquee: ["日本語学習", "英語トレーニング", "Hope Education Group", "海外留学", "就労ビザサポート", "自社人材会社"],
    advantages: {
      kicker: "選ばれる理由",
      title: "語学を土台に、留学・就労・海外での成長を支援します。",
      body: "日本語と英語の力を育てたうえで、留学先、学校、書類、留学ビザ、就労ビザの準備を分かりやすく支援します。",
      cards: [
        { icon: "01", title: "日本語トレーニング", body: "日本での学習、面接、文化理解、日常生活に必要な日本語力を段階的に準備します。" },
        { icon: "02", title: "英語トレーニング", body: "海外留学申請、面接、学術コミュニケーション、国別要件に合わせた英語準備を支援します。" },
        { icon: "03", title: "留学・就労ビザ相談", body: "語学準備後、留学申請、就労ビザ計画、必要書類を透明な流れでサポートします。" },
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
      title: "語学トレーニングから留学・ビザ準備まで一貫して支援します。",
      cards: [
        { icon: "JP", title: "日本語トレーニング", body: "日本留学、面接、文化理解、日常会話に向けた体系的な日本語準備を行います。" },
        { icon: "EN", title: "英語トレーニング", body: "海外留学申請、面接、学術英語、目的地別の準備に必要な英語力を支援します。" },
        { icon: "SV", title: "海外留学申請", body: "学校選び、入学申請、学歴資料、志望理由書、資金書類、翻訳、ビザ書類をサポートします。" },
        { icon: "WV", title: "就労ビザ・人材サポート", body: "対象となる候補者には、自社人材会社のネットワークを通じて就労ビザ準備や進路相談も支援します。" },
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
    hopeGroup: {
      kicker: "Hope Education Group",
      title: "Hope Education Groupのメンバーとして、海外教育機関とのつながりを活かします。",
      body: "Dream Education NepalはHope Education Groupと連携し、語学準備、海外留学ルート、提携教育機関への案内をより幅広くサポートします。",
      institutionsTitle: "主な海外提携教育機関",
      institutions: [
        { name: "INTI International University", country: "マレーシア" },
        { name: "Shinawatra University", country: "タイ" },
        { name: "Wekerle Business School", country: "ハンガリー" },
      ],
      manpowerTitle: "自社人材会社によるサポート",
      manpowerBody: "教育カウンセリングに加えて、グループには自社人材会社もあり、対象となる候補者の就労ビザ計画や雇用ルート相談を支援できます。",
    },
    japan: {
      kicker: "グローバル準備",
      title: "語学、留学、就労、到着後の生活まで見据えた準備。",
      body: "Dream Educationは入学条件だけでなく、語学、面接、文化適応、留学ビザ、就労ビザ計画、出発前の実践的な判断まで支援します。",
      points: ["日本語・英語準備", "海外留学申請", "就労ビザ計画", "人材ネットワーク支援"],
    },
    office: { kicker: "オフィス", title: "Dream Education Nepalへご相談ください。", ...commonOffice, hours: "日曜日 - 金曜日: 9:30 AM - 5:30 PM" },
    contact: {
      kicker: "お問い合わせ",
      title: "安心して海外留学の計画を始めましょう。",
      body: "日本語・英語クラス、提携教育機関、海外留学申請、書類準備、就労ビザ相談についてお気軽にご相談ください。",
      cta: "メールで相談する",
      form: {
        name: "お名前",
        phone: "電話番号",
        message: "メッセージ",
        submit: "送信する",
      },
    },
    footer: {
      description: "日本語・英語トレーニング、海外留学申請、就労ビザ相談、グローバルな進路づくりを支援します。",
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
      { label: "Hope Group", href: "#hope-group" },
      { label: "留学目的地", href: "#journey" },
      { label: "联系", href: "#contact" },
    ],
    hero: {
      badge: "日语和英语语言培训",
      association: "Hope Education Group 成员",
      title: "你的未来",
      highlight: "从跨越国界开始。",
      description: "Dream Education Nepal以日语和英语培训为重点，并继续支持海外留学申请、工作签证指导以及教育和人力资源网络中的发展路径。",
      primaryCta: "查看项目",
      secondaryCta: "预约咨询",
      stats: [
        { value: "10+", label: "日语培训", icon: "01" },
        { value: "360", label: "英语考试准备", icon: "02" },
        { value: "1:1", label: "留学和工作签证支持", icon: "03" },
      ],
    },
    marquee: ["日语学习", "英语培训", "Hope Education Group", "海外留学", "工作签证支持", "自有人力资源公司"],
    advantages: {
      kicker: "为什么选择我们？",
      title: "以语言为基础，支持学习、工作和全球发展。",
      body: "我们先帮助学生和候选人建立日语与英语能力，再指导目的地、院校、材料、留学签证和工作签证准备。",
      cards: [
        { icon: "01", title: "日语培训", body: "为日本留学、面试、文化适应和日常生活沟通提供阶段性日语准备。" },
        { icon: "02", title: "英语培训", body: "为海外留学申请、面试、学术沟通和目的地要求提供英语准备支持。" },
        { icon: "03", title: "留学和工作签证指导", body: "语言准备后，我们以清晰流程支持留学申请、工作签证规划和文件准备。" },
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
      title: "先做语言培训，再完成留学和签证支持。",
      cards: [
        { icon: "JP", title: "日语培训", body: "为日本留学、面试、文化理解和日常沟通提供系统化日语准备。" },
        { icon: "EN", title: "英语培训", body: "为海外留学申请、面试、学术交流和目的地要求提供英语支持。" },
        { icon: "SV", title: "海外留学申请", body: "支持院校选择、录取申请、学术材料、SOP、资金文件、翻译和签证文件准备。" },
        { icon: "WV", title: "工作签证和人力资源支持", body: "对符合条件的候选人，可通过自有人力资源公司网络提供工作签证准备和就业路径咨询。" },
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
    hopeGroup: {
      kicker: "Hope Education Group",
      title: "作为Hope Education Group成员，连接海外教育资源。",
      body: "Dream Education Nepal与Hope Education Group相关联，能够在语言准备、海外学习路径和附属院校指导方面提供更广泛支持。",
      institutionsTitle: "主要海外附属院校包括",
      institutions: [
        { name: "INTI International University", country: "马来西亚" },
        { name: "Shinawatra University", country: "泰国" },
        { name: "Wekerle Business School", country: "匈牙利" },
      ],
      manpowerTitle: "自有人力资源公司支持",
      manpowerBody: "除教育咨询外，我们的集团也拥有自有人力资源公司，可帮助符合条件的候选人进行工作签证规划和就业路径指导。",
    },
    japan: {
      kicker: "全球准备",
      title: "为语言、学习、工作和抵达后的生活做好准备。",
      body: "Dream Education不仅帮助学生了解入学要求，也帮助他们准备语言、面试、文化适应、留学签证、工作签证规划和出发前的实际决定。",
      points: ["日语和英语准备", "海外留学申请", "工作签证规划", "人力资源网络支持"],
    },
    office: { kicker: "办公室", title: "欢迎联系Dream Education Nepal。", ...commonOffice, hours: "星期日 - 星期五: 9:30 AM - 5:30 PM" },
    contact: {
      kicker: "联系",
      title: "自信规划你的海外留学旅程。",
      body: "与我们的咨询团队讨论日语和英语课程、附属院校、海外留学申请、材料准备和工作签证指导。",
      cta: "邮件咨询",
      form: {
        name: "姓名",
        phone: "电话号码",
        message: "留言",
        submit: "提交咨询",
      },
    },
    footer: {
      description: "通过日语和英语培训、海外留学申请、工作签证指导和全球机会规划，帮助尼泊尔学生与候选人发展。",
      copyright: "© 2026 Dream Education Nepal. All rights reserved.",
    },
  },
};

import {
  allProjectsData,
  type ProjectDataItem,
} from "../data/projectsData";
import { resumeData } from "../data/resumeData";
import {
  allTimelineEvents,
  type TimelineEventItem,
} from "../data/timelineEvents";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/ja" || pathname.startsWith("/ja/") ? "ja" : "en";
}

export function stripLocale(pathname: string): string {
  if (pathname === "/ja") return "/";
  if (pathname.startsWith("/ja/")) return pathname.slice(3) || "/";
  return pathname;
}

export function localizedPath(locale: Locale, pathname: string): string {
  const cleanPath = stripLocale(pathname);
  if (locale === "ja") {
    return cleanPath === "/" ? "/ja/" : `/ja${cleanPath}`;
  }
  return cleanPath;
}

export function formatMonth(locale: Locale, value: string): string {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return new Intl.DateTimeFormat(locale === "ja" ? "ja-JP" : "en-US", {
    year: "numeric",
    month: locale === "ja" ? "long" : "long",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));
}

export const siteContent = {
  en: {
    meta: {
      defaultTitle: "I AM",
      description:
        "Calvin Lee's personal website for photography, language learning, independent app development, and selected work.",
    },
    home: {
      title: "Homepage",
      greeting: "Hello, This is",
      name: "Calvin Lee",
      description:
        "A Japanese major student at Nantong University, working across photography, language learning, piano, and independent app development.",
      aboutTitle: "About me",
      aboutParagraphs: [
        "I often begin with everyday observations: a missed photo, a sentence in another language, a small friction in daily life, or a tool I wish existed.",
        "I turn these observations into visual records, written notes, and small digital products. Photography, language, music, and app design are different ways for me to notice more carefully and make ideas tangible.",
      ],
      resumeCta: "View My Résumé",
      focusTitle: "Focus & Strengths",
      focusAreas: [
        {
          title: "Photography & Visual Observation",
          description:
            "I use photography to observe light, traces, atmosphere, and unfinished moments. My work often stays close to quiet scenes, missed images, and personal records.",
        },
        {
          title: "Independent App Design",
          description:
            "I design and build small personal apps, including Echo, Kisp, and Latent. They explore productivity, everyday tools, photography, reflection, and the relationship between experience and interface design.",
        },
        {
          title: "Language & Communication",
          description:
            "As a Japanese major student, I am interested in language learning, translation, speaking, subtitles, and cross-cultural expression. Bilingual thinking also shapes how I write and design.",
        },
        {
          title: "Writing & Creative Production",
          description:
            "I turn scattered ideas into organized materials such as event documents, video scripts, presentations, program lists, project briefs, and visual prompts.",
        },
      ],
      connectTitle: "Keep in touch",
      connectParagraphs: [
        "Feel free to reach out about app projects, photography, language learning, creative production, or an idea that may be worth exploring together.",
        "Email and GitHub are the simplest ways to find my work or start a conversation.",
      ],
      contactCta: "See All Contact Info",
      featuredTitle: "Featured Works",
      featuredCta: "Discover More Projects",
      highlightsTitle: "Highlights & Updates",
      highlightsEmpty: "No recent highlights available. Check back soon!",
      highlightsCta: "Explore My Journey",
    },
    projects: {
      title: "Projects",
      description:
        "Selected projects, experiments, and small digital tools by Calvin Lee.",
      intro:
        "Here are some of the projects I've worked on. You can find more details and other experiments on my GitHub profiles.",
      projectThumbnail: "Project thumbnail",
      sourceTitle: "View source on GitHub",
      repositoryTitle: (name: string) => `View ${name} on GitHub`,
      liveTitle: "Visit live site",
      liveLabel: "Live Site",
    },
    timeline: {
      title: "Timeline",
      description: "Selected experiences, honors, and publications.",
      all: "All",
      newest: "Newest First",
      oldest: "Oldest First",
      categories: {
        Experiences: "Experiences",
        Honors: "Honors",
        Publications: "Publications",
      },
    },
    contact: {
      title: "Contact",
      description:
        "Contact Calvin Lee about app projects, photography, language learning, or creative collaboration.",
      intro: ["Feel free to reach out!", "Here are the main ways to reach me or find my work."],
      sectionTitle: "Contact Information",
      sectionDescription:
        "Feel free to reach out about projects, photography, language learning, or collaboration ideas.",
    },
    resume: {
      title: "Résumé",
      description:
        "Calvin Lee's résumé, education, honors, app projects, skills, and contact information.",
      download: "Download Résumé PDF",
      pdfFile: "/Calvin-Lee-Resume.pdf",
      pdfName: "Calvin-Lee-Resume.pdf",
      sections: {
        profile: "Profile",
        education: "Education",
        awards: "Honors & Awards",
        experience: "Experience",
        projects: "App Projects",
        skills: "Skills",
        contact: "Contact",
      },
      work: "Work",
      selectedWork: "Selected Work",
      selectedWorkTitle: "Apps, tools, and practice",
      labels: { email: "Email", github: "GitHub", wechat: "WeChat" },
    },
    footer: {
      about: "About",
      builtBy: "Build by Calvin with ❤️",
      copyright: "All rights reserved.",
      links: "Links",
      home: "Home",
      resume: "Résumé",
      contact: "Contact",
      connect: "Connect",
      language: "Language",
      languageLabel: "Choose site language",
    },
    accessibility: {
      backHome: "Back to homepage",
      scrollDown: "Scroll to the next section",
      email: "Email",
      github: "GitHub profile",
    },
  },
  ja: {
    meta: {
      defaultTitle: "I AM",
      description:
        "写真、言語学習、個人アプリ開発を中心に、Calvin Leeの活動と制作を紹介する個人サイトです。",
    },
    home: {
      title: "Homepage",
      greeting: "はじめまして",
      name: "Calvin Lee",
      description:
        "南通大学で日本語を専攻しながら、写真、言語学習、ピアノ、個人アプリ開発に取り組んでいます。",
      aboutTitle: "About me",
      aboutParagraphs: [
        "撮れなかった一枚、別の言語で出会った一文、日々の小さな使いにくさ、まだ存在しない道具。制作のきっかけは、いつも身近な気づきから生まれます。",
        "そうした気づきを、写真や文章、小さなデジタルプロダクトへと形にしています。写真、言語、音楽、アプリデザインは、物事を丁寧に見つめ、考えを確かな形へ変えていくための異なる方法です。",
      ],
      resumeCta: "経歴を見る",
      focusTitle: "Focus & Strengths",
      focusAreas: [
        {
          title: "写真と視覚的な観察",
          description:
            "光や痕跡、空気感、まだ完結していない瞬間を写真で見つめています。静かな風景や撮り逃したイメージ、個人的な記録に寄り添う表現を大切にしています。",
        },
        {
          title: "個人アプリの設計と開発",
          description:
            "Echo、Kisp、Latentなど、小さな個人向けアプリを設計・開発しています。生産性、日々の道具、写真、内省を題材に、体験とインターフェースの関係を探っています。",
        },
        {
          title: "言語とコミュニケーション",
          description:
            "日本語を専攻し、言語学習、翻訳、会話、字幕、異文化表現に関心があります。複数の言語で考える経験は、文章やデザインにも影響を与えています。",
        },
        {
          title: "文章とクリエイティブ制作",
          description:
            "散らばったアイデアを整理し、イベント資料、映像台本、プレゼンテーション、進行表、企画書、ビジュアルプロンプトなどの形にまとめています。",
        },
      ],
      connectTitle: "Keep in touch",
      connectParagraphs: [
        "アプリ、写真、言語学習、クリエイティブ制作、あるいは一緒に考えてみたいアイデアがありましたら、どうぞ気軽にご連絡ください。",
        "制作物をご覧いただく場合も、会話を始める場合も、EmailとGitHubが最も分かりやすい窓口です。",
      ],
      contactCta: "連絡先を見る",
      featuredTitle: "主な制作",
      featuredCta: "ほかのプロジェクトを見る",
      highlightsTitle: "最近の活動",
      highlightsEmpty: "現在、掲載中の更新情報はありません。",
      highlightsCta: "これまでの歩みを見る",
    },
    projects: {
      title: "Projects",
      description:
        "Calvin Leeが手がけたプロジェクト、試作、デジタルツールを紹介します。",
      intro:
        "これまでに取り組んだプロジェクトの一部です。詳細やその他の試作はGitHubでもご覧いただけます。",
      projectThumbnail: "プロジェクトのサムネイル",
      sourceTitle: "GitHubでソースを見る",
      repositoryTitle: (name: string) => `${name}をGitHubで見る`,
      liveTitle: "公開サイトを見る",
      liveLabel: "Live Site",
    },
    timeline: {
      title: "Timeline",
      description: "主な経験、受賞、発表を時系列で紹介します。",
      all: "すべて",
      newest: "新しい順",
      oldest: "古い順",
      categories: {
        Experiences: "経験",
        Honors: "受賞",
        Publications: "発表",
      },
    },
    contact: {
      title: "Contact",
      description:
        "アプリ、写真、言語学習、クリエイティブ制作についてCalvin Leeへご連絡いただけます。",
      intro: ["どうぞ気軽にご連絡ください。", "主な連絡先と制作物をご覧いただける場所をまとめています。"],
      sectionTitle: "連絡先",
      sectionDescription:
        "プロジェクト、写真、言語学習、共同制作のアイデアなどについて、お気軽にお声がけください。",
    },
    resume: {
      title: "Résumé",
      description:
        "Calvin Leeのプロフィール、学歴、受賞歴、アプリ制作、スキル、連絡先を掲載しています。",
      download: "日本語版PDFをダウンロード",
      pdfFile: "/Calvin-Lee-Resume-JA.pdf",
      pdfName: "Calvin-Lee-Resume-JA.pdf",
      sections: {
        profile: "プロフィール",
        education: "学歴",
        awards: "受賞歴",
        experience: "活動経験",
        projects: "アプリプロジェクト",
        skills: "スキル",
        contact: "連絡先",
      },
      work: "関連作品",
      selectedWork: "主な制作",
      selectedWorkTitle: "アプリ、道具、制作の実践",
      labels: { email: "Email", github: "GitHub", wechat: "WeChat" },
    },
    footer: {
      about: "About",
      builtBy: "Build by Calvin with ❤️",
      copyright: "All rights reserved.",
      links: "Links",
      home: "Home",
      resume: "Résumé",
      contact: "Contact",
      connect: "Connect",
      language: "Language",
      languageLabel: "サイトの言語を選択",
    },
    accessibility: {
      backHome: "ホームへ戻る",
      scrollDown: "次のセクションへ移動",
      email: "メールを送る",
      github: "GitHubプロフィール",
    },
  },
} as const;

const japaneseProjects: ProjectDataItem[] = allProjectsData.map((project) => {
  const localizedProject = {
    ...project,
    timeframe:
      project.timeframe === "April 2025" ? "2025年4月" : project.timeframe,
    imageAlt: "ポートフォリオサイトのホーム画面",
  };

  if (project.title !== "Nagare") {
    return localizedProject;
  }
  return {
    ...localizedProject,
    description: `
      <p><strong>Nagare</strong>は、現在ご覧いただいている<em>Astro</em>製のポートフォリオサイトテンプレートです。</p>
      <p>動きのある背景、レスポンシブデザイン、滑らかなページ遷移を備え、タイムライン、プロジェクト、経歴を静かな構成で紹介します。</p>
    `,
    homepageSummary:
      "現在ご覧いただいている、<em>Astro</em>製のポートフォリオサイトテンプレートです。",
  };
});

export function getProjects(locale: Locale): ProjectDataItem[] {
  return locale === "ja" ? japaneseProjects : allProjectsData;
}

const japaneseTimeline: TimelineEventItem[] = allTimelineEvents.map((event) => {
  if (event.title === "Sleeping is all you need") {
    return {
      ...event,
      dateRange: undefined,
      description:
        "<em>Sleeping is all you need</em>がInternational Conference on Sleep Deprivation and Coffee Addictionに採択されました。",
      highlightSummary:
        "睡眠の必要性を扱った研究がICSDCAに採択されました。",
    };
  }
  if (event.title === "International Vibe Coding Award") {
    return {
      ...event,
      description:
        "<p>International Vibe Coding Awardを受賞しました。</p>",
      highlightSummary: "International Vibe Coding Awardを受賞しました。",
    };
  }
  return {
    ...event,
    dateRange: event.dateRange
      ?.replace("July 2024", "2024年7月")
      .replace("September 2024", "2024年9月")
      .replace("September 2023", "2023年9月")
      .replace("June 2024", "2024年6月"),
  };
});

export function getTimeline(locale: Locale): TimelineEventItem[] {
  return locale === "ja" ? japaneseTimeline : allTimelineEvents;
}

export const japaneseResumeData = {
  ...resumeData,
  title: "日本語専攻・個人アプリ開発",
  profile: [
    "南通大学で日本語を専攻しながら、写真、言語学習、ピアノ、個人アプリ開発に取り組んでいます。",
    "日常の小さな気づきを出発点に、写真による記録、文章資料、デジタルプロダクトへと形にしています。現在は、創作的な実践と、丁寧で使いやすいアプリ設計を結びつけることに関心があります。",
  ],
  education: [
    {
      institution: "南通大学",
      detail: "日本語専攻",
      status: "学部在学中",
      date: "2025年9月〜現在",
    },
    {
      institution: "中牟県第一高級中学",
      status: "卒業",
      date: "2022年8月〜2025年6月",
    },
  ],
  awards: [
    {
      title: "「AI映像・新しい視点 OPC」イノベーション・起業コンテスト",
      level: "大学部門 一等賞",
      date: "2026年6月",
      work: {
        title: "New Variable",
        url: "https://www.youtube.com/watch?v=UHWlbPvWGI0",
      },
    },
    {
      title:
        "「外研社・国才杯 理解当代中国」全国大学生外国語能力コンテスト 短編映像部門",
      level: "大学部門 二等賞",
      date: "2026年6月",
    },
    {
      title: "全面発展優秀学生",
      date: "2021年・2023年・2024年",
    },
    {
      title: "優秀学生リーダー",
      date: "2024年10月",
    },
    {
      title: "電子オルガン演奏グレード 10級",
      date: "2017年11月",
    },
  ],
  experience: [
    {
      title: "Microsoft Windows Insider Program",
      date: "2017年11月〜現在",
    },
    {
      title: "WeChat公式アカウント",
      role: "運営",
      date: "2020年5月〜現在",
    },
  ],
  projects: [
    {
      name: "Echo",
      description:
        "素早い記録、短い試行、穏やかな振り返りを通じて、止まっていたタスクへの再着手を支える軽量な生産性アプリです。意図から行動へ移る際の摩擦を、小さなアプリでどこまで減らせるかを探っています。",
    },
    {
      name: "Kisp",
      description:
        "日常の小さなやり取りと軽量なモバイルツールに焦点を当てた、開発中の個人アプリです。身近な必要性を、明快で使いやすい体験へ変える試みです。",
    },
    {
      name: "Latent",
      description:
        "まだ形になっていない写真の着想、撮り逃した場面、次回の撮影につながる手がかりを記録する写真向けアプリです。後悔や着想、繰り返し現れる視覚的な傾向を、自分だけの地図として残せるよう設計しています。",
    },
  ],
  skills: [
    {
      category: "クリエイティブディレクション",
      items: ["写真", "視覚的な観察", "レイアウト", "文章", "ストーリーテリング"],
    },
    {
      category: "アプリ開発",
      items: ["Swift", "SwiftUI", "iOS", "Xcode"],
    },
    {
      category: "デザインと制作",
      items: ["Figma", "Lightroom", "NX Studio", "映像構成", "プレゼンテーション設計"],
    },
    {
      category: "AI支援ワークフロー",
      items: ["ChatGPT / GPT-5.5", "Codex", "Gemini 3.5", "DeepSeek V4"],
    },
  ],
} as const;

export function getResumeData(locale: Locale) {
  return locale === "ja" ? japaneseResumeData : resumeData;
}

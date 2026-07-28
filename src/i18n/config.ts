export const locales = ['en', 'zh'] as const;

export type Locale = (typeof locales)[number];
export type ContentSection = 'articles' | 'shows' | 'projects';

export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    htmlLang: 'en',
    dateLocale: 'en-AU',
    languageSwitch: '中文',
    navigationLabel: 'Primary navigation',
    navigation: {
      home: 'Home',
      articles: 'Writing',
      shows: 'Shows',
      projects: 'Projects',
      about: 'About',
    },
    footerAbout: 'About me',
    home: {
      pageTitle: 'Home',
      description:
        'Teng Li is a builder in Brisbane working across AI, product, technology and culture.',
      eyebrow: 'Builder · Product · AI · Culture',
      headline:
        'Building thoughtful products at the intersection of technology and culture.',
      introduction:
        "I'm Teng Li, a former internet product manager based in Brisbane. I'm learning to build AI applications and documenting the process through essays, shows and hands-on projects.",
      primaryAction: 'Explore my work',
      secondaryAction: 'About me',
      articlesTitle: 'Latest writing',
      articlesDescription:
        'Notes on learning, building, culture and personal change.',
      articlesLink: 'All writing',
      noArticles: 'No published articles yet.',
      projectsTitle: "What I'm building",
      projectsDescription:
        'Turning what I learn into useful, evolving projects.',
      projectsLink: 'All projects',
      noProjects: 'No featured projects yet.',
      showsTitle: 'Shows',
      showsDescription:
        'Audio and video conversations about culture and public life.',
      showsLink: 'All shows',
      noShows: 'No featured shows yet.',
    },
    about: {
      pageTitle: 'About',
      description:
        "Teng Li's background in product, current work in AI application development and independent publishing.",
      eyebrow: 'About',
      headline:
        'From internet product work to AI application development and independent publishing.',
      introduction:
        "I spent years working on e-commerce and enterprise products. Now based in Brisbane, I'm learning to build software and AI applications while documenting the transition through writing, shows and projects.",
      asideTitle: 'At a glance',
      sections: [
        {
          title: 'Product background',
          body:
            'I have around ten years of internet product experience across e-commerce, enterprise software, CRM, gift cards, virtual assets and trading platforms. That work taught me to turn complicated business needs into systems that people can actually use.',
        },
        {
          title: 'Why I am learning to build',
          body:
            'My earlier roles focused on finding problems, defining requirements and coordinating teams. I now want to understand how software is built at a deeper level and become able to create prototypes, APIs, data workflows and AI applications independently.',
        },
        {
          title: 'What I am learning',
          body:
            'My current focus includes Python, Git, testing, FastAPI, Astro, frontend fundamentals, large language model applications and AI agents.',
        },
        {
          title: 'Writing and shows',
          body:
            'Alongside technology, I keep returning to culture, history, cities, public discussion and the way knowledge travels. This site brings together my essays, audio and video work, and the research behind them.',
        },
        {
          title: 'Why this site exists',
          body:
            'This is both a personal introduction and a long-term archive of work. The site itself is also a project that I will keep improving with better content systems, interactions and, eventually, useful AI features.',
        },
      ],
      facts: [
        ['Location', 'Brisbane, Australia'],
        ['Background', 'Internet Product Manager'],
        ['Current direction', 'AI Application Development'],
        ['Interests', 'Technology, Culture, History'],
        ['Learning', 'Python, FastAPI, Astro'],
      ],
    },
    articles: {
      pageTitle: 'Writing',
      description:
        'Essays and notes on AI, product, culture, cities and life in Australia.',
      eyebrow: 'Writing',
      introduction:
        'Essays and working notes on technology, product practice, culture, cities and life in Australia.',
      empty: 'No articles in English yet.',
      read: 'Read article',
      tagsLabel: 'Article tags',
      publishedOn: 'Published',
      updatedOn: 'Updated',
      draft: 'Draft',
      draftPreview: 'Draft preview',
      back: 'Back to all writing',
    },
    shows: {
      pageTitle: 'Shows',
      description:
        'Audio and video shows, transcripts and related reading.',
      eyebrow: 'Shows',
      introduction:
        'Audio and video work, with episode notes, transcripts and related material.',
      empty: 'No shows in English yet.',
      view: 'View show',
      tagsLabel: 'Show tags',
      publishedOn: 'Published',
      episode: 'Episode {number}',
      platformAction: 'Open on the show platform',
      back: 'Back to all shows',
    },
    projects: {
      pageTitle: 'Projects',
      description: 'Personal technology projects I am building and improving.',
      eyebrow: 'Projects',
      introduction:
        'A record of the products and technical projects I am learning through, building and continuing to improve.',
      empty: 'No projects in English yet.',
      view: 'View project',
      techLabel: 'Technology stack',
      startedOn: 'Started',
      updatedOn: 'Updated',
      demoAction: 'View live site',
      repositoryAction: 'View on GitHub',
      back: 'Back to all projects',
    },
    articleCategories: {
      'ai-tech': 'AI & Technology',
      'learning-development': 'Learning & Development',
      'society-culture': 'Society & Culture',
      'history-cities': 'History & Cities',
      'australia-life': 'Life in Australia',
    },
    showTypes: {
      podcast: 'Podcast',
      video: 'Video',
      audio: 'Audio',
    },
    projectStatuses: {
      planning: 'Planning',
      building: 'In development',
      maintaining: 'Maintaining',
      completed: 'Completed',
      paused: 'Paused',
    },
  },
  zh: {
    htmlLang: 'zh-CN',
    dateLocale: 'zh-CN',
    languageSwitch: 'English',
    navigationLabel: '主要导航',
    navigation: {
      home: '首页',
      articles: '文章',
      shows: '节目',
      projects: '项目',
      about: '关于',
    },
    footerAbout: '关于我',
    home: {
      pageTitle: '首页',
      description:
        'Teng Li 的个人网站，记录 AI 应用开发、产品、社会文化、历史与澳洲生活。',
      eyebrow: 'Builder · Product · AI · Culture',
      headline: '在技术、产品与人文之间，建立自己的长期作品。',
      introduction:
        '我是 Teng Li，曾长期从事互联网产品工作，现居布里斯班。目前正在学习 AI 应用开发，并持续写作科技、历史、城市与社会文化相关内容。',
      primaryAction: '浏览作品',
      secondaryAction: '了解我',
      articlesTitle: '最新文章',
      articlesDescription: '关于技术学习、文化观察和个人转型的记录。',
      articlesLink: '全部文章',
      noArticles: '目前还没有已发布文章。',
      projectsTitle: '正在开发',
      projectsDescription: '将学习过程转化为可以展示和持续迭代的项目。',
      projectsLink: '全部项目',
      noProjects: '目前还没有精选项目。',
      showsTitle: '节目',
      showsDescription: '围绕社会文化与公共议题展开的音频和视频内容。',
      showsLink: '全部节目',
      noShows: '目前还没有精选节目。',
    },
    about: {
      pageTitle: '关于我',
      description: '关于 Teng Li 的产品经历、AI 应用开发学习和内容创作。',
      eyebrow: 'About',
      headline: '从互联网产品工作，走向 AI 应用开发与独立创作。',
      introduction:
        '我曾长期从事电商和企业服务产品工作。目前生活在布里斯班，正在系统学习编程与 AI 应用开发，并通过文章、节目和项目记录这一转变。',
      asideTitle: '当前信息',
      sections: [
        {
          title: '过去的工作',
          body:
            '我拥有约十年的互联网产品经验，参与过电商、企业服务、CRM、礼品卡、虚拟资产和交易平台等产品。这些经历让我长期关注如何将复杂的业务需求转化为可以稳定运行的产品系统。',
        },
        {
          title: '为什么学习开发',
          body:
            '过去我主要负责发现问题、定义需求和协调团队。现在我希望进一步理解软件怎样被真正构建出来，并具备独立完成原型、API、数据处理和 AI 应用的能力。',
        },
        {
          title: '当前学习方向',
          body:
            '目前的学习重点包括 Python、Git、测试、FastAPI、Astro、基础前端开发，以及大语言模型应用和 AI Agent。',
        },
        {
          title: '内容创作',
          body:
            '除了技术学习，我持续关注社会文化、历史、城市、公共讨论与知识传播。这个网站将集中展示文章、音频和视频节目，以及它们背后的研究资料。',
        },
        {
          title: '这个网站的意义',
          body:
            '它既是个人介绍网站，也是一个长期作品档案。网站本身同样是一个开发项目：我会持续改进内容系统、交互体验和未来的 AI 功能。',
        },
      ],
      facts: [
        ['所在地', 'Brisbane, Australia'],
        ['过去经历', 'Internet Product Manager'],
        ['当前方向', 'AI Application Development'],
        ['关注主题', 'Technology, Culture, History'],
        ['正在学习', 'Python, FastAPI, Astro'],
      ],
    },
    articles: {
      pageTitle: '文章',
      description: '关于 AI、产品、社会文化、历史城市和澳洲生活的文章。',
      eyebrow: 'Articles',
      introduction: '这里记录技术学习、产品实践、社会文化、历史城市与澳洲生活。',
      empty: '目前还没有文章。',
      read: '阅读全文',
      tagsLabel: '文章标签',
      publishedOn: '发布于',
      updatedOn: '更新于',
      draft: '草稿',
      draftPreview: '草稿预览',
      back: '返回文章列表',
    },
    shows: {
      pageTitle: '节目',
      description: '音频、播客和视频节目，以及相关文字稿和延伸资料。',
      eyebrow: 'Shows',
      introduction:
        '这里集中展示音频、播客和视频节目，以及对应的节目简介、文字稿和延伸内容。',
      empty: '目前还没有已发布节目。',
      view: '查看节目',
      tagsLabel: '节目标签',
      publishedOn: '发布于',
      episode: '第 {number} 期',
      platformAction: '前往节目平台',
      back: '返回节目列表',
    },
    projects: {
      pageTitle: '项目',
      description: '正在开发和持续迭代的个人技术项目。',
      eyebrow: 'Projects',
      introduction: '展示我正在学习、开发和持续迭代的技术项目。',
      empty: '目前还没有已发布项目。',
      view: '查看项目',
      techLabel: '技术栈',
      startedOn: '开始于',
      updatedOn: '更新于',
      demoAction: '查看网站',
      repositoryAction: '查看 GitHub',
      back: '返回项目列表',
    },
    articleCategories: {
      'ai-tech': 'AI 与科技',
      'learning-development': '学习与开发',
      'society-culture': '社会与文化',
      'history-cities': '历史与城市',
      'australia-life': '澳洲生活',
    },
    showTypes: {
      podcast: '播客',
      video: '视频',
      audio: '音频',
    },
    projectStatuses: {
      planning: '规划中',
      building: '开发中',
      maintaining: '持续维护',
      completed: '已完成',
      paused: '暂停',
    },
  },
} as const;

export function localizedPath(locale: Locale, path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === '/' ? '/zh/' : `/zh${normalizedPath}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const unprefixedPath = pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  return localizedPath(targetLocale, unprefixedPath);
}

export function contentSlug(id: string): string {
  return id.replace(/^(en|zh)\//, '');
}

export function contentPath(
  section: ContentSection,
  id: string,
  locale: Locale,
): string {
  return localizedPath(locale, `/${section}/${contentSlug(id)}/`);
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

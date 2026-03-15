import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Sim-KUng.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/phantom-jam-blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sim-KUng', // Usually your GitHub org/user name.
  projectName: 'phantom-jam-blog', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          }
        },
        // --- 1. 상단바(Navbar) 설정 ---
        navbar: {
          title: 'Sim-KUng', // 아까 수정하신 팀 이름
          logo: {
            alt: 'Sim-KUng Logo',
            src: 'img/logo.svg', // 나중에 아이콘 구하시면 여기에!
          },
          items: [
            // 불필요한 Tutorial 글씨를 지우고, 우리가 쓸 '스터디 기록(Docs)'으로 바꿉니다.
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: '스터디 기록', 
            },
            // Blog 메뉴도 프로젝트 '주간 회의록' 느낌으로 이름을 바꿉니다. (안 쓰면 이 블록 통째로 삭제)
            {to: '/blog', label: '주간 회의록', position: 'left'},
            
            // 우측의 도쿠사우루스 깃허브 링크를 우리 팀 깃허브 링크로 바꿉니다.
            {
              href: 'https://github.com/Sim-KUng/phantom-jam-blog',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },

        // --- 2. 하단바(Footer) 설정 ---
        footer: {
          style: 'dark',
          links: [], // 도쿠사우루스 디스코드, 트위터 등 잡다한 링크들을 빈 배열([])로 만들어 싹 날려버립니다!
          
          // 하단 카피라이트(저작권) 문구를 우리 팀과 학교 이름으로 바꿉니다.
          copyright: `Copyright © ${new Date().getFullYear()} Sim-KUng (Konkuk Univ). Built with Docusaurus.`,
        },
        
        // (참고: 이 아래에 prism 관련 코드 등이 있다면 그대로 두시면 됩니다)
      }),

      stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2rmk5f9Ilyo8CQIy8VQS',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;

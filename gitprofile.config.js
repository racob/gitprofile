// gitprofile.config.js

const config = {
  profile: {
    bio: 'Mobile App Dev ● Swift (iOS) ● Flutter (Android & iOS)',
    location: 'Indonesia',
    pictureURL:
      '/eibiel.jpg',
  },
  github: {
    username: 'racob', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
      'racob.github.io',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'eibiel',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'eibiel.sardjanto@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/1Zxz15kbRtpN2BogQ-zgJjWkmHrpfYtiA?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Swift',
    'UIkit',
    'SwiftUI',
    'Combine',
    'RxSwift',
    'Moya',
    'UI/Unit Testing',
    'CI/CD',
    'Flutter',
    'Riverpod',
    'Firebase',
    'Google Maps API',
    'JavaScript',
    'Vue.js',
    'Strapi',
    'PostgreSQL',
    'Git',
  ],
  experiences: [
    {
      company: 'PT. eWidePlus Indonesia',
      position: 'iOS Developer',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'http://ewideplus.com/main.asp',
    },
    {
      company: 'PT. BFI Finance Indonesia, Tbk',
      position: 'Flutter Mobile Developer',
      from: 'December 2022',
      to: 'January 2024',
      companyLink: 'https://www.bfi.co.id/en',
    },
    {
      company: 'Ice House',
      position: 'iOS Developer',
      from: 'September 2021',
      to: 'December 2022',
      companyLink: 'https://icehousecorp.com/',
    },
    {
      company: 'PT. DGAS Alam Semesta',
      position: 'Freelance Web Developer',
      from: 'April 2021',
      to: 'November 2021',
      companyLink: 'https://dgas.co.id/',
    },
    {
      company: 'Apple Developer Academy Indonesia',
      position: 'Junior iOS Developer',
      from: 'March 2019',
      to: 'February 2020',
      companyLink: 'https://dgas.co.id/',
    },
  ],
  certifications: [
    {
      name: 'Flutter Developer Expert - Dicoding Indonesia',
      body: 'Learn best practices in developing Flutter applications according to industry standards. Create release-ready applications with high-quality, scalable code that can evolve based on user feedback.',
      year: 'March 2024',
      link: 'https://www.dicoding.com/certificates/2VX3OG79NZYQ',
    },
    {
      name: 'Secure Coding Overview - Cyber Academy Indonesia',
      body: 'Developers learn various attack techniques on applications, and how attacks can occur, and provide insight for developers about what things must be considered in building secure applications.',
      year: 'September 2023',
      link: 'https://www.cyberacademy.id/certificate/SCOC02109231729',
    },
  ],
  education: [
    {
      institution: 'International University Liaison Indonesia (IULI)',
      degree: 'Bachelor of Engineering - BE, Computer Science',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'University of New South Wales (UNSW)',
      degree: 'Bachelor of Engineering - BE (Honours), Software Engineering',
      from: '2016',
      to: '2018 (Transfer to IULI)',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Line Bank (iOS)',
      description: 'Worked with Hana Bank Korea to develop their iOS mobile digital banking app, Line Bank.',
      imageUrl: `/linebank.png`,
      link: 'https://linebank.co.id/id',
    },
    {
      title: 'MyBCA (iOS)',
      description:
        'Worked with Bank Central Asia to implement banking features for their iOS mobile banking app.',
      imageUrl: `/bca.jpeg`,
      link: 'https://apps.apple.com/id/app/mybca/id1440241902',
    },
    {
      title: 'SQUARE (Android & iOS)',
      description:
        'Super Quick Utility ARE is a GREAT all-in-one platform for ARE and designed to assist your overall agency activities & sales process.',
      imageUrl:
        '/square.webp',
      link: 'https://play.google.com/store/apps/details?id=id.co.bfi.aretracker',
    },
    {
      title: 'Jualanmu (iOS)',
      description:
        'An iOS app to help small and medium enterprises manage and analyze their business with easy-to-use features for inventory, transaction, and report.',
      imageUrl:
        '/jualanmu.jpeg',
      link: 'https://appadvice.com/app/jualanmu-pos-and-report/1490369748',
    },
    {
      title: 'Calistrainer (iOS)',
      description:
        'An iOS app that helps beginners practice simple calisthenic movements based on pose estimation. Developed for bachelor thesis.',
      imageUrl: '/calistrainer.png',
      link: 'https://github.com/racob/calistrainer',
    },
    {
      title: 'Archy (iOS)',
      description:
        'Body tracking app to help archers gain feedback on their posture in order to increase their performance and accuracy.',
      imageUrl: '/archy.png',
      link: 'https://www.behance.net/gallery/90954233/Archy',
    },
    {
      title: 'Qiroah (iOS)',
      description:
        "Learning-by-doing-based iOS application for improving the pronunciation of reading the Qur'an, provided with video materials from nationally certified Qur'an instructors.",
      imageUrl:
        '/qiroah.webp',
      link: 'https://www.qiroah.com/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

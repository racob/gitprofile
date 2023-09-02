// gitprofile.config.js

const config = {
  profile: {
    bio: 'Mobile App Dev ● Swift (iOS) ● Flutter (Android & iOS)',
    location: 'Jakarta, Indonesia',
    pictureURL:
      'https://i.postimg.cc/ydSQhzLN/202205167955082841665308286-Original.jpg',
  },
  github: {
    username: 'racob', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
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
      'https://drive.google.com/file/d/1pOtIlbuqvCdHeRe9G5XaD-cB-HdgVHxo/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Swift',
    'UIkit',
    'SwiftUI',
    'Combine',
    'Moya',
    'CI/CD',
    'Flutter',
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
      company: 'PT. BFI Finance Indonesia, Tbk',
      position: 'Flutter Mobile Developer',
      from: 'December 2022',
      to: 'Present',
      companyLink: 'https://www.bfi.co.id/en',
    },
    {
      company: 'Ice House',
      position: 'iOS Developer',
      from: 'May 2022',
      to: 'December 2022',
      companyLink: 'https://icehousecorp.com/',
    },
    {
      company: 'Ice House',
      position: 'iOS Developer intern',
      from: 'September 2021',
      to: 'February 2022',
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
      from: 'February 2020',
      to: 'March 2019',
      companyLink: 'https://dgas.co.id/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
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
      title: 'MyBCA (iOS)',
      description:
        'Worked with Bank Central Asia to implement banking features for their iOS mobile banking app.',
      imageUrl: `data:image/jpeg;base64,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`,
      link: 'https://apps.apple.com/id/app/mybca/id1440241902',
    },
    {
      title: 'SQUARE (Android & iOS)',
      description:
        'Super Quick Utility ARE is a GREAT all-in-one platform for ARE and design to assist your overall agency activities & sales process.',
      imageUrl:
        'https://play-lh.googleusercontent.com/LEVt09Q_pkoTEDi9k3WYtgCAQHsacvmA6jhlxrCeR1nQe4UrzkB74LfL_3lFKy3VsA=w480-h960-rw',
      link: 'https://play.google.com/store/apps/details?id=id.co.bfi.aretracker',
    },
    {
      title: 'Jualanmu (iOS)',
      description:
        'An iOS app to help small and medium enterprises manage and analyze their business with easy-to-use features for inventory, transaction, and report.',
      imageUrl:
        'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/c2/a4/29/c2a42990-2a6a-bfff-17ac-9a7096cc5e22/source/512x512bb.jpg',
      link: 'https://appadvice.com/app/jualanmu-pos-and-report/1490369748',
    },
    {
      title: 'Calistrainer (iOS)',
      description:
        'An iOS app that helps beginners practice simple calisthenic movements based on pose estimation. Developed for bachelor thesis.',
      imageUrl: 'https://i.postimg.cc/hPgC2Rd3/Icon.png',
      link: 'https://drive.google.com/file/d/1mOpEm5871k5edRC5FovezJJlyOfLVNz3/view?usp=drive_link',
    },
    {
      title: 'Archy (iOS)',
      description:
        'Body tracking app to help archers gain feedback on their posture in order to increase their performance and accuracy.',
      imageUrl: 'https://i.postimg.cc/x86v1h19/archy.png',
      link: 'https://www.behance.net/gallery/90954233/Archy',
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
    defaultTheme: 'lemonade',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

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

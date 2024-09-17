export interface Project {
  path: URLPath;
  name: string;
  date: string;
  subtitle: string;
  description: string[];
  categories: ProjectCategory[];
  imgUrl: string;
  appStoreUrl: null | string;
  playStoreUrl: null | string;
  webAppUrl: null | string;
  links: null | Link[];
  technologies: null | Link[];
  privacy?: string[];
  terms?: TermsType[];
}

export type ProjectCategory = "Native" | "Web" | "Hardware";

interface Link {
  name: string;
  link: string;
}

type URLPath =
  | "smart-water-control"
  | "frid"
  | "todoaholic"
  | "cruiseaholic"
  | "knowt-mobile"
  | "personal-website"
  | "snitt"
  | "tic-tac-toe"
  | "den-store-bokmalsordboka"
  | "fast-rhymes"
  | "hunnor"
  | "ev-calculator"
  | "g-eazy-discography"
  | "electric-longboard"
  | "home-automation"
  | "privatek"
  | "esk8-calculator"
  | "autonomous-robot"
  | "fpv-racing-drone-v2"
  | "camera-drone"
  | "fpv-racing-drone";

type TermsType = {
  title: string;
  content: string;
};

const projects: Project[] = [
  {
    path: "fast-rhymes",
    date: "2019 - Present",
    name: "Fast Rhymes",
    subtitle: "Tri-platform iOS, Android and web songwriting app.",
    description: [
      "Tri-platform mobile (iOS, Android and web) songwriting app, built using React Native, React Native for Web, Redux, Expo, and Firebase. Find words that rhyme, associations, words with similar meaning, words with similar spelling, definitions, etc. You can sort search results by syllables or sort by the most relevant words.",
      "With an integrated lyrics editor, you can swipe between search and the lyrics you are working on. It was built to be fast and convenient, with a minimalist design to not be in the way of the artists' creative process.",
    ],
    categories: ["Native", "Web"],
    imgUrl: "/img/projects/fast-rhymes.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/fast-rhymes/id1492575811?ls=1",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=rhyme.dictionary.mobileapp",
    webAppUrl: "https://app.fastrhymes.com/",
    links: [
      {
        name: "Landing Page",
        link: "https://fastrhymes.com/",
      },
      {
        name: "ProductHunt",
        link: "https://www.producthunt.com/products/fast-rhymes",
      },
      {
        name: "Kode24.no Article",
        link: "https://www.kode24.no/artikkel/plutselig-tok-andors-app-av-pa-app-store-jeg-tjener-litt-pa-den/81860727",
      },
      {
        name: "Koncertbooking.com Article",
        link: "https://koncertbooking.com/blog/olyan-eszkozt-akartunk-letrehozni-ami-inspiral-es-segit-tobb-zene-letrehozasaban-davoti-andorral-a-fast-rhymes-letrehozojaval-beszelgettunk",
      },
      {
        name: "Paywall review by Nikita Maidanov",
        link: "https://paywall.tips/fast-rhymes/",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "Redux",
        link: "https://redux.js.org/",
      },
      {
        name: "Expo",
        link: "https://expo.io/",
      },
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
      {
        name: "React Native for Web",
        link: "https://github.com/necolas/react-native-web",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Firebase",
        link: "https://firebase.google.com/",
      },
      {
        name: "GitHub Actions",
        link: "https://github.com/features/actions",
      },
    ],
    terms: [
      {
        title: "",
        content:
          'Please read these terms of service ("terms", "terms of service") carefully before using the Fast Rhymes mobile and web app (the "service") is operated by Andor Davoti (“I”, "me").',
      },
      {
        title: "Conditions of Use",
        content:
          "I will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this app, use its services, or make a purchase, you accept the following conditions. This is why I urge you to read them carefully.",
      },
      {
        title: "Communications",
        content:
          "All communication with me is electronic. Every time you send me an email or visit the website or the app, you are going to be communicating with me. You hereby consent to receive communications from me. You also agree that all notices, disclosures, agreements, and other communications we provide to you electronically meet the legal requirements that such communications be in writing.",
      },
      {
        title: "Applicable Law",
        content:
          "By visiting this website, you agree that the laws of the United States, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between me and you, or business partners and associates.",
      },
      {
        title: "Disputes",
        content:
          "Any dispute related in any way to your purchases or visit to the web or mobile app shall be arbitrated by state or federal court in the United States and you consent to exclusive jurisdiction and venue of such courts. ",
      },
    ],
  },
  {
    path: "todoaholic",
    date: "2021 - Present",
    name: "todoaholic",
    subtitle: "A minimalist open-source and free todo app.",
    description: [
      "“todoaholic” is a free and open-source minimalist todo app for iOS, Android, macOS and web. Designed to feel like your old school todo list on pen and paper.",
      "For more info about the project, visit the project's GitHub page.",
    ],
    categories: ["Native", "Web"],
    imgUrl: "/img/projects/todoaholic.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/todoaholic/id1601535769",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.andordavoti.todoaholic",
    webAppUrl: "https://todoaholic.com/",
    links: [
      {
        name: "GitHub repo",
        link: "https://github.com/andordavoti/todoaholic",
      },
    ],
    technologies: [
      {
        name: "Flutter",
        link: "https://flutter.dev/",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Firebase",
        link: "https://firebase.google.com/",
      },
      {
        name: "GitHub Actions",
        link: "https://github.com/features/actions",
      },
    ],
    privacy: [
      "Anonymous user data is collected for Firebase Analytics, Firebase Crashlytics and Firebase Performance Monitoring.",
    ],
    terms: [
      {
        title: "",
        content:
          'Please read these terms of service ("terms", "terms of service") carefully before using the todoaholic mobile and web app (the "service") is operated by Andor Davoti (“I”, "me").',
      },
      {
        title: "Conditions of Use",
        content:
          "I will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this app, use its services, or make a purchase, you accept the following conditions. This is why I urge you to read them carefully.",
      },
      {
        title: "",
        content:
          'I take no responsibility for the use of this app. The app is provided as-is, and do not guarantee that it will work as expected or that the your data is safe. The app is provided "as is". I do not warrant that the app will be uninterrupted or error-free. You assume all risks associated with the use of this app.',
      },
      {
        title: "",
        content:
          "If the user is inactive for three months, all user data as well as the user account will be deleted.",
      },
      {
        title: "Communications",
        content:
          "All communication with me is electronic. Every time you send me an email or visit the website or the app, you are going to be communicating with me. You hereby consent to receive communications from me. You also agree that all notices, disclosures, agreements, and other communications we provide to you electronically meet the legal requirements that such communications be in writing.",
      },
      {
        title: "Applicable Law",
        content:
          "By visiting this website, you agree that the laws of the United States, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between me and you, or business partners and associates.",
      },
      {
        title: "Disputes",
        content:
          "Any dispute related in any way to your purchases or visit to the web or mobile app shall be arbitrated by state or federal court in the United States and you consent to exclusive jurisdiction and venue of such courts. ",
      },
    ],
  },
  {
    path: "smart-water-control",
    date: "2022",
    name: "Smart Water Control",
    subtitle: "A simple IoT water control switch.",
    description: [
      "Created a simple water control switch that can be controlled from anywhere.",
      "Read more about it in the medium article linked below.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/smart-water-control.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "Medium article",
        link: "https://medium.com/@andordavoti/diy-smart-water-control-64f86096e1fe",
      },
    ],
    technologies: [
      {
        name: "Home Assistant",
        link: "https://www.home-assistant.io/",
      },
      {
        name: "ESPHome",
        link: "https://esphome.io/",
      },
      {
        name: "YAML",
        link: "https://yaml.org/",
      },
    ],
  },
  {
    path: "frid",
    date: "2021 - 2023",
    name: "Frid",
    subtitle: "Finance app for iOS and Android.",
    description: [
      "Frid is a finance app for iOS and Android. It gives you an overview of all your finances in one place.",
      "While working for Frid, I have taken the frontend app development from scratch to open beta by myself, and I'm now focusing on learning backend development.",
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/frid.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/frid/id1574147575",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=no.visonomic.mobileapp",
    webAppUrl: null,
    links: [
      {
        name: "Website",
        link: "https://frid.app/",
      },
    ],
    technologies: [
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "AWS",
        link: "https://aws.amazon.com/",
      },
      {
        name: "Java",
        link: "https://dev.java/",
      },
      {
        name: "GitHub Actions",
        link: "https://github.com/features/actions",
      },
    ],
  },
  {
    path: "personal-website",
    name: "Personal Website",
    date: "2020 - Present",
    subtitle: "This website.",
    description: [
      "One central place for all of my past and present projects. The first version of this website was built with Typescript, React and Material UI. The project was then utilizing Preact in production to keep the bundle size small.",
      "Since then it's been rewritten with Next.js and React. The website is hosted on Vercel, and the source code is available on GitHub.",
    ],
    categories: ["Web"],
    imgUrl: "/img/projects/personal-website.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "Website URL",
        link: "https://andordavoti.com/",
      },
      {
        name: "New GitHub repo",
        link: "https://github.com/andordavoti/andordavoti",
      },
      {
        name: "Old GitHub repo",
        link: "https://github.com/andordavoti/personal-website",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        name: "Preact",
        link: "https://preactjs.com/",
      },

      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },

      {
        name: "Material UI",
        link: "https://material-ui.com/",
      },
    ],
  },
  {
    path: "cruiseaholic",
    name: "Cruiseaholic",
    date: "2021",
    subtitle: "Booking platform for cruises in .NET & React.",
    description: [
      "Web app for booking cruises. Developed with a React frontend and a .NET backend.",
    ],
    categories: ["Web"],
    imgUrl: "/img/projects/cruiseaholic.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "GitHub repo",
        link: "https://github.com/andordavoti/cruiseaholic",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Material UI",
        link: "https://material-ui.com/",
      },
      {
        name: ".NET",
        link: "https://dotnet.microsoft.com/en-us/",
      },
    ],
  },
  {
    path: "knowt-mobile",
    name: "Knowt Mobile App",
    date: "2020 - 2021",
    subtitle: "iOS and Android app with a focus on a better way to learn.",
    description: [
      "The Knowt mobile app uses artificial intelligence and machine learning to automatically create quizzes and flashcards from your notes. While working at Knowt I was taking part in developing the mobile app.",
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/knowt.jpg",
    appStoreUrl:
      "https://itunes.apple.com/us/app/knowt-quizzes-from-your-notes/id1462368057?mt=8",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.getknowt.knowt.android",
    webAppUrl: null,
    links: [
      {
        name: "Website",
        link: "https://knowt.io/",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },

      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },

      {
        name: "Expo",
        link: "https://expo.io/",
      },
    ],
  },
  {
    path: "snitt",
    name: "Snitt",
    date: "2020",
    subtitle: "A free cross-platform mobile app for high school students.",
    description: [
      "A free cross-platform mobile app for Norwegian high school students. The student can add which subjects he/she has completed and which subject he/she will have in the future. This way the student gets an overview of their subjects and their grade performance. Then the app auto calculates their average grade with both the grade estimation for their future subjects and without. This way the student knows how much a single grade will impact their average score. The app also shows them their strongest and weakest subjects, this way they know what to focus on if they want to improve their score.",
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/snitt.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/id1525721970",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.andordavoti.snitt",
    webAppUrl: null,
    privacy: [
      "Anonymous user data is collected for Firebase Analytics, Firebase Crashlytics and Firebase Performance Monitoring.",
    ],
    terms: [
      {
        title: "",
        content:
          'Please read these terms of service ("terms", "terms of service") carefully before using the todoaholic mobile and web app (the "service") is operated by Andor Davoti (“I”, "me").',
      },
      {
        title: "Conditions of Use",
        content:
          "I will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this app, use its services, or make a purchase, you accept the following conditions. This is why I urge you to read them carefully.",
      },
      {
        title: "",
        content:
          'I take no responsibility for the use of this app. The app is provided as-is, and do not guarantee that it will work as expected or that the your data is safe. The app is provided "as is". I do not warrant that the app will be uninterrupted or error-free. You assume all risks associated with the use of this app.',
      },
      {
        title: "",
        content:
          "If the user is inactive for three months, all user data as well as the user account will be deleted.",
      },
      {
        title: "Communications",
        content:
          "All communication with me is electronic. Every time you send me an email or visit the website or the app, you are going to be communicating with me. You hereby consent to receive communications from me. You also agree that all notices, disclosures, agreements, and other communications we provide to you electronically meet the legal requirements that such communications be in writing.",
      },
      {
        title: "Applicable Law",
        content:
          "By visiting this website, you agree that the laws of the United States, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between me and you, or business partners and associates.",
      },
      {
        title: "Disputes",
        content:
          "Any dispute related in any way to your purchases or visit to the web or mobile app shall be arbitrated by state or federal court in the United States and you consent to exclusive jurisdiction and venue of such courts. ",
      },
    ],
    links: null,
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Redux",
        link: "https://redux.js.org/",
      },
      {
        name: "Expo",
        link: "https://expo.io/",
      },
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },

  {
    path: "tic-tac-toe",
    name: "Tic Tac Toe – Online",
    date: "2020",
    subtitle: "Open-source online tri-platform Tic Tac Toe game.",
    description: [
      "Open-source, tri-platform mobile (iOS, Android and web) online multiplayer game, built using React Native, React Native for Web,  Redux, Expo, Firestore, and Firebase Cloud functions. Play Tic Tac Toe cross-platform, either online or in-person with your friends. Registration is not needed, instead, anonymous lobby id's are utilized. Therefore only you and the one you're playing with online know who is playing with who.",
    ],
    categories: ["Native", "Web"],
    imgUrl: "/img/projects/tic-tac-toe.jpg",
    appStoreUrl:
      "https://apps.apple.com/us/app/tic-tac-toe-online/id1513609441?ls=1",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.andordavoti.tictactoe.game",
    webAppUrl: "https://tictactoe.no/",
    privacy: [
      "Anonymous user data is collected for Firebase Analytics, Firebase Crashlytics and Firebase Performance Monitoring.",
    ],
    terms: [
      {
        title: "",
        content:
          'Please read these terms of service ("terms", "terms of service") carefully before using the todoaholic mobile and web app (the "service") is operated by Andor Davoti (“I”, "me").',
      },
      {
        title: "Conditions of Use",
        content:
          "I will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this app, use its services, or make a purchase, you accept the following conditions. This is why I urge you to read them carefully.",
      },
      {
        title: "",
        content:
          'I take no responsibility for the use of this app. The app is provided as-is, and do not guarantee that it will work as expected or that the your data is safe. The app is provided "as is". I do not warrant that the app will be uninterrupted or error-free. You assume all risks associated with the use of this app.',
      },
      {
        title: "",
        content:
          "If the user is inactive for three months, all user data as well as the user account will be deleted.",
      },
      {
        title: "Communications",
        content:
          "All communication with me is electronic. Every time you send me an email or visit the website or the app, you are going to be communicating with me. You hereby consent to receive communications from me. You also agree that all notices, disclosures, agreements, and other communications we provide to you electronically meet the legal requirements that such communications be in writing.",
      },
      {
        title: "Applicable Law",
        content:
          "By visiting this website, you agree that the laws of the United States, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between me and you, or business partners and associates.",
      },
      {
        title: "Disputes",
        content:
          "Any dispute related in any way to your purchases or visit to the web or mobile app shall be arbitrated by state or federal court in the United States and you consent to exclusive jurisdiction and venue of such courts. ",
      },
    ],
    links: [
      {
        name: "GitHub repo",
        link: "https://github.com/andordavoti/tic-tac-toe-app",
      },
      {
        name: "Reddit post 1",
        link: "https://www.reddit.com/r/reactnative/comments/h8rwi5/online_game_with_firebase/",
      },
      {
        name: "Reddit post 2",
        link: "https://www.reddit.com/r/reactnative/comments/hgf317/tri_platform_reactnative_game_with_expo_firestore/",
      },
    ],
    technologies: [
      {
        name: "Preact",
        link: "https://preactjs.com/",
      },
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Redux",
        link: "https://redux.js.org/",
      },
      {
        name: "Expo",
        link: "https://expo.io/",
      },
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
      {
        name: "React Native for Web",
        link: "https://github.com/necolas/react-native-web",
      },
      {
        name: "Firebase",
        link: "https://firebase.google.com/",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    path: "den-store-bokmalsordboka",
    date: "2019 - 2024",
    name: "Bokmålsordboka",
    subtitle: "iOS and Android app for the largest Norwegian dictionary.",
    description: [
      "Den store bokmålsordboka is the largest Norwegian dictionary, with over 200 000 words. At Ovitas AS I took part in developing the mobile app, managing the external testing and making the landing page. Later, development of the project was taken over by Davoti Solutions, my own company.",
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/bokmalsordboka.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/id1497725111",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=no.ovitas.kirkeby.bokmalsordboka",
    webAppUrl: null,
    links: [
      {
        name: "Landing page",
        link: "https://www.denstorebokmålsordboka.no/appen",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Redux",
        link: "https://redux.js.org/",
      },
      {
        name: "Expo",
        link: "https://expo.io/",
      },
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "SQLite",
        link: "https://www.sqlite.org/index.html",
      },
    ],
  },
  {
    path: "hunnor",
    date: "2019 - 2023",
    name: "HunNor Dictionary",
    subtitle: "Mobile app for a Norwegian-Hungarian dictionary.",
    description: [
      "The HunNor Dictionary is an open-source Norwegian-Hungarian dictionary. At Ovitas AS, I took part in developing the mobile app. Later, development of the project was taken over by Davoti Solutions, my own company.",
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/hunnor.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "Landing page/web version",
        link: "https://dict.hunnor.net/",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Redux",
        link: "https://redux.js.org/",
      },
      {
        name: "Expo",
        link: "https://expo.io/",
      },
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
      {
        name: "SQLite",
        link: "https://www.sqlite.org/index.html",
      },
    ],
  },
  {
    path: "ev-calculator",
    date: "2019",
    name: "EV Calculator",
    subtitle: "Open-source iOS and Android app for EV calculations.",
    description: [
      'This is the continuation of one of my old Android app projects, "ESK8 Calculator". Since I switched to iOS, I wanted the app for both platforms. I also got feedback from my users asking for a "simple mode" with dropdowns with standard approximate values. Therefore I decided to recreate the app with React Native since I was learning it at the time. EV Calculator is an open-source, cross-platform mobile (iOS and Android) calculator app, built using React Native, Redux, and Expo. When building an electric longboard, go-kart, or bike, you often need to recalculate the speed and range of your vehicle throughout the build process. Instead of needing to remember a formula, enter the standard variables necessary for the calculation and examine how these variables affect the speed and range.',
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/ev-calculator.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "GitHub repo",
        link: "https://github.com/andordavoti/ev-calculator-app",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Redux",
        link: "https://redux.js.org/",
      },
      {
        name: "Expo",
        link: "https://expo.io/",
      },
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
    ],
  },
  {
    path: "g-eazy-discography",
    date: "2019",
    name: "G-Eazy Discography",
    subtitle: "App for displaying G-Eazy's discography and tour dates.",
    description: [
      "Open-source, cross-platform mobile (iOS and Android) app to display the discography and tour dates for the artist G-Eazy, built using React Native, Redux, Expo, and the Bandsintown API. Later I lost access to the Bandsintown API since apparently, only people working directly with the artist should have access to it. So they were quite surprised about why they gave me three months' access. Anyways, it was a great learning experience as it was my first React Native project.",
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/g-eazy.jpg",
    appStoreUrl: null,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.andordavoti.geazyalbums",
    webAppUrl: null,
    links: [
      {
        name: "GitHub repo",
        link: "https://github.com/andordavoti/g-eazy-app",
      },
    ],
    technologies: [
      {
        name: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Expo",
        link: "https://expo.io/",
      },
      {
        name: "React Native",
        link: "https://reactnative.dev/",
      },
    ],
  },
  {
    path: "electric-longboard",
    date: "2017 - 2022",
    name: "Electric Longboard",
    subtitle: "High power e-board built from scratch.",
    description: [
      "Since I wanted a last-mile vehicle, I decided that it would be cheaper and lots of fun to build instead of just buying one. I didn't want the typical e-bike or e-scooter which everyone had, so I decided to build an electric longboard. I watched some YouTube videos from some experienced builders and read some posts on the esk8 builders forums. Then I ordered the parts, which were the longboard deck, trucks, and wheels. For electrifying it, I ordered a motor mount, high power BLDC motor, powerful BLDC VESC (an open-source motor controller which allows more customizability than a standard BLDC ESC), belt drive kit with suitable gears, wireless remote, BMS, and high power Samsung 18650 lithium battery cells. I spot welded the battery cells with a 6S4P configuration (6 cells in series, 4 cells in parallel). The enclosure underneath the board was custom built to fit, and I also designed, and 3D printed some custom covers for the drive train. I ended up with a really powerful board with over three horsepower (2500W), a range of over 30km, and a top speed between 25-35km/h.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/e-board.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "3D Printed pulley cover",
        link: "https://www.thingiverse.com/thing:2445734",
      },
    ],
    technologies: null,
  },
  {
    path: "home-automation",
    date: "2017 - Present",
    name: "Home Automation",
    subtitle: "Home automation system built on Home Assistant.",
    description: [
      "After experimenting with home automation on Arduino board switching on and off relays based on sensor data, I wanted something more connected. Thus I bought a couple of ESP8266's, which are Arduino compatible boards with WiFi connectivity for as cheap as 3USD! I first started with automating using the Adafruit MQTT broker, which is free, but had a lot of limitations. The server could be down at any time, and it was unreachable if my internet went down.",
      "So the solution was a system running on my LAN. This way, my devices worked together even if my internet was down, and I had control over the server if it went down. More importantly, I owned the data! I could decide who to share the data with myself and had total control over it.",
      "The solution was Home Assistant. To clarify, I'm not associated with the development of Home Assistant. I'm just a user of their platform. Home Assistant is an open-source home automation platform that acts as a hub for all of your devices. It's probably the world's largest platform in terms of integrations at over 1600 on June 19th of 2020. It's also a local system, which is uncommon in the consumer market. It's not a consumer platform (yet), but it's come a long way since 2017, which is when I started using it.",
      "On top of Home Assistant I have addons for running my ESP8266 devices with custom firmwares. Examples of devices I've built are a lot of multipurpose devices, which is one node that controls light, reports temperature, humidity, door status, etc. I've also made devices like a custom automated watering solution for our greenhouse. This device controls water flow with a servo, reports door status, temperature, humidity, and motion.",
      "The possibilities are endless, and I've only scratched the surface of what's possible. I've learned a lot about IoT technologies, IoT protocols like MQTT, Z-Wave, and Zigbee. I look forward to seeing what Home Assistant evolves to, what new IoT devices I'll make, and contributing to the project myself in the future.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/home-automation.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "3D Print files for Surface Pro 2 wall mount",
        link: "https://www.thingiverse.com/thing:2727094",
      },
      {
        name: "3D Print files for iPad 3 wall mount",
        link: "https://www.thingiverse.com/thing:2727088",
      },
    ],
    technologies: null,
  },
  {
    path: "privatek",
    date: "2017 - 2019",
    name: "Privatek",
    subtitle: "Webcam cover startup.",
    description: [
      "Privatek started as a school project during the first year of High School. We developed a product that solves the cybersecurity flaw of webcams. It's the world's most elegant webcam cover at an affordable price. I was a co-founder and the CEO of the company. We were an officially established youth company in Oslo from 2017 to 2019. During the project, I worked on the company website (linked below), product design, sales, and management.",
      "We won several prizes in the youth entrepreneurship championships. We started by winning 8000NOK from DNB after our first pitch competition. Then we won the best website and second place for the most innovative business at the Oslo youth entrepreneurship championships of 2018. This qualified us for competing in the national competition. There we also won the best website as well as third place for the best business plan.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/privatek.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "Website",
        link: "https://privatek.no/",
      },
    ],
    technologies: null,
  },
  {
    path: "esk8-calculator",
    date: "2017",
    name: "ESK8 Calculator",
    subtitle: "Android app to calculate the speed and range of e-boards.",
    description: [
      "At this time, I considered building my own electric longboard. The issue I ran into when I was planning which parts to use was that I had to recalculate the speed and range of my board with every new part I considered. It isn't a mathematically complex formula, but it was tedious since I always had to check if the part would fit my needs and play nice with the rest of the board. Thus I decided to make a convenient mobile app for it, so I could just enter the specifications of the motor, ESC, battery, wheel size, etc. and the app would calculate it instantly. This way, I could easily see how a different motor would affect performance, making the shopping process much more manageable.",
      'Check out the continuation of this project, "EV Calculator" in the links below.',
    ],
    categories: ["Native"],
    imgUrl: "/img/projects/esk8-calculator.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "EV Calculator",
        link: "https://andordavoti.com/project/ev-calculator",
      },
    ],
    technologies: [
      {
        name: "Android Studio",
        link: "https://developer.android.com/studio/intro",
      },
      {
        name: "Java",
        link: "https://www.oracle.com/java/",
      },
      {
        name: "XML",
        link: "https://www.w3.org/XML/",
      },
    ],
  },
  {
    path: "autonomous-robot",
    date: "2017",
    name: "Autonomous Robot",
    subtitle: "3D printed autonomous app controlled robot.",
    description: [
      "This was actually a really overkill project for one of my classes in the 10th grade. I didn't get the top grade in my \"technology class\" the year before, which I wasn't happy with. So I asked the teacher for the freedom to make something I came up with myself (we previously got some pretty easy and tedious tasks like making a phone stand, etc.).",
      'Since I experimented with Arduinos at the time, I decided that making a simple robot would be a cool project to "wow" the teacher for the top grade. I designed the parts in Fusion 360, and 3D printed them. The design of the robot was fairly simple. It had two wheels attached to two separate motors with a caster wheel in the back. This made full movement and turning possible for the robot.',
      'The brains of the robot was an Arduino Uno with a motor controller shield connected to the two motors. I added a servo motor with a sonar sensor on the top of the robot to give it spacial awareness. It wasn\'t a practical robot, more of a learning and "show off" project. So the primary function it was programmed to do is to roll around the room autonomously with somewhat smart decisions. It "looked" left and right with its sonar sensor, then measured the distances and continued to the path with most space, over and over again, indefinitely.',
      "Later I also added a BlueTooth module to the robot. I wrote an Android app for my phone, which allowed me to control it like an RC car and also activate an autonomous mode.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/robot.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "3D Print files on Thingiverse",
        link: "https://www.thingiverse.com/thing:2445762",
      },
    ],
    technologies: [
      {
        name: "Arduino",
        link: "https://www.arduino.cc/",
      },
    ],
  },
  {
    path: "fpv-racing-drone-v2",
    date: "2016",
    name: "FPV Racing Drone v2",
    subtitle: "Another high power racing drone built from scratch.",
    description: [
      "After building two drones, I gained some experience and decided to build another racing drone. This time I wanted even better performance, so I bought some bigger and more powerful motors, ESCs with firmware tuned for race quads and the same carbon fiber frame I used previously. This time I went for four-cell battery packs, and the performance didn't disappoint.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/racing-drone-v2.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: null,
    technologies: null,
  },
  {
    path: "camera-drone",
    date: "2016",
    name: "Camera Drone",
    subtitle: "Large 500mm drone with a gimbal for stable footage.",
    description: [
      "After building a smaller racing drone, I wanted to build something bigger to carry a stabilized camera. I ordered some motors, ESCs, a frame, and a flight controller with GPS support from China and started building. This time I wanted to have GPS on board for safety. Since it was a larger and more expensive drone, safety features like, return to home and GPS hold were important.",
      "After completing the build, I got a hardshell case for it and brought it to Hungary, where I filmed some astonishing castles. The video is linked below.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/camera-drone.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: [
      {
        name: "Footage of a castle in Hungary from the drone",
        link: "https://youtu.be/-4XclMlrq5w?t=97",
      },
    ],
    technologies: null,
  },
  {
    path: "fpv-racing-drone",
    date: "2014 - 2015",
    name: "FPV Racing Drone",
    subtitle: "High power racing drone built from scratch.",
    description: [
      "As a 13-year-old, I was fascinated by the high power racing drones I saw on YouTube. These drones were operated in FPV (first-person view) through FPV goggles, to give an immersive experience like actually sitting in the drone when flying it. After watching some build guides on YouTube, I decided to go for it. So I saved up and ordered the parts from China.",
      "At that age, I didn't have much experience with electronics, especially not high amperage electronics. So putting together a high power racing drone from just motors, ESCs, a frame, and a flight controller was quite the challenge. I was lucky enough to have the internet as a resource and just watched countless videos on the topic.",
      "In a couple of weeks after receiving the parts, I managed to assemble it! I configured the flight controller with the right firmware and settings, calibrated the ESCs, and was ready to fly. I ran it on a three-cell battery pack, which gave it approximately 10 minutes of flight time and fantastic performance.",
    ],
    categories: ["Hardware"],
    imgUrl: "/img/projects/racing-drone.jpg",
    appStoreUrl: null,
    playStoreUrl: null,
    webAppUrl: null,
    links: null,
    technologies: null,
  },
];

export default projects;

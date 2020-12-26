import { nanoid } from 'nanoid';
import {Link} from "react-router-dom";
import { Document, Page } from 'react-pdf';


// HEAD DATA
export const headData = {
  title: 'Portfolio | Basil', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Basil Faheem 1.',
  subtitle: 'I am a Web Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://pdfhost.io/v/wj2OPmG6l_BasilResumepdf.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid.png',
    title: 'COVID-19 TRACKER',
    info: 'It is a web app developed with javascript library - REACT JS. It is completely a dynamic app which fetches data from disease.sh API and displays data in the form of chart, map and text Components.Libraries used are : CHART.JS, REACT-LEAFLET, MATERIAL-UI',
    info2: '',
    url: 'https://covid-19-tracker-2a967.firebaseapp.com/',
    repo: 'https://github.com/basilfaheem/covid-19-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon.png',
    title: 'Amazon-Clone',
    info: 'A small web app that tries to imitate the desktop web version of amazon site, you can add items to the basket, delete them, and have your user authentification feauture thanks to Firebase.',
    info2: '',
    url: 'https://clone-9bd63.firebaseapp.com/',
    repo: 'https://github.com/basilfaheem/amazon-clone', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'github.png',
    title: 'GITHUB API APP',
    info: 'Developed with REACT JS, web app with user SignIn/signUp &SignOutfunctionality wherein, a user with valid credentials can login anduse the application. It is all about GITHUB API wherein it fetchesselected user data from github API and display the data likeusername, profile picture, all public repos, etc.. in a neat format.libraries used are: react-toastify, react-icons, uuid,axios,ReactStrap, Bootstrap.',
    info2: '',
    url: 'https://mygitapp-21e79.firebaseapp.com',
    repo: 'https://github.com/basilfaheem/GithubAPI', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netflix.png',
    title: 'Netflix-Clone',
    info: 'Simple app that imitates the desktop web version of netflix. It fetches the data from themoviedb.org in various categories like Originals, Trending ... ',
    info2: '',
    url: 'https://netflix-clone-864e5.firebaseapp.com/',
    repo: 'https://github.com/basilfaheem/GithubAPI', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'contact1.png',
    title: 'REALTIME CONTACT APP',
    info: 'It is also developed with REACT JS. A dynamic web app where anyuser can perform create, read, update & delete (CRUD) operations.In backend it uses FIREBASE to store information. libraries used are:react-toastify, react-icons, uuid, axios, browser-image-resizer,ReactStrap.',
    info2: '',
    url: 'https://ambercontact.netlify.app/',
    repo: 'https://github.com/basilfaheem/ContactApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mern.jpg',
    title: 'Full Stack (MERN) E-Commerce store.',
    info: 'Complete MERN Stack web appliation with all  CRUD operations. It includes user Authentication, ADMIN Dashboard and payment Integeration with Stripe.js Libarary.',
    info2: '',
    repo: 'https://github.com/basilfaheem/Shopping-cart---MernStack', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'basil.faheem25@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/basil_faheem',
    },
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/basilfaheem/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/basilfaheem/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

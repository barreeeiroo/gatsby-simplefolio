import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Computer Science student | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Diego Barreiro', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Diego Barreiro',
  subtitle: "I'm a Computer Science student",
  cta: 'Read more',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    '19-year-old student with over 5 years of solid programming experience. Curious, lead-minded, ' +
    'always willing to learn, and open to new technologies. Started coding as a hobby, now managing a US software ' +
    'company with more than 1.5M daily unique active users.',
  paragraphTwo:
    'My focus is placed on developing highly efficient problem-solving software, real-world solutions. ' +
    'As I had to be self-taught until university because of the lack of IT support in my school, I believe ' +
    'technology literacy is a human right.',
  paragraphThree:
    'In my free time, I love coding in several part-time projects and helping people outside the tech ' +
    'world. For example, I volunteer at Civil Defense in my city, where I was able to contribute by creating an ' +
    'internal platform for resources management.',
  resume: 'https://resume.io/r/NhLAmgcEu', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kodular.webp',
    title: 'Kodular',
    info: '',
    info2: '',
    url: 'https://www.kodular.io',
  },
  {
    id: nanoid(),
    img: 'civilDefense.png',
    title: 'Civil Defense',
    info: '',
    info2: '',
    url: 'https://proteccioncivil.sdc.gal',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to reach me? Just hit the button!',
  btn: 'Send email',
  email: 'diego@barreiro.xyz',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/barreeeiroo',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/barreeeiroo',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/barreeeiroo',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/barreeeiroo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

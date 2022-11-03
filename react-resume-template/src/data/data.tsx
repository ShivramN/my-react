import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Siva Resume',
  description: "resume built with react template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Siva.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Mumbai based <strong className="text-stone-100">Senior Software Developer</strong>, currently working
        at <strong className="text-stone-100">CometChat</strong> helping build an In-app communication platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I usually trek and explore new places.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/SivaResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    }
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Highly motivated professional with experience as a Backend Developer.`,
  aboutItems: [
    {label: 'Location', text: 'Mumbai', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Trekking, Cricket', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Mumbai', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CometChat Inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Tamil',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 8,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'PHP',
        level: 8,
      }
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },
      {
        name: 'AWS',
        level: 5,
      }
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2017',
    location: 'St Xaviers college',
    title: 'Bachelors of Science - IT',
    content: <p>Learnt CS concepts and participated in various activities and events (Malhar, Zenith).</p>,
  },
  {
    date: 'March 2014',
    location: 'SIES college',
    title: 'Higher Secondary',
    content: <p>Hosted Science Exhibition and was a part of the Sports Committee.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2019 - Present',
    location: 'CometChat Inc',
    title: 'Senior Software Developer',
    content: (
      <p>
        I am currently working as a Senior Software Developer at CometChat Inc.
        We are a Signal Peak Ventures backed startup building a scalable, secure and easy to use communication platform.
        Here I'm responsible for building the backend and features to allow our users to use text chat, voice and video functionality
        for websites and apps across all industries.
      </p>
    ),
  },
  {
    date: 'June 2018 - February 2019',
    location: 'Annet Technologies',
    title: 'PHP Developer',
    content: (
      <p>
        Annet Technologies provides Technology solutions to various clients. I was a part of the PHP team mostly involved
        in building Backend (Laravel) and collaborating with Front-end devs to build the solution.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jeet Kapadia',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Pushpsen',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Ketan Yekale',
      text: 'Here you should write some nice things that someone has said about you.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/10109686/sn-n'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sivaramadurainadar/'}
];

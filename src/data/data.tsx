import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
// import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial_background.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  // PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Divan De Bruin | Software Developer',
  description: "Divan De Bruin professional Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  videoSrc: '/videos/portfolio_background.mp4',
  // imageSrc: heroImage,
  name: `I'm Divan De Bruin`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a South Afirca based <strong className="text-stone-100">Software Developer</strong>, currently
         <strong className="text-stone-100"> Freelancing </strong>building and scaling realworld applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100"> training </strong>,
        <strong className="text-stone-100">coding</strong>, or travelling the{' '}
        <strong className="text-stone-100">World</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/pdfs/DivanDeBruin.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` 
Passionate and results-driven individual with a proven ability to lead cross-
functional teams, streamline workflows, and drive strategic initiatives. 
Skilled in aligning resources, facilitating cross-functional collaboration, and 
identifying opportunities for efficiency improvements. With a strong 
foundation in Python application development, I bring a unique blend of 
technical understanding and strategic oversight, making me a valuable 
bridge between development teams and business objectives. My 
unwavering commitment to excellence, proactive initiative, and dedication 
to continuous improvement ensure measurable success in every endeavor`,
  aboutItems: [
    {label: 'Location', text: 'Florida', Icon: MapIcon},
    {label: 'Nationality', text: 'South African', Icon: FlagIcon},
    {label: 'Interests', text: 'Travelling, Coding, MMA', Icon: SparklesIcon},
    {label: 'Study', text: 'IIE Varsity College', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Software Developer', Icon: BuildingOffice2Icon},
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
        level: 10,
      },
      {
        name: 'Afrikaans',
        level: 7,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'HTML',
        level: 5,
      },
      {
        name: 'CSS',
        level: 4
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C#',
        level: 5,
      },
    ],
  },
  {
    name: 'Framework',
    skills: [
      {
        name: 'Django',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Website Security Verifier',
//     description: 'Give a short description of your project here.',
//     url: 'https://websitesecurityverifier.vercel.app/',
//     image: porfolioImage1,
//   },
//   {
//     title: 'Project title 2',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage2,
//   },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage11,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '02 Feb 2015 -  14 Nov 2017',
    location: 'IIE Varsity College, Durban, South Africa',
    title: 'Bachelor of Commerce in Business',
    content: <p>Majored in Marketing where I developed a solid foundation in business principles, and strategic communication.
 </p>,
  },
  {
    date: '05 Feb 2018 - 30 Nov 2018',
    location: 'IIE Varsity College, Durban, South Africa',
    title: 'Honors in Management and Leadership',
    content: <p>Explored advanced concepts in leadership, organizational management, and decision-making strategies.</p>,
  },
  {
    date: '2023',
    location: 'School Of IT, Cape Town, South Africa',
    title: 'C# & JavaScript Bootcamp',
    content: <p>Bootcamp focused on C# development and JavaScript for building modern web applications.</p>,
  },
];


export const experience: TimelineItem[] = [
  {
    date: '2025 - Present',
    location: 'ScriptBit, Cape Town, South Africa',
    title: 'Freelance Software Developer',
    content: (
      <p>
      Built and maintained a Flask-based insurance agent tracking system for lead submissions and campaign performance analytics. 
      Integrated Airtable with automated delta-sync ingestion and developed pandas pipelines to clean, merge, and deduplicate datasets.
      </p>
    ),
  },
  {
    date: '2019 - 2022',
    location: 'Woodfield CC, Boca Raton, Florida',
    title: 'Supervisor',
    content: (
      <p>
        Served as a primary point of contact for team coordination, facilitating seamless communication and swift decision-making in a fast-paced environment. 
        Utilized strong analytical and logical thinking to anticipate challenges, implement effective solutions, and drive improvements in service efficiency.
      </p>
    ),
  },
  {
    date: 'Oct 2023 - May 2024 | Oct 2022 - June 2023 | Feb 2022 - June 2022',
    location: 'AMS Attorneys Inc, Durban, South Africa',
    title: 'Marketing Manager',
    content: (
      <p>
       Led marketing and PR initiatives in the conveyancing industry to increase brand visibility and client engagement. 
       Coordinated cross-functional communication to keep clients and stakeholders informed while using analytics to evaluate marketing performance and drive data-driven improvements.
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
      name: 'Shaun East',
      text: 'Divan’s dedication to continuous learning and growth is truly inspiring. Throughout his time studying Software Engineering with us, he demonstrated exceptional logical thinking, a proactive attitude, and an eagerness to master both C# and JavaScript development. His blend of technical skill and strategic insight will make him an invaluable asset to any team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jason Matthews - Former Conveyancer, AMS Attorneys Inc',
      text: 'Divan’s ability to lead, train, and optimize team operations is remarkable. His quick thinking, organization, and positive approach greatly improved our service efficiency. He always found innovative solutions to challenges and consistently elevated the team\'s performance. Divan is not just a strong leader but also someone who brings energy, technical knowledge, and professionalism to every project.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Maxine Bougaardt',
      text: 'During his time at Woodfield, Divan consistently demonstrated outstanding leadership and organizational skills. His ability to manage teams, delegate tasks efficiently, and maintain high service standards was remarkable. Divan\'s proactive mindset and problem-solving abilities significantly enhanced our team\'s performance and guest satisfaction. His dedication, professionalism, and technical aptitude made a lasting impact on our operations',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Let\n\'s get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'divan.debruin25@gmail.com',
      href: 'mailto:divan.debruin25@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'South Africa, Durban',
      href: 'https://www.google.ca/maps/place/Durban,+South+Africa/@-29.883333,31.049999,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@divan_debruin',
      href: 'https://www.instagram.com/divan_debruin/',
    },
    {
      type: ContactType.Github,
      text: '7IronSnow7',
      href: 'https://github.com/7IronSnow7',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/7IronSnow7'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/divan-de-bruin-14j5/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/divan_debruin/'},
];



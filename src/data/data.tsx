import portfolioImage from '../assets/portfolio.png';
import sneakear from '../assets/sneakear.png';
import bot from '../assets/bot.png';
import tedtech from '../assets/tedtech.png';
import inventory2 from '../assets/inventory2.png';
import inventory from '../assets/inventory.png';
import { SiFrontendmentor } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
export default {
  name: 'Filimon',
  description:
    "Based in Ethiopia, I'm a front-end developer passionate about building accessible web apps that users love.",
  skills: [
    {
      skill: 'HTML',
      experience: 2,
    },
    {
      skill: 'CSS',
      experience: 2,
    },
    {
      skill: 'Sass',
    },
    {
      skill: 'Styled-components',
    },
    {
      skill: 'Tailwind CSS',
    },
    {
      skill: 'Javascript',
      experience: 2,
    },
    {
      skill: 'TypeScript',
    },
    {
      skill: 'Vue',
    },
    {
      skill: 'React',
    },
  ],
  projects: [
    {
      projectName: 'W.I.M.S.',
      skills: [
        'tailwind',
        'typescript',
        'react',
        'vite',
        'firebase',
      ],
      image: inventory,
      projectLink: 'https://wingateinventory.netlify.app',
      codeLink: 'https://github.com/filimonkd/inventory-management-system',
    },
    {
      projectName: 'Filimon portfolio',
      skills: ['tailwind', 'typescript', 'react'],
      image: portfolioImage,
      projectLink:
        'https://filimonportfolio.netlify.app',
      codeLink: 'https://github.com/filimonkd/filimon-portfolio',
    },
    {
      projectName: 'Sneakear',
      skills: ['tailwind', 'typescript', 'Vue 3', 'Vuex'],
      image: sneakear,
      projectLink: 'https://thriving-cascaron-1823bb.netlify.app/',
      codeLink: 'https://github.com/filimonkd/sneakers-e-commerce-telegram-bot-website',
    },
    {
      projectName: 'In browser markdown editor',
      skills: ['Chapa API', 'Telegram API', 'JS'],
      image: bot,
      projectLink: 'https://t.me/DengezGiftsBot',
      codeLink: 'https://github.com/filimonkd/chapa-telegram-bot-payment',
    },
    {
      projectName: 'tedtech website',
      skills: ['css', 'vue'],
      image: tedtech,
      projectLink: 'https://tedtechengplc.netlify.app',
      codeLink: 'https://tedtechengplc.netlify.app',
    },
    {
      projectName: 'W.I.M.S. Login',
      skills: ['tailwind',
      'typescript',
      'react',],
      image: inventory2,
      projectLink: 'https://wingateinventory.netlify.app',
      codeLink: 'https://github.com/filimonkd/inventory-management-system',
    },
  ],
  links: [
    {
      site: 'Github',
      link: 'https://github.com/filimonkd',
      icon: <FaGithub className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'Frontend mentor',
      link: 'https://www.frontendmentor.io/profile/filimonkd',
      icon: <SiFrontendmentor className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'LinkedIn',
      link: 'https://www.linkedin.com/in/filimonkd',
      icon: <FaLinkedin className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'Leetcode',
      link: 'https://leetcode.com/filimonkd',
      icon: <SiLeetcode className='md:w-6 md:h-6' size={20} />,
    },
  ],
};

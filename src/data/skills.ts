type Skill = {
  name: string;
  logo: string;
};

type Skills = {
  [category: string]: Skill[];
};

export const skills: Skills = {
  Frameworks: [
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express',
      logo: 'https://skillicons.dev/icons?i=express',
    },
    {
      name: 'Next.js',
      logo: 'https://skillicons.dev/icons?i=nextjs',
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Vue.js',
      logo: 'https://skillicons.dev/icons?i=vue',
    },
  ],
  Databases: [
    {
      name: 'MongoDB',
      logo: 'https://skillicons.dev/icons?i=mongodb',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://skillicons.dev/icons?i=postgres',
    },
    {
      name: 'MySQL',
      logo: 'https://skillicons.dev/icons?i=mysql',
    },
  ],

  Deployment_Tools: [
    {
      name: 'AWS',
      logo: 'https://skillicons.dev/icons?i=aws',
    },
    {
      name: 'Jenkins',
      logo: 'https://skillicons.dev/icons?i=jenkins',
    },
  ],
  Payments_Integrations: [
    {
      name: 'Stripe',
      logo: 'https://cdn.brandfetch.io/idxAg10C0L/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      name: 'PayPal',
      logo: 'https://i.postimg.cc/d087dhcg/paypal-seeklogo.png',
    },
  ],
  Styling_Tools: [
    {
      name: 'Tailwind CSS',
      logo: 'https://skillicons.dev/icons?i=tailwind',
    },
    {
      name: 'Bootstrap',
      logo: 'https://skillicons.dev/icons?i=bootstrap',
    },
  ],
  'Languages_Tool_&_Extra': [
    {
      name: 'JavaScript',
      logo: 'https://skillicons.dev/icons?i=js',
    },
    {
      name: 'TypeScript',
      logo: 'https://skillicons.dev/icons?i=ts',
    },
    {
      name: 'Python',
      logo: 'https://skillicons.dev/icons?i=py',
    },
    {
      name: 'HTML5',
      logo: 'https://skillicons.dev/icons?i=html',
    },
    {
      name: 'CSS3',
      logo: 'https://skillicons.dev/icons?i=css',
    },
    {
      name: 'NPM',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    },
  ],
};

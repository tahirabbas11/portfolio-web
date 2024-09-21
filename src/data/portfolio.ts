export type PortfolioType = {
  url?: string;
  urlMissingReason?: string;
  year: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

import github from '@/assets/portfolio/github2.png';

export const portfolioData: PortfolioType[] = [
  {
    url: 'https://github.com/tahirabbas11/node-express-boilerplate',
    year: 2024,
    title: 'RESTful API Node Server Boilerplate',
    description:
      'A starter project for building RESTful APIs with Node.js, Express, and Mongoose.',
    image: github.src,
    tags: ['Node.js', 'Express', 'Mongoose', 'MongoDB', 'RESTful API'],
  },
  {
    url: 'https://github.com/tahirabbas11/auth-api-express-js',
    year: 2024,
    title: 'Authentication using Express.js (JWT)',
    description:
      'An authentication API built with Express.js, designed for secure and efficient user management using JWT.',
    image: github.src,
    tags: ['Node.js', 'Express', 'JWT', 'Authentication', 'RESTful API'],
  },
  {
    url: 'https://www.npmjs.com/package/json-from-csv',
    year: 2024,
    title: 'CSV to JSON Converter (npm package)',
    description:
      'An NPM package to convert CSV files to JSON format, reading and parsing CSV contents into a JSON array.',
    image: github.src,
    tags: ['Node.js', 'NPM', 'CSV', 'JSON', 'Data Conversion'],
  },
  {
    url: 'https://github.com/tahirabbas11/A.I-Based-And-Controlled-Smart-Agricultural-Field',
    year: 2023,
    title: 'AI-Based and Controlled Smart Agricultural Field',
    description:
      'An AI-driven project optimizing agricultural processes, funded by IGNITE (https://ignite.org.pk).',
    image: github.src,
    tags: [
      'AI',
      'Agriculture',
      'Automation',
      'Python',
      'Machine Learning',
      'fyp',
    ],
  },
  {
    url: 'https://github.com/tahirabbas11/Spam-Email-Detection',
    year: 2023,
    title: 'Spam Email Detection',
    description:
      'A project for detecting spam emails using machine learning techniques, analyzing email content to classify messages as spam or not.',
    image: github.src,
    tags: ['Python', 'Machine Learning', 'Email Security', 'Spam Detection'],
  },
  {
    url: 'https://github.com/tahirabbas11/File-Hash-Matching-Python',
    year: 2023,
    title: 'File Integrity Checker',
    description:
      'A security project comparing file hashes to swiftly detect malicious tampering, ensuring system integrity.',
    image: github.src,
    tags: ['Python', 'Security', 'File Integrity', 'Hashing'],
  },
];

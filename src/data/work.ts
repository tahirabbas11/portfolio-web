export type WorkType = {
  yearStart: number;
  monthStart: number;
  yearEnd?: number;
  monthEnd?: number;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
};

import cubix from '@/assets/work/cubix.jpeg';
import riksof from '@/assets/work/riksof.png';

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Desember',
];

// NOTES: month is 0-based index, 0 = January, 11 = December
export const workData: WorkType[] = [
  {
    yearStart: 2024,
    monthStart: 3,
    companyName: 'Cubix',
    companyLogo: cubix.src,
    jobTitle: 'Assistant Software Engineer',
  },
  {
    yearStart: 2024,
    monthStart: 1,
    yearEnd: 2023,
    monthEnd: 3,
    companyName: 'Riksof',
    companyLogo: riksof.src,
    jobTitle: 'Intern Software Developer',
  },
];

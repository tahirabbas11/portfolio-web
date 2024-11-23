import Image from 'next/image';
import Link from 'next/link';

import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconBrandFacebook,
} from '@tabler/icons-react';

import { Highlight, HeroHighlight } from '@/components/hero-highlight';
import { Meteors } from '@/components/meteors';
import { Container } from '@/components/container';
import { PortfolioCard } from '@/components/portfolio';
import ContactForm from '@/components/contactform';
// import photoYudis from "@/assets/images/photo_yudis.jpg";

import { portfolioData } from '@/data/portfolio';
import { workData, monthNames } from '@/data/work';
import { skills } from '@/data/skills';
import ViewResumeText from '@/components/viewresumetext';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <HeroHighlight>
        <Container>
          <div className="relative grid h-full min-h-[40rem] gap-4 overflow-clip py-4 lg:grid-cols-5">
            <Meteors number={10} />

            <div className="flex flex-col justify-center lg:col-span-3">
              <h2 className="text-xl font-bold leading-none lg:text-2xl">
                Hi &#x1F44B;,
              </h2>
              <h2 className="mb-12 text-xl font-bold lg:text-2xl">
                I&apos;m Tahir Abbas
              </h2>

              <h1 className="mb-16 text-3xl font-bold lg:text-5xl">
                I&apos;m a{' '}
                <Highlight>
                  <span className="lg:px-4">Web Developer</span>
                </Highlight>
              </h1>

              <h2 className="mb-4 text-xl font-semibold lg:text-2xl">
                Specializing in Node.js , Express.js, Next.JS, and React.
              </h2>

              <p className="text-sm lg:text-base">
                {/* I&apos;m a software engineer based in Indonesia. I&apos;ve been
                creating hybrid mobile apps and website using PHP, React Native,
                and React since 2017. I have created dozens of mobile apps and
                websites for clients like governments and multinational
                companies. */}
                I am a Full Stack Developer with a strong focus on backend
                development, bringing nearly 2 years of professional experience.
                I design and implement robust backend solutions while working
                across the full stack. My expertise lies in building scalable
                and efficient server-side applications, utilizing a variety of
                frameworks and technologies to create seamless user experiences
                and powerful backend systems.
              </p>
              {/* socials  */}
              <div className="mt-12 flex items-center space-x-8">
                <ViewResumeText />
                <Link
                  href={'https://www.linkedin.com/in/thetahirabbas/'}
                  target="_blank"
                >
                  {/* edit the icon so that it resize bigger and glow when hoverring */}
                  <IconBrandLinkedin
                    size={40}
                    className="duration-200 hover:scale-150 hover:text-yellow-500"
                  />
                </Link>

                <Link href={'https://github.com/tahirabbas11'} target="_blank">
                  <IconBrandGithub
                    size={35}
                    className="duration-200 hover:scale-150 hover:text-yellow-500"
                  />
                </Link>

                <Link href={'https://x.com/thetahirabbas'} target="_blank">
                  <IconBrandX
                    size={35}
                    className="duration-200 hover:scale-150 hover:text-yellow-500"
                  />
                </Link>
              </div>
            </div>

            {/* <div className="mt-8 flex items-center justify-center lg:col-span-2 lg:mt-0">
              <div className="w-80 overflow-clip rounded-lg border-4 border-yellow-500 lg:w-96">
                <Image
                  src={photoYudis.src}
                  alt="Yudis' Profile Picture"
                  width={200}
                  height={200}
                  className="w-full object-contain"
                />
              </div>
            </div> */}
          </div>
        </Container>
      </HeroHighlight>

      {/* work experience */}
      <Container className="space-y-12 overflow-hidden rounded-lg border-2 border-[#eaeaea] bg-zinc-50 p-4 dark:border dark:border-neutral-600 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold lg:text-4xl">Work Experience</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {workData.slice(0, 4).map((work) => (
            <div key={work.companyName} className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-clip rounded-lg bg-white">
                  <Image
                    src={work.companyLogo}
                    alt={`${work.companyName} Logo`}
                    width={200}
                    height={200}
                    className="w-full flex-shrink-0 object-cover"
                  />
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-bold leading-tight">
                    {work.companyName}
                  </h3>
                  <p className="text-sm">{work.jobTitle}</p>
                </div>
              </div>

              <p className="text-sm">
                {monthNames[work.monthStart]} {work.yearStart} -{' '}
                {work.yearEnd ? (
                  (work.monthEnd ? monthNames[work.monthEnd] + ' ' : '') +
                  work.yearEnd
                ) : (
                  <span className="italic">Present</span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* go to linkedin button */}
        <Link
          href={'https://www.linkedin.com/in/thetahirabbas/'}
          target="_blank"
          rel="noopener"
          className="flex w-full items-center justify-center rounded-lg border border-yellow-500 p-4 font-semibold text-yellow-500 duration-200 hover:bg-yellow-500 hover:text-black hover:underline"
        >
          Go to LinkedIn &rarr;
        </Link>
      </Container>

      {/* Skills */}
      <Container className="space-y-12 overflow-hidden rounded-lg border-2 border-[#eaeaea] bg-zinc-50 p-4 dark:border dark:border-neutral-600 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold lg:text-4xl">Skills</h2>

        <div className="space-y-8">
          {Object.keys(skills).map((category) => (
            <div key={category} className="skill-category space-y-4">
              <h3 className="text-xl font-semibold">
                {category.replace(/_/g, ' ')}
              </h3>

              {/* Display skills for the category in a flex layout */}
              <div className="flex flex-wrap gap-6">
                {skills[category].map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    {/* Logo container */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} Logo`}
                        className="h-12 w-12"
                      />
                    </div>

                    {/* Skill name with hover effect */}
                    <div className="hidden lg:block">
                      <h4 className="text-lg font-medium text-gray-900 hover:text-yellow-500 dark:text-gray-100">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Latest portfolio */}
      <Container className="space-y-12 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold lg:text-4xl">Latest Portfolio</h2>

          <Link
            href="/projects"
            className="flex-shrink-0 text-sm font-semibold text-yellow-500 hover:underline"
          >
            View all portfolio &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.slice(0, 4).map((portfolio) => (
            <PortfolioCard
              key={portfolio.title}
              portfolio={portfolio}
              className="min-h-[33rem]"
            />
          ))}
        </div>
      </Container>
      {/* Contact Form
<Container className="space-y-12 overflow-hidden rounded-lg border-2 border-[#eaeaea] bg-zinc-50 p-4 dark:border dark:border-neutral-600 dark:bg-zinc-900">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold lg:text-4xl">Contact Me</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" Name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 bg-white dark:bg-[#2E2E2E] dark:border-gray-700 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" email@gmail.com"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 bg-white dark:bg-[#2E2E2E] dark:border-gray-700 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder=" Write your message"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 bg-white dark:bg-[#2E2E2E] dark:border-gray-700 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-500 py-2 px-4 font-semibold text-white shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</Container> */}
      <Container className="space-y-12 overflow-hidden rounded-lg border-2 border-[#eaeaea] bg-zinc-50 p-4 dark:border dark:border-neutral-600 dark:bg-zinc-900">
        <ContactForm Page={'none'}></ContactForm>
      </Container>
    </div>
  );
}

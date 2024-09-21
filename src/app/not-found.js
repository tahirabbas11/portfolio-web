import { Button } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    // <div className="flex flex-col items-center justify-center">
    //   <div className="flex flex-col items-center justify-center text-center">
    //     <Image
    //       src="/not-found.png" // Image located in public folder
    //       alt="Not Found"
    //       width={300} // Adjust width as needed
    //       height={300} // Adjust height as needed
    //       className="mb-8"
    //     />
    //     <h1 className="text-2xl md:text-4xl font-bold mb-2">404 - Page Not Found</h1>
    //     <p className="text-lg md:text-xl mb-6">
    //       Oops! The page you are looking for does not exist.
    //     </p>
    //     <Link href="/" passHref>
    //       <Button
    //         className="text-[#eab108] border-[#eab108] hover:bg-[#eab108] hover:text-white transition-colors color-yellow"
    //       >
    //         Go back to Homepage
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-base font-semibold text-yellow-400">404</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-center sm:gap-x-6">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-yellow-500 px-4 py-2 font-semibold text-white shadow-md transition-colors duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 sm:w-auto"
            >
              Go back home
            </Link>
            <Link
              href="/get-in-touch"
              className="inline-flex w-full justify-center text-sm font-semibold sm:w-auto"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Button } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <Image
              src="/not-found.png" // Image located in public folder
              alt="Not Found"
              width={300} // Adjust width as needed
              height={300} // Adjust height as needed
              className="mb-8"
            />
            <h1 className="text-2xl md:text-4xl font-bold mb-2">404 - Page Not Found</h1>
            <p className="text-lg md:text-xl mb-6">
              Oops! The page you are looking for does not exist.
            </p>
            <Link href="/" passHref>
              <Button
                className="text-[#eab108] border-[#eab108] hover:bg-[#eab108] hover:text-white transition-colors color-yellow"
              >
                Go back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      );
}

import { IconDownload } from '@tabler/icons-react';
import { Metadata } from "next";
import { Container } from "@/components/container";
import ContactForm from "@/components/contactform";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Tahir Abbas",
};

export default function Portfolio() {
  let data: string = "resume";
  return (
    <Container>
      <section className="mb-12">
      <h2 className="mb-4 text-5xl font-bold">Resume</h2>
        <p>
        Please find my resume and detailed information about my professional background here.
        </p>
        <div className="my-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Resume - Tahir Abbas</h2>

            {/* Download Button with Icon */}
            <a
              href="https://docs.google.com/document/d/1cSeHtWRwAqKAtGQoJMUVX2S0NgYsDlls/export?format=pdf"
              download
              className="inline-flex items-center rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            >
              <IconDownload size={20} className="mr-2" />
              Download
            </a>
          </div>

          <div className="flex flex-col space-y-4 mt-6">
            {/* CV iframe */}
            <iframe
              src="https://docs.google.com/document/d/1cSeHtWRwAqKAtGQoJMUVX2S0NgYsDlls/preview"
              width="100%"
              height="800" // Adjust height as needed
              frameBorder="0"
              className="rounded-lg border-2 border-gray-300"
              allow="autoplay"
            />
          </div>
        </div>
      </section>
      
      {/* <ContactForm Page={data}></ContactForm> */}
    </Container>
  );
}

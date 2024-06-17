import { Metadata } from "next";

import { PortfolioList } from "@/components/portfolio";
import { Container } from "@/components/container";
import ContactForm from "@/components/contactform";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Tahir Abbas",
};

export default function Portfolio() {
  let data: string = "get-in-touch";
  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">Get In Touch</h2>
        <p>
          If you want to get in touch with me, feel free to use the contact form
          below.
        </p>
      </section>
      <ContactForm Page={data}></ContactForm>
    </Container>
  );
}

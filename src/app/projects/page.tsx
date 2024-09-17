import { Metadata } from "next";

import { PortfolioList } from "@/components/portfolio";
import { Container } from "@/components/container";

import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Tahir Abbas",
};

export default function Portfolio() {
  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">Projects</h2>
        <p>
        Here are some of my works. I specialize in Node.js, React, and Next.js, focusing primarily on backend development. I have experience in building various projects, including web applications.
        </p>
      </section>

      <PortfolioList portfolioData={portfolioData} />
    </Container>
  );
}

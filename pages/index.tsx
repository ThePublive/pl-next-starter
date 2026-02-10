import MainLayout from "@/component/layout";
import { APIService } from "@/lib/api";
import { GetServerSidePropsContext } from "next";
import { Publisher } from "publive-cms-sdk";
import React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const publive = new APIService().getSDK();
  const publisher = await publive.auth.fetchPublisher();

  return {
    props: {
      publisher: publisher.data,
    },
  };
};

interface HomeProps {
  publisher: Publisher;
}

const Home = ({ publisher }: HomeProps) => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div className="grid-bg absolute inset-0" aria-hidden />

        {/* Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #e11d48, transparent 70%)" }}
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-3xl px-6 text-center">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-white">
            {publisher.name}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/50">
            Built with{" "}
            <strong className="text-white">Publive CMS</strong>
            <strong className="text-white">high-quality content sites</strong>{" "}
            with the power of Next.js.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://www.notion.so/publive/Decoupled-Infra-Starter-Guide-2ff2c61c09f780b0aed2fa0f5df6274b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full bg-white px-5 text-[14px] font-medium text-[#0a0a0a] transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Get Started
            </a>
            <a
              href="https://www.thepublive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[14px] font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              Learn Publive
            </a>
          </div>
        </div>
      </section>

      {/* ── Publisher Config ── */}
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <p className="mb-12 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-white/25">
            Publisher Configuration
          </p>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/[0.08]">
            {/* General */}
            <div className="border-b border-white/[0.06] p-6">
              <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-white/40">
                General
              </h3>
              <dl className="space-y-3">
                <Row label="Name" value={publisher.name} />
                <Row label="Slug" value={publisher.slug} mono />
                <Row label="Company" value={publisher.company_name} />
                <Row label="Language" value={publisher.content_language} />
                <Row label="Domain" value={publisher.actual_domain} mono />
              </dl>
            </div>

            {/* Contact */}
            <div className="border-b border-white/[0.06] p-6">
              <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-white/40">
                Contact
              </h3>
              <dl className="space-y-3">
                <Row label="Email" value={publisher.email} />
                <Row label="Phone" value={publisher.phone_number} />
                <Row label="Address" value={publisher.registered_address} />
              </dl>
            </div>

            {/* About */}
            <div className="p-6">
              <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-white/40">
                About
              </h3>
              <p className="text-[14px] leading-relaxed text-white/50">
                {publisher.about_us || "No description configured yet."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Cards ── */}
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            href="https://www.notion.so/publive/Decoupled-Infra-Starter-Guide-2ff2c61c09f780b0aed2fa0f5df6274b"
            title="Docs"
            desc="Explore the Publive SDK and API reference."
          />
          <Card
            href="https://github.com/thepublive/pl-next-starter"
            title="Source"
            desc="View the starter kit source on GitHub."
          />
          <Card
            href="https://www.thepublive.com"
            title="Publive"
            desc="Learn about Publive CMS and its features."
          />
          <Card
            href={`https://${publisher.actual_domain || "www.thepublive.com"}`}
            title="Your Site"
            desc={publisher.actual_domain || "Configure your domain."}
          />
        </div>
      </section>
    </>
  );
};

/* ── Sub-components ── */

const Row = ({
  label,
  value,
  mono,
}: {
  label: string;
  value?: string;
  mono?: boolean;
}) => (
  <div className="flex items-baseline justify-between gap-6">
    <dt className="text-[13px] text-white/35">{label}</dt>
    <dd
      className={`truncate text-[13px] text-white/80 ${mono ? "font-mono text-[12px]" : ""}`}
    >
      {value || <span className="text-white/20">&mdash;</span>}
    </dd>
  </div>
);

const Card = ({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group border-b border-r border-white/[0.06] p-6 transition-colors last:border-r-0 hover:bg-white/[0.03] sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
  >
    <h3 className="mb-1.5 text-[14px] font-semibold text-white/90">
      {title}{" "}
      <span className="inline-block text-white/30 transition-transform group-hover:translate-x-1">
        &rarr;
      </span>
    </h3>
    <p className="text-[13px] leading-relaxed text-white/40">{desc}</p>
  </a>
);

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout publisher={page.props.publisher}>
      {page}
    </MainLayout>
  );
};

export default Home;

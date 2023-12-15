import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { GitHubIcon, TwitterXIcon, DiscordIcon } from "@components/icons";

const logo = (
  <>
    <Image
      src={"/CodeDeployingSquad_light.png"}
      className="hidden dark:sm:inline-flex translate-y-[-1rem] animate-fade-in  opacity-70 "
      height={200}
      width={200}
      alt="CodeDeployingSquad"
    />

    <Image
      src={"/CodeDeployingSquad_dark.png"}
      className="hidden dark:hidden sm:inline-flex translate-y-[-1rem] animate-fade-in opacity-70"
      height={200}
      width={200}
      alt="CodeDeployingSquad"
    />

    <Image
      className="sm:hidden inline-flex"
      src={"/cds_circle.png"}
      height={30}
      width={30}
      alt="CodeDeployingSquad"
    />
  </>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/CodeDeployingSquad/website",
    icon: <GitHubIcon />,
  },
  chat: {
    link: "https://discord.gg/8SFAywV4M8",
    icon: <DiscordIcon />,
  },
  docsRepositoryBase: "https://github.com/CodeDeployingSquad/website",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - CDS",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title, frontMatter } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://www.codedeployingsquad.tech/og.jpeg"
        : `https://www.codedeployingsquad.tech/api/og?title=${title}&description=${frontMatter.description}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="The largest community of tomorrow's open source developers."
        />
        <meta
          name="og:description"
          content={frontMatter.description ? frontMatter.description : " "}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="codedeployingsquad.tech" />
        <meta name="twitter:url" content="https://codedeployingsquad.tech" />
        <meta
          name="twitter:description"
          content={frontMatter.description ? frontMatter.description : " "}
        />
        <meta
          name="twitter:title"
          content={title ? title + " – CDS" : "CodeDeployingSquad"}
        />
        <meta
          name="og:title"
          content={title ? title + " – CDS" : "CodeDeployingSquad"}
        />
        <meta property="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="CodeDeployingSquad" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://vercel.com?utm_source=codedeployingsquad.tech"
          >
            <Image
              className="dark:hidden opacity-70"
              src={"/CodeDeployingSquad_dark.png"}
              height={200}
              width={200}
              alt="CodeDeployingSquad"
            />
            <Image
              className="hidden dark:block opacity-70"
              src={"/CodeDeployingSquad_light.png"}
              height={200}
              width={200}
              alt="CodeDeployingSquad"
            />
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} CodeDeployingSquad ( 𐄷 MIT License)
        </p>
      </div>
    ),
  },
  navbar: {
    extraContent: <TwitterXIcon />,
  },
  toc: {
    backToTop: true,
    // extraContent: (
    //   <img alt="placeholder cat" src="https://placekitten.com/g/300/200" />
    // ),
  },
};

export default config;

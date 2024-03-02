/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  logo: <strong>Lukas Polak</strong>,
  project: {
    link: "https://github.com/LukasPolak/digital-garden",
  },
  docsRepositoryBase: "https://github.com/LukasPolak/digital-garden",
  footer: {
    text: "Digital Garden",
  },
  feedback: {
    content: "Question? Give me feedback →",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Lukas Polak",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    return (
      <>
        <meta
          property="og:url"
          content={`https://digital-garden.lukaspolak.com/${asPath}`}
        />
        <meta
          property="og:title"
          content={frontMatter.title || "Digital Garden"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Digital Garden"}
        />
        <script
          defer
          data-domain="digital-garden.lukaspolak.com"
          src="https://plausible.io/js/script.js"
        />
      </>
    );
  },
};

export default config;

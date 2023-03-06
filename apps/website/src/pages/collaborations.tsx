import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Section from "@/components/content/Section";
import Heading from "@/components/content/Heading";
import Meta from "@/components/content/Meta";
import YouTubeLightbox from "@/components/content/YouTubeLightbox";

import leafRightImage1 from "@/assets/floral/leaf-right-1.png";
import leafRightImage2 from "@/assets/floral/leaf-right-2.png";
import leafLeftImage3 from "@/assets/floral/leaf-left-3.png";
import leafLeftImage1 from "@/assets/floral/leaf-left-1.png";

const collaborations = {
  ludwig: {
    name: "Ludwig",
    link: "https://www.youtube.com/@ludwig",
    date: "25th February 2023",
    video: "https://www.youtube.com/watch?v=vuLMTU8QHAU",
  },
  alinity: {
    name: "Alinity",
    link: "https://www.twitch.tv/alinity",
    date: "9th February 2023",
    video: "https://www.youtube.com/watch?v=qJpZzDMotmc",
    vod: "https://www.youtube.com/watch?v=XHTEs94Cf4s&list=PLtQafKoimfLd6dM9CQqiLm79khNgxsoN3",
  },
  connorEatsPants: {
    name: "ConnorEatsPants",
    link: "https://www.twitch.tv/connoreatspants",
    date: "25th January 2023",
    video: "https://www.youtube.com/watch?v=nC8qlK3k96Q",
    vod: "https://www.youtube.com/watch?v=SMEyEfVlzlM&list=PLtQafKoimfLd6dM9CQqiLm79khNgxsoN3",
  },
  botezSisters: {
    name: "The Botez Sisters",
    link: "https://www.twitch.tv/botezlive",
    date: "30th August 2022",
    video: "https://www.youtube.com/watch?v=QgvNy11kU6E",
  },
  knut: {
    name: "Knut",
    link: "https://www.twitch.tv/knut",
    date: "9th August 2022",
    video: "https://www.youtube.com/watch?v=lFhFx6kf2E4",
  },
  moistCr1tikal: {
    name: "MoistCr1TiKaL",
    link: "https://www.twitch.tv/moistcr1tikal",
    date: "30th April 2022",
    video: "https://www.youtube.com/watch?v=pb7MR59s1Z0",
    vod: "https://www.youtube.com/watch?v=x-OPvwjGHEU&list=PLtQafKoimfLd6dM9CQqiLm79khNgxsoN3",
  },
  jackManifold: {
    name: "Jack Manifold",
    link: "https://www.twitch.tv/jackmanifoldtv",
    date: "22nd April 2022",
    video: "https://www.youtube.com/watch?v=jzyxhnODe2g",
  },
};

type CollaborationsSectionProps = {
  items: Record<
    string,
    Optional<
      { name: string; link: string; date: string; video: string; vod: string },
      "vod"
    >
  >;
};

const CollaborationsSection: React.FC<CollaborationsSectionProps> = ({
  items,
}) => {
  return (
    <YouTubeLightbox className="flex flex-wrap">
      {({ Trigger, Preview, parseUrl }) => (
        <>
          {Object.entries(items).map(([key, value]) => (
            <div
              key={key}
              className="mx-auto flex basis-full flex-col items-center justify-start py-8 md:basis-1/2 md:px-8"
            >
              <Heading
                level={2}
                className="flex flex-wrap items-end justify-center gap-x-8 gap-y-2"
              >
                <Link
                  href={value.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-alveus-green-600 hover:underline"
                >
                  {value.name}
                </Link>
                <small className="text-xl text-alveus-green-600">
                  {value.date}
                </small>
              </Heading>

              <Trigger
                videoId={parseUrl(value.video)}
                className="w-full max-w-2xl"
              >
                <Preview videoId={parseUrl(value.video)} />
              </Trigger>

              {value.vod && (
                <Link
                  href={value.vod}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 text-alveus-green-700 hover:underline"
                >
                  (Full stream VoD)
                </Link>
              )}
            </div>
          ))}
        </>
      )}
    </YouTubeLightbox>
  );
};

const CollaborationsPage: NextPage = () => {
  return (
    <>
      <Meta
        title="Collaborations"
        description="We work with other content creators to educate our combined audiences, introducing them to the educational ambassadors at Alveus and their conservation missions."
      />

      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      {/* Nav background */}
      <div className="-mt-40 hidden h-40 bg-alveus-green-900 lg:block" />

      <div className="relative">
        <Image
          src={leafRightImage1}
          alt=""
          className="pointer-events-none absolute -bottom-24 right-0 z-10 hidden h-auto w-1/2 max-w-md select-none lg:block"
        />
        <Image
          src={leafLeftImage3}
          alt=""
          className="pointer-events-none absolute -bottom-40 left-0 z-10 hidden h-auto w-1/2 max-w-[16rem] select-none lg:block"
        />

        <Section dark className="py-24">
          <div className="w-full lg:w-3/5">
            <Heading>Our Collaborations</Heading>
            <p className="text-lg">
              We work with other content creators to educate our combined
              audiences, introducing them to the educational ambassadors at
              Alveus and their conservation missions.
            </p>
          </div>
        </Section>
      </div>

      {/* Grow the last section to cover the page */}
      <div className="relative flex flex-grow flex-col">
        <Image
          src={leafLeftImage1}
          alt=""
          className="pointer-events-none absolute -bottom-24 left-0 z-10 hidden h-auto w-1/2 max-w-[12rem] select-none lg:block"
        />
        <Image
          src={leafRightImage2}
          alt=""
          className="pointer-events-none absolute -bottom-48 right-0 z-10 hidden h-auto w-1/2 max-w-[12rem] select-none lg:block"
        />

        <Section className="flex-grow">
          <CollaborationsSection items={collaborations} />
        </Section>
      </div>
    </>
  );
};

export default CollaborationsPage;

import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import styles from "../styles/Home.module.css";

const DUMMY_POSTS = [
  {
    title: "Getting started with NextJS",
    image: 'getting-started-nextjs.png',
    slug: "getting-started-with-nextjs",
    excerpt: 'Getting Started With NextJS - Production with React Framework',
    date: '2022-06-30',
  },
  {
    title: "Getting started with NextJS2",
    image: 'getting-started-nextjs.png',
    slug: "getting-started-with-nextjs2",
    excerpt: 'Getting Started With NextJS - Production with React Framework',
    date: '2022-06-30',
  },
  {
    title: "Getting started with NextJS3",
    image: 'getting-started-nextjs.png',
    slug: "getting-started-with-nextjs3",
    excerpt: 'Getting Started With NextJS - Production with React Framework',
    date: '2022-06-30',
  },
  {
    title: "Getting started with NextJS4",
    image: 'getting-started-nextjs.png',
    slug: "getting-started-with-nextjs4",
    excerpt: 'Getting Started With NextJS - Production with React Framework',
    date: '2022-06-30',
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

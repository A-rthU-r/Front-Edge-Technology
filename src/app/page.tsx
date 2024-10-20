import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Page Title</title>
        <meta name="Front Edge Tech" content="This is the homepage description." />
      </Head>
      <Header />
      <Hero />
    </>
  );
}

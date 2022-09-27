import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import CarouselBottom from "../components/CarouselBottom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import styles from "../styles/Home.module.css";
import requests from "../utils/requests";

export default function Home({results,results2,results3}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>rachid stream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Carousel results2={results2} />
      <CarouselBottom results3={results3} />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  const request2 = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTopRated.url}`
  ).then((res) => res.json());

   const request3 = await fetch(
     `https://api.themoviedb.org/3${requests.fetchMystryMovies.url}`
   ).then((res) => res.json());

  return {
    props: {
      results: request.results,
      results2: request2.results,
      results3: request3.results,
    },
  };
}





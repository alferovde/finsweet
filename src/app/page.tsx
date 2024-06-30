import Image from "next/image";
import styles from "./page.module.css";
import Button from "./StyleComponents/Button/Button";
import Hero from "./PageComponents/Hero/Hero";
import FeaturedPost from "./PageComponents/FeaturedPost/FeaturedPost";
import AboutUs from "./PageComponents/AboutUs/AboutUs";
import ChooseCategory from "./PageComponents/ChooseCategory/ChooseCategory";
import SpecialPost from "./PageComponents/SpecialPost/SpecialPost";
import AuthorsList from "./PageComponents/AuthorsList/AuthorsList";
import LogoComponents from "./PageComponents/LogoComponents/LogoComponents";

async function getData() {
  const res = await fetch("http://127.0.0.1:8000/api");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const result = await getData();

  // console.log(result);

  return (
    <main className={styles.main}>
      <Hero
        data={result.hero_post}
        categories={result.hero_post_ctegorie}
        autor={result.hero_post_author}
      />
      <FeaturedPost data={result.all_post} autors={result.autors} />
      <AboutUs />
      <ChooseCategory data={result.categories} />
      <SpecialPost />
      <AuthorsList data={result.autors} />
      <LogoComponents />
    </main>
  );
}

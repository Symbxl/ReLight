import styles from "./page.module.css";
import Footer from "./home/footer";
import Features from "./home/features";
import Header from "./home/header";
import Compatibility from "./home/compatible";
import Section from "./home/section";
import Gallery from "./home/gallery";
import SectionTwo from "./home/sectionTwo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Gallery />
      <SectionTwo />
      <Features />
      <Section title="Works with" />
      <Compatibility />
      <Footer />
    </main>
  );
}

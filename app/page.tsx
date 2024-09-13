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
      <SectionTwo
        title="Why choose Relight?"
        titleTwo="A"
        colorTitle="delightful experience"
        subtitle="for you and your community"
        titleColor="hsl(210, 100%, 50%)"
        subtitleColor="hsl(210, 100%, 50%)"
        bgColor="rgba(0, 0, 0, 0.05)"
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      />
      <Features />
      <Compatibility />
      <Footer />
    </main>
  );
}

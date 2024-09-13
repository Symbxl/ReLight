import styles from "./page.module.css";
import Footer from "./home/footer";
import Features from "./home/features";
import Header from "./home/header";
import Compatibility from "./home/compatible";
import Gallery from "./home/gallery";
import Section from "./home/section";
import Title from "./home/title";
import FAQ from "./home/faq"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Section
        title="Download our Mobile App &#8594;"
        subtitle="Check out our new"
        colorSub="mobile app"
        secondSub="and take advantage of Relight's advanced features!"
        titleColor="hsl(210, 100%, 50%)"
        subtitleColor="hsl(210, 100%, 50%)"
        bgColor="rgba(0, 0, 0, 0.05)"
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      />
      <Title title="Works with" fontSize="1.5rem" />
      <Compatibility />
      <Section
        title="Why choose Relight?"
        subtitle="A"
        colorSub="delightful experience"
        secondSub="for you and your community"
        titleColor="hsl(210, 100%, 50%)"
        subtitleColor="hsl(210, 100%, 50%)"
        bgColor="rgba(0, 0, 0, 0.05)"
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      />
      <Features />
      <Title title="Frequently asked question" fontSize="2.25rem" />
      <FAQ />
      <Footer />
    </main>
  );
}

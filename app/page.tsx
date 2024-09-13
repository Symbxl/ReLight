import styles from "./page.module.css";
import Footer from "./home/footer";
import Features from "./home/features";
import Header from "./home/header";
import Compatibility from "./home/compatible";
import Section from "./home/section";
import Title from "./home/title";
import FAQ from "./home/faq"
import DisplayMobile from "./home/display-mobile";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Section
        title="Shop by use case"
        subtitle="Illuminate your"
        colorSub="Residential or Commericial"
        secondSub="Property for for every occassion!"
        titleColor="hsl(210, 100%, 50%)"
        subtitleColor="hsl(210, 100%, 50%)"
        bgColor="rgba(0, 0, 0, 0.05)"
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      />
      <DisplayMobile />

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

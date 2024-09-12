import Navigation from "./components/Navigation";
import Card from "./components/Card";
import styles from "./page.module.css";
import SectionTwo from "./components/SectionTwo";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Header />
      <Card />
      <SectionTwo />
      <Footer />
    </main>
  );
}

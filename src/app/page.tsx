import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Selection from "@/components/Selection";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <Header />
      <Hero />
      <Selection />
      <NewsLetter />
      <Footer />
    </>
  );
}

import Image from "next/image";
import Side from "./components/Side";
import Header from "./components/Header";
import ExImage from "./components/ExImage";
import Features from "./components/Features";
import Flow from "./components/Flow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
  return (
      <div className="flex">
        <div className="">
          <Side />
        </div>
        <div className="ml-52 w-full flex flex-col justify-center">
          <Header />
          <ExImage />
          <Features />
          <div className="bg-white flex flex-col justify-center">
            <Flow />
            <Contact />
          </div>
          <BackToTopButton />
          <Footer />
        </div>
      </div>
  );
}

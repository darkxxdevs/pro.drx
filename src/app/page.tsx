import Image from "next/image";
import Searchbar from "./components/searchbar/Searchbar";
import HeroCarousel from "./components/heroCarousel/HeroCarousel";

export default function Home() {
  return (
    <>
      <section className="px-4 md:px-20 py-12 md:py-24 max-w-full ">
        <div className="flex flex-col md:flex-row gap-6 max-xl">
          <div className="flex flex-col justify-center">
            <p className="text-red-500 font-bold flex items-center">
              Get started with smart shopping right now
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="text-3xl md:text-8xl flex flex-col">
              Experience the power of
              <span className="text-red-800">PriceDrx</span>
            </h1>
            <p className="mt-4 md:mt-6 md:font-xl font-serif text-gray-500">
              Unlock the power of precision pricing with real-time tracking and
              insightful analytics at your fingertips – the ultimate tool for
              savvy shoppers and businesses alike.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["apple-iphone 15", "book", "sneakers"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
}

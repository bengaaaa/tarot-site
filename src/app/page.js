import Image from "next/image";
import SparkleEffect from "@/components/SparkleEffect";
import ContactForm from "@/components/ContactForm";
import TwitterIcon from "@/components/TwitterIcon";
import TarotColumn from "@/components/TarotColumn";

// ---- Ideas ----
// Carousel of tarot cards on each edge rotating different directions
// background color fades to purple and green at top and bottom
// mobile friendly
// intermittent sparkle effect
// Music with ability to turn off? default off?
// twitter handle in bottom left?

// Virtual tarot spread?
// shuffle button that actually shuffles array
// ability to pick from anywhere in deck

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8 text-black vintage-paper">
      <SparkleEffect />
      <TwitterIcon />
      <TarotColumn side="left" direction="down" />
      <TarotColumn side="right" direction="up" />
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          FRIB TAROT
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center pb-8 md:pb-10">
          <p className="text-lg sm:text-2xl md:w-1/2">
            {`Join me on a tarot journey to understand the unconcious mind and
            gain valuable insight into your toughest questions. I'm based in
            NYC and currently only doing readings in person!`}
          </p>
          <Image
            src="/images/sunglass-shop.jpeg"
            alt="Me in a sunglass shop"
            width={300}
            height={300}
            className="rounded-lg object-cover md:mx-8 w-full max-w-xs md:max-w-none md:w-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-6 sm:gap-4 mt-8 md:mt-10 vintage-box p-6">
          <div className="text-center">
            <h3 className="font-semibold text-xl sm:text-2xl">PRICE</h3>
            <p className="text-lg sm:text-xl">$50</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl sm:text-2xl">TIME</h3>
            <p className="text-lg sm:text-xl">30-60 min</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl sm:text-2xl">LOCATION</h3>
            <p className="text-lg sm:text-xl">A local coffee shop</p>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

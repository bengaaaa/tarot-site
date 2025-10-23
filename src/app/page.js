import Image from "next/image";
import SparkleEffect from "@/components/SparkleEffect";

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
    <div className="min-h-screen p-8 text-black bg-gradient-to-b from-purple-200 via-amber-50 to-green-200">
      <SparkleEffect />
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Tarot With Ben</h1>
        <div className="flex gap-8 items-center pb-10">
          <p className="text-2xl w-1/2">
            {`Join me on a tarot journey to understand the unconcious mind and
            gain valuable insight into your toughest questions. I'm based in 
            NYC and currently only doing readings in person!`}
          </p>
          <Image
            src="/images/sunglass-shop.jpeg"
            alt="Me in a sunglass shop"
            width={300}
            height={300}
            className="rounded-lg object-cover mx-8"
          />
        </div>
        <div className="flex justify-evenly pt-10">
          <div>
            <h3 className="font-semibold text-2xl">Price</h3>
            <p className="text-xl">$50</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Approx. time</h3>
            <p className="text-xl">30-60 min</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Where</h3>
            <p className="text-xl">A coffee shop</p>
          </div>
        </div>
      </main>
    </div>
  );
}

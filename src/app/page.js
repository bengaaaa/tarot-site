import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-amber-50 text-black">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          🔮 Tarot with Ben 🔮
        </h1>
        <div className="flex gap-8 items-center pb-10">
          <p className="text-xl flex-1">
            {`Join me on a tarot journey to understand the unconcious mind and
            gain valuable insight into your toughest questions. I'm new to
            this, but just having fun, and we might discover something
            together. I'm based in NYC and currently only doing readings in
            person!`}
          </p>
          <Image
            src="/images/sunglass-shop.jpeg"
            alt="Me in a sunglass shop"
            width={300}
            height={300}
            className="rounded-lg object-cover"
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

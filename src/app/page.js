import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Tarot with Ben</h1>
        <div className="flex gap-8 items-center">
          <p className="text-xl flex-1">
            {`Join me on a tarot journey to understand the unconcious mind and
            gain valuable insight into your toughest questions. I'm new to
            this, but just having fun, and we might discover something beautiful
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
      </main>
    </div>
  );
}

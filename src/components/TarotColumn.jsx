"use client";

import { useRef } from "react";
import Image from "next/image";

// All 78 tarot cards
const TAROT_CARDS = [
  "00-TheFool.jpg",
  "01-TheMagician.jpg",
  "02-TheHighPriestess.jpg",
  "03-TheEmpress.jpg",
  "04-TheEmperor.jpg",
  "05-TheHierophant.jpg",
  "06-TheLovers.jpg",
  "07-TheChariot.jpg",
  "08-Strength.jpg",
  "09-TheHermit.jpg",
  "10-WheelOfFortune.jpg",
  "11-Justice.jpg",
  "12-TheHangedMan.jpg",
  "13-Death.jpg",
  "14-Temperance.jpg",
  "15-TheDevil.jpg",
  "16-TheTower.jpg",
  "17-TheStar.jpg",
  "18-TheMoon.jpg",
  "19-TheSun.jpg",
  "20-Judgement.jpg",
  "21-TheWorld.jpg",
  "Cups01.jpg",
  "Cups02.jpg",
  "Cups03.jpg",
  "Cups04.jpg",
  "Cups05.jpg",
  "Cups06.jpg",
  "Cups07.jpg",
  "Cups08.jpg",
  "Cups09.jpg",
  "Cups10.jpg",
  "Cups11.jpg",
  "Cups12.jpg",
  "Cups13.jpg",
  "Cups14.jpg",
  "Pentacles01.jpg",
  "Pentacles02.jpg",
  "Pentacles03.jpg",
  "Pentacles04.jpg",
  "Pentacles05.jpg",
  "Pentacles06.jpg",
  "Pentacles07.jpg",
  "Pentacles08.jpg",
  "Pentacles09.jpg",
  "Pentacles10.jpg",
  "Pentacles11.jpg",
  "Pentacles12.jpg",
  "Pentacles13.jpg",
  "Pentacles14.jpg",
  "Swords01.jpg",
  "Swords02.jpg",
  "Swords03.jpg",
  "Swords04.jpg",
  "Swords05.jpg",
  "Swords06.jpg",
  "Swords07.jpg",
  "Swords08.jpg",
  "Swords09.jpg",
  "Swords10.jpg",
  "Swords11.jpg",
  "Swords12.jpg",
  "Swords13.jpg",
  "Swords14.jpg",
  "Wands01.jpg",
  "Wands02.jpg",
  "Wands03.jpg",
  "Wands04.jpg",
  "Wands05.jpg",
  "Wands06.jpg",
  "Wands07.jpg",
  "Wands08.jpg",
  "Wands09.jpg",
  "Wands10.jpg",
  "Wands11.jpg",
  "Wands12.jpg",
  "Wands13.jpg",
  "Wands14.jpg",
];

export default function TarotColumn({ side = "left", direction = "down" }) {
  const columnRef = useRef(null);

  // Shuffle and select 10 random cards for variety
  const displayCards = useRef(
    [...TAROT_CARDS].sort(() => Math.random() - 0.5).slice(0, 10)
  );

  return (
    <div
      className={`fixed top-0 ${
        side === "left" ? "left-8" : "right-4"
      } h-screen w-28 overflow-visible pointer-events-none z-0 hidden lg:block flex justify-center`}
    >
      <div
        ref={columnRef}
        className={`flex flex-col gap-4 ${
          direction === "down" ? "animate-scroll-down" : "animate-scroll-up"
        }`}
        style={{
          animationDuration: "40s",
        }}
      >
        {/* Render cards twice for seamless loop */}
        {[...displayCards.current, ...displayCards.current].map(
          (card, index) => (
            <div
              key={`${card}-${index}`}
              className="w-20 h-36 relative flex-shrink-0"
            >
              <Image
                src={`/images/tarot-cards/${card}`}
                alt="Tarot card"
                fill
                className="object-cover rounded-sm shadow-lg"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

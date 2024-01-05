"use client";

import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

const Firework = () => {
  const [newYearMessage, setNewYearMessage] = useState(["Menunggu Tahun Baru!"]);

  function timeLeft() {
    const newYearDate = new Date("Januari 1,2025 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  return (
    <>
      <Particles init={particleInit} options={{ preset: "fireworks" }} />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center">
        <span className="z-50 px-4 text-4xl font-bold text-white">
          <Typewriter words={newYearMessage} loop={false} cursorStyle={"_"} cursor />
        </span>
        <span className="z-50 text-2xl font-bold text-white">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat Tahun Baru", "HNY 2025"])} />
        </span>
      </div>
    </>
  );
};

export default Firework;

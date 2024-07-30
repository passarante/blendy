import React from "react";
import { WavyBackground } from "./ui/wavy-background";

const Header = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-20">
      <p className="text-4xl md:text-4xl text-white font-bold inter-var">
        Blendpad Blendy, AI Smart Contract Auditor
      </p>
      <p className="text-base md:text-2xl mt-4 text-white font-normal inter-var">
        Leverage the power of AI to audit your smart contracts
      </p>
    </WavyBackground>
  );
};

export default Header;

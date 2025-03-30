"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]); // Fades out on scroll

  return (
    
<section className="w-full min-h-screen pt-[100px] md:pt-[120px] pb-10">
  <div className="grid_container flex flex-col items-center justify-center text-white min-h-[120vh] text-center px-6">
    <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
      Build Smarter, Faster, <span className="text-blue-500">Together</span>
    </h1>

    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
      AI-powered tools to supercharge your workflow. Create resumes, cover letters, and ace interviews effortlessly.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      <Link href="/dashboard">
        <Button className="px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 cursor-pointer">
          GET STARTED
        </Button>
      </Link>

      <Link href="/about">
        <Button className="px-8 py-4 text-lg font-semibold bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700 cursor-pointer">
          LEARN MORE
        </Button>
      </Link>
    </div>

    <div ref={ref} className="flex flex-col items-center justify-center space-y-16 py-20">
      <motion.img
        src="/ai2.jpg"
        width={1000}
        height={30}
        alt="Dashboard Preview"
        className="rounded-lg shadow-2xl border mx-auto"
        style={{ rotate, opacity }}
      />
    </div>
  </div>
</section>

  );
};

export default Hero;

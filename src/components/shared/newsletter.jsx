"use client";

import Image from "next/image";
import { useState } from "react";
import { Particles } from "../magicui/particles";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <div className=" bg-[#E6FFDD] lg:mt-[80px] relative">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={180}
        color={"#0f4d0f"}
        refresh
      />
      <div className="container flex min-h-[350px] justify-between items-center py-10 ">
        <div className="max-w-3xl z-50">
          <h2 className="text-textPrimary text-2xl font-semibold mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-textPrimary mb-6">
            Lorem ipsum dolor sit amet consectetur. A nulla morbi suspendisse ut
            sed commodo senectus tortor. Diam eu et at neque.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded bg-white text-gray-900 placeholder:text-gray-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="lg:mr-[50px] z-50">
          <Image
            src="/assets/homepage/leaf.png"
            alt="Leaf decoration"
            width={200}
            height={200}
            className="w-[200] h-[200] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

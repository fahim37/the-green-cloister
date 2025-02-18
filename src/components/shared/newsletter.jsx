"use client";

import Image from "next/image";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <div className=" bg-[#32373B] mb-[40px] lg:my-[80px]">
      <div className="container flex justify-between items-start py-10">
        <div className="max-w-3xl">
          <h2 className="text-white text-2xl font-medium mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-400 mb-6">
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
        <div className="lg:mr-[100px]">
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

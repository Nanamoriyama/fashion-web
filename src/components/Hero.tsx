import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-96 md:h-[500px] lg:h-[600px] mb-8 relative">
        <Image
          src="/images/herotop.jpg"
          alt="Hero Top Image"
          fill
          priority
          sizes="100vw"
          className="object-cover mb-12"
          quality={100}
        />
      </div>

      <div className="bg-white mx-auto flex flex-col md:flex-row flex-wrap w-full justify-evenly">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center p-2">
          <Link href="/men">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[500px]">
              <Image
                src="/images/hero1.jpg"
                alt="Hero Image 1"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 992px) 50vw, 33vw"
                className="object-contain"
                quality={100}
              />
            </div>
            <h4 className="mt-4 text-stone-400 text-sm">MEN'S FASHION</h4>
            <p>DIOR AND STONE ISLAND</p>
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center p-2">
          <Link href="/woman">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[500px]">
              <Image
                src="/images/hero2.jpg"
                alt="Hero Image 2"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 992px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <h2 className="mt-4 text-stone-400 text-sm">WOMEN'S FASHION</h2>
            <p>DIORIVIERA</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

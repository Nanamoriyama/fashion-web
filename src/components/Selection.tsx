import Image from "next/image";
import React from "react";
import Link from "next/link";

const Selection = () => {
  return (
    <>
      <div>
        <h4 className="mt-14 p-3 flex justify-center font-bold">
          THE SELECTION
        </h4>
      </div>
      <div className="bg-white mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 w-full justify-evenly">
        <Link href="/woman" className="bg-white text-center">
          <div className="relative w-full h-96 md:h-[320px]">
            <Image
              src="/images/herowoman.jpg"
              alt="Woman"
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
              className="object-contain"
            />
          </div>
          <h4 className="-mt-10 md:-mt-9 lg:mt-2 text-center">FOR HER</h4>
        </Link>

        <Link href="/men" className="bg-white text-center">
          <div className="relative w-full h-96 md:h-[320px]">
            <Image
              src="/images/heromen.jpg"
              alt="Men"
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
              className="object-contain"
            />
          </div>
          <h4 className="-mt-10 md:-mt-9 lg:mt-2 text-center">FOR HIM</h4>
        </Link>

        <Link href="/kids" className="bg-white text-center">
          <div className="relative w-full h-96 md:h-[320px]">
            <Image
              src="/images/herokids.jpg"
              alt="Kids"
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
              className="object-contain"
            />
          </div>
          <h4 className="-mt-10 md:-mt-9 lg:mt-2 text-center">FOR KIDS</h4>
        </Link>

        <Link href="/maison" className="bg-white text-center">
          <div className="relative w-full h-96 md:h-[320px]">
            <Image
              src="/images/heromaison.jpg"
              alt="Maison"
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
              className="object-contain"
            />
          </div>
          <h4 className="-mt-10 md:-mt-9 lg:mt-2 text-center">FOR THE HOME</h4>
        </Link>
      </div>
      <div className="bg-white pt-6 pb-6 mx-auto flex flex-col md:flex-row flex-wrap w-full justify-evenly">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center p-2">
          <Link href="/men">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[500px]">
              <Image
                src="/images/cd-heart.jpg"
                alt="CD Heart"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 992px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <h4 className="mt-4 text-stone-400 text-sm">MEN'S FASHION</h4>
            <p>CD HEART</p>
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center p-2">
          <Link href="/woman">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[500px]">
              <Image
                src="/images/cdv-femme.jpg"
                alt="Cdv-femme"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 992px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <h2 className="mt-4 text-stone-400 text-sm">WOMEN'S FASHION</h2>
            <p>DIOR CAPSULE</p>
          </Link>
        </div>
      </div>
      <div className="bg-white pt-4 pb-6 mx-auto flex flex-col md:flex-row flex-wrap w-full justify-evenly">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white text-center">
          <Link href="/kids">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[500px]">
              <Image
                src="/images/visuel.jpg"
                alt="CD Heart"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 992px) 50vw, 33vw"
                className="object-contain"
                quality={100}
              />
            </div>
          </Link>
        </div>
        <div className="w-full mt-10 mb-10 md:w-1/2 lg:w-1/3 bg-white text-center p-2 flex items-center justify-center">
          <Link href="/jewelry">
            <div className="relative w-full">
              <h2 className="mt-4 text-stone-400 text-sm mb-2">
                AVAILABLE FIRST ONLINE
              </h2>
              <h2 className="font-bold mb-2">IRRESISTIBLY DIOR ACCESSORIES</h2>
              <p className="font-light">
                Pre-launched exclusively on Dior.com, discover the latest Baby
                Dior leather goods, conceived to accompany children at every
                moment.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-white mx-auto flex flex-col w-full justify-evenly">
        <div className="w-full bg-white text-center">
          <Link href="/jewelry">
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src="/images/section.jpg"
                alt="section"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 992px) 50vw, 33vw"
                className="object-cover"
                quality={100}
              />
            </div>
          </Link>
          <div className="p-4">
            <h2 className="font-bold mb-2">LA CABINE DIOR</h2>
            <p className="font-light md:p-7">
              Between refinement and audacity, La Cabine Dior reveals the many
              secrets of Maria Grazia Chiuri's creations through a playful
              fitting session in which a young woman lets herself be guided by
              the subtle art of detail so dear to the House. A subjective
              narrative, unprecedented and fascinating, celebrating the many
              sides of Dior elegance, from unique heritage to infinitely plural
              reinterpretation(s).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;

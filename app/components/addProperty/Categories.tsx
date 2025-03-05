import React from "react";
import Image from "next/image";
interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

export default function Categories({
  dataCategory,
  setCategory,
}: CategoriesProps) {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
        <div
          onClick={() => setCategory("Beach")}
          className={`"pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Beach" ? "border-gray-800" : "border-white"
          }   opacity-60 hover:border-gray-100 hover:opacity-100"`}
        >
          <Image
            src="/beachfront.jpg"
            alt="beachfront"
            width={25}
            height={25}
          />
          <span className="text-sm">Beach</span>
        </div>

        <div
          onClick={() => setCategory("Villas")}
          className={`"pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Villas" ? "border-gray-800" : "border-white"
          }   opacity-60 hover:border-gray-100 hover:opacity-100"`}
        >
          <Image
            src="/beachfront.jpg"
            alt="beachfront"
            width={25}
            height={25}
          />
          <span className="text-sm">Villas</span>
        </div>

        <div
          onClick={() => setCategory("Cabins")}
          className={`"pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Cabins" ? "border-gray-800" : "border-white"
          }   opacity-60 hover:border-gray-100 hover:opacity-100"`}
        >
          <Image
            src="/beachfront.jpg"
            alt="beachfront"
            width={25}
            height={25}
          />
          <span className="text-sm">Cabins</span>
        </div>

        <div
          onClick={() => setCategory("Tiny Homes")}
          className={`"pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Tiny Homes" ? "border-gray-800" : "border-white"
          }   opacity-60 hover:border-gray-100 hover:opacity-100"`}
        >
          <Image
            src="/beachfront.jpg"
            alt="beachfront"
            width={25}
            height={25}
          />
          <span className="text-sm">Tiny Homes</span>
        </div>
      </div>
    </>
  );
}

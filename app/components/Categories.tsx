import React from "react";
import Image from "next/image";
export default function Categories() {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 ">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
        <Image src="/beachfront.jpg" alt="beachfront" width={25} height={25} />
        <span className="text-sm">Beach</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
        <Image src="/beachfront.jpg" alt="beachfront" width={25} height={25} />
        <span className="text-sm">Villas</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
        <Image src="/beachfront.jpg" alt="beachfront" width={25} height={25} />
        <span className="text-sm">Cabins</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-100 hover:opacity-100">
        <Image src="/beachfront.jpg" alt="beachfront" width={25} height={25} />
        <span className="text-sm">Tiny Homes</span>
      </div>
    </div>
  );
}

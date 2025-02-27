import React from "react";
import Image from "next/image";

import { PropertyType } from "./PropertyList";

interface PropertyProps {
  property: PropertyType;
}
export default function PropertyListItem({ property }: PropertyProps) {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={property.image_url}
          alt="beach1"
          sizes="(max-width:768px) 768px, (max-width:1200px):768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>${property.price_per_night}</strong> per night
        </p>
      </div>
    </div>
  );
}

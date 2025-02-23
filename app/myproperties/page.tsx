import React from "react";
import PropertyList from "../components/properties/PropertyList";

export default function MyPropertiesPage() {
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1>My Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <PropertyList />
      </div>
    </div>
  );
}

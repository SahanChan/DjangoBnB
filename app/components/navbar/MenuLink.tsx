"use client";
import React from "react";

interface MenuLinkProps {
  label: string;
  onClick: () => void;
}

export default function MenuLink({ label, onClick }: MenuLinkProps) {
  return (
    <div
      className="px-5 py-4 cursor-pointer hover:bg-gray-100 transition"
      onClick={onClick}
    >
      {label}
    </div>
  );
}

"use client";

import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

export default function SelectCountry({ value, onChange }: SelectCountryProps) {
  const { getAll } = useCountries();
  return (
    <>
      <Select
        isClearable
        options={getAll()}
        placeholder="Anywhere"
        value={value}
        onChange={(value) => onChange(value as SelectCountryValue)}
      />
    </>
  );
}

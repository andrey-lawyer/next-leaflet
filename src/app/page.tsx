"use client";
import { useState } from "react";

import { Map } from "@/components/Map";
import { Filter } from "@/components/Filter/Filter";
import { Cards } from "@/components/Cards";

import { IAdverts } from "@/types/typesAdverts";

export default function Home() {
  const [accommodationsFilter, setAccommodationsFilter] = useState<IAdverts[]>(
    []
  );
  const [cost, setCost] = useState("");
  const [accommodationType, setAccommodationType] = useState("");

  return (
    <main className="container bg-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_4fr_1fr] lg:gap-0">
        <Filter setCost={setCost} setAccommodationType={setAccommodationType} />
        <Map
          cost={cost}
          accommodationType={accommodationType}
          setAccommodationsFilter={setAccommodationsFilter}
        />
        <Cards accommodationsFilter={accommodationsFilter} />
      </div>
    </main>
  );
}

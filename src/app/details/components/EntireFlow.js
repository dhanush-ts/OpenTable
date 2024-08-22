import React from 'react'
import Reservation from "./Reservation";
import Link from "next/link";
import Overview from './Overview';

export default function EntireFlow() {
  return (
    <div className="md:flex max-w-4xl m-auto">
        <div className="bg-white p-0.5 m-auto shadow -mt-9 max-w-xl rounded">
          <nav className="border-b py-1 mx-2">
            <Link href="/" className="text-xs font-semibold">Overview</Link>
            <Link href="/" className="text-xs mx-2 font-semibold">Menu</Link>
          </nav>
          <Overview />
        </div>
        <Reservation />
      </div>
  )
}

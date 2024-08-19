import React from 'react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r py-12 justify-center flex flex-col from-cyan-950 to-cyan-700 mx-auto">
          <p className="text-2xl my-2 font-semibold text-center text-slate-50">Find your table for any occasion</p>
          <div className="m-auto my-2">
            <input type="text" placeholder="State, City, Town ..." className=" rounded px-2 py-1" />
            <button className="bg-red-600 rounded text-slate-50 px-2 py-1 mx-2"> Let's Go </button>
          </div>
        </div>
  )
}

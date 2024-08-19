import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between'>
    <strong className="m-2">OpenTable</strong>
    <div>
      <button className="bg-blue-400 p-1 rounded hover:bg-blue-500 text-slate-50 m-2 text-xs">Sign Up</button>
      <button className="border p-1 rounded m-2 text-xs hover:bg-gray-200">Sign In</button>
    </div>
  </div>
  )
}

import React from 'react'

export default function Reservation() {
  return (
    <div className='max-w-sm m-auto my-10'>
        <p className='font-extrabold my-2 text-xs'>You're almost done !</p>
        <div className='flex border rounded-lg'>
            <img className='max-w-bk  rounded-l-lg' src="https://imgs.search.brave.com/PHzgCAapWM5PM0XOFrXAVUA1-4hi9ZLXC5xPDGsayaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg3/MDQyMjc2L3Bob3Rv/L2hvdGVsLXNpZ24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PURqRVZBb0ZuakIy/Y1d3WDI4Y3hTS1dr/eHNiemU3bzlqZ2tZ/cmh5Zm1xOUU9" alt="" />
            <div className='mx-3'>
                <strong>Aliana Restaurant Collection</strong>
                <p className='my-2 text-xs'>Tues, 22, 2023 7:30 PM 3 people</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-2 my-3 justify-around'>
            <input type="text" placeholder='First name' className='rounded-lg p-2 text-xs border' />
            <input type="text" placeholder='Last name' className='rounded-lg p-2 text-xs border' />
            <input type="text" placeholder='Phone number' className='rounded-lg p-2 text-xs border' />
            <input type="text" placeholder='Email' className='rounded-lg p-2 text-xs border' />
            <input type="text" placeholder='Ocassion (Optional)' className='rounded-lg p-2 text-xs border' />
            <input type="text" placeholder='Requests (Optional)' className='rounded-lg p-2 text-xs border' />
        </div>
        <button className='bg-red-500 rounded-lg px-2 py-1 w-full hover:bg-red-600 text-slate-50'>Complete reservation</button>
        <p className='font-semibold my-2 text-xs'>By clicking "Complete reservation" you agree to the OpenTable Terms of use and Privacy Policy. Standard text message rates may opt out of receving text messages at any time.</p>
    </div>
  )
}

import React from 'react'

export default function RestaurantCard() {
  return (
    <div className="border border-gray-300 w-fit m-auto my-3 mx-2">
    <img className="max-w-vs" src="https://imgs.search.brave.com/PHzgCAapWM5PM0XOFrXAVUA1-4hi9ZLXC5xPDGsayaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg3/MDQyMjc2L3Bob3Rv/L2hvdGVsLXNpZ24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PURqRVZBb0ZuakIy/Y1d3WDI4Y3hTS1dr/eHNiemU3bzlqZ2tZ/cmh5Zm1xOUU9" alt="" />
    <strong className="text-md">Vivaan - fine Indian</strong>
    <br /><span className="text-xs">3.5</span><span className="mx-3 text-xs font-semibold">(2) reviews</span>
    <p className="text-xs">Indian $$$$ Ottawa</p>
    <p className="font-semibold text-xs">Booked 3 times a day</p>
  </div>
  )
}

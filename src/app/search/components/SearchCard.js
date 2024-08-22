

export default function SearchCard() {
  return (
    <div className='flex h-fit my-5 max-w-lg py-5 border-b'> 
        <img className='max-w-bk mx-6 rounded' src="https://imgs.search.brave.com/PHzgCAapWM5PM0XOFrXAVUA1-4hi9ZLXC5xPDGsayaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg3/MDQyMjc2L3Bob3Rv/L2hvdGVsLXNpZ24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PURqRVZBb0ZuakIy/Y1d3WDI4Y3hTS1dr/eHNiemU3bzlqZ2tZ/cmh5Zm1xOUU9" alt="" />
        <div className='text-xs'>
            <p className='text-sm font-bold'>Aiana Restaurant Collective</p>
            <p>****** Awesome</p>
            <p>$$$$ Mexican Ottawa</p>
            <p className='mt-4 text-red-400 hover:text-red-500 hover:underline'>View more information</p>
        </div>
    </div>
  )
}

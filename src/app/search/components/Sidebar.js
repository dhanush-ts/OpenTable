export default function Sidebar() {
  return (
    <div className='hidden md:block max-w-vs mx-2'>
      <div className='text-xs py-4 border-b'>
          <strong className='text-sm'>Region</strong>
          <p >Toronto</p>
          <p >Ottawa</p>
          <p >Montoreal</p>
          <p >Hamilton</p>
          <p >Kingston</p>
          <p >Niagara</p>
      </div>
      <div className='text-xs py-4 border-b'>
          <strong className='text-sm'>Cusine</strong>
          <p >Mexican</p>
          <p >Italian</p>
          <p >Chinese</p>
      </div>
      <div className='text-xs py-4 border-b'>
          <strong className='text-sm my-2'>Price</strong>
          <div className='flex border my-2 w-fit rounded-lg'>
              <p className='px-4 hover:bg-gray-100 py-1'>$</p>
              <p className='border-l hover:bg-gray-100 border-r px-3 py-1'>$$</p>
              <p className='px-2 py-1 hover:bg-gray-100'>$$$</p>
          </div>
      </div>
    </div> 
  )
}

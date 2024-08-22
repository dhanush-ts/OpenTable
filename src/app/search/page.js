import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sidebar from './components/Sidebar'
import SearchCard from './components/SearchCard'

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen">
        <div className="max-w-5xl m-auto bg-white">
            <Header />
            <Hero tit={false} search={true} />
            <div className='md:flex m-auto max-w-lg justify-between'>
                <Sidebar />
                <SearchCard />
            </div>
        </div>
    </main>
  )
}
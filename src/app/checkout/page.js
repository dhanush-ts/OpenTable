import Header from '@/components/Header'
import Reservation from './components/Reservation'


export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen">
        <div className="max-w-5xl m-auto bg-white pb-10">
            <Header />
            <Reservation />
        </div>
    </main>
  )
}

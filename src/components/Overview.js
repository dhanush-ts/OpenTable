import Feedback from '../app/details/components/Feedback'
import RestaurantImages from '../app/details/components/RestaurantImages'
import Reviews from '../app/details/components/Reviews'
import RestaurantName from '../app/details/components/RestaurantName'

export default function Overview() {
  return (
    <>
      <RestaurantName />
      <Reviews />
      <RestaurantImages />
      <Feedback />
    </>
  )
}

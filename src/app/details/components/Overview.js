import Feedback from './Feedback'
import RestaurantImages from './RestaurantImages'
import Reviews from './Reviews'
import RestaurantName from './RestaurantName'

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

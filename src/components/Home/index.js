import BlogList from '../BlogList'
import RestaurantInfo from '../RestaurantInfo'

import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'Chicken Biryani Full',
    rate: '230/-',
    description: 'Chicken Biryani Full(serves with two pieces)',
  },
  {
    id: 2,
    title: 'Fry Piece Biryani',
    description: 'Must to eat',
    rate: '330/-',
  },
  {
    id: 3,
    title: 'Tony Stark Biryani',
    description: 'Power Generator',
    rate: '280/-',
  },
  {
    id: 4,
    title: 'Bova Biryani',
    description: 'Chicken Biryani Full(serves with two pieces)',
    rate: '270/-',
  },
  {
    id: 5,
    title: 'Chicken Biryani Full',
    description: 'Chicken Biryani Full(serves with two pieces)',
    rate: '500/-',
  },
]
const Home = () => (
  <div className="home-container">
    <RestaurantInfo />
    <h1 className="reco">Recommended</h1>
    <BlogList blogsList={blogsList} />
  </div>
)

export default Home

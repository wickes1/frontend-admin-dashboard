import './home.css'
import FeaturedInfo from './../../featureinfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import { userData } from '../../../dummyData'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWdiget"></div>
    </div>
  )
}

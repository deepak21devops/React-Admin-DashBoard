import React from 'react'
import FeaturedInfo from '../../Components/Featured/FeaturedInfo'
import './home.css'
import { Userdata } from '../../dummyData.js'
import ChartsInfo from '../../Components/Charts/ChartsInfo'
import WidgetSM from '../../Components/WidgetSM/WidgetSM'
import WidgetLG from '../../Components/WidgetLG/WidgetLG'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <ChartsInfo title="User Analytics" data={Userdata} grid dataKey="month" />
            <div className="widgets">
                <WidgetSM />
                <WidgetLG />
            </div>
        </div>
    )
}

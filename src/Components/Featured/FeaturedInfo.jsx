import React from 'react'
import './featuredinfo.css'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featuredinfo">
            <div className="featuredItem">
                <h3 className="featured-title">Revenue</h3>
                <div className="featuredContainer">
                    <span className="priceup">$2,455</span>
                    <span className="pricedown">-12.34 <ArrowDownward className="priceIcnon negative" /></span>
                </div>
                <span className="para">Compared to Last Month</span>
            </div>

            <div className="featuredItem">
                <h3 className="featured-title">Sales</h3>
                <div className="featuredContainer">
                    <span className="priceup">$3,765</span>
                    <span className="pricedown">+6.54 <ArrowUpward className="priceIcnon" /></span>
                </div>
                <span className="para">Compared to Last Month</span>
            </div>

            <div className="featuredItem">
                <h3 className="featured-title">Cost</h3>
                <div className="featuredContainer">
                    <span className="priceup">$5,321</span>
                    <span className="pricedown">-32.45 <ArrowDownward className="priceIcnon negative" /></span>
                </div>
                <span className="para">Compared to Last Month</span>
            </div>
        </div>
    )
}

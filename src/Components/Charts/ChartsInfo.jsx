import React from 'react'
import './chartinfo.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ChartsInfo({ title, data, grid, dataKey }) {
    return (
        <div className="chartMenu">
            <h3 className="title">{title}</h3>
            <div className="lineChart">
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                        <XAxis dataKey="month" stroke="#6b6b47" strokeDasharray="5 5"></XAxis>
                        <Line type="monotone" dataKey="amt" stroke="#0000cc" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

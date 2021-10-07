import React from 'react'
import './widgetlg.css'

export default function WidgetLG() {


    const Button = ({ type }) => {
        return <button className={`display ${type}`}>{type}</button>
    }

    return (
        <div className="widgetlg">
            <h2 className="title">Latest Transactions</h2>
            <table className="widgetTable">
                <tr className="headers">
                    <th className="headings">Customer</th>
                    <th className="headings">Date</th>
                    <th className="headings">Amount</th>
                    <th className="headings">Status</th>
                </tr>
                <tr className="data">
                    <td className="profileContainer">
                        <img className="profileimg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt='profile'></img>
                        <span className="profileName">Robert pattinson</span>
                    </td>
                    <td className="dateCol">2 Jun 2021</td>
                    <td className="priceCol">$122.00</td>
                    <td>
                        <Button type="Approved"></Button>
                    </td>
                </tr>

                <tr className="data">
                    <td className="profileContainer">
                        <img className="profileimg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt='profile'></img>
                        <span className="profileName">Robert pattinson</span>
                    </td>
                    <td className="dateCol">2 Jun 2021</td>
                    <td className="priceCol">$122.00</td>
                    <td>
                        <Button type="Pending"></Button>
                    </td>
                </tr>

                <tr className="data">
                    <td className="profileContainer">
                        <img className="profileimg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt='profile'></img>
                        <span className="profileName">Robert pattinson</span>
                    </td>
                    <td className="dateCol">2 Jun 2021</td>
                    <td className="priceCol">$122.00</td>
                    <td>
                        <Button type="Rejected"></Button>
                    </td>
                </tr>

                <tr className="data">
                    <td className="profileContainer">
                        <img className="profileimg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt='profile'></img>
                        <span className="profileName">Robert pattinson</span>
                    </td>
                    <td className="dateCol">2 Jun 2021</td>
                    <td className="priceCol">$122.00</td>
                    <td>
                        <Button type="Approved"></Button>
                    </td>
                </tr>

                <tr className="data">
                    <td className="profileContainer">
                        <img className="profileimg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt='profile'></img>
                        <span className="profileName">Robert pattinson</span>
                    </td>
                    <td className="dateCol">2 Jun 2021</td>
                    <td className="priceCol">$122.00</td>
                    <td>
                        <Button type="Rejected"></Button>
                    </td>
                </tr>


            </table>
        </div>
    )
}

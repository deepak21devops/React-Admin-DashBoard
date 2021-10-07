import React from 'react'
import './product.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../dummyData.js'
import { Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom';

export default function Product() {
    return (
        <div className="singleproduct">
            <div className="productContainer">
                <h3 className="productHeader">Product</h3>
                <Link className="link" to="/newproduct">
                    <button className="createbtn">Create</button>
                </Link>

            </div>
            <div className="salesContainer">
                <div className="salesLeftContainer">
                    <h2 className="perform">Sales Performance</h2>
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                        <LineChart data={SalesData}>
                            <XAxis dataKey="month" stroke="#6b6b47" strokeDasharray="5 5"></XAxis>
                            <Line type="monotone" dataKey="price" stroke="#0000cc" />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="salesRightContainer">
                    <div className="productDesc">
                        <img className="prodimg" src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg" alt=""></img>
                        <span className="prodTitle">IPhone13 2021</span>
                    </div>
                    <div className="productSpe">
                        <div className="productid">
                            <span>Id: </span>
                            <span>123 </span>
                        </div>

                        <div className="productsales">
                            <span>Sales: </span>
                            <span>65123 </span>
                        </div>

                        <div className="productactive">
                            <span>Active: </span>
                            <span>Yes </span>
                        </div>

                        <div className="productstock">
                            <span>In Stock: </span>
                            <span>No </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productUpdate">
                <div className="productLeft">
                    <form className="updProd">
                        <label>Product Name</label>
                        <input type="text" placeholder="IPhone 13 2021"></input>

                        <label>In Stock</label>
                        <select className="useSelect" id="stock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label className="activeselect">Active</label>
                        <select className="useSelect" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </form>
                </div>
                <div className="productRight">
                    <div className="uploadContainer">

                        <img className="uploadimg" src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg" alt=""></img>
                        <label for="file">
                            <Publish className="uploadIcon" />
                        </label>
                        <input type="file" id="file" name="file"
                            style={{ display: "none" }}
                        ></input>
                    </div>
                    <button className="updatebtn">Update</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './newProduct.css'


export default function NewProduct() {
    return (
        <div className="newprod">
            <h3 className="newprodTitle">New Product</h3>
            <div className="prodContainer">
                <div className="prodItem">
                    <label for="file">Image</label>
                    <input type="file" id="file" name="upload"></input>
                </div>

                <div className="prodItem">
                    <label>Name</label>
                    <input className="prod" type="text" placeholder="IPhone 13 2021"></input>
                </div>

                <div className="prodItem">
                    <label>Stock</label>
                    <select className="prodSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="prodItem">
                    <label>Active</label>
                    <select className="prodSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <button className="prodCreate">Create</button>
        </div>
    )
}

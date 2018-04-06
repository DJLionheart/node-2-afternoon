import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import './ProductManager.css'


class ProductManager extends Component {
    constructor(){
        super();
        this.state = {
            productName: '',
            productDesc: '',
            productPic: ''
        }
    }

    render(){
        return(
            <div className='product-manager'>
                <header>
                    <h1>Product Manager</h1>
                </header>
                <div className='content-box'>
                    <div className='content-box-header'>
                        <h2>Product Details</h2>
                        <nav>
                            <ul>
                                <li>Add a Product</li>
                                <li>View Products</li>
                                <li>Update a Product</li>
                                <li>Delete a Product</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='content-goes-here'>
                        <Switch>
                            <Route
                        </Switch>

                    </div>

                </div>

            </div>

        )
    }

}

export default ProductManager;
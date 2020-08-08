import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const  {id,title,img,count,price,inCart} = this.props.product;
        return (
            <div className="prod-wrap col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value)=> (
                            <div className="img-container p-5">
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" onClick={()=>value.handleDetail(id)}></img>
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{value.addToCart(id);value.openModal(id);}}>
                                    {inCart? (<p className="text-capitalize mb-0" disabled>incart</p>): (<i className="fas fa-cart-plus"/>)}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool          
    }).isRequired
}
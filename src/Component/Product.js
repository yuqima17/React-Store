import React from "react";
import formatPrice from "Commons/Helper";
class Product extends React.Component{
       product=this.props.product;
       _pClass={
              available:'product',
              unavailable:'product out-stock'
       }
       render(){
              
              return(
                     <div className={this._pClass[this.product.status]}>
                          <div className="p-content">
                                 <div className="img-wrapper">
                                        <div className="out-stock-text">out of stock</div>
                                        <figure className="image is-4by3">
                                               <img src={this.product.src} alt={this.product.name}/>
                                        </figure>
                                 </div>
                                 <p className="p-tags">{this.product.tag}</p>
                                 <p className="p-name">{this.product.name}</p>
                          </div>
                          <div className="p-footer">
                                 <p className="price">{formatPrice(this.product.price)}</p>
                                 <button className="add-cart" disabled={this.product.status=="unavailable"}>
                                        <i className="fas fa-shopping-cart"></i>
                                        <i className="fas fa-exclamation"></i>
                                 </button>
                          </div>
                     </div>
                     
              )
       }
}
export default Product;
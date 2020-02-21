import React from "react";
class ToolBox extends React.Component{
       render(){
              return(
                     <div className="tool-box">
                            <div className="logo-text">
                                   <p>React Store</p>
                            </div>
                     
                     <div className="search-box">
                            <div className="control has-icons-left has-icons-right">
                                   <input className="input" type="text" placeholder="Search"></input>
                                   <span className="icon is-small is-right">
                                          <i className="fas fa-check"></i>
                                   </span>
                            </div>
                     </div>
                     <div className="cart-box">
                            <i className="fas fa-cart-plus"></i>
                     </div>
                     </div>
              )
       }
}
export default ToolBox;
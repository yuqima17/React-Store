import React from "react";

import ToolBox from "Component/ToolBox";
import Product from "Component/Product";

class Products extends React.Component{
       products=[{
              id:1,
              name:"red coat",
              src:"https://www.purina.com/sites/g/files/auxxlc196/files/NonSporting_ShibaInu_2588.jpg",
              price:500,
              tag:"red coat",
              status:"unavailable"

       },{
              id:2,
              name:"red sesame",
              src:"https://d1bbcn6xx8qu3z.cloudfront.net/sites/default/files/styles/product_thumbnail/public/puppy-photo/lexie1-2042145894.jpg?itok=6ylyUivw",
              price:300,
              tag:"red sesame",
              status:"unavailable"
       },{
              id:3,
              name:"black coat",
              src:"https://vetstreet.brightspotcdn.com/dims4/default/a655372/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fef%2Fce8f70a81b11e0a0d50050568d634f%2Ffile%2FShiba-Inu-4-645mk070111.jpg",
              price:450,
              tag:"black",
              status:"available"
       },{
              id:4,
              name:"white",
              src:"https://i.pinimg.com/originals/65/27/bc/6527bc2f818be04dbae3778b7cdec7ee.jpg",
              price:500,
              tag:"white",
              status:"available"
       }];
       render(){
              return(
                     <div>
                            <ToolBox></ToolBox>  
                            <div className="products" >   
                                   <div className="columns is-multiline is-desktop">
                                          {
                                                 this.products.map(p=>(
                                                        <div className="column is-3" key={p.id}>
                                                               <Product product={p}></Product>
                                                        </div>
                                                 ))
                                          }
                                          
                                   </div>
                            </div>
                     </div>

              )
       }
}
export default Products;
import React from "react";
import ReactDOM from "react-dom";
import Headers from "Component/Headers";
import Products from "Component/Products";
class App extends React.Component{
       render(){
              return (
                     <div className="main">
                            <Headers nickname="Azhu"/>
                            <Products />
                     </div>
              )
       }
}
export default App;
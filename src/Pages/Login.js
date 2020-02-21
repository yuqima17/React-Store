import React from "react";
class Login extends React.Component{
       emailRef=React.createRef();
       nameRef=React.createRef();
       state={
              name:"",
              email:""
       }
       handleClick=(event)=>{
              event.preventDefault();
              const formdata={
                     nama:this.nameRef.current.value,
                     email:this.emailRef.current.value
              }
              console.log(formdata);
              this.props.history.push('/');
       }

       handleChange=(event)=>{
              console.log(event.target.value);
              this.setState({
                     [event.target.name]:event.target.value
              })
       }

       render(){
              
              return (
                     <div className="login-wrapper">
                            <form className="box login-box" onSubmit={(event)=>this.handleClick(event)}>
                                   <div className="field">
                                          <label className="label">Name</label>
                                          <div className="control">
                                                 <input className="input" type="text" name="name" placeholder="e.g Alex Smith" ref={this.nameRef} onChange={event=>this.handleChange(event)} value={this.state.name}></input>
                                          </div>
                                   </div>

                                   <div className="field">
                                          <label className="label">Email</label>
                                          <div className="control">
                                                 <input className="input" type="email" name="email" placeholder="e.g. alexsmith@gmail.com" ref={this.emailRef} onChange={event=>this.handleChange(event)}></input>
                                          </div>
                                   </div>

                                   <div className="control">
                                          <button className="button is-primary is-fullwidth">Submit</button>
                                   </div>
                            </form>

                     </div>
              )
       }
}
export default Login;
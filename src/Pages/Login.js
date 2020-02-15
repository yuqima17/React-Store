import React from "react";
class Login extends React.Component{
       render(){
              return (
                     <div class="login-wrapper">
                            <form class="box login-box">
                                   <div class="field">
                                          <label class="label">Name</label>
                                          <div class="control">
                                                 <input class="input" type="text" placeholder="e.g Alex Smith"></input>
                                          </div>
                                   </div>

                                   <div class="field">
                                          <label class="label">Email</label>
                                          <div class="control">
                                                 <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
                                          </div>
                                   </div>

                                   <div class="control">
                                          <button class="button is-primary is-fullwidth">Submit</button>
                                   </div>
                            </form>
                     </div>
              )
       }
}
export default Login;
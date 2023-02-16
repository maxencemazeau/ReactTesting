import React from 'react';
import TestCSS from "./test.module.css"
import ReactDOM from 'react-dom'

export default class Test extends React.Component{
    render(){
      return(
        <div className={TestCSS.loginForm}>

          <FormHeader title="Login" />
          <Form />
          <OtherMethods />
        </div>
      )
    }
  }
  
  const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = props => (
     <div>
       <FormInput description="Username" placeholder="Enter your username" type="text" />
       <FormInput description="Password" placeholder="Enter your password" type="password"/>
       <FormButton title="Log in"/>
     </div>
  );
  
  const FormButton = props => (
    <div id="button" className={TestCSS.row}>
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  
  const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
  );
  
  const Facebook = props => (
    <a href="#" id="facebookIcon"></a>
  );
  
  const Twitter = props => (
    <a href="#" id="twitterIcon"></a>
  );
  
  const Google = props => (
    <a href="#" id="googleIcon"></a>
  );


  /*<form method="post" onSubmit={this.handleSubmit}>
                    <input type="text" name="nomEvent" 
                    value={nomEvent} 
                    onChange={this.handleChange} placeholder='NomEvent'></input>
                    <input type='text' name='description' 
                    value={description} 
                    onChange={this.handleChange} placeholder='description'></input>
                    <input type='text' name='tarif' 
                    value={tarif} 
                    onChange={this.handleChange} placeholder='tarif'></input>
                    <input type='text' name='platform' 
                    value={platform} 
                    onChange={this.handleChange} placeholder='platform'></input>
                    <input type='text' name='lieu' 
                    value={lieu} 
                    onChange={this.handleChange} placeholder='lieu'></input>
                     <input type='text' name='lienZoom' 
                    value={lienZoom} 
                    onChange={this.handleChange} placeholder='lienZoom'></input> */
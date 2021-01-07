import React from 'react'
import logo from './burger-logo.png';
import './App.css';
import Login from './components/Login'
import Order from './components/Order'
import Summary from './components/Summary'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogin: false,
      protein: '',
      howMany: '',
      paties: '',
      lettuce: '',
      tomato: '',
      cheese: '',
      else: '',
      orderCompleted: false
    };
    this.userCheck = this.userCheck.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setInput = this.setInput.bind(this)
    this.completeOrder = this.completeOrder.bind(this)
  }
  userCheck(){
    if(this.state.username === 'abc' && this.state.password === '123'){
    this.setState({
      isLogin: true
    })
    } else {
      alert('username and password dont match')
    }
  }
 setUsername (userName){
this.setState({
  username: userName
})
 }
 setPassword (userPassword){
 this.setState({
   password: userPassword
 })
 }
 setInput(property, value){
  this.setState({
    [property] : value
  })
}

 completeOrder(){
   this.setState({
     orderCompleted: true
   })
 }

  render(){
    
    let currentComponent = <div></div>
    if(this.state.orderCompleted){
      currentComponent = <Summary order={this.state}/>
    } else if (this.state.isLogin){
      currentComponent = <Order inputFunction={this.setInput} setComplete={this.completeOrder} />
    }else{
      currentComponent = <Login username={this.setUsername} password={this.setPassword} checkUser={this.userCheck}/>
    }
    
  return (
    <div className="App">
        <img src={logo} id="logo" alt="logo" />
        <hr/>
        {currentComponent}
       
    </div>
  );
}
}
export default App;

function Login (props){
  function handleUsername(e){
     props.username(e.target.value)
  }
  function handlePassword(e){
     props.password(e.target.value)
  }
  return (
    <form >
    <h1>Welcome to Delicious Burgers</h1>
     <label htmlFor="username"> username</label> &nbsp;
     <input onChange={handleUsername} type="text" id="username" name="username" autoComplete='false' required /> 
       <br/>
     <label htmlFor="password">password</label> &nbsp;
     <input onChange={handlePassword} type="text" id="password" name="password" required minlength="4" maxlength="8"/>
       <br/>
      <input type="button" value="login" onClick={props.checkUser}/>
     </form>
  )
}

export default Login;
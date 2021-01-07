function Order (props){
  function handleInput(e){
       props.inputFunction(e.target.name, e.target.value)
  }
  return (
     <form>
     <h1>Create a burger!</h1>      
      
        <label htmlFor="protein">what types of protein would you like?</label><br/>
        <input type="text" id="protein" name="protein" pattern="{A-z}" placeholder="no number please" onChange={handleInput}/>
        <hr/>
  
        <label>how many</label><br/>
        <input type="number" name= 'howMany 'id="howMany" required min="1" max="4" onChange={handleInput}/>
        <hr/>
  
      <label htmlFor="paties">how cooked you want</label><br/>
      <span>rare</span>
      <input type="range" min="1" max="5" id="paties" name='paties' defaultvalue="4" onChange={handleInput}/>
      <span>well-done</span>
  
      <label htmlFor="lettuce">what topics you want</label><br/>
      <input type="checkbox" name='lettuce' id="lettuce" defaultvalue="lettuce" onChange={handleInput}/>
      <label htmlFor="lettuce">lettuce</label>
      <input type="checkbox" name='tomato' id="tomato" defaultvalue="tomato" onChange={handleInput}/>
      <label htmlFor="tomato">tomato</label>
      <hr/>
      <label>do you want chese</label><br/>
      <input type="radio" name='cheese 'id="yes" defaultvalue="yes" onChange={handleInput}/>
      <label htmlFor="yes">yes</label>
      <input type="radio" id="no" defaultvalue="no" name="cheese" onChange={handleInput}/>
      <label htmlFor="no">no</label>
      <hr/>
      <label htmlFor="else">anythingelse</label><br/>
      <textarea name="else" id="else" maxlength="15" onChange={handleInput}></textarea>
<input type="submit" id="submit" defaultvalue="submit" onClick={props.setComplete}/>
</form>
    )
}

export default Order
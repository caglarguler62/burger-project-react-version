function Summary (props){
  return (
    <div>
      <h1>Thanks for submission</h1>
      <p>The proptein{props.order.protein}</p>
      <p>number of pattis{props.order.howMany}</p>
      <p>patties{props.order.paties}</p>
    </div>
  )


}

export default Summary;
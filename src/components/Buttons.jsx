function Buttons(props) {
  return (
    <div>
      <button className="Button leftButton" onClick={props.decrement}>&#12298;</button>
      <button className="Button rightButton" onClick={props.increment}>&#12299;</button>
    </div>
  )
}

export default Buttons



const Button = ({show,setShow}) => {
  

  const handleClick=()=>{
    setShow(!show)
  }
  return (
    <div>
      <button onClick={handleClick} className="btn btn-warning">
        {show?"Hide Product Bar":"Show Product Bar"}
      </button>
    </div>
  )
}

export default Button
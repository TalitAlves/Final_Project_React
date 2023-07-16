import '../styles/Button.css'


function Button({onClick, message, style}) {
  return (
    <button className='btn-primary' onClick={onClick} style={style}>
        {message}
    </button>
  )
}

export default Button

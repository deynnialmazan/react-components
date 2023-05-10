
function Button(props) {
  return (
    <button className={props.isPrimary ? 'primary' : 'secondary'}>
        {props.isPrimary ? 'See courses' : 'Contact us'}
    </button>
  )
}

export default Button
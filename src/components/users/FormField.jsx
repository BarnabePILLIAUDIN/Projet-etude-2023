const FormField = (props) => {
  const {label,name,placeholder,type} = props.user

  return (
    <div>
      <label>{label}</label>
      <input type={type} id={name} placeholder={placeholder} name={name} />
    </div>
  )
}

export default FormField
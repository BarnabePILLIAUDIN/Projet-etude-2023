const FormField = (props) => {
  const {label,name,placeholder,type} = props.user

  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-l font-bold mb-2 text-center">{label}</label>
      <input type={type} id={name} placeholder={placeholder} name={name} className="text-center border border-slate-500 rounded-sm"/>
    </div>
  )
}

export default FormField
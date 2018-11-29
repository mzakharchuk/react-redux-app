import React from 'react'

const SelectInput = ({name,label,value,onChange,defaultOption,options,error}) =>{
	let wrapperClass = 'form-group'
	if(error && error.length > 0)
		wrapperClass += ' '+ 'has-error'

	return(
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<select
					name={name}
					value={value}
					onChange={onChange}
					className="form-control">
					<option>{defaultOption}</option>
					{options.map(o =>{
						return <option key={o.value} value={o.value}>{o.text}</option>
					})}   
				</select> 

				{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	)
}
export default SelectInput 
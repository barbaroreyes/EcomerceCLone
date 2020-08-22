import React  from 'react';

const FormInput = ({handleChange,label,children,...otherProps}) => (
    <div className ='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<label className ={`${otherProps.value.length ?  'shrink' :''} form-input-label`} />)
            : null
        }
{children}
    </div>
)
export default FormInput
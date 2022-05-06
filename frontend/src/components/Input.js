import React from 'react';

function Input({ label, id, type, setValue, ...props }) {

    return (
        <div>
            <p>
                <label htmlFor='email'>{label}</label>
                <br></br>
                <input
                    type={type} 
                    name={id}
                    id={id}
                    onChange={({ target }) => setValue(target.value)}
                    {...props} // passa todas as propriedades que estão no props
                />
            </p>
        </div>
    );
}

export default Input;
import {ChangeEvent, FC} from 'react'
import './Input.css'

type InputType = {
    type: string,
    className: string
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string
}

export const Input: FC<InputType> = ({type,className, value, onChange, ...rest}) => {
    return <input type={type} className={className} value={value} onChange={onChange} {...rest}/>
}
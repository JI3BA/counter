import { FC, ReactNode, MouseEvent } from 'react'
import './Button.css'

type ButtonType = {
    className: string,
    children: ReactNode,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
}

export const Button: FC<ButtonType> = ({className, children, disabled, ...rest}) => {
    return (
        <button className={className} disabled={disabled} {...rest}>{children}</button>
    )
}
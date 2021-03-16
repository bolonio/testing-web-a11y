import { FunctionComponent, HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button: FunctionComponent<ButtonProps> = ({ text, ...props }) => (
  <button {...props}>{text}</button>
)

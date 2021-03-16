import { FunctionComponent, HTMLAttributes } from "react"

interface FakeButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  text: string
}

export const FakeButton: FunctionComponent<FakeButtonProps> = ({
  text,
  ...props
}) => (
  <a role="button" {...props}>
    {text}
  </a>
)

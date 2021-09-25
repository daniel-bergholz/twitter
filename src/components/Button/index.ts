import styled from 'styled-components'

type TVariants = 'black' | 'white' | 'blue'

interface IProps {
  width?: string
  height?: string
  isDisabled?: boolean
  variant?: TVariants
}

const Button = styled.button<IProps>`
  background-color: ${(props) =>
    props.variant === 'blue' || !props.variant
      ? props.theme.color.blue
      : props.variant};
  border: ${(props) =>
    props.variant === 'black'
      ? '1px solid ' + props.theme.color.borderColor
      : 'none'};
  border-radius: 53px;
  cursor: pointer;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${(props) => (props.variant === 'white' ? '#000' : '#fff')};
  width: ${(props) => props.width || '105px'};
  height: ${(props) => props.height || '39px'};
  opacity: ${(props) => (props.isDisabled ? 0.3 : 1)};
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'all')};
`

export default Button

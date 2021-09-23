import styled from 'styled-components'

interface IProps {
  isOnFocus: boolean
}

export const InputContainer = styled.div<IProps>`
  width: 348px;
  padding: 12px;
  background: #202327;
  border: 1px solid
    ${(props) => (props.isOnFocus ? props.theme.color.blue : '#253341')};
  box-sizing: border-box;
  border-radius: 40px;
  display: flex;
  align-items: center;

  svg {
    stroke: ${(props) =>
      props.isOnFocus ? props.theme.color.blue : '#8899A6'};
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: #202327;
  color: #fff;
  font-size: 15px;
  line-height: 18px;
  margin-left: 12px;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
`

import styled from 'styled-components'

interface IProps {
  isSelected?: boolean
}

export const Button = styled.button<IProps>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 53px;
  padding: 11px;
  background-color: ${(props) =>
    props.isSelected ? props.theme.color.blue + '20' : 'none'};
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  margin-left: 20px;
`

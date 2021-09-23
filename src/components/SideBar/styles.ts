import styled from 'styled-components'

interface IProps {
  isSelected?: boolean
}

export const Container = styled.div`
  margin-top: 27px;
  display: flex;
  flex-direction: column;

  a {
    width: max-content;
  }
`

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
  width: max-content;
  background-color: ${(props) =>
    props.isSelected ? props.theme.color.blue + '20' : 'none'};
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  margin-left: 20px;
`

export const IconContainer = styled.div`
  padding-left: 11px;
`

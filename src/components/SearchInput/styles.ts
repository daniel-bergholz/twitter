import styled from 'styled-components'

interface IProps {
  isOnFocus: boolean
}

export const InputContainer = styled.div<IProps>`
  margin-top: 12px;
  width: 348px;
  padding: 12px;
  background: #202327;
  border: 1px solid
    ${(props) => (props.isOnFocus ? props.theme.color.blue : '#253341')};
  box-sizing: border-box;
  border-radius: 40px;
  display: flex;
  align-items: center;
  position: relative;
  height: max-content;

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

export const DropDown = styled.div`
  position: absolute;
  background-color: #000;
  left: 0;
  top: 54px;
  width: 306px;
  border: 1px solid #2f3336;
  border-radius: 8px;
  padding: 20px;
  max-height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff10;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #202327;
    border-radius: 10px;
  }
`

export const UserNames = styled.div`
  margin-left: 10px;
  font-size: 15px;
  line-height: 18px;

  h1 {
    font-weight: 700;
  }

  h2 {
    color: ${(props) => props.theme.color.gray};
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    height: 49px;
    width: 49px;
  }

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`

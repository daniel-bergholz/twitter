import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 348px;
  padding: 12px;
  background: #202327;
  border: 1px solid #253341;
  box-sizing: border-box;
  border-radius: 40px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: #202327;
  color: #fff;
  font-size: 15px;
  line-height: 18px;
  margin-left: 12px;

  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
`

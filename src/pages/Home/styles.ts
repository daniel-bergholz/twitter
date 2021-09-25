import styled from 'styled-components'

export const UserName = styled.h1`
  padding-top: 25px;
  padding-bottom: 25px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
`

export const TweetContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`

export const TweetInput = styled.input`
  display: block;
  height: max-content;
  outline: none;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 19px;
  line-height: 23px;
  margin-left: 12px;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
`

export const TweetButton = styled.div`
  margin-top: 18px;
  margin-bottom: 10px;
  text-align: right;
`

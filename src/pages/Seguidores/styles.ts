import styled from 'styled-components'

interface IProps {
  isActive: boolean
}

export const FixedContentContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 21px;

  svg {
    cursor: pointer;
  }
`

export const FixedContentTexts = styled.div`
  margin-left: 23px;

  h1 {
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    color: #d9d9d9;
  }
`

export const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const FollowTitle = styled.h1<IProps>`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #d9d9d9;
  padding-top: 23px;
  padding-bottom: 23px;
  border-bottom: 3px solid
    ${(props) => (props.isActive ? props.theme.color.blue : 'transparent')};
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#D9D9D9' : '#6D777C')};
`

export const UserContainer = styled.div`
  margin-top: 22px;
  margin-bottom: 22px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;

  img {
    border-radius: 50%;
    width: 49px;
    height: 49px;
    margin-right: 10px;
  }
`

export const UserText = styled.div`
  font-size: 15px;
  line-height: 18px;

  h1 {
    font-weight: 700;
  }

  h2 {
    color: ${(props) => props.theme.color.gray};
  }

  p {
    margin-top: 8px;
  }
`

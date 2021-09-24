import styled from 'styled-components'

export const Container = styled.div`
  width: 598px;
  height: 100vh;
  border-left: 1px solid ${(props) => props.theme.color.borderColor};
  border-right: 1px solid ${(props) => props.theme.color.borderColor};

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`

export const FixedContent = styled.div`
  position: sticky;
  top: 0;
  background-color: #000;
  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};
  padding-left: 20px;
  padding-right: 20px;
`

export const ScrollableContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

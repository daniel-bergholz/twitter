import PageWrapper from '../../components/PageWrapper'
import Button from '../../components/Button'
import { useGlobalState } from '../../context/GlobalContext'
import { TweetButton, TweetContainer, TweetInput, UserName } from './styles'

function Home() {
  const { auth } = useGlobalState()

  return (
    <PageWrapper
      fixedContent={
        <>
          <UserName>{auth?.user.name}</UserName>
          <TweetContainer>
            <img
              src={`https://robohash.org/${auth?.user.username}`}
              alt={auth?.user.name}
            />
            <TweetInput placeholder="O que está acontecendo?" />
          </TweetContainer>
          <TweetButton>
            <Button>Tweet</Button>
          </TweetButton>
        </>
      }
    >
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
      <h1>Meu primeiro Tweet!</h1>
      <h1>Meu segundo Tweet!</h1>
      <h1>Meu terceiro Tweet!</h1>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }} />
    </PageWrapper>
  )
}

export default Home

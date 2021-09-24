import Main from '../../components/Main'
import SearchInput from '../../components/SearchInput'
import SideBar from '../../components/SideBar'
import { Container } from './styles'

function Home() {
  return (
    <Container>
      <SideBar />
      <Main
        fixedContent={
          <h1 style={{ paddingTop: '15px', paddingBottom: '15px' }}>
            Daniel Berg
          </h1>
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
      </Main>
      <SearchInput />
    </Container>
  )
}

export default Home

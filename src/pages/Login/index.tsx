import {
  BackgroundContainer,
  Button,
  Container,
  RightContainer,
} from './styles'
import Background from '../../assets/images/login-bg.png'
import { FaTwitter } from 'react-icons/fa'

const Login = () => {
  return (
    <Container>
      <BackgroundContainer>
        <img src={Background} alt="Fundo do Twitter" />
      </BackgroundContainer>
      <RightContainer>
        <FaTwitter color="#d9d9d9" size={40} />
        <h1>Acontecendo agora</h1>
        <h2>Inscreva-se no Twitter hoje mesmo.</h2>
        <Button>Inscreva-se com email</Button>
        <p>
          Já tem uma conta? <span>Entre</span>
        </p>
      </RightContainer>
    </Container>
  )
}

export default Login

import { BiArrowBack } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import PageWrapper from '../../components/PageWrapper'
import {
  Bio,
  CreatedAt,
  CreatedAtContainer,
  FixedContentContainer,
  FixedContentTexts,
  Follow,
  FollowContainer,
  ImageContainer,
  Name,
  TextsContainer,
  Username,
} from './styles'

function Perfil() {
  return (
    <PageWrapper
      fixedContent={
        <FixedContentContainer>
          <Link to="/">
            <BiArrowBack size="15px" />
          </Link>
          <FixedContentTexts>
            <h1>Daniel Berg</h1>
            <h2>11 Tweets</h2>
          </FixedContentTexts>
        </FixedContentContainer>
      }
    >
      <ImageContainer>
        <img src={`https://robohash.org/${2}`} alt={'2'} />
        <Button>Editar perfil</Button>
      </ImageContainer>

      <TextsContainer>
        <Name>Daniel Berg</Name>
        <Username>@daniel_berg</Username>
        <Bio>
          CTO | Maratonas Academy Desenvolvedor Fullstack Vegano UnB -
          Engenharia de Redes
        </Bio>

        <CreatedAtContainer>
          <FaRegCalendarAlt color="#6d777c" size="18px" />
          <CreatedAt>Ingressou em outubro de 2013</CreatedAt>
        </CreatedAtContainer>

        <FollowContainer>
          <Follow>
            500 <span>Seguindo</span>{' '}
          </Follow>
          <Follow>
            3 <span>Seguidores</span>{' '}
          </Follow>
        </FollowContainer>
      </TextsContainer>
    </PageWrapper>
  )
}

export default Perfil

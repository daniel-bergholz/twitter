import PageWrapper from '../../components/PageWrapper'
import Button from '../../components/Button'
import { IAuth, useGlobalState } from '../../context/GlobalContext'
import { TweetButton, TweetContainer, TweetInput, UserName } from './styles'
import Tweet from '../../components/Tweet'

function Home() {
  const {
    auth: { user },
  } = useGlobalState() as { auth: IAuth }

  return (
    <PageWrapper
      fixedContent={
        <>
          <UserName>{user.name}</UserName>
          <TweetContainer>
            <img
              src={`https://robohash.org/${user.username}`}
              alt={user.name}
            />
            <TweetInput placeholder="O que está acontecendo?" />
          </TweetContainer>
          <TweetButton>
            <Button>Tweet</Button>
          </TweetButton>
        </>
      }
    >
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt
        incidunt nobis tempore necessitatibus, laborum iure voluptatum aliquam
        delectus autem fugit, perspiciatis, voluptas sed cum exercitationem
        neque rerum aliquid velit.
      </Tweet>
    </PageWrapper>
  )
}

export default Home

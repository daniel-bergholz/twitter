import {
  DropDown,
  Input,
  InputContainer,
  UserContainer,
  UserNames,
} from './styles'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'

interface IUsers {
  name: string
  username: string
}

const mockUsers = [
  { name: 'daniel berg', username: 'berg_daniel' },
  { name: 'Bruno Fraga', username: 'bruno_fraga' },
  { name: 'Luã Álvaro', username: 'lua_alvaro' },
]

const SearchInput = () => {
  const [isOnFocus, setIsOnFocus] = useState(false)
  const [users, setUsers] = useState<IUsers[]>(mockUsers)

  return (
    <InputContainer isOnFocus={isOnFocus}>
      <FiSearch size="17px" />
      <Input
        placeholder="Buscar no Twitter"
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
      />
      {users && (
        <DropDown>
          {users?.map((user, index) => (
            <UserContainer key={index}>
              <img
                src={`https://robohash.org/${user.username}`}
                alt={user.name}
              />
              <UserNames>
                <h1>{user.name}</h1>
                <h2>@{user.username}</h2>
              </UserNames>
            </UserContainer>
          ))}
        </DropDown>
      )}
    </InputContainer>
  )
}

export default SearchInput

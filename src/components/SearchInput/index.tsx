import { DropDown, Input, InputContainer } from './styles'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'

interface IUsers {
  name: string
  username: string
}

const mockUsers = [
  { name: 'daniel berg', username: 'berg_daniel' },
  { name: 'Bruno Fraga', username: 'bruno' },
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
            <h1 key={index}>{user.name}</h1>
          ))}
        </DropDown>
      )}
    </InputContainer>
  )
}

export default SearchInput

import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { toast } from 'react-toastify'
import { useGlobalState } from '../../context/GlobalContext'
import { apiWithAuth } from '../../services/api'
import Button from '../Button'
import Input from '../Input'
import Modal from '../Modal'
import {
  ModalBody,
  ModalHeader,
  ModalHeaderClose,
  ModalHeaderTitle,
} from './styles'

interface IResponse {
  id: string
  name: string
  bio: string | null
  username: string
  email: string
}

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  getProfile: () => void
}

const EditProfileModal: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  getProfile,
}) => {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { setName: setUserName } = useGlobalState()

  const isDisabled =
    (name === '' && bio === '' && password === '') ||
    (password.length > 0 && password.length < 8) ||
    loading

  const editUser = async () => {
    let requestBody = {}

    if (name !== '') {
      requestBody = { name }
    }

    if (bio !== '') {
      requestBody = { ...requestBody, bio }
    }

    if (password.length >= 8) {
      requestBody = { ...requestBody, password }
    }

    setLoading(true)

    try {
      const { data } = await apiWithAuth.put<IResponse>('/profile', requestBody)
      setUserName(data.name)
      handleCloseModal(true)
    } catch (error) {
      console.log({ error })
      toast.error(
        error?.response?.data?.message.join(', ') ||
          'Não foi possível atualizar o seu perfil'
      )
    }

    setLoading(false)
  }

  const handleCloseModal = (reloadPage = false) => {
    setBio('')
    setName('')
    setPassword('')
    setIsOpen(false)
    reloadPage && getProfile()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleCloseModal}>
      <ModalHeader>
        <ModalHeaderClose>
          <CgClose
            size="18px"
            color="#D9D9D9"
            onClick={() => handleCloseModal()}
          />
          <ModalHeaderTitle>Editar perfil</ModalHeaderTitle>
        </ModalHeaderClose>

        <Button
          variant="white"
          height="33px"
          onClick={editUser}
          isDisabled={isDisabled}
        >
          Salvar
        </Button>
      </ModalHeader>

      <ModalBody>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Input
          placeholder="Senha (mín. 8 caracteres)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </ModalBody>
    </Modal>
  )
}

export default EditProfileModal

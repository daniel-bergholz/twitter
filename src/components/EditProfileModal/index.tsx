import { CgClose } from 'react-icons/cg'
import Button from '../Button'
import Input from '../Input'
import Modal from '../Modal'
import {
  ModalBody,
  ModalHeader,
  ModalHeaderClose,
  ModalHeaderTitle,
} from './styles'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const EditProfileModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>
        <ModalHeaderClose>
          <CgClose
            size="18px"
            color="#D9D9D9"
            onClick={() => setIsOpen(false)}
          />
          <ModalHeaderTitle>Editar perfil</ModalHeaderTitle>
        </ModalHeaderClose>

        <Button variant="white" height="33px">
          Salvar
        </Button>
      </ModalHeader>

      <ModalBody>
        <Input placeholder="Nome" />

        <Input placeholder="Bio" />

        <Input placeholder="Senha" type="password" />
      </ModalBody>
    </Modal>
  )
}

export default EditProfileModal

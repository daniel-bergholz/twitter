import { Background, Center } from './styles'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onClose?: () => void
}

const Modal: React.FC<IProps> = ({ children, isOpen, setIsOpen, onClose }) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false)
      onClose && onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <Background onClick={handleClose}>
          <Center>{children}</Center>
        </Background>
      )}
    </>
  )
}

export default Modal

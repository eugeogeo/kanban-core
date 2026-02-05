import { Typography } from "@mui/material";
import Modal from "../../componentes/Modal";

type ModalCreateCardProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalCreateCard = (data: ModalCreateCardProps) => {
  const { isOpen, onClose } = data;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    // Lógica para criar o card
    onClose();
  };

  return (
    <Modal isOpen={isOpen} title="Criar Card" onClose={handleClose} onSubmit={handleSubmit}>
      <Typography>Criando card</Typography>
    </Modal>
  );
};

export default ModalCreateCard;

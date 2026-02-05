import { Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import type { Card } from "../../@types/data"; // Importe o tipo Card
import { ColumnBoard } from "../../@types/enum";
import Modal from "../../componentes/Modal";

type ModalCreateCardProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddCard: (card: Card) => void;
};

type Inputs = {
  title: string;
};

const ModalCreateCard = ({ isOpen, onClose, onAddCard }: ModalCreateCardProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (data: Inputs) => {
    const newCard: Card = {
      id: crypto.randomUUID(),
      title: data.title,
      column: ColumnBoard.PARA_DESENVOLVER,
    };

    onAddCard(newCard);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} title="Criar Card" onClose={handleClose} onSubmit={handleSubmit(onSubmit)}>
      <Stack component="form">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              label="Título do card"
              size="small"
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
              required
              {...field}
            />
          )}
        />
      </Stack>
    </Modal>
  );
};

export default ModalCreateCard;

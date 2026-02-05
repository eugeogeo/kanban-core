import { Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Modal from "../../componentes/Modal";

type ModalCreateCardProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Inputs = {
  title: string;
  // column: ColumnBoard;
};

const ModalCreateCard = (data: ModalCreateCardProps) => {
  const { isOpen, onClose } = data;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleClose = () => {
    onClose();
  };

  const onSubmit = () => {
    // Lógica para criar o card
    onClose();
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

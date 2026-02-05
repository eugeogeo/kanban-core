import { Close } from "@mui/icons-material";
import { Button, IconButton, Modal as ModalMui, Stack, Typography, useTheme } from "@mui/material";
import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  title: string;
  onClose: () => void;
  onSubmit?: () => void;
};

const Modal = ({ isOpen, children, title, onClose, onSubmit = undefined }: ModalProps) => {
  const theme = useTheme();

  const handleClose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <ModalMui
      open={isOpen}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="space-between"
        sx={{ bgcolor: "background.paper", boxShadow: 12, p: 2, minWidth: 200 }}
        maxHeight="450px"
        minHeight="200px"
        width="40vw"
      >
        <Stack sx={{ overflow: "hidden" }}>
          <Stack display="flex" direction="row" width="100%" justifyContent="space-between">
            <Stack display="flex" direction="row" alignItems="center" gap={1}>
              <Typography color={theme.palette.grey[700]} fontSize="18px" alignContent="center">
                {title}
              </Typography>
            </Stack>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Stack>

          <Stack sx={{ overflowY: "auto", pt: 2 }}>{children}</Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-between" pt={2}>
          <Button
            variant="outlined"
            size="small"
            onClick={onClose}
            id="button-cancel"
            sx={{ minWidth: "100px", paddingBlock: "4px" }}
          >
            Cancelar
          </Button>

          <Stack width="100%" direction="row" justifyContent="flex-end" gap={2}>
            <Button
              variant="contained"
              type="submit"
              onClick={onSubmit}
              id="button-save"
              size="small"
              sx={{ minWidth: "100px", paddingBlock: "4px" }}
            >
              Confirmar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </ModalMui>
  );
};

export default Modal;

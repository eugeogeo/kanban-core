import { Box, Stack, Typography, useTheme } from "@mui/material";
import type { Card as Cardtype } from "../../@types/data";

type CardProps = {
  data: Cardtype;
};

const CardBoard = ({ data }: CardProps) => {
  const theme = useTheme();

  const { title } = data;

  return (
    <Box sx={{ borderRadius: 2, border: `1.5px solid grey` }}>
      <Stack
        direction="row"
        alignContent="space-between"
        sx={{
          borderRadius: 2,
          borderLeft: 8,
          padding: 2,
          paddingInline: 2,
          bgcolor: "white",
          boxShadow: "0px 0px 10px -8px grey",
        }}
      >
        <Typography variant="body2" color={theme.palette.grey[700]} fontWeight={700} fontSize={16} component="span">
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardBoard;

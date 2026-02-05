import { Box, Typography } from "@mui/material";

type HeaderColumnProps = {
  title: string;
  count?: number;
  handleCollapse: () => void;
  isCollapsed: boolean;
  width?: number;
};

const HeaderColumn = ({ title, count = 0, handleCollapse, isCollapsed, width = 250 }: HeaderColumnProps) => {
  return (
    <Box
      onClick={() => handleCollapse()}
      sx={{
        cursor: "pointer",
        position: "relative",
        transform: isCollapsed ? "rotate(90deg)" : "rotate(0deg)",
        transformOrigin: "top left",
        transition: "all 0.5s ease",
        ml: isCollapsed ? 6 : 0,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          backgroundColor: "grey",
          paddingY: 1,
          paddingX: 2,
          borderRadius: 3,
          minWidth: width,
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} fontSize={16} component="span">
          {title}
        </Typography>

        <Box
          component="span"
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            alignSelf: "center",
            paddingX: "8px",
            paddingY: "2px",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {count}
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderColumn;

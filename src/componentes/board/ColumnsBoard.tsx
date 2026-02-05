import { Box, Skeleton, Stack } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import type { Card } from "../../@types/data";
import type { ColumnBoard } from "../../@types/enum";
import { getDescriptionColumnBoard } from "../../utils/enum";
import CardBoard from "./Card";
import HeaderColumn from "./HeaderColumn";

type ColumnsBoardProps = {
  raia: ColumnBoard;
  isCollapsed?: boolean;
  columnsLength: number;
  openColumnsCount: number;
  handleCollapse: () => void;
  cards: Card[];
  isLoading: boolean;
};
const ColumnsBoard = ({
  raia,
  columnsLength,
  handleCollapse,
  openColumnsCount,
  isCollapsed = false,
  cards,
  isLoading,
}: ColumnsBoardProps) => {
  const baseWidth = 200;
  const collapsedWidth = 50;

  // Ajusta largura da coluna dependendo do estado colapsado
  const width = isCollapsed
    ? collapsedWidth
    : `calc((100% - ${collapsedWidth * (columnsLength - openColumnsCount)}px) / ${openColumnsCount})`;

  return (
    <Box
      key={raia}
      display="flex"
      flexDirection="column"
      justifyItems="start"
      sx={{
        width,
        minWidth: isCollapsed ? collapsedWidth : baseWidth,
        maxWidth: isCollapsed ? baseWidth : "350px",
        minHeight: baseWidth,
      }}
    >
      <HeaderColumn
        title={getDescriptionColumnBoard(raia)}
        count={!isLoading ? cards.length : 0}
        handleCollapse={handleCollapse}
        isCollapsed={isCollapsed}
        width={baseWidth}
      />

      {isLoading && !isCollapsed && (
        <Skeleton variant="rounded" height={300} sx={{ marginBottom: 2, mt: 2, borderRadius: 2 }} />
      )}

      {!isLoading && (
        <Collapse in={!isCollapsed} easing={{ enter: "all 1s ease", exit: "all 1s ease" }} unmountOnExit sx={{ mt: 2 }}>
          <Stack spacing={2}>
            {cards.map((card) => (
              <CardBoard key={card.id} data={card} />
            ))}
          </Stack>
        </Collapse>
      )}
    </Box>
  );
};

export default ColumnsBoard;

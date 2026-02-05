import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import type { Card } from "../@types/data";
import { ColumnBoard } from "../@types/enum";
import ColumnsBoard from "./ColumnsBoard";

const Board = () => {
  const raias = [
    ColumnBoard.PARA_DESENVOLVER,
    ColumnBoard.DESENVOLVENDO,
    ColumnBoard.AGUARDANDO_TESTS,
    ColumnBoard.TESTANDO,
    ColumnBoard.CONCLUIDOS,
  ];

  const [collapsedColumns, setCollapsedColumns] = useState<Record<ColumnBoard, boolean>>(
    raias.reduce(
      (acc, raia) => {
        acc[raia] = false;
        return acc;
      },
      {} as Record<ColumnBoard, boolean>,
    ),
  );

  const [isLoading, _setIsLoading] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  const toggleCollapse = (columnName: ColumnBoard) => {
    setCollapsedColumns((prev) => ({
      ...prev,
      [columnName]: !prev[columnName],
    }));
  };

  const openColumnsCount = Object.values(collapsedColumns).filter((v) => !v).length || 1;

  // TODO: implementar get data
  const getData = useCallback(() => {
    setCards([
      { id: "1", title: "Card 1" },
      { id: "2", title: "Card 2" },
      { id: "3", title: "Card 3" },
    ]);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box pt={2} sx={{ px: 3, minWidth: "85vw", overflowAnchor: "none" }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="start"
        gap={2}
        sx={{ px: 2, overflowX: "none", overflowY: "auto", height: "calc(100vh - 145px)" }}
      >
        {raias.map((raia) => (
          <ColumnsBoard
            key={raia}
            raia={raia}
            cards={cards}
            columnsLength={raias.length}
            handleCollapse={() => toggleCollapse(raia)}
            isLoading={isLoading}
            openColumnsCount={openColumnsCount}
            isCollapsed={collapsedColumns[raia]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Board;

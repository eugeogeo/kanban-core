import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import type { Card } from "../@types/data";
import { ColumnBoard } from "../@types/enum";
import ColumnsBoard from "../componentes/board/ColumnsBoard";
import ModalCreateCard from "./components/ModalCreateCard";

const STORAGE_KEY = "KANBAN_CARDS_CACHE";

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
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleCollapse = (columnName: ColumnBoard) => {
    setCollapsedColumns((prev) => ({
      ...prev,
      [columnName]: !prev[columnName],
    }));
  };

  const openColumnsCount = Object.values(collapsedColumns).filter((v) => !v).length || 1;

  const getData = useCallback(() => {
    const cachedData = localStorage.getItem(STORAGE_KEY);

    if (cachedData) {
      try {
        setCards(JSON.parse(cachedData));
      } catch (e) {
        console.error("Erro ao ler cache", e);
        setCards([]);
      }
    }
  }, []);

  const handleAddCard = (newCard: Card) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards, newCard];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const getCardByColumn = (column: ColumnBoard) => {
    return cards.filter((card) => card.column === column);
  };

  return (
    <>
      <Box pt={2} sx={{ px: 3, minWidth: "85vw", overflowAnchor: "none" }}>
        <Box mb={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" onClick={() => setIsOpenModal(true)}>
            <AddIcon />
          </Button>
        </Box>
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
              cards={getCardByColumn(raia)}
              columnsLength={raias.length}
              handleCollapse={() => toggleCollapse(raia)}
              isLoading={isLoading}
              openColumnsCount={openColumnsCount}
              isCollapsed={collapsedColumns[raia]}
            />
          ))}
        </Box>
      </Box>

      <ModalCreateCard isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} onAddCard={handleAddCard} />
    </>
  );
};

export default Board;

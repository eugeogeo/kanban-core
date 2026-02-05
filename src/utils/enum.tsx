import { ColumnBoard } from "../@types/enum";

export function getDescriptionColumnBoard(column: ColumnBoard): string {
  switch (column) {
    case ColumnBoard.PARA_DESENVOLVER:
      return "Para Desenvolver";
    case ColumnBoard.DESENVOLVENDO:
      return "Desenvolvendo";
    case ColumnBoard.AGUARDANDO_TESTS:
      return "Aguardando Teste";
    case ColumnBoard.TESTANDO:
      return "Testando";
    case ColumnBoard.CONCLUIDOS:
      return "Concluído";
    default:
      return "Desconhecido";
  }
}

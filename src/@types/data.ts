import type { ColumnBoard } from "./enum";

export type Card = {
  id: string;
  title: string;
  column: ColumnBoard;
};

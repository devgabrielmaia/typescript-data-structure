import { Stack } from "../../data-structures/stack/stack";
import { UndoHistoric } from "./undo-historic.entity";

export class EditorControl extends Stack<string> {
  private undoHistoric: UndoHistoric;

  constructor() {
    super();
    this.undoHistoric = new UndoHistoric();
  }

  undo(): void {
    const item = super.pop();
    item && this.undoHistoric.push(item)
  }

  redo(): void {
    const item = this.undoHistoric.pop();
    item && super.push(item)
  }

  change(item: string): void {
    super.push(item)
  }
}
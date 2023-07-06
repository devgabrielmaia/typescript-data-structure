import { Stack } from "./stack";

class UndoHistoric extends Stack<string> { }

class EditorControl extends Stack<string> {
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

// client code
const editorControl = new EditorControl();
editorControl.change('Hello');
editorControl.change('World');
editorControl.change('Javascript');
editorControl.change('Stack Example');
editorControl.undo()
editorControl.undo()
editorControl.redo()
console.log(editorControl.toString());

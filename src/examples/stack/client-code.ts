import { EditorControl } from "./editor-control.entity";

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

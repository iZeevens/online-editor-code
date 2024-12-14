import CodeEditor from "../components/CodeEditor/CodeEditor";
import Description from "../components/Description/Description";

function EditorPage() {

  return (
    <div className="grid grid-cols-2 gap-4">
      <Description />
      <CodeEditor />
    </div>
  )
}

export default EditorPage;

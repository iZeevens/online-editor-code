import CodeEditor from "../components/CodeEditor/CodeEditor";
import Description from "../components/Description/Description";
import { exampleData } from "../data/exampleData";


function EditorPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Description
        title="Two Sum"
        description="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice."
        example={exampleData}
      />
      <CodeEditor />
    </div>
  );
}

export default EditorPage;

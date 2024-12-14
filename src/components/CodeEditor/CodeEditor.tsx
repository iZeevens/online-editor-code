import { useState } from "react";
import { Button } from "@mui/material";
import SwitchLang from "./SwitchLang";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { go } from "@codemirror/lang-go";
import { basicSetup } from "codemirror";

function CodeEditor() {
  const [language, setLanguage] = useState("Python");

  const handleLanguageChange = () => {
    switch (language) {
      case "Python": {
        return python();
      }
      case "Go": {
        return go();
      }
      default: {
        return python();
      }
    }
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-md overflow-hidden">
      <div>
        <SwitchLang language="" handleLanguageChange={setLanguage} />
        <Button>Run</Button>
      </div>
      <CodeMirror height="90vh" extensions={[basicSetup, handleLanguageChange()]} />
    </div>
  );
}

export default CodeEditor;

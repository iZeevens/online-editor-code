import { useState } from "react";
import { Button, Paper } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { go } from "@codemirror/lang-go";
import { basicSetup } from "codemirror";
import SwitchLang from "./SwitchLang";
import CodeResult from "./CodeResult";

function CodeEditor() {
  const [language, setLanguage] = useState("Python");

  const languageChange = () => {
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
    <div className="grid gap-4 grid-rows-[50%_50%] h-full">
      <Paper className="overflow-auto">
        <div className="flex justify-between">
          <SwitchLang language={language} handleLanguageChange={setLanguage} />
          <Button variant="outlined">Run</Button>
        </div>
        <CodeMirror
          extensions={[basicSetup, languageChange()]}
          className="h-full"
        />
      </Paper>
      <Paper className="overflow-auto">
        <CodeResult />
      </Paper>
    </div>
  );
}

export default CodeEditor;

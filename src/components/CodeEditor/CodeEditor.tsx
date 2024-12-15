import { useState } from "react";
import { Button, Paper } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { go } from "@codemirror/lang-go";
import { basicSetup } from "codemirror";
import CodeResult from "./CodeResult";
import SwitchLang from "./SwitchLang";

function CodeEditor() {
  const [language, setLanguage] = useState("Python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

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

  const handleRunCode = async () => {
    setLoading(true);

    fetch("/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setOutput(data.output);
          setError("");
        } else {
          setError(data.error);
          setOutput("");
        }
      })
      .catch(() => {
        setError("Failed to execute code");
        setOutput("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="grid gap-4 grid-rows-[1fr_1fr] ">
      <Paper className="overflow-auto" elevation={5}>
        <div className="flex justify-between">
          <SwitchLang language={language} handleLanguageChange={setLanguage} />
          <Button onClick={handleRunCode} variant="outlined">
            {loading ? "Running..." : "Run"}
          </Button>
        </div>
        <CodeMirror
          value={code}
          extensions={[basicSetup, languageChange()]}
          onChange={(value) => setCode(value)}
          className="h-full"
        />
      </Paper>
      <Paper className="overflow-auto p-6" elevation={5}>
        <CodeResult output={output || ''} error={error || ''} loading={loading} />
      </Paper>
    </div>
  );
}

export default CodeEditor;

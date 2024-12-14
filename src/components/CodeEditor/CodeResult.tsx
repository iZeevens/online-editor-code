import { Box, Typography, Alert, LinearProgress } from "@mui/material";
import { ICodeResultProps } from "./types/codeEditorTypes";

function CodeResult({ output, error, loading }: ICodeResultProps) {
  return (
    <Box>
      <Typography variant="h6" className="text-blue-600">
        Result:
      </Typography>
      {loading && <LinearProgress />}

      {output && !error ? (
        <Box
          mt={2}
          p={2}
          className="bg-gray-100 rounded-md border border-gray-300 overflow-x-auto"
        >
          <Typography variant="h6" className="text-blue-600">
            Output:
          </Typography>
          <pre className="whitespace-pre-wrap break-words">{output}</pre>
        </Box>
      ) : null}

      {error ? (
        <Box
          mt={2}
          p={2}
          className="bg-red-100 rounded-md border border-red-300"
        >
          <Typography variant="h6" className="text-red-600">
            Error:
          </Typography>
          <Alert severity="error" className="bg-transparent text-inherit">
            {error}
          </Alert>
        </Box>
      ) : null}
    </Box>
  );
}

export default CodeResult;

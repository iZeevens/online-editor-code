import { Typography, Box, Alert, LinearProgress } from "@mui/material";

function CodeResult({
  output,
  error,
  loading,
}: {
  output?: string;
  error?: string;
  loading: boolean;
}) {
  return (
    <Box>
      {loading && <LinearProgress />}
      {output && !error ? (
        <Box
          mt={2}
          p={2}
          sx={{
            backgroundColor: "#f6f8fa",
            borderRadius: 1,
            border: "1px solid #ddd",
            overflowX: "auto",
          }}
        >
          <Typography variant="h6" color="primary">
            Output:
          </Typography>
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {output}
          </pre>
        </Box>
      ) : null}

      {error ? (
        <Box
          mt={2}
          p={2}
          sx={{
            backgroundColor: "#fdecea",
            borderRadius: 1,
            border: "1px solid #f5c6cb",
          }}
        >
          <Typography variant="h6" color="error">
            Error:
          </Typography>
          <Alert
            severity="error"
            sx={{ backgroundColor: "transparent", color: "inherit" }}
          >
            {error}
          </Alert>
        </Box>
      ) : null}
    </Box>
  );
}

export default CodeResult;

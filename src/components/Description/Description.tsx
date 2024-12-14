import { Box, Typography, Paper } from "@mui/material";
import { IDecription } from "./types/descriptionTypes";

function Description({ title, description, example }: IDecription) {
  return (
    <Paper className="p-6">
      <Box mb={6}>
        <Typography
          variant="h4"
          className="text-blue-600 text-2xl font-semibold"
        >
          {title}
        </Typography>
      </Box>
      <Box mb={6}>
        <Typography variant="body1" className="text-lg">
          {description}
        </Typography>
      </Box>
      {example.map((ex, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6" className="text-xl font-medium">
            Example {index + 1}:
          </Typography>
          <Typography variant="body1" className="mt-2">
            <strong>Input:</strong>{" "}
            <code className="text-green-500">{ex.input}</code>
            <br />
            <strong>Output:</strong>{" "}
            <code className="text-blue-500">{ex.output}</code>
            <br />
            <strong>Explanation:</strong> {ex.explanation}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

export default Description;

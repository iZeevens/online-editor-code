import { Container, Box, Typography, Paper } from "@mui/material";

function Description() {
  return (
    <Container maxWidth="lg" className="my-6">
      <Paper className="p-6 h-full m-0">
        <Box mb={3}>
          <Typography variant="h4" gutterBottom className="text-blue-600">
            Two Sum
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="body1" paragraph>
            Given an array of integers <code>nums</code> and an integer{" "}
            <code>target</code>, return indices of the two numbers such that
            they add up to <code>target</code>. You may assume that each input
            would have exactly one solution, and you may not use the same
            element twice. You can return the answer in any order.
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6">Example 1:</Typography>
          <Typography variant="body1">
            <strong>Input:</strong> <code>nums = [2,7,11,15], target = 9</code>
            <br />
            <strong>Output:</strong> <code>[0,1]</code>
            <br />
            <strong>Explanation:</strong> Because{" "}
            <code>nums[0] + nums[1] == 9</code>, we return <code>[0, 1]</code>.
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6">Example 2:</Typography>
          <Typography variant="body1">
            <strong>Input:</strong> <code>nums = [3,2,4], target = 6</code>
            <br />
            <strong>Output:</strong> <code>[1,2]</code>
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6">Example 3:</Typography>
          <Typography variant="body1">
            <strong>Input:</strong> <code>nums = [3,3], target = 6</code>
            <br />
            <strong>Output:</strong> <code>[0,1]</code>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Description;

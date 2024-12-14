import { FormControl, Select, MenuItem } from "@mui/material";

interface ISwitchLang {
  language: string;
  handleLanguageChange: (e: string) => void;
}

function SwitchLang({ language, handleLanguageChange }: ISwitchLang) {
  return (
    <FormControl className="w-44">
      <Select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
      >
        <MenuItem value="Python">Python</MenuItem>
        <MenuItem value="Go">Go</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SwitchLang;

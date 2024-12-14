import { FormControl, Select, MenuItem } from "@mui/material";
import { ISwitchLangProps } from "./types/codeEditorTypes";

function SwitchLang({ language, handleLanguageChange }: ISwitchLangProps) {
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

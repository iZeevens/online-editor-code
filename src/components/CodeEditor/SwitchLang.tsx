import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

interface ISwitchLang {
  language: string
  handleLanguageChange: (lang: string) => void
}

function SwitchLang({language, handleLanguageChange}: ISwitchLang) {


  return (
    <FormControl>
       <InputLabel>Select Language</InputLabel>
          <Select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            label="Select Language"
          >
            <MenuItem value="Python">Python</MenuItem>
            <MenuItem value="Go">Go</MenuItem>
          </Select>
    </FormControl>
  )
}

export default SwitchLang
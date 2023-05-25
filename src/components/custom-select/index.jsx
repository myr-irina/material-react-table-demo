import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomSelect({
  value,
  values,
  handleChange,
  inputLabel,
}) {
  return (
    <Box sx={{ minWidth: 120 }} mb={4}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='select-label'>{inputLabel}</InputLabel>
        <Select
          labelId='select-label'
          id='select'
          value={value}
          label={inputLabel}
          onChange={handleChange}
          sx={{ fontSize: 12 }}
        >
          {values.map(({ value, label }) => {
            return (
              <MenuItem sx={{ fontSize: 12 }} key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function Filters({ ordenacao, onOrdenacao }) {
  return (
    <FormControl
      sx={{
        minWidth: 200,
        mb: 3,
      }}
    >
      <InputLabel>Ordenar por</InputLabel>

      <Select
        label="Ordenar por"
        value={ordenacao}
        onChange={(event) => onOrdenacao(event.target.value)}
      >
        <MenuItem value="maiorNota">
          Maior nota
        </MenuItem>

        <MenuItem value="menorNota">
          Menor nota
        </MenuItem>

        <MenuItem value="nome">
          Nome
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default Filters;

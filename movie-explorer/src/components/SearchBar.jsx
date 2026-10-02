import { TextField, Button, Box } from "@mui/material";

function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        maxWidth: "700px",
      }}
    >
      <TextField
        label="Pesquisar filme"
        variant="outlined"
        fullWidth
      />

      <Button variant="contained">
        Pesquisar
      </Button>
    </Box>
  );
}

export default SearchBar;
import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const primary = purple[500]; // #f44336

export default function NotFound() {

    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // Esta función te lleva a la página anterior en el historial
    };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        La página que estás buscando no existe
      </Typography>
      <Button variant="contained" onClick={handleGoBack}>Volver</Button>
    </Box>
  );
}

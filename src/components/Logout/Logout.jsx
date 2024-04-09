import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#e16b24cc",
      }}
    >
      <Typography variant="h2" color={"white"}>
        Sesión finalizada
      </Typography>
      <Link to={"/Login"}>
        <Button variant="contained">Ir al login</Button>
      </Link>
    </Box>
  );
}

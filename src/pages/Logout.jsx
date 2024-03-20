import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { useUser} from "../context/userContext.jsx"

const primary = purple[500]; // #f44336

export default function Logout() {

  const {logoutUser} = useUser()


  useEffect(() => {
    logoutUser()
  })
  

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
      <Typography variant="h2" style={{ color: "white" }}>
        Sesión finalizada
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        Cerraste sesión
      </Typography>
      <Link to={"/Login"}>
        <Button variant="contained">
          Ir al login
        </Button>
      </Link>
    </Box>
  );
}

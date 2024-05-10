import { Button, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import {UserTable} from "../Tables/UserTable";
// import {useState } from "react";
import { Link } from "react-router-dom";
import Iconify from "../Iconify";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/API_SNR";
import config from "../../utils/config";

// eslint-disable-next-line react/prop-types
export default function ResponsiveLayoutUser() {
  
  const { isPending, error, data, isSuccess} = useQuery({
    queryKey: ["repoData"],
    queryFn: async () =>{
      const data = await api.get("/users", config)
      return data.data.data
    }
   
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Usuarios"}></RenderDrawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Listado de usuarios
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          <Link to={"../AddUser"}>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
             color={"primary"}
            >
              Agregar nuevo usuario
            </Button>
          </Link>
        </Stack>
        <UserTable data={data}></UserTable>
        {isPending && (<p className="w-full text-center">Cargando datos de usuarios...</p>)}
        {error && (<p className="w-full text-center">Hubo un error al cargar los usuarios.</p>)}
        </Container>
      </Box>
    </Box>
  );
}
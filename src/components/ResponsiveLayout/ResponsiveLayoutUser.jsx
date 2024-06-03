import {  CssBaseline, Toolbar, } from "@mui/material";
import { Box, Container, } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import {UserTable} from "../Tables/UserTable";
// import {useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/API_SNR";
import {config} from "../../utils/config.js"
import { useUser } from "../../context/userContext";

// eslint-disable-next-line react/prop-types
export default function ResponsiveLayoutUser() {
  
  const { tokenUser} = useUser();
  const configRequest = config(tokenUser)
  const { isPending, error, data} = useQuery({
    queryKey: ["repoData"],
    queryFn: async () =>{
      const data = await api.get("/users", configRequest)
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
        
       
        <UserTable data={data} titlePage="Listado de usuarios"></UserTable>
        {isPending && (<p className="w-full text-center">Cargando datos de usuarios...</p>)}
        {error && (<p className="w-full text-center">Hubo un error al cargar los usuarios.</p>)}
        </Container>
      </Box>
    </Box>
  );
}
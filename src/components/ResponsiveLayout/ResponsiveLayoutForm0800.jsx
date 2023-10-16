import { CssBaseline, Grid, Paper, TextField, TextareaAutosize, Toolbar, Typography, Button, Autocomplete, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";

export default function ResponsiveLayoutForm0800(titlePage) {

  const typesOfCall = [{
    label: 'Orientación'
  },
  {
    label: 'Información'
  },
  {
    label: 'Intervención'
  },
  {
    label: 'No contactado'
  },
  ]

  const checkboxesData = [
    { id: 1, label: 'Pasos a seguir para la solucion de problemas' },
    { id: 2, label: 'Aclaracion de errores, mitos y creencias' },
    { id: 3, label: 'Legal ' },
    { id: 4, label: 'Situacion (Violencia contra la mujer) ' },
    { id: 5, label: 'Salud ' },
    { id: 6, label: 'App (Contención emocional) ' },
  ];

  const ID = [
    { label: 'Cédula' },
    { label: 'Rif' },
    { label: 'Pasaporte' },
  ]

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Formulario 0800"}></RenderDrawer>
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
          <Grid container>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                }}
              >
                <Typography variant="h3" textAlign={'center'}>Nuevo registro 0800</Typography>
                <Box sx={{
                  marginTop: '20px',

                }}>
                  <form className="flex flex-wrap gap-1 ">
                    <Autocomplete disablePortal
                      id="typesOfCall"
                      options={typesOfCall}
                      clearOnEscape
                      sx={{ width: 300, marginLeft: '35%' }}
                      renderInput={(params) => <TextField {...params} label="Seleccione tipo de llamada" variant="standard"/>}
                    ></Autocomplete>

                    <Box sx={{ border: 'solid 1px black', marginTop: '20px', width: '80%', marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
                      <Typography variant="h4" textAlign={"center"}>Subtipos de orientación</Typography>
                      {checkboxesData.map(checkbox => (
                        <FormControlLabel
                          key={checkbox.id}
                          control={
                            <Checkbox
                            // Aquí puedes añadir lógica para manejar el cambio de estado del checkbox
                            // Por ejemplo, puedes llamar a una función cuando cambie el estado
                            // onChange={() => handleCheckboxChange(checkbox.id)}
                            />
                          }
                          label={checkbox.label}
                          sx={{ display: 'flex' }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ border: 'solid 1px black', marginTop: '20px', width: '80%', marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
                      <Typography variant="h4" textAlign={"center"}>Datos de la agraviada</Typography>
                      <FormGroup sx={{display:'flex', gap:'20px', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
                        <Autocomplete disablePortal
                        size="small"
                          id="ID"
                          options={ID}
                          sx={{ width: 305 }}
                          renderInput={(params) => <TextField {...params} label="Seleccione documento de identidad" />}
                        ></Autocomplete>
                        <TextField id="outlined-basic" label="Ingrese documento de identidad" variant="outlined" size="small" sx={{width: 260}}/>
                        <TextField id="standard-basic" label="Nombres" variant="outlined" size="small" sx={{width: 260}}/>
                        <TextField id="standard-basic" label="Apellidos" variant="outlined" size="small" sx={{width: 260}}/>
                        <TextField id="standard-basic" label="Telefono" variant="outlined" size="small" sx={{width: 260}}/>
                        <TextField id="standard-basic" label="Telefono 2" variant="outlined" size="small" sx={{width: 260}}/>
                        <TextField id="standard-basic" label="Telefono 2" variant="outlined" size="small" sx={{width: 260}}/>
                      </FormGroup>


                    </Box>
                    <Box>
                      {/* <Button variant="contained" type="submit">
                        Enviar
                      </Button> */}
                    </Box>
                  </form>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
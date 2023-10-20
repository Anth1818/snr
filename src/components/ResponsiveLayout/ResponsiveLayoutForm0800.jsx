import { CssBaseline, Grid, Paper, TextField, Toolbar, Typography, Button, Autocomplete, FormGroup, FormControlLabel, Checkbox, RadioGroup, FormControl, FormLabel, Radio } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { labels as STATES } from "../Statistics/Statistics0800ByStates"

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

  const gender = [
    {
      label: 'Hombre',
      name: 'male'
    },
    {
      label: 'Mujer',
      name: 'female'
    }
  ]

  const isPregnant = [
    {
      label: 'Si',
      name: 'yes'
    },
    {
      label: 'No',
      name: 'no'
    }
  ]

  const MUNICIPIO = [
    'MUNICIPIO 1',
    'MUNICIPIO 2',
    'MUNICIPIO 3',
  ]

  const PARROQUIA = [
    'PARROQUIA 1',
    'PARROQUIA 2',
    'PARROQUIA 3',
  ]
  const ETNIA = [
    'Blanca',
    'Negra',
    'Morena',
    'Indigena',
    'Afrodecendiente',
    'Otra'
  ]

  const ESTADOCIVIL = [
    'Soltera',
    'Casada',
    'Divorciada',
    'Separada',
    'Concubina',
    'Exconcubina',
    'Viuda'
  ]

  const NIVELDEINSTRUCCION = [
    'Analfabeta',
    'Primaria completa',
    'Secundaria completa',
    'Técnico medio',
    'TSU',
    'Universitaria',
    'Postgrado',
    'Primaria incompleta',
    'Secundaria incompleta',
    'Ninguna'
  ]

  const OCUPACION = [
    'Desempleada',
    'Ama de casa',
    'Estudiante',
    'Area de salud',
    'Area Administrativa',
    'Empresaria',
    'Comerciante',
    'Independiente',
    'Vendedora',
    'Artista',
    'Peluquera',
    'Costurera',
    'Jubilada',
    'Otros'
  ]

  const parentescoFamiliar = [
    'Hijo(a)',
    'Hermano(a)',
    'Primo(a)',
    'Abuelo(a)',
    'Tio(a)',
    'Otro'
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
                  <form className=" ">
                    <Autocomplete disablePortal
                      id="typesOfCall"
                      options={typesOfCall}
                      clearOnEscape
                      sx={{ width: 300, margin: '0 auto' }}
                      renderInput={(params) => <TextField {...params} label="Seleccione tipo de llamada" variant="outlined" size="small" />}
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
                      <FormGroup sx={{ display: 'flex', gap: '20px', flexDirection: 'row', marginTop: '15px', justifyContent: 'space-evenly' }}>
                        <Autocomplete disablePortal
                          size="small"
                          id="ID"
                          options={ID}
                          sx={{ width: '300px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione documento de identidad" />}
                        ></Autocomplete>
                        <TextField id="id-document" label="Ingrese documento de identidad" variant="outlined" size="small" sx={{ width: '300px' }} />
                        <TextField id="name" label="Nombres" variant="outlined" size="small" sx={{ width: '300px' }} />
                        <TextField id="last-name" label="Apellidos" variant="outlined" size="small" sx={{ width: '300px' }} />
                        <TextField id="phone-number" label="Telefono" variant="outlined" size="small" type="number" sx={{ width: '300px' }} />
                        <TextField id="phone-number2" label="Telefono 2" variant="outlined" size="small" type="number" sx={{ width: '300px' }} />
                        <TextField id="date" variant="outlined" size="small" type="date" sx={{ width: '300px' }} />
                        <Autocomplete disablePortal
                          size="small"
                          id="gender"
                          options={gender}
                          sx={{ width: '300px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione un género" />}
                        ></Autocomplete>
                        <Autocomplete disablePortal
                          size="small"
                          id="states"
                          options={STATES}
                          sx={{ width: '300px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione un estado" />}
                        ></Autocomplete>
                        <Autocomplete disablePortal
                          size="small"
                          id="states"
                          options={MUNICIPIO}
                          sx={{ width: '300px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione un municipio" />}
                        ></Autocomplete>
                        <Autocomplete disablePortal
                          size="small"
                          id="states"
                          options={PARROQUIA}
                          sx={{ width: '300px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione un parroquia" />}
                        ></Autocomplete>
                        <TextField id="location" label="Dirección" variant="outlined" size="small" sx={{ width: '300px' }} />

                        <Autocomplete disablePortal
                          size="small"
                          id="isPregnant"
                          options={isPregnant}
                          sx={{ width: '300px' }}
                          renderInput={(params) => <TextField {...params} label="¿Estás embarazada?" />}
                        ></Autocomplete>

                        <TextField id="numberOfChildren" label="Numero de hijos" variant="outlined" size="small" sx={{ width: '300px', marginBottom: '10px' }} />
                        <Autocomplete disablePortal
                          size="small"
                          id="etnia"
                          options={ETNIA}
                          sx={{ width: '300px', marginBottom: '10px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione una etnia" />}
                        ></Autocomplete>
                        <Autocomplete disablePortal
                          size="small"
                          id="estado-civil"
                          options={ESTADOCIVIL}
                          sx={{ width: '300px', marginBottom: '10px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione una estado civil" />}
                        ></Autocomplete>
                        <Autocomplete disablePortal
                          size="small"
                          id="nivel-de-instruccion"
                          options={NIVELDEINSTRUCCION}
                          sx={{ width: '300px', marginBottom: '10px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione un nivel de instrucción" />}
                        ></Autocomplete>
                        <Autocomplete disablePortal
                          size="small"
                          id="ocupacion"
                          options={OCUPACION}
                          sx={{ width: '300px', marginBottom: '10px' }}
                          renderInput={(params) => <TextField {...params} label="Seleccione una ocupación" />}
                        ></Autocomplete>
                        <TextField multiline minRows={5} sx={{ width: 500 }} label='Resumen de la llamada...'></TextField>
                        <Button variant="contained" size="large" sx={{ width: 500 }}>Agregar familiar</Button >
                      </FormGroup>
                    </Box>

                    {/* -------Formulario datos de familiar-------- */}
                    <Box sx={{ border: 'solid 1px black', marginTop: '20px', width: '80%', marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
                      <Typography variant="h4" textAlign={"center"} sx={{ marginBottom: '10px' }}>Datos del familiar</Typography>
                      <Autocomplete disablePortal
                        id="parentesco-familiar"
                        options={parentescoFamiliar}
                        clearOnEscape
                        sx={{ width: 300, margin: '0 auto' }}
                        renderInput={(params) => <TextField {...params} label="Seleccione tipo de parentesco" variant="outlined" size="small" />}
                      ></Autocomplete>
                      <FormGroup sx={{ display: 'flex', gap: '20px', flexDirection: 'row', marginTop: '15px', justifyContent: 'space-evenly' }}>
                        <TextField id="name" label="Nombres" variant="outlined" size="small" sx={{ width: '300px' }} />
                        <TextField id="last-name" label="Apellidos" variant="outlined" size="small" sx={{ width: '300px' }} />
                        <TextField id="phone-number" label="Telefono" variant="outlined" size="small" type="number" sx={{ width: '300px' }} />
                        <TextField id="phone-number2" label="Telefono 2" variant="outlined" size="small" type="number" sx={{ width: '300px' }} />
                        <TextField id="date" variant="outlined" size="small" type="date" sx={{ width: '300px' }} />
                      </FormGroup>
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
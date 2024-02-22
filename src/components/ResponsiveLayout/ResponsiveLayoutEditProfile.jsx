import { CssBaseline, Grid, Paper, Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";

export default function ResponsiveLayoutEditProfile () {
    return (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <RenderDrawer titlePage={"Editar Perfil"}></RenderDrawer>
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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 10, }}>
              <Grid container spacing={3} sx={{ overflowY: 'hidden' }}>
                {/* Chart */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxHeight: '450px' }}>
                    <Box>
                        <h2 className="text-center">Edicion de perfil</h2>
                    </Box>
                  </Paper>
                </Grid>
                {/* Chart 2 */}
                
              </Grid>
            </Container>
          </Box>
        </Box>
      )
    }

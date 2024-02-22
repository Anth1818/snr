import { CssBaseline, Grid, MenuItem, Paper, Select, Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Statistics0800ByDate } from "../Statistics/Statistics0800ByDate";
import { useState } from "react";
import { Statistics0800ByStates } from "../Statistics/Statistics0800ByStates";
import { Statistics0800ByStatus } from "../Statistics/statistics0800ByStatus";

export default function ResponsiveLayoutStatistics() {
  const years = ['2023', '2022']; // Agrega más años según sea necesario

  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Estadísticas"}></RenderDrawer>
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
            <Grid item xs={12} md={8} lg={6}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxHeight: '450px' }}>
                <Select name="selectYear" value={selectedYear} onChange={handleYearChange} style={{ width: '90px', height: '20px', marginLeft: '45%' }}>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
                <Box sx={{ maxWidth:'400px', marginLeft:'70px'}}>
                  <Statistics0800ByStatus selectedYear={selectedYear} onChange={handleYearChange} />
                </Box>
              </Paper>
            </Grid>
            {/* Chart 2 */}
            <Grid item xs={12} md={4} lg={6}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxHeight: '450px' }}>
                <Select name="selectYear" value={selectedYear} onChange={handleYearChange} style={{ width: '90px', height: '20px', marginLeft: '45%' }}>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
                <Statistics0800ByDate selectedYear={selectedYear} />
              </Paper>
            </Grid>
            {/* Chart 3*/}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxHeight: '400px' }}>
                <Select name="selectYear" value={selectedYear} onChange={handleYearChange} style={{ width: '90px', height: '20px', marginLeft: '45%' }}>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
                <Statistics0800ByStates selectedYearState={selectedYear} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
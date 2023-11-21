
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from "@mui/material/Backdrop";
import { Accordion } from '../Accordion/CustomizedAccordions';
import { AccordionSummary } from '../Accordion/CustomizedAccordions';
import { AccordionDetails } from '../Accordion/CustomizedAccordions';
import Typography from "@mui/material/Typography";

import { getData } from '../../utils/getDataLocalStorage';
import { Grid } from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};



export default function ModalDetails({ open, handleCloseModal, caseId }) {
  const [expanded, setExpanded] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    // Obtener los datos al cargar el componente
    const fetchedData = getData();
    setData(fetchedData);
  }, []);

  const filteredData = data.find(item => item.caseId === caseId);


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          <Button
            variant="contained"
            sx={{ float: "right" }}
            onClick={handleCloseModal}
          >
            Cerrar
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Detalles del registro
          </Typography>
          {filteredData ? (<Box><Typography sx={{ mt: 2 }}>N° de caso {caseId}</Typography>
            <Typography>Tipo de llamada: {filteredData.typeOfCall}</Typography></Box>)
            : (
              <Typography>No hay datos</Typography>
            )}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >{filteredData ? (<Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
            sx={{ mt: "10px", width: '100%' }}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography>Subtipos de {filteredData.typeOfCall}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {filteredData.subTypesOfCall.length > 0 ? (
                      filteredData.subTypesOfCall.map((element, index) => <li key={index}>{element}</li>)
                    ) : (
                      <Typography>No hay datos disponibles</Typography>
                    )}
              </Typography>
            </AccordionDetails>
          </Accordion>) : (
            <Typography>No hay datos</Typography>
          )}

            <Accordion sx={{ width: '100%' }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Resumen de llamada</Typography>
              </AccordionSummary>
              <AccordionDetails >
                {filteredData ? (
                  <Typography>
                    {filteredData.summary || "No hay datos disponibles"}
                  </Typography>
                ) : (
                  <Typography>No hay datos disponibles</Typography>
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: '100%' }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Datos de agraviada</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {filteredData ? (
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 1 */}
                      <Box sx={{ padding: "5px" }}>
                        <Typography>
                          <strong>Documento de identidad:</strong> {filteredData.typeIdOfVictim || "No especificado"} {filteredData.victimIdDocument || ""}
                        </Typography>
                        <Typography>
                          <strong>Nombres:</strong> {filteredData.victimName || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Apellidos:</strong> {filteredData.victimLastName || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Telefono:</strong> {filteredData.victimPhoneNumber || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Telefono 2:</strong> {filteredData.victimPhoneNumber2 || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Fecha de nacimiento:</strong> {filteredData.victimBirthdate || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Género:</strong> {filteredData.gender || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Estado:</strong> {filteredData.stateLocation || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Municipo:</strong> {filteredData.townShipLocation || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 2 */}
                      <Box sx={{ padding: "5px" }}>
                        {/* Contenido de la segunda columna */}
                        <Typography>
                          <strong>Parroquia:</strong> {filteredData.parishLocation || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Dirección:</strong> {filteredData.localLocation || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>¿Embarazo?:</strong> {filteredData.isPregnant || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Número de hijos:</strong> {filteredData.numberOfChildren || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Etnia:</strong> {filteredData.ethnicity || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Estado civil:</strong> {filteredData.maritalStatus || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Nivel de instrucción:</strong> {filteredData.levelOfInstruction || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Ocupación:</strong> {filteredData.ocupation || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                ) : (
                  <Typography>No hay datos disponibles</Typography>
                )}

              </AccordionDetails>
            </Accordion>
            {filteredData ? (
              <Accordion sx={{ width: '100%' }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>Datos de formas de violencia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {filteredData.typeOfViolence.length > 0 ? (
                      filteredData.typeOfViolence.map((element, index) => <li key={index}>{element}</li>)
                    ) : (
                      <Typography>No hay datos disponibles</Typography>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Typography>Sin datos</Typography>
            )}

            <Accordion sx={{ width: '100%' }}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>Datos del agresor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {filteredData ? (
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 1 */}
                      <Box sx={{ padding: "5px" }}>
                        <Typography>
                          <strong>Nombres:</strong> {filteredData.nameOfAggressor || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Apellidos:</strong> {filteredData.lastNameOfAggressor || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Edad aproximada:</strong> {filteredData.ageOfAggressor || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 2 */}
                      <Box sx={{ padding: "5px" }}>
                        {/* Contenido de la segunda columna */}
                        <Typography>
                          <strong>Nivel de instrucción:</strong> {filteredData.levelOfInstrutionOfAggressor || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Vínculo:</strong> {filteredData.bondOfAggressor || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Ocupación:</strong> {filteredData.AggressorOccupation || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                ) : (
                  <Typography>No hay datos disponibles</Typography>
                )}

              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: '100%' }}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography>Intervención institucional</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {filteredData ? (
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 1 */}
                      <Box sx={{ padding: "5px" }}>
                        <Typography>
                          <strong>Organismo receptor:</strong> {filteredData.receivingOrganism || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Funcionario:</strong> {filteredData.official || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Cargo:</strong> {filteredData.position || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 2 */}
                      <Box sx={{ padding: "5px" }}>
                        {/* Contenido de la segunda columna */}
                        <Typography>
                          <strong>Teléfono:</strong> {filteredData.phone || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>¿Acudio?:</strong> {filteredData.comeOnTime || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                ) : (
                  <Typography>No hay datos disponibles</Typography>
                )}

              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: '100%' }}
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography>Datos de contacto</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {filteredData ? (
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 1 */}
                      <Box sx={{ padding: "5px" }}>
                        <Typography>
                          <strong>Documento de identidad:</strong> {filteredData.typeOfId || "No especificado"} {filteredData.idDocument || ""}
                        </Typography>
                        <Typography>
                          <strong>Nombres:</strong> {filteredData.nameOfContact || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Apellidos:</strong> {filteredData.lastNameOfContact || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Columna 2 */}
                      <Box sx={{ padding: "5px" }}>
                        {/* Contenido de la segunda columna */}
                        <Typography>
                          <strong>Teléfono:</strong> {filteredData.phoneNumberOfContact || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Teléfono 2:</strong> {filteredData.phoneNumberOfContact2 || "Sin datos"}
                        </Typography>
                        <Typography>
                          <strong>Correo electrónico :</strong> {filteredData.emailOfContact || "Sin datos"}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                ) : (
                  <Typography>No hay datos disponibles</Typography>
                )}

              </AccordionDetails>
            </Accordion>
            {/* <Accordion sx={{ width: '100%' }}
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
              >
                <Typography>Datos de familiar</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo
                  lobortis eget. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
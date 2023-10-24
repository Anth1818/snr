import { Autocomplete, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FINDOUT0800 } from "../../utils/constants";

export default function FormSummaryCall() {
    return (
        <Box
            sx={{
                border: "solid 1px black",
                marginTop: "20px",
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "20px",
            }}
        >
            <Typography variant="h5" textAlign={"center"} sx={{ marginBottom: '10px' }}>
                Resumen de la llamada
            </Typography>
            <FormGroup
                sx={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                    marginTop: "15px",
                    justifyContent: "space-evenly",
                    alignItems:"center",
                }}
            >
                <TextField
                    multiline
                    minRows={5}
                    sx={{ width: 500 }}
                    label="Resumen de la llamada..."
                ></TextField>

                <Autocomplete
                    disablePortal
                    size="small"
                    id="findout0800"
                    options={FINDOUT0800}
                    sx={{ width: "300px" }}
                    renderInput={(params) => (
                        <TextField {...params} label="Como se entero de la línea 0800" />
                    )}
                ></Autocomplete>
            </FormGroup>

        </Box>
    )

}
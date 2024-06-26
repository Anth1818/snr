import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function FormButtonSubmit({disableButton, isEdit}) {
    return (
        <Box sx={{width:'100%', marginTop:'20px', display:'flex', justifyContent:'center'}}>
              <Button variant="contained" size="large" sx={{ width: 500 }} type="submit" disabled={disableButton}>
              {isEdit ? "Actualizar" : "Registrar"}
            </Button>
          </Box>
    )
}
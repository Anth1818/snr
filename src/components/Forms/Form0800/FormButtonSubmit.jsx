import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useFormikContext } from "formik";

export default function FormButtonSubmit({disableButton}) {
    const { submitForm } = useFormikContext();
    return (
        <Box sx={{width:'100%', marginTop:'10px', display:'flex', justifyContent:'center'}}>
              <Button variant="contained" size="large" sx={{ width: 500 }} onClick={submitForm} disabled={disableButton}>
              Registrar
            </Button>
          </Box>
    )
}
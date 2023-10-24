import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function FormButtonSubmit (){
    return (
        <Box sx={{width:'100%', marginTop:'10px', display:'flex', justifyContent:'center'}}>
              <Button variant="contained" size="large" sx={{ width: 500 }}>
              Registrar
            </Button>
          </Box>
    )
}

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { getData } from '../../utils/getDataLocalStorage';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height: "90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalDetails({ open, handleCloseModal, caseId }) {
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button variant='contained' onClick={handleCloseModal}>Cerrar modal</Button>
                    <Box sx={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                           
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              N° de caso 
                {caseId}
                        </Typography>

                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
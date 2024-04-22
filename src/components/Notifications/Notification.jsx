import { Alert, Snackbar } from "@mui/material";

export default function Notification({openNotification, closeNotification, message, severity}) {
    return (
        <Snackbar open={openNotification} autoHideDuration={4000} onClose={closeNotification}>
        <Alert severity={severity} sx={{ width: '100%' }}>
         {message}
        </Alert>
      </Snackbar>
    )
}
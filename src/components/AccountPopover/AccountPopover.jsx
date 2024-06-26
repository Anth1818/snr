import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import { Link } from 'react-router-dom';
import { getUserDataFromStorage } from '../../utils/getDataLocalStorage';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Ver perfil',
    icon: 'eva:person-fill',
  }

];


// ----------------------------------------------------------------------

export default function AccountPopover() {
  const {role, department, username,gender_id,id} = getUserDataFromStorage()
  const [open, setOpen] = useState(null);
  const account = {
    displayName: username,
    appointment: role,
    department: department,
    photoURL: gender_id === 1 ? '/assets/female-user-profile.png' : '/assets/male-user-profile.webp' ,
  };
  

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const editProfile = () => {
    setOpen(null);
  };
  

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.appointment}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.department}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <Link to={`/PageViewProfile/${id}`} key={option.label}>
            <MenuItem  onClick={editProfile}>
              {option.label}
            </MenuItem>
            </Link>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />
          
        <Link to="/Logout">
        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Cerrar sesión
        </MenuItem>
        </Link>
      </Popover>
    </>
  );
}
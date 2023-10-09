import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {Button} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import inamujerLogo from "/assets/inamujer-logo.jpg"
import { useNavigate } from "react-router-dom";


export default function Login() {

  // const redirect = "../pages/Page0800" 

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pages/Page0800")

  }

  return (
    <div className="grid place-items-center min-h-screen box-border">
      <div className="min-w-fit h-96 border-2 border-gray-400 box-border absolute rounded-lg">
        <div className="clip-path-mypolygon bg-[#2E219E] h-48 w-full m-0 absolute box-border pt-4 rounded-t-lg">
          <h2 className="text-center text-white text-2xl font-bold">
            Iniciar sesión
          </h2>
        </div>
        <img
          src={inamujerLogo}
          alt="Logo inamujer"
          className=" w-20 absolute rounded-full top-20 left-[38%] mt-1"
        />
        <form className="flex flex-col gap-2 p-8 mt-32" onSubmit={handleSubmit}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-username">
              Usuario
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              label="Username"
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant="contained" color="secondary" type="submit">
            Ingresar
          </Button>
        </form>
      </div>
    </div>
  );
}

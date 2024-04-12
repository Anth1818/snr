import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import inamujerLogo from "/assets/inamujer-logo.jpg";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { user, loginUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ username: userName, password: userPassword });
    } catch (error) {
      setShowAlert(true);
    }
  };

  if (user?.role === "Administradora") {
    navigate("/AddUser");
  }
  if (user?.department === "0800") {
    navigate("/Page0800");
  }
  if (user?.department === "OAC") {
    navigate("/PageOAC");
  }
  if (user?.department === "SIN") {
    navigate("/PageRCV");
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="min-w-fit h-full border-2 border-gray-400 box-border  rounded-lg">
        <div className="clip-path-mypolygon bg-[#2E219E] h-44 w-full m-0 box-border pt-4 rounded-t-lg">
          <h2 className="text-center text-white text-2xl font-bold">
            Iniciar sesión
          </h2>
        </div>
        <img
          src={inamujerLogo}
          alt="Logo inamujer"
          className=" w-28 -mt-24 ml-24"
        />
        <form className="flex flex-col gap-2 p-8 mb-4" onSubmit={handleSubmit}>
          {showAlert && <Alert severity="error">This is an error Alert.</Alert>}

          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-username">
              Usuario
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
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
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
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
          <Button variant="contained" type="submit">
            <b>Ingresar</b>
          </Button>
        </form>
      </div>
    </div>
  );
}

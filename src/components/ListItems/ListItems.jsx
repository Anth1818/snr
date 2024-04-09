import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import FemaleIcon from "@mui/icons-material/Female";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom"
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import List from "@mui/material/List";
import { useUser } from "../../context/userContext";



export default function ListItems() {
  const { user } = useUser()

  const isAdmin = user?.role === "Administradora";
  return (
    <List component={"nav"}>
      <Tooltip title="0800" placement="right">
        <ListItemButton component={NavLink} to={"../Page0800"}>
          <ListItemIcon>
            <AddIcCallIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="0800" />
        </ListItemButton>
      </Tooltip>
      <Tooltip title="Registro de casos de violencia" placement="right">
        <ListItemButton component={NavLink} to={"../PageRCV"}>
          <ListItemIcon>
            <FemaleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="RCV" />
        </ListItemButton>
      </Tooltip>
      <Tooltip title="OAC" placement="right">
        <ListItemButton component={NavLink} to={"../PageOAC"}>
          <ListItemIcon>
            <PeopleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="OAC" />
        </ListItemButton>
      </Tooltip>
      <Tooltip title="Estadísticas" placement="right">
        <ListItemButton component={NavLink} to={"../PageStatistics"}>
          <ListItemIcon>
            <BarChartIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Estadísticas" />
        </ListItemButton>
      </Tooltip>
      {isAdmin && (
        <Tooltip title="Agregar nuevo usuario al sistema" placement="right">
          <ListItemButton component={NavLink} to={"../AddUser"}>
            <ListItemIcon>
              <PersonAddAltRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Agregar nuevo usuario" />
          </ListItemButton>
        </Tooltip>
      )}
    </List>
  );
}
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
// import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import FemaleIcon from "@mui/icons-material/Female";
import { Tooltip } from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <Tooltip title="0800" placement="right">
      <ListItemButton>
        <ListItemIcon>
          <AddIcCallIcon />
        </ListItemIcon>
        <ListItemText primary="0800" />
      </ListItemButton>
    </Tooltip>
    <Tooltip title="Registro de casos de violencia" placement="right">
      <ListItemButton>
        <ListItemIcon>
          <FemaleIcon />
        </ListItemIcon>
        <ListItemText primary="RCV" />
      </ListItemButton>
    </Tooltip>
    <Tooltip title="OAC" placement="right">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="OAC" />
      </ListItemButton>
    </Tooltip>
    <Tooltip title="Estadísticas" placement="right">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Estadísticas" />
      </ListItemButton>
    </Tooltip>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

"use client";

import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ApiIcon from "@mui/icons-material/Api";
import Container from "@mui/material/Container";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useRouter } from "next/navigation";
import Link from "@mui/material/Link";
import WebhookIcon from "@mui/icons-material/Webhook";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
//export { RootLayout }; // Export both for flexibility

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://tecnomotor.com/">
        Tecnomotor
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function RootLayout({ children }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  function setFragment(route) {
    router.push(route);
  }

  const listItemsData = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      onclick: () => setFragment("/dashboard"),
      enabled: true,
    },
    {
      label: "Clientes",
      icon: <GroupAddIcon />,
      onclick: () => setFragment("/customer"),
      enabled: true,
    },
    {
      label: "Aplicações",
      icon: <AutoStoriesIcon />,
      onclick: () => setFragment("/norma"),
      enabled: true,
    },
    {
      label: "Indicadores",
      icon: <WebhookIcon />,
      onclick: () => setFragment("/"),
      enabled: false,
    },
    {
      label: "Integrações",
      icon: <LayersIcon />,
      onclick: () => setFragment("/"),
      enabled: false,
    },
  ];

  const secondaryListItemsData = [
    {
      label: "Relatorios",
      icon: <AssignmentIcon />,
      onclick: () => setFragment("/"),
      enabled: false,
    },
    {
      label: "Dados",
      icon: <AssignmentIcon />,
      onclick: () => setFragment("/"),
      enabled: false,
    },
    {
      label: "Metas do setor",
      icon: <AssignmentIcon />,
      onclick: () => setFragment("/"),
      enabled: false,
    },
    {
      label: "Sair",
      icon: <ExitToAppIcon />,
      onclick: () => setFragment("/"),
      enabled: false,
    },
  ];

  const mainListItems = (
    <React.Fragment key={0}>
      {listItemsData.map((item, index) => (
        <React.Fragment>
          <ListItemButton
            key={index}
            onClick={item.onclick}
            disabled={!item.enabled}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </React.Fragment>
      ))}
    </React.Fragment>
  );

  const secondaryListItems = (
    <React.Fragment key={1}>
      <ListSubheader component="div" inset>
        Relatórios salvos
      </ListSubheader>
      {secondaryListItemsData.map((item, index) => (
        <ListItemButton
          key={index}
          onClick={item.onclick}
          disabled={!item.enabled}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={defaultTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
              <Toolbar
                sx={{
                  pr: "24px",
                  backgroundColor: "#004AAD", // keep right padding when drawer closed
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                    marginRight: "36px",
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  Data Rasther
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: [1],
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </Toolbar>
              <Divider />
              <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
              </List>
            </Drawer>
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {children}
              </Container>
              <Copyright sx={{ pt: 4 }} />
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

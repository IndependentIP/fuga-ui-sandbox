import { CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, Typography, Button, Slide, useScrollTrigger, Box, Drawer, makeStyles, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import React, { useMemo, useState } from "react";
import { museThemeOptions, blackThemeOptions } from '@independentip/fuga-ui';


const drawerWidth = 50;

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: theme.spacing(drawerWidth),
    width: `calc(100% - ${theme.spacing(drawerWidth)}px)`,
  },
  drawer: {
    width: theme.spacing(drawerWidth),
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.spacing(drawerWidth),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}))

function AutoHideAppBar({ children }: { children: React.ReactNode }) {
  const trigger = useScrollTrigger();
  const classes = useStyles();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            {children}
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}


export function Layout({ children }: { children: React.ReactNode }) {

  const [themeOptions, setThemeOptions] = useState(museThemeOptions);

  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  const classes = useStyles();
  function toggleTheme() {
    setThemeOptions(themeOptions === museThemeOptions ? blackThemeOptions : museThemeOptions);
  }

  return (<>
    <Box sx={{
      display: 'flex'
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AutoHideAppBar>
          <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
          <Typography variant="h6">This is The sample App</Typography>
        </AutoHideAppBar>
        <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
          <Toolbar />
          <Box p={2}>
            <Typography variant="h4">Components</Typography>
          </Box>
          <List>
            <ListItem button>
              <ListItemIcon><FilterList /></ListItemIcon>
              <ListItemText primary="Filter Chips" />
            </ListItem>
          </List>

        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          {children || <Typography variant="h1">Hello World</Typography>}
        </main>
      </ThemeProvider>
    </Box>
  </>);
}
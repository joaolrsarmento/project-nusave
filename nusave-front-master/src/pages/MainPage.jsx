import React from 'react';
import clsx from 'clsx';
import { Redirect, Route, Switch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import PresentationIcon from '@material-ui/icons/Bookmark';
import PersonIcon from '@material-ui/icons/Person';
import AdvisesIcon from '@material-ui/icons/AddAlert';
import StatisticsIcon from '@material-ui/icons/ShowChart';
import FeedIcon from '@material-ui/icons/Notifications';
import DataIcon from '@material-ui/icons/PieChart';

import Presentation from '../containers/Presentation';
import Profile from '../containers/Profile';
import Advises from '../containers/Advises';
import Statistics from '../containers/statistics';
import Feed from '../containers/Feed';
import Data from '../containers/Data';

import { ListLink } from '../components/Link';

import * as routes from '../routes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{backgroundColor:'#F0F0F0'}} className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img src="NuSave_white_small.png" style={{marginTop:'8px'}}/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          <ListLink to={routes.PRESENTATION} primary="Apresentação" icon={<PresentationIcon color="primary"/>} />
          <ListLink to={routes.PROFILE} primary="Perfil" icon={<PersonIcon color="primary"/>} />
          <ListLink to={routes.ADVISES} primary="Notificações" icon={<AdvisesIcon color="primary"/>} />
          <ListLink to={routes.STATISTICS} primary="Meus gastos" icon={<StatisticsIcon color="primary"/>} />
          <ListLink to={routes.FEED} primary="Feed" icon={<FeedIcon color="primary"/>} />
          <ListLink to={routes.DATA} primary="Inserir dados" icon={<DataIcon color="primary"/>} />
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          <Route exact path={routes.PRESENTATION} component={Presentation} />
          <Route exact path={routes.PROFILE} component={Profile} />
          <Route exact path={routes.ADVISES} component={Advises} />
          <Route exact path={routes.STATISTICS} component={Statistics} />
          <Route exact path={routes.FEED} component={Feed} />
          <Route exact path={routes.DATA} component={Data} />
          <Route path="/">
            <Redirect to={routes.PROFILE} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
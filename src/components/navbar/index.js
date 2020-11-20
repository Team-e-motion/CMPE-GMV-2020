import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: 'center',
        margin: 'auto'
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: 'center',
        margin: 'auto'
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `none`,
        color: `white`
    }
});

const navLinks = [
    { title: `Inicio`, path: `/CMPE-GMV-2020` },
    { title: `Firmar mensaje`, path: `/CMPE-GMV-2020/certify` },
    { title: `Comprobar firma`, path: `/CMPE-GMV-2020/validate` },
    { title: `¿Quiénes somos?`, path: `/CMPE-GMV-2020/about` }
];

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <LockIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    e-motion
                </Typography>
                <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navDisplayFlex}>
                    {navLinks.map(({ title, path }) => (
                        <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </a>
                    ))}
                </List>
                <Button
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleMenu}>
                    <img
                        src={process.env.PUBLIC_URL + '/icons/spain-flag.svg'}
                        alt="Español"
                        width="52"
                        height="32"
                    />
                </Button>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    open={open}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Español</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

import React from "react";
import AppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LockIcon from '@material-ui/icons/Lock';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                <LockIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit">
                    e-motion
                </Typography>
                <div style={{ display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',}}>
                            <Tabs
                                onChange={(e, v) => setValue(v)}
                                value={value}
                                aria-label="Navigation Tabs"

                            >
                                <Tab label={"Inicio"} style={{ textTransform: 'none'}}  />
                                <Tab label={"Firmar mensaje"} style={{ textTransform: 'none'}} />
                                <Tab label={"Comprobar firma"} style={{ textTransform: 'none'}} />
                                <Tab label={"¿Quiénes somos?"} style={{ textTransform: 'none'}} />
                            </Tabs>
                </div>
                <div style={{  marginLeft: 'auto',}}>
                    <Button
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    ><img src={process.env.PUBLIC_URL + '/icons/spain-flag.svg'} alt="Español" width="52" height="32" onClick={handleMenu} />
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Español</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
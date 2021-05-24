import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));



const Header = () => {
    const classes = useStyles();
    const history = useHistory()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ marginRight: 10, color: 'yellow' }}>
                        Covidbase
                    </Typography>
                    <Button color="inherit"
                        onClick={() => history.push('/')}>
                        Home
                    </Button>
                    <Button color="inherit"
                        onClick={() => history.push('/datasets/')}>
                        Datasets
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;


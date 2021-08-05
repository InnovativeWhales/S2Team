import {React,useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '../Drawer';
import ManageSubAdmins from '../ManageSubAdmins';
import ConfigForm from '../ConfigForm';
import SubAdmin from '../SubAdmin';
import AdminHome from '../AdminHome'
import ConstRouts from '../../Constants/ConstRouts';
import Auth from '../../Auth';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));

let Admin =  ()=>{
    const [UnAutherised,setUnAutherised] = useState(true);
    useEffect(() => {
        if(!Auth.VerifyUser()){
            alert("UnAutherised");
            window.location.href="/";
        }
        else
        {
            setUnAutherised(false);
        }
    });
    const classes = useStyles();
    return(
        UnAutherised === true?
        <div>
        </div>:
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Drawer/>
                    <Typography variant="h6" className={classes.title}>
                    S2Team-Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <Switch>
                    <Route path={ConstRouts.Admin.ManageSubAdmins} component={ManageSubAdmins} exact/>
                    <Route path={ConstRouts.Admin.ConfigForm} component={ConfigForm} exact/>
                    <Route path={ConstRouts.Admin.SubAdmin} component={SubAdmin} exact/>
                    <Route path={ConstRouts.Admin.BulkExcelUpload} exact>
                        <h4><center>Not available for sample version.</center></h4>
                    </Route>
                    <Route path={ConstRouts.Admin.Home} component={AdminHome} exact>
                    <h4><center>Here total dashboard will be shown</center></h4>
                    </Route>
                    <Route path={ConstRouts.Admin.Root}>
                        <h4>
                            <center>
                                You Have no acess to this.
                            </center>
                        </h4>
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default Admin;
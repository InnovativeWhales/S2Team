import {React,useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const GotoInAdmin = function(module){
      //console.log(e.target);
      window.location.href="/Admin/"+module;
}

const GotoInSubAdmin = function(module){
  //console.log(e.target);
  window.location.href="/Admin/"+module;
}

const Logout = function(){
  //console.log(e.target);
  localStorage.clear();
  window.location.href="/";
}

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [anchor, setanchor] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setanchor(open);
  };
  return (
    <div>
        <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
        </IconButton>
        <Drawer anchor="left" open={anchor} onClose={toggleDrawer(false)}>
          {
            JSON.parse(localStorage.getItem("Auth")).Role === "Admin"?
              <div>
              <ListItem style={{marginTop:"20px"}} button key="Home" onClick={()=>GotoInAdmin("Home")}>
                  <HomeIcon/> Home
              </ListItem>
              <ListItem button key="ConfigureForm" onClick={()=>GotoInAdmin("ConfigureForm")}>
                <PermDataSettingIcon/> &nbsp; Configure Form
              </ListItem>
              <ListItem button key="ManageSubAdmins" onClick={()=>GotoInAdmin("ManageSubAdmins")}>
                <SettingsIcon/> &nbsp; Manage SubAdmins
              </ListItem>
              <ListItem button key="BulkExcelUpload" onClick={()=>GotoInAdmin("BulkExcelUpload")}>
                <CloudUploadIcon/> &nbsp; Bulk Excel Upload
              </ListItem>
              <Divider style={{marginTop:"20px"}} />
              <ListItem button key="Logout" onClick={()=>Logout()}>
                  <ExitToAppIcon/> &nbsp; Logout
              </ListItem>
            </div>
            :<div>
              <ListItem style={{marginTop:"20px"}} button key="Home" onClick={()=>GotoInAdmin("SubAdmin")}>
                  <HomeIcon/> SubAdmin
              </ListItem>
              <ListItem button key="Logout" onClick={()=>Logout()}>
                  <ExitToAppIcon/> &nbsp; Logout
              </ListItem>
            </div>
          }
        </Drawer>
    </div>
  );
}
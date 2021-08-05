import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import '@inovua/reactdatagrid-community/theme/blue-light.css';
import { Button, Checkbox } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const data = {
    "District":{
      type:"DropDown",
      keys:["Nandyala","Nizamabad"],
      next:
          {
              "Nandyala":{
                "constituencies":{
                    keys:["constituencie 1","constituencie 2"],
                    next:{
                        "constituencie 1":{
                            keys:["Ward 36","Ward 2"],
                            next:{
                              "Ward 36":{
                                keys:[{Name:"Chinna Swamy",MobileNo:"8688116388"},{Name:"Nagendra",MobileNo:"8096214139"},{Name:"Raj Kumar",MobileNo:"7989216085"},{Name:"Sunil",MobileNo:"7661983683"},{Name:"Suresh",MobileNo:"7799833500"},{Name:"Meena",MobileNo:"9553740882"}]
                              },
                              "Ward 2":{
                                keys:[]
                              },
                            }
                        },
                        "constituencie 2":{
                            keys:["Ward 3","Ward 4"],
                            next:{
                              "Ward 3":{
                                keys:[]
                              },
                              "Ward 4":{
                                keys:[]
                              },
                            }
                        }
                    }
                }
              },
              "Nizamabad":{
                "constituencies":{
                    keys:["Const3","Const4"],
                    next:{
                        "Const3":{
                            keys:["Ward5","Ward6"],
                            next:{
                              "Ward5":{
                                keys:[]
                              },
                              "Ward6":{
                                keys:[]
                              },
                            }
                        },
                        "Const4":{
                            keys:["Ward7","Ward8"],
                            next:{
                              "Ward7":{
                                keys:[]
                              },
                              "Ward8":{
                                keys:[]
                              },
                            }
                        }

                    }
                }
              }
          }
    }
  }

const GrivanceData= {
  "Engineering":["Repairs to foot path","Repairs to raod","Illegal Road Cutting","Repair of nala/drain","water logging","Desiting of nala/drain","Manhole cover open","Drainage line damage","No water supply in public Toilets","Overflowing of Nala/Drain","Fecing of nala/drain","Improvements in burial Grounds"],
  "Health and sanitation":["Drainage Over flow","Grabage Buring","Road side banners/Poster/Flags?flexes","Birth and Death","Unhygienic Food Quality in Hotel","Grabage Nuisance while transporting"],
  "Entomology":["Mosquitoes fogging requies","Reporting of Malaria/Dengue/other fever at locality","spraying in home/locality","mosquito Menace in the locality"]
}
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 210,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
function SaveContents()
{
  alert("Saved Contents sucessfully")
}
let SubAdmin = ()=>{   
    const classes = useStyles();
    const [Dist,SetDist] = useState("");
    const [Constituencies,SetConstituencies] = useState("");
    const [Ward,SetWard] = useState("");
    const [Name,SetName] = useState("");
    const [TempVal,SetTempVal] = useState("");
    const [OpenSchemes,SetOpenSchemes] = useState(false)
    const [OpenGrivance,SetOpenGrivance] = useState(false)
    const [state, setState] = React.useState([false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [GrivanceType,setGrivanceType] = useState("")
    const [GrivanceValue,setGrivanceValue] = useState("")
    function CloseSchemes(){
      SetOpenSchemes(false)
    }
    function CloseGrivance(){
      SetOpenGrivance(false)
    }
    const handleChange = (event) => {
      setGrivanceType(event.target.value);
    };
    const handleGrivanceValue = (event) => {
      setGrivanceValue(event.target.value);
    };
    function edit({value}){
      SetTempVal(value);
      return(
        <TextField
                                    size = "small"
                                    variant="outlined"
                                    margin="normal"
                                    inputProps={{style: {fontSize: 10}}} // font size of input text
                                    InputLabelProps={{style: {fontSize: 10}}} // font size of input label
                                    style={{width:"100%"}}
                                    value={TempVal}
                                    onChange={(e)=>{SetTempVal(e.target.value)}}
                                    required
                                    />
                    
      )
    }
    function DropDown(topvalue){
      return(
      <Select
          labelId="SCHEMES"
          id="SCHEMES"
          value={"Engineering"}
          onChange={(e)=>{}}
        >
          {
              ["Engineering","Health and sanitation","Entomology","Scheme4"].map((value)=>(topvalue === value)?<MenuItem selected={true} value={value}>{value}</MenuItem>:<MenuItem value={value}>{value}</MenuItem>)
          }
        </Select>)
    }
    const columns = [
      { name: 'House Number', header: 'House Number', minWidth: 200, defaultFlex: 2},
      { name: 'Citizen Name', header: 'Citizen Name', minWidth: 200, defaultFlex: 2, editor: edit},
      //{ name: 'Location and Landmark', header: 'Location and Landmark', minWidth: 200, defaultFlex: 2, editable:false},
      { name: 'Phone Number', header: 'Phone Number', minWidth: 200, defaultFlex: 2, editable:false },
      //{ name: 'Family Details', header: 'Family Details', minWidth: 200, defaultFlex: 2, editable:false },
      { name: 'Scheme Availed', header: 'Scheme Availed', minWidth: 250, defaultFlex: 2 },
      { name: 'Eligble but Schemes not Availed', header: 'Eligble but Schemes not Availed', minWidth: 250, defaultFlex: 2 },
      { name: 'Volunteer Feedback', header: 'Volunteer Feedback', minWidth: 200, defaultFlex: 2},
      { name: 'Grivance', header: 'Grivance', minWidth: 200, defaultFlex: 2 },
      { name: 'issue mentioned date', header: 'issue mentioned date', minWidth: 200, defaultFlex: 2 },
      { name: 'what actually happend', header: 'what actually happend', minWidth: 200, defaultFlex: 2 },
      { name: 'Case Study', header: 'Case Study', minWidth: 200, defaultFlex: 2 },
      { name: 'Last updated on', header: 'Last updated on', minWidth: 200, defaultFlex: 2 },
      { name: 'Comments', header: 'Comments', minWidth: 200, defaultFlex: 2 }, 
    ];
  
    const gridStyle = { minHeight: "80vh" };
  
    const emptySource = [];
    const dataSource = [
      {
        "id":1,
        "House Number":"25/266",
        "Citizen Name":"Boorneni Subba Lakshmamma",
        "Location and Landmark":"Some Location",
        "Phone Number":"9441760869",
        "Family Details":"",
        "Scheme Availed":"NO SCHEMES",
        "Eligble but Schemes not Availed":"",
        "Volunteer Feedback":"Editable Filed ",
        "House Hold Feedback":"",
        "Grivance":"",
        "issue mentioned date":"",
        "Issue resolved date":"",
        "what actually happend":"",
        "Case Study":"",
        "Last Updated":"",
        "comments":""
      },
      {
        "id":2,
        "House Number":"25/450-1B-911",
        "Citizen Name":"Simhani Choudappa",
        "Location and Landmark":"Some Location",
        "Phone Number":"8185838374",
        "Family Details":"",
        "Scheme Availed":"YSR PENSION KANUKA",
        "Eligble but Schemes not Availed":"",
        "Volunteer Feedback":"Editable Filed ",
        "House Hold Feedback":"",
        "Grivance":"",
        "issue mentioned date":"",
        "Issue resolved date":"",
        "what actually happend":"",
        "Case Study":"",
        "Last Updated":"",
        "comments":""
      },
      {
        "id":3,
        "House Number":"25/266-28",
        "Citizen Name":"DUDEKULA HUSENAMMA",
        "Location and Landmark":"Some Location",
        "Phone Number":"986699541",
        "Family Details":"",
        "Scheme Availed":"HOUSE SITE",
        "Eligble but Schemes not Availed":"",
        "Volunteer Feedback":"Editable Filed ",
        "House Hold Feedback":"",
        "Grivance":"",
        "issue mentioned date":"",
        "Issue resolved date":"",
        "what actually happend":"",
        "Case Study":"",
        "Last Updated":"",
        "comments":""
      },
      {
        "id":4,
        "House Number":"25/450-1B-574-C",
        "Citizen Name":"CHAKALI SHIRISHA",
        "Location and Landmark":"Some Location",
        "Phone Number":"8886196598",
        "Family Details":"",
        "Scheme Availed":"NO SCHEMES",
        "Eligble but Schemes not Availed":"",
        "Volunteer Feedback":"Editable Filed ",
        "House Hold Feedback":"",
        "Grivance":"",
        "issue mentioned date":"",
        "Issue resolved date":"",
        "what actually happend":"",
        "Case Study":"",
        "Last Updated":"",
        "comments":""
      },
      {
        "id":5,
        "House Number":"25/266A",
        "Citizen Name":"Kandukuri Nagendra",
        "Location and Landmark":"Some Location",
        "Phone Number":"9704099403",
        "Family Details":"",
        "Scheme Availed":"NO SCHEMES",
        "Eligble but Schemes not Availed":"",
        "Volunteer Feedback":"Editable Filed ",
        "House Hold Feedback":"",
        "Grivance":"",
        "issue mentioned date":"",
        "Issue resolved date":"",
        "what actually happend":"",
        "Case Study":"",
        "Last Updated":"",
        "comments":""
      },
      {
        "id":6,
        "House Number":"25/266 -2B",
        "Citizen Name":"Shaik Sofiyabee",
        "Location and Landmark":"Some Location",
        "Phone Number":"9441760869",
        "Family Details":"",
        "Scheme Availed":"YSR PENSION KANUKA, AMMA VODI",
        "Eligble but Schemes not Availed":"AMMA VODI",
        "Volunteer Feedback":"Editable Filed ",
        "House Hold Feedback":"",
        "Grivances":"",
        "issue mentioned date":"",
        "Issue resolved date":"",
        "what actually happend":"",
        "Case Study":"",
        "Last Updated":"",
        "comments":""
      }
    ];
    const onEditComplete = useCallback((data) => {
      console.log(data);
    })
    const Selects = useCallback((data) => {
      console.log(data)
      if(data[1]===4)
      SetOpenSchemes(true);
      if(data[1]===6)
      SetOpenGrivance(true);
    })
    return(
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="District">District</InputLabel>
        <Select
          labelId="District"
          id="District"
          value={Dist}
          onChange={(e)=>{SetDist(e.target.value);SetConstituencies("");SetWard("");SetName("")}}
        >
          {
              data.District.keys.map((value)=><MenuItem value={value}>{value}</MenuItem>)
          }
        </Select>
        </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="constituencies">constituencies</InputLabel>
            <Select
            labelId="constituencies"
            id="constituencies"
            value={Constituencies}
            onChange={(e)=>{SetConstituencies(e.target.value);SetWard("");SetName("")}}
            >
            {
                Dist!==""&&Dist!==null ?data.District.next[Dist].constituencies.keys.map((value)=><MenuItem value={value}>{value}</MenuItem>):<div></div>
            }
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="Wards">Wards</InputLabel>
            <Select
            labelId="Wards"
            id="Wards"
            value={Ward}
            onChange={(e)=>{SetWard(e.target.value);SetName("")}}
            >
            {
                (Dist!==""&&Dist!==null) && (Constituencies!==""&&Constituencies!==null) ?data.District.next[Dist].constituencies.next[Constituencies].keys.map((value)=><MenuItem value={value}>{value}</MenuItem>):<div></div>
            }
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
        <InputLabel id="Name">Name</InputLabel>
        <Select
          labelId="Name"
          id="Name"
          value={Name}
          onChange={(e)=>{SetName(e.target.value)}}
        >
          {
              (Dist!==""&&Dist!==null) && (Constituencies!==""&&Constituencies!==null) && (Ward!==""&&Ward!==null)?data.District.next[Dist].constituencies.next[Constituencies].next[Ward].keys.map((value)=><MenuItem value={value.Name}>{value.Name}</MenuItem>):<div></div>
          }
        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        {(Dist!==""&&Dist!==null) && (Constituencies!==""&&Constituencies!==null) && (Ward!==""&&Ward!==null) && (Name!==""&&Name!==null)?
        <TextField
                                editable={false}
                                label="MobileNo"
                                value={data.District.next[Dist].constituencies.next[Constituencies].next[Ward].keys.filter((value)=>{if(value.Name === Name)return true})[0].MobileNo}
                                />:
                                <div></div>
        }
          </FormControl>
            <br/>
            <br/>
            {
              (Dist === "Nandyala" && Constituencies === "constituencie 1" && Ward === "Ward 36" && Name === "Nagendra") ? <ReactDataGrid
              onEditComplete={onEditComplete}
              editable={true}
              theme={"blue-light"}
              idProperty="id"
              style={gridStyle}
              columns={columns}
              activeCell={[0,-1]}
              pagination
              dataSource={dataSource}
              onActiveCellChange={Selects}
              defaultLimit={10}
              cellSelection={true}
            /> :
            <ReactDataGrid
              onEditComplete={onEditComplete}
              editable={true}
              theme={"blue-light"}
              idProperty="id"
              style={gridStyle}
              columns={columns}
              pagination
              dataSource={emptySource}
              defaultLimit={10}
              onActiveCellChange={Selects}
              cellSelection={true}
            />
            }
            <br/>
            <center><Button onClick={SaveContents}  variant="contained" color="primary" >Save</Button></center><br/>
            <Dialog open={OpenSchemes} onClose={CloseSchemes} aria-labelledby="form-dialog-title" fullWidth={false}>
              <DialogTitle id="form-dialog-title"><center>Choose Schemes</center></DialogTitle>
              <div className="container">
                {
                  ["NO SCHEMES","YSR PENSION KANUKA","AMMA VODI","CHEYUTHA","TITCO","YSR CHEYUTHA","YSR CHEDODU","HOUSE SITE","VIDYA DEEVENA","VIDYA KANUKA","VAAHANAMITRA","Welfare Schemes"].map((Scheme,i)=>
                  <div>
                    {Scheme} <Checkbox
                    checked={setState[i]}
                    name = {i}
                    onChange={()=>{}}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  /><br/></div>
                  )
                }
              </div>
              <DialogActions>
                <Button onClick={CloseSchemes} color="primary">
                  Done
                </Button>
                <Button onClick={CloseSchemes} color="primary">
                  cancel
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={OpenGrivance} onClose={CloseGrivance} aria-labelledby="form-dialog-title" fullWidth={false}>
              <DialogTitle id="form-dialog-title"><center>Choose Grivance</center></DialogTitle>
              <div className="container">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Grivance Types</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={GrivanceType}
                    onChange={handleChange}
                  >
                {
                    ["Engineering","Health and sanitation","Entomology","Town Planning","Advertisement","Sports","Revenue (Property Tax)","Information Technology"
                    ,"Construction and Demolition Waste","Electrical","Swachhta","Veterinary","Urban Biodiversity","Estate","Urban Community Development","Elections","Land Acquisition","Fire Prevention Wing"].map((val)=>
                      <MenuItem value={val}>{val}</MenuItem>
                    )
                                    
                  }
                </Select>
                </FormControl><br/><br/>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Grivance</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={GrivanceValue}
                    onChange={handleGrivanceValue}
                  >
                {
                   GrivanceData[GrivanceType] != undefined?
                    GrivanceData[GrivanceType].map((val)=>
                      <MenuItem value={val}>{val}</MenuItem>
                    ) :
                    <MenuItem ></MenuItem>             
                  }
                </Select>
                </FormControl>
                </div>
              <DialogActions>
                <Button onClick={CloseGrivance} color="primary">
                  Done
                </Button>
                <Button onClick={CloseGrivance} color="primary">
                  cancel
                </Button>
              </DialogActions>
            </Dialog>
        
        </div>
    )
}
export default SubAdmin;

//House Number	Location and Landmark	House Head	Phone Number	Family Details	Scheme Availed	Eligble but Schemes not Availed	Volunteer Feedback	House Hold Feedback	Locality Issues	issue mentioned date	Issue resolved date 	what actually happend	Case Study	before and after photos

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

  const dataSource = 
  [
    {
      id: 3,
      'House Number': 'H.No',
      'Citizen Name': 'Citizen Name',
      'Location and Landmark': '',
      'Phone Number': 'Mobile No',
      'Family Details': '',
      'Scheme Availed': 'Welfare Schemes',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 4,
      'House Number': '25/266',
      'Citizen Name': 'Boorneni Subba Lakshmamma',
      'Location and Landmark': '',
      'Phone Number': 9441760869,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 5,
      'House Number': '25/450-1B-911',
      'Citizen Name': 'Simhani Choudappa',
      'Location and Landmark': '',
      'Phone Number': 8185838374,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 6,
      'House Number': '25/266-28',
      'Citizen Name': 'DUDEKULA HUSENAMMA',
      'Location and Landmark': '',
      'Phone Number': 986699541,
      'Family Details': '',
      'Scheme Availed': 'VIDYA DEEVENA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 7,
      'House Number': '25/450-1B-574-C',
      'Citizen Name': 'CHAKALI SHIRISHA',
      'Location and Landmark': '',
      'Phone Number': 8886196598,
      'Family Details': '',
      'Scheme Availed': 'HOUSE SITE',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 8,
      'House Number': '25/266A',
      'Citizen Name': 'Kandukuri Nagendra',
      'Location and Landmark': '',
      'Phone Number': 9704099403,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 9,
      'House Number': '25/266-2B',
      'Citizen Name': 'Shaik Sofiyabee',
      'Location and Landmark': '',
      'Phone Number': 9849258735,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 10,
      'House Number': '25/266',
      'Citizen Name': 'Chakali Narasamma',
      'Location and Landmark': '',
      'Phone Number': 7660038179,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 11,
      'House Number': '25/266-A',
      'Citizen Name': 'Kalapari Venkata Lakshmi',
      'Location and Landmark': '',
      'Phone Number': 7095041160,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 12,
      'House Number': '25/270-C',
      'Citizen Name': 'Kuntumalla Lakshmi',
      'Location and Landmark': '',
      'Phone Number': 9030577228,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 13,
      'House Number': '25/266',
      'Citizen Name': 'Chakali Manohari',
      'Location and Landmark': '',
      'Phone Number': 7780149390,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 14,
      'House Number': '25/266',
      'Citizen Name': 'Vadde Naga Lakshmi',
      'Location and Landmark': '',
      'Phone Number': 9154630731,
      'Family Details': '',
      'Scheme Availed': 'HOUSE SITE',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 15,
      'House Number': '25/262',
      'Citizen Name': 'Kodi Ramanjaneyulu',
      'Location and Landmark': '',
      'Phone Number': null,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 16,
      'House Number': '25/266-A1',
      'Citizen Name': 'Mulla Abdul Gaffar Miah',
      'Location and Landmark': '',
      'Phone Number': 9848540282,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 17,
      'House Number': '25/266',
      'Citizen Name': 'Vadde Sujatha',
      'Location and Landmark': '',
      'Phone Number': 8106066835,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 18,
      'House Number': '25/266-28-2',
      'Citizen Name': 'Dudekula Hussainamma',
      'Location and Landmark': '',
      'Phone Number': 7013232581,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,AMMA VODI ,VIDYA KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 19,
      'House Number': '25/266-H17',
      'Citizen Name': 'Vadde Naga Lakshmamma',
      'Location and Landmark': '',
      'Phone Number': 7780689229,
      'Family Details': '',
      'Scheme Availed': 'CHEDODU',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 20,
      'House Number': 0.09398496240601503,
      'Citizen Name': 'MADELA NARESH',
      'Location and Landmark': '',
      'Phone Number': 8639165707,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 21,
      'House Number': '25/266',
      'Citizen Name': 'Talikota Ravi',
      'Location and Landmark': '',
      'Phone Number': 9182040860,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 22,
      'House Number': '25/266',
      'Citizen Name': 'Talikota Subbaratnamma',
      'Location and Landmark': '',
      'Phone Number': 9959119639,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 23,
      'House Number': '25/266',
      'Citizen Name': 'Bhootha Raju Rangaswami',
      'Location and Landmark': '',
      'Phone Number': 9966010859,
      'Family Details': '',
      'Scheme Availed': 'TITCO,AMMA VODI ,VIDYA KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 24,
      'House Number': '25/260-B1',
      'Citizen Name': 'Gogula Gurramma',
      'Location and Landmark': '',
      'Phone Number': null,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 25,
      'House Number': '25/262',
      'Citizen Name': 'Chandaluri Sanjeeva Rayudu',
      'Location and Landmark': '',
      'Phone Number': 9959758934,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 26,
      'House Number': '25/266-2B',
      'Citizen Name': 'Shaik Mahaboob Jalan',
      'Location and Landmark': '',
      'Phone Number': 9550577411,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 27,
      'House Number': '25/266-A1',
      'Citizen Name': 'Maram Vara Lakshmi',
      'Location and Landmark': '',
      'Phone Number': 9398114370,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,KAPU NESTAM',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 28,
      'House Number': '25/266',
      'Citizen Name': 'Sangati Lakshmi',
      'Location and Landmark': '',
      'Phone Number': 8096829051,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 29,
      'House Number': '25/266-28',
      'Citizen Name': 'Usha Dudekula',
      'Location and Landmark': '',
      'Phone Number': 9542383944,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 30,
      'House Number': '25/266',
      'Citizen Name': 'Repalle Nagarjuna',
      'Location and Landmark': '',
      'Phone Number': 9160022672,
      'Family Details': '',
      'Scheme Availed': null,
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 31,
      'House Number': '25/266',
      'Citizen Name': 'Maram Ravikumar',
      'Location and Landmark': '',
      'Phone Number': 9347755942,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 32,
      'House Number': '25/266',
      'Citizen Name': 'Saavidi Nandini',
      'Location and Landmark': '',
      'Phone Number': 6281949198,
      'Family Details': '',
      'Scheme Availed': 'TITCO,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 33,
      'House Number': '25/266',
      'Citizen Name': 'Derangulla Kothuramma',
      'Location and Landmark': '',
      'Phone Number': 8106066835,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,YSR CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 34,
      'House Number': '25/266-A',
      'Citizen Name': 'Kandukuri Ramulamma',
      'Location and Landmark': '',
      'Phone Number': 7702489391,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,YSR CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 35,
      'House Number': '25/266',
      'Citizen Name': 'Maram Manasa',
      'Location and Landmark': '',
      'Phone Number': 9701316063,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 36,
      'House Number': '25/264-D',
      'Citizen Name': 'Jalla Pedda Sivaiah',
      'Location and Landmark': '',
      'Phone Number': 7702910507,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEDODU,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 37,
      'House Number': '25/266-D-A5-2',
      'Citizen Name': 'Vadde Thimmulu',
      'Location and Landmark': '',
      'Phone Number': 7893474096,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 38,
      'House Number': '25/266',
      'Citizen Name': 'Machani Nagulu',
      'Location and Landmark': '',
      'Phone Number': 8790890683,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 39,
      'House Number': '25/266',
      'Citizen Name': 'Lakshmi Devi',
      'Location and Landmark': '',
      'Phone Number': 8688116388,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEDODU,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 40,
      'House Number': '25/264',
      'Citizen Name': 'Shek Ramija Bee',
      'Location and Landmark': '',
      'Phone Number': 9989003184,
      'Family Details': '',
      'Scheme Availed': 'CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 41,
      'House Number': '25/266',
      'Citizen Name': 'Kurnisala Salamma',
      'Location and Landmark': '',
      'Phone Number': 8790890683,
      'Family Details': '',
      'Scheme Availed': 'CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 42,
      'House Number': '25/260',
      'Citizen Name': 'Maddela Manemma',
      'Location and Landmark': '',
      'Phone Number': 8790890683,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 43,
      'House Number': '25/266-H23',
      'Citizen Name': 'Racham Naga Laxmamma',
      'Location and Landmark': '',
      'Phone Number': 9392861188,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 44,
      'House Number': '25/265-A',
      'Citizen Name': 'Srimantha Balaiah',
      'Location and Landmark': '',
      'Phone Number': 9160354172,
      'Family Details': '',
      'Scheme Availed': 'CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 45,
      'House Number': '25/266',
      'Citizen Name': 'Soga Raju Pullamaraju',
      'Location and Landmark': '',
      'Phone Number': 8341021967,
      'Family Details': '',
      'Scheme Availed': 'VIDYA KANUKA,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 46,
      'House Number': '25-143',
      'Citizen Name': 'Pebbisetty Radha',
      'Location and Landmark': '',
      'Phone Number': 8639799529,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 47,
      'House Number': '25/266',
      'Citizen Name': 'Shaik Madarsa',
      'Location and Landmark': '',
      'Phone Number': 8297675179,
      'Family Details': '',
      'Scheme Availed': 'VAAHANAMITRA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 48,
      'House Number': '25/264',
      'Citizen Name': 'Derangula Balamma',
      'Location and Landmark': '',
      'Phone Number': 7036000186,
      'Family Details': '',
      'Scheme Availed': 'CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 49,
      'House Number': '25/262',
      'Citizen Name': 'Kurva Padmavati',
      'Location and Landmark': '',
      'Phone Number': 7893319958,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 50,
      'House Number': '25/266/29-B',
      'Citizen Name': 'Rayasam Srinavasulu',
      'Location and Landmark': '',
      'Phone Number': 9392861188,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 51,
      'House Number': '25/266',
      'Citizen Name': 'Selam Subbamma',
      'Location and Landmark': '',
      'Phone Number': 9100751259,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,TITCO',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 52,
      'House Number': '25-143',
      'Citizen Name': 'Pabbisetty Rangamma',
      'Location and Landmark': '',
      'Phone Number': 8639799529,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 53,
      'House Number': '25/260-B',
      'Citizen Name': 'Thamadapalle Srinivasulu',
      'Location and Landmark': '',
      'Phone Number': 9573775433,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEDODU,AMMA VODI ,YSR PENSION KANUKA VIDYA KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 54,
      'House Number': '25/266-28-2',
      'Citizen Name': 'Dudekula Hussain Babu',
      'Location and Landmark': '',
      'Phone Number': 9290261747,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 55,
      'House Number': '25/266',
      'Citizen Name': 'Muddas Kumari',
      'Location and Landmark': '',
      'Phone Number': 9182407086,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 56,
      'House Number': '25/262',
      'Citizen Name': 'Jillella Maddamma',
      'Location and Landmark': '',
      'Phone Number': 6304609919,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 57,
      'House Number': '25/259C',
      'Citizen Name': 'Chindakuri Hussainamma',
      'Location and Landmark': '',
      'Phone Number': 8886083744,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 58,
      'House Number': '25/264',
      'Citizen Name': 'Vadde Pallavi',
      'Location and Landmark': '',
      'Phone Number': 7036000186,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 59,
      'House Number': '25/266-2B',
      'Citizen Name': 'Laxmidevi',
      'Location and Landmark': '',
      'Phone Number': 9581014375,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 60,
      'House Number': '25/266',
      'Citizen Name': 'Challa Ranga Swamy',
      'Location and Landmark': '',
      'Phone Number': 6303743548,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEYUTHA,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 61,
      'House Number': '25/266',
      'Citizen Name': 'Shaik Haseena',
      'Location and Landmark': '',
      'Phone Number': 7730844912,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 62,
      'House Number': '25/266-25-A',
      'Citizen Name': 'Shaik Reshma',
      'Location and Landmark': '',
      'Phone Number': 9573664853,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 63,
      'House Number': '25/266',
      'Citizen Name': 'Shaik Kasim Bee',
      'Location and Landmark': '',
      'Phone Number': 9949192510,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA,YSR CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 64,
      'House Number': '25/266-B',
      'Citizen Name': 'Shaik Reshma',
      'Location and Landmark': '',
      'Phone Number': 9949192510,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 65,
      'House Number': '25/266',
      'Citizen Name': 'Vade Venkata Laxmamma',
      'Location and Landmark': '',
      'Phone Number': 9160793297,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEYUTHA,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 66,
      'House Number': '25/262-E',
      'Citizen Name': 'Shaik Muntaz',
      'Location and Landmark': '',
      'Phone Number': 8886307629,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEYUTHA,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 67,
      'House Number': '25/266-B',
      'Citizen Name': 'Chakali Ranganna',
      'Location and Landmark': '',
      'Phone Number': null,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 68,
      'House Number': '25/266-A1',
      'Citizen Name': 'Segu Parimela',
      'Location and Landmark': '',
      'Phone Number': 7036000165,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 69,
      'House Number': '25/264',
      'Citizen Name': 'Tali Kota Bharathi',
      'Location and Landmark': '',
      'Phone Number': 8977506866,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 70,
      'House Number': '25/266',
      'Citizen Name': 'Vadde Sunkamma',
      'Location and Landmark': '',
      'Phone Number': null,
      'Family Details': '',
      'Scheme Availed': 'YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 71,
      'House Number': '25/262',
      'Citizen Name': 'Gurrala Malleshwari',
      'Location and Landmark': '',
      'Phone Number': 9642425983,
      'Family Details': '',
      'Scheme Availed': 'TITCO,AMMA VODI ,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 72,
      'House Number': '25/266-A',
      'Citizen Name': 'Aalamuru Sreeramulu',
      'Location and Landmark': '',
      'Phone Number': 9949652290,
      'Family Details': '',
      'Scheme Availed': 'YSR CHEYUTHA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 73,
      'House Number': '25/266',
      'Citizen Name': 'V Maddamma',
      'Location and Landmark': '',
      'Phone Number': 9052643577,
      'Family Details': '',
      'Scheme Availed': 'AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 74,
      'House Number': '25/266',
      'Citizen Name': 'Momin Munne',
      'Location and Landmark': '',
      'Phone Number': 7794952909,
      'Family Details': '',
      'Scheme Availed': 'TITCO,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 75,
      'House Number': '25/266-28',
      'Citizen Name': 'Epuri Lakshmi Narasamma',
      'Location and Landmark': '',
      'Phone Number': 8374466747,
      'Family Details': '',
      'Scheme Availed': 'TITCO,YSR CHEYUTHA ,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 76,
      'House Number': '25/262-E17',
      'Citizen Name': 'N.Venkateswaramma',
      'Location and Landmark': '',
      'Phone Number': 7661879665,
      'Family Details': '',
      'Scheme Availed': 'TITCO,YSR CHEYUTHA ,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 77,
      'House Number': '25/260-B',
      'Citizen Name': 'Shaik Mabuni',
      'Location and Landmark': '',
      'Phone Number': 9182022115,
      'Family Details': '',
      'Scheme Availed': 'NO SCHEMES',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 78,
      'House Number': '25/262',
      'Citizen Name': 'Golla Prasad',
      'Location and Landmark': '',
      'Phone Number': 9985221249,
      'Family Details': '',
      'Scheme Availed': 'TITCO,AMMA VODI ,YSR VASATHI DEEVENA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 79,
      'House Number': '25/262',
      'Citizen Name': 'Boppula Rama',
      'Location and Landmark': '',
      'Phone Number': 9502737934,
      'Family Details': '',
      'Scheme Availed': 'TITCO,YSR CHEDODU ,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 80,
      'House Number': '25/266-D',
      'Citizen Name': 'Doodekula Hussain Bee',
      'Location and Landmark': '',
      'Phone Number': 9948410223,
      'Family Details': '',
      'Scheme Availed': 'TITCO,YSR CHEYUTHA ,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 81,
      'House Number': '25/262',
      'Citizen Name': 'D.yellasubbamma',
      'Location and Landmark': '',
      'Phone Number': 8074341873,
      'Family Details': '',
      'Scheme Availed': 'TITCO,YSR CHEDODU ,YSR PENSION KANUKA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 82,
      'House Number': '25/262',
      'Citizen Name': 'Chakali Narayanamma',
      'Location and Landmark': '',
      'Phone Number': 9398057928,
      'Family Details': '',
      'Scheme Availed': 'TITCO,AMMA VODI',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    },
    {
      id: 83,
      'House Number': '25/266-29A',
      'Citizen Name': 'Rayasam Vijayalakshmi',
      'Location and Landmark': '',
      'Phone Number': 6303623495,
      'Family Details': '',
      'Scheme Availed': 'YSR VASATHI DEEVENA,YSR CHEYUTHA ,YSR VIDYA DEEVENA',
      'Eligble but Schemes not Availed': '',
      'Volunteer Feedback': '',
      'House Hold Feedback': '',
      Grivance: '',
      'Issue mentioned date': '',
      'Issue resolved date': '',
      'what actually happend': '',
      'Case Study': '',
      'Last Updated': '',
      Comments: ''
    }
  ]
  

  

  const SchemesData = ["Engineering","Health and sanitation","Entomology","Town Planning","Advertisement","Sports","Revenue (Property Tax)","Information Technology"
  ,"Construction and Demolition Waste","Electrical","Swachhta","Veterinary","Urban Biodiversity","Estate","Urban Community Development","Elections","Land Acquisition","Fire Prevention Wing"]

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
  
    const gridStyle = { minHeight: "80vh" };
  
    const emptySource = [];
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
                    SchemesData.map((val)=>
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

import React, { useState } from 'react'
import "./HomePage.css"
import {Avatar, Button, Grid, Menu, MenuList, Paper, TextField, Typography} from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AccordianHold from '../accordianhold/AccordianHold';
import Footer from "../footer/Footer"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const HomePage = () => {
  const [anchorEl,setAnchorEl]= useState(null);
  const [anchorElTwo,setAnchorElTwo]= useState(null);

  const handleOpenMenu=e=>{
    setAnchorEl(e.currentTarget);
  }
  const handleMenuClose=()=>{
    setAnchorEl(null);
  }



  const handleOpenMenuTwo=e=>{
    setAnchorElTwo(e.currentTarget);
  }
  const handleMenuCloseTwo=()=>{
    setAnchorElTwo(null);
  }







  const [openSignUp, setOpenSignUp] = useState(false);
  const handleClickOpenSignUp = () => {
      setOpenSignUp(true);
    };
  
    const handleCloseSignUp = (value) => {
      setOpenSignUp(false);
    };

    const [openLogIn, setOpenLogIn] =useState(false);
    const handleClickOpenLogIn = () => {
        setOpenLogIn(true);
      };
    
      const handleCloseLogIn = (value) => {
        setOpenLogIn(false);
      };
  
      const [isDeveloper, setIsDeveloper] =useState(false);
      const handleClickSetIsDeveloper = () => {
        setOpenSignUp(false);
        setIsDeveloper(true);
        };
      
        const handleCloseSetIsDeveloper = (value) => {
          setOpenSignUp(false);
          setIsDeveloper(false);
        };




      const [isCompany, setIsCompany] =useState(false);
      const handleClickSetIsCompany = () => {
        setIsCompany(true);
        };
      
        const handleCloseSetIsCompany = (value) => {
          setOpenSignUp(false);
          setIsCompany(false);
  
        };
/////////////////////////////////////////////SIGNUP///////////////////////////////////////////////////////////
        const [nameOne,setNameOne]=useState("");
        const [emailOne,setEmailOne]=useState("");
        const [passwordOne,setPasswordOne]=useState("");


        async function registerUser(event) {
          event.preventDefault()
      
          const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nameOne,
              emailOne,
              passwordOne,
            }),
          })
              console.log(response);
              setOpenSignUp(false);
              setIsCompany(false);
              setIsDeveloper(false);
          }

//////////////////////////////////////////////LOGIN///////////////////////////////////////////////////////////
        const [emailTwo,setEmailTwo]=useState("");
        const [passwordTwo,setPasswordTwo]=useState("");
        const [userName,setUserName]=useState("");

        const [userLoggedIn,setUserLoggedIn]=useState(false);
        
        async function loginUser(event) {
          event.preventDefault()
      
          const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              emailTwo,
              passwordTwo,
            }),
          })
      
          const data = await response.json()
      
          if (data.user) {
            setOpenLogIn(false)
            setUserLoggedIn(true);
            setUserName(data.name);
          } else {
            alert('Please check your username and password')
          }
        }
  return (
    <div className='home-page'>

<div className='nav'>
      <div className='title'>arc()</div>


      <Menu id='menu' anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      > 
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>How Arc Works</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Remote Jobs</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Remote Companies</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Resume Builder</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Resources</MenuList>
      </Menu>





      <Menu id='menu2' anchorEl={anchorElTwo}
      open={Boolean(anchorElTwo)}
      onClose={handleMenuCloseTwo}
      onClick={handleMenuCloseTwo }
      > 
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Why Choose Arc</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>How we vet Developers</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Top Developers</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Our Clients</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Resources</MenuList>
      </Menu>
      <div className='dev'><Button 
      aria-controls='menu'
      onClick={handleOpenMenu}
      style={{
          borderRadius: 5,
          border: "white bold 1px",
          backgroundColor: "black",
          padding: "5px 5px",
          fontSize: "15px",
          color:"white"
      }}>For developers<ArrowDropDownIcon /></Button></div>


      <div className='comp'><Button
      aria-controls='menu2'
      onClick={handleOpenMenuTwo}
      style={{
        borderRadius: 5,
        border: "white bold 1px",
        backgroundColor: "black",
        padding: "5px 5px",
        fontSize: "15px",
        color:"white"
    }}
      >For companies<ArrowDropDownIcon /></Button></div>


      {userLoggedIn?<div>
        <Avatar style={{position:"fixed",top:"20px",right:"15px"}}
          alt="Remy Sharp">{userName.charAt(0)}</Avatar>
      </div>:<div>
      <div className='login'><Button
        onClick={handleClickOpenLogIn}
        style={{
          borderRadius: 5,
          border: "white bold 1px",
          backgroundColor: "black",
          padding: "5px 5px",
          fontSize: "15px",
          color:"white",
      }}
        >Log In</Button></div>

        <div className='signup'><Button
        aria-controls='signup'
        onClick={handleClickOpenSignUp}
        style={{
          borderRadius: 5,
          border: "white bold 1px",
          backgroundColor: "black",
          padding: "5px 5px",
          fontSize: "15px",
          color:"white"
      }}>Sign Up</Button></div>
        </div>}

    </div>







    <div className='first'>
      <div className='text'>
        <h1>Radically different <span style={{backgroundClip: "text",
          backgroundColor: "rgb(189, 0, 255)",
    backgroundImage: "linear-gradient(90deg, rgb(0, 163, 255) 0%, rgb(189, 0, 255) 50%, rgb(0, 163, 255) 100%)",
    animation: "3s ease-in-out 0s infinite normal none running"}}>remote job search</span> where companies apply to you</h1>
        <div className='btn'>
        <Button
    style={{
        borderRadius: 15,
        backgroundColor: "white",
        padding: "18px 36px",
        fontSize: "18px",
        color:"black"
    }}
    variant="contained"
    >Join Arc Today
    </Button>
    </div>
      </div>
    </div>
    <div className='centered-data'>
      <div style={{
        marginBottom:"80px"
      }}>
        <h1 style={{marginTop:"80px", marginBottom:"10px"}}>Get featured to the companies and land a remote job in 14 days</h1>
        <h4><CheckIcon 
        style={{marginRight:"5px"}}
        />For senior developers looking for permanent remote roles</h4>
        <h4><CheckIcon 
        style={{marginRight:"5px"}}/>Remote jobs at fast-growing tech companies and startups</h4>
      </div>
      <div data-aos="fade-up"  style={{marginBottom:"150px"}}>
        <Paper style={{
          padding:"100px"
        }}>
            <Grid container>
                <Grid lg="5" style={{marginRight:"100px"}}>
                    <div>
                        <h2
                        style={{
                          display:"inline-block",
                          backgroundClip: "text",
          backgroundColor: "rgb(189, 0, 255)",
    backgroundImage: "linear-gradient(90deg, rgb(0, 163, 255) 0%, rgb(189, 0, 255) 50%, rgb(0, 163, 255) 100%)",
    animation: "3s ease-in-out 0s infinite normal none running",
    color:"white",
    fontSize:"50px"
                        }}
                        >Effortless</h2>
                    </div>
                    <div>
                        <h1 style={{marginBottom:"100px"}}>No job applications. Speak directly to hiring managers.</h1>
                        <h4>Stop sending resumes into the abyss and getting spammed by recruiters. Get your profile featured to hiring managers, and get invited directly to interviews.</h4>
                    </div>
                </Grid>
                <Grid lg="5" style={{marginLeft:"15px"}}>
                    <img src="https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="first" width="400px" height="400px"/>
                </Grid>
            </Grid>
        </Paper>
    </div>


    <div style={{marginBottom:"150px"}}>
        <Paper style={{
          padding:"100px"
        }}>
            <Grid container>
                <Grid lg="5" style={{marginRight:"100px"}}>
                    <div>
                        <h2
                        style={{
                          display:"inline-block",
                          backgroundClip: "text",
          backgroundColor: "rgb(189, 0, 255)",
    backgroundImage: "linear-gradient(90deg, rgb(0, 163, 255) 0%, rgb(189, 0, 255) 50%, rgb(0, 163, 255) 100%)",
    animation: "3s ease-in-out 0s infinite normal none running",
    color:"white",
    fontSize:"50px"
                        }}
                        >Fast and Effective</h2>
                    </div>
                    <div>
                        <h1 style={{marginBottom:"100px"}}>Receive multiple offers in 2 weeks.</h1>
                        <h4>Meet tech companies that know your preferences and expected salary up front. This saves everyone time and increases the intent to hire for each interview.</h4>
                    </div>
                </Grid>
                <Grid lg="5" style={{marginLeft:"15px"}}>
                    <img src="https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="first" width="400px" height="400px"/>
                </Grid>
            </Grid>
        </Paper>
    </div>


    <div style={{marginBottom:"0"}}>
        <Paper style={{
          padding:"100px"
        }}>
            <Grid container>
                <Grid lg="5" style={{marginRight:"100px"}}>
                    <div>
                        <h2
                        style={{
                          display:"inline-block",
                          backgroundClip: "text",
          backgroundColor: "rgb(189, 0, 255)",
    backgroundImage: "linear-gradient(90deg, rgb(0, 163, 255) 0%, rgb(189, 0, 255) 50%, rgb(0, 163, 255) 100%)",
    animation: "3s ease-in-out 0s infinite normal none running",
    color:"white",
    fontSize:"50px"
                        }}
                        >Personal Support</h2>
                    </div>
                    <div>
                        <h1 style={{marginBottom:"100px"}}>Talent partners help you stand out across borders.</h1>
                        <h4>Yes, even senior developers benefit from coaching. Get free, unbiased support from our talent partners to review your profile, prep for interviews, and negotiate a higher salary.</h4>
                    </div>
                </Grid>
                <Grid lg="5" style={{marginLeft:"15px", marginTop:"40px"}}>
                    <img src="https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="first" width="400px" height="400px"/>
                </Grid>
            </Grid>
        </Paper>
    </div>

        <Button
    style={{
      margin:"100px 0",
        borderRadius: "5",
        backgroundColor: "blue",
        padding: "18px 36px",
        fontSize: "18px",
        color:"white",
    }}
    variant="contained"
    >Join Arc Today
    </Button>


    </div>
        {openSignUp?
           <div className='appearing-item-a' id="signup">
             <div className="main-apearing-a">
        <Paper style={{
            padding:"100px"
        }}>
            <Grid container>
                <Grid lg="6">
                    <Typography variant="h4">
                    Effortlessly hire top remote developers
                    </Typography>
                    <Typography variant="h6" >
                    <ul>
                        <li>Hire in 72 hours (freelance) and 14 days (permanent).</li>
                        <li>Only 2.3% pass our technical & behavioral assessments.</li>
                    </ul>
                    </Typography>
                    
                </Grid>
                <Grid lg="6">
                    <div style={{
                      textAlign:"center"
                    }}>
                    <CloseIcon onClick={handleCloseSignUp} style={{
                      position:"relative",
                      top:"-75px",
                      left:"62%",
                      color:"black"
                    }} />
                    <Typography variant="h5">
                    Sign up as a developer or company
                    </Typography>
                    <br></br>
                    <Button variant="outlined" color="secondary"
                    onClick={handleClickSetIsDeveloper}
                    style={{
                      margin:"5px",
                      padding:"20px",
                        display:"inline"
                    }}>
                        I am a developer
                        <Typography variant="subtitle2"
                        >looking for work</Typography>
                    </Button>


                        <Button variant="outlined" color="secondary"
                        onClick={handleClickSetIsCompany}
                        style={{
                          margin:"5px",
                          padding:"20px",
                            display:"inline",
                        }}>
                        I am a company
                        <Typography variant="subtitle2" >hiring developers</Typography>
                        </Button>

                    </div>

                </Grid>
            </Grid>
        </Paper>
        </div>
        </div>
        :null}


{openLogIn?
           <div className='appearing-item-a' id="signup">
             <div className="main-apearing-a">
        <Paper style={{
            padding:"100px"
        }}>
            <Grid container>
                <Grid lg="6" style={{
                  textAlign:"center"
                }}>
                    <Typography variant="h4">
                    Join Arc to get access to
                    </Typography >
                    <Typography variant="h6">
                    <ul>
                        <li>No job applications. Speak directly to hiring managers.</li>
                        <li>Receive multiple offers from companies in 2 weeks.</li>
                        <li>Work and earn your way.</li>
                    </ul>
                    </Typography>
                    
                </Grid>
                <Grid lg="6">
                    <div style={{
                      textAlign:"center"
                    }}>
                    <CloseIcon onClick={handleCloseLogIn} style={{
                      position:"relative",
                      top:"-75px",
                      left:"62%",
                      color:"black"
                    }} />
                    <TextField
                    value={emailTwo}
                    onChange={(e)=>{setEmailTwo(e.target.value)}}
                    style={{
                      width:"100%",
                      margin:"15px"
                    }}
                     id="outlined-basic" label="Email" variant="outlined" />
                    <TextField
                    value={passwordTwo}
                    onChange={(e)=>{setPasswordTwo(e.target.value)}}
                    style={{
                      width:"100%",
                      margin:"15px"
                    }}
                     id="outlined-basic" label="Password" variant="outlined" />
                      <Button
                      onClick={loginUser}
                      style={{
                        backgroundColor:"blue",
                        padding:"10px",
                        width:"80%",
                        color:"white",
                        marginTop:"9px"
                      }}
                      >
                        Login
                      </Button>

                    </div>

                </Grid>
            </Grid>
        </Paper>
        </div>
        </div>
        :null}

{isDeveloper?
           <div className='appearing-item-a' id="signup">
             <div className="main-apearing-a">
        <Paper style={{
            padding:"100px"
        }}>
            <Grid container>
                <Grid lg="6">
                    <Typography variant="h3">
                    Join Arc to get access to
                    </Typography>
                    <Typography variant="h6">
                    <ul>
                        <li>No job applications. Speak directly to hiring managers.</li>
                        <li>Receive multiple offers from companies in 2 weeks.</li>
                        <li>Work and earn your way.</li>
                    </ul>
                    </Typography>
                    
                </Grid>
                <Grid lg="6">
                    <div style={{
                      textAlign:"center"
                    }}>
                    <CloseIcon onClick={handleCloseSetIsDeveloper} style={{
                      position:"relative",
                      top:"-75px",
                      left:"62%",
                      color:"black"
                    }} />
                     <TextField
                     value={nameOne}
                     onChange={(e)=>{setNameOne(e.target.value)}}
                    style={{
                      width:"100%",
                      margin:"8px"
                    }}
                     id="outlined-basic" label="Name" variant="outlined" />
                    <TextField
                    value={emailOne}
                    onChange={(e)=>{setEmailOne(e.target.value)}}
                    style={{
                      width:"100%",
                      margin:"8px"
                    }}
                     id="outlined-basic" label="Email" variant="outlined" />
                    <TextField
                    value={passwordOne}
                     onChange={(e)=>{setPasswordOne(e.target.value)}}
                    style={{
                      width:"100%",
                      margin:"8px"
                    }}
                     id="outlined-basic" label="Password" variant="outlined" />
                      <Button
                      onClick={registerUser}
                      style={{
                        backgroundColor:"blue",
                        padding:"10px",
                        width:"80%",
                        color:"white",
                        marginTop:"9px"
                      }}
                      >
                        Signup
                      </Button>

                    </div>

                </Grid>
            </Grid>
        </Paper>
        </div>
        </div>
        :null}


{isCompany?
           <div className='appearing-item-a' id="signup">
             <div className="main-apearing-a">
        <Paper style={{
            padding:"100px"
        }}>
            <Grid container>
                <Grid lg="6">
                    <Typography variant="h3">
                    Join Arc to get access to
                    </Typography>
                    <Typography variant="h6">
                    <ul>
                        <li>No job applications. Speak directly to hiring managers.</li>
                        <li>Receive multiple offers from companies in 2 weeks.</li>
                        <li>Work and earn your way.</li>
                    </ul>
                    </Typography>
                    
                </Grid>
                <Grid lg="6">
                    <div style={{
                      textAlign:"center"
                    }}>
                    <CloseIcon onClick={handleCloseSetIsCompany} style={{
                      position:"relative",
                      top:"-75px",
                      left:"62%",
                      color:"black"
                    }} />
                     <TextField
                     onChange={(e)=>{setNameOne(e.target.value)}}
                     style={{
                      width:"100%",
                      margin:"8px"
                    }}
                     id="outlined-basic" label="Name" variant="outlined" />
                    <TextField
                    onChange={(e)=>{setEmailOne(e.target.value)}}
                    style={{
                      width:"100%",
                      margin:"8px"
                    }}
                     id="outlined-basic" label=" Your Company Email" variant="outlined" />
                    <TextField
                    onChange={(e)=>{setPasswordOne(e.target.value)}}
                    style={{
                      width:"100%",
                      margin:"8px"
                    }}
                     id="outlined-basic" label="Password" variant="outlined" />
                      <Button
                      onClick={registerUser}
                      style={{
                        backgroundColor:"blue",
                        padding:"10px",
                        width:"80%",
                        color:"white",
                        marginTop:"9px"
                      }}
                      >
                        Signup
                      </Button>

                    </div>

                </Grid>
            </Grid>
        </Paper>
        </div>
        </div>
        :null}
    <AccordianHold />
    <Footer />
    </div>
  )
}
export default HomePage

import React from 'react'
import "./HomePage.css"
import {Button, Grid, Paper} from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
const HomePage = () => {
  return (
    <div className='home-page'>
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
    </div>
  )
}
export default HomePage
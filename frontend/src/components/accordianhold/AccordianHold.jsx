import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./AccordianHold.css";
import { Button, Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin :"auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AccordianHold = () => {
  const classes = useStyles();
  return (
    <div className='main'>
<div className={classes.root}>
  <Typography variant="h2" style={{margin:"100px"}} >Want to know more?</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Who is eligible to join Arc?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All developers can join Arc. But you must meet the following criteria to get featured for permanent remote jobs:
          <ul>
            <li>
            <b>Based in:</b> North America, Central America, South America, and Europe. Opening to Asia and other regions soon, so stay tuned!</li>
            <li>
            <b>Decipline:</b> Front-end, Back-end, Full-stack and Mobile (iOS, Android, Hybrid).</li>
            <li>
            <b>Experience:</b> Mid-level to senior developers.</li>
            <li>We still encourage you to sign up for Arc even if you do not meet the above criteria. All users get access to remote job discovery, resume builder, salary explorer, and virtual events for developers. You will also be eligible for Arc Freelance jobs (Verified Developers only). Our team will notify you as soon as we start featuring developers in your region/discipline/experience level.</li>
          </ul>
          </Typography>
        </AccordionDetails>



      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Do I need to pay anything?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, Arc is <b>completely free</b> for developers. There is no cost to use the platform. And there is no cost to you when you land a job through Arc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Who are the hiring companies?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <ul>
             <li>Employers who use Arc to hire developers include Automattic, Spotify, Hims, HubSpot, and many more. We also work with many other global tech companies and fast-growing startups.</li>
             <li>If you're an employer, learn how Arc can help you hire remote technical talent faster <a href="null">here</a></li>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What does the vetting process look like?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <ul>
             <li>The goal of our vetting process is to check how well you communicate in English and to verify your technical skills.</li>
             <li>After submitting your application to join Arc, you will be invited to a “Quick Chat” with our team. During this call, you will introduce yourself and answer questions about your background and experience to help our team verify your eligibility.</li>
             <li>Then, you will take a technical skills assessment. We know that developers have different preferences for these kinds of tests, so you are given the choice: complete a coding challenge OR pass an online technical interview.</li>
             <li>Note: The vetting process described above applies to getting featured on Arc permanent remote jobs.<i>There may be additional requirements to be eligible for Arc Freelance and Fast Apply Jobs.</i></li>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What happens if I don't pass the vetting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you do not pass the vetting process including the technical assessment, you still get access to other remote job search tools including remote job discovery, resume builder, salary explorer, and virtual events for developers. You are eligible to reapply again after six months.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Can I decline the interview request?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. If a company in the program invites you to an interview but you aren’t interested in the opportunity, you are free to decline the request.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>After 2-week period, what happens next?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After you pass the vetting process, you will get featured for two weeks. After the first interview cycle for that round has concluded, you become eligible to get featured again in a future round. Speak to your talent partner to discuss this. You also get access to Arc’s remote job discovery and other tools to accelerate your remote career search.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Can I hide my profile from current or previous companies?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. We give you the option to block specific companies from seeing your profile in case your current or past employers are using our platform.
          </Typography>
        </AccordionDetails>
      </Accordion>

       
      <Accordion >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Can Arc help me find contract and freelance jobs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>Yes. While Arc focuses on helping developers land permanent remote jobs, we also offer contract roles (short-term and long-term) as well as contract-to-hire positions.</li>
            <li>If you are interested, please indicate that you are open to contract roles when you <a href="null">sign up</a> for Arc. Arc users who have opted into seeing contract roles can discover them via the dashboard.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

       
      <Accordion >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Can non-developers join Arc?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <ul>
          <li>Our current product focuses on helping software developers find great remote jobs. Given our mission to help anyone build an amazing remote career, we do plan to explore new ways to help more people in more roles work remotely in the near future.</li>
          <li>To hear about future Arc offerings — and learn about working and managing remotely — sign up for the Arc Newsletter.</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

       
      <Accordion >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What is Arc?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Arc is a radically different remote job search platform for developers. We connect developers worldwide with tech companies hiring remotely.
          </Typography>
        </AccordionDetails>
      </Accordion>

       
      <Accordion >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does Arc works?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <ol>
           <li>Sign up and complete the vetting process.</li>
           <li>Your profile gets featured to companies for two weeks.</li>
           <li>Receive interview requests in your inbox. Choose who to interview with.</li>
           <li>Receive offers and get hired!</li>
         </ol>
         Throughout this process, you have access to 1:1 support from our talent partners to help you stand out to hiring managers, prep for interviews, maximize your offer, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>

       
      <Accordion >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How is Arc "radically" different platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Remote work — and working from anywhere — means more equal access to great opportunities. Yet actually getting hired for a remote developer job is still hard for many. Manual remote job search is tedious, competition is fierce, and it can be impossible to get your profile noticed. Arc makes it easier for you to land your dream remote job in the following ways:
        <ol>
          <li>
            <b>We give you direct access to hiring managers, without job applications or recruiters in between.</b>The hiring managers who will contact you through Arc are looking for developers to join their company right now. This means you won’t have to manually apply to jobs or be spammed with outreach from recruiters who don’t really understand the role, team, or culture.
          </li>
          <li>
          <b>We vet both developers and companies for a highly-curated experience to ensure both quality and intent.</b>Meet quality companies that already know your preferences and expected salary upfront. This saves everyone time, keeps you focused on getting hired, and allows you to start negotiating directly.
          </li>
          <li>
          <b>We vet your technical skills to a global standard to help you get hired from anywhere.</b>
          Technical skills can vary depending on your education, experience, and where you are based. So our vetting process helps vouch for your abilities to help you compete in the global talent market.
          </li>
          <li>
          <b>We help you discover interesting new remote opportunities.</b>While you may know names like Automattic and Spotify (companies where developers in our network have landed jobs), we also introduce you to fast-growing startups and recently funded companies that you may not have considered or known about.
          </li>
          <li>
          <b>We offer unbiased support to help you stand out.</b>
          Our talent partners provide you with personalized support such as 1:1 profile reviews, interview preparation, salary negotiation, and global employment best practices.
          </li>
        </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    <div style={{width:"80%", margin:"auto"}} >
            <Grid container>
               <Grid lg="5" style={{margin:"40px"}}>
                    <Paper style={{
          padding:"50px"
          }}>
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
                        >Arc</h2>
                        <h1 style={{marginBottom:"100px"}}>Grow your career no matter where you live.</h1>
                        <div>
    <Button
    style={{
      margin:"5px 0 5px 80px",
        borderRadius: "5",
        padding: "18px 36px",
        fontSize: "18px",
        color:"blue",
    }}
    variant="outlined"
    >Join Arc Today
    </Button>
    </div>
                        </Paper>
                        </Grid>


                        <Grid lg="5" style={{margin:"40px"}}>
                    <Paper style={{
          padding:"50px"
          }}>
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
                        >Arc Freelance</h2>
                        <h1 style={{marginBottom:"100px"}}>Work and earn your way.
Find quality projects.</h1>
                        <div>
    <Button
    style={{
      margin:"5px 0 5px 80px" ,
        borderRadius: "5",
        padding: "18px 36px",
        fontSize: "18px",
        color:"blue",
    }}
    variant="outlined"
    >Sign Up now
    </Button>
    </div>
                        </Paper>
                        </Grid>

                    </Grid>

    </div>
 
    </div>
  )
}

export default AccordianHold
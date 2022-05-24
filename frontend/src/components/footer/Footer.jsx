import { Grid } from '@material-ui/core'
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div style={{width:"80%",margin:"auto"}}>
        <Grid container>
          <Grid lg="3">
            <ul>
              <li><h3>PRODUCTS</h3></li>
              <li><h5>Arc</h5></li>
              <li>The remote career platform for developers</li>
              <br></br>
              <li><h5>Codementor</h5></li>
              <li>Find a mentor to help you in real time</li>
            </ul>
          </Grid>
          <Grid lg="3">
          <ul>
              <li><h3>LINKS</h3></li>
              <li>About us</li>
              <li>Arc Careers - Hiring Now!</li>
              <li>Remote Junior Jobs</li>
              <li>Developer Salaries</li>
              <li>Career Success Stories</li>
              <li>Developer Career Blog</li>
            </ul>
          </Grid>
          <Grid lg="3">
          <ul>
              <li><h3>JOBS BY EXPERTISE</h3></li>
              <li>Remote Front End Developer Jobs</li>
              <li>Remote Back End Developer Jobs</li>
              <li>Remote Full Stack Developer Jobs</li>
              <li>Remote DevOps Engineer Jobs</li>
              <li>Remote Mobile Developer Jobs</li>
              <li>Remote Data Scientist Jobs</li>
              <li>Remote Game Developer Jobs</li>
              <li>Remote Software Architect Jobs</li>
              <li>Remote Data Engineer Jobs</li>
              <li>Remote Blockchain Developer Jobs</li>
            </ul>
          </Grid>
          <Grid lg="3">
          <ul>
              <li><h3>JOBS BY TECH STACKS</h3></li>
              <li>Remote AWS Developer Jobs</li>
              <li>Remote DevOps Engineer Jobs</li>
              <li>Remote Java Developer Jobs</li>
              <li>Remote Javascript Developer Jobs</li>
              <li>Remote Python Developer Jobs</li>
              <li>Remote React Developer Jobs</li>
              <li>Remote Shopify Developer Jobs</li>
              <li>Remote SQL Developer Jobs</li>
              <li>Remote Unity Developer Jobs</li>
              <li>Remote Wordpress Developer Jobs</li>
            </ul>
          </Grid>

        </Grid>

      </div>
    </div>
  )
}

export default Footer
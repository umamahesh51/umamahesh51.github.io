import React from 'react';
import { Container, Typography, Box, Card, CardMedia, Grid2, Avatar } from '@mui/material';
import  {ReactTyped} from 'react-typed';
import profile from './20240816_135922~2.jpg';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import AmazonLogo from '../icons/Amazon_logo.svg';    // Add your own logo paths
import ServiceNowLogo from '../icons/NOW.svg';
import FactSetLogo from '../icons/factset-vector-logo.svg';
const Home = () => {
  return (
    <Container>
      <Grid2 container spacing={2} alignItems="center">
        {/* Text Section */}
        <Grid2 size={8}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3">
              <ReactTyped
                strings={[
                  "Hi, I'm Umamaheswararao Tumma",
                  "SDE II at Amazon India"
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </Typography>
            <Typography variant="h6" sx={{ my: 3 }}>
              I specialize in building scalable software solutions and have a passion for creating efficient and robust systems.
            </Typography>
          </Box>
        </Grid2>

        {/* Image Section */}
        <Grid2 size={4}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="Image of Umamaheswararao Tumma"
                src={profile}
              />
            </Card>
          </Box>
        </Grid2>
        <Grid2 size={12}>
        <Typography variant="h4" sx={{ textAlign: 'center', my: 5 }}>
          My Journey
        </Typography>
        <Timeline position="alternate">
          
          {/* Amazon Experience */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              October 2022 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{bgcolor:'white'}}>
                <Avatar src={AmazonLogo} alt="Amazon Logo" sx={{ width: 40, height: 40, bgcolor:'white'}}/>
              </TimelineDot>
              <TimelineConnector sx={{bgcolor:'green', height:'40px'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                Amazon India
              </Typography>
              <Typography>Software Development Engineer II</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* ServiceNow Experience */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              March 2021 - October 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{bgcolor:'white'}}>
                <Avatar src={ServiceNowLogo} alt="ServiceNow Logo" sx={{ width: 40, height: 40, bgcolor:'white' }} />
              </TimelineDot>
              <TimelineConnector sx={{bgcolor:'green', height:'40px'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                ServiceNow
              </Typography>
              <Typography>Software Developer II</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* FactSet Experience */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              June 2018 - February 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{bgcolor:'white'}}>
                <Avatar src={FactSetLogo} alt="FactSet Logo" sx={{ width: 40, height: 40, bgcolor:'white' }} />
              </TimelineDot>
              <TimelineConnector sx={{bgcolor:'green', height:'40px'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                FactSet
              </Typography>
              <Typography>Software Engineer II</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Portware (FactSet) Experience */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Jan 2018 - March 2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{bgcolor:'white'}}>
                <Avatar src={FactSetLogo} alt="factSet Logo" sx={{ width: 40, height: 40, bgcolor:'white' }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                Portware A FactSet company
              </Typography>
              <Typography>Software Developer Internship</Typography>
            </TimelineContent>
          </TimelineItem>
          
        </Timeline>
      </Grid2>
      </Grid2>
    </Container>
  );
};

export default Home;
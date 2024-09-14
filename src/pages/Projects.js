import React from 'react';
import { Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Parking System in Mall',
    description: 'Developed a car parking system for malls using dynamic memory allocation.',
  },
  {
    title: 'Test Suites Graceful Shutdown',
    description: 'Created a tool to update test case statuses and stop running test suites.'
  },
  {
    title: 'Telegram Bot for Fact-Check',
    description: 'Implemented a bot for Fact-Check India, integrated with IFTTT.'
  },
];

const Projects = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ my: 5 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard title={project.title} description={project.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;

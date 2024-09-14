import React from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const skills = ['Java', 'React', 'Node.js', 'Jenkins', 'Maven', 'Git'];

const Skills = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 5 }}>Skills</Typography>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Skills;

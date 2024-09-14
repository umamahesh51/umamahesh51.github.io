import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Box sx={{ my: 5 }}>
                <Typography variant="h4">About Me</Typography>
                <Typography variant="body1" sx={{ my: 3 }}>
                    Hi, I'm Umamaheswararao Tumma, a passionate and results-driven Software Development Engineer II at Amazon India. With a strong foundation in software development, I specialize in building scalable, high-performance systems that solve real-world problems. Over the years, I’ve had the privilege of working with some of the top tech companies, including Amazon, ServiceNow, and FactSet, where I honed my skills in system design, optimization, and cloud technologies.

                </Typography>
                <Typography variant="body1" sx={{ my: 3 }}>
                    My Journey
                    I began my career with FactSet, where I developed complex solutions for financial services and optimized the performance of mission-critical systems. My journey continued at ServiceNow, where I took ownership of key projects, from design and implementation to deployment. Now, at Amazon, I’m building cutting-edge solutions that serve millions of users, constantly pushing myself to enhance system efficiency and scalability.

                </Typography>
                <Typography variant="body1" sx={{ my: 3 }}>
                    I believe in constant learning and improvement. That’s why I’m committed to staying at the forefront of technology, always looking for new ways to improve my craft and contribute to impactful projects. I thrive in environments where innovation meets collaboration, and I’m driven by a passion for creating robust, scalable systems that make a difference.

                    In my free time, I enjoy gym workouts, playing chess, and exploring new technologies to stay updated with the rapidly evolving tech landscape.
                </Typography>
            </Box>
        </Container>
    );
}

export default About;

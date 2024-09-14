import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
const Contact = () => {
    return (
        <Container>
                <Typography variant="h3" align='center'>Contact me</Typography>
                <List>
                    <ListItem>
                        <ListItemText><Typography variant="body1" sx={{ mt: 3 }}>
                            Email: <a href='mailto:umamaheswararaotumma@gmail.com'>umamaheswararaotumma@gmail.com</a>
                        </Typography></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText><Typography variant="body1" sx={{ mt: 3 }}>
                            LinkedIn: <a href="https://www.linkedin.com/in/umamaheswararao-tumma-3a0050130/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/umamaheswararao-tumma-3a0050130/</a>
                        </Typography></ListItemText>
                    </ListItem>

                </List>
        </Container>
    );
}

export default Contact;

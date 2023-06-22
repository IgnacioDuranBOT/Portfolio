import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/material';

const drawerWidth = 200;

function Navbar({navArrayLinks}) {
    return (
        <Container position="static">
        <Box margin="responsive" sx={{ display:'flex' }}>
        <React.Fragment>
        <Drawer
        sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:'#263238',
            display:{ xs:"none", sm:"none", md:"none", lg:"block"}
            },
        }}
        variant="permanent"
        anchor="left"
        >
        <Toolbar/>
            <List sx={{marginTop:12}}>
                {navArrayLinks.map((page) => (
                <Button
                key={page.title}
                to={page.id}
                component="a"
                href={page.path}
                sx={{ my: 2, color: 'white', display: 'flex', margin:'1rem' }}
                duration={500}
                offset={-70}
                >
                {page.title}
                </Button>
                ))}
            </List>    
        </Drawer>
        </React.Fragment>
        </Box>
        </Container>
    )
}    

export default Navbar;
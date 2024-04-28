import './review.css'
import Link from 'next/link'
import { 
  AppBar, Box, Toolbar, Typography, Button, IconButton, Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Layout({
  children,
}) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#FF3333' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/review" style={{ textDecoration: 'none', color: 'white' }}>
                Movie Review app
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ButtonShowcase from './components/ButtonShowcase'
import CheckboxShowcase from './components/CheckboxShowcase'
import TextFieldShowcase from './components/TextFieldShowcase'
import SelectShowcase from './components/SelectShowcase'
import SwitchShowcase from './components/SwitchShowcase'
import RatingShowcase from './components/RatingShowcase'
import ChipShowcase from './components/ChipShowcase'
import DateTimePickerShowcase from './components/DateTimePickerShowcase'
import RadioShowcase from './components/RadioShowcase'

function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Component Library
        </Typography>
        {!isHome && (
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Skip to main content link for keyboard navigation */}
        <Box
          component="a"
          href="#main-content"
          sx={{
            position: 'absolute',
            left: '-9999px',
            zIndex: 999,
            padding: '1em',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            textDecoration: 'none',
            '&:focus': {
              left: '50%',
              transform: 'translateX(-50%)',
              top: '1em',
            },
          }}
        >
          Skip to main content
        </Box>
        <Navigation />
        <Box id="main-content" component="main" role="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/button" element={<ButtonShowcase />} />
            <Route path="/components/checkbox" element={<CheckboxShowcase />} />
            <Route path="/components/textfield" element={<TextFieldShowcase />} />
            <Route path="/components/select" element={<SelectShowcase />} />
            <Route path="/components/switch" element={<SwitchShowcase />} />
            <Route path="/components/rating" element={<RatingShowcase />} />
            <Route path="/components/chip" element={<ChipShowcase />} />
            <Route path="/components/datetimepicker" element={<DateTimePickerShowcase />} />
            <Route path="/components/radio" element={<RadioShowcase />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App

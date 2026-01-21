import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

interface ComponentCard {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

/**
 * Home page displaying all available component showcases
 * with navigation buttons to each component page
 */
const Home: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Component library items - will be expanded as we add more components
  const components: ComponentCard[] = [
    {
      id: 'button',
      title: 'Button',
      description: 'Buttons allow users to take actions and make choices with a single tap.',
      path: '/components/button',
      icon: <SmartButtonIcon sx={{ fontSize: 48 }} aria-hidden="true" />,
    },
    {
      id: 'checkbox',
      title: 'Checkbox',
      description: 'Checkboxes allow users to select one or more items from a set.',
      path: '/components/checkbox',
      icon: <CheckBoxIcon sx={{ fontSize: 48 }} aria-hidden="true" />,
    },
    {
      id: 'textfield',
      title: 'TextField',
      description: 'Text fields let users enter and edit text in forms and dialogs.',
      path: '/components/textfield',
      icon: <TextFieldsIcon sx={{ fontSize: 48 }} aria-hidden="true" />,
    },
    {
      id: 'select',
      title: 'Select',
      description: 'Select components let users choose from a list of options.',
      path: '/components/select',
      icon: <ChecklistRtlIcon sx={{ fontSize: 48 }} aria-hidden="true" />,
    },
    {
      id: 'switch',
      title: 'Switch',
      description: 'Switches toggle the state of a single setting on or off.',
      path: '/components/switch',
      icon: <ToggleOnIcon sx={{ fontSize: 48 }} aria-hidden="true" />,
    },
    // More components will be added here as we create them
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}15 100%)`,
        py: theme.spacing(8),
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: theme.spacing(8) }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: theme.spacing(2),
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Component Library
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mb: theme.spacing(4) }}
          >
            A comprehensive showcase of Material UI v6 components built with React and TypeScript
          </Typography>
        </Box>

        {/* Components Grid */}
        <Box component="section" aria-labelledby="components-heading" sx={{ mb: theme.spacing(6) }}>
          <Typography
            id="components-heading"
            variant="h3"
            component="h2"
            sx={{ mb: theme.spacing(4), fontWeight: 600 }}
          >
            Available Components
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: theme.spacing(3),
            }}
          >
            {components.map((component) => (
              <Card
                key={component.id}
                elevation={0}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <CardActionArea
                  onClick={() => handleNavigate(component.path)}
                  sx={{ height: '100%', p: theme.spacing(2) }}
                  aria-label={`Navigate to ${component.title} component showcase`}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: theme.spacing(3),
                        color: theme.palette.primary.main,
                      }}
                    >
                      {component.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600, textAlign: 'center' }}
                    >
                      {component.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: 'center' }}
                    >
                      {component.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}

            {/* Coming Soon Placeholder Cards */}
            {['Radio', 'Slider', 'Autocomplete', 'DatePicker', 'Rating'].map((name, index) => (
              <Card
                key={`coming-${index}`}
                elevation={0}
                sx={{
                  height: '100%',
                  border: `1px dashed ${theme.palette.divider}`,
                  opacity: 0.6,
                }}
              >
                <CardContent sx={{ p: theme.spacing(3), textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Coming Soon...
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Quick Actions Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: theme.spacing(6),
            px: theme.spacing(3),
            background: theme.palette.background.paper,
            borderRadius: theme.spacing(2),
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Get Started
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
            Click on any component card above to explore examples and implementations
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleNavigate('/components/button')}
            sx={{ px: theme.spacing(4), py: theme.spacing(1.5) }}
          >
            Explore Button Component
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

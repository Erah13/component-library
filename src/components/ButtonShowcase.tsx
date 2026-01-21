import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

/**
 * ButtonShowcase component displays all Material UI Button variants, sizes, and states
 * Following Material Design 3 guidelines and MUI v6 specifications
 */
const ButtonShowcase: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: theme.spacing(4) }}>
      {/* Page Header */}
      <Box component="section" aria-labelledby="button-page-title" sx={{ mb: theme.spacing(6) }}>
        <Typography id="button-page-title" variant="h2" component="h1" gutterBottom>
          Button Component
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Buttons allow users to take actions and make choices with a single tap.
          They communicate actions that users can take and are typically placed
          throughout your UI.
        </Typography>
      </Box>

      {/* Button Variants Section */}
      <Paper component="section" aria-labelledby="button-variants-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="button-variants-heading" variant="h4" component="h2" gutterBottom>
          Button Variants
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Material UI provides three main button variants: contained, outlined, and text.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Stack>
      </Paper>

      {/* Button Colors Section */}
      <Paper component="section" aria-labelledby="button-colors-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="button-colors-heading" variant="h4" component="h2" gutterBottom>
          Button Colors
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Buttons support all theme colors including primary, secondary, success, error, info, and warning.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          {/* Contained Buttons */}
          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Contained
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="info">Info</Button>
              <Button variant="contained" color="warning">Warning</Button>
            </Stack>
          </Box>

          <Divider />

          {/* Outlined Buttons */}
          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Outlined
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <Button variant="outlined" color="primary">Primary</Button>
              <Button variant="outlined" color="secondary">Secondary</Button>
              <Button variant="outlined" color="success">Success</Button>
              <Button variant="outlined" color="error">Error</Button>
              <Button variant="outlined" color="info">Info</Button>
              <Button variant="outlined" color="warning">Warning</Button>
            </Stack>
          </Box>

          <Divider />

          {/* Text Buttons */}
          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Text
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <Button variant="text" color="primary">Primary</Button>
              <Button variant="text" color="secondary">Secondary</Button>
              <Button variant="text" color="success">Success</Button>
              <Button variant="text" color="error">Error</Button>
              <Button variant="text" color="info">Info</Button>
              <Button variant="text" color="warning">Warning</Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Button Sizes Section */}
      <Paper component="section" aria-labelledby="button-sizes-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="button-sizes-heading" variant="h4" component="h2" gutterBottom>
          Button Sizes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Buttons come in three sizes: small, medium (default), and large.
        </Typography>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={theme.spacing(4)}
          sx={{ width: '100%' }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Contained
            </Typography>
            <Stack spacing={theme.spacing(2)} alignItems="flex-start">
              <Button variant="contained" size="small">Small</Button>
              <Button variant="contained" size="medium">Medium</Button>
              <Button variant="contained" size="large">Large</Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Outlined
            </Typography>
            <Stack spacing={theme.spacing(2)} alignItems="flex-start">
              <Button variant="outlined" size="small">Small</Button>
              <Button variant="outlined" size="medium">Medium</Button>
              <Button variant="outlined" size="large">Large</Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Text
            </Typography>
            <Stack spacing={theme.spacing(2)} alignItems="flex-start">
              <Button variant="text" size="small">Small</Button>
              <Button variant="text" size="medium">Medium</Button>
              <Button variant="text" size="large">Large</Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Buttons with Icons Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Buttons with Icons
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Icons can be placed at the start or end of a button to enhance clarity and visual appeal.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Start Icon
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <Button variant="contained" startIcon={<SendIcon />}>
                Send
              </Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="text" startIcon={<AddIcon />}>
                Add
              </Button>
            </Stack>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              End Icon
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
              <Button variant="outlined" endIcon={<DownloadIcon />}>
                Download
              </Button>
              <Button variant="text" endIcon={<AddIcon />}>
                Add More
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Button States Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Button States
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Buttons can be disabled to indicate that an action is currently unavailable.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <Button variant="contained" disabled>
            Disabled Contained
          </Button>
          <Button variant="outlined" disabled>
            Disabled Outlined
          </Button>
          <Button variant="text" disabled>
            Disabled Text
          </Button>
        </Stack>
      </Paper>

      {/* Full Width Buttons Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Full Width Buttons
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use the fullWidth prop to make a button span the full width of its parent.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Button variant="contained" fullWidth>
            Full Width Contained
          </Button>
          <Button variant="outlined" fullWidth>
            Full Width Outlined
          </Button>
          <Button variant="text" fullWidth>
            Full Width Text
          </Button>
        </Stack>
      </Paper>

      {/* Custom Styling Example */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Custom Styled Buttons
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Buttons can be customized using the sx prop for one-off styles.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              border: 0,
              borderRadius: theme.spacing(1),
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              px: theme.spacing(3),
              py: theme.spacing(1.5),
            }}
          >
            Gradient Button
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: theme.spacing(3),
              borderWidth: 2,
              px: theme.spacing(4),
              '&:hover': {
                borderWidth: 2,
              },
            }}
          >
            Rounded Button
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              px: theme.spacing(4),
            }}
          >
            Square Button
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ButtonShowcase;

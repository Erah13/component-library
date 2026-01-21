import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  Paper,
  InputAdornment,
  IconButton,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'GBP', label: '£' },
  { value: 'JPY', label: '¥' },
];

/**
 * TextFieldShowcase component displays all Material UI TextField variants, sizes, and states
 * Following Material Design 3 guidelines and MUI v6 specifications
 */
const TextFieldShowcase: React.FC = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [currency, setCurrency] = useState('EUR');
  const [multilineValue, setMultilineValue] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg" sx={{ py: theme.spacing(4) }}>
      {/* Page Header */}
      <Box component="section" aria-labelledby="textfield-page-title" sx={{ mb: theme.spacing(6) }}>
        <Typography id="textfield-page-title" variant="h2" component="h1" gutterBottom>
          TextField Component
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Text fields let users enter and edit text. They typically appear in forms and dialogs.
          Material UI provides a comprehensive text field component with various customization options.
        </Typography>
      </Box>

      {/* Basic TextFields Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Basic TextFields
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          The TextField wrapper component includes a label, input, and helper text.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <TextField label="Standard" variant="standard" />
          <TextField label="Filled" variant="filled" />
          <TextField label="Outlined" variant="outlined" />
        </Stack>
      </Paper>

      {/* TextField Variants Section */}
      <Paper component="section" aria-labelledby="textfield-variants-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="textfield-variants-heading" variant="h4" component="h2" gutterBottom>
          TextField Variants
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          TextField comes in three variants: standard, filled, and outlined (default).
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Outlined (Default)
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <TextField label="Email" type="email" />
              <TextField label="Password" type="password" />
              <TextField label="Read Only" defaultValue="Read only value" InputProps={{ readOnly: true }} />
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Filled
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <TextField label="Email" type="email" variant="filled" />
              <TextField label="Password" type="password" variant="filled" />
              <TextField label="Read Only" defaultValue="Read only value" variant="filled" InputProps={{ readOnly: true }} />
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Standard
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <TextField label="Email" type="email" variant="standard" />
              <TextField label="Password" type="password" variant="standard" />
              <TextField label="Read Only" defaultValue="Read only value" variant="standard" InputProps={{ readOnly: true }} />
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Form Props Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Form Props
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Standard form attributes are supported including required, disabled, helperText, and error states.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <TextField required label="Required" defaultValue="Hello World" />
          <TextField disabled label="Disabled" defaultValue="Hello World" />
          <TextField label="Password" type="password" autoComplete="current-password" />
          <TextField
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField label="Search" type="search" />
          <TextField
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </Stack>
      </Paper>

      {/* TextField Colors Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          TextField Colors
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          TextFields support different color themes including primary, secondary, success, error, info, and warning.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <TextField label="Primary" color="primary" focused />
          <TextField label="Secondary" color="secondary" focused />
          <TextField label="Success" color="success" focused />
          <TextField label="Error" color="error" focused />
          <TextField label="Info" color="info" focused />
          <TextField label="Warning" color="warning" focused />
        </Stack>
      </Paper>

      {/* TextField Sizes Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          TextField Sizes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          TextFields come in two sizes: small and medium (default).
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Small
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <TextField label="Small outlined" size="small" />
              <TextField label="Small filled" variant="filled" size="small" />
              <TextField label="Small standard" variant="standard" size="small" />
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Medium (Default)
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <TextField label="Medium outlined" />
              <TextField label="Medium filled" variant="filled" />
              <TextField label="Medium standard" variant="standard" />
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Input Adornments Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Input Adornments
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use InputAdornment to add icons or text at the start or end of a text field.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <TextField
            label="With start adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Paper>

      {/* Validation Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Validation
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use the error prop to toggle the error state. Use helperText to provide feedback about the error.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <TextField
            error
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            error
            label="Error"
            variant="filled"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            error
            label="Error"
            variant="standard"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </Stack>
      </Paper>

      {/* Multiline TextFields Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Multiline TextFields
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          The multiline prop transforms the text field into a textarea. Use rows to set the minimum height.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <TextField
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
          <TextField
            label="Multiline Placeholder"
            multiline
            rows={4}
            placeholder="Type your message here..."
          />
          <TextField
            label="Max Rows"
            multiline
            maxRows={4}
            value={multilineValue}
            onChange={(e) => setMultilineValue(e.target.value)}
            helperText={`${multilineValue.length} characters`}
          />
        </Stack>
      </Paper>

      {/* Select TextFields Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Select TextFields
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          The select prop makes the text field use the Select component internally.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <TextField
            select
            label="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label} {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            variant="filled"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label} {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            variant="standard"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label} {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Paper>

      {/* Full Width TextFields Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Full Width TextFields
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use the fullWidth prop to make the input take up the full width of its container.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <TextField fullWidth label="Full Width Outlined" />
          <TextField fullWidth label="Full Width Filled" variant="filled" />
          <TextField fullWidth label="Full Width Standard" variant="standard" />
        </Stack>
      </Paper>

      {/* Custom Styled TextFields Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Custom Styled TextFields
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          TextFields can be customized using the sx prop for one-off styles.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <TextField
            label="Custom Outlined"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary.dark,
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.secondary.main,
                },
              },
            }}
          />
          <TextField
            label="Rounded"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: theme.spacing(3),
              },
            }}
          />
          <TextField
            label="Custom Background"
            variant="filled"
            sx={{
              '& .MuiFilledInput-root': {
                backgroundColor: `${theme.palette.primary.main}10`,
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}20`,
                },
                '&.Mui-focused': {
                  backgroundColor: `${theme.palette.primary.main}15`,
                },
              },
            }}
          />
        </Stack>
      </Paper>

      {/* Layout Example Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Form Layout Example
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          A practical example of text fields in a form layout.
        </Typography>
        
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={theme.spacing(3)}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={theme.spacing(2)}
            >
              <TextField fullWidth label="First Name" required />
              <TextField fullWidth label="Last Name" required />
            </Stack>
            <TextField fullWidth label="Email" type="email" required />
            <TextField fullWidth label="Phone Number" type="tel" />
            <TextField
              fullWidth
              label="Address"
              multiline
              rows={3}
            />
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={theme.spacing(2)}
            >
              <TextField fullWidth label="City" />
              <TextField fullWidth label="State" />
              <TextField fullWidth label="Zip Code" />
            </Stack>
            <TextField
              fullWidth
              label="Comments"
              multiline
              rows={4}
              placeholder="Additional information..."
            />
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default TextFieldShowcase;

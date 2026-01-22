import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Stack,
  Paper,
  Chip,
  InputAdornment,
  ListSubheader,
  OutlinedInput,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';

/**
 * SelectShowcase component displays all Material UI Select variants, sizes, and states
 * Following Material Design 3 guidelines, MUI v6 specifications, and WCAG 2.2 AA standards
 */
const SelectShowcase: React.FC = () => {
  const theme = useTheme();
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('usd');
  const [multiple, setMultiple] = useState<string[]>([]);
  const [category, setCategory] = useState('');

  const handleAgeChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleMultipleChange = (event: SelectChangeEvent<typeof multiple>) => {
    const value = event.target.value;
    setMultiple(typeof value === 'string' ? value.split(',') : value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  return (
    <Container sx={{ py: theme.spacing(4) }}>
      {/* Page Header */}
      <Box component="section" aria-labelledby="select-page-title" sx={{ mb: theme.spacing(6) }}>
        <Typography id="select-page-title" variant="h2" component="h1" gutterBottom>
          Select Component
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Select components are used for collecting user-provided information from a list of options.
          They provide a dropdown list of options from which users can select one or multiple values.
        </Typography>
      </Box>

      {/* Basic Select Section */}
      <Paper component="section" aria-labelledby="basic-select-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="basic-select-heading" variant="h4" component="h2" gutterBottom>
          Basic Select
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Basic select with FormControl, InputLabel, and Select components.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="age-select-label">Age</InputLabel>
            <Select
              labelId="age-select-label"
              id="age-select"
              value={age}
              label="Age"
              onChange={handleAgeChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="age-helper-label">Age</InputLabel>
            <Select
              labelId="age-helper-label"
              id="age-helper"
              value={age}
              label="Age"
              onChange={handleAgeChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Select your age range</FormHelperText>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }} disabled>
            <InputLabel id="disabled-label">Disabled</InputLabel>
            <Select
              labelId="disabled-label"
              id="disabled-select"
              value=""
              label="Disabled"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
            <FormHelperText>This select is disabled</FormHelperText>
          </FormControl>

          <FormControl error sx={{ minWidth: 200 }}>
            <InputLabel id="error-label">Error</InputLabel>
            <Select
              labelId="error-label"
              id="error-select"
              value=""
              label="Error"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
            <FormHelperText>This field is required</FormHelperText>
          </FormControl>
        </Stack>
      </Paper>

      {/* Select Variants Section */}
      <Paper component="section" aria-labelledby="select-variants-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="select-variants-heading" variant="h4" component="h2" gutterBottom>
          Select Variants
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Select comes in three variants: outlined (default), filled, and standard.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Outlined (Default)
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="outlined-label">Country</InputLabel>
                <Select
                  labelId="outlined-label"
                  value={country}
                  label="Country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                  <MenuItem value="ca">Canada</MenuItem>
                  <MenuItem value="au">Australia</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Filled
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <FormControl variant="filled" sx={{ minWidth: 200 }}>
                <InputLabel id="filled-label">Language</InputLabel>
                <Select
                  labelId="filled-label"
                  value={language}
                  label="Language"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: theme.spacing(2) }}>
              Standard
            </Typography>
            <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
              <FormControl variant="standard" sx={{ minWidth: 200 }}>
                <InputLabel id="standard-label">Currency</InputLabel>
                <Select
                  labelId="standard-label"
                  value={currency}
                  label="Currency"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <MenuItem value="usd">USD</MenuItem>
                  <MenuItem value="eur">EUR</MenuItem>
                  <MenuItem value="gbp">GBP</MenuItem>
                  <MenuItem value="jpy">JPY</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Select Sizes Section */}
      <Paper component="section" aria-labelledby="select-sizes-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="select-sizes-heading" variant="h4" component="h2" gutterBottom>
          Select Sizes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Select components come in two sizes: small and medium (default).
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="small-select-label">Small</InputLabel>
            <Select
              labelId="small-select-label"
              value={age}
              label="Small"
              onChange={handleAgeChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="medium-select-label">Medium</InputLabel>
            <Select
              labelId="medium-select-label"
              value={age}
              label="Medium"
              onChange={handleAgeChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>

      {/* Multiple Select Section */}
      <Paper component="section" aria-labelledby="multiple-select-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="multiple-select-heading" variant="h4" component="h2" gutterBottom>
          Multiple Select
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Select multiple values from the dropdown list.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="multiple-select-label">Select Names</InputLabel>
            <Select
              labelId="multiple-select-label"
              id="multiple-select"
              multiple
              value={multiple}
              onChange={handleMultipleChange}
              input={<OutlinedInput label="Select Names" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="multiple-chip-label">With Chips</InputLabel>
            <Select
              labelId="multiple-chip-label"
              id="multiple-chip"
              multiple
              value={multiple}
              onChange={handleMultipleChange}
              input={<OutlinedInput label="With Chips" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="multiple-checkbox-label">With Checkmarks</InputLabel>
            <Select
              labelId="multiple-checkbox-label"
              id="multiple-checkbox"
              multiple
              value={multiple}
              onChange={handleMultipleChange}
              input={<OutlinedInput label="With Checkmarks" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {multiple.indexOf(name) > -1 && (
                    <CheckIcon sx={{ mr: 1, color: 'primary.main' }} />
                  )}
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Paper>

      {/* Select with Icons Section */}
      <Paper component="section" aria-labelledby="select-icons-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="select-icons-heading" variant="h4" component="h2" gutterBottom>
          Select with Icons
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Enhance select components with icons for better visual clarity.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="icon-select-label">Account Type</InputLabel>
            <Select
              labelId="icon-select-label"
              value={age}
              label="Account Type"
              onChange={handleAgeChange}
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
            >
              <MenuItem value={10}>Personal</MenuItem>
              <MenuItem value={20}>Business</MenuItem>
              <MenuItem value={30}>Enterprise</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="language-icon-label">Language</InputLabel>
            <Select
              labelId="language-icon-label"
              value={language}
              label="Language"
              onChange={(e) => setLanguage(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              }
            >
              <MenuItem value="en">🇺🇸 English</MenuItem>
              <MenuItem value="es">🇪🇸 Español</MenuItem>
              <MenuItem value="fr">🇫🇷 Français</MenuItem>
              <MenuItem value="de">🇩🇪 Deutsch</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>

      {/* Grouped Select Section */}
      <Paper component="section" aria-labelledby="grouped-select-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="grouped-select-heading" variant="h4" component="h2" gutterBottom>
          Grouped Select
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Organize options into groups using ListSubheader.
        </Typography>
        
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="grouped-select-label">Category</InputLabel>
          <Select
            labelId="grouped-select-label"
            id="grouped-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <ListSubheader>Fruits</ListSubheader>
            <MenuItem value="apple">Apple</MenuItem>
            <MenuItem value="banana">Banana</MenuItem>
            <MenuItem value="orange">Orange</MenuItem>
            <ListSubheader>Vegetables</ListSubheader>
            <MenuItem value="carrot">Carrot</MenuItem>
            <MenuItem value="broccoli">Broccoli</MenuItem>
            <MenuItem value="spinach">Spinach</MenuItem>
            <ListSubheader>Proteins</ListSubheader>
            <MenuItem value="chicken">Chicken</MenuItem>
            <MenuItem value="fish">Fish</MenuItem>
            <MenuItem value="tofu">Tofu</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* Native Select Section */}
      <Paper component="section" aria-labelledby="native-select-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="native-select-heading" variant="h4" component="h2" gutterBottom>
          Native Select
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use native HTML select for better performance on mobile devices.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel htmlFor="native-select">Age</InputLabel>
            <Select
              native
              value={age}
              onChange={handleAgeChange}
              label="Age"
              inputProps={{
                id: 'native-select',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>

          <FormControl variant="filled" sx={{ minWidth: 200 }}>
            <InputLabel htmlFor="native-filled">Country</InputLabel>
            <Select
              native
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
              inputProps={{
                id: 'native-filled',
              }}
            >
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel htmlFor="native-standard">Language</InputLabel>
            <Select
              native
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              label="Language"
              inputProps={{
                id: 'native-standard',
              }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </Select>
          </FormControl>
        </Stack>
      </Paper>

      {/* Custom Styled Select Section */}
      <Paper component="section" aria-labelledby="custom-select-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="custom-select-heading" variant="h4" component="h2" gutterBottom>
          Custom Styled Select
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Select components can be customized using the sx prop.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="custom-rounded-label">Rounded</InputLabel>
            <Select
              labelId="custom-rounded-label"
              value={age}
              label="Rounded"
              onChange={handleAgeChange}
              sx={{
                borderRadius: theme.spacing(3),
                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 2,
                },
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="custom-color-label">Primary Color</InputLabel>
            <Select
              labelId="custom-color-label"
              value={age}
              label="Primary Color"
              onChange={handleAgeChange}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.dark,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                },
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="filled" sx={{ minWidth: 200 }}>
            <InputLabel id="custom-background-label">Custom Background</InputLabel>
            <Select
              labelId="custom-background-label"
              value={age}
              label="Custom Background"
              onChange={handleAgeChange}
              sx={{
                backgroundColor: `${theme.palette.success.main}10`,
                '&:hover': {
                  backgroundColor: `${theme.palette.success.main}20`,
                },
                '&.Mui-focused': {
                  backgroundColor: `${theme.palette.success.main}15`,
                },
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>

      {/* Form Example Section */}
      <Paper component="section" aria-labelledby="form-example-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="form-example-heading" variant="h4" component="h2" gutterBottom>
          Form Example
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          A practical example of select components in a form layout.
        </Typography>
        
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={theme.spacing(3)}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={theme.spacing(2)}
            >
              <FormControl fullWidth>
                <InputLabel id="form-country-label">Country</InputLabel>
                <Select
                  labelId="form-country-label"
                  value={country}
                  label="Country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                  <MenuItem value="ca">Canada</MenuItem>
                  <MenuItem value="au">Australia</MenuItem>
                  <MenuItem value="de">Germany</MenuItem>
                  <MenuItem value="fr">France</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="form-language-label">Language</InputLabel>
                <Select
                  labelId="form-language-label"
                  value={language}
                  label="Language"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                  <MenuItem value="it">Italian</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <FormControl fullWidth>
              <InputLabel id="form-currency-label">Preferred Currency</InputLabel>
              <Select
                labelId="form-currency-label"
                value={currency}
                label="Preferred Currency"
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value="usd">USD - US Dollar</MenuItem>
                <MenuItem value="eur">EUR - Euro</MenuItem>
                <MenuItem value="gbp">GBP - British Pound</MenuItem>
                <MenuItem value="jpy">JPY - Japanese Yen</MenuItem>
                <MenuItem value="cad">CAD - Canadian Dollar</MenuItem>
              </Select>
              <FormHelperText>Select your preferred currency for transactions</FormHelperText>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="form-age-label">Age Range</InputLabel>
              <Select
                labelId="form-age-label"
                value={age}
                label="Age Range"
                onChange={handleAgeChange}
              >
                <MenuItem value={10}>Under 18</MenuItem>
                <MenuItem value={20}>18-30</MenuItem>
                <MenuItem value={30}>31-50</MenuItem>
                <MenuItem value={40}>51-70</MenuItem>
                <MenuItem value={50}>Over 70</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default SelectShowcase;

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

/**
 * CheckboxShowcase component displays all Material UI Checkbox variants, sizes, and states
 * Following Material Design 3 guidelines and MUI v6 specifications
 */
const CheckboxShowcase: React.FC = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
  const [checkedState, setCheckedState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = checkedState;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Container sx={{ py: theme.spacing(4) }}>
      {/* Page Header */}
      <Box component="section" aria-labelledby="checkbox-page-title" sx={{ mb: theme.spacing(6) }}>
        <Typography id="checkbox-page-title" variant="h2" component="h1" gutterBottom>
          Checkbox Component
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Checkboxes allow users to select one or more items from a set. They can be used
          to turn an option on or off. They are commonly used in forms and lists.
        </Typography>
      </Box>

      {/* Basic Checkboxes Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Basic Checkboxes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Basic checkboxes can be used standalone or with labels.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} alignItems="center">
          <Checkbox defaultChecked inputProps={{ 'aria-label': 'Checked checkbox example' }} />
          <Checkbox inputProps={{ 'aria-label': 'Unchecked checkbox example' }} />
          <Checkbox disabled inputProps={{ 'aria-label': 'Disabled unchecked checkbox example' }} />
          <Checkbox disabled checked inputProps={{ 'aria-label': 'Disabled checked checkbox example' }} />
        </Stack>
      </Paper>

      {/* Checkbox with Labels Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Checkbox with Labels
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use FormControlLabel to provide labels for checkboxes.
        </Typography>
        
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
          <FormControlLabel control={<Checkbox />} label="Unchecked" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          <FormControlLabel disabled control={<Checkbox checked />} label="Disabled checked" />
        </FormGroup>
      </Paper>

      {/* Checkbox Colors Section */}
      <Paper component="section" aria-labelledby="checkbox-colors-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="checkbox-colors-heading" variant="h4" component="h2" gutterBottom>
          Checkbox Colors
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Checkboxes support all theme colors including primary, secondary, success, error, info, and warning.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="Primary"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="secondary" />}
            label="Secondary"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Success"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="error" />}
            label="Error"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="info" />}
            label="Info"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="warning" />}
            label="Warning"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="Default"
          />
        </Stack>
      </Paper>

      {/* Checkbox Sizes Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Checkbox Sizes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Checkboxes come in three sizes: small, medium (default), and large.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} alignItems="center">
          <FormControlLabel
            control={<Checkbox defaultChecked size="small" />}
            label="Small"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked size="medium" />}
            label="Medium"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
            label="Large"
          />
        </Stack>
      </Paper>

      {/* Indeterminate State Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Indeterminate State
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          A checkbox can be in an indeterminate state when only some of its children are selected.
        </Typography>
        
        <Box>
          <FormControlLabel
            label="Parent"
            control={
              <Checkbox
                checked={gilad && jason && antoine}
                indeterminate={!gilad && !jason && !antoine ? false : !(gilad && jason && antoine)}
                onChange={(event) => {
                  setCheckedState({
                    gilad: event.target.checked,
                    jason: event.target.checked,
                    antoine: event.target.checked,
                  });
                }}
              />
            }
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: theme.spacing(3) }}>
            <FormControlLabel
              label="Child 1"
              control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            />
            <FormControlLabel
              label="Child 2"
              control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            />
            <FormControlLabel
              label="Child 3"
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            />
          </Box>
        </Box>
      </Paper>

      {/* Form Group Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Checkbox Form Group
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          FormGroup is a wrapper used to group selection controls for easier validation.
        </Typography>
        
        <FormControl sx={{ m: theme.spacing(3) }} component="fieldset" variant="standard">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={handleChange} name="jason" />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>

        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: theme.spacing(3) }}
          variant="standard"
        >
          <FormLabel component="legend">Pick two (with validation)</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={handleChange} name="jason" />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>{error ? 'You must pick exactly two options' : 'Perfect!'}</FormHelperText>
        </FormControl>
      </Paper>

      {/* Label Placement Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Label Placement
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          You can change the placement of the label using the labelPlacement prop.
        </Typography>
        
        <FormGroup row>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </Paper>

      {/* Custom Icons Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Custom Icons
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Customize the checkbox icons using the icon and checkedIcon props.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                defaultChecked
              />
            }
            label="Default icons"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
                defaultChecked
                sx={{
                  color: theme.palette.error.main,
                  '&.Mui-checked': {
                    color: theme.palette.error.main,
                  },
                }}
              />
            }
            label="Favorite"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                defaultChecked
                sx={{
                  color: theme.palette.info.main,
                  '&.Mui-checked': {
                    color: theme.palette.info.main,
                  },
                }}
              />
            }
            label="Bookmark"
          />
        </Stack>
      </Paper>

      {/* Controlled Checkbox Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Controlled Checkbox
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          You can control the checkbox with the checked and onChange props.
        </Typography>
        
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={checked ? 'Checked' : 'Unchecked'}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: theme.spacing(2) }}>
            Current state: <strong>{checked ? 'Checked' : 'Unchecked'}</strong>
          </Typography>
        </Box>
      </Paper>

      {/* Custom Styled Checkboxes Section */}
      <Paper elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography variant="h4" gutterBottom>
          Custom Styled Checkboxes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Checkboxes can be customized using the sx prop for one-off styles.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(3)} flexWrap="wrap" useFlexGap>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: theme.palette.primary.main,
                  '&.Mui-checked': {
                    color: theme.palette.primary.dark,
                  },
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                }}
              />
            }
            label="Large Primary"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: theme.palette.secondary.main,
                  '&.Mui-checked': {
                    color: theme.palette.secondary.dark,
                  },
                  borderRadius: theme.spacing(1),
                }}
              />
            }
            label="Rounded Secondary"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: theme.palette.success.main,
                  '&.Mui-checked': {
                    color: theme.palette.success.main,
                    background: `${theme.palette.success.light}20`,
                  },
                  '&:hover': {
                    background: `${theme.palette.success.light}15`,
                  },
                }}
              />
            }
            label="Success with Hover"
          />
        </Stack>
      </Paper>
    </Container>
  );
};

export default CheckboxShowcase;

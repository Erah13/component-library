import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Switch,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

/**
 * SwitchShowcase component displays all Material UI Switch variants, sizes, and states
 * Following Material Design 3 guidelines, MUI v6 specifications, and WCAG 2.2 AA standards
 */
const SwitchShowcase: React.FC = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
  const [state, setState] = useState({
    wifi: true,
    bluetooth: false,
    location: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { wifi, bluetooth, location } = state;

  return (
    <Container maxWidth="lg" sx={{ py: theme.spacing(4) }}>
      {/* Page Header */}
      <Box component="section" aria-labelledby="switch-page-title" sx={{ mb: theme.spacing(6) }}>
        <Typography id="switch-page-title" variant="h2" component="h1" gutterBottom>
          Switch Component
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Switches toggle the state of a single setting on or off. They are the preferred way to
          adjust settings on mobile. The switch control represents a physical switch that allows
          users to turn things on or off.
        </Typography>
      </Box>

      {/* Basic Switches Section */}
      <Paper component="section" aria-labelledby="basic-switch-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="basic-switch-heading" variant="h4" component="h2" gutterBottom>
          Basic Switches
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Basic switches can be used standalone or with labels.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} alignItems="center">
          <Switch defaultChecked inputProps={{ 'aria-label': 'Checked switch example' }} />
          <Switch inputProps={{ 'aria-label': 'Unchecked switch example' }} />
          <Switch disabled inputProps={{ 'aria-label': 'Disabled unchecked switch example' }} />
          <Switch disabled checked inputProps={{ 'aria-label': 'Disabled checked switch example' }} />
        </Stack>
      </Paper>

      {/* Switch with Labels Section */}
      <Paper component="section" aria-labelledby="switch-labels-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="switch-labels-heading" variant="h4" component="h2" gutterBottom>
          Switch with Labels
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use FormControlLabel to provide labels for switches.
        </Typography>
        
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
          <FormControlLabel control={<Switch />} label="Unchecked" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
          <FormControlLabel disabled control={<Switch checked />} label="Disabled checked" />
          <FormControlLabel required control={<Switch />} label="Required" />
        </FormGroup>
      </Paper>

      {/* Switch Colors Section */}
      <Paper component="section" aria-labelledby="switch-colors-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="switch-colors-heading" variant="h4" component="h2" gutterBottom>
          Switch Colors
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Switches support all theme colors including primary, secondary, success, error, info, warning, and default.
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} flexWrap="wrap" useFlexGap>
          <FormControlLabel
            control={<Switch defaultChecked color="primary" />}
            label="Primary"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="secondary" />}
            label="Secondary"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="success" />}
            label="Success"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="error" />}
            label="Error"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="info" />}
            label="Info"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="warning" />}
            label="Warning"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="default" />}
            label="Default"
          />
        </Stack>
      </Paper>

      {/* Switch Sizes Section */}
      <Paper component="section" aria-labelledby="switch-sizes-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="switch-sizes-heading" variant="h4" component="h2" gutterBottom>
          Switch Sizes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Switches come in two sizes: small and medium (default).
        </Typography>
        
        <Stack direction="row" spacing={theme.spacing(2)} alignItems="center">
          <FormControlLabel
            control={<Switch defaultChecked size="small" />}
            label="Small"
          />
          <FormControlLabel
            control={<Switch defaultChecked size="medium" />}
            label="Medium"
          />
        </Stack>
      </Paper>

      {/* Label Placement Section */}
      <Paper component="section" aria-labelledby="label-placement-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="label-placement-heading" variant="h4" component="h2" gutterBottom>
          Label Placement
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          You can change the placement of the label using the labelPlacement prop.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <FormControlLabel
            value="top"
            control={<Switch defaultChecked />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Switch defaultChecked />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Switch defaultChecked />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Switch defaultChecked />}
            label="End"
            labelPlacement="end"
          />
        </Stack>
      </Paper>

      {/* Controlled Switch Section */}
      <Paper component="section" aria-labelledby="controlled-switch-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="controlled-switch-heading" variant="h4" component="h2" gutterBottom>
          Controlled Switch
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          You can control the switch with the checked and onChange props.
        </Typography>
        
        <Box>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                inputProps={{ 'aria-label': 'controlled switch' }}
              />
            }
            label={checked ? 'On' : 'Off'}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: theme.spacing(2) }}>
            Current state: <strong>{checked ? 'On' : 'Off'}</strong>
          </Typography>
        </Box>
      </Paper>

      {/* Form Group Section */}
      <Paper component="section" aria-labelledby="form-group-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="form-group-heading" variant="h4" component="h2" gutterBottom>
          Switch Form Group
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          FormGroup is a wrapper used to group switch controls for easier organization.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Device Settings</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={wifi} onChange={handleChange} name="wifi" />
                }
                label="Wi-Fi"
              />
              <FormControlLabel
                control={
                  <Switch checked={bluetooth} onChange={handleChange} name="bluetooth" />
                }
                label="Bluetooth"
              />
              <FormControlLabel
                control={
                  <Switch checked={location} onChange={handleChange} name="location" />
                }
                label="Location Services"
              />
            </FormGroup>
            <FormHelperText>Enable or disable device features</FormHelperText>
          </FormControl>
        </Stack>
      </Paper>

      {/* Switch with Icons Section */}
      <Paper component="section" aria-labelledby="switch-icons-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="switch-icons-heading" variant="h4" component="h2" gutterBottom>
          Switch with Icons
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Enhance switches with icons for better visual communication.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
            <WifiIcon color={wifi ? 'primary' : 'disabled'} />
            <FormControlLabel
              control={
                <Switch checked={wifi} onChange={handleChange} name="wifi" />
              }
              label="Wi-Fi"
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
            <BluetoothIcon color={bluetooth ? 'primary' : 'disabled'} />
            <FormControlLabel
              control={
                <Switch checked={bluetooth} onChange={handleChange} name="bluetooth" />
              }
              label="Bluetooth"
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
            <VolumeUpIcon color={location ? 'primary' : 'disabled'} />
            <FormControlLabel
              control={
                <Switch checked={location} onChange={handleChange} name="location" />
              }
              label="Sound"
            />
          </Box>
        </Stack>
      </Paper>

      {/* Custom Styled Switches Section */}
      <Paper component="section" aria-labelledby="custom-switch-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="custom-switch-heading" variant="h4" component="h2" gutterBottom>
          Custom Styled Switches
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Switches can be customized using the sx prop for one-off styles.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: theme.palette.success.main,
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: theme.palette.success.main,
                  },
                }}
              />
            }
            label="Success Green"
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: theme.palette.warning.main,
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: theme.palette.warning.main,
                  },
                }}
              />
            }
            label="Warning Orange"
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                sx={{
                  '& .MuiSwitch-thumb': {
                    width: 24,
                    height: 24,
                  },
                  '& .MuiSwitch-track': {
                    borderRadius: 26 / 2,
                  },
                }}
              />
            }
            label="Large Thumb"
          />
        </Stack>
      </Paper>

      {/* iOS Style Switch Section */}
      <Paper component="section" aria-labelledby="ios-switch-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="ios-switch-heading" variant="h4" component="h2" gutterBottom>
          iOS Style Switch
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Create an iOS-inspired switch design with custom styling.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                sx={{
                  width: 62,
                  height: 34,
                  padding: 0,
                  '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: theme.spacing(0.25),
                    transitionDuration: '300ms',
                    '&.Mui-checked': {
                      transform: 'translateX(28px)',
                      color: '#fff',
                      '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.success.main,
                        opacity: 1,
                        border: 0,
                      },
                    },
                  },
                  '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    width: 30,
                    height: 30,
                  },
                  '& .MuiSwitch-track': {
                    borderRadius: 34 / 2,
                    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                    opacity: 1,
                  },
                }}
              />
            }
            label="iOS Style"
          />
          <FormControlLabel
            control={
              <Switch
                sx={{
                  width: 62,
                  height: 34,
                  padding: 0,
                  '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: theme.spacing(0.25),
                    transitionDuration: '300ms',
                    '&.Mui-checked': {
                      transform: 'translateX(28px)',
                      color: '#fff',
                      '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.error.main,
                        opacity: 1,
                        border: 0,
                      },
                    },
                  },
                  '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    width: 30,
                    height: 30,
                  },
                  '& .MuiSwitch-track': {
                    borderRadius: 34 / 2,
                    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                    opacity: 1,
                  },
                }}
              />
            }
            label="iOS Style (Error Color)"
          />
        </Stack>
      </Paper>

      {/* Settings Form Example Section */}
      <Paper component="section" aria-labelledby="settings-example-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="settings-example-heading" variant="h4" component="h2" gutterBottom>
          Settings Form Example
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          A practical example of switches in a settings form layout.
        </Typography>
        
        <Box component="form" noValidate>
          <Stack spacing={theme.spacing(3)}>
            <Box>
              <FormLabel component="legend" sx={{ mb: theme.spacing(2) }}>
                Notifications
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email notifications"
                />
                <FormHelperText sx={{ ml: 0, mb: theme.spacing(1) }}>
                  Receive email updates about your account
                </FormHelperText>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Push notifications"
                />
                <FormHelperText sx={{ ml: 0, mb: theme.spacing(1) }}>
                  Get push notifications on your device
                </FormHelperText>
                <FormControlLabel
                  control={<Switch />}
                  label="SMS notifications"
                />
                <FormHelperText sx={{ ml: 0 }}>
                  Receive text message alerts
                </FormHelperText>
              </FormGroup>
            </Box>

            <Box>
              <FormLabel component="legend" sx={{ mb: theme.spacing(2) }}>
                Privacy
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Profile visibility"
                />
                <FormHelperText sx={{ ml: 0, mb: theme.spacing(1) }}>
                  Allow others to see your profile
                </FormHelperText>
                <FormControlLabel
                  control={<Switch />}
                  label="Activity status"
                />
                <FormHelperText sx={{ ml: 0, mb: theme.spacing(1) }}>
                  Show when you're active
                </FormHelperText>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Search engine indexing"
                />
                <FormHelperText sx={{ ml: 0 }}>
                  Allow search engines to index your profile
                </FormHelperText>
              </FormGroup>
            </Box>

            <Box>
              <FormLabel component="legend" sx={{ mb: theme.spacing(2) }}>
                Accessibility
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Switch />}
                  label="High contrast mode"
                />
                <FormHelperText sx={{ ml: 0, mb: theme.spacing(1) }}>
                  Enhance visual contrast
                </FormHelperText>
                <FormControlLabel
                  control={<Switch />}
                  label="Reduce motion"
                />
                <FormHelperText sx={{ ml: 0, mb: theme.spacing(1) }}>
                  Minimize animations
                </FormHelperText>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Screen reader support"
                />
                <FormHelperText sx={{ ml: 0 }}>
                  Optimize for screen readers
                </FormHelperText>
              </FormGroup>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default SwitchShowcase;

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const RadioShowcase: React.FC = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('a');
  const [gender, setGender] = useState('female');
  const [plan, setPlan] = useState('pro');
  const [formValue, setFormValue] = useState('');
  const [formError, setFormError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formValue) {
      setFormError(true);
    } else {
      setFormError(false);
      console.log('Form submitted:', formValue);
    }
  };

  return (
    <Box sx={{ p: 4, py: theme.spacing(4) }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{ 
          mb: theme.spacing(4),
          fontWeight: 600,
        }}
      >
        Radio Button
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: theme.spacing(4),
          color: theme.palette.text.secondary,
        }}
      >
        Radio buttons allow users to select one option from a set.
      </Typography>

      {/* Basic Radio Buttons */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="basic-radio-heading"
      >
        <Typography 
          id="basic-radio-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Basic Radio Buttons
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Option A' }}
          />
          <Radio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Option B' }}
          />
          <Radio
            checked={selectedValue === 'c'}
            onChange={handleChange}
            value="c"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Option C' }}
          />
          <Radio
            disabled
            value="d"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Disabled option' }}
          />
        </Stack>
      </Paper>

      {/* Radio Group with Labels */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="radio-group-heading"
      >
        <Typography 
          id="radio-group-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Radio Group with Labels
        </Typography>
        <FormControl>
          <FormLabel id="gender-radio-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="gender-radio-group-label"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            name="gender-radio-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Direction */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="direction-heading"
      >
        <Typography 
          id="direction-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Direction
        </Typography>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel id="vertical-radio-label">Vertical (Default)</FormLabel>
            <RadioGroup
              aria-labelledby="vertical-radio-label"
              defaultValue="option1"
              name="vertical-radio-group"
            >
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="horizontal-radio-label">Horizontal</FormLabel>
            <RadioGroup
              row
              aria-labelledby="horizontal-radio-label"
              defaultValue="option1"
              name="horizontal-radio-group"
            >
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Paper>

      {/* Color Variants */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="color-radio-heading"
      >
        <Typography 
          id="color-radio-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Color Variants
        </Typography>
        <FormControl>
          <FormLabel id="color-radio-label">Select a color</FormLabel>
          <RadioGroup
            row
            aria-labelledby="color-radio-label"
            defaultValue="primary"
            name="color-radio-group"
          >
            <FormControlLabel value="primary" control={<Radio color="primary" />} label="Primary" />
            <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
            <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
            <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
            <FormControlLabel value="warning" control={<Radio color="warning" />} label="Warning" />
            <FormControlLabel value="info" control={<Radio color="info" />} label="Info" />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Sizes */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="size-radio-heading"
      >
        <Typography 
          id="size-radio-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Radio size="small" defaultChecked inputProps={{ 'aria-label': 'Small size' }} />
          <Radio defaultChecked inputProps={{ 'aria-label': 'Medium size' }} />
          <Radio 
            defaultChecked 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
            inputProps={{ 'aria-label': 'Large size' }}
          />
        </Stack>
      </Paper>

      {/* Label Placement */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="label-placement-heading"
      >
        <Typography 
          id="label-placement-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Label Placement
        </Typography>
        <FormControl>
          <FormLabel id="label-placement-radio-label">Label Placement</FormLabel>
          <RadioGroup
            row
            aria-labelledby="label-placement-radio-label"
            defaultValue="end"
            name="label-placement-radio-group"
          >
            <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
            <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" />
            <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
            <FormControlLabel value="end" control={<Radio />} label="End" labelPlacement="end" />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Custom Icons */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="custom-icons-heading"
      >
        <Typography 
          id="custom-icons-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Custom Icons
        </Typography>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel id="custom-icon-label">Favorite Icon</FormLabel>
            <RadioGroup
              row
              aria-labelledby="custom-icon-label"
              defaultValue="option1"
              name="custom-icon-group"
            >
              <FormControlLabel 
                value="option1" 
                control={
                  <Radio 
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    color="error"
                  />
                } 
                label="Option 1" 
              />
              <FormControlLabel 
                value="option2" 
                control={
                  <Radio 
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    color="error"
                  />
                } 
                label="Option 2" 
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="custom-icon-label-2">Custom Radio Icon</FormLabel>
            <RadioGroup
              row
              aria-labelledby="custom-icon-label-2"
              defaultValue="a"
              name="custom-icon-group-2"
            >
              <FormControlLabel 
                value="a" 
                control={
                  <Radio 
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    sx={{
                      color: theme.palette.info.main,
                      '&.Mui-checked': {
                        color: theme.palette.info.main,
                      },
                    }}
                  />
                } 
                label="Option A" 
              />
              <FormControlLabel 
                value="b" 
                control={
                  <Radio 
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    sx={{
                      color: theme.palette.info.main,
                      '&.Mui-checked': {
                        color: theme.palette.info.main,
                      },
                    }}
                  />
                } 
                label="Option B" 
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Paper>

      {/* Form Validation */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="validation-heading"
      >
        <Typography 
          id="validation-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Form Validation
        </Typography>
        <Box component="form" onSubmit={handleFormSubmit}>
          <FormControl error={formError} required>
            <FormLabel id="validation-radio-label">Select an option</FormLabel>
            <RadioGroup
              aria-labelledby="validation-radio-label"
              value={formValue}
              onChange={(event) => {
                setFormValue(event.target.value);
                setFormError(false);
              }}
              name="validation-radio-group"
            >
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </RadioGroup>
            {formError && (
              <FormHelperText>Please select an option</FormHelperText>
            )}
          </FormControl>
        </Box>
      </Paper>

      {/* Custom Styling */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="custom-styling-heading"
      >
        <Typography 
          id="custom-styling-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Custom Styling
        </Typography>
        <FormControl>
          <FormLabel id="custom-styling-label">Styled Radio Group</FormLabel>
          <RadioGroup
            aria-labelledby="custom-styling-label"
            defaultValue="premium"
            name="custom-styling-group"
          >
            <FormControlLabel 
              value="basic" 
              control={
                <Radio 
                  sx={{
                    color: theme.palette.grey[400],
                    '&.Mui-checked': {
                      color: theme.palette.success.main,
                    },
                  }}
                />
              } 
              label={
                <Box>
                  <Typography variant="body1" fontWeight={600}>Basic Plan</Typography>
                  <Typography variant="body2" color="text.secondary">Free forever</Typography>
                </Box>
              }
            />
            <FormControlLabel 
              value="premium" 
              control={
                <Radio 
                  sx={{
                    color: theme.palette.grey[400],
                    '&.Mui-checked': {
                      color: theme.palette.warning.main,
                    },
                  }}
                />
              } 
              label={
                <Box>
                  <Typography variant="body1" fontWeight={600}>Premium Plan</Typography>
                  <Typography variant="body2" color="text.secondary">$9.99/month</Typography>
                </Box>
              }
            />
            <FormControlLabel 
              value="enterprise" 
              control={
                <Radio 
                  sx={{
                    color: theme.palette.grey[400],
                    '&.Mui-checked': {
                      color: theme.palette.info.main,
                    },
                  }}
                />
              } 
              label={
                <Box>
                  <Typography variant="body1" fontWeight={600}>Enterprise Plan</Typography>
                  <Typography variant="body2" color="text.secondary">Custom pricing</Typography>
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Accessibility */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="accessibility-heading"
      >
        <Typography 
          id="accessibility-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Accessibility
        </Typography>
        <Typography variant="body2" sx={{ mb: theme.spacing(2) }}>
          Radio buttons with proper ARIA labels and helper text:
        </Typography>
        <FormControl>
          <FormLabel id="accessible-radio-label">Communication preference</FormLabel>
          <RadioGroup
            aria-labelledby="accessible-radio-label"
            aria-describedby="accessible-radio-helper"
            defaultValue="email"
            name="accessible-radio-group"
          >
            <FormControlLabel value="email" control={<Radio />} label="Email notifications" />
            <FormControlLabel value="sms" control={<Radio />} label="SMS notifications" />
            <FormControlLabel value="push" control={<Radio />} label="Push notifications" />
            <FormControlLabel value="none" control={<Radio />} label="No notifications" />
          </RadioGroup>
          <FormHelperText id="accessible-radio-helper">
            Choose how you would like to receive updates
          </FormHelperText>
        </FormControl>
      </Paper>

      {/* Practical Example */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="practical-example-heading"
      >
        <Typography 
          id="practical-example-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Practical Example: Subscription Plan
        </Typography>
        <Box>
          <Typography variant="h6" gutterBottom>
            Choose Your Plan
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
            Select the plan that best fits your needs
          </Typography>
          <FormControl fullWidth>
            <RadioGroup
              aria-label="subscription plans"
              value={plan}
              onChange={(event) => setPlan(event.target.value)}
              name="subscription-plan-group"
            >
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: theme.spacing(2), 
                  mb: theme.spacing(2),
                  border: plan === 'starter' ? `2px solid ${theme.palette.primary.main}` : undefined,
                }}
              >
                <FormControlLabel 
                  value="starter" 
                  control={<Radio />} 
                  label={
                    <Box sx={{ width: '100%' }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography variant="h6">Starter</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Perfect for individuals
                          </Typography>
                        </Box>
                        <Typography variant="h5" fontWeight={600}>
                          $0<Typography component="span" variant="body2">/mo</Typography>
                        </Typography>
                      </Stack>
                    </Box>
                  }
                  sx={{ width: '100%', m: 0 }}
                />
              </Paper>
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: theme.spacing(2), 
                  mb: theme.spacing(2),
                  border: plan === 'pro' ? `2px solid ${theme.palette.primary.main}` : undefined,
                  backgroundColor: plan === 'pro' ? 'action.selected' : 'transparent',
                }}
              >
                <FormControlLabel 
                  value="pro" 
                  control={<Radio />} 
                  label={
                    <Box sx={{ width: '100%' }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="h6">Pro</Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                px: 1, 
                                py: 0.5, 
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                borderRadius: 1,
                                fontWeight: 600,
                              }}
                            >
                              POPULAR
                            </Typography>
                          </Stack>
                          <Typography variant="body2" color="text.secondary">
                            For small teams
                          </Typography>
                        </Box>
                        <Typography variant="h5" fontWeight={600}>
                          $29<Typography component="span" variant="body2">/mo</Typography>
                        </Typography>
                      </Stack>
                    </Box>
                  }
                  sx={{ width: '100%', m: 0 }}
                />
              </Paper>
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: theme.spacing(2),
                  border: plan === 'enterprise' ? `2px solid ${theme.palette.primary.main}` : undefined,
                }}
              >
                <FormControlLabel 
                  value="enterprise" 
                  control={<Radio />} 
                  label={
                    <Box sx={{ width: '100%' }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography variant="h6">Enterprise</Typography>
                          <Typography variant="body2" color="text.secondary">
                            For large organizations
                          </Typography>
                        </Box>
                        <Typography variant="h5" fontWeight={600}>
                          Custom
                        </Typography>
                      </Stack>
                    </Box>
                  }
                  sx={{ width: '100%', m: 0 }}
                />
              </Paper>
            </RadioGroup>
          </FormControl>
          <Divider sx={{ my: theme.spacing(3) }} />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Selected: <strong>{plan.charAt(0).toUpperCase() + plan.slice(1)}</strong>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default RadioShowcase;

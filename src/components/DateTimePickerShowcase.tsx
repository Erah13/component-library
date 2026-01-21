import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const DateTimePickerShowcase: React.FC = () => {
  const theme = useTheme();
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [timeValue, setTimeValue] = useState<Dayjs | null>(dayjs());
  const [dateTimeValue, setDateTimeValue] = useState<Dayjs | null>(dayjs());
  const [staticValue, setStaticValue] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: theme.spacing(3) }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            mb: theme.spacing(4),
            fontWeight: 600,
          }}
        >
          Date & Time Pickers
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: theme.spacing(4),
            color: theme.palette.text.secondary,
          }}
        >
          Date and Time pickers provide a simple way to select a single value from a pre-determined set.
        </Typography>

        {/* Basic Date Picker */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: theme.spacing(3), 
            mb: theme.spacing(3),
            border: `1px solid ${theme.palette.divider}`,
          }}
          component="section"
          aria-labelledby="basic-date-picker-heading"
        >
          <Typography 
            id="basic-date-picker-heading"
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ mb: theme.spacing(3) }}
          >
            Basic Date Picker
          </Typography>
          <Stack spacing={3}>
            <DatePicker
              label="Basic Date Picker"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
            />
            <DatePicker
              label="Read Only"
              value={dateValue}
              readOnly
            />
            <DatePicker
              label="Disabled"
              disabled
            />
          </Stack>
        </Paper>

        {/* Date Picker Views */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: theme.spacing(3), 
            mb: theme.spacing(3),
            border: `1px solid ${theme.palette.divider}`,
          }}
          component="section"
          aria-labelledby="date-views-heading"
        >
          <Typography 
            id="date-views-heading"
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ mb: theme.spacing(3) }}
          >
            Different Views
          </Typography>
          <Stack spacing={3}>
            <DatePicker
              label="Year, Month, and Date"
              views={['year', 'month', 'day']}
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
            />
            <DatePicker
              label="Year and Month"
              views={['year', 'month']}
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
            />
            <DatePicker
              label="Month and Date"
              views={['month', 'day']}
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
            />
          </Stack>
        </Paper>

        {/* Desktop and Mobile Variants */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: theme.spacing(3), 
            mb: theme.spacing(3),
            border: `1px solid ${theme.palette.divider}`,
          }}
          component="section"
          aria-labelledby="variants-heading"
        >
          <Typography 
            id="variants-heading"
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ mb: theme.spacing(3) }}
          >
            Desktop and Mobile Variants
          </Typography>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Desktop Date Picker"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
            />
            <MobileDatePicker
              label="Mobile Date Picker"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
            />
          </Stack>
        </Paper>

        {/* Time Picker */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: theme.spacing(3), 
            mb: theme.spacing(3),
            border: `1px solid ${theme.palette.divider}`,
          }}
          component="section"
          aria-labelledby="time-picker-heading"
        >
          <Typography 
            id="time-picker-heading"
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ mb: theme.spacing(3) }}
          >
            Time Picker
          </Typography>
          <Stack spacing={3}>
            <TimePicker
              label="Basic Time Picker"
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue)}
            />
            <TimePicker
              label="Read Only"
              value={timeValue}
              readOnly
            />
            <TimePicker
              label="Disabled"
              disabled
            />
          </Stack>
        </Paper>

        {/* Date Time Picker */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: theme.spacing(3), 
            mb: theme.spacing(3),
            border: `1px solid ${theme.palette.divider}`,
          }}
          component="section"
          aria-labelledby="datetime-picker-heading"
        >
          <Typography 
            id="datetime-picker-heading"
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ mb: theme.spacing(3) }}
          >
            Date Time Picker
          </Typography>
          <Stack spacing={3}>
            <DateTimePicker
              label="Date & Time Picker"
              value={dateTimeValue}
              onChange={(newValue) => setDateTimeValue(newValue)}
            />
            <DateTimePicker
              label="Date & Time (12h)"
              value={dateTimeValue}
              onChange={(newValue) => setDateTimeValue(newValue)}
              ampm
            />
            <DateTimePicker
              label="Read Only"
              value={dateTimeValue}
              readOnly
            />
            <DateTimePicker
              label="Disabled"
              disabled
            />
          </Stack>
        </Paper>

        {/* Validation */}
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
            Validation
          </Typography>
          <Stack spacing={3}>
            <DatePicker
              label="Min and Max Date"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              minDate={dayjs().subtract(7, 'day')}
              maxDate={dayjs().add(7, 'day')}
              slotProps={{
                textField: {
                  helperText: 'Select a date within one week from today',
                },
              }}
            />
            <DatePicker
              label="Disable Past"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              disablePast
              slotProps={{
                textField: {
                  helperText: 'Past dates are disabled',
                },
              }}
            />
            <DatePicker
              label="Disable Future"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              disableFuture
              slotProps={{
                textField: {
                  helperText: 'Future dates are disabled',
                },
              }}
            />
            <DatePicker
              label="Disable Weekends"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              shouldDisableDate={(date) => {
                const day = date.day();
                return day === 0 || day === 6;
              }}
              slotProps={{
                textField: {
                  helperText: 'Weekends are disabled',
                },
              }}
            />
          </Stack>
        </Paper>

        {/* Different Formats */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: theme.spacing(3), 
            mb: theme.spacing(3),
            border: `1px solid ${theme.palette.divider}`,
          }}
          component="section"
          aria-labelledby="formats-heading"
        >
          <Typography 
            id="formats-heading"
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ mb: theme.spacing(3) }}
          >
            Different Formats
          </Typography>
          <Stack spacing={3}>
            <DatePicker
              label="MM/DD/YYYY"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              format="MM/DD/YYYY"
            />
            <DatePicker
              label="DD/MM/YYYY"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              format="DD/MM/YYYY"
            />
            <DatePicker
              label="YYYY-MM-DD"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              format="YYYY-MM-DD"
            />
            <DatePicker
              label="MMM DD, YYYY"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              format="MMM DD, YYYY"
            />
          </Stack>
        </Paper>

        {/* Static Date Picker */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: theme.spacing(3), 
            mb: theme.spacing(3),
            border: `1px solid ${theme.palette.divider}`,
          }}
          component="section"
          aria-labelledby="static-picker-heading"
        >
          <Typography 
            id="static-picker-heading"
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ mb: theme.spacing(3) }}
          >
            Static Date Picker
          </Typography>
          <Typography variant="body2" sx={{ mb: theme.spacing(2) }}>
            The date picker is rendered inline without a text field:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <StaticDatePicker
              value={staticValue}
              onChange={(newValue) => setStaticValue(newValue)}
            />
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
          <Stack spacing={3}>
            <DatePicker
              label="Custom Colors"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              slotProps={{
                textField: {
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.dark,
                      },
                    },
                  },
                },
              }}
            />
            <DateTimePicker
              label="Full Width"
              value={dateTimeValue}
              onChange={(newValue) => setDateTimeValue(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
            />
          </Stack>
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
            Date pickers with proper labels and helper text for screen readers:
          </Typography>
          <Stack spacing={3}>
            <DatePicker
              label="Birth Date"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              slotProps={{
                textField: {
                  helperText: 'Select your date of birth',
                  'aria-label': 'Birth date picker',
                },
              }}
            />
            <TimePicker
              label="Appointment Time"
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue)}
              slotProps={{
                textField: {
                  helperText: 'Choose your preferred appointment time',
                  'aria-label': 'Appointment time picker',
                },
              }}
            />
          </Stack>
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
            Practical Example: Event Booking Form
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom>
              Book Your Event
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
              Fill in the details for your event booking
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Event Name"
                fullWidth
                defaultValue="Team Meeting"
              />
              <DatePicker
                label="Event Date"
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
                disablePast
                slotProps={{
                  textField: {
                    fullWidth: true,
                    required: true,
                    helperText: 'Select a future date for your event',
                  },
                }}
              />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TimePicker
                  label="Start Time"
                  value={timeValue}
                  onChange={(newValue) => setTimeValue(newValue)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                    },
                  }}
                />
                <TimePicker
                  label="End Time"
                  value={dayjs(timeValue).add(1, 'hour')}
                  onChange={(newValue) => setTimeValue(newValue)}
                  minTime={timeValue || undefined}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                    },
                  }}
                />
              </Stack>
              <TextField
                label="Location"
                fullWidth
                defaultValue="Conference Room A"
              />
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                defaultValue="Quarterly planning meeting with the team"
              />
            </Stack>
          </Box>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
};

export default DateTimePickerShowcase;

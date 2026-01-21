import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  Avatar,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ChipShowcase: React.FC = () => {
  const theme = useTheme();
  const [chips, setChips] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete: { key: number; label: string }) => () => {
    setChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClick = () => {
    console.log('Chip clicked');
  };

  return (
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
        Chip
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: theme.spacing(4),
          color: theme.palette.text.secondary,
        }}
      >
        Chips are compact elements that represent an input, attribute, or action.
      </Typography>

      {/* Basic Chips */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="basic-chips-heading"
      >
        <Typography 
          id="basic-chips-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Basic Chips
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </Stack>
      </Paper>

      {/* Chip Actions */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="chip-actions-heading"
      >
        <Typography 
          id="chip-actions-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Chip Actions
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Clickable" onClick={handleClick} />
          <Chip label="Clickable" variant="outlined" onClick={handleClick} />
          <Chip label="Deletable" onDelete={handleDelete(chips[0])} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete(chips[0])} />
          <Chip 
            label="Clickable Deletable" 
            onClick={handleClick} 
            onDelete={handleDelete(chips[0])} 
          />
          <Chip 
            label="Clickable Deletable" 
            variant="outlined" 
            onClick={handleClick} 
            onDelete={handleDelete(chips[0])} 
          />
          <Chip 
            label="Clickable Link" 
            component="a" 
            href="#chip-showcase" 
            clickable 
          />
          <Chip 
            label="Custom Delete Icon" 
            onDelete={handleDelete(chips[0])} 
            deleteIcon={<DoneIcon />}
          />
          <Chip 
            label="Custom Delete Icon" 
            onDelete={handleDelete(chips[0])} 
            deleteIcon={<DeleteIcon />}
            variant="outlined"
          />
        </Stack>
      </Paper>

      {/* Chip with Icons */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="chip-icons-heading"
      >
        <Typography 
          id="chip-icons-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Chip with Icons
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip icon={<FaceIcon />} label="With Icon" />
          <Chip 
            icon={<FaceIcon />} 
            label="With Icon" 
            variant="outlined" 
          />
          <Chip 
            icon={<HomeIcon />} 
            label="Clickable" 
            onClick={handleClick} 
          />
          <Chip 
            icon={<HomeIcon />} 
            label="Clickable" 
            variant="outlined" 
            onClick={handleClick} 
          />
          <Chip 
            icon={<TagFacesIcon />} 
            label="Deletable" 
            onDelete={handleDelete(chips[0])} 
          />
          <Chip 
            icon={<TagFacesIcon />} 
            label="Deletable" 
            variant="outlined" 
            onDelete={handleDelete(chips[0])} 
          />
        </Stack>
      </Paper>

      {/* Chip with Avatar */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="chip-avatar-heading"
      >
        <Typography 
          id="chip-avatar-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Chip with Avatar
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip 
            avatar={<Avatar>M</Avatar>} 
            label="Avatar" 
          />
          <Chip 
            avatar={<Avatar>M</Avatar>} 
            label="Avatar" 
            variant="outlined" 
          />
          <Chip 
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />} 
            label="Clickable" 
            onClick={handleClick} 
          />
          <Chip 
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />} 
            label="Deletable" 
            onDelete={handleDelete(chips[0])} 
          />
          <Chip 
            avatar={<Avatar>M</Avatar>} 
            label="Clickable Deletable" 
            onClick={handleClick} 
            onDelete={handleDelete(chips[0])} 
          />
        </Stack>
      </Paper>

      {/* Color Chips */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="color-chips-heading"
      >
        <Typography 
          id="color-chips-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Color Chips
        </Typography>
        <Typography variant="body2" sx={{ mb: theme.spacing(2) }}>
          Filled Chips
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: theme.spacing(3) }}>
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Error" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Info" color="info" />
        </Stack>
        <Typography variant="body2" sx={{ mb: theme.spacing(2) }}>
          Outlined Chips
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Primary" color="primary" variant="outlined" />
          <Chip label="Secondary" color="secondary" variant="outlined" />
          <Chip label="Success" color="success" variant="outlined" />
          <Chip label="Error" color="error" variant="outlined" />
          <Chip label="Warning" color="warning" variant="outlined" />
          <Chip label="Info" color="info" variant="outlined" />
        </Stack>
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
        aria-labelledby="chip-sizes-heading"
      >
        <Typography 
          id="chip-sizes-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Sizes
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <Chip label="Small" size="small" />
          <Chip label="Medium" />
          <Chip label="Small" size="small" variant="outlined" />
          <Chip label="Medium" variant="outlined" />
        </Stack>
      </Paper>

      {/* Chip Array */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="chip-array-heading"
      >
        <Typography 
          id="chip-array-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Chip Array
        </Typography>
        <Typography variant="body2" sx={{ mb: theme.spacing(2) }}>
          An example of rendering multiple chips from an array with delete handlers:
        </Typography>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
          }}
          component="ul"
          elevation={0}
        >
          {chips.map((data) => {
            let icon;

            if (data.label === 'React') {
              icon = <TagFacesIcon />;
            }

            return (
              <Box component="li" key={data.key} sx={{ m: 0.5 }}>
                <Chip
                  icon={icon}
                  label={data.label}
                  onDelete={handleDelete(data)}
                />
              </Box>
            );
          })}
        </Paper>
      </Paper>

      {/* Custom Styled Chips */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="custom-chips-heading"
      >
        <Typography 
          id="custom-chips-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Custom Styled Chips
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip
            label="Custom Style"
            sx={{
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: theme.palette.success.dark,
              },
            }}
            onClick={handleClick}
          />
          <Chip
            label="Gradient Chip"
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              color: 'white',
              fontWeight: 600,
              border: 0,
            }}
            onClick={handleClick}
          />
          <Chip
            label="Rounded Chip"
            sx={{
              borderRadius: theme.spacing(5),
              backgroundColor: theme.palette.info.main,
              color: theme.palette.info.contrastText,
              fontSize: '0.875rem',
              height: 40,
              px: 2,
            }}
            onClick={handleClick}
          />
          <Chip
            label="Badge Style"
            size="small"
            sx={{
              backgroundColor: theme.palette.error.main,
              color: theme.palette.error.contrastText,
              fontWeight: 700,
              fontSize: '0.75rem',
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
          Chips with proper ARIA labels for screen readers:
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip 
            label="Accessible Chip" 
            aria-label="Accessible chip example"
          />
          <Chip 
            label="Click to filter" 
            onClick={handleClick}
            aria-label="Filter by category"
          />
          <Chip 
            label="Remove tag" 
            onDelete={handleDelete(chips[0])}
            aria-label="Remove category tag"
          />
          <Chip 
            icon={<LocalOfferIcon />}
            label="With Icon" 
            aria-label="Tag with icon"
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
          Practical Example: Blog Post Tags
        </Typography>
        <Box>
          <Typography variant="h6" gutterBottom>
            Understanding React Hooks
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(2) }}>
            A comprehensive guide to modern React development
          </Typography>
          <Divider sx={{ mb: theme.spacing(2) }} />
          <Box>
            <Typography variant="caption" display="block" sx={{ mb: theme.spacing(1) }}>
              Tags:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip 
                label="React" 
                color="primary" 
                size="small" 
                onClick={handleClick}
                icon={<LocalOfferIcon />}
              />
              <Chip 
                label="JavaScript" 
                color="secondary" 
                size="small" 
                onClick={handleClick}
                icon={<LocalOfferIcon />}
              />
              <Chip 
                label="Hooks" 
                color="info" 
                size="small" 
                onClick={handleClick}
                icon={<LocalOfferIcon />}
              />
              <Chip 
                label="Frontend" 
                color="success" 
                size="small" 
                onClick={handleClick}
                icon={<LocalOfferIcon />}
              />
              <Chip 
                label="Tutorial" 
                variant="outlined" 
                size="small" 
                onClick={handleClick}
              />
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChipShowcase;

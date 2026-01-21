import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Avatar,
  Collapse,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardShowcase: React.FC = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
        Card
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: theme.spacing(4),
          color: theme.palette.text.secondary,
        }}
      >
        Cards contain content and actions about a single subject.
      </Typography>

      {/* Basic Card */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="basic-card-heading"
      >
        <Typography 
          id="basic-card-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Basic Card
        </Typography>
        <Stack spacing={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </Paper>

      {/* Card with Media */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="media-card-heading"
      >
        <Typography 
          id="media-card-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Card with Media
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, bgcolor: theme.palette.primary.light }}
              title="Placeholder image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, bgcolor: theme.palette.secondary.light }}
              title="Placeholder image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contemplative Reptile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reptiles are tetrapod animals in the class Reptilia, comprising today's
                turtles, crocodilians, snakes, amphisbaenians, lizards, tuatara.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </Paper>

      {/* Card with Header and Avatar */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="header-card-heading"
      >
        <Typography 
          id="header-card-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Card with Header and Avatar
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: theme.palette.error.main }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2023"
            />
            <CardMedia
              sx={{ height: 194, bgcolor: theme.palette.warning.light }}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton 
                aria-label="add to favorites"
                onClick={() => setLiked(!liked)}
                color={liked ? 'error' : 'default'}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{ ml: 'auto' }}
              >
                <ExpandMoreIcon 
                  sx={{
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: theme.transitions.create('transform', {
                      duration: theme.transitions.duration.shortest,
                    }),
                  }}
                />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                  aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes.
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Stack>
      </Paper>

      {/* Card Variants */}
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
          Card Variants
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Outlined Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This card uses the outlined variant with a border instead of elevation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} elevation={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Elevated Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This card uses a higher elevation value for more prominent shadow.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </Paper>

      {/* Horizontal Card */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="horizontal-card-heading"
      >
        <Typography 
          id="horizontal-card-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Horizontal Layout
        </Typography>
        <Card sx={{ display: 'flex', maxWidth: 600 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Play</Button>
              <Button size="small">Add to Playlist</Button>
            </CardActions>
          </Box>
          <Box
            sx={{
              width: 151,
              bgcolor: theme.palette.info.light,
            }}
          />
        </Card>
      </Paper>

      {/* Custom Styled Cards */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: theme.spacing(3), 
          mb: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
        }}
        component="section"
        aria-labelledby="custom-cards-heading"
      >
        <Typography 
          id="custom-cards-heading"
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ mb: theme.spacing(3) }}
        >
          Custom Styled Cards
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Card 
            sx={{ 
              maxWidth: 345,
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              color: 'white',
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gradient Card
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                This card features a gradient background using primary and secondary colors.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: 'white' }}>Share</Button>
              <Button size="small" sx={{ color: 'white' }}>Learn More</Button>
            </CardActions>
          </Card>

          <Card 
            sx={{ 
              maxWidth: 345,
              border: `2px solid ${theme.palette.success.main}`,
              '&:hover': {
                boxShadow: `0 0 20px ${theme.palette.success.light}`,
                transform: 'scale(1.02)',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="success.main">
                Hover Effect Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hover over this card to see a smooth scaling animation and glow effect.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="success">Explore</Button>
            </CardActions>
          </Card>
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
          Cards with proper ARIA labels and semantic structure:
        </Typography>
        <Card sx={{ maxWidth: 345 }} component="article" aria-label="Blog post card">
          <CardHeader
            title="Accessible Card"
            subheader="January 21, 2026"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This card uses semantic HTML (article) and proper ARIA labels to ensure
              screen reader compatibility.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" aria-label="Read full article">Read More</Button>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
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
          Practical Example: Product Cards
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ 
                height: 200, 
                bgcolor: theme.palette.primary.light,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" color="white">
                Product
              </Typography>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Premium Headphones
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                $299.99
              </Typography>
              <Typography variant="body2" color="text.secondary">
                High-quality wireless headphones with active noise cancellation and 30-hour
                battery life.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
              <Button variant="contained" fullWidth>
                Add to Cart
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ 
                height: 200, 
                bgcolor: theme.palette.secondary.light,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" color="white">
                Product
              </Typography>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Smart Watch
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                $399.99
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Advanced fitness tracking, heart rate monitoring, and smartphone
                notifications on your wrist.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
              <Button variant="contained" fullWidth>
                Add to Cart
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ 
                height: 200, 
                bgcolor: theme.palette.success.light,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" color="white">
                Product
              </Typography>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wireless Speaker
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                $199.99
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Portable Bluetooth speaker with 360° sound, waterproof design, and
                12-hour playtime.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
              <Button variant="contained" fullWidth>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CardShowcase;

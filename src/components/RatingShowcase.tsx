import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Rating,
  Stack,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: any) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

/**
 * RatingShowcase component displays all Material UI Rating variants, sizes, and states
 * Following Material Design 3 guidelines, MUI v6 specifications, and WCAG 2.2 AA standards
 */
const RatingShowcase: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);

  return (
    <Container maxWidth="lg" sx={{ py: theme.spacing(4) }}>
      {/* Page Header */}
      <Box component="section" aria-labelledby="rating-page-title" sx={{ mb: theme.spacing(6) }}>
        <Typography id="rating-page-title" variant="h2" component="h1" gutterBottom>
          Rating Component
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ratings provide insight into opinions and experiences, allowing users to view and provide
          feedback. They help users quickly assess the quality of items such as products, services,
          or content.
        </Typography>
      </Box>

      {/* Basic Rating Section */}
      <Paper component="section" aria-labelledby="basic-rating-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="basic-rating-heading" variant="h4" component="h2" gutterBottom>
          Basic Rating
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Basic rating component with default settings.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Controlled
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Read only
            </Typography>
            <Rating name="read-only" value={3} readOnly />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Disabled
            </Typography>
            <Rating name="disabled" value={2} disabled />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              No rating given
            </Typography>
            <Rating name="no-value" value={null} />
          </Box>
        </Stack>
      </Paper>

      {/* Rating Precision Section */}
      <Paper component="section" aria-labelledby="rating-precision-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="rating-precision-heading" variant="h4" component="h2" gutterBottom>
          Rating Precision
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          The rating can display any floating-point value with the precision prop. Use half-increment
          or customize the precision value.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Half precision
            </Typography>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Read only half precision
            </Typography>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          </Box>
        </Stack>
      </Paper>

      {/* Hover Feedback Section */}
      <Paper component="section" aria-labelledby="hover-feedback-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="hover-feedback-heading" variant="h4" component="h2" gutterBottom>
          Hover Feedback
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Display a label on hover to help users pick the correct rating value.
        </Typography>
        
        <Box>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(_, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            <Typography variant="body2" sx={{ ml: theme.spacing(2), display: 'inline' }}>
              {labels[hover !== -1 ? hover : value]}
            </Typography>
          )}
        </Box>
      </Paper>

      {/* Rating Sizes Section */}
      <Paper component="section" aria-labelledby="rating-sizes-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="rating-sizes-heading" variant="h4" component="h2" gutterBottom>
          Rating Sizes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use the size prop to change the size of the rating component.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Small
            </Typography>
            <Rating name="size-small" defaultValue={2} size="small" />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Medium (Default)
            </Typography>
            <Rating name="size-medium" defaultValue={2} />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Large
            </Typography>
            <Rating name="size-large" defaultValue={2} size="large" />
          </Box>
        </Stack>
      </Paper>

      {/* Custom Icon Section */}
      <Paper component="section" aria-labelledby="custom-icon-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="custom-icon-heading" variant="h4" component="h2" gutterBottom>
          Custom Icons
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Customize the icons with the icon and emptyIcon props.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Heart icons
            </Typography>
            <Rating
              name="customized-color"
              defaultValue={2}
              getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: theme.palette.error.main,
                },
                '& .MuiRating-iconHover': {
                  color: theme.palette.error.dark,
                },
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Emoji feedback
            </Typography>
            <Rating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Box>
        </Stack>
      </Paper>

      {/* Radio Group Section */}
      <Paper component="section" aria-labelledby="radio-group-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="radio-group-heading" variant="h4" component="h2" gutterBottom>
          Radio Group
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          The rating component is built on top of a radio group, so you can use
          highlightSelectedOnly to restore the natural behavior.
        </Typography>
        
        <Box>
          <Rating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
          />
        </Box>
      </Paper>

      {/* Different Icon Set Section */}
      <Paper component="section" aria-labelledby="icon-set-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="icon-set-heading" variant="h4" component="h2" gutterBottom>
          Different Icon Sets
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Use different numbers of icons with the max prop.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              3 stars
            </Typography>
            <Rating name="customized-3" defaultValue={2} max={3} />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              7 stars
            </Typography>
            <Rating name="customized-7" defaultValue={3.5} max={7} />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              10 stars
            </Typography>
            <Rating name="customized-10" defaultValue={7} max={10} />
          </Box>
        </Stack>
      </Paper>

      {/* Custom Styled Rating Section */}
      <Paper component="section" aria-labelledby="custom-rating-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="custom-rating-heading" variant="h4" component="h2" gutterBottom>
          Custom Styled Rating
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          Customize the rating appearance using the sx prop.
        </Typography>
        
        <Stack spacing={theme.spacing(3)}>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Success green
            </Typography>
            <Rating
              name="success-rating"
              defaultValue={3}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: theme.palette.success.main,
                },
                '& .MuiRating-iconHover': {
                  color: theme.palette.success.dark,
                },
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Warning orange
            </Typography>
            <Rating
              name="warning-rating"
              defaultValue={3}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: theme.palette.warning.main,
                },
                '& .MuiRating-iconHover': {
                  color: theme.palette.warning.dark,
                },
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Info blue
            </Typography>
            <Rating
              name="info-rating"
              defaultValue={3}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: theme.palette.info.main,
                },
                '& .MuiRating-iconHover': {
                  color: theme.palette.info.dark,
                },
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              Large with custom color
            </Typography>
            <Rating
              name="large-custom"
              defaultValue={4}
              size="large"
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#ff6d75',
                },
                '& .MuiRating-iconHover': {
                  color: '#ff3d47',
                },
              }}
            />
          </Box>
        </Stack>
      </Paper>

      {/* Accessible Rating Section */}
      <Paper component="section" aria-labelledby="accessible-rating-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="accessible-rating-heading" variant="h4" component="h2" gutterBottom>
          Accessibility
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          The rating component is accessible by default with proper ARIA attributes.
        </Typography>
        
        <Stack spacing={theme.spacing(2)}>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              With aria-label
            </Typography>
            <Rating
              name="accessible-rating"
              value={3}
              onChange={(_, newValue) => {
                setValue(newValue);
              }}
              aria-label="Product rating"
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
              With getLabelText for screen readers
            </Typography>
            <Rating
              name="accessible-text-rating"
              value={4}
              getLabelText={(value: number) => `${value} Star${value !== 1 ? 's' : ''}`}
            />
          </Box>
        </Stack>
      </Paper>

      {/* Product Review Example Section */}
      <Paper component="section" aria-labelledby="review-example-heading" elevation={0} sx={{ p: theme.spacing(4), mb: theme.spacing(4) }}>
        <Typography id="review-example-heading" variant="h4" component="h2" gutterBottom>
          Product Review Example
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: theme.spacing(3) }}>
          A practical example of rating in a product review layout.
        </Typography>
        
        <Stack spacing={theme.spacing(4)}>
          <Box
            sx={{
              p: theme.spacing(3),
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: theme.spacing(1),
            }}
          >
            <Typography variant="h6" gutterBottom>
              Wireless Headphones
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(1), mb: theme.spacing(2) }}>
              <Rating name="product-rating" value={4.5} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary">
                4.5 out of 5 (142 reviews)
              </Typography>
            </Box>
            <Typography variant="body2" paragraph>
              Premium wireless headphones with active noise cancellation, superior sound quality,
              and long battery life.
            </Typography>
            <Typography variant="h5" color="primary">
              $299.99
            </Typography>
          </Box>

          <Box
            sx={{
              p: theme.spacing(3),
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: theme.spacing(1),
            }}
          >
            <Typography variant="h6" gutterBottom>
              Rate this product
            </Typography>
            <Box sx={{ mb: theme.spacing(2) }}>
              <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
                Overall Rating
              </Typography>
              <Rating
                name="user-rating"
                value={value}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
                precision={0.5}
                size="large"
              />
              {value !== null && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: theme.spacing(1) }}>
                  You rated this product {value} out of 5 stars
                </Typography>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              p: theme.spacing(3),
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: theme.spacing(1),
            }}
          >
            <Typography variant="h6" gutterBottom>
              Detailed Ratings
            </Typography>
            <Stack spacing={theme.spacing(2)}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
                <Typography variant="body2" sx={{ minWidth: 100 }}>
                  Sound Quality
                </Typography>
                <Rating name="sound-quality" defaultValue={5} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                  5.0
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
                <Typography variant="body2" sx={{ minWidth: 100 }}>
                  Comfort
                </Typography>
                <Rating name="comfort" defaultValue={4.5} precision={0.5} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                  4.5
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
                <Typography variant="body2" sx={{ minWidth: 100 }}>
                  Battery Life
                </Typography>
                <Rating name="battery" defaultValue={4} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                  4.0
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
                <Typography variant="body2" sx={{ minWidth: 100 }}>
                  Value
                </Typography>
                <Rating name="value" defaultValue={4.5} precision={0.5} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                  4.5
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default RatingShowcase;

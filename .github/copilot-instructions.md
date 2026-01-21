# GitHub Copilot Instructions for Figma to Material UI Conversion

## Project Context
This project converts Figma designs to React components using Material UI v6 and TypeScript.

## Code Generation Rules

### 1. Always Use Material UI Components
- Use MUI components instead of native HTML elements
- Import from: `@mui/material` and `@mui/icons-material`
- Example: `Button`, `TextField`, `Box`, `Container`, `Typography`

### 2. TypeScript Types
- All components must have proper TypeScript types
- Define prop interfaces with `interface ComponentNameProps`
- Use React.FC or explicit function typing

### 3. Theme Integration
- Use theme spacing: `theme.spacing(2)` not hardcoded pixels
- Use theme colors: `theme.palette.primary.main`
- Access theme with: `import { useTheme } from '@mui/material/styles'`

### 4. Responsive Design
- Use MUI's sx prop for styling
- Use breakpoints: `{ xs: 12, sm: 6, md: 4 }` for Grid
- Mobile-first approach

### 5. File Organization
- Components go in: `src/components/[ComponentName].tsx`
- One component per file
- Export as default

### 6. Figma Design Extraction
When fetching from Figma MCP:
1. Extract all design tokens (colors, spacing, typography)
2. Map Figma components to closest MUI equivalents
3. Preserve exact spacing and visual hierarchy
4. Extract text content and alt text for images

### 7. Code Quality
- Use functional components with hooks
- Prefer composition over inheritance
- Keep components focused and single-purpose
- Add comments for complex logic

### 8. Styling Approach
- Use `sx` prop for component-level styles
- Create theme customizations in `src/theme.ts`
- Avoid inline styles
- Use MUI's emotion-based styling

### 9. Accessibility (WCAG 2.2 AA Compliance)
All components and pages MUST meet WCAG 2.2 Level AA standards:

#### Color and Contrast
- Text contrast ratio: minimum 4.5:1 for normal text (< 18pt or < 14pt bold)
- Large text contrast ratio: minimum 3:1 for text ≥ 18pt or ≥ 14pt bold
- UI components and graphical objects: minimum 3:1 contrast ratio
- Never rely on color alone to convey information

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Logical tab order through page content
- Visible focus indicators on all focusable elements
- No keyboard traps
- Skip navigation links for repetitive content

#### Form Accessibility
- All form inputs must have associated labels
- Use proper ARIA labels when visual labels aren't sufficient
- Provide clear error messages and validation feedback
- Use `aria-describedby` for helper text and errors
- Group related form controls with `fieldset` and `legend`

#### Semantic HTML and ARIA
- Use semantic HTML elements (`button`, `nav`, `main`, `article`, etc.)
- Add ARIA labels for icon-only buttons: `aria-label="descriptive text"`
- Use `aria-labelledby` and `aria-describedby` appropriately
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Use ARIA live regions for dynamic content updates

#### Interactive Elements
- Minimum touch target size: 24x24 CSS pixels (preferably 44x44)
- Sufficient spacing between interactive elements
- Clear indication of current state (selected, active, disabled)
- Provide text alternatives for icon-only controls

#### Content and Structure
- Meaningful page titles
- Clear and descriptive link text (avoid "click here")
- Alternative text for informative images
- Proper document structure and landmarks
- Readable and understandable content

#### Testing Requirements
- Test with keyboard only (no mouse)
- Test with screen reader (VoiceOver, NVDA, or JAWS)
- Verify color contrast with automated tools
- Check focus order and visibility

## Example Component Structure

```typescript
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

const MyComponent: React.FC = ({ title, onAction }) => {
  const theme = useTheme();

  return (
    <Box sx={{ p: theme.spacing(3) }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Button 
        variant="contained" 
        onClick={onAction}
        sx={{ mt: theme.spacing(2) }}
      >
        Click Me
      </Button>
    </Box>
  );
};

export default MyComponent;
```

## When Converting from Figma
1. Ask Copilot to fetch the Figma design via MCP
2. Request extraction of design tokens
3. Generate component with exact visual match
4. Review and refine spacing/colors as needed

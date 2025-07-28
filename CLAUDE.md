# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (includes LLMs.txt generation)
- `npm run preview` - Preview production build

## Project Architecture

This is a React single-page application for QuickwellAI's website built with:

### Tech Stack
- **React 18** with JSX
- **Vite** as build tool and dev server
- **Tailwind CSS** for styling with custom animations
- **Framer Motion** for animations and scroll effects
- **Radix UI** components for accessible UI primitives
- **Lucide React** for icons

### Directory Structure

- `src/components/` - Component library organized by type:
  - `layout/` - Navbar, Footer
  - `sections/` - Page sections (Hero, Team, Contact, etc.)
  - `ui/` - Reusable UI components (buttons, toasts)
- `src/lib/` - Utility functions
- `plugins/visual-editor/` - Custom Vite plugins for inline editing
- `tools/` - Build scripts (LLMs.txt generation)

### Key Features

**Visual Editor Integration**: Custom Vite plugins enable inline editing in development:
- `vite-plugin-react-inline-editor.js` - Adds edit capabilities to React components
- `vite-plugin-edit-mode.js` - Toggle edit mode functionality
- Visual editor styles and popup UI defined in `visual-editor-config.js`

**LLMs.txt Generation**: `tools/generate-llms.js` automatically extracts page metadata from Helmet components and generates `public/llms.txt` during build.

**Component Architecture**: Single-page app structure with all sections rendered in `App.jsx`:
- Hero → WhyQuickBind → PipelineDeepDive → AnimationStrip → UseCaseCarousel → PlatformRoadmap → Team → Resources → Contact → Footer

### Styling Approach

- Uses Tailwind with custom configuration
- Dark theme with black background (`bg-black text-white`)
- Custom animations and scroll effects
- Responsive design with mobile considerations

### Alias Configuration

- `@/` maps to `src/` directory for clean imports

### Build Process

The build command runs `generate-llms.js` before Vite build to ensure LLMs.txt is current with page metadata.
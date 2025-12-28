# CLAUDE.md - Instructions for Claude Code

## Project Overview
This is the **MediFind Portfolio Website** - a Next.js application showcasing MediFind, an AI-powered healthcare platform that helps people make smarter, safer healthcare decisions through prescription scanning.

## Interaction Guidelines

### 1. Discussion First
Before implementing anything, let's discuss first to make sure we're aligned on the idea. Don't jump into execution immediately - understand the requirements, clarify ambiguities, and confirm the approach.

### 2. Think Harder, Plan Before Execution
- Analyze the task thoroughly before writing any code
- Create a clear plan with steps
- Consider edge cases and potential issues
- Use `EnterPlanMode` for complex features
- Document the approach before implementing

### 3. Wait for Explicit Approval
**Only execute after I explicitly say "go", "proceed", "execute", or similar confirmation.**
- Present the plan first
- Wait for my approval
- If I haven't said go, keep discussing

### 4. Ask Questions, Don't Assume
- If something is unclear, ASK
- Don't make unsure assumptions
- Use `AskUserQuestion` tool when needed
- Better to clarify than to redo work

## Tech Stack
- **Framework:** Next.js 15.1.7 with App Router
- **Styling:** CSS Modules + Tailwind CSS
- **Language:** TypeScript
- **i18n:** Custom React Context (EN/VI)
- **Animations:** Intersection Observer + CSS transitions

## Project Structure
```
app/                    # Next.js App Router pages
components/
  layout/              # Navbar, Footer
  sections/            # Page sections (Hero, Problem, Solution, etc.)
  ui/                  # Reusable UI components
context/               # React contexts (LanguageContext)
locales/               # Translation files (en.json, vi.json)
styles/                # CSS Modules
public/                # Static assets
```

## Brand Colors
- Primary Red: `#C41E3A`
- Primary Dark: `#9E1830`
- Secondary Blue: `#1E88E5`
- Text Gray: `#7D7987`

## Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Important Notes
- The website is bilingual (English/Vietnamese) - use the `t()` function from `useLanguage()` hook
- Wrap `t()` returns with `String()` when rendering in JSX
- Use `AnimatedSection` wrapper for scroll animations
- Follow existing component patterns when adding new features

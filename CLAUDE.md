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

## UI/UX Review Process

### When to Invoke the UI/UX Reviewer
**IMPORTANT:** Proactively use the `ui-ux-playwright-reviewer` agent for UI-related work. Don't wait for the user to ask.

Invoke the reviewer when:
- After implementing new UI components
- After making significant visual or UX changes
- When adding new page sections or layouts
- Before considering a UI implementation task complete
- When user shares new component code (proactive review)

### Review Workflow
1. **Invoke the Agent**
   - Use the Task tool with `subagent_type: "ui-ux-playwright-reviewer"`
   - Provide clear context about what was implemented
   - Specify any particular concerns or areas to focus on

2. **Analyze Feedback**
   - Review the agent's feedback on visual design, user experience, and accessibility
   - Prioritize critical issues (accessibility violations, broken functionality)
   - Consider suggestions for improvements

3. **Implement Improvements**
   - Address accessibility issues immediately (WCAG compliance is mandatory)
   - Fix visual inconsistencies and UX problems
   - Make enhancements that significantly improve user experience

4. **Iterate if Needed**
   - Re-run the reviewer after significant changes
   - Continue iterating until UI/UX meets quality standards
   - Document any deliberate choices that differ from suggestions

### Review Focus Areas
The ui-ux-playwright-reviewer agent will assess:
- **Visual Design:** Layout, spacing, typography, color usage, responsiveness
- **User Experience:** Navigation flow, interaction patterns, feedback mechanisms
- **Accessibility:** WCAG compliance, keyboard navigation, screen reader support, ARIA labels
- **Consistency:** Adherence to design system and brand guidelines
- **Performance:** Animation smoothness, loading states, visual polish

### Integration with Development Process
- Review happens AFTER implementation but BEFORE marking tasks complete
- Part of the "Think Harder" process for UI work
- Blocked by critical accessibility or UX issues until resolved
- Iterate on feedback to achieve high-quality results

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

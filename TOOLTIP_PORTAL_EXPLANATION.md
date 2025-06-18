# Tooltip Portal Refactor Explanation

## Problem

When you showed a tooltip on a project card, it sometimes appeared behind other cards. This happened because the tooltip was stuck inside the card’s stacking context, so other cards could cover it.

## Solution: React Portal

A React Portal lets you render something (like a tooltip) outside the normal parent-child structure in the DOM. This means the tooltip can appear above everything else, no matter where it is in your React code.

## What Was Added

### TooltipPortal Component

A new file: `TooltipPortal.tsx`.
This component uses React’s `createPortal` to render its children (the tooltip) directly into the `<body>` of the HTML, not inside the card.

#### Key lines explained:

- `import { type ReactNode, useEffect, useRef } from "react";`
  - `ReactNode` is a type for anything you can render in React (text, elements, etc).
  - `useEffect` and `useRef` are React hooks for managing side effects and references.
- `import { createPortal } from "react-dom";`
  - `createPortal` is the function that does the magic of rendering outside the normal tree.
- The component takes `children` (what to show in the tooltip) and `position` (where to show it on the screen).
- It creates a new `<div>` and appends it to the `<body>` when the tooltip is shown, and removes it when hidden.
- The tooltip is rendered at the exact position on the screen, above everything else (`zIndex: 9999`).

### Changes in ProjectCard.tsx

- Imported the new `TooltipPortal`.
- Used a `ref` to track the description area and calculate its position on the screen.
- When the mouse enters, it calculates where the tooltip should appear and shows it using the portal.
- When the mouse leaves, it hides the tooltip.

## Result

- The tooltip is now rendered at the top level of the page, not inside the card.
- It always appears above all cards, never behind.
- The position is calculated so it appears just below the description you hovered.

---

If you want a visual or code walkthrough for any specific part, just ask!

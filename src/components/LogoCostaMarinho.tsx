"use client";

import * as React from "react";

/**
 * Costa Marinho Engenharia — logo lockup (mark + wordmark).
 *
 * - The mark is a hand-traced SVG path recreated from the supplied artwork
 *   (vector, not a raster image), so it stays crisp at any size.
 * - Color adapts to light/dark automatically:
 *     1) if the app uses Tailwind's/`next-themes`' class strategy, add a
 *        `dark` class anywhere above this component in the tree;
 *     2) otherwise it falls back to the OS-level `prefers-color-scheme`.
 * - Everything scales off a single `size` prop (mark height in px), so the
 *   whole lockup resizes as one unit — pass a responsive value from your
 *   layout (e.g. a clamp()) if you want it to scale with viewport width.
 *
 * Usage:
 *   <CostaMarinhoLogo />
 *   <CostaMarinhoLogo size={32} />
 *   <CostaMarinhoLogo showWordmark={false} aria-label="Costa Marinho" />
 */

export interface CostaMarinhoLogoProps {
  /** Height of the mark in pixels; the wordmark scales to match. @default 48 */
  size?: number;
  /** Render the "COSTA MARINHO / ENGENHARIA" wordmark next to the mark. @default true */
  showWordmark?: boolean;
  /** Extra class names on the root element. */
  className?: string;
  /** Inline styles merged onto the root element. */
  style?: React.CSSProperties;
}

const MARK_PATH =
  "M115 8 L8 81 L9 184 L82 233 L82 173 L56 155 L56 109 L158 39 Z " +
  "M202 68 L100 138 L100 245 L114 255 L150 231 L150 165 L170 152 L170 217 L221 182 L221 81 Z";

export default function CostaMarinhoLogo({
  size = 48,
  showWordmark = true,
  className = "",
  style,
}: CostaMarinhoLogoProps) {
  return (
    <div
      role="img"
      aria-label="Costa Marinho Engenharia"
      className={["cm-logo", className].filter(Boolean).join(" ")}
      style={{ ["--cm-size" as string]: `${size}px`, ...style }}
    >
      <svg
        className="cm-logo__mark"
        viewBox="0 0 230 265"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path d={MARK_PATH} />
      </svg>

      {showWordmark && (
        <div className="cm-logo__text">
          <span className="cm-logo__title">Costa Marinho</span>
          <span className="cm-logo__subtitle">Engenharia</span>
        </div>
      )}

      <style>{`
        .cm-logo {
          --cm-ink-light: --primary-foreground;
          --cm-ink-dark: --primary;

          display: inline-flex;
          align-items: center;
          gap: calc(var(--cm-size) * 0.3);
          color: var(--cm-ink-light);
          line-height: 1;
        }

        /* Fallback: no manual theme toggle in the app, follow the OS setting */
        @media (prefers-color-scheme: dark) {
          .cm-logo { color: var(--cm-ink-dark); }
        }

        /* Preferred: respect an explicit .dark ancestor class (Tailwind, next-themes, etc.) */
        .dark .cm-logo {
          color: var(--cm-ink-dark);
        }

        .cm-logo__mark {
          width: calc(var(--cm-size) * 0.868);
          height: var(--cm-size);
          flex: none;
          display: block;
          fill: currentColor;
        }

        .cm-logo__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: calc(var(--cm-size) * 0.01);
        }

        .cm-logo__title {
          font-family: "Poppins", "Montserrat", ui-sans-serif, system-ui, sans-serif;
          font-weight: 800;
          font-size: calc(var(--cm-size) * 0.42);
          letter-spacing: 0.01em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .cm-logo__subtitle {
          font-family: "Poppins", "Montserrat", ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
          font-size: calc(var(--cm-size) * 0.22);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        @media (prefers-reduced-motion: no-preference) {
          .cm-logo__mark {
            transition: fill 0.2s ease;
          }
        }
      `}</style>
    </div>
  );
}
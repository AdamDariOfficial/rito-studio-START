<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md — RITO Studio START

## Project identity

- Project: `RITO Studio START`
- Family: Tretnix Beauty & Wellness `v1.1`
- Authorized plan: START only
- Canonical Tretnix Knowledge baseline: `main@7d206d9`
- Approved decision: `TRX-DEC-033`
- Concept status: fictional portfolio demo

## Source hierarchy

Use this precedence when instructions conflict:

1. approved decisions;
2. shared Tretnix development standards;
3. project documentation in `docs/`;
4. approved current task specification;
5. behavior directly verified in code;
6. prior conversations still requiring formalization.

Before non-trivial work, inspect this file and all relevant project documentation. Do not treat earlier chat messages as permanent decisions unless documented here or in `docs/`.

## Authorized scope

Only RITO Studio START is authorized:

- premium mobile-first one-page website;
- routes `/`, `/privacy`, `/cookie` and real 404 handling;
- same-page anchors `#trattamenti`, `#metodo`, `#studio`, `#contatti`;
- static content and local typed configuration;
- honest demo/external/contact booking behavior;
- fictional data only;
- no backend.

## Explicit exclusions

Do not create or develop:

- RITO Studio BUSINESS;
- RITO Studio BUSINESS PLUS;
- Supabase, databases or migrations;
- authentication or accounts;
- server functions;
- native booking, live availability or checkout;
- CRM, admin or management features;
- forms that submit or persist personal data;
- production infrastructure, domains or deploys;
- real client, salon or customer data.

A prepared prompt for a future plan is not authorization to execute it.

## Development constraints

- Mobile-first.
- No unintended horizontal overflow.
- Editorial mobile sections show text before the image; hero, gallery and documented visual-first sections may be exceptions.
- Do not duplicate markup solely to change responsive order.
- New routes open at the top immediately, never with smooth route reset.
- Same-page anchors may use controlled smooth scrolling.
- Preserve direct URL, refresh, browser Back and Forward behavior.
- Below-the-fold reveals start when content enters the viewport.
- Respect `prefers-reduced-motion`; content must remain visible without motion.
- Preserve the canonical palette and typography in `docs/DESIGN.md`.
- Canonical accent: `#6A3F4B`.
- Do not copy Hospitality’s visual identity.
- Avoid generic SaaS patterns, repetitive card grids, glassmorphism, gradient text and decorative motion without purpose.
- Centralize repeated contact, route, CTA, hours, gallery and booking configuration.
- Do not add dependencies without a concrete documented need.
- Do not change unrelated code, copy, styling or functionality.

## Accessibility and demo integrity

- Use semantic landmarks and correct heading order.
- Preserve visible keyboard focus and adequate touch targets.
- All custom controls must work by keyboard.
- Mobile drawers must support Escape, focus containment/return and body scroll lock.
- Use meaningful alt text; decorative imagery uses empty alt.
- Every public route uses `noindex, follow`.
- Do not publish fictional commercial structured data.
- Synthetic reviews are allowed only as explicitly typed demo fixtures under `TRX-DEC-040`, with
  neutral wording, no real-person or platform attribution, no fake URLs and no commercial review
  structured data. Do not invent awards, credentials, guarantees, metrics or medical claims.
- Demo actions must never pretend that a real reservation or submission occurred.

## Tretnix attribution

Include discreetly:

> Progettato e sviluppato da Tretnix

Link only `Tretnix` to `https://tretnix.com`. Preserve visible keyboard focus and use `target="_blank"` with `rel="noopener noreferrer"` when opening a new tab.

## Writer coordination

- One writer at a time.
- Lovable and another editor must not modify overlapping files concurrently.
- During a Lovable implementation pass, Lovable is the only writer.
- Reviewers begin read-only.
- Do not force-push or rewrite commits already synchronized with Lovable.

## Validation and reporting

Use only scripts present in `package.json`. When available, run typecheck, lint, tests and build.

Never claim that a check, browser QA, deployment, migration or security review passed unless direct evidence exists. Report:

- files changed;
- commands executed;
- exit codes and results;
- browser checks actually performed;
- remaining risks and missing evidence.

Do not commit, push, merge, publish, deploy, enable a database or change infrastructure without the applicable explicit gate.

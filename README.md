# RITO Studio START

RITO Studio START is a fictional Tretnix portfolio concept for the Beauty & Wellness family.

The authorized product is a premium mobile-first one-page website with `/`, `/privacy`, `/cookie` and a real 404 experience. It uses fictional data and has no backend, authentication or native booking engine.

<!-- RITO_START_V101_CLOSURE:BEGIN -->
## Current patch-release closure — 6 September 2026

PR #15 (`fix(rito-start): emphasize hero booking CTA`) merged the approved Hero booking CTA
refinement into `main`. The current application baseline before this documentation closure is:

```text
8d51a8f2b5e5589940034a872920808009fac6b9
```

The patch is intentionally limited to `src/components/sections/Hero.tsx`: the primary Hero booking
action now uses the same `MessageCircle` affordance and `Prenota un appuntamento` label already
used by the final booking CTA. Header and mobile-drawer booking actions remain compact and unchanged.

The historical annotated tag `family-start-v1.0` remains immutable at
`74ee03c4d39a974872f94f53d14ec2873815ccf7`. The target for this patch release is `family-start-v1.0.1`, which becomes
canonical only after the documentation-closure merge commit is verified, the targeted browser QA
gate is explicitly recorded, and the annotated tag is created and verified locally and remotely.

No backend, database, authentication, native booking, route, dependency, asset or infrastructure
change is introduced by this patch release. The project owner explicitly confirmed the post-PR-15 targeted browser QA as satisfactory.
No new production-origin QA is recorded or claimed.
<!-- RITO_START_V101_CLOSURE:END -->

## Canonical documentation

Read `AGENTS.md` first, then:

- `docs/PRODUCT.md`
- `docs/DESIGN.md`
- `docs/CONTENT.md`
- `docs/ROUTES.md`
- `docs/ANIMATIONS.md`
- `docs/TESTING.md`
- `docs/DECISIONS.md`
- `docs/ASSET_PLAN.md`
- `docs/STATUS.md`
- `docs/APPROVAL.md`
- `docs/START_BUSINESS_CONTRACT.md`

The Lovable Project Knowledge source is stored in:

```text
compiled/LOVABLE_START_PROJECT_KNOWLEDGE.md
```

The authorized START prompt is stored in:

```text
prompts/LOVABLE_START_PROMPT.md
```

## Status

The final START application polish was merged through PR #13 on
`main@523958b51e0d952c963380e6d384365b286953ca`, after the method/footer/FAQ polish merged
through PR #12. The current application baseline passed the recorded automated checks and the
project owner approved the final browser QA on 5 September 2026.

RITO Studio START is explicitly approved for freeze. The canonical freeze becomes complete only
when the final documentation-closure merge commit is identified by the verified annotated tag
`family-start-v1.0`.

RITO Studio BUSINESS reconciliation is authorized to begin after that tag is verified.
BUSINESS PLUS remains outside scope. Backend, database, authentication and native booking remain
outside the START baseline.

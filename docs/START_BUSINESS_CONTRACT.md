# RITO Studio — START → BUSINESS Inheritance Contract

**Prepared:** 3 August 2026
**Updated:** 5 September 2026
**Status:** `BUSINESS_RECONCILIATION_AUTHORIZED_PENDING_VERIFIED_TAG`
**Applies to:** existing RITO Studio BUSINESS reconciliation and future lineage

## Activation gate

This contract becomes active only after all of the following exist:

1. the documentation closure PR is merged;
2. RITO Studio START is explicitly approved;
3. the verified documentation-closure merge commit is frozen;
4. an approved annotated tag identifies that exact commit;
5. the local and remote tag targets are verified;
6. the user separately authorizes RITO Studio BUSINESS.

Until then, this document is preparation only. It does not authorize a new
repository, implementation, Lovable work, credits, backend, deployment or
migration.

## Canonical source

The canonical BUSINESS source will be the approved annotated START tag, not an
earlier chat, branch, untagged commit or reconstructed design.

The annotated tag message and GitHub tag metadata are the authoritative record
of the frozen commit SHA and approval. A repository file is not required to
self-record the SHA of the commit that contains it.

## Inherited identity

BUSINESS must preserve the frozen START identity unless a later approved
decision explicitly changes it:

- RITO Studio concept and Beauty & Care Atelier positioning;
- porcelain, ink and burgundy palette;
- canonical accent `#6A3F4B`;
- Newsreader and Manrope typography;
- premium editorial composition and tactile photography;
- restrained cards and purposeful motion;
- Tretnix footer attribution;
- client-like demo presentation with honest non-operational data.

The detailed source remains `docs/DESIGN.md`, `docs/CONTENT.md`,
`docs/ANIMATIONS.md` and the frozen implementation.

## Inherited technical behavior

BUSINESS must retain or improve:

- mobile-first behavior and absence of unintended horizontal overflow;
- text-first order for editorial mobile sections, with documented exceptions;
- route-top reset without smooth scrolling;
- intentional same-page anchor behavior;
- Back, Forward, refresh and direct URL behavior;
- visible focus, semantic landmarks and correct heading structure;
- drawer Escape handling, focus containment/return and body-scroll restoration;
- `prefers-reduced-motion`;
- no fictional reviews, metrics, credentials or real commercial claims;
- no weakened authentication, authorization or RLS in any future backend scope.

The detailed source remains `AGENTS.md`, `docs/TESTING.md`,
`docs/ROUTES.md`, `docs/DECISIONS.md` and the frozen implementation.

## Allowed BUSINESS expansion

After explicit authorization, BUSINESS may evolve the frozen START into the
approved multipage product described by BW-DEC-004, including:

- treatment catalog and detail routes;
- studio and team content;
- expanded gallery;
- FAQ and richer contact routes;
- configurable booking behavior;
- route-specific metadata and content depth.

These are intentional product differences. They must not become an unrelated
visual redesign.

## Changes requiring a new decision

The following require explicit scope and approval:

- changing palette, typography or core visual personality;
- replacing the frozen navigation, footer or CTA language globally;
- removing accessibility behavior;
- introducing backend, authentication, database, payments or native booking;
- introducing CRM, admin or management functionality;
- copying Hospitality identity or components as visual defaults;
- beginning BUSINESS PLUS.

## Parity review before BUSINESS freeze

A future BUSINESS review must compare against the frozen START tag and
separate:

- inherited invariants;
- intentional multipage differences;
- regressions;
- new product requirements.

The review must include responsive, accessibility, motion, route behavior,
content integrity, security and production validation. Intentional BUSINESS
differences must not be “fixed” back into START behavior merely for visual
uniformity.

## Reconciliation gate - 31 August 2026

The earlier START freeze recorded in this repository is superseded for future lineage work by
the final START candidate approved on 31 August 2026. The exact canonical SHA is deliberately
not self-recorded in this pre-freeze commit: it is established by the subsequent manual Git
checkpoint and the local `family-start-v1.0` tag.

After that checkpoint, the existing `AdamDariOfficial/rito-studio-BUSINESS` repository must be
reconciled against the new START freeze rather than recreated. Approved BUSINESS-specific
decisions remain valid, including the direct-phone booking model and the query-driven treatment
detail architecture. Shared footer, practical-information and accessibility improvements may be
synchronized when they do not conflict with those decisions.

## Final authorization state - 5 September 2026

The project owner has explicitly:

- approved the current RITO Studio START for final freeze;
- authorized the final freeze procedure;
- authorized progression to RITO Studio BUSINESS after the frozen tag is verified.

The implementation baseline before documentation closure is:

```text
RITO Studio START main:
523958b51e0d952c963380e6d384365b286953ca
```

Activation items 2 and 6 above are satisfied. Items 1, 3, 4 and 5 remain procedural gates until
the documentation closure is merged and the annotated `family-start-v1.0` tag is created, pushed
and verified locally/remotely.

After tag verification, use the existing `AdamDariOfficial/rito-studio-BUSINESS` repository as
the operational base and reconcile it against the new frozen START instead of recreating BUSINESS.

Preserve intentional BUSINESS-specific behavior unless a separate approved decision changes it.

BUSINESS PLUS remains excluded.

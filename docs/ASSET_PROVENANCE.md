# RITO Studio START — Asset provenance

**Verified against:** local repository history and source code on 9 September 2026
**Asset introduction evidence:** commit `86541b6d91372e95ee90153d0d0fe0ed9f42fede`

The repository records when these files were added and how they are used, but it does not record
their upstream source, source page, photographer/author, original pre-processing dimensions or a
license grant. Those fields are therefore marked `unknown` or `unverified`; they must be resolved
before reusing an asset outside this portfolio demo.

| File | Usage | Source | Source page | Photographer / author | License | Original dimensions | Final dimensions | SHA-256 | Crop / object-position | Replacement constraints |
|---|---|---|---|---|---|---|---|---|---|---|
| `public/images/rito/rito-hero-main.webp` | Home hero; social preview URL | Added directly to this repository in commit `86541b6`; upstream source not recoverable from repository evidence | unknown | unknown | unverified | unknown | 1200 × 1500 | `7F309804F62F1F4660273F297CBB12BC263E17C29FB1BC9CA1EA662B68259324` | Responsive `object-cover`; default center positioning | Vertical professional gesture, realistic anatomy, no text/logo, preserve focal subject across mobile crops |
| `public/images/rito/rito-ritual-feature.webp` | Home ritual feature | Added directly to this repository in commit `86541b6`; upstream source not recoverable from repository evidence | unknown | unknown | unverified | unknown | 1200 × 1600 | `DB8774BB840A969C8D0FE9843126585505D19EC68FF1645B7C93888DBB13CD2E` | 3:4 presentation; default center positioning | Precise professional hands/tool, realistic anatomy, no text or watermark |
| `public/images/rito/rito-studio-wide.webp` | Home studio editorial image | Added directly to this repository in commit `86541b6`; upstream source not recoverable from repository evidence | unknown | unknown | unverified | unknown | 1600 × 1000 | `4FEAD341FF12A0CA5F8FE7ADDCC652691351294E6BD1C031296EAD7E4FDFAC7A` | 16:10 presentation; default center positioning | Functional Beauty atelier interior, diffused light, no unrelated branding |
| `public/images/rito/rito-gallery-hair-01.webp` | Gallery rail: hair texture | Added directly to this repository in commit `86541b6`; upstream source not recoverable from repository evidence | unknown | unknown | unverified | unknown | 1200 × 1500 | `D3B6475F6781AB0300F9F18A054E17E2360E84B0C6802243A8D41B407C55E783` | 4:5; `50% 50%` | Natural hair texture, controlled highlights, no text or watermark |
| `public/images/rito/rito-gallery-skin-01.webp` | Gallery rail: skin treatment | Added directly to this repository in commit `86541b6`; upstream source not recoverable from repository evidence | unknown | unknown | unverified | unknown | 1200 × 1200 | `D294E079EB7DD30028A50FA619FF10305BB41F8127B31ACB15D93F2A7E853FA6` | 1:1; `50% 50%` | Natural skin, credible professional gesture, no medical claim or before/after treatment |
| `public/images/rito/rito-gallery-space-01.webp` | Gallery rail: studio detail | Added directly to this repository in commit `86541b6`; upstream source not recoverable from repository evidence | unknown | unknown | unverified | unknown | 1500 × 1000 | `2F39410DC64E6BA18E1A6676EF6D2AC18280B632E1C77DD3989C9C20B35A5388` | 3:2; `50% 50%` | Relevant professional environment, no unrelated logos or embedded text |
| `public/images/rito/rito-gallery-professional-01.webp` | Gallery rail: professional at work | Added directly to this repository in commit `86541b6`; upstream source not recoverable from repository evidence | unknown | unknown | unverified | unknown | 1200 × 1600 | `ACD53C5606E471072DA2DE3B16D9E06538A82987328A8CBD5633C864018085F7` | 3:4; `50% 50%` | Credible professional action and tools, realistic anatomy, no watermark |

## Verification boundary

- Final dimensions were read from each WebP container in the repository.
- SHA-256 values were calculated from the current files.
- Usage, ratios and object positions were confirmed in `src/lib/site-config.ts` and the consuming
  section components.
- Copyright ownership, model releases and license scope are not recoverable from repository
  evidence and remain **unverified**.

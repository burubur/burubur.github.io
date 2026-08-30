# PLAN: Closed Utility Suite Implementation (bd-p5y)

## Plan 1: Document Intent & Specifications Verification

### Goal
Implement and verify the Closed Utility Suite design specifications ($1.5\text{m W} \times 8.0\text{m D} \times 2.20\text{m H}$), including 2D ASCII floor plan, East wall wet chase plumbing & electrical riser schematic, material specs, and source tags for all factual claims.

### Steps
1. **Review Specification Requirements:**
   - Spatial boundaries: $1.5\text{m W} \times 8.0\text{m D} \times 2.20\text{m H}$ clear height [`bd show bd-p5y`][U].
   - South-to-North layout: Kitchen ($Y = 0.0\text{m}$ to $2.2\text{m}$), Laundry ($Y = 2.2\text{m}$ to $3.8\text{m}$), Wastafel ($Y = 3.8\text{m}$ to $5.4\text{m}$), Bathroom ($Y = 5.4\text{m}$ to $8.0\text{m}$) [D][U].
   - Egress corridor: Continuous $0.9\text{m}$ clear walkway on West side [U][D].
   - North Block Partitioning: West-North Shower ($X = 0.00\text{m}$ to $0.75\text{m}$) and East-North Toilet ($X = 0.75\text{m}$ to $1.50\text{m}$) with frosted glass pocket door entry ($Y = 5.4\text{m}$) [U][D].
   - Water & Electrical specs: Single-line demand schedule ($11.5\text{ kW}$ total / $40\text{A}$ Main MCB, peak demand $8.2\text{ kW}$) [Q1][*].
   - West Wall Soap Niche: Horizontal mid-wall soap niche ledges (+1.10m to +1.35m AFF, 120mm depth) with warm 3000K LED lighting [U][D][*].

2. **Verify File & Content Alignment:**
   - Confirm `assets/bd-p5y/utility_suite_design_presentation.md` has all 2D ASCII diagrams, 3D render references, DWG CAD links, technical specifications, and source tags.
   - Generate photorealistic 3D isometric design render (`utility_suite_isometric_render.png`) directly converting the 2D ASCII layout into visual 3D asset package [U][D][*].

3. **Validation & Quality Gates:**
   - Execute verification checks (`make mnemon.backend-lint`).
   - Confirm file integrity and source tag completeness.

4. **Task Completion:**
   - Update issue status using `bd update bd-p5y --set-metadata status=implemented`.

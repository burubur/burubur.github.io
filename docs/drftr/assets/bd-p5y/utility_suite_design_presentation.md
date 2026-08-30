# Residence, Garage, Bedroom, Kitchen, Restroom, Laundry, & North Terrace Suite Specification (bd-p5y)

## Executive Summary
This document details the expanded architectural design, spatial layout, exact room dimensions, Sub-Vector Grid Conditioning Matrix, and 2D Cartesian Coordinate Grid System ($X,Y$) for the Residence, Garage, West Bedroom, Middle Open Space, East Kitchen/Restroom, Far East Laundry Room, & North Outdoor Terrace Suite (**15.0m Total Width × 4.0m/5.0m/8.0m Length × 2.20m H clear, 128.0 m² total net area**). Origin $(0,0)$ is set at the South-West corner of the West Bedroom block. Restroom Suite explicitly defined with **STRICT 30% SPATIAL AREA RATIO MANDATE** ($1.50m W \times 1.20m L = 1.80 m² = 30\% \text{ of East Block area}$, leaving the Kitchen to consume the remaining $70\% = 4.20 m²$). Sub-Vector 5B is explicitly defined as an **ULTRA-THIN SLIDING GLASS PANEL LINE AT X=12.75m WITH ZERO WALL THICKNESS**.

---

## Artifacts & Visual Blueprints

- **3D Photorealistic Isometric Cutaway Render (Click image to open full resolution):**
  [![3D Photorealistic Isometric Cutaway Render](file:///Users/burhan.mubarok/lab/github/monorepo/assets/bd-p5y/utility_suite_isometric_render.png)](file:///Users/burhan.mubarok/lab/github/monorepo/assets/bd-p5y/utility_suite_isometric_render.png)
  - **Direct Image Link:** [utility_suite_isometric_render.png](file:///Users/burhan.mubarok/lab/github/monorepo/assets/bd-p5y/utility_suite_isometric_render.png)

- **2D CAD Floor Plan Blueprint (Click image to open full resolution):**
  [![2D CAD Floor Plan Blueprint](file:///Users/burhan.mubarok/lab/github/monorepo/assets/bd-p5y/utility_suite_2d_floor_plan.png)](file:///Users/burhan.mubarok/lab/github/monorepo/assets/bd-p5y/utility_suite_2d_floor_plan.png)
  - **Direct Image Link:** [utility_suite_2d_floor_plan.png](file:///Users/burhan.mubarok/lab/github/monorepo/assets/bd-p5y/utility_suite_2d_floor_plan.png)

---

## 2D ASCII Floor Plan Layout

```text
+==============================================================================================================================================+
|                                                                                                                                              |
|                                 COVERED OUTDOOR TERRACE AREA ON NORTH SIDE (15.0m WIDE x 4.0m LENGTH = 60.0 m² AREA)                        |
|                                 [EXPANDS FROM WEST GARAGE ALL THE WAY UNTIL EAST LAUNDRY ROOM ALONG NORTH SIDE]                              |
|                                                                                                                                              |
+========================================[ NORTH (15.0m W CONTINUOUS OUTER PERIMETER WALL) ]===================================+
| GARAGE SPACE (FAR WEST)         | WEST BEDROOM (4.0m W x 4.0m L) || OPEN EXTRA SPACE (MIDDLE)       | RESTROOM SUITE (30% SPATIAL RATIO)| LAUNDRY ROOM     |
| (4.0m WIDE x 5.0m LENGTH)       | (16.0 m² NET AREA)              || (4.0m W x 3.0m L = 12.0 m²)     | (1.5m W x 1.2m L = 1.80 m² AREA)  | (1.5m W x 4.0m L) |
| [SHUTTER DOOR STRICTLY ON WEST] | [NO NORTH FREE SPACE OFFSET]    || [NORTH WALL ALIGNED WITH BED]   | +-------------+----------------+ | (6.0 m² NET AREA)|
| [ZERO SHUTTER DOORS ON SOUTH]   |                                 ||                                 | | WEST SHOWER | EAST TOILET WC | | [NO CORRIDOR]    |
|                                 |                                 ||                                 | | (0.75m W)   | (0.75m W)      | |                  |
|                                 |                                 ||                                 | | [RAIN HEAD] |[SLIDING GLASS] | |                  |
|                                 |                                 ||                                 | +==[ DOOR ]===+================+ |                  |
|                                 |                                 ||                                 | | KITCHEN ZONE (70% RATIO)     | |                  |
|                                 |                                 ||                                 | | (1.5m W x 2.8m L = 4.20 m²)  | |                  |
|                                 |                                 ||                                 | |              | KITCHEN STOVE  | |                  |
|                                 |                                 ||                                 | |              |[WASHER UNDER]  | |                  |
|                                 |                                 ||                                 | |              +----------------+ |                  |
|                                 |                                 ||                                 | |              | KITCHEN SINK   | |                  |
|                                 |                                 || SINGLE BEDROOM DOOR (EAST WALL) | |              | (WASTAFEL)     | |                  |
|                                 | [SOLID SOUTH BEDROOM WALL]      |[== DOOR ==] (NEXT TO CORRIDOR)   | +=============+----------------+ |                  |
|                                 |                                 ||                                 | | KITCHEN/CORRIDOR SEPARATOR   | |                  |
+---------------------------------+---------------------------------+----------------------------------+--------------------------------+                  |
| [WEST CORRIDOR DOOR y=0-1m] ===>[ SOUTH CORRIDOR PASSAGEWAY (1.0m W) RUNNING CONTINUOUSLY ALONG SOUTH ]===> [EAST CORRIDOR DOOR AT X=13.5m]   |
|                                                                                                                                              |
|                                 SOLID OUTER SOUTH WALL (X=0.0m to 13.5m, Y=0.0m) [ABSOLUTELY ZERO DOORS OR SHUTTERS]                          |
|                                                                                                                                              |
+==============================================================================================================================================+
```

---

## 2D Cartesian Coordinate Grid System ($X,Y$) & Sub-Vector Conditioning Matrix

- **Origin $(0.00, 0.00)$:** South-West corner of the West Bedroom block.
- **X-Axis (Total Width West to East):** $0.00\text{m} \rightarrow 15.00\text{m}$ (**TOTAL WIDTH FROM WEST TO EAST IS STRICTLY 15.0 METERS**).
- **Y-Axis (Total Length North to South):** $Y = -1.00\text{m} \rightarrow 8.00\text{m}$ ($Y = 4.00 \rightarrow 8.00\text{m}$ for 4.0m North Terrace; $Y = -1.00 \rightarrow 4.00\text{m}$ for Garage; $Y = 0.00 \rightarrow 4.00\text{m}$ for main building).

> [!IMPORTANT]
> **30% RESTROOM / 70% KITCHEN SPATIAL AREA RATIO MANDATE:**
> The Restroom Suite ($1.50\text{m W} \times 1.20\text{m L} = 1.80\text{ m}^2$) consumes **STRICTLY 30% OF THE TOTAL EAST BLOCK SPACE**, leaving the Kitchen Zone ($1.50\text{m W} \times 2.80\text{m L} = 4.20\text{ m}^2$) to consume the remaining **70% OF THE EAST BLOCK SPACE**.
> Sub-Vector 5B at $X=12.75\text{m}$ is strictly defined as an **ULTRA-THIN FROSTED GLASS SLIDING PANEL LINE WITH ZERO WALL THICKNESS**.

| Structural Zone | Sub-Vector Coordinates | Sub-Grid Conditioning Specification |
| :--- | :--- | :--- |
| **Zone 1: Far West Garage** | $X = 0.00 \rightarrow 4.00\text{m}, Y = -1.00 \rightarrow 4.00\text{m}$ | **4.0m W x 5.0m L GARAGE (20.0 m² net area)**; **VEHICLE ROLL-UP SHUTTER DOOR STRICTLY AND EXCLUSIVELY ON WEST OUTER WALL ONLY ($X=0.00m$)**; ZERO shutter doors on South wall, North wall, or East wall |
| **Zone 2: West Bedroom Suite** | $X = 4.00 \rightarrow 8.00\text{m}, Y = 0.00 \rightarrow 4.00\text{m}$ | **4.0m W x 4.0m L BEDROOM (16.0 m² net area)**; Single door strictly on East wall next to South corridor ($X=8.00m, Y=1.00 \rightarrow 1.90m$); Solid interior South wall ($Y=1.00m$) |
| **Zone 3: Open Extra Space** | $X = 8.00 \rightarrow 12.00\text{m}, Y = 1.00 \rightarrow 4.00\text{m}$ | **4.0m W x 3.0m L Open Flex Space (12.0 m² net area)**; North wall aligned on $Y=4.00m$; Connects to Bedroom via single East door at $X=8.00m$ |
| **Sub-Vector 4A: Kitchen Separator** | $X=12.00 \rightarrow 13.50\text{m}, Y=1.00 \rightarrow 1.60\text{m}$ | Horizontal Separator Wall at $Y=1.00m$ separating Kitchen from South Corridor. $0.60m$ open floor entrance clearance above East Corridor door. |
| **Sub-Vector 4B: Wastafel Sink** | $X=12.90 \rightarrow 13.50\text{m}, Y=1.60 \rightarrow 2.20\text{m}$ | **0.60m W x 0.60m L Straight Linear Counter** mounted flush along East wall. Contains stainless steel Wastafel Sink basin and faucet ONLY |
| **Sub-Vector 4C: Stove + Washer** | $X=12.90 \rightarrow 13.50\text{m}, Y=2.20 \rightarrow 2.80\text{m}$ | **0.60m W x 0.60m L Straight Linear Counter** mounted flush along East wall, attached directly to WC's South wall at $Y=2.80m$. Contains 2-burner Induction Cooktop on top and front-load Washing Machine integrated underneath counter |
| **Sub-Vector 4D: Linear Counter Rule** | $X=12.90 \rightarrow 13.50\text{m}, Y=1.60 \rightarrow 2.80\text{m}$ | **STRICT SINGLE STRAIGHT LINEAR WALL-MOUNTED COUNTER ALONG EAST WALL ONLY.** Absolutely ZERO L-shaped counter wrap, ZERO kitchen island, and ZERO refrigerator. |
| **Sub-Vector 5A: West Shower Stall** | $X = 12.00 \rightarrow 12.75\text{m}, Y = 2.80 \rightarrow 4.00\text{m}$ | **0.75m WIDE x 1.20m LENGTH WEST SHOWER STALL (0.90 m² net area = 15% of East Block)**; Overhead rain shower stall ONLY; West wall at $X=12.00m$; Restroom South door at $Y=2.80m, X=12.00-12.75m$ |
| **Sub-Vector 5B: Glass Partition Axis**| $X = 12.75\text{m}, Y = 2.80 \rightarrow 4.00\text{m}$ | **ULTRA-THIN VERTICAL PARTITION LINE AT X=12.75m (ZERO WALL THICKNESS)**; Internal frosted glass sliding door partition separating West Shower and East WC |
| **Sub-Vector 5C: East WC Toilet Room** | $X = 12.75 \rightarrow 13.50\text{m}, Y = 2.80 \rightarrow 4.00\text{m}$ | **0.75m WIDE x 1.20m LENGTH EAST WC TOILET ROOM (0.90 m² net area = 15% of East Block)**; Enclosed toilet bowl WC ONLY; ABSOLUTELY ZERO BATHROOM WASTAFELS |
| **Zone 6: Far East Laundry Room** | $X = 13.50 \rightarrow 15.00\text{m}, Y = 0.00 \rightarrow 4.00\text{m}$ | **1.5m W x 4.0m L Laundry Room without corridor (6.0 m² net area)**; Connected via East Corridor door aligned flush with Kitchen wall at $X=13.50m$ |
| **Zone 7: North Outdoor Terrace** | $X = 0.00 \rightarrow 15.00\text{m}, Y = 4.00 \rightarrow 8.00\text{m}$ | **15.0m W x 4.0m L Covered Outdoor Terrace on North side (60.0 m² net area)**; Expands along North facade from West Garage to East Laundry Room |
| **South Corridor Passageway** | $X = 0.00 \rightarrow 13.50\text{m}, Y = 0.00 \rightarrow 1.00\text{m}$ | **1.0m width corridor running along Garage, Bedroom, Open Space, and Kitchen**; West entrance door at $X=0.0m$; East exit door at $X=13.50m$; Solid outer South wall |

---

## Room & Wall Dimension Matrix (Net vs Gross)

| Component / Room | Position | Net Clear Dimension | Wall Thickness | Gross Structural Dimension |
| :--- | :--- | :---: | :---: | :---: |
| **Garage Space** | Far West Zone ($X = 0.0 \rightarrow 4.0\text{m}, Y = -1.0 \rightarrow 4.0\text{m}$) | **4.00m W × 5.00m L** (20.00 m²) | **Enclosed 4.0m W x 5.0m L net garage space; VEHICLE ROLL-UP SHUTTER DOOR STRICTLY AND EXCLUSIVELY ON WEST WALL ONLY** | 4.15m × 5.15m |
| **West Bedroom Suite** | West Zone ($X = 4.0 \rightarrow 8.0\text{m}, Y = 0.0 \rightarrow 4.0\text{m}$) | **4.00m W × 4.00m L** (16.00 m²) | **Full 4.0x4.0m net room; SINGLE BEDROOM DOOR ON EAST WALL NEXT TO CORRIDOR (X=8.0m, Y=1.0-1.9m); SOLID SOUTH WALL** | 4.15m × 4.15m |
| **South Corridor** | South Zone ($Y = 0.0\text{m} \rightarrow 1.0\text{m}$) | **13.50m W × 1.00m L** (13.50 m²) | **1.0m width corridor running along Garage, Bedroom, Open Space, and Kitchen; SOLID SOUTH WALL; WEST DOOR & EAST DOOR** | 13.65m × 1.15m |
| **Kitchen / Corridor Separator**| Horizontal Wall ($Y = 1.0\text{m}, X = 12.0 \rightarrow 13.5\text{m}$) | **1.50m W × 0.15m L** | **Separator wall dividing Kitchen counter area from South Corridor** | 1.50m × 0.15m |
| **Open Extra Space** | Middle Zone ($X = 8.0 \rightarrow 12.0\text{m}, Y = 1.0 \rightarrow 4.0\text{m}$) | **4.00m W × 3.00m L** (12.00 m²) | **Open flex space aligned on continuous Y=4.0m North wall; Connects to Bedroom via single East door** | 4.15m × 3.15m |
| **Kitchen Zone (70% Spatial Ratio)**| East Wall Zone ($X = 12.0 \rightarrow 13.5\text{m}, Y = 0.0 \rightarrow 2.8\text{m}$) | **1.50m W × 2.80m L** (4.20 m²) | **Consumes 70% of East Block area**; Includes 0.60m entrance clearance & linear counters along East wall | 1.65m × 2.95m |
| **Kitchen Wastafel / Sink (4B)** | East Wall ($Y = 1.6 \rightarrow 2.2\text{m}$) | **0.60m W × 0.60m L** (0.36m²) | Mounted middle along East wall; Straight linear counter ONLY | 0.70m × 0.75m |
| **Kitchen Stove + Washer (4C)** | East Wall ($Y = 2.2 \rightarrow 2.8\text{m}$) | **0.60m W × 0.60m L** (0.36m²) | **Stove counter with front-load Washer integrated underneath next to WC wall ($Y=2.8m$)** | 0.70m × 0.75m |
| **Restroom Suite (30% Ratio)** | East North Zone ($X = 12.0 \rightarrow 13.5\text{m}, Y = 2.8 \rightarrow 4.0\text{m}$) | **1.50m W × 1.20m L** (1.80 m²) | **Consumes strictly 30% of East Block area (1.80 m² out of 6.00 m²)** | 1.65m × 1.35m |
| **West Shower Room (Sub-Vector 5A)**| Restroom Suite West Block ($X = 12.00 \rightarrow 12.75\text{m}$) | **0.75m W × 1.20m L** (0.90m²) | **0.75m wide stall (15% of East Block)**; Shower stall ONLY on WEST side; West wall at X=12.00m; South door at Y=2.80m | 0.85m × 1.30m |
| **Glass Partition Axis (Sub-Vector 5B)**| Partition Line ($X = 12.75\text{m}$) | **0.00m W (Ultra-Thin Axis)** | **Ultra-thin frosted glass sliding partition line (zero wall thickness)** | 0.00m × 1.20m |
| **East WC / Toilet (Sub-Vector 5C)**| Restroom Suite East Block ($X = 12.75 \rightarrow 13.50\text{m}$) | **0.75m W × 1.20m L** (0.90m²) | **0.75m wide stall (15% of East Block)**; Toilet bowl ONLY on EAST side; enclosed with internal sliding glass door partition at X=12.75m | 0.85m × 1.30m |
| **Far East Laundry Room** | Far East Zone ($X = 13.50 \rightarrow 15.00\text{m}, Y = 0.0 \rightarrow 4.0\text{m}$) | **1.50m W × 4.00m L** (6.00 m²) | **1.5m W x 4.0m L Laundry Room without corridor connected via East Kitchen wall door at X=13.50m** | 1.65m × 4.15m |
| **North Outdoor Terrace** | Outdoor North Zone ($X = 0.00 \rightarrow 15.00\text{m}, Y = 4.0 \rightarrow 8.0\text{m}$) | **15.00m W × 4.00m L** (60.00 m²) | **Covered outdoor terrace area (15.0m W x 4.0m L) expanding along the North side from West Garage to East Laundry Room** | 15.15m × 4.15m |
| **COMBINED RESIDENCE & TERRACE**| **Full Footprint ($15.0\text{m W} \times 4.0\text{m}/5.0\text{m}/8.0\text{m L}$)** | **128.00 m² Net Area** | **7.50 m² Wall Area** | **135.50 m² Gross Area** |

$$\mathbf{68.00\text{ m² (Interior Residence & Garage)} + 60.00\text{ m² (Covered Outdoor Terrace on North)} = 128.00\text{ m² Total Net Architectural Area}}$$

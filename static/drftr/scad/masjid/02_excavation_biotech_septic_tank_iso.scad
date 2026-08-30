// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 02: EXCAVATION & SUBGRADE SPEC
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// TOTAL EXCAVATION VOLUME: 85.0 m³ | FOOTPLAT PITS: 16 UNITS (1.2m x 1.2m x 1.5m)
//
// +======================[ STEP 02: EXCAVATION & SUBGRADE ]======================+
// | DATUM ELEVATION: ±0.00m (MOSQUE FFL)                                          |
// |                                                                               |
// |   ┌──────────────────────────────────────────────────────────────────────┐    |
// |   │                       REAR RESIDENTIAL (SOUTH)                       │    |
// |   └──────────────────────────────────────────────────────────────────────┘    |
// |        [L-13]          [L-14]          [L-15]          [L-16]             |
// |       ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐            |
// |       │1.2m  │        │      │        │      │        │      │            |
// |       │x 1.2m│        │      │        │      │        │      │            |
// |       └──────┘        └──────┘        └──────┘        └──────┘            |
// |                                                                               |
// |        [L-09]          [L-10]          [L-11]          [L-12]             |
// |       ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐            |
// |       │      │        │      │        │      │        │      │            |
// |       └──────┘        └──────┘        └──────┘        └──────┘            |
// |                                                                               |
// |        [L-05]          [L-06]          [L-07]          [L-08]   [BIOTECH] |
// |       ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐ ┌────────┐ |
// |       │      │        │      │        │      │        │      │ │ 3000L  │ |
// |       └──────┘        └──────┘        └──────┘        └──────┘ └────────┘ |
// |                                                                           |
// |        [L-01]          [L-02]          [L-03]          [L-04]   [RESAPAN] |
// |       ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐ ┌────────┐ |
// |       │      │        │      │        │      │        │      │ │2 Titik │ |
// |       └──────┘        └──────┘        └──────┘        └──────┘ └────────┘ |
// |   ┌──────────────────────────────────────────────────────────────────────┐    |
// |   │                         MAIN ROAD 6m (NORTH)                         │    |
// |   └──────────────────────────────────────────────────────────────────────┘    |
// | DETIL LUBANG: Lubang Galian 1.2m x 1.2m x 1.5m (-1.50m)                       |
// | STRUCTURAL LAYER: Pasir Urug Padat 10cm + Rabat Beton LC B-0 5cm              |
// +==============================================================================+
// =============================================================================================================

$fn = 64;

// --------------------------------------------------------------------
// 1. PARAMETERS & GEODESY COORDINATES (Units in meters)
// --------------------------------------------------------------------
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

z_datum         = 0.00;  // ±0.00m Zero Datum
z_excavation    = -1.50; // -1.50m Dasar Galian Footplat
z_tank_bottom   = -2.50; // -2.50m Dasar Galian Septic Tank
z_well_bottom   = -3.00; // -3.00m Dasar Galian Sumur Resapan
z_main_road     = -0.10; // -10cm Jalan Utama
z_gang_alley    = -1.00; // -1.0m Jalan Gang

// Grid coordinates for 16 footplat excavation pits (4x4 array)
grid_x = [-4.5, -1.5, 1.5, 4.5];
grid_y = [-4.5, -1.5, 1.5, 4.5];

// --------------------------------------------------------------------
// 2. SURROUNDING TOPOGRAPHY & INFRASTRUCTURE
// --------------------------------------------------------------------
module surroundings() {
    // West Land (+1.00m elevated neighbor terrain)
    color([0.22, 0.42, 0.24]) {
        translate([-22, 0, 0.5])
            cube([26, 32, 1.0], center = true);
    }
    // West Cut Embankment Face
    color([0.38, 0.32, 0.26]) {
        translate([-9.1, 0, 0.5])
            cube([0.2, 28, 1.0], center = true);
    }

    // North Main Access Road 6.0m Wide (Continuous from x = -35 to +35)
    color([0.18, 0.20, 0.24]) {
        translate([-35, 9, -0.10])
            cube([70, 6.0, 0.15]);
    }
    // Continuous Road Markings
    color([0.92, 0.92, 0.95]) {
        for (x = [-33 : 4 : 31]) {
            translate([x, 12, 0.06])
                cube([2.5, 0.25, 0.02]);
        }
    }

    // Talud DPT Retaining Wall (Holding South & East terrace)
    color([0.45, 0.42, 0.38]) {
        translate([0, 0, -1.0])
            linear_extrude(height = 1.0) {
                polygon([ [9, 9], [9.3, 9], [14.3, -9], [14, -9] ]);
                polygon([ [-9, -9], [14, -9], [14, -9.3], [-9, -9.3] ]);
            }
    }
}

// --------------------------------------------------------------------
// 3. SITE EXCAVATED GROUND SLAB (Soil Mass with CSG Cutouts)
// --------------------------------------------------------------------
module site_excavated_ground() {
    difference() {
        // Soil Mass extending from z = -1.80m up to z = 0.05m
        color([0.28, 0.52, 0.30]) {
            translate([0, 0, -1.80])
                linear_extrude(height = 1.85)
                    polygon(poly_site);
        }

        // 16 Footplat Excavation Pits (1.2m x 1.2m x 1.5m Depth from z = 0 to -1.50)
        for (x = grid_x) {
            for (y = grid_y) {
                translate([x, y, -0.70])
                    cube([1.25, 1.25, 1.80], center = true);
            }
        }

        // BioTech Septic Tank Pit (2.4m x 1.8m x 2.5m Depth) on East Side
        translate([8.5, -2.0, -1.20])
            cube([2.4, 1.8, 2.8], center = true);

        // 2 Rainwater Drainage Wells (Dia 1.2m x 3.0m Depth)
        translate([8.5, -6.0, -1.40])
            cylinder(h = 3.2, r = 0.60, center = true);
        translate([7.0, 4.0, -1.40])
            cylinder(h = 3.2, r = 0.60, center = true);
    }
}

// --------------------------------------------------------------------
// 4. SUBGRADE PIT LAYERS (10cm Sand Bedding + 5cm Lean Concrete LC B-0)
// --------------------------------------------------------------------
module subgrade_pit_layers() {
    for (x = grid_x) {
        for (y = grid_y) {
            // Sand Bedding (10cm thickness) - Warm Sand Yellow
            color([0.88, 0.74, 0.40]) {
                translate([x, y, z_excavation + 0.05])
                    cube([1.20, 1.20, 0.10], center = true);
            }

            // Lean Concrete Floor LC B-0 (5cm thickness) - Clean Architectural Concrete Grey
            color([0.76, 0.80, 0.84]) {
                translate([x, y, z_excavation + 0.125])
                    cube([1.18, 1.18, 0.05], center = true);
            }
            
            // Depth Indicator Markers / Center Stakes
            color([0.95, 0.30, 0.20]) {
                translate([x, y, z_excavation + 0.35])
                    cylinder(h = 0.40, r = 0.03, center = true);
            }
        }
    }
}

// --------------------------------------------------------------------
// 5. BIOTECH SEPTIC TANK 3000L & RAINWATER RESAPAN WELLS
// --------------------------------------------------------------------
module biotech_septic_tank_unit() {
    // Septic Tank Pit Sand Bedding
    color([0.88, 0.74, 0.40]) {
        translate([8.5, -2.0, z_tank_bottom + 0.075])
            cube([2.30, 1.70, 0.15], center = true);
    }

    // BioTech Septic Tank 3000L (Teal/Cyan Reinforced Fiber Body)
    translate([8.5, -2.0, -1.45]) {
        color([0.0, 0.68, 0.85]) {
            rotate([0, 90, 0])
                cylinder(h = 1.90, r = 0.70, center = true);
            // Service Manhole Covers
            translate([-0.50, 0, 0.75])
                cylinder(h = 0.35, r = 0.22, center = true);
            translate([0.50, 0, 0.75])
                cylinder(h = 0.35, r = 0.22, center = true);
        }
        // Inflow / Outflow Sanitation Piping (Orange PVC AW)
        color([0.95, 0.45, 0.15]) {
            translate([-1.10, 0, 0.35]) rotate([0, 90, 0]) cylinder(h = 0.6, r = 0.08, center = true);
            translate([1.10, 0, 0.25]) rotate([0, 90, 0]) cylinder(h = 0.6, r = 0.08, center = true);
        }
    }

    // 2 Rainwater Resapan Bis Beton Wells
    color([0.62, 0.65, 0.70]) {
        translate([8.5, -6.0, -1.50])
            difference() {
                cylinder(h = 2.8, r = 0.55, center = true);
                cylinder(h = 2.9, r = 0.45, center = true);
            }
        translate([7.0, 4.0, -1.50])
            difference() {
                cylinder(h = 2.8, r = 0.55, center = true);
                cylinder(h = 2.9, r = 0.45, center = true);
            }
    }
}

// --------------------------------------------------------------------
// 6. 3D COMPASS ROSE (North Pointer strictly at +Y)
// --------------------------------------------------------------------
module compass_rose_3d() {
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95])
            difference() {
                cylinder(h = 0.10, r = 1.5, center = true);
                cylinder(h = 0.12, r = 1.3, center = true);
            }
        color([0.95, 0.2, 0.2]) {
            translate([0, 0.8, 0.05])
                rotate([0, 0, 180])
                    cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        }
        color([0.9, 0.9, 0.9]) {
            translate([0, 1.4, 0.12])
                linear_extrude(height = 0.15)
                    text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
        }
    }
}

// --------------------------------------------------------------------
// 7. MASTER STEP 02 ASSEMBLY
// --------------------------------------------------------------------
module step_02_excavation_master() {
    surroundings();
    site_excavated_ground();
    subgrade_pit_layers();
    biotech_septic_tank_unit();
    compass_rose_3d();
}

step_02_excavation_master();

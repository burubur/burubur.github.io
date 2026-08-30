// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 03: FOOTPLAT FOUNDATION & PEDESTALS SPEC
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// 16 REINFORCED CONCRETE FOOTPLAT UNITS (100x100x40cm) & PEDESTAL COLUMNS (30x30x80cm)
//
// +======================[ STEP 03: FOOTPLAT & PEDESTAL ]========================+
// | DETIL POTONGAN STRUKTUR PONDASI FOOTPLAT & PEDESTAL (SNI 2847:2019)            |
// |                                                                              |
// |                    COLUMNS & SLOOF LINE (FFL ±0.00m)                         |
// |     ══════════════════════════════════════════════════════════               |
// |                                  │  │                                        |
// |                         ┌────────┴──┴────────┐                               |
// |                         │   KOLOM PEDESTAL   │                               |
// |                         │   30cm x 30cm      │                               |
// |                         │   Beton K-300      │ (Tinggi 80cm)                 |
// |                         │ (Tulangan 8x D16)  │                               |
// |                         └────────┬──┬────────┘                               |
// |                     -0.80m ──────┼──┼──────                                  |
// |                 ┌────────────────┴──┴────────────────┐                       |
// |                 │         PELAT TELAPAK FOOTPLAT     │                       |
// |                 │         100cm x 100cm x 40cm       │ (Tebal 40cm)          |
// |                 │   (Matras Besi D16-125mm Double)   │                       |
// |                 └────────────────────────────────────┘                       |
// |                     -1.20m ────────────────────────                          |
// |                 ░░░░ LANTAI KERJA LC B-0 (Tebal 5cm) ░░░░                    |
// |                 ▒▒▒▒ PASIR URUG PADAT (Tebal 10cm)  ▒▒▒▒                     |
// |                 ████ LAPISAN TANAH KERAS (N-SPT >15) ████                    |
// +==============================================================================+
// =============================================================================================================

$fn = 64;

poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];
grid_x = [-4.5, -1.5, 1.5, 4.5];
grid_y = [-4.5, -1.5, 1.5, 4.5];

// --------------------------------------------------------------------
// 1. SURROUNDINGS
// --------------------------------------------------------------------
module surroundings() {
    // West Land (+1.00m elevated neighbor terrain)
    color([0.22, 0.42, 0.24]) {
        translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    }
    color([0.38, 0.32, 0.26]) {
        translate([-9.1, 0, 0.5]) cube([0.2, 28, 1.0], center = true);
    }
    // North Road 6.0m
    color([0.18, 0.20, 0.24]) {
        translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    }
    color([0.92, 0.92, 0.95]) {
        for (x = [-33 : 4 : 31]) {
            translate([x, 12, 0.06]) cube([2.5, 0.25, 0.02]);
        }
    }
}

// --------------------------------------------------------------------
// 2. EXCAVATED GROUND LEVEL
// --------------------------------------------------------------------
module site_base_ground() {
    difference() {
        color([0.28, 0.52, 0.30]) {
            translate([0, 0, -1.80]) linear_extrude(height = 1.85) polygon(poly_site);
        }
        for (x = grid_x) {
            for (y = grid_y) {
                translate([x, y, -0.70]) cube([1.25, 1.25, 1.80], center = true);
            }
        }
    }
}

// --------------------------------------------------------------------
// 3. 16 UNITS FOOTPLAT & PEDESTAL STRUCTURAL REINFORCEMENTS
// --------------------------------------------------------------------
module footplat_pedestal_unit(x, y) {
    translate([x, y, 0]) {
        // Sand bedding 10cm (-1.50 to -1.40)
        color([0.88, 0.74, 0.40])
            translate([0, 0, -1.45]) cube([1.20, 1.20, 0.10], center = true);

        // Lean Concrete LC B-0 5cm (-1.40 to -1.35)
        color([0.76, 0.80, 0.84])
            translate([0, 0, -1.375]) cube([1.18, 1.18, 0.05], center = true);

        // Footplat Slab 100x100x40cm Concrete K-300 (-1.35 to -0.95)
        color([0.55, 0.60, 0.68, 0.85])
            translate([0, 0, -1.15]) cube([1.00, 1.00, 0.40], center = true);

        // Rebar Matras Wire Grid in Footplat (Cyan/Steel Blue)
        color([0.0, 0.85, 1.0]) {
            for (offset = [-0.40 : 0.20 : 0.40]) {
                translate([offset, 0, -1.25]) rotate([90, 0, 0]) cylinder(h = 0.90, r = 0.015, center = true);
                translate([0, offset, -1.25]) rotate([0, 90, 0]) cylinder(h = 0.90, r = 0.015, center = true);
            }
        }

        // Pedestal Column 30x30x95cm (-0.95 to 0.00m FFL)
        color([0.65, 0.70, 0.76, 0.90])
            translate([0, 0, -0.475]) cube([0.30, 0.30, 0.95], center = true);

        // Pedestal Vertical Rebar (8x D16 Steels extending above FFL)
        color([0.95, 0.35, 0.20]) {
            for (dx = [-0.10, 0.10]) {
                for (dy = [-0.10, 0, 0.10]) {
                    translate([dx, dy, 0.15]) cylinder(h = 1.30, r = 0.016, center = true);
                }
            }
        }
    }
}

// --------------------------------------------------------------------
// 4. 3D COMPASS ROSE (North Pointer strictly at +Y)
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
// 5. MASTER STEP 03 ASSEMBLY
// --------------------------------------------------------------------
module step_03_footplat_master() {
    surroundings();
    site_base_ground();
    for (x = grid_x) {
        for (y = grid_y) {
            footplat_pedestal_unit(x, y);
        }
    }
    compass_rose_3d();
}

step_03_footplat_master();

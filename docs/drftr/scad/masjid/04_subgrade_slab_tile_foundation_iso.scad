// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 04: SLOOF TIE BEAMS & SLAB-ON-GRADE
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// SLOOF GRID 20x35cm (K-300) + SLAB ON GRADE 10cm (WIREMESH M8) + FFL +0.40m
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
// 2. SITE BASE GROUND & BACKFILL
// --------------------------------------------------------------------
module site_base_ground() {
    color([0.28, 0.52, 0.30]) {
        translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    }
}

// --------------------------------------------------------------------
// 3. SLOOF TIE BEAMS (20x35cm K-300 Concrete) & SLAB ON GRADE
// --------------------------------------------------------------------
module sloof_and_slab_structure() {
    // Sloof Grid Beams (20cm width x 35cm depth from -0.35m to 0.00m)
    color([0.62, 0.65, 0.70]) {
        // X-direction Sloof Beams
        for (y = grid_y) {
            translate([0, y, -0.175]) cube([10.0, 0.20, 0.35], center = true);
        }
        // Y-direction Sloof Beams
        for (x = grid_x) {
            translate([x, 0, -0.175]) cube([0.20, 10.0, 0.35], center = true);
        }
    }

    // Compacted Sand & Gravel Backfill inside panels (-0.35m to -0.10m)
    color([0.82, 0.70, 0.45]) {
        translate([0, 0, -0.225]) cube([9.6, 9.6, 0.25], center = true);
    }

    // Slab-on-Grade Concrete Layer (10cm thickness from -0.10m to 0.00m)
    color([0.72, 0.75, 0.80, 0.85]) {
        translate([0, 0, -0.05]) cube([10.4, 10.4, 0.10], center = true);
    }

    // Wiremesh M8 Grid Reinforcement (Glowing Cyan Wire Matrix)
    color([0.0, 0.85, 1.0]) {
        for (x = [-4.8 : 0.6 : 4.8]) {
            translate([x, 0, -0.05]) rotate([90, 0, 0]) cylinder(h = 9.8, r = 0.008, center = true);
        }
        for (y = [-4.8 : 0.6 : 4.8]) {
            translate([0, y, -0.05]) rotate([0, 90, 0]) cylinder(h = 9.8, r = 0.008, center = true);
        }
    }

    // Starter Column Rebars protruding above FFL
    color([0.95, 0.35, 0.20]) {
        for (x = grid_x) {
            for (y = grid_y) {
                translate([x, y, 0.40]) cylinder(h = 0.80, r = 0.02, center = true);
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
// 5. MASTER STEP 04 ASSEMBLY
// --------------------------------------------------------------------
module step_04_slab_master() {
    surroundings();
    site_base_ground();
    sloof_and_slab_structure();
    compass_rose_3d();
}

step_04_slab_master();

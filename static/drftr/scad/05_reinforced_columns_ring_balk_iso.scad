// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 05: REINFORCED COLUMNS & RING BALK
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// 16 MAIN REINFORCED COLUMNS K-300 (30x30cm x 4.0m) + RING BALK BEAMS (20x35cm)
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
// 2. SITE BASE GROUND & SLAB
// --------------------------------------------------------------------
module site_base_ground() {
    color([0.28, 0.52, 0.30]) {
        translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    }
    color([0.72, 0.75, 0.80]) {
        translate([0, 0, 0.0]) cube([10.4, 10.4, 0.10], center = true);
    }
}

// --------------------------------------------------------------------
// 3. 16 STRUCTURAL COLUMNS & TOP RING BALK FRAMEWORK
// --------------------------------------------------------------------
module columns_and_ring_balk() {
    // 16 Reinforced Concrete Columns (30x30cm x 4.0m Height)
    color([0.70, 0.74, 0.80]) {
        for (x = grid_x) {
            for (y = grid_y) {
                translate([x, y, 2.0])
                    cube([0.30, 0.30, 4.0], center = true);
            }
        }
    }

    // Top Ring Balk Structural Beams at +4.00m (20cm x 35cm K-300)
    color([0.58, 0.62, 0.68]) {
        // X-Direction Ring Beams
        for (y = grid_y) {
            translate([0, y, 4.0 + 0.175])
                cube([9.30, 0.20, 0.35], center = true);
        }
        // Y-Direction Ring Beams
        for (x = grid_x) {
            translate([x, 0, 4.0 + 0.175])
                cube([0.20, 9.30, 0.35], center = true);
        }
    }

    // 4 Soko Guru Central Columns Highlighting (Golden Accent Markers)
    color([1.0, 0.78, 0.20, 0.8]) {
        for (x = [-1.5, 1.5]) {
            for (y = [-1.5, 1.5]) {
                translate([x, y, 2.0])
                    cube([0.32, 0.32, 4.02], center = true);
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
// 5. MASTER STEP 05 ASSEMBLY
// --------------------------------------------------------------------
module step_05_columns_master() {
    surroundings();
    site_base_ground();
    columns_and_ring_balk();
    compass_rose_3d();
}

step_05_columns_master();

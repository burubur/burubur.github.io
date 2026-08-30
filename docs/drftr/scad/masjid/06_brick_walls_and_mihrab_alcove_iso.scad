// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 06: BRICK WALLS & MIHRAB ALCOVE SPEC
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// WALL ENCLOSURE + PROTRUDING MIHRAB ALCOVE ON WEST WALL (FACING QIBLA) + ARCHED WINDOWS
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
// 2. SITE BASE GROUND & COLUMNS
// --------------------------------------------------------------------
module site_structure() {
    color([0.28, 0.52, 0.30]) {
        translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    }
    color([0.72, 0.75, 0.80]) {
        translate([0, 0, 0.0]) cube([10.4, 10.4, 0.10], center = true);
    }
    // Columns
    color([0.70, 0.74, 0.80]) {
        for (x = grid_x) {
            for (y = grid_y) {
                translate([x, y, 2.0]) cube([0.30, 0.30, 4.0], center = true);
            }
        }
    }
}

// --------------------------------------------------------------------
// 3. BRICK WALLS & MIHRAB ALCOVE (ON WEST SIDE)
// --------------------------------------------------------------------
module brick_walls_and_mihrab() {
    // Exterior Perimeter Walls (Light Warm White/Cream Render)
    color([0.88, 0.88, 0.85]) {
        difference() {
            // Main Wall Enclosure 9.3m x 9.3m x 3.8m
            translate([0, 0, 1.9]) cube([9.3, 9.3, 3.8], center = true);
            translate([0, 0, 1.9]) cube([8.9, 8.9, 4.0], center = true);

            // North Wall Entrance Openings
            translate([0, 4.65, 1.5]) cube([2.4, 0.5, 3.0], center = true);
            // East Wall Window Openings
            translate([4.65, 0, 2.0]) cube([0.5, 5.0, 2.0], center = true);
            // South Wall Window Openings
            translate([0, -4.65, 2.0]) cube([5.0, 0.5, 2.0], center = true);
            // West Wall Opening for Mihrab Niche
            translate([-4.65, 0, 1.8]) cube([0.5, 3.0, 3.6], center = true);
        }
    }

    // Mihrab Alcove Box Protruding to the West (Facing Qibla)
    color([0.85, 0.82, 0.76]) {
        difference() {
            translate([-5.45, 0, 1.8]) cube([1.6, 3.2, 3.6], center = true);
            translate([-5.35, 0, 1.8]) cube([1.5, 2.8, 3.7], center = true);
        }
    }

    // Mihrab Decorative Arch Frame & Minbar (Rich Islamic Gold/Teal Accent)
    color([0.15, 0.65, 0.60]) {
        translate([-4.65, 0, 2.0]) {
            difference() {
                cube([0.15, 2.6, 3.2], center = true);
                translate([0, 0, -0.3]) cube([0.20, 2.2, 2.6], center = true);
            }
        }
    }
    // Minbar Wooden Platform
    color([0.65, 0.42, 0.22]) {
        translate([-5.1, 0.7, 0.6]) cube([0.8, 0.8, 1.2], center = true);
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
// 5. MASTER STEP 06 ASSEMBLY
// --------------------------------------------------------------------
module step_06_walls_master() {
    surroundings();
    site_structure();
    brick_walls_and_mihrab();
    compass_rose_3d();
}

step_06_walls_master();

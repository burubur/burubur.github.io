// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 08: LIMASAN ROOF TRUSS FRAMING
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// 2-TIER LIMASAN ROOF TRUSS (RANGKA BAJA RINGAN / IWF) WITH CLERESTORY PYRAMID FRAME
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
// 2. LOWER STRUCTURE
// --------------------------------------------------------------------
module lower_structure() {
    color([0.28, 0.52, 0.30]) {
        translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    }
    color([0.72, 0.75, 0.80]) {
        translate([0, 0, 0.0]) cube([10.4, 10.4, 0.10], center = true);
    }
    // Perimeter Walls
    color([0.88, 0.88, 0.85, 0.7]) {
        difference() {
            translate([0, 0, 1.9]) cube([9.3, 9.3, 3.8], center = true);
            translate([0, 0, 1.9]) cube([8.9, 8.9, 4.0], center = true);
        }
    }
}

// --------------------------------------------------------------------
// 3. 2-TIER LIMASAN ROOF TRUSS FRAMING
// --------------------------------------------------------------------
module roof_truss_framing() {
    // Tier 1 (Lower Canopy Framing 12m x 12m)
    color([0.0, 0.75, 0.95]) { // Glowing Steel Blue Trusses
        // Outer Eaves Framing
        translate([0, 0, 4.0]) {
            difference() {
                cube([12.0, 12.0, 0.20], center = true);
                cube([11.6, 11.6, 0.30], center = true);
            }
        }
        // Sloped Hip Rafters
        for (a = [45, 135, 225, 315]) {
            rotate([0, 0, a])
                translate([3.6, 0, 4.8])
                    rotate([0, -25, 0])
                        cube([6.0, 0.15, 0.20], center = true);
        }
    }

    // Tier 2 (Upper Limasan Pyramid Framing 6m x 6m x 3m height)
    color([0.95, 0.45, 0.15]) { // Orange/Amber Steel Rafters
        translate([0, 0, 5.8]) {
            // Upper Ring Frame
            difference() {
                cube([6.0, 6.0, 0.20], center = true);
                cube([5.6, 5.6, 0.30], center = true);
            }
            // 4 Main Hip Rafters to Ridge Peak
            for (a = [45, 135, 225, 315]) {
                rotate([0, 0, a])
                    translate([1.8, 0, 1.2])
                        rotate([0, -45, 0])
                            cube([3.8, 0.15, 0.20], center = true);
            }
            // Apex Crown Peak Ring
            translate([0, 0, 2.5])
                cylinder(h = 0.4, r = 0.5, center = true);
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
// 5. MASTER STEP 08 ASSEMBLY
// --------------------------------------------------------------------
module step_08_roof_truss_master() {
    surroundings();
    lower_structure();
    roof_truss_framing();
    compass_rose_3d();
}

step_08_roof_truss_master();

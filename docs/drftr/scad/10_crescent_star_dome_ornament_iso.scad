// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 10: CRESCENT STAR DOME & ROOF COVER
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// COMPLETE 2-TIER ROOF ENCLOSURE + GOLDEN CRESCENT STAR DOME ORNAMENT
// =============================================================================================================

$fn = 64;

poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

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
// 2. LOWER BUILDING
// --------------------------------------------------------------------
module lower_building() {
    color([0.28, 0.52, 0.30]) {
        translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    }
    color([0.72, 0.75, 0.80]) {
        translate([0, 0, 0.0]) cube([10.4, 10.4, 0.10], center = true);
    }
    // Walls
    color([0.88, 0.88, 0.85]) {
        difference() {
            translate([0, 0, 1.9]) cube([9.3, 9.3, 3.8], center = true);
            translate([0, 0, 1.9]) cube([8.9, 8.9, 4.0], center = true);
            // Openings
            translate([0, 4.65, 1.5]) cube([2.4, 0.5, 3.0], center = true);
            translate([-4.65, 0, 1.8]) cube([0.5, 3.0, 3.6], center = true);
        }
        // West Mihrab
        translate([-5.45, 0, 1.8]) cube([1.6, 3.2, 3.6], center = true);
    }
}

// --------------------------------------------------------------------
// 3. 2-TIER LIMASAN ROOFS & GOLDEN DOME
// --------------------------------------------------------------------
module roofs_and_dome() {
    // Tier 1 Lower Sloped Roof (Dark Charcoal / Metal Genteng)
    color([0.22, 0.24, 0.28]) {
        translate([0, 0, 4.2]) {
            difference() {
                cylinder(h = 1.5, r1 = 8.5, r2 = 4.2, $fn = 4, center = true);
                cylinder(h = 1.6, r1 = 8.3, r2 = 4.0, $fn = 4, center = true);
            }
        }
    }

    // Clerestory Glass Windows between Tier 1 & Tier 2
    color([0.3, 0.8, 0.9, 0.6]) {
        translate([0, 0, 5.4]) {
            difference() {
                cube([5.8, 5.8, 0.9], center = true);
                cube([5.6, 5.6, 1.0], center = true);
            }
        }
    }

    // Tier 2 Upper Pyramid Roof
    color([0.18, 0.20, 0.24]) {
        translate([0, 0, 6.8]) {
            cylinder(h = 2.0, r1 = 4.5, r2 = 0.0, $fn = 4, center = true);
        }
    }

    // Golden Enamel Dome & Crescent Star (Puncak Kubah)
    translate([0, 0, 8.0]) {
        // Dome Base Ring
        color([0.85, 0.70, 0.15]) {
            cylinder(h = 0.3, r = 1.1, center = true);
            // Onion Dome Body
            translate([0, 0, 0.7])
                scale([1, 1, 1.25])
                    sphere(r = 0.9);
            // Spire Mast & Crescent Star
            translate([0, 0, 1.8])
                cylinder(h = 1.2, r = 0.04, center = true);
            translate([0, 0, 2.5])
                rotate([90, 0, 0])
                    difference() {
                        cylinder(h = 0.1, r = 0.35, center = true);
                        translate([0.12, 0.12, 0]) cylinder(h = 0.15, r = 0.30, center = true);
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
// 5. MASTER STEP 10 ASSEMBLY
// --------------------------------------------------------------------
module step_10_dome_master() {
    surroundings();
    lower_building();
    roofs_and_dome();
    compass_rose_3d();
}

step_10_dome_master();

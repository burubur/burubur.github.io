// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 11: MALE WUDHU & SANITATION PAVILION
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// 6 STAINLESS WUDHU TAPS + CERAMIC TILED FOOTRESTS + 2 WC UNITS (EAST SIDE)
// =============================================================================================================

$fn = 64;
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

module surroundings() {
    color([0.22, 0.42, 0.24]) translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    color([0.18, 0.20, 0.24]) translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    
}

module step_11_assembly() {
    surroundings();
    color([0.28, 0.52, 0.30]) translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    
    // Mosque Hall Outlines
    color([0.88, 0.88, 0.85, 0.5]) {
        translate([0, 0, 1.0]) cube([9.3, 9.3, 2.0], center = true);
    }

    // Male Wudhu Pavilion on East Flank (3.5m x 4.0m)
    translate([8.0, 2.0, 0]) {
        // Tiled Floor Platform
        color([0.65, 0.70, 0.75])
            translate([0, 0, 0.10]) cube([3.2, 4.2, 0.20], center = true);

        // Low Brick Privacy Walls & Wash Basin Bench
        color([0.85, 0.85, 0.82]) {
            translate([1.5, 0, 0.7]) cube([0.20, 4.0, 1.2], center = true);
            translate([0, -2.0, 0.7]) cube([3.0, 0.20, 1.2], center = true);
            translate([0, 2.0, 0.7]) cube([3.0, 0.20, 1.2], center = true);
        }

        // Tiled Seating Stools & Drainage Channel
        color([0.30, 0.60, 0.80]) {
            for (y = [-1.4 : 0.7 : 1.4]) {
                translate([-0.5, y, 0.35]) cube([0.4, 0.4, 0.4], center = true);
            }
        }

        // Stainless Steel Faucets / Keran Air (Glowing Silver)
        color([0.90, 0.95, 1.0]) {
            for (y = [-1.4 : 0.7 : 1.4]) {
                translate([0.6, y, 0.85]) {
                    rotate([0, 90, 0]) cylinder(h = 0.3, r = 0.03, center = true);
                    translate([0.15, 0, -0.08]) cylinder(h = 0.15, r = 0.025, center = true);
                }
            }
        }

        // Canopy Roof
        color([0.22, 0.24, 0.28]) {
            translate([0, 0, 2.4]) rotate([10, 0, 0]) cube([3.6, 4.6, 0.12], center = true);
        }
    }

    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_11_assembly();

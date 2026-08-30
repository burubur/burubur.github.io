// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 12: FEMALE WUDHU & SANITATION PAVILION
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// ENCLOSED FEMALE ABLUTION & SANITATION SUITE (SOUTH FLANK)
// =============================================================================================================

$fn = 64;
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

module surroundings() {
    color([0.22, 0.42, 0.24]) translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    color([0.18, 0.20, 0.24]) translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    
}

module step_12_assembly() {
    surroundings();
    color([0.28, 0.52, 0.30]) translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    
    // Mosque Hall Outlines
    color([0.88, 0.88, 0.85, 0.5]) translate([0, 0, 1.0]) cube([9.3, 9.3, 2.0], center = true);

    // Female Wudhu Pavilion on South Flank (4.2m x 3.2m)
    translate([-1.5, -7.2, 0]) {
        color([0.65, 0.70, 0.75]) translate([0, 0, 0.10]) cube([4.2, 3.2, 0.20], center = true);
        // Full Privacy Enclosure Walls
        color([0.85, 0.85, 0.82]) {
            difference() {
                translate([0, 0, 1.2]) cube([4.0, 3.0, 2.2], center = true);
                translate([0, 0, 1.2]) cube([3.6, 2.6, 2.3], center = true);
                // Private North Entry to Female Prayer Section
                translate([0, 1.5, 1.0]) cube([1.2, 0.5, 2.0], center = true);
            }
        }
        // Faucets & Seats Inside
        color([0.90, 0.95, 1.0]) {
            for (x = [-1.0 : 0.7 : 1.0]) {
                translate([x, -0.8, 0.85]) rotate([90, 0, 0]) cylinder(h = 0.3, r = 0.03, center = true);
            }
        }
        // Canopy Roof
        color([0.22, 0.24, 0.28]) translate([0, 0, 2.4]) rotate([-5, 0, 0]) cube([4.4, 3.4, 0.12], center = true);
    }

    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_12_assembly();

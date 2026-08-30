// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 14: SOUTHEAST MINARET TOWER
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// 15-METER OCTAGONAL MINARET TOWER + BALCONY + TOA HORN HOUSING (SOUTHEAST CORNER)
// =============================================================================================================

$fn = 64;
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

module surroundings() {
    color([0.22, 0.42, 0.24]) translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    color([0.18, 0.20, 0.24]) translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    
}

module step_14_assembly() {
    surroundings();
    color([0.28, 0.52, 0.30]) translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    
    // Mosque Hall Semi-Transparent Reference
    color([0.88, 0.88, 0.85, 0.3]) translate([0, 0, 1.9]) cube([9.3, 9.3, 3.8], center = true);

    // Minaret Footing on SE Corner
    translate([8.5, -6.5, 0]) {
        // Deep Footing & Pedestal Base
        color([0.55, 0.60, 0.68]) translate([0, 0, -0.6]) cube([2.8, 2.8, 1.2], center = true);

        // Octagonal Tower Shaft (12m height)
        color([0.85, 0.85, 0.82]) cylinder(h = 10.0, r = 1.2, $fn = 8);

        // Balcony Gallery at +10m
        color([0.15, 0.65, 0.60]) translate([0, 0, 10.0]) cylinder(h = 0.4, r = 1.8, $fn = 8);

        // Top Lantern
        color([0.88, 0.88, 0.85]) translate([0, 0, 10.4]) cylinder(h = 2.8, r = 0.9, $fn = 8);

        // 4 Horn TOA Speakers
        color([0.95, 0.45, 0.15]) {
            for (a = [0, 90, 180, 270]) {
                rotate([0, 0, a]) translate([0.95, 0, 11.5]) rotate([0, 90, 0]) cylinder(h = 0.4, r1 = 0.08, r2 = 0.22, center = true);
            }
        }

        // Minaret Dome Crown
        color([0.85, 0.70, 0.15]) {
            translate([0, 0, 13.2]) scale([1, 1, 1.4]) sphere(r = 0.85);
            translate([0, 0, 14.6]) cylinder(h = 1.0, r = 0.03, center = true);
        }
    }

    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_14_assembly();

// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 13: SOUTH SERAMBI PORCH & ACCESSIBILITY RAMP
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// EXTENDED SOUTH SERAMBI PORCH + DISABLED ACCESSIBILITY RAMP (SLOPE 1:12)
// =============================================================================================================

$fn = 64;
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

module surroundings() {
    color([0.22, 0.42, 0.24]) translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    color([0.18, 0.20, 0.24]) translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    
}

module step_13_assembly() {
    surroundings();
    color([0.28, 0.52, 0.30]) translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    
    // Main Hall Body
    color([0.88, 0.88, 0.85, 0.6]) translate([0, 0, 1.9]) cube([9.3, 9.3, 3.8], center = true);

    // South Serambi Covered Porch Platform
    color([0.72, 0.75, 0.80]) translate([1.5, -6.2, 0.0]) cube([6.5, 3.2, 0.20], center = true);

    // Serambi Columns (4 Units)
    color([0.70, 0.74, 0.80]) {
        for (x = [-1.5, 1.5, 4.5]) {
            translate([x, -7.6, 1.5]) cube([0.25, 0.25, 3.0], center = true);
        }
    }

    // Porch Sloped Canopy Roof
    color([0.22, 0.24, 0.28]) translate([1.5, -6.5, 3.2]) rotate([12, 0, 0]) cube([7.0, 3.6, 0.15], center = true);

    // Accessibility Ramp (Slope 1:12 Connecting FFL 0.0m to Alley -1.0m)
    color([0.45, 0.48, 0.52]) {
        polyhedron(
            points = [
                [4.8, -4.8, 0.0], [5.8, -4.8, 0.0], [5.8, -9.0, -1.0], [4.8, -9.0, -1.0],
                [4.8, -4.8, -0.15], [5.8, -4.8, -0.15], [5.8, -9.0, -1.15], [4.8, -9.0, -1.15]
            ],
            faces = [
                [0, 1, 2, 3], [4, 7, 6, 5], [0, 4, 5, 1], [2, 6, 7, 3], [0, 3, 7, 4], [1, 5, 6, 2]
            ]
        );
        // Stainless Handrails
        color([0.90, 0.95, 1.0]) {
            translate([5.7, -6.9, -0.05]) rotate([12, 0, 0]) cylinder(h = 4.5, r = 0.025, center = true);
        }
    }

    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_13_assembly();

// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 15: AUDIO ACOUSTIC & TOA WIRING
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// SOUND SYSTEM RACK + 8 COLUMN SPEAKERS + MINARET HORN ARRAY + HIGH-PRECISION WIRING
// =============================================================================================================

$fn = 64;
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];
grid_x = [-4.5, -1.5, 1.5, 4.5];
grid_y = [-4.5, -1.5, 1.5, 4.5];

module surroundings() {
    color([0.22, 0.42, 0.24]) translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    color([0.18, 0.20, 0.24]) translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    
}

module step_15_assembly() {
    surroundings();
    color([0.28, 0.52, 0.30]) translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    
    // Wireframe Hall
    color([0.88, 0.88, 0.85, 0.3]) translate([0, 0, 1.9]) cube([9.3, 9.3, 3.8], center = true);

    // Audio Amplifier Control Rack (Front Left Near Mihrab)
    color([0.12, 0.15, 0.20]) {
        translate([-4.0, 3.2, 0.6]) cube([0.8, 0.6, 1.2], center = true);
    }
    // Glowing Audio Control Panel
    color([0.0, 0.9, 0.5]) {
        translate([-3.58, 3.2, 0.7]) cube([0.05, 0.5, 0.8], center = true);
    }

    // 8 Wall / Column Speakers (ZS-1030 Style)
    color([0.95, 0.95, 0.95]) {
        for (x = [-4.4, 4.4]) {
            for (y = [-3.0, 0.0, 3.0]) {
                translate([x, y, 2.8]) cube([0.15, 0.25, 0.40], center = true);
            }
        }
    }

    // Acoustic Signal Distribution Conduits (Glowing Orange / Cyan Lines)
    color([0.0, 0.85, 1.0]) {
        for (x = [-4.4, 4.4]) {
            translate([x, 0, 3.6]) rotate([90, 0, 0]) cylinder(h = 8.8, r = 0.02, center = true);
        }
        translate([0, 3.6, 3.6]) rotate([0, 90, 0]) cylinder(h = 8.8, r = 0.02, center = true);
    }

    // Minaret Audio Feed line
    color([1.0, 0.4, 0.1]) {
        translate([4.0, -1.5, 3.6]) rotate([0, 0, -45]) cylinder(h = 0.03, r = 0.02);
    }

    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_15_assembly();

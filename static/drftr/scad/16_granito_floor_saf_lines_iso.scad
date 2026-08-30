// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 16: POLISHED GRANITO FLOORING & QIBLA SAFS
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// 60x60cm POLISHED NANO GRANITO TILES + PERMANENT INLAID QIBLA SAF LINES
// =============================================================================================================

$fn = 64;
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

module surroundings() {
    color([0.22, 0.42, 0.24]) translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    color([0.18, 0.20, 0.24]) translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    
}

module step_16_assembly() {
    surroundings();
    color([0.28, 0.52, 0.30]) translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    
    // Low Wall Surroundings for Interior Visibility
    color([0.88, 0.88, 0.85, 0.5]) {
        difference() {
            translate([0, 0, 0.8]) cube([9.3, 9.3, 1.6], center = true);
            translate([0, 0, 0.8]) cube([8.9, 8.9, 1.8], center = true);
        }
        translate([-5.45, 0, 0.8]) cube([1.6, 3.2, 1.6], center = true);
    }

    // Polished Nano Granito Tiles 60x60cm (Glossy Ivory Porcelain)
    color([0.94, 0.93, 0.90]) {
        translate([0, 0, 0.05]) cube([8.8, 8.8, 0.04], center = true);
    }

    // Tile Grout Matrix Lines (Thin Slate Grey)
    color([0.78, 0.78, 0.78]) {
        for (x = [-4.2 : 0.6 : 4.2]) {
            translate([x, 0, 0.071]) rotate([90, 0, 0]) cylinder(h = 8.8, r = 0.005, center = true);
        }
        for (y = [-4.2 : 0.6 : 4.2]) {
            translate([0, y, 0.071]) rotate([0, 90, 0]) cylinder(h = 8.8, r = 0.005, center = true);
        }
    }

    // Permanent Inlaid Saf Lines (Emerald Green & Gold Glazed Inlay)
    color([0.08, 0.45, 0.25]) {
        for (y = [-3.6, -2.4, -1.2, 0.0, 1.2, 2.4, 3.6]) {
            translate([0, y, 0.075]) cube([8.6, 0.08, 0.01], center = true);
        }
    }
    color([0.95, 0.80, 0.20]) {
        for (y = [-3.6, -2.4, -1.2, 0.0, 1.2, 2.4, 3.6]) {
            translate([0, y + 0.04, 0.078]) cube([8.6, 0.02, 0.01], center = true);
        }
    }

    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_16_assembly();

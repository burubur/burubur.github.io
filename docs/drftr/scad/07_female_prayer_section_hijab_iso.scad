// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 07: FEMALE PRAYER SECTION & HIJAB PARTITION
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// SEPARATE FEMALE PRAYER SECTION + WOODEN CNC HIJAB PARTITION + SAF CARPETS
// =============================================================================================================

$fn = 64;

poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

module surroundings() {
    color([0.22, 0.42, 0.24]) {
        translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    }
    color([0.18, 0.20, 0.24]) {
        translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    }
}

module step_07_assembly() {
    surroundings();
    // Base Slab
    color([0.28, 0.52, 0.30]) {
        translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    }
    color([0.72, 0.75, 0.80]) {
        translate([0, 0, 0.0]) cube([10.4, 10.4, 0.10], center = true);
    }
    // Cutaway Walls (Half Height to see interior)
    color([0.88, 0.88, 0.85, 0.6]) {
        difference() {
            translate([0, 0, 1.0]) cube([9.3, 9.3, 2.0], center = true);
            translate([0, 0, 1.0]) cube([8.9, 8.9, 2.2], center = true);
        }
    }
    // Wooden CNC Laser Cut Hijab Divider Partition (Teak / Jati Wood Tone)
    color([0.75, 0.45, 0.20]) {
        translate([0, -1.5, 0.9])
            cube([8.8, 0.12, 1.8], center = true);
    }
    // Green Turkish Velvet Saf Carpets (Male Section: Front, Female Section: Rear)
    color([0.10, 0.55, 0.30]) {
        // Male Front Safs
        for (y = [3.0, 1.8, 0.6, -0.6]) {
            translate([0, y, 0.06]) cube([8.6, 1.10, 0.02], center = true);
        }
        // Female Rear Safs
        for (y = [-2.4, -3.6]) {
            translate([0, y, 0.06]) cube([8.6, 1.10, 0.02], center = true);
        }
    }
    // Golden Saf Orientation Border Lines (Aligned West to East)
    color([0.95, 0.80, 0.20]) {
        for (y = [3.55, 2.35, 1.15, -0.05, -1.85, -3.05]) {
            translate([0, y, 0.08]) cube([8.6, 0.06, 0.01], center = true);
        }
    }
    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_07_assembly();

// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 09: LIMASAN ROOF COVER & CLERESTORY GLASS
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// 2-TIER ROOF COVER WITH ARCHITECTURAL CLERESTORY VENTILATION APERTURES
// =============================================================================================================

$fn = 64;

poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

module surroundings() {
    color([0.22, 0.42, 0.24]) translate([-22, 0, 0.5]) cube([26, 32, 1.0], center = true);
    color([0.18, 0.20, 0.24]) translate([-35, 9, -0.10]) cube([70, 6.0, 0.15]);
    
}

module step_09_assembly() {
    surroundings();
    color([0.28, 0.52, 0.30]) translate([0, 0, -1.0]) linear_extrude(height = 1.0) polygon(poly_site);
    color([0.88, 0.88, 0.85]) {
        difference() {
            translate([0, 0, 1.9]) cube([9.3, 9.3, 3.8], center = true);
            translate([0, 0, 1.9]) cube([8.9, 8.9, 4.0], center = true);
        }
        translate([-5.45, 0, 1.8]) cube([1.6, 3.2, 3.6], center = true);
    }
    // Tier 1 Sloped Roof
    color([0.22, 0.24, 0.28]) {
        translate([0, 0, 4.2])
            difference() {
                cylinder(h = 1.5, r1 = 8.5, r2 = 4.2, $fn = 4, center = true);
                cylinder(h = 1.6, r1 = 8.3, r2 = 4.0, $fn = 4, center = true);
            }
    }
    // Clerestory Windows with Louvers
    color([0.3, 0.8, 0.9, 0.7]) {
        translate([0, 0, 5.4])
            difference() {
                cube([5.8, 5.8, 0.9], center = true);
                cube([5.6, 5.6, 1.0], center = true);
            }
    }
    // Tier 2 Limasan Pyramid Roof
    color([0.18, 0.20, 0.24]) {
        translate([0, 0, 6.8])
            cylinder(h = 2.0, r1 = 4.5, r2 = 0.0, $fn = 4, center = true);
    }
    // Compass Rose
    translate([12, 12, 1.2]) {
        color([0.0, 0.75, 0.95]) cylinder(h = 0.10, r = 1.5, center = true);
        color([0.95, 0.2, 0.2]) translate([0, 0.8, 0.05]) rotate([0, 0, 180]) cylinder(h = 0.12, r1 = 0.35, r2 = 0.0, $fn = 3, center = true);
        color([0.9, 0.9, 0.9]) translate([0, 1.4, 0.12]) linear_extrude(height = 0.15) text("N", size = 0.7, font = "Liberation Sans:style=Bold", halign = "center", valign = "center");
    }
}

step_09_assembly();

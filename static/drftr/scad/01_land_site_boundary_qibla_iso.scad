// =============================================================================================================
// MASJID NURUL FALAH SUKATANI — STEP 01: SITE GEODESY & BOUNDARY SPEC
// Parametric Architectural CSG Model (OpenSCAD)
//
// STRICT CIVIL MANDATE: NORTH AT TOP (+Y AXIS)
// TOTAL LAND AREA: 369.0 m² | EFFECTIVE FOOTPRINT: 182.0 m²
//
// +=============================================================================================================+
// |                                              [ NORTH / UTARA ]                                              |
// |                                       🧭 UTARA SEJATI (TRUE NORTH 0.0°)                                     |
// +=============================================================================================================+
// | ==================================[ JALAN UTAMA ASPAL SELEBAR 6.0 METER ]================================= |
// | (Kontur Jalan Melandai Menurun: Barat +1.00m ===========================================> Timur -1.00m)     |
// | ----------------- - - - - - - - - [ MARKA JALAN GARIS PUTUS-PUTUS ] - - - - - - - - - --------------------- |
// | =========================================================================================================== |
// |                                                                                                             |
// | [ LAHAN LUAR BARAT ]  [NW PATOK BPN] <------------ SISI UTARA LAHAN: 18.00 METER ------------> [NE PATOK]  \  \ (GANG TIMUR 1.0m)
// | [ ELEVASI: +1.00m  ]  (X: -9.0, Y: 9.0) ════════════════════════════════════════════════ (X: 9.0, Y: 9.0)   \  \ ELEV: -1.0m
// | [ (+1.0m DI ATAS   ]  ║                                                                     ▲      \  \ SISI MIRING
// | [  TERAS MASJID)   ]  ║ <------------------ GARIS SEMPADAN BANGUNAN (GSB UTARA): 3.0m ----> ║       \  \ 18.68 METER
// | [                  ]  ║                                                                     ║        \  \
// | [ TEBING CUT TANAH ]  ║  ┌───────────────────────────────────────────────────────────────┐  ║         \  \
// | [ ALAMI DI SEPANJANG] ║  │                                                               │  ║          \  \
// | [ BATAS BARAT      ]  ║ S│   +-------------------------------------------------------+   │S ║           \  \
// | [                  ]  ║ i│   |   AREA TAPAK EFEKTIF BANGUNAN: 14.00m x 13.00m        |   │e ║            \  \
// | [ SISI BARAT TEGAK ]  ║ s│   |   (LUAS TAPAK: 182.0 M² | FFL: +0.40m)                |   │t ║             \  \
// | [ LURUS SIKU 90°   ]  ║ i│   |                                                       |   │b ║              \  \
// | [ PANJANG: 18.00m  ]  ║  │   |   [ DINDING MIHRAB IMAM (BARAT) ]                     |   │a ║               \  \
// | [                  ]  ║ B│   |   ◄═══════════════════════════════════════════ (●)    |   │c ║                \  \
// | [ ACUAN ZERO DATUM ]  ║ a│   |        ARAH KIBLAT MENGHADAP KE BARAT         THEODOLITE  │k ║                 \  \
// | [ TERAS: ±0.00m    ]  ║ r│   |        (AKSIS KIBLAT PRESISI 294.5° NW)       TOTAL   │: ║                  \  \
// | [                  ]  ║ a│   |                                               STATION │2 ║                   \  \
// | [ DINDING KIBLAT   ]  ║ t│   |   (Posisi Shalat Menghadap Sisi Barat Masjid)         |   │. ║                    \  \
// | [ MENGHADAP BARAT  ]  ║ :│   +-------------------------------------------------------+   │0 ║                     \  \
// | [                  ]  ║ 1│                                                               │m ║                      \  \
// | [ BOUWPLANK KAYU   ]  ║ 8│                                                               │  ║                       \  \
// | [ PROFIL KELILING  ]  ║ .│                                                               │  ║                        \  \
// | [ TOTAL: 77.7m     ]  ║ 0│                                                               │  ║                         \  \
// | [                  ]  ║ m│                                                               │  ║                          \  \
// | [ 4 PATOK BPN      ]  ║  │                                                               │  ║                           \  \
// | [ GEODESI MERAH    ]  ║  │ <--------------- SETBACK BELAKANG (SELATAN): 2.0m ----------->│  ║                            \  \
// | [                  ]  ║  └───────────────────────────────────────────────────────────────┘  ║                             \  \
// | [ LUAS TOTAL LAHAN ]  ║                                                                     ║                              \  \
// | [ 369.0 M² TRAPESIUM] ║ <------------------ BATAS BELAKANG LAHAN SELATAN ------------------> ║                               \  \
// | [                  ]  (X: -9.0, Y: -9.0) ═══════════════════════════════════════════════ (X: 14.0, Y: -9.0) ═══════════════╝   │
// |                       [SW PATOK BPN]                                                        [SE PATOK BPN] (GANG BERSAMBUNG)      │
// |                       ------------------------------------------------------------------------------------------------------------+
// |                       [ TALUD DPT BATU KALI 1.0m MENAHAN TEBING TERAS MASJID DARI GANG SELATAN & TIMUR ]
// |                                                                 │  │
// |                                                                 │  │ GANG 1.0m PEJALAN KAKI
// |                                                                 │  │ BERBELOK & MENURUN (SLOPE / RAMP)
// |                                                                 │  │ ELEVASI: -1.00m DI BAWAH MASJID
// |                                                                 ▼  ▼
// |                                                   [ AKSES AREA PERUMAHAN WARGA (SELATAN -1.0m) ]
// +=============================================================================================================+
// |                                              [ SOUTH / SELATAN ]                                            |
// +=============================================================================================================+
// =============================================================================================================

$fn = 64;
// High-resolution curves

// --------------------------------------------------------------------
// 1. PARAMETERS & GEODESY COORDINATES (All units in meters)
// --------------------------------------------------------------------
north_length = 18.00;
// Sisi Utara (Jalan Utama 6.0m)
south_length = 23.00;
// Sisi Selatan (Perumahan Warga)
west_length = 18.00;
// Sisi Barat (Perpendicular 90°)
east_length = 18.68;
// Sisi Timur (Diagonal Gang 1.0m)
total_land_area = 369.0;
// Total Luas Lahan (m²)

// 2D Polygon Vertices in (X, Y) with North at +Y:
// NW = [-9,  9]
// NE = [ 9,  9]
// SE = [14, -9]
// SW = [-9, -9]
poly_site = [ [-9, -9], [14, -9], [9, 9], [-9, 9] ];

// Datum Elevations (Z in meters)
z_masjid_datum = 0.00;
// ±0.00m Zero Datum Lahan
z_main_road = -0.10;
// -10cm Jalan Utama Utara
z_gang_alley = -1.00;
// -1.0m Jalan Gang Timur & Selatan
h_land_slab = 0.35;
// Ketebalan Slab Olah Lahan

// Qibla Calibration Angle
qibla_angle = 294.5;
// 294.5° NW (24.5° West of North)

// --------------------------------------------------------------------
// 2. SITE FOUNDATION & LAND BOUNDARY SLAB (TERRACE ELEVATED +1.0M)
// --------------------------------------------------------------------
module site_land_slab() {
  // Soil volume beneath mosque from -1.0m up to 0.0m (Zero Datum)
  color([0.28, 0.24, 0.20]) {
    // Soil Dark Earth
    translate([0, 0, z_gang_alley])
      linear_extrude(height = 0.95)
        polygon(poly_site);
  }

  // Top Grass/Ground Level at ±0.00m
  color([0.18, 0.48, 0.25]) {
    // Green Ground Surface
    translate([0, 0, z_masjid_datum - 0.05])
      linear_extrude(height = 0.05)
        polygon(poly_site);
  }
}

// Retaining Wall (Talud DPT Batu Kali) Supporting South Elevation Drop to -1.0m
module retaining_wall_dpt_south() {
  color([0.48, 0.45, 0.40]) {
    // Stone Masonry Grey
    // South Rear Retaining Face (Supporting Terrace 0.0m against South Elevation dropping to -1.0m)
    translate([0, 0, z_gang_alley])
      linear_extrude(height = 1.00)
        polygon([ [-9, -9], [14, -9], [14, -9.4], [-9, -9.4] ]);
  }
}

// --------------------------------------------------------------------
// 3. SURROUNDING INFRASTRUCTURE & TOPOGRAPHY
// --------------------------------------------------------------------

// West Neighbor Elevated Ground (+1.0m Above Mosque Datum)
module west_high_ground() {
  color([0.22, 0.45, 0.25]) {
    // Grass Green on Elevated West
    translate([-13, -9, 0.00])
      cube([4.0, 18.0, 1.00]);
  }
  // Retaining Cut Face along West Boundary (x = -9.0m)
  color([0.48, 0.45, 0.40]) {
    // Stone Masonry Grey
    translate([-9.25, -9, 0.00])
      cube([0.25, 18.0, 1.00]);
  }
}

// Main Access Road 6.0m Wide (Extending Continuously from West -35m to East +35m, Sloping from West to East)
module main_access_road() {
  x_west = -35.0;
  x_east = 35.0;
  y_road_start = 9.0;
  y_road_end = 15.0;
  road_thickness = 2.50;
  // Ketebalan penampang struktur jalan aspal, lapis pondasi atas & subgrade retaining embankment (2.5 meter)

  // Elevation calculation across continuous road
  z_west = 1.0 - (x_west + 9.0) * (1.10 / 18.0);
  // at x=-35m, z ~ +2.58m
  z_east = 1.0 - (x_east + 9.0) * (1.10 / 18.0);
  // at x=+35m, z ~ -1.68m

  color([0.18, 0.20, 0.24]) {
    // Asphalt Grey
    polyhedron(
      points = [
        [x_west, y_road_start, z_west], [x_east, y_road_start, z_east],
        [x_east, y_road_end, z_east], [x_west, y_road_end, z_west],
        [x_west, y_road_start, z_west - road_thickness], [x_east, y_road_start, z_east - road_thickness],
        [x_east, y_road_end, z_east - road_thickness], [x_west, y_road_end, z_west - road_thickness]
      ],
      faces = [
        [0, 1, 2, 3],
        [4, 7, 6, 5],
        [0, 4, 5, 1],
        [2, 6, 7, 3],
        [0, 3, 7, 4],
        [1, 5, 6, 2]
      ]
    );
  }

  // Continuous Centerline Road Markings (Dashed White Line along full stretch)
  color([0.92, 0.92, 0.95]) {
    for (x = [-33 : 4 : 31]) {
      z_x = 1.0 - (x + 9.0) * (1.10 / 18.0);
      translate([x, 12, z_x + 0.02])
        rotate([0, atan2(1.10, 18.0), 0])
          cube([2.5, 0.25, 0.02]);
    }
  }

  // Road Outer Curb / Shoulder Lines
  color([0.80, 0.82, 0.85]) {
    // North Outer Curb line
    translate([0, 15, 0]) {
      // subtle curb edge
    }
  }
}

// --------------------------------------------------------------------
// 4. BPN GEODESY MONUMENTS & BOUNDARY FENCE LINES
// --------------------------------------------------------------------
module geodesy_monuments() {
  // 4 Corner Geodesy Monuments (Patok Merah BPN)
  corners = poly_site;
  color([0.95, 0.15, 0.15]) {
    // Red Geodesy Stakes
    for (p = corners) {
      translate([p[0], p[1], h_land_slab])
        cylinder(h = 0.85, r = 0.25);
    }
  }

  // High-Vis Yellow Boundary Lines
  color([1.0, 0.85, 0.0]) {
    // North Line (18.00m)
    translate([-9, 9, h_land_slab + 0.05]) rotate([0, 90, 0]) cylinder(h = 18, r = 0.06);
    // West Line (18.00m)
    translate([-9, -9, h_land_slab + 0.05]) rotate([-90, 0, 0]) cylinder(h = 18, r = 0.06);
    // South Line (23.00m)
    translate([-9, -9, h_land_slab + 0.05]) rotate([0, 90, 0]) cylinder(h = 23, r = 0.06);
    // East Line (18.68m Diagonal)
    translate([14, -9, h_land_slab + 0.05]) rotate([0, 0, 105.5]) rotate([0, 90, 0]) cylinder(h = 18.68, r = 0.06);
  }
}

// --------------------------------------------------------------------
// 5. BOUWPLANK TIMBER FRAMEWORK (14m x 14m)
// --------------------------------------------------------------------
module bouwplank_framework() {
  // Mosque Footprint Aligned to Qibla Orientation (294.5° NW)
  translate([0.5, -0.5, h_land_slab]) rotate([0, 0, qibla_angle - 270]) {
    // 14m x 14m Timber Bouwplank Perimeter Frame
    color([0.72, 0.52, 0.32]) {
      // Timber Wood Color
      difference() {
        cube([14.4, 14.4, 0.25], center = true);
        cube([13.8, 13.8, 0.30], center = true);
      }
    }

    // Subgrade Slab Concrete Footprint (10m x 10m Main Prayer Hall)
    color([0.8, 0.82, 0.85, 0.5]) {
      translate([0, 0, 0.02])
        cube([10.0, 10.0, 0.08], center = true);
    }
  }
}

// --------------------------------------------------------------------
// 6. TOTAL STATION THEODOLITE & QIBLA LASER (294.5° NW)
// --------------------------------------------------------------------
module total_station_theodolite() {
  translate([0.5, -0.5, h_land_slab]) {
    // Tripod Legs (Surveyor Yellow)
    color([1.0, 0.75, 0.0]) {
      for (a = [0, 120, 240]) {
        rotate([0, 20, a])
          translate([0, 0, 0.65])
            cylinder(h = 1.3, r = 0.04, center = true);
      }
    }
    // Total Station Housing (Teal Precision Tool)
    color([0.15, 0.65, 0.70]) {
      translate([0, 0, 1.25]) cylinder(h = 0.20, r = 0.22);
      translate([0, 0, 1.50]) cube([0.30, 0.30, 0.35], center = true);
    }
    // Laser Telescope pointing West (294.5° NW / Cartesian angle 155.5° towards West wall)
    color([0.0, 0.85, 1.0]) {
      // Glowing Cyan Vector
      translate([0, 0, 1.55]) {
        rotate([0, 0, 155.5]) {
          rotate([0, 90, 0])
            cylinder(h = 0.50, r = 0.08, center = true);
          translate([6.5, 0, 0])
            rotate([0, 90, 0])
              cylinder(h = 13.0, r = 0.06, center = true);
          translate([13.0, 0, 0])
            rotate([0, 0, -90])
              cylinder(h = 0.15, r1 = 0.6, r2 = 0.0, $fn = 3);
        }
      }
    }
  }
}

// --------------------------------------------------------------------
// 7. 3D GEODESY COMPASS ROSE (ARAH MATA ANGIN UTARA ATAS +Y)
// --------------------------------------------------------------------
module compass_rose_3d() {
  // Prominent Geodesy Compass Rose at Top-Right (+X, +Y above road)
  translate([18, 19, 0.5]) {
    // Dial Base
    color([0.15, 0.18, 0.22]) {
      cylinder(h = 0.10, r = 2.4, center = true);
    }
    color([0.0, 0.85, 1.0]) {
      // Cyan Outer Ring
      difference() {
        cylinder(h = 0.14, r = 2.4, center = true);
        cylinder(h = 0.18, r = 2.15, center = true);
      }
    }

    // NORTH POINTER (BRIGHT RED ARROW +Y)
    color([0.95, 0.15, 0.15]) {
      translate([0, 1.3, 0.1])
        rotate([0, 0, 90])
          cylinder(h = 0.25, r1 = 0.75, r2 = 0.0, $fn = 3);
      translate([0, 0.45, 0.1])
        cube([0.35, 1.3, 0.2], center = true);
    }

    // SOUTH POINTER (-Y)
    color([0.75, 0.80, 0.88]) {
      translate([0, -1.3, 0.1])
        rotate([0, 0, -90])
          cylinder(h = 0.18, r1 = 0.50, r2 = 0.0, $fn = 3);
    }

    // EAST POINTER (+X)
    color([0.75, 0.80, 0.88]) {
      translate([1.3, 0, 0.1])
        rotate([0, 0, 0])
          cylinder(h = 0.18, r1 = 0.50, r2 = 0.0, $fn = 3);
    }

    // WEST POINTER (-X)
    color([0.75, 0.80, 0.88]) {
      translate([-1.3, 0, 0.1])
        rotate([0, 0, 180])
          cylinder(h = 0.18, r1 = 0.50, r2 = 0.0, $fn = 3);
    }

    // 3D "N" (NORTH) TEXT
    color([1.0, 1.0, 1.0]) {
      translate([-0.4, 2.5, 0.1])
        linear_extrude(height = 0.3)
          text("N", size = 1.1, font = "Liberation Sans:style = Bold");
    }
  }
}

// --------------------------------------------------------------------
// 8. MASTER STEP 01 ASSEMBLY
// --------------------------------------------------------------------
module step_01_site_geodesy_master() {
  site_land_slab();
  retaining_wall_dpt_south();
  west_high_ground();
  main_access_road();
  geodesy_monuments();
  compass_rose_3d();
}

step_01_site_geodesy_master();

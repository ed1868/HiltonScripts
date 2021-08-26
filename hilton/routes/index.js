const express = require('express');
const router = express.Router();
let Hotels = require('./hiltonDerbyHotels');

let hiltonList = [
  'Hampton Inn Twin Falls',
  'Hilton Garden Inn Twin Falls',
  'Hilton Ponce Golf & Casino Resort',
  'Hampton Inn & Suites San Juan',
  'DoubleTree by Hilton Hotel Portland, ME',
  'The Higgins Hotel New Orleans, Curio Collection by Hilton',
  'Boulders Resort & Spa Scottsdale, Curio Collection by Hilton',
  'Hilton Grand Vacations at the Flamingo',
  'Double tree by hilton hotel billings',
  'Double tree by Hilton Niagara Falls',
  'Hilton Habtoor City',
  'Double Tree by hilton Atlantic Beach',
  'Home2 Suites by Hilton Las Cruces',
  'hilton darwin',
  'Hilton Colon Quito',
  'Hilton Garden Inn Waikiki Beach ',
  'Hilton Garden Inn Denver Airport',
  'Hilton Garden Inn Denver Downtown',
  'DoubleTree by Hilton Hotel Durango',
  'Hampton Inn St Louis Downtown (At the Gateway Arch)',
  'Hampton Inn Bennington',
  'Hoodoo Moab, Curio Collection by Hilton',
  'DoubleTree Suites by Hilton Hotel Doheny Beach',
  'Cliffrose Springdale, Curio Collection by Hilton',
  'Hilton Playa del Carmen',
  'Hilton La Romana Adult Resort',
  'hilton tampa downtown',
  'Homewood Suites by Hilton Joplin',
  'Homewood Suites by Hilton Paducah',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'Hilton Garden Inn New York Central Park',
  'Hampton Inn Idaho Falls',
  'Pointe Hilton Squaw Peak Resort',
  'hampton inn and suites barstow',
  'Hilton Garden Inn San Luis Obispo/Pismo Beach',
  'Hotel Don Fernando de Taos, Tapestry Collection by Hilton',
  'Hilton Atlanta/Marietta Hotel & Conference Center',
  'Hilton Garden Inn Providence',
  'hampton inn and suites watertown',
  'Hilton Anchorage',
  'Hilton Aruba Caribbean Resort & Casino',
  'Homewood Suites by Hilton Houma',
  'Hampton Inn Downtown',
  'hampton Inn & Suites homestead',
  'Hampton Inn & Suites Kingman',
  'Hilton Newark Airport, Spring Street, Elizabeth, NJ, USA',
  'Hilton Marco Island Beach Resort and Spa',
  'Miramonte Indian Wells Resort & Spa, Curio Collection by Hilton, Indian Wells Lane, Indian Wells, CA, USA',
  'Miramonte Indian Wells Resort & Spa, Curio Collection by Hilton, Indian Wells Lane, Indian Wells, CA, USA',
  'DoubleTree by Hilton Hotel Claremont',
  'DoubleTree by Hilton Hotel Berkeley Marina',
  'Hampton Inn Manhattan-Chelsea',
  'DoubleTree by Hilton Hotel New York City',
  'Hilton Garden Inn Atlanta Downtown',
  'Hampton Inn & Suites San Luis Obispo, Calle Joaquin, San Luis Obispo, CA, USA',
  'Hilton Garden Inn Napa, Solano Avenue, Napa, CA, USA',
  'Hampton Inn Grand Junction Downtown/Historic Main Street, Main Street, Grand Junction, CO, USA',
  'Hilton Cabana Miami Beach ',
  'Hilton Ocean City Oceanfront Suites',
  'Hilton Asheville Biltmore Park',
  'Hilton La Romana Family Resort',
  'DoubleTree by Hilton Hotel Olympia',
  'DoubleTree by Hilton Hotel Orlando East-UCF Area, High Tech Avenue, Orlando, FL, USA',
  'Hilton Garden Inn San Diego Old Town/SeaWorld Area',
  'DoubleTree Suites by Hilton',
  'Hilton Fort Worth, Main Street, Fort Worth, TX, USA',
  'HHHWI The Westin Hilton Head Island Resort & Spa',
  'DoubleTree by Hilton Hotel New York Times Square West',
  'Hilton Garden Inn Fort Walton Beach, Miracle Strip Parkway Southeast, Fort Walton Beach, FL, USA',
  'Hilton Sandestin Beach Golf Resort & Spa, South Sandestin Boulevard, Miramar Beach, FL, USA',
  'Hilton Cleveland Downtown, Lakeside Avenue East, Cleveland, OH, USA',
  'DoubleTree Suites by Hilton Hotel Santa Monica, 4th Street, Santa Monica, CA, USA',
  'The Hacienda at Hilton Puerto Vallarta All Inclusive Adults Only',
  'Hampton Inn Monterrey Aeropuerto',
  'Hilton Minneapolis',
  'Hilton San Diego Gaslamp Quarter',
  'Homewood Suites by Hilton San Diego Downtown',
  'Hilton Garden Inn San Diego Downtown/Bayside',
  'Hampton Inn Manhattan/Times Square Central',
  'Hampton Inn & Suites by Hilton Los Cabos',
  'Ocean Tower at Hilton Waikoloa Village Asia',
  'Hilton Garden Inn Denver Airport',
  'Hampton Inn Las Vegas/North Speedway',
  'Hampton Inn and Suites Las Vegas/West Summerlin',
  'Hampton Inn Las Vegas/Summerlin',
  'Hilton Grand Vacations on Paradise',
  'Hampton Inn Tropicana',
  'Hampton Inn and Suites Las Vegas Airport',
  'Embassy Suites by Hilton Las Vegas',
  'DoubleTree by Hilton Las Vegas Airport',
  'Embassy Suites by Hilton Convention Center Las Vegas',
  'Homewood Suites by Hilton Las Vegas Airport',
  'Hampton Inn and Suites Henderson/Saint Rose',
  'Homewood Suites by Hilton Henderson/South Las Vegas',
  'Hampton Inn and Suites Henderson',
  'Hilton Garden Inn Las Vegas/Henderson',
  'Homewood Suites by Hilton Miami Downtown/Brickell',
  'Hilton Garden Inn Valencia Six Flags',
  'DoubleTree by Hilton Hotel Bakersfield',
  'Embassy Suites by Hilton Phoenix Scottsdale',
  'Hilton Garden Inn Dallas Downtown',
  'Hilton Garden Inn New York Times Square South',
  'El Conquistador Tucson, A Hilton Resort',
  'DoubleTree by Hilton Hotel Golf Resort Palm Springs',
  'McLean/DoubleTree by Hilton',
  'DoubleTree by Hilton Nashua',
  'Hilton San Diego Airport-Harbor Island',
  'The Darcy, Curio Collection by Hilton',
  'Homewood Suites by Hilton New Orleans French Quarter',
  'Hilton Cabana Miami Beach',
  'Condado Lagoon Villas at Caribe Hilton',
  'Hilton Garden Inn Miami South Beach',
  'Hilton Mexico City Reforma',
  'Hilton Puerto Vallarta Resort',
  'Hilton Garden Inn Redondo Beach',
  'GALLERYone - a DoubleTree Suites by Hilton Hotel',
  'The Gates Hotel South Beach - A DoubleTree By Hilton',
  'Doubletree by Hilton Orlando at SeaWorld',
  'Hampton Inn International Dr Convention Center',
  'Hilton Boston Downtown-Faneuil Hall',
  'DoubleTree by Hilton Bethesda-Washington D.C.',
  'DoubleTree by Hilton Hotel Portland, ME',
  'Hilton Garden Inn New York/Tribeca',
  'Hilton Garden Inn New York/West 35th Street',
  'Hampton Inn Manhattan-Chelsea',
  'Hampton Inn Manhattan-35th St/Empire State Bldg',
  'Hampton Inn Manhattan-Seaport-Financial District',
  'DoubleTree by Hilton Hotel New York City - Chelsea',
  'Hampton Inn Manhattan Grand Central',
  'Hilton Garden Inn New York/Central Park South-Midtown West',
  'Hampton Inn Manhattan-Times Square North',
  'Hilton Garden Inn New York/Manhattan-Midtown East',
  'DoubleTree by Hilton Hotel New York - Times Square South',
  'Hampton Inn Manhattan-SoHo',
  'DoubleTree by Hilton Cape Cod - Hyannis',
  'Hilton Garden Inn Austin Downtown',
  'Hilton Garden Inn Times Square',
  'Hampton Inn Madison Square Garden',
  'Hilton Newark Penn Station ',
  'The Wit Chicago a Doubletree by Hilton',
  'DoubleTree by Hilton Del Mar',
  'Hilton Orange County',
  'Doubletree by Hilton Irvine Spectrum',
  'DoubleTree by Hilton Santa Ana Orange County Airport',
  'Hilton Phoenix Mesa',
  'Hilton Waikoloa Village Asia',
  'Hilton Marco Island Beach Resort and Spa',
  'Hilton Santa Barbara Beachfront Resort',
  'Hilton Garden Inn Carlsbad Beach',
  'Hilton Palm Springs',
  'Hilton Santa Fe at Buffalo Thunder',
  'Hilton Garden Inn Orlando International Drive North',
  'Doubletree by Hilton Fresno Convention Center',
  'Cape Rey Carlsbad, A Hilton Resort',
  'Hilton Garden Inn New York Chelsea',
  'DoubleTree by Hilton Greenway Plaza',
  'DoubleTree by Hilton Hotel Anaheim - Orange County',
  'DoubleTree by Hilton Tucson at Reid Park',
  'Hampton Inn Downtown French-Quarter Area',
  'DoubleTree by Hilton San Pedro - Port of Los Angeles',
  'Hilton Portland Downtown',
  'DoubleTree by Hilton Hotel Grand Junction',
  'Hilton Singer Island Oceanfront Palm Beaches',
  'DoubleTree by Hilton San Diego Mission Valley',
  'Doubletree by Hilton Deerfield Beach-Boca Raton',
  'Hampton Inn and Suites Convention Center ',
  'Homewood Suites by Hilton North Happy Valley',
  'Hilton Orlando Altamonte Springs',
  'Hilton Santa Cruz Scotts Valley',
  'DoubleTree by Hilton San Francisco Airport North',
  'Hilton Galveston Island Resort',
  'The Waterfront Beach Resort, a Hilton Hotel',
  'Hilton Garden Inn Waikiki Beach',
  'DoubleTree Suites by Hilton Santa Monica',
  'The Curtis - A Doubletree By Hilton',
  'Doubletree by Hilton Sonoma Wine Country',
  'Millennium Hilton New York One UN Plaza',
  'Hilton Anchorage',
  'DoubleTree Beach Resort by Hilton Tampa Bay',
  'Homewood Suites by Hilton Nearest Universal Orlando',
  'Pointe Hilton Tapatio Cliffs Resort',
  'Pointe Hilton Squaw Peak Resort',
  'Doubletree by Hilton Hotel Circle',
  'Caribe Hilton',
  'Doubletree by Hilton Hotel Baton Rouge',
  'Hilton Garden Inn New Orleans French Quarter',
  'Hilton Fort Worth ',
  'Hilton Miami Downtown',
  'Hilton Minneapolis St. Paul Airport',
  'Bahia Mar Fort Lauderdale Beach - a DoubleTree by Hilton',
  'Hilton Sonoma Wine Country',
  'Condado Plaza Hilton',
  'Millennium Hilton New York Downtown',
  'DoubleTree Resort by Hilton Hollywood Beach',
  'Westgate New York City, formerly Hilton New York Grand Central',
  'Hilton Chicago Ohare Airport',
  'Hilton West Palm Beach, Okeechobee Boulevard, West Palm Beach, FL, USA',
  'Pointe Hilton Tapatio Cliffs Resort, North 7th Street, Phoenix, AZ, USA',
  'Hilton Santa Barbara Beachfront Resort, East Cabrillo Boulevard, Santa Barbara, CA, USA',
  'Hilton Hua Hin Resort & Spa, Naresdamri Road Hua Hin, Hua Hin District, Prachuap Khiri Khan, Thailand',
  'Mahogany Bay Resort & Beach Club, Curio Collection by Hilton, San Pedro Ambergris C, Belize',
  'Hilton new york fashion districk ',
  'Embassy Suites by Hilton Napa Valley, California Boulevard, Napa, CA, USA',
  'Hampton Inn & Suites Lady Lake/The Villages, Northeast 63rd Drive, Lady Lake, FL, USA',
  'Hilton Grand Vacations at Tuscany Village, Arrezzo Way, Orlando, FL, USA',
  'Hilton Burlington, Battery Street, Burlington, VT, USA',
  'Hilton San Diego Bayfront, Park Boulevard, San Diego, CA, USA',
  'The Art Hotel Denver, Curio Collection by Hilton',
  'LondonHouse Chicago, Curio Collection by Hilton, East Upper Wacker Drive, Chicago, IL, USA',
  'Homewood Suites by Hilton Moab',
  'Inn and Club at Harbour Town, Lighthouse Lane, Hilton Head Island, SC, USA',
  'Grand Naniloa Hotel Hilo - a DoubleTree by Hilton, Banyan Drive, Hilo, HI, USA',
  'DoubleTree by Hilton Hotel Memphis Downtown, Union Avenue, Downtown, Memphis, TN, USA',
  'The Park Vista - a DoubleTree by Hilton Hotel',
  'Hampton Inn Cheyenne, Fleischli Parkway, Cheyenne, WY, USA',
  'Hilton Garden Inn Rapid City, East Mall Drive, Rapid City, SD, USA',
  'Hilton Guam Resort & Spa',
  'Hilton Guam Resort & Spa',
  'Protea Hotel by Marriott Hilton',
  'Hampton Inn, Norman Rd, Bar Harbor, ME, USA',
  'Hilton Garden Inn Kauai Wailua Bay, Kuhio Highway, Kapaa, HI, USA',
  'Hilton Lake Las Vegas Resort & Spa',
  'Hilton Garden Inn Portland Downtown Waterfront, Commercial Street, Portland, ME, United States',
  'DoubleTree by Hilton Hotel & Spa Napa Valley',
  'Hampton Inn & Suites Pocatello, Vista Drive, Pocatello, ID, United States',
  'Hampton Inn Jackson Hole, U.S. 89, Jackson, WY, United States',
  'DoubleTree Suites by Hilton Hotel Boston-Cambridge, Soldiers Field Road, Boston, MA, United States',
  'Hampton Inn Cocoa Beach/Cape Canaveral, North Atlantic Avenue, Cocoa Beach, FL, United States',
  'Hampton Inn Durango, Main Avenue, Durango, CO, United States',
  'Home2 Suites by Hilton Amarillo, West Amarillo Boulevard, Amarillo, TX, United States',
  'Hampton Inn Clinton, Kansas Avenue, Clinton, MO, United States',
  'Holiday Inn Express Hilton Head Island',
  'DoubleTree by Hilton Hotel Woking',
  'DoubleTree by Hilton Hotel Alice Springs',
  'DoubleTree by Hilton Vail',
  'DoubleTree by Hilton Hotel Darwin',
  'Hilton Garden Inn Dalton',
  'DoubleTree by Hilton Hotel Decatur Riverfront',
  'DoubleTree by Hilton Hotel Cairns',
  'Candlewood Suites Bluffton-Hilton Head',
  'Homewood Suites by Hilton Montgomery EastChase',
  'Homewood Suites by Hilton Jacksonville Deerwood Park',
  'Homewood Suites by Hilton Eatontown',
  'DoubleTree by Hilton Hotel Galveston Beach',
  'Hilton Nashville Airport',
  'DoubleTree by Hilton Atlanta Perimeter Dunwoody',
  'DoubleTree by Hilton Hotel Santa Fe',
  'DoubleTree by Hilton Hotel Schenectady',
  'Homewood Suites by Hilton Aurora Naperville',
  'Sonesta Resort Hilton Head Island',
  'Embassy Suites by Hilton West Palm Beach Central',
  'DoubleTree by Hilton Hotel Buffalo - Amherst',
  'DoubleTree by Hilton Halifax Dartmouth',
  'The Campbell House, Curio Collection by Hilton a',
  'DoubleTree by Hilton Hotel Jacksonville Riverfront a',
  'DoubleTree by Hilton Hotel Sunrise - Sawgrass Mills',
  'Hampton Inn Chicago Downtown/Magnificent Mile',
  'DoubleTree by Hilton Boston North Shore',
  'DoubleTree by Hilton Hotel Billings',
  'DoubleTree by Hilton Hotel Minneapolis North',
  'DoubleTree by Hilton Hotel Pittsburgh - Meadow Lands',
  'DoubleTree by Hilton Hotel Laurel',
  'DoubleTree by Hilton Mount Vernon',
  'DoubleTree by Hilton Hotel Lawrence',
  'DoubleTree by Hilton Hotel Richmond - Midlothian',
  'Hampton Inn Salem',
  'DoubleTree by Hilton Hotel Boston - Rockland',
  'DoubleTree by Hilton Hotel Raleigh - Brownstone - University',
  'DoubleTree by Hilton Hotel Winston Salem - University',
  'Holiday Inn Resort Beach House Hilton Head Island',
  'DoubleTree by Hilton Helena Downtown',
  'DoubleTree by Hilton Harrisonburg',
  'DoubleTree by Hilton Fort Smith City Center',
  'DoubleTree by Hilton Hotel North Charleston Convention Center',
  'Hampton Inn & Suites Buffalo Downtown',
  'DoubleTree by Hilton Baltimore BWI Airport',
  'Holiday Inn Express & Suites Hardeeville-Hilton Head',
  'Hampton Inn Covington',
  'Holiday Inn Express & Suites Bluffton @ Hilton Head Area',
  'Hilton Garden Inn Minneapolis Airport Mall of America',
  'Hilton Garden Inn San Diego Mission Valley Stadium',
  'DoubleTree by Hilton Hotel Orlando East-UCF Area',
  'DoubleTree by Hilton Hotel Orlando Airport',
  'Hilton Seychelles Labriz Resort & Spa, Silhouette, Seychelles',
  'Embassy Suites by Hilton Deerfield Beach Resort & Spa, South Ocean Drive, Deerfield Beach, FL, United States',
  'Hampton Inn & Suites Napa, Napa Valley, Hartle Court, Napa, CA, United States',
  'The Inn At Penn A Hilton Hotel',
  'Hilton Garden Inn Portsmouth Downtown, High Street, Portsmouth, NH, United States',
  'Hilton Garden Inn Guatemala City, 13 Calle, Guatemala City, Guatemala',
  'Hampton Inn Montrose, North Townsend Avenue, Montrose, CO, United States',
  'DoubleTree Resort by Hilton Central Pacific',
  'DoubleTree Suites by Hilton Hotel, Broadway, New York, NY, United States',
  'DoubleTree Suites by Hilton Hotel, Broadway, New York, NY, United States',
  'DoubleTree by Hilton Hotel Missoula - Edgewater, Madison Street, Missoula, MT, United States',
  'Hampton Inn & Suites Lake Powell',
  'DoubleTree by Hilton Cocoa Beach Oceanfront, North Atlantic Avenue, Cocoa Beach, FL, United States',
  'DoubleTree by Hilton, North Interstate Highway 35, Austin, TX, United States',
  'Hilton Hawaiian Village Waikiki Beach Resort ',
  'Capital Hilton ',
  'Hilton Garden Inn Mountain View',
  'DoubleTree by Hilton Hotel Jackson, U.S. 45 Bypass, Jackson, TN, United States',
  'Homewood Suites by Hilton Cape Canaveral-Cocoa Beach, Astronaut Boulevard, Cape Canaveral, FL, United States',
  'DoubleTree by Hilton Hotel Lafayette, West Pinhook Road, Lafayette, LA, United States',
  'Hilton Midtown, 6th Avenue, New York, NY, United States',
  'Jewel Dunns River Beach Resort & Spa, Ocho Rios, Curio Collection by Hilton, St. Ann Parish, Jamaica',
  'Doubletree Resort by Hilton Hotel Alana Waikiki Beach',
  'The Highland Dallas, Curio Collection by Hilton',
  'Parc Soleil by Hilton Grand Vacations, Desforges Avenue, Orlando, FL, United States',
  'Homewood Suites by Hilton Charleston',
  'Homewood Suites by Hilton Orlando-Maitland',
  'DoubleTree Suites by Hilton Hotel New York City ',
  'DoubleTree by Hilton Hotel at the Entrance to Universal Orlando',
  'Hilton Garden Inn Bloomington',
  'Hampton Inn & Suites Page - Lake Powell, Page, AZ, United States',
  'The Logan Philadelphia, Curio Collection by Hilton',
  'Hilton at Resorts World Bimini',
  'Hampton Inn Houma',
  'Hilton Garden Inn Clovis',
  'Hilton Garden Inn San Jose La Sabana',
  'Hilton Waikiki Beach, Kuhio Avenue, Honolulu, HI, United States',
  'Double Tree by Hilton Marina del Rey',
  'Hilton Oakland Airport',
  'DoubleTree by Hilton Denver',
  'Hilton Vancouver Airport, Minoru Boulevard, Richmond, BC, Canada',
  'Hampton Inn & Suites Arroyo Grande/Pismo Beach Area, West Branch Street, Arroyo Grande, CA, United States',
  'Homewood Suites by Hilton Kalispell, MT, Hutton Ranch Road, Kalispell, MT, United States',
  'Hilton Garden Inn Augusta',
  'Embassy Suites by Hilton Boca Raton',
  'Hampton Inn Buffalo South/I-90',
  'Hampton Inn & Suites Springdale/Zion National Park',
  'Omni Hilton Head Oceanfront Resort',
  'Hilton Auckland, Quay Street, Auckland, New Zealand',
  'Hilton Garden Inn Flagstaff',
  'Pensacola Beach Hotel Hilton',
  'The Skirvin Hilton',
  'Hilton Garden Inn Lafayette/Cajundome',
  'Doubletree by Hilton Flagstaff',
  'Hilton Garden Inn Oklahoma City Midtown',
  'DoubleTree by Hilton Toronto Downtown',
  'DoubleTree by Hilton Hotel Seattle Airport',
  'Hilton Garden Inn Key West',
  'DoubleTree by Hilton Hotel Bethesda',
  'Hilton Garden Inn Ogden',
  'Hampton Inn Clemson-University Area',
  'DoubleTree by Hilton Hotel Sunrise',
  'Hilton Garden Inn Idaho Falls',
  'Hilton Garden Inn Amarillo',
  'Homewood Suites by Hilton Medford',
  'Hampton Inn & Suites Ridgecrest',
  'London Hilton on Park Lane',
  'Hilton Garden Inn Knoxville/University',
  'Hilton Orlando Buena VIsta Palace',
  'Hilton Pyramids Golf Resort',
  'Doubletree Suites By Hilton Naples',
  'The Fess Parker A Doubletree by Hilton Resort',
  'DoubleTree by Hilton Hotel Dallas - Farmers Branch',
  'Hilton Checkers Los Angeles',
  'DoubleTree by Hilton New York - Financial District',
  'Hampton Inn Dayton/Fairborn',
  'Hampton Inn Manhattan-SoHo',
  'Hilton Garden Inn Los Angeles Hollywood',
  'Hilton Doha',
  'Hilton Jumeirah Resort',
  'Hilton Universal City',
  'Hampton Inn and Suite Rock Springs',
  'Hampton Inn & Suites Plymouth',
  'DoubleTree by Hilton Boston Downtown',
  'Hilton - Naples',
  'Hilton Garden Inn Sarasota',
  'The Quin Central Park by Hilton Club',
  'Hilton Seattle',
  'DoubleTree Resort by Hilton Paradise Valley',
  'Hampton Inn & Suite',
  'Hilton Garden Inn Missoula',
  'Hilton Anaheim',
  'Hilton Grand Vacations Suites at SeaWorld',
  'DoubleTree by Hilton Breckenridge',
  'Hilton Los Angeles Universal City',
  'Hampton Inn Lake Havasu City',
  'Hampton Inn & Suites Natchez',
  'Hampton Inn & Suites Vicksburg',
  'Hilton Garden Inn Chattanooga',
  'DoubleTree by Hilton Hotel JFK Airport',
  'Hilton Rose Hall Resort & Spa',
  'DoubleTree by Hilton Orlando Downtown',
  'Hampton Inn',
  'Hampton Inn',
  'Hilton Portland and Executive Tower',
  'Hilton New York JFK Airport Hotel',
  'Hampton Inn ',
  'Hilton Garden Inn',
  'Hilton Budapest',
  'Hilton Garden Inn Fort Myers',
  'Hampton Inn And Suites Bakersfield',
  'Hilton Niagara Falls/Fallsview',
  'Hilton Garden Inn Eden Prairie',
  'Hampton Inn and Suites Jackson-Coliseum',
  'DoubleTree by Hilton Memphis',
  'Hampton Inn Champaign Urbana',
  'Hilton Dallas Lincoln Centre',
  'Hilton Garden Inn Orlando',
  'Hilton Waikiki Beach',
  'Hilton Grand Vacations Suites on International Drive',
  'Hampton Inn & Suites Flagstaff',
  'Hampton Inn Albuquerque University/Midtown',
  'Hampton Inn Santa Fe',
  'DoubleTree by Hilton Hotel Springfield',
  'Hilton Grand Vacation Suites Las Vegas',
  'Hilton Washington',
  'Hilton Santa Fe Historic Plaza',
  'Hampton Inn Bloomington West',
  'Hilton Fort Lauderdale Marina',
  'Hilton Garden Inn Savannah Historic District',
  'Hilton Orlando Lake Buena Vista',
  'Hilton Hawaiian Village Waikiki Beach Resort',
  'Hilton Boston Back Bay',
  'Hilton Garden Inn Calgary Airport',
  'Hampton Inn & Suites Tarpon Springs',
  'Hampton Inn Okeechobee',
  'Hilton Orlando',
  'Hilton Cincinnati Netherland Plaza',
  'Hilton Parc 55 San Francisco',
  'Hilton Garden Inn Calabasas',
  'Hilton Los Angeles North Glendale',
  'Hilton Quebec',
  'Hilton Mexico City Airport',
  'Molino Stucky Hilton',
  'Hilton Longboat Key Beachfront Resort',
  'Hilton Lac-Leamy',
  'Hilton Garden Inn Billings',
  'Hilton Garden Inn Monterey',
  'Hilton San Diego Resort and Spa',
  'Hilton Key Largo Resort',
  'Hilton Sedona Resort and Spa',
  'Hilton Garden Inn Freeport Downtown',
  'Hilton Woodland Hills Los Angeles',
  'Hilton Woodland Hills Los Angeles',
  'Hilton Houston Plaza / Medical Center',
  'Hilton Fort Collins',
  'Hilton Garden Inn Montreal Centre-Ville',
  'Hilton Montreal Bonaventure',
  'Hampton Inn & Suites Boston Crosstown Center',
  'Hilton Giardini Naxos',
  'Hampton Inn St. Simons Island',
  'Homewood Suites by Hilton Rock Springs',
  'Hilton Garden Inn Bozeman',
  'Hilton Raleigh-Durham Airport',
  'Hilton Boston Logan Airport',
  'Hampton Inn Helena',
  'Hampton Inn Salt Lake City - Downtown',
  'Cliffrose Springdale, Curio Collection by Hilton',
  'Homewood Suites by Hilton Jackson',
  'Signia by Hilton Orlando Bonnet Creek',
  'Hilton Chicago O hare',
  'Hilton Daytona Beach Oceanfront Resort',
  'Hilton Americas Houston',
  'Hampton Inn Lancaster',
  'Hilton Cocoa Beach',
  'Hotel del Coronado, Curio Collection by Hilton',
  'Hilton Vancouver Metrotown',
  'Hilton Fort Lauderdale Beach Resort',
  'Hilton Salt lake City Center',
  'Hilton Boston Financial District',
  'Hilton San Francisco Financial District',
  'Hilton Clearwater Beach Resort',
  'Hilton Las Vegas',
  'Hampton Inn Kayenta',
  'Westin Hilton Head',
  'Hilton Anatole',
  'Hilton La Jolla',
  'Hilton Bentley South Beach',
  'Hilton Los Cabos',
  'Hilton Cancun Golf & Spa Resort',
  'Canoa ( Coral by Hilton )',
  'Marien ( Coral by Hilton )',
  'Hilton Dubai Creek',
  'Hilton Waikoloa Village',
  'Hilton Walt Disney Resort',
  'Hilton San Francisco Union Square',
  'Hilton Times Square',
  'Hilton Los Angeles Airport',
  'Hilton Seychelles Northolme Spa',
  'Hilton Paris Aeroport Orly',
  'Hilton Paris La Defense',
  'Hilton Paris',
  'Hilton Arc de Triomphe',
  'Palmer House Hilton',
  'Hilton Chicago',
  'Millennium Hilton',
  'Hilton New York',
  'British Colonial Hilton',
  'Hilton Mauritius',
  'Hilton Miami Airport',
  'Beverly Hilton',
]
let filteredDashboardHiltonList = [
  'Hampton Inn Twin Falls',
  'Hilton Garden Inn Twin Falls',
  'Hilton Ponce Golf & Casino Resort',
  'Hampton Inn & Suites San Juan',
  'DoubleTree by Hilton Hotel Portland, ME',
  'The Higgins Hotel New Orleans, Curio Collection by Hilton',
  'Boulders Resort & Spa Scottsdale, Curio Collection by Hilton',
  'Hilton Grand Vacations at the Flamingo',
  'Double tree by hilton hotel billings',
  'Double tree by Hilton Niagara Falls',
  'Hilton Habtoor City',
  'Double Tree by hilton Atlantic Beach',
  'Home2 Suites by Hilton Las Cruces',
  'hilton darwin',
  'Hilton Colon Quito',
  'Hilton Garden Inn Waikiki Beach ',
  'Hilton Garden Inn Denver Airport',
  'Hilton Garden Inn Denver Downtown',
  'DoubleTree by Hilton Hotel Durango',
  'Hampton Inn St Louis Downtown (At the Gateway Arch)',
  'Hampton Inn Bennington',
  'Hoodoo Moab, Curio Collection by Hilton',
  'DoubleTree Suites by Hilton Hotel Doheny Beach',
  'Cliffrose Springdale, Curio Collection by Hilton',
  'Hilton Playa del Carmen',
  'Hilton La Romana Adult Resort',
  'hilton tampa downtown',
  'Homewood Suites by Hilton Joplin',
  'Homewood Suites by Hilton Paducah',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'hampton inn bozeman',
  'Hilton Garden Inn New York Central Park',
  'Hampton Inn Idaho Falls',
  'Pointe Hilton Squaw Peak Resort',
  'hampton inn and suites barstow',
  'Hilton Garden Inn San Luis Obispo/Pismo Beach',
  'Hotel Don Fernando de Taos, Tapestry Collection by Hilton',
  'Hilton Atlanta/Marietta Hotel & Conference Center',
  'Hilton Garden Inn Providence',
  'hampton inn and suites watertown',
  'Hilton Anchorage',
  'Hilton Aruba Caribbean Resort & Casino',
  'Homewood Suites by Hilton Houma',
  'Hampton Inn Downtown',
  'hampton Inn & Suites homestead',
  'Hampton Inn & Suites Kingman',
  'Hilton Newark Airport, Spring Street, Elizabeth, NJ, USA',
  'Hilton Marco Island Beach Resort and Spa',
  'Miramonte Indian Wells Resort & Spa, Curio Collection by Hilton, Indian Wells Lane, Indian Wells, CA, USA',
  'Miramonte Indian Wells Resort & Spa, Curio Collection by Hilton, Indian Wells Lane, Indian Wells, CA, USA',
  'DoubleTree by Hilton Hotel Claremont',
  'DoubleTree by Hilton Hotel Berkeley Marina',
  'Hampton Inn Manhattan-Chelsea',
  'DoubleTree by Hilton Hotel New York City',
  'Hilton Garden Inn Atlanta Downtown',
  'Hampton Inn & Suites San Luis Obispo, Calle Joaquin, San Luis Obispo, CA, USA',
  'Hilton Garden Inn Napa, Solano Avenue, Napa, CA, USA',
  'Hampton Inn Grand Junction Downtown/Historic Main Street, Main Street, Grand Junction, CO, USA',
  'Hilton Cabana Miami Beach ',
  'Hilton Ocean City Oceanfront Suites',
  'Hilton Asheville Biltmore Park',
  'Hilton La Romana Family Resort',
  'DoubleTree by Hilton Hotel Olympia',
  'DoubleTree by Hilton Hotel Orlando East-UCF Area, High Tech Avenue, Orlando, FL, USA',
  'Hilton Garden Inn San Diego Old Town/SeaWorld Area',
  'DoubleTree Suites by Hilton',
  'Hilton Fort Worth, Main Street, Fort Worth, TX, USA',
  'HHHWI The Westin Hilton Head Island Resort & Spa',
  'DoubleTree by Hilton Hotel New York Times Square West',
  'Hilton Garden Inn Fort Walton Beach, Miracle Strip Parkway Southeast, Fort Walton Beach, FL, USA',
  'Hilton Sandestin Beach Golf Resort & Spa, South Sandestin Boulevard, Miramar Beach, FL, USA',
  'Hilton Cleveland Downtown, Lakeside Avenue East, Cleveland, OH, USA',
  'DoubleTree Suites by Hilton Hotel Santa Monica, 4th Street, Santa Monica, CA, USA',
  'The Hacienda at Hilton Puerto Vallarta All Inclusive Adults Only',
  'Hampton Inn Monterrey Aeropuerto',
  'Hilton Minneapolis',
  'Hilton San Diego Gaslamp Quarter',
  'Homewood Suites by Hilton San Diego Downtown',
  'Hilton Garden Inn San Diego Downtown/Bayside',
  'Hampton Inn Manhattan/Times Square Central',
  'Hampton Inn & Suites by Hilton Los Cabos',
  'Ocean Tower at Hilton Waikoloa Village Asia',
  'Hilton Garden Inn Denver Airport',
  'Hampton Inn Las Vegas/North Speedway',
  'Hampton Inn and Suites Las Vegas/West Summerlin',
  'Hampton Inn Las Vegas/Summerlin',
  'Hilton Grand Vacations on Paradise',
  'Hampton Inn Tropicana',
  'Hampton Inn and Suites Las Vegas Airport',
  'Embassy Suites by Hilton Las Vegas',
  'DoubleTree by Hilton Las Vegas Airport',
  'Embassy Suites by Hilton Convention Center Las Vegas',
  'Homewood Suites by Hilton Las Vegas Airport',
  'Hampton Inn and Suites Henderson/Saint Rose',
  'Homewood Suites by Hilton Henderson/South Las Vegas',
  'Hampton Inn and Suites Henderson',
  'Hilton Garden Inn Las Vegas/Henderson',
  'Homewood Suites by Hilton Miami Downtown/Brickell',
  'Hilton Garden Inn Valencia Six Flags',
  'DoubleTree by Hilton Hotel Bakersfield',
  'Embassy Suites by Hilton Phoenix Scottsdale',
  'Hilton Garden Inn Dallas Downtown',
  'Hilton Garden Inn New York Times Square South',
  'El Conquistador Tucson, A Hilton Resort',
  'DoubleTree by Hilton Hotel Golf Resort Palm Springs',
  'McLean/DoubleTree by Hilton',
  'DoubleTree by Hilton Nashua',
  'Hilton San Diego Airport-Harbor Island',
  'The Darcy, Curio Collection by Hilton',
  'Homewood Suites by Hilton New Orleans French Quarter',
  'Hilton Cabana Miami Beach',
  'Condado Lagoon Villas at Caribe Hilton',
  'Hilton Garden Inn Miami South Beach',
  'Hilton Mexico City Reforma',
  'Hilton Puerto Vallarta Resort',
  'Hilton Garden Inn Redondo Beach',
  'GALLERYone - a DoubleTree Suites by Hilton Hotel',
  'The Gates Hotel South Beach - A DoubleTree By Hilton',
  'Doubletree by Hilton Orlando at SeaWorld',
  'Hampton Inn International Dr Convention Center',
  'Hilton Boston Downtown-Faneuil Hall',
  'DoubleTree by Hilton Bethesda-Washington D.C.',
  'DoubleTree by Hilton Hotel Portland, ME',
  'Hilton Garden Inn New York/Tribeca',
  'Hilton Garden Inn New York/West 35th Street',
  'Hampton Inn Manhattan-Chelsea',
  'Hampton Inn Manhattan-35th St/Empire State Bldg',
  'Hampton Inn Manhattan-Seaport-Financial District',
  'DoubleTree by Hilton Hotel New York City - Chelsea',
  'Hampton Inn Manhattan Grand Central',
  'Hilton Garden Inn New York/Central Park South-Midtown West',
  'Hampton Inn Manhattan-Times Square North',
  'Hilton Garden Inn New York/Manhattan-Midtown East',
  'DoubleTree by Hilton Hotel New York - Times Square South',
  'Hampton Inn Manhattan-SoHo',
  'DoubleTree by Hilton Cape Cod - Hyannis',
  'Hilton Garden Inn Austin Downtown',
  'Hilton Garden Inn Times Square',
  'Hampton Inn Madison Square Garden',
  'Hilton Newark Penn Station ',
  'The Wit Chicago a Doubletree by Hilton',
  'DoubleTree by Hilton Del Mar',
  'Hilton Orange County',
  'Doubletree by Hilton Irvine Spectrum',
  'DoubleTree by Hilton Santa Ana Orange County Airport',
  'Hilton Phoenix Mesa',
  'Hilton Waikoloa Village Asia',
  'Hilton Marco Island Beach Resort and Spa',
  'Hilton Santa Barbara Beachfront Resort',
  'Hilton Garden Inn Carlsbad Beach',
  'Hilton Palm Springs',
  'Hilton Santa Fe at Buffalo Thunder',
  'Hilton Garden Inn Orlando International Drive North',
  'Doubletree by Hilton Fresno Convention Center',
  'Cape Rey Carlsbad, A Hilton Resort',
  'Hilton Garden Inn New York Chelsea',
  'DoubleTree by Hilton Greenway Plaza',
  'DoubleTree by Hilton Hotel Anaheim - Orange County',
  'DoubleTree by Hilton Tucson at Reid Park',
  'Hampton Inn Downtown French-Quarter Area',
  'DoubleTree by Hilton San Pedro - Port of Los Angeles',
  'Hilton Portland Downtown',
  'DoubleTree by Hilton Hotel Grand Junction',
  'Hilton Singer Island Oceanfront Palm Beaches',
  'DoubleTree by Hilton San Diego Mission Valley',
  'Doubletree by Hilton Deerfield Beach-Boca Raton',
  'Hampton Inn and Suites Convention Center ',
  'Homewood Suites by Hilton North Happy Valley',
  'Hilton Orlando Altamonte Springs',
  'Hilton Santa Cruz Scotts Valley',
  'DoubleTree by Hilton San Francisco Airport North',
  'Hilton Galveston Island Resort',
  'The Waterfront Beach Resort, a Hilton Hotel',
  'Hilton Garden Inn Waikiki Beach',
  'DoubleTree Suites by Hilton Santa Monica',
  'The Curtis - A Doubletree By Hilton',
  'Doubletree by Hilton Sonoma Wine Country',
  'Millennium Hilton New York One UN Plaza',
  'Hilton Anchorage',
  'DoubleTree Beach Resort by Hilton Tampa Bay',
  'Homewood Suites by Hilton Nearest Universal Orlando',
  'Pointe Hilton Tapatio Cliffs Resort',
  'Pointe Hilton Squaw Peak Resort',
  'Doubletree by Hilton Hotel Circle',
  'Caribe Hilton',
  'Doubletree by Hilton Hotel Baton Rouge',
  'Hilton Garden Inn New Orleans French Quarter',
  'Hilton Fort Worth ',
  'Hilton Miami Downtown',
  'Hilton Minneapolis St. Paul Airport',
  'Bahia Mar Fort Lauderdale Beach - a DoubleTree by Hilton',
  'Hilton Sonoma Wine Country',
  'Condado Plaza Hilton',
  'Millennium Hilton New York Downtown',
  'DoubleTree Resort by Hilton Hollywood Beach',
  'Westgate New York City, formerly Hilton New York Grand Central',
  'Hilton Chicago Ohare Airport',
  'Hilton West Palm Beach, Okeechobee Boulevard, West Palm Beach, FL, USA',
  'Pointe Hilton Tapatio Cliffs Resort, North 7th Street, Phoenix, AZ, USA',
  'Hilton Santa Barbara Beachfront Resort, East Cabrillo Boulevard, Santa Barbara, CA, USA',
  'Hilton Hua Hin Resort & Spa, Naresdamri Road Hua Hin, Hua Hin District, Prachuap Khiri Khan, Thailand',
  'Mahogany Bay Resort & Beach Club, Curio Collection by Hilton, San Pedro Ambergris C, Belize',
  'Hilton new york fashion districk ',
  'Embassy Suites by Hilton Napa Valley, California Boulevard, Napa, CA, USA',
  'Hampton Inn & Suites Lady Lake/The Villages, Northeast 63rd Drive, Lady Lake, FL, USA',
  'Hilton Grand Vacations at Tuscany Village, Arrezzo Way, Orlando, FL, USA',
  'Hilton Burlington, Battery Street, Burlington, VT, USA',
  'Hilton San Diego Bayfront, Park Boulevard, San Diego, CA, USA',
  'The Art Hotel Denver, Curio Collection by Hilton',
  'LondonHouse Chicago, Curio Collection by Hilton, East Upper Wacker Drive, Chicago, IL, USA',
  'Homewood Suites by Hilton Moab',
  'Inn and Club at Harbour Town, Lighthouse Lane, Hilton Head Island, SC, USA',
  'Grand Naniloa Hotel Hilo - a DoubleTree by Hilton, Banyan Drive, Hilo, HI, USA',
  'DoubleTree by Hilton Hotel Memphis Downtown, Union Avenue, Downtown, Memphis, TN, USA',
  'The Park Vista - a DoubleTree by Hilton Hotel',
  'Hampton Inn Cheyenne, Fleischli Parkway, Cheyenne, WY, USA',
  'Hilton Garden Inn Rapid City, East Mall Drive, Rapid City, SD, USA',
  'Hilton Guam Resort & Spa',
  'Hilton Guam Resort & Spa',
  'Protea Hotel by Marriott Hilton',
  'Hampton Inn, Norman Rd, Bar Harbor, ME, USA',
  'Hilton Garden Inn Kauai Wailua Bay, Kuhio Highway, Kapaa, HI, USA',
  'Hilton Lake Las Vegas Resort & Spa',
  'Hilton Garden Inn Portland Downtown Waterfront, Commercial Street, Portland, ME, United States',
  'DoubleTree by Hilton Hotel & Spa Napa Valley',
  'Hampton Inn & Suites Pocatello, Vista Drive, Pocatello, ID, United States',
  'Hampton Inn Jackson Hole, U.S. 89, Jackson, WY, United States',
  'DoubleTree Suites by Hilton Hotel Boston-Cambridge, Soldiers Field Road, Boston, MA, United States',
  'Hampton Inn Cocoa Beach/Cape Canaveral, North Atlantic Avenue, Cocoa Beach, FL, United States',
  'Hampton Inn Durango, Main Avenue, Durango, CO, United States',
  'Home2 Suites by Hilton Amarillo, West Amarillo Boulevard, Amarillo, TX, United States',
  'Hampton Inn Clinton, Kansas Avenue, Clinton, MO, United States',
  'Holiday Inn Express Hilton Head Island',
  'DoubleTree by Hilton Hotel Woking',
  'DoubleTree by Hilton Hotel Alice Springs',
  'DoubleTree by Hilton Vail',
  'DoubleTree by Hilton Hotel Darwin',
  'Hilton Garden Inn Dalton',
  'DoubleTree by Hilton Hotel Decatur Riverfront',
  'DoubleTree by Hilton Hotel Cairns',
  'Candlewood Suites Bluffton-Hilton Head',
  'Homewood Suites by Hilton Montgomery EastChase',
  'Homewood Suites by Hilton Jacksonville Deerwood Park',
  'Homewood Suites by Hilton Eatontown',
  'DoubleTree by Hilton Hotel Galveston Beach',
  'Hilton Nashville Airport',
  'DoubleTree by Hilton Atlanta Perimeter Dunwoody',
  'DoubleTree by Hilton Hotel Santa Fe',
  'DoubleTree by Hilton Hotel Schenectady',
  'Homewood Suites by Hilton Aurora Naperville',
  'Sonesta Resort Hilton Head Island',
  'Embassy Suites by Hilton West Palm Beach Central',
  'DoubleTree by Hilton Hotel Buffalo - Amherst',
  'DoubleTree by Hilton Halifax Dartmouth',
  'The Campbell House, Curio Collection by Hilton a',
  'DoubleTree by Hilton Hotel Jacksonville Riverfront a',
  'DoubleTree by Hilton Hotel Sunrise - Sawgrass Mills',
  'Hampton Inn Chicago Downtown/Magnificent Mile',
  'DoubleTree by Hilton Boston North Shore',
  'DoubleTree by Hilton Hotel Billings',
  'DoubleTree by Hilton Hotel Minneapolis North',
  'DoubleTree by Hilton Hotel Pittsburgh - Meadow Lands',
  'DoubleTree by Hilton Hotel Laurel',
  'DoubleTree by Hilton Mount Vernon',
  'DoubleTree by Hilton Hotel Lawrence',
  'DoubleTree by Hilton Hotel Richmond - Midlothian',
  'Hampton Inn Salem',
  'DoubleTree by Hilton Hotel Boston - Rockland',
  'DoubleTree by Hilton Hotel Raleigh - Brownstone - University',
  'DoubleTree by Hilton Hotel Winston Salem - University',
  'Holiday Inn Resort Beach House Hilton Head Island',
  'DoubleTree by Hilton Helena Downtown',
  'DoubleTree by Hilton Harrisonburg',
  'DoubleTree by Hilton Fort Smith City Center',
  'DoubleTree by Hilton Hotel North Charleston Convention Center',
  'Hampton Inn & Suites Buffalo Downtown',
  'DoubleTree by Hilton Baltimore BWI Airport',
  'Holiday Inn Express & Suites Hardeeville-Hilton Head',
  'Hampton Inn Covington',
  'Holiday Inn Express & Suites Bluffton @ Hilton Head Area',
  'Hilton Garden Inn Minneapolis Airport Mall of America',
  'Hilton Garden Inn San Diego Mission Valley Stadium',
  'DoubleTree by Hilton Hotel Orlando East-UCF Area',
  'DoubleTree by Hilton Hotel Orlando Airport',
  'Hilton Seychelles Labriz Resort & Spa, Silhouette, Seychelles',
  'Embassy Suites by Hilton Deerfield Beach Resort & Spa, South Ocean Drive, Deerfield Beach, FL, United States',
  'Hampton Inn & Suites Napa, Napa Valley, Hartle Court, Napa, CA, United States',
  'The Inn At Penn A Hilton Hotel',
  'Hilton Garden Inn Portsmouth Downtown, High Street, Portsmouth, NH, United States',
  'Hilton Garden Inn Guatemala City, 13 Calle, Guatemala City, Guatemala',
  'Hampton Inn Montrose, North Townsend Avenue, Montrose, CO, United States',
  'DoubleTree Resort by Hilton Central Pacific',
  'DoubleTree Suites by Hilton Hotel, Broadway, New York, NY, United States',
  'DoubleTree Suites by Hilton Hotel, Broadway, New York, NY, United States',
  'DoubleTree by Hilton Hotel Missoula - Edgewater, Madison Street, Missoula, MT, United States',
  'Hampton Inn & Suites Lake Powell',
  'DoubleTree by Hilton Cocoa Beach Oceanfront, North Atlantic Avenue, Cocoa Beach, FL, United States',
  'DoubleTree by Hilton, North Interstate Highway 35, Austin, TX, United States',
  'Hilton Hawaiian Village Waikiki Beach Resort ',
  'Capital Hilton ',
  'Hilton Garden Inn Mountain View',
  'DoubleTree by Hilton Hotel Jackson, U.S. 45 Bypass, Jackson, TN, United States',
  'Homewood Suites by Hilton Cape Canaveral-Cocoa Beach, Astronaut Boulevard, Cape Canaveral, FL, United States',
  'DoubleTree by Hilton Hotel Lafayette, West Pinhook Road, Lafayette, LA, United States',
  'Hilton Midtown, 6th Avenue, New York, NY, United States',
  'Jewel Dunns River Beach Resort & Spa, Ocho Rios, Curio Collection by Hilton, St. Ann Parish, Jamaica',
  'Doubletree Resort by Hilton Hotel Alana Waikiki Beach',
  'The Highland Dallas, Curio Collection by Hilton',
  'Parc Soleil by Hilton Grand Vacations, Desforges Avenue, Orlando, FL, United States',
  'Homewood Suites by Hilton Charleston',
  'Homewood Suites by Hilton Orlando-Maitland',
  'DoubleTree Suites by Hilton Hotel New York City ',
  'DoubleTree by Hilton Hotel at the Entrance to Universal Orlando',
  'Hilton Garden Inn Bloomington',
  'Hampton Inn & Suites Page - Lake Powell, Page, AZ, United States',
  'The Logan Philadelphia, Curio Collection by Hilton',
  'Hilton at Resorts World Bimini',
  'Hampton Inn Houma',
  'Hilton Garden Inn Clovis',
  'Hilton Garden Inn San Jose La Sabana',
  'Hilton Waikiki Beach, Kuhio Avenue, Honolulu, HI, United States',
  'Double Tree by Hilton Marina del Rey',
  'Hilton Oakland Airport',
  'DoubleTree by Hilton Denver',
  'Hilton Vancouver Airport, Minoru Boulevard, Richmond, BC, Canada',
  'Hampton Inn & Suites Arroyo Grande/Pismo Beach Area, West Branch Street, Arroyo Grande, CA, United States',
  'Homewood Suites by Hilton Kalispell, MT, Hutton Ranch Road, Kalispell, MT, United States',
  'Hilton Garden Inn Augusta',
  'Embassy Suites by Hilton Boca Raton',
  'Hampton Inn Buffalo South/I-90',
  'Hampton Inn & Suites Springdale/Zion National Park',
  'Omni Hilton Head Oceanfront Resort',
  'Hilton Auckland, Quay Street, Auckland, New Zealand',
  'Hilton Garden Inn Flagstaff',
  'Pensacola Beach Hotel Hilton',
  'The Skirvin Hilton',
  'Hilton Garden Inn Lafayette/Cajundome',
  'Doubletree by Hilton Flagstaff',
  'Hilton Garden Inn Oklahoma City Midtown',
  'DoubleTree by Hilton Toronto Downtown',
  'DoubleTree by Hilton Hotel Seattle Airport',
  'Hilton Garden Inn Key West',
  'DoubleTree by Hilton Hotel Bethesda',
  'Hilton Garden Inn Ogden',
  'Hampton Inn Clemson-University Area',
  'DoubleTree by Hilton Hotel Sunrise',
  'Hilton Garden Inn Idaho Falls',
  'Hilton Garden Inn Amarillo',
  'Homewood Suites by Hilton Medford',
  'Hampton Inn & Suites Ridgecrest',
  'London Hilton on Park Lane',
  'Hilton Garden Inn Knoxville/University',
  'Hilton Orlando Buena VIsta Palace',
  'Hilton Pyramids Golf Resort',
  'Doubletree Suites By Hilton Naples',
  'The Fess Parker A Doubletree by Hilton Resort',
  'DoubleTree by Hilton Hotel Dallas - Farmers Branch',
  'Hilton Checkers Los Angeles',
  'DoubleTree by Hilton New York - Financial District',
  'Hampton Inn Dayton/Fairborn',
  'Hampton Inn Manhattan-SoHo',
  'Hilton Garden Inn Los Angeles Hollywood',
  'Hilton Doha',
  'Hilton Jumeirah Resort',
  'Hilton Universal City',
  'Hampton Inn and Suite Rock Springs',
  'Hampton Inn & Suites Plymouth',
  'DoubleTree by Hilton Boston Downtown',
  'Hilton - Naples',
  'Hilton Garden Inn Sarasota',
  'The Quin Central Park by Hilton Club',
  'Hilton Seattle',
  'DoubleTree Resort by Hilton Paradise Valley',
  'Hampton Inn & Suite',
  'Hilton Garden Inn Missoula',
  'Hilton Anaheim',
  'Hilton Grand Vacations Suites at SeaWorld',
  'DoubleTree by Hilton Breckenridge',
  'Hilton Los Angeles Universal City',
  'Hampton Inn Lake Havasu City',
  'Hampton Inn & Suites Natchez',
  'Hampton Inn & Suites Vicksburg',
  'Hilton Garden Inn Chattanooga',
  'DoubleTree by Hilton Hotel JFK Airport',
  'Hilton Rose Hall Resort & Spa',
  'DoubleTree by Hilton Orlando Downtown',
  'Hampton Inn',
  'Hampton Inn',
  'Hilton Portland and Executive Tower',
  'Hilton New York JFK Airport Hotel',
  'Hampton Inn ',
  'Hilton Garden Inn',
  'Hilton Budapest',
  'Hilton Garden Inn Fort Myers',
  'Hampton Inn And Suites Bakersfield',
  'Hilton Niagara Falls/Fallsview',
  'Hilton Garden Inn Eden Prairie',
  'Hampton Inn and Suites Jackson-Coliseum',
  'DoubleTree by Hilton Memphis',
  'Hampton Inn Champaign Urbana',
  'Hilton Dallas Lincoln Centre',
  'Hilton Garden Inn Orlando',
  'Hilton Waikiki Beach',
  'Hilton Grand Vacations Suites on International Drive',
  'Hampton Inn & Suites Flagstaff',
  'Hampton Inn Albuquerque University/Midtown',
  'Hampton Inn Santa Fe',
  'DoubleTree by Hilton Hotel Springfield',
  'Hilton Grand Vacation Suites Las Vegas',
  'Hilton Washington',
  'Hilton Santa Fe Historic Plaza',
  'Hampton Inn Bloomington West',
  'Hilton Fort Lauderdale Marina',
  'Hilton Garden Inn Savannah Historic District',
  'Hilton Orlando Lake Buena Vista',
  'Hilton Hawaiian Village Waikiki Beach Resort',
  'Hilton Boston Back Bay',
  'Hilton Garden Inn Calgary Airport',
  'Hampton Inn & Suites Tarpon Springs',
  'Hampton Inn Okeechobee',
  'Hilton Orlando',
  'Hilton Cincinnati Netherland Plaza',
  'Hilton Parc 55 San Francisco',
  'Hilton Garden Inn Calabasas',
  'Hilton Los Angeles North Glendale',
  'Hilton Quebec',
  'Hilton Mexico City Airport',
  'Molino Stucky Hilton',
  'Hilton Longboat Key Beachfront Resort',
  'Hilton Lac-Leamy',
  'Hilton Garden Inn Billings',
  'Hilton Garden Inn Monterey',
  'Hilton San Diego Resort and Spa',
  'Hilton Key Largo Resort',
  'Hilton Sedona Resort and Spa',
  'Hilton Garden Inn Freeport Downtown',
  'Hilton Woodland Hills Los Angeles',
  'Hilton Woodland Hills Los Angeles',
  'Hilton Houston Plaza / Medical Center',
  'Hilton Fort Collins',
  'Hilton Garden Inn Montreal Centre-Ville',
  'Hilton Montreal Bonaventure',
  'Hampton Inn & Suites Boston Crosstown Center',
  'Hilton Giardini Naxos',
  'Hampton Inn St. Simons Island',
  'Homewood Suites by Hilton Rock Springs',
  'Hilton Garden Inn Bozeman',
  'Hilton Raleigh-Durham Airport',
  'Hilton Boston Logan Airport',
  'Hampton Inn Helena',
  'Hampton Inn Salt Lake City - Downtown',
  'Cliffrose Springdale, Curio Collection by Hilton',
  'Homewood Suites by Hilton Jackson',
  'Signia by Hilton Orlando Bonnet Creek',
  'Hilton Chicago O hare',
  'Hilton Daytona Beach Oceanfront Resort',
  'Hilton Americas Houston',
  'Hampton Inn Lancaster',
  'Hilton Cocoa Beach',
  'Hotel del Coronado, Curio Collection by Hilton',
  'Hilton Vancouver Metrotown',
  'Hilton Fort Lauderdale Beach Resort',
  'Hilton Salt lake City Center',
  'Hilton Boston Financial District',
  'Hilton San Francisco Financial District',
  'Hilton Clearwater Beach Resort',
  'Hilton Las Vegas',
  'Hampton Inn Kayenta',
  'Westin Hilton Head',
  'Hilton Anatole',
  'Hilton La Jolla',
  'Hilton Bentley South Beach',
  'Hilton Los Cabos',
  'Hilton Cancun Golf & Spa Resort',
  'Canoa ( Coral by Hilton )',
  'Marien ( Coral by Hilton )',
  'Hilton Dubai Creek',
  'Hilton Waikoloa Village',
  'Hilton Walt Disney Resort',
  'Hilton San Francisco Union Square',
  'Hilton Times Square',
  'Hilton Los Angeles Airport',
  'Hilton Seychelles Northolme Spa',
  'Hilton Paris Aeroport Orly',
  'Hilton Paris La Defense',
  'Hilton Paris',
  'Hilton Arc de Triomphe',
  'Palmer House Hilton',
  'Hilton Chicago',
  'Millennium Hilton',
  'Hilton New York',
  'British Colonial Hilton',
  'Hilton Mauritius',
  'Hilton Miami Airport',
  'Beverly Hilton',
]


// console.log("Number of hotels unfiltereD: :: ", filteredDashboardHiltonList.length);

let parsedFilteredDashboardHiltonList = [];
// let filteredDashboardHiltonList = [];
let hiltonHotelNames = [];
let hiltonRefugees = [];
let hamptons = [];
let missingHotels = [];
let others = [];
let duplicates = [];
let hello = [];
let counter = 0;
let uncounter = 0;

// console.log('TOTAL LIST FROM DASHBOARD INCLUDING HILTON AND HAMPTON INN : ', hiltonList.length);
filteredDashboardHiltonList.map(hotel => {
  // console.log("ENTRO")
  hotel.toLocaleLowerCase();

  return parsedFilteredDashboardHiltonList.push(hotel.replace(/[^a-zA-Z ]/g, " "));
})




let dashboardWithoutDup = [...new Set(parsedFilteredDashboardHiltonList)];


// console.log('total of hotels after filtering :::::  ', dashboardWithoutDup.length);



Hotels.map(hotel => {
  if (hotel.hotelName) {
    hiltonHotelNames.push(hotel.hotelId);
  }
  //   let positive = true
  //  let name = "";
  //   if(hotel.hotelName && positive){
  //      name= hotel.hotelName.replace(/[^a-zA-Z ]/g, " ")
  //   }

  //   if(hotel.hotelName && !dashboardWithoutDup.includes(hotel.hotelName)){
  //     hiltonHotelNames.push(name);
  //   }else{

  //     others.push(hotel);
  //     // console.log('UNDEFINED ::: ', hotel.hotelName);
  //   }
  // if (hotel.hotelName) {
  //   let currentHotel = hotel.hotelName.toLowerCase();

  //   if (!parsedFilteredDashboardHiltonList.includes(currentHotel)) {
  //     return hiltonHotelNames.push(hotel.hotelName);
  //   } else {
  //     console.log('dup dupppp :::::::::: ', hotel.hotelName);

  //     duplicates.push(hotel.hotelName);

  //     counter++
  //   }





  //   if(parsedFilteredDashboardHiltonList.includes(currentHotel)){
  //     return hello.push(currentHotel)
  //   }
  // } else {
  //   console.log('UNDIFINED :: ', hotel.hotelName)
  //   uncounter++
  //   missingHotels.push(hotel.hotelName)
  // }


  // if (hotel.hotelName && !filteredDashboardHiltonList.includes(hotel.hotelName)) {

  //   return hiltonHotelNames.push(hotel.hotelName);
  //   //   filteredDashboardHiltonList.filter(function(value, index, arr){ 
  //   //     console.log('ENTRO ');
  //   //     console.log(value);
  //   //     console.log('hotel name ::: ', hotel.hotelName)
  //   //     return value == hotel.hotelName;
  //   // });

  // } else {
  //   console.log('CURRENT HOTEL : ', hotel.hotelName);
  //   if (hotel.hotelName) {
  //     console.log('dup dupppp :::::::::: ', hotel.hotelName);

  //     duplicates.push(hotel.hotelName);

  //     counter++
  //   }

  //   if (!hotel.hotelName) {
  //     console.log('UNDIFINED :: ', hotel.hotelName)
  //     uncounter++
  //   }


  //   // console.log('MISSING HOTEL ::::::::::::::::::::: ', hotel.hotelName);
  //   missingHotels.push(hotel.hotelName)



  //   return;
  // }





  // if (hotel.hotelName && hotel.hotelName.includes("Hilton")) {
  //     if (hiltonList.includes(hotel.hotelName)) {
  //       console.log('dup dup :::',hotel.hotelName);
  //       counter++;
  //     } else {
  //       hiltonHotelNames.push(hotel.hotelName);
  //     }

  //   } else {
  //     if (hotel.hotelName && hotel.hotelName.includes("Hampton")) {
  //       hamptons.push(hotel.hotelName);
  //     } else {
  //       if (hotel.hotelName) {
  //         others.push(hotel.hotelName)
  //       }

  //     }

  //     hiltonRefugees.push(hotel.hotelName);
  //   }

});

function filterItems(arr, query) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}


let harleysList = [

  {
    "hotelId": 11639,
    "providerId": "ABYFX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4722,
    "providerId": "ABVSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11544,
    "providerId": "ABQFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14661,
    "providerId": "ABISN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11631,
    "providerId": "ABETS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15262,
    "providerId": "ABECV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11571,
    "providerId": "ABERI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19317,
    "providerId": "ABQAH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18356,
    "providerId": "ADBFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19631,
    "providerId": "ADASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14755,
    "providerId": "ABEBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4739,
    "providerId": "ABQSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11542,
    "providerId": "ABEBC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11633,
    "providerId": "ABQAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11253,
    "providerId": "ABZAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14569,
    "providerId": "ADBBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11637,
    "providerId": "ABYCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11635,
    "providerId": "ABQNM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14262,
    "providerId": "ABQNJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11636,
    "providerId": "ABQMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11634,
    "providerId": "ABQCA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11632,
    "providerId": "ABQAN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19172,
    "providerId": "ACHFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15263,
    "providerId": "ABZRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11252,
    "providerId": "ABQRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11570,
    "providerId": "ABICY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19180,
    "providerId": "ADBSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11572,
    "providerId": "ABQCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18964,
    "providerId": "AANLO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14406,
    "providerId": "ABITS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14615,
    "providerId": "ABZOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11630,
    "providerId": "ABECY",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14276,
    "providerId": "ABINE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9258,
    "providerId": "ABQTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13411,
    "providerId": "ABRTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19702,
    "providerId": "AAESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13412,
    "providerId": "ABZCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11543,
    "providerId": "ABIRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11251,
    "providerId": "ABQRI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11644,
    "providerId": "AGPMG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11575,
    "providerId": "AGSCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18919,
    "providerId": "AKLFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14572,
    "providerId": "ALARZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14057,
    "providerId": "AEXFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15339,
    "providerId": "ADMCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14408,
    "providerId": "AGSRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11646,
    "providerId": "AIYML",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11645,
    "providerId": "AHNRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14102,
    "providerId": "AERMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11647,
    "providerId": "AIYEH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14763,
    "providerId": "AGRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11254,
    "providerId": "AEIAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4693,
    "providerId": "AIYSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14413,
    "providerId": "AEXTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14604,
    "providerId": "ALBPK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14898,
    "providerId": "ALBLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11573,
    "providerId": "AIYFW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11650,
    "providerId": "ALBEG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11651,
    "providerId": "ALBRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14407,
    "providerId": "ALBCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11198,
    "providerId": "AGSAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13414,
    "providerId": "AGSTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18818,
    "providerId": "AGPWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11642,
    "providerId": "AHNCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11648,
    "providerId": "ALBCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19311,
    "providerId": "ADDLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10719,
    "providerId": "AMSAA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11674,
    "providerId": "AMACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9713,
    "providerId": "AMSNT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14211,
    "providerId": "AMASH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14767,
    "providerId": "ALSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18986,
    "providerId": "AMSPO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14048,
    "providerId": "AMDBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11685,
    "providerId": "AMSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11576,
    "providerId": "AMARI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19119,
    "providerId": "AMSEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11672,
    "providerId": "ALMFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11679,
    "providerId": "AMDCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11656,
    "providerId": "ALBSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11677,
    "providerId": "AMAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11662,
    "providerId": "ALBSS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11673,
    "providerId": "AMAAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14410,
    "providerId": "ALOFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11577,
    "providerId": "ALGBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14769,
    "providerId": "ANCAT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11667,
    "providerId": "ALCEA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11680,
    "providerId": "AMMJR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4963,
    "providerId": "AMSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18761,
    "providerId": "AMSWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4727,
    "providerId": "ALYSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14380,
    "providerId": "ALWCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19122,
    "providerId": "AMDFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15338,
    "providerId": "ALOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11671,
    "providerId": "ALCAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4807,
    "providerId": "AMMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18819,
    "providerId": "AMMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19703,
    "providerId": "ALBTX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11296,
    "providerId": "ATLAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11704,
    "providerId": "ATLBD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11684,
    "providerId": "ATLAB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11710,
    "providerId": "ATLCU",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 21020,
    "providerId": "ATHAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11579,
    "providerId": "ATLAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5758,
    "providerId": "ATLAT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11703,
    "providerId": "ATLBC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4903,
    "providerId": "ASEMW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11705,
    "providerId": "ATLBM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14614,
    "providerId": "AOOTA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14616,
    "providerId": "AOOTA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19030,
    "providerId": "ASUAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11709,
    "providerId": "ATLCB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11681,
    "providerId": "ARTFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11700,
    "providerId": "ATLAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4632,
    "providerId": "ATLBW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11702,
    "providerId": "ATLBH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18404,
    "providerId": "APWSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18959,
    "providerId": "ATHLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11687,
    "providerId": "ATLAM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18968,
    "providerId": "AQJLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19013,
    "providerId": "APWGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11297,
    "providerId": "ATLAG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19337,
    "providerId": "ARBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4974,
    "providerId": "ASEEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11578,
    "providerId": "ATLAN",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11707,
    "providerId": "ATLBU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11754,
    "providerId": "ATLCV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11706,
    "providerId": "ATLCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11699,
    "providerId": "ATLAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11585,
    "providerId": "ATLBF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4215,
    "providerId": "ANCSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5099,
    "providerId": "ASUSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14411,
    "providerId": "ARBRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20015,
    "providerId": "ATLLU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11772,
    "providerId": "ATLLN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11581,
    "providerId": "ATLFB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11784,
    "providerId": "ATLNP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11782,
    "providerId": "ATLNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13416,
    "providerId": "ATLGA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18339,
    "providerId": "ATLFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19349,
    "providerId": "ATHGL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11301,
    "providerId": "ATLAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14278,
    "providerId": "ARBDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11686,
    "providerId": "ATLAA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9086,
    "providerId": "ATLAS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11584,
    "providerId": "ATLFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11261,
    "providerId": "ATLDO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11771,
    "providerId": "ATLJC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4625,
    "providerId": "ATLHW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11257,
    "providerId": "ATLJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11785,
    "providerId": "ATLMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11774,
    "providerId": "ATLMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11768,
    "providerId": "ATLKN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11580,
    "providerId": "ATLDK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11783,
    "providerId": "ATLNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11762,
    "providerId": "ATLEG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11779,
    "providerId": "ATLMN",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11718,
    "providerId": "ATLLP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11765,
    "providerId": "ATLGM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11720,
    "providerId": "ATLNC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4842,
    "providerId": "ATLNR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4925,
    "providerId": "ATLDN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11759,
    "providerId": "ATLEP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14169,
    "providerId": "ATLKB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5150,
    "providerId": "ATLMW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11780,
    "providerId": "ATLMQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8662,
    "providerId": "ATLDC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11761,
    "providerId": "ATLDC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4707,
    "providerId": "ATLGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14386,
    "providerId": "ATLDU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11721,
    "providerId": "ATLPF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11781,
    "providerId": "ATLMT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11717,
    "providerId": "ATLHG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11764,
    "providerId": "ATLGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11788,
    "providerId": "ATLPH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11719,
    "providerId": "ATLMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20018,
    "providerId": "ATLLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14470,
    "providerId": "ATLLL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11786,
    "providerId": "ATLPC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11758,
    "providerId": "ATLCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11787,
    "providerId": "ATLPE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11798,
    "providerId": "ATLWS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11790,
    "providerId": "ATLSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15305,
    "providerId": "ATLRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11800,
    "providerId": "ATWRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5088,
    "providerId": "ATLXS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11799,
    "providerId": "ATLWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14212,
    "providerId": "ATLWO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11791,
    "providerId": "ATLSZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11796,
    "providerId": "ATLTN",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 6698,
    "providerId": "ATLRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11322,
    "providerId": "AUAAO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11260,
    "providerId": "ATLVN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14765,
    "providerId": "ATLZT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21748,
    "providerId": "ATLPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4743,
    "providerId": "ATLWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4605,
    "providerId": "ATLPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14041,
    "providerId": "ATLWE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5063,
    "providerId": "ATLWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4744,
    "providerId": "ATLPN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18904,
    "providerId": "ATLYL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11793,
    "providerId": "ATLSU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14279,
    "providerId": "ATLRP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11797,
    "providerId": "ATLUS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11792,
    "providerId": "ATLSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14093,
    "providerId": "ATOFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15340,
    "providerId": "ATLPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15341,
    "providerId": "ATWCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11722,
    "providerId": "ATLRA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14215,
    "providerId": "ATQFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4138,
    "providerId": "AUAAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11115,
    "providerId": "AUAAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15342,
    "providerId": "ATLRE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4519,
    "providerId": "ATLXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20048,
    "providerId": "ATLXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18903,
    "providerId": "ATLZL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11325,
    "providerId": "AUAAC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11789,
    "providerId": "ATLRB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11794,
    "providerId": "ATLTC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 21019,
    "providerId": "ATLTE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11795,
    "providerId": "ATLTK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14766,
    "providerId": "ATLXM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19032,
    "providerId": "AUHAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11818,
    "providerId": "AUSNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4860,
    "providerId": "AUSDW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11803,
    "providerId": "AUSAN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14678,
    "providerId": "AUSRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11819,
    "providerId": "AUSNP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11804,
    "providerId": "AUSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14109,
    "providerId": "AUHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4866,
    "providerId": "AUHNL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19455,
    "providerId": "AUHNL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3343,
    "providerId": "AUART",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6817,
    "providerId": "AUART",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18831,
    "providerId": "AUHGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15343,
    "providerId": "AUSNL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14677,
    "providerId": "AUSNB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11822,
    "providerId": "AUSPB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14058,
    "providerId": "AUSLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14515,
    "providerId": "AUSFM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11723,
    "providerId": "AUSNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19121,
    "providerId": "AUHXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19344,
    "providerId": "AUHSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11802,
    "providerId": "AUSCD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13510,
    "providerId": "AUHRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18762,
    "providerId": "AUHDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14674,
    "providerId": "AUSCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19786,
    "providerId": "AUHRX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19406,
    "providerId": "AUSCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18832,
    "providerId": "AUHMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20019,
    "providerId": "AUSDA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11801,
    "providerId": "AUSAA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11823,
    "providerId": "AUSPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11807,
    "providerId": "AUSNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14768,
    "providerId": "AUSJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4156,
    "providerId": "AUSJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20074,
    "providerId": "AUSED",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20185,
    "providerId": "AUHEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14676,
    "providerId": "AUHMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11805,
    "providerId": "AUSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11806,
    "providerId": "AUSFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11821,
    "providerId": "AUSRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17035,
    "providerId": "AZOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19856,
    "providerId": "AZOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11824,
    "providerId": "AUSSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11728,
    "providerId": "AVPFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11830,
    "providerId": "AVLRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11820,
    "providerId": "AUSRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13703,
    "providerId": "AUSRB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15228,
    "providerId": "AVLAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11725,
    "providerId": "AVLCK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14092,
    "providerId": "AUSRT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11825,
    "providerId": "AUSRS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15344,
    "providerId": "AVLFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14619,
    "providerId": "AVLAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14618,
    "providerId": "AUSWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14772,
    "providerId": "AZOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14679,
    "providerId": "AYSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11727,
    "providerId": "AUSSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14570,
    "providerId": "AVLAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14900,
    "providerId": "AUSSN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11724,
    "providerId": "AUSRK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11829,
    "providerId": "AVLBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11726,
    "providerId": "AUSRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11828,
    "providerId": "AVLAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9369,
    "providerId": "AUSRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11826,
    "providerId": "AUSST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11827,
    "providerId": "AUSTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4932,
    "providerId": "AUSWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14495,
    "providerId": "AUSSM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19586,
    "providerId": "AVLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14770,
    "providerId": "AVPCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11831,
    "providerId": "AVPSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15345,
    "providerId": "AUSTN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19362,
    "providerId": "AUSTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14617,
    "providerId": "AUSTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18514,
    "providerId": "BAQFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9601,
    "providerId": "BDLWL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11836,
    "providerId": "BDLHF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18763,
    "providerId": "BCNMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20764,
    "providerId": "BCNAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11839,
    "providerId": "BDLRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14776,
    "providerId": "BDLNH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14774,
    "providerId": "BDLCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20002,
    "providerId": "BDLHR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14214,
    "providerId": "BBCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11832,
    "providerId": "BAHRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12914,
    "providerId": "BCNSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20317,
    "providerId": "BDOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20601,
    "providerId": "BDLWD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19028,
    "providerId": "BAHSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15574,
    "providerId": "BCNFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20003,
    "providerId": "BDLSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19715,
    "providerId": "BCNEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18830,
    "providerId": "BAHWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11833,
    "providerId": "BCNSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14216,
    "providerId": "BDLHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18829,
    "providerId": "BAHMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11835,
    "providerId": "BAHRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11834,
    "providerId": "BCNGA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14168,
    "providerId": "BDOOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4756,
    "providerId": "BDLSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11837,
    "providerId": "BDLAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18571,
    "providerId": "BCNWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11840,
    "providerId": "BDLPV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18800,
    "providerId": "BDOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11729,
    "providerId": "BDRCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11842,
    "providerId": "BDRRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14217,
    "providerId": "BEHFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13415,
    "providerId": "BGMWB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2477,
    "providerId": "BFLMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11846,
    "providerId": "BFLMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4982,
    "providerId": "BERSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4775,
    "providerId": "BERWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18572,
    "providerId": "BERWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11732,
    "providerId": "BGICY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11847,
    "providerId": "BFLSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14414,
    "providerId": "BGRTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14680,
    "providerId": "BFLTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19704,
    "providerId": "BEYFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14943,
    "providerId": "BFNWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13704,
    "providerId": "BGMON",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14543,
    "providerId": "BFFFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19929,
    "providerId": "BDQVF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14576,
    "providerId": "BEGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18891,
    "providerId": "BDOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11843,
    "providerId": "BFLCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19323,
    "providerId": "BEGSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11848,
    "providerId": "BGVAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4660,
    "providerId": "BEGLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19140,
    "providerId": "BEGLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18308,
    "providerId": "BFJFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11844,
    "providerId": "BDRSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14218,
    "providerId": "BHMAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14096,
    "providerId": "BFDOL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5066,
    "providerId": "BGRFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13979,
    "providerId": "BFLNA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14054,
    "providerId": "BFNBF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14281,
    "providerId": "BGRRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20318,
    "providerId": "BFSAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14419,
    "providerId": "BHMAG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20763,
    "providerId": "BERAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11841,
    "providerId": "BDRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11731,
    "providerId": "BGRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15306,
    "providerId": "BFLRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18292,
    "providerId": "BFLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1674,
    "providerId": "BFLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4748,
    "providerId": "BFLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11845,
    "providerId": "BFLFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11853,
    "providerId": "BHMHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19922,
    "providerId": "BJSFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11866,
    "providerId": "BJSRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11854,
    "providerId": "BHMMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11860,
    "providerId": "BHXBH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11864,
    "providerId": "BJSJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11851,
    "providerId": "BHMDW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11852,
    "providerId": "BHMGD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19059,
    "providerId": "BIOLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20049,
    "providerId": "BJSXR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13417,
    "providerId": "BJXCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14384,
    "providerId": "BJSWF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18456,
    "providerId": "BJSFL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14773,
    "providerId": "BISCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11733,
    "providerId": "BHMFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5029,
    "providerId": "BHMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11859,
    "providerId": "BHMTV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20005,
    "providerId": "BJSLF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18824,
    "providerId": "BJSWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11857,
    "providerId": "BHMSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4674,
    "providerId": "BJVLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18969,
    "providerId": "BJVLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11856,
    "providerId": "BHMRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15404,
    "providerId": "BJSBG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11734,
    "providerId": "BHMSC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11858,
    "providerId": "BILRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20021,
    "providerId": "BJSAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11736,
    "providerId": "BISRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20004,
    "providerId": "BJSDO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19107,
    "providerId": "BHMAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5508,
    "providerId": "BHMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18573,
    "providerId": "BHMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13419,
    "providerId": "BHOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11850,
    "providerId": "BHMCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11849,
    "providerId": "BHMBF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21021,
    "providerId": "BJVEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14126,
    "providerId": "BHXAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13422,
    "providerId": "BLRRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11871,
    "providerId": "BMGCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18365,
    "providerId": "BKKFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14418,
    "providerId": "BILTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19033,
    "providerId": "BKKLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14338,
    "providerId": "BLRJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14945,
    "providerId": "BLZRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19092,
    "providerId": "BKKXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19078,
    "providerId": "BKKLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4984,
    "providerId": "BLIFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11873,
    "providerId": "BKKCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11867,
    "providerId": "BJZBA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20044,
    "providerId": "BLRLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14026,
    "providerId": "BKKQP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11870,
    "providerId": "BMGFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20446,
    "providerId": "BKIKK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11875,
    "providerId": "BKKDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14199,
    "providerId": "BLRFB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19623,
    "providerId": "BLRGL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13420,
    "providerId": "BLRWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19070,
    "providerId": "BKKAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13425,
    "providerId": "BKKRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19637,
    "providerId": "BLRWL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19826,
    "providerId": "BLRFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18577,
    "providerId": "BKKWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11874,
    "providerId": "BLKBP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13705,
    "providerId": "BKKMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18575,
    "providerId": "BKKDM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19199,
    "providerId": "BLRAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18525,
    "providerId": "BLRGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14579,
    "providerId": "BLITS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18578,
    "providerId": "BKKWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18539,
    "providerId": "BKKSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11740,
    "providerId": "BLQBO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18491,
    "providerId": "BLRSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14468,
    "providerId": "BLISH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11741,
    "providerId": "BKKBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18576,
    "providerId": "BKKSM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14059,
    "providerId": "BLRGT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14681,
    "providerId": "BLRGT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18574,
    "providerId": "BKIMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11742,
    "providerId": "BNABN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11881,
    "providerId": "BNACK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11743,
    "providerId": "BNACA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20188,
    "providerId": "BNACL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4887,
    "providerId": "BNAFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2267,
    "providerId": "BNAGO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6782,
    "providerId": "BNAGO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16680,
    "providerId": "BNASH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11879,
    "providerId": "BNABR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14443,
    "providerId": "BNAFN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14603,
    "providerId": "BNAFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14469,
    "providerId": "BMIRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20941,
    "providerId": "BNAAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19029,
    "providerId": "BNASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20942,
    "providerId": "BNARN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20976,
    "providerId": "BNAMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17527,
    "providerId": "BNADT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4791,
    "providerId": "BNAND",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 16847,
    "providerId": "BNAND",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11877,
    "providerId": "BMIMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11744,
    "providerId": "BNAMF",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14775,
    "providerId": "BNAFC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7042,
    "providerId": "BNASM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11876,
    "providerId": "BMICY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20986,
    "providerId": "BNALB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14090,
    "providerId": "BNANS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11878,
    "providerId": "BNAAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11882,
    "providerId": "BNACV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11880,
    "providerId": "BNAGV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11872,
    "providerId": "BMGTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14682,
    "providerId": "BNAMJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14294,
    "providerId": "BNAMU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11892,
    "providerId": "BOITS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9221,
    "providerId": "BNAWL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18582,
    "providerId": "BNEWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18581,
    "providerId": "BNEWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18499,
    "providerId": "BOGFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11883,
    "providerId": "BNAVL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3897,
    "providerId": "BOBMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18834,
    "providerId": "BOBMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11894,
    "providerId": "BOMCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5521,
    "providerId": "BNAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18580,
    "providerId": "BNAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14388,
    "providerId": "BOGAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19314,
    "providerId": "BNAPA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17031,
    "providerId": "BNAAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19031,
    "providerId": "BNAAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21022,
    "providerId": "BNAAF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19084,
    "providerId": "BOGAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14146,
    "providerId": "BNISE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11901,
    "providerId": "BOMJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11745,
    "providerId": "BNATS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11887,
    "providerId": "BOIDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11893,
    "providerId": "BOMBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9095,
    "providerId": "BNAVB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11890,
    "providerId": "BOIWM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5116,
    "providerId": "BOBXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17789,
    "providerId": "BNATX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20057,
    "providerId": "BOMRL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14196,
    "providerId": "BOMSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9605,
    "providerId": "BNAVW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11885,
    "providerId": "BOGMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11886,
    "providerId": "BNEDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18515,
    "providerId": "BNEFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18966,
    "providerId": "BOMLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11891,
    "providerId": "BOIFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14230,
    "providerId": "BOGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11884,
    "providerId": "BOGJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18583,
    "providerId": "BOGWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8043,
    "providerId": "BNAWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14620,
    "providerId": "BNAVI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11747,
    "providerId": "BOINP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7044,
    "providerId": "BNATN",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11888,
    "providerId": "BOIID",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11746,
    "providerId": "BOISH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14575,
    "providerId": "BNATC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13980,
    "providerId": "BNATG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11889,
    "providerId": "BOHBM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18540,
    "providerId": "BOGSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11940,
    "providerId": "BOSCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11954,
    "providerId": "BOSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2418,
    "providerId": "BOSBO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5035,
    "providerId": "BOSBO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11964,
    "providerId": "BOSFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4146,
    "providerId": "BOSCM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5156,
    "providerId": "BOSBM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18585,
    "providerId": "BOSBM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14101,
    "providerId": "BOSCL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4140,
    "providerId": "BOSCO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11331,
    "providerId": "BOSCO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15264,
    "providerId": "BOSCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11959,
    "providerId": "BOSFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11945,
    "providerId": "BOSCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19705,
    "providerId": "BOSCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20052,
    "providerId": "BOMXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11934,
    "providerId": "BOSBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11323,
    "providerId": "BOSCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11961,
    "providerId": "BOSFX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11931,
    "providerId": "BOSBC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18451,
    "providerId": "BOSFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19036,
    "providerId": "BOSEX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11750,
    "providerId": "BOSCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11935,
    "providerId": "BOSBT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11937,
    "providerId": "BOSBW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11936,
    "providerId": "BOSBU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11752,
    "providerId": "BOSFM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18584,
    "providerId": "BOMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19809,
    "providerId": "BOSAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11358,
    "providerId": "BOSAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11932,
    "providerId": "BOSBB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11950,
    "providerId": "BOSDH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11956,
    "providerId": "BOSDN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11324,
    "providerId": "BOSDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11366,
    "providerId": "BOSFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14371,
    "providerId": "BOSAC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11960,
    "providerId": "BOSFT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11962,
    "providerId": "BOSFB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4690,
    "providerId": "BOSFF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19026,
    "providerId": "BOSEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11930,
    "providerId": "BOSAW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14683,
    "providerId": "BONCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11900,
    "providerId": "BOSAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14263,
    "providerId": "BOSAB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11749,
    "providerId": "BOSBL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11355,
    "providerId": "BOSFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14061,
    "providerId": "BOSAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11326,
    "providerId": "BOSDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11953,
    "providerId": "BOSDV",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 508,
    "providerId": "BOSLW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11904,
    "providerId": "BOSWB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11897,
    "providerId": "BOSNT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11905,
    "providerId": "BOSTT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14684,
    "providerId": "BOSRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11327,
    "providerId": "BOSLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11330,
    "providerId": "BOSTW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11753,
    "providerId": "BOSNM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11963,
    "providerId": "BOSML",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 8671,
    "providerId": "BOSMF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11898,
    "providerId": "BOSPY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19915,
    "providerId": "BOSLF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11902,
    "providerId": "BOSRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11755,
    "providerId": "BOSNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11896,
    "providerId": "BOSPP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5485,
    "providerId": "BOSXL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19040,
    "providerId": "BOSXL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5038,
    "providerId": "BOSWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 1333,
    "providerId": "BOSWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11907,
    "providerId": "BOSWR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19588,
    "providerId": "BOSOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11756,
    "providerId": "BOSTD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11455,
    "providerId": "BOSOX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11333,
    "providerId": "BOSWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10391,
    "providerId": "BOSWM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14104,
    "providerId": "BOSNH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11053,
    "providerId": "BOSRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14049,
    "providerId": "BOSNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15348,
    "providerId": "BOSRR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8678,
    "providerId": "BOSSV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19044,
    "providerId": "BOSLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11966,
    "providerId": "BOSNF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11895,
    "providerId": "BOSPB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2718,
    "providerId": "BOSOW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18586,
    "providerId": "BOSOW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4682,
    "providerId": "BOSOW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18587,
    "providerId": "BOSWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 1850,
    "providerId": "BOSWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11329,
    "providerId": "BOSSO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11903,
    "providerId": "BOSST",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14060,
    "providerId": "BOSWX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18452,
    "providerId": "BOSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4732,
    "providerId": "BOSWW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18589,
    "providerId": "BOSWW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14106,
    "providerId": "BOSSY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14396,
    "providerId": "ADDER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11916,
    "providerId": "BSLCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11917,
    "providerId": "BRUBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11924,
    "providerId": "BTRTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4672,
    "providerId": "BTSLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19138,
    "providerId": "BTSLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11922,
    "providerId": "BTRRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11918,
    "providerId": "BRUDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11906,
    "providerId": "BQKFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11767,
    "providerId": "BTRSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11760,
    "providerId": "BQKCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13733,
    "providerId": "BQNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11915,
    "providerId": "BTRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14687,
    "providerId": "BTMFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14778,
    "providerId": "BROBV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11770,
    "providerId": "BRSDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15265,
    "providerId": "BOSXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18387,
    "providerId": "BRCTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14472,
    "providerId": "BTLCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4694,
    "providerId": "BRUSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11908,
    "providerId": "BPTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11912,
    "providerId": "BPTFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11921,
    "providerId": "BTRNA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11910,
    "providerId": "BQKKG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14219,
    "providerId": "BTLTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11909,
    "providerId": "BRUCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14095,
    "providerId": "BTRRO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14163,
    "providerId": "BRQCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7064,
    "providerId": "BTRPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14097,
    "providerId": "BPTTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11913,
    "providerId": "BRSRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11920,
    "providerId": "BTRGZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11914,
    "providerId": "BTRBB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4967,
    "providerId": "BRUAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19886,
    "providerId": "BRUAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14621,
    "providerId": "BRUMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16988,
    "providerId": "BQKWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18590,
    "providerId": "BQKWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14688,
    "providerId": "BTRAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11919,
    "providerId": "BTRCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11928,
    "providerId": "BURRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15266,
    "providerId": "BUSAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11965,
    "providerId": "BURCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4692,
    "providerId": "BURSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11927,
    "providerId": "BUDHU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7066,
    "providerId": "BUFAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14280,
    "providerId": "BUFSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19004,
    "providerId": "BUFAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14783,
    "providerId": "BUFBD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14598,
    "providerId": "BURSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14782,
    "providerId": "BTVWB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11773,
    "providerId": "BUFAM",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18545,
    "providerId": "BUHSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19038,
    "providerId": "BUESI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4863,
    "providerId": "BTSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13421,
    "providerId": "BUFTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4952,
    "providerId": "BUSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20977,
    "providerId": "BUFFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19930,
    "providerId": "BUFTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11769,
    "providerId": "BTVTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15307,
    "providerId": "BURSC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5464,
    "providerId": "BVUBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18592,
    "providerId": "BVUBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5522,
    "providerId": "BUFWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18591,
    "providerId": "BUFWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19363,
    "providerId": "BUFAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11925,
    "providerId": "BUDCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11929,
    "providerId": "BUHRO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15308,
    "providerId": "BVUCH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 5448,
    "providerId": "BUEPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19045,
    "providerId": "BUEPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21024,
    "providerId": "BUFFN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11776,
    "providerId": "BUDAK",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14399,
    "providerId": "BUDRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11778,
    "providerId": "BVUDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11923,
    "providerId": "BTVFB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4901,
    "providerId": "BURAH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11775,
    "providerId": "BURAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5068,
    "providerId": "BUESC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14476,
    "providerId": "BUFDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11938,
    "providerId": "BVUFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13423,
    "providerId": "BWGTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14089,
    "providerId": "BWIDH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11933,
    "providerId": "BWGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11955,
    "providerId": "BWIHU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18596,
    "providerId": "BWIWA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11957,
    "providerId": "BWIRI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4834,
    "providerId": "BWIEM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19342,
    "providerId": "BWIEM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11946,
    "providerId": "BWICA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11941,
    "providerId": "BWIBD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11939,
    "providerId": "BWIAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11948,
    "providerId": "BWIFH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5446,
    "providerId": "BWIIS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11944,
    "providerId": "BWICB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14488,
    "providerId": "BWIAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11947,
    "providerId": "BWICL",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11942,
    "providerId": "BWICO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5101,
    "providerId": "BWILS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4784,
    "providerId": "BVUSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20022,
    "providerId": "BWIAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11949,
    "providerId": "BWIFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11951,
    "providerId": "BWIHB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18593,
    "providerId": "BVUWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4683,
    "providerId": "BWINS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11968,
    "providerId": "BWISS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14154,
    "providerId": "BWIDI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11970,
    "providerId": "BWITA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14758,
    "providerId": "BWIAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11952,
    "providerId": "BWIIH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5104,
    "providerId": "BWIBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18632,
    "providerId": "BWIBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11777,
    "providerId": "BWIAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11967,
    "providerId": "BWISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15267,
    "providerId": "BWIEA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4833,
    "providerId": "BWIMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19341,
    "providerId": "BWIMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11958,
    "providerId": "BWISH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11943,
    "providerId": "BWIDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11972,
    "providerId": "BWIWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11969,
    "providerId": "BWRAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4725,
    "providerId": "CAISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14098,
    "providerId": "CAKRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14577,
    "providerId": "CAKFL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20024,
    "providerId": "CAEAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11978,
    "providerId": "CAKCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18597,
    "providerId": "CAIMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4661,
    "providerId": "CAIMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11982,
    "providerId": "CAIJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18598,
    "providerId": "CAIWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14691,
    "providerId": "CAKAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14785,
    "providerId": "CAKSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13981,
    "providerId": "CAECY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14473,
    "providerId": "CAKFC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20023,
    "providerId": "CAEAH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14052,
    "providerId": "CAIBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14784,
    "providerId": "CAKAM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11981,
    "providerId": "CAIEG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11974,
    "providerId": "CAEFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11977,
    "providerId": "CAESE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4815,
    "providerId": "CAESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11971,
    "providerId": "BZNRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4861,
    "providerId": "CAIAM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18594,
    "providerId": "CAIAM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18428,
    "providerId": "CAKSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14213,
    "providerId": "CAIMN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11979,
    "providerId": "CAKCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4972,
    "providerId": "BZNEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20076,
    "providerId": "BZNEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14392,
    "providerId": "CAIRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11975,
    "providerId": "CAENE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11980,
    "providerId": "CAKCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11976,
    "providerId": "CAEOB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11973,
    "providerId": "CAECD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14490,
    "providerId": "CAEMT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13424,
    "providerId": "CAEHB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5124,
    "providerId": "CAIHM",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18595,
    "providerId": "CAIHM",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 21445,
    "providerId": "BZNRK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14788,
    "providerId": "CAETN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20061,
    "providerId": "CAIXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19440,
    "providerId": "BZOLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14695,
    "providerId": "CAKDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11984,
    "providerId": "CAKMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19480,
    "providerId": "BZOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13998,
    "providerId": "BZNSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20012,
    "providerId": "CANGN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11985,
    "providerId": "CAKSO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20776,
    "providerId": "CBGAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14108,
    "providerId": "CGNCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11990,
    "providerId": "CBGHD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11989,
    "providerId": "CBEFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19022,
    "providerId": "CFULC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11999,
    "providerId": "CHADT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15564,
    "providerId": "CGQFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14803,
    "providerId": "CCUJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20013,
    "providerId": "CANSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19996,
    "providerId": "CGDFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18825,
    "providerId": "CANWG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11994,
    "providerId": "CDWRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18639,
    "providerId": "CEIMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11987,
    "providerId": "CANTI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21023,
    "providerId": "CBRAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20025,
    "providerId": "CANUL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18601,
    "providerId": "CCUWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14385,
    "providerId": "CANSM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18391,
    "providerId": "CANFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12001,
    "providerId": "CHAHP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20058,
    "providerId": "CCULC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19327,
    "providerId": "CANAL",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11988,
    "providerId": "CANRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14064,
    "providerId": "CGNBO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18599,
    "providerId": "CANGW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20009,
    "providerId": "CGQSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19923,
    "providerId": "CANFG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11998,
    "providerId": "CHACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11995,
    "providerId": "CHACH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20007,
    "providerId": "CGDSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14653,
    "providerId": "CGOCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12000,
    "providerId": "CHAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11996,
    "providerId": "CGNMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11997,
    "providerId": "CHACL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14394,
    "providerId": "CGOJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12004,
    "providerId": "CHASE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15350,
    "providerId": "CHATV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12022,
    "providerId": "CHIHP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12014,
    "providerId": "CHIDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12015,
    "providerId": "CHIAN",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12007,
    "providerId": "CHASH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12008,
    "providerId": "CHIDG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11139,
    "providerId": "CHIFT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12059,
    "providerId": "CHIBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12013,
    "providerId": "CHIAH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4704,
    "providerId": "CHIES",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12012,
    "providerId": "CHIDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12049,
    "providerId": "CHIBD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11160,
    "providerId": "CHIAB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18603,
    "providerId": "CHAWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12011,
    "providerId": "CHIDN",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19589,
    "providerId": "CHIBF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13433,
    "providerId": "CHATS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11140,
    "providerId": "CHIAC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11157,
    "providerId": "CHIDX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12006,
    "providerId": "CHICR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12017,
    "providerId": "CHIFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15310,
    "providerId": "CHIBK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11145,
    "providerId": "CHIJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12057,
    "providerId": "CHIBG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12019,
    "providerId": "CHIGV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12097,
    "providerId": "CHIBU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19060,
    "providerId": "CHIAA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12009,
    "providerId": "CHIDF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12016,
    "providerId": "CHIFD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11146,
    "providerId": "CHIDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12020,
    "providerId": "CHIEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20766,
    "providerId": "CHIAO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12063,
    "providerId": "CHICA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4951,
    "providerId": "CHIIS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12002,
    "providerId": "CHARI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12061,
    "providerId": "CHIBL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12010,
    "providerId": "CHATF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12003,
    "providerId": "CHICM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11332,
    "providerId": "CHICO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5043,
    "providerId": "CHIFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17048,
    "providerId": "CHIAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4869,
    "providerId": "CHICC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5023,
    "providerId": "CHIGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12005,
    "providerId": "CHICS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20979,
    "providerId": "CHIFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20083,
    "providerId": "CHILC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4864,
    "providerId": "CHIOL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19448,
    "providerId": "CHIOL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11158,
    "providerId": "CHIMQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11163,
    "providerId": "CHIMM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4658,
    "providerId": "CHIMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18605,
    "providerId": "CHIMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4847,
    "providerId": "CHIOS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12030,
    "providerId": "CHINV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12027,
    "providerId": "CHINB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12025,
    "providerId": "CHILS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12021,
    "providerId": "CHIMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12034,
    "providerId": "CHINW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19451,
    "providerId": "CHIMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12026,
    "providerId": "CHIMN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12038,
    "providerId": "CHIOB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11162,
    "providerId": "CHINR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12024,
    "providerId": "CHILN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4787,
    "providerId": "CHILY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18604,
    "providerId": "CHILY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4742,
    "providerId": "CHINO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18606,
    "providerId": "CHINO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12029,
    "providerId": "CHINP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12023,
    "providerId": "CHILK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11147,
    "providerId": "CHIMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19435,
    "providerId": "CHSAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8148,
    "providerId": "CHIRM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14693,
    "providerId": "CHIZS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11148,
    "providerId": "CHISR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12031,
    "providerId": "CHIRS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12035,
    "providerId": "CHIRW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 9988,
    "providerId": "CHIWG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11144,
    "providerId": "CHIRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14475,
    "providerId": "CHSAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15347,
    "providerId": "CHIRK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11164,
    "providerId": "CHIRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12048,
    "providerId": "CHOCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4714,
    "providerId": "CHIWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18608,
    "providerId": "CHIWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4628,
    "providerId": "CHIWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18609,
    "providerId": "CHIWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12045,
    "providerId": "CHIWD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12050,
    "providerId": "CHOFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14171,
    "providerId": "CHIXS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12037,
    "providerId": "CHISB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18905,
    "providerId": "CHIOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11149,
    "providerId": "CHIRD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 5050,
    "providerId": "CHIOW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18640,
    "providerId": "CHIOW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19908,
    "providerId": "CHITX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12036,
    "providerId": "CHISH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4734,
    "providerId": "CHIWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18607,
    "providerId": "CHIWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12053,
    "providerId": "CHSCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11150,
    "providerId": "CHIWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8153,
    "providerId": "CHISG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12042,
    "providerId": "CHITL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12039,
    "providerId": "CHISM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8151,
    "providerId": "CHISC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12051,
    "providerId": "CHODT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5080,
    "providerId": "CHIWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18610,
    "providerId": "CHIWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12052,
    "providerId": "CHSBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12047,
    "providerId": "CHIWK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12040,
    "providerId": "CHIST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12044,
    "providerId": "CHITS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14452,
    "providerId": "CHIWL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12043,
    "providerId": "CHISW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4684,
    "providerId": "CHISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1485,
    "providerId": "CHIRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11079,
    "providerId": "CHIRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18826,
    "providerId": "CHIWN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12032,
    "providerId": "CHIOT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12046,
    "providerId": "CHIWR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12062,
    "providerId": "CHSNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19364,
    "providerId": "CLEAA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15346,
    "providerId": "CJBFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14477,
    "providerId": "CLEAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4884,
    "providerId": "CLEAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20026,
    "providerId": "CJBAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12566,
    "providerId": "CIDMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12060,
    "providerId": "CHSMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8735,
    "providerId": "CHSMP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12565,
    "providerId": "CIDCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18612,
    "providerId": "CKGMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15403,
    "providerId": "CJUMJ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8738,
    "providerId": "CHSNO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12663,
    "providerId": "CIDVL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12564,
    "providerId": "CHSRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14580,
    "providerId": "CKGMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14548,
    "providerId": "CHSMN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18613,
    "providerId": "CKGWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12665,
    "providerId": "CIDIC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12662,
    "providerId": "CHSSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14474,
    "providerId": "CKBSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14273,
    "providerId": "CKGJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15270,
    "providerId": "CIDCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15269,
    "providerId": "CHSTO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20010,
    "providerId": "CKGSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15268,
    "providerId": "CHSTM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14946,
    "providerId": "CIPBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15349,
    "providerId": "CIDSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14282,
    "providerId": "CHSSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18440,
    "providerId": "CKYSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12056,
    "providerId": "CHSNC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14699,
    "providerId": "CLEAB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5952,
    "providerId": "CHSHD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12058,
    "providerId": "CHSHD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14471,
    "providerId": "CKBCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12054,
    "providerId": "CHSCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18611,
    "providerId": "CJBMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13435,
    "providerId": "CHSFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14544,
    "providerId": "CIDCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12055,
    "providerId": "CHSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12580,
    "providerId": "CLTCC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12470,
    "providerId": "CLEBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12579,
    "providerId": "CLTAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12640,
    "providerId": "CLEEM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5513,
    "providerId": "CLEBE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9169,
    "providerId": "CLEWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18614,
    "providerId": "CLEWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12469,
    "providerId": "CLEWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20035,
    "providerId": "CLLAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12575,
    "providerId": "CLEST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12468,
    "providerId": "CLESC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4717,
    "providerId": "CLEAS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12571,
    "providerId": "CLECA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4867,
    "providerId": "CLTAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12641,
    "providerId": "CLTCM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12637,
    "providerId": "CLENO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12567,
    "providerId": "CLEAP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 8739,
    "providerId": "CLEFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19916,
    "providerId": "CLEFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12666,
    "providerId": "CLTEX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14700,
    "providerId": "CLEIP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18822,
    "providerId": "CLTCW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12572,
    "providerId": "CLECI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12574,
    "providerId": "CLERZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12582,
    "providerId": "CLTFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12576,
    "providerId": "CLETA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12578,
    "providerId": "CLLRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12577,
    "providerId": "CLETS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14701,
    "providerId": "CLEMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12467,
    "providerId": "CLTBL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4883,
    "providerId": "CLLFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19076,
    "providerId": "CLEEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12568,
    "providerId": "CLEBH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13707,
    "providerId": "CLECE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18302,
    "providerId": "CLOFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12573,
    "providerId": "CLECW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12639,
    "providerId": "CLESW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13426,
    "providerId": "CLOMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12570,
    "providerId": "CLEBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12586,
    "providerId": "CLTRP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12587,
    "providerId": "CLTTW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12643,
    "providerId": "CLTGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12473,
    "providerId": "CLTSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12472,
    "providerId": "CMHAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15352,
    "providerId": "CMHAC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12646,
    "providerId": "CLTTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12590,
    "providerId": "CMHBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19931,
    "providerId": "CLTVF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12588,
    "providerId": "CLTUP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14706,
    "providerId": "CLTWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14232,
    "providerId": "CMHAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12644,
    "providerId": "CLTUN",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18509,
    "providerId": "CLTFO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9171,
    "providerId": "CLTUT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14478,
    "providerId": "CLTUT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12585,
    "providerId": "CLTSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12584,
    "providerId": "CLTPH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19506,
    "providerId": "CLTFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14065,
    "providerId": "CLTFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12664,
    "providerId": "CLTTM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14161,
    "providerId": "CLTFT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4940,
    "providerId": "CLTWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15271,
    "providerId": "CMBMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12471,
    "providerId": "CLTRU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12589,
    "providerId": "CMHAM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10628,
    "providerId": "CLTSB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13427,
    "providerId": "CLTSB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20085,
    "providerId": "CLTLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4699,
    "providerId": "CLTMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18615,
    "providerId": "CLTMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12583,
    "providerId": "CLTHB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20011,
    "providerId": "CLTSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20037,
    "providerId": "CMHAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14100,
    "providerId": "CMHAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12642,
    "providerId": "CLTMO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13490,
    "providerId": "CMHAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19687,
    "providerId": "CLTUL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14017,
    "providerId": "CLTSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12597,
    "providerId": "CMHRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12478,
    "providerId": "CMHOS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12633,
    "providerId": "CMPCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13993,
    "providerId": "CNYMS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14486,
    "providerId": "CMHCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14479,
    "providerId": "CMPTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13428,
    "providerId": "CMPRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14173,
    "providerId": "CMHCG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18405,
    "providerId": "CNSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13429,
    "providerId": "COKAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19932,
    "providerId": "CMHOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18641,
    "providerId": "CNXMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19592,
    "providerId": "CMHSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14487,
    "providerId": "CMHDF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14062,
    "providerId": "CMHMN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14238,
    "providerId": "CMHRN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12475,
    "providerId": "CMHMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12485,
    "providerId": "CMPFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14703,
    "providerId": "CMHWG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4899,
    "providerId": "CMHCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5046,
    "providerId": "CMHWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18616,
    "providerId": "CMHWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12598,
    "providerId": "CMHRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11361,
    "providerId": "CNYFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13706,
    "providerId": "COESH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12474,
    "providerId": "CMHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12591,
    "providerId": "CMHCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12594,
    "providerId": "CMHNW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12593,
    "providerId": "CMHNK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12602,
    "providerId": "CMHWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14786,
    "providerId": "CNMTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4696,
    "providerId": "CMNSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19933,
    "providerId": "CMHPF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15351,
    "providerId": "COUTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14480,
    "providerId": "COTFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14344,
    "providerId": "CPTSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20038,
    "providerId": "CRPAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14787,
    "providerId": "COKMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18642,
    "providerId": "COKMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14307,
    "providerId": "CPTMW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12634,
    "providerId": "COSSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14366,
    "providerId": "CPTFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12616,
    "providerId": "COUCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4822,
    "providerId": "CPTWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18629,
    "providerId": "CPTWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12480,
    "providerId": "COUFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12635,
    "providerId": "COSSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14947,
    "providerId": "CPTCU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21605,
    "providerId": "COSFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14350,
    "providerId": "CPTVI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12619,
    "providerId": "COUJC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14113,
    "providerId": "CPHAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14348,
    "providerId": "CPTNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14791,
    "providerId": "CPTSB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12479,
    "providerId": "COSCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14191,
    "providerId": "CPTBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12604,
    "providerId": "CPHDK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12606,
    "providerId": "CSGSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12607,
    "providerId": "CTDCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12482,
    "providerId": "CSGCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18950,
    "providerId": "CSXLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15396,
    "providerId": "CSXCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14239,
    "providerId": "CRPFC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21028,
    "providerId": "CRWFC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14116,
    "providerId": "CRPPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19624,
    "providerId": "CSXXR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12614,
    "providerId": "CTDCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12610,
    "providerId": "CTDRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14283,
    "providerId": "CRPTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13982,
    "providerId": "CTDPD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12603,
    "providerId": "CSGRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14393,
    "providerId": "CRWCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12608,
    "providerId": "CSMNB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12487,
    "providerId": "CTDSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12481,
    "providerId": "CSGTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12615,
    "providerId": "CTDVI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5177,
    "providerId": "CSMTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14254,
    "providerId": "CTDAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18566,
    "providerId": "CSXFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18527,
    "providerId": "CTASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18475,
    "providerId": "CSXSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12600,
    "providerId": "CRPFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18433,
    "providerId": "CTUAF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18355,
    "providerId": "CTSTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14387,
    "providerId": "CSXZH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14953,
    "providerId": "CSGCA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12484,
    "providerId": "CRPRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12601,
    "providerId": "CRWWV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12613,
    "providerId": "CTDST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14457,
    "providerId": "CSGCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18618,
    "providerId": "CTSWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12609,
    "providerId": "CTDDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14707,
    "providerId": "CSGAU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4593,
    "providerId": "CTDWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18617,
    "providerId": "CTDWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4933,
    "providerId": "CRWFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14789,
    "providerId": "CRPSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12611,
    "providerId": "CVGAM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19416,
    "providerId": "CUNAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11152,
    "providerId": "CUNMX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14378,
    "providerId": "CTUBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12612,
    "providerId": "CVGAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18330,
    "providerId": "CUEFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19061,
    "providerId": "CVGPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12623,
    "providerId": "CVGDR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18620,
    "providerId": "CUNVB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4376,
    "providerId": "CUNVB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14708,
    "providerId": "CRPRP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19046,
    "providerId": "CUZLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4971,
    "providerId": "CVGCF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12621,
    "providerId": "CVGFL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12622,
    "providerId": "CVGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14715,
    "providerId": "CTUMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14718,
    "providerId": "CVGMT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11116,
    "providerId": "CUNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21029,
    "providerId": "CUNFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14547,
    "providerId": "CVGCI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14240,
    "providerId": "CVGBC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19049,
    "providerId": "CUZTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12626,
    "providerId": "CVGNE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2916,
    "providerId": "CUNRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11151,
    "providerId": "CUNRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12620,
    "providerId": "CVGCD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19983,
    "providerId": "CTUFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14623,
    "providerId": "CUUCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13491,
    "providerId": "CUZMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12624,
    "providerId": "CVGHA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12618,
    "providerId": "CVGBA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12486,
    "providerId": "CURBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18619,
    "providerId": "CUNLI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5172,
    "providerId": "CUNFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18940,
    "providerId": "CUUSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12489,
    "providerId": "CVGNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19634,
    "providerId": "CTULS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14790,
    "providerId": "CVGNW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3325,
    "providerId": "CUNJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19945,
    "providerId": "CZXSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18624,
    "providerId": "DACWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18906,
    "providerId": "DABSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18633,
    "providerId": "CZMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12488,
    "providerId": "CWAFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14792,
    "providerId": "CYSTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12491,
    "providerId": "CWLGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12631,
    "providerId": "CVTGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12654,
    "providerId": "DALBD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18621,
    "providerId": "CVGWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4256,
    "providerId": "CVGWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4731,
    "providerId": "CVGWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19315,
    "providerId": "CZXWS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18623,
    "providerId": "DACMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14794,
    "providerId": "CZLMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21672,
    "providerId": "DABAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15353,
    "providerId": "CVGSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12630,
    "providerId": "CYSSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12638,
    "providerId": "DABPC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18447,
    "providerId": "DADSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14372,
    "providerId": "DALAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18367,
    "providerId": "DACFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14481,
    "providerId": "DABDB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12629,
    "providerId": "CVGSF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12636,
    "providerId": "DABCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4747,
    "providerId": "CYMFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19748,
    "providerId": "DALAE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12632,
    "providerId": "CWLDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14066,
    "providerId": "CYSSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4790,
    "providerId": "CYRSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12645,
    "providerId": "DALAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14119,
    "providerId": "CZXMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18368,
    "providerId": "DADFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12490,
    "providerId": "DALAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19946,
    "providerId": "CZXSX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12493,
    "providerId": "DABRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15355,
    "providerId": "DABDE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5483,
    "providerId": "DALDH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12651,
    "providerId": "DALDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12659,
    "providerId": "DALLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12668,
    "providerId": "DALMK",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12669,
    "providerId": "DALLP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4848,
    "providerId": "DALLF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19414,
    "providerId": "DALLF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12650,
    "providerId": "DALCM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15272,
    "providerId": "DABFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18303,
    "providerId": "CWBFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12495,
    "providerId": "DALLS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14558,
    "providerId": "DALDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12660,
    "providerId": "DALLE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19120,
    "providerId": "DALEA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 1920,
    "providerId": "DALGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18626,
    "providerId": "DALGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5518,
    "providerId": "DALKS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19810,
    "providerId": "DALLR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4850,
    "providerId": "DALDL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12657,
    "providerId": "DALGP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4983,
    "providerId": "DALDW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18625,
    "providerId": "DALDW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12658,
    "providerId": "DALIR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12647,
    "providerId": "DALBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13997,
    "providerId": "DALDZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14726,
    "providerId": "DALFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12492,
    "providerId": "DALCE",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13430,
    "providerId": "DALGT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9827,
    "providerId": "DALGA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18628,
    "providerId": "DALML",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19062,
    "providerId": "DALLO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12656,
    "providerId": "DALFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12653,
    "providerId": "DALDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12496,
    "providerId": "DALLL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18920,
    "providerId": "DALIW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12652,
    "providerId": "DALCC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12494,
    "providerId": "DALFL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19087,
    "providerId": "DALEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14622,
    "providerId": "DALBP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12649,
    "providerId": "DALCO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12661,
    "providerId": "DALIV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5482,
    "providerId": "DALGI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15354,
    "providerId": "DALFV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18627,
    "providerId": "DALMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12648,
    "providerId": "DALBT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14793,
    "providerId": "DALCD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13994,
    "providerId": "DALTX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15273,
    "providerId": "DALMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4763,
    "providerId": "DALSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12502,
    "providerId": "DALTP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12672,
    "providerId": "DALPN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14417,
    "providerId": "DALTG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12673,
    "providerId": "DALQD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15356,
    "providerId": "DALTM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12671,
    "providerId": "DALPT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9229,
    "providerId": "DALPL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12674,
    "providerId": "DALRD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12501,
    "providerId": "DALSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12497,
    "providerId": "DALMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18630,
    "providerId": "DALWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4641,
    "providerId": "DALWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9278,
    "providerId": "DALSS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14118,
    "providerId": "DALVL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19474,
    "providerId": "DALSL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12498,
    "providerId": "DALNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12678,
    "providerId": "DALTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13995,
    "providerId": "DALTY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14827,
    "providerId": "DALWF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14624,
    "providerId": "DALPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14150,
    "providerId": "DALRW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12670,
    "providerId": "DALPC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14485,
    "providerId": "DALPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12499,
    "providerId": "DALQC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4830,
    "providerId": "DALSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14600,
    "providerId": "DARDA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18448,
    "providerId": "DBVSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12679,
    "providerId": "DALWL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14563,
    "providerId": "DALYC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15359,
    "providerId": "DBNFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18634,
    "providerId": "DELDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18637,
    "providerId": "DELWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12675,
    "providerId": "DALRH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12676,
    "providerId": "DALSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9431,
    "providerId": "DALSF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12500,
    "providerId": "DALTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14954,
    "providerId": "DALRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19948,
    "providerId": "DALSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12513,
    "providerId": "DALRS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4852,
    "providerId": "DALNL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12667,
    "providerId": "DALNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12688,
    "providerId": "DAYUD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13431,
    "providerId": "DELAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12677,
    "providerId": "DAYCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14599,
    "providerId": "DARPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14318,
    "providerId": "DDCTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18951,
    "providerId": "DELLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14795,
    "providerId": "DECRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12504,
    "providerId": "DAYLM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12685,
    "providerId": "DAYSP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14702,
    "providerId": "DAYSN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12687,
    "providerId": "DELGU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19949,
    "providerId": "DELSN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14751,
    "providerId": "DALXC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13999,
    "providerId": "DALXS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18635,
    "providerId": "DELMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20097,
    "providerId": "DELAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12686,
    "providerId": "DAYTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12683,
    "providerId": "DAYOH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5450,
    "providerId": "DALWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18631,
    "providerId": "DALWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14229,
    "providerId": "DARCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12682,
    "providerId": "DAYML",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12503,
    "providerId": "DAYCL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12680,
    "providerId": "DAYCS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18636,
    "providerId": "DELSW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12505,
    "providerId": "DECDE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14482,
    "providerId": "DAYJV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14753,
    "providerId": "DAYCF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14796,
    "providerId": "DEDJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13990,
    "providerId": "DENAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14241,
    "providerId": "DALWX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18314,
    "providerId": "DELFN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20089,
    "providerId": "DELBL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18542,
    "providerId": "DENMG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12691,
    "providerId": "DENAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13483,
    "providerId": "DENDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14067,
    "providerId": "DENLT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12702,
    "providerId": "DENCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12697,
    "providerId": "DENFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5153,
    "providerId": "DENDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12701,
    "providerId": "DENLG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20137,
    "providerId": "DENGP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12509,
    "providerId": "DENDA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12700,
    "providerId": "DENIA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12703,
    "providerId": "DENIV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12512,
    "providerId": "DENJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15275,
    "providerId": "DENOO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14704,
    "providerId": "DENNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14797,
    "providerId": "DENMW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12506,
    "providerId": "DENBD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17024,
    "providerId": "DENAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20098,
    "providerId": "DENAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12705,
    "providerId": "DENLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14264,
    "providerId": "DENCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17030,
    "providerId": "DENDW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19658,
    "providerId": "DENDW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12698,
    "providerId": "DENGL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12692,
    "providerId": "DENBL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15274,
    "providerId": "DENOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12699,
    "providerId": "DENGO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13708,
    "providerId": "DENAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12704,
    "providerId": "DENLK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12507,
    "providerId": "DENAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4853,
    "providerId": "DENEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20105,
    "providerId": "DENEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18643,
    "providerId": "DENMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12693,
    "providerId": "DENBO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12511,
    "providerId": "DENIR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12689,
    "providerId": "DENAU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9104,
    "providerId": "DENCB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12690,
    "providerId": "DENAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12514,
    "providerId": "DENMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12694,
    "providerId": "DENCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12508,
    "providerId": "DENFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4898,
    "providerId": "DENAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18638,
    "providerId": "DENAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12696,
    "providerId": "DENFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12510,
    "providerId": "DENCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12815,
    "providerId": "DFWAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12714,
    "providerId": "DENWM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12816,
    "providerId": "DFWAR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13992,
    "providerId": "DENTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15399,
    "providerId": "DFWBU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19546,
    "providerId": "DFWAH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14175,
    "providerId": "DENRE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12709,
    "providerId": "DENSD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4761,
    "providerId": "DENWW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18645,
    "providerId": "DENWW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12869,
    "providerId": "DFWAS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14705,
    "providerId": "DFWAT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12706,
    "providerId": "DENRK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14243,
    "providerId": "DFWCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5458,
    "providerId": "DENWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18644,
    "providerId": "DENWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12818,
    "providerId": "DFWCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7159,
    "providerId": "DENWR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5012,
    "providerId": "DENSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12868,
    "providerId": "DETLV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12716,
    "providerId": "DFWAM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4844,
    "providerId": "DFWAI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12707,
    "providerId": "DENRD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9435,
    "providerId": "DENTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12715,
    "providerId": "DENWT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12817,
    "providerId": "DFWCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12712,
    "providerId": "DENVN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12708,
    "providerId": "DENTC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13434,
    "providerId": "DENRS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19237,
    "providerId": "DENSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21817,
    "providerId": "DENSV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11052,
    "providerId": "DENRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12866,
    "providerId": "DENRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12711,
    "providerId": "DENTA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19042,
    "providerId": "DFWAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12867,
    "providerId": "DENSE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12710,
    "providerId": "DENSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12713,
    "providerId": "DENWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19561,
    "providerId": "DMMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12823,
    "providerId": "DFWWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12821,
    "providerId": "DFWUN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12873,
    "providerId": "DFWTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14552,
    "providerId": "DFWRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19423,
    "providerId": "DFWFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12822,
    "providerId": "DHNRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14957,
    "providerId": "DFWOS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14955,
    "providerId": "DFWGV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14489,
    "providerId": "DHNET",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14798,
    "providerId": "DLSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15358,
    "providerId": "DMOFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12820,
    "providerId": "DFWMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12515,
    "providerId": "DFWMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17034,
    "providerId": "DFWWA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18646,
    "providerId": "DFWWA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19688,
    "providerId": "DHADL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20103,
    "providerId": "DLCAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12516,
    "providerId": "DFWSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19593,
    "providerId": "DFWEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5127,
    "providerId": "DLHSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5131,
    "providerId": "DFWDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19935,
    "providerId": "DFWFA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14554,
    "providerId": "DIKTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12819,
    "providerId": "DFWFC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12871,
    "providerId": "DFWDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18647,
    "providerId": "DHAMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12870,
    "providerId": "DFWJR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12824,
    "providerId": "DFWUV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19326,
    "providerId": "DLCLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11622,
    "providerId": "DOHRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18315,
    "providerId": "DPSFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4680,
    "providerId": "DOHXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11541,
    "providerId": "DOVRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11619,
    "providerId": "DOVFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14174,
    "providerId": "DPSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11620,
    "providerId": "DOHSQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13709,
    "providerId": "DPSAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15490,
    "providerId": "DPSCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18933,
    "providerId": "DPSKF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19039,
    "providerId": "DPSEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11623,
    "providerId": "DPSBG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14179,
    "providerId": "DOHMQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19523,
    "providerId": "DOHSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19016,
    "providerId": "DPSKS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4679,
    "providerId": "DOHWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18660,
    "providerId": "DOHWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18661,
    "providerId": "DOHWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12827,
    "providerId": "DOHMC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19960,
    "providerId": "DQASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9737,
    "providerId": "DRSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13985,
    "providerId": "DRSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11626,
    "providerId": "DSMIA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14625,
    "providerId": "DSMAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14484,
    "providerId": "DSMTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18353,
    "providerId": "DPSTP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11625,
    "providerId": "DSMSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14122,
    "providerId": "DSMRD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18764,
    "providerId": "DPSWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19141,
    "providerId": "DPSXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11624,
    "providerId": "DSMCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20073,
    "providerId": "DSMEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18765,
    "providerId": "DPSWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14601,
    "providerId": "DSMUD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14242,
    "providerId": "DPSUW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15276,
    "providerId": "DPSMV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5449,
    "providerId": "DPSLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18970,
    "providerId": "DPSLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14285,
    "providerId": "DPSSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11546,
    "providerId": "DSMUR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11621,
    "providerId": "DSMAN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11545,
    "providerId": "DSMRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14761,
    "providerId": "DPSSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11627,
    "providerId": "DSMWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8782,
    "providerId": "DSMAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11583,
    "providerId": "DTTDB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18648,
    "providerId": "DPSMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14710,
    "providerId": "DROFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14390,
    "providerId": "DRSAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14759,
    "providerId": "DPSUB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14709,
    "providerId": "DTTTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11582,
    "providerId": "DSMWD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19526,
    "providerId": "DSMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18651,
    "providerId": "DTWMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2093,
    "providerId": "DTWMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4820,
    "providerId": "DTWMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11618,
    "providerId": "DRORI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11547,
    "providerId": "DTTTR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15256,
    "providerId": "DTWRI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13983,
    "providerId": "DTWXC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11551,
    "providerId": "DTWTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19239,
    "providerId": "DTWEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13984,
    "providerId": "DTWYC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4773,
    "providerId": "DTWFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15311,
    "providerId": "DTTWR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19594,
    "providerId": "DTWFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14296,
    "providerId": "DTWTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11658,
    "providerId": "DTWRM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11628,
    "providerId": "DTWCP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11657,
    "providerId": "DTWTD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18941,
    "providerId": "DTWOS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11548,
    "providerId": "DTWBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11654,
    "providerId": "DTWNV",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 5170,
    "providerId": "DTWAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11587,
    "providerId": "DTWAB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11653,
    "providerId": "DTWFL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11591,
    "providerId": "DTWSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11629,
    "providerId": "DTWCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18907,
    "providerId": "DTWDE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11652,
    "providerId": "DTWDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5045,
    "providerId": "DTWWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18652,
    "providerId": "DTWWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14956,
    "providerId": "DTWTA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11593,
    "providerId": "DTWUT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11550,
    "providerId": "DTWRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11641,
    "providerId": "DTWDI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11660,
    "providerId": "DTWTU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5506,
    "providerId": "DTWMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11589,
    "providerId": "DTWNO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11588,
    "providerId": "DTWDC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15360,
    "providerId": "DTWMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11655,
    "providerId": "DTWPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14068,
    "providerId": "DTWFT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11586,
    "providerId": "DTWAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11590,
    "providerId": "DTWPO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4824,
    "providerId": "DTWCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18650,
    "providerId": "DTWCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11549,
    "providerId": "DTWSL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11592,
    "providerId": "DTWTS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20980,
    "providerId": "DTWFH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14814,
    "providerId": "DURMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11659,
    "providerId": "DUBDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19867,
    "providerId": "DUBDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4929,
    "providerId": "DXBML",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18655,
    "providerId": "DXBMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18662,
    "providerId": "DXBMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11666,
    "providerId": "DXBCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19436,
    "providerId": "DUSSO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4728,
    "providerId": "DUSSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14112,
    "providerId": "DXBMH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11669,
    "providerId": "DXBRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18654,
    "providerId": "DXBJS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14152,
    "providerId": "DURKA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18406,
    "providerId": "DXBDF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11670,
    "providerId": "DXBHR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19330,
    "providerId": "DUBAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18656,
    "providerId": "DXBMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11516,
    "providerId": "DXBBG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14246,
    "providerId": "DXBBB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14056,
    "providerId": "DXBLV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19660,
    "providerId": "DXBEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6780,
    "providerId": "DXBFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14176,
    "providerId": "DXBHG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14395,
    "providerId": "DUBAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18657,
    "providerId": "DUBWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11560,
    "providerId": "DXBIF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18658,
    "providerId": "DXBBM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14376,
    "providerId": "DURED",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19328,
    "providerId": "DXBDE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14190,
    "providerId": "DURUR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14365,
    "providerId": "DURUM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4647,
    "providerId": "DXBAM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20081,
    "providerId": "DXBAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4904,
    "providerId": "DXBGH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20059,
    "providerId": "DXBGL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13432,
    "providerId": "DUJFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13436,
    "providerId": "DXBJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14780,
    "providerId": "DXBAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19063,
    "providerId": "DXBAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11594,
    "providerId": "DUSHF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19686,
    "providerId": "DXBIZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18653,
    "providerId": "DXBFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11060,
    "providerId": "DXBRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11661,
    "providerId": "DUSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11553,
    "providerId": "DXBAE",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11689,
    "providerId": "EKOTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11676,
    "providerId": "EARKF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11552,
    "providerId": "EATWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19265,
    "providerId": "DXBTP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11690,
    "providerId": "EMALM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11688,
    "providerId": "EGECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18909,
    "providerId": "EGEAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11678,
    "providerId": "EDIEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11556,
    "providerId": "EISAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4726,
    "providerId": "EBBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15260,
    "providerId": "EDIHW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18403,
    "providerId": "EDISI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15361,
    "providerId": "EATML",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14120,
    "providerId": "ELPTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11599,
    "providerId": "EGERI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13441,
    "providerId": "ELMHH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18380,
    "providerId": "DXBSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14808,
    "providerId": "ELPFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11601,
    "providerId": "EMAGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14231,
    "providerId": "EBBKA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11596,
    "providerId": "DXRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18817,
    "providerId": "EGESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10831,
    "providerId": "ELPTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13440,
    "providerId": "EDIAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11598,
    "providerId": "EDIRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14712,
    "providerId": "EDICY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19635,
    "providerId": "DXBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11370,
    "providerId": "ELHAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15468,
    "providerId": "ELHAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19275,
    "providerId": "ELPAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14602,
    "providerId": "EBBEN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14839,
    "providerId": "EAUFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11597,
    "providerId": "DXRSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19307,
    "providerId": "EASLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14373,
    "providerId": "ELMCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14247,
    "providerId": "ELPCE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11600,
    "providerId": "ELPCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11695,
    "providerId": "EWBRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19410,
    "providerId": "ESBLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11557,
    "providerId": "EVVFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11603,
    "providerId": "EMLBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11697,
    "providerId": "EWRBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11696,
    "providerId": "EWRAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11691,
    "providerId": "ERISH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14245,
    "providerId": "EWRDO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13463,
    "providerId": "EWNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14964,
    "providerId": "EMLAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11701,
    "providerId": "EWRED",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15363,
    "providerId": "EUGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14448,
    "providerId": "EWRCU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11694,
    "providerId": "EVVTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11698,
    "providerId": "EWRCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14422,
    "providerId": "ESNFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21025,
    "providerId": "ERFAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11559,
    "providerId": "EWRBK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11604,
    "providerId": "EWRBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15357,
    "providerId": "EUGCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13469,
    "providerId": "EWRDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11602,
    "providerId": "ERIFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6636,
    "providerId": "ERISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11692,
    "providerId": "ESBJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11554,
    "providerId": "EMVFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13740,
    "providerId": "EWRBG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18949,
    "providerId": "ESBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11558,
    "providerId": "EWNSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14069,
    "providerId": "ERIDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19677,
    "providerId": "EVNLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14799,
    "providerId": "ERVFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13977,
    "providerId": "EWBBW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11606,
    "providerId": "EWRCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11563,
    "providerId": "EWREB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13739,
    "providerId": "EVNTK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11693,
    "providerId": "EVNMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11555,
    "providerId": "EVVPC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11562,
    "providerId": "EWRHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11808,
    "providerId": "EWRSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7265,
    "providerId": "EWRWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11564,
    "providerId": "EWRPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11708,
    "providerId": "EWREZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5044,
    "providerId": "EWRSL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11712,
    "providerId": "EWRGP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9190,
    "providerId": "EWRPX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14958,
    "providerId": "EWRPX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11561,
    "providerId": "EWRMW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11809,
    "providerId": "EWRTC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11565,
    "providerId": "EWRNP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5122,
    "providerId": "EWRHB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18659,
    "providerId": "EWRHB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4832,
    "providerId": "EWRWJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18663,
    "providerId": "EWRWJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18407,
    "providerId": "EWRRS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12065,
    "providerId": "EWRPP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12071,
    "providerId": "EWRPY",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11611,
    "providerId": "EWROG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11610,
    "providerId": "EWRRB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11609,
    "providerId": "EWRWY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11605,
    "providerId": "EWRFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15277,
    "providerId": "EWRNB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14153,
    "providerId": "EWRJR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4753,
    "providerId": "EWRES",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12064,
    "providerId": "EWRPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15278,
    "providerId": "EWRWN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11056,
    "providerId": "EYWMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4750,
    "providerId": "EWRSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11711,
    "providerId": "EWRFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5086,
    "providerId": "EWRWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12076,
    "providerId": "EWRNJ",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11054,
    "providerId": "EYWFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11568,
    "providerId": "EWRWT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12110,
    "providerId": "EWRNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19088,
    "providerId": "EWREL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11810,
    "providerId": "EWRSA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11608,
    "providerId": "EWRML",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18664,
    "providerId": "EWRWM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7012,
    "providerId": "EWRFB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14966,
    "providerId": "EWRFB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11607,
    "providerId": "EWRMA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11612,
    "providerId": "EWRNR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6126,
    "providerId": "EYWFK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11078,
    "providerId": "EYWFK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12117,
    "providerId": "EWRMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15254,
    "providerId": "EWRSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11566,
    "providerId": "EWRSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4950,
    "providerId": "FAREL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14815,
    "providerId": "FCBCL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11713,
    "providerId": "FARCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11197,
    "providerId": "FLLBP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11614,
    "providerId": "FLGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4673,
    "providerId": "FJRMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18971,
    "providerId": "FAOPC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14805,
    "providerId": "FAYFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11715,
    "providerId": "FLLAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13974,
    "providerId": "FKBAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11714,
    "providerId": "FAYCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14626,
    "providerId": "FEZMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13971,
    "providerId": "FHKSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14035,
    "providerId": "FAYRH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14162,
    "providerId": "FAYSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14160,
    "providerId": "FHKFR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8813,
    "providerId": "FATAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11196,
    "providerId": "FLLCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11194,
    "providerId": "FLLBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11615,
    "providerId": "FLGSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14286,
    "providerId": "FAYSL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11613,
    "providerId": "FAYSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14959,
    "providerId": "FAYDN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19491,
    "providerId": "FAOLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11716,
    "providerId": "FKRCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13970,
    "providerId": "FCASH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11191,
    "providerId": "FLLCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4979,
    "providerId": "FARFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13975,
    "providerId": "FKLTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11569,
    "providerId": "FAYLB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13466,
    "providerId": "FARRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18993,
    "providerId": "FAOPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13976,
    "providerId": "FLGCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12067,
    "providerId": "FLLTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11813,
    "providerId": "FLLMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19143,
    "providerId": "FLRXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14364,
    "providerId": "FLOTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18667,
    "providerId": "FLLWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12074,
    "providerId": "FLRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14257,
    "providerId": "FLRAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19128,
    "providerId": "FLLSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12068,
    "providerId": "FLLWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14800,
    "providerId": "FLLRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19124,
    "providerId": "FLLFC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 600,
    "providerId": "FLLHT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11812,
    "providerId": "FLLHT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12069,
    "providerId": "FMNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4442,
    "providerId": "FLLFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5490,
    "providerId": "FLLLW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18665,
    "providerId": "FLLLW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11617,
    "providerId": "FLLMM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18668,
    "providerId": "FLRWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11814,
    "providerId": "FLLMR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14605,
    "providerId": "FMNFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18316,
    "providerId": "FLLEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19131,
    "providerId": "FLLEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12072,
    "providerId": "FLORI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14000,
    "providerId": "FLLXB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11616,
    "providerId": "FLLCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11193,
    "providerId": "FLLCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18369,
    "providerId": "FLRFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13468,
    "providerId": "FLLPM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4770,
    "providerId": "FLLSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20990,
    "providerId": "FLLLD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11817,
    "providerId": "FLLPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11815,
    "providerId": "FLLOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11811,
    "providerId": "FLLDB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1447,
    "providerId": "FLLWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18666,
    "providerId": "FLLWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14180,
    "providerId": "FLLNE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14502,
    "providerId": "FLLPE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12070,
    "providerId": "FLLPT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11084,
    "providerId": "FLLRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11816,
    "providerId": "FLLPB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12077,
    "providerId": "FNTFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11265,
    "providerId": "FLLSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12073,
    "providerId": "FMNTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14960,
    "providerId": "FSTFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4924,
    "providerId": "FRAEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19418,
    "providerId": "FRAEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12079,
    "providerId": "FTCCO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14172,
    "providerId": "FRAMZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19974,
    "providerId": "FOCSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21723,
    "providerId": "FTCTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14166,
    "providerId": "FSZIZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4669,
    "providerId": "FRAMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18670,
    "providerId": "FRAMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12081,
    "providerId": "FSMRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5034,
    "providerId": "FSDSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4713,
    "providerId": "FRAIO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12075,
    "providerId": "FOECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12078,
    "providerId": "FRADT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19173,
    "providerId": "FUESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14020,
    "providerId": "FRAOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18669,
    "providerId": "FOCFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12083,
    "providerId": "FTCCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19595,
    "providerId": "FUOAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14087,
    "providerId": "FRAOE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15279,
    "providerId": "FRAOH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12082,
    "providerId": "FTCLV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18908,
    "providerId": "FTCAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4723,
    "providerId": "FRAAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4710,
    "providerId": "FRAWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18671,
    "providerId": "FRAWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14813,
    "providerId": "FWASW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14965,
    "providerId": "GEOMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14320,
    "providerId": "GBRFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12090,
    "providerId": "GEGFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14206,
    "providerId": "GFLCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12091,
    "providerId": "GCMGC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14659,
    "providerId": "GEGAT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12092,
    "providerId": "GFKGF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12080,
    "providerId": "FWAFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19575,
    "providerId": "FUOSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14115,
    "providerId": "GEGAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12100,
    "providerId": "GJTSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12086,
    "providerId": "GJTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12098,
    "providerId": "GJTRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14952,
    "providerId": "GFKEG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14039,
    "providerId": "GBRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15280,
    "providerId": "GDLAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14258,
    "providerId": "FUOCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14178,
    "providerId": "GIZCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19617,
    "providerId": "FUOEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14177,
    "providerId": "GDNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14654,
    "providerId": "GEGAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14248,
    "providerId": "GHMDK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14657,
    "providerId": "GEGAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19723,
    "providerId": "FYVEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14963,
    "providerId": "GDLAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12087,
    "providerId": "FYVBN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14288,
    "providerId": "GCKTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11048,
    "providerId": "GCMRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13978,
    "providerId": "GCCTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14181,
    "providerId": "GIZRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4946,
    "providerId": "GDLWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18673,
    "providerId": "GDLWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12085,
    "providerId": "FYVSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12089,
    "providerId": "GJTFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18502,
    "providerId": "GDNSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12088,
    "providerId": "FWARI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12084,
    "providerId": "GEGCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18672,
    "providerId": "GCMMI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4613,
    "providerId": "GCMMI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15336,
    "providerId": "GDNMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14711,
    "providerId": "GLACA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12101,
    "providerId": "GNVLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14354,
    "providerId": "GRJFO",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 15255,
    "providerId": "GPTRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14403,
    "providerId": "GOJCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19129,
    "providerId": "GOJSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18675,
    "providerId": "GOIWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19411,
    "providerId": "GLALC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14088,
    "providerId": "GLZAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8267,
    "providerId": "GNVSW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14627,
    "providerId": "GRBDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12096,
    "providerId": "GNVOC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12105,
    "providerId": "GOAGE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12108,
    "providerId": "GPTBN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12104,
    "providerId": "GNVSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18674,
    "providerId": "GOIMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12093,
    "providerId": "GNVGI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13470,
    "providerId": "GLSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12106,
    "providerId": "GONCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14205,
    "providerId": "GNVNW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12113,
    "providerId": "GRIGI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12102,
    "providerId": "GLADT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20321,
    "providerId": "GONSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12111,
    "providerId": "GRBFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12094,
    "providerId": "GNEMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5487,
    "providerId": "GRBAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19459,
    "providerId": "GRBAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12107,
    "providerId": "GONMM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13737,
    "providerId": "GLSTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12099,
    "providerId": "GNVRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4878,
    "providerId": "GLSFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12103,
    "providerId": "GOIMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15362,
    "providerId": "GLRFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19169,
    "providerId": "GNVAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14416,
    "providerId": "GRBSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12095,
    "providerId": "GNVFO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19977,
    "providerId": "GSOSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12114,
    "providerId": "GRRDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12127,
    "providerId": "GSOGA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12125,
    "providerId": "GSOCA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15337,
    "providerId": "GTLFG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12134,
    "providerId": "GSPPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18439,
    "providerId": "GSOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14685,
    "providerId": "GUACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14553,
    "providerId": "GRRCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15261,
    "providerId": "GUAAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14505,
    "providerId": "GRJMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12120,
    "providerId": "GRRPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12130,
    "providerId": "GSPCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12135,
    "providerId": "GTRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20957,
    "providerId": "GSOHA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12126,
    "providerId": "GSOAB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20064,
    "providerId": "GSPAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12132,
    "providerId": "GSPGD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12131,
    "providerId": "GSPAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12115,
    "providerId": "GRRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12118,
    "providerId": "GRRJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14804,
    "providerId": "GTRCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14123,
    "providerId": "GTLCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12133,
    "providerId": "GSPPH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12122,
    "providerId": "GRRSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12112,
    "providerId": "GRRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12124,
    "providerId": "GRXPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12128,
    "providerId": "GSOGW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14347,
    "providerId": "GRJQU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12129,
    "providerId": "GSOBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14511,
    "providerId": "GTRSV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8211,
    "providerId": "GSPGR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14311,
    "providerId": "GRJRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15398,
    "providerId": "GSPSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14362,
    "providerId": "GRJKI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12123,
    "providerId": "GSOAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14634,
    "providerId": "GRRRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18450,
    "providerId": "HAMTX",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14250,
    "providerId": "HAKRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13476,
    "providerId": "HARHS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18678,
    "providerId": "HAMMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4671,
    "providerId": "HAMMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19976,
    "providerId": "HAKSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4816,
    "providerId": "HARSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18455,
    "providerId": "HANHS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14200,
    "providerId": "HANJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2309,
    "providerId": "HAFRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11040,
    "providerId": "HAFRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12142,
    "providerId": "HARNC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12147,
    "providerId": "HARYK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14630,
    "providerId": "GUPSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14361,
    "providerId": "GYDPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5486,
    "providerId": "GWYSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14185,
    "providerId": "GYDAK",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12141,
    "providerId": "HARFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12146,
    "providerId": "HAMCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12136,
    "providerId": "GUWBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14249,
    "providerId": "HAKMH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12137,
    "providerId": "GYECY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20863,
    "providerId": "GVAAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18677,
    "providerId": "GVAWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14809,
    "providerId": "HAKMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12145,
    "providerId": "HARWM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12143,
    "providerId": "HAMRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18679,
    "providerId": "HAMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14023,
    "providerId": "HARCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19479,
    "providerId": "GYDBS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14290,
    "providerId": "HARSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14270,
    "providerId": "GYDCS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19691,
    "providerId": "HAJSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18676,
    "providerId": "GUAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14423,
    "providerId": "HARMT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12140,
    "providerId": "HAMDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19027,
    "providerId": "GYESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12139,
    "providerId": "GYDJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12138,
    "providerId": "HARET",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20039,
    "providerId": "GVALC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14184,
    "providerId": "GYDIB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12144,
    "providerId": "HARGT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18806,
    "providerId": "GUMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20994,
    "providerId": "HHNAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19080,
    "providerId": "HGHLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14631,
    "providerId": "HGHXN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14498,
    "providerId": "HARYT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19309,
    "providerId": "HHQSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12152,
    "providerId": "HGRHT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14689,
    "providerId": "HGRMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12155,
    "providerId": "HHHHR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12156,
    "providerId": "HHHHT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12157,
    "providerId": "HHHMO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4961,
    "providerId": "HERLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19193,
    "providerId": "HERLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12153,
    "providerId": "HGRSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18453,
    "providerId": "HKDFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12161,
    "providerId": "HKGAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19980,
    "providerId": "HFESI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19791,
    "providerId": "HKDSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19238,
    "providerId": "HIJSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12154,
    "providerId": "HHHBB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18457,
    "providerId": "HGHHS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14977,
    "providerId": "HERDO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14801,
    "providerId": "HDCCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19325,
    "providerId": "HFEHF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12162,
    "providerId": "HKGCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18680,
    "providerId": "HFEWI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19924,
    "providerId": "HGHFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18296,
    "providerId": "HAVFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18807,
    "providerId": "HFEFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21026,
    "providerId": "HELTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14562,
    "providerId": "HERAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14658,
    "providerId": "HHQMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12151,
    "providerId": "HGHJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12148,
    "providerId": "HDBMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12160,
    "providerId": "HHHSF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14358,
    "providerId": "HGHAJ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12159,
    "providerId": "HHHVI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20958,
    "providerId": "HBGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18681,
    "providerId": "HHHWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19981,
    "providerId": "HGHQS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14565,
    "providerId": "HBGTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12158,
    "providerId": "HHHPT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19308,
    "providerId": "HHQPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12149,
    "providerId": "HGHCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15281,
    "providerId": "HDBOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19978,
    "providerId": "HETSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12150,
    "providerId": "HEVHU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12180,
    "providerId": "HNMMH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12181,
    "providerId": "HNMMH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 1460,
    "providerId": "HNLLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12170,
    "providerId": "HKYCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12164,
    "providerId": "HKTBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14156,
    "providerId": "HKTNB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6464,
    "providerId": "HNLOW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3717,
    "providerId": "HNMMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12169,
    "providerId": "HKTPB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2128,
    "providerId": "HNMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12174,
    "providerId": "HNLKO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14044,
    "providerId": "HKTMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12168,
    "providerId": "HKYBN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12165,
    "providerId": "HKGHV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2124,
    "providerId": "HNLWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6465,
    "providerId": "HNLOA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14560,
    "providerId": "HNMRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12166,
    "providerId": "HKTJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12173,
    "providerId": "HKYSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11083,
    "providerId": "HNLAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12175,
    "providerId": "HNMMK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18438,
    "providerId": "HKGSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18683,
    "providerId": "HKGWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18682,
    "providerId": "HKGMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12163,
    "providerId": "HKGDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12167,
    "providerId": "HKTPA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18927,
    "providerId": "HNLKS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2129,
    "providerId": "HNMKW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18686,
    "providerId": "HNMKW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2130,
    "providerId": "HNMSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18685,
    "providerId": "HKTWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18684,
    "providerId": "HKTMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6785,
    "providerId": "HNLRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11080,
    "providerId": "HNLRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6602,
    "providerId": "HNLMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20960,
    "providerId": "HKYFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12171,
    "providerId": "HKYFY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14542,
    "providerId": "HMOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20961,
    "providerId": "HLNFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12172,
    "providerId": "HKTKL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18928,
    "providerId": "HNLWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2127,
    "providerId": "HNLWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12182,
    "providerId": "HOUBK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14424,
    "providerId": "HOUIW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5277,
    "providerId": "HOUDW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19527,
    "providerId": "HOUDW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14124,
    "providerId": "HOTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14426,
    "providerId": "HOUFH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15364,
    "providerId": "HOUCF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19888,
    "providerId": "HOUAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5515,
    "providerId": "HOUFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8234,
    "providerId": "HOUFM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5058,
    "providerId": "HOUBB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12191,
    "providerId": "HOUFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11195,
    "providerId": "HOUHH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12192,
    "providerId": "HOUFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5085,
    "providerId": "HOUGI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14632,
    "providerId": "HOUFX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14291,
    "providerId": "HOUIS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12190,
    "providerId": "HOUEN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14425,
    "providerId": "HOUCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13475,
    "providerId": "HOUCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12185,
    "providerId": "HOUCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12196,
    "providerId": "HOUGC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12183,
    "providerId": "HOUCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11200,
    "providerId": "HOUHW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11199,
    "providerId": "HOUHB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9763,
    "providerId": "HOUCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12193,
    "providerId": "HOUGL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19528,
    "providerId": "HOUEK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12184,
    "providerId": "HOUCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14806,
    "providerId": "HOBTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12188,
    "providerId": "HOUFC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19201,
    "providerId": "HOUEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5872,
    "providerId": "HOUGP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14428,
    "providerId": "HOUDJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11201,
    "providerId": "HOUIC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18808,
    "providerId": "HOUDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11192,
    "providerId": "HOUHA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12187,
    "providerId": "HOUEG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14421,
    "providerId": "HOULL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12253,
    "providerId": "HOUSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12263,
    "providerId": "HOUSW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14427,
    "providerId": "HOURN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5151,
    "providerId": "HOUMY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18689,
    "providerId": "HOUMY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12201,
    "providerId": "HOUKM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9757,
    "providerId": "HOUWC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12203,
    "providerId": "HOULN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14151,
    "providerId": "HOUTM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14802,
    "providerId": "HOUKW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12244,
    "providerId": "HOUNF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18687,
    "providerId": "HOUGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1795,
    "providerId": "HOUGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5041,
    "providerId": "HOUGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12186,
    "providerId": "HOUCV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12176,
    "providerId": "HOUCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12189,
    "providerId": "HOUDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4826,
    "providerId": "HOUGF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5459,
    "providerId": "HOUHG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5042,
    "providerId": "HOUOW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18688,
    "providerId": "HOUOW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14851,
    "providerId": "HOUSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12256,
    "providerId": "HOURP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12260,
    "providerId": "HOUSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12200,
    "providerId": "HOUTP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12259,
    "providerId": "HOURD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12199,
    "providerId": "HOUTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12265,
    "providerId": "HOUTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12224,
    "providerId": "HOUMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12198,
    "providerId": "HOUTS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18543,
    "providerId": "HOUMG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14070,
    "providerId": "HOUPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12264,
    "providerId": "HOUTA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14429,
    "providerId": "HOUPG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14220,
    "providerId": "HOUPD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8238,
    "providerId": "HOUWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14858,
    "providerId": "HOUPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12245,
    "providerId": "HOUPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12197,
    "providerId": "HOUTN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12255,
    "providerId": "HOURB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12204,
    "providerId": "HOULD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12195,
    "providerId": "HOUJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14121,
    "providerId": "HOUKY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14633,
    "providerId": "HOUMQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9756,
    "providerId": "HOUTC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12221,
    "providerId": "HOUMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12262,
    "providerId": "HOUSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8235,
    "providerId": "HOUSL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14289,
    "providerId": "HOUTE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12261,
    "providerId": "HOUSG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12239,
    "providerId": "HOUMW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7425,
    "providerId": "HOUKF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5036,
    "providerId": "HOUSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12209,
    "providerId": "HPNSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14071,
    "providerId": "HOUXP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19727,
    "providerId": "HRBXS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12216,
    "providerId": "HSVDC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19043,
    "providerId": "HSVEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14445,
    "providerId": "HPNOB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12215,
    "providerId": "HSVRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4846,
    "providerId": "HOUWH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18690,
    "providerId": "HOUWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14251,
    "providerId": "HSVHW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12206,
    "providerId": "HOUWT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12202,
    "providerId": "HOUWK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12213,
    "providerId": "HSVFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14894,
    "providerId": "HOUZN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12208,
    "providerId": "HPNRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19917,
    "providerId": "HSVFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19961,
    "providerId": "HRGSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19887,
    "providerId": "HOUXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18809,
    "providerId": "HSNSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12212,
    "providerId": "HSVCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12207,
    "providerId": "HPNTR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15295,
    "providerId": "HPNYK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19345,
    "providerId": "HRGSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12210,
    "providerId": "HPNNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14018,
    "providerId": "HPNYC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12214,
    "providerId": "HRGEG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13477,
    "providerId": "HSVAT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13967,
    "providerId": "HOUYP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12219,
    "providerId": "HSVWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12223,
    "providerId": "HPNGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5105,
    "providerId": "HPNSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12211,
    "providerId": "HOUWL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12205,
    "providerId": "HOUWM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5106,
    "providerId": "HSVWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18692,
    "providerId": "HSVWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18691,
    "providerId": "HSNWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14849,
    "providerId": "HOUZD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12217,
    "providerId": "HSVSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14635,
    "providerId": "HOUXN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19962,
    "providerId": "HUZHS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20046,
    "providerId": "IADAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12230,
    "providerId": "IADAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18693,
    "providerId": "HYDWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15572,
    "providerId": "HYNFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12237,
    "providerId": "IADFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12226,
    "providerId": "HYDMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12227,
    "providerId": "HYDCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12222,
    "providerId": "HVNCO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18767,
    "providerId": "HUZLM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15573,
    "providerId": "HUZFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20106,
    "providerId": "HYDLK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19081,
    "providerId": "HYDLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12248,
    "providerId": "IADSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12225,
    "providerId": "HVNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12220,
    "providerId": "HUZBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12243,
    "providerId": "IADRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12234,
    "providerId": "IADCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12236,
    "providerId": "IADDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18910,
    "providerId": "IADHE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14690,
    "providerId": "HYNMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12235,
    "providerId": "IADFL",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18408,
    "providerId": "HYDSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14359,
    "providerId": "HZVPR",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12238,
    "providerId": "IADFO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12233,
    "providerId": "IADAS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12242,
    "providerId": "IADHR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12228,
    "providerId": "HYACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12231,
    "providerId": "IADCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12218,
    "providerId": "HTSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13968,
    "providerId": "HVNUN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12229,
    "providerId": "HYSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12241,
    "providerId": "IADRF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14546,
    "providerId": "HYAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16989,
    "providerId": "HVNFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19936,
    "providerId": "HVNFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14896,
    "providerId": "HUZCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12240,
    "providerId": "IADHC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20602,
    "providerId": "HVNWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12254,
    "providerId": "HVNFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13507,
    "providerId": "IDARI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19449,
    "providerId": "IEVAL",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13901,
    "providerId": "IAHCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4818,
    "providerId": "IAGSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18945,
    "providerId": "IAGFV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11117,
    "providerId": "IAGNF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12305,
    "providerId": "ICTFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12273,
    "providerId": "ILERI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12247,
    "providerId": "IADST",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13735,
    "providerId": "ILECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12270,
    "providerId": "IGMSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14852,
    "providerId": "ICTWW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12272,
    "providerId": "IKTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12266,
    "providerId": "IAHSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19940,
    "providerId": "IAHFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5167,
    "providerId": "IAGAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2272,
    "providerId": "IAGMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11153,
    "providerId": "IAGMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12252,
    "providerId": "IAGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20047,
    "providerId": "ICTAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12258,
    "providerId": "IAHAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12251,
    "providerId": "IADWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13748,
    "providerId": "ICTHU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4986,
    "providerId": "IAHWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18695,
    "providerId": "IAHWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14446,
    "providerId": "IERFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15365,
    "providerId": "IAHCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12271,
    "providerId": "IDARX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12274,
    "providerId": "ILDBA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12249,
    "providerId": "IADTC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15367,
    "providerId": "IAGNY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5056,
    "providerId": "IADWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18694,
    "providerId": "IADWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14252,
    "providerId": "IDRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20956,
    "providerId": "IBZWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12267,
    "providerId": "ICTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5348,
    "providerId": "ILEGT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14817,
    "providerId": "ICTAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18697,
    "providerId": "ILPMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20962,
    "providerId": "INDFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12292,
    "providerId": "INDMN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12282,
    "providerId": "INDCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12277,
    "providerId": "ILMCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15283,
    "providerId": "INDIF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12269,
    "providerId": "IDAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12250,
    "providerId": "IADXM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19529,
    "providerId": "IAGFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14555,
    "providerId": "IAGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15366,
    "providerId": "IDASH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12268,
    "providerId": "ICTWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12279,
    "providerId": "INDAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12284,
    "providerId": "INDCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5877,
    "providerId": "INDAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15282,
    "providerId": "ILGWD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14431,
    "providerId": "ILMSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14125,
    "providerId": "ILMWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18911,
    "providerId": "ILGSS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19552,
    "providerId": "ILGSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12285,
    "providerId": "INDCT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5160,
    "providerId": "ILGFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12280,
    "providerId": "ILMWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12276,
    "providerId": "ILGWC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 2739,
    "providerId": "ILGSW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12283,
    "providerId": "INDCC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14182,
    "providerId": "INDIN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14221,
    "providerId": "ILGNC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18696,
    "providerId": "ILGWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5517,
    "providerId": "INDMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18698,
    "providerId": "INDMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12289,
    "providerId": "INDFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12288,
    "providerId": "INDFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12278,
    "providerId": "ILMRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12291,
    "providerId": "INDJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12287,
    "providerId": "INDFD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12307,
    "providerId": "INDES",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12281,
    "providerId": "INDBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12290,
    "providerId": "INDFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12286,
    "providerId": "INDDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12275,
    "providerId": "ILGTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12295,
    "providerId": "INDRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19692,
    "providerId": "ISPVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12308,
    "providerId": "IPLFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12302,
    "providerId": "INDTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12301,
    "providerId": "INDTH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14323,
    "providerId": "ISTAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12299,
    "providerId": "INDSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12294,
    "providerId": "INDNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12293,
    "providerId": "INDNB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12304,
    "providerId": "INTSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12297,
    "providerId": "INDSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12310,
    "providerId": "IPTTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19857,
    "providerId": "ISPFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14167,
    "providerId": "INTWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12312,
    "providerId": "ISPMF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12303,
    "providerId": "INDWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12313,
    "providerId": "ISPRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13478,
    "providerId": "IPTRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12296,
    "providerId": "INDSD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12306,
    "providerId": "INTUP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12298,
    "providerId": "INDSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12300,
    "providerId": "INDSP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19625,
    "providerId": "ISNFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12320,
    "providerId": "ISPSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16994,
    "providerId": "INDWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18699,
    "providerId": "INDWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12311,
    "providerId": "ISBPK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14892,
    "providerId": "ISPCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17032,
    "providerId": "INDSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19964,
    "providerId": "INDSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17033,
    "providerId": "INDSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19332,
    "providerId": "INDSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12309,
    "providerId": "IPLTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12319,
    "providerId": "JANFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12315,
    "providerId": "ISTMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2188,
    "providerId": "JAXAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12318,
    "providerId": "JAIMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19204,
    "providerId": "ISTXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12337,
    "providerId": "ISTBO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18702,
    "providerId": "JAIPU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12323,
    "providerId": "JANCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14850,
    "providerId": "ITHFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14694,
    "providerId": "ITHFL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14430,
    "providerId": "JANAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14455,
    "providerId": "JANSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12317,
    "providerId": "ISTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19475,
    "providerId": "JAILC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14637,
    "providerId": "JANMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19055,
    "providerId": "ISTAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14072,
    "providerId": "ITHMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12325,
    "providerId": "JANJN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19400,
    "providerId": "JAIFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12326,
    "providerId": "ISTRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4911,
    "providerId": "JAXBF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4970,
    "providerId": "ISTGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18393,
    "providerId": "ISTGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14692,
    "providerId": "IXGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12316,
    "providerId": "IXCJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18845,
    "providerId": "JAIMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12331,
    "providerId": "JAXBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13485,
    "providerId": "ISTDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18700,
    "providerId": "ISTMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12329,
    "providerId": "JAXBB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18703,
    "providerId": "JANWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14292,
    "providerId": "JANTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4678,
    "providerId": "ISTWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18701,
    "providerId": "ISTWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12324,
    "providerId": "JAXAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14628,
    "providerId": "JACSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20069,
    "providerId": "JAXAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12321,
    "providerId": "ISTRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12327,
    "providerId": "JAXAM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4589,
    "providerId": "JENSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 1338,
    "providerId": "JAXSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11263,
    "providerId": "JAXSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6846,
    "providerId": "JHMWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18706,
    "providerId": "JHMWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14951,
    "providerId": "JAXCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18704,
    "providerId": "JEDMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12344,
    "providerId": "JAXMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12333,
    "providerId": "JAXCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19937,
    "providerId": "JAXFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4591,
    "providerId": "JENVB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12334,
    "providerId": "JAXJK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12354,
    "providerId": "JKTJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18429,
    "providerId": "JIBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18705,
    "providerId": "JEDMM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19693,
    "providerId": "JKTAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12330,
    "providerId": "JAXCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12348,
    "providerId": "JENSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20963,
    "providerId": "JBRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12332,
    "providerId": "JAXCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12343,
    "providerId": "JAXSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12339,
    "providerId": "JAXTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20075,
    "providerId": "JAXTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18843,
    "providerId": "JEDMK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19002,
    "providerId": "JKTGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20143,
    "providerId": "JHGSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14723,
    "providerId": "JDHFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18498,
    "providerId": "JEDSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12342,
    "providerId": "JAXRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12336,
    "providerId": "JAXNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 44,
    "providerId": "JHMRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19938,
    "providerId": "JEDFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 612,
    "providerId": "JENCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12346,
    "providerId": "JENCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14253,
    "providerId": "JAXVS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14643,
    "providerId": "JEDRJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12338,
    "providerId": "JAXRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13479,
    "providerId": "JHBBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18486,
    "providerId": "JEDSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4799,
    "providerId": "JAXSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12340,
    "providerId": "JAXST",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12347,
    "providerId": "JENPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12356,
    "providerId": "JLPAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19648,
    "providerId": "JMKLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14368,
    "providerId": "KIMKI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14127,
    "providerId": "JMSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14188,
    "providerId": "JNBOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20889,
    "providerId": "JMKAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14099,
    "providerId": "JNBWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14051,
    "providerId": "JNBMI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14356,
    "providerId": "JNBTR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19240,
    "providerId": "JKTLC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14073,
    "providerId": "KGLMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18895,
    "providerId": "JOGSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18454,
    "providerId": "JROFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12353,
    "providerId": "JLNFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18708,
    "providerId": "JKTWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19939,
    "providerId": "JKTTF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14349,
    "providerId": "JNBBA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18707,
    "providerId": "JKTMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14265,
    "providerId": "JXNAB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19941,
    "providerId": "JNUFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21851,
    "providerId": "JNBRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18434,
    "providerId": "JNZSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18994,
    "providerId": "JTRML",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12357,
    "providerId": "KCKRO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19142,
    "providerId": "JTRLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14820,
    "providerId": "JNBPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12351,
    "providerId": "JKTPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5244,
    "providerId": "KBVRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19014,
    "providerId": "JKTTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14819,
    "providerId": "JNBKL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18810,
    "providerId": "KHNSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12352,
    "providerId": "JKTRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14353,
    "providerId": "JNBMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14641,
    "providerId": "JSAMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12350,
    "providerId": "JKTRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14821,
    "providerId": "JNBRO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14781,
    "providerId": "KTMFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12364,
    "providerId": "KWICY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12397,
    "providerId": "KWCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1499,
    "providerId": "KOAMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14103,
    "providerId": "KIWPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12381,
    "providerId": "KULDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11357,
    "providerId": "KINCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18709,
    "providerId": "KLXWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18459,
    "providerId": "KNASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12379,
    "providerId": "KULPG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6466,
    "providerId": "KOACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2602,
    "providerId": "KOAAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19082,
    "providerId": "KLXLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18713,
    "providerId": "KULWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18354,
    "providerId": "KLFFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12359,
    "providerId": "KWEBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19681,
    "providerId": "KRKSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18967,
    "providerId": "KULEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18711,
    "providerId": "KULDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14613,
    "providerId": "KOAMV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19269,
    "providerId": "KWIFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19093,
    "providerId": "KULXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2123,
    "providerId": "KOASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19618,
    "providerId": "KULAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18460,
    "providerId": "KULSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14461,
    "providerId": "KWCSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12389,
    "providerId": "KULRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18846,
    "providerId": "KULWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19984,
    "providerId": "KWESI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12392,
    "providerId": "KULRN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14045,
    "providerId": "KULAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14725,
    "providerId": "KULSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18712,
    "providerId": "KULMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12368,
    "providerId": "KUFBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16036,
    "providerId": "KOAWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18710,
    "providerId": "KOAWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18516,
    "providerId": "KULFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18410,
    "providerId": "KWLSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11121,
    "providerId": "LASFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19495,
    "providerId": "LAFFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5462,
    "providerId": "LASVW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11258,
    "providerId": "LASNW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12376,
    "providerId": "LASGV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14432,
    "providerId": "LANEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12369,
    "providerId": "LANFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14183,
    "providerId": "KWIRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4980,
    "providerId": "LASFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6904,
    "providerId": "LASFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4968,
    "providerId": "LASWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14660,
    "providerId": "LANDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12374,
    "providerId": "LARFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11123,
    "providerId": "LASNV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11202,
    "providerId": "LASBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12360,
    "providerId": "LAFFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20041,
    "providerId": "LASEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11204,
    "providerId": "LASFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11125,
    "providerId": "LASST",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11124,
    "providerId": "LASPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11256,
    "providerId": "LASJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12362,
    "providerId": "LAFCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12366,
    "providerId": "LAFTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12377,
    "providerId": "LASHD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12375,
    "providerId": "LASGR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12373,
    "providerId": "LANWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12371,
    "providerId": "LANTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12380,
    "providerId": "LASVN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6311,
    "providerId": "LASVG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11126,
    "providerId": "LASVG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11262,
    "providerId": "LASRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11203,
    "providerId": "LASCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11159,
    "providerId": "LASVR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19273,
    "providerId": "KWILC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12365,
    "providerId": "LAJCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19912,
    "providerId": "KWLFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12370,
    "providerId": "LANCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12378,
    "providerId": "LASHN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11120,
    "providerId": "LASCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11122,
    "providerId": "LASHH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12372,
    "providerId": "LANFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12367,
    "providerId": "KWIJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4315,
    "providerId": "LAXLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12385,
    "providerId": "LAWFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8927,
    "providerId": "LAXDB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12401,
    "providerId": "LAXMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12396,
    "providerId": "LAXHT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9426,
    "providerId": "LAXAD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12382,
    "providerId": "LAXBH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12391,
    "providerId": "LAXHH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5234,
    "providerId": "LAXDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6738,
    "providerId": "LAXHC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10765,
    "providerId": "LAXHC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6933,
    "providerId": "LAXAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8323,
    "providerId": "LAXCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14872,
    "providerId": "LAXMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12394,
    "providerId": "LAXCT",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 9352,
    "providerId": "LAXLM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12388,
    "providerId": "LAXCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13808,
    "providerId": "LAXLD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5477,
    "providerId": "LAXGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12399,
    "providerId": "LAXCV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12403,
    "providerId": "LAXNB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19274,
    "providerId": "LAXLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12395,
    "providerId": "LAXFL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12390,
    "providerId": "LAXHW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12383,
    "providerId": "LAWSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12400,
    "providerId": "LAXIR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11041,
    "providerId": "LAXLZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12398,
    "providerId": "LAXMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 410,
    "providerId": "LAXMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11044,
    "providerId": "LAXMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5460,
    "providerId": "LAXFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12387,
    "providerId": "LAXAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12393,
    "providerId": "LAXFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20352,
    "providerId": "LAXEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12404,
    "providerId": "LAXNC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 6813,
    "providerId": "LAXJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2752,
    "providerId": "LAXBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4580,
    "providerId": "LAXBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12384,
    "providerId": "LAXBP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9186,
    "providerId": "LAXFR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4548,
    "providerId": "LAXBV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11264,
    "providerId": "LAXOC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12386,
    "providerId": "LAXCA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12423,
    "providerId": "LEJDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12418,
    "providerId": "LCVBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14187,
    "providerId": "LAXRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12414,
    "providerId": "LBFFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12409,
    "providerId": "LAXTR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12416,
    "providerId": "LCHSL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14016,
    "providerId": "LCHTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12421,
    "providerId": "LEETS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14091,
    "providerId": "LAXRO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12464,
    "providerId": "LCHSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12406,
    "providerId": "LAXTO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14561,
    "providerId": "LCHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12415,
    "providerId": "LBADT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2470,
    "providerId": "LAXPW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18715,
    "providerId": "LAXPW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20042,
    "providerId": "LEBEL",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12408,
    "providerId": "LAXTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14539,
    "providerId": "LAXXL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14727,
    "providerId": "LBEBV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14855,
    "providerId": "LCHRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15369,
    "providerId": "LBBFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12422,
    "providerId": "LEDBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12420,
    "providerId": "LEDGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12413,
    "providerId": "LBEFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12405,
    "providerId": "LAXRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4718,
    "providerId": "LAXWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18716,
    "providerId": "LAXWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11267,
    "providerId": "LEDCY",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12417,
    "providerId": "LCGCO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12411,
    "providerId": "LBBTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12407,
    "providerId": "LAXSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14435,
    "providerId": "LBBDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5069,
    "providerId": "LAXSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5100,
    "providerId": "LAXSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18717,
    "providerId": "LEJWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3360,
    "providerId": "LAXWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4811,
    "providerId": "LAXWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 86,
    "providerId": "LAXWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4582,
    "providerId": "LAXWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12410,
    "providerId": "LAXWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12419,
    "providerId": "LEIAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12437,
    "providerId": "LGAQA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19530,
    "providerId": "LGBSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12436,
    "providerId": "LGAAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12433,
    "providerId": "LENPO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5501,
    "providerId": "LGKLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19366,
    "providerId": "LGKLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12445,
    "providerId": "LGVFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12435,
    "providerId": "LFTRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19095,
    "providerId": "LGKXR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14002,
    "providerId": "LEXTR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14438,
    "providerId": "LEXTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5037,
    "providerId": "LGBWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12432,
    "providerId": "LEXKN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12426,
    "providerId": "LEXGT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13480,
    "providerId": "LGBCL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12438,
    "providerId": "LGBCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20079,
    "providerId": "LGAAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12434,
    "providerId": "LEXKY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12444,
    "providerId": "LGVFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12424,
    "providerId": "LENAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12443,
    "providerId": "LGBRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12425,
    "providerId": "LEXRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12465,
    "providerId": "LEXSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20964,
    "providerId": "LEXFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19694,
    "providerId": "LGBFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14003,
    "providerId": "LGKRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18956,
    "providerId": "LGKAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18718,
    "providerId": "LGKWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12442,
    "providerId": "LGBCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14550,
    "providerId": "LGAEW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12427,
    "providerId": "LFTFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12440,
    "providerId": "LGBLB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4757,
    "providerId": "LGASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12429,
    "providerId": "LFTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12430,
    "providerId": "LEXFF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12439,
    "providerId": "LGAFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12428,
    "providerId": "LFTSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12441,
    "providerId": "LGBRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15296,
    "providerId": "LEXCE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19403,
    "providerId": "LHRSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12448,
    "providerId": "LHRSL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12455,
    "providerId": "LIHKA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18720,
    "providerId": "LIMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12447,
    "providerId": "LGWCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18721,
    "providerId": "LIRWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12463,
    "providerId": "LISRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18411,
    "providerId": "LISSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1502,
    "providerId": "LIHSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18532,
    "providerId": "LIMFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14838,
    "providerId": "LIREL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4383,
    "providerId": "LIREL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18563,
    "providerId": "LIMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19132,
    "providerId": "LISSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12457,
    "providerId": "LISDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20884,
    "providerId": "LITFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14464,
    "providerId": "LITBN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13457,
    "providerId": "LITRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5904,
    "providerId": "LITFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12454,
    "providerId": "LIHKN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14415,
    "providerId": "LIMLM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12453,
    "providerId": "LIHWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11082,
    "providerId": "LIHAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12451,
    "providerId": "LHRBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12458,
    "providerId": "LISPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12461,
    "providerId": "LITRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12452,
    "providerId": "LIHHI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12449,
    "providerId": "LHRHR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2054,
    "providerId": "LIHPW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12459,
    "providerId": "LITCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13741,
    "providerId": "LITPB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12456,
    "providerId": "LIMDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12913,
    "providerId": "LIRAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14301,
    "providerId": "LITCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12521,
    "providerId": "LONCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12518,
    "providerId": "LNZCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18723,
    "providerId": "LONPM",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20903,
    "providerId": "LONKB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13448,
    "providerId": "LONAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12462,
    "providerId": "LITSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13446,
    "providerId": "LONSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12524,
    "providerId": "LONLM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12519,
    "providerId": "LONBG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13481,
    "providerId": "LISAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19064,
    "providerId": "LIMRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12460,
    "providerId": "LITCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18412,
    "providerId": "LONGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12525,
    "providerId": "LONPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20965,
    "providerId": "LNSFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12522,
    "providerId": "LONDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19407,
    "providerId": "LONAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14901,
    "providerId": "LNKSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12531,
    "providerId": "LONGH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19241,
    "providerId": "LONIV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20904,
    "providerId": "LONDX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12747,
    "providerId": "LNSMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14663,
    "providerId": "LNSFL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18722,
    "providerId": "LONHW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12523,
    "providerId": "LONQL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13744,
    "providerId": "LNKCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12529,
    "providerId": "LONRP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12520,
    "providerId": "LONBH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15286,
    "providerId": "LONOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12753,
    "providerId": "LONPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13442,
    "providerId": "LNKFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 6814,
    "providerId": "LONEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18957,
    "providerId": "LONLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12528,
    "providerId": "LONTW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18362,
    "providerId": "LJUFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14728,
    "providerId": "LNKNO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14696,
    "providerId": "LKOFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12517,
    "providerId": "LNKRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14686,
    "providerId": "LONOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12527,
    "providerId": "LONMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14401,
    "providerId": "LKOBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12535,
    "providerId": "LONWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12749,
    "providerId": "LONWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14397,
    "providerId": "LYSMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20070,
    "providerId": "MAAAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14650,
    "providerId": "LUNLU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14823,
    "providerId": "LOSPK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14236,
    "providerId": "LUNTW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12536,
    "providerId": "LRUSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18297,
    "providerId": "LSQFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14436,
    "providerId": "LRDTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18569,
    "providerId": "LONTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14825,
    "providerId": "LOSPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12750,
    "providerId": "LPAAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4937,
    "providerId": "LPLAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18998,
    "providerId": "LPLAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12526,
    "providerId": "LPAGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14649,
    "providerId": "LUNLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12532,
    "providerId": "LRDFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14826,
    "providerId": "LUNCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19443,
    "providerId": "LONWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19695,
    "providerId": "LOSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14651,
    "providerId": "LVILI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12530,
    "providerId": "LRDCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14664,
    "providerId": "LONXE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12537,
    "providerId": "LYHSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15583,
    "providerId": "LOSFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19051,
    "providerId": "LONWT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12534,
    "providerId": "LRUFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12539,
    "providerId": "MAACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12538,
    "providerId": "LYHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20966,
    "providerId": "LWBFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12533,
    "providerId": "LPLLP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12748,
    "providerId": "LWCKS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15558,
    "providerId": "LPFFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19270,
    "providerId": "LOPSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14856,
    "providerId": "LYHFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14074,
    "providerId": "LSEFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14363,
    "providerId": "MADAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18383,
    "providerId": "MAAFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12569,
    "providerId": "MAFCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12540,
    "providerId": "MADAT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14297,
    "providerId": "MAFOC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12760,
    "providerId": "MANAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12561,
    "providerId": "MADCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12548,
    "providerId": "MANBR",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12751,
    "providerId": "MADAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12550,
    "providerId": "MANGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18724,
    "providerId": "MAAMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12563,
    "providerId": "MADGU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12541,
    "providerId": "MADCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12544,
    "providerId": "MADMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12560,
    "providerId": "MADAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12562,
    "providerId": "MADFE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13444,
    "providerId": "MAFOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12546,
    "providerId": "MADRE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12542,
    "providerId": "MADAI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20969,
    "providerId": "MAFOD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18430,
    "providerId": "MAASC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14629,
    "providerId": "MAFTB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12547,
    "providerId": "MADTO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12549,
    "providerId": "MAFMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12754,
    "providerId": "MADAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14893,
    "providerId": "MANAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12545,
    "providerId": "MADRC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20040,
    "providerId": "MAALC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18725,
    "providerId": "MAAVW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20865,
    "providerId": "MANTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14047,
    "providerId": "MADKV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12757,
    "providerId": "MADSE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20967,
    "providerId": "MBSFR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12831,
    "providerId": "MCIRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14433,
    "providerId": "MCIAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14223,
    "providerId": "MCIKS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12557,
    "providerId": "MCIPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19985,
    "providerId": "MCISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12543,
    "providerId": "MADFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12756,
    "providerId": "MADVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4935,
    "providerId": "MAFFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18726,
    "providerId": "MADWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12551,
    "providerId": "MANVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12758,
    "providerId": "MADCU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12556,
    "providerId": "MCIOP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13745,
    "providerId": "MBSTP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14833,
    "providerId": "MCIAA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19942,
    "providerId": "MCIFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12595,
    "providerId": "MCIAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12828,
    "providerId": "MCILB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12826,
    "providerId": "MCICA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 5152,
    "providerId": "MCIAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18984,
    "providerId": "MCIAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14662,
    "providerId": "MBSCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14222,
    "providerId": "MCISR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12553,
    "providerId": "MCECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17049,
    "providerId": "MBSFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19531,
    "providerId": "MBSFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14837,
    "providerId": "MBDPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21691,
    "providerId": "MCIOL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20968,
    "providerId": "MBSMP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12558,
    "providerId": "MCIOV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21690,
    "providerId": "MCIFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12829,
    "providerId": "MCINO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14075,
    "providerId": "MBSCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12559,
    "providerId": "MCITP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4819,
    "providerId": "MCICC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12554,
    "providerId": "MCIAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19667,
    "providerId": "MCICR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12596,
    "providerId": "MCICV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12834,
    "providerId": "MCOBN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12717,
    "providerId": "MCNFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11266,
    "providerId": "MCOFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12720,
    "providerId": "MCOAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14666,
    "providerId": "MCOKX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12723,
    "providerId": "MCOCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6508,
    "providerId": "MCOJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11270,
    "providerId": "MCOJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14857,
    "providerId": "MCOLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12832,
    "providerId": "MCNMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11214,
    "providerId": "MCODE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4622,
    "providerId": "MCOBS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12726,
    "providerId": "MCOFV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13484,
    "providerId": "MCOCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4675,
    "providerId": "MCMMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12835,
    "providerId": "MCNSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11207,
    "providerId": "MCOFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4604,
    "providerId": "MCODW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12836,
    "providerId": "MCOAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20167,
    "providerId": "MCOAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12719,
    "providerId": "MCNWR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14540,
    "providerId": "MCOCR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12722,
    "providerId": "MCOCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12840,
    "providerId": "MCOGV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4914,
    "providerId": "MCODL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18727,
    "providerId": "MCIWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12727,
    "providerId": "MCOHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4614,
    "providerId": "MCOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15368,
    "providerId": "MCIXA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12718,
    "providerId": "MCNGA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12724,
    "providerId": "MCOCM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13449,
    "providerId": "MCOGP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12721,
    "providerId": "MCOAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11205,
    "providerId": "MCOCV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11206,
    "providerId": "MCOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20711,
    "providerId": "MCOYS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11269,
    "providerId": "MCOUS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12833,
    "providerId": "MCOLR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14129,
    "providerId": "MCOLN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12728,
    "providerId": "MCORP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12735,
    "providerId": "MCORP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20454,
    "providerId": "MCOJB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14295,
    "providerId": "MCOKK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12837,
    "providerId": "MCNCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11218,
    "providerId": "MCODO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14316,
    "providerId": "MCOFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12725,
    "providerId": "MCMCD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12729,
    "providerId": "MCOLM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12744,
    "providerId": "MCTRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12841,
    "providerId": "MCORY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18811,
    "providerId": "MDCFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19214,
    "providerId": "MCOPW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11085,
    "providerId": "MCORZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15370,
    "providerId": "MCOUC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12739,
    "providerId": "MCOSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12839,
    "providerId": "MCOOI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18544,
    "providerId": "MCTSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12730,
    "providerId": "MCOML",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12736,
    "providerId": "MCOSP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12838,
    "providerId": "MCOLY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11268,
    "providerId": "MCOSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5092,
    "providerId": "MCOOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15285,
    "providerId": "MCOZD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15371,
    "providerId": "MCOYW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2574,
    "providerId": "MCOLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4577,
    "providerId": "MCOLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12741,
    "providerId": "MCOLZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20710,
    "providerId": "MCOYR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 920,
    "providerId": "MCOSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18729,
    "providerId": "MCOWL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12740,
    "providerId": "MCOSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14859,
    "providerId": "MCOOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13445,
    "providerId": "MCOWF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15284,
    "providerId": "MCOSG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12738,
    "providerId": "MCORA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5110,
    "providerId": "MCOON",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14186,
    "providerId": "MCOYC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12737,
    "providerId": "MCOSR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11271,
    "providerId": "MCOWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12731,
    "providerId": "MCOMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12842,
    "providerId": "MCOSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12734,
    "providerId": "MCOSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12732,
    "providerId": "MCOLX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1956,
    "providerId": "MCORL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12733,
    "providerId": "MCORL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18304,
    "providerId": "MDEFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12801,
    "providerId": "MEMSS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12848,
    "providerId": "MEMOB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17793,
    "providerId": "MEXDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18732,
    "providerId": "MEXDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12746,
    "providerId": "MEDMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19597,
    "providerId": "MELFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14437,
    "providerId": "MEIFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4910,
    "providerId": "MEMWF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20970,
    "providerId": "MEMSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12843,
    "providerId": "MDWFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20891,
    "providerId": "MDWFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9111,
    "providerId": "MEMMM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13447,
    "providerId": "MEMMM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11334,
    "providerId": "MEXCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12794,
    "providerId": "MEMPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19056,
    "providerId": "MDQSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12743,
    "providerId": "MELMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12752,
    "providerId": "MEMGT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18309,
    "providerId": "MESFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12742,
    "providerId": "MEMGR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15287,
    "providerId": "MDWMU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12745,
    "providerId": "MEMFG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18384,
    "providerId": "MDZAV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18730,
    "providerId": "MEDMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19108,
    "providerId": "MDZSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12830,
    "providerId": "MEMLX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12844,
    "providerId": "MEMCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5067,
    "providerId": "MEXIS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4880,
    "providerId": "MEMEF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15372,
    "providerId": "MDEMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5505,
    "providerId": "MELSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12846,
    "providerId": "MEMME",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5919,
    "providerId": "MELWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12792,
    "providerId": "MEMPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12847,
    "providerId": "MESMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5514,
    "providerId": "MEMDS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11368,
    "providerId": "MEXRV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11369,
    "providerId": "MEXNA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18733,
    "providerId": "MEXWM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12806,
    "providerId": "MHKFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18413,
    "providerId": "MFMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14537,
    "providerId": "MGWMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3062,
    "providerId": "MEXXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19732,
    "providerId": "MEXLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19944,
    "providerId": "MHKFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14198,
    "providerId": "MFMMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18734,
    "providerId": "MEXWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12812,
    "providerId": "MFEMA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14271,
    "providerId": "MHPBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12803,
    "providerId": "MGMAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14357,
    "providerId": "MFMJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14665,
    "providerId": "MFETS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11335,
    "providerId": "MEXSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12849,
    "providerId": "MFECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12814,
    "providerId": "MGMPC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12851,
    "providerId": "MHTDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18138,
    "providerId": "MEXSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18441,
    "providerId": "MEXSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12808,
    "providerId": "MHTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12850,
    "providerId": "MGMBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18958,
    "providerId": "MFMXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11336,
    "providerId": "MEXJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11363,
    "providerId": "MEXVJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11364,
    "providerId": "MEXVJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12813,
    "providerId": "MFERI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11337,
    "providerId": "MEXIX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12804,
    "providerId": "MGMCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12802,
    "providerId": "MFEFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12852,
    "providerId": "MHTHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11043,
    "providerId": "MIAAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19535,
    "providerId": "MIAFA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12768,
    "providerId": "MIAHS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11075,
    "providerId": "MIAAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4894,
    "providerId": "MIAAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19533,
    "providerId": "MIAAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4890,
    "providerId": "MIABA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6907,
    "providerId": "MIAAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14501,
    "providerId": "MHTKN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15289,
    "providerId": "MIAAX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19553,
    "providerId": "MIACL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4006,
    "providerId": "MIAEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12807,
    "providerId": "MHTFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12810,
    "providerId": "MIAAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12855,
    "providerId": "MIADM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15515,
    "providerId": "MIAAA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19532,
    "providerId": "MIAAA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20622,
    "providerId": "MIAAO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12856,
    "providerId": "MIAFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11367,
    "providerId": "MIAAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12811,
    "providerId": "MHTFM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12765,
    "providerId": "MIAHD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3265,
    "providerId": "MIAES",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4886,
    "providerId": "MIAES",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12857,
    "providerId": "MIAJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14439,
    "providerId": "MHTNR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 6398,
    "providerId": "MIAAN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12763,
    "providerId": "MIADD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1545,
    "providerId": "MIABB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11338,
    "providerId": "MIACB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12854,
    "providerId": "MHTSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12761,
    "providerId": "MIADA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20043,
    "providerId": "MIAEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12853,
    "providerId": "MIACO",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12774,
    "providerId": "MIAKB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12805,
    "providerId": "MHTNC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12764,
    "providerId": "MIAGB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12767,
    "providerId": "MIADT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11362,
    "providerId": "MIACH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4917,
    "providerId": "MIAEM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12809,
    "providerId": "MHTTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2797,
    "providerId": "MIDRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18975,
    "providerId": "MIDRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11047,
    "providerId": "MIARZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12770,
    "providerId": "MIATA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18538,
    "providerId": "MILFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18974,
    "providerId": "MIDLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4585,
    "providerId": "MIDLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11302,
    "providerId": "MIANM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 161,
    "providerId": "MIASB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11049,
    "providerId": "MIASB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12766,
    "providerId": "MIAGV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20972,
    "providerId": "MKEAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12860,
    "providerId": "MKEBC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14019,
    "providerId": "MIASA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12859,
    "providerId": "MIARA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14379,
    "providerId": "MIARW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3912,
    "providerId": "MIAMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11272,
    "providerId": "MIAMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4664,
    "providerId": "MILLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19053,
    "providerId": "MILLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15288,
    "providerId": "MKEDE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5906,
    "providerId": "MIAMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19574,
    "providerId": "MIAMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1055,
    "providerId": "MIAWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4849,
    "providerId": "MILMP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8369,
    "providerId": "MKEBD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 925,
    "providerId": "MIAZL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12772,
    "providerId": "MIATS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12771,
    "providerId": "MIAMJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4586,
    "providerId": "MIDTL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19112,
    "providerId": "MIDTL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4686,
    "providerId": "MILWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12773,
    "providerId": "MIAPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14321,
    "providerId": "MILOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14076,
    "providerId": "MIATM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12780,
    "providerId": "MKECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12776,
    "providerId": "MJVMU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5176,
    "providerId": "MIATX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2696,
    "providerId": "MIATX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12858,
    "providerId": "MIAML",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 114,
    "providerId": "MIAXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18979,
    "providerId": "MIAXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4470,
    "providerId": "MIAXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14538,
    "providerId": "MIAMN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19065,
    "providerId": "MIALA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1115,
    "providerId": "MIAWM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12864,
    "providerId": "MILBG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14541,
    "providerId": "MIAXB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14050,
    "providerId": "MIAMV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4688,
    "providerId": "MILSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12775,
    "providerId": "MILIT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12769,
    "providerId": "MIALG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12777,
    "providerId": "MILMI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16676,
    "providerId": "MIAKC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18388,
    "providerId": "MIAKC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18481,
    "providerId": "MILSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12781,
    "providerId": "MLBAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14864,
    "providerId": "MKLJK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12778,
    "providerId": "MKEDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12874,
    "providerId": "MLBCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12785,
    "providerId": "MLBVB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19534,
    "providerId": "MLIEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13736,
    "providerId": "MKEDN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14667,
    "providerId": "MKEWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12782,
    "providerId": "MLBCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12872,
    "providerId": "MLICH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12863,
    "providerId": "MKLRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13451,
    "providerId": "MLIAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14001,
    "providerId": "MLIAQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4752,
    "providerId": "MKEFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12789,
    "providerId": "MLIQC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12790,
    "providerId": "MLIRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12783,
    "providerId": "MLBFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13450,
    "providerId": "MKEFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18737,
    "providerId": "MLAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4640,
    "providerId": "MLBCF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18442,
    "providerId": "MLESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12862,
    "providerId": "MKGNS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14551,
    "providerId": "MKESH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18738,
    "providerId": "MLEWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18896,
    "providerId": "MLEWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19536,
    "providerId": "MKEFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18960,
    "providerId": "MLEXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11399,
    "providerId": "MLEXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12779,
    "providerId": "MKETS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18736,
    "providerId": "MKEIW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5070,
    "providerId": "MKESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12861,
    "providerId": "MKEMW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13738,
    "providerId": "MKTCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12784,
    "providerId": "MLBFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20971,
    "providerId": "MODFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13511,
    "providerId": "MPLCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12796,
    "providerId": "MOBBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12875,
    "providerId": "MODSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13663,
    "providerId": "MOWDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12787,
    "providerId": "MLUTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11278,
    "providerId": "MOWRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13439,
    "providerId": "MOWPV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13443,
    "providerId": "MOWCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13661,
    "providerId": "MPQMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15312,
    "providerId": "MOBSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15373,
    "providerId": "MLUWM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12799,
    "providerId": "MOBSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12793,
    "providerId": "MOBSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11276,
    "providerId": "MOWTV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12788,
    "providerId": "MNLAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12798,
    "providerId": "MOBRV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19123,
    "providerId": "MOWSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13452,
    "providerId": "MNZFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11274,
    "providerId": "MOWBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13986,
    "providerId": "MMJFJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1426,
    "providerId": "MMHWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13966,
    "providerId": "MOBSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12797,
    "providerId": "MOBMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14862,
    "providerId": "MPOFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19126,
    "providerId": "MOWXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14233,
    "providerId": "MPAPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13437,
    "providerId": "MOWGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14483,
    "providerId": "MNZCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11295,
    "providerId": "MOWNA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19130,
    "providerId": "MOWLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14110,
    "providerId": "MQPNL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14730,
    "providerId": "MLURU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14046,
    "providerId": "MMJKH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13664,
    "providerId": "MSPDA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20885,
    "providerId": "MSNMV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15313,
    "providerId": "MSPAW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14038,
    "providerId": "MRYHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14731,
    "providerId": "MSPAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14268,
    "providerId": "MQPKG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4906,
    "providerId": "MOWSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13512,
    "providerId": "MRKML",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14668,
    "providerId": "MSPAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13513,
    "providerId": "MSLRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13520,
    "providerId": "MSPDD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19696,
    "providerId": "MSNSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18741,
    "providerId": "MRUMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13454,
    "providerId": "MRSBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9033,
    "providerId": "MSPDC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13464,
    "providerId": "MSPDC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13988,
    "providerId": "MSNAC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4966,
    "providerId": "MSPAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19697,
    "providerId": "MSPAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13522,
    "providerId": "MSPED",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13519,
    "providerId": "MSPEP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3712,
    "providerId": "MRKFL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11275,
    "providerId": "MRKFL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4859,
    "providerId": "MRUTB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18961,
    "providerId": "MRUXR",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 21231,
    "providerId": "MSORI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13515,
    "providerId": "MSOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15374,
    "providerId": "MSNWD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1812,
    "providerId": "MRYCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13514,
    "providerId": "MRYCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14729,
    "providerId": "MRYSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13517,
    "providerId": "MSPCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9411,
    "providerId": "MSPBL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13518,
    "providerId": "MSPCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13660,
    "providerId": "MSLMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14556,
    "providerId": "MRSAR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13516,
    "providerId": "MSNWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19334,
    "providerId": "MSPWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14322,
    "providerId": "MSPFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13523,
    "providerId": "MSPLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13524,
    "providerId": "MSPLL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14669,
    "providerId": "MSPWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13528,
    "providerId": "MSPPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13752,
    "providerId": "MSYCI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14130,
    "providerId": "MSPJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13529,
    "providerId": "MSPRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13547,
    "providerId": "MSYCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13531,
    "providerId": "MSPSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3153,
    "providerId": "MSPWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4630,
    "providerId": "MSPWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9568,
    "providerId": "MSPRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19986,
    "providerId": "MSPSW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17040,
    "providerId": "MSPOS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19338,
    "providerId": "MSPOS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13537,
    "providerId": "MSYCM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18742,
    "providerId": "MSPWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13667,
    "providerId": "MSPSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4656,
    "providerId": "MSPMD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13530,
    "providerId": "MSPSL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13525,
    "providerId": "MSPNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18978,
    "providerId": "MSPLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5109,
    "providerId": "MSPMI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13533,
    "providerId": "MSPTG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13527,
    "providerId": "MSPMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13534,
    "providerId": "MSPWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13666,
    "providerId": "MSPTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13665,
    "providerId": "MSPRO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13526,
    "providerId": "MSPMH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13539,
    "providerId": "MSYBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13541,
    "providerId": "MSYAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13521,
    "providerId": "MSPMG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13662,
    "providerId": "MSPMW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4895,
    "providerId": "MSPMF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13532,
    "providerId": "MSPTE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15406,
    "providerId": "MUCCG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20973,
    "providerId": "MSYHM",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13564,
    "providerId": "MTYFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5519,
    "providerId": "MSYAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19452,
    "providerId": "MSYAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14440,
    "providerId": "MSPTB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14441,
    "providerId": "MSYAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13673,
    "providerId": "MSYCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10909,
    "providerId": "MTOEF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13542,
    "providerId": "MSYCV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13677,
    "providerId": "MSYLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11046,
    "providerId": "MTHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4959,
    "providerId": "MSYIS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13556,
    "providerId": "MSYHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13560,
    "providerId": "MSYMM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13566,
    "providerId": "MUCCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19632,
    "providerId": "MTYFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13546,
    "providerId": "MSYDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14566,
    "providerId": "MSYHF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15375,
    "providerId": "MSYTD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15376,
    "providerId": "MSYTD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14564,
    "providerId": "MSYHV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14732,
    "providerId": "MSYLL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14135,
    "providerId": "MSYQC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5123,
    "providerId": "MSYMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14655,
    "providerId": "MSYFD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5118,
    "providerId": "MSYWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18106,
    "providerId": "MTYFL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14670,
    "providerId": "MSYDE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18926,
    "providerId": "MTYWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1519,
    "providerId": "MSYMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4960,
    "providerId": "MSYMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1195,
    "providerId": "MTHKL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11045,
    "providerId": "MTHKL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14736,
    "providerId": "MUCAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13559,
    "providerId": "MSYMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14077,
    "providerId": "MSYLP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4915,
    "providerId": "MSYQF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3435,
    "providerId": "MSYJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1140,
    "providerId": "MSYWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4712,
    "providerId": "MSYWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18414,
    "providerId": "MTYSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19482,
    "providerId": "MUCAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13668,
    "providerId": "MSYRM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14442,
    "providerId": "MSYGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13563,
    "providerId": "MSYSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16186,
    "providerId": "MSYSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11077,
    "providerId": "MTHAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 191,
    "providerId": "MSYRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11042,
    "providerId": "MSYRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14571,
    "providerId": "MSYOF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14860,
    "providerId": "MTTFI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13562,
    "providerId": "MSYRI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13573,
    "providerId": "MWAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5051,
    "providerId": "MYRSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4715,
    "providerId": "MUCSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19684,
    "providerId": "NBOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14573,
    "providerId": "MUCOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18744,
    "providerId": "NGBWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19989,
    "providerId": "NGBSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4792,
    "providerId": "MVDSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20233,
    "providerId": "MVDAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14409,
    "providerId": "MVCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18897,
    "providerId": "NANDS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19987,
    "providerId": "NANDS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13574,
    "providerId": "MUCOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13575,
    "providerId": "MUCFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4380,
    "providerId": "NCEMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13587,
    "providerId": "NCEJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18371,
    "providerId": "MUCFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18550,
    "providerId": "MUCSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11360,
    "providerId": "NASCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13588,
    "providerId": "NCLGH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14225,
    "providerId": "MYYMU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19988,
    "providerId": "NANTI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13684,
    "providerId": "NCEAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14030,
    "providerId": "NANMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18743,
    "providerId": "MUCWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16663,
    "providerId": "MYRBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18814,
    "providerId": "MYRBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13670,
    "providerId": "MUCRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13578,
    "providerId": "MYRCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18415,
    "providerId": "NANSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13671,
    "providerId": "MYRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13583,
    "providerId": "NAPBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13674,
    "providerId": "MYRFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19481,
    "providerId": "NBOFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13672,
    "providerId": "MUCNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18837,
    "providerId": "NANWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13577,
    "providerId": "MYROW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13582,
    "providerId": "MYYMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18839,
    "providerId": "MUCMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13675,
    "providerId": "NGBMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18840,
    "providerId": "NAGMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21609,
    "providerId": "NBOAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19792,
    "providerId": "NYCEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3566,
    "providerId": "NYCEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13833,
    "providerId": "NYCBF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18416,
    "providerId": "NKGZS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13456,
    "providerId": "NYCHA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6437,
    "providerId": "NYCJF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13902,
    "providerId": "NYCJF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18508,
    "providerId": "NHASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20060,
    "providerId": "NKGLC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4668,
    "providerId": "NUEMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14031,
    "providerId": "NYCFC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8452,
    "providerId": "NYCLB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13590,
    "providerId": "NPBST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13676,
    "providerId": "NNGMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18370,
    "providerId": "NGOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13680,
    "providerId": "NYCBK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13509,
    "providerId": "NYCLX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13854,
    "providerId": "NYCEA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 210,
    "providerId": "NYCEX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20232,
    "providerId": "NUESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14078,
    "providerId": "NYCBL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18838,
    "providerId": "NOUMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14876,
    "providerId": "NTYPR",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13987,
    "providerId": "NYCFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13904,
    "providerId": "NYCLI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 635,
    "providerId": "NYCCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6812,
    "providerId": "NYCCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18745,
    "providerId": "NKGWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14671,
    "providerId": "NOGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11217,
    "providerId": "NYCFT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14324,
    "providerId": "NYCCE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5164,
    "providerId": "NYCDF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18976,
    "providerId": "NYCLT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19450,
    "providerId": "NYCLH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19636,
    "providerId": "NKGSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 15317,
    "providerId": "NYCMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11076,
    "providerId": "NYCEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4211,
    "providerId": "NYCEB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11230,
    "providerId": "NYCFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14326,
    "providerId": "NYCPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20862,
    "providerId": "NYCOT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19920,
    "providerId": "NYCMF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15315,
    "providerId": "NYCRE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14969,
    "providerId": "NYCSG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4965,
    "providerId": "NYCPC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18746,
    "providerId": "NYCNU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14812,
    "providerId": "NYCVC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18444,
    "providerId": "NOUSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14025,
    "providerId": "NPBBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4789,
    "providerId": "NYCFO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13413,
    "providerId": "NYCES",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5166,
    "providerId": "NYCAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14256,
    "providerId": "NPBAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15314,
    "providerId": "NLAPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13453,
    "providerId": "NYCET",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13841,
    "providerId": "NYCAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13906,
    "providerId": "NYCMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19104,
    "providerId": "NYCTE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20543,
    "providerId": "NYCMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 245,
    "providerId": "NYCWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13747,
    "providerId": "NYCQC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13472,
    "providerId": "NYCSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6845,
    "providerId": "NYCPK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14325,
    "providerId": "NYCPK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13907,
    "providerId": "NYCRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20704,
    "providerId": "NYCOS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11343,
    "providerId": "NYCRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20906,
    "providerId": "NYCOF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5055,
    "providerId": "NYCTR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4800,
    "providerId": "NYCTF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13905,
    "providerId": "NYCME",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14444,
    "providerId": "NYCRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19127,
    "providerId": "NYCXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1482,
    "providerId": "NYCXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14818,
    "providerId": "NYCXM",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20120,
    "providerId": "NYCMP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1066,
    "providerId": "NYCZW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5097,
    "providerId": "NYCSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11058,
    "providerId": "NYCRW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11220,
    "providerId": "NYCOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16184,
    "providerId": "NYCWD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18747,
    "providerId": "NYCWD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19067,
    "providerId": "NYCPF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4856,
    "providerId": "NYCYL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19071,
    "providerId": "NYCYL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 222,
    "providerId": "NYCMQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6815,
    "providerId": "NYCMQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13909,
    "providerId": "NYCWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14652,
    "providerId": "NYCQL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8433,
    "providerId": "NYCST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13458,
    "providerId": "NYCQN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13455,
    "providerId": "NYCPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13913,
    "providerId": "NYCWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13459,
    "providerId": "NYCMS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13920,
    "providerId": "NYCMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13681,
    "providerId": "NYCMH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4801,
    "providerId": "NYCYS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4888,
    "providerId": "OKCAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19698,
    "providerId": "OKCAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13910,
    "providerId": "OAKCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13908,
    "providerId": "OAKCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13934,
    "providerId": "OAKWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13933,
    "providerId": "OAKSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13921,
    "providerId": "OKCEX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13683,
    "providerId": "OAKBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13919,
    "providerId": "OKCDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13923,
    "providerId": "OKCBT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14155,
    "providerId": "OKCDC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13917,
    "providerId": "OKCAW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13911,
    "providerId": "OAKPH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13922,
    "providerId": "OKCED",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13686,
    "providerId": "OAKMV",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13939,
    "providerId": "OKCAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13924,
    "providerId": "OKCMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13916,
    "providerId": "ODBCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14293,
    "providerId": "OAJCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19072,
    "providerId": "OAKAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14878,
    "providerId": "OKCAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13685,
    "providerId": "OKAMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14863,
    "providerId": "OKCBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13918,
    "providerId": "OKARZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18443,
    "providerId": "OKASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13925,
    "providerId": "OKCNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13687,
    "providerId": "OAKRM",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13689,
    "providerId": "OKCCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5082,
    "providerId": "OAKFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13914,
    "providerId": "OAKMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13912,
    "providerId": "OAKDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13682,
    "providerId": "OAKCP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13915,
    "providerId": "OJAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4907,
    "providerId": "ONTAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13926,
    "providerId": "OKCNQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10923,
    "providerId": "ONTCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15293,
    "providerId": "OKCRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5155,
    "providerId": "OKCOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13688,
    "providerId": "OMASH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12964,
    "providerId": "ONTBE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4870,
    "providerId": "OMAEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14867,
    "providerId": "OMAKV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14673,
    "providerId": "OMASB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14733,
    "providerId": "OKCSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14697,
    "providerId": "OMAFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19476,
    "providerId": "OLBLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14640,
    "providerId": "ONDON",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14079,
    "providerId": "OMAWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19295,
    "providerId": "OLBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9189,
    "providerId": "OMASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19516,
    "providerId": "OMASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4730,
    "providerId": "OKCSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14449,
    "providerId": "OKCYK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13691,
    "providerId": "ONTCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13929,
    "providerId": "OMACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13930,
    "providerId": "OMAFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14032,
    "providerId": "OMADM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19306,
    "providerId": "OLBRL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19473,
    "providerId": "OLBPL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8925,
    "providerId": "OKCSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14868,
    "providerId": "OMARW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13690,
    "providerId": "ONTCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13460,
    "providerId": "OMART",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14451,
    "providerId": "OMAOP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13969,
    "providerId": "OKCRW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14447,
    "providerId": "OKCTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13927,
    "providerId": "OKCNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14450,
    "providerId": "OMANW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12965,
    "providerId": "ONTFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12976,
    "providerId": "ORFTS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12968,
    "providerId": "ORFDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12972,
    "providerId": "ORFOC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12980,
    "providerId": "ORFVB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12967,
    "providerId": "ONTHS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12981,
    "providerId": "ORMNH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12969,
    "providerId": "OPOPO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14735,
    "providerId": "ORFAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12970,
    "providerId": "OOLSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14434,
    "providerId": "ONTTM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15318,
    "providerId": "OOLMV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13972,
    "providerId": "ONTTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18748,
    "providerId": "ORFWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12971,
    "providerId": "ORFOD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14255,
    "providerId": "ORFCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5905,
    "providerId": "ORFFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13698,
    "providerId": "ORFVO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19073,
    "providerId": "ORFAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14496,
    "providerId": "ORFSU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13696,
    "providerId": "ORFNC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12966,
    "providerId": "ONTRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12974,
    "providerId": "ORFOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12979,
    "providerId": "ORFVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13693,
    "providerId": "ONTTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13697,
    "providerId": "ORFPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13695,
    "providerId": "ORFCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4918,
    "providerId": "ORNFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5030,
    "providerId": "ORFSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9803,
    "providerId": "ORFBO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13694,
    "providerId": "ORFGB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5083,
    "providerId": "ORFVS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12975,
    "providerId": "ORFRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12973,
    "providerId": "ORFNW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12977,
    "providerId": "ORFST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18445,
    "providerId": "OOLGS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5087,
    "providerId": "ONTOA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18417,
    "providerId": "OPOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12994,
    "providerId": "PARBB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14976,
    "providerId": "OSACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14574,
    "providerId": "OSAMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12993,
    "providerId": "PAORI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14332,
    "providerId": "PARAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12987,
    "providerId": "OXRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13692,
    "providerId": "ONTSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4802,
    "providerId": "ONTFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20000,
    "providerId": "ONTSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20974,
    "providerId": "OTSFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14042,
    "providerId": "OSALB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18446,
    "providerId": "OSAKB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14275,
    "providerId": "PAPMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13702,
    "providerId": "PAHCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14131,
    "providerId": "PABCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4796,
    "providerId": "ORNSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18749,
    "providerId": "OSAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13713,
    "providerId": "PARCF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4652,
    "providerId": "ORNMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12982,
    "providerId": "OSARZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12984,
    "providerId": "OVDGI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12986,
    "providerId": "OXRCH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13701,
    "providerId": "OXRRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13717,
    "providerId": "PARAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19477,
    "providerId": "OXRFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19096,
    "providerId": "OSAXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20935,
    "providerId": "PARAB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13699,
    "providerId": "OVDFO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18977,
    "providerId": "PARBE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12985,
    "providerId": "OWBFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12991,
    "providerId": "PAHFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12988,
    "providerId": "OXRTO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12992,
    "providerId": "OXRVB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12990,
    "providerId": "OXRVO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12989,
    "providerId": "OXRTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15316,
    "providerId": "OSLOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14329,
    "providerId": "OVBMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13989,
    "providerId": "OSANA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18541,
    "providerId": "OSAYS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13700,
    "providerId": "OXRCR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19919,
    "providerId": "PBCFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18317,
    "providerId": "PARTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13712,
    "providerId": "PARMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14082,
    "providerId": "PARXA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12995,
    "providerId": "PARDP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13002,
    "providerId": "PBICH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18750,
    "providerId": "PARMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13005,
    "providerId": "PBIJP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13719,
    "providerId": "PBIPG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19133,
    "providerId": "PARLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13710,
    "providerId": "PBICY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13007,
    "providerId": "PBIPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18752,
    "providerId": "PARWH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 6447,
    "providerId": "PBIBO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12997,
    "providerId": "PBCCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13006,
    "providerId": "PBIPB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18753,
    "providerId": "PBHMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12996,
    "providerId": "PARLD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12999,
    "providerId": "PBIBB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13004,
    "providerId": "PBIFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14456,
    "providerId": "PBIJA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18357,
    "providerId": "PARXT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14453,
    "providerId": "PBIFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13714,
    "providerId": "PBIBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12998,
    "providerId": "PARSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18754,
    "providerId": "PBHPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19714,
    "providerId": "PBIAY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18751,
    "providerId": "PARVW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13000,
    "providerId": "PBIBC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13715,
    "providerId": "PBIMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14672,
    "providerId": "PBGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10048,
    "providerId": "PAROA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13711,
    "providerId": "PBCMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14330,
    "providerId": "PARSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19134,
    "providerId": "PARSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14582,
    "providerId": "PBIRD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13009,
    "providerId": "PBIRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11340,
    "providerId": "PDXCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19699,
    "providerId": "PDXLN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2211,
    "providerId": "PDXLN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13013,
    "providerId": "PBIWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14756,
    "providerId": "PDXBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14499,
    "providerId": "PDXVE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11359,
    "providerId": "PDXAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13014,
    "providerId": "PDXCK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14698,
    "providerId": "PEQFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15402,
    "providerId": "PDXPH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13724,
    "providerId": "PDXVS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13016,
    "providerId": "PDXHB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5461,
    "providerId": "PBXSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19656,
    "providerId": "PDXAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13720,
    "providerId": "PDXCS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13020,
    "providerId": "PDXRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13722,
    "providerId": "PDXHS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11347,
    "providerId": "PDXPC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19655,
    "providerId": "PDXSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 601,
    "providerId": "PBISG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14865,
    "providerId": "PDXPD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13015,
    "providerId": "PDXCL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15294,
    "providerId": "PDXPF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13716,
    "providerId": "PBITS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11341,
    "providerId": "PDXAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19626,
    "providerId": "PDXAH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13011,
    "providerId": "PBISN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13010,
    "providerId": "PBISH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13019,
    "providerId": "PDXTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11365,
    "providerId": "PDXAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13012,
    "providerId": "PBIST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11345,
    "providerId": "PDXOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13017,
    "providerId": "PDXHL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18363,
    "providerId": "PERFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11344,
    "providerId": "PDXNH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13718,
    "providerId": "PBMCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13008,
    "providerId": "PBIRH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19109,
    "providerId": "PERAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4724,
    "providerId": "PDXFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13028,
    "providerId": "PHFTS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 15377,
    "providerId": "PGVGV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13025,
    "providerId": "PHFFW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5134,
    "providerId": "PHLCP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20327,
    "providerId": "PHLAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13021,
    "providerId": "PFNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9213,
    "providerId": "PHLCC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11277,
    "providerId": "PHLAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13024,
    "providerId": "PHFCN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13723,
    "providerId": "PHFCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13725,
    "providerId": "PHLCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19210,
    "providerId": "PFOMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13721,
    "providerId": "PFNLE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14165,
    "providerId": "PHFAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13022,
    "providerId": "PFNTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4840,
    "providerId": "PHLAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13027,
    "providerId": "PHFHC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13029,
    "providerId": "PHFVI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13728,
    "providerId": "PHFOY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13033,
    "providerId": "PHLBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13026,
    "providerId": "PHFNN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 16767,
    "providerId": "PHLAI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20027,
    "providerId": "PHLAI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13031,
    "providerId": "PHFWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19558,
    "providerId": "PHLAD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13034,
    "providerId": "PHLCV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13743,
    "providerId": "PGVRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17036,
    "providerId": "PHLBC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19333,
    "providerId": "PHLBC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14675,
    "providerId": "PHLAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13030,
    "providerId": "PHFYT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14299,
    "providerId": "PHLCS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13032,
    "providerId": "PHLAT",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14968,
    "providerId": "PHLFG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14606,
    "providerId": "PHLVL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13036,
    "providerId": "PHLPY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2380,
    "providerId": "PGACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13038,
    "providerId": "PHLRL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14866,
    "providerId": "PHLGF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13041,
    "providerId": "PHLVG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11282,
    "providerId": "PHLRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17044,
    "providerId": "PHLPF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19537,
    "providerId": "PHLPF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13035,
    "providerId": "PHLDV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19768,
    "providerId": "PHLCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18431,
    "providerId": "PFNSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14581,
    "providerId": "PHLBA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3174,
    "providerId": "PHLDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11280,
    "providerId": "PHLDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18842,
    "providerId": "PERWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13037,
    "providerId": "PHLSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13039,
    "providerId": "PHLGV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11281,
    "providerId": "PHLFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14267,
    "providerId": "PHLPT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13727,
    "providerId": "PHLRW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13040,
    "providerId": "PHLKP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13042,
    "providerId": "PHLVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14734,
    "providerId": "PHLSM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14873,
    "providerId": "PHLLM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14458,
    "providerId": "PHLLD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13044,
    "providerId": "PHLWG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14128,
    "providerId": "PHLSW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14902,
    "providerId": "PHLVO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5048,
    "providerId": "PHLMW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1561,
    "providerId": "PHLRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11055,
    "providerId": "PHLRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5090,
    "providerId": "PHLWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18418,
    "providerId": "PHLVS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5128,
    "providerId": "PHLWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13726,
    "providerId": "PHLMH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4648,
    "providerId": "PHLMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14134,
    "providerId": "PHLMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13729,
    "providerId": "PHLWE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5081,
    "providerId": "PHLSA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13043,
    "providerId": "PHLWL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14136,
    "providerId": "PHLGB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5089,
    "providerId": "PHLUS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10871,
    "providerId": "PHLMG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16774,
    "providerId": "PHLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19700,
    "providerId": "PHLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4879,
    "providerId": "PHLFO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5021,
    "providerId": "PHXLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19175,
    "providerId": "PHXPC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13048,
    "providerId": "PHXCB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13053,
    "providerId": "PHXCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13049,
    "providerId": "PHXCC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13066,
    "providerId": "PHXNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13054,
    "providerId": "PHXCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13462,
    "providerId": "PHXGB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13051,
    "providerId": "PHXCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13061,
    "providerId": "PHXGY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13760,
    "providerId": "PHXCV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13060,
    "providerId": "PHXGL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13730,
    "providerId": "PHXCF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4592,
    "providerId": "PHXKW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13047,
    "providerId": "PHXCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13731,
    "providerId": "PHXBC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13759,
    "providerId": "PHXGI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20080,
    "providerId": "PHXEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14300,
    "providerId": "PHXMZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14903,
    "providerId": "PHXAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3605,
    "providerId": "PHXIW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18756,
    "providerId": "PHXIW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13062,
    "providerId": "PHXMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5175,
    "providerId": "PHXMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13063,
    "providerId": "PHXMH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13045,
    "providerId": "PHXBD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14080,
    "providerId": "PHXAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16609,
    "providerId": "PHXGP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18546,
    "providerId": "PHXGP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13052,
    "providerId": "PHXCL",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13057,
    "providerId": "PHXFF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13065,
    "providerId": "PHXME",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14137,
    "providerId": "PHXTD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13770,
    "providerId": "PHXTT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13070,
    "providerId": "PHXRM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4754,
    "providerId": "PHXTA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18929,
    "providerId": "PIAFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13084,
    "providerId": "PIACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13764,
    "providerId": "PHXRI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13080,
    "providerId": "PHXTE",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13081,
    "providerId": "PHXTM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13093,
    "providerId": "PIAPE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15319,
    "providerId": "PHXXC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4909,
    "providerId": "PHXSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4845,
    "providerId": "PHXAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19074,
    "providerId": "PHXAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13056,
    "providerId": "PHXDR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13064,
    "providerId": "PHXMY",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13761,
    "providerId": "PHXDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4590,
    "providerId": "PHXDO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13067,
    "providerId": "PHXPI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13765,
    "providerId": "PHXRT",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13077,
    "providerId": "PHXSP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4626,
    "providerId": "PHXWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13072,
    "providerId": "PHXRP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21627,
    "providerId": "PITAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13083,
    "providerId": "PHXYR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19276,
    "providerId": "PHXSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13078,
    "providerId": "PHXSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13763,
    "providerId": "PHXRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13068,
    "providerId": "PHXPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5062,
    "providerId": "PHXWS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13085,
    "providerId": "PIAIL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14033,
    "providerId": "PHXTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14034,
    "providerId": "PHXTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13071,
    "providerId": "PHXRN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4973,
    "providerId": "PHXWW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13073,
    "providerId": "PHXRS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13069,
    "providerId": "PHXRB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19048,
    "providerId": "PIOLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13767,
    "providerId": "PHXTO",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13074,
    "providerId": "PHXSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14454,
    "providerId": "PIADT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 16369,
    "providerId": "PHXXL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4225,
    "providerId": "PHXXL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13082,
    "providerId": "PHXTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13079,
    "providerId": "PHXSZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13766,
    "providerId": "PHXST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4635,
    "providerId": "PHXWP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13075,
    "providerId": "PHXSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4953,
    "providerId": "PHXSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13742,
    "providerId": "PIAMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13076,
    "providerId": "PHXSL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13768,
    "providerId": "PITDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14967,
    "providerId": "PITRW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13103,
    "providerId": "PITSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14716,
    "providerId": "PITXW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14319,
    "providerId": "PKBCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14714,
    "providerId": "PKBCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14462,
    "providerId": "PITMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13771,
    "providerId": "PITWM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13769,
    "providerId": "PITNS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14713,
    "providerId": "PITTW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13092,
    "providerId": "PITLT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13094,
    "providerId": "PITMR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13108,
    "providerId": "PKBFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13095,
    "providerId": "PITML",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13096,
    "providerId": "PITNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13104,
    "providerId": "PITSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13099,
    "providerId": "PITPM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13775,
    "providerId": "PITWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13087,
    "providerId": "PITCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13107,
    "providerId": "PITWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4738,
    "providerId": "PITPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13089,
    "providerId": "PITFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13102,
    "providerId": "PITRN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13097,
    "providerId": "PITMV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14207,
    "providerId": "PKBTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14754,
    "providerId": "PITNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14460,
    "providerId": "PITWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13101,
    "providerId": "PITRK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8937,
    "providerId": "PITMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13100,
    "providerId": "PITRA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15379,
    "providerId": "PITRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15378,
    "providerId": "PITFM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13091,
    "providerId": "PITGB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13086,
    "providerId": "PITBT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14607,
    "providerId": "PITRR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14459,
    "providerId": "PITLE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13465,
    "providerId": "PITCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13090,
    "providerId": "PITCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13106,
    "providerId": "PITWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15380,
    "providerId": "PITUT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18757,
    "providerId": "PITWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14360,
    "providerId": "PLZMA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13098,
    "providerId": "PITNV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6685,
    "providerId": "PRCSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13120,
    "providerId": "PRCSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11161,
    "providerId": "POURK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13119,
    "providerId": "POSCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13114,
    "providerId": "PNCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19412,
    "providerId": "PMIXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13774,
    "providerId": "PMIMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14738,
    "providerId": "PQCJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13780,
    "providerId": "PRGAK",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19619,
    "providerId": "PNQFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13113,
    "providerId": "PNQMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13111,
    "providerId": "PMIMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14970,
    "providerId": "PNQMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19421,
    "providerId": "PMILC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13117,
    "providerId": "PNSOB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13118,
    "providerId": "PRCRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13779,
    "providerId": "PNSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18512,
    "providerId": "PNQMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13772,
    "providerId": "PNCRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14882,
    "providerId": "PRYHA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13112,
    "providerId": "PNATU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15381,
    "providerId": "PNSTF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13777,
    "providerId": "PNSTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18995,
    "providerId": "PRGLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18848,
    "providerId": "PNQWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13115,
    "providerId": "PNQPH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13807,
    "providerId": "PNQCK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14717,
    "providerId": "PNSOR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13146,
    "providerId": "PRGDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19420,
    "providerId": "PMISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13143,
    "providerId": "PRGPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13773,
    "providerId": "PNSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13131,
    "providerId": "PRGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18758,
    "providerId": "PNQDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19668,
    "providerId": "POZSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13781,
    "providerId": "PRGPZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13467,
    "providerId": "PNSPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13109,
    "providerId": "PMEHA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14883,
    "providerId": "PTGLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13209,
    "providerId": "PUBSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14335,
    "providerId": "PRYWA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4633,
    "providerId": "PSPPW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19701,
    "providerId": "PTYLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13776,
    "providerId": "PSAPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18760,
    "providerId": "PTYBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18771,
    "providerId": "PTYWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4891,
    "providerId": "PTYAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6818,
    "providerId": "PSPPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13182,
    "providerId": "PTYCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5171,
    "providerId": "PUJWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3470,
    "providerId": "PSPWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18759,
    "providerId": "PSPWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14234,
    "providerId": "PRYME",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18770,
    "providerId": "PTYWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13191,
    "providerId": "PTYMM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13170,
    "providerId": "PSPSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14111,
    "providerId": "PRYWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13471,
    "providerId": "PSCRL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14114,
    "providerId": "PTGRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13783,
    "providerId": "PSMFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13746,
    "providerId": "PUBCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18547,
    "providerId": "PRYSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14907,
    "providerId": "PTYAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13784,
    "providerId": "PSMWW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14328,
    "providerId": "PSPAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20415,
    "providerId": "PTYMJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21537,
    "providerId": "PTLAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11346,
    "providerId": "PSPBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18875,
    "providerId": "PTYMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13973,
    "providerId": "PTYAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11348,
    "providerId": "PSPCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4737,
    "providerId": "PSMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13144,
    "providerId": "PSMCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4897,
    "providerId": "PUJFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4828,
    "providerId": "PTYSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13205,
    "providerId": "PTYPA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19271,
    "providerId": "PTYBB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13148,
    "providerId": "PSMDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13149,
    "providerId": "PSMRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3068,
    "providerId": "PVRXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5115,
    "providerId": "PVRXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18990,
    "providerId": "PVRXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12878,
    "providerId": "PWMAB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19417,
    "providerId": "QROAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14719,
    "providerId": "QKBRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21677,
    "providerId": "QQYOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13790,
    "providerId": "QPAPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14170,
    "providerId": "PUWCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12883,
    "providerId": "QKBVI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5073,
    "providerId": "PWMWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12876,
    "providerId": "PVDTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13785,
    "providerId": "PVDLW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 16687,
    "providerId": "PVRSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18419,
    "providerId": "PVRSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14336,
    "providerId": "QCAMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13218,
    "providerId": "PVDDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12882,
    "providerId": "PWMPT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8725,
    "providerId": "PWMBA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14905,
    "providerId": "PWMBA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13214,
    "providerId": "PVDLN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12881,
    "providerId": "PWMCW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14904,
    "providerId": "PUWRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13221,
    "providerId": "PVDRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13782,
    "providerId": "PVDAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14402,
    "providerId": "QROCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12885,
    "providerId": "QMDJV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13210,
    "providerId": "PVDBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18768,
    "providerId": "PUSWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4769,
    "providerId": "PVRWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13219,
    "providerId": "PVDRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8974,
    "providerId": "PWMDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19136,
    "providerId": "QPAFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12877,
    "providerId": "PVRMX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19001,
    "providerId": "PYXLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14005,
    "providerId": "PYXBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14978,
    "providerId": "QQYYK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13787,
    "providerId": "PYMFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13786,
    "providerId": "PWMBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18769,
    "providerId": "PVRWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12893,
    "providerId": "RDUCV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12896,
    "providerId": "RDGWY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13791,
    "providerId": "RDUDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13789,
    "providerId": "RDUCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19910,
    "providerId": "RDUFE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14194,
    "providerId": "RALFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12884,
    "providerId": "QZOAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15320,
    "providerId": "RALTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12887,
    "providerId": "RDUCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13788,
    "providerId": "RAPFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14209,
    "providerId": "RDMSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18728,
    "providerId": "QROQF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13473,
    "providerId": "RDDRD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14889,
    "providerId": "RCBUM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12888,
    "providerId": "RDUCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14467,
    "providerId": "RDUDD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4663,
    "providerId": "RAKMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15383,
    "providerId": "RDUAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12895,
    "providerId": "RDUAP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 15389,
    "providerId": "RDUAH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12891,
    "providerId": "RALCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5492,
    "providerId": "RDUCL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12889,
    "providerId": "RDUEE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14584,
    "providerId": "QROQA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14132,
    "providerId": "RDUAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18551,
    "providerId": "RDDSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12894,
    "providerId": "RDUFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14737,
    "providerId": "RDUAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14908,
    "providerId": "RDUAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14583,
    "providerId": "QROPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14004,
    "providerId": "RDUAY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4872,
    "providerId": "RDUAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14906,
    "providerId": "RDGFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14133,
    "providerId": "RDUAB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12886,
    "providerId": "RALMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13749,
    "providerId": "RAPDW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18449,
    "providerId": "RHOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12900,
    "providerId": "RDURB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13793,
    "providerId": "RDUSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14741,
    "providerId": "REPCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12902,
    "providerId": "REUTA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20034,
    "providerId": "RDULD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12901,
    "providerId": "RICCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12899,
    "providerId": "RDURN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14284,
    "providerId": "REHFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14226,
    "providerId": "REHRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12892,
    "providerId": "RDUFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13794,
    "providerId": "RFDCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19952,
    "providerId": "RDUSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13792,
    "providerId": "RDURT",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20091,
    "providerId": "RDURA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4772,
    "providerId": "RDUSC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19909,
    "providerId": "RDUFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13991,
    "providerId": "RICDE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14722,
    "providerId": "RICFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13482,
    "providerId": "RDUSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19951,
    "providerId": "RDUIS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14909,
    "providerId": "RDURH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4749,
    "providerId": "RICFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4920,
    "providerId": "RECSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12904,
    "providerId": "RDUTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13795,
    "providerId": "RICCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12890,
    "providerId": "RDUHL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12897,
    "providerId": "RDURD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14910,
    "providerId": "RDURF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8977,
    "providerId": "RFDIL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18944,
    "providerId": "RDULA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12898,
    "providerId": "RGSBU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19075,
    "providerId": "RICAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18772,
    "providerId": "REPMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20765,
    "providerId": "RHEAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19069,
    "providerId": "REUMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15300,
    "providerId": "RDUNC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12908,
    "providerId": "RICFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12906,
    "providerId": "RDURL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12910,
    "providerId": "RICST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14721,
    "providerId": "RKTRW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14743,
    "providerId": "RNOBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13223,
    "providerId": "RNOCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13798,
    "providerId": "RNOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14202,
    "providerId": "RICRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4691,
    "providerId": "RIOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14327,
    "providerId": "RMGHO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14720,
    "providerId": "RNODT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20975,
    "providerId": "ROAFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12903,
    "providerId": "RICGA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11290,
    "providerId": "RIORI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20886,
    "providerId": "RNZFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12909,
    "providerId": "RICTS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13226,
    "providerId": "RNOFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13799,
    "providerId": "RNOTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14739,
    "providerId": "RICRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4926,
    "providerId": "RICPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14208,
    "providerId": "RMGCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15382,
    "providerId": "RKTRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12912,
    "providerId": "RKHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5053,
    "providerId": "RICWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11061,
    "providerId": "RNORZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11283,
    "providerId": "RIOMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13230,
    "providerId": "RNOGR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4857,
    "providerId": "RSWFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13803,
    "providerId": "RSWNP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13802,
    "providerId": "RSTTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4379,
    "providerId": "ROMWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13245,
    "providerId": "ROMDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11293,
    "providerId": "RIOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13797,
    "providerId": "RICWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15322,
    "providerId": "ROARB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12907,
    "providerId": "RICSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13241,
    "providerId": "RNORI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14740,
    "providerId": "RKHFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12911,
    "providerId": "RJLLO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19244,
    "providerId": "ROMPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7842,
    "providerId": "ROCWB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17023,
    "providerId": "ROGFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18312,
    "providerId": "ROGFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4729,
    "providerId": "ROMSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14724,
    "providerId": "RQXFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19066,
    "providerId": "RQSFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13487,
    "providerId": "ROWTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4381,
    "providerId": "ROMXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19155,
    "providerId": "ROMXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13800,
    "providerId": "ROGRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13247,
    "providerId": "RSWNA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13243,
    "providerId": "ROGTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20092,
    "providerId": "ROGAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15384,
    "providerId": "ROASL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15385,
    "providerId": "RSWCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13249,
    "providerId": "RSWRS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14895,
    "providerId": "RSTFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 10877,
    "providerId": "ROCNY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13242,
    "providerId": "ROGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 869,
    "providerId": "RSWRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11057,
    "providerId": "RSWRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18773,
    "providerId": "ROMMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14081,
    "providerId": "RPRCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14400,
    "providerId": "ROMEX",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14503,
    "providerId": "RSWRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13246,
    "providerId": "ROMCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 870,
    "providerId": "RSWGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11062,
    "providerId": "RSWGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8983,
    "providerId": "ROCAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13248,
    "providerId": "RSWFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13804,
    "providerId": "RSWCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20743,
    "providerId": "ROMPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13244,
    "providerId": "ROMAU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4809,
    "providerId": "SACSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 10077,
    "providerId": "RUHAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13810,
    "providerId": "SACRV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14420,
    "providerId": "RWITS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13806,
    "providerId": "SACEK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13257,
    "providerId": "SACDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13252,
    "providerId": "RUHRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13121,
    "providerId": "SACRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14645,
    "providerId": "RTMMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13122,
    "providerId": "SACRC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14911,
    "providerId": "RWLFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19627,
    "providerId": "RUHSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13254,
    "providerId": "RWICY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 10883,
    "providerId": "SACFS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13801,
    "providerId": "RUHAB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13811,
    "providerId": "SACSN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13260,
    "providerId": "SACFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13125,
    "providerId": "SACVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13250,
    "providerId": "RSWSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13253,
    "providerId": "RUHSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13258,
    "providerId": "SACEX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19174,
    "providerId": "RUHAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19918,
    "providerId": "SACFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13124,
    "providerId": "SACST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14912,
    "providerId": "SACAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13123,
    "providerId": "SACSR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19583,
    "providerId": "RUHFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13255,
    "providerId": "SACCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13809,
    "providerId": "SACGM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14840,
    "providerId": "RUHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19083,
    "providerId": "RUTLC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4007,
    "providerId": "RSWWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18774,
    "providerId": "RSWWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13259,
    "providerId": "SACFO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19764,
    "providerId": "SANJS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13126,
    "providerId": "SACXP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13128,
    "providerId": "SANAA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13132,
    "providerId": "SANBO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19453,
    "providerId": "SALSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13135,
    "providerId": "SANDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13812,
    "providerId": "SAFCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4426,
    "providerId": "SACWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4934,
    "providerId": "SACWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15321,
    "providerId": "SAFFE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9131,
    "providerId": "SANPD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13141,
    "providerId": "SANGL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13138,
    "providerId": "SANMM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13129,
    "providerId": "SALCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4977,
    "providerId": "SANFW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14831,
    "providerId": "SACFL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16993,
    "providerId": "SANFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18313,
    "providerId": "SANFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14913,
    "providerId": "SANOD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13816,
    "providerId": "SANON",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13814,
    "providerId": "SANCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4638,
    "providerId": "SANLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19202,
    "providerId": "SANLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13137,
    "providerId": "SANFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13140,
    "providerId": "SANMV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13134,
    "providerId": "SANCI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14339,
    "providerId": "SANFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21471,
    "providerId": "SANFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13813,
    "providerId": "SANAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14465,
    "providerId": "SANCG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14142,
    "providerId": "SANAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8485,
    "providerId": "SANLJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15323,
    "providerId": "SANEC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21000,
    "providerId": "SANOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13145,
    "providerId": "SANOS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14383,
    "providerId": "SANDH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14567,
    "providerId": "SANDH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8477,
    "providerId": "SACWO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13139,
    "providerId": "SANDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13136,
    "providerId": "SANCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13488,
    "providerId": "SANDL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13130,
    "providerId": "SANCB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13127,
    "providerId": "SAFNM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13147,
    "providerId": "SANOT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13142,
    "providerId": "SANNM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13133,
    "providerId": "SANCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13815,
    "providerId": "SANCM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2218,
    "providerId": "SAFLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5173,
    "providerId": "SAFLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2166,
    "providerId": "SANBS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5064,
    "providerId": "SANBS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15324,
    "providerId": "SALFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13817,
    "providerId": "SANSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13168,
    "providerId": "SATMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10942,
    "providerId": "SATNB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13157,
    "providerId": "SAOBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20999,
    "providerId": "SANYA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13164,
    "providerId": "SATFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11208,
    "providerId": "SATAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13174,
    "providerId": "SATNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13820,
    "providerId": "SATMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20792,
    "providerId": "SANTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11223,
    "providerId": "SATDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10619,
    "providerId": "SATBF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13150,
    "providerId": "SANVI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4865,
    "providerId": "SATAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19077,
    "providerId": "SATAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13194,
    "providerId": "SATNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11211,
    "providerId": "SATCL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13156,
    "providerId": "SAOAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18420,
    "providerId": "SAOSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18850,
    "providerId": "SANWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18421,
    "providerId": "SAOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13196,
    "providerId": "SATNL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14585,
    "providerId": "SANSM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2593,
    "providerId": "SANVS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19335,
    "providerId": "SANVS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11210,
    "providerId": "SATCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13821,
    "providerId": "SATFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15326,
    "providerId": "SANVR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13819,
    "providerId": "SATDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4257,
    "providerId": "SANWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13154,
    "providerId": "SANSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11209,
    "providerId": "SATCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13160,
    "providerId": "SATDW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4627,
    "providerId": "SAVWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14007,
    "providerId": "SAVFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4624,
    "providerId": "SATVW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13206,
    "providerId": "SAVFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13193,
    "providerId": "SATRW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 6811,
    "providerId": "SAVAD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13165,
    "providerId": "SATFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5091,
    "providerId": "SATGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13151,
    "providerId": "SANRB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13167,
    "providerId": "SATJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19272,
    "providerId": "SANTR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3211,
    "providerId": "SANSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4709,
    "providerId": "SANSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11212,
    "providerId": "SATCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4657,
    "providerId": "SATLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19242,
    "providerId": "SATLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4881,
    "providerId": "SATFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11219,
    "providerId": "SATCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14086,
    "providerId": "SANVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11231,
    "providerId": "SATCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4602,
    "providerId": "SANWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2508,
    "providerId": "SANWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11222,
    "providerId": "SATCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13153,
    "providerId": "SAVSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13823,
    "providerId": "SATRC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13202,
    "providerId": "SAVAA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14841,
    "providerId": "SATSN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13208,
    "providerId": "SAVHV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14557,
    "providerId": "SATPT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14412,
    "providerId": "SATSG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14287,
    "providerId": "SBNEH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13155,
    "providerId": "SBNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13822,
    "providerId": "SAVAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2275,
    "providerId": "SBARZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13197,
    "providerId": "SATRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13229,
    "providerId": "SAVSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13227,
    "providerId": "SAVIN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13198,
    "providerId": "SATSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13203,
    "providerId": "SAVCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15386,
    "providerId": "SBAGO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13200,
    "providerId": "SATTN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13199,
    "providerId": "SATSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13152,
    "providerId": "SBASY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20093,
    "providerId": "SBNAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13201,
    "providerId": "SATTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18293,
    "providerId": "SAVTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14914,
    "providerId": "SATTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14871,
    "providerId": "SAVMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18249,
    "providerId": "SAVLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13204,
    "providerId": "SAVDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14915,
    "providerId": "SAVSP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13177,
    "providerId": "SDFFD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19508,
    "providerId": "SCLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13161,
    "providerId": "SBNMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13173,
    "providerId": "SDFAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5159,
    "providerId": "SDFFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13169,
    "providerId": "SCLDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5059,
    "providerId": "SCRFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19100,
    "providerId": "SCLSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14742,
    "providerId": "SBYFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14834,
    "providerId": "SBNSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14745,
    "providerId": "SBYRO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5908,
    "providerId": "SBSIS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14608,
    "providerId": "SCLAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13825,
    "providerId": "SDFDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13172,
    "providerId": "SCLRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14139,
    "providerId": "SBYCI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13159,
    "providerId": "SBNNB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13171,
    "providerId": "SCOBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21628,
    "providerId": "SBPAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13827,
    "providerId": "SBNND",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14830,
    "providerId": "SCHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14334,
    "providerId": "SCLBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13162,
    "providerId": "SBNMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20099,
    "providerId": "SDFAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13753,
    "providerId": "SBNWL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13176,
    "providerId": "SCRCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18776,
    "providerId": "SCLWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13163,
    "providerId": "SBPCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13166,
    "providerId": "SCEHD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13183,
    "providerId": "SBYCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14916,
    "providerId": "SBPSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14272,
    "providerId": "SCLCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13175,
    "providerId": "SDFCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13824,
    "providerId": "SCQAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14828,
    "providerId": "SEAEV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13184,
    "providerId": "SDFSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19722,
    "providerId": "SEAAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11350,
    "providerId": "SDQCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18991,
    "providerId": "SDKFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13189,
    "providerId": "SEAKT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5510,
    "providerId": "SDQDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20084,
    "providerId": "SEAAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15325,
    "providerId": "SEAOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14006,
    "providerId": "SEAAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20055,
    "providerId": "SDFLD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15290,
    "providerId": "SEAAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14493,
    "providerId": "SEAMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11349,
    "providerId": "SDQGW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13185,
    "providerId": "SDFRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19706,
    "providerId": "SEARE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13180,
    "providerId": "SDFLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13181,
    "providerId": "SDFNE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18912,
    "providerId": "SEARA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13186,
    "providerId": "SDFSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13179,
    "providerId": "SDFLM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11356,
    "providerId": "SDQJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13187,
    "providerId": "SEADT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13826,
    "providerId": "SEALN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18777,
    "providerId": "SDJWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18914,
    "providerId": "SDFTN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13188,
    "providerId": "SEALU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4892,
    "providerId": "SEAFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18422,
    "providerId": "SDFSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13195,
    "providerId": "SEAPP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13178,
    "providerId": "SDFGJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14744,
    "providerId": "SEADP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13829,
    "providerId": "SEASB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9069,
    "providerId": "SEASC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4962,
    "providerId": "SEZMD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18466,
    "providerId": "SELFG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18985,
    "providerId": "SELAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13832,
    "providerId": "SFOBG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18469,
    "providerId": "SELSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4620,
    "providerId": "SEAWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4598,
    "providerId": "SEASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19811,
    "providerId": "SFOAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4777,
    "providerId": "SFOAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13213,
    "providerId": "SELCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5130,
    "providerId": "SEASF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18468,
    "providerId": "SELGI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14317,
    "providerId": "SELAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18780,
    "providerId": "SELWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15407,
    "providerId": "SELSA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11229,
    "providerId": "SFOAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14314,
    "providerId": "SEAUD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3083,
    "providerId": "SEAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18778,
    "providerId": "SEAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18816,
    "providerId": "SELFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14028,
    "providerId": "SELSN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8961,
    "providerId": "SEAVT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14021,
    "providerId": "SEAVT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15387,
    "providerId": "SEATL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18779,
    "providerId": "SELMD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13220,
    "providerId": "SFOAC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4083,
    "providerId": "SEAWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13828,
    "providerId": "SEAWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13211,
    "providerId": "SEATS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13217,
    "providerId": "SELJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18564,
    "providerId": "SELDI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15506,
    "providerId": "SEASM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11224,
    "providerId": "SFOCD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13207,
    "providerId": "SEATD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14746,
    "providerId": "SEAXS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13486,
    "providerId": "SELDP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11284,
    "providerId": "SEAWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 626,
    "providerId": "SEZLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13212,
    "providerId": "SEAWV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13831,
    "providerId": "SEFRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18992,
    "providerId": "SELMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14351,
    "providerId": "SELPN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13192,
    "providerId": "SEATA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13830,
    "providerId": "SEATC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19037,
    "providerId": "SFOBM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18876,
    "providerId": "SFOWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1767,
    "providerId": "SFOLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19347,
    "providerId": "SFOLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13236,
    "providerId": "SFOSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13222,
    "providerId": "SFOFC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13839,
    "providerId": "SGFBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11128,
    "providerId": "SFONP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11225,
    "providerId": "SFOJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14917,
    "providerId": "SGFTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11285,
    "providerId": "SFONS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3210,
    "providerId": "SFOMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5479,
    "providerId": "SFOMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2112,
    "providerId": "SFORZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11059,
    "providerId": "SFORZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14009,
    "providerId": "SFORD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1796,
    "providerId": "SFOXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18913,
    "providerId": "SFOYA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11221,
    "providerId": "SFOCN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13834,
    "providerId": "SFORW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 2290,
    "providerId": "SFODT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11127,
    "providerId": "SFODT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13835,
    "providerId": "SFOFN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5457,
    "providerId": "SFOUW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13240,
    "providerId": "SGFHB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13224,
    "providerId": "SFOFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4069,
    "providerId": "SFOLS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13837,
    "providerId": "SFOLS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18782,
    "providerId": "SGNMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13238,
    "providerId": "SGNBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13232,
    "providerId": "SFONV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5004,
    "providerId": "SFOUS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11226,
    "providerId": "SFOUS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13231,
    "providerId": "SFOME",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4813,
    "providerId": "SFOFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19882,
    "providerId": "SFOFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9291,
    "providerId": "SGFNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13237,
    "providerId": "SFOSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13234,
    "providerId": "SFOOP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18781,
    "providerId": "SFONW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13233,
    "providerId": "SFORI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13225,
    "providerId": "SFOFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 843,
    "providerId": "SFOWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13228,
    "providerId": "SFOLL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19137,
    "providerId": "SFOLA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4607,
    "providerId": "SFOPC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19401,
    "providerId": "SFOCF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13836,
    "providerId": "SFOSM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13265,
    "providerId": "SHAJD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18435,
    "providerId": "SHAWD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13863,
    "providerId": "SHAPX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14835,
    "providerId": "SHATR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18565,
    "providerId": "SHAJS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13275,
    "providerId": "SHARZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18783,
    "providerId": "SHADW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13852,
    "providerId": "SHABR",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13860,
    "providerId": "SHAMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13263,
    "providerId": "SHACA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20087,
    "providerId": "SHAHL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14260,
    "providerId": "SHAZH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18787,
    "providerId": "SHAWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14158,
    "providerId": "SGUZI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13274,
    "providerId": "SHDFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13264,
    "providerId": "SHACY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19954,
    "providerId": "SHASH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13272,
    "providerId": "SHVRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19135,
    "providerId": "SHJSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18963,
    "providerId": "SHJLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5504,
    "providerId": "SINWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13873,
    "providerId": "SINRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4939,
    "providerId": "SJCJF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13273,
    "providerId": "SHASX",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19927,
    "providerId": "SHAPF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13492,
    "providerId": "SHAPD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19956,
    "providerId": "SHAWS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19957,
    "providerId": "SHESI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13239,
    "providerId": "SHABZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11064,
    "providerId": "SHASZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13266,
    "providerId": "SHAKS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19539,
    "providerId": "SJCJC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13865,
    "providerId": "SHASY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13866,
    "providerId": "SHVCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18358,
    "providerId": "SINFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18359,
    "providerId": "SINVB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14586,
    "providerId": "SJCAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14302,
    "providerId": "SJCJR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14836,
    "providerId": "SHRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14029,
    "providerId": "SINJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13279,
    "providerId": "SJCFT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18784,
    "providerId": "SINMD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13278,
    "providerId": "SINDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18863,
    "providerId": "SINWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13277,
    "providerId": "SJCFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15301,
    "providerId": "SJCCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19068,
    "providerId": "SJCFV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18470,
    "providerId": "SINSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14747,
    "providerId": "SJCAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13276,
    "providerId": "SJCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5463,
    "providerId": "SINXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19146,
    "providerId": "SINXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4817,
    "providerId": "SJCAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19538,
    "providerId": "SJCAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15330,
    "providerId": "SINCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14512,
    "providerId": "SJCJS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19958,
    "providerId": "SHPSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14494,
    "providerId": "SJCME",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4877,
    "providerId": "SJCFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4786,
    "providerId": "SJCWP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18423,
    "providerId": "SJOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11134,
    "providerId": "SJORI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14587,
    "providerId": "SJTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13869,
    "providerId": "SJCSJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13870,
    "providerId": "SJDFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14918,
    "providerId": "SJTRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5326,
    "providerId": "SJOJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11132,
    "providerId": "SJOJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4689,
    "providerId": "SJCSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11291,
    "providerId": "SJDJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13871,
    "providerId": "SJCNW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4768,
    "providerId": "SJDWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19367,
    "providerId": "SJCSL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13280,
    "providerId": "SJCTN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18877,
    "providerId": "SJFWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15327,
    "providerId": "SJCNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14492,
    "providerId": "SJCSV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4921,
    "providerId": "SJCWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13948,
    "providerId": "SJUBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11130,
    "providerId": "SJOCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19434,
    "providerId": "SJOAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21317,
    "providerId": "SJDZR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19540,
    "providerId": "SJCUP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6518,
    "providerId": "SJCUP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11129,
    "providerId": "SJOAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5451,
    "providerId": "SJCSA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3702,
    "providerId": "SJDSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4583,
    "providerId": "SJDSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11133,
    "providerId": "SJOLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14367,
    "providerId": "SJJRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17649,
    "providerId": "SJDLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19089,
    "providerId": "SJDLC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14277,
    "providerId": "SJJCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11131,
    "providerId": "SJOCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14011,
    "providerId": "SJUAC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4975,
    "providerId": "SJCVL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13875,
    "providerId": "SLCFR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13872,
    "providerId": "SLCCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13286,
    "providerId": "SLCDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14899,
    "providerId": "SKPMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14140,
    "providerId": "SLCLI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13949,
    "providerId": "SJUIV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15302,
    "providerId": "SLCPO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3344,
    "providerId": "SJUDO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6816,
    "providerId": "SJUDO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13297,
    "providerId": "SLCSY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14919,
    "providerId": "SLCFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13292,
    "providerId": "SLCPV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13288,
    "providerId": "SLCLY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13876,
    "providerId": "SLCLG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14514,
    "providerId": "SLCSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14829,
    "providerId": "SLCFM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5108,
    "providerId": "SLASS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13285,
    "providerId": "SLCCL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14513,
    "providerId": "SLCSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13287,
    "providerId": "SLCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18467,
    "providerId": "SJUFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15388,
    "providerId": "SLCJO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8505,
    "providerId": "SLCSC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13290,
    "providerId": "SLCMS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 1249,
    "providerId": "SLCSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18510,
    "providerId": "SLCSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 3607,
    "providerId": "SLCAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14921,
    "providerId": "SLCAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5047,
    "providerId": "SJUOL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13877,
    "providerId": "SLCSD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4785,
    "providerId": "SJUSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4806,
    "providerId": "SNAAN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13881,
    "providerId": "SLCTT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13325,
    "providerId": "SNAFC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11294,
    "providerId": "SNADT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13950,
    "providerId": "SJURZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13283,
    "providerId": "SLCAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13293,
    "providerId": "SLCRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18321,
    "providerId": "SLCFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13281,
    "providerId": "SKBKT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13294,
    "providerId": "SLCSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13952,
    "providerId": "SJUPR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14920,
    "providerId": "SLWCS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13327,
    "providerId": "SNAFV",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14083,
    "providerId": "SNAAR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18915,
    "providerId": "SNADE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14748,
    "providerId": "SMECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13303,
    "providerId": "SLCUP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14588,
    "providerId": "SLWFI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 2294,
    "providerId": "SLCXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19630,
    "providerId": "SLCXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13301,
    "providerId": "SLCVO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11292,
    "providerId": "SNAAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13886,
    "providerId": "SNADP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13326,
    "providerId": "SNAFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15390,
    "providerId": "SMEFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19200,
    "providerId": "SLWFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13305,
    "providerId": "SNAIV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13322,
    "providerId": "SNAAS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13299,
    "providerId": "SNAIR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15329,
    "providerId": "SNAMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13889,
    "providerId": "SNALH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 16159,
    "providerId": "SNAFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13304,
    "providerId": "SLKCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13323,
    "providerId": "SNAAV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13311,
    "providerId": "SLPCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13879,
    "providerId": "SLCUT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14382,
    "providerId": "SLCYO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14749,
    "providerId": "SNAHU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13296,
    "providerId": "SLCTO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11298,
    "providerId": "SNAAO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14750,
    "providerId": "SNAAI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13295,
    "providerId": "SLCTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13302,
    "providerId": "SLMZA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13883,
    "providerId": "SMXFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13300,
    "providerId": "SLCVI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13324,
    "providerId": "SNABP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13307,
    "providerId": "SNAOG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13309,
    "providerId": "SNASJ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11063,
    "providerId": "SNARZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13853,
    "providerId": "SPICY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14752,
    "providerId": "SRQAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14203,
    "providerId": "SNASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13851,
    "providerId": "SOSSM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 985,
    "providerId": "SRQRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11066,
    "providerId": "SRQRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13318,
    "providerId": "SPZFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13329,
    "providerId": "SRQRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13314,
    "providerId": "SOSFT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13317,
    "providerId": "SPAMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13842,
    "providerId": "SRQCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13843,
    "providerId": "SRQBD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13306,
    "providerId": "SNAOC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18880,
    "providerId": "SNAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13319,
    "providerId": "SPZRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3204,
    "providerId": "SNAPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19198,
    "providerId": "SNAPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13328,
    "providerId": "SRQFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13849,
    "providerId": "SNSCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15328,
    "providerId": "SRQSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18788,
    "providerId": "SPUMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14842,
    "providerId": "SOSFK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14343,
    "providerId": "SNATU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13312,
    "providerId": "SNATS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13316,
    "providerId": "SPACH",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 15391,
    "providerId": "SPAAC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19047,
    "providerId": "SRQAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13894,
    "providerId": "SNAPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4646,
    "providerId": "SOFLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20088,
    "providerId": "SOFLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13310,
    "providerId": "SNAST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13320,
    "providerId": "SRQBT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13308,
    "providerId": "SNAPK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13501,
    "providerId": "SNATF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15392,
    "providerId": "STJFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13383,
    "providerId": "STLTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13360,
    "providerId": "STLCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4760,
    "providerId": "STLFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18482,
    "providerId": "SSHSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14922,
    "providerId": "STLMG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18300,
    "providerId": "STLTR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13844,
    "providerId": "STFCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13359,
    "providerId": "STLEC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13380,
    "providerId": "STLSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9493,
    "providerId": "STLOF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18789,
    "providerId": "SRQWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13352,
    "providerId": "STLBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18299,
    "providerId": "SRQTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9305,
    "providerId": "STFSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14923,
    "providerId": "STLPB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13363,
    "providerId": "STLFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13365,
    "providerId": "STLRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9358,
    "providerId": "STLCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13850,
    "providerId": "STLSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19369,
    "providerId": "STLSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13384,
    "providerId": "STLTF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13355,
    "providerId": "STLAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18881,
    "providerId": "SSHMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13351,
    "providerId": "STFCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13364,
    "providerId": "STLRH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14227,
    "providerId": "STLSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19368,
    "providerId": "STLPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13331,
    "providerId": "SSHBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14466,
    "providerId": "STCCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13356,
    "providerId": "STLBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21740,
    "providerId": "STLAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13390,
    "providerId": "STNGS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13859,
    "providerId": "SWSDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19167,
    "providerId": "SVQLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18505,
    "providerId": "SWASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13401,
    "providerId": "SWIDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11352,
    "providerId": "STTUV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14008,
    "providerId": "STROX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13857,
    "providerId": "STNCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13393,
    "providerId": "STOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18890,
    "providerId": "STRMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13398,
    "providerId": "SVQCI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13400,
    "providerId": "SVQTO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14043,
    "providerId": "STLXC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11351,
    "providerId": "STTRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15533,
    "providerId": "SYDMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4774,
    "providerId": "STSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13395,
    "providerId": "STSUK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14193,
    "providerId": "SYDAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18790,
    "providerId": "STLWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13389,
    "providerId": "STLWP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11354,
    "providerId": "STXBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18791,
    "providerId": "SYDCF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4938,
    "providerId": "SWFFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13845,
    "providerId": "SUBJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13399,
    "providerId": "SVQJU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19559,
    "providerId": "STOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18424,
    "providerId": "SUBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18364,
    "providerId": "SXRFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19487,
    "providerId": "STRAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13402,
    "providerId": "SYDRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19115,
    "providerId": "SUBFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13856,
    "providerId": "STLWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14832,
    "providerId": "SUBFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18793,
    "providerId": "SYXWS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13493,
    "providerId": "SYRDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5276,
    "providerId": "SYRAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19551,
    "providerId": "SZGLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13334,
    "providerId": "SZXJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19054,
    "providerId": "SZVEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13330,
    "providerId": "SZVMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20068,
    "providerId": "SZXDL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19969,
    "providerId": "SYXPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20090,
    "providerId": "SZGFL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18432,
    "providerId": "SYDSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14590,
    "providerId": "SYRMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13333,
    "providerId": "SZXRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15575,
    "providerId": "SYXPF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18886,
    "providerId": "SYXBW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13409,
    "providerId": "SYXRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18887,
    "providerId": "SYXMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19243,
    "providerId": "SYXXR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13406,
    "providerId": "SYXBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14141,
    "providerId": "SZXBA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18436,
    "providerId": "SYXSS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14925,
    "providerId": "SZVSW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4720,
    "providerId": "SZGSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13754,
    "providerId": "SYRDR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19913,
    "providerId": "SZVFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20067,
    "providerId": "SZXAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18888,
    "providerId": "SYXWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18462,
    "providerId": "SZBSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18472,
    "providerId": "SYXHS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13407,
    "providerId": "SYXMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14843,
    "providerId": "SYXEB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14924,
    "providerId": "SYXDB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15608,
    "providerId": "SYXFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15576,
    "providerId": "SZXFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13408,
    "providerId": "SYRVR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13405,
    "providerId": "SYRSH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19708,
    "providerId": "SZGJS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14084,
    "providerId": "SYXXB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15405,
    "providerId": "SZXGB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14012,
    "providerId": "SYXAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13403,
    "providerId": "SYRCA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14874,
    "providerId": "SYRFE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18548,
    "providerId": "SZXSF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19707,
    "providerId": "SYRSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4969,
    "providerId": "SZFSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13858,
    "providerId": "SYRRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13344,
    "providerId": "TLHEC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14926,
    "providerId": "SZXWT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14144,
    "providerId": "TGZMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19035,
    "providerId": "TCISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18898,
    "providerId": "TKGSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19966,
    "providerId": "TAOQJ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14157,
    "providerId": "TKDPR",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13336,
    "providerId": "TBSMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13341,
    "providerId": "TFOFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15394,
    "providerId": "TCCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19928,
    "providerId": "TAOFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14591,
    "providerId": "TLCTM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18882,
    "providerId": "TAODM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13342,
    "providerId": "TLCCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19965,
    "providerId": "SZXSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13338,
    "providerId": "TDMGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13340,
    "providerId": "TIXFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4374,
    "providerId": "SZXWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19947,
    "providerId": "TAOQF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18361,
    "providerId": "TGDFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14497,
    "providerId": "TCLSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13846,
    "providerId": "TCLCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18885,
    "providerId": "TIFMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13343,
    "providerId": "TLHDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13847,
    "providerId": "TBSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19220,
    "providerId": "TBSSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13848,
    "providerId": "TFSRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13345,
    "providerId": "TLHCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19968,
    "providerId": "TAOSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13335,
    "providerId": "TCLFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20100,
    "providerId": "TLHAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13337,
    "providerId": "TGUMC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13349,
    "providerId": "TLSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9907,
    "providerId": "TOLCW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14331,
    "providerId": "TPAAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18425,
    "providerId": "TLVSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13357,
    "providerId": "TPACR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19444,
    "providerId": "TLVLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14398,
    "providerId": "TLVRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19318,
    "providerId": "TNAJS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 15400,
    "providerId": "TLLAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13358,
    "providerId": "TPACY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19973,
    "providerId": "TNASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4889,
    "providerId": "TLHFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13354,
    "providerId": "TPABR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18301,
    "providerId": "TPAGR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13353,
    "providerId": "TOLTF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14757,
    "providerId": "TPADU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20775,
    "providerId": "TNJTX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13347,
    "providerId": "TLVBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13861,
    "providerId": "TLHSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13862,
    "providerId": "TPAAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15333,
    "providerId": "TLVAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18529,
    "providerId": "TNAHU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13366,
    "providerId": "TPAHF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13864,
    "providerId": "TPACW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13348,
    "providerId": "TOLCH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18327,
    "providerId": "TPAFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13361,
    "providerId": "TPAEF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18795,
    "providerId": "TNHWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13346,
    "providerId": "TOLFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13350,
    "providerId": "TOLRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13362,
    "providerId": "TPAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14013,
    "providerId": "TOLGP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13367,
    "providerId": "TPAIM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14014,
    "providerId": "TPAFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13375,
    "providerId": "TPATI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13868,
    "providerId": "TPAPC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18797,
    "providerId": "TPETW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14305,
    "providerId": "TPAMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14228,
    "providerId": "TPETM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13379,
    "providerId": "TPAWT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15577,
    "providerId": "TPELF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3568,
    "providerId": "TPAMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13376,
    "providerId": "TPATT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4930,
    "providerId": "TPATL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19085,
    "providerId": "TPATL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18796,
    "providerId": "TPEDM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15303,
    "providerId": "TPAOL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13374,
    "providerId": "TPAPG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14609,
    "providerId": "TPAXL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14592,
    "providerId": "TPAWA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5503,
    "providerId": "TPEWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13370,
    "providerId": "TPAMS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13371,
    "providerId": "TPANP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5103,
    "providerId": "TPAWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14811,
    "providerId": "TPECY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13368,
    "providerId": "TPALK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13867,
    "providerId": "TPALD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4027,
    "providerId": "TPASR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4698,
    "providerId": "TPAMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13372,
    "providerId": "TPASB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19971,
    "providerId": "TPEST",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19633,
    "providerId": "TPEHS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18815,
    "providerId": "TPASI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13381,
    "providerId": "TRNTO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13397,
    "providerId": "TULCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13394,
    "providerId": "TULCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14877,
    "providerId": "TRXFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14870,
    "providerId": "TRITN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14055,
    "providerId": "TSNJX",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4836,
    "providerId": "TPAWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4623,
    "providerId": "TPAWK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20104,
    "providerId": "TPEBE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13878,
    "providerId": "TPASH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20701,
    "providerId": "TPASH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13373,
    "providerId": "TPARW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13874,
    "providerId": "TPASC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13535,
    "providerId": "TULNO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13377,
    "providerId": "TPLRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14594,
    "providerId": "TSEMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13387,
    "providerId": "TSNLV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13391,
    "providerId": "TTNSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18798,
    "providerId": "TSNTW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13885,
    "providerId": "TULMK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13396,
    "providerId": "TULBV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19178,
    "providerId": "TTTSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13386,
    "providerId": "TSNTJ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13880,
    "providerId": "TULFC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19709,
    "providerId": "TSEXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14210,
    "providerId": "TTNTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14762,
    "providerId": "TTNRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14117,
    "providerId": "TULAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13882,
    "providerId": "TTNCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17046,
    "providerId": "TTNWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19348,
    "providerId": "TRSLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13392,
    "providerId": "TTNRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13388,
    "providerId": "TTNDF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13538,
    "providerId": "TULSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14760,
    "providerId": "TSERZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18943,
    "providerId": "TSNBI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13540,
    "providerId": "TULSE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13378,
    "providerId": "TRICC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13494,
    "providerId": "TULDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5507,
    "providerId": "TUCSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4868,
    "providerId": "TTNEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14610,
    "providerId": "TULWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2809,
    "providerId": "TUSRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11065,
    "providerId": "TUSRZ",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4825,
    "providerId": "TUNSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13543,
    "providerId": "TULTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14930,
    "providerId": "TYOGZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13544,
    "providerId": "TUPFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18799,
    "providerId": "TYOWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12919,
    "providerId": "TVCFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13549,
    "providerId": "TUSCE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4882,
    "providerId": "TUSFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13555,
    "providerId": "TXKTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7981,
    "providerId": "TUSOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13550,
    "providerId": "TUSOR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18463,
    "providerId": "TYOMY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14304,
    "providerId": "TXKRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14928,
    "providerId": "TYOAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15304,
    "providerId": "TUSTA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13553,
    "providerId": "TVCCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13545,
    "providerId": "TUSAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13554,
    "providerId": "TXKCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18465,
    "providerId": "TYOYS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15395,
    "providerId": "TUSAD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13558,
    "providerId": "TYORZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13548,
    "providerId": "TUSTN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14846,
    "providerId": "TYOMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13551,
    "providerId": "TUSRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17052,
    "providerId": "TUSAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 17051,
    "providerId": "TUSSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12920,
    "providerId": "TYOCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13561,
    "providerId": "TYRCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18464,
    "providerId": "TYOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12916,
    "providerId": "TUSCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19158,
    "providerId": "TULTL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14509,
    "providerId": "TWFTW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14844,
    "providerId": "TYNWM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12918,
    "providerId": "TUSSP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12917,
    "providerId": "TUSWC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12915,
    "providerId": "TULWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 3861,
    "providerId": "TUSWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4745,
    "providerId": "TUSWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18965,
    "providerId": "VCEGL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18899,
    "providerId": "USMSS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12921,
    "providerId": "TYSKD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13496,
    "providerId": "UROAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13495,
    "providerId": "TYSXW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12922,
    "providerId": "TYSSP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18874,
    "providerId": "USMWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12923,
    "providerId": "VBSBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18334,
    "providerId": "VCEVM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18739,
    "providerId": "UIOSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19091,
    "providerId": "USMVL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19025,
    "providerId": "UKYLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13565,
    "providerId": "TYSKE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18918,
    "providerId": "VBOFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12928,
    "providerId": "VCECY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14143,
    "providerId": "UOXTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14847,
    "providerId": "VCTCU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13576,
    "providerId": "VCEAK",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19245,
    "providerId": "VCELC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14266,
    "providerId": "USMRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12925,
    "providerId": "USMBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14929,
    "providerId": "TYSCK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15331,
    "providerId": "VBOBL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18872,
    "providerId": "USMMD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14510,
    "providerId": "TYRTR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14845,
    "providerId": "TYSCP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13569,
    "providerId": "VBORI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14010,
    "providerId": "TYRVT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14891,
    "providerId": "UTNUP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14342,
    "providerId": "UKYRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13571,
    "providerId": "UIODT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14341,
    "providerId": "VCEJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13570,
    "providerId": "VBORL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13567,
    "providerId": "TYSKX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18335,
    "providerId": "UPGFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18917,
    "providerId": "UOXBV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18871,
    "providerId": "UKYWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14933,
    "providerId": "VSAMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14306,
    "providerId": "VCTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18868,
    "providerId": "VLCWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5032,
    "providerId": "WASAG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13580,
    "providerId": "VIEFG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14611,
    "providerId": "VPSSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13603,
    "providerId": "VLDFV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13600,
    "providerId": "VKSCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4639,
    "providerId": "VIELC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19339,
    "providerId": "VIELC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14559,
    "providerId": "VPSCF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14500,
    "providerId": "WASAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13604,
    "providerId": "VLLPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14491,
    "providerId": "VPSWB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4645,
    "providerId": "VIEIL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18962,
    "providerId": "VIEIL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13591,
    "providerId": "VITGE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12926,
    "providerId": "VLDCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13602,
    "providerId": "VLCVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13497,
    "providerId": "VELTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14389,
    "providerId": "VLCAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5455,
    "providerId": "VPSFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14931,
    "providerId": "VPSDF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14932,
    "providerId": "VPSTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14244,
    "providerId": "VSAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13585,
    "providerId": "VIERZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12924,
    "providerId": "VICVI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13624,
    "providerId": "WASAR",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13586,
    "providerId": "VIESE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13623,
    "providerId": "WASAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14771,
    "providerId": "VIEOX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13615,
    "providerId": "VRPFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4666,
    "providerId": "VIEMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13579,
    "providerId": "VIEHW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18336,
    "providerId": "VTZFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13642,
    "providerId": "VISMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13581,
    "providerId": "VIEAT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13608,
    "providerId": "VLLAN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12929,
    "providerId": "VPSFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13626,
    "providerId": "VGOPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14261,
    "providerId": "VVIMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14333,
    "providerId": "WASCO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12930,
    "providerId": "WASCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14259,
    "providerId": "WASMV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13499,
    "providerId": "WASIN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13596,
    "providerId": "WASFR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5052,
    "providerId": "WASOW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5456,
    "providerId": "WASGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14810,
    "providerId": "WASMO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13610,
    "providerId": "WASPC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13498,
    "providerId": "WASFT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12927,
    "providerId": "WASAX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13643,
    "providerId": "WASBT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13597,
    "providerId": "WASKB",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 5119,
    "providerId": "WASCW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13598,
    "providerId": "WASFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5054,
    "providerId": "WASBV",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13646,
    "providerId": "WASCG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12938,
    "providerId": "WASJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13639,
    "providerId": "WASBN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13625,
    "providerId": "WASNA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11068,
    "providerId": "WASGO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13645,
    "providerId": "WASCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13644,
    "providerId": "WASBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13592,
    "providerId": "WASCV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13755,
    "providerId": "WASGN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13648,
    "providerId": "WASCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14807,
    "providerId": "WASMH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13612,
    "providerId": "WASNY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12936,
    "providerId": "WASOK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18869,
    "providerId": "WASHW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13595,
    "providerId": "WASDC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13593,
    "providerId": "WASFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13599,
    "providerId": "WASFC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13614,
    "providerId": "WASPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13594,
    "providerId": "WASDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13601,
    "providerId": "WASGW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13613,
    "providerId": "WASPM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13611,
    "providerId": "WASMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14848,
    "providerId": "WASLN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12935,
    "providerId": "WASGT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12934,
    "providerId": "WASDK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4804,
    "providerId": "WASNS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13757,
    "providerId": "WASFB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13605,
    "providerId": "WASNH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13649,
    "providerId": "WASCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12944,
    "providerId": "WASWG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14298,
    "providerId": "WASWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12943,
    "providerId": "WASVA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13616,
    "providerId": "WASRR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4702,
    "providerId": "WASSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13629,
    "providerId": "WASWN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13641,
    "providerId": "WASSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13622,
    "providerId": "WASRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13620,
    "providerId": "WASRV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18859,
    "providerId": "WASRL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13621,
    "providerId": "WASSB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13619,
    "providerId": "WASRB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11289,
    "providerId": "WASWE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5476,
    "providerId": "WASVS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13631,
    "providerId": "WASUS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13630,
    "providerId": "WASWD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11287,
    "providerId": "WASRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12937,
    "providerId": "WASRA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14036,
    "providerId": "WASXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12939,
    "providerId": "WASSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13628,
    "providerId": "WASSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19305,
    "providerId": "WASTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13638,
    "providerId": "WASTS",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13618,
    "providerId": "WASPT",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 9920,
    "providerId": "WASSV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 17021,
    "providerId": "WASXW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18861,
    "providerId": "WASXW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5169,
    "providerId": "WASSS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9253,
    "providerId": "WASSS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12941,
    "providerId": "WASUM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 1936,
    "providerId": "WASRT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12942,
    "providerId": "WASTG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18860,
    "providerId": "WASWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4603,
    "providerId": "WASTW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14777,
    "providerId": "WASXF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13627,
    "providerId": "WASTY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13617,
    "providerId": "WASPY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12940,
    "providerId": "WASTN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 1647,
    "providerId": "WASWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19517,
    "providerId": "WASSX",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13650,
    "providerId": "WJFCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18864,
    "providerId": "WHRWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14237,
    "providerId": "WVBWA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14094,
    "providerId": "WCOTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12948,
    "providerId": "WJFRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13636,
    "providerId": "WHRBI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19990,
    "providerId": "WUXSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12946,
    "providerId": "WCOLL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15332,
    "providerId": "WROAR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15401,
    "providerId": "WFGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13640,
    "providerId": "WHRCO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5072,
    "providerId": "WASSR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18862,
    "providerId": "WAWWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19999,
    "providerId": "WUXJS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13633,
    "providerId": "WCTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12945,
    "providerId": "WCOCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14935,
    "providerId": "WJFTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19422,
    "providerId": "WAWSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13632,
    "providerId": "WAWPL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13634,
    "providerId": "WAWCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19543,
    "providerId": "WJFEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19997,
    "providerId": "WNZSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19991,
    "providerId": "WUXWS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13635,
    "providerId": "WGOTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11069,
    "providerId": "WHRRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 16351,
    "providerId": "WHRBW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18873,
    "providerId": "WHRBW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14644,
    "providerId": "WDHFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12947,
    "providerId": "WHRDO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13637,
    "providerId": "WFGRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13647,
    "providerId": "WHRVI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18497,
    "providerId": "WHRLT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13652,
    "providerId": "WUHBR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19021,
    "providerId": "WAWLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14235,
    "providerId": "WVBPE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18865,
    "providerId": "WUHWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18854,
    "providerId": "YEGWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13655,
    "providerId": "YEGEW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14880,
    "providerId": "YEGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14936,
    "providerId": "YEGBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18853,
    "providerId": "XMNWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12950,
    "providerId": "XVUDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19203,
    "providerId": "YEGEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13651,
    "providerId": "XRYLI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18390,
    "providerId": "YEGFW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14533,
    "providerId": "YFCDF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4793,
    "providerId": "YEGFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14308,
    "providerId": "YEGES",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19993,
    "providerId": "XIYSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19992,
    "providerId": "XIYNC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4923,
    "providerId": "YEGAF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15578,
    "providerId": "YGKFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13656,
    "providerId": "YGKCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18533,
    "providerId": "YEISI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19509,
    "providerId": "YEIAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18386,
    "providerId": "YEGWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14313,
    "providerId": "YAMDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18867,
    "providerId": "XIYWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18851,
    "providerId": "XIYWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18900,
    "providerId": "XMNSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14521,
    "providerId": "YEGEC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13653,
    "providerId": "XVHPB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2244,
    "providerId": "YGKRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11135,
    "providerId": "YGKRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9136,
    "providerId": "YBGJS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14534,
    "providerId": "YBGJS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11155,
    "providerId": "YGKDK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18866,
    "providerId": "XIYMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14164,
    "providerId": "YEGTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18852,
    "providerId": "XMNMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14853,
    "providerId": "YBYCY",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4829,
    "providerId": "YEGEF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15559,
    "providerId": "YEGEF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12949,
    "providerId": "YEGCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14145,
    "providerId": "YIWMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14536,
    "providerId": "YKFDW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4788,
    "providerId": "YKAFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 18855,
    "providerId": "YHZWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14040,
    "providerId": "YHZDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13502,
    "providerId": "YOWAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18856,
    "providerId": "YMYWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13951,
    "providerId": "YOWCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13658,
    "providerId": "YHZCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14593,
    "providerId": "YKFDG",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19176,
    "providerId": "YHZFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20071,
    "providerId": "YNZAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14506,
    "providerId": "YOWDM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5022,
    "providerId": "YHMSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14937,
    "providerId": "YNGNR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14972,
    "providerId": "YKDTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13932,
    "providerId": "YNGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4900,
    "providerId": "YLWFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13500,
    "providerId": "YKFCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14375,
    "providerId": "YKAFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19995,
    "providerId": "YNTSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19177,
    "providerId": "YOWFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13936,
    "providerId": "YMYMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19994,
    "providerId": "YNJSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12952,
    "providerId": "YLWFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12954,
    "providerId": "YNGRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19926,
    "providerId": "YHMFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11136,
    "providerId": "YOWMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14517,
    "providerId": "YNGCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14939,
    "providerId": "YOWFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13935,
    "providerId": "YNGFN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14312,
    "providerId": "YLWOK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13659,
    "providerId": "YHZRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13931,
    "providerId": "YKMFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13657,
    "providerId": "YHZMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5489,
    "providerId": "YKFFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20881,
    "providerId": "YOWFA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12951,
    "providerId": "YKFFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13953,
    "providerId": "YSBTS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14648,
    "providerId": "YQRAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18857,
    "providerId": "YSEWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13941,
    "providerId": "YSBFI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13503,
    "providerId": "YQBMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14531,
    "providerId": "YQMDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13937,
    "providerId": "YOWOE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14522,
    "providerId": "YSEWV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12953,
    "providerId": "YULCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20882,
    "providerId": "YULFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18858,
    "providerId": "YULLE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18385,
    "providerId": "YQUFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15579,
    "providerId": "YQBEP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14940,
    "providerId": "YQTTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5098,
    "providerId": "YOWWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14973,
    "providerId": "YQRRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4885,
    "providerId": "YQRFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14369,
    "providerId": "YQFTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18513,
    "providerId": "YOWSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19324,
    "providerId": "YTYFP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5174,
    "providerId": "YQMFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14975,
    "providerId": "YULBD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14527,
    "providerId": "YQRDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5149,
    "providerId": "YULAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14596,
    "providerId": "YRQDR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13940,
    "providerId": "YQAJW",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14085,
    "providerId": "YQBCQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13942,
    "providerId": "YQMRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13505,
    "providerId": "YULDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13954,
    "providerId": "YULAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13955,
    "providerId": "YULFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13943,
    "providerId": "YQARI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14535,
    "providerId": "YSCDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13504,
    "providerId": "YSJAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14310,
    "providerId": "YQGTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19710,
    "providerId": "YULHY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18294,
    "providerId": "YQBPU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13756,
    "providerId": "YQMFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11141,
    "providerId": "YQBDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19907,
    "providerId": "YQBLF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14971,
    "providerId": "YOWTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19644,
    "providerId": "YQGFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14938,
    "providerId": "YQLFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2557,
    "providerId": "YULRM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11070,
    "providerId": "YULRM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12958,
    "providerId": "YVRSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14148,
    "providerId": "YXUTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4841,
    "providerId": "YWGWF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13506,
    "providerId": "YVEFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15334,
    "providerId": "YXECY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14597,
    "providerId": "YULMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14884,
    "providerId": "YXETS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5453,
    "providerId": "YVRWS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4735,
    "providerId": "YVRSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4893,
    "providerId": "YULSA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13961,
    "providerId": "YWGFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5133,
    "providerId": "YULMV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13959,
    "providerId": "YULRA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12955,
    "providerId": "YULMA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4851,
    "providerId": "YVRWC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4687,
    "providerId": "YVRFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13957,
    "providerId": "YULRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19370,
    "providerId": "YVRVS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14519,
    "providerId": "YVRDV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13962,
    "providerId": "YXURI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14523,
    "providerId": "YWGDW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14315,
    "providerId": "YXEDB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14015,
    "providerId": "YVRPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13956,
    "providerId": "YULMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14022,
    "providerId": "YVRAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13958,
    "providerId": "YVRDR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4606,
    "providerId": "YVRWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4637,
    "providerId": "YULWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13508,
    "providerId": "YXUCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14779,
    "providerId": "YVRJW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14309,
    "providerId": "YXUDL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18916,
    "providerId": "YXSCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4855,
    "providerId": "YXEFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4615,
    "providerId": "YVRGW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19094,
    "providerId": "YVREL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14529,
    "providerId": "YVRDB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13963,
    "providerId": "YYCAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13960,
    "providerId": "YVRDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12956,
    "providerId": "YULSH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4931,
    "providerId": "YVRSF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4599,
    "providerId": "YULSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14374,
    "providerId": "YWGAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5918,
    "providerId": "YXUFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4764,
    "providerId": "YYCCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14508,
    "providerId": "YYCCA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12959,
    "providerId": "YYZFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8584,
    "providerId": "YYZBM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12957,
    "providerId": "YYCRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14524,
    "providerId": "YYCDC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18934,
    "providerId": "YYCWA",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4795,
    "providerId": "YYJFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4876,
    "providerId": "YYZDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14532,
    "providerId": "YYTDS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13965,
    "providerId": "YYJMC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14530,
    "providerId": "YYGDP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5107,
    "providerId": "YYZFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4681,
    "providerId": "YYJWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13887,
    "providerId": "YYZAP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4803,
    "providerId": "YYCCF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4695,
    "providerId": "YYCFP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4945,
    "providerId": "YYCUL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4810,
    "providerId": "YYZBW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11213,
    "providerId": "YYZDL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14507,
    "providerId": "YYCBV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15397,
    "providerId": "YYZCC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13892,
    "providerId": "YYZBP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14612,
    "providerId": "YYZMD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11143,
    "providerId": "YYJVO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14568,
    "providerId": "YYCFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19179,
    "providerId": "YYCSC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15259,
    "providerId": "YYZMK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4767,
    "providerId": "YYCWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11215,
    "providerId": "YYZDA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14869,
    "providerId": "YYCXA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4751,
    "providerId": "YYCES",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5158,
    "providerId": "YYZAL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13758,
    "providerId": "YYTFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13964,
    "providerId": "YYCDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5275,
    "providerId": "YYCEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19544,
    "providerId": "YYCEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15258,
    "providerId": "YYZMH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4913,
    "providerId": "YYZEL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4601,
    "providerId": "YYZGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14941,
    "providerId": "YYCCR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14147,
    "providerId": "YYCCS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6926,
    "providerId": "YYZAE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11228,
    "providerId": "YYZCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11137,
    "providerId": "YYZEC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13891,
    "providerId": "YYZMM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4873,
    "providerId": "YYTSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4697,
    "providerId": "ZAGSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14518,
    "providerId": "YYZSB",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4812,
    "providerId": "ZRHFP",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13944,
    "providerId": "ZPZDE",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13734,
    "providerId": "ZRHDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13945,
    "providerId": "ZRHCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13897,
    "providerId": "YYZOT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13896,
    "providerId": "YYZRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13893,
    "providerId": "YYZMU",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12961,
    "providerId": "YYTCY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18534,
    "providerId": "YYZSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4596,
    "providerId": "YYZTC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18878,
    "providerId": "ZISMD",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 15335,
    "providerId": "YYZMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4823,
    "providerId": "ZAGWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18473,
    "providerId": "ZHASI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13946,
    "providerId": "ZRHBR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14944,
    "providerId": "YYZXM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11071,
    "providerId": "YYZRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 2118,
    "providerId": "YYZRZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4708,
    "providerId": "ZRHSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13899,
    "providerId": "YYZTS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18535,
    "providerId": "ZISSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4612,
    "providerId": "YYZWI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12960,
    "providerId": "YYZMQ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14885,
    "providerId": "ZUHMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13890,
    "providerId": "YYZMS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12962,
    "providerId": "YYZTD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20056,
    "providerId": "ZQZEL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14647,
    "providerId": "ZNZMR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9240,
    "providerId": "YYZMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14942,
    "providerId": "YYZMT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4805,
    "providerId": "YYZVF",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12963,
    "providerId": "YYZVN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13898,
    "providerId": "YYZTM",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13900,
    "providerId": "YYZWY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18536,
    "providerId": "ZUHZS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 4905,
    "providerId": "ZRHZS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13895,
    "providerId": "YYZSV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18879,
    "providerId": "YYZTH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 15563,
    "providerId": "YYZPA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20065,
    "providerId": "ZUHXR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14377,
    "providerId": "ZRHAK",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19343,
    "providerId": "YYZXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11869,
    "providerId": "BKKSP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11668,
    "providerId": "DXBEA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13385,
    "providerId": "TSNER",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14274,
    "providerId": "XIYER",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12755,
    "providerId": "LONER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 15297,
    "providerId": "LONER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14195,
    "providerId": "BJSIM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13489,
    "providerId": "DXBHC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11763,
    "providerId": "BRUER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11730,
    "providerId": "BAHER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13251,
    "providerId": "RUHRY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13158,
    "providerId": "SAOER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11868,
    "providerId": "BKKEA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11738,
    "providerId": "BKKER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12349,
    "providerId": "JKTER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11748,
    "providerId": "BOMER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13418,
    "providerId": "BKKBP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11595,
    "providerId": "DXBER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13190,
    "providerId": "PTYER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11926,
    "providerId": "BUDER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14355,
    "providerId": "TSNTI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13215,
    "providerId": "SELER",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13282,
    "providerId": "SKBRB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5065,
    "providerId": "SJUXR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 2427,
    "providerId": "SJUXR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13947,
    "providerId": "SJUMR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18562,
    "providerId": "LHRSI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12446,
    "providerId": "LGWGS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13291,
    "providerId": "SLCPS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13284,
    "providerId": "SLCDP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14303,
    "providerId": "SLCCD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18786,
    "providerId": "SHEMD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13270,
    "providerId": "SHARN",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13269,
    "providerId": "SHALU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19925,
    "providerId": "SHADF",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 13262,
    "providerId": "SHACP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18517,
    "providerId": "YULLS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11142,
    "providerId": "YULDB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13261,
    "providerId": "SACMC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13256,
    "providerId": "SACCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13805,
    "providerId": "SACCE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14854,
    "providerId": "YQRFI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14405,
    "providerId": "RTMMN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14504,
    "providerId": "CPTST",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14948,
    "providerId": "CPTDO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14950,
    "providerId": "CPTLA",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14949,
    "providerId": "CPTDV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14197,
    "providerId": "CPTCF",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 14024,
    "providerId": "CPTCM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14269,
    "providerId": "CPTCA",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19170,
    "providerId": "CPEHL",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4584,
    "providerId": "CPELC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 19079,
    "providerId": "CPELC",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 12599,
    "providerId": "COSTW",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 4954,
    "providerId": "CORSI",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 11649,
    "providerId": "ALBFI",
    "isDerbyGood": 0,
    "isIBSGood": 1
  },
  {
    "hotelId": 14764,
    "providerId": "ALBFD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11643,
    "providerId": "AGSFS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19329,
    "providerId": "AGRLC",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11638,
    "providerId": "AGPMB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 11640,
    "providerId": "AGPPY",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14525,
    "providerId": "YSJDB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 14381,
    "providerId": "BJSJC",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8840,
    "providerId": "HOUTO",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13313,
    "providerId": "SNSRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7836,
    "providerId": "SJCMH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6985,
    "providerId": "ATLFR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18821,
    "providerId": "ATLLM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20672,
    "providerId": "REHRB",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5225,
    "providerId": "PWMAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7887,
    "providerId": "STLFE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19320,
    "providerId": "ASEXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 19321,
    "providerId": "ASEXR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 18600,
    "providerId": "CANWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20623,
    "providerId": "ASEWH",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 6992,
    "providerId": "ATLPS",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 7417,
    "providerId": "HOUHM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18833,
    "providerId": "AUSWH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5892,
    "providerId": "MKEMR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12232,
    "providerId": "IADDL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21755,
    "providerId": "NYCAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 5650,
    "providerId": "SATTD",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10436,
    "providerId": "TPATS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7138,
    "providerId": "CHIIL",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 8419,
    "providerId": "NYCFL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7808,
    "providerId": "SFOPF",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9517,
    "providerId": "SDFLE",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9788,
    "providerId": "AUSAT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8793,
    "providerId": "FLLAS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9271,
    "providerId": "CMHAD",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12066,
    "providerId": "FLLRP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8304,
    "providerId": "LAXSV",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13018,
    "providerId": "PDXLO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8278,
    "providerId": "INDSW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 20050,
    "providerId": "MKEAL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 20401,
    "providerId": "TLHCT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 13796,
    "providerId": "RICDT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 19505,
    "providerId": "DXBSZ",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 4778,
    "providerId": "ALGSI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9684,
    "providerId": "CHIRT",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12684,
    "providerId": "DAYRI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5759,
    "providerId": "ATLCP",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12466,
    "providerId": "CLTCG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12335,
    "providerId": "JAXJS",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8169,
    "providerId": "CLTPV",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7027,
    "providerId": "BDLCT",
    "isDerbyGood": 0,
    "isIBSGood": 0
  },
  {
    "hotelId": 20308,
    "providerId": "AUSLN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 9588,
    "providerId": "WASRH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14934,
    "providerId": "WASPG",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14201,
    "providerId": "RICRL",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 14549,
    "providerId": "MCISP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 18511,
    "providerId": "YXESI",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10685,
    "providerId": "CHISN",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 21641,
    "providerId": "HOUFR",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9329,
    "providerId": "ATLCH",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11018,
    "providerId": "DFWFR",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 10417,
    "providerId": "LONWI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21750,
    "providerId": "LITDT",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 12116,
    "providerId": "GRRHO",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 21510,
    "providerId": "JACAK",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 8048,
    "providerId": "ATLTM",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 11899,
    "providerId": "BOSQU",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12119,
    "providerId": "GRRRW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  },
  {
    "hotelId": 5509,
    "providerId": "TPASP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 9250,
    "providerId": "TPASP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13606,
    "providerId": "VPSCY",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 13609,
    "providerId": "VPSRI",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 12041,
    "providerId": "CHIAP",
    "isDerbyGood": 1,
    "isIBSGood": 0
  },
  {
    "hotelId": 7240,
    "providerId": "DENEW",
    "isDerbyGood": 1,
    "isIBSGood": 1
  }

]


/* GET home page. */
router.get('/', (req, res, next) => {

  let listToCheck = [];

  harleysList.map(hotel => {
    if (hotel.isDerbyGood == "0" && hotel.isIBSGood == "1") {
      listToCheck.push(hotel);
    }

    console.log('Passed the vibe check');
  });



  
  // hiltonList.map(hotel => {
  //   if(hiltonHotelNames.includes(hotel)){
  //     console.log('yeapppp ::::::::::', hotel)
  //     counter++;
  //     filterItems(hiltonHotelNames, hotel)
  //   }else{

  //   }
  // })

  // hiltonHotelNames.map(hotel => {
  //   if(hiltonList.includes(hotel)){

  //   }
  // })




  // console.log('THE TOTAL AMOUNT OF DASHBOARD HOTELS THAT WERE IN THE DERBY HOTEL LIST ARE ::::: ', counter)
  // console.log('othersss: ', others.length)
  // console.log('THE TOTAL AMOUNT OF UNDEFINED HOTELS ON DERBYS LIST IS :::::: ', uncounter);
  // // console.log('MISSING HOTEL LIST COUNT : ',  missingHotels );
  // // console.log('DUPLICATES LIST  IS  : ', duplicates);
  // console.log('THE DUPLICATES LIST TOTAL AT : ', duplicates.length);

  //REMOVE DUPLICATE FUNCTION
  // function removeDuplicates(array) {
  //   const result = [];
  //   for (let i = 0; i < array.length; i++) {
  //     let exists = false;
  //     for (j = 0; j < result.length; j++) {
  //       if (array[i] === result[j]) {
  //         exists = true;
  //         break;
  //       }
  //     }
  //     if (!exists) {
  //       result.push(array[i]);
  //     }
  //   }
  //   return result;
  // }


  // let finally = hiltonHotelNames.filter(val => !parsedFilteredDashboardHiltonList.includes(val));


  //   let result = hiltonHotelNames.filter(val => !parsedFilteredDashboardHiltonList.includes(val));

  //   let comparison = parsedFilteredDashboardHiltonList.filter(val => !hiltonHotelNames.includes(val));

  // let finalz = hiltonHotelNames.filter(val => !comparison.includes(val));



  //   console.log('THE FINAL COMPARISON ::::: ', comparison);
  // console.log('SHIT SHIT HI :::  ', finalz.length)
  // let final = [...new Set(result)];
  // console.log('THE FINAL REUSLT :::: ', final.length)
  // console.log('THE MISSING HOTELLSL : ', missingHotels)
  // console.log('RANDOM RANDOM : ', hello.l)
  // console.log(' FINAL LIST LENGTH ::: ', hiltonHotelNames.length);
  res.status(200).json(listToCheck);
});

router.get('/ref', (req, res, next) => {

  res.status(200).json(hiltonRefugees);
});


router.get('/hamptons', (req, res, next) => {
  res.status(200).json(hamptons)
});

router.get('/others', (req, res, next) => {
  res.status(200).json(others)
});

module.exports = router;

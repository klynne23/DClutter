const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/donationcenters'
);

const centerSeed = [{
        name: "4 Paws Rescue Team",
        location: "Merrifield, VA 22116",
        phone: "(703) 715-6369",
        accepts: ["pet supplies", "household goods", "calling cards", "gift cards"],
        website: "www.fourpaws.org",
        details: "Accepts: Hand towels and sheets, cat litter and/or cat food, cat carriers, cat beds, small cardboard boxes (used as litter boxes at adoption fairs), cat toys, stamps, calling cards, gift cards. Donated items can be taken to any adoption fair.",
        info: "Dates and locations are available at www.fourpaws.org or call 703-715-MEOW to make other arrangements.",
        lat: 38.8742611,
        lng: -77.2266208
    },
    {
        name: "A Woman's Choice",
        location: "6201 Leesburg Pike, Suite 220, Falls Church, VA 22044",
        phone: "(703) 538-4305 ",
        accepts: ["baby items", "vehicles"],
        email: "info@donateforacause.org",
        details: "Accepts: New and/or slightly used baby clothing from newborn to size 5 Toddler, maternity Clothes, baby accessories, cribs (with all parts and instructions), car seats (with all straps) and strollers.",
        info: "Items can be dropped off at the Center Monday through Friday from 10 am until 2 pm or by special appointment. Donate your vehicle at 1-888-638-1171",
        lat: 38.87349,
        lng: -77.156971
    },
    {
        name: "Second Story - The Abused and Homeless Children's Refuge",
        location: "2100 Gallows Road, Vienna, VA 22182",
        phone: "(703) 506-9191",
        accepts: ["toiletries", "cleaning supplies", "containers", "office supplies"],
        doesnotaccept: ["TVs", "furniture", "stuffed toys"],
        details: "Accepts: Toiletries, cleaning supplies, hotel samples, storage containers and storage bins, and office supplies, (copy paper, ink cartridges, etc.).",
        info: "We accept Monday-Friday, 8am - 9pm, and Saturday/Sundays, 9am - 9pm.",
        lat: 38.906248,
        lng: -77.222248
    },
    {
        name: "Animal Welfare League of Arlington",
        location: "2650 S. Arlington Mill Dr., Arlington, VA 22206",
        phone: "(703) 931-9241",
        accepts: ["household goods", "pet supplies", "office supplies"],
        email: "donate@awla.org",
        details: `Accepts:
            "HOUSEHOLD GOODS:  Towels, wash cloths, hand towels, pillow cases, Shoeboxes, Plain non-electric blankets (new or in very good shape)
            \nPET SUPPLIES: Animal beds(only those small enough to be washed)
            Stainless steel or ceramic bowls
            Unopened cat or dog food and treats,
            Hard rubber and nylon toys(not chewed)
            Dog leashes in good shape
            Dog and Cat collars in good shape
            Crates in good repair(no rust and all parts in good working order)
            New Cat litter boxes and Clay,
            Care Fresh or Non - clumping litter
            Plastic or rubber cat toys(nothing fuzzy or furry),
            Wooden chew items and accessories
            for rabbits and small rodents(new only)
            Bird toys and accessories
            Cages
            for birds / ferrets and aquariums in good shape
            Hay
           \n OFFICE SUPPLIES
            Clorox Cleaning Wipes,
            Reams of Colored and White Paper,
            Pens(blue or black),
            Video Cameras
            for animal control trucks,
            Postage Stamps,
            Avery Labels,
            especially #5266 and # 5260,
            `,
        info: `We often need large quantities of food and other supplies, including new items for prizes for special events such as the Annual Walk for the Animals and Casino Night and Silent Auction.
            To make a donation,
            contact the Development Manager at 703 - 931 - 9441 ext .220 or donate @awla.org`,
        lat: 38.8435057,
        lng: -77.0931121
    },
    {
        name: "Bikes for the World",
        location: "11720 Parklawn Dr, Rockville, MD 20852",
        phone: "(703) 740-7856",
        accepts: ["bicycles", "bicycle parts", "tools", "sewing machines"],
        website: "www.bikesfortheworld.org",
        details: "Accepts: Bicycles, bicycle spare parts & accessories, hand tools (wrenches, screwdrivers, and hammers of all types), portable sewing machines.",
        info: "Visit website for local collection schedule www.bikesfortheworld.org or call 703-740-7856 to make arrangements. Bikes for the World picks up bikes at bike shops such as Bob’s Bikes in Poolesville, MD.",
        lat: 39.04713,
        lng: -77.10247
    },
    {
        name: "Black Student Fund",
        location: "3636 16th Street, NW, Washington, DC",
        phone: "202-387-1414",
        accepts: ["school supplies", "toys", "office supplies", "clothing"],
        details: "Accepts: School supplies, toys, office supplies, clothes, etc.",
        lat: 38.9064754,
        lng: -77.0364091
    },
    {
        name: "Capital Area Food Bank",
        location: "645 Taylor St. NE, Washington, DC 20017",
        phone: "(202) 526-5344                           ",
        accepts: ["non-perishable food"],
        email: "mgillespie@capitalareafoodbank.org",
        details: "Accepts: Non-perishables only",
        info: `Call or email to arrange your donation today!
            Mike Gillespie(202) 644 - 9865 ext.865
            mgillespie @capitalareafoodbank.org`,
        lat: 38.9402278,
        lng: -76.9967922
    },
    {
        name: "Capital Area Food Bank",
        location: "6833 Hill Park Drive, Lorton VA 22079",
        phone: "(703) 541-3063",
        accepts: ["non-perishable food"],
        email: "mgillespie@capitalareafoodbank.org",
        details: "Accepts: Non-perishables only",
        info: `Call or email to arrange your donation today!
            Mike Gillespie(202) 644 - 9865 ext.865
            mgillespie @capitalareafoodbank.org`,
        lat: 38.74171,
        lng: -77.18006
    },
    {
        name: "Capital Hospice Thrift Shop",
        location: "Willston I Shopping Center, 6172 Arlington Blvd., Falls Church, VA",
        phone: "(703) 532-5355",
        accepts: ["clothing", "household goods", "furniture"],
        details: "Accepts: We accept gently-used clothing (boutique and other), household items (glass, ceramics, small appliances) and some furniture (not upholstered), Wednesdays through Sundays.",
        info: "Turn your goods into gold for patient care. Open 10 am - 5 pm Mondays through Saturday, 11- 4 Sunday",
        lat: 38.8723761,
        lng: -77.1555717
    },
    {
        name: "Christ House",
        location: "1717 Columbia Road, NW, Washington, DC",
        phone: "(202) 328-1100",
        accepts: ["clothing", "toiletries", "computer equipment", "musical instruments", "art supplies"],
        details: "Accepts: Clothing, toiletries, some computer equipment, musical instruments, CDs and art supplies for the Kairos Program.",
        lat: 38.928122,
        lng: -77.023094
    },
    {
        name: "DC Coalition for the Homeless",
        location: "1234 Massachusetts Ave NW, Washington, DC 20005",
        phone: "202-347-8870",
        accepts: ["clothing", "furniture"],
        details: "Accepts: Clothing items, household items in good conditions such as sofas, beds, and dressers. We pick up and accept drop offs at our various programs sites that are listed on our website.",
        lat: 38.904206,
        lng: -77.0293086
    },
    {
        name: "DC Habitat for Humanity Wish List ",
        location: "843 Upshur St. NW, Washington, DC",
        phone: "(202) 882-4600",
        accepts: ["tools", "vehicles", "professional services", "warehouse space", "food", "office supplies"],
        details: "Accepts: Tools, Van, Pickup truck, Warehouse space, Printing Services, Lunch donations for volunteers, Office supplies, new cordless drills, new power tools",
        lat: 38.9420492,
        lng: -77.0245622
    },
    {
        name: "Days End Farm Horse Rescue",
        location: "15856 Frederick Rd., Lisbon, MD 21765",
        phone: "(301) 854-5037, (410) 442-1564",
        accepts: ["vehicles", "office supplies", "animal feed"],
        details: "Accepts: Working cars, good grass hay, office supplies.",
        info: "Call to arrange drop-off or visit our Wish List for much needed items.",
        lat: 39.33477,
        lng: -77.064655
    },
    {
        name: "Food & Friends",
        location: "219 Riggs Road NE, Washington, DC 20011",
        phone: "(202) 269-6880",
        accepts: ["office equipment", "small appliances", "office supplies", "non-perishable food"],
        details: `Accepts: Large Items: copiers, color printers, desktop computers, LCD projector, cars
            Small Items: PUR Water filters and portable microwaves
            for our clients,
            copy paper(colored and white),
            Avery labels 5160 or 6163,
            AAA and AA batteries,
            Food items such as canned food,
            cereal,
            shelf stable milk,
            peanut butter,
            cooking oils.`,
        info: `For questions on making a donation please call (202) 269-6880`,
        lat: 38.9557348,
        lng: -77.0021773
    },
    {
        name: "Goodwill of Greater Washington",
        location: "2200 S Dakota Ave NE, Washington, DC 20018",
        phone: "(202) 636-4233",
        accepts: ["clothing", "furniture", "small appliances", "household goods", "computer equipment", "electronics", "toys", "vehicles"],
        doesnotaccept: ["mattresses", "box springs", "sofa beds", "large appliances", "hazardous material", "construction material", "items in poor condition"],
        website: "www.dcgoodwill.org",
        details: `Accepts: Clothing, furniture, small appliances, house wares, computers (Pentium I and newer), electronics and toys. Visit www.dcgoodwill.org for a more complete list of accepted items and drop off locations/time.
            Cars(202) 715 - 2636. Vehicles must be in running and drivable condition.Visit www.GWCars.org
            for more information.
            NO: Mattresses or box - springs,
            sofa beds,
            large appliances,
            hazardous material,
            construction material,
            CPSC - recalled items,
            or items that are soiled,
            broken or missing pieces.`,
        lat: 38.9199251,
        lng: -76.9586215
    },
    {
        name: "Habitat for Humanity of Northern Virginia",
        location: "4451 First Place South, Arlington, VA",
        phone: "(703) 521-9890",
        accepts: ["vehicles", "food", "tools", "professional services"],
        details: "Accepts: Cars, Lunch Donations for Volunteers, Power tools, Printing Services",
        lat: 38.867602,
        lng: -77.108936
    },
    {
        name: "Habitat for Humanity ReStore",
        location: "1029 E Gude Dr., Rockville, MD 20850",
        phone: "(301) 947-3304",
        accepts: ["small appliances", "large appliances", "furniture", "antiques", "construction material"],
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 39.0998321,
        lng: -77.139713
    },
    {
        name: "Habitat for Humanity ReStore",
        location: "8380 Colesville Rd., Silver Spring, MD 20910",
        phone: "(301) 990-0014",
        accepts: ["small appliances", "large appliances", "furniture", "antiques", "construction material"],
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 38.9961294,
        lng: -77.0281441
    },
    {
        name: "Habitat for Humanity ReStore",
        location: "869 South Pickett Street, Alexandria, VA 22304",
        phone: "(703) 360-6700",
        accepts: ["small appliances", "large appliances", "furniture", "antiques", "construction material"],
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 38.8033651,
        lng: -77.1401894
    },
    {
        name: "Habitat for Humanity ReStore",
        location: "4311 Walney Road, Chantilly, VA 20151",
        phone: "(703) 953-3747",
        accepts: ["small appliances", "large appliances", "furniture", "antiques", "construction material"],
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 38.8863683,
        lng: -77.4347947
    },
    {
        name: "The Hebrew Home of Greater Washington ",
        location: "6121 Montrose Rd, Rockville, MD 20852",
        phone: "(301) 770-8329",
        website: "hebrew-home.org",
        accepts: ["vehicles"],
        details: "Accepts: Accepts: Cars, trucks and other vehicles. Call to schedule pick-up.",
        lat: 39.05445,
        lng: -77.14373
    },
    {
        name: "His Hidden Treasures",
        location: "9264 Mike Garcia Dr., Manassas, Virginia 20109 ",
        phone: "(703) 966-9301",
        accepts: ["furniture", "antiques", "household goods "],
        doesnotaccept: ["mattresses"],
        website: "http://www.hishiddentreasures.org/services.html  ",
        email: "info@HISHiddentreasures.com",
        details: "Accepts: We come into your home and receive your donations of wood furniture, antiques and vintage pieces, household kitchen items, lamps and decor. Upholstered items need to be in LIKE NEW condition. No mattresses.",
        info: `We will pick up from your location. We service all of Northern Virginia including the following cities and counties: Arlington, Alexandria, Fairfax, Prince William, Loudoun, and Fauquier.
            At His Hidden Treasures, our goal is to assist those in the midst of recovery and restoration.We are meeting needs and transforming lives in our local communities by ministering to those transitioning from homeless shelters through donations and resale of furniture and household items.
            Please send photo and information about your donation using this form: http: //www.hishiddentreasures.org/services.html`,
        pickup: true,
        lat: 38.77856,
        lng: -77.508485
    },
    {
        name: "Homestretch",
        location: "370 S. Washington St., Suite 400, Falls Church, VA 22046",
        phone: "(703) 237-2035",
        accepts: ["vehicles", "computer equipment", "household goods", "furniture"],
        details: "Accepts: cars, computers, household items, and furniture.",
        info: `We will pick up from your location. We collect donations from houses, apartments, and businesses in
                Northern Virginia,
                Monday to Friday,
                10: 00 am - 4: 00 pm.,
                call or e - mail to arrange a pick up: info @homestretch - inc.org.
                Items can also be brought to the Homestretch office in Falls Church.`,
        pickup: true,
        lat: 38.8800674,
        lng: -77.1742316
    },
    {
        name: "Interfaith Works",
        location: "751 Twinbrook Pkwy #8, Rockville, MD 20851",
        accepts: ["kitchenware", "household goods", "toiletries", "books", "electronics", "toys"],
        website: "www.iworksmc.org",
        details: "Accepts: Glassware, Clothing, Household Items, Toiletries, Books, CDs, Electronics, and Toys.",
        info: "Please note that items can be dropped off at Interfaith Works Clothing Center on Monday and Friday between 9:00am - 7:00pm. Tuesday through Thursday items may be dropped of between 9:00am - 5:00pm.",
        pickup: false,
        lat: 39.0813946,
        lng: -77.1140424
    },
    {
        name: "Jewish Council for the Aging of Greater Washington (JCA) ",
        location: "11820 Parklawn Dr., Rockville, MD 20852",
        phone: "301-255-4200 (DC, MD) 703-425-0999 (VA)",
        accepts: ["vehicles", "computer equipment"],
        details: "Accepts: Cars, trucks and vans as well as computers and computer equipment.",
        info: `For more information about vehicle donation, call the JCA development office at 301.255.4231 or 703.652.1511
                To donate a computer or computer equipment,
                please contact JCA at(240) 395 - 0916 or ComputerDocs @AccessJCA.org
                for information about the equipment we need.Thank you!`,
        pickup: false,
        lat: 39.050693,
        lng: -77.104843
    },
    {
        name: "Jewish Foundation for Group Homes",
        location: "1500 E Jefferson St, Rockville, MD 20852",
        phone: "(301) 984-3839",
        accepts: ["vehicles"],
        details: "Accepts: Cars, trucks and vans",
        info: "To learn more please contact Lew Fontek, Chief Development Officer, at 240.283.6000.",
        pickup: false,
        lat: 39.06389,
        lng: -77.130249
    },
    {
        name: "Jewish Social Service Agency (JSSA)",
        location: "6123 Montrose Rd, Rockville, MD 20852",
        phone: "301-838-4200, 703-204-9100",
        accepts: ["vehicles"],
        website: " www.jssa.org",
        email: "contactus@jssa.org",
        details: "Accepts: Donate your USED CAR by calling JSSA's Car Donation Hotline at 301.585.CARS (2277) to arrange free pickup. Provide the signed title and car keys to driver upon pickup and receive a tax-deduction letter in the mail once the car is sold.",
        pickup: true,
        lat: 39.05445,
        lng: -77.14373
    },
    {
        name: "Jubilee Jobs",
        location: "2712 Ontario Rd NW, Washington, DC 20009",
        phone: "(202) 667-8970",
        accepts: ["clothing"],
        email: "jstewart@jubileejobs.org",
        details: "Accepts: Donate used and new interview clothing. \nFor men, we accept dress shirts, ties, slacks, business suits and casual dress shoes. \nFor women, we accept blouses, dark-colored skirts, professional dresses, and casual dress shoes.",
        info: "Donated items may be dropped off at our Washington, DC, office. To schedule a donation drop off, please contact Jacqueline Stewart, Jubilee Jobs Associate Director on (202) 667-8970 or jstewart@jubileejobs.org.",
        pickup: false,
        lat: 38.9246099,
        lng: -77.0407451
    },
    {
        name: "Legal Services of Northern Virginia",
        location: "10700 Page Avenue, Fairfax, Virginia 22030",
        phone: "(703) 778-6800",
        accepts: ["office supplies", "computer equipment"],
        details: "Accepts: Office supplies and computer equipment. ",
        pickup: false,
        lat: 38.8454372,
        lng: -77.3121936
    },
    {
        name: "Miriam's Kitchen",
        location: "2401 Virginia Avenue, NW, Washington, DC 20037",
        phone: "(202) 452-8926 ext.4",
        accepts: ["non-perishable food"],
        details: "Accepts: Food: Ground coffee, old fashioned oatmeal and old fashioned grits",
        pickup: false,
        lat: 38.897923,
        lng: -77.051473
    },
    {
        name: "N St. Village",
        location: "1333 N St. NW, Washington, DC 20005",
        phone: "202-939-2075",
        accepts: ["household goods", "clothing"],
        details: "Accepts: Gently used, or new household items and clothing that is clean, free of tears or stains, and appropriate for the current season. Donations listed at: https://www.amazon.com/wishlist/YC7LMZGV4BMC/ref=sr_1_1_acs_wl_1?ie=UTF8&qid=1362682939&sr=8-1-acs",
        info: `Hours: Monday through Friday from 9am-5pm
                Call the Community Outreach Coordinator at 202 - 939 - 2075 to talk about current needs and set up an appointment to drop of donations.`,
        pickup: false,
        lat: 38.9075657,
        lng: -77.0314256
    },
    {
        name: "The National Center for Children and Families",
        location: "6301 Greentree Road, Bethesda, MD 20817",
        phone: "(301) 365-4480 ext. 109",
        accepts: ["clothing", "baby items", "toiletries", "school supplies", "furniture"],
        email: "jlemons@nccf-cares.org",
        details: "Accepts: Gently used and new clothing (all ages), baby items, new toiletries, school supplies and furniture.",
        info: `Your gently used or new items have the ability to turn a house into a home, provide a homeless family with hope and bring a smile to the face of a neglected high school youth. At NCCF, you can be confident that you clothing, furniture and household goods are making a difference.
        Our donation store, Dr.C’ s Boutique, allows clients from all of our 24 programs throughout the Washington Metropolitan Area to enjoy a shopping experience without spending any money. We will pick up from your location.We pick up new and gently used furniture from residences in Montgomery County, MD. contact Jermaine Lemons, In - Kind Donations Specialist, on his office phone(301) 365 - 4480 ext.109, cell phone(240) 743 - 7252 or email jlemons @nccf - cares.org.`,
        pickup: true,
        lat: 39.007442,
        lng: -77.135223
    },
    {
        name: "Neighbors' Consejo",
        location: "3118 16th Street, NW, Washington, DC 20010",
        phone: "(202) 234-6855 x 27",
        accepts: ["household goods", "furniture", "small appliances", "large appliances", "toiletries", "professional services"],
        details: "Accepts: Household furniture appliances, household items, toiletries, glassware and landscaping services.",
        pickup: false,
        lat: 38.9064754,
        lng: -77.0364091
    },
    {
        name: "Operation Paws for Homes, Inc.",
        location: "Alexandria, VA 22309",
        accepts: ["pet supplies"],
        email: "shannons@ophrescue.org",
        details: "Accepts: Crates, dog beds, collars, leashes, unopened dog food, puppy pads, sheets, blankets, toys for dogs.",
        info: `Fax: (804) 302-7975
                Contact Shannon Shackleford,
                shannons @ophrescue.org
                for more information.P.O.Box 90813,
                Alexandria,
                VA 22309`,
        pickup: false,
        lat: 38.8147596,
        lng: -77.0902477
    },
    {
        name: "Rebuilding Together Montgomery County  ",
        location: "3925 Plyers Mill Rd., Ste. 202, Kensington, MD 20895",
        phone: "(301) 933-2700",
        accepts: ["vehicles", "tools", "professional services", "warehouse space"],
        details: "Accepts:  Pick-up trucks, new hand tools, new power tools, printing services, graphic design services, warehouse space in Montgomery County",
        pickup: false,
        lat: 39.0301506,
        lng: -77.0779346
    },
    {
        name: "Sexual Minority Youth Assistance League",
        location: "410 7th Street SE, Washington, DC 20003",
        phone: "(202) 544-1306",
        accepts: ["vehicles"],
        website: "www.smyal.org",
        details: "Accepts: Cars. Go to web site for instructions: www.smyal.org",
        pickup: false,
        lat: 38.8834024,
        lng: -76.9959363
    },
    {
        name: "Suited for Change",
        location: "1010 Vermont Avenue, NW, Suite 450, Washington, DC 20005",
        phone: "(202) 293-0351",
        accepts: ["clothing"],
        website: "https://www.suitedforchange.org/saturday-curbside-drop-off",
        details: `Accepts: Professional women's clothing including suits, dresses, blouses, jackets, sweaters, trousers, coats
                Women 's Accessories including handbags, shoes suitable for the office, boots, scarves, belts and new tights and pantyhose.
                Welcomes clothing in plus sizes.Clothing should be in good condition and on hangers.
                Clothing can be dropped off at Suited
                for Change 's office one Saturday each month when there is curbside collection and on Thursdays at Suited for Change offices.`,
        pickup: false,
        lat: 38.90265,
        lng: -77.03371
    },
    {
        name: "Wheels for Wishes",
        location: "20 F St NW, Washington, DC 20004",
        phone: "(855) 219-9474",
        accepts: ["vehicles"],
        website: "www.wheelsforwishes.org",
        details: "Accepts:  Vehicles such as cars, motorcycles, RVs, and boats, regardless of condition.",
        pickup: false,
        lat: 38.897255,
        lng: -77.0103679
    },
];

db.Center
    .remove({})
    .then(() => db.Center.collection.insertMany(centerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

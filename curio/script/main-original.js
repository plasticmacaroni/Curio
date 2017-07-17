var images = {
    nothing: "<img  src=\'/curio/assets/nothing.png\'>",
    holywater: "<img class=\"desc-image-container\" src=\'/curio/assets/holywater.png\'>",
    skeletonkey: "<img class=\"desc-image-container\" src=\'/curio/assets/key.png\'>",
    antivenom: "<img class=\"desc-image-container\" src=\'/curio/assets/antivenom.png\'>",
    loot: "<img src=\'/curio/assets/loot.png\'>",
    scouting: "<img src=\'/curio/assets/scout.png\'>",
    heirloom: "<img  src=\'/curio/assets/heirloom.png\'>",
    bleed: "<img  src=\'/curio/assets/bleed.png\'>",
    quirk: "<img  src=\'/curio/assets/quirk.png\'>",
    blight: "<img  src=\'/curio/assets/blight.png\'>",
    stress: "<img src=\'/curio/assets/stress.png\'>",
    stressheal: "<img src=\'/curio/assets/stressheal.png\'>",
    shovel: "<img class=\"desc-image-container\" src=\'/curio/assets/shovel.png\'>",
    bandage: "<img class=\"desc-image-container\" src=\'/curio/assets/bandage.png\'>",
    buff: "<img  src=\'/curio/assets/buff.png\'>",
    debuff: "<img  src=\'/curio/assets/debuff.png\'>",
    herb: "<img class=\"desc-image-container\" src=\'/curio/assets/herbs.png\'>",
    lightmeter: "<img  src=\'/curio/assets/lightmeter.png\'>",
    disease: "<img src=\'/curio/assets/disease.png\'>",
    hand: "<img class=\"desc-image-container\" src=\'/curio/assets/hand.png\'>",
    torch: "<img class=\"desc-image-container\" src=\'/curio/assets/torch.png\'>",
    treats: "<img class=\"desc-image-container\" src=\'/curio/assets/treats.png\'>"
};
var options = {
    valueNames: ['name', 'type', {
        name: 'image',
        attr: 'src'
    }, 'location', 'searchterms', 'items', 'itemsresult', 'info'],
    fuzzySearch: {
        searchClass: "fuzzy-search",
        location: 0,
        distance: 100,
        threshold: 0.1,
        multiSearch: true
    },
    item: `<li><h3 class="name"></h3><div class="underline"></div><p class="type"></p><img class="image" src=""/><p class="location" hidden></p><p class="search-terms" hidden></p><p class="info" hidden></p>
      <p class="items flex"></p><div class="itemsresult flex center"></div></li>`
};

function setUp() {
    curioList = new List('curio-list', options);

    curioList.add([{
        name: 'Alchemy Table',
        type: 'Knowledge',
        image: findImage("alchemy table"),
        location: 'Ruins',
        searchterms: 'vials, potions, table',
        items: images.hand + images.torch + images.herb,
        itemsresult: prep([images.blight, "50% Blight", images.loot, "25% Gems or Gold x1", images.nothing, "25% Nothing"]) + prep([images.lightmeter, "Light Meter +100"]) + prep([images.loot, "Gems or Gold x2"]),
        info: ''
    }, {
        name: 'Altar of Light',
        type: 'Worship',
        image: findImage("altar of light"),
        location: 'Ruins',
        searchterms: 'angel, statue, wings, sword',
        items: images.hand + images.holywater,
        itemsresult: prep([images.buff, "DMG +20% Until Camp"]) + prep([images.buff, "DMG +30% Until Camp"]),
        info: ''
    }, {
        name: 'Bookshelf',
        type: 'Knowledge',
        image: findImage("bookshelf"),
        location: 'Ruins',
        searchterms: 'shelf, books',
        items: images.hand,
        itemsresult: prep([images.stress, "20% Stress +15", images.quirk, "13.3% Positive Quirk", images.quirk, "6.7% Negative Quirk", images.loot, "Journal Entry", images.nothing, "20% Nothing"]),
        info: ''
    }, {
        name: 'Confession Booth',
        type: 'Reflective, Worship',
        image: findImage("confession booth"),
        location: 'Ruins',
        searchterms: 'prayer',
        items: images.hand + images.holywater,
        itemsresult: prep([images.stress, "50% Stress +15", images.loot, "25% Gold or Trinket x6 + Journal Entry", images.quirk, "25% Purge Negative Quirk"]) + prep([images.stressheal, "Stress Heal 30"]),
        info: ''
    }, {
        name: 'Decorative Urn',
        type: 'Haunted, Scrounging',
        image: findImage("decorative urn"),
        location: 'Ruins',
        searchterms: 'pot',
        items: images.hand + images.holywater + images.shovel,
        itemsresult: prep([images.loot, "44.4% Gems/Trinket x1 + Gems x2", images.blight, "22.2% Blight", images.disease, "7.4% Disease - Creeping Cough", images.disease, "3.7% Random Disease", images.nothing, "22.2% Nothing"]) + prep([images.loot, "Gems/Trinket x2 + Gems x2"]) + prep([images.quirk, "Bad Quirk - Guilty Conscience"]),
        info: ''
    }, {
        name: 'Holy Fountain',
        type: 'Fountain, Worship',
        image: findImage("holy fountain"),
        location: 'Ruins',
        searchterms: 'angel, water',
        items: images.hand + images.holywater,
        itemsresult: prep([images.stressheal, "50% Stress Heal 10, Cure Status Effects, Heal 5 HP", images.loot, "50% Gems or Gold x2"]) + prep([images.stressheal, "Stress Heal 20, Cure Status Effects, Heal 12 HP"]),
        info: ''
    }, {
        name: 'Iron Maiden',
        type: 'Haunted, Torture',
        image: findImage("iron maiden"),
        location: 'Ruins',
        searchterms: 'trap, spikes',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "40% Any Loot x2", images.quirk, "20% Bad Quirk - Claustrophobia", images.disease, "13.3% Disease - Tetanus", images.disease, "6.7% Random Disease", images.nothing, "20% Nothing"]) + prep([images.loot, "Any Loot x2"]),
        info: ''
    }, {
        name: 'Locked Display Cabinet',
        type: 'Treasure, Scrounging',
        image: findImage("locked display cabinet"),
        location: 'Ruins',
        searchterms: 'shelf, glass, books, wardrobe',
        items: images.hand + images.skeletonkey + images.shovel,
        itemsresult: prep([images.blight, "50% Blight", images.bleed, "50% Bleed"]) + prep([images.loot, "Gold or Heirloom x2 + Gold or Trinket x1"]) + prep([images.heirloom, "Gold or Heirloom x1 + Gold or Trinket x1"]),
        info: ''
    }, {
        name: 'Locked Sarcophagus',
        type: 'Haunted, Reflective',
        image: findImage("locked sarcophagus"),
        location: 'Ruins',
        searchterms: 'tomb, box',
        items: images.hand + images.skeletonkey + images.shovel,
        itemsresult: prep([images.blight, "50% Blight", images.bleed, "50% Bleed"]) + prep([images.loot, "Gold or Heirloom x2 + Gold or Trinket x1"]) + prep([images.heirloom, "Gold or Heirloom x1 + Gold or Trinket x1"]),
        info: ''
    }, {
        name: 'Sarcophagus',
        type: 'Haunted, Reflective',
        image: findImage("sarcophagus"),
        location: 'Ruins',
        searchterms: 'tomb, box, mummy, corpse',
        items: images.hand,
        itemsresult: prep([images.heirloom, "60% Gold or Heirloom x2", images.quirk, "20% Negative Quirk - Thanatophobia", images.nothing, "20% Nothing"]),
        info: ''
    }, {
        name: 'Suit of Armor',
        type: 'Haunted, Reflective',
        image: findImage("suit of armor"),
        location: 'Ruins',
        searchterms: 'knight',
        items: images.hand,
        itemsresult: prep([images.heirloom, "75% Buff PROT/DODGE +10 Until Camp", images.quirk, "12.5% Good Quirk - Ruins Adventurer", images.quirk, "12.5% Good Quirk - Ruins Tactician"]),
        info: ''
    }, {
        name: 'Bone Altar',
        type: 'Unholy, Worship',
        image: findImage("bone altar"),
        location: 'Warrens',
        searchterms: 'pillar',
        items: images.hand,
        itemsresult: prep([images.heirloom, "100% Buff +15% DMG, +10 ACC, +5% CRT Until Camp, Cure Status Effects"]),
        info: ''
    }, {
        name: 'Dinner Cart',
        type: 'Body, Food, Drink',
        image: findImage("dinner cart"),
        location: 'Warrens',
        searchterms: 'skeletons, cart, wheelbarrow',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "37.5% Food x1 + Gold or Trinket x1", images.blight, "25% Blight", images.disease, "12.5% Disease: The Black Plague", images.nothing, "25% Nothing"]) + prep([images.loot, "Food x3 + Gold or Trinket x1"]),
        info: ''
    }, {
        name: 'Makeshift Dining Table',
        type: 'Food, Drink',
        image: findImage("makeshift dining table"),
        location: 'Warrens',
        searchterms: 'stone, table',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "25% Food x1 + Gold or Supplies x1", images.blight, "25% Blight", images.disease, "25% Disease: Tapeworm", images.nothing, "25% Nothing"]) + prep([images.loot, "Food x2 + Gold or Supplies x1"]),
        info: ''
    }, {
        name: 'Moonshine Barrel',
        type: 'Drink, Treasure',
        image: findImage("moonshine barrel"),
        location: 'Warrens',
        searchterms: 'wood, skulls',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "33.3% Food x1 + Gold or Supplies x1", images.blight, "33.3% Blight", images.quirk, "11.1% Negative Quirk - Tippler", images.nothing, "22.2% Nothing"]) + prep([images.buff, "Buff +30% DMG (until camp)"]),
        info: ''
    }, {
        name: 'Occult Scrawlings',
        type: 'Unholy, Knowledge',
        image: findImage("occult scrawlings"),
        location: 'Warrens',
        searchterms: 'canvas, skin, leather',
        items: images.hand + images.holywater,
        itemsresult: prep([images.quirk, "33.3% Random Positive Quirk", images.stress, "25% Stress +25", images.quirk, "16.7% Random Bad Quirk", images.nothing, "25% Nothing"]) + prep([images.debuff, "Debuff -20% DODGE"]),
        info: ''
    }, {
        name: 'Pile of Bones',
        type: 'Body, Haunted, Unholy',
        image: findImage("pile of bones"),
        location: 'Warrens',
        searchterms: 'skull',
        items: images.hand + images.holywater,
        itemsresult: prep([images.loot, "25% Any Loot x2", images.disease, "25% Random Disease", images.quirk, "25% Bad Quirk - Bloodthirsty", images.nothing, "25% Nothing"]) + prep([images.loot, "Any Loot x2"]),
        info: ''
    }, {
        name: 'Pile of Scrolls',
        type: 'Knowledge',
        image: findImage("pile of scrolls"),
        location: 'Warrens',
        searchterms: 'paper',
        items: images.hand + images.torch,
        itemsresult: prep([images.scouting, "28.6% Scout", images.stress, "14.3% Stress +15", images.quirk, "9.5% Random Good Quirk", images.quirk, "4.8% Random Negative Quirk", images.nothing, "28.6% Nothing"]) + prep([images.quirk, "Purge Negative Quirk"]),
        info: ''
    }, {
        name: 'Rack of Blades',
        type: 'Scrounging',
        image: findImage("rack of blades"),
        location: 'Warrens',
        searchterms: 'wood, knives, swords',
        items: images.hand + images.bandage,
        itemsresult: prep([images.loot, "40% Gems or Gold x1 + Food x1", images.bleed, "40% Bleed", images.nothing, "20% Nothing"]) + prep([images.loot, "Gems or Gold x2 + Food x1"]),
        info: ''
    }, {
        name: 'Sacrificial Stone',
        type: 'Unholy, Worship',
        image: findImage("sacrificial stone"),
        location: 'Warrens',
        searchterms: 'rock, slab, stone',
        items: images.hand,
        itemsresult: prep([images.stress, "50% Stress +50", images.quirk, "25% Purge Negative Quirk", images.quirk, "12.5% Positive Quirk: Warrens Explorer", images.quirk, "12.5% Positive Quirk: Warrens Scrounger"]),
        info: ''
    }, {
        name: 'Ancient Coffin',
        type: 'Haunted, Body',
        image: findImage("ancient coffin"),
        location: 'Weald',
        searchterms: 'rock, slab, stone',
        items: images.hand,
        itemsresult: prep([images.heirloom, "50% Gold/Heirloom x2", images.quirk, "8.3% Positive Quirk: Weald Adventurer", images.quirk, "8.3% Positive Quirk: Weald Explorer", images.nothing, "33.3% Nothing"]),
        info: ''
    }, {
        name: 'Beast Carcass',
        type: 'Food, Body',
        image: findImage("beast carcass"),
        location: 'Weald',
        searchterms: 'bones, meat',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "42.9% Food x1", images.disease, "9.5% Disease: Rabies", images.disease, "19% Random Disease", images.quirk, "14.3% Negative Quirk: Zoophobia", images.nothing, "14.3% Nothing"]) + prep([images.loot, "Food x2"]),
        info: ''
    }, {
        name: 'Eerie Spiderweb',
        type: 'None',
        image: findImage("eerie spiderweb"),
        location: 'Weald',
        searchterms: 'tree, stump, web, spiders',
        items: images.hand + images.bandage,
        itemsresult: prep([images.loot, "40% Gems or Gold x1 + Gems/Trinket x1", images.quirk, "10% Negative Quirk: Slow Reflexes", images.quirk, "10% Negative Quirk: Slowdraw", images.nothing, "40% Nothing"]) + prep([images.loot, "Gems or Gold x2 + Gems/Trinket x1"]),
        info: ''
    }, {
        name: 'Left Luggage',
        type: 'Treasure, Scrounging',
        image: findImage("left luggage"),
        location: 'Weald',
        searchterms: 'box, chest',
        items: images.hand + images.antivenom + images.skeletonkey,
        itemsresult: prep([images.loot, "50% Any Loot x4 + Journal Entry", images.blight, "50% Blight"]) + prep([images.loot, "Any Loot x3"]) + prep([images.loot, "Any Loot x3"]),
        info: ''
    }, {
        name: 'Mummified Remains',
        type: 'Body, Haunted, Unholy',
        image: findImage("mummified remains"),
        location: 'Weald',
        searchterms: 'body, dead',
        items: images.hand + images.bandage,
        itemsresult: prep([images.loot, "40% Gold or Trinkets x1", images.blight, "40% Blight", images.nothing, "20% Nothing"]) + prep([images.loot, "Gold or Trinkets x2"]),
        info: ''
    }, {
        name: 'Old Tree',
        type: 'Scrounging',
        image: findImage("old tree"),
        location: 'Weald',
        searchterms: 'stump, wood',
        items: images.hand + images.antivenom,
        itemsresult: prep([images.loot, "50% Any Loot x2", images.blight, "25% Blight", images.nothing, "25% Nothing"]) + prep([images.loot, "Any Loot x3"]),
        info: ''
    }, {
        name: 'Pristine Fountain',
        type: 'Fountain',
        image: findImage("pristine fountain"),
        location: 'Weald',
        searchterms: 'angel, water, statue',
        items: images.hand + images.holywater,
        itemsresult: prep([images.loot, "Stress Heal 20"]) + prep([images.stressheal, "Stress Heal 30"]),
        info: ''
    }, {
        name: 'Shallow Grave',
        type: 'Body, Haunted, Scrounging',
        image: findImage("shallow grave"),
        location: 'Weald',
        searchterms: 'cross, grave, mound, dirt, stone',
        items: images.hand + images.shovel,
        itemsresult: prep([images.blight, "50% Blight", images.disease, "50% Random Disease"]) + prep([images.heirloom, "Gems/Heirlooms x3"]),
        info: ''
    }, {
        name: 'Traveler\'s Tent',
        type: 'Scrounging',
        image: findImage("traveller's tent"),
        location: 'Weald',
        searchterms: 'camp',
        items: images.nothing,
        itemsresult: prep([images.loot, "37.5% Gold or Supplies x4 + Gold or Heirloom x4 + Journal Entry", images.scouting, "37.5% Scouting", images.stress, "12.5% Stress +25", images.nothing, "12.5% Nothing"]),
        info: ''
    }, {
        name: 'Troubling Effigy',
        type: 'Unholy, Worship',
        image: findImage("troubling effigy"),
        location: 'Weald',
        searchterms: 'deer, skull, blood, bone',
        items: images.hand + images.holywater,
        itemsresult: prep([images.quirk, "18.8% Random Positive Quirk", images.scouting, "18.8% Random Negative Quirk", images.bleed, "18.8% Bleed", images.blight, "9.4% Blight", images.stress, "9.4% Stress +15", images.nothing, "25% Nothing"]) + prep([images.quirk, "Random Positive Quirk"]),
        info: ''
    }, {
        name: 'Barnacle Crusted Chest',
        type: 'Treasure',
        image: findImage("barnacle crusted chest"),
        location: 'Cove',
        searchterms: 'treasure',
        items: images.hand + images.shovel,
        itemsresult: prep([images.loot, "50% Any loot x2", images.bleed, "25% Bleed", images.nothing, "25% Nothing"]) + prep([images.loot, "Any Loot x3"]),
        info: ''
    }, {
        name: 'Bas-Relief',
        type: 'Knowledge, Worship',
        image: findImage("bas relief"),
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.shovel,
        itemsresult: prep([images.quirk, "66.7% Positive Quirk", images.quirk, "22.2% Negative Quirk", images.disease, "11.1% Disease Chance"]) + prep([images.stress, "Stress +100"]),
        info: ''
    }, {
        name: 'Brackish Tide Pool',
        type: 'Drink, Fountain',
        image: findImage("brackish tidepool"),
        location: 'Cove',
        searchterms: 'water, skeleton',
        items: images.hand + images.antivenom,
        itemsresult: prep([images.buff, "75% Buff 33% Resist Blight, Bleed, Disease, and Debuff until Camp", images.disease, "25% Random Disease"]) + prep([images.stressheal, "Heal 5 HP and Cure (50%) OR Stress Heal 5 (50%)"]),
        info: ''
    }, {
        name: 'Eerie Coral',
        type: 'Knowledge',
        image: findImage("eerie coral"),
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.herb,
        itemsresult: prep([images.stressheal, "50% Stress Heal 10", images.stress, "25% Stress +25", images.nothing, "25% Nothing"]) + prep([images.quirk, "Purge Negative Quirk"]),
        info: ''
    }, {
        name: 'Fish Idol',
        type: 'Unholy, Worship',
        image: findImage("fish idol"),
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.holywater,
        itemsresult: prep([images.debuff, "50% Debuff -25% DMG, -10 ACC until Camp", images.debuff, "50% Debuff -12 DODGE until Camp"]) + prep([images.buff, "Buff +18% DMG until Camp (50%)"]),
        info: ''
    }, {
        name: 'Fish Carcass',
        type: 'Food',
        image: findImage("giant fish carcass"),
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "16.7% Gem or Tinkets x1 Gems or Gold x1 + Supply x1", images.disease, "16.7% Disease: The Red Plague", images.blight, "11.1% Blight", images.bleed, "5.6% Bleed", images.nothing, "50% Nothing"]) + prep([images.loot, "Gem or Tinkets x2 + Gem or Gold x1 + Supplies x2"]),
        info: ''
    }, {
        name: 'Giant Oyster',
        type: 'Treasure, Scrounging',
        image: findImage("giant oyster"),
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.shovel + images.treats,
        itemsresult: prep([images.loot, "40% Gold or Trinkets x2", images.bleed, "40% Bleed", images.nothing, "20% Nothing"]) + prep([images.loot, "Gold or Trinkets x3"]) + prep([images.buff, "Buff - Dodge +25"]),
        info: ''
    }, {
        name: 'Ship\'s Figurehead',
        type: 'Reflective',
        image: findImage("ship's figurehead"),
        location: 'Cove',
        searchterms: '',
        items: images.hand,
        itemsresult: prep([images.stressheal, "66.7% Stress Heal 25", images.buff, "33.3% Buff +20% DMG, +4 SPD until Camp"]),
        info: ''
    }, {
        name: 'Crate',
        type: 'Treasure',
        image: '/curio/assets/curios/crate.png',
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'box, container, backpack',
        items: images.hand,
        itemsresult: prep([images.heirloom, "75% Heirloom", images.nothing, "25% Nothing"]),
        info: ''
    }, {
        name: 'Discarded Pack',
        type: 'Scrounging, Treasure',
        image: findImage("discarded pack"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'dark, gloomy',
        items: images.hand,
        itemsresult: prep([images.loot, "60% Supplies x1 + Gems or Gold x2 + Journal Entry", images.scouting, "20% Scout Chance", images.nothing, "20% Nothing"]),
        info: ''
    }, {
        name: 'Eldritch Altar',
        type: 'Haunted, Unholy',
        image: findImage("eldritch altar"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'tentacle, fountain',
        items: images.hand + images.holywater,
        itemsresult: prep([images.stress, "40% Stress +25", images.quirk, "10% Negative Quirk", images.nothing, "50% Nothing"]) + prep([images.quirk, "Purge Negative Quirk"]),
        info: ''
    }, {
        name: 'Heirloom Chest',
        type: 'Treasure',
        image: findImage("heirloom chest"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'chest, mimic',
        items: images.hand + images.antivenom + images.skeletonkey,
        itemsresult: prep([images.heirloom, "75% Heirloom x2", images.bleed, "12.5% Bleed", images.blight, "12.5% Blight"]) + prep([images.heirloom, "Heirloom x3"]) + prep([images.heirloom, "Heirloom x4"]),
        info: ''
    }, {
        name: 'Sack',
        type: 'Scrounging',
        image: findImage("sack"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'bag',
        items: images.hand,
        itemsresult: prep([images.loot, "75% Gold", images.nothing, "25% Nothing"]),
        info: ''
    }, {
        name: 'Sconce',
        type: 'Scrounging',
        image: findImage("sconce"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'lamp, torch',
        items: images.hand,
        itemsresult: prep([images.loot, "1x Torch"]),
        info: ''
    }, {
        name: 'Shambler\'s Altar',
        type: 'None',
        image: findImage("shambler's altar"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'tentacle, orb, red',
        items: images.hand + images.torch,
        itemsresult: prep([images.nothing, "100% Nothing"]) + prep([images.nothing, "Fight Shambler"]),
        info: ''
    }, {
        name: 'Stack of Books',
        type: 'Knowledge',
        image: findImage("stack of books"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'pile',
        items: images.hand + images.torch,
        itemsresult: prep([images.stress, "22.2% Stress +25", images.quirk, "22.2% Good Quirk", images.quirk, "11.1% Bad Quirk", images.lightmeter, "11.1% Decrease Light 25", images.loot, "16.7% Journal Entry", images.nothing, "16.7% Nothing"]) + prep([images.stress, "+100 Stress"]),
        info: ''
    }, {
        name: 'Unlocked Strongbox',
        type: 'Treasure',
        image: findImage("unlocked strongbox"),
        location: 'All, Cove, Ruins, Warrens, Weald, Courtyard',
        searchterms: 'chest, case',
        items: images.hand,
        itemsresult: prep([images.loot, "75% Any Loot", images.blight, "25% Blight"]),
        info: ''
    }]);
}

function prep(results) {
    var final = "<div class=\"subimage\"><div class=\"subimage-divider\"></div>";
    for (x = 0; x < results.length; x++) {
        final = final.concat(results[x]);
        if (x % 2 == 1) {
            final = final.concat("</div><div class=\"subimage\">")
        }
    }
    return "<div class=\"wrap\">" + final + "</div></div>";
}

function findImage(assetName) {
    return "/curio/assets/curios/" + assetName + ".png"
}
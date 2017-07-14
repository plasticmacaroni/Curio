var images = {
    nothing: "<img class=\"desc-image-container\" src=\'/assets/nothing.png\'>",
    holywater: "<img class=\"desc-image-container\" src=\'/assets/holywater.png\'>",
    skeletonkey: "<img class=\"desc-image-container\" src=\'/assets/key.png\'>",
    antivenom: "<img class=\"desc-image-container\" src=\'/assets/antivenom.png\'>",
    loot: "<img class=\"desc-image-container\" src=\'/assets/loot.png\'>",
    scouting: "<img class=\"desc-image-container\" src=\'/assets/scout.png\'>",
    heirloom: "<img class=\"desc-image-container\" src=\'/assets/heirloom.png\'>",
    bleed: "<img class=\"desc-image-container\" src=\'/assets/bleed.png\'>",
    quirk: "<img class=\"desc-image-container\" src=\'/assets/quirk.png\'>",
    blight: "<img class=\"desc-image-container\" src=\'/assets/blight.png\'>",
    stress: "<img class=\"desc-image-container\" src=\'/assets/stress.png\'>",
    stressheal: "<img class=\"desc-image-container\" src=\'/assets/stressheal.png\'>",
    shovel: "<img class=\"desc-image-container\" src=\'/assets/shovel.png\'>",
    bandage: "<img class=\"desc-image-container\" src=\'/assets/bandage.png\'>",
    buff: "<img class=\"desc-image-container\" src=\'/assets/buff.png\'>",
    debuff: "<img class=\"desc-image-container\" src=\'/assets/debuff.png\'>",
    herb: "<img class=\"desc-image-container\" src=\'/assets/herbs.png\'>",
    lightmeter: "<img class=\"desc-image-container\" src=\'/assets/lightmeter.png\'>",
    disease: "<img class=\"desc-image-container\" src=\'/assets/disease.png\'>",
    hand: "<img class=\"desc-image-container\" src=\'/assets/hand.png\'>",
    torch: "<img class=\"desc-image-container\" src=\'/assets/torch.png\'>",
    treats: "<img class=\"desc-image-container\" src=\'/assets/treats.png\'>"
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
        threshold: 0.4,
        multiSearch: true
    },
    item: `<li><h3 class="name"></h3><div class="underline"></div><p class="type"></p><img class="image" src=""/><p class="location" hidden></p><p class="search-terms" hidden></p><p class="info" hidden></p>
      <p class="items flex"></p><div class="itemsresult flex center"></div></li>`
};

function setUp() {
    var curioList = new List('curio-list', options);

    curioList.add([{
        name: 'Crate',
        type: 'Treasure',
        image: 'https://steamuserimages-a.akamaihd.net/ugc/38614507765727122/22A8154DC70CDFAD15F45891072B196360CFB6B9/',
        location: 'All',
        searchterms: 'box, container',
        items: images.hand,
        itemsresult: prep([images.heirloom, "75% Heirloom", images.nothing, "25% Nothing"]),
        info: ''
    }, {
        name: 'Discarded Pack',
        type: 'Scrounging, Treasure',
        image: 'https://steamuserimages-a.akamaihd.net/ugc/38614507765837398/EC6A8198EDEB15212F29BCBEC2807057766BE8CD/',
        location: 'All',
        searchterms: 'dark, gloomy',
        items: images.hand,
        itemsresult: prep([images.loot, "60% Supplies x1 + Gold/Gems x2 + Journal Entry", images.scouting, "20% Scout Chance", images.nothing, "20% Nothing"]),
        info: ''
    }, {
        name: 'Eldritch Altar',
        type: 'Haunted, Unholy',
        image: 'https://steamuserimages-a.akamaihd.net/ugc/38614507765841396/181D2A1BD6F7912BC5D8E5FB3A9E7500EBFE7E4B/',
        location: 'All',
        searchterms: 'tentacle, fountain',
        items: images.hand + images.holywater,
        itemsresult: prep([images.stress, "40% Stress +25", images.quirk, "10% Negative Quirk", images.nothing, "50% Nothing"]) + prep([images.quirk, "Purge Negative Quirk"]),
        info: ''
    }, {
        name: 'Heirloom Chest',
        type: 'Treasure',
        image: '',
        location: 'All',
        searchterms: 'chest, mimic',
        items: images.hand + images.antivenom + images.skeletonkey,
        itemsresult: prep([images.heirloom, "75% Heirloom x2", images.bleed, "12.5% Bleed", images.blight, "12.5% Blight"]) + prep([images.heirloom, "Heirloom x3"]) + prep([images.heirloom, "Heirloom x4"]),
        info: ''
    }, {
        name: 'Sack',
        type: 'Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/6/61/Sack.png/180px-Sack.png?version=d364ddee4b047f0f3df64597c480da1f',
        location: 'All',
        searchterms: 'bag',
        items: images.hand,
        itemsresult: prep([images.loot, "75% Gold", images.nothing, "25% Nothing"]),
        info: ''
    }, {
        name: 'Sconce',
        type: 'Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/9/92/Sconce.png/108px-Sconce.png?version=2a38378b375522ce98df4d77b0fec307',
        location: 'All',
        searchterms: 'lamp, torch',
        items: images.hand,
        itemsresult: prep([images.loot, "1x Torch"]),
        info: ''
    }, {
        name: 'Shambler\'s Altar',
        type: 'None',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/0/03/Shambler%27s_Altar.png/164px-Shambler%27s_Altar.png?version=ca744d8ff9a47d0e9d746aa303b50f11',
        location: 'All',
        searchterms: 'tentacle, orb, red',
        items: images.hand + images.torch,
        itemsresult: prep([images.nothing, "Fight Shambler"]) + prep([images.nothing, "100% Nothing"]),
        info: ''
    }, {
        name: 'Stack of Books',
        type: 'Knowledge',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/1/1f/Stack_of_Books.png/180px-Stack_of_Books.png?version=c887247fdb6edc020d348efb075b7123',
        location: 'All',
        searchterms: 'pile',
        items: images.hand + images.torch,
        itemsresult: prep([images.stress, "22.2% Stress +25", images.quirk, "22.2% Good Quirk", images.quirk, "11.1% Bad Quirk", images.light, "11.1% Decrease Light 25", images.loot, "16.7% Journal Entry", images.nothing, "16.7% Nothing"]) + prep([images.nothing, "100% Nothing"]),
        info: ''
    }, {
        name: 'Unlocked Strongbox',
        type: 'Treasure',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/b/b0/Unlocked_Strongbox.png/180px-Unlocked_Strongbox.png?version=9ed0496f18390a4d81af4f1a3f9d864b',
        location: 'All',
        searchterms: 'chest, case',
        items: images.hand,
        itemsresult: prep([images.loot, "75% Any Loot", images.blight, "25% Blight"]),
        info: ''
    }, {
        name: 'Alchemy Table',
        type: 'Knowledge',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/4/43/Alchemy_Table.png/180px-Alchemy_Table.png?version=3b16e1f57b02d68331e394962b0bbf2f',
        location: 'Ruins',
        searchterms: 'vials, potions, table',
        items: images.hand + images.torch + images.herb,
        itemsresult: prep([images.blight, "50% Blight", images.loot, "25% Gold/Gems x1", images.nothing, "25% Nothing"]) + prep([images.lightmeter, "Light Meter +100"]) + prep([images.loot, "Gold/Gems x2"]),
        info: ''
    }, {
        name: 'Altar of Light',
        type: 'Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/1/18/Altar_of_Light.png/116px-Altar_of_Light.png?version=73369c97bf5ad909620006a435f9b817',
        location: 'Ruins',
        searchterms: 'angel, statue, wings, sword',
        items: images.hand + images.holywater,
        itemsresult: prep([images.buff, "DMG +50% Until Camp"]) + prep([images.buff, "DMG +20% Until Camp"]),
        info: ''
    }, {
        name: 'Bookshelf',
        type: 'Knowledge',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/f/f7/Bookshelf.png/180px-Bookshelf.png?version=8433577460424a54df114a684ea50c42',
        location: 'Ruins',
        searchterms: 'shelf, books',
        items: images.hand,
        itemsresult: prep([images.stress, "20% Stress +15", images.quirk, "13.3% Positive Quirk", images.quirk, "6.7% Negative Quirk", images.loot, "Journal Entry", images.nothing, "20% Nothing"]),
        info: ''
    }, {
        name: 'Confession Booth',
        type: 'Reflective, Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/1/1b/Confession_Booth.png/180px-Confession_Booth.png?version=086740b08f1e4b6c12cec8232583119e',
        location: 'Ruins',
        searchterms: 'prayer',
        items: images.hand + images.holywater,
        itemsresult: prep([images.stress, "50% Stress +15", images.loot, "25% Gold/Trinket x6 + Journal Entry", images.quirk, "25% Purge Negative Quirk"]) + prep([images.stressheal, "Stress Heal 30"]),
        info: ''
    }, {
        name: 'Decorative Urn',
        type: 'Haunted, Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/4/40/Decorative_Urn.png/180px-Decorative_Urn.png?version=df5717a642edfe4d3a42990995667603',
        location: 'Ruins',
        searchterms: 'pot',
        items: images.hand + images.holywater + images.shovel,
        itemsresult: prep([images.loot, "44.4% Gems/Trinket x1 + Gems x2", images.blight, "22.2% Blight", images.disease, "7.4% Disease - Creeping Cough", images.disease, "3.7% Random Disease", images.nothing, "22.2% Nothing"]) + prep([images.loot, "Gems/Trinket x2 + Gems x2"]) + prep([images.quirk, "Bad Quirk - Guilty Conscience"]),
        info: ''
    }, {
        name: 'Holy Fountain',
        type: 'Fountain, Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/4/42/Holy_Fountain.png/55px-Holy_Fountain.png?version=1f5a669cda7e59f8d6d9361b39bafe57',
        location: 'Ruins',
        searchterms: 'angel, water',
        items: images.hand + images.holywater,
        itemsresult: prep([images.stressheal, "50% Stress Heal 10, Cure Status Effects, Heal 5 HP", images.loot, "50% Gold/Gems x2"]) + prep([images.stressheal, "Stress Heal 20, Cure Status Effects, Heal 12 HP"]),
        info: ''
    }, {
        name: 'Iron Maiden',
        type: 'Haunted, Torture',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/c/c0/Iron_Maiden.png/139px-Iron_Maiden.png?version=2464fee788f0de65ab51d0f108c2f873',
        location: 'Ruins',
        searchterms: 'trap, spikes',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "40% Any Loot x2", images.quirk, "20% Bad Quirk - Claustrophobia", images.disease, "13.3% Disease - Tetanus", images.disease, "6.7% Random Disease", images.nothing, "20% Nothing"]) + prep([images.loot, "Any Loot x2"]),
        info: ''
    }, {
        name: 'Locked Display Cabinet',
        type: 'Treasure, Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/c/cf/Locked_Display_Cabinet.png/180px-Locked_Display_Cabinet.png?version=7bf47a424ddd313c85ffce3fc0160534',
        location: 'Ruins',
        searchterms: 'shelf, glass, books, wardrobe',
        items: images.hand + images.skeletonkey + images.shovel,
        itemsresult: prep([images.blight, "50% Blight", images.bleed, "50% Bleed"]) + prep([images.loot, "Gold/Heirlooms x2 + Gold/Trinket x1"]) + prep([images.heirloom, "Gold/Heirlooms x1 + Gold/Trinket x1"]),
        info: ''
    }, {
        name: 'Locked Sarcophagus',
        type: 'Haunted, Reflective',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/5/5b/Locked_Sarcophagus.png/180px-Locked_Sarcophagus.png?version=072b82c2e971449542a22590d3b0a0fa',
        location: 'Ruins',
        searchterms: 'tomb, box',
        items: images.hand + images.skeletonkey + images.shovel,
        itemsresult: prep([images.blight, "50% Blight", images.bleed, "50% Bleed"]) + prep([images.loot, "Gold/Heirlooms x2 + Gold/Trinket x1"]) + prep([images.heirloom, "Gold/Heirlooms x1 + Gold/Trinket x1"]),
        info: ''
    }, {
        name: 'Sarcophagus',
        type: 'Haunted, Reflective',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/6/69/Sarcophagus.png/180px-Sarcophagus.png?version=9fc9d7196c9bb6f079ce380b74bd3c8c',
        location: 'Ruins',
        searchterms: 'tomb, box, mummy, corpse',
        items: images.hand,
        itemsresult: prep([images.heirloom, "60% Gold/Heirlooms x2", images.quirk, "20% Negative Quirk - Thanatophobia", images.nothing, "20% Nothing"]),
        info: ''
    }, {
        name: 'Suit of Armor',
        type: 'Haunted, Reflective',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/5/5e/Suit_of_Armor.png/128px-Suit_of_Armor.png?version=f4485fbfece740e2f248ad3100ff4455',
        location: 'Ruins',
        searchterms: 'knight',
        items: images.hand,
        itemsresult: prep([images.heirloom, "75% Buff PROT/DODGE +10 Until Camp", images.quirk, "12.5% Good Quirk - Ruins Adventurer", images.quirk, "12.5% Good Quirk - Ruins Tactician"]),
        info: ''
    }, {
        name: 'Bone Altar',
        type: 'Unholy, Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/7/7f/Bone_Altar.png/142px-Bone_Altar.png?version=c61072afb5286c07f89013e3e58efd77',
        location: 'Warrens',
        searchterms: 'pillar',
        items: images.hand,
        itemsresult: prep([images.heirloom, "100% Buff +15% DMG, +10 ACC, +5% CRT Until Camp, Cure Status Effects"]),
        info: ''
    }, {
        name: 'Dinner Cart',
        type: 'Body, Food, Drink',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/6/66/Dinner_Cart.png/180px-Dinner_Cart.png?version=d39cb4249cb6a462a6a0b9f62773ede3',
        location: 'Warrens',
        searchterms: 'skeletons, cart, wheelbarrow',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "37.5% Food x1 + Gold/Trinket x1", images.blight, "25% Blight", images.disease, "12.5% Disease: The Black Plague", images.nothing, "25% Nothing"]) + prep([images.loot, "Food x3 + Gold/Trinket x1"]),
        info: ''
    }, {
        name: 'Makeshift Dining Table',
        type: 'Food, Drink',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/d/da/Makeshift_Dining_Table.png/180px-Makeshift_Dining_Table.png?version=05f3da08898e6ed7c9fe32fe3f3e3fae',
        location: 'Warrens',
        searchterms: 'stone, table',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "25% Food x1 + Gold/Supplies x1", images.blight, "25% Blight", images.disease, "25% Disease: Tapeworm", images.nothing, "25% Nothing"]) + prep([images.loot, "Food x2 + Gold/Supplies x1"]),
        info: ''
    }, {
        name: 'Moonshine Barrel',
        type: 'Drink, Treasure',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/1/1b/Moonshine_Barrel.png/180px-Moonshine_Barrel.png?version=9ce22bc2947a4658b246171c2deabdd4',
        location: 'Warrens',
        searchterms: 'wood, skulls',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "33.3% Food x1 + Gold/Supplies x1", images.blight, "33.3% Blight", images.quirk, "11.1% Negative Quirk - Tippler", images.nothing, "22.2% Nothing"]) + prep([images.buff, "Buff +30% DMG (until camp)"]),
        info: ''
    }, {
        name: 'Occult Scrawlings',
        type: 'Unholy, Knowledge',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/1/1b/Moonshine_Barrel.png/180px-Moonshine_Barrel.png?version=9ce22bc2947a4658b246171c2deabdd4',
        location: 'Warrens',
        searchterms: 'canvas, skin, leather',
        items: images.hand + images.holywater,
        itemsresult: prep([images.quirk, "33.3% Random Positive Quirk", images.stress, "25% Stress +25", images.quirk, "16.7% Random Bad Quirk", images.nothing, "25% Nothing"]) + prep([images.debuff, "Debuff -20% DODGE"]),
        info: ''
    }, {
        name: 'Pile of Bones',
        type: 'Body, Haunted, Unholy',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/9/93/Pile_of_Bones.png/180px-Pile_of_Bones.png?version=2e68cd53ecae5a709d1c3ba5cbb2f8c1',
        location: 'Warrens',
        searchterms: 'skull',
        items: images.hand + images.holywater,
        itemsresult: prep([images.loot, "25% Any Loot x2", images.disease, "25% Random Disease", images.quirk, "25% Bad Quirk - Bloodthirsty", images.nothing, "25% Nothing"]) + prep([images.loot, "Any Loot x2"]),
        info: ''
    }, {
        name: 'Pile of Scrolls',
        type: 'Knowledge',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/9/99/Pile_of_Scrolls.png/180px-Pile_of_Scrolls.png?version=7a08539594cedc7d4ea2397390e17232',
        location: 'Warrens',
        searchterms: 'paper',
        items: images.hand + images.torch,
        itemsresult: prep([images.scouting, "28.6% Scout", images.stress, "14.3% Stress +15", images.quirk, "9.5% Random Good Quirk", images.quirk, "4.8% Random Negative Quirk", images.nothing, "28.6% Nothing"]) + prep([images.quirk, "Purge Negative Quirk"]),
        info: ''
    }, {
        name: 'Rack of Blades',
        type: 'Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/9/99/Pile_of_Scrolls.png/180px-Pile_of_Scrolls.png?version=7a08539594cedc7d4ea2397390e17232',
        location: 'Warrens',
        searchterms: 'wood, knives, swords',
        items: images.hand + images.bandage,
        itemsresult: prep([images.loot, "40% Gold/Gems x1 + Food x1", images.bleed, "40% Bleed", images.nothing, "20% Nothing"]) + prep([images.loot, "Gold/Gems x2 + Food x1"]),
        info: ''
    }, {
        name: 'Sacrificial Stone',
        type: 'Unholy, Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/5/57/Sacrificial_Stone.png/180px-Sacrificial_Stone.png?version=ee638c2b1f51cfdfa7dc337e64764be3',
        location: 'Warrens',
        searchterms: 'rock, slab, stone',
        items: images.hand,
        itemsresult: prep([images.stress, "50% Stress +50", images.quirk, "25% Purge Negative Quirk", images.quirk, "12.5% Positive Quirk: Warrens Explorer", images.quirk, "12.5% Positive Quirk: Warrens Scrounger"]),
        info: ''
    }, {
        name: 'Ancient Coffin',
        type: 'Haunted, Body',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/b/bb/Ancient_Coffin.png/180px-Ancient_Coffin.png?version=ca9c356a11e9fd6923757154d9caf7d1',
        location: 'Weald',
        searchterms: 'rock, slab, stone',
        items: images.hand,
        itemsresult: prep([images.heirloom, "50% Gold/Heirloom x2", images.quirk, "8.3% Positive Quirk: Weald Adventurer", images.quirk, "8.3% Positive Quirk: Weald Explorer", images.nothing, "33.3% Nothing"]),
        info: ''
    }, {
        name: 'Beast Carcass',
        type: 'Food, Body',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/b/bb/Ancient_Coffin.png/180px-Ancient_Coffin.png?version=ca9c356a11e9fd6923757154d9caf7d1',
        location: 'Weald',
        searchterms: 'bones, meat',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "42.9% Food x1", images.disease, "9.5% Disease: Rabies", images.disease, "19% Random Disease", images.quirk, "14.3% Negative Quirk: Zoophobia", images.nothing, "14.3% Nothing"]) + prep([images.loot, "Food x2"]),
        info: ''
    }, {
        name: 'Eerie Spiderweb',
        type: 'None',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/b/b6/Eerie_Spiderweb.png/180px-Eerie_Spiderweb.png?version=f06385cbfd6eb6ea770592eec9fbde85',
        location: 'Weald',
        searchterms: 'tree, stump, web, spiders',
        items: images.hand + images.bandage,
        itemsresult: prep([images.loot, "40% Gold/Gems x1 + Gems/Trinket x1", images.quirk, "10% Negative Quirk: Slow Reflexes", images.quirk, "10% Negative Quirk: Slowdraw", images.nothing, "40% Nothing"]) + prep([images.loot, "Gold/Gems x2 + Gems/Trinket x1"]),
        info: ''
    }, {
        name: 'Left Luggage',
        type: 'Treasure, Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/6/68/Left_Luggage.png/180px-Left_Luggage.png?version=ccbb23ed8ff53d4250cb449d9c651b84',
        location: 'Weald',
        searchterms: 'box, chest',
        items: images.hand + images.antivenom + images.skeletonkey,
        itemsresult: prep([images.loot, "50% Any Loot x4 + Journal Entry", images.blight, "50% Blight"]) + prep([images.loot, "Any Loot x3"]) + prep([images.loot, "Any Loot x3"]),
        info: ''
    }, {
        name: 'Mummified Remains',
        type: 'Body, Haunted, Unholy',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/a/ac/Mummified_Remains.png/180px-Mummified_Remains.png?version=1b9e17b3024817c46674148a4ed496e3',
        location: 'Weald',
        searchterms: 'body, dead',
        items: images.hand + images.bandage,
        itemsresult: prep([images.loot, "40% Gold/Trinkets x1", images.blight, "40% Blight", images.nothing, "20% Nothing"]) + prep([images.loot, "Gold/Trinkets x2"]),
        info: ''
    }, {
        name: 'Old Tree',
        type: 'Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/2/2f/Old_Tree.png/180px-Old_Tree.png?version=a4944900e81055e726ba9c9873faa700',
        location: 'Weald',
        searchterms: 'stump, wood',
        items: images.hand + images.antivenom,
        itemsresult: prep([images.loot, "50% Any Loot x2", images.blight, "25% Blight", images.nothing, "25% Nothing"]) + prep([images.loot, "Any Loot x3"]),
        info: ''
    }, {
        name: 'Pristine Fountain',
        type: 'Fountain',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/8/8b/Pristine_Fountain.png/176px-Pristine_Fountain.png?version=2bdd836502b1cdb173ad71db942f62b6',
        location: 'Weald',
        searchterms: 'angel, water, statue',
        items: images.hand + images.holywater,
        itemsresult: prep([images.loot, "Stress Heal 20"]) + prep([images.stressheal, "Stress Heal 30"]),
        info: ''
    }, {
        name: 'Shallow Grave',
        type: 'Body, Haunted, Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/8/8b/Pristine_Fountain.png/176px-Pristine_Fountain.png?version=2bdd836502b1cdb173ad71db942f62b6',
        location: 'Weald',
        searchterms: 'cross, grave, mound, dirt, stone',
        items: images.hand + images.shovel,
        itemsresult: prep([images.blight, "50% Blight", images.disease, "50% Random Disease"]) + prep([images.heirloom, "Gems/Heirlooms x3"]),
        info: ''
    }, {
        name: 'Traveler\'s Tent',
        type: 'Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/3/37/Traveler%27s_Tent.png/180px-Traveler%27s_Tent.png?version=30705b85000a0799b685c7a5d86a058a',
        location: 'Weald',
        searchterms: 'camp',
        items: images.nothing,
        itemsresult: prep([images.loot, "37.5% Gold/Supplies x4 + Gold/Heirlooms x4 + Journal Entry", images.scouting, "37.5% Scouting", images.stress, "12.5% Stress +25", images.nothing, "12.5% Nothing"]),
        info: ''
    }, {
        name: 'Troubling Effigy',
        type: 'Unholy, Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/d/dc/Troubling_Effigy.png/180px-Troubling_Effigy.png?version=3ffb4d76d8a262885aa9c943c4e82d0b',
        location: 'Weald',
        searchterms: 'deer, skull, blood, bone',
        items: images.hand + images.holywater,
        itemsresult: prep([images.quirk, "18.8% Random Positive Quirk", images.scouting, "18.8% Random Negative Quirk", images.bleed, "18.8% Bleed", images.blight, "9.4% Blight", images.stress, "9.4% Stress +15", images.nothing, "25% Nothing"]) + prep([images.quirk, "Random Positive Quirk"]),
        info: ''
    }, {
        name: 'Barnacle Crusted Chest',
        type: 'Treasure',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/c/c5/Barnacle_Crusted_Chest.png/180px-Barnacle_Crusted_Chest.png?version=93a791db71ac3dc968ae78f41d26d2f5',
        location: 'Cove',
        searchterms: 'treasure',
        items: images.hand + images.shovel,
        itemsresult: prep([images.loot, "50% Any loot x2", images.scouting, "25% Bleed", images.nothing, "25% Nothing"]) + prep([images.loot, "Any Loot x3"]),
        info: ''
    }, {
        name: 'Bas-Relief',
        type: 'Knowledge, Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/8/8f/Bas-Relief.png/180px-Bas-Relief.png?version=9fd2d50b672b8c2fa8324dde5ac315af',
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.shovel,
        itemsresult: prep([images.quirk, "66.7% Positive Quirk", images.quirk, "22.2% Negative Quirk", images.nothing, "11.1% Disease Chance"]) + prep([images.stress, "Stress +100"]),
        info: ''
    }, {
        name: 'Brackish Tide Pool',
        type: 'Drink, Fountain',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/6/68/Brackish_Tide_Pool.png/180px-Brackish_Tide_Pool.png?version=86e2e50c6de28b2cc805d90b1d09281d',
        location: 'Cove',
        searchterms: 'water, skeleton',
        items: images.hand + images.antivenom,
        itemsresult: prep([images.buff, "75% Buff 33% Resist Blight, Bleed, Disease, and Debuff until Camp", images.disease, "25% Random Disease"]) + prep([images.stressheal, "Heal 5 HP and Cure (50%) OR Stress Heal 5 (50%)"]),
        info: ''
    }, {
        name: 'Eerie Coral',
        type: 'Knowledge',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/3/36/Eerie_Coral.png/119px-Eerie_Coral.png?version=cf1355bcd2431cb9e2fea11b7da6f32e',
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.herb,
        itemsresult: prep([images.stressheal, "50% Stress Heal 10", images.stress, "25% Stress +25", images.nothing, "25% Nothing"]) + prep([images.quirk, "Purge Negative Quirk"]),
        info: ''
    }, {
        name: 'Fish Idol',
        type: 'Unholy, Worship',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/3/39/Fish_Idol.png/150px-Fish_Idol.png?version=7783b3f5ecc580efb46e60db2830dd7c',
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.holywater,
        itemsresult: prep([images.debuff, "50% Debuff -25% DMG, -10 ACC until Camp", images.debuff, "50% Debuff -12 DODGE until Camp"]) + prep([images.buff, "Buff +18% DMG until Camp (50%)"]),
        info: ''
    }, {
        name: 'Fish Carcass',
        type: 'Food',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/a/ae/Fish_Carcass.png/180px-Fish_Carcass.png?version=5e7bdf3bc2cedd696bcf1f64618204bd',
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.herb,
        itemsresult: prep([images.loot, "16.7% Gem/Trinkets x1 Gold/Gem x1 + Supply x1", images.disease, "16.7% Disease: The Red Plague", images.blight, "11.1% Blight", images.bleed, "5.6% Bleed", images.nothing, "50% Nothing"]) + prep([images.loot, "Gem/Trinkets x2 + Gem/Gold x1 + Supplies x2"]),
        info: ''
    }, {
        name: 'Giant Oyster',
        type: 'Treasure, Scrounging',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/3/39/Fish_Idol.png/150px-Fish_Idol.png?version=7783b3f5ecc580efb46e60db2830dd7c',
        location: 'Cove',
        searchterms: '',
        items: images.hand + images.shovel + images.treats,
        itemsresult: prep([images.loot, "40% Gold/Trinkets x2", images.bleed, "40% Bleed", images.nothing, "20% Nothing"]) + prep([images.loot, "Gold/Trinkets x3"]) + prep([images.buff, "Buff - Dodge +25"]),
        info: ''
    }, {
        name: 'Ship\'s Figurehead',
        type: 'Reflective',
        image: 'https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/thumb/c/c4/Ship%27s_Figurehead.png/146px-Ship%27s_Figurehead.png?version=6d84d81e2c2597b81fbf0845be093bac',
        location: 'Cove',
        searchterms: '',
        items: images.hand,
        itemsresult: prep([images.stressheal, "66.7% Stress Heal 25", images.buff, "33.3% Buff +20% DMG, +4 SPD until Camp"]),
        info: ''
    }]);
}

function prep(results) {
    var final = "<div class=\"subimage\">";
    for (x = 0; x < results.length; x++) {
        final = final.concat(results[x]);
        if (x % 2 == 1) {
            final = final.concat("</div><div class=\"subimage\">")
        }
    }
    return "<div class=\"wrap\">" + final + "</div></div>";
}
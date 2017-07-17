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
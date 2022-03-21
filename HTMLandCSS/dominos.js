//Domino's Menu Items Exercise - Desserts
function Dessert(cinnamonBreadTwists, marbledCookieBrownies, chocolateLavaCrunchCakes, bakedAppleDipandCinnamonBreadTwists){
    this.cinnamon = cinnamonBreadTwists;
    this.marbled = marbledCookieBrownies;
    this.chocolate = chocolateLavaCrunchCakes;
    this.baked  = bakedAppleDipandCinnamonBreadTwists;

    this.changeBaked = function(newBaked) {
        this.baked = newBaked;
    }
}

const flavorOfDessert = new Dessert("spicy","yummy","crunchy","fruity");
flavorOfDessert.changeBaked("lemony");

console.log(flavorOfDessert);

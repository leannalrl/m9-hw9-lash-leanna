class Desserts{
  constructor(type, calories){
    this.type = type;
    this.calories = calories;
  }
}

class Icecream extends Desserts{
  constructor(type, calories, flavor, scoops){
    super(flavor, scoops);
    this.flavor = flavor;
    this.scoops = scoops;
  }

  includeSpoon() {
      console.log('Here is your spoon!');
  }
}

const vanillaIceCream = new Icecream('Ice Cream', 340, 'Vanilla', 3)

console.log(vanillaIceCream);
vanillaIceCream.includeSpoon();

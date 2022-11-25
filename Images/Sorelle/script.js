class Fruit {
  constructor(fruitName, fruitColor){
    this.name = fruitName;
    this.color = fruitColor;
    this.taste = "sweet"
  }


  showInfo(){
    document.getElementById("demo").innerHTML = "The " + this.name + " is " + this.color + " and " + this.taste
  }
}

var fruit = new Fruit("Mango", "Orange")
fruit.showInfo()

var energie = new Fruit("Pamplemouse", "Orangé")
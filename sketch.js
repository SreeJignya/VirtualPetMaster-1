var dog,happyDog;
var database;
var foodS,foodStock;

var dog1,dog2;
var x;


function preload()
{
	dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");


}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(200,200);
  dog.addImage(dog1);
  dog.scale = 0.2;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  


  
}


function draw() {  

  background("peachpuff");

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2);
  }

  drawSprites();
  
  textSize(20);
  fill("white");
  text("Note : Press UP_ARROW key to feed Drago Milk" , 50,100);
  
}

function readStock(data){
  foodS = data.val();
}


function writeStock(foodS){

  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref("/").update({
    Food : foodS - 1
  })

}



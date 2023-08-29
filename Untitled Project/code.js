var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b684f195-cbeb-48bc-8b0f-5f3d6145b610","ed098511-c9ce-4945-bd34-b9f5fcdc3858","fd6031ec-465e-485a-99b0-35a3f8ad4d06","66e37017-d273-43f4-9b5a-23edfbb58e3a","1b1a73c1-98a5-464b-bfd8-858960c58edb"],"propsByKey":{"b684f195-cbeb-48bc-8b0f-5f3d6145b610":{"name":"chicken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VYGK5dc9UHJwQymEzeHpvbXMIfeCqLZo/category_animals/chicken.png","frameSize":{"x":324,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYGK5dc9UHJwQymEzeHpvbXMIfeCqLZo","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":324,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYGK5dc9UHJwQymEzeHpvbXMIfeCqLZo/category_animals/chicken.png"},"ed098511-c9ce-4945-bd34-b9f5fcdc3858":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"fd6031ec-465e-485a-99b0-35a3f8ad4d06":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"66e37017-d273-43f4-9b5a-23edfbb58e3a":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"1b1a73c1-98a5-464b-bfd8-858960c58edb":{"name":"car4","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var limite1 = createSprite(190, 120, 420, 3);
var limite2 = createSprite(190, 260, 420, 3);
var galinha =  createSprite(20, 190, 13, 13);
galinha.setAnimation("chicken_1")
galinha.scale = 0.05

var car1 = createSprite(100, 130, 10, 10);
car1.setAnimation("car1")
car1.scale = 0.2
car1.velocityY = 6
var car2 = createSprite(215, 130, 10, 10);
car2.setAnimation("car2")
car2.velocityY = 6
car2.scale = 0.2
var car3 = createSprite(165, 250, 10, 10);
car3.setAnimation("car3")
car3.scale = 0.2
car3.velocityY = -6
var car4 = createSprite(270, 250 ,10, 10);
car4.setAnimation("car4")
car4.scale = 0.2
car4.velocityY = -6

function draw() {
  background("black");
  drawSprites();
  car1.bounceOff(limite1);
  car1.bounceOff(limite2);
  car2.bounceOff(limite1);
  car2.bounceOff(limite2);
  car3.bounceOff(limite1);
  car3.bounceOff(limite2);
  car4.bounceOff(limite1);
  car4.bounceOff(limite2);
if(keyDown("RIGHT_ARROW")){
    galinha.x = galinha.x + 20;
  }
  if(keyDown("LEFT_ARROW")){
    galinha.x = galinha.x - 4;
  }
  if(
     galinha.isTouching(car1)||
     galinha.isTouching(car2)||
     galinha.isTouching(car3)||
     galinha.isTouching(car4))
  {
     galinha.x = 20;
     galinha.y = 190;
  }
}
  
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

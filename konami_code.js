const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

index = 0;

function init() {
  keysDown = [];
  document.addEventListener('keydown', function (e) {
    var key = e.key;
    keysDown[index] = key
    var requiredKey = codes[index];
    
    if (key === requiredKey) {
      index++
      if (index === codes.length){
        alert("Cheat codes activated")
        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
 
}

function returnKeysDown() {
  console.log(keysDown)
}


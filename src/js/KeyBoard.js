const keyBoard = (keyCode) => {
  let key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;

  key.downHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

export const setKeyBoard = () => {
  let left = keyBoard(37);
  let right = keyBoard(39);
  left.press = () => {
    console.log('leftPress');
  };
  left.release = () => {
    console.log('leftRelease');
  };
  right.press = () => {
    console.log('rightPress');
  };
  right.release = () => {
    console.log('rightRelease');
  };
} 

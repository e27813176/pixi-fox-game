import * as PIXI from 'pixi.js';
import { keyBoard } from './KeyBoard';
import { FishingPage } from './Pages/FishingPage'

import BGURL from './images/FishingPage-01.png';
import ParticleURL from './images/Particle.png';
import Rod from './images/Rod.png';
import FoxURL from './images/FoxFishing.png';
import FishSofaUrl from './images/FishSofa.png';
import FoxAnim from './Fox';

import { app } from './index';

import { explosion } from './FX/explosion';
import { initPlugin, charm } from './initPlugins';


const loader = PIXI.loader;
const Graphics = PIXI.Graphics;
const Sprite = PIXI.Sprite;


export const GameBoot = () => {
  BootScene();
  initPlugin();
  createResource();
}


const createResource = () => {
  // let resource = {};
  console.log(loader);

  loader
    .add('BG', BGURL)
    .add('Fox', FoxURL)
    .add('rod', Rod)
    .add('sofa', FishSofaUrl)
    .add('particle', ParticleURL)
    .on('progress', handleProgress)
    .load((loader, res) => {
      initScene(res);
      initFox(res);
    })
}

const handleProgress = (loader, res) => {
  console.log(loader.progress + '%');
}

const BootScene = () => {
  let rectangle = new Graphics();
  rectangle.beginFill(0x66CC11);
  rectangle.drawRect(0, 0, 1600, 800);
  rectangle.endFill();
  rectangle.alpha = 0;
  charm.fadeIn(rectangle);

  app.stage.addChild(rectangle);
}

const initScene = (res) => {
  let FishingScene = FishingPage(res);
  FishingScene.visible = false;
  app.stage.addChild(FishingScene);
  setKeyBoard(FishingScene);
}

const initFox = (res) => {
  let FishingRod = new Sprite(res.rod.texture);

  FishingRod.x = 560;
  FishingRod.y = 450;
  app.stage.addChild(FishingRod);

  let Fox = new FoxAnim(res);
  app.stage.addChild(Fox);
  Fox.interactive = true;
  Fox.value = 0;
  Fox.mousedown = onTouchstart;
}

const onTouchstart = event => {
  console.log(event.target.value)
}

function setKeyBoard(FishingScene) {
  let left = keyBoard(37);
  let right = keyBoard(39);
  left.press = () => {
    console.log('leftPress');
    FishingScene.visible = true;
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

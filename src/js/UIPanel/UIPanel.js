import UIFoxJson from '../images/UIPanel/UIFox.json';
import { createFoxHead } from './FoxHead';
import { charm } from '../initPlugins';
import { particleStream } from '../FX/particleStream';
import { Container, Sprite } from '../PixiAlias';

export class UIPanel extends Container {
  constructor(res) {
    super();
    this.UserPanel = new Sprite(res.UserPanel.texture);
    this.UserPanel.interactive = true;
    this.UserPanel.buttonMode = true;
    this.UserPanel.mousedown = this.showUser.bind(this);
    this.addChild(this.UserPanel);
    this.Fox = createFoxHead(res.UIFox, UIFoxJson);
    this.addChild(this.Fox);
  }
  showUser() {
    this.Fox.play();
  }
}

let Fox = {};
/*
export const createUIPanel = (res) => {
  let UserPanel = new Sprite(res.UserPanel.texture);
  UIPanel.addChild(UserPanel);
  Fox = createFoxHead(res.UIFox, UIFoxJson);
  Fox.stop();
  UIPanel.addChild(Fox);

  let style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'normal',
    fill: '#ffffff',
    wordWrap: true,
    wordWrapWidth: 440
  });

  let levelText = new PIXI.Text('Lv ' + 1, style);
  levelText.x = 265;
  levelText.y = 200;
  let energyText = new PIXI.Text('Energy : ' + 999, style);
  energyText.x = 285;
  energyText.y = 80;
  let expText = new PIXI.Text('Exp : ' + 999, style);
  expText.x = 285;
  expText.y = 120;
  particleStream(res, UIPanel).play();

  UIPanel.addChild(levelText);
  UIPanel.addChild(energyText);
  UIPanel.addChild(expText);
}
*/
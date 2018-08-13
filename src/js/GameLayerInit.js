import { FishingScene } from './Scenes/FishingScene';
import { app } from '.';
import { FoxContainer } from './Fox';
import { BlackScene } from './Scenes/TransitionScene';
import { Container } from './PixiAlias';

export const initGameLayer = (UI, Scene) => {
  Fox();
  UIPanelLayer(UI);
  sceneTransition();
}

const backScene = (Scene) => {
  app.stage.addChild(Scene.BG);
}

const Fox = () => {
  app.stage.addChild(FoxContainer);
}

const frontScene = (Scene) => {
  app.stage.addChild(Scene.Front);
}

const UIPanelLayer = (UI) => {
  app.stage.addChild(UI);
}

const sceneTransition = () => {
  app.stage.addChild(BlackScene);
}



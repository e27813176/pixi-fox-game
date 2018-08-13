import { BlackScene } from './TransitionScene';
import { charm } from '../initPlugins';

export const SceneManager = {
  openScene: (scene) => {
    charm.fadeOut(BlackScene);
    scene.visible = true;
  }
}

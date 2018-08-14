import { UIPanel } from './UIPanel/UIPanel';
import FishScene from './Scenes/FishingScene'
import { SceneManager } from './Scenes/SceneManager'
import { app } from '.';
import { BlackScene } from './Scenes/TransitionScene';

export const createGameObj = (loader, res) => {
	const UI = new UIPanel(res);
	const FishingScene = new FishScene(res);

	app.stage.addChild(FishingScene);
	app.stage.addChild(UI);
	app.stage.addChild(BlackScene);

	SceneManager.openScene(FishingScene);
}

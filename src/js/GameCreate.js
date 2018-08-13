import { UIPanel } from './UIPanel/UIPanel';
import FishScene from './Scenes/FishingScene'
import { initGameLayer } from './GameLayerInit';
import { initFox } from './Fox';
import { SceneManager } from './Scenes/SceneManager'
import { app } from '.';

export const createGameObj = (loader, res) => {
	const UI = new UIPanel(res);
	const FishingScene = new FishScene(res);

	app.stage.addChild(FishingScene);
	app.stage.addChild(UI);

	initGameLayer(UI);

	SceneManager.openScene(FishingScene);
	initFox(res);

}

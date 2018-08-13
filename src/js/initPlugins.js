import Charm from '../charm-master/src/charm';
import Dust from '../dust-master/src/dust';
import { app } from '.';

export const dust = new Dust(PIXI);
export const charm = new Charm(PIXI);

export const initPlugin = () => {
    app.ticker.add(() => {
        charm.update();
        dust.update();
    });
}
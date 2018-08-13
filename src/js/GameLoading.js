import BGURL from './images/FishingPage-01.png';
import FrontURL from './images/FishingPageFront-01.png';
import ParticleURL from './images/Particle.png';
import BlueParticleURL from './images/blueparticle.png';
import RodURL from './images/Rod.png';
import FoxURL from './images/FoxFishing.png';
import UserPanelURL from './images/UIPanel/UserPanel.png';
import UIFoxURL from './images/UIPanel/UIFox.png';
import { createGameObj } from './GameCreate'

import { loader } from './PixiAlias';

export const GameLoading = () => {
  loader
    .add('UIFox', UIFoxURL)
    .add('UserPanel', UserPanelURL)
    .add('BG', BGURL)
    .add('Front', FrontURL)
    .add('Fox', FoxURL)
    .add('rod', RodURL)
    .add('particle', ParticleURL)
    .add('blueparticle', BlueParticleURL)
    .on('progress', handleProgress)
    .load(createGameObj)
}

const handleProgress = (loader, res) => {
  console.log(loader.progress + '%');
}
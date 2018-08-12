loader
  .add('BG', BGURL)
  .add('Fox', FoxURL)
  .add('rod', Rod)
  .add('sofa', FishSofaUrl)
loader.load((loader, res) => {
  initScene(app, res);
})
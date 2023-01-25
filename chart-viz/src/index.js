const dscc = require('@google/dscc');
const viz = require('@google/dscc-scripts/viz/initialViz.js');
const font = require('./fonts.js');
const chart = require('./chart.js');
const local = require('./localMessage.js');

// write viz code here
const drawViz = (data) => {
  //font.load("https://fonts.cdnfonts.com/css/cartoonist-kooky");
  font.load("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
  viz.readmeViz();
  chart.draw();
  //viz.firstViz(data);
};

// renders locally
if (DSCC_IS_LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}

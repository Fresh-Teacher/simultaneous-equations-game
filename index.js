import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Avery from "./Avery/Avery.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Avery: new Avery({
    x: -0.353688817533673,
    y: -19.82336256694348,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

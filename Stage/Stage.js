/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.status = 1;
    this.vars.x = -9;
    this.vars.y = 0;
    this.vars.xSign = 1;
    this.vars.ySign = 1;
    this.vars.xCoefficient = 5;
    this.vars.yCoefficient = 10;
    this.vars.xCoefficient2 = 8;
    this.vars.yCoefficient2 = 7;
    this.vars.xSign2 = 0;
    this.vars.ySign2 = 0;
    this.vars.equation1 = "5x+10y= -45";
    this.vars.equation2 = "-8x-7y= 72";

    this.watchers.equation1 = new Watcher({
      label: "Equation 1",
      style: "normal",
      visible: true,
      value: () => this.vars.equation1,
      x: 247,
      y: -50
    });
    this.watchers.equation2 = new Watcher({
      label: "Equation 2",
      style: "normal",
      visible: true,
      value: () => this.vars.equation2,
      x: 248,
      y: -76
    });
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Avery extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("avery-a", "./Avery/costumes/avery-a.svg", { x: 39, y: 94 }),
      new Costume("avery-b", "./Avery/costumes/avery-b.svg", { x: 39, y: 94 })
    ];

    this.sounds = [new Sound("pop", "./Avery/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.equation1 = 0;
    this.stage.vars.equation2 = 0;
    this.stage.vars.status = 1;
    yield* this.sayAndWait(
      "The game will start in 10 seconds. Please wait...",
      10
    );
    this.stage.vars.x = this.random(-10, 10);
    this.stage.vars.y = this.random(-10, 10);
    this.stage.vars.xCoefficient = this.random(1, 10);
    this.stage.vars.yCoefficient = this.random(1, 10);
    this.stage.vars.xSign = this.random(0, 1);
    this.stage.vars.ySign = this.random(0, 1);
    this.stage.vars.xCoefficient2 = this.random(1, 10);
    this.stage.vars.yCoefficient2 = this.random(1, 10);
    this.stage.vars.xSign2 = this.random(0, 1);
    this.stage.vars.ySign2 = this.random(0, 1);
    while (
      !!(
        this.compare(
          this.stage.vars.xCoefficient2,
          this.stage.vars.xCoefficient
        ) === 0
      )
    ) {
      this.stage.vars.xCoefficient2 = this.random(1, 10);
      yield;
    }
    while (
      !!(
        this.compare(
          this.stage.vars.yCoefficient2,
          this.stage.vars.yCoefficient
        ) === 0
      )
    ) {
      this.stage.vars.yCoefficient2 = this.random(1, 10);
      yield;
    }
    while (
      !!(this.compare(this.stage.vars.xSign2, this.stage.vars.xSign) === 0)
    ) {
      this.stage.vars.xSign2 = this.random(0, 1);
      yield;
    }
    while (
      !!(this.compare(this.stage.vars.ySign2, this.stage.vars.ySign) === 0)
    ) {
      this.stage.vars.ySign2 = this.random(0, 1);
      yield;
    }
    if (this.toNumber(this.stage.vars.xSign) === 1) {
      if (this.toNumber(this.stage.vars.ySign) === 1) {
        this.stage.vars.equation1 =
          this.toString(this.stage.vars.xCoefficient) +
          "x+" +
          this.toString(this.stage.vars.yCoefficient) +
          "y=" +
          (" " +
            this.toString(
              1 *
                (this.toNumber(this.stage.vars.xCoefficient) *
                  this.toNumber(this.stage.vars.x)) +
                1 *
                  (this.toNumber(this.stage.vars.yCoefficient) *
                    this.toNumber(this.stage.vars.y))
            ));
      } else {
        this.stage.vars.equation1 =
          this.toString(this.stage.vars.xCoefficient) +
          "x-" +
          this.toString(this.stage.vars.yCoefficient) +
          "y=" +
          (" " +
            this.toString(
              1 *
                (this.toNumber(this.stage.vars.xCoefficient) *
                  this.toNumber(this.stage.vars.x)) +
                -1 *
                  (this.toNumber(this.stage.vars.yCoefficient) *
                    this.toNumber(this.stage.vars.y))
            ));
      }
    } else {
      if (this.toNumber(this.stage.vars.ySign) === 1) {
        this.stage.vars.equation1 =
          "-" +
          (this.toString(this.stage.vars.xCoefficient) +
            "x+" +
            this.toString(this.stage.vars.yCoefficient) +
            "y=" +
            (" " +
              this.toString(
                -1 *
                  (this.toNumber(this.stage.vars.xCoefficient) *
                    this.toNumber(this.stage.vars.x)) +
                  1 *
                    (this.toNumber(this.stage.vars.yCoefficient) *
                      this.toNumber(this.stage.vars.y))
              )));
      } else {
        this.stage.vars.equation1 =
          "-" +
          (this.toString(this.stage.vars.xCoefficient) +
            "x-" +
            this.toString(this.stage.vars.yCoefficient) +
            "y=" +
            (" " +
              this.toString(
                -1 *
                  (this.toNumber(this.stage.vars.xCoefficient) *
                    this.toNumber(this.stage.vars.x)) +
                  -1 *
                    (this.toNumber(this.stage.vars.yCoefficient) *
                      this.toNumber(this.stage.vars.y))
              )));
      }
    }
    if (this.toNumber(this.stage.vars.xSign2) === 1) {
      if (this.toNumber(this.stage.vars.ySign2) === 1) {
        this.stage.vars.equation2 =
          this.toString(this.stage.vars.xCoefficient2) +
          "x+" +
          this.toString(this.stage.vars.yCoefficient2) +
          "y=" +
          (" " +
            this.toString(
              1 *
                (this.toNumber(this.stage.vars.xCoefficient2) *
                  this.toNumber(this.stage.vars.x)) +
                1 *
                  (this.toNumber(this.stage.vars.yCoefficient2) *
                    this.toNumber(this.stage.vars.y))
            ));
      } else {
        this.stage.vars.equation2 =
          this.toString(this.stage.vars.xCoefficient2) +
          "x-" +
          this.toString(this.stage.vars.yCoefficient2) +
          "y=" +
          (" " +
            this.toString(
              1 *
                (this.toNumber(this.stage.vars.xCoefficient2) *
                  this.toNumber(this.stage.vars.x)) +
                -1 *
                  (this.toNumber(this.stage.vars.yCoefficient2) *
                    this.toNumber(this.stage.vars.y))
            ));
      }
    } else {
      if (this.toNumber(this.stage.vars.ySign2) === 1) {
        this.stage.vars.equation2 =
          "-" +
          (this.toString(this.stage.vars.xCoefficient2) +
            "x+" +
            this.toString(this.stage.vars.yCoefficient2) +
            "y=" +
            (" " +
              this.toString(
                -1 *
                  (this.toNumber(this.stage.vars.xCoefficient2) *
                    this.toNumber(this.stage.vars.x)) +
                  1 *
                    (this.toNumber(this.stage.vars.yCoefficient2) *
                      this.toNumber(this.stage.vars.y))
              )));
      } else {
        this.stage.vars.equation2 =
          "-" +
          (this.toString(this.stage.vars.xCoefficient2) +
            "x-" +
            this.toString(this.stage.vars.yCoefficient2) +
            "y=" +
            (" " +
              this.toString(
                -1 *
                  (this.toNumber(this.stage.vars.xCoefficient2) *
                    this.toNumber(this.stage.vars.x)) +
                  -1 *
                    (this.toNumber(this.stage.vars.yCoefficient2) *
                      this.toNumber(this.stage.vars.y))
              )));
      }
    }
    yield* this.sayAndWait("Try these 2 equations. ", 10);
    while (!(this.toNumber(this.stage.vars.status) === 0)) {
      yield* this.askAndWait("Enter value of x:");
      if (this.compare(this.answer, this.stage.vars.x) === 0) {
        yield* this.askAndWait("Enter value of y:");
        if (this.compare(this.answer, this.stage.vars.y) === 0) {
          this.stage.vars.status = 0;
          this.say("Good job, you got it correct! ");
        } else {
          yield* this.sayAndWait("Sorry, that is not correct", 1);
        }
      } else {
        yield* this.sayAndWait("Sorry, that is not correct", 1);
      }
      yield;
    }
  }

  *whenKeySpacePressed() {
    this.stage.vars.status = 1;
    this.stage.vars.x = 0;
    this.stage.vars.y = 0;
    this.stage.vars.xSign = 0;
    this.stage.vars.ySign = 0;
    this.stage.vars.xCoefficient = 0;
    this.stage.vars.yCoefficient = 0;
    this.stage.vars.xSign2 = 0;
    this.stage.vars.ySign2 = 0;
    this.stage.vars.xCoefficient2 = 0;
    this.stage.vars.yCoefficient2 = 0;
    this.stage.vars.equation1 = 0;
    this.stage.vars.equation2 = 0;
  }
}

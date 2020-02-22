"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            // initialization
            _this.playLabel = new objects.Label();
            //this.nextButton = new objects.Button();
            _this.rollButton = new objects.Button();
            //this._diceR = new objects.Label();
            //this._diceL = new objects.Label();
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            //instantiate a new Text object
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.leftDice = new objects.Button(config.Game.ASSETS.getResult("roll1"), 150, 200, true);
            this.rightDice = new objects.Button(config.Game.ASSETS.getResult("roll1"), 460, 200, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.rollButton.addEventListener("click", function () {
                var diceRoll01 = Math.floor(Math.random() * 6) + 1;
                var diceRoll02 = Math.floor(Math.random() * 6) + 1;
                var image1 = new Image();
                var image2 = new Image();
                var path = showImage(diceRoll01);
                var path2 = showImage(diceRoll02);
                //let collectNum= [ showImage(diceRoll01), showImage(diceRoll02)];
                //console.log(collectNum);
                image1.src = path;
                image2.src = path2;
                _this.leftDice.image = image1;
                _this.rightDice.image = image2;
                // this.leftDice= new objects.Button(config.Game.ASSETS.getResult(showImage, 320, 430, true);
                // this.leftDice= new objects.Button(config.Game.ASSETS.getResult(showImage, 320, 430, true);
            });
            this.addChild(this.playLabel);
            this.addChild(this.rollButton);
            this.addChild(this.leftDice);
            this.addChild(this.rightDice);
            function showImage(value) {
                var showNumber;
                switch (value) {
                    case 1:
                        showNumber = "./Assets/images/1.png";
                        break;
                    case 2:
                        showNumber = "./Assets/images/2.png";
                        break;
                    case 3:
                        showNumber = "./Assets/images/3.png";
                        break;
                    case 4:
                        showNumber = "./Assets/images/4.png";
                        break;
                    case 5:
                        showNumber = "./Assets/images/5.png";
                        break;
                    case 6:
                        showNumber = "./Assets/images/6.png";
                        break;
                    default:
                        showNumber = "./Assets/images/1.png";
                }
                return showNumber;
            } //end function
        };
        Play.prototype.Display = function () {
            //randonNumber();
        };
        return Play;
    }(objects.Scene)); //end class
    scenes.Play = Play;
})(scenes || (scenes = {})); //end module
//# sourceMappingURL=Play.js.map
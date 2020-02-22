module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        playLabel: objects.Label;
        nextButton: objects.Button;
        rollButton: objects.Button;
        leftDice: objects.Button;
        rightDice: objects.Button;

        // labels
        private _diceR: objects.Label;
        private _diceL: objects.Label;

        //diceResult
        max:number;
        min:number;
 

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.playLabel = new objects.Label();
            //this.nextButton = new objects.Button();
            this.rollButton = new objects.Button();
            //this._diceR = new objects.Label();
            //this._diceL = new objects.Label();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            //instantiate a new Text object
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.leftDice= new objects.Button(config.Game.ASSETS.getResult("button"), 100, 200, true); 
            this.rightDice= new objects.Button(config.Game.ASSETS.getResult("button"), 460, 200, true); 
            this.Main();
        }        
        
        public Update(): void 
        {
        
        }

        
        public Main(): void 
        {
            this.rollButton.addEventListener("click", ()=>{
                let diceRoll01 = Math.floor(Math.random()*6) + 1;
                let diceRoll02 = Math.floor(Math.random()*6) + 1;
                let image1 = new Image();
                let image2 = new Image();
                let path = showImage(diceRoll01);
                let path2 = showImage(diceRoll02);
                //let collectNum= [ showImage(diceRoll01), showImage(diceRoll02)];
                //console.log(collectNum);
                image1.src = path;
                image2.src = path2;
                this.leftDice.image = image1;
                this.rightDice.image = image2;
            
                // this.leftDice= new objects.Button(config.Game.ASSETS.getResult(showImage, 320, 430, true);
                // this.leftDice= new objects.Button(config.Game.ASSETS.getResult(showImage, 320, 430, true);
                
                
            });
            this.addChild(this.playLabel);
            this.addChild(this.rollButton);
            this.addChild(this.leftDice);
            this.addChild(this.rightDice);

            function showImage(value:number){
                let showNumber:string;
            switch(value) {
                case 1:
                    showNumber = "./Assets/images/1.png";
                    break;
                case 2:
                    showNumber = "./Assets/images/2.png";
                break;
                case 3:
                    showNumber= "./Assets/images/3.png";
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

            }//end function
        }

        public Display(): void
        {
            //randonNumber();
        }

        // /* Utility function to check if a value falls within a range of bounds */
        // private checkRange(value:number, lowerBounds:number, upperBounds:number){
        //     if (value >= lowerBounds && value <= upperBounds) {
        //         return value;
        //     }
        //     else {
        //         return !value;
        //     }
        // }

        // private getRandomNumber: Function = (min:number, max:number) => {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        private randonNumber():void
        {
            let diceRoll01 = Math.floor(Math.random()*6) + 1;
            let diceRoll02 = Math.floor(Math.random()*6) + 1;
            let collectNum= [ diceRoll01, diceRoll02];
        }

        // function getImage(value:number) {
        //     let showNumber:string;
        //     switch(value) {
        //         case 1:
        //             showNumber = "roll1";
        //             break;
        //         case 2:
        //             showNumber = "roll2";
        //         break;
        //         case 3:
        //             showNumber= "roll3";
        //             break;
        //         case 4:
        //             showNumber = "roll4";
        //             break;
        //         case 5: 
        //             showNumber = "roll5";
        //             break;
        //         case 6: 
        //             showNumber = "roll6";
        //             break;
        //         default:
        //             showNumber = "roll1";
        //     }
        //     return showNumber;

        


        
        


        

        // //#############################################################
        // // DISPLAY SPIN RESULTS
        // //#############################################################
        // private DisplayResults(): void {
        //     this.RemoveOldResult();
        //     for (let index = 0; index < this._spinResult.length; index++) {
        //         let result: string = this._spinResult[index];
        //         this._reels[index] = new objects.Reel(result);
        //         this._reels[index].x = this._reelXPonit[index];
        //         this.addChild(this._reels[index]);
        //     }
        // }

        //#############################################################
        // REMOVE SPIN RESULT
        //#############################################################
        // private RemoveOldResult() {
            
        //     this.removeChild(this.collectNum[ ]);
            
        // }

        // private Dices(): string[] {
        //     {
        //         var betLine = [" ", " "];
        //         var outCome = [0, 0];

        //         for (var spin = 0; spin < 2; spin++) {
        //             outCome[spin] = Math.floor((Math.random() * 65) + 1);
        //             switch (outCome[spin]) {
        //                 case this.checkRange(outCome[spin], 1, 6):  // 41.5% probability
        //                     betLine[spin] = "blank";
        //                     this._blanks++;
        //                     break;
        //                 case this.checkRange(outCome[spin], 1, 37): // 15.4% probability
        //                     betLine[spin] = "grapes";
        //                     this._grapes++;
        //                     break;
        //                 case this.checkRange(outCome[spin], 38, 46): // 13.8% probability
        //                     betLine[spin] = "banana";
        //                     this._bananas++;
        //                     break;
        //                 case this.checkRange(outCome[spin], 47, 54): // 12.3% probability
        //                     betLine[spin] = "orange";
        //                     this._oranges++;
        //                     break;
        //                 case this.checkRange(outCome[spin], 55, 59): //  7.7% probability
        //                     betLine[spin] = "cherry";
        //                     this._cherries++;
        //                     break;
        //                 case this.checkRange(outCome[spin], 60, 62): //  4.6% probability
        //                     betLine[spin] = "bar";
        //                     this._bars++;
        //                     break;
        //                 case this.checkRange(outCome[spin], 63, 64): //  3.1% probability
        //                     betLine[spin] = "lemon";
        //                     this._lemons++;
        //                     break;
        //                 case this.checkRange(outCome[spin], 65, 65): //  1.5% probability
        //                     betLine[spin] = "seven";
        //                     this._sevens++;
        //                     break;
        //             }
        //         }
        //         return betLine;
        //     }
        // }


        
    }//end class
}//end module
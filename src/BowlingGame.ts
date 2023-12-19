export class BowlingGame{
    private maxScore : number = 10;
    private maxGames : number = 10;
    private secondTry: boolean;
    private typeTurn : string[];
    private scores   : number[];

    private STRIKE: string = "STRIKE";

    constructor(scores?: number[], typeTurn?: string[]){
        if(scores && typeTurn && scores.length > 0){
            this.scores    = scores;
            this.typeTurn = typeTurn;
            this.secondTry = false;
        }else {
            this.scores    = [];
            this.typeTurn  = [];
            this.secondTry = false;
        }
    }

    addNumberDown(number: number) {
        if(this.secondTry){
            return;
        }
        if(number >= this.maxScore){
            this.scores.push(number);
            this.typeTurn.push(this.STRIKE);
        }
    }

    countScore(): number{
        let totalScore = 0;
        const games = (this.scores.length < this.maxGames) ? this.scores.length : this.maxGames;
        for (let i = 0; i < games; i++) {
            totalScore += this.scores[i];
            if((i + 1) < (this.scores.length)){
                totalScore += this.scores[i + 1];
            }
            if((i + 2) < (this.scores.length)){
                totalScore += this.scores[i + 2];
            }
        }
        return totalScore;
    }

    private isStrike(number: number) {
        return this.maxScore == number;
    }
}
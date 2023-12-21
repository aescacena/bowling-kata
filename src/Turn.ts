export class Turn {
    private static maxScore: number = 10;
    private score          : number;
    private type           : string | undefined;
    private static STRIKE  : string = "STRIKE";

    private constructor(score: number, type?: string) {
        this.score = score;
        this.type  = type;
    }

    static create(score: number): Turn{
        if(this.isStrike(score)){
            return new Turn(score, this.STRIKE);
        }
        return new Turn(score);
    }

    private static isStrike(number: number) {
        return this.maxScore == number;
    }
}
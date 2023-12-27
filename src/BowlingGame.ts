export class BowlingGame{
    private maxScore: number = 10;
    private maxGames: number = 10;
    private scores  : number[];

    constructor(scores?: number[]){
        this.scores = scores ? scores : [];
    }

    addNumberDown(number: number) {
        this.scores.push(number <= this.maxScore ? number : this.maxScore);
    }

    countScore(): number{
        let totalScore  = 0;
        let frameNumber = 1;
        let games       = 0;
        for (let i = 0; i < this.scores.length; i = i + 1) {
            if(this.allGamesCounted(games)){
                break;
            }
            totalScore += this.scores[i];
            if(this.isStrike(i)){
                totalScore += this.strikePlusScoresFor(i);
                frameNumber = 1;
                games++;
                continue;
            }
            if(frameNumber == 2){
                if(this.isSpare(i)){
                    totalScore += this.sparePlusScoreFor(i);
                }
                frameNumber = 1;
                games++;
                continue;
            }
            frameNumber++;
        }
        return totalScore;
    }

    private allGamesCounted(games: number): boolean{
        return games == this.maxGames
    }

    private strikePlusScoresFor(frameIndex: number): number{
        let score = 0;
        let numberScoreObtained = 0;
        for (let i = frameIndex + 1; i < this.scores.length ; i++) {
            if(this.isValidFrame(i)){
                score += this.scores[i];
                numberScoreObtained++;
            }
            if(numberScoreObtained == 2){
                return score;
            }
        }
        return score;
    }

    private sparePlusScoreFor(frameActual: number): number{
        let score = 0;
        for (let i = frameActual + 1; i < this.scores.length ; i++) {
            if(this.isValidFrame(i)){
                return this.scores[i];
            }
        }
        return score;
    }

    private isValidFrame(frameIndex: number) {
        if(frameIndex >= this.scores.length){
            return false;
        }
        if(this.scores[frameIndex] == -1){
            return false;
        }
        return frameIndex < (this.scores.length);
    }

    private isStrike(frameIndex: number) {
        return this.scores[frameIndex] == this.maxScore;
    }

    private isSpare(frameIndex: number) {
        return this.maxScore == (this.scores[frameIndex - 1] + this.scores[frameIndex]);
    }
}
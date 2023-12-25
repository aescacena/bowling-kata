export class BowlingGame{
    private maxScore: number = 10;
    private maxGames: number = 10;
    private scores  : number[];

    constructor(scores?: number[]){
        this.scores = scores ? scores : [];
    }

    addNumberDown(number: number) {
        if((this.scores.length / 2) >= this.maxScore){
            this.scores.push(number);
            return;
        }
        if(this.isStrike(number)){
            this.scores.push(this.maxScore);
            this.scores.push(-1);
            return;
        }
        this.scores.push(number <= this.maxScore ? number : this.maxScore);
    }

    countScore(): number{
        let totalScore   = 0;
        const totalGames = (this.scores.length / 2);
        const games      = totalGames < this.maxGames ? totalGames : this.maxGames;
        for (let i = 0; i < games; i = i + 1) {
            const launchNumber = i * 2;
            if(this.isLaunched(launchNumber) && this.isStrike(this.scores[launchNumber])){
                totalScore += this.scores[launchNumber];
                totalScore += this.getNextTwoScores(launchNumber);
            }
        }
        return totalScore;
    }

    private getNextTwoScores(actualLaunch: number): number{
        let score = 0;
        let numberScoreObtained = 0;
        for (let i = actualLaunch + 1; i < this.scores.length ; i++) {
            if(this.isLaunched(i)){
                score += this.scores[i];
                numberScoreObtained++;
            }
            if(numberScoreObtained == 2){
                return score;
            }
        }
        return score;
    }

    private isLaunched(launchNumber: number) {
        if(launchNumber >= this.scores.length){
            return false;
        }
        if(this.scores[launchNumber] == -1){
            return false;
        }
        return launchNumber < (this.scores.length);
    }

    private isStrike(score: number) {
        return score == this.maxScore;
    }

    private isSpare(number: number) {
        return this.maxScore == number;
    }
}
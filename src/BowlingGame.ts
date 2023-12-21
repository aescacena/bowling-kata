export class BowlingGame{
    private maxScore: number = 10;
    private maxGames: number = 10;
    private scores  : number[];

    constructor(scores?: number[]){
        this.scores = scores ? scores : [];
    }

    addNumberDown(number: number) {
        if(this.isStrike(number)){
            this.scores.push(this.maxScore);
            this.scores.push(0);
            return;
        }
        this.scores.push(number <= this.maxScore ? number : this.maxScore);
    }

    countScore(): number{
        let totalScore = 0;
        const games = (this.scores.length < this.maxGames) ? this.scores.length : this.maxGames;
        for (let i = 1; i < games * 2; i = i + 2) {
            let score = this.scores[i - 1];
            if(this.isStrike(score)){
                if((i + 1) < (this.scores.length)){
                    score += this.scores[i + 1];
                    if(this.isStrike(this.scores[i + 1])){
                        if((i + 3) < (this.scores.length)){
                            score += this.scores[i + 3];
                        }
                    }
                }
                totalScore += score;
            }
        }
        return totalScore;
    }

    private isStrike(number: number) {
        return this.maxScore == number;
    }
}
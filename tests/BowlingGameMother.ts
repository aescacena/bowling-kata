import {BowlingGame} from "../src/BowlingGame";

export class BowlingGameMother{
    static create(scores: number[], turnTypes: string[]): BowlingGame{
        return new BowlingGame(scores, turnTypes);
    }

    static createEmpty(): BowlingGame{
        return this.create([], []);
    }

    static createWithABowlingStrike(): BowlingGame{
        return this.create([10], ["STRIKE"]);
    }

    static createWithTwoBowlingStrikes(): BowlingGame{
        return this.create([10, 10], ["STRIKE", "STRIKE"]);
    }
}
import {BowlingGame} from "../src/BowlingGame";

export class BowlingGameMother{
    static create(scores: number[]): BowlingGame{
        return new BowlingGame(scores);
    }

    static createEmpty(): BowlingGame{
        return this.create([]);
    }

    static createWithABowlingStrike(): BowlingGame{
        return this.create([10, 0]);
    }

    static createWithTwoBowlingStrikes(): BowlingGame{
        return this.create([10, 0, 10, 0]);
    }
}
import {BowlingGame} from "../src/BowlingGame";
import {BowlingGameMother} from "./BowlingGameMother";

describe("object to count the points obtained in the bowling game", () => {
    describe("Check Strikes on the first try on each turn", () =>{
        it("Should get 10 points for getting a Strike on the first pitch", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const numberBowlingDown = 10;
            const scoreExpect = 10;

            // Act
            bowlingGame.addNumberDown(numberBowlingDown);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 30 points for getting a Strike on the first and second pitch.", () => {
            // Arrange
            const bowlingGame = BowlingGameMother.createWithABowlingStrike();
            const numberBowlingDown = 10;
            const scoreExpect = 30;

            // Act
            bowlingGame.addNumberDown(numberBowlingDown);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 60 points for getting a Strike on the first three pitch.", () => {
            // Arrange
            const bowlingGame = BowlingGameMother.createWithTwoBowlingStrikes();
            const numberBowlingDown = 10;
            const scoreExpect = 60;

            // Act
            bowlingGame.addNumberDown(numberBowlingDown);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 300 points for getting a Strike on all turns.", () => {
            // Arrange
            const bowlingGame = BowlingGameMother.create([], []);
            const numberBowlingDown = 10;
            const scoreExpect = 300;

            // Act
            for (let i = 0; i < 12; i++) {
                bowlingGame.addNumberDown(numberBowlingDown);
            }

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });
    });
})
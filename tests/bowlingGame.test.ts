import {BowlingGame} from "../src/BowlingGame";
import {BowlingGameMother} from "./BowlingGameMother";
import { faker } from "@faker-js/faker";

describe("object to count the points obtained in the bowling game", () => {
    describe("Check Strikes on each turn", () =>{
        it("Should get 10 points because obtain Strike on the first turn", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const numberBowlingDown = 10;
            const scoreExpect = 10;

            // Act
            bowlingGame.addNumberDown(numberBowlingDown);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 30 points because obtain Strike on the first and second turn.", () => {
            // Arrange
            const bowlingGame = BowlingGameMother.createWithABowlingStrike();
            const numberBowlingDown = 10;
            const scoreExpect = 30;

            // Act
            bowlingGame.addNumberDown(numberBowlingDown);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 60 points because obtain Strike on the first three turns.", () => {
            // Arrange
            const bowlingGame       = BowlingGameMother.createWithTwoBowlingStrikes();
            const numberBowlingDown = 10;
            const scoreExpect       = 60;

            // Act
            bowlingGame.addNumberDown(numberBowlingDown);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 300 points because obtain Strike on all turns.", () => {
            // Arrange
            const bowlingGame = BowlingGameMother.create([]);
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

    describe("Check Spare on each turn", () =>{
        it("Should get 10 points because obtain Spare on first turn", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const scoreExpect = 10;
            const firstTry    = faker.number.int({min: 0, max: scoreExpect - 1});
            const secondTry   = 10 - scoreExpect;

            // Act
            bowlingGame.addNumberDown(firstTry);
            bowlingGame.addNumberDown(secondTry);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 20 points because obtain a Spare and two hits", () => {
            // Arrange
            const bowlingGame          = new BowlingGame();
            const scoreExpect          = 20;
            const firstTurn_firstTry   = faker.number.int({min: 0, max: scoreExpect - 1});
            const firstTurn_secondTry  = 10 - scoreExpect;
            const secondTurn_firstTry  = 2;
            const secondTurn_secondTry = 3;

            // Act
            bowlingGame.addNumberDown(firstTurn_firstTry);
            bowlingGame.addNumberDown(firstTurn_secondTry);
            bowlingGame.addNumberDown(secondTurn_firstTry);
            bowlingGame.addNumberDown(secondTurn_secondTry);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });
    });
})
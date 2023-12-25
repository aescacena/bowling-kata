import {BowlingGame} from "../src/BowlingGame";
import {BowlingGameMother} from "./BowlingGameMother";
import { faker } from "@faker-js/faker";

describe("object to count the points obtained in the bowling game", () => {
    describe("Check Strikes on each turn", () =>{
        it("Should get 10 points because obtain Strike on the first turn", () => {
            // Arrange
            const bowlingGame       = new BowlingGame();
            const numberBowlingDown = 10;
            const scoreExpect       = 10;

            // Act
            bowlingGame.addNumberDown(numberBowlingDown);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 30 points because obtain Strike on the first and second turn.", () => {
            // Arrange
            const bowlingGame       = BowlingGameMother.createWithABowlingStrike();
            const numberBowlingDown = 10;
            const scoreExpect       = 30;

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
            const bowlingGame       = BowlingGameMother.create([]);
            const numberBowlingDown = 10;
            const scoreExpect       = 300;

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
            const secondTry   = scoreExpect - firstTry;

            // Act
            bowlingGame.addNumberDown(firstTry);
            bowlingGame.addNumberDown(secondTry);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 17 points because obtain a Spare and two hits 2 and 3", () => {
            // Arrange
            const bowlingGame          = new BowlingGame();
            const scoreExpect          = 17;
            const firstTurn_firstTry   = 4;
            const firstTurn_secondTry  = 6;
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

        it("Should get 20 points because obtain a Spare and one hit 5", () => {
            // Arrange
            const bowlingGame          = new BowlingGame();
            const scoreExpect          = 20;
            const firstTurn_firstTry   = 5;
            const firstTurn_secondTry  = 5;
            const secondTurn_firstTry  = 5;

            // Act
            bowlingGame.addNumberDown(firstTurn_firstTry);
            bowlingGame.addNumberDown(firstTurn_secondTry);
            bowlingGame.addNumberDown(secondTurn_firstTry);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 150 points because obtain Spare on all turns with hits of 5 bowls", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const scoreExpect = 150;

            // Act
            for (let i = 0; i < 21; i++) {
                bowlingGame.addNumberDown(5);
            }

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 180 points because obtain Spare on all turns with hits of 8 and 2 bowls", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const scoreExpect = 180;

            // Act
            for (let i = 0; i < 10; i++) {
                bowlingGame.addNumberDown(8);
                bowlingGame.addNumberDown(2);
            }
            bowlingGame.addNumberDown(8);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });
    });

    describe("Check Open frame on each turn", () =>{
        it("Should get 5 points because obtain with hits de 2 and 3 bowls", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const scoreExpect = 5;
            const firstTry    = 2;
            const secondTry   = 3;

            // Act
            bowlingGame.addNumberDown(firstTry);
            bowlingGame.addNumberDown(secondTry);

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 20 points because obtain one hit on each launch", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const scoreExpect = 20;
            const launch      = 1;

            // Act
            for (let i = 0; i < 20; i++) {
                bowlingGame.addNumberDown(launch);
            }

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });

        it("Should get 0 points because not obtain any hit on each launch", () => {
            // Arrange
            const bowlingGame = new BowlingGame();
            const scoreExpect = 0;
            const launch      = 0;

            // Act
            for (let i = 0; i < 20; i++) {
                bowlingGame.addNumberDown(launch);
            }

            // Assert
            expect(scoreExpect).toBe(bowlingGame.countScore());
        });
    });
})
import { TestCase } from "./TestCase";
import { WinCondType } from "./WinCondType";

export interface MetaGame{
  // Index of the current test case being used.
  // This is to reference what test case should be reloaded from
  currentTestCase: number
  winCondition: WinCondType
  testCases: TestCase[]
}
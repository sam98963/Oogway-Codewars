//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import { oogwayReply } from "./main.js";

// Test to see if input is a string
// Test dragon warrior to return bad outcome ✅
// Test to see if DrAGoN WaRRiOR works✅
// Test to see if Dragon Warrior? works✅
// Test return of normal problem ✅
// Test to see if there is already an exclamation mark in response, if so do not add another. ✅
// Test to see if input question is a string.





describe('Testing for reply based on input', () => {
  test('If it says "dragon warrior" return bad outcome', () => {
    let actual = oogwayReply("I should be the new dragon warrior", "There are no accidents");
    let expected = "DO NOT QUESTION MY CHOICE OF THE DRAGON WARRIOR!"
    expect(actual).toBe(expected);
  })

  test('If dragon warrior has assorted capital letters "DrAGoN WarRioR" return bad outcome', () => {
    let actual = oogwayReply("DrAGoN WarRioR Sucks!", "It matters not what someone is born, but what they grow to be");
    let expected = "DO NOT QUESTION MY CHOICE OF THE DRAGON WARRIOR!"
    expect(actual).toBe(expected);
  })

  test('If there is a symbol in the input, will it still return bad outcome?', () => {
    let actual = oogwayReply("Why am I not the Dragon Warrior?", "Quit, don’t quit. Noodles, don’t noodles… You are too concerned with what was and what will be");
    let expected = "DO NOT QUESTION MY CHOICE OF THE DRAGON WARRIOR!"
    expect(actual).toBe(expected);
  })

  test('If it is genuine problem, return quote', () => {
    let actual = oogwayReply("I lost my maths homework and got told off", "You just need to believe. You must believe");
    let expected = "You just need to believe. You must believe!"
    expect(actual).toBe(expected);
  })

  test('If quote ends with exclamation, do not add another', () => {
    let actual = oogwayReply("I lost my maths homework and got told off", "There is always something more to learn. Even for a master!");
    let expected = "There is always something more to learn. Even for a master!"
    expect(actual).toBe(expected);
  })
})
import { checkDirection, rotateRight, createPlateu, Plateu } from "../src/mars";

describe("check if all parts work", () => {
  it("return the correct direction", () => {
    // expect(roverCommands("R")).toEqual("0:0:E");
  });
  it("rotate rover to E if facing N", () => {
    expect(rotateRight("N")).toBe("E");
  });
  it("rotate rover to S if facing E", () => {
    expect(rotateRight("E")).toBe("S");
  });
  // it("rotate rover to right", () => {
  //   expect(getCoordinates("R")).toEqual("0:0:E")
  // })
});

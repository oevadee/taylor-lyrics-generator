import { getImage } from "../getImage";

test("return full imagePath", () => {
  const result = getImage("Red");
  expect(result).toBe("/src/assets/red.jpeg");
});

test("return full imagePath", () => {
  const result = getImage("Taylor Swift");
  expect(result).toBe("/src/assets/taylor swift.jpeg");
});

test("return full imagePath", () => {
  const result = getImage("1989");
  expect(result).toBe("/src/assets/1989.jpeg");
});

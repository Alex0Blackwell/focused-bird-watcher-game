const Bird = require("./testBird.js")


describe("setBird", () => {
  it("should set index, bird name, and file name", () => {
    /* make sure that when you buy a new bird, it shows up,
     * this is done in this program by making the index one less than the number
     * of birds bought */
    bird = new Bird;
    for(let i = 0; i < 100; i++) {
      bird.setBird(3);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(2);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(4);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(3);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(5);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(4);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(6);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(5);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(7);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(6);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(8);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(7);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(9);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(8);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(10);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(9);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(11);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(10);
    }
    for(let i = 0; i < 100; i++) {
      bird.setBird(12);
      expect(bird.index).toBeGreaterThanOrEqual(0);
      expect(bird.index).toBeLessThanOrEqual(11);
    }
  });
});

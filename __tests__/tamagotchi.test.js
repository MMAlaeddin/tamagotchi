import { Tamagotchi } from '../src/tamagotchi.js';

describe('Tama', () => {
  jest.useFakeTimers();
  let tama;

  beforeEach(function() {
    tama = new Tamagotchi("tama");
        tama.setHunger();
     
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(tama.name).toEqual("tama");
    expect(tama.hunger).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(tama.hunger).toEqual(7);
  });
    test('should get very hungry if the food level drops below zero', function() {
        tama.hunger = 0;
        expect(tama.death()).toEqual(true);
      });
    
      test('should get very hungry if 10 seconds pass without feeding', function() {
        jest.advanceTimersByTime(10001);
        expect(tama.crying()).toEqual(true);
      });
    
      test('should have a food level of ten if it is fed', function() {
        jest.advanceTimersByTime(9001);
        tama.feed();
        expect(tama.hunger).toEqual(10);
      });

  });

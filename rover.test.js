import Rover from './rover';

describe('the  Rover', () => {
    // Grid bounds are instantiated as part of the class
    const Beagle = new Rover('5 3');

    it('sets the initial bounds of the rover area', () => {        
        expect(Beagle.grid).toStrictEqual([5,3]);
    });

    it('sets the starting position `1 1 E`', () => {
        Beagle.start('1 1 E');
        expect(Beagle.coords).toStrictEqual([1,1]);
        expect(Beagle.direction).toEqual('E');
    });

    it('moves the rover `RFRFRFRF`', () => {
        Beagle.setDirection('RFRFRFRF');
        expect(Beagle.coords).toStrictEqual([1,1]);
        expect(Beagle.direction).toEqual('E');
    });

    it('sets the starting position `3 2 N`', () => {
        Beagle.start('3 2 N');
        expect(Beagle.coords).toStrictEqual([3,2]);
        expect(Beagle.direction).toEqual('N');
    });

    it('moves the rover `FRRFLLFFRRFLL`', () => {
        Beagle.setDirection('FRRFLLFFRRFLL');
        expect(Beagle.coords).toStrictEqual([3,3]);
        expect(Beagle.direction).toEqual('N');
        expect(Beagle.status).toEqual('LOST');
    });

    it('sets the starting position `0 3 W`', () => {
        Beagle.start('0 3 W');
        expect(Beagle.coords).toStrictEqual([0,3]);
        expect(Beagle.direction).toEqual('W');
    });

     it('moves the rover `LLFFFLFLFL`', () => {
        Beagle.setDirection('LLFFFLFLFL');
        expect(Beagle.coords).toStrictEqual([2,3]);
        expect(Beagle.direction).toEqual('S');
        expect(Beagle.status).toEqual('OK');
    });
});

describe('the cardinalPoint() method', () => {
    // Create a new beagle to make it clearer we are testing something different here (BeagleOne wouldn’t be defined here anyway)
    const BeagleTwo = new Rover('0 0');

    it('accurately sets the direction to W', () => {
        BeagleTwo.cardinalPoint(-1);
        expect(BeagleTwo.direction).toBe('W');
    });

    it('accurately sets the direction to E', () => {
        BeagleTwo.cardinalPoint(+1);
        BeagleTwo.cardinalPoint(+1);
        expect(BeagleTwo.direction).toBe('E');
    });

    it('accurately sets the direction to N', () => {
        BeagleTwo.cardinalPoint(+1);
        BeagleTwo.cardinalPoint(+1);
        BeagleTwo.cardinalPoint(+1);
        expect(BeagleTwo.direction).toBe('N');
    });

    it('accurately sets the direction to S', () => {
        BeagleTwo.cardinalPoint(-1);
        BeagleTwo.cardinalPoint(-1);
        expect(BeagleTwo.direction).toBe('S');
    });
});

describe('the move() method', () => {
    const BeagleThree = new Rover('1 1');

    it('sets the rover to LOST or OK', () => {
        BeagleThree.coords = [0,0];
        BeagleThree.move(0, +2);
        expect(BeagleThree.status).toBe('LOST');
        BeagleThree.coords = [0,0];
        BeagleThree.move(1, +1);
        expect(BeagleThree.status).toBe('OK');
    });

    it('sets cooridinates and direction when the rover is LOST', () => {
        BeagleThree.coords = [0,0];
        BeagleThree.move(1, +2);
        // One went missing earlier also
        expect(BeagleThree.lostCoords.length).toBe(2);
    });
});
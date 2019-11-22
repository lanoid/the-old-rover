class Rover { 
    constructor(gridBounds) {
        // The extent of the map
        this.grid = gridBounds.split(' ').map(coord => parseInt(coord));
        // A defaulted direction
        this.direction = 'N';
        // Never Eat Shredded Wheat
        this.cardinals = ['N','E','S','W'];
        // Our dearly departed rovers
        this.lostCoords = [];
        // Default status
        this.status = 'OK';
    }

    // Movement Reference, D'oh N = Y+1
    // N [0,+1]
    // E [+1,0]
    // S [0,-1]
    // W [-1,0]

    // Set the initial parameters for the each rover in this class of rovers
    start(startingPostition) {
        const startArray = startingPostition.split(' ');
        this.status = 'OK'; // New Rovers are always `OK` - dont’t you agree?
        this.direction = startArray.pop();
        this.coords = startArray.map(coord => parseInt(coord));
    }
    
    // Set the direction to one of Right, Left or Forward
    setDirection(orders) {
        // this felt more clear as a foreach as I didn’t want a new array of orders
        orders.split('').forEach((order) => {
            // Stop following orders if you get lost
            if(this.status !== 'LOST') {
                switch(order) {
                    case 'R':
                        this.cardinalPoint(+1);
                    break;
                    case 'L':
                        this.cardinalPoint(-1);
                    break;
                    case 'F':
                        // I absolutely love array.some for a quick match
                        // See if your current location and direction match any of the missing rovers
                        if(!this.lostCoords.some(edgeCoords => edgeCoords.direction === this.direction && edgeCoords.coords.toString() === this.coords.toString())) {
                            this.moveInDirection(1);    
                        }
                    break;
                }
            }
        });
    }

    // Move in the correct direction, allow for distance to be added in future perhaps as F3 instead of repeated F
    moveInDirection(distance) {
        switch (this.direction) {
            case 'N':
                this.move(1, distance);
            break;
            case 'E':
                this.move(0, distance);
            break;
            case 'S':
                this.move(1, -distance);
            break;
            case 'W':
                this.move(0, -distance);
            break;
        }
    }

    // This function allows your turn to pick a cardinal point, this could be extended to degrees…
    cardinalPoint(turn) {
        const currentCardinalIndex = this.cardinals.indexOf(this.direction);
        const newIndex = currentCardinalIndex + turn;
        this.direction = this.cardinals[newIndex === -1 ? this.cardinals.length -1 : newIndex % this.cardinals.length ];
    }

    // Move in the ordered direction, ensure the rover is LOST when moved out of bounds
    move(coord, distance) {
        if (this.coords[coord] + distance >= this.grid[coord] + 1 || this.coords[coord] + distance < 0) {
            this.status = 'LOST';
            // Save the locations of our dearly departed rovers, and the direction they were facing.
            this.lostCoords.push({
                coords : this.coords,
                direction : this.direction
            });
        } else {
            this.status = 'OK';
            // It would be interesting to see how driverless vehicles deal with driving instructions
            this.coords[coord] += distance;
        }
    }
}

module.exports = Rover;
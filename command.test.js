describe('Parse Input', function () {
  
    const instructions = `55
    12N
    LMLMLMLMM
    33E
    MMRMMRMRRM`;
    
    
      it('should read the input into separate instructions', function () {
        expect(parseInstructions(instructions)).to.deep.equal(
          {
            bounds : {
              x: 5,
              y: 5
            },
            instructions : [
              {
                start: {
                  coords: {
                    x: 1,
                    y: 2
                  },
                  direction: 'N'
                },
                move: 'LMLMLMLMM'
              },
              {
                start: {
                  coords: {
                    x: 3,
                    y: 3
                  },
                  direction: 'E'
                },
                move: 'MMRMMRMRRM'
              }
            ]
          }
        );
      })
    })
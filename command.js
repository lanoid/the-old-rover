// Interpret commands for rovers

function parseInstructions(inst) {
    let roving = {
      bounds: {
        x: null,
        y: null
      },
      instructions: []
    };
    let data = inst.split('\n');
  
    data = data.map((v) => v.trim());
  
    console.log(data);
  
    let grid = data.shift();
  
    console.log(grid);
  
    roving.bounds.x = parseInt(grid.split('')[0]);
    roving.bounds.y = parseInt(grid.split('')[1]);
  
    for(let i = 0; i < data.length; i += 2) {
      let coordString = data[i].split('');
      let obj = {
        start: {
          coords: {
            x: parseInt(coordString[0]),
            y: parseInt(coordString[1])
          },
          direction: coordString[2]
        },
        move: data[i+1]
      };
      roving.instructions.push(obj);
    }
    return roving;
  };
max_x=  14
max_y=  11
points=  [[8,7,47],[4,5,47],[5,3,47],[11,1,47],[10,2,47],[14,3,124],[6,2,47],[8,4,47],[7,1,44],[3,10,47],[4,9,47],[9,8,47],[8,9,39],[9,6,47],[3,6,96],[8,2,47],[9,1,47],[6,3,47],[11,6,47],[7,3,47],[10,5,47],[11,4,47],[7,8,96],[7,5,47],[2,9,47],[4,7,59],[8,8,58],[8,1,39],[0,11,40],[12,0,46],[6,8,58],[2,11,47],[13,1,92],[9,4,47],[13,3,47],[4,6,58],[8,5,47],[11,5,47],[1,11,95],[10,3,47],[12,4,47],[5,5,47],[12,3,47],[6,7,58],[1,10,47],[13,2,47],[7,9,96],[5,8,47],[10,6,47],[13,4,47],[10,7,47],[3,7,96],[12,1,47],[7,2,47],[3,5,47],[7,6,47],[3,8,47],[4,4,47],[6,4,47],[14,2,41],[11,0,45],[11,2,47],[5,7,96],[9,3,47],[9,7,47],[6,6,47],[10,0,46],[2,6,40],[12,5,47],[5,4,47],[9,0,95]]

function buildTheThing(max_x, max_y, matrix) {
  var mapping = {};
  matrix.map(function(subArray){
    var key = mapping[subArray[1]];
    var value = { position: subArray[0] + 1, char: String.fromCharCode(subArray[2]) };
    key == undefined ? mapping[subArray[1]] = [value] : mapping[subArray[1]].push(value);
  });
  return parseDictionary(mapping);
}

function parseDictionary(dictionary){
  var final_string = '';
  
  Object.keys(dictionary).map(function(n, i){
    const last = (i + 1 == Object.keys(dictionary).length)
    console.log(last)
    var string_row = ' '.repeat(max_x + 1);
    dictionary[n].forEach(function(value){
      string_row = string_row.substr(0, value.position - 1) + value.char + string_row.substr(value.position, string_row.length);
    });
    final_string += string_row + (last ? '' : '\n');
  });

  return final_string;
}
console.log(buildTheThing(max_x, max_y, points))
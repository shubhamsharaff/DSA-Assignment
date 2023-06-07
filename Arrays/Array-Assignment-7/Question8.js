function checkForStraightLine(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const deltaX = x1 - x0;
    const deltaY = y1 - y0;
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      if (deltaX * (y - y1) !== deltaY * (x - x1)) {
        return false;
      }
    }
  
    return true;
  }
  
  // case
  console.log(
    checkForStraightLine([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7]
    ])
  ); // Output: true
  
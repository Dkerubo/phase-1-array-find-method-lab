// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record) {
    // Use find() to look for the object with result "W"
    const win = record.find(game => game.result === "W");
  
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
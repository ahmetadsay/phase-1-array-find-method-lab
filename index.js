


// function superbowlWin(element) {
//     if ( element.result === 'W') {
//         return element.year
//     }
//     return false;
// }

function superbowlWin(element) {
    const winningRecord = element.find( item => item.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  

// Code your solution here



function findMatching(drivers, string){
  const matchDrive = drivers.filter(function(value){
    if(value.toLowerCase() === string.toLowerCase()){
      return true
    } else {
      return false
    }

  })
return matchDrive
  
}

function fuzzyMatch(drivers, string){
  const matchingDriver = drivers.filter(function(drivers){
    if(string === drivers.slice(0,2)){
      return(drivers);
    } else {
      return drivers === string;
    }

  })
  return matchingDriver

}


function matchName(drivers, string){
  debugger;
  const objectDriver = drivers.filter(function(string){
    if(string === drivers[0]){
      return drivers

    } else {
      return string === drivers[4]
    }
  })
  return objectDriver
}
matchName(drivers)
// One family wants to get through a tunnel. Dad can make it in 1 minute, mama in 2 minutes, son in 4 and daughter in 5 minutes. Unfortunately, not more than two persons can go through the narrow tunnel at one time, moving at the speed of the slower one.

// Can they all make it to the other side if they have a torch that lasts only 12 minutes and they are afraid of the dark?

// solution 1 maybe
// put the daughter in the front
// put the mom in the second position
// put the daughter in the third position
// put the father in the last position
// let the woman hold the torch
// it will only take 5 min

// solution 2
// mom and dad walk together through the tunnel = 2 min
// dad comes back with the light = 1 min
// son and daughter walk to their mother = 5 min
// mom comes back with the light = 2 min
// mom and dad walk through the tunnel = 2 min
// time spent = 2 + 1 + 5 + 2 + 2 = 12 min

// pseudo code solution 2
// constraints: max: 12 min, max: 2 people at once, speed of the slower will be used, speeds are not the same,
// start
// INPUT [dad, mom, son, daughter, torch]
// INPUT speedDad = 1 min
// INPUT speedMom = 2 min
// INPUT speedDaughter = 5 min
// INPUT start point = initial position
// INPUT end point = end
// INITIALIZE speedDad + speedMom = 2 min
// OUTPUT speedMom + speedDad = end point
// INITIALIZE speedDad = 1 min
// OUTPUT = spedDad = start point
// INITIALIZE speedSon + SpeedDaughter = 5 min
// OUTPUT speedSon + speedDaughter = end point
// INITIALIZE speedMom = 2 min
// OUTPUT speedMom = start point
// INITIALIZE speedMom + speedDad = 2 min
// OUTPUT speedMom + speedDad = end point
// end

// solution 3
// Don't walk through the suspicious tunnel

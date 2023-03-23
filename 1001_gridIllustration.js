const gridIllumination = function (N, lamps, queries) {
    let colMap = new Map();
    let rowMap = new Map();
    let dig1Map = new Map();
    let dig2Map = new Map();
    const direction = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,0], [0,1], [1,-1], [1,0], [1,1]];
    let lampSet = [];
    // let lampSet = new Map();
    let answer = [];
    for(let x of lamps) {
        lampSet.push(x);
        // insert(lampSet, (x[0],x[1]));
        console.log("lampSet", lampSet);
        insert(colMap, x[0]);
        insert(rowMap, x[1]);
        insert(dig1Map, x[0]+x[1]);
        insert(dig2Map, x[0]-x[1]);
    }
    console.log("colMap", colMap);
    console.log("rowMap", rowMap);
    console.log("dig1Map", dig1Map);
    console.log("dig2Map", dig2Map);
    
    for(let x of queries) {
        console.log("queries", x)
        if((colMap.get(x[0]) > 0) ||
        (rowMap.get(x[1]) > 0) ||
        (dig1Map.get(x[0]+x[1]) > 0) ||
        (dig2Map.get(x[0]-x[1]) > 0)){
            answer.push(1);
            for(let [i,j] of direction) {
                for(let [y,z] of lampSet) {
                    // console.log("y,z", y,z)
                    if(x[0]+i == y && x[1]+j == z){
                        console.log("deleting")
                        deleting(colMap, x[0]+i);
                        deleting(rowMap, x[1]+j);
                        deleting(dig1Map, x[0]+i+x[1]+j);
                        deleting(dig2Map, (x[0]+i)-(x[1]+j));
                    }
                }
            }
            console.log("colMap", colMap);
            console.log("rowMap", rowMap);
            console.log("dig1Map", dig1Map);
            console.log("dig2Map", dig2Map);
        }
        else {
            answer.push(0);
        }
    }
    return answer;
}
const insert = function (map, val) {
    if(map.has(val)) {
        map.set(val, map.get(val)+1)
    }
    else {
        map.set(val, 1)
    }
}
const deleting = function (map, val) {
    if(map.has(val)) {
        map.set(val, map.get(val)-1)
    }
}

let result = gridIllumination(5,[[0,0],[0,4]],[[0,4],[0,1],[1,4]]);
console.log(result);

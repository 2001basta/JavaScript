function crosswordSolver(puzzle, a) {
   
    let allpuzzle = makeArray(puzzle.split("\n"))
    
    for (let i = 0; i < allpuzzle.length; i++) {  
        for (let j = 0 ; j < allpuzzle[i].length; j++){
           let er , value= writVertical(i,j,allpuzzle,a)
            if (er !=null){
                return er
            }
            if (!value){
                er , value = writHorizontal(i,j,allpuzzle,a)
            }
           
        }
    }

    return allpuzzle
}
/*********************************** */
const puzzle = '2001\n0..0\n1000\n0..0'
const wrds = "fdf"
console.log(crosswordSolver(puzzle,wrds))
///////////////////////////////////////////////////////////

function writHorizontal(i, j, puzzles, a) {
    let n = 0
    if (puzzles[i].length - j < a.length) {
        return null,false
    }
    let word = puzzles[i].slice(j, a.length)
    
    let err, value = checkStringOfpuzzle(word)
    if (err != null) {
        return err, false
    }
    if (!value) {
        return null,false
    }
    while (j < puzzles[i].length) {
        puzzles[i][j] = a[n]
        j++
        n++
        if (n ===a.length-1){
            break
        }
    }
    return null,puzzles
}
//////////////////////////////////////////////////////////
function makeArray(puzzle){
    let arr =[]
    let ar =[]
    for (let i = 0 ; i < puzzle.length; i++){
        for (let j = 0 ; j < puzzle[i].length;j++){
            ar[ar.length]= puzzle[i][j]
        }
        arr[arr.length] = ar
        ar = []
    }
    return arr
}
/////console.log(allpuzzle)///////////////////////////////////////////////////////
function writVertical(i, j, puzzles, a) {
    let n = 0
    if (puzzles.length - i < a.length) {
        return null,false
    }
    let word = makeWordVertical(i,j,puzzles)
    let err, value = checkStringOfpuzzle(word)
    if (err != null) {
        return err, false
    }
    if (!value) {
        return false
    }
    while (i < puzzles.length) {
        puzzles[i][j] = a[n]
        i++
        if (n ===a.length-1){
            break
        }
        n++
    }
    return null,true
}
////////////////////////////////////////////////////////////
function makeWordVertical(i,j, puzzles){
    let str =""
    while (i < puzzles.length) {
        str +=puzzles[i][j]
        i++
    }
    return str
}
////////////////////////////////////////////////////////////
function isPossiple(a, b) {
    return a.length === b.length
}
/////////////////////////////////////////////////////////////
function checkPosition(a) {
    if (a >= 0 && a <= 9) {
        return null, true
    }
    if (a === ".") {
        return null, false
    }
    return "error input", false
}
//////////////////////////////////////////////////////////
function checkStringOfpuzzle(a) {
    for (let i = 0; i < a.length; i++) {
        let er, value = checkPosition(a[i])
        if (er != null) {
            return "error", false
        }
        if (!value) {
            return null, false
        }
    }
    return null, true
}
///////////////////////////////////////////////////////////

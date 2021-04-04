const submitHandler = require ("userActions.js");

test('solves puzzle', () =>{
    oh

}





function submitHandler(event) {
    event.stopPropagation();
    let validater = new Validate(board.board, boardSize)
    let isValid = validater.runTests();
    if (isValid) {
        alert("You've Solved this. Awesome!!!")
    } else {
        alert("That's not correct. Keep trying.")
    }
}
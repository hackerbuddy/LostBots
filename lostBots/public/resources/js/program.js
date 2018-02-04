
/* the program is a indexed array of of instructions.  Each instruction is an integer */
/* representing a basic operation.  To implement counts on instructions (e.g. LEFT 6  */
/* or loops and if statements the instruction will half to more than just an integer, */

var Instruction = {
    repetitionCount: 0,
    UP: 0,    // Define the instructions in as integers a type in JavaScript
	DOWN: 1,
    LEFT: 2,
	RIGHT: 3,
	STOP: 4,
    opCode: 0
};

function getDescrisption(statement) {  // The method getDescription returns a String
    // representing the statement
    switch (statement.opCode) {
        case Instruction.UP:
            str = "UP";
            break;
        case Instruction.DOWN:
            str = "DOWN";
            break;
        case Instruction.LEFT:
            str = "LEFT";
            break;
        case Instruction.RIGHT:
            str = "RIGHT";
            break;
        case Instruction.STOP:
            str = "STOP";
            break;
        default:
            str = "OTHER";
            break;
    }
    return str + "&nbsp;" + statement.repetitionCount;
}

function createStatement(code, repCount) {
	obj = { };
    obj.opCode = code;
    obj.repetitionCount = repCount;
    obj.remainingCount = repCount;
    return obj;
}

   //The program is an object (class) the stores the instruction in an array.
   // The important thing is they are stored in an ordered structure.
function Program() {
    programCounter = 0;
    statementList = new Array();
}

var stopStatement = { };
stopStatement.opCode = Instruction.STOP;
stopStatement.repetitionCount = 0;
var currentStatement;

	function init (program) {                     // init() is a function that initializes (or resets) the variables in the object
											// the variables in the program.  Note the it also erases the current program, if there is one.
		program.statementList = [];
		program.programCounter = 0;
	}

	function addStatement(program, statement) {    // this function adds an statement to the end of the program.
		program.statementList.push(statement);
	}

	function execStatement(program) {        // execInstruction, returns the next instruction, moving the program
		                                  // counter to the next instruction.
		if (currentStatement != null && currentStatement.remainingCount > 0 ) {
			currentStatement.remainingCount--;
			return currentStatement.opCode;
		}
		if (program.programCounter >= program.statementList.length) {  // If at the end of the program return the STOP statement
			return stopStatement.opCode;
		}
        currentStatement = program.statementList[program.programCounter++];
		currentStatement.remainingCount = currentStatement.repetitionCount - 1;
		return currentStatement.opCode;
	}

    function increaseRrepetitionCount(program, location) {
		program.statementList[location].repetitionCount++;
	}
    function decreaseRrepetitionCount(program, location) {
        program.statementList[location].repetitionCount--;
    }
	function restartProgram(program) {                // Sets the program counter back to zero so the program can be run again
		program.programCounter = 0;
	}
	function getProgramStatement(program, location) {   //  return an statememt from the specified location
		return program.statementList[location];
	}
	function getProgramCounter(program) {                // return the program conter
        if (typeof (currentStatement) !== "undefined" && currentStatement.remainingCount > 0) {
            return program.programCounter - 1;
        }
		return program.programCounter;
	}
	function setStatement(program, location, opCode, repCount) {     // change an statement at a specified plave in the list
        statement = createStatement(opCode, repCount);
		program.statementList[location] = statement;
	}

	function deleteStarement(program, location) {         // deleteInstruction, removes an instruction from memory
		program.statementList.splice(location, 1)
	}

	function programSize(program) {                      // programSize, returns the number of statements in the program
		return program.statementList.length;
	}
	function setCurrStatement(program, loc) {                // setCurrentStatement sets the value of the program counter
		if (loc >= 0 && loc < program.statementList.length) {
			program.programCounter = loc;
		}
	}

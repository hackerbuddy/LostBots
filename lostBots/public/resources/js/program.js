
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

function getDescrisption(instr) {  // The method getDescription returns a String
    // representing the instruction
    switch (instr.opCode) {
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
    return str + "&nbsp;" + instr.repetitionCount;
}

function Instruction(code, repCount) {
    this.opCode = code;
    this.repetitionCount = repCount;
    this.remainingCount = repCount;
    return this;
}

   //The program is an object (class) the stores the instruction in an array.
   // The important thing is they are stored in an ordered structure.
function Program() {
    programCounter = 0;
    instructionList = new Array();
}

var stopInstruction = new Object();
stopInstruction.opCode = Instruction.STOP;
stopInstruction.repetitionCount = 0;
var currentInstruction;

	function init (program) {                     // init() is a function that initializes (or resets) the variables in the object
											// the variables in the program.  Note the it also erases the current program, if there is one.
		program.instructionList = new Array();
		program.programCounter = 0;
	}

	function addInstruction(program, instr) {    // this function adds an instruction to the end of the program.
		program.instructionList.push(instr);
	}

	function execInstruction(program) {        // execInstruction, returns the next instruction, moving the program
		                                  // counter to the next instruction.
		if (currentInstruction != null && currentInstruction.remainingCount > 0 ) {
			currentInstruction.remainingCount--;
			return currentInstruction.opCode;
		}
		if (program.programCounter >= program.instructionList.length) {  // If at the end of the program return the STOP instruction
			return stopInstruction.opCode;
		}
        currentInstruction = program.instructionList[program.programCounter++];
		currentInstruction.remainingCount = currentInstruction.repetitionCount - 1;
		return currentInstruction.opCode;
	}

    function increaseRrepetitionCount(program, location) {
		program.instructionList[location].repetitionCount++;
	}
    function decreaseRrepetitionCount(program, location) {
        program.instructionList[location].repetitionCount--;
    }
	function restartProgram(program) {                // Sets the program counter back to zero so the program can be run again
		program.programCounter = 0;
	}
	function getProgramInstruction(program, location) {   //  return an instruction from the specified location
		return program.instructionList[location];
	}
	function getProgramCounter(program) {                // return the program conter
        if (typeof (currentInstruction) !== "undefined" && currentInstruction.remainingCount > 0) {
            return program.programCounter - 1;
        }
		return program.programCounter;
	}
	function setInstruction(program, location, opCode, repCount) {     // chang an instruction at a specied plave in memory
        instr = new Instruction(opCode, repCount);
		program.instructionList[location] = instr;
	}

	function deleteInstruction(program, location) {         // deleteInstruction, removes an instruction from memory
		program.instructionList.splice(location, 1)
	}

	function programSize(program) {                      // programSize, returns the number of instructions in the program
		return program.instructionList.length;
	}
	function setCurrInstruction(program, loc) {                // setCurrentInstruction sets the value of the program counter
		if (loc >= 0 && loc < program.instructionList.length) {
			program.programCounter = loc;
		}
	}

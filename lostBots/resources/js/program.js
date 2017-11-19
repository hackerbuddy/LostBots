
/* the program is a indexed array of of instructions.  Each instruction is an integer */
/* representing a basic operation.  To implement counts on instructions (e.g. LEFT 6  */
/* or loops and if statements the instruction will half to more than just an integer, */

var instruction ={
		UP: 0,    // Define the instructions in as integers a type in JavaScript
		DOWN: 1,
		LEFT: 2,
		RIGHT: 3,
		STOP: 4,
		getDescrisption: function (opCode) {  // The method getDescription returns a String
			                                  // representing the instruction
			switch (opCode) {
				case instruction.UP:
					str = "UP";
					break;
				case instruction.DOWN:
					str = "DOWN";
					break;
				case instruction.LEFT:
					str = "LEFT";
					break;
				case instruction.RIGHT:
					str = "RIGHT";
					break;
				case instruction.STOP:
					str = "STOP";
					break;
				default:
					str = "OTHER";
				    break;
			}
			return str;
		}		
};

   //The program is an object (class) the stores the instruction in an array.
   // The important thing is they are stored in an ordered structure.
var program = {

	
	programCounter: 0,
	instructionList: new Array(),
	init: function () {                     // init() is a function that initializes (or resets) the variables in the object
											// the variables in the program.  Note the it also erases the current program, if there is one.
		instructionList = new Array();
		programCounter = 0;
	},
	addInstruction: function (instr) {    // this function adds an instruction to the end of the program.
		instructionList.push(instr);
	},
	execInstruction: function () {        // execInstruction, returns the next instruction, moving the program
		                                  // counter to the next instruction.
		if (programCounter >= instructionList.length) {  // If at the end of the program return the STOP instruction
			return instruction.STOP;
		}
		return instructionList[programCounter++];
	},
	restartProgram : function() {                // Sets the program counter back to zero so the program can be run again
		programCounter = 0;
	},
	getProgramInstruction: function(location) {   //  return an instruction from the specified location
		return instructionList[location];
	},
	getProgramCounter: function() {                // return the program conter
		return programCounter;
	},
	setInstruction: function(location, instr) {     // chang an instruction at a specied plave in memory
		instructionList[location] = instr;
	},
	deleteInstruction: function(location) {         // deleteInstruction, removes an instruction from memory
		instructionList.slice(location, 1)
	},
	programSize : function() {                      // programSize, returns the number of instructions in the program
		return instructionList.length;
	},
	setCurrInstruction: function(loc) {                // setCurrentInstruction sets the value of the program counter
		if (loc >= 0 && loc < instructionList.length) {
			programCounter = loc;
		}
	}
};

program.init();
program.addInstruction(instruction.RIGHT);
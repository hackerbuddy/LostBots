
var instruction ={
		UP: 0,
		DOWN: 1,
		LEFT: 2,
		RIGHT: 3,
		STOP: 4,
		getDescrisption: function (opCode) {
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

var program = {

	
	programCounter: 0,
	instructionList: new Array(),
	init: function () {
		instructionList = new Array();
		programCounter = 0;
	},
	addInstruction: function (instr) {
		instructionList.push(instr);
	},
	execInstruction: function () {
		if (programCounter >= instructionList.length) {
			return instruction.STOP;
		}
		return instructionList[programCounter++];
	},
	restartProgram : function() {
		programCounter = 0;
	},
	getProgramInstruction: function(location) {
		return instructionList[location];
	},
	getProgramCounter: function() {
		return programCounter;
	},
	setInstruction: function(location, instr) {
		instructionList[location] = instr;
	},
	deleteInstruction: function(location) {
		instructionList.slice(location, 1)
	},
	programSize : function() {
		return instructionList.length;
	},
	setCurrInstruction(loc) {
		if (loc >= 0 && loc < instructionList.length) {
			programCounter = loc;
		}
	}
};

program.init();
program.addInstruction(instruction.RIGHT);
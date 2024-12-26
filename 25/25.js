/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let instruction = 0;
  let blockInit = 0;
  let value = 0;

  const instructions = {
    "+": () => value++,
    "-": () => value--,
    "[": () => {
      if (value === 0) instruction = code.indexOf("]", instruction);
      blockInit = instruction;
    },
    "]": () => (instruction = blockInit - 1),
    "{": () => {
      if (value === 0) instruction = code.indexOf("}", instruction);
    },
  };

  while (instruction < code.length) {
    const current = code[instruction];
    instructions[current]?.();
    instruction++;
  }

  return value;
}

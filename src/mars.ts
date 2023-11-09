type Instruction = "L" | "R" | "M";
let array: Array<number[]> = [];
type Rover = {
  // position: array,
};

type directions = {
  orientation: string;
};

export type Plateu = {
  Height: 5;
  Width: 5;
};

function processIntruction(instruction: Instruction) {
  switch (instruction) {
    case "L": {
      //move left
      break;
    }
    case "R": {
      //move right
      ("0:0:E");
      break;
    }
    case "M": {
      //move
      console.log("Move");
      break;
    }
  }
}

export function rotateRight(input: string) {
  if (input === "N") {
    return "E";
  } else if (input === "E") {
    return "S";
  } else if (input === "S") {
    return "W";
  }
}
export function rotateLeft(input: string) {
  if (input === "N") {
    return "W";
  } else if (input === "W") {
    return "S";
  } else if (input === "S") {
    return "E";
  }
}
export function checkDirection(input: string) {
  if (isDirection(input)) {
    processIntruction(input);
  }
}

export function createPlateu(x: number, y: number) {
  let value = 0;
  for (x = 0; x < 5; x++) {
    array[x] = [];
    for (y = 0; y < 5; y++) {
      array[x][y] = value++;
    }
  }
  console.table(array);
  console.table(array[4][3]);

  return array;
}

function isDirection(input: string): input is Instruction {
  return input === "L" || input === "R" || input === "M";
}

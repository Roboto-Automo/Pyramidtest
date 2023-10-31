const fs = require("fs");

function decode(message_file) {
  // Read the file and parse it into an array of objects
  const data = fs.readFileSync(message_file, "utf8");
  const lines = data.split("\n");
  const parsedData = lines.map((line) => {
    const [number, word] = line.trim().split(" ");
    return { [number]: word };
  });

  // Sort the array of objects chronologically by the key
  const newArray = parsedData.sort((a, b) => {
    const aKey = Object.keys(a)[0];
    const bKey = Object.keys(b)[0];
    return aKey - bKey;
  });

  // Create the pyramid structure
  let currentKey = 1;
  let currentValue = 1;
  const pyramid = [];

  for (let i = 1; i <= newArray.length; i++) {
    const level = [];

    for (let j = 1; j <= i; j++) {
      const matchingObject = newArray.find(
        (obj) => parseInt(Object.keys(obj)[0]) === currentKey
      );
      if (matchingObject) {
        level.push(`${currentValue}: ${matchingObject[currentKey]}`);
        currentValue++;
      } else {
        break;
      }
      currentKey++;
    }

    pyramid.push(level);

    if (currentValue > newArray.length) {
      break;
    }
  }

  // Iterate through the pyramid and extract the last entries without numbers
  let decodedString = "";

  for (let i = 0; i < pyramid.length; i++) {
    const level = pyramid[i];
    if (level.length > 0) {
      const lastEntry = level[level.length - 1].split(": ")[1];
      decodedString += lastEntry + " ";
    }
  }

  return decodedString;
}

console.log(decode("your_file.txt"));

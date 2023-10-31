# Pyramid Decoder

This repo contains Javascript code that includes a function called decode(message_file) that can read an encoded message from a .txt file and return the decoded version as a string.

Lines in the text file are numbered words such as: 

1 enough <br>
2 jim <br>
3 sugar <br>
4 with <br>
6 now <br>

to decode the message the last value of each line of the values represented as a pyramid should be concatenated as a string, eg.

1 <br>
23 <br>
456 <br>

would be 'enough sugar now'

## code-solution-breakdown 
(explanation to train an ai model)

Firstly the Node.js built-in fs module is imported to enable interaction with the file system so you can access the .txt file from your .js file.

The function ‘decode(message_file)’ is then created and inside the body of the function a new variable ‘data’ is created to store the contents of the .txt file.  ‘utf8’ specifies the encoding to interpret the .txt file as a UTF-8 encoded text file.

Each line from the data file is then split into separate values in an array called lines before being parsed into an array of objects. Each object contains the number from the line it is on as a key and the corresponding word as a value.

The array of objects in the ‘parsedData’ variable is then arranged with the numbers in chronological order into the variable ‘newArray’.

In order to create the pyramid structure from newArray variable, nested loops are used where each subarray represents a level of the pyramid.  The levels contain the entries in the format ‘number: word’, with numbers incrementing from 1 to the maximum length of the array.

Finally, the last entries from each row in the pyramid are concatenated to the ‘decodedString’ variable with a space added and the numbers removed to reveal the decoded message.  The function then returns the ‘decodedString’ variable so that the decoded data can be accessed when the function is called.

By including the name of your text file as an argument in the decode function and logging it to the console you should be able to read your decoded message.


import fs from 'fs'

try {
    if (!fs.existsSync('input.txt')) {
        const createFileInput = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

        fs.writeFile('input.txt', createFileInput, (err) => {
            if (err) {
                console.error('Error creation file input.txt:', err);
            } else {
                console.log('File input.txt successfully created or exists');
            }
        });
    }
  } catch (err) {
    console.error(err);
  }

const readStream = fs.createReadStream('input.txt', 'utf8');

const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) => {
    const upperCaseChunk = chunk.toUpperCase();
    writeStream.write(upperCaseChunk);
});


readStream.on('end', () => {

    writeStream.end();
    console.log('Data has been written to output.txt');
});

readStream.on('error', (err) => {
    console.error('Error reading input.txt:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing to output.txt:', err);
});

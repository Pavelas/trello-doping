const fs = require('fs');
const exec = require('child_process').exec;

// Validate Trello directory
if (process.argv.length < 3) {
    console.log('You need to specify the installation location of Trello where app.asar is located.');
    console.log('node dope.js /Applications/Trello.app/Contents/Resources');
    process.exit();
}

const trelloDirectory = process.argv[2];

if (!fs.existsSync(trelloDirectory)) {
    console.log('Specified directory does not exist.');
    process.exit();
}

if (!fs.existsSync(path('app.asar'))) {
    console.log('Specified directory does not contain app.asar.');
    process.exit();
}

// Extract the .asar file and update Trello
exec(`npx asar extract ${path('app.asar')} ${path('app')}`, () => {
    fs.appendFileSync(path('app/views/css/trello-overrides.css'), fs.readFileSync(`dope.css`));
});

// Get the exact path to .asar file
function path(to) {
    return trelloDirectory.replace(/\/+$/, '') + '/' + to.replace(/^\/+/, '');
}

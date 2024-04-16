// commands.js
const cmdInput = document.getElementById('cmd-input');
const cmdBody = document.getElementById('cmd-body');

// Simulated commands and responses
const commands = [
    { command: 'help', response: 'Available commands: <br>- help <br>- about <br>- contact' },
    { command: 'about', response: 'This is a simulated Command Prompt interface created for demonstration purposes.' },
    { command: 'contact', response: 'You can reach us at contact@example.com.' }
];

// Function to simulate code running in the background
function runBackgroundCode() {
    // Simulate running code
    const codeLines = [
        "Initializing background processes...",
        "Running security checks...",
        "Scanning for vulnerabilities...",
        "Analyzing network traffic...",
        "Encrypting data...",
        "Compiling system logs...",
        "Executing maintenance routines...",
        "Complete."
    ];

    // Append each line of code to the command body with a delay
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            const codeLine = document.createElement('div');
            codeLine.textContent = line;
            cmdBody.appendChild(codeLine);

            // Scroll to bottom
            cmdBody.scrollTop = cmdBody.scrollHeight;

            // If it's the last line of code, initialize the command prompt
            if (index === codeLines.length - 1) {
                initializeCommandPrompt();
            }
        }, index * 1000); // Change the delay here (in milliseconds) for speed control
    });
}

// Function to initialize the command prompt after the background code
function initializeCommandPrompt() {
    const initialMessage = document.createElement('div');
    initialMessage.textContent = "Type 'help' to see available commands.";
    cmdBody.appendChild(initialMessage);

    // Add line break
    const lineBreak = document.createElement('br');
    cmdBody.appendChild(lineBreak);

    // Additional message for name input
    const nameMessage = document.createElement('div');
    nameMessage.textContent = "Hello! I am a Machine";
    cmdBody.appendChild(nameMessage);

    // Input field for name
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter your name');
    cmdBody.appendChild(nameInput);

    // Add line break
    const lineBreak2 = document.createElement('br');
    cmdBody.appendChild(lineBreak2);

    // Additional message for device type input
    const deviceMessage = document.createElement('div');
    deviceMessage.textContent = "Please enter your type of device (cellphone, desktop, etc):";
    cmdBody.appendChild(deviceMessage);

    // Input field for device type
    const deviceInput = document.createElement('input');
    deviceInput.setAttribute('type', 'text');
    deviceInput.setAttribute('placeholder', 'Enter your device type');
    cmdBody.appendChild(deviceInput);

    // Add line break
    const lineBreak3 = document.createElement('br');
    cmdBody.appendChild(lineBreak3);

    // Collect data and display messages
    setTimeout(() => {
        const name = nameInput.value.trim();
        const deviceType = deviceInput.value.trim();
        // Do something with the name and deviceType
        const collectedDataMessage = document.createElement('div');
        collectedDataMessage.textContent = `I have collected your data and Device IP address. Name: ${name}, Device Type: ${deviceType}`;
        cmdBody.appendChild(collectedDataMessage);

        // Warning message
        const warningMessage = document.createElement('div');
        warningMessage.innerHTML = "<strong>!!Warning!! : Don't try to leave this page, you'll lose.</strong>";
        cmdBody.appendChild(warningMessage);
    }, 1000); // Delay to collect data after 1 second
}

// Start running background code
runBackgroundCode();

cmdInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = cmdInput.value.trim();
        executeCommand(command);
        cmdInput.value = '';
    }
});

function executeCommand(command) {
    const output = document.createElement('div');
    output.textContent = `>${command}`;
    cmdBody.appendChild(output);

    // Simulate delay before response
    setTimeout(() => {
        const response = findCommandResponse(command);
        if (isNaN(command)) {
            const responseDiv = document.createElement('div');
            responseDiv.innerHTML = response;
            cmdBody.appendChild(responseDiv);
        }

        // Scroll to bottom
        cmdBody.scrollTop = cmdBody.scrollHeight;
    }, 1000 + Math.random() * 2000); // Random delay between 1 to 3 seconds
}

function findCommandResponse(command) {
    // Check if the command is found in the commands list
    const cmd = commands.find(c => c.command === command.toLowerCase());
    return cmd ? cmd.response : `Command not found. Type 'help' for a list of available commands.`;
}

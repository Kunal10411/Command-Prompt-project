// Define a variable to store the user's name
let userName;

// Define a variable to store the user's special feeling
let userFeeling;

const cmdInput = document.getElementById('cmd-input');
const cmdBody = document.getElementById('cmd-body');

const commands = [
    { command: 'help', response: 'Available commands: <br>- help <br>- about <br>- contact' },
    { command: 'about', response: 'A freak Developer playing with your mind (Its KD).' },
    { command: 'contact', response: 'You can reach me at Kunaldas1423@gmail.com.' }
];

function runBackgroundCode() {
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

    codeLines.forEach((line, index) => {
        setTimeout(() => {
            const codeLine = document.createElement('div');
            codeLine.textContent = line;
            cmdBody.appendChild(codeLine);

            cmdBody.scrollTop = cmdBody.scrollHeight;

            if (index === codeLines.length - 1) {
                initializeCommandPrompt();
            }
        }, index * 1000);
    });
}

function initializeCommandPrompt() {
    const initialMessage = document.createElement('div');
    initialMessage.textContent = "Type 'help' to see available commands.";
    cmdBody.appendChild(initialMessage);

    const lineBreak = document.createElement('br');
    cmdBody.appendChild(lineBreak);

    const nameMessage = document.createElement('div');
    nameMessage.textContent = "Hello! I am a Machine";
    cmdBody.appendChild(nameMessage);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter your name');
    cmdBody.appendChild(nameInput);

    const lineBreak2 = document.createElement('br');
    cmdBody.appendChild(lineBreak2);

    const deviceMessage = document.createElement('div');
    deviceMessage.textContent = "Please enter your type of device (cellphone, desktop, etc):";
    cmdBody.appendChild(deviceMessage);

    const deviceInput = document.createElement('input');
    deviceInput.setAttribute('type', 'text');
    deviceInput.setAttribute('placeholder', 'Enter your device type');
    cmdBody.appendChild(deviceInput);

    const lineBreak3 = document.createElement('br');
    cmdBody.appendChild(lineBreak3);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.backgroundColor = '#0f0'; // Green color
    submitButton.style.color = '#000'; // Black text color
    submitButton.style.border = '1px solid #0f0'; // Green border
    submitButton.style.padding = '5px 10px'; // Padding
    submitButton.style.marginTop = '10px'; // Add some margin for spacing
    submitButton.addEventListener('click', () => {
        collectAndDisplayData(nameInput.value.trim(), deviceInput.value.trim());
    });
    cmdBody.appendChild(submitButton);
}

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

    setTimeout(() => {
        const response = findCommandResponse(command);
        const responseDiv = document.createElement('div');
        responseDiv.innerHTML = response;
        cmdBody.appendChild(responseDiv);

        cmdBody.scrollTop = cmdBody.scrollHeight;
    }, 1000 + Math.random() * 2000);
}

function collectAndDisplayData(name, deviceType) {
    const ipAddress = generateRandomIPAddress();

    // Store the user's name
    userName = name;

    const collectedDataMessage = document.createElement('div');
    collectedDataMessage.textContent = `I have collected your data. Name: ${name}, Device Type: ${deviceType}, IP Address: ${ipAddress}`;
    cmdBody.appendChild(collectedDataMessage);

    const warningMessage = document.createElement('div');
    warningMessage.innerHTML = "<strong>!!Warning!! : Don't try to leave this page, you'll lose.</strong>";
    cmdBody.appendChild(warningMessage);

    // Let's proceed text
    setTimeout(() => {
        clearScreen();
        const countdown = document.createElement('div');
        countdown.setAttribute('id', 'countdown');
        cmdBody.appendChild(countdown);
        startCountdown();
    }, 5000);

    cmdBody.scrollTop = cmdBody.scrollHeight;
}

function startCountdown() {
    let seconds = 5;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `Let's proceed in ${seconds} seconds`;

    const countdownInterval = setInterval(() => {
        seconds--;
        countdownElement.textContent = `Let's proceed in ${seconds} seconds`;

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            clearScreen();
            displayWelcomeMessage();
        }
    }, 1000);
}

function displayWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Welcome";
    cmdBody.appendChild(welcomeMessage);

    // Add a line break after the "Welcome" message
    const lineBreak = document.createElement('br');
    cmdBody.appendChild(lineBreak);
    
    // Add the paragraph
    const paragraph = document.createElement('div');
    paragraph.setAttribute('id', 'typed-text');
    cmdBody.appendChild(paragraph);
    
    // The text to display letter by letter
    const textToDisplay = "I already know how stressful a life could be, majority of things are in long process.The ups and downs, the twists and turns - that's what makes life so thrilling, isn't it? You never know what's around the corner.Just when you think you've got it all figured out, something unexpected happens that shakes up your whole world. You discover hidden reserves of strength and resilience that you didn't know you had. And you emerge on the other side, a little bruised and battered perhaps, but also wiser and more capable than before.That's the thrill of the journey, isn't it? Life is an endless adventure, full of dramatic highs and lows. Just when you think you've seen it all, something new comes along to keep you on your toes. So buckle up, my friend - the ride is about to get even more exciting.";
    let index = 0;

    const letterInterval = setInterval(() => {
        if (index < textToDisplay.length) {
            const letter = document.createElement('span');
            letter.textContent = textToDisplay[index];
            paragraph.appendChild(letter);
            index++;
        } else {
            clearInterval(letterInterval);
            promptUser();
        }
    }, 100); // Adjust the interval as needed
    cmdBody.scrollTop = cmdBody.scrollHeight;
}

function promptUser() {
    const questionMessage = document.createElement('div');
    questionMessage.textContent = "Tell me about the last thing which made you feel special.";
    cmdBody.appendChild(questionMessage);

    const userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('placeholder', 'Your response...');
    cmdBody.appendChild(userInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.backgroundColor = '#0f0'; // Green color
    submitButton.style.color = '#000'; // Black text color
    submitButton.style.border = '1px solid #0f0'; // Green border
    submitButton.style.padding = '5px 10px'; // Padding
    submitButton.style.marginTop = '10px'; // Add some margin for spacing
    submitButton.addEventListener('click', () => {
        userFeeling = userInput.value.trim(); // Store the user's response
        displayUserResponse();
    });
    cmdBody.appendChild(submitButton);

    cmdBody.scrollTop = cmdBody.scrollHeight;
}

function displayUserResponse() {
    const userResponseMessage = document.createElement('div');
    userResponseMessage.textContent = `You felt special because: ${userFeeling}`;
    cmdBody.appendChild(userResponseMessage);

    cmdBody.scrollTop = cmdBody.scrollHeight;
}

function clearScreen() {
    cmdBody.innerHTML = '';
}

function generateRandomIPAddress() {
    const part1 = Math.floor(Math.random() * 256);
    const part2 = Math.floor(Math.random() * 256);
    const part3 = Math.floor(Math.random() * 256);
    const part4 = Math.floor(Math.random() * 256);

    const ipAddress = `${part1}.${part2}.${part3}.${part4}`;
    return ipAddress;
}

function findCommandResponse(command) {
    const cmd = commands.find(c => c.command === command.toLowerCase());
    return cmd ? cmd.response : `Command not found. Type 'help' for a list of available commands.`;
}

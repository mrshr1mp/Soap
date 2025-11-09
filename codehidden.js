const terminal = document.getElementById('terminal');

function addLine(text = '', isUser = false) {
    const line = document.createElement('div');
    line.className = 'line';
    if(isUser) {
        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = '(soapuser1):';
        line.appendChild(prompt);

        const input = document.createElement('input');
        input.type = 'text';
        input.autofocus = true;
        input.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                const userText = input.value.trim();
                input.disabled = true;
                addLine(userText);
                handleCommand(userText);
                addLine('', true);
            }
        });
        line.appendChild(input);
        terminal.appendChild(line);
        input.focus();
    } else {
        line.textContent = text;
        terminal.appendChild(line);
    }
}

addLine('', true);

function handleCommand(command) {
    switch(command.toLowerCase()) {
        case 'help':
            addLine('Command Notes:');
            addLine('* ALL commands are case sensitive please use lowercase letters');
            break;
        case 'soap':
            addLine('hello! Welcome to Silly Soap. Enjoy our products! what we can offer for you is a math equation. (3^3 + sqrt(144)) / 6 - (7 * 2) / 4 + 5^2');
            break;
        case 'silly':
            addLine('Wow! That is pretty silly of you!'.repeat(5));
            break;
        case 'f8f':
            addLine('FF0000 | '.repeat(1121) + 'NICE!');
            break;
        case '28':
            addLine('Correct! Here is a secret message: 01010011 00110010 00111001...');
            break;
        case '9a3b':
            addLine('T2pYd0rP1xE1pTb1HqE2CzOk9hD2pE:b0x3Q0p|3pQb0Zq...');
            break;
        case 'b0x3q0p':
            addLine('{1}rddzc://ggg.iyedelo.myw/gkdmr?f=0zx2lgk2jJm     systemfile');
            break;
        case 'systemfile':
            addLine('You are using system version Silly Soap Terminal v1.0.0');
            addLine('Developed by Silly Soap Inc.');
            break;
        case 'soapuser1':
            addLine('This is a guest account. Use upgrade command.');
            break;
        case 'sudo':
            addLine('Access Denied: Please upgrade your user status.');
            break;
        case 'update':
            addLine('System Update: Your Silly Soap Terminal is up to date.');
            break;
        case 'rights':
            addLine('copyright 2008 Silly Soap Inc.');
            break;
        default:
            addLine('Unknown command. Type "help"');
            break;
    }
}

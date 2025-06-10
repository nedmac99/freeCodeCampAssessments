const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = input => {

    const originalInput = input;

    if (input === '') {
        alert('Please input a value.')
    }

    result.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]gi/, '').toLowerCase();
    const resultMsg = `<strong>${originalInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    result.appendChild(pTag);

    result.classList.remove('hidden');
};

checkButton.addEventListener()//Continue here       


function startGame() {
    var numInput1 = parseInt(document.getElementById("numInput1").value);
    var numInput2 = parseInt(document.getElementById("numInput2").value);
    var numInput3 = parseInt(document.getElementById("numInput3").value);
  
// (5) 檢查使用者輸入的內容是否有效、跳出警告訊息、reset
    if (!isValidInput(numInput1, numInput2, numInput3)) {
        alert("Please enter valid number and please do not repeat them:))");
        resetGame();
        return;
    }
  
    var winningNum1 = generateRandomNumber(1, 10);
    var winningNum2 = generateRandomNumber(1, 10, winningNum1);
    var winningNum3 = generateRandomNumber(1, 10, winningNum1, winningNum2);
  
    var matchedCount = countMatchingNumbers(numInput1, numInput2, numInput3, winningNum1, winningNum2, winningNum3);

    function countMatchingNumbers(input1, input2, input3, winning1, winning2, winning3) {
        var matchedCount = 0;
        if (input1 === winning1 || input1 === winning2 || input1 === winning3) {
            matchedCount++;
        }
        if (input2 === winning1 || input2 === winning2 || input2 === winning3) {
            matchedCount++;
        }
        if (input3 === winning1 || input3 === winning2 || input3 === winning3) {
            matchedCount++;
        }
        displayResultMessage(matchedCount);
        return matchedCount;
    }
}
    
// (2)顯示中獎訊息[第一名的獎金：十萬元、第二名的獎金：五萬元、第三名的獎金：一萬元]
function displayResultMessage(matchedCount) {
    var resultMessage = document.getElementById("resultMessage");
    var msg = "";
    
    if (matchedCount === 3) {
        msg = "CONGRATES! YOU GOT THE FIRST PRIZE!\nYOU WON $100,000!";
    } else if (matchedCount === 2) {
        msg = "CONGRATES! YOU GOT THE SECOND PRIZE!\nYOU WON $50,000!";
    } else if (matchedCount === 1) {
        msg = "CONGRATES! YOU GOT THE THIRD PRIZE!\nYOU WON $10,000!";
    } else {
        msg = "NICE TRY:)";
    }
    
    resultMessage.textContent = msg;
}
 
// (4)Reset的功能
function resetGame() {

    document.getElementById("numInput1").value = "";
    document.getElementById("numInput2").value = "";
    document.getElementById("numInput3").value = "";
    document.getElementById("resultMessage").textContent = "";
}

function isValidInput(num1, num2, num3) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        return false;
    }
  
    if (num1 < 1 || num1 > 10 || num2 < 1 || num2 > 10 || num3 < 1 || num3 > 10) {
        return false;
    }
  
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return false;
    }
  
    return true;
}

function generateRandomNumber(min, max, exclude1, exclude2) {
    var num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (num === exclude1 || num === exclude2);
  
    return num;
}

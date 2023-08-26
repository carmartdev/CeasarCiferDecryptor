function decodeCaesar() {
    var input = document.getElementById("cipherInput").value;
    var resultElement = document.getElementById("result");
    var decryptionAttempts = [];

    for(let shift = 1; shift <= 25; shift++) {
        let decrypted = "";
        for(let i = 0; i < input.length; i++) {
            let char = input.charCodeAt(i);
            if(char >= 65 && char <= 90) {
                decrypted += String.fromCharCode((char - 65 - shift + 26) % 26 + 65);
            } else if(char >= 97 && char <= 122) {
                decrypted += String.fromCharCode((char - 97 - shift + 26) % 26 + 97);
            } else {
                decrypted += input.charAt(i);
            }
        }
        decryptionAttempts.push('Shift: '+ shift + ', Decryption: ' + decrypted);
    }

    resultElement.innerText = decryptionAttempts.join('\n');

    return false;
}
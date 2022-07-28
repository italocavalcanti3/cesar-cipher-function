function caesarCipher(s, k) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const newAlphabet = Array.from(alphabet);

    var arrayWord = Array.from(s);
    var indexConvert = [];
    var wordConvert = [];
    var newK = k > 26 ? parseInt(k % 26) : k;

    for (var i = 0; i < arrayWord.length; i++) {
        var index = newAlphabet.indexOf(arrayWord[i]);
        if (index == -1) {
            index = arrayWord[i];
            wordConvert.push(index);
        } else if (index < 26 && index + newK < 26) {
            index += newK;
            wordConvert.push(newAlphabet[index]);
        } else if (index < 26 && index + newK >= 26) {
            index += newK - 26;
            wordConvert.push(newAlphabet[index]);
        } else if (index >= 26 && index + newK <= 51) {
            index += newK;
            wordConvert.push(newAlphabet[index]);
        } else if (index >= 26 && index + newK >= 51) {
            index += newK - 26;
            wordConvert.push(newAlphabet[index]);
        }
    }
    return wordConvert.join('');
}

//Rodando para testar
console.log(cesarCipher('Github', 5)); // Resultado: Lnymzg

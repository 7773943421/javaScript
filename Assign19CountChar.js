function countChar(arg1) {
    var count=0;
var char=['a','A']
    for (const ch of arg1) {
        if (char.includes(ch)) {
            count++;
        }
    }
    console.log(`The total count of 'A' and 'a' is ${count}`);
}
countChar('I AM Learning java Script , The Language Of internet');
countChar('My favourite movi is LAgAn');


function marrage(str,num1,num2) {
    if ((str=='Male'||'Female'||'Other')&&(num1>21)&&(num2>=18)) {
        console.log('You are eligible for marrage');
    } else {
        console.log('You are not eligible for marrage');
    }
}
marrage("Male",17,17);
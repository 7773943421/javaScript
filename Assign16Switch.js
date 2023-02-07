function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log('_January');
      break;
    case 2:
      console.log('_Febuary');
      break;
    case 3:
      console.log('_March');
      break;
    case 4:
      console.log('_April');
      break;
    case 5:
      console.log('_May');
      break;
    case 6:
      console.log('_Jun');
      break;
    case 7:
      console.log('_July');
      break;
    case 8:
      console.log('_Agust');
      break;
    case 9:
      console.log('_Septamber');
      break;
    case 10:
      console.log('_Octomber');
      break;
    case 11:
      console.log('_November');
      break;
    case 12:
      console.log('_December');
      break;

    default:
        console.log("data invalid");
      break;
  }
}
monthOfYear(12);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

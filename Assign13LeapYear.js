var year=function (leap) {
    if ((0 == leap % 4) && (0 != leap % 100) || (0 == leap % 400)) {
        console.log(`${leap} is a leap year`);
    } else {
        console.log(`${leap} is not a leap year`);    
    }
}
year(2020);
year(1999);
year(1600);
year(2022);
year(2020);

function numberToBinary(num) {
    if (num >= 0) {
       return num.toString(2);
    } else {
       return '-' + numberToBinary(-num);
    }
   }
   
   console.log(numberToBinary(10)); // 1010
   console.log(numberToBinary(-7)); // -111
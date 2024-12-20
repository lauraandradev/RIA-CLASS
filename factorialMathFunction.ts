export const mathFactorial = (num: number) : number => {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 

  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}

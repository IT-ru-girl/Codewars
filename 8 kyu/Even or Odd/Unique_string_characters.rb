function solve(a,b){
  let filteredA = a.split('').filter(
      function(e) {
        return this.indexOf(e) < 0;
      },
      b.split('')
  );

  let filteredB = b.split('').filter(
      function(e) {
        return this.indexOf(e) < 0;
      },
      a.split('')
  );
  return filteredA.join('') + filteredB.join('');
}

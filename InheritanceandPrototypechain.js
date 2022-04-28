
const F = function () {
    this.a = 1;
    this.b = 2;
 };
 const o = new F(); 

 F.prototype.b = 3;
 F.prototype.c = 4;
 
 
 console.log(o.a); 

 console.log(o.b); 
 
 
 console.log(o.c); 

 
 console.log(o.d); 

 const s = {
    a: 2,
    m: function() {
      return this.a + 1;
    }
  };

  console.log(s.m());
  
 
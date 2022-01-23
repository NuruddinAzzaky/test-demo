var countDate= new Date('Feb 16, 2022 06:00:00').getTime();
function newYear() {
  var sekarang= new Date().getTime();
      selisih=countDate-sekarang;

      var second=1000;
      var minutes=second*60;
      var hours=minutes*60;
      var day=hours*24;

      var d=Math.floor(selisih/(day));
      var h=Math.floor((selisih%(day))/(hours));
      var m=Math.floor((selisih%(hours))/(minutes));
      var s=Math.floor((selisih%(minutes))/(second));

      document.getElementById('day').innerText=d;
      document.getElementById('hours').innerText=h;
      document.getElementById('minutes').innerText=m;
      document.getElementById('second').innerText=s;  
}
setInterval(function () {
  newYear();
  
},1000)
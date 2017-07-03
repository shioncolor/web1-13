var separate_time=function(time){
var sec=time.getSeconds();
var min=time.getMinutes();
var hours=time.getHours();
var days=time.getDate();
var mont=time.getMonth();
ver year=time.getFullYear();
return[sec,min,hours,days,month,year];
}

var now=new Data();
var counter=separate_time(now);
document.getElementById('countdouwn').textCountent=
counter[5]+'年'+
counter[4]+'月'+
counter[3]+'日'+
counter[2]+'時'+
counter[1]+'分'+
counter[0]+'秒';

doument.getElementById('form').select.onchange=function(){
location.href=getElementById('form').select.value;
}

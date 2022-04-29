
function show_now()
{
  var currentdate = new Date();
  var datetime = currentdate.getFullYear() + '/' 
+ (currentdate.getMonth()+1) + '/'
+ currentdate.getDate() + ' ' 
+ currentdate.getHours() + ':' 
+ currentdate.getMinutes() + ':'
+ currentdate.getSeconds();
  
  // 加入日期時間格式調整
  var datetime = datetime_format();
  
  document.getElementById('message').innerHTML = datetime;
}

setInterval(show_now, 200);


function datetime_format()
{
   var currentdate = new Date();
   var y = currentdate.getFullYear();
   var m = (currentdate.getMonth()+1);
   var d = currentdate.getDate();
   var hh = currentdate.getHours();
   var mm = currentdate.getMinutes();
   var ss = currentdate.getSeconds();
  
   // 法一
  /*
   hh = ('0' + hh).slice(-2);
   mm = ('0' + mm).slice(-2);
   ss = ('0' + ss).slice(-2);
 */
  
   // 法二
  /*
   if (hh < 10) { hh = '0'+hh; }
   if (mm < 10) { mm = '0'+mm; }
   if (ss < 10) { ss = '0'+ss; }
   */
  
   // 法三
   hh = (hh<10) ? ('0'+hh) : hh;
   mm = (mm<10) ? ('0'+mm) : mm;
   ss = (ss<10) ? ('0'+ss) : ss;
    
   var datetime = y + '/' + m + '/' + d + ' ' + hh + ':' + mm + ':' + ss;
   return datetime;
}
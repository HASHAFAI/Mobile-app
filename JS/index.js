// عند تحميل الصفحة

$(document).ready(function(){
   new WOW().init();
    // شهر، يوم، ساعة، دقيقة، ثانية odHMS بصيغة countdown إضافة عداد زمني
     var auseDay = new Date();
     auseDay = new Date(auseDay.getFullYear() + 1 , 1 - 1 ,26);
    //  format:"odHMS" عرض التاريخ طريقة
     $("#defultCounter").countdown({until:auseDay,format:"odHMS"})


     $(".form-control").blur(function(){
     var x = document.forms["myForm"]["email"].value;
     var atpos = x.indexOf("@");
     var dotpos = x.lastIndexOf(".");
     if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length){
        // .alert.alert-danger اظهر او اوجد بعد الاب العنصر
         $(this).parent().find(".alert.alert-danger").fadeIn(200);
     }else
     {
        $(this).parent().find(".alert.alert-success").fadeIn(200);
     }
     });
     
     $(".form-control2").blur(function(){
     var x = document.forms["myForm2"]["email2"].value;
     var atpos = x.indexOf("@");
     var dotpos = x.lastIndexOf(".");
     if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length){
        // .alert.alert-danger اظهر او اوجد بعد الاب العنصر
         $(this).parent().find(".alert.alert-danger").fadeIn(200);
     }else
     {
        $(this).parent().find(".alert.alert-success").fadeIn(200);
     }
     });
});
$('#currentDay').html("Today is " + "<span class='font-weight-bold'>" + moment().format('MMMM Do YYYY') + "</span>");

let currentTime = moment().format('LT');  
let currentTimeSubstr = parseInt(currentTime.substr(0,2));
let isAmPm = currentTime.substr(currentTime.length-2, 2);

var infoClass = $('.hour');
// if (parseInt(infoClass.html()) < currentTimeSubstr){
//     infoClass.css("backgroundColor", "red");
//     console.log("true");
// } else{
//     console.log("false")
// }
$('.hour').html(function(){
    // if (parseInt($('.hour').html()) < currentTimeSubstr){
    //     $('.hour').css("backgroundColor", "red");
    //     console.log("true " + $('.hour').html() );
    // } else{
    //     console.log("false")
    // }
    // while(parseInt($('.hour').html()) < currentTimeSubstr){
    //     $('.hour').css("backgroundColor", "red");
    // }
})

if(currentTimeSubstr==9 ){
    $('#nineInfo').addClass("bg-success text-white")
} else if(currentTimeSubstr==10){
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-success text-white")
} else if(currentTimeSubstr==11){
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-secondary text-white")
    $('#elevenInfo').addClass("bg-success text-white")
} else if(currentTimeSubstr==12){
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-secondary text-white")
    $('#elevenInfo').addClass("bg-secondary text-white")
    $('#twelveInfo').addClass("bg-success text-white")
} else if(currentTimeSubstr==1){
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-secondary text-white")
    $('#elevenInfo').addClass("bg-secondary text-white")
    $('#twelveInfo').addClass("bg-secondary text-white")
    $('#oneInfo').addClass("bg-success text-white")
}  else if(currentTimeSubstr==2){
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-secondary text-white")
    $('#elevenInfo').addClass("bg-secondary text-white")
    $('#twelveInfo').addClass("bg-secondary text-white")
    $('#oneInfo').addClass("bg-secondary text-white")
    $('#twoInfo').addClass("bg-success text-white")
}   else if(currentTimeSubstr==3){
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-secondary text-white")
    $('#elevenInfo').addClass("bg-secondary text-white")
    $('#twelveInfo').addClass("bg-secondary text-white")
    $('#oneInfo').addClass("bg-secondary text-white")
    $('#twoInfo').addClass("bg-secondary text-white")
    $('#threeInfo').addClass("bg-success text-white")
}   else if(currentTimeSubstr==4){
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-secondary text-white")
    $('#elevenInfo').addClass("bg-secondary text-white")
    $('#twelveInfo').addClass("bg-secondary text-white")
    $('#oneInfo').addClass("bg-secondary text-white")
    $('#twoInfo').addClass("bg-secondary text-white")
    $('#threeInfo').addClass("bg-secondary text-white")
    $('#fourInfo').addClass("bg-success text-white")
} else{
    $('#nineInfo').addClass("bg-secondary text-white")
    $('#tenInfo').addClass("bg-secondary text-white")
    $('#elevenInfo').addClass("bg-secondary text-white")
    $('#twelveInfo').addClass("bg-secondary text-white")
    $('#oneInfo').addClass("bg-secondary text-white")
    $('#twoInfo').addClass("bg-secondary text-white")
    $('#threeInfo').addClass("bg-secondary text-white")
    $('#fourInfo').addClass("bg-secondary text-white")
}

$(".info").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    console.log(text);
  }); 

console.log(currentTimeSubstr);
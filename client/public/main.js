$('.mainflip').click(
    function(){
   if($(this).hasClass('flip-0'))
   {
      $(this).removeClass('flip-0');
      $(this).addClass('flip-180');
    }
   else{
      $(this).addClass('flip-0');
      $(this).removeClass('flip-180');
       }
    });

/*
var btn_search = document.getElementById("btn_Buscar");
btn_search.onclick = function()
{    
    //var txt_search_value = document.getElementById("txt_search").value;
    alert('hola');
};
*/

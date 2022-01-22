 

$(document).ready(function(){ 
   
  $("#imgload").change(function () {
      if (this.files && this.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#imgshow').attr('src', e.target.result).css("display","block");
          }
          reader.readAsDataURL(this.files[0]);
      }
  }); 


  $(".editurl").click(function(){ 
    $(this).toggleClass("saveurl");
    var $editurlarea = $('.formurlarea input.form-control');
    if ($editurlarea.attr('readonly')) {
        $editurlarea.removeAttr('readonly');
    } else {
        $editurlarea.attr('readonly', 6);
    }
  });



  $(window).trigger('resize');
  $(window).resize(function() {
     var w = $(window).width();
     if (w >= 220 && w <= 991) {
      $(".personitem").click(function(){
        $(".namelist").hide();
        $(".personchat").show();
      });
      $(".chatback").click(function(){
        $(".namelist").show();
        $(".personchat").hide();
      });
    
     }  
  });


  
  $(".menu-button").click(function(){
    $(".sidepanel").addClass("showmenu");
  });
  $(".closeit").click(function(){
    $(".sidepanel").removeClass("showmenu");
  });


    //sidepanel
    $(".sidepanel ul li > .fa-angle-right").click(function () {
        $(this).toggleClass("rotatedown");
        $(this).next("ul").toggle("slow");
    });

    
  $(".showpass-single input[type='checkbox']").on("click", function(){
    if($(this).is(":checked")){
        $("input.password-single").attr("type", "text");
        document.getElementById("shwpas_sng").classList.toggle("fa-eye-slash");
        }
        else if($(this).is(":not(:checked)")){
        $("input.password-single").attr("type", "password");
        document.getElementById("shwpas_sng").classList.toggle("fa-eye-slash");
        }
  }); 


    $(".dropdown-menu li a").click(function(){
      $("#options").text($(this).html());
    });

    $(".menu-openmobile").click(function(){
      $(".navbar-leafy").toggleClass("openmenu");
        $(this).toggleClass("closebtnmenu");
    }); 
    $(".toggle-password").click(function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
    });

})  
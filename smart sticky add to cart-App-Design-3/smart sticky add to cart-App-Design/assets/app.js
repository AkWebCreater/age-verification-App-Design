$(document).ready(function(){
// image pick
$('.btn.pick').click(function(){
    $(this).closest('.input-group').find('input').trigger('click')
})
    // slider toggle
    $('.slider').click(function(){
        $(this).toggleClass('active').find('span').toggleClass('active');
        var status = $(this).parent().find('.status').text();
        if(status == 'Hide'){
            $(this).parent().find('.status').html('Show')
        }
        else{
            $(this).parent().find('.status').html('Hide')  
        }
    })
    // end
    // mobile sidebar
    $('.mob-edit button').click(function(){
        $('.sidebar').toggleClass('open');
        $('.sidebar').toggleClass('full');
        $('.sidebar').removeClass('close');
        $(this).parent().hide();
    })
    $('.mobile-nav .arrow-up').click(function(){
        $('.sidebar').toggleClass('full');
        $('.sidebar').removeClass('open');
        $('.sidebar').addClass('close');
        $('.mob-edit').show();
        
    })
    // $('.sidebar-close').click(function(){
    //     $('.sidebar').removeClass('open');
    //     $('.sidebar').addClass('close');
    //     $('.sidebar').removeClass('full');
    //     $('.mob-edit').show();
    // })

    // end
    $(".preview-button button").click(function(){
        $(this).parent().next().stop().fadeToggle();
    })
    $(".nav-item").click(function(){
        var svg = $(this).find('div').html();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().prev().find('button').html(svg)
        $(this).closest('.dropdown').fadeOut();
        var preview = $(this).data('preview');
        $('.preview #'+preview).siblings().slideUp('400');
        $('.preview #'+preview).delay('500').slideDown();
    })
    $(document).mouseup(function(e){
    if ($(e.target).closest(".dropdown").length === 0) { 
        $(".dropdown").fadeOut();
    } 
    });
    $('.sidebar-header-item').click(function(){
        $(this).addClass("active").siblings().removeClass('active')
    })
    $('.sidebar-header-item').click(function(){
        $(this).addClass("active").siblings().removeClass('active')
    })
    $('.sidebar-header-item.button').click(function(){
        $(this).addClass("active").siblings().removeClass('active')
        $(".body.help-doc").removeClass("active")
        $(".body.button").addClass("active")
    })
    $('.sidebar-header-item.help').click(function(){
        $(this).addClass("active").siblings().removeClass('active')
        $(".body.help-doc").addClass("active")
        $(".body.button").removeClass("active")
    })
    var h = $(window).height();
    $("body > .wrapper").css({height:h,minHeight:h})
$(window).on('resize',function(){
    var h = $(window).height();

    $("body > .wrapper").css({height:h,minHeight:h})
    if($(document).width() <= 768 ){
$('.nav-item.desktop').removeClass('active').siblings().addClass('active')
    }
})
$(".btn.save").click(function(){
    $('.overlay').addClass('active');
    $('.overlay').removeClass('inactive');
    $('body').addClass('scroll-block');
    $('.alert').addClass('active').removeClass('inactive').find('.text-node').html('settings are saved');
})
$(".btn.reset").click(function(){
    $('.overlay').addClass('active').removeClass('inactive');
    $('body').addClass('scroll-block');
    $('.alert').addClass('active').removeClass('inactive');
    $('.alert .text-node').html('Settings Are Set To Default')
})
$('.overlay , .icon.close').click(function(){
    $('.overlay').removeClass('active').addClass('inactive');
    $('body').removeClass('scroll-block');
    $('.alert').fadeOut().removeClass('active').addClass('inactive');
    
})
$('.icon.arrow').click(function(){
    var drawer = $(this).data("drawer");
    $('.drawer.' + drawer).addClass('open')
})
$('.btn.support').click(function(){
    var drawer = $(this).data("drawer");
    $('.drawer.' + drawer).addClass('open')
})
$('.drawer-close').click(function(){
    $(this).closest('.drawer').removeClass('open')
})
$('.choose-template input').click(function(){
    var template  = $(this).data('template');
    $('.'+template).removeClass('hide').siblings().addClass('hide')
})
// support submit
$('.support-submit').click(function(e){
    e.preventDefault();
    var len = $("#massage").val().length ;
    if(len <= 20 ){
        $('.support-alert').addClass('warning');
    }
})
$('#massage').focus(function(){$('.support-alert').removeClass('warning');})

// plus minus functions
$('.template span.plus').click(function(){
    var val = $(this).parent().find('input').val();
    var newval = Number(val)
    newval += 1;
    $(this).parent().find('input').val(newval);
})
$('.template span.minus').click(function(){
    var val = $(this).parent().find('input').val();
    if(val == 0 ){val = 1}
    var newval = Number(val)
    newval -= 1;
    $(this).parent().find('input').val(newval);
})
// enable collections when position is set to collection
$('#choose-position select').change(function(){
// $(this).find('option::selected').text()
   var optionVal = $(this).children("option:selected").text();
   if(optionVal == 'Collection Page Only'){
$('#all-collection select').removeAttr('disabled')
   }else{
    $('#all-collection select').attr('disabled','disabled')
   }
})

// end Collection Page Only
// change color on colorpicker change
$('.color-pick input').change(function(){
    var c = $(this).val();
    // alert(c)
    $(this).prev().text(c).css("color",c)
    
    })
    // end here
    
// custome select style
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
$('.custom-select .select-selected').click(function(){
    $(this).parent().toggleClass('active');
})
})
$(document).ready(function(){
    //    trimming title
var title = document.querySelector('.template span.product-title').textContent;
var length = 15;
var trimmedString = title.substring(0, length);
$('.template  span.product-title').text(trimmedString+'...');
})



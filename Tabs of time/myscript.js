function loop ($swap) {
  var next = $swap.find("li.visible").removeClass("visible").index() + 1;
  
  if(next >= $swap.find("li").length) {
    next = 0;
  }
  
  $swap.width($($swap.find("li").get(next)).addClass("visible").outerWidth());
  $swap.css({ "transform" : "translateY(-" + next * 3 + "rem)" });
  
  setTimeout(function () { loop($swap); }, 2000);
};

$(function () {
  $(".swap").each(function () {
    var $this = $(this);
    
    $this.find("li").each(function () {
      $(this).css({ top: $(this).index() * 3 + "rem" });
    });
    
    loop($this);
  });
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var documentTitle = document.title + " * But, Whole Press * ACAB * BLACK LIVES MATTER * ";

  (function titleMarquee() {
      document.title = documentTitle = documentTitle.substring(1) + documentTitle.substring(0,1);
      setTimeout(titleMarquee, 250);
  })();
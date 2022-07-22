"use strict";

AOS.init();
"use strict";

$(function () {
  $('#back_top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1);
    /* 返回到最頂上 */

    return false;
  });
});
"use strict";

$(function () {
  var navHeight = $(".header").offset().top;
  console.log(navHeight);
  console.log(123);
});
//# sourceMappingURL=all.js.map

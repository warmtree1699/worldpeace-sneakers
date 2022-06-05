$(function () {
    /* 按下GoTop按鈕時的事件 */
    $('#back_top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 333);   /* 返回到最頂上 */
        return false;
    });

});


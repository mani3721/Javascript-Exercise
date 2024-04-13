
function tab_change(ele, tab_content) {

    $(ele).parents('.tab-btn-list').addClass('active').siblings().removeClass('active');
    $(ele).parents('.tabs-container').find(".tab-content.active").siblings(`.${ tab_content }`).addClass("active").siblings().removeClass('active')
}


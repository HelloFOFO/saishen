//获得参数的方法
var request = {
    QueryString : function(val) {
        var uri = window.location.search;
        var re = new RegExp("" +val+ "=([^&?]*)", "ig");
        return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
    }
}

function goQuery(formSearch){
    // alert("后台系统研发中，上线后会立即开放查询功能")
    $(formSearch).attr("action","http://www.c-logistics.cn/cgi-bin/GInfo.dll?EmmisTrack")
    $(formSearch).submit()
    return
}

//用于判断是否是正确的运单号
let isValidCode = function(val){
    let patten = /^[a-zA-Z0-9]+$/;
    return patten.test(val);
}

function init(){
    //设置搜索按钮的动作
    $('#btn_search').click(
        function(e) {
            e.preventDefault()
            if(isValidCode($('#txt_search').val().trim())){
                goQuery($(this).parents('form'))
            }
            else{
                alert('请输入正确的--运单号--')
                return
            }
        }
    )

    $('#btn_center_search').click(
        function(e) {
            e.preventDefault()
            if(isValidCode($('#txt_center_search').val().trim())){
                goQuery($(this).parents('form'))
            }
            else{
                alert('请输入正确的--运单号--')
                return
            }
        }
    )

    $('#btn_right_search').click(
        function(e) {
            e.preventDefault()
            if(isValidCode($('#txt_right_search').val().trim())){
                goQuery($(this).parents('form'))
            }
            else{
                alert('请输入正确的--运单号--')
                return
            }
        }
    )


    $('#div_center_search').mouseenter(
        function(){
            $('#div_center_search').animate({width:'500px'})
            $('#btn_center_search').removeClass('btn-search-center-grey')
        }
    )
    $('#div_center_search').mouseleave(
        function(){
            $('#div_center_search').animate({width:'400px'})
            $('#btn_center_search').addClass('btn-search-center-grey')
        }
    )

}

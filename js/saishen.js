//获得参数的方法
var request = {
    QueryString : function(val) {
        var uri = window.location.search;
        var re = new RegExp("" +val+ "=([^&?]*)", "ig");
        return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
    }
}

function goQuery(inputCodes){
//    alert("后台系统研发中，上线后会立即开放查询功能");
    window.location.href = "srch.html?codes="+inputCodes;
}

//用于判断是否是正确的运单号
let isValidCode = function(val){
    let patten = /^[a-zA-Z0-9]+$/;
    return patten.test(val);
}

function init(){
    //设置搜索按钮的动作
    $('#btn_search').click(
        function() {
            if(isValidCode($('#txt_search').val().trim())){
                goQuery($('#txt_search').val().trim());
            }
            else{
                alert('请输入正确的--运单号--')
                return
            }
        }
    )

}


app.controller('indexController', ['$scope','routerTempUrlHelpProvider', function($scope,help){
		// console.log(help.baseUrl("sssss"))
		$scope.baseUrl=function(url){
			help.baseUrl(url);
		}
	
}])




app.constructor("blogController",['$rootScope','$scope','$http',function ($rootScope, $scope,$http) {




}])



app.controller('blogeditorController', ['$scope','$ocLazyLoad', 
	function($scope,$ocLazyLoad){
		console.log('blogeditorController');
         // $ocLazyLoad.load('/app/libs/ckeditor/ckeditor.js');
         // $ocLazyLoad.load('/app/libs/ckeditor/config.js');
         // $ocLazyLoad.load('/app/libs/ckeditor/skins/moono-lisa/skin.js');
         // $ocLazyLoad.load('/app/libs/ckeditor/lang/zh-cn.js');

         // $ocLazyLoad.load('js/blogeditor.js');

		 // console.log('blogeditorController2');

        CKEDITOR.replace('TextArea1', {
            toolbar :
                [
                    //加粗     斜体，     下划线      穿过线      下标字        上标字
                    ['Bold','Italic','Underline','Strike','Subscript','Superscript'],
                    // 数字列表          实体列表            减小缩进    增大缩进
                    ['NumberedList','BulletedList','-','Outdent','Indent'],
                    //左对 齐             居中对齐          右对齐          两端对齐
                    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
                    //超链接  取消超链接 锚点
                    ['Link','Unlink','Anchor'],
                    //图片    flash    表格       水平线            表情       特殊字符        分页符
                    ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
                    '/',
                    // 样式       格式      字体    字体大小
                    ['Styles','Format','Font','FontSize'],
                    //文本颜色     背景颜色
                    ['TextColor','BGColor'],
                    //全屏           显示区块
                    ['Maximize', 'ShowBlocks','-']
                ],height:400
        });


        // 1、获取CKEditor被选中的内容
        // var mySelection = CKEDITOR.instances.WORK_INTRODUCTION.getSelection();
        // if (CKEDITOR.env.ie) {
        //     mySelection.unlock(true);
        //     data = mySelection.getNative().createRange().text;
        // } else {
        //     data = mySelection.getNative();
        // }
        // 2、获取CKEditor纯文本
        // var CText=CKEDITOR.instances.WORK_INTRODUCTION.document.getBody().getText(); //取得纯文本
        //
        // 3、获取CKEditor带HTML标签的文本
        // var CHtml= CKEDITOR.instances.WORK_INTRODUCTION.getData();
        // 4、给CKEditor赋值
        // CKEDITOR.instances.编辑器id.setData("要显示的文字内容");

		 $scope.blogedit_submit=function(){//获取文本数据
             var editor_data= CKEDITOR.instances.TextArea1.getData();
             if(editor_data==null||editor_data==""){
                 alert("数据为空不能提交");
             }else{
                 console.log(editor_data);
             }

		 }
}]);


app.controller('photoController',['$scope',"$ocLazyLoad",
    function ($scope,$ocLazyLoad) {
        // $ocLazyLoad.load('app/libs/viewerjs/dist/viewer.min.css');
        // $ocLazyLoad.load('app/libs/viewerjs/dist/viewer.min.js');
        $('#viewer').viewer({url:"data-original"});

}])
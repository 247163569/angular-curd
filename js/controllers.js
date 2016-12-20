//1.创建登录的模块，并且创建登录的控制器
var loginApp = angular.module('loginApp',[]);
loginApp.controller('loginController',function($scope,$http){
    //数据
    $scope.formData = {};
    //发送的方法
    $scope.postForm = function(){
        //1.formData添加一个属性,action代表的就是请求的行为
        $scope.formData.action = 'login';
        $http({
            method:"POST",
            url:'get.php',
            data: $.param($scope.formData),
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).success(function(data){
            console.log(data);
            if(!data.success){
                //当前登录失败
                if(!data.errors){
                    //用户名密码错误
                    $scope.message = data.message;
                }else{
                    //用户名，密码为空的错误
                    $scope.errorUsername = data.errors.username;
                    $scope.errorPassword = data.errors.password;
                }
            }else{
                //当前登录成功
                window.location.href='#/0';
            }
        })
    }
})
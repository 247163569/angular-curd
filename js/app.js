//1.创建routerApp模块，引入ui.router路由
var routerApp = angular.module('routerApp',['ui.router','loginApp']);
//2.调用run方法,对项目进行一些初始化的操作.
routerApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
})
//3.调用config方法，对服务进行配置或者是对路由进行设置
routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            views:{
                '':{
                    templateUrl:'tpls/home.html'
                },
                'main@index':{
                    templateUrl:'tpls/login.html'
                }
            }
        })
})
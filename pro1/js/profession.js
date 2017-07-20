// $(function(){
// 	$(window).scroll(function(){
// 		var p = 0,t=0;
// 		var top = 0;
// 		p = $(window).scrollTop();
// 		if(t<=p){
// 			 top += 800;
// 			$('#move_box').css('top':top+'px');
// 		}else{
// 			top -= 800
// 			$('#move_box').css('top':top+'px');
// 		}
// 		t = p;
// 	});
// })

var app = angular.module('myApp',['ngAnimate']);
app.controller('myCtrl',function($scope){
	$scope.dot = ['','','','','',''];
	$scope.top = 0;
	$scope.index = 0;

	$scope.showDot = function(){
		for(var i =0;i<$scope.dot.length;i++){
			$scope.dot[i] = '';
		}
		$scope.dot[$scope.index] = 'on';
	}
	$scope.showDot();

	$scope.selectDot = function(newIndex){
		
		$scope.top = $scope.top - (newIndex - $scope.index)* 800; 
		$scope.index = newIndex;
		$scope.showDot();
	}
	
});
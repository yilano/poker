
var app = angular.module('myApp',['ngAnimate']);
app.controller('myCtrl',function($scope,$timeout,$interval){
	$scope.left= -540;
	$scope.time = 0.5;
	$scope.dot = ['','','','',''];
	$scope.index = 0;




	//点击切换下一张图片的方法
	$scope.next = function(){
		
		if($scope.left <= -2700 ){
			
			$scope.left -= 540;
			$scope.time = 0.5;
			$timeout(function(){
				$scope.time = 0;
				$scope.left = -540;
				

			},500);
		}
		
		else{
			$scope.time = 0.5;
			$scope.left -= 540;
		}

		$scope.index = (++$scope.index>4)?0:$scope.index;
		$scope.showDot();

	}
	
	//点击切换上一张图片的方法
	$scope.pre = function(){
		
		if($scope.left >= -540 ){
			
			$scope.time = 0.5;
			$scope.left += 540;
			$timeout(function(){
				$scope.left = -2700;
				$scope.time = 0;
			},500);

			
		}else{
			$scope.left += 540;
			$scope.time = 0.5;	
				
		}

		$scope.index = (--$scope.index<0)?4:$scope.index;
		$scope.showDot();
	}

	var int = $interval(function(){
		$scope.next();
	},2000);

	$scope.stop = function(){
		$interval.cancel(int);
	}
	$scope.begin = function(){
		int = $interval(function(){
			$scope.next();
		},2000);
	}

	//下方按钮跟着图片动的方法
	$scope.showDot = function(){
		for(var i=0;i<$scope.dot.length;i++){
			$scope.dot[i] = '';
		}
		$scope.dot[$scope.index] = 'on';
	}
	$scope.showDot();

	//点击按钮切换图片的方法
	$scope.selectDot = function(newIndex){
		$scope.left = $scope.left - (newIndex - $scope.index)* 540;
		$scope.index = newIndex;
		$scope.showDot();
	};


	//快速注册弹进弹出
	$scope.in = function(){
		$scope.right = -48;
		$scope.right1 = 0;
	}

	$scope.out = function(){
		$scope.right = 0;
		$scope.right1 = -298;
	}

	//职业简介切换
	$scope.zy1 = function(){
		$scope.zindex = 100;
		$scope.zindex1 = 99;
		$scope.zindex2 = 99;
		$scope.zindex3 = 99;
		$scope.zindex4 = 99;
		$scope.zindex5 = 99;

	}

	$scope.zy2 = function(){
		$scope.zindex = 99;
		$scope.zindex1 = 100;
		$scope.zindex2 = 99;
		$scope.zindex3 = 99;
		$scope.zindex4 = 99;
		$scope.zindex5 = 99;

	}
	$scope.zy3 = function(){
		$scope.zindex = 99;
		$scope.zindex1 = 99;
		$scope.zindex2 = 100;
		$scope.zindex3 = 99;
		$scope.zindex4 = 99;
		$scope.zindex5 = 99;

	}
	$scope.zy4 = function(){
		$scope.zindex = 99;
		$scope.zindex1 = 99;
		$scope.zindex2 = 99;
		$scope.zindex3 = 100;
		$scope.zindex4 = 99;
		$scope.zindex5 = 99;

	}
	$scope.zy5 = function(){
		$scope.zindex = 99;
		$scope.zindex1 = 99;
		$scope.zindex2 = 99;
		$scope.zindex3 = 99;
		$scope.zindex4 = 100;
		$scope.zindex5 = 99;

	}
	$scope.zy6 = function(){
		$scope.zindex = 99;
		$scope.zindex1 = 99;
		$scope.zindex2 = 99;
		$scope.zindex3 = 99;
		$scope.zindex4 = 99;
		$scope.zindex5 = 100;

	}
});

var app = angular.module('myApp',['ngAnimate']);
app.controller('myCtrl',function($scope,$timeout,$interval){
	$scope.left= -895;
	$scope.time = 0.5;
	$scope.dot = ['','',''];
	$scope.index = 0;

	//最上面的轮播

	//点击切换下一张图片的方法
	$scope.next = function(){
		
		if($scope.left <= -2685 ){
			
			$scope.left -= 895;
			$scope.time = 0.5;
			$timeout(function(){
				$scope.time = 0;
				$scope.left = -895;
				

			},500);
		}
		
		else{
			$scope.time = 0.5;
			$scope.left -= 895;
		}

		$scope.index = (++$scope.index>2)?0:$scope.index;
		$scope.showDot();

	}
	
	//点击切换上一张图片的方法
	$scope.pre = function(){
		
		if($scope.left >= -895 ){
			
			$scope.time = 0.5;
			$scope.left += 895;
			$timeout(function(){
				$scope.left = -2685;
				$scope.time = 0;
			},500);

			
		}else{
			$scope.left += 895;
			$scope.time = 0.5;	
				
		}

		$scope.index = (--$scope.index<0)?2:$scope.index;
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
		$scope.left = $scope.left - (newIndex - $scope.index)* 895;
		$scope.index = newIndex;
		$scope.showDot();
	};




	//中间热搜单品鲜花的轮播

	$scope.left1= 0;
	$scope.time1 = 1;
	$scope.dot1 = ['',''];
	$scope.index1 = 0;

	

	//点击切换下一张图片的方法
	$scope.next1 = function(){
		
		if($scope.left1 <= -285 ){
			
			$scope.left1 = 0;
			$scope.time1 = 1;
			
		}
		
		else{
			$scope.time1 = 1;
			$scope.left1 -= 285;
		}

		$scope.index1 = (++$scope.index1>1)?0:$scope.index1;
		$scope.showDot1();

	}
	
	//点击切换上一张图片的方法
	$scope.pre1 = function(){
		
		if($scope.left1 >= 0 ){
			
			$scope.time1 = 1;
			$scope.left1 = -285;
			

			
		}else{
			$scope.left1 += 285;
			$scope.time1 = 1;	
				
		}

		$scope.index1 = (--$scope.index1<0)?1:$scope.index1;
		$scope.showDot1();
	}

	var int1 = $interval(function(){
		$scope.next1();
	},2500);

	$scope.stop1 = function(){
		$interval.cancel(int1);
	}
	$scope.begin1 = function(){
		int1 = $interval(function(){
			$scope.next1();
		},2500);
	}

	//下方按钮跟着图片动的方法
	$scope.showDot1 = function(){
		for(var i=0;i<$scope.dot1.length;i++){
			$scope.dot1[i] = '';
		}
		$scope.dot1[$scope.index1] = 'bodyMid_midTa';
	}
	$scope.showDot1();

	//点击按钮切换图片的方法
	$scope.selectDot1 = function(newIndex1){
		$scope.left1 = $scope.left1 - (newIndex1 - $scope.index1)* 285;
		$scope.index1 = newIndex1;
		$scope.showDot1();
	};






	//中间热搜单品新时装的轮播

	$scope.opacity = 1;
	$scope.time2 = 1;
	$scope.dot2 = ['',''];
	$scope.index2 = 0;

	

	//点击切换下一张图片的方法
	$scope.next2 = function(){
		
		if($scope.opacity == 1){
			$scope.opacity = 0;
		}else{
			$scope.opacity = 1;
		}

		$scope.index2 = (++$scope.index2>1)?0:$scope.index2;
		$scope.showDot2();

	}
	
	//点击切换上一张图片的方法
	$scope.pre2 = function(){
		
		if($scope.opacity == 1){
			$scope.opacity = 0;
		}else{
			$scope.opacity = 1;
		}

		$scope.index2 = (--$scope.index2<0)?1:$scope.index2;
		$scope.showDot2();
	}

	var int2 = $interval(function(){
		$scope.next2();
	},2500);

	$scope.stop2 = function(){
		$interval.cancel(int2);
	}
	$scope.begin2 = function(){
		int2 = $interval(function(){
			$scope.next2();
		},2500);
	}

	//下方按钮跟着图片动的方法
	$scope.showDot2 = function(){
		for(var i=0;i<$scope.dot2.length;i++){
			$scope.dot2[i] = '';
		}
		$scope.dot2[$scope.index2] = 'shop_bodyMid_La';
	}
	$scope.showDot2();

	//点击按钮切换图片的方法
	$scope.selectDot2 = function(newIndex2){
		$scope.next2();
		$scope.index2 = newIndex2;
		$scope.showDot2();
	};

});
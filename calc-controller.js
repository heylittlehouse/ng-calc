var calculator = angular.module('calculator', []);

calculator.controller('calc-controller', function($scope, $log){
	$scope.btnNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	$scope.operationsList = ["+", "-", "x", "/"]
	$scope.previousNum = null;
	$scope.currentNum = 0;
	$scope.pendingOperation = null;
	$scope.operation = function(value){
		$scope.pendingOperation = value;
		$scope.storeNum();
	}
	$scope.calculate = function(){
		var currentNum = parseInt($scope.currentNum);

		if ($scope.pendingOperation == "+"){$scope.add(currentNum);}
		else if ($scope.pendingOperation == "-"){$scope.subtract(currentNum);}
		else if ($scope.pendingOperation == "x"){$scope.times(currentNum);}
		else if ($scope.pendingOperation == "/"){$scope.divide(currentNum);}
	}
	$scope.clear = function(){
		$scope.previousNum = null;
		$scope.pendingOperation = null;
		$scope.currentNum = 0;
	}
	$scope.add = function(currentNum){
		$scope.currentNum = $scope.previousNum + currentNum;
	}
	$scope.subtract = function(currentNum){
		$scope.currentNum = $scope.previousNum - currentNum;
	}
	$scope.times = function(currentNum){
		$scope.currentNum = $scope.previousNum * currentNum;
	}
	$scope.divide = function(currentNum){
		$scope.currentNum = $scope.previousNum / currentNum;
	}
	$scope.storeNum = function(){
		$scope.previousNum = parseInt($scope.currentNum);
		$scope.currentNum = 0;
	}
	$scope.updateCurrentNum = function(num){
		if ($scope.currentNum == 0){
			$scope.currentNum = num;
		}else{
			$scope.currentNum += num;
		}
	}
});
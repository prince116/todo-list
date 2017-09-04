
var app = angular.module("myApp",[]);

app.controller("ToDoListController", function($scope){
    $scope.tasks = [];
    $scope.input_task = '';
    $scope.add = function(){

        var current_input = $scope.input_task;

        if( current_input == '' ){
            alert('Please enter a task');
            return false;
        }

        if( $scope.tasks.indexOf(current_input) < 0 ) {
            $scope.tasks.push(current_input);
            $scope.tasks.sort();
        } else {
            alert('Task already exist');
        }

        $scope.input_task = '';
    };

    $scope.reset = function(){
        $scope.tasks = [];
    };

    $scope.remove = function(event){
        $scope.tasks.splice(event.currentTarget.id, 1);
    };
});
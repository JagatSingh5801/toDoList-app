app.controller("myCtrl", function($scope, $mdToast) {
    var vm = this;
    $scope.listItems = [
        {text: "Shopping List One"},
        {text: "Shopping List Second"},
        {text: "Shopping List Third"}
    ];
    
    $scope.addItem = function() {
        $scope.errortext = "";
        if (!$scope.addMe) {
            $mdToast.show($mdToast.simple().textContent('Please enter a list item.')
                .position('top right').hideDelay(2000).theme('error-toast'));
            return;
        }
        if (!$scope.listItems.some(listItem => listItem.text === $scope.addMe)) {
            $scope.listItems.push({text: $scope.addMe});
            $mdToast.show($mdToast.simple().textContent('Item added to shopping list.')
                .position('top right').hideDelay(2000).theme('success-toast'));
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
        $scope.addMe = "";
    };
    
    $scope.removeItem = function(x) {
        $scope.errortext = "";
        var index = $scope.listItems.indexOf(x);
        $scope.listItems.splice(index, 1);
        $mdToast.show($mdToast.simple().textContent('Item removed from shopping list.')
            .position('top right').hideDelay(2000).theme('error-toast'));
    };
    
    $scope.removeAll = function() {
        $scope.listItems = [];
        $mdToast.show($mdToast.simple().textContent('All items removed from shopping list.')
            .position('top right').hideDelay(2000).theme('error-toast'));
    };

    vm.edit = function(x) {
        var newText = prompt('Edit Task:', x.text);
        if (newText !== null) {
            x.text = newText;
            $mdToast.show($mdToast.simple().textContent('Item edited.')
                .position('top right').hideDelay(2000).theme('info-toast'));
        }
    };
});
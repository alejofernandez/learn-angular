// var app = angular.module('myFirstApp', []);
// var mainController = app.controller('mainController', function ($scope) {

// });

angular.module('myFirstApp', [])
  .controller('mainController', function ($scope, $http, $timeout) {
    $scope.contacts = [];
    // $scope.sortOrder = 'name';

    $scope.sortBy = function (sortOrder) {
      $scope.sortOrder = sortOrder;
    };

    $scope.loadContacts = function () {
      $http({ method: 'GET', url: 'contacts.json' })
        .success(function (contacts) {
          $scope.contacts = contacts;
        })
        .error(function (error) {
          console.log(error);
        });
    };

    $scope.addContact = function (name, number) {
      $scope.contacts.push({ name: name, number: number });
      $scope.name = '';
      $scope.number = '';
    };

    $scope.deleteContact = function (contact) {
      var index = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(index, 1);
    };

    $scope.loadContacts();
  });

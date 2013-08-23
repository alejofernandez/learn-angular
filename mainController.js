// var app = angular.module('myFirstApp', []);
// var mainController = app.controller('mainController', function ($scope) {

// });

angular.module('myFirstApp', [])
  .controller('mainController', function ($scope) {
    $scope.contacts = [{
      name: 'Jose',
      number: 1234
    },
    {
      name: 'Carlos',
      number: 333
    },
    {
      name: 'Juan',
      number: 555
    }];

    $scope.addContact = function (name, number) {
      $scope.contacts.push({ name: name, number: number })
    };

    $scope.deleteContact = function (contact) {
      var index = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(index, 1);
    };
  });

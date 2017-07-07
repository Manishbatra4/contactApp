var app = angular.module('contactApp');
app.controller('ListController',['$scope','Contact','$location', function ($scope,Contact,$location) {
	$scope.contacts = Contact.query();
	$scope.fields = ['firstName','lastName']

	$scope.sort = function(field) {
		$scope.sort.field =	 field;
		$scope.sort.order = !$scope.sort.order;
	};

	$scope.sort.field = 'firstName';
	$scope.sort.order = false;

	$scope.show = function(id){
		$location.url("/contact/"+id);
	}
}]);
app.controller('HomeController', ['$scope', function ($scope) {
	$scope.message = "Welcome User!"
}]);
app.controller('SingleController', function ($scope,Contact,$location,$routeParams) {
	$scope.contact = Contact.get({ id: parseInt($routeParams.id, 10) });
	$scope.delete = function () {
		$scope.contact.$delete();
		$location.url("/contacts");
	}
});
app.controller('NewController',function ($scope,Contact,$location) {
	$scope.contact = new Contact({
		firstName: ['','text'],
		lastName:  ['','text'],
		email:     ['','email'],
		phone:     ['','tel'],
		mobile:    ['','tel'],
		birthday:  ['','date'],	
		website:   ['','url'],
		address:   ['','text']
	});

	$scope.save = function() {
		if ($scope.newContact.$invalid) {
			$scope.$broadcast('record:invalid');
		}else{
			$scope.contact.$save();
			$location.url('/contacts');
		}
	};
});
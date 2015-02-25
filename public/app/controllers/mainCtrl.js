angular.module('mainCtrl', [])

    //GLOBAL Main Controller (accessible on all partial views)
    //in use: <body ng-app="meanApp" ng-controller="mainController as main">
    //reference: {{ main.message }}

    .controller('mainController', function() {
        // bind this to vm (view-model)
        var vm = this;


        // DEFINE VARIABLES & OBJECTS - lets them be available to our views
        vm.message = "this message is from the mainController";

        //get active page
        vm.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    })


    //NAVIGATION Controller
    //in use: <div id="navbar" class="collapse navbar-collapse navbar-right" ng-controller="navController as nav">
    //reference: {{ nav.isActive('/contact') }}

	.controller('navController', function($location) {
		// bind this to vm (view-model)
		var vm = this;

        //get active page
        vm.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    })


	.controller('playersController', function() {
		// bind this to vm (view-model)
		var vm = this;


		// DEFINE VARIABLES & OBJECTS - lets them be available to our views

		// basic message
		vm.message = 'player list from [mainCtrl] playersController';

		// define a list of items
		vm.playerslist = [
			{ name: 'Wayne Gretzky', hand: 'Left', jerseynumber: 99 },
			{ name: 'Derek Stepan', hand: 'Right', jerseynumber: 21 },
			{ name: 'Brian Leetch', hand: 'Left', jerseynumber: 2 },
			{ name: 'Mark Messier', hand: 'Left', jerseynumber: 11 }
		];

		// information that comes from our form
		vm.playersFormData = {};

		vm.addPlayer = function() {

			// add a computer to the list
			vm.playerslist.push({
				name: vm.playersFormData.name,
                hand: vm.playersFormData.hand,
                jerseynumber: vm.playersFormData.jerseynumber
			});

			// after our computer has been added, clear the form
			vm.playersFormData = {};


		};

	});
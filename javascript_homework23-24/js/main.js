requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
            exports: 'tmpl'
        }
	}
});

require (
	[
		'model',
		'view',
		'controller',
		'jquery'
	],
	function(Model, View, Controller, $) {
	    var firstToDoList = ['Learn JavaScript', 'Learn HTML', 'Learn AngularJS','Learn Grunt', 'Learn Gulp' ];
	    var model = new Model(firstToDoList);
	    var view = new View(model);
	    var controller = new Controller(model, view);
	}
);	
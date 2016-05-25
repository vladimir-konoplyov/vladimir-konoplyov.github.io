//MVC

//Model

function Model(data) {
	var self = this;
	self.data = data;

	self.addItem = function (item) {
		if (item.length === 0) {
			return;
		}
		self.data.push(item);
		return self.data;
	};

	self.removeItem = function (item) {
		var index = self.data.indexOf(item);
		if (index === -1) {
			return;
		}
		self.data.splice(index, 1);
		return self.data;
	};

	self.chooseItem = function(index) {				
		indexOfActive = index;
	};

	self.changeItem = function(changedItem){			
		if (changedItem.length === 0) {
			return;
		}
	self.data[self.indexOfActive] = changedItem;
	};

}

//View

function View(model) {
	var self = this;
	function init() {
		var wrapper = tmpl($('#wrapper-temlate').html());
		$('body').append(wrapper);

		$('div.instructions').append($('<p class="instructions__text">Instructions:</p>'));
		$('div.instructions').append($('<p class="instructions__text">1. If you want to add new item, select input field, then enter item name and press button "Add"</p>'));
		$('div.instructions').append($('<p class="instructions__text">2. If you want to remove  item, press button "Remove"</p>'));
		$('div.instructions').append($('<p class="instructions__text">3. If you want to change  item, press button "Change", then change item name on input field and press button "Confirm changes"</p>'));

		self.elements = {
			input: $('.item-value'),
			addBtn: $('.item-add'),
			listContainer: $('.item-list'),
			changeBtn: $('.item-confirm')
		};
		self.renderList(model.data);
	};

	self.renderList = function(data) {
		var list = tmpl($('#list-temlate').html(), {data: data});

		self.elements.listContainer.html(list);
	};

	self.renderChoosenItem = function(indexOfActive) {
		$('.list li:nth-of-type('+(+indexOfActive+1)+')');
	};

	self.renderInputItem=function(data,index){
		if(data[index]+""=='undefined')return;
		self.elements.input.val(data[index]+"");
	};

	init();
	
}

//Controller

function Controller(model, view) {
	var self = this;

	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.item-delete', removeItem);
	view.elements.listContainer.on('click','.list-item',chooseItem);
	view.elements.changeBtn.on('click',changeItem);

	function addItem() {
		var newItem = view.elements.input.val();
		model.addItem(newItem);
		$('.item-confirm').css('color', 'grey');
		view.renderList(model.data);
		view.elements.input.val('');
	}

	function removeItem() {
		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);
	}

	function chooseItem() {
		var index = $(this).attr('data-index');
		model.indexOfActive = index;
		$('.item-confirm').css('color', 'red');
		view.renderChoosenItem(model.indexOfActive);
		view.renderInputItem(model.data,model.indexOfActive);  
	}


	function changeItem(index) {
        var changedItem = view.elements.input.val();
        model.changeItem(changedItem);
        $('.item-confirm').css('color', 'grey');
        view.renderList(model.data);
	    view.elements.input.val('');
	}
				
}


$(function() {
	var firstToDoList = ['Learn JavaScript', 'Learn HTML', 'Learn AngularJS','Learn Grunt', 'Learn Gulp' ];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});
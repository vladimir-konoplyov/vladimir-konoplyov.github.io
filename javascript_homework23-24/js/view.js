define(
    'view',
    ['jquery', 'tmpl'],
        function() {

            return function View(model) {
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
            };
        }
);
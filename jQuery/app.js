var tasks = [];
var btn_add = $('#add');
var btn_reset = $('#reset');
var task_list = $('#task_list');
var input = $('#task');

btn_reset.click(function(){
    tasks = [];
    task_list.html('');
    input.val('');
});

btn_add.click(function(){
    
    if( input.val() == '' ){
        alert('Please enter a task');
        return false;
    }
    
    var input_task = input.val().toLowerCase();
    
    if( tasks.indexOf(input_task) >= 0 ){

        alert('Task already exist');
        
    } else {

        var $html = '';
    
        tasks.push(input_task);
    
        for( var i = 0; i < tasks.length; i++ ){
            $html += '<li class="list-group-item">'+ tasks[i] +'</li>';
        }
    
        task_list.html($html);
    }

    input.val('');
});
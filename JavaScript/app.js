var tasks = [];
var btn_add = document.getElementById('add');
var btn_reset = document.getElementById('reset');
var task_list = document.getElementById('task_list');
var input = document.getElementById('task');

btn_reset.onclick = function(){
    tasks = [];
    task_list.innerHTML = '';
    input.value = '';
}

btn_add.onclick = function(){
    
    var input_task = input.value.toLowerCase();
    var $html = '';

    tasks.push(input_task);

    for( var i = 0; i < tasks.length; i++ ){
        $html += '<li class="list-group-item">'+ tasks[i] +'</li>';
    }

    task_list.innerHTML = $html;
    input.value = '';
}
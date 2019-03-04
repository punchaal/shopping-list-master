$(function addItem(){
    $('#js-shopping-list-form').submit(event => {
        //stop the default form submission behaviour
        event.preventDefault();
        const toAdd= $('#shopping-list-entry').val();
        $('.shopping-list').prepend(`<li>
        <span class="shopping-item">${toAdd}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    });
});

$(function checkItem(){
    $('ul').on('click','.shopping-item-toggle',function(){
        $(this).closest("li").find(".shopping-item").toggleClass('shopping-item__checked'); 
    });
});

$(function deleteItem(){
    $('ul').on('click','.shopping-item-delete',function(){
        $(this).closest("li").remove();
    });
});


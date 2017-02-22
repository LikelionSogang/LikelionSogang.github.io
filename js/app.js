var sections = Array.from(document.querySelectorAll('body > section')).slice(1,4);


var findSpan = function(context) {
  var span_list = Array.prototype.slice.call(context.querySelectorAll('.highlight-green span'));
  return span_list;
};
sections.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    var items = findSpan(this);
    items.forEach(function(item){
      item.setAttribute('class', 'on');
    });
  });
  item.addEventListener('mouseleave', function() {
    var items = findSpan(this);
    items.forEach(function(item){
      item.setAttribute('class', '');
    });
  });
});
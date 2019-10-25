var _list = document.getElementById('list')
var _lists = _list.getElementsByTagName('li')
var _experience = document.getElementsByClassName('experience')
var _content = _experience[0].getElementsByClassName('content')
var _slider = _content[0].getElementsByClassName('slider')
var _nav = document.getElementsByClassName('nav')
var _nav_list = _nav[0].getElementsByTagName('ul')
var _nav_lists = _nav_list[0].getElementsByTagName('li')
var _wxcode = document.getElementById('wxcode')
var _qqcode = document.getElementById('qqcode')
for (var i = 0;i < _lists.length;i++){
    _lists[i].myindex = i;
    _lists[i].onclick = function(){
        for(var k = 0;k < _slider.length;k++){
            _slider[k].style.display = 'none';
            _lists[k].className = 'item';
            _slider[k].className = 'slider';
        }
        _slider[this.myindex].style.display = 'block';
        _slider[this.myindex].className = 'slider show';
        _lists[this.myindex].className = '-selected item';
    }
}
for(var i = 0;i < _nav_lists.length;i++){
    _nav_lists[i].myindex = i;
    _nav_lists[i].onmouseover = function(){
        _nav_lists[this.myindex].children[0].style.display = 'block';
    }
    _nav_lists[i].onmouseout = function(){
        _nav_lists[this.myindex].children[0].style.display = 'none';
    }
}
_wxcode.onmouseover = function(){
    this.children[1].style.display = 'block'
}
_wxcode.onmouseout = function(){
    this.children[1].style.display = 'none'
}
_qqcode.onmouseover = function(){
    this.children[1].style.display = 'block'
}
_qqcode.onmouseout = function(){
    this.children[1].style.display = 'none'
}



 


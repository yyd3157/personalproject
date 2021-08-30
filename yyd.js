function moveForm() {
    location.href = 'yyd1.html'
}

function moveForm1() {
    location.href = 'yyd.html'
}

function save() {
    if (!confirm('저장하시겠습니까?')) {
      return;
    }
    var contents;
      try {
        contents = JSON.parse(localStorage.getItem("contents"));
      } catch (e) {
        contents = null;
      }

    if (!contents) {
      contents = [];
    }

    var title = document.getElementById('title').value;
    var weather = document.getElementById('weather').value;
    var content = document.getElementById('contents').value;
    var date = document.getElementById('date').value;
    contents.push({no:contents.length+1
      , title:title
      , weather:weather
      , contents:content
      , date:date});
    localStorage.setItem("contents", JSON.stringify(contents));

    alert('저장되었습니다.');
    location.href = 'yyd1.html';
  }

 
  
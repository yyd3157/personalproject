function moveForm() {
    location.href = 'yyd1.html'
}

function moveForm1() {
    location.href = 'yyd.html'
}

var contentList = JSON.parse(localStorage.getItem("contents"));

  drawRows();

  
  function drawRows() {
    var templates = '';
    var body = document.getElementById('rows');

    for (var i=contentList.length-1; 0<=i; i--) {
      var content  = contentList[i];
      console.log(content);
      templates += '<tr onclick="moveView('+i+')">';
      templates += '<td style="text-align:center">'+content.no+'</td>';
      templates += '<td>'+content.title+'</td>';
      templates += '<td style="text-align:center">'+content.date+'</td>';
      templates += '</tr>';
    }

    body.innerHTML = templates;
  }

  function moveView(contentNo) {
    location.href = 'yyd3.html?no='+(contentNo+1);
  }

  function leftPad(value) { if (value >= 10) { return value; } return `0${value}`; } function toStringByFormatting(source, delimiter = '-') { const year = source.getFullYear(); const month = leftPad(source.getMonth() + 1); const day = leftPad(source.getDate()); return [year, month, day].join(delimiter); }
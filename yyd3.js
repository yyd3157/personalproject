var contents = JSON.parse(localStorage.getItem("contents"));
  getContents();
  function getContents() {

    if (!contents) {
      contents = [];
    }
    
    var content = contents[getParameterByName('no')-1];
    document.getElementById('title').innerText = content.title;
    document.getElementById('weather').innerText = content.weather;
    document.getElementById('contents').innerText = content.contents;
    document.getElementById('date').innerText = content.date;
  }

  function removeContent() {
    console.log(contents);
    contents.splice(getParameterByName('no')-1, getParameterByName('no'));
    localStorage.setItem("contents", JSON.stringify(contents));
    window.history.back()
  }

  function getParameterByName(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }
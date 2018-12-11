function refresh(){

    var editorText = document.getElementById('editor-text').value;
    document.getElementById('output').srcdoc = editorText;
}
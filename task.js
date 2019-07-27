'use strict';

let textArea = document.getElementById( 'editor' );
let clear = document.getElementById( 'clear' );

if ( localStorage.textEditor ) {
  textArea.value = localStorage.textEditor;
}

function inputText( event ) {
  event.preventDefault();
  localStorage.textEditor = textArea.value;
}

function clearText( event ) {
  event.preventDefault();
  localStorage.clear();
  textArea.value = '';
}

textArea.addEventListener( 'input', inputText );
clear.addEventListener( 'click', clearText );

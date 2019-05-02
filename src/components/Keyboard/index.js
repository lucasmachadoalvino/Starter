import React, { Component } from 'react';
import IconBackspace from '../../assets/img/keyboard-ic-backspace.png';
import IconEnter from '../../assets/img/keyboard-ic-enter.png';
import IconClear from '../../assets/img/keyboard-ic-clear.png';
import {
  KeyboardContainer,
  KeyboardInput,
  KeyboardContent,
  KeyboardNum,
  KeyboardActions,
  KeyboarButton,
} from './style';

document.addEventListener('keydown', function(e) {
	let characters = String.fromCharCode(e.which);
	if((/[0-9, a-i, `, ]/.test(characters))) {
			document.getElementById("input").focus();
	} else if((!/[0-9]/.test(characters))) {
  	e.preventDefault();
  }
});

class Keyboard extends Component {
  render() {
    return (
      <KeyboardContainer>
        <KeyboardInput placeholder="Código de Produto" id="input" />
        <KeyboardContent>
          <KeyboardNum>
            <KeyboarButton data-value="7" />
            <KeyboarButton data-value="8" />
            <KeyboarButton data-value="9" />
            <KeyboarButton data-value="4" />
            <KeyboarButton data-value="5" />
            <KeyboarButton data-value="6" />
            <KeyboarButton data-value="1" />
            <KeyboarButton data-value="2" />
            <KeyboarButton data-value="3" />
            <KeyboarButton data-value="0" />
            <KeyboarButton data-value="00" />
            <KeyboarButton data-value="," />
          </KeyboardNum>
          <KeyboardActions>
            <KeyboarButton actions>
              <img src={IconBackspace} alt="" />
            </KeyboarButton>
            <KeyboarButton actions>
              <img src={IconClear} alt="" />
            </KeyboarButton>
            <KeyboarButton actions enter>
              <img src={IconEnter} alt="" />
            </KeyboarButton>
          </KeyboardActions>
        </KeyboardContent>
      </KeyboardContainer>
    );
  }
}

export default Keyboard;

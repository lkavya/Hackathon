/* Password validation rules:
    * Letters & numbers & only these symbols !@#$&*
    * Must have at least 1 letter, 1 number and 1 of the above symbols
    * Can't have 3 consecutive numbers in accending order, example 123 or 890
*/
var MyInput = class extends HTMLElement {
  constructor() {
    super();

    const template1 = document.getElementById('my-input');
    const templateContent = template1.content;
    var mi = document.createElement("input");
    mi.type= "text";
    mi.value = "default";
    template1.appendChild(mi);
    const template2 = document.getElementById('my-input');
    const template2Content = template2.content;
  
    this.el = this.attachShadow({mode: 'open'});
    this.el.appendChild(templateContent.cloneNode(true));
   // this.el.appendChild(template2Content.cloneNode(true));
    this.inputEl = this.el.querySelector('#input');
  }

  connectedCallback() {
    this.el.querySelector('#input').addEventListener('keyup', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const isValid = this.validate();
    if (!isValid) {
      if (this.el.querySelector('[name=validation-type]:checked').value === 'number') {
        this.inputEl.setCustomValidity('Only numbers');
      } else if(this.el.querySelector('[name=validation-type]:checked').value === 'letter') {
        this.inputEl.setCustomValidity('Only letters');
      }
      else{
        this.inputEl.setCustomValidity('invalid');


      }
      this.inputEl.reportValidity();
    } else {
      this.inputEl.setCustomValidity('');
      this.inputEl.reportValidity();
    }
  }

  validate() {
    if (this.el.querySelector('[name=validation-type]:checked').value === 'number') {
      if (/[^0-9]/.test(this.inputEl.value)) return false;
    } else if(this.el.querySelector('[name=validation-type]:checked').value === 'letter') {
      if (/[^a-zA-Z]/.test(this.inputEl.value)) return false;
    }
    else{
      let re='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$';
      if(!(re.match(this.inputEl.value))) {
      return false;
    }
      
    }
    return true;
  }
}
customElements.define('my-input', MyInput);
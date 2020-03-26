/* Password validation rules:
    * Letters & numbers & only these symbols !@#$&*
    * Must have at least 1 letter, 1 number and 1 of the above symbols
    * Can't have 3 consecutive numbers in accending order, example 123 or 890
*/
var MyInput = class extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('my-input');
    const templateContent = template.content;
   //query through dom 
    var inputDiv=templateContent.querySelectorAll("DIV");
    var labels=inputDiv[1].querySelectorAll('label');
    //clone  label element and replace text with password
    var labelPasscln=labels[0].cloneNode(true);
    labelPasscln.innerHtml='password';
    inputDiv[1].appendChild(labelPasscln);

    //clone input box with all labels and remove not needed 
      for(var index=0;index<inputDiv.length;index++){
        let divClone=inputDiv[index].cloneNode(true);
        templateContent.appendChild(divClone);
      }
    this.el = this.attachShadow({mode: 'open'});
    
    this.el.appendChild(templateContent.cloneNode(true));
  
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
        //error check for password 
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
      //Password matching
      let re='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$';
      if(!(re.match(this.inputEl.value))) {
      return false;
    }
      
    }
    return true;
  }
}
customElements.define('my-input', MyInput);
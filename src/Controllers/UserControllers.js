//Aqui vai as Regras de negócio
class UserControllers {
  constructor(formId) {
    
    this.form = document.getElementById(formId);//classe generica
    this.onSubmit();
  }

  onSubmit() {
    this.form.addEventListener("submit", (e) =>{
      e.preventDefault();//Para o comportamento padrão do HTML
      this.getValues();
    })
  }

  message(user){
    console.log(user)
  }

  validation(element){
     //Validação
      //indexOf diz qual a posição do elemento
      if(["name", "email", "phone", "password"].indexOf(element.name) > -1 && !element.value){
        element.classList.remove("success")
        element.classList.add("error")
        return false;
      } else {
        element.classList.remove("error")
        element.classList.add("success")
      }
  }

  getValues() {
    let user = {};
    let isvalid = true;

    //Spreads: transforma elementos HTML em arrays
    [...this.form.elements].forEach((element, index) => {

      isvalid = this.validation(element)
      //Verificação se o elemento(campo) tem name, se não tiver ele não entra no Json
      if(element.name){
      user[element.name] = element.value
      }
    })
    if(!isvalid){
      return false;
    }

    let object = new User(user.name, user.email, user.phone, user.password);

    this.message(object)
  }
}
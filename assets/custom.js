let OptionSize = document.querySelector("[name='options[Size]']");
if(OptionSize) {
  document.addEventListener("DOMContentLoaded", function() {
      var form__submit_btn = document.getElementsByClassName("product-form__submit"); 
      for (var i = 0; i < form__submit_btn.length; i++) { 
          form__submit_btn[i].disabled = true;
      }
  });
}
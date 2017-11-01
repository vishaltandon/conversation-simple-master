function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "x" && form.pswrd.value == "x")
  {
    window.open('content.html');
  }
 else
 {
   alert("Looks like you entered the wrong Username/Password.")/*displays error message*/
  }
}

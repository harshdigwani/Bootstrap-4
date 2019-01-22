function validate(){
  var mobile = document.getElementById('mobile').value;
  var password = document.getElementById('password').value;



   if(isNaN(mobile)||mobile.indexOf(" ")!=-1)
   {
      alert("Enter numeric value")
      return false;
   }
   if (mobile.length!=10)
   {
        alert("enter 10 digit number");
        return false;
   }
   if (mobile.charAt(0)!='7' && mobile.charAt(0)!='9' && mobile.charAt(0)!='8')
   {
        alert("it should start with 9 or 8 or 7");
        return false;
   }
  if(password.length<=8)
  {
    alert("Please Enter strong password");
     return false;
   }
}


function signupValidate(){
  var signupPassword = document.getElementById('signupPassword').value;
  var signupEmail = document.getElementById('signupEmail').value;
  var signupMobile = document.getElementById('signupMobile').value;
  var signupName = document.getElementById('signupName').value;

  var testEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var letters = /^([A-Za-z])+$/;


  if(isNaN(signupMobile)||signupMobile.indexOf(" ")!=-1)
  {
     alert("Enter numeric value")
     return false;
  }
  if(signupMobile.length!=10)
  {
       alert("enter 10 digit number");
       return false;
  }
  if(signupMobile.charAt(0)!='7' && signupMobile.charAt(0)!='9' && signupMobile.charAt(0)!='8')
  {
       alert("it should start with 9 or 8 or 7");
       return false;
  }
  if(signupPassword.length<=8)
  {
   alert("Please Enter strong password");
    return false;
  }

  if (testEmail.test(signupEmail) == false)
  {
  alert('Invalid Email Address');
    return (false);
  }

  if(signupName.length<3 || signupName==null)
  {
    alert("Name can not be empty");
    return false;
  }
  if(letters.test(signupName) == false)
  {
    alert("Please enter correct name");
    return false;
  }
}

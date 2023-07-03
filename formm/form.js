

function valids() {
  let n = document.getElementById("ns").value;
  let p = /^[a-zA-z]+$/;
  let c1=false,c2=false,c3=false,c4 = false,c5 =false, c6 =false, c7 =false, c8 =false;

  if (n == "") {
    document.getElementById("er").innerHTML = "please enter your name";
  } else if (!p.test(n)) {
    document.getElementById("er").innerHTML = "please enter valid name";
  } else {
    document.getElementById("er").innerHTML = "";
    c1=true
  }

  let k = document.getElementById("em").value;
  let q =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (k == "") {
    document.getElementById("ee").innerHTML = "please enter your Email";
  } else if (!q.test(k)) {
    document.getElementById("ee").innerHTML = "Your Email id not valid";
  } else {
    document.getElementById("ee").innerHTML = "";
    c2=true
  }

  let pass = document.getElementById("pw").value;
  let rule = /^[A-Za-z]\w{7,14}$/;

  if (pass == "") {
    document.getElementById("pe").innerHTML = "password is required";
  } else if (!rule.test(pass)) {
    document.getElementById("pe").innerHTML =
      "The password should be atleast 7 characters ";
  } else {
    document.getElementById("pe").innerHTML = "";
    c3=true
  }

  let phone = document.getElementById("pn").value;
  let must =  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (phone == "") {
    document.getElementById("ne").innerHTML = "Mobile number is required";
  } else if (!must.test(phone)) {
    document.getElementById("ne").innerHTML =
      "The mobile number is not valid ";
  } else {
    document.getElementById("ne").innerHTML = "";
    c4=true
}

let ck = document.getElementById("cntry").value;
  

  if (ck == "") {
    document.getElementById("cn").innerHTML = "Please select an option!";
  } else {
    document.getElementById("cn").innerHTML = "";
    c5=true
}

let lg = document.getElementById("language").value;
  

  if (lg == "") {
    document.getElementById("ln").innerHTML = "Please select an option!";
  } else {
    document.getElementById("ln").innerHTML = "";
    c6=true
    
}

let gn = document.getElementById("gender");
  

  if (gn.checked) {
    document.getElementById("ge").innerHTML = "";
    c7=true
  } else {
    document.getElementById("ge").innerHTML = "Please select an option!";
    
}

let ts = document.getElementById("checkbox");
  

  if (ts.checked) {
    document.getElementById("te").innerHTML = "";
     c8 =true
  } else {
    document.getElementById("te").innerHTML = "You must agree to the Terms";
   
}
if((c1 === true) && (c2 === true) && (c3 === true) && (c4 === true) &&  (c5 === true) && (c6 === true) && (c7 === true)  && (c8 === true)){

  alert("your response has been submitted");
}

let array = [];

array.push({names: n});
array[0]['email'] = k;
console.log(array)
}


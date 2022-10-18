<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 18.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 18.0px Helvetica; min-height: 22.0px}
  </style>
</head>
<body>
<p class="p1">// Select all input elements for verification</p>
<p class="p1">const userName = document.getElementById("name");</p>
<p class="p1">const email = document.getElementById("email");</p>
<p class="p1">const password = document.getElementById("password");</p>
<p class="p1">const phoneNumber = document.getElementById("phoneNumber");</p>
<p class="p1">const gender = document.registration;</p>
<p class="p1">const language = document.getElementById("language");</p>
<p class="p1">const zipcode = document.getElementById("zipcode");</p>
<p class="p2"><br></p>
<p class="p1">// function for form verification</p>
<p class="p1">function formValidation() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>// checking length of name</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (userName.value.length &lt; 2 || userName.value.length &gt; 20) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Name length should be more than 2 and less than 21 character”);</p>
<p class="p1"><span class="Apple-converted-space">    </span>userName.focus();</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>// checking email format</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Please enter a valid email!");</p>
<p class="p1"><span class="Apple-converted-space">    </span>email.focus();</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>// checking password character pattern</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");</p>
<p class="p1"><span class="Apple-converted-space">    </span>password.focus();</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>// checking phone number</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Phone number must be 10 characters long number and first digit can't be 0!");</p>
<p class="p1"><span class="Apple-converted-space">    </span>phoneNumber.focus();</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>// checking gender</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (gender.gender.value === "") {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Please select your gender!");</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>// checking language</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (language.value === "") {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Please select your language!")</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>// checking zip code</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (!zipcode.value.match(/^[0-9]{6}$/)) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Zip code must be 6 characters long number!");</p>
<p class="p1"><span class="Apple-converted-space">    </span>zipcode.focus();</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>return true;</p>
<p class="p1">}</p>
</body>
</html>

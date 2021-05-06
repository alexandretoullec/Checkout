//********************** */ Incrementation********************

function up(max) {
    document.getElementById("myNumber").value =
      parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
      document.getElementById("myNumber").value = max;
    }
  }
  function down(min) {
    document.getElementById("myNumber").value =
      parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
      document.getElementById("myNumber").value = min;
    }
  }

  function up2(max) {
    document.getElementById("myNumber2").value =
      parseInt(document.getElementById("myNumber2").value) + 1;
    if (document.getElementById("myNumber2").value >= parseInt(max)) {
      document.getElementById("myNumber2").value = max;
    }
  }
  function down2(min) {
    document.getElementById("myNumber2").value =
      parseInt(document.getElementById("myNumber2").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
      document.getElementById("myNumber2").value = min;
    }
  }

  //********************** */ form validation********************

  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["phone"].value;
    var a = document.forms["myForm"]["adress"].value;
    var b = document.forms["myForm"]["city"].value;
    var c = document.forms["myForm"]["postal"].value;

    if (x == "" || y =="" || z =="" || a =="" || b =="" || c =="") {
      alert("Oops your forgot to fill something!!!");
      return false;
    }else{
        alert("great!! you can now proceed to the payment")
    }
  }
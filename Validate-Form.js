$(document).ready(function () {
     
    jQuery.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[a-z A-Z]+$/.test(value);
      },
      "Letters only please"
    );
    jQuery.validator.addMethod(
      "minlength5",
      function (value, element) {
        return this.optional(element) || (value.trim().length >= 5);
      },
      "Minimum 5 characters without space"
    );
    $(".contact-forms").validate({
      rules: {
          name: {
            required: true,
          minlength5: true,
          lettersonly: true,
          minlength: 4,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
            required: true,
          minlength5: true,
          minlength: 10,
          maxlength: 200,
        },
      },
      messages: {
        name: {
          minlength: "Please Enter Your Full Name",
        },
        email: {
          email: "Please enter a valid Email id",
        },
        message: {
          minlength: "Its too short! minimum 10 characters",
          maxlength: "Oh no! it's too large",
        },
      },
      submitHandler: function (form) {
        submit();
      },
    });
  });
  function submit() {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxt2alaLDhJfS6iANzDD65xfPZ715ZpGgibEzlpovsb5elQsamUTabeCGK1qjAd7SXhmQ/exec",
      data: $(".contact-forms").serialize(),
      method: "POST",
      success: function (response) {
        let options = {
          closeButton: true,
          debug: false,
          newestOnTop: false,
          progressBar: true,
          positionClass: "toast-top-center",
          preventDuplicates: false,
          showDuration: "300",
          hideDuration: "1000",
          timeOut: "3000",
          extendedTimeOut: "1000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut",
          onHidden: function () {
            document.getElementById('connectName').value = null
            document.getElementById('connectEmail').value = null
            document.getElementById('connectMessage').value = null
          
          },
        };

        toastr.success("Message Sent", "Success", options);
     
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  }
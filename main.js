document.addEventListener("DOMContentLoaded", function () {
  const fullInput = document.getElementById("first");

  const errorMessage = document.getElementById("error");

  fullInput.addEventListener("input", function () {
    if (fullInput.value.trim() === "") {
      errorMessage.classList.add("required");
    } else {
      errorMessage.style.visibility = "hidden";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fullInput = document.getElementById("last");

  const errorMessage = document.getElementById("error2");

  fullInput.addEventListener("input", function () {
    if (fullInput.value.trim() === "") {
      errorMessage.classList.add("required");
    } else {
      errorMessage.style.visibility = "hidden";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fullInput = document.getElementById("mail");

  const errorMessage = document.getElementById("error-mail");

  fullInput.addEventListener("input", function () {
    if (fullInput.value.trim() === "") {
      errorMessage.classList.add("required");
    } else {
      errorMessage.style.visibility = "hidden";
    }
  });
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fullInput = document.getElementById("option1");

  const errorMessage = document.getElementById("errorMessage");

  fullInput.addEventListener("change", function () {
    if (fullInput.checked) {
      errorMessage.style.visibility = "hidden";
    } else {
      errorMessage.classList.add("required");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fullInput = document.getElementById("option2");

  const errorMessage = document.getElementById("errorMessage");

  fullInput.addEventListener("change", function () {
    if (fullInput.checked) {
      errorMessage.style.visibility = "hidden";
    } else {
      errorMessage.classList.add("required");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fullInput = document.getElementById("mess");

  const errorMessage = document.getElementById("errorMess");

  fullInput.addEventListener("input", function () {
    if (fullInput.value.trim() === "") {
      errorMessage.classList.add("required");
    } else {
      errorMessage.style.visibility = "hidden";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fullInput = document.getElementById("check");

  const errorMessage = document.getElementById("errorConfirm");

  fullInput.addEventListener("input", function () {
    if (fullInput.checked) {
      errorMessage.style.visibility = "hidden";
    } else {
      errorMessage.classList.add("required");
    }
  });
});

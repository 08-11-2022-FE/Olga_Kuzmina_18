function menuFunction() {
    var x = document.getElementById("header-menu");
    if (x.classList.contains("header__menu_hidden")) {
      x.classList.add("header__menu_visible");
      x.classList.remove("header__menu_hidden");
    } else {
      x.classList.add("header__menu_hidden");
      x.classList.remove("header__menu_visible");
    }
  }

  function searchFunction() {
    var x = document.getElementById("search");
    if (x.classList.contains("header__search_hidden")) {
      x.classList.add("header__search_visible");
      x.classList.remove("header__search_hidden");
    } else {
      x.classList.add("header__search_hidden");
      x.classList.remove("header__search_visible");
    }
  }
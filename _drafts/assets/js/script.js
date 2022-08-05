// optimize js to https://closure-compiler.appspot.com/home

    const cookieBox = document.querySelector(".cookie_wrapper"),
    acceptBtn = cookieBox.querySelector("button");

    acceptBtn.onclick = ()=>{
      //setting cookie for 1 month, after one month it'll be expired automatically
      document.cookie = "CookieBy=Nicoxygen; max-age="+60*60*24*30;
      if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide"); //hide cookie box
      }else{ //if cookie not set then alert an error
        alert("Le cookie ne peut pas être défini ! Veuillez débloquer ce site de la configuration des cookies de votre navigateur.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=Nicoxygen"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

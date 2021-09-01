CookieClicker = {
  start: function () {
    let contador = 0;
    this.clickInterval = setInterval(function () {
      const cookie = document.getElementById("bigCookie");
      cookie.click();
      contador++;
      console.log(
        `eu já cliquei ${contador} vezes no cookie, e sigo farmando cookies automaticamente pra você!`
      );
    }, 1);
  },
  stop: function () {
    clearInterval(this.clickInterval);
    console.log(
      "tá bom, vou parar de farmar cookies automaticamente pra você... jogue sério agora!"
    );
  },
};

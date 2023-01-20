class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="footercontent">
        <div class="footerinfos"> <h3 class="soustitres"> <span style="color: var(--bleu);"> CLUB</span> AUTO</h3> <p class="corpstexte"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga ducimus ab assumenda explicabo repudiandae animi accusamus quaerat aliquid rem! </p> 
        </div>
        <div class="footerinfos"><h3 class="soustitres">HORAIRES D'OUVERTURE</h3> <p class="corpstexte">Lundi - Samedi : 9h00 - 17h00<br>Dimanche et jours fériés : fermé</p> 
        </div>
        <div class="footerinfos"> <h3 class="soustitres">NEWSLETTER</h3>
            <div class="wrap">
                <div class="search">
                   <input type="text" class="searchTerm" placeholder="Entrez votre e-mail">
                   <button type="submit" class="searchButton">
                     <i class="fa-sharp fa-solid fa-rss"></i>
                  </button>
                </div>
            </div>
            <p class="corpstexte" style="font-weight: lighter; color: grey;">Inscrivez-vous pour recevoir les dernières offres</p>
        </div>
        <div class="footerinfos">
            <h3 class="soustitres">RESEAUX SOCIAUX</h3>
            <img src="images/004-facebook.png" alt="">
            <img src="images/001-twitter.png" alt="">
            <img src="images/003-instagram.png" alt="">
            <img src="images/005-google-plus.png" alt="">
            <img src="images/002-youtube.png" alt="">
        </div>
    </div>
    <hr class="footerseparator">
    <p class="corpstexte copyright">Copyright &#169; Club Auto - Tous droits réservés</p>
</footer>
      `;
  }
}

customElements.define("footer-component", Footer);

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!----------------------------MENU RESPONSIVE---------------------->
    <nav class="responsive-nav">
        <a class="pull" href="#"></a>
        <div class="responsive-menu">
          <ul class="clearfix">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="vente.html">Vente</a></li>
            <li><a href="location.html">Location</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    <!----------------------------END MENU RESPONSIVE---------------------->
    <!----------------------------HEADER ET MENU ---------------------->
    <div class="infos">
        <div class="nom">CLUB AUTO</div>
        <div class="adresse">
            <img src="images/icone-adresse.png" alt="icone localisation" style="width: 40px; height: 38px; margin-right: 10px;">
            <div>
                <span id="infostitre">ADRESSE :</span><br> avenue Charles de Gaulle<br>75000Paris
            </div>
        </div>
        <div class="tel">
            <img src="images/icon-telephone.png" alt="icone localisation" style="width: 40px; height: 38px; margin-right: 10px;">
            <div> 
                <span id="infostitre">TELEPHONE :</span><br> <span style="font-weight: bold;"> 01 23 45 67 89</span>
            </div>
        </div>
        <div class="horaire">
            <div> 
                <span id="infostitre">OUVERTURE :</span> <span style="font-weight: bold;">Du lundi au samedi<br> </span>
                <span id="infostitre">HORAIRES :</span> <span style="font-weight: bold;">De 9h à 17h</span>
            </div>
        </div>
        <div class="social">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
        </div>
        
    </div>
    
    <nav class="menu">
        <a href="contact.html">CONTACT</a>
        <a href="location.html">LOCATION</a>
        <a href="vente.html">VENTE</a>
        <a href="index.html">ACCUEIL</a>
    </nav>
    
    <div class="bannierecontact"></div>
    
    </header>
    
    <!----------------------------END HEADER ET MENU---------------------->
    `;
  }
}

customElements.define("header-component", Header);

class Joujou {
    constructor(nom, poid, prix, volume, estemballé, dest) {
        this.nom = nom;
        this.poid = poid;
        this.prix = prix;
        this.volume = volume;
        this.estemballé = estemballé;
        this.dest = dest
    }

    toString() {    
        return `Nom: ${this.nom}, Poids: ${this.poix}, Prix: ${this.prix}, Volume: ${this.volume}, Est emballé: ${this.estemballé}`;
    }

    emballe(){
        this.estemballé = true;
    }
}


class Hotte {
    constructor(vol_max, poid_max) {
        this.Joujoux = {};
        this.vol_max = vol_max;
        this.poid_max = poid_max;
    }

    toString() {
        return `Hotte: Volume Max: ${this.vol_max}, Poids Max: ${this.poid_max}, Joujoux: ${this.Joujoux.map(j => j.toString()).join('; ')}`;
    }

    get poidsContenu() {
        return this.Joujoux.reduce((total, joujou) => total + joujou.poid, 0);
    }

    get volumeContenu() {
        return this.Joujoux.reduce((total, joujou) => total + joujou.volume, 0);
    }

    sontEmballés() {
        return this.Joujoux.every(joujou => joujou.estemballé);
    }

    emballeTout() {
        this.Joujoux.forEach(joujou => joujou.emballe());
    }

    ajouteJoujou(joujou) {
        if (this.poidsContenu + joujou.poid <= this.poid_max && this.volumeContenu + joujou.volume <= this.vol_max) {
            this.Joujoux.push(joujou);
            return true;
        }
        return false;
    }

    chercheJoujoux(dest) {
        return this.Joujoux.filter(joujou => joujou.dest === dest);
    }

    retireJoujoux(dest) {
        this.Joujoux = this.Joujoux.filter(joujou => joujou.dest !== dest);
    }
}



document.getElementById('joujouForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const poid = parseFloat(document.getElementById('poid').value);
    const prix = parseFloat(document.getElementById('prix').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const estemballé = document.getElementById('estemballé').checked;
    const dest = document.getElementById('dest').value;

    const joujou = new Joujou(nom, poid, prix, volume, estemballé, dest);

    const hotte = new Hotte(100, 100); // Example values for vol_max and poid_max
    if (hotte.ajouteJoujou(joujou)) {
        console.log('Joujou ajouté à la hotte:', joujou);
    } else {
        console.log('Impossible d\'ajouter le joujou à la hotte. Poids ou volume dépassé.');
    }
});
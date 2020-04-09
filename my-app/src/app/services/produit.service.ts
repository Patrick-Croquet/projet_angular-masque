export class ProduitService{
    produits = [
        {
          cod: "001",
          nom: "Masque N95 lot * 24",
          prix: 50,
          stock: 2,
          ajoute: false
        },
        {
          cod: "002",
          nom: "Masque N95 lot * 50",
          prix: 100,
          stock: 4,
          ajoute: false
        },
        {
          cod: "003",
          nom: "Masque N95 lot * 100",
          prix: 150,
          stock: 5,
          ajoute: false
        }
    ];
    produitsPanier = [];
    remplirPanier(produitCod, produitNom, produitPrix) {
        let i =this.produitsPanier.length;
        let existe = false;
        if (i==0) {
            this.produitsPanier[0] = { cod:  produitCod,
                                       nom:  produitNom,
                                       prix: produitPrix,
                                       cant: 1};
        } else {
            for ( let j = 0; j < i; j++ ){
                if (this.produitsPanier[j].cod == produitCod) {
                    this.produitsPanier[j].cant+=1;
                    existe = true;
                } 
            }
            if (!existe) {
                this.produitsPanier[i] = { cod:  produitCod,
                                           nom:  produitNom,
                                           prix: produitPrix,
                                           cant: 1
                                         };
            }
        };   
    };
}
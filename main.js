const select = document.getElementById('select')
const titre = document.getElementById('titre')
const theme = document.getElementById('theme')
const cards = document.querySelectorAll('.card')
const dates = document.querySelectorAll('.date')
const elements = document.querySelectorAll('.ajouter_element')
const m_module = document.getElementById('m_module')
const m_enseignant = document.getElementById('m_enseignant')
const m_salle = document.getElementById('m_salle')
const m_classe = document.getElementById('m_classe')
const m_debut = document.getElementById('m_debut')
const m_fin = document.getElementById('m_fin')
var m_jour;
var last = "";
var jour_ajouté;
var nouveau;
var classe = {};
const rechercher = document.getElementById('rechercher')
const module = document.getElementById('module')
const donnees_brute = {
    enseignants: [
        {
            id: 1,
            nom: 'Mbaye',
            modules: [1, 3]
        },
        {
            id: 2,
            nom: 'Aly',
            modules: [2, 3]
        },
        {
            id: 3,
            nom: 'Djiby',
            modules: [2, 4]
        },
        {
            id: 4,
            nom: 'Ndiaye',
            modules: [1, 4]
        }

    ],
    salles: [
        {
            id: 1,
            nom: '101',
            places: 30
        },
        {
            id: 2,
            nom: '102',
            places: 50
        },
        {
            id: 3,
            nom: '104',
            places: 100
        },
        {
            id: 4,
            nom: '202',
            places: 150
        }


    ],
    classes: [
        {
            id: 1,
            nom: 'L1',
            effectif: 30
        },
        {
            id: 2,
            nom: 'M2',
            effectif: 50
        },
        {
            id: 3,
            nom: 'L3',
            effectif: 100
        },

    ],
    modules: [
        {
            id: 1,
            nom: 'Algo'
        },
        {
            id: 2,
            nom: 'Python'
        },
        {
            id: 3,
            nom: 'PHP'
        },
        {
            id: 4,
            nom: 'HTML / CSS'
        }

    ],
    cours: {

        lundi: [
            {
                id: 1,
                enseignants: 'Sarr',
                modules: 'Python',
                salles: '404',
                classes: 'L1',
                debut: 14,
                fin: 16,
                decalage: 0
            },
            {
                id: 2,
                enseignants: 'Aly',
                modules: 'Python',
                salles: '201',
                classes: 'L3',
                debut: 8,
                fin: 10,
                decalage: 0

            }
        ],

        mardi: [
            {
                id: 1,
                enseignants: 'Aly',
                modules: 'HTML / CSS',
                salles: '101',
                classes: 'L1',
                debut: 16,
                fin: 17,
                decalage: 0

            },
            {
                id: 2,
                enseignants: 'Ndiaye',
                modules: 'PHP',
                salles: '201',
                classes: 'm1',
                debut: 10,
                fin: 12,
                decalage: 0

            }
        ],
        mercredi: [



        ],
        jeudi: [
            {
                id: 1,
                enseignants: 'Mbaye',
                modules: 'JavaScrit',
                salles: '101',
                classes: 'M2',
                debut: 12,
                fin: 16,
                decalage: 0

            },
            {
                id: 2,
                enseignants: 'Aly',
                modules: 'PHP',
                salles: '201',
                classes: 'L1',
                debut: 16,
                fin: 17,
                decalage: 0

            }
        ],
        vendredi: [],
        samedi: [],
    }

}
if (localStorage.length == 0) {
    localStorage.setItem('donnee', JSON.stringify(donnees_brute))
}
//localStorage.clear()
const setValeur=()=>{
    var données = JSON.parse(localStorage.getItem('donnee'))
    document.getElementById('n_ens').textContent=données.enseignants.length
    document.getElementById('n_sa').textContent=données.salles.length
    document.getElementById('n_cl').textContent=données.classes.length
    document.getElementById('n_md').textContent=données.modules.length
}
const setCours=()=>{
    
    document.getElementById('n_cours').textContent=document.querySelectorAll('.cours').length
}
setValeur();
setCours();
theme.addEventListener('change', () => {
    if (theme.checked == true) {
        document.querySelector('.planner').style.backgroundColor = 'rgb(183, 195, 205)'

        document.querySelectorAll('.card').forEach(item => {
            item.style.backgroundColor = 'rgb(219, 224, 229)'
        })
        document.querySelector('.content_p').style.backgroundColor = 'rgb(240,175,177)'
        document.querySelector('.content_p').style.color = '#000'
        document.querySelector('input[type="text"]').style.backgroundColor = 'rgb(208,220,223)'
        document.querySelector('input[type="text"]').style.color = '#000'
        document.querySelectorAll('.titre').forEach(item => {
            item.style.color = '#000'
        })
        document.querySelectorAll('.nbre').forEach(item => {
            item.style.color = '#000'
        })
        document.querySelector('header h2').style.color = '#000'
        document.querySelector('.entete ').style.backgroundColor = 'rgb(183,195,205)'
        document.querySelectorAll('.date').forEach(item => {
            item.style.backgroundColor = 'rgb(238,154,159)'
        })
        document.querySelectorAll('.edt').forEach(item => {
            item.style.backgroundColor = 'rgb(183,195,205)'
        })
    }
    else {
        document.querySelector('.planner').style.backgroundColor = 'rgb(63,61,62)'
        document.querySelectorAll('.card').forEach(item => {
            item.style.backgroundColor = 'rgb(154,154,154)'
        })
        document.querySelector('.content_p').style.backgroundColor = 'rgb(35, 33, 34)'
        document.querySelector('.content_p').style.color = 'white'
        document.querySelector('input[type="text"]').style.backgroundColor = 'rgb(102, 100, 101)'
        document.querySelector('input[type="text"]').style.color = 'white'
        document.querySelectorAll('.titre').forEach(item => {
            item.style.color = 'white'
        })
        document.querySelectorAll('.nbre').forEach(item => {
            item.style.color = 'white'
        })
        document.querySelector('header h2').style.color = 'white'
        document.querySelector('.entete ').style.backgroundColor = 'rgb(64, 62, 63)'
        document.querySelectorAll('.date').forEach(item => {
            item.style.backgroundColor = 'rgb(35, 33, 34)'
        })
        document.querySelectorAll('.edt').forEach(item => {
            item.style.backgroundColor = 'rgb(93, 105, 103)'
        })
    }
})

cards.forEach(card => {
    card.addEventListener('click', () => {
        document.getElementById('n_cours').textContent='0'
        if (last !== "") {
            document.getElementById(last).style.backgroundColor = 'rgb(154,154,154)'

        }
        var id = card.id
        var color = card.firstElementChild.firstElementChild.style.backgroundColor
        select.innerHTML = ""
        ajouterSelect(id)
        card.style.backgroundColor = color
        last = card.id
        supprimer_element()
    })

});

dates.forEach(date => {
    var bouton = date.lastElementChild
    bouton.addEventListener('click', () => {
        document.getElementById('n_cours').textContent='0'
        if (Object.keys(classe).length === 0) {
            alert('Selectionner une classe')
        }
        else {

            supprimer_element()
            document.getElementById('erreur').textContent = ''
            m_jour = bouton.id
            toggle_modale()
        }
    })
})

elements.forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation()
        nouveau = element.parentNode.parentNode.id
        toggle_modale2()
    })
})

document.getElementById('annuler2').addEventListener('click', () => {
    toggle_modale2()
})

select.addEventListener('change', () => {
    var données = JSON.parse(localStorage.getItem('donnee'))
    if (last === 'classes') {
        classe.id = select.options[select.selectedIndex].id
        classe.valeur = select.value
    }
    titre.textContent = select.value
    supprimer_element()
    for (const jours in données.cours) {
        var fin = 8
        var liste_jours = données.cours[jours];

        liste_jours.sort((a, b) => (a.debut > b.debut ? 1 : -1))

        liste_jours.forEach(jour => {
            if (jour[last] === select.value) {
                jour.decalage = jour.debut - fin
                var carte = creerCours(jour)
                document.getElementById(jours).appendChild(carte)
                fin = jour.fin
            }

        })
    }
    setCours();
})

const creerCours = (cours) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    var div = document.createElement('div')
    var i = document.createElement('i')
    var span1 = document.createElement('span')
    var span2 = document.createElement('span')
    var span3 = document.createElement('span')
    var longueur = cours.fin - cours.debut
    div.id = cours.id
    div.className = "col-sm-" + longueur + " offset-sm-" + cours.decalage + "  cours "
    div.style.backgroundColor='#'+randomColor
    span1.id = "enseignants"
    span1.textContent = cours.enseignants
    span2.id = "modules"
    span2.textContent = cours.modules
    span3.id = "salles"
    span3.textContent = cours.salles
    i.className = "fa fa-times"
    div.appendChild(i)
    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    div.addEventListener('mouseover', () => {
        div.firstElementChild.style.display = 'flex'
    })
    div.addEventListener('mouseout', () => {
        div.firstElementChild.style.display = 'none'
    })
    i.addEventListener('click', () => {
        supprimerCours(i.parentNode.id, i.parentNode.parentNode.id)
    })
    return div

}
const ajouterSelect = (id) => {
    var données = JSON.parse(localStorage.getItem('donnee'))
    var selectionDefaut = document.createElement('option')
    selectionDefaut.setAttribute('selected', '')
    selectionDefaut.value = id
    selectionDefaut.textContent = id
    select.appendChild(selectionDefaut)
    données[id].forEach(item => {
        var selectionDefaut = document.createElement('option')
        selectionDefaut.value = item.nom
        selectionDefaut.textContent = item.nom
        selectionDefaut.id = item.id
        select.appendChild(selectionDefaut)
    })

}

const ajouterCheckbox = () => {
    var données = JSON.parse(localStorage.getItem('donnee'))
    données.modules.forEach(item => {
        var check = document.createElement('input')
        check.type = "checkbox"
        check.id = item.id
        var p = document.createElement('span')
        p.textContent = item.nom
        document.getElementById('module_ens').appendChild(check)
        document.getElementById('module_ens').appendChild(p)
        document.getElementById('module_ens').appendChild(document.createElement('br'))
    })

}
function afficherAjout() {
    var données = JSON.parse(localStorage.getItem('donnee'))
    var jour = données.cours[m_jour].filter(item => item.id === jour_ajouté)
    jour[0].decalage = jour[0].debut - 8
    var carte = creerCours(jour[0])
    document.getElementById(m_jour).appendChild(carte)


}

rechercher.addEventListener("keyup", () => {
    var données = JSON.parse(localStorage.getItem('donnee'))
    select.textContent = ""
    if (rechercher.value === "") {
        document.getElementById('suggestion').innerHTML = ''
        module.style.display = 'block'
    }
    else {
        document.getElementById('suggestion').innerHTML = ''
        var suggestions = getAllItemes()
        for (var i = 0; i < suggestions.length; i++) {
            if (autocomplete(rechercher.value, suggestions[i].valeur)) {
                var li = document.createElement('li');
                li.textContent = suggestions[i].valeur;
                li.value = suggestions[i].valeur;
                li.id = suggestions[i].id;
                document.getElementById('suggestion').appendChild(li)
            }

        }

        module.style.display = 'none'
    }

    document.querySelectorAll('li').forEach(element => {
        element.addEventListener('click', () => {
            rechercher.value = element.value
            document.getElementById('suggestion').innerHTML = ''
            module.style.display = 'block'
            last = element.id
            console.log(element);
            ajouterSelect(element.id);
            rechercher.value = element.textContent
            titre.textContent = element.textContent
            select.value = element.textContent
            supprimer_element()
            for (const jours in données.cours) {
                var fin = 8
                var liste_jours = données.cours[jours];

                liste_jours.sort((a, b) => (a.debut > b.debut ? 1 : -1))

                liste_jours.forEach(jour => {
                    if (jour[last] === select.value) {
                        jour.decalage = jour.debut - fin
                        var carte = creerCours(jour)
                        document.getElementById(jours).appendChild(carte)
                        fin = jour.fin
                    }

                })
            }

        })
    })
})

const supprimer_element = () => {
    var cours = document.querySelectorAll('.cours')
    cours.forEach(cours => {
        cours.remove()
    })
}

function toggle_modale() {
    var données = JSON.parse(localStorage.getItem('donnee'))
    m_module.innerHTML = ''
    m_enseignant.innerHTML = ''
    m_salle.innerHTML = ''
    const modale = document.querySelector(".modale");
    données['modules'].forEach(item => {
        var selectionDefaut = document.createElement('option')
        selectionDefaut.value = item.nom
        selectionDefaut.textContent = item.nom
        selectionDefaut.id = item.id
        m_module.appendChild(selectionDefaut)

    })
    données['enseignants'].forEach(item => {
        var selectionDefaut = document.createElement('option')
        selectionDefaut.value = item.nom
        selectionDefaut.textContent = item.nom
        selectionDefaut.id = item.id
        m_enseignant.appendChild(selectionDefaut)
    })
    données['salles'].forEach(item => {
        var selectionDefaut = document.createElement('option')
        selectionDefaut.value = item.nom
        selectionDefaut.textContent = item.nom
        selectionDefaut.id = item.id
        m_salle.appendChild(selectionDefaut)
    })
    modale.style.display = modale.style.display == "block" ? "none" : "block";
}

function toggle_modale2() {
    document.getElementById('valeur_ajouter').value = ''
    const modale2 = document.querySelector(".modale2");
    if (nouveau == 'enseignants') {
        document.getElementById('module_ens').innerHTML = ''
        document.getElementById("m_ens").style.display = 'block'
        ajouterCheckbox()
    } else {
        document.getElementById("m_ens").style.display = 'none'
    }
    if (nouveau == 'salles') {
        document.getElementById('nbre_places').value = 0
        document.getElementById("m_sa").style.display = 'flex'
        ajouterCheckbox()
    } else {
        document.getElementById("m_sa").style.display = 'none'
    }
    if (nouveau == 'classes') {
        document.getElementById('effectifs').value = 0
        document.getElementById("m_cl").style.display = 'flex'
        ajouterCheckbox()
    } else {
        document.getElementById("m_cl").style.display = 'none'
    }
    modale2.style.display = modale2.style.display == "block" ? "none" : "block";
}

function ajouterElement() {
    var données = JSON.parse(localStorage.getItem('donnee'))
    document.getElementById('erreur2').innerHTML = ''
    var ischeck = false
    var tab_module = []
    var valeur = document.getElementById('valeur_ajouter')
    if (nouveau == 'enseignants') {
        var checkbox = document.querySelectorAll('#module_ens > input')
        checkbox.forEach(check => {
            if (check.checked == true) {
                ischeck = true
                tab_module.push(parseInt(check.id))
            }
        })
        if (!ischeck) {

            document.getElementById('erreur2').innerHTML = 'Sectionnez au moins un module !<br>'
            return false
        }
        else {
            var ajout = {
                id: données[nouveau].length + 1,
                nom: valeur.value,
                modules: tab_module
            }
        }
    }
    if (nouveau == 'classes') {
        var effectif = document.getElementById('effectifs')
        console.log(effectif.value)
        if (effectif.value == 0) {
            document.getElementById('erreur2').innerHTML = 'L\'effectif ne doit pas etre null!<br>'
            return false
        }
        else {
            var ajout = {
                id: données[nouveau].length + 1,
                nom: valeur.value,
                effectif: parseInt(effectif.value)
            }
        }
    }
    if (nouveau == 'salles') {
        var places = document.getElementById('nbre_places')

        if (places.value == 0) {
            document.getElementById('erreur2').innerHTML = 'Le nombre ne doit pas etre null!<br>'
            return false
        }
        else {
            var ajout = {
                id: données[nouveau].length + 1,
                nom: valeur.value,
                places: parseInt(places.value)
            }
        }
    }
    if (nouveau == 'modules') {
        var ajout = {
            id: données[nouveau].length + 1,
            nom: valeur.value
        }
    }

    données[nouveau].push(ajout)
    localStorage.setItem('donnee', JSON.stringify(données))
    setValeur();
    return true

}
document.getElementById('annuler').addEventListener('click', () => {
    document.getElementById('erreur').textContent = ''
    toggle_modale()

})

document.getElementById('envoyer').addEventListener('click', () => {
    if (ajouterCours()) {
        toggle_modale()

        afficherAjout(m_jour);
        setCours();

    }

})

function ajouterCours() {
    var données = JSON.parse(localStorage.getItem('donnee'))
    isCorrecte = true
    document.getElementById('erreur').innerHTML = ''
    var id_module = parseInt(m_module.options[m_module.selectedIndex].id)
    var id_enseignant = parseInt(m_enseignant.options[m_enseignant.selectedIndex].id)
    var id_classe = parseInt(classe.id)
    var id_salle = parseInt(m_salle.options[m_salle.selectedIndex].id)
    var debut = parseInt(m_debut.value)
    var fin = parseInt(m_fin.value)
    if (!verifierModule(id_enseignant, id_module)) {
        document.getElementById('erreur').innerHTML += 'Le module selectionné est incompatible avec l\'enseingnant<br>'
        isCorrecte = false
    }
    if (!verifierPlaces(id_classe, id_salle)) {
        document.getElementById('erreur').innerHTML += 'La salle choisie ne contient pas assez de places.<br>'
        isCorrecte = false
    }
    if (!disponibilitéSalle(m_salle.value, m_jour, parseInt(m_debut.value), parseInt(m_fin.value))) {
        document.getElementById('erreur').innerHTML += 'La salle choisie est indisponible! <br>'
        isCorrecte = false
    }
    if (!disponibilitéProf(m_enseignant.value, m_jour, parseInt(m_debut.value), parseInt(m_fin.value))) {
        document.getElementById('erreur').innerHTML += 'L\'enseingnant est indisponible! <br>'
        isCorrecte = false
    }
    if (!disponibilitéClasse(classe.valeur, m_jour, parseInt(m_debut.value), parseInt(m_fin.value))) {
        document.getElementById('erreur').innerHTML += 'La classe a été déja programmée pour le créneau horaire <br>'
        isCorrecte = false
    }
    if (isCorrecte) {
        let ajout = {
            id: données["cours"][m_jour].length + 1,
            enseignants: m_enseignant.value,
            modules: m_module.value,
            salles: m_salle.value,
            classes: classe.valeur,
            debut: parseInt(m_debut.value),
            fin: parseInt(m_fin.value),
            decalage: 0
        }
        jour_ajouté = données["cours"][m_jour].length + 1
        données["cours"][m_jour].push(ajout)
        localStorage.setItem('donnee', JSON.stringify(données))
        
        return true
    }
    else {
        return false
    }

}

function supprimerCours(id, jour) {
    var données = JSON.parse(localStorage.getItem('donnee'))
    données["cours"][jour] = données["cours"][jour].filter(item => item.id !== parseInt(id))
    localStorage.setItem('donnee', JSON.stringify(données))
    var données = JSON.parse(localStorage.getItem('donnee'))
    supprimer_element()
    for (const jours in données.cours) {
        var fin = 8
        var liste_jours = données.cours[jours];

        liste_jours.sort((a, b) => (a.debut > b.debut ? 1 : -1))

        liste_jours.forEach(jour => {
            if (jour[last] === select.value) {
                jour.decalage = jour.debut - fin
                var carte = creerCours(jour)
                document.getElementById(jours).appendChild(carte)
                fin = jour.fin
            }

        })
    }
    setCours();
}

document.getElementById('envoyer2').addEventListener('click', () => {
    if (ajouterElement()) {
        toggle_modale2()
    }


})


function getAllItemes() {
    var données = JSON.parse(localStorage.getItem('donnee'))
    const tab = [];
    for (const element in données) {
        console.log(element)
        if (element !== "cours") {
            données[element].forEach(item => {
                if (item.nom) {
                    let obj = {
                        id: element,
                        valeur: item.nom
                    }
                    tab.push(obj)
                }
            })
        }
    }
    return tab

}

function autocomplete(mot, patern) {
    var isMatch = true
    for (i = 0; i < mot.length; i++) {

        if (mot[i].substr(0, patern.length).toUpperCase() == patern[i].substr(0, patern.length).toUpperCase()) {
            continue;
        }
        else {
            isMatch = false;
            break;
        }


    }
    return isMatch
}

function verifierModule(id_enseignant, id_module) {
    var données = JSON.parse(localStorage.getItem('donnee'))
    isVerified = false
    var tab = données.enseignants.filter(item => item.id === id_enseignant)
    for (let index = 0; index < tab[0].modules.length; index++) {
        if (tab[0].modules[index] === id_module) {
            isVerified = true
        }
    }
    return isVerified
}

function verifierPlaces(id_classe, id_salle) {
    var données = JSON.parse(localStorage.getItem('donnee'))
    isVerified = false
    var salle = données.salles.filter(item => item.id === id_salle)
    var classe = données.classes.filter(item => item.id === id_classe)
    if (salle[0].places >= classe[0].effectif) {
        isVerified = true
    }
    return isVerified
}

function disponibilitéSalle(salle, jour, debut, fin) {
    var données = JSON.parse(localStorage.getItem('donnee'))
    isVerified = true
    if (debut >= fin) {
        isVerified = false
    }
    var liste = données.cours[jour].filter(item => item.salles === salle)
    liste.forEach(item => {

        if (item.debut === debut || item.fin === fin) {
            isVerified = false
        }
        if (debut === fin) {
            isVerified = false
        }
        if ((debut < item.fin && debut > item.debut) || (fin > item.debut && fin < item.fin)) {

            isVerified = false
        }
        if (item.debut < debut && item.fin > fin) {

            isVerified = false
        }


    })
    return isVerified

}

function disponibilitéProf(enseignant, jour, debut, fin) {
    var données = JSON.parse(localStorage.getItem('donnee'))
    isVerified = true
    if (debut >= fin) {
        isVerified = false
    }
    var liste = données.cours[jour].filter(item => item.enseignants === enseignant)
    liste.forEach(item => {

        if (item.debut === debut || item.fin === fin) {
            isVerified = false
        }
        if (debut === fin) {
            isVerified = false
        }
        if ((debut < item.fin && debut > item.debut) || (fin > item.debut && fin < item.fin)) {

            isVerified = false
        }
        if (item.debut < debut && item.fin > fin) {

            isVerified = false
        }


    })
    return isVerified

}
function disponibilitéClasse(classe, jour, debut, fin) {
    var données = JSON.parse(localStorage.getItem('donnee'))
    isVerified = true
    if (debut >= fin) {
        isVerified = false
    }
    var liste = données.cours[jour].filter(item => item.classes === classe)
    liste.forEach(item => {

        if (item.debut === debut || item.fin === fin) {
            isVerified = false
        }
        if (debut === fin) {
            isVerified = false
        }
        if ((debut < item.fin && debut > item.debut) || (fin > item.debut && fin < item.fin)) {

            isVerified = false
        }
        if (item.debut < debut && item.fin > fin) {

            isVerified = false
        }


    })
    return isVerified

}

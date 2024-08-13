const app = {
    init: function() {
        // On place un écouteur d'évènement sur le formulaire au niveau du bouton de soumission.
        // La soumission exécute la méthode handleSubmit.
        // querySelector permet de cibler une balise, un id ou une classe.
        const form = document.querySelector('form');
        form.addEventListener('submit', app.handleSubmit);
        form.addEventListener('reset', app.handleReset);
    },

    handleSubmit: function(event) {
        // Par défaut, quand un formulaire est soumis, le navigateur envoie une requête HTTP au serveur. Lorsque le serveur reçoit la réponse, il recharge la page et ne nous permet pas de voir le résultat. On bloque ce comportement avec :
        event.preventDefault();

        // On récupère les valeurs saisies dans les champs du formulaire et on les stocke dans des variables pour les réutiliser. "value.trim" permet de supprimer les espaces avant et après les informations saisies dans les champs.
        const lastname = document.querySelector('#lastname').value.trim();
        const firstname = document.querySelector('#firstname').value.trim();
        let age = document.querySelector('#age').value.trim();

         // On efface les anciens messages d'erreur
        app.clearErrors();

        // Validation des champs vides
        let isValid = true;

    if (!lastname) {
        app.showError('lastname', 'Le champ "Nom" ne peut pas être vide');
        isValid = false;
    }

    if (!firstname) {
        app.showError('firstname', 'Le champ "Prénom" ne peut pas être vide');
        isValid = false;
    }

    if (!age) {
        app.showError('age', 'Le champ "Âge" ne peut pas être vide');
        isValid = false;
    } else {
        // On vérifie si l'âge est un nombre valide
        age = Number(age);
        if (isNaN(age) || age <= 0) {
            app.showError('age', 'Le champ "Âge" doit être un nombre valide');
            isValid = false;
        }
    }

    // Si le formulaire n'est pas valide, on arrête l'exécution ici
    if (!isValid) {
        return;
    }
        
        // On définit les textes à afficher dans le 1er champ de la partie réponse : prénom et nom du candidat. 
        // On concatène les 2 variables dont on a besoin.
        const nameToDisplay = firstname + ' ' + lastname;
        
        // On affiche une message différent selon l'âge du candidat. 
        // On a besoin de créer une fonction qui déterminera le message retourné.

        // Les chiffres saisis dans un formulaire sont toujours enregistrés en string, il faut les convertir en nombre grâce à la fonction native Number de JS.
        age = Number(age);

        // On utilise la méthode canSubscribe qui nous renvoie le message en fonction de l'âge.
        const message = app.canSubscribe(age);


        //On va ensuite modifier le DOM pour fournir la réponse au candidat.

        // On commence par sélectionner les éléments de la page qui viennent recevoir le résultat et remplacer le -
        let nameContainer = document.querySelector('.name-answer');
        let messageContainer = document.querySelector('.authorization-answer');

        // Puis on modifie leur contenu avec innerText.
        nameContainer.innerText = nameToDisplay;
        messageContainer.innerText = message;
    },

    showError: function(fieldId, message) {
        // On crée un élément <div> pour afficher le message d'erreur
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
    
        // On insère l'erreur juste après le champ concerné
        const field = document.querySelector('#' + fieldId);
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    },
    
    clearErrors: function() {
        // Supprime tous les éléments avec la classe "error-message"
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(function(error) {
            error.remove();
        });
    },

    // Cette méthode retourne un message d'autorisation selon l'âge qu'on lui passe en argument :

    canSubscribe: function(age) {
        // On va comparer l'âge reçu pour savoir si l'utilisateur peut s'inscrire.
        // Si l'utilisateur a moins de 16 ans, il est trop jeune. 
        // On stocke le message qu'on va lui afficher :
        let message = '';

        if(age < 16) {
            let yearsWaiting = 16 - age; 
            // On calcule le nombre d'année(s) avant d'avoir 16 ans et on renvoie un message personnalisé :
            message = "Trop jeune pour s'inscrire : prends le bus ! Reviens dans " + yearsWaiting + " an" + (yearsWaiting > 1 ? "s" : "") + " pour la conduite accompagnée.";
        }
        // Si l'utilisateur a plus de 16 ans, la première condition n'est pas validée. On tente alors la seconde condition :
        else if (age < 18) {
            message = "Inscription possible mais en conduite accompagnée";
        }
        // Si l'utilisateur a plus de 70 ans, on peut renvoyer un message bienveillant :
        else if (age >= 70) {
            message = "Inscription possible, mais il serait peut être utile de faire vérifier votre vue et vos réflexes avant de conduire ?";
        }
        // Si l'utilisateur ne rempli aucune de ces 2 conditions, il peut s'inscrire. On peut donc utiliser "else" car tous les autres âges vont correspondre.
        else {
            message = "Youhoo ! Inscription possible";
        }

        // On retourne le message pour l'afficher dans la section de droite : 
        return message;
    },

    // On remet à blanc les champs à soumettre pour une autre demande.
    handleReset: function() {
         // On sélectionne les éléments de la page qui affiche le résultat.
        let nameContainer = document.querySelector('.name-answer');
        let messageContainer = document.querySelector('.authorization-answer');

         // Puis on modifie leur contenu avec innerText pour les remettre à blanc.
        nameContainer.innerText = " - ";
        messageContainer.innerText = " - ";
    }
}

document.addEventListener('DOMContentLoaded', app.init);
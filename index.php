<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Permis de conduire</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans@1&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <!-- Affichage du formulaire -->
        <main>
            <h1>Inscription au permis de conduire</h1>
            <form action="" method="GET">
                <label for="lastname">Nom</label>
                <input type="text" name="lastname" id="lastname">
                <label for="firstname">Prénom</label>
                <input type="text" name="firstname" id="firstname">
                <label for="age">Âge</label>
                <input type="number" name="age" id="age">
                <input type="submit" value="Je m'inscris">
                <input type="reset" value="Nouvelle demande">
            </form>
        </main>
        <!-- Affichage de la réponse au formulaire envoyé -->
        <aside>
            <h2>Résumé de l'inscription</h2>
            <h3>Inscription de :</h3>
            <div class="name-answer answer">
                -
            </div>
            <h3>Autorisation :</h3>
            <div class="authorization-answer answer">
                -
            </div>
        </aside>
        <!-- Chargement du script JS qui va s'appliquer à la page -->
        <script src="js/app.js"></script>
    </body>
</html>

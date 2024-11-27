/* Niveau de difficulté : Très difficile
Contexte :

Vous travaillez pour une entreprise de commerce en ligne. Lorsqu'un client passe une commande, plusieurs processus doivent être effectués, comme :

    - Vérifier la disponibilité des produits dans l'inventaire. ( sachant qu'il y a 80% de chance que le produit soit disponible et que la requête met une a deux seconde de traitement)
    - Valider le paiement. ( 90% de chance de réussite à chaque paiement, 1 à 2 seconde de traitement)
    - Gérer la livraison en vérifiant les options disponibles. Il y a trois options disponibles (express, standard ou à la maison, elles ont chacune 50% de chance de réussite.). Si une des options de livraison est ok vous pouvez continuer la commande 

Ces tâches doivent être traitées en parallèle, mais vous devez vous assurer que si l'un des processus échoue, vous gérez correctement l'erreur sans affecter les autres processus. De plus, si une tâche parmi les options de livraison échoue, vous devez tout de même procéder si au moins une option de livraison est valide. */

processOrder(1); // Pour tester avec l'ID 1
processOrder(2); // Pour tester avec l'ID 2

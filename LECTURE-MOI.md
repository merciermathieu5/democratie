# Stratège — Gouverner Athènes au nom du peuple

Jeu sérieux pour le premier cycle du secondaire (Histoire et éducation à la
citoyenneté, 1ʳᵉ secondaire). Réalité sociale : **« Une première expérience de
démocratie »** (Athènes, 5ᵉ siècle av. J.-C.).

Le joueur dirige Athènes et prend des décisions qui font (ou défont) la
démocratie. Même mécanique que *Legatus* — mais le sens politique est **inversé** :
dans Legatus, le pouvoir vient d'en haut (l'empereur peut te rappeler) ; ici, il
vient **d'en bas** (le peuple peut te chasser du pouvoir).

> **⚠️ Tranche I-II seulement.** Cette version contient **8 décisions en 2 actes** :
> la naissance de la démocratie, puis les guerres contre les Perses. Les actes
> III à V (Périclès et l'âge d'or, la guerre du Péloponnèse, la crise et la fin de
> l'hégémonie) **restent à bâtir** une fois cette tranche validée.

## Lancer le jeu

Double-clique `index.html` — aucun serveur requis, fonctionne hors-ligne.

## Les quatre jauges

- **Démocratie** — *ta mission* : donner le pouvoir au peuple (le contraire de
  l'oligarchie). À surveiller : si elle reste trop basse, les familles riches
  reprennent le contrôle (fin « retour de l'oligarchie »).
- **Paix sociale** — l'entente entre les habitants de la cité. À 0, la cité se
  déchire (révolte, guerre civile).
- **Soutien du peuple** — la confiance des citoyens en toi. À 0, le peuple te
  chasse du pouvoir.
- **Trésor de la cité** — l'argent (la flotte, la guerre, les chantiers). Le
  revenu par tour s'affiche en drachmes (« dr. »).

Comme dans Legatus, **l'option qui fait le plus avancer une jauge coûte presque
toujours ailleurs**. On ne maximise pas tout : la maîtrise, c'est l'équilibre.

## Les deux actes (8 décisions)

**Acte I — Donner le pouvoir au peuple** : les dettes des paysans (Solon) · qui
peut voter · la réforme de Clisthène · l'assemblée du peuple (l'ecclésia).

**Acte II — Affronter les Perses** : Marathon (Darius) · construire une flotte de
trières (Thémistocle) · Salamine (Xerxès) · fonder la Ligue de Délos.

Entre les deux actes, un **intermède** marque l'arrivée des Perses, et le peuple
fait un premier bilan de tes progrès démocratiques.

## Deux documents à confronter

Avant chaque décision, l'élève lit **deux documents** : un point de vue, puis un
autre. Ils sont inspirés du **corpus HEC** de la réalité sociale et du site
muniverssocial.ca.

> **Sources :** les textes sont des **adaptations de classe** rédigées en mots
> simples pour des élèves de 12-13 ans — **et non des citations exactes**.
> À **vérifier et ajuster** avant une évaluation. Tout se modifie dans les champs
> `source` (Document 1) et `source2` (Document 2) de chaque étape, dans
> `assets/js/stratege-data.js`.

Un **délai de lecture** (6 s par défaut, réglable via `delaiLecture`) force la
lecture des documents avant d'ouvrir les choix.

## Niveaux et fins

Trois niveaux (**Apprenti / Stratège / Périclès**) règlent le seuil à partir
duquel la cité se déchire. La partie se termine par un **bilan** (trajectoire des
jauges, journal des décisions, points forts, documents négligés) ou par une **fin
d'échec** (la cité se déchire · le retour de l'oligarchie · chassé par le peuple).

## Où ajuster (tout est dans `assets/js/stratege-data.js`)

- `etapes[]` : chaque décision, ses options, leurs `effets` sur les jauges, la
  `consequence` affichée et le **« pourquoi »** historique.
- `bilans`, `echecs`, `difficultes`, `revenu`, `docAlerts` : réglages du jeu.
- Les **effets sur les jauges sont des hypothèses pédagogiques — à valider et
  ajuster selon ton jugement.**

## Personnages et images

Le dossier `outils/gen-grec.py` génère les personnages SVG (6 rôles × 4
expressions) : `python3 gen-grec.py export ../assets/img/perso`. Les vignettes
(carte de la Grèce, l'assemblée, la trière, Marathon, l'alliance) et le décor de
l'agora sont dans `assets/img/`.

## Trame sonore

Le fichier `assets/audio/stratege-trame.mp3` est, **pour l'instant, la trame de
cuivres de Legatus** (placeholder). À remplacer par une pièce grecque (lyre/aulos)
si tu veux ; le lecteur est dans `assets/js/stratege-audio.js`.

## Validation

La tranche a été vérifiée par un harnais jsdom qui joue des parties complètes
(bons choix, choix moyens, mauvais choix) : amorçage, 8 décisions, intermède
d'acte, conséquences, bilan et fins d'échec, sans erreur d'exécution.

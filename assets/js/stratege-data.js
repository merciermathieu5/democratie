/* =========================================================================
   STRATÈGE — Gouverner Athènes au nom du peuple
   TRANCHE I-II (8 décisions) : la naissance de la démocratie, puis les
   guerres contre les Perses. Les actes III à V (Périclès, le Parthénon,
   la guerre du Péloponnèse) restent à bâtir.
   Réalité sociale : « Une première expérience de démocratie » (HEC, 1re sec.).
   Langage volontairement simple (élèves de 12-13 ans). Les textes des
   documents sont des ADAPTATIONS DE CLASSE inspirées du corpus HEC et du
   site muniverssocial.ca — À VÉRIFIER ET AJUSTER avant une évaluation.
   Les effets sur les jauges sont des hypothèses pédagogiques, À AJUSTER.

   Note technique : les identifiants internes des jauges restent
   « romanisation / stabilite / faveur / tresor » (pour réutiliser le moteur),
   mais s'affichent « Démocratie / Paix sociale / Soutien du peuple / Trésor ».
   ========================================================================= */
window.STRATEGE = {
  titre:"Stratège", sousTitre:"Gouverner Athènes au nom du peuple",
  delaiLecture:6,
  etatInitial:{ romanisation:8, stabilite:60, faveur:60, tresor:90 },

  jauges:[
    { id:"romanisation", nom:"Démocratie",       icone:"temple",  type:"pct", couleur:"pourpre" },
    { id:"stabilite",    nom:"Paix sociale",      icone:"bouclier",type:"pct", couleur:"seuil" },
    { id:"faveur",       nom:"Soutien du peuple", icone:"laurier", type:"pct", couleur:"seuil" },
    { id:"tresor",       nom:"Trésor de la cité", icone:"piece",   type:"res", couleur:"bronze" }
  ],

  accueil:{
    titre:"Stratège", sousTitre:"Gouverner Athènes au nom du peuple",
    accroche:"Tu diriges Athènes au 5ᵉ siècle avant notre ère. Vas-tu réussir à donner le pouvoir au peuple — la démocratie — tout en gardant la cité en paix ?",
    commentTitre:"Comment ça marche",
    jaugesAide:[
      { icone:"temple",   nom:"Démocratie",       txt:"ta mission : donner le pouvoir au peuple" },
      { icone:"bouclier", nom:"Paix sociale",     txt:"l'entente entre les habitants de la cité" },
      { icone:"laurier",  nom:"Soutien du peuple",txt:"la confiance des citoyens en toi" },
      { icone:"piece",    nom:"Trésor de la cité",txt:"l'argent : la flotte, la guerre, les chantiers" }
    ],
    etapesAide:[
      "Avant chaque décision, lis les DEUX documents à droite : un point de vue, puis un autre.",
      "Chaque choix fait avancer (ou reculer) la démocratie, la paix dans la cité, le soutien du peuple et l'argent.",
      "8 décisions en 2 actes : la naissance de la démocratie, puis les guerres contre les Perses."
    ],
    pedagoTitre:"Contexte pédagogique",
    pedago:[
      "Histoire et éducation à la citoyenneté, 1ʳᵉ secondaire.",
      "Réalité sociale : « Une première expérience de démocratie » (Athènes, 5ᵉ siècle av. J.-C.)."
    ],
    diffTitre:"Choisis ton niveau pour commencer"
  },

  intro:{
    perso:"conseiller", expr:"neutre", ambiance:"jour", document:"acropole",
    nom:"Démos, ton conseiller", acte:"Acte I : Donner le pouvoir au peuple",
    titre:"Te voilà à la tête d'Athènes",
    texte:"Au début, Athènes est dirigée par quelques familles riches : c'est l'oligarchie, le pouvoir de quelques-uns. Peu à peu, tu vas donner le pouvoir à tous les citoyens. C'est la naissance de la démocratie : le pouvoir du peuple. Avance, une décision à la fois.",
    bouton:"Commencer"
  },

  etapes:[
    /* ============ ACTE I — DONNER LE POUVOIR AU PEUPLE ============ */
    {
      type:"evenement", id:"dettes", acte:"Acte I : Donner le pouvoir au peuple",
      perso:"paysan", expr:"inquiet", ambiance:"jour", nom:"Un paysan d'Athènes", document:"pnyx",
      titre:"Les paysans croulent sous les dettes",
      source:{ texte:"Au début du 6ᵉ siècle avant notre ère, le réformateur Solon interdit de rendre un citoyen esclave parce qu'il a des dettes. Il libère ainsi les paysans pauvres de leur dépendance envers les riches.", ref:"D'après les réformes de Solon (6ᵉ s. av. J.-C.), adaptation de classe" },
      source2:{ texte:"Mais les grandes familles riches prêtent l'argent et possèdent presque toutes les terres. Pour elles, effacer les dettes, c'est perdre leur pouvoir sur les pauvres.", ref:"D'après la situation des aristocrates athéniens, adaptation de classe" },
      contexte:"Stratège, des paysans pauvres sont devenus esclaves parce qu'ils ne pouvaient pas rembourser leurs dettes aux riches. Que fais-tu ?",
      revenuApres:true,
      options:[
        { label:"Interdire de rendre un citoyen esclave pour ses dettes", effets:{ romanisation:9, stabilite:6, faveur:6 },
          consequence:"Les paysans pauvres sont libérés. Le peuple respire et te soutient ; les riches grognent un peu.",
          pourquoi:"En libérant les pauvres, Solon pose une première pierre de la démocratie : tous les citoyens, riches ou pauvres, comptent." },
        { label:"Un compromis : alléger les dettes, sans tout effacer", effets:{ romanisation:4, stabilite:2, faveur:1 },
          consequence:"Tu allèges le fardeau des pauvres sans trop froisser les riches. Un demi-pas.",
          pourquoi:"Un compromis calme la cité, mais avance plus lentement vers l'égalité des citoyens." },
        { label:"Ne rien changer et protéger les riches", effets:{ romanisation:-2, stabilite:-8, faveur:-9 },
          consequence:"Les pauvres restent écrasés par les dettes. La colère monte dans la cité.",
          pourquoi:"Tant que les pauvres dépendent des riches, le pouvoir reste à quelques-uns : pas de démocratie possible." }
      ]
    },
    {
      type:"evenement", id:"vote", acte:"Acte I : Donner le pouvoir au peuple",
      perso:"conseiller", expr:"neutre", ambiance:"jour", nom:"Démos, ton conseiller", document:"pnyx",
      titre:"Qui peut participer aux décisions ?",
      source:{ texte:"À Athènes, on appelle citoyens les hommes libres, nés de parents athéniens, âgés de plus de 18 ans et ayant fait leur service militaire. Eux seuls peuvent participer à la vie politique.", ref:"D'après la définition du citoyen athénien, adaptation de classe" },
      source2:{ texte:"Dans les faits, seuls ceux qui sont assez à l'aise pour quitter leur travail viennent voter. La plupart des citoyens sont des paysans qui peuvent difficilement laisser leurs terres.", ref:"D'après la vie politique à Athènes, adaptation de classe" },
      contexte:"Tu veux que les citoyens décident ensemble. Mais à qui donner ce droit : à tous les citoyens, ou seulement aux plus riches ?",
      revenuApres:true,
      options:[
        { label:"Donner le droit de décider à tous les citoyens, riches comme pauvres", effets:{ romanisation:10, stabilite:1, faveur:5 },
          consequence:"Tous les citoyens peuvent maintenant venir voter. Le peuple gagne du pouvoir.",
          pourquoi:"Donner la parole à tous les citoyens, et pas seulement aux riches, est le cœur de la démocratie athénienne." },
        { label:"Réserver les décisions aux citoyens qui possèdent des terres", effets:{ romanisation:3, stabilite:2, faveur:-2 },
          consequence:"Seuls les propriétaires décident. C'est plus large qu'avant, mais les pauvres restent à l'écart.",
          pourquoi:"Limiter le vote aux propriétaires laisse une partie du peuple sans voix : la démocratie reste incomplète." },
        { label:"Garder les décisions pour les quelques familles riches", effets:{ romanisation:-3, stabilite:-5, faveur:-8 },
          consequence:"Le pouvoir reste aux mains des grandes familles. Le peuple est déçu.",
          pourquoi:"Réserver le pouvoir à quelques familles, c'est l'oligarchie — le contraire de la démocratie." }
      ]
    },
    {
      type:"evenement", id:"clisthene", acte:"Acte I : Donner le pouvoir au peuple",
      perso:"conseiller", expr:"content", ambiance:"jour", nom:"Démos, ton conseiller", document:"pnyx",
      titre:"Mélanger les citoyens (la réforme de Clisthène)",
      source:{ texte:"À la fin du 6ᵉ siècle avant notre ère, Clisthène répartit les citoyens en 10 groupes (des tribus) qui mélangent les habitants de différents quartiers. Riches et pauvres se retrouvent dans le même groupe.", ref:"D'après les réformes de Clisthène (vers 507 av. J.-C.), adaptation de classe" },
      source2:{ texte:"Cette réforme affaiblit le pouvoir des vieilles familles riches. Désormais, tous les citoyens sont égaux devant la loi, qu'ils soient riches ou pauvres.", ref:"D'après l'effet des réformes de Clisthène, adaptation de classe" },
      contexte:"Les grandes familles riches contrôlent des régions entières. Clisthène propose de regrouper les citoyens autrement, en mélangeant les gens des différents quartiers. Qu'en penses-tu ?",
      revenuApres:true,
      options:[
        { label:"Adopter la réforme : mélanger les citoyens, tous égaux devant la loi", effets:{ romanisation:12, stabilite:3, faveur:6 },
          consequence:"Les vieilles familles perdent leur emprise. La démocratie naît vraiment.",
          pourquoi:"En cassant le pouvoir des grandes familles et en rendant les citoyens égaux devant la loi, Clisthène fait naître la démocratie athénienne." },
        { label:"Une version douce, sans trop déranger les familles", effets:{ romanisation:5, stabilite:3, faveur:1 },
          consequence:"Tu changes un peu les choses, mais les grandes familles gardent de l'influence.",
          pourquoi:"Une réforme timide avance moins vite vers l'égalité des citoyens." },
        { label:"Refuser : garder le système des grandes familles", effets:{ romanisation:-4, stabilite:-4, faveur:-7 },
          consequence:"Rien ne change. Les familles riches restent au-dessus des autres.",
          pourquoi:"Sans la réforme de Clisthène, le pouvoir reste à quelques familles : la démocratie ne peut pas naître." }
      ]
    },
    {
      type:"evenement", id:"ecclesia", acte:"Acte I : Donner le pouvoir au peuple",
      perso:"citoyen", expr:"neutre", ambiance:"jour", nom:"Un citoyen à l'assemblée", document:"pnyx",
      titre:"Où se prennent les grandes décisions ?",
      source:{ texte:"L'assemblée du peuple (l'ecclésia) réunit les citoyens. Elle décide de la paix et de la guerre, vote les lois et choisit les chefs de la cité. Les citoyens votent à main levée.", ref:"D'après les institutions politiques d'Athènes, adaptation de classe" },
      source2:{ texte:"Les citoyens jugent aussi les procès dans un grand tribunal (l'Héliée). Les juges y sont tirés au sort, et non choisis selon leur richesse.", ref:"D'après les institutions politiques d'Athènes, adaptation de classe" },
      contexte:"La guerre, la paix, les lois : qui doit décider de tout cela pour Athènes ?",
      revenuApres:true,
      options:[
        { label:"Donner le dernier mot à l'assemblée du peuple", effets:{ romanisation:11, stabilite:2, faveur:7 },
          consequence:"C'est l'assemblée des citoyens qui décide de tout. Le peuple tient vraiment le pouvoir.",
          pourquoi:"Quand l'assemblée du peuple décide elle-même de la guerre, de la paix et des lois, c'est une démocratie directe : les citoyens décident eux-mêmes." },
        { label:"Laisser un petit conseil décider ; l'assemblée approuve ensuite", effets:{ romanisation:4, stabilite:3, faveur:0 },
          consequence:"Un conseil prépare tout ; l'assemblée ne fait qu'approuver. Le peuple a moins de pouvoir réel.",
          pourquoi:"Si un petit groupe décide à la place du peuple, on s'éloigne de la démocratie." },
        { label:"Garder les décisions pour les familles riches, comme avant", effets:{ romanisation:-4, stabilite:-5, faveur:-8 },
          consequence:"Les grandes familles décident encore de tout. Le peuple n'a pas son mot à dire.",
          pourquoi:"Sans assemblée souveraine, le pouvoir reste à quelques-uns : c'est encore l'oligarchie." }
      ]
    },
    /* ============ ACTE II — AFFRONTER LES PERSES ============ */
    {
      type:"evenement", id:"marathon", acte:"Acte II : Affronter les Perses",
      acteIntro:"La démocratie est en marche. Mais au loin, le puissant empire perse prépare une invasion. La cité va devoir se défendre.",
      acteMalus:{ stabilite:-5 }, acteMalusNote:"Les Perses approchent : la peur gagne la cité (paix sociale −5).",
      controleRome:{ seuil:18, rappel:8, malus:6, faveurRappel:12 },
      perso:"stratege", expr:"severe", ambiance:"danger", nom:"Le stratège militaire", document:"marathon",
      titre:"Les Perses débarquent à Marathon",
      source:{ texte:"L'armée du roi perse Darius traverse la mer pour envahir l'Attique, la région d'Athènes. Elle compte des dizaines de milliers de soldats : c'est énorme pour l'époque.", ref:"D'après le récit de l'armée de Darius (490 av. J.-C.), adaptation de classe" },
      source2:{ texte:"Athènes peut compter sur environ 10 000 hoplites : des citoyens-soldats lourdement armés qui combattent côte à côte. Ce sont les citoyens eux-mêmes qui défendent la cité.", ref:"D'après l'armée athénienne, adaptation de classe" },
      contexte:"L'armée du roi perse Darius débarque à Marathon, tout près d'Athènes. Que décides-tu ?",
      revenuApres:true,
      options:[
        { label:"Envoyer les hoplites citoyens affronter les Perses à Marathon", effets:{ romanisation:7, stabilite:6, faveur:9 },
          consequence:"Les citoyens-soldats repoussent les Perses à Marathon. La cité est fière et soudée.",
          pourquoi:"À Marathon, ce sont les citoyens-soldats (hoplites) qui sauvent la cité. Celui qui défend Athènes, c'est aussi celui qui vote : le citoyen." },
        { label:"Attendre derrière les murs, sans risquer la bataille", effets:{ romanisation:0, stabilite:-6, faveur:-6 },
          consequence:"Tu restes prudent, mais les Perses ravagent la campagne. Le peuple te trouve faible.",
          pourquoi:"Ne pas défendre la cité fait douter le peuple : un chef doit protéger Athènes et ses citoyens." },
        { label:"Négocier et se soumettre au roi perse", effets:{ romanisation:-8, stabilite:-4, faveur:-12 },
          consequence:"Tu plies devant les Perses. Athènes perd sa liberté — et la démocratie avec elle.",
          pourquoi:"Se soumettre à un roi étranger, c'est renoncer à la liberté des citoyens, donc à la démocratie." }
      ]
    },
    {
      type:"construction", revenuApres:true, id:"flotte", acte:"Acte II : Affronter les Perses",
      perso:"stratege", expr:"neutre", ambiance:"jour", nom:"Le stratège militaire", document:"trireme",
      titre:"Construire une flotte de navires de guerre",
      source:{ texte:"La cité possède des mines d'argent (à Laurion). Thémistocle propose d'utiliser cet argent pour construire une flotte de navires de guerre, les trières.", ref:"D'après le projet de flotte de Thémistocle, adaptation de classe" },
      source2:{ texte:"Les rameurs de ces navires sont les citoyens les plus pauvres. En devenant indispensables pour défendre la cité, ils prennent de l'importance dans la vie politique.", ref:"D'après le rôle de la flotte athénienne, adaptation de classe" },
      contexte:"Les Perses reviendront, plus nombreux. On vient de trouver beaucoup d'argent dans les mines. Thémistocle propose d'en faire une grande flotte. Mais c'est très cher.",
      options:[
        { label:"Construire une grande flotte de trières", cout:55, effets:{ romanisation:9, stabilite:3, faveur:5 }, persistant:{ tresor:4 }, flag:"flotte",
          consequence:"Athènes devient une grande puissance sur mer. Les pauvres, devenus rameurs, comptent davantage dans la cité.",
          pourquoi:"La flotte, ramée par les plus pauvres, leur donne de l'importance : elle renforce la démocratie et fait d'Athènes une grande puissance." },
        { label:"Construire seulement quelques navires", cout:25, effets:{ romanisation:3, stabilite:1 },
          consequence:"Une petite flotte, prudente. Athènes reste surtout une puissance de terre.",
          pourquoi:"Une flotte modeste protège un peu, mais donne moins de poids aux citoyens pauvres." },
        { label:"Garder l'argent et renforcer les murs de la ville", cout:15, effets:{ romanisation:-2, stabilite:4, faveur:-2 }, persistant:{ tresor:-1 },
          consequence:"Tu mises sur la défense de terre. Mais sans flotte, Athènes restera plus faible face aux Perses.",
          pourquoi:"Sans flotte, les citoyens pauvres restent à l'écart, et la cité est moins forte sur mer." }
      ]
    },
    {
      type:"evenement", id:"salamine", acte:"Acte II : Affronter les Perses",
      perso:"conseiller", expr:"inquiet", ambiance:"danger", nom:"Démos, ton conseiller", document:"trireme",
      titre:"Le roi perse Xerxès marche sur Athènes",
      source:{ texte:"Thémistocle propose d'évacuer la ville et de combattre les Perses sur mer, dans le détroit de Salamine, où les navires grecs seront plus habiles.", ref:"D'après la stratégie grecque (480 av. J.-C.), adaptation de classe" },
      source2:{ texte:"Abandonner la ville est un déchirement : les Perses la brûleront. Mais plusieurs cités grecques, dont Sparte, acceptent de s'unir pour combattre ensemble.", ref:"D'après l'union des cités grecques, adaptation de classe" },
      contexte:"Le nouveau roi perse, Xerxès, arrive avec une armée immense et va prendre la ville. Que fais-tu ?",
      revenuApres:true,
      options:[
        { label:"Évacuer la ville et affronter les Perses sur mer à Salamine", effets:{ romanisation:6, stabilite:5, faveur:9 },
          consequence:"La flotte grecque écrase les Perses à Salamine. Athènes est sauvée, et l'union des Grecs triomphe.",
          pourquoi:"À Salamine, la flotte et l'union des cités grecques repoussent les Perses : la liberté des cités est sauvée." },
        { label:"Défendre les murs de la ville coûte que coûte", effets:{ romanisation:-3, stabilite:-7, faveur:-7 },
          consequence:"La ville résiste mal et subit de lourdes pertes. Le peuple doute de toi.",
          pourquoi:"Sans la flotte et sans l'union des Grecs, la défense de terre seule était trop faible face aux Perses." },
        { label:"Demander la paix à Xerxès pour épargner la ville", effets:{ romanisation:-9, stabilite:-3, faveur:-12 },
          consequence:"Tu te soumets pour sauver les murs. Mais Athènes perd sa liberté et son honneur.",
          pourquoi:"Se soumettre, c'est perdre la liberté des citoyens — donc renoncer à la démocratie." }
      ]
    },
    {
      type:"evenement", id:"delos", acte:"Acte II : Affronter les Perses",
      perso:"stratege", expr:"content", ambiance:"jour", nom:"Le stratège militaire", document:"delos",
      titre:"Une alliance des cités grecques",
      source:{ texte:"En 477 avant notre ère, des centaines de cités grecques forment une alliance, la Ligue de Délos. Son but : se défendre ensemble contre l'empire perse. Athènes en prend la tête.", ref:"D'après la Ligue de Délos (477 av. J.-C.), adaptation de classe" },
      source2:{ texte:"Mais Athènes, la plus forte, pourrait transformer cette alliance en empire et commander aux autres cités. Cela risquerait un jour de fâcher Sparte et ses alliés.", ref:"D'après les rivalités entre cités grecques, adaptation de classe" },
      contexte:"Après la victoire, les cités grecques veulent rester unies contre les Perses. Comment organises-tu cette alliance ?",
      revenuApres:true,
      options:[
        { label:"Une alliance d'égaux : chaque cité reste libre", effets:{ romanisation:6, stabilite:7, faveur:4 }, persistant:{ tresor:3 },
          consequence:"Les cités s'unissent en confiance. L'alliance est solide et la paix règne entre les Grecs.",
          pourquoi:"Une alliance qui respecte les autres cités est plus durable et évite la guerre entre Grecs." },
        { label:"Athènes dirige et reçoit l'argent des alliés", effets:{ romanisation:4, stabilite:-4, faveur:6 }, persistant:{ tresor:8 },
          consequence:"Athènes devient riche et puissante grâce à l'argent des alliés. Mais certaines cités se sentent dominées.",
          pourquoi:"L'argent des alliés enrichit Athènes (et, plus tard, sa démocratie), mais transformer l'alliance en empire prépare la guerre du Péloponnèse." },
        { label:"Refuser l'alliance : Athènes se débrouille seule", effets:{ romanisation:0, stabilite:2, faveur:-5 },
          consequence:"Athènes reste seule. Sans alliés, elle est plus faible face aux Perses.",
          pourquoi:"Sans alliance, Athènes perd l'occasion de devenir une grande puissance protectrice des Grecs." }
      ]
    }
  ],

  revenu:{ socle:8, parRomanisation:0.18, seuil:45, facteurInstable:0.5, texte:"L'argent de la cité" },

  /* Choix qui ne respectent pas l'information des documents : { idÉtape : { indiceOption : note } }.
     PREMIÈRE PASSE — à réviser selon ton jugement. */
  docAlerts:{
    dettes:{ 2:"Le document montrait que libérer les pauvres de leurs dettes (Solon) a aidé à faire naître la démocratie : tout laisser comme avant allait à l'encontre de cela." },
    vote:{ 2:"Le document rappelait que la démocratie donne la parole aux citoyens : garder le pouvoir aux familles riches, c'était l'oligarchie." },
    clisthene:{ 2:"Le document montrait que la réforme de Clisthène a fait naître la démocratie : la refuser empêchait le pouvoir du peuple." },
    ecclesia:{ 2:"Le document montrait que c'est l'assemblée du peuple qui décide dans une démocratie : laisser les familles riches décider allait à l'encontre de cela." },
    marathon:{ 2:"Le document montrait des citoyens-soldats prêts à défendre Athènes : se soumettre aux Perses, c'était abandonner leur liberté." },
    flotte:{ 2:"Les documents montraient que la flotte, ramée par les pauvres, renforçait la cité et la démocratie : y renoncer affaiblissait Athènes." },
    salamine:{ 2:"Le document montrait que la flotte et l'union des Grecs sauvaient la cité : se soumettre, c'était perdre la liberté." },
    delos:{ 1:"Le second document avertissait qu'une alliance transformée en empire fâcherait Sparte et mènerait un jour à la guerre." }
  },

  /* Niveaux de difficulté. seuilRevolte = paix sociale sous laquelle la cité se déchire ;
     seuilPaix = paix à retrouver pour la calmer. À AJUSTER selon tes groupes. */
  difficultes:{
    defaut:"stratege", ordre:["apprenti","stratege","pericles"],
    apprenti:{ nom:"Apprenti", sous:"Pour découvrir, grande marge d'erreur",
      seuilRevolte:12, seuilPaix:28, attenuation:0.8, bleed:0, revenuMod:1.2, malusActeMod:0.5 },
    stratege:{ nom:"Stratège", sous:"L'expérience équilibrée",
      seuilRevolte:22, seuilPaix:40, attenuation:0.6, bleed:1, revenuMod:1, malusActeMod:1 },
    pericles:{ nom:"Périclès", sous:"Pour les plus aguerris",
      seuilRevolte:32, seuilPaix:48, attenuation:0.45, bleed:2, revenuMod:0.85, malusActeMod:1.4 }
  },

  echecs:{
    stabilite:{ perso:"citoyen", expr:"severe", ambiance:"danger", titre:"La cité se déchire",
      texte:"La paix entre les habitants s'est effondrée : la cité sombre dans la révolte et la violence. Gouverner Athènes, c'est d'abord éviter que la cité ne se déchire." },
    romanisation:{ perso:"stratege", expr:"severe", ambiance:"solennel", titre:"Le retour de l'oligarchie",
      texte:"Tu n'as pas assez donné de pouvoir au peuple. Quelques familles riches reprennent le contrôle d'Athènes : la démocratie n'a pas pris. Ta mission était de bâtir le pouvoir du peuple." },
    faveur:{ perso:"citoyen", expr:"severe", ambiance:"solennel", titre:"Chassé par le peuple",
      texte:"Les citoyens n'ont plus confiance en toi. Le peuple te retire le pouvoir et te chasse de la cité. À Athènes, c'est le peuple qui décide — même de ton sort." }
  },

  bilans:[
    { si:{ romanisation:60, stabilite:50, faveur:46 }, perso:"stratege", expr:"content", ambiance:"solennel",
      titre:"Le début d'un âge d'or",
      texte:"Tu as donné un vrai pouvoir au peuple, gardé la cité unie et repoussé les Perses. Athènes entre dans son âge d'or. (Tranche I-II : la suite — Périclès, le Parthénon, la guerre du Péloponnèse — viendra dans les actes III à V.)" },
    { si:{ romanisation:46, stabilite:38, faveur:36 }, perso:"conseiller", expr:"content", ambiance:"jour",
      titre:"Une démocratie bien partie",
      texte:"Le pouvoir du peuple a pris racine et la cité a tenu face aux Perses. Quelques fragilités demeurent, mais l'essentiel est là." },
    { si:{ romanisation:28 }, perso:"conseiller", expr:"neutre", ambiance:"jour",
      titre:"Une démocratie encore fragile",
      texte:"Le peuple a gagné un peu de pouvoir, mais l'expérience reste fragile : tu as parfois reculé, ou laissé la cité se diviser." },
    { si:{}, perso:"citoyen", expr:"neutre", ambiance:"jour",
      titre:"L'oligarchie reste maîtresse",
      texte:"Le pouvoir du peuple n'a pas vraiment pris. Athènes ressemble encore à une cité dirigée par quelques familles riches." }
  ]
};

// Données des étapes (Le Rituel)
const steps = [
    {
        id: 0,
        title: "Introduction",
        content: `
            <div class="space-y-4 text-center">
                <p class="text-lg">Bienvenue, Apprenti Sorcier Créatif.</p>
                <p>Vous êtes sur le point de découvrir les secrets des <strong>7 Outils Magiques</strong> de l'Intelligence Artificielle de Canva.</p>
                <p>Suivez ce guide pas-à-pas pour transformer une simple idée en une œuvre d'art mystique.</p>
                <div class="mt-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm inline-block">
                    ✨ Préparez votre compte Canva et ouvrez un nouveau design carré (1080x1080).
                </div>
            </div>
        `,
        buttonText: "Ouvrir le Grimoire"
    },
    {
        id: 1,
        title: "Étape 1 : L'Invocation (Génération d'Image)",
        content: `
            <div class="space-y-4">
                <p>Tout commence par une vision. Nous allons invoquer notre sujet principal : Hedwige, la chouette.</p>
                <p>Allez dans l'onglet <strong>Applis</strong> > <strong>Média Magique</strong> (Génération d'image).</p>
                <div class="bg-parchment-light border-l-4 border-parchment-border p-4 rounded-r-lg my-4">
                    <p class="font-bold text-gold-700 mb-1">🔮 Formule Magique (Prompt) :</p>
                    <p class="italic text-gray-700">"Une chouette effraie, style croquis à l'encre noir et or, texture papier ancien, style gravure de vieux grimoire, détaillé."</p>
                </div>
                <p class="text-sm text-gray-500">Ajoutez l'image générée à votre page.</p>
            </div>
        `,
        buttonText: "Page Suivante"
    },
    {
        id: 2,
        title: "Étape 2 : La Métamorphose (Édition Magique)",
        content: `
            <div class="space-y-4">
                <p>La magie peut transformer la matière. Changeons la nature de notre créature.</p>
                <p>Sélectionnez l'image, cliquez sur <strong>Modifier une photo</strong> > <strong>Édition Magique</strong>.</p>
                <p>Passez le pinceau sur la chouette pour la sélectionner entièrement.</p>
                <div class="bg-parchment-light border-l-4 border-parchment-border p-4 rounded-r-lg my-4">
                    <p class="font-bold text-gold-700 mb-1">🔮 Nouvelle Formule :</p>
                    <p class="italic text-gray-700">"Un petit dragon vert émeraude adorable, écailles brillantes, style fantastique."</p>
                </div>
                <p class="text-sm text-gray-500">Admirez la transformation de la chouette en dragon !</p>
            </div>
        `,
        buttonText: "Continuer le Rituel"
    },
    {
        id: 3,
        title: "Étape 3 : L'Expansion du Monde (Arrière-plan & Agrandissement)",
        content: `
            <div class="space-y-4">
                <p>Notre créature a besoin d'un lieu où vivre. Créons un décor.</p>
                <p>Utilisez d'abord <strong>Générer l'arrière-plan</strong> ou créez une nouvelle image pour le fond :</p>
                <div class="bg-parchment-light border-l-4 border-parchment-border p-4 rounded-r-lg my-2">
                    <p class="italic text-gray-700">"Intérieur chaleureux d'une vieille salle de classe de sorciers, étagères de livres, bougies flottantes."</p>
                </div>
                <p>Ensuite, utilisez l'<strong>Agrandissement Magique</strong> pour étendre l'image si elle ne remplit pas tout le cadre.</p>
            </div>
        `,
        buttonText: "Suivant"
    },
    {
        id: 4,
        title: "Étape 4 : Le Voleur d'Essence (Capture de Texte)",
        content: `
            <div class="space-y-4">
                <p>Parfois, les mots sont prisonniers des images. Libérons-les.</p>
                <p>Importez une image contenant du texte (une page de vieux livre par exemple) dans Canva.</p>
                <p>Allez dans <strong>Modifier une photo</strong> > <strong>Capture de texte</strong>.</p>
                <p class="text-sm text-gray-500">Le texte de l'image devient éditable et vous pouvez le déplacer ou changer la police pour 'Playfair Display'.</p>
            </div>
        `,
        buttonText: "Avancer"
    },
    {
        id: 5,
        title: "Étape 5 : Le Miroir de Style (Rouleau IA)",
        content: `
            <div class="space-y-4">
                <p>Unifiez votre création. Copiez l'âme d'une image pour l'appliquer à une autre.</p>
                <p>Sélectionnez un élément graphique simple.</p>
                <p>Cliquez sur l'icône <strong>Rouleau</strong> (Copier le style) dans la barre d'outils, mais cherchez l'option IA si disponible pour transférer le style artistique d'une image générée vers votre élément.</p>
                <p class="text-sm italic text-gray-500">(Note: Si l'outil spécifique n'est pas actif, utilisez le style de filtre pour harmoniser les couleurs).</p>
            </div>
        `,
        buttonText: "Continuer"
    },
    {
        id: 6,
        title: "Étape 6 : La Lévitation (Capture Magique)",
        content: `
            <div class="space-y-4">
                <p>Rendez les objets indépendants de leur monde.</p>
                <p>Sélectionnez votre image de fond avec des objets (comme une bougie ou un livre).</p>
                <p>Cliquez sur <strong>Modifier une photo</strong> > <strong>Capture Magique</strong>.</p>
                <p class="text-sm text-gray-500">L'objet principal se détache du fond. Vous pouvez maintenant le déplacer librement dans la pièce !</p>
            </div>
        `,
        buttonText: "Prochaine Étape"
    },
    {
        id: 7,
        title: "Étape 7 : La Plume Enchantée (Écriture Magique)",
        content: `
            <div class="space-y-4">
                <p>Le rituel touche à sa fin. Ajoutons une légende mystique.</p>
                <p>Ouvrez l'<strong>Assistant Canva</strong> (étoiles en bas à droite) ou tapez un texte.</p>
                <p>Cliquez sur <strong>Écriture Magique</strong>.</p>
                <div class="bg-parchment-light border-l-4 border-parchment-border p-4 rounded-r-lg my-4">
                    <p class="font-bold text-gold-700 mb-1">✍️ Demande :</p>
                    <p class="italic text-gray-700">"Écris une courte prophétie mystérieuse sur un dragon vert."</p>
                </div>
                <p>Utilisez ensuite les options pour <strong>Raccourcir</strong> ou <strong>Réécrire</strong> le texte de manière plus poétique.</p>
            </div>
        `,
        buttonText: "Voir le Résultat"
    }
];

// Données des Sorciers (La Récompense)
const wizards = [
    {
        name: "Merlin l'Innovateur",
        totem: "Le Phénix Digital",
        desc: "Tu maîtrises l'art de renaître de tes cendres. Tes créations sont toujours à la pointe de la technologie."
    },
    {
        name: "Morgane de la Palette",
        totem: "Le Caméléon Chromatique",
        desc: "Les couleurs n'ont aucun secret pour toi. Tu sais harmoniser les teintes les plus improbables."
    },
    {
        name: "Gandalf du Graphisme",
        totem: "Le Hibou Sage",
        desc: "Ton design est structurel, pensé et intemporel. Tu ne suis pas la mode, tu la crées."
    },
    {
        name: "Circe du Storytelling",
        totem: "Le Renard Rusé",
        desc: "Tu sais captiver ton audience par des histoires visuelles envoûtantes."
    }
];

// État de l'application
let currentStep = 0;

// Éléments du DOM
const appContainer = document.getElementById('app-container');
const stepContent = document.getElementById('step-content');
const stepIndicator = document.getElementById('step-indicator');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const nextBtnText = document.getElementById('next-btn-text');
const loadingSpinner = document.getElementById('loading-spinner');

// Initialisation
function init() {
    renderStep(currentStep);

    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);
}

// Gestion du clic "Suivant"
function handleNext() {
    // Animation de chargement
    nextBtnText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    nextBtn.disabled = true;

    setTimeout(() => {
        nextBtnText.classList.remove('hidden');
        loadingSpinner.classList.add('hidden');
        nextBtn.disabled = false;

        if (currentStep < steps.length - 1) {
            currentStep++;
            renderStep(currentStep);
        } else {
            showFinalPage();
        }
    }, 500); // Délai de 0.5s
}

// Gestion du clic "Précédent"
function handlePrev() {
    if (currentStep > 0) {
        currentStep--;
        renderStep(currentStep);
    }
}

// Affichage d'une étape
function renderStep(index) {
    const step = steps[index];

    // Mise à jour du contenu
    stepContent.innerHTML = `
        <h2 class="font-serif text-2xl md:text-3xl text-magic-green font-bold text-center mb-6">${step.title}</h2>
        <div class="text-gray-600 leading-relaxed text-lg">
            ${step.content}
        </div>
    `;

    // Mise à jour des boutons
    nextBtnText.textContent = step.buttonText;

    if (index === 0) {
        prevBtn.classList.add('hidden');
        stepIndicator.textContent = "";
    } else {
        prevBtn.classList.remove('hidden');
        stepIndicator.textContent = `Étape ${index}/${steps.length - 1}`;
    }

    // Reset du style si on vient de la page finale
    appContainer.classList.remove('bg-gold-50');
    appContainer.classList.add('bg-white');
}

// Page de fin
function showFinalPage() {
    const randomWizard = wizards[Math.floor(Math.random() * wizards.length)];

    // Cacher les boutons de nav classiques
    prevBtn.classList.add('hidden');
    stepIndicator.textContent = "Rituel Accompli";

    // Customiser le bouton suivant pour devenir "Recommencer"
    // On va plutôt remplacer tout le contenu et gérer le bouton recommencer dans le HTML injecté
    // Mais pour garder la structure, on va juste cacher le footer de nav et mettre le bouton dans le contenu

    // Masquer le footer navigation standard pour cette vue
    document.querySelector('.border-t').style.display = 'none';

    stepContent.innerHTML = `
        <div class="text-center space-y-6 animate-pulse-slow">
            <div class="text-4xl">✨ 🎉 ✨</div>
            <h2 class="font-serif text-3xl md:text-4xl text-gold-600 font-bold">Enchantement Réussi !</h2>
            <p class="text-gray-600">L'IA a reconnu votre signature magique.</p>
            
            <div class="bg-white border-2 border-gold-600 p-8 rounded-xl shadow-inner my-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <p class="uppercase tracking-widest text-xs font-bold text-gray-400 mb-2">Votre Profil de Sorcier</p>
                <h3 class="font-serif text-2xl text-purple-700 font-bold mb-2">${randomWizard.name}</h3>
                <div class="text-4xl my-4">👑</div>
                <p class="font-bold text-gray-800">Totem : ${randomWizard.totem}</p>
                <p class="text-gray-600 italic mt-4">"${randomWizard.desc}"</p>
            </div>

            <button onclick="resetApp()" class="px-8 py-3 rounded-full bg-gold-600 hover:bg-gold-700 text-white font-bold shadow-lg transition-transform hover:scale-105 active:scale-95">
                Recommencer le Rituel
            </button>
        </div>
    `;
}

// Fonction globale pour le bouton reset
window.resetApp = function () {
    currentStep = 0;
    // Réafficher la nav
    document.querySelector('.border-t').style.display = 'flex';
    renderStep(0);
}

// Lancement
init();

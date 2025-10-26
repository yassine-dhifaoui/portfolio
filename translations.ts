
export const translations = {
  fr: {
    header: {
      title1: "Ingénieur Systèmes",
      title2: "Embarqués & Imagerie Médicale",
      subtitle: "Développement C/C++ • Vision par Ordinateur • Dispositifs Médicaux • Linux Embarqué",
      cvButton: "Voir le CV",
    },
    about: {
      title: "À Propos de Moi",
      description: "Ingénieur systèmes embarqués (Hardware & Software) avec un Master en imagerie médicale, spécialisé en développement C/C++ et vision par ordinateur. Fort de 3 années d'expérience en dispositifs médicaux embarqués (Echodia, CEA, FEMTO-ST) et en développement logiciel métier (DentalSoft), je maîtrise le traitement du signal (CEA), la R&D scientifique et l'automatisation industrielle. Mon expertise couvre Linux embarqué, les IHM intuitives (LVGL, Qt), le temps réel, les bases de données embarquées et l'optimisation systèmes. Passionné par l'innovation technologique au service de la santé, de l'industrie et de la recherche, je conçois des solutions embarquées fiables et intelligentes pour répondre aux défis techniques les plus exigeants.",
      language1: "Français : C1 (Courant)",
      language2: "Anglais : B1 (Compréhension technique)",
      language3: "Arabe : C2 (Langue maternelle)",
    },
    skills: {
      title: "Compétences",
      categories: [
        {
          title: "Fonctionnelles",
          skills: [
            { name: "Systèmes embarqués temps réel", level: 100 },
            { name: "Traitement du signal et d'image", level: 100 },
            { name: "Développement IHM (LVGL, Qt)", level: 85 },
            { name: "Prototypage et intégration hardware", level: 80 },
          ],
        },
        {
          title: "Programmation",
          skills: [
            { name: "C/C++ embarqué", level: 100 },
            { name: "Python", level: 90 },
            { name: "VHDL/Verilog", level: 70 },
            { name: "Java, C#, MATLAB", level: 65 },
          ],
        },
        {
          title: "Systèmes Embarqués",
          skills: [
            { name: "Linux embarqué (Yocto)", level: 90 },
            { name: "STM32, ESP32, Arduino", level: 85 },
            { name: "ARM Cortex-M, RTOS, FPGA", level: 75 },
          ],
        },
        {
          title: "Vision & Traitement d'Image",
          skills: [
            { name: "OpenCV, TensorFlow (bases)", level: 90 },
            { name: "Traitement d'images médicales", level: 85 },
            { name: "Détection de contours", level: 90 },
          ],
        },
        {
          title: "IHM & Interfaces",
          skills: [
            { name: "LVGL, Qt/QML", level: 85 },
            { name: "PyQt, PySide6", level: 90 },
          ],
        },
        {
          title: "Bases de Données",
          skills: [
            { name: "SQLite, ODB, SOCI", level: 85 },
            { name: "SQL", level: 80 },
          ],
        },
        {
          title: "Outils & Logiciels",
          skills: [
            { name: "Git, SVN", level: 90 },
            { name: "LabVIEW, Matlab, Simulink", level: 85 },
            { name: "Yocto, Vivado, ModelSim", level: 75 },
            { name: "Keil, IAR, CATIA, SOLIDWORKS", level: 70 },
          ],
        },
        {
          title: "Méthodes",
          skills: [
            { name: "Agile, Scrum, Cycle en V", level: 85 },
            { name: "OOP, Gestion de projet", level: 90 },
            { name: "Documentation technique", level: 95 },
          ],
        },
      ],
      sectors: {
          title: "Secteurs d'Expertise",
          list: ["Médical", "Automobile", "Ferroviaire", "Industrie", "Recherche & Développement"]
      }
    },
    experience: {
      title: "Expériences Professionnelles",
      jobs: [
        {
          date: "janv. 2025 - juin 2025",
          role: "Développeur Logiciel | DentalSoft",
          company: "Freelance",
          description: "Conception et développement complet d'un logiciel de gestion pour cabinets dentaires avec interface graphique moderne, actuellement déployé et utilisé dans plusieurs cabinets en Tunisie.",
          tasks: [
            "Gestion complète des patients : dossiers médicaux, historique des consultations, traitements, rendez-vous (RDV)",
            "Facturation automatique avec génération de PDF professionnels (ordonnances, factures, devis)",
            "Conception et intégration d'une base de données SQLite sécurisée et optimisée pour le stockage des données médicales",
            "Développement d'un installateur professionnel (Inno Setup) avec gestion intelligente des chemins Windows et configuration automatique",
            "Tests multi-machines approfondis, débogage et optimisation des performances en conditions réelles d'utilisation",
            "Déploiement et installation du logiciel dans plusieurs cabinets dentaires avec formation des utilisateurs",
            "Maintenance et support technique continu pour garantir la fiabilité et la satisfaction des utilisateurs"
          ],
          tech: ["Python", "PySide6/Qt", "SQLite", "PDF (ReportLab)", "Inno Setup", "Git"],
          link: "https://github.com/yassine-dhifaoui/DentalSoft"
        },
        {
          date: "sept. 2023 - août 2024",
          role: "Développeur C/C++ Systèmes Embarqués Linux | Ingénieur Biomédical",
          company: "ECHODIA (Alternance)",
          description: "Conception et développement d'une Interface Homme-Machine (IHM) embarquée pour la nouvelle gamme Echofull de dispositifs médicaux ORL (Oto-Rhino-Laryngologie), destinée à la mesure des otoémissions acoustiques et au diagnostic auditif professionnel.",
          tasks: [
            "Développement d'IHM médicale sous Linux embarqué (Yocto) pour écrans tactiles de 5 et 7 pouces, avec conception de modules spécifiques comme le DPgramme pour la mesure en temps réel des otoémissions acoustiques",
            "Intégration de fonctionnalités avancées : génération automatique de rapports PDF médicaux (libharu), gestion de bases de données embarquées (ODB/SOCI), support multilingue incluant l'arabe pour l'export international",
            "Intégration système complète : validation logicielle rigoureuse, mise en service des produits médicaux, collaboration étroite avec l'équipe R&D pour garantir la conformité technique et médicale des dispositifs",
            "Optimisation des performances temps réel pour assurer la précision des mesures acoustiques critiques",
            "Participation aux tests de validation et à la certification des dispositifs médicaux selon les normes en vigueur"
          ],
          tech: ["C++", "Linux embarqué", "Yocto", "LVGL", "OpenCV", "ODB", "SOCI", "libharu", "Git", "SVN", "OOP"]
        },
        {
          date: "avril - août 2022",
          role: "Chercheur Stagiaire / Ingénieur Logiciel",
          company: "CEA Paris-Saclay",
          description: "Développement d'un pipeline d'analyse scientifique pour mesurer la rotation de surface des étoiles de type solaire à partir de données photométriques issues des missions spatiales Kepler (NASA) et PLATO (ESA), dans le cadre de recherches astrophysiques avancées.",
          tasks: [
            "Conception et mise en place d'un pipeline complet d'analyse sous Linux pour l'estimation de la rotation stellaire via l'analyse de courbes de lumière photométriques",
            "Développement et implémentation d'algorithmes de détection de modulations basse fréquence en utilisant des techniques avancées : autocorrélation, analyse par ondelettes (wavelets), et méthode de Lomb-Scargle",
            "Intégration du module d'Intelligence Artificielle ROOSTER pour améliorer la précision de la détection des périodes de rotation",
            "Optimisation des algorithmes pour traiter de grands volumes de données astronomiques et améliorer la précision des mesures de rotation stellaire",
            "Validation des résultats par comparaison avec les références existantes dans la littérature scientifique",
            "Le pipeline développé est aujourd'hui intégré au package PyPI maintenu par l'équipe CEA pour une utilisation par la communauté scientifique"
          ],
          tech: ["Python", "AstroPy", "Jupyter Notebook", "Matplotlib", "Git", "Analyse de signal"]
        },
        {
          date: "juin - nov. 2021",
          role: "Ingénieur Maintenance Industrielle",
          company: "THE ILLUMINATION FACTORY (CDI)",
          description: "Maintenance préventive et corrective sur lignes de production industrielles, incluant machines CNC et postes de soudure automatisés, avec analyse des données de production et propositions d'amélioration continue.",
          tasks: [
            "Coordination des opérations de maintenance préventive et corrective sur machines CNC et postes de soudure industriels",
            "Analyse approfondie des données de production et de maintenance pour identifier les défaillances récurrentes et optimiser les performances",
            "Propositions d'amélioration basées sur l'analyse terrain : optimisation des cycles de maintenance, réduction des temps d'arrêt, amélioration de la fiabilité des équipements",
            "Définition et mise en œuvre de mesures de sécurité pour protéger le personnel, les installations et l'environnement conformément aux normes industrielles",
            "Formation des opérateurs aux bonnes pratiques de maintenance de premier niveau",
            "Gestion des stocks de pièces de rechange et coordination avec les fournisseurs"
          ],
          tech: ["Maintenance industrielle", "Machines CNC", "Analyse de données", "Sécurité industrielle"]
        },
        {
          date: "août - déc. 2020",
          role: "Ingénieur Vision par Ordinateur",
          company: "FEMTO-ST Besançon (Stage Fin d'Études)",
          description: "Développement d'une méthode innovante de mesure de force non invasive basée sur la vision par ordinateur, utilisant une sonde élastique observée au microscope électronique pour des applications en micromanipulation et caractérisation mécanique à l'échelle microscopique.",
          tasks: [
            "Conception et implémentation d'un algorithme de vision par ordinateur (OpenCV/Python) pour mesurer la déformation d'un cantilever (poutre élastique) observé au microscope électronique, permettant une mesure de force non invasive basée sur l'analyse d'image",
            "Développement d'une méthode de détection des contours en temps réel pour analyser les forces appliquées à la sonde élastique, avec calcul de la déformation basé sur un modèle mécanique 3D du cantilever",
            "Création d'une interface graphique temps réel (PyQt5) pour l'acquisition d'images, le traitement en direct et l'affichage des résultats de mesure de force",
            "Développement d'un système de pilotage automatique d'une platine motorisée pour le positionnement précis du microscope",
            "Calibration et validation du capteur de force par vision en comparaison avec un capteur commercial de référence",
            "Modélisation 3D de la sonde élastique pour la simulation et la prédiction des déformations"
          ],
          tech: ["Python", "OpenCV", "PyQt5", "Traitement d'image temps réel", "Vision par ordinateur", "Linux"]
        },
        {
          date: "juil. - août 2019",
          role: "Ingénieur Électricien",
          company: "Groupe DRÄXLMAIER (Stage)",
          description: "Stage technique dans le secteur automobile, spécialisé dans la fabrication de câbles et faisceaux électriques pour l'industrie automobile en Tunisie.",
          tasks: [
            "Familiarisation approfondie avec les machines de production de câbles automobiles : maintenance préventive, réglages de précision, diagnostic et résolution de problèmes techniques",
            "Participation aux opérations de maintenance et de réglage des équipements de fabrication",
            "Apprentissage des normes de qualité et de sécurité dans l'industrie automobile",
            "Analyse des processus de production et identification des opportunités d'amélioration"
          ],
          tech: ["Maintenance industrielle", "Câblage automobile", "Machines de production"]
        },
        {
          date: "juin 2018",
          role: "Stage Ingénieur",
          company: "STEG (Société Tunisienne d'Électricité et de Gaz)",
          description: "Stage d'initiation à la vie professionnelle dans le secteur de l'énergie, découverte de l'organisation et du fonctionnement d'une grande entreprise publique tunisienne.",
          tasks: [
            "Découverte du terrain de travail et des installations électriques industrielles",
            "Initiation aux pratiques professionnelles dans le secteur de l'énergie",
            "Observation des opérations de maintenance et de gestion des réseaux électriques",
            "Compréhension des enjeux de sécurité et de fiabilité dans la distribution d'énergie"
          ],
          tech: ["Électricité industrielle", "Réseaux électriques", "Sécurité"]
        },
        {
          date: "mars - juin 2019",
          role: "Formateur LabVIEW / Développement TP Électronique",
          company: "École Pluridisciplinaire Internationale (EPI)",
          description: "Mise en place et animation de Travaux Pratiques pour les étudiants en électronique et systèmes embarqués, dans le cadre de ma formation d'ingénieur. Conception de modules pédagogiques utilisant LabVIEW, Arduino et MyRIO pour l'enseignement des bases de l'instrumentation virtuelle et des systèmes embarqués.",
          tasks: [
            "Conception et développement de dix modules de TP interactifs pour l'initiation à LabVIEW et à l'instrumentation virtuelle : acquisition de données, contrôle de systèmes, intégration hardware/software",
            "Intégration de cartes Arduino, MyRIO et cartes de développement personnalisées dans des projets pédagogiques concrets",
            "Création d'interfaces graphiques LabVIEW permettant le contrôle de composants électroniques : LEDs, afficheurs LCD, moteurs à courant continu et moteurs pas à pas",
            "Formation et accompagnement des étudiants sur l'utilisation des outils National Instruments (LabVIEW, MyDAQ, MyRIO) en lien avec les systèmes embarqués",
            "Évaluation continue des étudiants et adaptation des contenus pédagogiques selon leurs besoins",
            "Support de cours et documentation technique pour faciliter l'apprentissage autonome"
          ],
          tech: ["LabVIEW", "Arduino (C)", "NI MyRIO", "NI-VISA", "MyDAQ", "Proteus", "Instrumentation Virtuelle"]
        }
      ],
    },
    projects: {
      title: "Projets",
      items: [
        {
          title: "DentalSoft : Logiciel de gestion de cabinet dentaire",
          date: "2025 (Projet personnel)",
          description: "Conception et développement complet d'un logiciel de gestion pour cabinets dentaires, conçu et développé entièrement en solo de A à Z. Le logiciel est actuellement déployé et utilisé dans plusieurs cabinets dentaires en Tunisie, avec des retours très positifs des utilisateurs (notamment Dr. Maram Slama, chirurgienne-dentiste).",
          details: [
            "Interface graphique moderne et intuitive développée avec PySide6/Qt, conçue pour les besoins spécifiques des cabinets dentaires",
            "Base de données SQLite intégrée pour une gestion sécurisée et optimisée des dossiers patients",
            "Génération automatique de documents PDF professionnels : ordonnances médicales, devis détaillés, factures",
            "Gestion complète des dossiers patients : historique médical, traitements, rendez-vous, paiements",
            "Création d'un exécutable autonome et d'un installateur professionnel (Inno Setup) pour faciliter le déploiement",
            "Tests multi-machines approfondis en conditions réelles d'utilisation dans des cabinets dentaires",
            "Projet open-source disponible sur GitHub, démontrant ma capacité à concevoir, structurer et finaliser un logiciel métier utilisable en conditions réelles"
          ],
          tech: ["Python", "PySide6/Qt", "SQLite", "ReportLab (PDF)", "Inno Setup", "Git"],
          link: "https://github.com/yassine-dhifaoui/DentalSoft"
        },
        {
          title: "Développement de modules LabVIEW pour l'enseignement",
          date: "mars - juin 2019 (EPI, Tunisie)",
          description: "Conception et animation de 10 modules de Travaux Pratiques interactifs pour l'initiation à LabVIEW, Arduino et MyRIO, dans le cadre de l'enseignement des systèmes embarqués et de l'instrumentation virtuelle.",
          details: [
            "Conception de modules pédagogiques complets couvrant l'acquisition de données, le contrôle de systèmes et l'intégration hardware/software",
            "Intégration de cartes Arduino et MyRIO dans des projets pédagogiques concrets",
            "Création d'interfaces graphiques pour le contrôle de composants électroniques (LEDs, moteurs, afficheurs)",
            "Formation et accompagnement des étudiants sur les outils National Instruments"
          ],
          tech: ["LabVIEW", "Arduino", "NI MyRIO", "Instrumentation Virtuelle"]
        },
        {
          title: "Instrumentation virtuelle pour supervision temps réel",
          date: "2019",
          description: "Développement d'une IHM de mesure et commande pour la supervision temps réel de systèmes électroniques.",
          details: [
            "Développement d'interfaces de supervision temps réel",
            "IHM de mesure et commande pour systèmes embarqués",
            "Acquisition et traitement de données en temps réel"
          ],
          tech: ["LabVIEW", "Instrumentation Virtuelle", "Temps réel"]
        },
        {
          title: "Régulateur de tension variable",
          date: "2018",
          description: "Conception complète d'une carte électronique de régulation de tension, de la conception CAO à la réalisation et aux tests.",
          details: [
            "Conception du schéma électronique et du circuit imprimé (PCB)",
            "Réalisation de la CAO complète avec logiciel de conception électronique",
            "Tests et validation du régulateur de tension en conditions réelles"
          ],
          tech: ["CAO Électronique", "PCB Design", "Tests et mesures"]
        },
        {
          title: "Commande de moteur pas à pas via Android",
          date: "2016 (Projet de Fin de Licence)",
          description: "Conception d'un système de commande de moteur pas à pas piloté par une application mobile Android via Bluetooth.",
          details: [
            "Conception et réalisation d'une carte de commande électronique pour moteur pas à pas",
            "Développement d'une application mobile Android pour le contrôle à distance via Bluetooth",
            "Calibration du système et démonstration fonctionnelle complète"
          ],
          tech: ["Arduino", "Android", "Bluetooth", "Électronique de puissance"]
        }
      ]
    },
    education: {
        title: "Formation",
        items: [
            {
                date: "2021 - 2024",
                degree: "Master en Alternance - Traitement du Signal et des Images",
                specialization: "Parcours Imagerie et Technologie pour la Médecine (TechMed)",
                institution: "Université Clermont Auvergne (UCA), École Universitaire de Physique et d'Ingénierie, Clermont-Ferrand, France"
            },
            {
                date: "2017 - 2020",
                degree: "Diplôme d'Ingénieur - Génie Électrique",
                specialization: "Option Réseaux et Systèmes Embarqués",
                institution: "École Pluridisciplinaire Internationale (EPI), Tunisie"
            },
            {
                date: "2012 - 2016",
                degree: "Licence - Électronique, Électrotechnique et Automatique (LFEEA)",
                specialization: "",
                institution: "Faculté des Sciences Monastir (FSM), Tunisie"
            }
        ]
    },
    footer: {
        title: "Contactez-moi",
        subtitle: "N'hésitez pas à me contacter pour des collaborations, des opportunités professionnelles ou simplement pour échanger !",
        email: "yassine.dhifaoui.94@gmail.com",
        phone: "+33 6 69 40 16 26",
        github: "github.com/yassine-dhifaoui",
        linkedin: "linkedin.com/in/yassine-dhifaoui"
    }
  },
  en: {
    header: {
      title1: "Embedded Systems Engineer",
      title2: "& Medical Imaging",
      subtitle: "C/C++ Development • Computer Vision • Medical Devices • Embedded Linux",
      cvButton: "View CV",
    },
    about: {
      title: "About Me",
      description: "Embedded systems engineer (Hardware & Software) with a Master's degree in medical imaging, specialized in C/C++ development and computer vision. With 3 years of experience in embedded medical devices (Echodia, CEA, FEMTO-ST) and business software development (DentalSoft), I master signal processing (CEA), scientific R&D, and industrial automation. My expertise covers embedded Linux, intuitive HMIs (LVGL, Qt), real-time systems, embedded databases, and system optimization. Passionate about technological innovation serving healthcare, industry, and research, I design reliable and intelligent embedded solutions to meet the most demanding technical challenges.",
      language1: "French: C1 (Fluent)",
      language2: "English: B1 (Technical reading)",
      language3: "Arabic: C2 (Native)",
    },
    skills: {
      title: "Skills",
      categories: [
        {
          title: "Functional",
          skills: [
            { name: "Real-time embedded systems", level: 100 },
            { name: "Signal and image processing", level: 100 },
            { name: "HMI Development (LVGL, Qt)", level: 85 },
            { name: "Prototyping & hardware integration", level: 80 },
          ],
        },
        {
          title: "Programming",
          skills: [
            { name: "Embedded C/C++", level: 100 },
            { name: "Python", level: 90 },
            { name: "VHDL/Verilog", level: 70 },
            { name: "Java, C#, MATLAB", level: 65 },
          ],
        },
        {
          title: "Embedded Systems",
          skills: [
            { name: "Embedded Linux (Yocto)", level: 90 },
            { name: "STM32, ESP32, Arduino", level: 85 },
            { name: "ARM Cortex-M, RTOS, FPGA", level: 75 },
          ],
        },
        {
          title: "Vision & Image Processing",
          skills: [
            { name: "OpenCV, TensorFlow (basics)", level: 90 },
            { name: "Medical image processing", level: 85 },
            { name: "Contour detection", level: 90 },
          ],
        },
        {
          title: "HMI & Interfaces",
          skills: [
            { name: "LVGL, Qt/QML", level: 85 },
            { name: "PyQt, PySide6", level: 90 },
          ],
        },
        {
          title: "Databases",
          skills: [
            { name: "SQLite, ODB, SOCI", level: 85 },
            { name: "SQL", level: 80 },
          ],
        },
        {
          title: "Tools & Software",
          skills: [
            { name: "Git, SVN", level: 90 },
            { name: "LabVIEW, Matlab, Simulink", level: 85 },
            { name: "Yocto, Vivado, ModelSim", level: 75 },
            { name: "Keil, IAR, CATIA, SOLIDWORKS", level: 70 },
          ],
        },
        {
          title: "Methods",
          skills: [
            { name: "Agile, Scrum, V-Model", level: 85 },
            { name: "OOP, Project management", level: 90 },
            { name: "Technical documentation", level: 95 },
          ],
        },
      ],
       sectors: {
          title: "Expertise Sectors",
          list: ["Medical", "Automotive", "Railway", "Industry", "Research & Development"]
      }
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          date: "Jan 2025 - Jun 2025",
          role: "Software Developer | DentalSoft",
          company: "Freelance",
          description: "Complete design and development of a dental practice management software with modern graphical interface, currently deployed and used in several practices in Tunisia.",
          tasks: [
            "Complete patient management: medical records, consultation history, treatments, appointments",
            "Automatic billing with professional PDF generation (prescriptions, invoices, quotes)",
            "Design and integration of a secure and optimized SQLite database for medical data storage",
            "Development of a professional installer (Inno Setup) with intelligent Windows path management and automatic configuration",
            "Thorough multi-machine testing, debugging and performance optimization in real-world conditions",
            "Deployment and installation of the software in several dental practices with user training",
            "Ongoing maintenance and technical support to ensure reliability and user satisfaction"
          ],
          tech: ["Python", "PySide6/Qt", "SQLite", "PDF (ReportLab)", "Inno Setup", "Git"],
          link: "https://github.com/yassine-dhifaoui/DentalSoft"
        },
        {
          date: "Sep 2023 - Aug 2024",
          role: "Embedded C/C++ Developer Linux | Biomedical Engineer",
          company: "ECHODIA (Work-study)",
          description: "Design and development of an embedded Human-Machine Interface (HMI) for the new Echofull range of ENT medical devices, intended for otoacoustic emissions measurement and professional hearing diagnosis.",
          tasks: [
            "Development of medical HMI under embedded Linux (Yocto) for 5 and 7-inch touchscreens, with design of specific modules such as DPgram for real-time otoacoustic emissions measurement",
            "Integration of advanced features: automatic generation of medical PDF reports (libharu), embedded database management (ODB/SOCI), multilingual support including Arabic for international export",
            "Complete system integration: rigorous software validation, medical product commissioning, close collaboration with R&D team to ensure technical and medical compliance of devices",
            "Real-time performance optimization to ensure accuracy of critical acoustic measurements",
            "Participation in validation tests and certification of medical devices according to current standards"
          ],
          tech: ["C++", "Embedded Linux", "Yocto", "LVGL", "OpenCV", "ODB", "SOCI", "libharu", "Git", "SVN", "OOP"]
        },
        {
          date: "Apr - Aug 2022",
          role: "Research Intern / Software Engineer",
          company: "CEA Paris-Saclay",
          description: "Development of a scientific analysis pipeline to measure the surface rotation of solar-type stars from photometric data from the Kepler (NASA) and PLATO (ESA) space missions, as part of advanced astrophysical research.",
          tasks: [
            "Design and implementation of a complete analysis pipeline under Linux for stellar rotation estimation via photometric light curve analysis",
            "Development and implementation of low-frequency modulation detection algorithms using advanced techniques: autocorrelation, wavelet analysis, and Lomb-Scargle method",
            "Integration of the ROOSTER Artificial Intelligence module to improve the accuracy of rotation period detection",
            "Algorithm optimization to process large volumes of astronomical data and improve stellar rotation measurement accuracy",
            "Validation of results by comparison with existing references in scientific literature",
            "The developed pipeline is now integrated into the PyPI package maintained by the CEA team for use by the scientific community"
          ],
          tech: ["Python", "AstroPy", "Jupyter Notebook", "Matplotlib", "Git", "Signal analysis"]
        },
        {
          date: "Jun - Nov 2021",
          role: "Industrial Maintenance Engineer",
          company: "THE ILLUMINATION FACTORY (Permanent contract)",
          description: "Preventive and corrective maintenance on industrial production lines, including CNC machines and automated welding stations, with production data analysis and continuous improvement proposals.",
          tasks: [
            "Coordination of preventive and corrective maintenance operations on CNC machines and industrial welding stations",
            "In-depth analysis of production and maintenance data to identify recurring failures and optimize performance",
            "Improvement proposals based on field analysis: optimization of maintenance cycles, reduction of downtime, improvement of equipment reliability",
            "Definition and implementation of safety measures to protect personnel, facilities and the environment in accordance with industrial standards",
            "Training of operators in good first-level maintenance practices",
            "Spare parts inventory management and coordination with suppliers"
          ],
          tech: ["Industrial maintenance", "CNC machines", "Data analysis", "Industrial safety"]
        },
        {
          date: "Aug - Dec 2020",
          role: "Computer Vision Engineer",
          company: "FEMTO-ST Besançon (Final Year Project)",
          description: "Development of an innovative non-invasive force measurement method based on computer vision, using an elastic probe observed under an electron microscope for micromanipulation and microscale mechanical characterization applications.",
          tasks: [
            "Design and implementation of a computer vision algorithm (OpenCV/Python) to measure the deformation of a cantilever (elastic beam) observed under an electron microscope, enabling non-invasive force measurement based on image analysis",
            "Development of a real-time contour detection method to analyze forces applied to the elastic probe, with deformation calculation based on a 3D mechanical model of the cantilever",
            "Creation of a real-time graphical interface (PyQt5) for image acquisition, live processing and display of force measurement results",
            "Development of an automatic control system for a motorized stage for precise microscope positioning",
            "Calibration and validation of the vision-based force sensor by comparison with a commercial reference sensor",
            "3D modeling of the elastic probe for simulation and prediction of deformations"
          ],
          tech: ["Python", "OpenCV", "PyQt5", "Real-time image processing", "Computer vision", "Linux"]
        },
        {
          date: "Jul - Aug 2019",
          role: "Electrical Engineer",
          company: "DRÄXLMAIER Group (Internship)",
          description: "Technical internship in the automotive sector, specialized in the manufacture of cables and electrical harnesses for the automotive industry in Tunisia.",
          tasks: [
            "In-depth familiarization with automotive cable production machines: preventive maintenance, precision adjustments, diagnosis and resolution of technical problems",
            "Participation in maintenance and adjustment operations of manufacturing equipment",
            "Learning quality and safety standards in the automotive industry",
            "Analysis of production processes and identification of improvement opportunities"
          ],
          tech: ["Industrial maintenance", "Automotive wiring", "Production machines"]
        },
        {
          date: "Jun 2018",
          role: "Engineering Intern",
          company: "STEG (Tunisian Company of Electricity and Gas)",
          description: "Initiation internship to professional life in the energy sector, discovery of the organization and operation of a large Tunisian public company.",
          tasks: [
            "Discovery of the work field and industrial electrical installations",
            "Initiation to professional practices in the energy sector",
            "Observation of maintenance operations and electrical network management",
            "Understanding of safety and reliability issues in energy distribution"
          ],
          tech: ["Industrial electricity", "Electrical networks", "Safety"]
        },
        {
          date: "Mar - Jun 2019",
          role: "LabVIEW Trainer / Electronics Practical Work Developer",
          company: "International Multidisciplinary School (EPI)",
          description: "Setup and animation of practical work for students in electronics and embedded systems, as part of my engineering training. Design of educational modules using LabVIEW, Arduino and MyRIO for teaching the basics of virtual instrumentation and embedded systems.",
          tasks: [
            "Design and development of ten interactive practical work modules for introduction to LabVIEW and virtual instrumentation: data acquisition, system control, hardware/software integration",
            "Integration of Arduino, MyRIO and custom development boards in concrete educational projects",
            "Creation of LabVIEW graphical interfaces allowing control of electronic components: LEDs, LCD displays, DC motors and stepper motors",
            "Training and support for students on the use of National Instruments tools (LabVIEW, MyDAQ, MyRIO) in connection with embedded systems",
            "Continuous evaluation of students and adaptation of educational content according to their needs",
            "Course support and technical documentation to facilitate autonomous learning"
          ],
          tech: ["LabVIEW", "Arduino (C)", "NI MyRIO", "NI-VISA", "MyDAQ", "Proteus", "Virtual Instrumentation"]
        }
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "DentalSoft: Dental practice management software",
          date: "2025 (Personal project)",
          description: "Complete design and development of a dental practice management software, designed and developed entirely solo from A to Z. The software is currently deployed and used in several dental practices in Tunisia, with very positive user feedback (notably Dr. Maram Slama, dental surgeon).",
          details: [
            "Modern and intuitive graphical interface developed with PySide6/Qt, designed for the specific needs of dental practices",
            "Integrated SQLite database for secure and optimized patient record management",
            "Automatic generation of professional PDF documents: medical prescriptions, detailed quotes, invoices",
            "Complete patient record management: medical history, treatments, appointments, payments",
            "Creation of a standalone executable and professional installer (Inno Setup) to facilitate deployment",
            "Thorough multi-machine testing in real-world conditions in dental practices",
            "Open-source project available on GitHub, demonstrating my ability to design, structure and finalize business software usable in real conditions"
          ],
          tech: ["Python", "PySide6/Qt", "SQLite", "ReportLab (PDF)", "Inno Setup", "Git"],
          link: "https://github.com/yassine-dhifaoui/DentalSoft"
        },
        {
          title: "Development of LabVIEW modules for teaching",
          date: "Mar - Jun 2019 (EPI, Tunisia)",
          description: "Design and animation of 10 interactive practical work modules for introduction to LabVIEW, Arduino and MyRIO, as part of teaching embedded systems and virtual instrumentation.",
          details: [
            "Design of complete educational modules covering data acquisition, system control and hardware/software integration",
            "Integration of Arduino and MyRIO boards in concrete educational projects",
            "Creation of graphical interfaces for controlling electronic components (LEDs, motors, displays)",
            "Training and support for students on National Instruments tools"
          ],
          tech: ["LabVIEW", "Arduino", "NI MyRIO", "Virtual Instrumentation"]
        },
        {
          title: "Virtual instrumentation for real-time supervision",
          date: "2019",
          description: "Development of a measurement and control HMI for real-time supervision of electronic systems.",
          details: [
            "Development of real-time supervision interfaces",
            "Measurement and control HMI for embedded systems",
            "Real-time data acquisition and processing"
          ],
          tech: ["LabVIEW", "Virtual Instrumentation", "Real-time"]
        },
        {
          title: "Variable voltage regulator",
          date: "2018",
          description: "Complete design of a voltage regulation electronic board, from CAD design to realization and testing.",
          details: [
            "Design of electronic schematic and printed circuit board (PCB)",
            "Complete CAD realization with electronic design software",
            "Testing and validation of voltage regulator in real conditions"
          ],
          tech: ["Electronic CAD", "PCB Design", "Testing and measurements"]
        },
        {
          title: "Stepper motor control via Android",
          date: "2016 (Bachelor's Final Project)",
          description: "Design of a stepper motor control system controlled by an Android mobile application via Bluetooth.",
          details: [
            "Design and realization of an electronic control board for stepper motor",
            "Development of an Android mobile application for remote control via Bluetooth",
            "System calibration and complete functional demonstration"
          ],
          tech: ["Arduino", "Android", "Bluetooth", "Power electronics"]
        }
      ]
    },
    education: {
        title: "Education",
        items: [
            {
                date: "2021 - 2024",
                degree: "Master's Degree (Work-study) - Signal and Image Processing",
                specialization: "Imaging and Technology for Medicine (TechMed)",
                institution: "Clermont Auvergne University (UCA), University School of Physics and Engineering, Clermont-Ferrand, France"
            },
            {
                date: "2017 - 2020",
                degree: "Engineer's Diploma - Electrical Engineering",
                specialization: "Networks and Embedded Systems",
                institution: "International Multidisciplinary School (EPI), Tunisia"
            },
            {
                date: "2012 - 2016",
                degree: "Bachelor's Degree - Electronics, Electrotechnics and Automation (LFEEA)",
                specialization: "",
                institution: "Faculty of Sciences Monastir (FSM), Tunisia"
            }
        ]
    },
    footer: {
        title: "Get In Touch",
        subtitle: "Feel free to contact me for collaborations, professional opportunities or just to exchange!",
        email: "yassine.dhifaoui.94@gmail.com",
        phone: "+33 6 69 40 16 26",
        github: "github.com/yassine-dhifaoui",
        linkedin: "linkedin.com/in/yassine-dhifaoui"
    }
  },
};


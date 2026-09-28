/* FP Library — language (EN / FR / AR, RTL) + light/dark theme.
   Works on the existing markup: text is matched against the dictionary below,
   so no data-i18n attributes are needed. Strings not listed stay unchanged.
   To translate more: add a row  [english, french, arabic]  to D. */
(function () {
  'use strict';

  var LANGS = ['en', 'fr', 'ar'];
  var D = [
    // ---- Navigation & shell
    [`Home`, `Accueil`, `الرئيسية`],
    [`Archive`, `Archives`, `الأرشيف`],
    [`Community Documents`, `Documents de la communauté`, `وثائق المجتمع`],
    [`Course Difficulty`, `Difficulté des cours`, `صعوبة المواد`],
    [`About`, `À propos`, `حول`],
    [`Terms & Privacy`, `Conditions et confidentialité`, `الشروط والخصوصية`],
    [`Upload Document`, `Déposer un document`, `رفع مستند`],
    [`Log In`, `Connexion`, `تسجيل الدخول`],
    [`Students`, `Étudiants`, `الطلبة`],
    [`Messages`, `Messages`, `الرسائل`],
    [`My Profile`, `Mon profil`, `ملفي الشخصي`],
    [`Log Out`, `Déconnexion`, `تسجيل الخروج`],
    [`Welcome to FP Library`, `Bienvenue sur FP Library`, `مرحبًا بك في FP Library`],
    [`Good luck with your academic year!`, `Bonne chance pour votre année universitaire !`, `بالتوفيق في سنتك الدراسية!`],
    [`FP Library | Physics Resources at FP Larache`, `FP Library | Ressources de physique à la FP Larache`, `FP Library | موارد الفيزياء بالكلية المتعددة التخصصات بالعرائش`],
    [`Terms & Data Privacy`, `Conditions et confidentialité des données`, `الشروط وخصوصية البيانات`],
    [`Conditions of Use`, `Conditions d'utilisation`, `شروط الاستخدام`],
    [`Conditions of Utilisation`, `Conditions d'utilisation`, `شروط الاستخدام`],
    [`Data Privacy`, `Confidentialité des données`, `خصوصية البيانات`],
    [`Last updated: September 2026`, `Dernière mise à jour : septembre 2026`, `آخر تحديث: شتنبر 2026`],

    // ---- Auth & profile
    [`Sign Up`, `Inscription`, `إنشاء حساب`],
    [`Continue with Google`, `Continuer avec Google`, `المتابعة عبر Google`],
    [`or`, `ou`, `أو`],
    [`Email`, `E-mail`, `البريد الإلكتروني`],
    [`Password`, `Mot de passe`, `كلمة المرور`],
    [`Forgot password?`, `Mot de passe oublié ?`, `نسيت كلمة المرور؟`],
    [`First Name`, `Prénom`, `الاسم الشخصي`],
    [`Last Name`, `Nom`, `الاسم العائلي`],
    [`Year of Study`, `Année d'études`, `السنة الدراسية`],
    [`Select your year`, `Choisissez votre année`, `اختر سنتك`],
    [`Semester 1`, `Semestre 1`, `الفصل 1`],
    [`Semester 2`, `Semestre 2`, `الفصل 2`],
    [`Semester 3`, `Semestre 3`, `الفصل 3`],
    [`Semester 4`, `Semestre 4`, `الفصل 4`],
    [`Semester 5`, `Semestre 5`, `الفصل 5`],
    [`Semester 6`, `Semestre 6`, `الفصل 6`],
    [`Master 1`, `Master 1`, `ماستر 1`],
    [`Master 2`, `Master 2`, `ماستر 2`],
    [`Other`, `Autre`, `أخرى`],
    [`Create Account`, `Créer un compte`, `إنشاء الحساب`],
    [`Just one more thing`, `Encore une chose`, `شيء أخير`],
    [`What year are you in? This helps us say hi properly.`, `Dans quelle année êtes-vous ? Cela nous aide à mieux vous accueillir.`, `في أي سنة أنت؟ هذا يساعدنا على استقبالك بشكل أفضل.`],
    [`Save`, `Enregistrer`, `حفظ`],
    [`Skip for now`, `Passer pour l'instant`, `تخطَّ الآن`],
    [`This is what other students see when they open your profile.`, `Voici ce que les autres étudiants voient en ouvrant votre profil.`, `هذا ما يراه الطلبة الآخرون عند فتح ملفك الشخصي.`],
    [`🎲 New look`, `🎲 Nouveau look`, `🎲 مظهر جديد`],
    [`Avatar style:`, `Style d'avatar :`, `نمط الصورة الرمزية:`],
    [`♂ Male`, `♂ Homme`, `♂ ذكر`],
    [`♀ Female`, `♀ Femme`, `♀ أنثى`],
    [`Badges`, `Badges`, `الأوسمة`],
    [`Bio`, `Bio`, `نبذة`],
    [`Profile saved ✓`, `Profil enregistré ✓`, `تم حفظ الملف ✓`],
    [`Save Changes`, `Enregistrer les modifications`, `حفظ التغييرات`],
    [`Search for a student by name to view their profile.`, `Recherchez un étudiant par nom pour voir son profil.`, `ابحث عن طالب بالاسم لعرض ملفه الشخصي.`],
    [`Start typing a name to find a student.`, `Commencez à saisir un nom pour trouver un étudiant.`, `ابدأ بكتابة اسم للعثور على طالب.`],
    [`No students found.`, `Aucun étudiant trouvé.`, `لم يتم العثور على طلبة.`],
    [`← All students`, `← Tous les étudiants`, `→ جميع الطلبة`],
    [`Send a message`, `Envoyer un message`, `إرسال رسالة`],
    [`Edit my profile`, `Modifier mon profil`, `تعديل ملفي`],
    [`Your conversations with other students.`, `Vos conversations avec les autres étudiants.`, `محادثاتك مع الطلبة الآخرين.`],
    [`No conversations yet. Open a student's profile and tap “Send a message”.`, `Aucune conversation pour l'instant. Ouvrez le profil d'un étudiant et touchez « Envoyer un message ».`, `لا توجد محادثات بعد. افتح ملف طالب واضغط «إرسال رسالة».`],
    [`Browse students`, `Parcourir les étudiants`, `تصفح الطلبة`],
    [`← Messages`, `← Messages`, `→ الرسائل`],
    [`Send`, `Envoyer`, `إرسال`],
    [`Loading…`, `Chargement…`, `جارٍ التحميل…`],
    [`Saving…`, `Enregistrement…`, `جارٍ الحفظ…`],
    [`No messages yet. Say hi 👋`, `Aucun message pour l'instant. Dites bonjour 👋`, `لا توجد رسائل بعد. ابدأ بالتحية 👋`],
    [`Could not load your profile. Please try again.`, `Impossible de charger votre profil. Réessayez.`, `تعذّر تحميل ملفك الشخصي. حاول مرة أخرى.`],
    [`Please verify your email first. We just sent you a new link — check your inbox.`, `Veuillez d'abord vérifier votre e-mail. Nous venons de vous envoyer un nouveau lien — consultez votre boîte de réception.`, `يرجى تأكيد بريدك الإلكتروني أولًا. أرسلنا لك رابطًا جديدًا — تحقق من صندوق الوارد.`],
    [`Enter your email above first, then tap "Forgot password?" again.`, `Saisissez d'abord votre e-mail ci-dessus, puis touchez à nouveau « Mot de passe oublié ? ».`, `أدخل بريدك الإلكتروني أعلاه أولًا، ثم اضغط «نسيت كلمة المرور؟» مجددًا.`],
    [`Password reset email sent. Check your inbox (and spam folder).`, `E-mail de réinitialisation envoyé. Consultez votre boîte de réception (et vos spams).`, `تم إرسال رسالة إعادة تعيين كلمة المرور. تحقق من الوارد (والرسائل غير المرغوب فيها).`],
    [`If that email has an account, a reset link is on its way.`, `Si cet e-mail correspond à un compte, un lien de réinitialisation est en route.`, `إذا كان لهذا البريد حساب، فسيصلك رابط لإعادة التعيين.`],

    // ---- Badges
    [`Admin`, `Admin`, `مشرف`], [`Site administrator`, `Administrateur du site`, `مسؤول الموقع`],
    [`Explorer`, `Explorateur`, `مستكشف`], [`Checked out the Archive`, `A visité les archives`, `زار الأرشيف`],
    [`Collector`, `Collectionneur`, `جامع`], [`Saved your first favorite module`, `Premier module favori enregistré`, `حفظ أول وحدة مفضلة`],
    [`Reviewer`, `Évaluateur`, `مُقيِّم`], [`Posted a professor review`, `A publié un avis sur un professeur`, `نشر تقييمًا لأستاذ`],
    [`Socializer`, `Sociable`, `اجتماعي`], [`Sent a message to another student`, `A envoyé un message à un étudiant`, `أرسل رسالة إلى طالب آخر`],
    [`Regular`, `Habitué`, `مواظب`], [`Visited three days in a row`, `Visite trois jours d'affilée`, `زار الموقع ثلاثة أيام متتالية`],
    [`Contributor`, `Contributeur`, `مساهم`], [`Shared a document with the library`, `A partagé un document avec la bibliothèque`, `شارك مستندًا مع المكتبة`],

    // ---- Hero
    [`Hey`, `Salut`, `مرحبًا`],
    [`there`, `toi`, `بك`],
    [`! Welcome to our open library.`, `! Bienvenue dans notre bibliothèque ouverte.`, `! أهلًا بك في مكتبتنا المفتوحة.`],
    [`INDEPENDENT STUDENT RESOURCE LIBRARY`, `BIBLIOTHÈQUE DE RESSOURCES ÉTUDIANTE INDÉPENDANTE`, `مكتبة موارد طلابية مستقلة`],
    [`Physics resources,`, `Des ressources de physique,`, `موارد الفيزياء،`],
    [`organized for students.`, `organisées pour les étudiants.`, `منظَّمة للطلبة.`],
    [`An independent academic library created by students at Faculté Polydisciplinaire de Larache. Explore course notes, summaries, exercises, tutorials, exams, and useful resources shared to support collaborative learning.`, `Une bibliothèque académique indépendante créée par des étudiants de la Faculté Polydisciplinaire de Larache. Explorez des notes de cours, résumés, exercices, tutoriels, examens et ressources utiles partagés pour favoriser l'apprentissage collaboratif.`, `مكتبة أكاديمية مستقلة أنشأها طلبة الكلية المتعددة التخصصات بالعرائش. استكشف ملخصات الدروس والتمارين والدروس التطبيقية والامتحانات وموارد مفيدة يتم تبادلها لدعم التعلّم التشاركي.`],
    [`Explore Archive`, `Explorer les archives`, `استكشف الأرشيف`],
    [`Upload a Document`, `Déposer un document`, `ارفع مستندًا`],
    [`Upload a document`, `Déposer un document`, `ارفع مستندًا`],
    [`students`, `étudiants`, `طلبة`],
    [`documents`, `documents`, `مستندات`],

    // ---- Archive
    [`ACADEMIC ARCHIVE`, `ARCHIVES ACADÉMIQUES`, `الأرشيف الأكاديمي`],
    [`Physics resources for`, `Ressources de physique pour`, `موارد الفيزياء للفصول`],
    [`Browse the available modules and organize your study materials by semester.`, `Parcourez les modules disponibles et organisez vos supports d'étude par semestre.`, `تصفّح الوحدات المتوفرة ونظّم مواد دراستك حسب الفصل.`],
    [`No modules match your search.`, `Aucun module ne correspond à votre recherche.`, `لا توجد وحدات مطابقة لبحثك.`],
    [`★ Show my favorites only`, `★ Afficher mes favoris uniquement`, `★ عرض مفضلاتي فقط`],
    [`Log in to save and view your favorite modules.`, `Connectez-vous pour enregistrer et voir vos modules favoris.`, `سجّل الدخول لحفظ وحداتك المفضلة وعرضها.`],
    [`CONTRIBUTE`, `CONTRIBUER`, `ساهم`],
    [`Have a useful document?`, `Vous avez un document utile ?`, `هل لديك مستند مفيد؟`],
    [`Share course notes, summaries, exercises, exams, or corrections with other Physics students. Submissions may be reviewed before being added to the public library.`, `Partagez des notes de cours, résumés, exercices, examens ou corrigés avec d'autres étudiants en physique. Les envois peuvent être examinés avant d'être ajoutés à la bibliothèque publique.`, `شارك ملخصات الدروس والتمارين والامتحانات أو التصحيحات مع طلبة الفيزياء الآخرين. قد تتم مراجعة المستندات قبل إضافتها إلى المكتبة العامة.`],
    [`Submit Document`, `Soumettre un document`, `إرسال مستند`],
    [`Tronc Commun Physique`, `Tronc Commun Physique`, `الجذع المشترك للفيزياء`],
    [`Algebra fundamentals and problem-solving resources.`, `Notions fondamentales d'algèbre et ressources de résolution de problèmes.`, `أساسيات الجبر وموارد لحل المسائل.`],
    [`Limits, functions, derivatives, and mathematical analysis.`, `Limites, fonctions, dérivées et analyse mathématique.`, `النهايات والدوال والمشتقات والتحليل الرياضي.`],
    [`Temperature, heat, systems, and thermodynamic principles.`, `Température, chaleur, systèmes et principes thermodynamiques.`, `الحرارة ودرجة الحرارة والأنظمة والمبادئ الترموديناميكية.`],
    [`Kinematics, dynamics, forces, and motion.`, `Cinématique, dynamique, forces et mouvement.`, `الحركية والديناميكا والقوى والحركة.`],
    [`Atomic structure and introductory quantum concepts.`, `Structure atomique et notions d'introduction à la physique quantique.`, `البنية الذرية ومفاهيم تمهيدية في الفيزياء الكمية.`],
    [`Energy changes, reactions, and chemical thermodynamics.`, `Variations d'énergie, réactions et thermodynamique chimique.`, `تغيرات الطاقة والتفاعلات والترموديناميك الكيميائي.`],
    [`Advanced algebra, vector spaces, and linear systems.`, `Algèbre avancée, espaces vectoriels et systèmes linéaires.`, `جبر متقدم وفضاءات متجهية وأنظمة خطية.`],
    [`Electric charge, fields, circuits, and electrical laws.`, `Charge électrique, champs, circuits et lois de l'électricité.`, `الشحنة الكهربائية والحقول والدارات والقوانين الكهربائية.`],
    [`Chemical bonding and molecular structure.`, `Liaison chimique et structure moléculaire.`, `الروابط الكيميائية والبنية الجزيئية.`],
    [`Solutions, concentration, reactions, and equilibrium.`, `Solutions, concentration, réactions et équilibre.`, `المحاليل والتركيز والتفاعلات والتوازن.`],
    [`Light rays, lenses, mirrors, and optical systems.`, `Rayons lumineux, lentilles, miroirs et systèmes optiques.`, `الأشعة الضوئية والعدسات والمرايا والأنظمة البصرية.`],
    [`Digital tools, computing, and introductory AI concepts.`, `Outils numériques, informatique et notions d'introduction à l'IA.`, `أدوات رقمية وحوسبة ومفاهيم تمهيدية في الذكاء الاصطناعي.`],
    [`Further mathematical analysis and applications.`, `Suite de l'analyse mathématique et applications.`, `مزيد من التحليل الرياضي وتطبيقاته.`],
    [`Course notes, exercises, and useful resources.`, `Notes de cours, exercices et ressources utiles.`, `ملخصات الدروس والتمارين وموارد مفيدة.`],
    [`Open Resources →`, `Ouvrir les ressources →`, `فتح الموارد ←`],

    // ---- Community documents
    [`Shared by students`, `Partagé par les étudiants`, `من مشاركة الطلبة`],
    [`Explore useful academic documents shared by students and contributors. Find PFE reports, TP reports, Master-level resources, projects, research papers, and more.`, `Explorez des documents académiques utiles partagés par des étudiants et des contributeurs : rapports de PFE, rapports de TP, ressources de niveau Master, projets, articles de recherche, et plus encore.`, `استكشف مستندات أكاديمية مفيدة شاركها الطلبة والمساهمون: تقارير PFE، وتقارير الأشغال التطبيقية، وموارد مستوى الماستر، ومشاريع، وأوراق بحثية، وغير ذلك.`],
    [`Log in to read and open the community documents.`, `Connectez-vous pour lire et ouvrir les documents de la communauté.`, `سجّل الدخول لقراءة وثائق المجتمع وفتحها.`],
    [`Browse Document Categories`, `Parcourir les catégories de documents`, `تصفّح فئات المستندات`],
    [`PFE Reports`, `Rapports de PFE`, `تقارير PFE`],
    [`End-of-study projects, research reports, technical studies, and final-year project documents.`, `Projets de fin d'études, rapports de recherche, études techniques et documents de projets de dernière année.`, `مشاريع نهاية الدراسة وتقارير البحث والدراسات التقنية ووثائق مشاريع السنة الأخيرة.`],
    [`Explore PFE Reports →`, `Explorer les rapports de PFE →`, `استكشف تقارير PFE ←`],
    [`TP Reports`, `Rapports de TP`, `تقارير الأشغال التطبيقية`],
    [`Practical work reports in physics, mathematics, electronics, thermodynamics, optics, and related subjects.`, `Rapports de travaux pratiques en physique, mathématiques, électronique, thermodynamique, optique et disciplines connexes.`, `تقارير الأشغال التطبيقية في الفيزياء والرياضيات والإلكترونيك والترموديناميك والبصريات ومواد أخرى.`],
    [`Explore TP Reports →`, `Explorer les rapports de TP →`, `استكشف تقارير الأشغال التطبيقية ←`],
    [`Master Physics`, `Physique Master`, `فيزياء الماستر`],
    [`Advanced physics documents covering quantum physics, nuclear physics, materials, energy, and applied physics.`, `Documents de physique avancée : physique quantique, physique nucléaire, matériaux, énergie et physique appliquée.`, `مستندات فيزياء متقدمة تشمل الفيزياء الكمية والنووية والمواد والطاقة والفيزياء التطبيقية.`],
    [`Explore Master Physics →`, `Explorer la physique Master →`, `استكشف فيزياء الماستر ←`],
    [`Contribute to the library`, `Contribuer à la bibliothèque`, `ساهم في المكتبة`],
    [`Share your reports, projects, corrections, or academic resources with other students.`, `Partagez vos rapports, projets, corrigés ou ressources académiques avec d'autres étudiants.`, `شارك تقاريرك ومشاريعك وتصحيحاتك أو مواردك الأكاديمية مع باقي الطلبة.`],

    // ---- Course difficulty (page source is French)
    [`Plan your semester`, `Planifiez votre semestre`, `خطّط لفصلك الدراسي`],
    [`Discover how hard your modules are`, `Découvrez la difficulté de vos modules`, `اكتشف مدى صعوبة وحداتك`],
    [`A quick overview of all Tronc Commun Physique modules (S1–S4): perceived difficulty, how necessary they are for the rest of the curriculum, and the recommended study priority. Click a semester in the menu to open it, then “Discover” to go straight to the module's resources. These are starting estimates — to be adjusted with community feedback.`, `Un aperçu rapide de tous les modules du Tronc Commun Physique (S1–S4) : difficulté ressentie, nécessité pour la suite du cursus, et priorité d'étude conseillée. Cliquez sur un semestre dans le menu pour l'ouvrir, puis sur « Découvrir » pour accéder directement aux ressources du module. Ce sont des estimations de départ — à ajuster avec les retours de la communauté.`, `نظرة سريعة على جميع وحدات الجذع المشترك للفيزياء (S1–S4): الصعوبة المتوقعة، ومدى أهميتها لباقي المسار، وأولوية الدراسة المقترحة. اضغط على فصل في القائمة لفتحه، ثم على «اكتشف» للوصول مباشرة إلى موارد الوحدة. هذه تقديرات أولية — تُعدَّل حسب ملاحظات المجتمع.`],
    [`Semesters`, `Semestres`, `الفصول`],
    [`Difficulty`, `Difficulté`, `الصعوبة`],
    [`Necessity`, `Nécessité`, `الأهمية`],
    [`Priority`, `Priorité`, `الأولوية`],
    [`Scores out of 10.`, `Scores sur 10.`, `الدرجات على 10.`],
    [`Discover →`, `Découvrir →`, `اكتشف ←`],

    // ---- About & footer
    [`SYSTEM INFORMATION`, `INFORMATIONS SYSTÈME`, `معلومات النظام`],
    [`Built by students.`, `Fait par des étudiants.`, `من إنجاز الطلبة.`],
    [`Open to everyone.`, `Ouvert à tous.`, `مفتوح للجميع.`],
    [`Important notice:`, `Avis important :`, `تنبيه مهم:`],
    [`A public student resource library for Physics students at FP Larache.`, `Une bibliothèque publique de ressources pour les étudiants en physique de la FP Larache.`, `مكتبة موارد طلابية عامة لطلبة الفيزياء بالكلية المتعددة التخصصات بالعرائش.`],
    [`System Info`, `Infos système`, `معلومات النظام`],
    [`Upload`, `Déposer`, `رفع`],
    [`Independent student project • Public educational resource • Not officially affiliated with the university`, `Projet étudiant indépendant • Ressource éducative publique • Sans affiliation officielle avec l'université`, `مشروع طلابي مستقل • مورد تعليمي عام • غير تابع رسميًا للجامعة`],

    // ---- Attributes (placeholders / aria-labels)
    [`Close`, `Fermer`, `إغلاق`],
    [`FP Library home`, `Accueil FP Library`, `الصفحة الرئيسية لـ FP Library`],
    [`Main navigation`, `Navigation principale`, `التنقل الرئيسي`],
    [`Account menu`, `Menu du compte`, `قائمة الحساب`],
    [`Legal sections`, `Sections juridiques`, `الأقسام القانونية`],
    [`First name`, `Prénom`, `الاسم الشخصي`],
    [`Last name`, `Nom`, `الاسم العائلي`],
    [`At least 6 characters`, `Au moins 6 caractères`, `6 أحرف على الأقل`],
    [`Get a new random look`, `Obtenir un nouveau look aléatoire`, `احصل على مظهر عشوائي جديد`],
    [`Tell other students a bit about yourself: interests, favorite modules, what you're working on…`, `Parlez un peu de vous : centres d'intérêt, modules préférés, ce sur quoi vous travaillez…`, `حدّث الطلبة الآخرين عن نفسك: اهتماماتك ووحداتك المفضلة وما تعمل عليه…`],
    [`Search by name or year…`, `Rechercher par nom ou année…`, `ابحث بالاسم أو السنة…`],
    [`Write a message…`, `Écrire un message…`, `اكتب رسالة…`],
    [`Search modules by name or code (e.g. Électricité, S2 · M02)…`, `Rechercher un module par nom ou code (ex. Électricité, S2 · M02)…`, `ابحث عن وحدة بالاسم أو الرمز (مثال: Électricité، S2 · M02)…`],
    [`Search modules`, `Rechercher des modules`, `بحث في الوحدات`],
    [`Semestres`, `Semestres`, `الفصول`]
  ];

  // UI labels for the two toggles
  var UI = {
    en: { theme: 'Toggle light / dark mode', lang: 'Language' },
    fr: { theme: 'Basculer clair / sombre', lang: 'Langue' },
    ar: { theme: 'تبديل الوضع الفاتح / الداكن', lang: 'اللغة' }
  };

  // Strings assembled in JS at runtime
  var PATTERNS = [
    { re: /^(\d+) MODULES$/, fr: '$1 MODULES', ar: '$1 وحدات', en: '$1 MODULES' },
    { re: /^Badge earned: (.+) — (.+)$/, fr: 'Badge obtenu : $1 — $2', ar: 'تم الحصول على وسام: $1 — $2', en: 'Badge earned: $1 — $2', inner: true },
    { re: /^Account created! Check your email \((.+)\) for a verification link before logging in\.$/, fr: 'Compte créé ! Consultez votre e-mail ($1) pour le lien de vérification avant de vous connecter.', ar: 'تم إنشاء الحساب! تحقق من بريدك ($1) للحصول على رابط التأكيد قبل تسجيل الدخول.', en: 'Account created! Check your email ($1) for a verification link before logging in.' }
  ];

  var IDX = {};
  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  D.forEach(function (row) { row.forEach(function (s) { IDX[norm(s)] = row; }); });

  var lang = 'en';
  var orig = new WeakMap();   // text node -> original text
  var wrote = new WeakMap();  // text node -> last text we wrote
  var attrOrig = new WeakMap(); // element -> {attr: original}
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];

  function tr(s, l) {
    var n = norm(s);
    var row = IDX[n];
    if (row) return row[LANGS.indexOf(l)];
    for (var i = 0; i < PATTERNS.length; i++) {
      var m = n.match(PATTERNS[i].re);
      if (m) {
        var p = PATTERNS[i];
        return p[l].replace(/\$(\d)/g, function (_, k) {
          var v = m[+k];
          return p.inner ? tr(v, l) : v;
        });
      }
    }
    return null;
  }

  function doText(node) {
    var raw = node.data, base = raw;
    if (wrote.has(node) && wrote.get(node) === raw) base = orig.get(node);
    else orig.set(node, raw);
    if (!norm(base)) return;
    var t = tr(base, lang);
    var out = t === null ? base : base.match(/^\s*/)[0] + t + base.match(/\s*$/)[0];
    if (out !== raw) node.data = out;
    wrote.set(node, out);
  }

  function doAttrs(el) {
    if (!el.getAttribute) return;
    var saved = attrOrig.get(el) || {};
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      if (!(a in saved)) saved[a] = el.getAttribute(a);
      var t = tr(saved[a], lang);
      el.setAttribute(a, t === null ? saved[a] : t);
    });
    attrOrig.set(el, saved);
  }

  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    var tag = root.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE') return;
    doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) {
        var p = n.parentNode && n.parentNode.tagName;
        if (p !== 'SCRIPT' && p !== 'STYLE') doText(n);
      } else doAttrs(n);
    }
  }

  var observer = new MutationObserver(function (records) {
    records.forEach(function (r) {
      if (r.type === 'characterData') {
        if (wrote.get(r.target) !== r.target.data) doText(r.target);
      } else {
        r.addedNodes.forEach(walk);
      }
    });
  });

  function applyLang(l) {
    lang = LANGS.indexOf(l) > -1 ? l : 'en';
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    walk(document.body);
    var t = tr('FP Library | Physics Resources at FP Larache', lang);
    if (t) document.title = t;
    try { localStorage.setItem('fp-lang', lang); } catch (e) {}
    syncControls();
  }

  // ---- Theme
  function applyTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'light' ? '#f4f7fd' : '#0b1220');
    try { localStorage.setItem('fp-theme', mode); } catch (e) {}
    syncControls();
  }

  // ---- Navbar controls
  var themeBtn, langBtns = {};
  function syncControls() {
    if (!themeBtn) return;
    var light = document.documentElement.getAttribute('data-theme') === 'light';
    themeBtn.setAttribute('aria-label', UI[lang].theme);
    themeBtn.title = UI[lang].theme;
    themeBtn.innerHTML = light ? MOON : SUN;
    LANGS.forEach(function (l) {
      langBtns[l].classList.toggle('active', l === lang);
      langBtns[l].setAttribute('aria-pressed', l === lang ? 'true' : 'false');
    });
    themeBtn.parentNode.querySelector('.lang-switch').setAttribute('aria-label', UI[lang].lang);
  }

  var SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

  function buildControls() {
    var host = document.querySelector('.nav-actions') || document.querySelector('.nav-container');
    if (!host) return;
    var wrap = document.createElement('div');
    wrap.className = 'nav-prefs';

    themeBtn = document.createElement('button');
    themeBtn.type = 'button';
    themeBtn.className = 'theme-toggle';
    themeBtn.addEventListener('click', function () {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });

    var group = document.createElement('div');
    group.className = 'lang-switch';
    group.setAttribute('role', 'group');
    [['en', 'EN'], ['fr', 'FR'], ['ar', 'ع']].forEach(function (p) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = p[1];
      b.lang = p[0];
      b.addEventListener('click', function () { applyLang(p[0]); });
      langBtns[p[0]] = b;
      group.appendChild(b);
    });

    wrap.appendChild(themeBtn);
    wrap.appendChild(group);
    host.insertBefore(wrap, host.firstChild);
  }

  function init() {
    buildControls();
    var saved = 'en';
    try { saved = localStorage.getItem('fp-lang') || 'en'; } catch (e) {}
    var th = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(th);
    applyLang(saved);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.FPI18n = { setLang: applyLang, setTheme: applyTheme, t: function (s) { var r = tr(s, lang); return r === null ? s : r; } };
})();

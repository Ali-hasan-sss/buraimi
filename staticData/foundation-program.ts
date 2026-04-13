export type FoundationProgramData = {
  level1Courses: Array<{ code: string; titleAr: string; titleEn: string; credits: number }>;
  level2Courses: Array<{ code: string; titleAr: string; titleEn: string; credits: number }>;
  heroTitleAr: string;
  heroTitleEn: string;
  heroSubtitleAr: string;
  heroSubtitleEn: string;
  overviewTitleAr: string;
  overviewTitleEn: string;
  overviewText1Ar: string;
  overviewText1En: string;
  overviewText2Ar: string;
  overviewText2En: string;
  admissionTitleAr: string;
  admissionTitleEn: string;
  admissionTextAr: string;
  admissionTextEn: string;
  studyTitleAr: string;
  studyTitleEn: string;
  studyNoteAr: string;
  studyNoteEn: string;
  visionSectionTitleAr: string;
  visionSectionTitleEn: string;
  visionTitleAr: string;
  visionTitleEn: string;
  visionTextAr: string;
  visionTextEn: string;
  missionTitleAr: string;
  missionTitleEn: string;
  missionTextAr: string;
  missionTextEn: string;
};

export const foundationProgramSeed: FoundationProgramData = {
  level1Courses: [
    { code: "ENGL1001", titleAr: "اللغة الإنجليزية - المستوى الأول", titleEn: "English Language - Level 1", credits: 12 },
    { code: "MATH1001", titleAr: "الرياضيات - المستوى الأول", titleEn: "Mathematics - Level 1", credits: 6 },
    { code: "IT1001", titleAr: "تكنولوجيا المعلومات - المستوى الأول", titleEn: "Information Technology - Level 1", credits: 3 },
    { code: "STUDY1001", titleAr: "المهارات الدراسية", titleEn: "Study Skills", credits: 3 },
  ],
  level2Courses: [
    { code: "ENGL1002", titleAr: "اللغة الإنجليزية - المستوى الثاني", titleEn: "English Language - Level 2", credits: 12 },
    { code: "MATH1002", titleAr: "الرياضيات - المستوى الثاني", titleEn: "Mathematics - Level 2", credits: 6 },
    { code: "IT1002", titleAr: "تكنولوجيا المعلومات - المستوى الثاني", titleEn: "Information Technology - Level 2", credits: 3 },
    { code: "STUDY1002", titleAr: "مهارات البحث الأكاديمي", titleEn: "Academic Research Skills", credits: 3 },
  ],
  heroTitleAr: "البرنامج التأسيسي العام",
  heroTitleEn: "General Foundation Program",
  heroSubtitleAr: "بوابتك نحو النجاح الأكاديمي في كلية البريمي الجامعية",
  heroSubtitleEn: "Your gateway to academic success at Al Buraimi University College",
  overviewTitleAr: "نبذة عن البرنامج التأسيسي",
  overviewTitleEn: "About the Foundation Program",
  overviewText1Ar:
    "يهدف البرنامج التأسيسي العام إلى إعداد الطلاب للدخول إلى المرحلة الجامعية بتزويدهم بالمهارات الأساسية اللازمة للنجاح الأكاديمي.",
  overviewText1En:
    "The General Foundation Program prepares students for university studies by equipping them with the essential skills for academic success.",
  overviewText2Ar:
    "صُممت المواد الدراسية وفقاً للمعايير الأكاديمية العُمانية للبرامج التأسيسية التي قدمتها الهيئة العُمانية للاعتماد الأكاديمي ووزارة التعليم العالي.",
  overviewText2En:
    "The curriculum is designed according to Omani academic standards for foundation programs set by the accreditation authority and the Ministry of Higher Education.",
  admissionTitleAr: "تعليمات قبول الطلبة",
  admissionTitleEn: "Admission Instructions",
  admissionTextAr:
    "تقوم إدارة القبول والتسجيل بتسجيل جميع الطلاب الراغبين في الالتحاق بكلية البريمي الجامعية وفق الإعلانات الدورية والمعايير المعتمدة.",
  admissionTextEn:
    "The Admissions and Registration Department enrolls all students who wish to join Al Buraimi University College according to periodic announcements and approved criteria.",
  studyTitleAr: "الخطة الدراسية",
  studyTitleEn: "Study Plan",
  studyNoteAr:
    "يجب على الطالب إكمال جميع متطلبات المستوى بنجاح قبل الانتقال إلى المستوى التالي أو البرنامج الأكاديمي.",
  studyNoteEn:
    "The student must complete all level requirements successfully before moving to the next level or to the academic program.",
  visionSectionTitleAr: "الرؤية والرسالة والأهداف",
  visionSectionTitleEn: "Vision, Mission and Goals",
  visionTitleAr: "الرؤية",
  visionTitleEn: "Vision",
  visionTextAr:
    "تتمثل رؤية كلية البريمي الجامعية في مواصلة طريق التميز في تطوير مركز متكامل قابل للتطبيق والعمل وملائم يلبي احتياجات جميع طلاب الكلية.",
  visionTextEn:
    "BUC vision is to continue excellence in developing an integrated and practical center that serves all students and supports the college mission.",
  missionTitleAr: "مهمة البرنامج التأسيسي العام",
  missionTitleEn: "General Foundation Program Mission",
  missionTextAr:
    "تزويد طلابنا بإتقان اللغة الإنجليزية ومهارات تكنولوجيا المعلومات الأساسية ومهارات الرياضيات لمتابعة دراساتهم الجامعية.",
  missionTextEn:
    "To equip our students with English proficiency, essential IT skills, and mathematics skills to pursue their university studies successfully.",
};

type BilingualText = { ar: string; en: string };

export type FoundationLevelOneDetailsData = {
  heroTitle: BilingualText;
  heroSubtitle: BilingualText;
  heroDescription: BilingualText;
  courseDescriptionTitle: BilingualText;
  courseDescriptionText: BilingualText;
  courseGoalsTitle: BilingualText;
  courseGoalsItems: BilingualText[];
  programGoalsTitle: BilingualText;
  programGoalsIntro: BilingualText;
  programGoalsItems: BilingualText[];
  learningOutcomesTitle: BilingualText;
  learningOutcomesIntro: BilingualText;
  grammarTitle: BilingualText;
  grammarItems: BilingualText[];
  terminologyTitle: BilingualText;
  terminologyItems: BilingualText[];
  speakingTitle: BilingualText;
  speakingItems: BilingualText[];
  listeningTitle: BilingualText;
  listeningItems: BilingualText[];
  readingTitle: BilingualText;
  readingItems: BilingualText[];
  writingTitle: BilingualText;
  writingItems: BilingualText[];
  integratedResultsTitle: BilingualText;
  timeManagementTitle: BilingualText;
  timeManagementItems: BilingualText[];
  researchSkillsTitle: BilingualText;
  researchSkillsItems: BilingualText[];
  noteTakingTitle: BilingualText;
  noteTakingItems: BilingualText[];
  presentationsTitle: BilingualText;
  presentationsItems: BilingualText[];
  importantNoteTitle: BilingualText;
  importantNoteText: BilingualText;
  ctaTitle: BilingualText;
  ctaText: BilingualText;
  ctaBackLabel: BilingualText;
};

export const foundationLevelOneDetailsSeed: FoundationLevelOneDetailsData = {
  heroTitle: { ar: "البرنامج التأسيسي - المستوى الأول", en: "Foundation Program - Level 1" },
  heroSubtitle: { ar: "Foundation Program - Level 1", en: "البرنامج التأسيسي - المستوى الأول" },
  heroDescription: {
    ar: "اللغة الإنجليزية المكثفة المتكاملة لبناء أساس قوي للنجاح الأكاديمي",
    en: "Integrated Intensive English for building a strong foundation for academic success",
  },
  courseDescriptionTitle: { ar: "وصف المادة", en: "Course Description" },
  courseDescriptionText: {
    ar: "اللغة الإنجليزية المكثفة المتكاملة - المستوى 1 هو منهج دراسي يركز على المتعلم مصمم لتطوير إجادة اللغة الإنجليزية بشكل عام في المستويين الأساسي والابتدائي من أجل إعداد الطلاب لتحديات الدراسات ما قبل المتوسطة في المستوى الثاني. ويتبع المنهج نهجاً متدرجاً مع مجموعة متنوعة من الأنشطة التواصلية المحفزة والقابلة للإدارة مما يمنح الطلاب إحساساً واضحاً وثابتاً بالتقدم ويساعدهم على تعزيز معرفتهم باللغة الإنجليزية. كما أنه يساعد الطلاب على بناء وتطوير مجموعة واسعة من المفردات عالية التردد ونطقها.",
    en: "Integrated Intensive English - Level 1 is a learner-centered course designed to develop students' general English proficiency at elementary and pre-intermediate levels in preparation for Level 2. The course follows a progressive approach with a range of motivating and manageable communicative activities that provide steady progress and strengthen language knowledge. It also helps students build and develop a broad range of high-frequency vocabulary and pronunciation.",
  },
  courseGoalsTitle: { ar: "الأهداف التي تتناولها هذه المقرر الدراسي", en: "Course Goals" },
  courseGoalsItems: [
    {
      ar: "لمساعدة الطلاب على اكتساب الكفاءة الكافية في اللغة الإنجليزية وإعدادهم لدراساتهم الجامعية في الأقسام الأكاديمية.",
      en: "Help students acquire sufficient English proficiency and prepare them for university studies in academic departments.",
    },
    {
      ar: "تهيئة الطلاب في المهارات الدراسية وأساليب التعلم من خلال تدوين الملاحظات والبحث عن المعلومات وجمعها من مصادر مختلفة والقيام بالمشاريع وكتابة الواجبات التي تساعدهم في دراستهم الأكاديمية.",
      en: "Prepare students in study skills and learning methods through note-taking, researching and collecting information from different sources, completing projects, and writing assignments that support their academic studies.",
    },
  ],
  programGoalsTitle: { ar: "أهداف البرنامج", en: "Program Goals" },
  programGoalsIntro: {
    ar: "بنهاية هذه المقرّر، سيتم تحقيق أهداف البرنامج التالية:",
    en: "By the end of this course, the following program goals are expected to be achieved:",
  },
  programGoalsItems: [
    {
      ar: "المشاركة في المناقشة حول موضوع ذي صلة بدراستهم من خلال طرح الأسئلة، والموافقة/عدم الموافقة، وطلب التوضيح، ومشاركة المعلومات، والتعبير عن الآراء وطلبها.",
      en: "Participate in discussions on topics relevant to their studies by asking questions, agreeing/disagreeing, requesting clarification, sharing information, and expressing and eliciting opinions.",
    },
    {
      ar: "إعادة صياغة المعلومات (شفهيًا أو كتابيًا) من نص مكتوب أو منطوق أو من بيانات معروضة بيانيًا.",
      en: "Paraphrase information orally or in writing from written or spoken texts, or from visually presented data.",
    },
    {
      ar: "إعداد وإلقاء حديث مدته دقيقتان على الأقل. استخدام مصادر المكتبة في إعداد الحديث، والتحدث بوضوح وثقة، والتواصل بالعينين، واستخدام لغة الجسد لدعم إيصال الأفكار والرد بثقة على الأسئلة.",
      en: "Prepare and deliver a talk of at least two minutes, using library resources, speaking clearly and confidently, maintaining eye contact, using body language effectively, and responding confidently to questions.",
    },
    {
      ar: "كتابة نصوص من 100 كلمة كحد أدنى، مع إظهار التحكم في التخطيط والتنظيم وعلامات الترقيم والتهجئة وتركيب الجمل والقواعد والمفردات.",
      en: "Write texts of at least 100 words, demonstrating control of planning, organization, punctuation, spelling, sentence structure, grammar, and vocabulary.",
    },
    {
      ar: "تدوين الملاحظات والرد على الأسئلة المتعلقة بالموضوع والأفكار الرئيسية والتفاصيل والآراء أو الحجج من نص استماع مطول (مثل المحاضرة أو بث الأخبار).",
      en: "Take notes and answer questions on topic, main ideas, details, opinions, or arguments from extended listening texts (e.g., lectures or news broadcasts).",
    },
    {
      ar: "اتبع التعليمات المنطوقة لتنفيذ مهمة ذات عدد من المراحل.",
      en: "Follow spoken instructions to complete a multi-stage task.",
    },
    {
      ar: "الاستماع إلى محادثة بين متحدثين أو أكثر والقدرة على الإجابة على الأسئلة المتعلقة بالسياق والعلاقة بين المتحدثين والتسجيل (على سبيل المثال رسمي أو غير رسمي).",
      en: "Listen to conversations between two or more speakers and answer questions related to context, speaker relationship, and register (e.g., formal or informal).",
    },
    {
      ar: "قراءة نص من صفحة إلى صفحتين وتحديد الفكرة (الأفكار) الرئيسية واستخراج معلومات محددة في فترة زمنية معينة.",
      en: "Read a one-to-two-page text, identify main idea(s), and extract specific information within a set time.",
    },
  ],
  learningOutcomesTitle: { ar: "مخرجات التعلم لدى طلاب المقرر الدراسي", en: "Course Learning Outcomes" },
  learningOutcomesIntro: {
    ar: "عند إكمال هذه المقرر الدراسي بنجاح، سيتمكن الطلاب من:",
    en: "Upon successful completion of this course, students will be able to:",
  },
  grammarTitle: { ar: "القواعد", en: "Grammar" },
  grammarItems: [
    { ar: "تطبيق صيغ الأزمنة المختلفة بشكل مناسب وصحيح، في سياق معين.", en: "Apply different tense forms appropriately and accurately in context." },
    { ar: "ربط الجمل باستخدام أشكال مختلفة من ضمائر الفاعل والمفعول به وضمائر الملكية أثناء كتابة النصوص والتقارير والمشاريع و/أو إلقاء المحاضرات أو الرد على الأسئلة.", en: "Link sentences using different forms of subject, object, and possessive pronouns in writing and speaking tasks." },
    { ar: "استخدم الأشكال المختلفة للأسماء المعدودة وغير المعدودة أثناء كتابة النصوص و/أو إلقاء المحاضرات أو الرد على الأسئلة.", en: "Use different forms of countable and uncountable nouns in written and spoken responses." },
    { ar: "استخدام صيغ الشرط المختلفة بدقة في سياق معين للتعبير عن القدرة وتقديم الطلبات والعروض وما إلى ذلك، أثناء التحدث والكتابة.", en: "Use conditional forms accurately in context to express ability, make requests/offers, and other functions in speaking and writing." },
    { ar: "استخدم حروف الجر للربط بين الكلمات والجمل في الكتابة الرسمية، مثل التقارير والرسائل الرسمية والمقالات والواجبات.", en: "Use prepositions to connect words and sentences in formal writing such as reports, formal emails, essays, and assignments." },
    { ar: "المقارنة بين الأشخاص والأماكن والأشياء والأفكار باستخدام صيغ المقارنة والتفضيل للصفات لطلب/إعطاء توضيح/معلومات و/أو التعبير/طلب الرأي.", en: "Compare people, places, objects, and ideas using comparative and superlative adjective forms for clarification, information sharing, and opinion exchange." },
  ],
  terminologyTitle: { ar: "المصطلحات", en: "Vocabulary" },
  terminologyItems: [
    { ar: "قم بتوسيع نطاق المفردات من خلال التعرف على الأسماء والأفعال والصفات والظروف والتراكيب وحروف الجر.", en: "Expand vocabulary range by recognizing nouns, verbs, adjectives, adverbs, collocations, and prepositions." },
    { ar: "ميّز بين الكلمات والعبارات والتعبيرات اللازمة في التفاعل الاجتماعي مثل دعوة الناس، واستخدام الهاتف، وما إلى ذلك.", en: "Differentiate words, phrases, and expressions required for social interaction such as inviting people, using the phone, and similar contexts." },
    { ar: "استخدم المفردات التي تعلمتها حديثاً في المواقف اليومية.", en: "Use newly learned vocabulary in daily-life situations." },
  ],
  speakingTitle: { ar: "التحدث", en: "Speaking" },
  speakingItems: [
    { ar: "إعادة صياغة المعلومات من نص منطوق.", en: "Paraphrase information from spoken text." },
    { ar: "المشاركة في المناقشات حول موضوع ذي صلة بدراستهم من خلال متابعة وصياغة الأسئلة والتعليمات والطلبات.", en: "Participate in discussions related to their studies by following and formulating questions, instructions, and requests." },
    { ar: "تقديم أسباب لشرح وتبرير آرائهم الشخصية.", en: "Provide reasons to explain and justify personal opinions." },
    { ar: "أنتج حديثًا واضحًا وواثقًا لمدة دقيقتين إلى ثلاث دقائق تقريبًا مع النطق الدقيق والطلاقة المناسبة، مع التواصل بالعينين واستخدام لغة الجسد.", en: "Produce a clear and confident 2-3 minute talk with accurate pronunciation, suitable fluency, eye contact, and effective body language." },
    { ar: "استخدم النغمة والنبرة وتسلسل الكلمات وحروف العطف في المحادثات.", en: "Use tone, intonation, word order, and conjunctions effectively in conversations." },
    { ar: "إظهار معرفة المفردات والتعابير المستخدمة في المواقف اليومية.", en: "Demonstrate knowledge of vocabulary and expressions used in daily situations." },
  ],
  listeningTitle: { ar: "الاستماع", en: "Listening" },
  listeningItems: [
    { ar: "تحديد الفكرة الأساسية/الأفكار الرئيسية للنص المنطوق.", en: "Identify the main idea(s) in spoken text." },
    { ar: "إظهار فهم أسئلة الفهم عند الاستماع إلى المحادثات الرسمية وغير الرسمية.", en: "Show comprehension when listening to formal and informal conversations." },
    { ar: "تنظيم المعلومات باستخدام استراتيجيات مثل تدوين الملاحظات والتصنيف.", en: "Organize information using strategies such as note-taking and classification." },
    { ar: "التعرف على استخدام النغمة والنبرة وتسلسل الكلمات وحروف العطف في المحادثات التي تساعد في الكشف عن المشاعر والمواقف والمعلومات المفيدة.", en: "Recognize tone, intonation, word order, and conjunctions in conversations to identify emotions, attitudes, and useful information." },
    { ar: "استنتاج معنى الكلمات أو العبارات غير المألوفة من سياق موضوع مألوف.", en: "Infer the meaning of unfamiliar words or expressions from familiar-context listening." },
    { ar: "اتبع التعليمات الشفهية من أجل تنفيذ مهمة/مهام.", en: "Follow oral instructions to complete a task or set of tasks." },
  ],
  readingTitle: { ar: "القراءة", en: "Reading" },
  readingItems: [
    { ar: "حدد الموضوع والأفكار الرئيسية لنص معين يتكون من حوالي 300 كلمة.", en: "Identify topic and main ideas in a text of around 300 words." },
    { ar: "اقرأ نصاً معيناً مكوناً من حوالي 300 كلمة، للحصول على تفاصيل محددة.", en: "Read a text of around 300 words to locate specific details." },
    { ar: "التعرف على معنى الكلمات الجديدة من السياق.", en: "Recognize the meaning of new words from context." },
    { ar: "استنتاج الأفكار غير المذكورة مباشرة في النص.", en: "Infer ideas not directly stated in the text." },
    { ar: "تحديد المرجعيات الأساسية (ضمائر الفاعل والمفعول به وصفات الملكية والضمائر).", en: "Identify key references (subject/object pronouns, possessive adjectives, and pronouns)." },
  ],
  writingTitle: { ar: "الكتابة", en: "Writing" },
  writingItems: [
    { ar: "التعرف على الاختلافات بين الأجزاء والجمل الكاملة.", en: "Identify differences between sentence fragments and complete sentences." },
    { ar: "قم بتنقيح الجمل والفقرات بما في ذلك علامات الترقيم والأخطاء الإملائية والنحوية.", en: "Edit and revise sentences and paragraphs including punctuation, spelling, and grammar." },
    { ar: "استخدم حروف العطف للربط بين الجمل.", en: "Use conjunctions to connect sentences." },
    { ar: "أعد ترتيب الكلمات المختلطة لتكوين جمل ذات معنى.", en: "Reorder jumbled words to form meaningful sentences." },
    { ar: "حدد الموضوع والفكرة المسيطرة في جمل موضوعية معينة.", en: "Identify topic and controlling idea in topic sentences." },
    { ar: "اكتب أجزاء كتابية جيدة التشكيل، من حوالي 100 كلمة.", en: "Write well-formed pieces of writing of around 100 words." },
  ],
  integratedResultsTitle: { ar: "النتائج المدمجة المتعلقة بمهارات الدراسة العامة", en: "Integrated Results Related to General Study Skills" },
  timeManagementTitle: { ar: "إدارة الوقت وتحمل المسؤولية", en: "Time Management and Responsibility" },
  timeManagementItems: [
    { ar: "العمل ضمن أزواج أو مجموعات وشارك وفقاً لذلك.", en: "Work in pairs or groups and contribute accordingly." },
    { ar: "اتبع سياسات الجامعة بشأن الحضور والالتزام بالمواعيد.", en: "Follow university policies on attendance and punctuality." },
    { ar: "أظهر الاحترام للمعلمين والآخرين وحقوقهم في الاختلاف في الرأي.", en: "Show respect for instructors and others, including their right to different opinions." },
    { ar: "استخدم مجموعة متنوعة من تقنيات الدراسة.", en: "Use a variety of study techniques." },
    { ar: "العمل وفقًا للمواعيد النهائية المفروضة.", en: "Work according to imposed deadlines." },
    { ar: "تنظيم نظام لتسجيل المفردات والحفاظ عليه (الاحتفاظ بسجل مفردات)", en: "Organize and maintain a vocabulary recording system (vocabulary log)." },
    { ar: "تنظيم حافظة أعمال شخصية ما والاحتفاظ بها.", en: "Organize and maintain a personal portfolio." },
  ],
  researchSkillsTitle: { ar: "المهارات البحثية", en: "Research Skills" },
  researchSkillsItems: [
    { ar: "استخرج المعلومات ذات الصلة من كتاب أو مقال باستخدام استراتيجيات القراءة.", en: "Extract relevant information from a book or article using reading strategies." },
    { ar: "استخدم نظام المكتبة للعثور على مواد المكتبة واستعارتها وإعادتها.", en: "Use the library system to locate, borrow, and return library materials." },
    { ar: "استخدم قاموس إنجليزي-إنجليزي لتعلم اللغة.", en: "Use an English-English dictionary for language learning." },
    { ar: "استخدام صفحة المحتويات والفهرس للوصول للمعلومات في كتاب.", en: "Use a contents page and an index to locate information in a book." },
    { ar: "ابحث عن معلومات محددة باستخدام محركات البحث على الإنترنت والمصادر الإلكترونية.", en: "Search for specific information using internet search engines and electronic sources." },
    { ar: "تصنيف المعلومات الجديدة وفرزها.", en: "Classify and sort new information." },
  ],
  noteTakingTitle: { ar: "تدوين الملاحظات", en: "Note Taking" },
  noteTakingItems: [
    { ar: "استذكر المفاهيم الرئيسية وحددها.", en: "Recall and identify key concepts." },
    { ar: "اعتماد استراتيجية تدوين الملاحظات (مثل رسم الخرائط الذهنية؛ نظام كورنيل، إلخ)", en: "Adopt a note-taking strategy (e.g., mind maps, Cornell system, etc.)." },
    { ar: "دعم النقاط الرئيسية بالتفاصيل الإضافية ذات الصلة.", en: "Support key points with relevant additional details." },
    { ar: "تنظيم المعلومات لتمكين الرجوع إليها بسرعة في وقت لاحق.", en: "Organize information for quick later reference." },
    { ar: "استخدم الملاحظات لإنشاء ملخص.", en: "Use notes to produce a summary." },
    { ar: "قم بإعادة إنتاج المعلومات الأساسية والتفاصيل الداعمة من الملاحظات بكلماتك الخاصة.", en: "Reproduce key information and supporting details from notes in your own words." },
  ],
  presentationsTitle: { ar: "تقديم العروض التقديمية", en: "Presentations" },
  presentationsItems: [
    { ar: "تنظيم المعلومات وتقديمها بترتيب منطقي وبسرعة مفهومة.", en: "Organize and present information in a logical order and understandable pace." },
    { ar: "الاستفادة من الوسائل السمعية/البصرية عند تقديم العروض الشفوية.", en: "Use audio/visual aids when giving oral presentations." },
    { ar: "الحفاظ على قدر من التواصل البصري مع الجمهور والتحدث بصوت مسموع واضح", en: "Maintain eye contact with the audience and speak in a clear audible voice." },
    { ar: "مراعاة القيود الزمنية في العروض التقديمية.", en: "Observe time constraints in presentations." },
    { ar: "الرد على أسئلة الجمهور.", en: "Respond to audience questions." },
  ],
  importantNoteTitle: { ar: "ملاحظة مهمة", en: "Important Note" },
  importantNoteText: {
    ar: "يجب على الطالب إكمال جميع متطلبات المستوى الأول بنجاح قبل الانتقال إلى المستوى الثاني. يشمل ذلك اجتياز جميع المقررات والامتحانات المطلوبة وتحقيق الحد الأدنى من المعدل المطلوب.",
    en: "Students must successfully complete all Level 1 requirements before moving to Level 2. This includes passing all required courses and examinations and meeting the minimum required GPA.",
  },
  ctaTitle: { ar: "هل أنت مستعد للبدء؟", en: "Are You Ready to Start?" },
  ctaText: {
    ar: "ابدأ رحلتك في المستوى الأول وضع أساساً قوياً لمستقبلك الأكاديمي",
    en: "Start your Level 1 journey and build a strong foundation for your academic future.",
  },
  ctaBackLabel: { ar: "العودة للبرنامج التأسيسي", en: "Back to Foundation Program" },
};


export const translations = {
  en: {
    navbar: {
      navLinks: [
        { href: '/', label: 'Home' },
        { href: '/online-training', label: 'Online Training' },
        { href: '/congress', label: 'Congress' },
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
      ],
      academicProgramsTitle: 'Academic Programs',
      academicPrograms: [
        {
          title: 'USA Program',
          href: '/academic-programs/usa',
          description: 'Explore our academic offerings available in the USA.',
        },
        {
          title: 'Mexico Program',
          href: '/academic-programs/mexico',
          description: 'Discover our academic programs in Mexico.',
        },
        {
          title: 'Colombia Program',
          href: '/academic-programs/colombia',
          description: 'Explore our academic programs in Colombia.',
        },
      ],
    },
    hero: {
        title: 'Unlock Your Potential with EduVoucher',
        subtitle: 'Discover a world of knowledge with our premium online courses. Access exclusive content and start your learning journey today.',
        explorePrograms: 'Explore Programs',
        contactUs: 'Contact Us',
    },
    whyChooseUs: {
        title: 'Why Choose Us?',
        subtitle: 'We provide a world-class educational experience.',
    },
    features: {
        expertInstructors: {
            title: 'Expert Instructors',
            description: 'Learn from industry leaders and renowned academics in their field.',
        },
        flexibleLearning: {
            title: 'Flexible Learning',
            description: 'Access course materials anytime, anywhere, and learn at your own pace.',
        },
        interactiveContent: {
            title: 'Interactive Content',
            description: 'Engage with high-quality video lectures, quizzes, and hands-on projects.',
        },
        valuableCertificates: {
            title: 'Valuable Certificates',
            description: 'Earn certificates to showcase your new skills and advance your career.',
        }
    },
    coupon: {
        title: 'Have a Coupon?',
        subtitle: 'Enter your coupon code below to unlock access to a special class.',
        placeholder: 'Enter your coupon code',
        validating: 'Validating...',
        accessClass: 'Access Class',
        errors: {
            empty: 'Coupon code cannot be empty.',
            invalid: 'Invalid or expired coupon code.',
            expired: 'This coupon has expired.',
            unexpected: 'An unexpected error occurred. Please try again.',
        }
    },
    about: {
        title: 'About Us',
        subtitle: 'Our mission is to bridge knowledge gaps through innovative and accessible online education, connecting experts with learners across the globe.',
        teamTitle: 'Directors & Medical Staff',
        team: [
            {
                name: 'Dr. Evelyn Reed',
                role: 'Founder & CEO',
                bio: 'With over 20 years in education technology, Dr. Reed leads our mission to make learning accessible to all.',
            },
            {
                name: 'Juan Carlos Pérez',
                role: 'Head of Academics (LATAM)',
                bio: 'Specializing in curriculum development for Spanish-speaking regions, ensuring cultural and academic relevance.',
            },
            {
                name: 'Michael Chen',
                role: 'Chief Technology Officer',
                bio: 'The architect of our robust learning platform, Michael is passionate about seamless user experiences.',
            },
            {
                name: 'Sofia Gomez',
                role: 'Director of Medical Programs',
                bio: 'A licensed physician and educator, Dr. Gomez oversees all medical and healthcare-related programs.',
            },
        ]
    },
    academicPrograms: {
        title: 'Academic Programs',
        subtitle: 'Choose your region to discover tailored academic programs and certifications designed for your success.',
        programs: [
            {
                name: 'USA',
                description: 'Explore our accredited programs available for students in the United States.',
            },
            {
                name: 'México',
                description: 'Discover the academic offerings designed specifically for our students in Mexico.',
            },
            {
                name: 'Colombia',
                description: 'Learn about the programs and certifications we have for professionals in Colombia.',
            },
        ],
        learnMore: 'Learn More',
    },
    programUSA: {
        title: 'Academic Programs - USA',
        subtitle: 'Accredited programs and board preparation courses to help you achieve your career goals in the United States.',
        featuredTitle: 'Our Featured US Programs',
        courses: [
            {
                title: 'USMLE Step 1 & 2 CK Prep Course',
                description: 'A comprehensive review course designed to help international medical graduates excel in the USMLE exams.',
                duration: '12 weeks',
            },
            {
                title: 'Fellowship in Anti-Aging and Regenerative Medicine',
                description: 'Advanced training for physicians on the latest in longevity science and regenerative therapies.',
                duration: '18 months',
            },
            {
                title: 'Medical English & Communication Skills',
                description: 'Enhance your ability to communicate effectively in a US healthcare setting, focusing on patient interaction and medical terminology.',
                duration: '6 weeks',
            },
        ],
        enrollToday: 'Enroll Today',
        backToPrograms: 'Back to Programs'
    },
    programMexico: {
        title: 'Academic Programs - Mexico',
        subtitle: 'Continuing medical education of excellence for health professionals in Mexico, with curricular validity.',
        featuredTitle: 'Available Courses and Specialties',
        courses: [
            {
                title: 'Specialization in Interventional Cardiology',
                description: 'High-specialty program focused on minimally invasive cardiological procedures.',
                duration: '2 years',
            },
            {
                title: 'Quality Management in Health Systems',
                description: 'Training for health leaders in the implementation of quality and patient safety models.',
                duration: '1 year',
            },
            {
                title: 'Suture and Wound Management Workshop',
                description: 'Intensive practical course to develop fundamental surgical skills for doctors and residents.',
                duration: '2 days',
            },
        ],
        enrollNow: 'Enroll Now',
        backToPrograms: 'Back to Programs'
    },
    programColombia: {
        title: 'Academic Programs - Colombia',
        subtitle: 'We offer cutting-edge programs designed to strengthen the skills of health professionals in Colombia.',
        featuredTitle: 'Our Educational Offerings',
        courses: [
            {
                title: 'Diploma in Advanced Aesthetic Medicine',
                description: 'An intensive program for doctors seeking to specialize in the most innovative techniques of aesthetic medicine.',
                duration: '6 months',
            },
            {
                title: 'Certification in Clinical Pharmacology',
                description: 'Develop skills for the management and optimization of pharmacological treatments in the clinical setting.',
                duration: '4 months',
            },
            {
                title: 'Pediatrics Update Course',
                description: 'Review the latest advances and clinical practice guidelines in pediatric care for the general practitioner.',
                duration: '8 weeks',
            },
        ],
        moreInfo: 'More Information',
        backToPrograms: 'Back to Programs'
    },
    onlineTraining: {
        title: 'Online Training',
        subtitle: 'Access our library of online courses and learn at your own pace with high-quality content created by experts.',
        categories: [
          {
            title: 'Cardiology',
            description: 'Courses on the latest cardiovascular diagnosis and treatment techniques.',
          },
          {
            title: 'Neurology',
            description: 'Updates on the management of neurodegenerative diseases and stroke.',
          },
          {
            title: 'Endocrinology',
            description: 'Programs on diabetes, thyroid, and other hormonal disorders.',
          },
          {
            title: 'Internal Medicine',
            description: 'Comprehensive review of the most relevant topics for the internist.',
          },
        ],
        readyToStart: 'Ready to start?',
        readySubtitle: 'Explore our full catalog and find the perfect program for you. New courses added monthly.',
        viewAllPrograms: 'View All Programs',
        requestInfo: 'Request Information'
    },
    congress: {
        title: 'Annual Congress of Medical Sciences',
        subtitle: 'Join thought leaders and professionals from around the world at our annual congress. Explore the latest trends and discoveries in medical science.',
        eventDetails: 'Event Details',
        date: 'Date',
        dateValue: 'November 15-17, 2024',
        location: 'Location',
        locationValue: 'Metropolitan Convention Center',
        registration: 'Registration',
        registrationValue: 'Registration is now open',
        registerNow: 'Register Now',
        featuredSpeakers: 'Featured Speakers',
        speakers: [
            { name: 'Dr. Ana Torres', topic: 'Innovations in Immunotherapy' },
            { name: 'Dr. Ben Carter', topic: 'The Future of AI in Diagnostics' },
            { name: 'Dra. Sofia Reyes', topic: 'Advances in Robotic Surgery' },
            { name: 'Dr. Kenji Tanaka', topic: 'Genomic Medicine and Patient Care' },
        ],
        backToHome: 'Back to Home'
    },
    contact: {
        title: 'Contact Us',
        subtitle: "We're here to help. Reach out to us with any questions or inquiries.",
        getInTouch: 'Get in Touch',
        formDescription: 'Fill out the form and our team will get back to you within 24 hours.',
        form: {
            title: 'Send us a Message',
            nameLabel: 'Full Name',
            namePlaceholder: 'John Doe',
            emailLabel: 'Email Address',
            emailPlaceholder: 'you@example.com',
            messageLabel: 'Message',
            messagePlaceholder: 'Tell us how we can help...',
            submit: 'Submit',
            submitting: 'Submitting...',
            successTitle: 'Success!',
            successMessage: 'Thank you for your message! We will get back to you shortly.',
            errorTitle: 'Error',
            errorMessage: 'Please correct the errors and try again.'
        }
    },
    specialClass: {
        title: 'Access Granted!',
        description: 'Your coupon is valid. Welcome to the special class.',
        subtitle: 'You have successfully unlocked exclusive content. You can now access the video lecture for this special session.',
        goToHomepage: 'Go to Homepage',
        loading: 'Loading video...',
        error: {
            title: 'Error',
            noCode: 'No coupon code provided.',
            notFound: 'Coupon not found.',
            failed: 'Failed to fetch video.',
            invalidUrl: 'Invalid YouTube URL'
        }
    },
    adminLogin: {
        title: 'Admin Login',
        description: 'Enter your credentials to access the dashboard.',
        emailLabel: 'Email',
        emailPlaceholder: 'admin@example.com',
        passwordLabel: 'Password',
        loginButton: 'Login',
        loggingIn: 'Logging in...',
        loginFailedTitle: 'Login Failed',
        redirecting: 'Redirecting...'
    },
    adminDashboard: {
        title: 'Admin Dashboard',
        welcome: 'Welcome, {email}. Manage your coupons below.',
        logout: 'Logout',
        couponGenerator: {
            createTitle: 'Create Coupon',
            createDescription: 'Create a new coupon and associate a video with it.',
            codeLabel: 'Coupon Code',
            codePlaceholder: 'e.g. MANUALCODE2024',
            durationLabel: 'Coupon Duration (Days)',
            durationPlaceholder: 'Select duration',
            duration15: '15 Days',
            duration30: '30 Days',
            videoSourceLabel: 'Video Source',
            uploadVideo: 'Upload Video',
            youtubeLink: 'YouTube Link',
            videoFileLabel: 'Video File',
            youtubeUrlLabel: 'YouTube URL',
            youtubeUrlPlaceholder: 'https://www.youtube.com/watch?v=...',
            createButton: 'Create Coupon',
            creatingButton: 'Creating...',
            success: 'Coupon "{code}" created successfully.',
            error: 'Failed to create coupon.',
            errorExists: 'Coupon code "{code}" already exists.'
        },
        couponList: {
            title: 'Coupon List',
            description: 'A real-time list of all generated coupons.',
            codeHeader: 'Coupon Code',
            durationHeader: 'Duration',
            createdHeader: 'Created At',
            statusHeader: 'Status',
            actionsHeader: 'Actions',
            statusActive: 'Active',
            statusInactive: 'Inactive',
            deleteDialogTitle: 'Are you absolutely sure?',
            deleteDialogDescription: 'This action cannot be undone. This will permanently delete the coupon.',
            cancel: 'Cancel',
            delete: 'Delete',
            deleting: 'Deleting...',
            noCoupons: 'No coupons found. Generate one to get started.',
        }
    }
  },
  es: {
    navbar: {
      navLinks: [
        { href: '/', label: 'Inicio' },
        { href: '/online-training', label: 'Formación en línea' },
        { href: '/congress', label: 'Congreso' },
        { href: '/about', label: 'Conócenos' },
        { href: '/contact', label: 'Contacto' },
      ],
      academicProgramsTitle: 'Programas Académicos',
      academicPrograms: [
        {
          title: 'Programa USA',
          href: '/academic-programs/usa',
          description: 'Explora nuestras ofertas académicas disponibles en USA.',
        },
        {
          title: 'Programa México',
          href: '/academic-programs/mexico',
          description: 'Descubre nuestros programas académicos en México.',
        },
        {
          title: 'Programa Colombia',
          href: '/academic-programs/colombia',
          description: 'Explora nuestros programas académicos en Colombia.',
        },
      ],
    },
    hero: {
        title: 'Desbloquea tu Potencial con EduVoucher',
        subtitle: 'Descubre un mundo de conocimiento con nuestros cursos en línea premium. Accede a contenido exclusivo y comienza tu viaje de aprendizaje hoy.',
        explorePrograms: 'Explorar Programas',
        contactUs: 'Contáctanos',
    },
    whyChooseUs: {
        title: '¿Por Qué Elegirnos?',
        subtitle: 'Ofrecemos una experiencia educativa de clase mundial.',
    },
    features: {
        expertInstructors: {
            title: 'Instructores Expertos',
            description: 'Aprende de líderes de la industria y académicos de renombre en su campo.',
        },
        flexibleLearning: {
            title: 'Aprendizaje Flexible',
            description: 'Accede a los materiales del curso en cualquier momento, en cualquier lugar y aprende a tu propio ritmo.',
        },
        interactiveContent: {
            title: 'Contenido Interactivo',
            description: 'Participa con video conferencias de alta calidad, cuestionarios y proyectos prácticos.',
        },
        valuableCertificates: {
            title: 'Certificados Valiosos',
            description: 'Obtén certificados para mostrar tus nuevas habilidades y avanzar en tu carrera.',
        },
    },
    coupon: {
        title: '¿Tienes un Cupón?',
        subtitle: 'Ingresa tu código de cupón a continuación para desbloquear el acceso a una clase especial.',
        placeholder: 'Ingresa tu código de cupón',
        validating: 'Validando...',
        accessClass: 'Acceder a Clase',
        errors: {
            empty: 'El código del cupón no puede estar vacío.',
            invalid: 'Código de cupón inválido o expirado.',
            expired: 'Este cupón ha expirado.',
            unexpected: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',
        }
    },
    about: {
        title: 'Conócenos',
        subtitle: 'Nuestra misión es cerrar brechas de conocimiento a través de una educación en línea innovadora y accesible, conectando a expertos con estudiantes de todo el mundo.',
        teamTitle: 'Directores & Staff Médico',
        team: [
            {
                name: 'Dr. Evelyn Reed',
                role: 'Fundadora & CEO',
                bio: 'Con más de 20 años en tecnología educativa, la Dra. Reed lidera nuestra misión de hacer que el aprendizaje sea accesible para todos.',
            },
            {
                name: 'Juan Carlos Pérez',
                role: 'Director Académico (LATAM)',
                bio: 'Especializado en el desarrollo de planes de estudio para regiones de habla hispana, asegurando la relevancia cultural y académica.',
            },
            {
                name: 'Michael Chen',
                role: 'Director de Tecnología',
                bio: 'El arquitecto de nuestra robusta plataforma de aprendizaje, Michael es un apasionado de las experiencias de usuario fluidas.',
            },
            {
                name: 'Sofia Gomez',
                role: 'Directora de Programas Médicos',
                bio: 'Médica y educadora licenciada, la Dra. Gómez supervisa todos los programas médicos y relacionados con la atención médica.',
            },
        ]
    },
    academicPrograms: {
        title: 'Programas Académicos',
        subtitle: 'Elige tu región para descubrir programas académicos y certificaciones a medida diseñados para tu éxito.',
        programs: [
            {
                name: 'USA',
                description: 'Explora nuestros programas acreditados disponibles para estudiantes en los Estados Unidos.',
            },
            {
                name: 'México',
                description: 'Descubre la oferta académica diseñada específicamente para nuestros estudiantes en México.',
            },
            {
                name: 'Colombia',
                description: 'Conoce los programas y certificaciones que tenemos para profesionales en Colombia.',
            },
        ],
        learnMore: 'Saber Más',
    },
    programUSA: {
        title: 'Programas Académicos - USA',
        subtitle: 'Programas acreditados y cursos de preparación para juntas para ayudarte a alcanzar tus metas profesionales en los Estados Unidos.',
        featuredTitle: 'Nuestros Programas Destacados en USA',
        courses: [
            {
                title: 'Curso de Preparación USMLE Step 1 & 2 CK',
                description: 'Un curso de revisión integral diseñado para ayudar a los graduados médicos internacionales a sobresalir en los exámenes USMLE.',
                duration: '12 semanas',
            },
            {
                title: 'Fellowship en Medicina Antienvejecimiento y Regenerativa',
                description: 'Formación avanzada para médicos sobre lo último en ciencia de la longevidad y terapias regenerativas.',
                duration: '18 meses',
            },
            {
                title: 'Inglés Médico y Habilidades de Comunicación',
                description: 'Mejora tu capacidad para comunicarte eficazmente en un entorno de atención médica de EE. UU., centrándote en la interacción con el paciente y la terminología médica.',
                duration: '6 semanas',
            },
        ],
        enrollToday: 'Inscríbete Hoy',
        backToPrograms: 'Volver a Programas'
    },
    programMexico: {
        title: 'Programas Académicos - México',
        subtitle: 'Educación médica continua de excelencia para los profesionales de la salud en México, con validez curricular.',
        featuredTitle: 'Cursos y Especialidades Disponibles',
        courses: [
            {
                title: 'Especialización en Cardiología Intervencionista',
                description: 'Programa de alta especialidad enfocado en procedimientos cardiológicos mínimamente invasivos.',
                duration: '2 años',
            },
            {
                title: 'Gestión de Calidad en Sistemas de Salud',
                description: 'Formación para líderes de la salud en la implementación de modelos de calidad y seguridad del paciente.',
                duration: '1 año',
            },
            {
                title: 'Taller de Suturas y Manejo de Heridas',
                description: 'Curso práctico intensivo para desarrollar destrezas quirúrgicas fundamentales para médicos y residentes.',
                duration: '2 días',
            },
        ],
        enrollNow: 'Inscribirse Ahora',
        backToPrograms: 'Volver a Programas'
    },
    programColombia: {
        title: 'Programas Académicos - Colombia',
        subtitle: 'Ofrecemos programas de vanguardia diseñados para fortalecer las habilidades de los profesionales de la salud en Colombia.',
        featuredTitle: 'Nuestra Oferta Educativa',
        courses: [
            {
                title: 'Diplomado en Medicina Estética Avanzada',
                description: 'Un programa intensivo para médicos que buscan especializarse en las técnicas más innovadoras de la medicina estética.',
                duration: '6 meses',
            },
            {
                title: 'Certificación en Farmacología Clínica',
                description: 'Desarrolla competencias para la gestión y optimización de tratamientos farmacológicos en el entorno clínico.',
                duration: '4 meses',
            },
            {
                title: 'Curso de Actualización en Pediatría',
                description: 'Repasa los últimos avances y guías de práctica clínica en la atención pediátrica para el médico general.',
                duration: '8 semanas',
            },
        ],
        moreInfo: 'Más Información',
        backToPrograms: 'Volver a Programas'
    },
    onlineTraining: {
        title: 'Formación en Línea',
        subtitle: 'Accede a nuestra biblioteca de cursos en línea y aprende a tu propio ritmo con contenido de alta calidad creado por expertos.',
        categories: [
          {
            title: 'Cardiología',
            description: 'Cursos sobre las últimas técnicas de diagnóstico y tratamiento cardiovascular.',
          },
          {
            title: 'Neurología',
            description: 'Actualizaciones en el manejo de enfermedades neurodegenerativas y ACV.',
          },
          {
            title: 'Endocrinología',
            description: 'Programas sobre diabetes, tiroides y otros desórdenes hormonales.',
          },
          {
            title: 'Medicina Interna',
            description: 'Revisión integral de los temas más relevantes para el internista.',
          },
        ],
        readyToStart: '¿Listo para empezar?',
        readySubtitle: 'Explora nuestro catálogo completo y encuentra el programa perfecto para ti. Nuevos cursos añadidos mensualmente.',
        viewAllPrograms: 'Ver Todos los Programas',
        requestInfo: 'Solicitar Información'
    },
    congress: {
        title: 'Congreso Anual de Ciencias Médicas',
        subtitle: 'Únete a líderes de opinión y profesionales de todo el mundo en nuestro congreso anual. Explora las últimas tendencias y descubrimientos en la ciencia médica.',
        eventDetails: 'Detalles del Evento',
        date: 'Fecha',
        dateValue: '15-17 de Noviembre, 2024',
        location: 'Lugar',
        locationValue: 'Centro de Convenciones Metropolitano',
        registration: 'Inscripción',
        registrationValue: 'La inscripción ya está abierta',
        registerNow: 'Regístrate Ahora',
        featuredSpeakers: 'Oradores Destacados',
        speakers: [
            { name: 'Dr. Ana Torres', topic: 'Innovaciones en Inmunoterapia' },
            { name: 'Dr. Ben Carter', topic: 'El Futuro de la IA en Diagnósticos' },
            { name: 'Dra. Sofia Reyes', topic: 'Avances en Cirugía Robótica' },
            { name: 'Dr. Kenji Tanaka', topic: 'Medicina Genómica y Atención al Paciente' },
        ],
        backToHome: 'Volver al Inicio'
    },
    contact: {
        title: 'Contacto',
        subtitle: "Estamos aquí para ayudar. Contáctanos con cualquier pregunta o consulta.",
        getInTouch: 'Ponte en Contacto',
        formDescription: 'Completa el formulario y nuestro equipo se pondrá en contacto contigo en 24 horas.',
        form: {
            title: 'Envíanos un Mensaje',
            nameLabel: 'Nombre Completo',
            namePlaceholder: 'Juan Pérez',
            emailLabel: 'Dirección de Correo Electrónico',
            emailPlaceholder: 'tu@ejemplo.com',
            messageLabel: 'Mensaje',
            messagePlaceholder: 'Dinos cómo podemos ayudarte...',
            submit: 'Enviar',
            submitting: 'Enviando...',
            successTitle: '¡Éxito!',
            successMessage: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo en breve.',
            errorTitle: 'Error',
            errorMessage: 'Por favor, corrige los errores e inténtalo de nuevo.'
        }
    },
    specialClass: {
        title: '¡Acceso Concedido!',
        description: 'Tu cupón es válido. Bienvenido a la clase especial.',
        subtitle: 'Has desbloqueado con éxito contenido exclusivo. Ahora puedes acceder a la video-conferencia de esta sesión especial.',
        goToHomepage: 'Ir a la Página Principal',
        loading: 'Cargando video...',
        error: {
            title: 'Error',
            noCode: 'No se proporcionó ningún código de cupón.',
            notFound: 'Cupón no encontrado.',
            failed: 'Error al cargar el video.',
            invalidUrl: 'URL de YouTube inválida'
        }
    },
    adminLogin: {
        title: 'Acceso de Administrador',
        description: 'Ingresa tus credenciales para acceder al panel.',
        emailLabel: 'Correo Electrónico',
        emailPlaceholder: 'admin@ejemplo.com',
        passwordLabel: 'Contraseña',
        loginButton: 'Iniciar Sesión',
        loggingIn: 'Iniciando sesión...',
        loginFailedTitle: 'Falló el Inicio de Sesión',
        redirecting: 'Redirigiendo...'
    },
    adminDashboard: {
        title: 'Panel de Administración',
        welcome: 'Bienvenido, {email}. Gestiona tus cupones a continuación.',
        logout: 'Cerrar Sesión',
        couponGenerator: {
            createTitle: 'Crear Cupón',
            createDescription: 'Crea un nuevo cupón y asóciale un video.',
            codeLabel: 'Código del Cupón',
            codePlaceholder: 'ej. CODIGOMANUAL2024',
            durationLabel: 'Duración del Cupón (Días)',
            durationPlaceholder: 'Selecciona la duración',
            duration15: '15 Días',
            duration30: '30 Días',
            videoSourceLabel: 'Fuente del Video',
            uploadVideo: 'Subir Video',
            youtubeLink: 'Enlace de YouTube',
            videoFileLabel: 'Archivo de Video',
            youtubeUrlLabel: 'URL de YouTube',
            youtubeUrlPlaceholder: 'https://www.youtube.com/watch?v=...',
            createButton: 'Crear Cupón',
            creatingButton: 'Creando...',
            success: 'Cupón "{code}" creado con éxito.',
            error: 'Error al crear el cupón.',
            errorExists: 'El código de cupón "{code}" ya existe.'
        },
        couponList: {
            title: 'Lista de Cupones',
            description: 'Una lista en tiempo real de todos los cupones generados.',
            codeHeader: 'Código de Cupón',
            durationHeader: 'Duración',
            createdHeader: 'Creado el',
            statusHeader: 'Estado',
            actionsHeader: 'Acciones',
            statusActive: 'Activo',
            statusInactive: 'Inactivo',
            deleteDialogTitle: '¿Estás absolutamente seguro?',
            deleteDialogDescription: 'Esta acción no se puede deshacer. Esto eliminará permanentemente el cupón.',
            cancel: 'Cancelar',
            delete: 'Eliminar',
            deleting: 'Eliminando...',
            noCoupons: 'No se encontraron cupones. Genera uno para empezar.',
        }
    }
  },
};

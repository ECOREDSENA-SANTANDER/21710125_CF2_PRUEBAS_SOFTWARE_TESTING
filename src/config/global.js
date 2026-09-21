export default {
  global: {
    Name: 'Implementación de pruebas y mejora del <i>software</i> ',
    Description:
      'Este componente desarrolla habilidades para ejecutar, documentar y analizar procesos de evaluación técnica en el entorno de desarrollo desde una perspectiva de aseguramiento de calidad. Promueve el pensamiento lógico, la gestión metódica de incidentes y la formulación de planes de mejora alineados con los estándares de la industria tecnológica y las necesidades del usuario final.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Implementación de pruebas manuales y unitarias de <i>software</i> ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pruebas estáticas y prevención temprana',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Pruebas de caja negra y caja blanca',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Pruebas unitarias y aseguramiento desde el código',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de resultados y evidencia de ejecución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Registro de hallazgos, trazabilidad y evidencias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cobertura de pruebas, métricas e impacto',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de incidentes y documentación de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Reporte de incidentes, estructura y ciclo de vida del defecto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Informes de resumen y métricas de calidad',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planes de mejora y optimización continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Lecciones aprendidas, retrospectiva y socialización del conocimiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Acciones correctivas, preventivas y estrategias de optimización',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aseguramiento de la calidad (<i>QA, Quality Assurance</i>)',
      significado:
        'conjunto de actividades planificadas y sistemáticas implementadas en un sistema de calidad para garantizar que los procesos de desarrollo de <i>software</i>  cumplan con los requisitos técnicos y estándares preestablecidos.',
    },
    {
      termino: 'Automatización de pruebas',
      significado:
        'uso de <i>software</i>  especializado y <i>scripts</i> para controlar la ejecución de pruebas y comparar los resultados reales con los esperados, reduciendo la intervención manual repetitiva.',
    },
    {
      termino: 'Caso de prueba (<i>test case</i>)',
      significado:
        'conjunto de condiciones, datos de entrada, acciones y resultados esperados, desarrollado para un objetivo particular, como ejercer una ruta de código específica o verificar el cumplimiento de un requisito determinado.',
    },
    {
      termino: 'Ciclo de vida del defecto',
      significado:
        'trayectoria de estados por los que atraviesa el reporte de un error de <i>software</i> , generalmente abarcando las fases de descubrimiento, asignación, resolución, verificación y cierre.',
    },
    {
      termino: 'Cobertura de código',
      significado:
        'métrica de análisis dinámico que mide, en porcentaje, qué partes del código fuente de un programa han sido ejecutadas durante la realización de un conjunto de casos de prueba.',
    },
    {
      termino: 'Defecto (<i>bug</i>)',
      significado:
        'imperfección o anomalía en un componente o sistema de <i>software</i>  que puede causar que este no desempeñe su función requerida. se materializa cuando el código se ejecuta y produce un fallo.',
    },
    {
      termino: 'Desarrollo guiado por pruebas (tdd)',
      significado:
        'práctica de ingeniería de <i>software</i>  en la que los desarrolladores escriben las pruebas unitarias automatizadas antes de escribir el código funcional que hará que dichas pruebas pasen.',
    },
    {
      termino: 'Matriz de trazabilidad',
      significado:
        'documento estructurado en forma de tabla que correlaciona los requerimientos con los casos de prueba correspondientes, asegurando que cada necesidad del cliente sea validada.',
    },
    {
      termino: 'Pruebas de caja blanca (<i>white-box testing</i>)',
      significado:
        'método de prueba de <i>software</i>  que examina las estructuras lógicas internas y el funcionamiento de una aplicación, en contraposición a su funcionalidad observable externamente.',
    },
    {
      termino: 'Pruebas de caja negra (<i>black-box testing</i>)',
      significado:
        'método de prueba basado en la especificación del sistema, donde el evaluador no tiene acceso ni conocimiento de la estructura del código fuente, por lo que evalúa exclusivamente las entradas y salidas de la interfaz.',
    },
    {
      termino: 'Pruebas dinámicas',
      significado:
        'proceso de evaluación que requiere la compilación y ejecución real del código del <i>software</i>  para analizar su comportamiento, uso de memoria y tiempos de respuesta bajo ciertas condiciones.',
    },
    {
      termino: 'Pruebas estáticas',
      significado:
        'técnica de evaluación de artefactos de <i>software</i> , como documentos de requerimientos, modelos de diseño o código fuente, sin ejecutar la aplicación, enfocada en la detección temprana de anomalías.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'nivel de prueba de <i>software</i>  donde componentes individuales, como funciones, métodos o clases, se aíslan y prueban de manera independiente para verificar que su micrológica es correcta.',
    },
    {
      termino: 'Regresión',
      significado:
        'aparición de un defecto en una parte del <i>software</i>  que previamente funcionaba de manera correcta, usualmente causada por una modificación reciente en el código, una actualización o una corrección mal implementada.',
    },
    {
      termino: 'Resultado esperado',
      significado:
        'comportamiento predecible y documentado que un sistema debe exhibir al ser sometido a un conjunto de datos de entrada o condiciones de ejecución específicas en un caso de prueba.',
    },
    {
      termino: 'Resultado real',
      significado:
        'comportamiento o salida verificable que el sistema exhibe en el momento en que el evaluador ejecuta el caso de prueba, el cual se contrasta con el resultado esperado.',
    },
    {
      termino: 'Retrospectiva',
      significado:
        'reunión formal realizada al finalizar un ciclo de trabajo o iteración, en la que el equipo evalúa su desempeño metodológico y define planes de acción para mejorar los procesos en futuros ciclos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Garousi, V., Giray, G., Tuzun, E., Catal, C., & Felderer, M. (2020). <i>Closing the gap between software engineering education and industrial needs. IEEE Software</i>, 37(2), 68–77.',
    },
    {
      referencia:
        '<i>International Organization for Standardization.</i> (2022). ISO/IEC/IEEE 29119-1:2022 <i>Software  and systems engineering</i> — <i>Software testing — Part 1: General concepts</i> ISO.',
    },
    {
      referencia:
        '<i>International Software  Testing Qualifications Board</i>. (2024). <i>Certified tester foundation level syllabus</i> (Version 4.0.1).',
    },
    {
      referencia: 'Jest Core Team. (s. f.). Jest.',
    },
    {
      referencia: 'JUnit Team. (s. f.). JUnit user guide.',
    },
    {
      referencia:
        "Pressman, R. S., & Maxim, B. R. (2020). <i>Software  engineering: A practitioner's approach</i> (9th ed.). McGraw-Hill Education.",
    },
    {
      referencia:
        'Sommerville, I. (2021). <i>Engineering software  products: An introduction to modern software engineering</i>. Pearson.',
    },
    {
      referencia:
        'Vera, M., & Silva, J. (2022). Estrategias pedagógicas para la enseñanza de calidad de <i>software</i>  y pruebas automatizadas en entornos virtuales. Revista Iberoamericana de Tecnología en Educación y Educación en Tecnología, 31, 45–56.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

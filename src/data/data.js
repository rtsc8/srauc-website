// TODO : organize data in folder structure
const pageData = {
  home: {
    sections: [
      {
        component: 'hero',
        image: {
          src: 'logo.jpeg',
          alt: 'SRAUC',
        },
        title: 'Listo para cuidar el ambiente?',
        text:
          'Promovemos la recolección del aceite usado de cocina, para que pueda ser utilizado nuevamente en una energía renovable.',
        button: {
          text: 'Registrate',
          href: '/registro',
        },
      },
      {
        component: 'pageTitle',
        eyebrow: 'Iniciativa',
        heading: 'Iniciativa',
      },
    ],
  },
  iniciativa: {
    sections: [
      {
        component: 'pageTitle',
        eyebrow: 'Iniciativa',
        heading: 'Iniciativa',
      },
      {
        component: 'textBlockComp',
        backgroundColor: 'white',
        title: '¿Sabías que 1 litro de aceite contamina más de 1000 litros de agua?',
        text:
          'Hemos ideado una manera de deshacernos del aceite de manera responsable con el medio ambiente.',
      },
      {
        component: 'textBlockComp',
        backgroundColor: 'green',
        title: '¿Sabías que 1 litro de aceite contamina más de 1000 litros de agua?',
      },
      {
        component: 'timelineHeader',
        title: 'Como recoger el aceite',
      },
      {
        component: 'timelineItem',
        index: 0,
        title: 'Deja enfriar el aceite',
        text: 'Con esto evitamos posibles quemaduras o derretir el embase.',
        icon: '',
      },
      {
        component: 'timelineItem',
        index: 1,
        title: 'Filtra el aceite',
        text:
          'Filtre o cuele el aceite para que no pasen restos de comida, y viértelo en un envase de plástico, que puede ser el mismo frasco donde viene el aceite, cierre bien con la tapa.',
        icon: '',
      },
      {
        component: 'warningComp',
        title:
          'El aceite reciclado se convierte en energía limpia que contamina menos que el combustible fósil.',
        icon: '',
      },
      {
        component: 'warningComp',
        title: 'Evita mezclar el aceite usado con agua.',
        icon: 'icono-aviso@3x.png',
      },
      {
        component: 'timelineItem',
        index: 2,
        title: 'Trae el aceite',
        icon: '',
      },
      {
        component: 'mapComp',
        title: 'Institución Educativa República de Uruguay',
        text1: 'Calle 91a No 70a-193 Barrio Alfonso López Medellín',
        text2: 'Aula 2 -204 (bloque 2)',
        text3:
          'O deposítalo en la caneca color naranja que se encuentra al ingreso de la Institución.',
      },
    ],
  },
  contexto: {
    sections: [
      {
        component: 'pageTitle',
        eyebrow: 'Contexto',
        heading: 'El ACU',
      },
      {
        component: 'introductionTextComp',
        backgroundColor: 'white',
        paragraphs: [
          {
            text:
              'En todos los hogares se preparan alimentos y en la elaboración de muchos de ellos se emplea el aceite vegetal o animal. Luego de ser usado se conoce como ACU; Aceite de Cocina Usado.',
          },
          {
            text:
              'Este producto al ser utilizado varias veces, llega un momento en que se quema y es desechado muchas veces de manera incorrecta. Lo que contamina el medio ambiente, tanto suelos como aguas.',
          },
        ],
      },
      {
        component: 'percentTimelineHeader',
        title: 'Según nuestro estudio:',
      },
      {
        component: 'percentTimelineItem',
        percent: '30%',
        title: 'Lo tiran por el desagüe',
        text: 'Contaminando ríos y depósitos de agua, creando focos de hongos y bacterías.',
        image: '',
      },
      {
        component: 'percentTimelineItem',
        percent: '20%',
        title: 'Lo tiran a la basura',
        text: 'Filtrándose en suelos, poniendo en riesgo la vida al rededor.',
        image: '',
      },
      {
        component: 'percentTimelineItem',
        percent: '7%',
        title: 'Lo reutiliza',
        text: 'Poniendo en riesgo la salud propia.',
        image: '',
      },
      {
        component: 'scaledText',
        text: '¡Lo mejor es lo que hace la mayoría!',
      },
      {
        component: 'percentTimelineItem',
        percent: '35%',
        title: 'Lo recicla',
        text: 'Permitiendo que tengan un nuevo uso que además cuida el medio ambiente.',
        image: '',
        jarFlag: true,
      },
      {
        component: 'carouselComp',
        title: 'El aceite se convierte en:',
        items: [
          {
            image: {
              src: '',
              alt: '',
            },
            text: '',
          },
          {
            image: {
              src: '',
              alt: '',
            },
            text: '',
          },
          {
            image: {
              src: '',
              alt: '',
            },
            text: '',
          },
        ],
      },
    ],
  },
  nosotros: {
    sections: [
      {
        component: 'pageTitle',
        eyebrow: 'Nosotros',
        heading: 'SRAUC',
      },
      {
        component: 'textBlockComp',
        backgroundColor: 'white',
        text:
          'En todos los hogares se preparan alimentos y en la elaboración de muchos de ellos se emplea el aceite vegetal o animal. Luego de ser usado se conoce como ACU; Aceite de Cocina Usado. Este producto al ser utilizado varias veces, llega un momento en que se quema y es desechado muchas veces de manera incorrecta. Lo que contamina el medio ambiente, tanto suelos como aguas.',
      },
      {
        component: 'teamMembersComp',
        title: 'Integrantes',
        members: [
          {
            image: {
              src: '',
              alt: '',
            },
            name: 'Gloria Correa Silva',
            job: 'Docente',
          },
          {
            image: {
              src: '',
              alt: '',
            },
            name: 'Verónica Granados',
            job: 'Estudiante',
          },
          {
            image: {
              src: '',
              alt: '',
            },
            name: 'Juan Pablo Cobos',
            job: 'Estudiante',
          },
        ],
      },
      {
        component: 'galleryComp',
        title: 'Galeria',
        pictures: [
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
        ],
      },
    ],
  },
  common: {
    initalSections: [
      {
        component: 'navigation',
        buttonMenu: {
          image: {
            src: 'icon-menu.svg',
            alt: 'Menu Button',
          },
        },
        items: [
          {
            text: 'Nosotros',
            href: '/nosotros',
          },
          {
            text: 'Contexto',
            href: '/contexto',
          },
          {
            text: 'Iniciativa',
            href: '/iniciativa',
          },
          {
            text: 'Registro',
            href: '/registro',
          },
        ],
        socialText: 'Encuentranos en nuestras redes sociales',
        socialLinks: [
          {
            href: 'instagram.com',
            icon: 'instagram',
          },
          {
            href: 'facebook.com',
            icon: 'facebook',
          },
        ],
      },
      {
        component: 'header',
        image: {
          src: 'logo-srauc.svg',
          alt: 'SRAUC LOGO',
        },
        item: {
          href: '#',
        },
      },
    ],
    finalSections: [
      {
        component: 'footer',
        title: {
          text: 'SRAUC',
          url: '/',
        },
        text: 'Contáctanos para más información.',
        email: {
          label: 'Correo:',
          text: ' srauc@gmail.com',
        },
        phone: {
          label: 'Teléfono:',
          text: ' 301 418 4986',
        },
        socialLinks: [
          {
            href: 'https://www.facebook.com',
            icon: 'facebook-logo.png',
            alt: 'facebook',
          },
        ],
      },
    ],
  },
};

export { pageData };

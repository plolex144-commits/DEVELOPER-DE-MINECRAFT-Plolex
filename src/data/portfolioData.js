// =========================================================================
// ARCHIVO DE DATOS DEL PORTAFOLIO
// -------------------------------------------------------------------------
// Este es el ÚNICO archivo que necesitas tocar para personalizar el
// contenido de la web (textos, proyectos, contacto, estadísticas...).
// No necesitas tocar los componentes de React para cambiar el contenido.
//
// Todo lo marcado como [PLACEHOLDER] es un dato de ejemplo que debes
// sustituir por el tuyo real.
// =========================================================================

export const profile = {
  name: 'plolex',
  role: 'Developer de Minecraft',
  tagline:
    'Especializado en configuración de plugins, modalidades y redes de servidores de Minecraft.',
  heroDescription:
    'Diseño, configuro y mantengo servidores de Minecraft de principio a fin: desde la instalación del núcleo del servidor hasta el ajuste fino de plugins, modalidades y redes con proxy para que la experiencia del jugador sea estable y fluida.',
  location: '', // Opcional: añade tu ciudad/país si quieres mostrarlo
  availability: 'Disponible para nuevos proyectos', // Cambia o elimina si no aplica
}

// -------------------------------------------------------------------------
// SOBRE MÍ
// -------------------------------------------------------------------------
export const about = {
  paragraphs: [
    'Llevo más de 3 años trabajando en el mundo de los servidores de Minecraft, creando, configurando y administrando proyectos completos, con especial atención a la parte técnica: plugins, sistemas internos y rendimiento.',
    'He participado en un total de 6 servidores, cubriendo modalidades tan distintas como Survival y Gens, lo que me ha dado una visión amplia de cómo se configura cada tipo de experiencia de juego.',
    'Además de servidores individuales, tengo experiencia configurando redes completas: he creado y configurado 2 proxies para conectar varios servidores bajo una misma red. Mi último proyecto, Vertex, combinó un proxy con una modalidad Gens que llegó a superar los 10 jugadores activos simultáneos con funcionamiento 24/7.',
    'Mi punto fuerte es la configuración: instalar, ajustar y optimizar plugins, sistemas y modalidades hasta conseguir un servidor estable, coherente y agradable de jugar.',
  ],
  highlights: [
    'Más de 3 años de experiencia como developer de Minecraft',
    '6 servidores de Minecraft creados y configurados',
    'Experiencia en modalidades Survival y Gens',
    'Configuración avanzada de plugins y sistemas de servidor',
    '2 proxies configurados para redes multi-servidor',
    'Proyecto con más de 10 jugadores activos y funcionamiento 24/7',
  ],
}

// -------------------------------------------------------------------------
// ESTADÍSTICAS
// -------------------------------------------------------------------------
// Nota de precisión: "10+ jugadores activos" corresponde a un proyecto
// concreto (la red Gens + proxy), no a la suma de todos los proyectos.
// Se indica así en el "note" para que no se malinterprete como jugadores
// totales acumulados.
export const stats = [
  { value: '3', suffix: '+', label: 'Años de experiencia', note: 'Como developer de Minecraft' },
  { value: '6', suffix: '+', label: 'Servidores creados', note: 'Proyectos completos desde cero' },
  { value: '2', suffix: '', label: 'Proxies configurados', note: 'Redes multi-servidor' },
  { value: '4', suffix: '+', label: 'Modalidades trabajadas', note: 'Survival, Gens, FullPvP, BoxPvP' },
  { value: '10', suffix: '+', label: 'Jugadores activos', note: 'En Vertex (red Gens), 24/7' },
]

// -------------------------------------------------------------------------
// ESPECIALIDADES (cards)
// -------------------------------------------------------------------------
export const specialties = [
  {
    title: 'Configuración de plugins',
    description:
      'Instalación, configuración y ajuste fino de plugins para adaptar cada servidor a la modalidad que necesita.',
  },
  {
    title: 'Configuración de servidores',
    description:
      'Puesta en marcha de servidores completos desde cero: núcleo, permisos, mundos y ajustes base.',
  },
  {
    title: 'Desarrollo de modalidades',
    description:
      'Diseño y configuración de modalidades de juego como Survival, Gens, FullPvP y BoxPvP.',
  },
  {
    title: 'Redes de servidores',
    description:
      'Estructuración de redes con varios servidores conectados entre sí bajo una misma experiencia.',
  },
  {
    title: 'Proxies',
    description:
      'Creación y configuración de proxies para unir servidores en una sola red accesible.',
  },
  {
    title: 'Optimización',
    description:
      'Ajustes de rendimiento orientados a mantener el servidor estable con jugadores conectados de forma constante.',
  },
  {
    title: 'Configuración de sistemas',
    description:
      'Puesta a punto de los sistemas internos que sostienen cada modalidad (economía, progresión, eventos, etc.).',
  },
  {
    title: 'Gestión de servidores',
    description:
      'Mantenimiento y administración continua para que el servidor funcione de forma fiable a lo largo del tiempo.',
  },
]

// -------------------------------------------------------------------------
// MODALIDADES
// -------------------------------------------------------------------------
export const gamemodes = [
  {
    name: 'Survival',
    description: 'Modalidad clásica de supervivencia, exploración y progresión a largo plazo.',
    icon: 'tree',
  },
  {
    name: 'Gens',
    description:
      'Modalidad de generadores e islas privadas centrada en la progresión y economía por jugador.',
    icon: 'gem',
  },
  {
    name: 'FullPvP',
    description: 'Modalidad centrada en el combate jugador contra jugador sin restricciones.',
    icon: 'sword',
  },
  {
    name: 'BoxPvP',
    description: 'Combate PvP en arenas o "cajas" cerradas, con partidas rápidas y directas.',
    icon: 'box',
  },
]

// -------------------------------------------------------------------------
// PROYECTOS
// -------------------------------------------------------------------------
// Copia un objeto de este array para añadir un proyecto nuevo.
// Campos:
//   name         -> Nombre del servidor/proyecto
//   description  -> Breve descripción de lo que hiciste
//   gamemode     -> Modalidad principal (debe coincidir con "gamemodes" si quieres el mismo icono)
//   image        -> Ruta de la imagen (colócala en /public/projects/)
//   stack        -> Array de plugins/tecnologías usadas
//   status       -> "En línea" | "Finalizado" | "En desarrollo" | "Archivado"
//   link         -> URL pública del servidor o de la IP (deja '' si no aplica)
//   github       -> URL del repositorio si tienes configuración publicada (deja '' si no aplica)
//   date         -> Año o rango, ej. "2023" o "2023 - 2024"
//   featured     -> true/false, resalta la card en el grid
export const projects = [
  {
    name: 'MineOp',
    description: 'Servidor Survival configurado desde cero, con plugins de progresión y comunidad activa.',
    gamemode: 'Survival',
    image: '/projects/mineop.jpg',
    stack: ['Survival', 'Plugins de progresión'],
    status: 'Finalizado',
    link: '',
    github: '',
    date: '[PLACEHOLDER] Año',
    featured: false,
  },
  {
    name: 'LuxoMC',
    description: 'Servidor Survival con configuración de sistemas y plugins a medida.',
    gamemode: 'Survival',
    image: '/projects/luxomc.jpg',
    stack: ['Survival', 'Sistemas personalizados'],
    status: 'Finalizado',
    link: '',
    github: '',
    date: '[PLACEHOLDER] Año',
    featured: false,
  },
  {
    name: 'Enderiam',
    description: 'Servidor Survival puesto en marcha desde cero: núcleo, permisos, mundos y plugins.',
    gamemode: 'Survival',
    image: '/projects/enderiam.jpg',
    stack: ['Survival', 'Permisos', 'Plugins'],
    status: 'Finalizado',
    link: '',
    github: '',
    date: '[PLACEHOLDER] Año',
    featured: false,
  },
  {
    name: 'NexusMC',
    description: 'Servidor Survival con configuración completa de plugins y sistemas de progresión.',
    gamemode: 'Survival',
    image: '/projects/nexusmc.jpg',
    stack: ['Survival', 'Plugins de progresión'],
    status: 'Finalizado',
    link: '',
    github: '',
    date: '[PLACEHOLDER] Año',
    featured: false,
  },
  {
    name: 'HyperVox',
    description: 'Servidor Survival configurado y mantenido con foco en estabilidad y rendimiento.',
    gamemode: 'Survival',
    image: '/projects/hypervox.jpg',
    stack: ['Survival', 'Optimización'],
    status: 'Finalizado',
    link: '',
    github: '',
    date: '[PLACEHOLDER] Año',
    featured: false,
  },
  {
    name: 'Vertex',
    description:
      'Red de Minecraft con proxy y modalidad Gens. Configuración de generadores, rangos (Acuorim, Cryvorn, Zerak, Vayron) y economía con AxRewards y NextGens. Superó los 10 jugadores activos simultáneos con funcionamiento 24/7.',
    gamemode: 'Gens',
    image: '/projects/vertex.jpg',
    stack: ['Proxy', 'Gens', 'NextGens', 'AxRewards', 'Economía'],
    status: 'Finalizado',
    link: '',
    github: '',
    date: '[PLACEHOLDER] Año',
    featured: true,
  },
]

// -------------------------------------------------------------------------
// TECNOLOGÍAS Y CONOCIMIENTOS
// -------------------------------------------------------------------------
// Separadas en dos grupos: lo relacionado con Minecraft (tu experiencia real)
// y lo relacionado con la construcción de esta propia web (para que quede
// claro que no se mezclan ambos tipos de conocimiento).
export const techMinecraft = [
  'Servidores Java (núcleos tipo Spigot/Paper)',
  'Configuración de plugins',
  'Proxies para redes de servidores',
  'Modalidades: Survival, Gens, FullPvP, BoxPvP',
  'Permisos y gestión de rangos',
  'Optimización y rendimiento de servidor',
]

export const techWebsite = [
  { name: 'React', note: 'Librería usada para construir esta web' },
  { name: 'Vite', note: 'Herramienta de build de este portafolio' },
  { name: 'Tailwind CSS', note: 'Estilos de esta web' },
]

// -------------------------------------------------------------------------
// CONTACTO
// -------------------------------------------------------------------------
export const contact = {
  discord: 'plolex7',
  discordInvite: '', // Opcional: si tienes servidor de Discord, pon aquí el enlace de invitación, ej: 'https://discord.gg/xxxxx'
  github: 'https://github.com/plolex144-commits',
  email: 'plolex144@gmail.com',
  extraLinks: [
    // Añade aquí otros enlaces si quieres, ej: Twitter/X, YouTube, web propia...
    // { label: 'YouTube', url: 'https://youtube.com/@tucanal' },
  ],
}

export const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
]

# 1 Crear el proyecto con Vite

npm create vite@latest mi-proyecto -- --template reac

# 2 Instalar dependencias e iniciar el entorno

npm install

# 3 Instalar Tailwind CSS

npm install -D tailwindcss@3
npx tailwindcss init
npm i react-router-dom

npm i @tailwindcss/postcss
npm i postcss
npm install -D tailwindcss postcss autoprefixer
npm i lucide-react
npm i framer-motion


src/
├── components/
│   ├── layout/
│   │   ├── DashboardLayout.tsx      # Estructura con Sidebar + Navbar
│   │   └── Sidebar.tsx              # El slider que ya diseñamos
│   └── shared/                      # Componentes que se usan en varios perfiles
│       ├── StatCard.tsx             # Tarjetas de resumen
│       └── Table.tsx                # Tablas con efecto Glassmorphism
│
├── modules/                         # 🟢 Lógica por Perfil (Menú Slider)
│   ├── admin/                       # 1. SECCIÓN SUPER ADMINISTRADOR
│   │   ├── DashboardPage.tsx        # "Dashboard"
│   │   ├── TournamentsPage.tsx      # "Torneos"
│   │   ├── UsersPage.tsx            # "Usuarios y Roles"
│   │   ├── InfrastructurePage.tsx   # "Infraestructura"
│   │   ├── FinancesPage.tsx         # "Finanzas"
│   │   ├── DisciplinaryPage.tsx     # "Comisión Disciplinaria"
│   │   └── SettingsPage.tsx         # "Configuración"
│   │
│   ├── delegate/                    # 2. SECCIÓN DELEGADO
│   │   ├── MyClubPage.tsx           # "Mi Club"
│   │   ├── RosterPage.tsx           # "Plantilla"
│   │   ├── CalendarPage.tsx         # "Calendario"
│   │   ├── PaymentsPage.tsx         # "Pagos y Deudas"
│   │   ├── TeamStatsPage.tsx        # "Estadísticas de Equipo"
│   │   └── NoticesPage.tsx          # "Avisos"
│   │
│   ├── referee/                     # 3. SECCIÓN ÁRBITRO
│   │   ├── DailyMatchesPage.tsx     # "Partidos de Hoy"
│   │   ├── DigitalActaPage.tsx      # "Cédula Digital"
│   │   ├── MyAgendaPage.tsx         # "Mi Agenda"
│   │   ├── IncidentsPage.tsx        # "Reportes de Incidencias"
│   │   └── FeesPage.tsx             # "Mis Honorarios"
│   │
│   └── player/                      # 4. SECCIÓN JUGADOR
│       ├── MyProfilePage.tsx        # "Mi Perfil"
│       ├── PerformancePage.tsx      # "Mis Estadísticas"
│       ├── PersonalSchedulePage.tsx # "Mi Calendario"
│       ├── StandingsPage.tsx        # "Tablas"
│       └── MyTeamPage.tsx           # "Mi Equipo"
│
├── routes/
│   └── AppRouter.tsx                # Donde conectas los archivos de arriba con las URLs
└── App.tsx                          # Punto de entrada
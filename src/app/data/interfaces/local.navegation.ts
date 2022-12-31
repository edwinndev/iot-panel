export interface SidebarNavigation {
  label: string
  icon:  string
  path:  string
  active: boolean
}

const navegations : SidebarNavigation[] = [
  {label: 'Dashboard', icon: 'home', path: 'dashboard', active: false},
  {label: 'Dispositivos', icon: 'devices_other', path: 'devices', active: false},
  {label: 'Suscripciones', icon: 'subscriptions', path: 'subscriptions', active: false},
  {label: 'Temas', icon: 'topic', path: 'topics', active: false},
  {label: 'Logs', icon: 'emergency_home', path: 'logs', active: false},
  {label: 'Configuracion', icon: 'settings', path: 'settings', active: false},
]

export default navegations
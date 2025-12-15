// src/data/navbarData.js
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import PersonIcon from '@mui/icons-material/Person'
import CodeIcon from '@mui/icons-material/Code'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export const NAV_ITEMS = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'About', to: '/about', icon: PersonIcon },
  { label: 'Skills', to: '/skills', icon: CodeIcon },
  { label: 'Projects', to: '/projects', icon: WorkIcon },
  { label: 'Qualifications', to: '/qualifications', icon: SchoolIcon },
  { label: 'Contact Me', to: '/contact', icon: ContactMailIcon },
]

export const QUICK_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Kunal-Gupta28', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunal-gupta-b7bb7a216/', icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:kunal.gupta.91165@gmail.com', icon: EmailIcon },
  { label: 'WhatsApp', href: 'https://wa.me/yourphonenumber', icon: WhatsAppIcon },
]

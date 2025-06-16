import {
  AlertCircle,
  Award,
  Badge,
  Bell,
  Bitcoin,
  Bolt,
  Book,
  Briefcase,
  Building,
  CalendarCheck,
  Captions,
  CheckCircle,
  Code,
  Codepen,
  Coffee,
  File as DocumentIcon,
  Euro,
  Eye,
  File,
  FileQuestion,
  FileText,
  Flag,
  Ghost,
  Gift,
  Grid,
  Heart,
  HelpCircle,
  Kanban,
  Key,
  Layout,
  LayoutGrid,
  LifeBuoy,
  MessageSquare,
  Monitor,
  Network,
  Users as PeopleIcon,
  Plug,
  ScrollText,
  Settings,
  Share2,
  Shield,
  ShieldUser,
  ShoppingCart,
  SquareMousePointer,
  Star,
  Theater,
  TrendingUp,
  UserCheck,
  UserCircle,
  Users,
  Briefcase as WorkIcon,
  Zap,
  Menu
} from 'lucide-react';

export const MENU_SIDEBAR = [
  {
    id: 'DEMO',
    title: 'demo navb',
    header: 'Menu',
    icon: Grid,
    children: [
      {
        title: 'หน้าแรก',
        path: '/',
      },
      {
        title: 'ข่าวสาร',
        path: '/news',
      },
      {
        title: 'เลขสวยช่วยเหลือผู้พิการ',
        children: [
          {
            title: 'คู่มือลักษณะอุปกรณ์ฯ',
            path: '/manuals/device-features',
          },
          {
            title: 'ผู้จำหน่ายอุปกรณ์',
            path: '/manuals/sellers',
          },
          {
            title: 'ขั้นตอนการยื่นคำขอ',
            path: '/manuals/application-process',
          },
          { title: 'แบบคำขอ/ใบรับรองแพทย์', path: '/manuals/forms' },
        ],
      },
      {
        title: 'เลขสวยช่วยลดอุบัติเหตุ',
        children: [
          {
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2560',
            path: '/projects/y-2560',
          },
          {
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2561',
            path: '/projects/y-2561',
          },
          {
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2562',
            path: '/projects/y-2562',
          },
          { 
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2563', 
            path: '/projects/y-2563' 
          },
        ],
      },
      {
        title: 'เกี่ยวกับ กปถ.',
        path: '/about',
      },
      {
        title: 'รายงานประจำปี กปถ.',
        children: [
          {
            title: 'รายงานประจำปี 2568',
            path: '/reports/y-2568',
          },
          {
            title: 'รายงานประจำปี 2567',
            path: '/reports/y-2567',
          },
          {
            title: 'รายงานประจำปี 2566',
            path: '/reports/y-2566',
          },
          { 
            title: 'รายงานประจำปี 2565', 
            path: '/reports/y-2565' 
          },
        ],
      },
      {
        title: 'วารสารกองทุน',
        path: '/magazines',
      },
    ],
  },
];
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
        path: '/demo-card',
      },
      {
        title: 'เลขสวยช่วยเหลือผู้พิการ',
        children: [
          {
            title: 'คู่มือลักษณะอุปกรณ์ฯ',
            path: '/demo-1',
          },
          {
            title: 'ผู้จำหน่ายอุปกรณ์',
            path: '/demo-2',
          },
          {
            title: 'ขั้นตอนการยื่นคำขอ',
            path: '/demo-3',
          },
          { title: 'แบบคำขอ/ใบรับรองแพทย์', path: '/demo-4' },
        ],
      },
      {
        title: 'เลขสวยช่วยลดอุบัติเหตุ',
        children: [
          {
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2560',
            path: '/demo-a',
          },
          {
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2561',
            path: '/demo-b',
          },
          {
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2562',
            path: '/demo-z',
          },
          { 
            title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2563', 
            path: '/demo-d' 
          },
        ],
      },
      {
        title: 'เกี่ยวกับ กปถ.',
        path: '/demo-e',
      },
      {
        title: 'รายงานประจำปี กปถ.',
        children: [
          {
            title: 'รายงานประจำปี 2568',
            path: '/demo-f',
          },
          {
            title: 'รายงานประจำปี 2567',
            path: '/demo-g',
          },
          {
            title: 'รายงานประจำปี 2566',
            path: '/demo-h',
          },
          { 
            title: 'รายงานประจำปี 2565', 
            path: '/demo-i' 
          },
        ],
      },
      {
        title: 'วารสารกองทุน',
        path: '/demo-j',
      },
    ],
  },
];
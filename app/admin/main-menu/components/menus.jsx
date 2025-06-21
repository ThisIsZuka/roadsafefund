'use client';

import { useMemo, useState } from 'react';
import { RiCheckboxCircleFill } from '@remixicon/react';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  EllipsisVertical,
  Filter,
  Search,
  Settings2,
  UserRoundPlus,
  ListPlus,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { toAbsoluteUrl } from '@/lib/helpers';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Alert, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTable,
  CardToolbar,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { DataGrid, useDataGrid } from '@/components/ui/data-grid';
import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header';
import { DataGridColumnVisibility } from '@/components/ui/data-grid-column-visibility';
import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from '@/components/ui/data-grid-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Pencil, Trash2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const data = [
  { id: '12b14177', title: 'หน้าแรก', path: '/', parentTitle: 'demo navb', hasChildren: false },
  { id: '70b05fb4', title: 'ข่าวสาร', path: '/demo-card', parentTitle: 'demo navb', hasChildren: false },
  { id: '85418440', title: 'เลขสวยช่วยเหลือผู้พิการ', path: null, parentTitle: 'demo navb', hasChildren: true },
  { id: '515ac62e', title: 'คู่มือลักษณะอุปกรณ์ฯ', path: '/demo-card', parentTitle: 'เลขสวยช่วยเหลือผู้พิการ', hasChildren: false },
  { id: '2cb66ccf', title: 'ผู้จำหน่ายอุปกรณ์', path: '/demo-card', parentTitle: 'เลขสวยช่วยเหลือผู้พิการ', hasChildren: false },
  { id: '289ea292', title: 'ขั้นตอนการยื่นคำขอ', path: '/demo-card', parentTitle: 'เลขสวยช่วยเหลือผู้พิการ', hasChildren: false },
  { id: 'a38b069d', title: 'แบบคำขอ/ใบรับรองแพทย์', path: '/demo-card', parentTitle: 'เลขสวยช่วยเหลือผู้พิการ', hasChildren: false },
  { id: '9732032f', title: 'เลขสวยช่วยลดอุบัติเหตุ', path: null, parentTitle: 'demo navb', hasChildren: true },
  { id: 'eb1c3874', title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2560', path: '/demo-card', parentTitle: 'เลขสวยช่วยลดอุบัติเหตุ', hasChildren: false },
  { id: '0804c35b', title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2561', path: '/demo-card', parentTitle: 'เลขสวยช่วยลดอุบัติเหตุ', hasChildren: false },
  { id: 'f2485e7d', title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2562', path: '/demo-card', parentTitle: 'เลขสวยช่วยลดอุบัติเหตุ', hasChildren: false },
  { id: '08e87513', title: 'โครงการใช้เงิน กปถ. ปีงบประมาณ 2563', path: '/demo-card', parentTitle: 'เลขสวยช่วยลดอุบัติเหตุ', hasChildren: false },
  { id: 'fb232646', title: 'เกี่ยวกับ กปถ.', path: '/demo-card', parentTitle: 'demo navb', hasChildren: false },
  { id: 'a3dce817', title: 'รายงานประจำปี กปถ.', path: null, parentTitle: 'demo navb', hasChildren: true },
  { id: '28deb24c', title: 'รายงานประจำปี 2568', path: '/demo-card', parentTitle: 'รายงานประจำปี กปถ.', hasChildren: false },
  { id: '819d2d4a', title: 'รายงานประจำปี 2567', path: '/demo-card', parentTitle: 'รายงานประจำปี กปถ.', hasChildren: false },
  { id: '1ec6196c', title: 'รายงานประจำปี 2566', path: '/demo-card', parentTitle: 'รายงานประจำปี กปถ.', hasChildren: false },
  { id: 'dd7b2384', title: 'รายงานประจำปี 2565', path: '/demo-card', parentTitle: 'รายงานประจำปี กปถ.', hasChildren: false },
  { id: '4a287bcc', title: 'วารสารกองทุน', path: '/demo-card', parentTitle: 'demo navb', hasChildren: false },
];

const ActionsCell = ({ row }) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => console.log('Edit', row.original.id)}
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>แก้ไข</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => console.log('Delete', row.original.id)}
            >
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>ลบ</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export function Menus() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [sorting, setSorting] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.path?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.parentTitle?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const columns = useMemo(() => [
    // {
    //   accessorKey: 'id',
    //   header: () => <DataGridTableRowSelectAll />,
    //   cell: ({ row }) => <DataGridTableRowSelect row={row} />,
    //   enableSorting: false,
    //   size: 48,
    // },
    {
      accessorKey: 'ชื่อเมนู',
      header: ({ column }) => <DataGridColumnHeader column={column} title="ชื่อเมนู" />,
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
    {
      accessorKey: 'path',
      header: ({ column }) => <DataGridColumnHeader column={column} title="Path" />,
      cell: ({ row }) => <span>{row.original.path || '-'}</span>,
    },
    {
      accessorKey: 'เมนูหลัก',
      header: ({ column }) => <DataGridColumnHeader column={column} title="เมนูหลัก" />,
      cell: ({ row }) => <span>{row.original.parentTitle}</span>,
    },
    {
      accessorKey: 'มีเมนูย่อย',
      header: ({ column }) => <DataGridColumnHeader column={column} title="มีเมนูย่อย" />,
      cell: ({ row }) => (
        <Badge variant={row.original.hasChildren ? 'success' : 'secondary'}>
          {row.original.hasChildren ? 'มี' : 'ไม่มี'}
        </Badge>
      ),
    },
    {
      id: 'actions',
      header: '',
      cell: ({ row }) => <ActionsCell row={row} />,
      enableSorting: false,
      size: 60,
    },
  ], []);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { pagination, sorting },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const Toolbar = () => {
    const { table } = useDataGrid();
    return (
      <CardToolbar>
        <div className="flex items-center gap-2.5">
          <Button><ListPlus className="me-1" />เพิ่มเมนู</Button>
          <DataGridColumnVisibility
            table={table}
            trigger={
              <Button variant="outline">
                <Settings2 className="me-1" />จัด Columns
              </Button>
            }
          />
        </div>
      </CardToolbar>
    );
  };

  return (
    <DataGrid table={table} recordCount={filteredData.length}>
      <Card>
        <CardHeader>
          <CardHeading>
            <div className="relative">
              <Input
                placeholder="ค้นหาเมนู..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ps-9 w-72"
              />
            </div>
          </CardHeading>
          <Toolbar />
        </CardHeader>
        <CardTable>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardTable>
        <CardFooter>
          <DataGridPagination />
        </CardFooter>
      </Card>
    </DataGrid>
  );
}

export default Menus;

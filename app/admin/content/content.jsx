'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RiCheckboxCircleFill } from '@remixicon/react';
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { toast } from 'sonner';
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
import { DataGrid, useDataGrid } from '@/components/ui/data-grid';
import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header';
import { DataGridColumnVisibility } from '@/components/ui/data-grid-column-visibility';
import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import { DataGridTable } from '@/components/ui/data-grid-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ListPlus, Settings2, EllipsisVertical } from 'lucide-react';
import { Pencil, Trash2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const data = [
  {
    id: '1',
    title: 'การประมูลเลขสวยที่มีลักษณะพิเศษ ครั้งที่ 9',
    date: '21 ธันวาคม 2567',
    excerpt: 'กรมการขนส่งทางบก ได้จัดการประมูลทะเบียนเลขสวย...',
    image: '/images/news1.jpg',
  },
  {
    id: '2',
    title: 'สำนักงานกองทุนเพื่อความปลอดภัย จัดงานแถลงข่าว',
    date: '20 ธันวาคม 2567',
    excerpt: 'ในการใช้รายได้สนับสนุนงานพร้อมออกบูธแสดงผลงาน...',
    image: '/images/news2.jpg',
  },
  {
    id: '3',
    title: 'การประมูลเลขสวยที่มีลักษณะพิเศษ ครั้งที่ 8',
    date: '21 ธันวาคม 2566',
    excerpt: 'กรมการขนส่งทางบก ได้จัดการประมูลทะเบียนเลขสวย...',
    image: '/images/news1.jpg',
  },
];

const ActionsCell = ({ row }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => router.push('/admin/content/edit-content')}
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


export function SubContent() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [sorting, setSorting] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.includes(searchQuery)
    );
  }, [searchQuery]);

  const columns = useMemo(() => [
    {
      accessorKey: 'title',
      header: ({ column }) => <DataGridColumnHeader column={column} title="หัวข้อข่าว" />,
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
    {
      accessorKey: 'date',
      header: ({ column }) => <DataGridColumnHeader column={column} title="วันที่" />,
      cell: ({ row }) => <span>{row.original.date}</span>,
    },
    {
      accessorKey: 'excerpt',
      header: ({ column }) => <DataGridColumnHeader column={column} title="เนื้อหาโดยย่อ" />,
      cell: ({ row }) => <span>{row.original.excerpt}</span>,
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
          <Button><ListPlus className="me-1" />เพิ่มเนื้อหา</Button>
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
            <Input
              placeholder="ค้นหาหัวข้อ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ps-9 w-72"
            />
          </CardHeading>
          <Toolbar />
        </CardHeader>
        <CardTable>
          <DataGridTable />
        </CardTable>
        <CardFooter>
          <DataGridPagination />
        </CardFooter>
      </Card>
    </DataGrid>
  );
}
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Employee {
  id: number;
  full_name: string;
  email: string;
  department: string;
  position: string;
  hire_date: string;
  employment_status: string;
}

const EmployeeList = ({ refresh }: { refresh?: number }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/68b6eca4-2fae-4ac1-97b3-af08bae98762');
        const data = await response.json();
        setEmployees(data.employees || []);
      } catch (error) {
        console.error('Ошибка загрузки сотрудников:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [refresh]);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; className: string }> = {
      active: { label: 'Работает', className: 'bg-green-100 text-green-700' },
      on_leave: { label: 'В отпуске', className: 'bg-yellow-100 text-yellow-700' },
      terminated: { label: 'Уволен', className: 'bg-gray-100 text-gray-700' },
    };

    const variant = variants[status] || variants.active;
    return <Badge className={variant.className}>{variant.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '—';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };

  if (loading) {
    return (
      <Card className="p-8 bg-white">
        <p className="text-center text-muted-foreground">Загрузка...</p>
      </Card>
    );
  }

  if (employees.length === 0) {
    return (
      <Card className="p-8 bg-white">
        <p className="text-center text-muted-foreground">Сотрудников пока нет. Добавьте первого!</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-white">
      <h3 className="text-2xl font-bold mb-6">Список сотрудников ({employees.length})</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ФИО</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Отдел</TableHead>
              <TableHead>Должность</TableHead>
              <TableHead>Дата найма</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.full_name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.department || '—'}</TableCell>
                <TableCell>{employee.position || '—'}</TableCell>
                <TableCell>{formatDate(employee.hire_date)}</TableCell>
                <TableCell>{getStatusBadge(employee.employment_status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default EmployeeList;

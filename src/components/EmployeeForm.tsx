import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const EmployeeForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    department: '',
    position: '',
    hire_date: '',
    employment_status: 'active',
  });

  const departments = ['Разработка', 'Продажи', 'Маркетинг', 'Поддержка', 'HR', 'Финансы'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/68b6eca4-2fae-4ac1-97b3-af08bae98762', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Сотрудник добавлен',
          description: `${formData.full_name} успешно добавлен в систему`,
        });
        
        setFormData({
          full_name: '',
          email: '',
          department: '',
          position: '',
          hire_date: '',
          employment_status: 'active',
        });

        if (onSuccess) onSuccess();
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Не удалось добавить сотрудника',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Произошла ошибка при добавлении сотрудника',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 bg-white">
      <h3 className="text-2xl font-bold mb-6">Добавить сотрудника</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="full_name">ФИО *</Label>
            <Input
              id="full_name"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              placeholder="Иван Иванов"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ivan@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Отдел</Label>
            <Select
              value={formData.department}
              onValueChange={(value) => setFormData({ ...formData, department: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите отдел" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Должность</Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              placeholder="Senior Developer"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hire_date">Дата начала работы</Label>
            <Input
              id="hire_date"
              type="date"
              value={formData.hire_date}
              onChange={(e) => setFormData({ ...formData, hire_date: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employment_status">Статус</Label>
            <Select
              value={formData.employment_status}
              onValueChange={(value) => setFormData({ ...formData, employment_status: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Работает</SelectItem>
                <SelectItem value="on_leave">В отпуске</SelectItem>
                <SelectItem value="terminated">Уволен</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" disabled={loading} className="w-full md:w-auto">
          {loading ? 'Добавление...' : 'Добавить сотрудника'}
        </Button>
      </form>
    </Card>
  );
};

export default EmployeeForm;

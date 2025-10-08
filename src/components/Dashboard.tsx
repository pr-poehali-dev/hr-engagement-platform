import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import EmployeeForm from '@/components/EmployeeForm';
import EmployeeList from '@/components/EmployeeList';

const Dashboard = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const metrics = [
    { label: 'Индекс вовлечённости', value: '76', trend: '+8%', color: 'bg-primary' },
    { label: 'eNPS', value: '45', trend: '+12', color: 'bg-green-500' },
    { label: 'Активных опросов', value: '5', trend: '', color: 'bg-blue-500' },
    { label: 'Отклик', value: '91%', trend: '+4%', color: 'bg-purple-500' },
  ];

  const departments = [
    { name: 'Разработка', score: 82, count: 124, change: '+5%' },
    { name: 'Продажи', score: 74, count: 89, change: '+2%' },
    { name: 'Маркетинг', score: 71, count: 45, change: '-1%' },
    { name: 'Поддержка', score: 85, count: 67, change: '+7%' },
    { name: 'HR', score: 79, count: 23, change: '+3%' },
  ];

  const recentFeedback = [
    { text: 'Команда стала более сплочённой после офлайн-встреч', dept: 'Разработка', sentiment: 'positive' },
    { text: 'Не хватает гибкости в рабочем графике', dept: 'Продажи', sentiment: 'neutral' },
    { text: 'Отличные возможности для обучения и роста', dept: 'Маркетинг', sentiment: 'positive' },
    { text: 'Хотелось бы больше прозрачности в принятии решений', dept: 'Поддержка', sentiment: 'neutral' },
  ];

  const chartData = [
    { month: 'Янв', value: 68 },
    { month: 'Фев', value: 71 },
    { month: 'Мар', value: 69 },
    { month: 'Апр', value: 73 },
    { month: 'Май', value: 75 },
    { month: 'Июн', value: 76 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Панель аналитики</h1>
          <p className="text-muted-foreground">Обзор вовлечённости за текущий месяц</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-6 bg-white hover:shadow-md transition-shadow">
              <div className="text-sm text-muted-foreground mb-3">{metric.label}</div>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-bold">{metric.value}</div>
                {metric.trend && (
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    {metric.trend}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="analytics" className="mb-12">
          <TabsList className="bg-white border">
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="surveys">Опросы</TabsTrigger>
            <TabsTrigger value="employees">Сотрудники</TabsTrigger>
            <TabsTrigger value="teams">Команды</TabsTrigger>
            <TabsTrigger value="feedback">Обратная связь</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-6 space-y-6">
            <Card className="p-8 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Динамика вовлечённости</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="bg-primary text-white border-primary">
                    6 мес
                  </Button>
                  <Button variant="outline" size="sm">
                    1 год
                  </Button>
                  <Button variant="outline" size="sm">
                    Всё время
                  </Button>
                </div>
              </div>
              <div className="h-80 flex items-end justify-between gap-4 border-b border-l pb-4 pl-4">
                {chartData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-primary rounded-t hover:bg-primary/80 transition-colors cursor-pointer relative group"
                      style={{ height: `${item.value * 3.5}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.value}%
                      </div>
                    </div>
                    <div className="text-sm mt-3 font-medium text-muted-foreground">{item.month}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-6">Вовлечённость по отделам</h3>
              <div className="space-y-6">
                {departments.map((dept) => (
                  <div key={dept.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{dept.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{dept.count} чел.</span>
                        <span
                          className={`text-sm font-semibold ${
                            dept.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {dept.change}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={dept.score} className="flex-1 h-3" />
                      <span className="text-lg font-bold w-12 text-right">{dept.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="surveys" className="mt-6">
            <Card className="p-8 bg-white">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Активные опросы</h3>
                  <p className="text-muted-foreground">Управление и создание опросов</p>
                </div>
                <Button>Создать опрос</Button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Pulse Survey — Еженедельный', status: 'Активен', responses: 234, total: 325 },
                  { name: 'Onboarding — Новички 2024', status: 'Активен', responses: 18, total: 23 },
                  { name: 'Удовлетворённость — Q4', status: 'Завершён', responses: 298, total: 325 },
                  { name: 'Exit Interview', status: 'Активен', responses: 5, total: 8 },
                ].map((survey) => (
                  <div key={survey.name} className="flex justify-between items-center p-6 border rounded-lg hover:border-primary transition-colors">
                    <div>
                      <div className="font-semibold text-lg mb-1">{survey.name}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className={`px-2 py-1 rounded ${survey.status === 'Активен' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>
                          {survey.status}
                        </span>
                        <span>
                          {survey.responses} / {survey.total} ответов
                        </span>
                      </div>
                    </div>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="employees" className="mt-6 space-y-6">
            <EmployeeForm onSuccess={() => setRefreshKey(prev => prev + 1)} />
            <EmployeeList refresh={refreshKey} />
          </TabsContent>

          <TabsContent value="teams" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-6">Сегментация</h3>
                <div className="space-y-4">
                  {[
                    { label: 'По отделам', count: 8, icon: '🏢' },
                    { label: 'По ролям', count: 15, icon: '👤' },
                    { label: 'По стажу работы', count: 5, icon: '📅' },
                    { label: 'По локации', count: 3, icon: '📍' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">{item.count}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-6">Управление доступом</h3>
                <div className="space-y-4">
                  {[
                    { role: 'Администраторы', count: 3, permissions: 'Полный доступ' },
                    { role: 'HR менеджеры', count: 7, permissions: 'Просмотр и редактирование' },
                    { role: 'Руководители отделов', count: 15, permissions: 'Просмотр своих отделов' },
                  ].map((item) => (
                    <div key={item.role} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold">{item.role}</span>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{item.count} чел.</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.permissions}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Управление пользователями
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="mt-6">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-6">Последние отзывы сотрудников</h3>
              <div className="space-y-6">
                {recentFeedback.map((feedback, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-lg mb-3">{feedback.text}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{feedback.dept}</span>
                      <span className={`px-2 py-1 rounded ${feedback.sentiment === 'positive' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {feedback.sentiment === 'positive' ? 'Позитивный' : 'Нейтральный'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6" variant="outline">
                Посмотреть все отзывы
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
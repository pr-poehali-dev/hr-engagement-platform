import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const metrics = [
    { label: 'Индекс вовлечённости', value: '73', trend: '+5%' },
    { label: 'eNPS', value: '42', trend: '+12' },
    { label: 'Активных опросов', value: '3', trend: '' },
    { label: 'Отклик', value: '89%', trend: '+3%' },
  ];

  const departments = [
    { name: 'Разработка', score: 78, count: 124 },
    { name: 'Продажи', score: 71, count: 89 },
    { name: 'Маркетинг', score: 68, count: 45 },
    { name: 'Поддержка', score: 82, count: 67 },
  ];

  const recentFeedback = [
    { text: 'Отличная атмосфера в команде, но не хватает карьерных возможностей', dept: 'Разработка' },
    { text: 'Хотелось бы больше обучающих программ', dept: 'Маркетинг' },
    { text: 'Гибкий график — лучшее решение за последний год', dept: 'Продажи' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Обзор вовлечённости персонала</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-6 border-black">
              <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-bold">{metric.value}</div>
                {metric.trend && <div className="text-sm font-medium">{metric.trend}</div>}
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="analytics" className="mb-12">
          <TabsList className="border-b border-black bg-transparent rounded-none h-auto p-0 mb-8">
            <TabsTrigger
              value="analytics"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2"
            >
              Аналитика
            </TabsTrigger>
            <TabsTrigger
              value="surveys"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2"
            >
              Опросы
            </TabsTrigger>
            <TabsTrigger
              value="teams"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2"
            >
              Команды
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-4 py-2"
            >
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-black">
                <h3 className="text-xl font-bold mb-6">Вовлечённость по отделам</h3>
                <div className="space-y-6">
                  {departments.map((dept) => (
                    <div key={dept.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{dept.name}</span>
                        <span className="text-sm text-gray-600">{dept.count} чел.</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={dept.score} className="flex-1 h-2 bg-gray-200" />
                        <span className="text-sm font-bold w-12 text-right">{dept.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-black">
                <h3 className="text-xl font-bold mb-6">Последние отзывы</h3>
                <div className="space-y-6">
                  {recentFeedback.map((feedback, idx) => (
                    <div key={idx} className="border-l-2 border-black pl-4">
                      <p className="mb-2">{feedback.text}</p>
                      <span className="text-sm text-gray-600">{feedback.dept}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="p-8 border-black">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Динамика вовлечённости</h3>
                  <div className="flex gap-4 text-sm">
                    <button className="text-black font-medium">6 мес</button>
                    <button className="text-gray-400">1 год</button>
                    <button className="text-gray-400">Всё время</button>
                  </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 68, 70, 69, 71, 73].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-black" style={{ height: `${val}%` }}></div>
                      <div className="text-xs mt-2 text-gray-600">
                        {['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'][idx]}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="surveys">
            <Card className="p-8 border-black">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Конструктор опросов</h3>
                <Button className="bg-black text-white hover:bg-gray-800">Создать опрос</Button>
              </div>
              <div className="space-y-4">
                {['Pulse Survey — Ежемесячный', 'Onboarding Survey — Новички', 'Exit Interview — Увольнение'].map(
                  (survey) => (
                    <div key={survey} className="flex justify-between items-center p-4 border border-black">
                      <div>
                        <div className="font-medium">{survey}</div>
                        <div className="text-sm text-gray-600 mt-1">Статус: Активен</div>
                      </div>
                      <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                        Редактировать
                      </Button>
                    </div>
                  )
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="teams">
            <Card className="p-8 border-black">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Управление командами</h3>
                <Button className="bg-black text-white hover:bg-gray-800">Импорт CSV</Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-black p-6">
                  <h4 className="font-bold mb-4">Сегментация</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>По отделам</span>
                      <span className="font-medium">8</span>
                    </li>
                    <li className="flex justify-between">
                      <span>По ролям</span>
                      <span className="font-medium">12</span>
                    </li>
                    <li className="flex justify-between">
                      <span>По стажу</span>
                      <span className="font-medium">5</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-black p-6">
                  <h4 className="font-bold mb-4">Доступ</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Администраторы</span>
                      <span className="font-medium">3</span>
                    </li>
                    <li className="flex justify-between">
                      <span>HR менеджеры</span>
                      <span className="font-medium">7</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Руководители</span>
                      <span className="font-medium">15</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-8 border-black">
              <h3 className="text-2xl font-bold mb-8">Безопасность и настройки</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="font-bold mb-2">Двухфакторная аутентификация</h4>
                  <p className="text-sm text-gray-600 mb-4">Дополнительная защита аккаунта</p>
                  <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                    Настроить 2FA
                  </Button>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="font-bold mb-2">Журнал активности</h4>
                  <p className="text-sm text-gray-600 mb-4">История действий администраторов</p>
                  <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                    Просмотреть журнал
                  </Button>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Соответствие стандартам</h4>
                  <p className="text-sm text-gray-600 mb-4">GDPR, ФЗ-152, ISO 27001</p>
                  <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                    Экспорт данных
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;

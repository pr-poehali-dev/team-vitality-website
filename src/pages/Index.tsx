import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'matches', label: 'Матчи', icon: 'Trophy' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'tournaments', label: 'Турниры', icon: 'Award' },
  ];

  const teamMembers = [
    { name: 'ZywOo', role: 'AWPer', game: 'CS2', rating: 1.35 },
    { name: 'apEX', role: 'IGL', game: 'CS2', rating: 1.12 },
    { name: 'Mezii', role: 'Rifler', game: 'CS2', rating: 1.18 },
    { name: 'Spinx', role: 'Entry', game: 'CS2', rating: 1.22 },
    { name: 'FlameZ', role: 'Rifler', game: 'CS2', rating: 1.25 },
  ];

  const matches = [
    { opponent: 'FaZe Clan', date: '12 ноября 2025', score: '2:1', status: 'win', tournament: 'IEM Katowice' },
    { opponent: 'Natus Vincere', date: '10 ноября 2025', score: '1:2', status: 'loss', tournament: 'BLAST Premier' },
    { opponent: 'G2 Esports', date: '8 ноября 2025', score: '2:0', status: 'win', tournament: 'ESL Pro League' },
    { opponent: 'Team Liquid', date: '15 ноября 2025', score: 'TBD', status: 'upcoming', tournament: 'PGL Major' },
  ];

  const news = [
    {
      title: 'Team Vitality побеждает на IEM Katowice 2025',
      date: '12 ноября 2025',
      excerpt: 'Невероятная игра команды привела к победе в финале против FaZe Clan со счетом 2:1',
      category: 'Победа'
    },
    {
      title: 'ZywOo получает награду MVP турнира',
      date: '12 ноября 2025',
      excerpt: 'Французский снайпер показал выдающуюся игру с рейтингом 1.45 на протяжении всего турнира',
      category: 'Награды'
    },
    {
      title: 'Анонс нового состава на 2026 год',
      date: '5 ноября 2025',
      excerpt: 'Руководство Team Vitality объявило о планах на следующий сезон и возможных изменениях в составе',
      category: 'Новости'
    },
  ];

  const tournaments = [
    { name: 'IEM Katowice 2025', status: 'completed', place: '🥇 1 место', prize: '$400,000' },
    { name: 'BLAST Premier Fall', status: 'completed', place: '🥈 2 место', prize: '$100,000' },
    { name: 'ESL Pro League S19', status: 'completed', place: '🥇 1 место', prize: '$175,000' },
    { name: 'PGL Major Copenhagen', status: 'upcoming', place: 'Участие', prize: 'TBD' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/ba6a0450-49c0-4455-a8b7-2c06278ecf04/files/f192f0db-37cc-41f7-a029-34487e746927.jpg" 
                alt="Team Vitality Logo" 
                className="h-12 w-12 object-contain rounded-lg"
              />
              <h1 className="text-2xl font-bold text-primary">Team Vitality</h1>
            </div>
            <div className="hidden md:flex gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/ba6a0450-49c0-4455-a8b7-2c06278ecf04/files/8d17208c-fcc5-418a-b983-08011489e0f2.jpg"
                alt="Esports Arena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h2 className="text-5xl font-black text-white mb-4 drop-shadow-lg">
                    Чемпионы европейского киберспорта
                  </h2>
                  <p className="text-xl text-white/90 mb-6 drop-shadow-md">
                    Team Vitality - лидеры профессиональной CS2 сцены
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 animate-glow">
                      <Icon name="Play" size={20} />
                      Смотреть матчи
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Узнать больше
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name="Trophy" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">24</h3>
                      <p className="text-muted-foreground">Турниров выиграно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <Icon name="Users" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">5</h3>
                      <p className="text-muted-foreground">Игроков в составе</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Icon name="Award" size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">#1</h3>
                      <p className="text-muted-foreground">Мировой рейтинг</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <section>
              <h3 className="text-2xl font-bold mb-6">Последние новости</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {news.slice(0, 3).map((item, idx) => (
                  <Card key={idx} className="hover:border-primary/50 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <Badge className="mb-3">{item.category}</Badge>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'team' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black mb-4">Наш состав</h2>
              <p className="text-muted-foreground text-lg">Лучшие игроки европейской CS2 сцены</p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
              <img
                src="https://cdn.poehali.dev/projects/ba6a0450-49c0-4455-a8b7-2c06278ecf04/files/a7de0882-c185-4fc1-8923-bbed78fe807d.jpg"
                alt="Team Photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <Card key={idx} className="hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-muted-foreground">{member.role}</p>
                      </div>
                      <Badge variant="outline" className="text-primary border-primary">
                        {member.game}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-accent" />
                      <span className="text-lg font-semibold">Рейтинг: {member.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'matches' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black mb-4">Матчи</h2>
              <p className="text-muted-foreground text-lg">Результаты и предстоящие игры</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
                <TabsTrigger value="completed">Завершенные</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-6">
                {matches.map((match, idx) => (
                  <Card key={idx} className={`${
                    match.status === 'win' ? 'border-l-4 border-l-accent' :
                    match.status === 'loss' ? 'border-l-4 border-l-destructive' :
                    'border-l-4 border-l-primary'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">Team Vitality vs {match.opponent}</h3>
                            {match.status === 'win' && <Badge className="bg-accent text-white">Победа</Badge>}
                            {match.status === 'loss' && <Badge variant="destructive">Поражение</Badge>}
                            {match.status === 'upcoming' && <Badge className="bg-primary">Скоро</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{match.tournament}</p>
                        </div>
                        <div className="text-center md:text-right">
                          <p className="text-3xl font-bold mb-1">{match.score}</p>
                          <p className="text-sm text-muted-foreground">{match.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-4 mt-6">
                {matches.filter(m => m.status === 'upcoming').map((match, idx) => (
                  <Card key={idx} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">Team Vitality vs {match.opponent}</h3>
                            <Badge className="bg-primary">Скоро</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{match.tournament}</p>
                        </div>
                        <div className="text-center md:text-right">
                          <p className="text-3xl font-bold mb-1">{match.score}</p>
                          <p className="text-sm text-muted-foreground">{match.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="completed" className="space-y-4 mt-6">
                {matches.filter(m => m.status !== 'upcoming').map((match, idx) => (
                  <Card key={idx} className={`${
                    match.status === 'win' ? 'border-l-4 border-l-accent' :
                    'border-l-4 border-l-destructive'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">Team Vitality vs {match.opponent}</h3>
                            {match.status === 'win' && <Badge className="bg-accent text-white">Победа</Badge>}
                            {match.status === 'loss' && <Badge variant="destructive">Поражение</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{match.tournament}</p>
                        </div>
                        <div className="text-center md:text-right">
                          <p className="text-3xl font-bold mb-1">{match.score}</p>
                          <p className="text-sm text-muted-foreground">{match.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black mb-4">Новости</h2>
              <p className="text-muted-foreground text-lg">Последние события из мира Team Vitality</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item, idx) => (
                <Card key={idx} className="hover:border-primary/50 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <Badge className="mb-4">{item.category}</Badge>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.date}</span>
                      <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'tournaments' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black mb-4">Турниры</h2>
              <p className="text-muted-foreground text-lg">История побед и предстоящие соревнования</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tournaments.map((tournament, idx) => (
                <Card key={idx} className={`${
                  tournament.status === 'completed' ? 'border-accent/30' : 'border-primary/30'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{tournament.name}</h3>
                        <p className="text-3xl mb-2">{tournament.place}</p>
                      </div>
                      <Badge variant={tournament.status === 'completed' ? 'default' : 'outline'}>
                        {tournament.status === 'completed' ? 'Завершен' : 'Предстоящий'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="DollarSign" size={20} />
                      <span className="text-lg font-semibold">{tournament.prize}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/ba6a0450-49c0-4455-a8b7-2c06278ecf04/files/f192f0db-37cc-41f7-a029-34487e746927.jpg" 
                alt="Team Vitality" 
                className="h-10 w-10 object-contain"
              />
              <p className="text-muted-foreground">© 2025 Team Vitality. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    "$ docker ps",
    "$ systemctl status nginx",
    "$ tail -f /var/log/syslog",
    "$ ",
  ]);

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (terminalInput.trim()) {
      setTerminalHistory((prev) => [
        ...prev,
        `$ ${terminalInput}`,
        "Command executed...",
        "$ ",
      ]);
      setTerminalInput("");
    }
  };

  const menuItems = [
    { name: "Docker", icon: "Container", active: false },
    { name: "SSL", icon: "Shield", active: false },
    { name: "n8n", icon: "GitBranch", active: false },
    { name: "NGINX", icon: "Globe", active: true },
    { name: "PostgreSQL", icon: "Database", active: false },
    { name: "Redis", icon: "Zap", active: false },
    { name: "Monitoring", icon: "Activity", active: false },
    { name: "Firewall", icon: "Shield", active: false },
    { name: "Backups", icon: "Archive", active: false },
    { name: "CI/CD", icon: "GitBranch", active: false },
    { name: "Copilot", icon: "Bot", active: false },
    { name: "ChatOps", icon: "MessageSquare", active: false },
  ];

  return (
    <div className="min-h-screen bg-[#2D2D30] text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#252526] border-r border-gray-700 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={20} className="text-purple-400" />
            <h1 className="text-lg font-bold text-white">VarPilot</h1>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Icon
              name="Search"
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Поиск..."
              className="bg-[#1E1E1E] border-gray-600 pl-10 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                item.active
                  ? "bg-[#37373D] text-white"
                  : "text-gray-400 hover:bg-[#37373D] hover:text-white"
              }`}
            >
              <Icon name={item.icon} size={16} />
              <span className="text-sm">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Registration Button */}
        <div className="p-4 border-t border-gray-700">
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
            Регистрация
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Server Load Card */}
            <Card className="bg-[#1E1E1E] border-gray-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Server" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">
                      Загрузка сервера
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CPU: 34%</span>
                    <span className="text-gray-400">RAM: 56%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Диск:</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Время подключения к API
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pilot Active Card */}
            <Card className="bg-gradient-to-r from-purple-600 to-purple-700 border-purple-500">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-white" />
                  <span className="text-sm text-white">Пилот активен</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white text-sm">Служу за системой.</p>
              </CardContent>
            </Card>

            {/* Keys and Passwords Card */}
            <Card className="bg-[#1E1E1E] border-gray-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Key" size={16} className="text-yellow-400" />
                    <span className="text-sm text-gray-400">
                      Ключи и пароли
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">API_KEY:</span>
                    <span className="text-white font-mono">••••••••</span>
                    <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                      <span className="text-purple-400">Копировать</span>
                    </Button>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SSH_KEY:</span>
                    <span className="text-white font-mono">••••••••</span>
                    <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                      <span className="text-purple-400">Скачать</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Terminal Console */}
          <Card className="bg-[#0D1117] border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Icon name="Terminal" size={16} className="mr-2" />
                Консоль - (отключенная)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-black/80 rounded-lg p-4 font-mono text-sm h-64">
                <div className="space-y-1">
                  {terminalHistory.map((line, index) => (
                    <div
                      key={index}
                      className={
                        line.startsWith("$")
                          ? "text-green-400"
                          : "text-gray-300"
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleTerminalCommand} className="mt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">$</span>
                    <Input
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="bg-transparent border-none focus:ring-0 text-white font-mono text-sm"
                      placeholder="docker ps"
                    />
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card className="bg-[#1E1E1E] border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Icon name="Bot" size={16} className="mr-2" />
                ИИ Ассистент
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-[#2D2D30] rounded-lg p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    Пилот: Обнаружена проблема в nginx.conf
                  </p>
                  <Badge
                    variant="outline"
                    className="text-xs text-purple-400 border-purple-400"
                  >
                    Готов помочь
                  </Badge>
                </div>

                <div className="bg-[#2D2D30] rounded-lg p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    Пилот: Запускаю автоматическую проверку
                  </p>
                  <Badge
                    variant="outline"
                    className="text-xs text-green-400 border-green-400"
                  >
                    ✅ Готово. Ошибка исправлена.
                  </Badge>
                </div>

                <div className="bg-[#2D2D30] rounded-lg p-4">
                  <p className="text-sm text-gray-300">Задать вопрос...</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Users" size={14} className="text-purple-400" />
                    <span className="text-gray-400">Staff Online</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="User" size={14} className="text-purple-400" />
                    <span className="text-gray-400">User online</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Icon
                      name="FileText"
                      size={14}
                      className="text-purple-400"
                    />
                    <span className="text-gray-400">Reports</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;

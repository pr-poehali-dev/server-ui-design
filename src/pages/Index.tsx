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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    "$ systemctl status nginx",
    "● nginx.service - A high performance web server",
    "   Active: active (running) since Mon 2024-01-15 10:30:12 UTC",
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

  const serverStats = [
    { name: "CPU Usage", value: 68, color: "bg-green-500" },
    { name: "Memory", value: 45, color: "bg-blue-500" },
    { name: "Disk Space", value: 73, color: "bg-yellow-500" },
    { name: "Network", value: 32, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Server" size={18} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ServerPanel
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="outline"
                className="border-green-500 text-green-400"
              >
                <Icon name="Circle" size={8} className="mr-1 fill-current" />
                Online
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-1" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Active Servers",
              value: "12",
              icon: "Server",
              color: "from-blue-500 to-blue-600",
            },
            {
              label: "Total Projects",
              value: "24",
              icon: "Folder",
              color: "from-green-500 to-green-600",
            },
            {
              label: "Uptime",
              value: "99.9%",
              icon: "Activity",
              color: "from-purple-500 to-purple-600",
            },
            {
              label: "Alerts",
              value: "3",
              icon: "AlertTriangle",
              color: "from-orange-500 to-orange-600",
            },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-white mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}
                  >
                    <Icon name={stat.icon} size={20} className="text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Server Monitoring */}
          <div className="lg:col-span-2 space-y-6">
            {/* Server Status */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MonitorSpeaker" size={20} className="mr-2" />
                  Server Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serverStats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{stat.name}</span>
                        <span className="text-white font-medium">
                          {stat.value}%
                        </span>
                      </div>
                      <Progress value={stat.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="FolderOpen" size={20} className="mr-2" />
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "E-commerce API",
                      status: "Running",
                      uptime: "15d 4h",
                      cpu: "12%",
                    },
                    {
                      name: "Analytics Dashboard",
                      status: "Running",
                      uptime: "8d 12h",
                      cpu: "8%",
                    },
                    {
                      name: "Mobile Backend",
                      status: "Stopped",
                      uptime: "0h",
                      cpu: "0%",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            project.status === "Running"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium text-white">
                            {project.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            Uptime: {project.uptime}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            project.status === "Running"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {project.status}
                        </Badge>
                        <p className="text-sm text-gray-400 mt-1">
                          CPU: {project.cpu}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Terminal & Tools */}
          <div className="space-y-6">
            {/* Terminal */}
            <Card className="bg-gray-900/70 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Terminal" size={20} className="mr-2" />
                  Terminal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm">
                  <div className="h-48 overflow-y-auto space-y-1">
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
                        className="bg-transparent border-none focus:ring-0 text-white font-mono"
                        placeholder="Enter command..."
                      />
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      label: "Deploy Project",
                      icon: "Rocket",
                      variant: "default",
                    },
                    {
                      label: "Restart Services",
                      icon: "RefreshCw",
                      variant: "outline",
                    },
                    {
                      label: "View Logs",
                      icon: "FileText",
                      variant: "outline",
                    },
                    {
                      label: "Backup Data",
                      icon: "Download",
                      variant: "outline",
                    },
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant}
                      className="w-full justify-start"
                    >
                      <Icon name={action.icon} size={16} className="mr-2" />
                      {action.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Info */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Info" size={20} className="mr-2" />
                  System Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">OS</span>
                    <span className="text-white">Ubuntu 22.04 LTS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Kernel</span>
                    <span className="text-white">5.15.0-91</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Load Average</span>
                    <span className="text-white">0.68, 0.45, 0.32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Docker</span>
                    <Badge
                      variant="outline"
                      className="text-blue-400 border-blue-400"
                    >
                      v24.0.7
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

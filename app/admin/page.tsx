"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, Mail, FileText, Eye, Edit, Trash2, Plus, Filter } from "lucide-react"

// Mock data - in real implementation, this would come from Laravel API
const mockStats = {
  appointments: { total: 156, pending: 23, confirmed: 98, completed: 35 },
  contacts: { total: 89, new: 12, responded: 77 },
  newsletter: { subscribers: 1247, active: 1198 },
  news: { published: 15, drafts: 3 },
}

const mockAppointments = [
  {
    id: 1,
    patient: "John Doe",
    phone: "+998901234567",
    email: "john.doe@example.com",
    service: "Cardiology Consultation",
    doctor: "Dr. Aliyeva Munira",
    date: "2024-01-20",
    time: "10:00",
    status: "pending",
  },
  {
    id: 2,
    patient: "Sarah Smith",
    phone: "+998907654321",
    email: "sarah.smith@example.com",
    service: "General Checkup",
    doctor: "Dr. Rustamov Shavkat",
    date: "2024-01-21",
    time: "14:00",
    status: "confirmed",
  },
]

const mockContacts = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    subject: "General Inquiry",
    message: "I would like to know more about your family health programs...",
    status: "new",
    created_at: "2024-01-15T10:30:00Z",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [appointments, setAppointments] = useState(mockAppointments)
  const [contacts, setContacts] = useState(mockContacts)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "new":
        return "bg-orange-100 text-orange-800"
      case "responded":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage appointments, contacts, and content for TISU Medical Hub</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.appointments.total}</div>
                  <p className="text-xs text-muted-foreground">{mockStats.appointments.pending} pending</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.contacts.total}</div>
                  <p className="text-xs text-muted-foreground">{mockStats.contacts.new} new messages</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.newsletter.subscribers}</div>
                  <p className="text-xs text-muted-foreground">{mockStats.newsletter.active} active</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">News Articles</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.news.published}</div>
                  <p className="text-xs text-muted-foreground">{mockStats.news.drafts} drafts</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.slice(0, 3).map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{appointment.patient}</p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.service} - {appointment.date}
                          </p>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contacts.slice(0, 3).map((contact) => (
                      <div key={contact.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.subject}</p>
                        </div>
                        <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Appointments Management</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Appointment
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="p-4">Patient</th>
                        <th className="p-4">Contact</th>
                        <th className="p-4">Service</th>
                        <th className="p-4">Doctor</th>
                        <th className="p-4">Date & Time</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b">
                          <td className="p-4">
                            <div>
                              <p className="font-medium">{appointment.patient}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              <p>{appointment.phone}</p>
                              <p className="text-muted-foreground">{appointment.email}</p>
                            </div>
                          </td>
                          <td className="p-4">{appointment.service}</td>
                          <td className="p-4">{appointment.doctor}</td>
                          <td className="p-4">
                            <div className="text-sm">
                              <p>{appointment.date}</p>
                              <p className="text-muted-foreground">{appointment.time}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Contact Messages</h2>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid gap-4">
              {contacts.map((contact) => (
                <Card key={contact.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground">{contact.email}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="font-medium text-sm mb-2">Subject: {contact.subject}</p>
                      <p className="text-sm text-muted-foreground">{contact.message}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Reply</Button>
                      <Button size="sm" variant="outline">
                        Mark as Read
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">News Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Article
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center py-8">
                  News management interface would be implemented here.
                  <br />
                  This would connect to Laravel Orchid admin panel for content management.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">System Settings</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center py-8">
                  System settings and configuration options would be implemented here.
                  <br />
                  This would include Laravel backend configuration and admin user management.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

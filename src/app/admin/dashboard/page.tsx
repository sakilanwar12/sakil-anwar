import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, FolderGit2, BookOpen, Mail } from "lucide-react";
import {
  skillsService,
  projectsService,
  blogService,
  contactService,
} from "@/lib/db-service";

export default async function DashboardPage() {
  // Fetch counts for all sections
  const [skillsCount, projectsCount, blogCount, messagesCount] =
    await Promise.all([
      skillsService.count(),
      projectsService.count(),
      blogService.count(),
      contactService.count({ read: false }),
    ]);

  const stats = [
    {
      title: "Total Skills",
      value: skillsCount,
      icon: Code,
      href: "/admin/dashboard/skills",
    },
    {
      title: "Total Projects",
      value: projectsCount,
      icon: FolderGit2,
      href: "/admin/dashboard/projects",
    },
    {
      title: "Blog Posts",
      value: blogCount,
      icon: BookOpen,
      href: "/admin/dashboard/blog",
    },
    {
      title: "Unread Messages",
      value: messagesCount,
      icon: Mail,
      href: "/admin/dashboard/contact",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your portfolio admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="transition-shadow hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/admin/dashboard/home"
              className="hover:bg-accent flex items-center gap-3 rounded-lg border p-4 transition-colors"
            >
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <Code className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Edit Home Section</h3>
                <p className="text-muted-foreground text-sm">
                  Update hero and about
                </p>
              </div>
            </a>

            <a
              href="/admin/dashboard/skills"
              className="hover:bg-accent flex items-center gap-3 rounded-lg border p-4 transition-colors"
            >
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <Code className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Manage Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Add or edit skills
                </p>
              </div>
            </a>

            <a
              href="/admin/dashboard/projects"
              className="hover:bg-accent flex items-center gap-3 rounded-lg border p-4 transition-colors"
            >
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <FolderGit2 className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Manage Projects</h3>
                <p className="text-muted-foreground text-sm">
                  Add or edit projects
                </p>
              </div>
            </a>

            <a
              href="/admin/dashboard/blog"
              className="hover:bg-accent flex items-center gap-3 rounded-lg border p-4 transition-colors"
            >
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <BookOpen className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Manage Blog</h3>
                <p className="text-muted-foreground text-sm">
                  Create or edit posts
                </p>
              </div>
            </a>

            <a
              href="/admin/dashboard/contact"
              className="hover:bg-accent flex items-center gap-3 rounded-lg border p-4 transition-colors"
            >
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <Mail className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">View Messages</h3>
                <p className="text-muted-foreground text-sm">
                  {messagesCount} unread
                </p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

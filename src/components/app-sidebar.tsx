'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  CalendarDays,
  ClipboardPlus,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PawPrint,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/molecules/sidebar/nav-main';
import { NavProjects } from '@/components/molecules/sidebar/nav-projects';
import { NavUser } from '@/components/molecules/sidebar/nav-user';
import { TeamSwitcher } from '@/components/molecules/sidebar/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavSingle } from './molecules/sidebar/nav-single';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'InfoVet',
      logo: GalleryVerticalEnd,
      plan: 'Prontuário Veterinário',
    },
  ],

  navSingle: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Pacientes',
      url: '/pacientes',
      icon: PawPrint,
    },
    {
      title: 'Agenda',
      url: '/agenda',
      icon: CalendarDays,
    },
    {
      title: 'Novo Atendimento',
      url: '/atendimentos/novo',
      icon: ClipboardPlus,
    },
  ],
  // navMain: [
  //   {
  //     title: 'Playground',
  //     url: '#',
  //     icon: SquareTerminal,
  //     isActive: true,
  //     items: [
  //       {
  //         title: 'History',
  //         url: '#',
  //       },
  //       {
  //         title: 'Starred',
  //         url: '#',
  //       },
  //       {
  //         title: 'Settings',
  //         url: '#',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Models',
  //     url: '#',
  //     icon: Bot,
  //     items: [
  //       {
  //         title: 'Genesis',
  //         url: '#',
  //       },
  //       {
  //         title: 'Explorer',
  //         url: '#',
  //       },
  //       {
  //         title: 'Quantum',
  //         url: '#',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Documentation',
  //     url: '#',
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: 'Introduction',
  //         url: '#',
  //       },
  //       {
  //         title: 'Get Started',
  //         url: '#',
  //       },
  //       {
  //         title: 'Tutorials',
  //         url: '#',
  //       },
  //       {
  //         title: 'Changelog',
  //         url: '#',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Settings',
  //     url: '#',
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: 'General',
  //         url: '#',
  //       },
  //       {
  //         title: 'Team',
  //         url: '#',
  //       },
  //       {
  //         title: 'Billing',
  //         url: '#',
  //       },
  //       {
  //         title: 'Limits',
  //         url: '#',
  //       },
  //     ],
  //   },
  // ],
  // projects: [
  //   {
  //     name: 'Design Engineering',
  //     url: '#',
  //     icon: Frame,
  //   },
  //   {
  //     name: 'Sales & Marketing',
  //     url: '#',
  //     icon: PieChart,
  //   },
  //   {
  //     name: 'Travel',
  //     url: '#',
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavSingle items={data.navSingle} label='Geral' />
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}

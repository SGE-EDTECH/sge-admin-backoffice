"use client";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";
import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboards",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Cadastros",
    path: "/admin/cadastro",
    icon: BadgeDollarSign,
  },
  {
    name: "Pedagógico",
    path: "/admin/pedagogico",
    icon: WalletCards,
  },
  {
    name: "Estoque",
    path: "/admin/estoque",
    icon: CircleUserRound,
  },
  {
    name: "Financeiro",
    path: "/admin/financeiro",
    icon: CircleUserRound,
  },
  {
    name: "Relatórios",
    path: "/admin/metas",
    icon: CircleUserRound,
  },
  {
    name: "Sucesso Estudante",
    path: "/admin/sucessoEstudante",
    icon: CircleUserRound,
  },
  {
    name: "Pesquisa de Satisfação",
    path: "/admin/pesquisa",
    icon: CircleUserRound,
  },
  {
    name: "Ferramentas",
    path: "/admin/ferramentas",
    icon: Settings,
    items: [
      {
        name: "teste",
        path: "/admin/ferramentas",
      },
    ],
  },
  {
    name: "Configurações Sistema",
    path: "/admin/configuracao",
    icon: CircleUserRound,
  },
];

const SidebarF = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <img style={{ height: '80px', width: '192.84px' }} src="/logo.png" alt="Logo" />
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarF;

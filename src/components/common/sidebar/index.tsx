"use client";
import {
  LucideIcon,
  Settings,
  SquareGanttChart,
  UserRoundSearch,
  BarChart4,
  CircleDollarSign,
} from "lucide-react";
import SidebarItem from "./item";
import { TbReportAnalytics, TbTargetArrow, TbUsersGroup } from "react-icons/tb";
import { IconType } from "react-icons";
import { IoMdFolderOpen } from "react-icons/io";
import { PiChartBarLight, PiUserList } from "react-icons/pi";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon | IconType;
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
    icon: PiChartBarLight,
  },
  {
    name: "Cadastros",
    path: "/admin/cadastro",
    icon: PiUserList,
  },
  {
    name: "Pedagógico",
    path: "/admin/pedagogico",
    icon: TbUsersGroup,
  },
  {
    name: "Estoque",
    path: "/admin/estoque",
    icon: IoMdFolderOpen,
  },
  {
    name: "Financeiro",
    path: "/admin/financeiro",
    icon: CircleDollarSign,
  },
  {
    name: "Relatórios",
    path: "/admin/relatorios",
    icon: TbReportAnalytics,
  },
  {
    name: "Metas",
    path: "/admin/metas",
    icon: TbTargetArrow,
  },
  {
    name: "Sucesso Estudante",
    path: "/admin/sucessoEstudante",
    icon: BarChart4,
  },
  {
    name: "Pesquisa de Satisfação",
    path: "/admin/pesquisa",
    icon: UserRoundSearch,
  },
  {
    name: "Ferramentas",
    path: "/admin/ferramentas",
    icon: SquareGanttChart,
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
    icon: Settings,
  },
];

const SidebarF = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <img style={{ height: '80px', width: '192.84px' }} src="/logo.png" alt="Logo" />
        <div>
        <span>
          <span className="text-xs"><b>Regional</b></span>
        </span>
          <select className="w-full border border-gray-300 rounded-md p-2 text-xs mb-0">
            <option defaultValue={"Todas"}>Todas</option>
            <option>Master 1</option>
            <option>Master 2</option>
            <option>Grupo Econômico 1</option>
            <option>Personalizar...</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarF;

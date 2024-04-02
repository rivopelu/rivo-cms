import { Card } from '@nextui-org/react';
import { STYLE_VARIABLE } from '../constants/syle-variable';
import { navbarDataMenu } from '../constants/nav-list';
import SidebarItems from './SidebarItems';

export default function Sidebar() {
  return (
    <nav className="h-full">
      <Card
        className="h-screen fixed left-0 rounded-none p-6 shadow-md border-r border-slate-50/10 "
        isBlurred
        style={{ width: STYLE_VARIABLE.SIZE.SIDEBAR_WIDTH }}
      >
        <h3 className="uppercase">Dashboard</h3>
        <div className="mt-4 w-full grid">
          {navbarDataMenu.map((Item, i) => (
            <SidebarItems key={i} data={Item} />
          ))}
        </div>
      </Card>
      <div style={{ width: STYLE_VARIABLE.SIZE.SIDEBAR_WIDTH }}></div>
    </nav>
  );
}

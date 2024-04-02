import { Card } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { INavbarData } from '../constants/nav-list';

export default function SidebarItems(props: IProps) {
  const pathName = useLocation().pathname;
  function checkRoutesActive() {
    return pathName.split('/')[1] === props.data.path.split('/')[1];
  }
  function checkRoutesActiveChildren(path: string) {
    if (pathName.split('/')[2]) {
      return pathName.split('/')[2] === path.split('/')[2];
    }
  }

  const Icons = props.data.icons;
  if (props.data.children) {
    return (
      <div>
        <Link to={props.data.path}>
          <Card isPressable className={`w-full shadow-none ${checkRoutesActive() ? 'text-white' : 'text-default-500'} duration-300`}>
            <div className="flex gap-4 items-center px-4 py-3">
              <Icons />
              <div>{props.data.title}</div>
            </div>
          </Card>
        </Link>

        <div className={` relative`}>
          {props.data.children.map((e, i) => (
            <Link to={e.path} key={i}>
              <Card
                isPressable
                className={`w-full shadow-none ml-4 ${checkRoutesActiveChildren(e.path) ? 'text-white' : 'text-default-500'} duration-300`}
              >
                <div className="flex gap-4 items-center px-4 py-3">
                  <div>•</div>
                  <div>{e.title}</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return (
    <Link to={props.data.path}>
      <Card isPressable className={`w-full shadow-none ${checkRoutesActive() ? 'text-white' : 'text-default-500'} duration-300`}>
        <div className="flex gap-4 items-center px-4 py-3">
          <Icons />
          <div>{props.data.title}</div>
        </div>
      </Card>
    </Link>
  );
}

interface IProps {
  data: INavbarData;
}

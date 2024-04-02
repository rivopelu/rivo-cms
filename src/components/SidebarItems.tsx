import { Card } from '@nextui-org/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { INavbarData } from '../constants/nav-list';

export default function SidebarItems(props: IProps) {
  const pathName = useLocation().pathname;
  const navigate = useNavigate();
  function onclickNavigate(path: string) {
    navigate(path);
  }
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
        <Card
          onClick={() => onclickNavigate(props.data.path)}
          isPressable
          className={`w-full bg-inherit shadow-none ${checkRoutesActive() ? 'text-white' : 'text-default-500'} duration-300`}
        >
          <div className="flex gap-4 items-center px-4 py-3">
            <Icons />
            <div>{props.data.title}</div>
          </div>
        </Card>

        <div className={` relative`}>
          {props.data.children.map((e, i) => (
            <Card
              key={i}
              onClick={() => onclickNavigate(e?.path)}
              isPressable
              className={`w-full bg-inherit shadow-none ml-4 ${checkRoutesActiveChildren(e.path) ? 'text-white' : 'text-default-500'} duration-300`}
            >
              <div className="flex gap-4 items-center px-4 py-3">
                <div>•</div>
                <div>{e.title}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  return (
    <Card
      onClick={() => onclickNavigate(props.data.path)}
      isPressable
      className={`w-full shadow-none bg-inherit ${checkRoutesActive() ? 'text-white' : 'text-default-500'} duration-300`}
    >
      <div className="flex gap-4 items-center px-4 py-3">
        <Icons />
        <div>{props.data.title}</div>
      </div>
    </Card>
  );
}

interface IProps {
  data: INavbarData;
}

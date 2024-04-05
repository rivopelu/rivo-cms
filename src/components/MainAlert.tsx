import { Card } from '@nextui-org/react';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineError } from 'react-icons/md';
import { TiInfoLarge, TiWarning } from 'react-icons/ti';
function MainAlert(props: IProps) {
  switch (props.type) {
    case 'info':
      return (
        <Card className="p-4 mb-4 bg-primary-500/10 border border-primary-200 text-primary-600 font-semibold flex ">
          <div className="flex gap-3">
            <TiInfoLarge className="text-2xl" />
            <div>{props.text}</div>
          </div>
        </Card>
      );
    case 'warning':
      return (
        <Card className="p-4 mb-4 bg-yellow-500/10 border border-yellow-500 text-yellow-600 font-semibold flex ">
          <div className="flex gap-3">
            <TiWarning className="text-2xl" />
            <div>{props.text}</div>
          </div>
        </Card>
      );
    case 'error':
      return (
        <Card className="p-4 mb-4 bg-red-500/10 border border-red-400 text-red-400 font-semibold flex ">
          <div className="flex gap-3">
            <MdOutlineError className="text-2xl" />
            <div>{props.text}</div>
          </div>
        </Card>
      );
    case 'success':
      return (
        <Card className="p-4 mb-4 bg-green-500/10 border border-green-400 text-green-400 font-semibold flex ">
          <div className="flex gap-3">
            <FaCheck className="text-xl" />
            <div>{props.text}</div>
          </div>
        </Card>
      );
    default:
      return (
        <Card className="p-4 mb-4 bg-slate-100/10 border border-slate-500 text-slate-200 font-semibold flex ">
          <div className="flex gap-3">
            <TiInfoLarge className="text-2xl" />
            <div>{props.text}</div>
          </div>
        </Card>
      );
  }
}

export default MainAlert;

interface IProps {
  text: string;
  type?: string;
}

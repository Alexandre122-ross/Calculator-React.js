import { useState } from 'react';
import KeyboardItem from './components/keyboardItem';

export default function App() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState('');

  // Calculator Actions
  const handlerInputNum = (numData) => {
    num > 0
      ? setNum(parseInt(num + numData))
      : setNum(parseInt(numData));
  };
  const handlerOperator = (numData) => {
    if (numData == '+') {
      setOperator('+');
    } else if (numData == '-') {
      setOperator('-');
    } else if (numData == 'X') {
      setOperator('*');
    } else if (numData == '/') {
      setOperator('/');
    };
    setOldNum(num);
    setNum(0);
  };
  const handlerResult = () => {
    if (operator == '+') {
      setNum(oldNum + num);
    } else if (operator == '-') {
      setNum(oldNum - num);
    } else if (operator == '*') {
      setNum(oldNum * num);
    } else if (operator == '/') {
      setNum(oldNum / num);
    }
  };
  const handlerChangeSignal = () => setNum(num * -1);
  const handlerPercentage = () => setNum(num / 100);
  const handlerResetCalc = () => {
    setNum(0);
    setOldNum(0);
    setOperator('');
  };

  return (
    <div className='bg-gray-800 flex justify-center items-center h-screen'>
      <div className='bg-slate-700 text-white rounded overflow-hidden p-2 h-[612px] w-2/4 max-w-lg'>
        <div className='flex justify-end items-center px-3 h-28'>
          <p className='text-5xl'> {num} </p>
        </div>
        <div className='grid grid-cols-4 grid-rows-5 gap-2' style={{ height: 'calc(100% - 112px)' }}>
          <KeyboardItem
            value='C'
            actionColor={'bg-slate-400'}
            actionKey={handlerResetCalc}
          />
          <KeyboardItem
            value='+/-'
            actionColor={'bg-slate-400'}
            actionKey={handlerChangeSignal}
          />
          <KeyboardItem
            value='%'
            actionColor={'bg-slate-400'}
            actionKey={handlerPercentage}
          />
          <KeyboardItem
            value='/'
            actionColor={'bg-orange-500'}
            actionKey={handlerOperator}
          />
          <KeyboardItem
            value='7'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='8'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='9'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='X'
            actionColor={'bg-orange-500'}
            actionKey={handlerOperator}
          />
          <KeyboardItem
            value='4'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='5'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='6'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='-'
            actionColor={'bg-orange-500'}
            actionKey={handlerOperator}
          />
          <KeyboardItem
            value='1'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='2'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='3'
            actionColor={'bg-slate-500'}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value='+'
            actionColor={'bg-orange-500'}
            actionKey={handlerOperator}
          />
          <KeyboardItem
            value='0'
            actionColor={'bg-slate-500'}
            twoCols={true}
            actionKey={handlerInputNum}
          />
          <KeyboardItem
            value=','
            actionColor={'bg-slate-500'}
            actionKey={() => alert('OK')}
          />
          <KeyboardItem
            value='='
            actionColor={'bg-orange-500'}
            actionKey={handlerResult}
          />
        </div>
      </div>
    </div>
  )
}
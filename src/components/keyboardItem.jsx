
export default function KeyboardItem({ value, actionColor, twoCols, actionKey }) {
  const styleKey = `
    ${actionColor ? actionColor : 'bg-slate-600'} 
    cursor-pointer 
    text-xl 
    font-medium 
    flex 
    justify-center 
    ${twoCols && 'col-span-2'} 
    items-center rounded
  `;

  return (
    <div className={styleKey} onClick={() => actionKey(value)}>
      {value}
    </div>
  );
}
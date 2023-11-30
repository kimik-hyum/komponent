import useCustomState from "../../hook/useCustomState";
import tabConnect from "../../util/tabConnect";
import { getTabListProps } from "../../util/tabAccessibility";

// 컴포넌트 예시
type Item = {
  value: string;
  label: string;
};

export default function TabsAndToggleButton({ data }: { data: Item[] }) {
  const [value, send] = useCustomState<string>("tab1");
  const api = tabConnect(value, send, {
    getTabListProps,
  });
    const customHandlers = {
    onClick: (event: React.SyntheticEvent<HTMLElement>) => console.log("Clicked!"),
  };


  return (
    <div>
      <div {...api.getTabListProps}>
        {data.map((item) => {
          const isDisabled = item.value === "tab3";
          return (<button
            id={`tab-${item.value}`}
            disabled={isDisabled}
            {...api.createEventHandler(["onClick"], item.value, { customHandlers })}
            {...api.getTabTriggerProps(item.value)}
            key={item.value}
          >
            {item.label}
          </button>
          )
        })}
      </div>
      {data.map((item) => (
        <div {...api.getContentProps(item.value)} key={item.value}>
          {item.label}
        </div>
      ))}
    </div>
  );
}

import useCustomState from "../../hook/useCustomState";

// 컴포넌트 예시
type Item = {
  value: string;
  label: string;
};

export default function TabsAndToggleButton({ data }: { data: Item[] }) {
  const { value, createEventHandler, getContentProps } =
    useCustomState<string>("");

  return (
    <div>
      {data.map((item) => (
        <button
          {...createEventHandler("onClick", item.value)}
          aria-selected={value === item.value}
          key={item.value}
        >
          {item.label}
        </button>
      ))}
      {data.map((item) => (
        <div {...getContentProps(item.value)} key={item.value}>
          {item.label}
        </div>
      ))}
    </div>
  );
}

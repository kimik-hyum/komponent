import useCustomState from "../hook/useCustomState";
import connect from "../util/connect";

// 컴포넌트 예시
type Item = {
  title: string;
  content: string;
  value: string;
};

export default function Accordion({ data }: { data: Item[] }) {
  const [value, send] = useCustomState<string[]>([]);
  const api = connect(value, send, true);
    const customHandlers = {
    onClick: (event: React.SyntheticEvent<HTMLElement>) => console.log("Clicked!"),
  };
  console.log(value)

  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <div key={item.value}>
              <button
                id={`accordion-${item.value}`}
                {...api.createEventHandler(["onClick"], item.value, customHandlers)}
              >
                {item.title}
              </button>
              <div {...api.getContentProps(item.value)} >
                {item.content}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

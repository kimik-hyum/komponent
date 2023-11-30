type EventType = keyof React.DOMAttributes<HTMLElement>;
type CreateEventHandlerOptions = {
  customHandlers?: Partial<Record<EventType, (event: React.SyntheticEvent<HTMLElement>) => void>>;
  delay?: number;
};


function connect<T>(value: T, send: (value: T) => void, multiple: boolean = false) {
  const timeouts: Record<string, NodeJS.Timeout> = {};
  const createEventHandler = (
    eventTypes: EventType | EventType[],
    itemValue: string | boolean,
    options?: CreateEventHandlerOptions
  ) => {
    const { customHandlers, delay } = options || {};
    const handlers: Record<string, (event: React.SyntheticEvent<HTMLElement>) => void> = {};

    const eventList = Array.isArray(eventTypes) ? eventTypes : [eventTypes];
    const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
       // 이벤트 식별자 생성

      const updateValue = () => {
        if (multiple && typeof itemValue === 'string') {
        let newValue: string[];
        if (Array.isArray(value)) {
          if (value.includes(itemValue)) {
            newValue = value.filter(v => v !== itemValue);
          } else {
            newValue = [...value, itemValue];
          }
        } else {
          newValue = [itemValue];
        }
        send(newValue as T);
      } else {
        send(itemValue as T);
      }
    }
      if (!!delay) {
        const eventId = `${event.type}-${String(itemValue)}`;
        clearTimeout(timeouts[eventId]); 
        timeouts[eventId] = setTimeout(updateValue, delay);
      } else {
        updateValue();
      }
      customHandlers?.onClick?.(event);
    };

    eventList.forEach(eventType => {
      handlers[eventType] = handleClick;
    });

    return handlers;
  };
const getContentProps = (itemValue: string) => {
    let isHidden: boolean;

    if (multiple && Array.isArray(value)) {
      isHidden = !value.includes(itemValue);
    } else {
      isHidden = value !== itemValue;
    }

    return {
      hidden: isHidden,
    };
  };

  return { createEventHandler, getContentProps };
}

export default connect;

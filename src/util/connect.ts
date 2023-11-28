type EventType = keyof React.DOMAttributes<HTMLElement>;

function connect<T>(value: T, send: (value: T) => void, multiple: boolean = false) {
  const createEventHandler = (
    eventTypes: EventType | EventType[],
    itemValue: string,
    customHandlers?: Partial<Record<EventType, (event: React.SyntheticEvent<HTMLElement>) => void>>
  ) => {
    const handlers: Record<string, (event: React.SyntheticEvent<HTMLElement>) => void> = {};

    const eventList = Array.isArray(eventTypes) ? eventTypes : [eventTypes];
    const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
      if (multiple) {
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

type EventType = keyof React.DOMAttributes<HTMLElement>;
type FormEventType = "onChange" | "onBlur" | "onFocus";
type FormEventHandler<E extends HTMLElement, T> = (
  event: React.ChangeEvent<E> | React.FocusEvent<E>
) => T;
type CreateEventHandlerOptions = {
  customHandlers?: Partial<
    Record<EventType, (event: React.SyntheticEvent<HTMLElement>) => void>
  >;
  delay?: number;
};

function connect<T>(
  value: T,
  send: (value: T) => void,
  multiple: boolean = false
) {
  const timeouts: Record<string, NodeJS.Timeout> = {};
  const createEventHandler = (
    eventTypes: EventType | EventType[],
    itemValue: string | boolean,
    options?: CreateEventHandlerOptions
  ) => {
    const { customHandlers, delay } = options || {};
    const handlers: Record<
      string,
      (event: React.SyntheticEvent<HTMLElement>) => void
    > = {};

    const eventList = Array.isArray(eventTypes) ? eventTypes : [eventTypes];
    const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
      const updateValue = () => {
        if (multiple && typeof itemValue === "string") {
          let newValue: string[];
          if (Array.isArray(value)) {
            if (value.includes(itemValue)) {
              newValue = value.filter((v) => v !== itemValue);
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
      };
      if (!!delay) {
        const eventId = `${event.type}-${String(itemValue)}`;
        clearTimeout(timeouts[eventId]);
        timeouts[eventId] = setTimeout(updateValue, delay);
      } else {
        updateValue();
      }
      customHandlers?.onClick?.(event);
    };

    eventList.forEach((eventType) => {
      handlers[eventType] = handleClick;
    });

    return handlers;
  };

  const createFormEventHandler = <E extends HTMLElement>(
    eventTypes: FormEventType | FormEventType[],
    updateValueFn: FormEventHandler<E, T>
  ) => {
    const handlers: Record<string, (event: React.SyntheticEvent<E>) => void> =
      {};

    const eventList = Array.isArray(eventTypes) ? eventTypes : [eventTypes];
    eventList.forEach((eventType) => {
      handlers[eventType] = (event: React.SyntheticEvent<E>) => {
        const newValue = updateValueFn(
          event as unknown as React.ChangeEvent<E> | React.FocusEvent<E>
        );
        send(newValue); // newValue는 T 타입이어야 함
      };
    });

    return handlers;
  };

  const getContentProps = (itemValue: string | boolean) => {
    let isHidden: boolean;

    if (typeof itemValue === "boolean") {
      isHidden = !itemValue;
    } else {
      if (multiple && Array.isArray(value)) {
        isHidden = !value.includes(itemValue);
      } else {
        isHidden = value !== itemValue;
      }
    }

    return {
      hidden: isHidden,
    };
  };

  return { createEventHandler, getContentProps, createFormEventHandler };
}

export default connect;

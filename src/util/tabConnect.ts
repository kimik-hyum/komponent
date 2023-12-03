import connect from "./connect";

type TabConnectAPI = ReturnType<typeof connect<string>> & {
  getTabTriggerProps: (itemValue: string) => Record<string, any>;
  getTabListProps?: Record<string, any>;
};

type TabConnectOptions = {
  getTabListProps?: (
    value: string,
    send: (value: string) => void
  ) => Record<string, any>;
};

function tabConnect(
  value: string,
  send: (value: string) => void,
  options?: TabConnectOptions
): TabConnectAPI {
  const baseProps = connect<string>(value, send);

  const api: TabConnectAPI = {
    ...baseProps,
    getTabTriggerProps: (itemValue: string) => {
      const isSelected = value === itemValue;
      return {
        role: "tab",
        "aria-selected": isSelected,
        "data-value": itemValue,
        "aria-controls": `tab-content-${itemValue}`,
        tabIndex: isSelected ? 0 : -1,
      };
    },
    getTabListProps: options?.getTabListProps
      ? options.getTabListProps(value, send)
      : {},
  };

  return api;
}

export default tabConnect;

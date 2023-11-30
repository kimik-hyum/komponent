// tabConnect.ts
import connect from './connect';

// TabConnect API 타입 정의
type TabConnectAPI = ReturnType<typeof connect> & {
  getTabTriggerProps: (itemValue: string) => Record<string, any>;
  getTabListProps?: Record<string, any>;
};

type TabConnectOptions = {
  getTabListProps?: (value: string, send: (value: string) => void) => Record<string, any>;
};

function tabConnect(value: string, send: (value: string) => void, options?: TabConnectOptions): TabConnectAPI {
  const baseProps = connect(value, send);

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
    getTabListProps: options?.getTabListProps ? options.getTabListProps(value, send) : {}
  };

  return api;
}

export default tabConnect;
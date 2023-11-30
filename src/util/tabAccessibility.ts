export const getTabListProps = (value: string, send: (value: string) => void) => {
  return {
    role: "tablist",
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
      const tabList = event.currentTarget;
      const focusedTab = document.activeElement as HTMLElement;
      const tabs = Array.from(tabList.querySelectorAll('[role="tab"]:not([disabled])'));

      const currentIndex = tabs.indexOf(focusedTab);
      let newIndex = -1;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          newIndex = (currentIndex + 1) % tabs.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        default:
          return;
      }
      const newValue = tabs[newIndex]?.getAttribute('data-value');
      if (newValue) {
        send(newValue);
      }
      (tabs[newIndex] as HTMLElement)?.focus();
        event.preventDefault();
    },
  };
};
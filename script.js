const tabs = Array.from(document.querySelectorAll('[role="tab"]'));

function selectTab(tab) {
  if (!tab) return;
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    const current = tabs.indexOf(tab);
    let next = null;
    if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== null) {
      event.preventDefault();
      tabs[next].focus();
      selectTab(tabs[next]);
    }
  });
});

document.querySelectorAll('[data-select-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.selectTab);
    selectTab(target);
    target?.focus();
  });
});

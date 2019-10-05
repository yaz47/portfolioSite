// Avoid `console` errors in browsers that lack a console.

(function plugins() {
  const noop = () => {};
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  window.console = window.console || {};
  const console = window.console;

  methods.forEach((method) => {
    if (!console[method]) {
      console[method] = noop;
    }
  });
}());

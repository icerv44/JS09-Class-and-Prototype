function f() {
  alert("Hello!");
}

f.defer = function (val) {
  setTimeout(() => {
    f();
  }, +val);
};
f.defer(1000); // shows "Hello!" after 1 second

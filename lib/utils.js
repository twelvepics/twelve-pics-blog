exports.lockBgScroll = function () {
  if (process.client) {
    const scrollY = document.documentElement.style.getPropertyValue(
      "--scroll-y"
    );
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
  }
};

exports.unlockBgScroll = function () {
  if (process.client) {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
};

if (process.client) {
  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });
}

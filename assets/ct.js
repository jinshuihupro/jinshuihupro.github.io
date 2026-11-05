// Carries ?ct=<source> from social links through to App Store campaign links.
// Kept for the tab's session so it survives home -> product page -> guide.
(function () {
  var ct = new URLSearchParams(location.search).get('ct');
  if (!/^\w{1,40}$/.test(ct)) ct = null;
  try {
    if (ct) sessionStorage.setItem('ct', ct);
    else ct = sessionStorage.getItem('ct');
  } catch (e) {}
  if (!ct) return;
  document.querySelectorAll('a[href^="https://apps.apple.com/app/apple-store/"]').forEach(function (a) {
    var url = new URL(a.href);
    url.searchParams.set('ct', ct);
    a.href = url;
  });
})();

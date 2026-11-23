(function () {
  var WA = document.body.getAttribute('data-wa') || '';

  // Order builder: turns the form into one WhatsApp message.
  var form = document.getElementById('qb');
  if (form) {
    var L = form.dataset;
    var type = document.getElementById('qb-type');
    var size = document.getElementById('qb-size');
    var qty = document.getElementById('qb-qty');
    var custom = document.getElementById('qb-custom');
    var notes = document.getElementById('qb-notes');
    var out = document.getElementById('qb-msg');
    var send = document.getElementById('qb-send');
    var update = function () {
      var lines = [L.hi, L.type + ': ' + type.value];
      if (size.value.trim()) lines.push(L.size + ': ' + size.value.trim());
      if (qty.value.trim()) lines.push(L.qty + ': ' + qty.value.trim());
      if (custom.checked) lines.push(L.custom);
      if (notes.value.trim()) lines.push(L.notes + ': ' + notes.value.trim());
      var msg = lines.join('\n');
      out.textContent = msg;
      send.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
    };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    update();
  }

  // Language switch. On the live site this is a normal link.
  // Inside an embedded preview, load the other page in place instead of navigating the frame.
  var framed = false;
  try { framed = window.self !== window.top; } catch (e) { framed = true; }
  if (framed) {
    document.querySelectorAll('a[data-lang-switch]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var href = a.getAttribute('href');
        fetch(href).then(function (r) {
          if (!r.ok) throw new Error('not found');
          return r.text();
        }).then(function (html) {
          document.open();
          document.write(html);
          document.close();
          window.scrollTo(0, 0);
        }).catch(function () { window.location.href = href; });
      });
    });
  }
})();

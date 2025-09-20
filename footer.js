<!-- footer.js -->
<script>
(async () => {
  const target = document.querySelector('footer[data-include]');
  if (!target) return;
  try {
    const res = await fetch('/footer.html', { cache: 'no-store' });
    target.outerHTML = await res.text();
  } catch (e) {
    console.error('No pude cargar el footer:', e);
  }
})();
</script>

<!-- footer.js -->
<script>
(async () => {
  const placeholder = document.querySelector('footer[data-include]');
  if (!placeholder) return;
  try {
    const res = await fetch('/footer.html', { cache: 'no-store' });
    placeholder.outerHTML = await res.text();
  } catch (e) {
    console.error('No pude cargar el footer:', e);
  }
})();
</script>


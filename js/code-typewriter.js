const codeEl = document.querySelector("[data-typewriter]");

if (codeEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const walker = document.createTreeWalker(codeEl, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) {
    nodes.push({ node, full: node.textContent });
    node.textContent = "";
  }

  const cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";
  cursor.textContent = "▍";
  codeEl.appendChild(cursor);

  function typeNext(nodeIndex, charIndex) {
    if (nodeIndex >= nodes.length) return;

    const { node, full } = nodes[nodeIndex];

    if (charIndex <= full.length) {
      node.textContent = full.slice(0, charIndex);
      node.parentNode.insertBefore(cursor, node.nextSibling);
      const lastChar = full[charIndex - 1];
      const delay = lastChar === "\n" ? 140 : 12 + Math.random() * 22;
      setTimeout(() => typeNext(nodeIndex, charIndex + 1), delay);
    } else {
      typeNext(nodeIndex + 1, 1);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        setTimeout(() => typeNext(0, 1), 450);
      }
    },
    { threshold: 0.3 }
  );
  observer.observe(codeEl);
}

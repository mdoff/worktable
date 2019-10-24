export default function(...args) {
  console.log(...args);
  args.forEach(arg => {
    const div = document.createElement("div");
    const content = typeof arg === "object" ? JSON.stringify(arg) : arg;
    div.style.marginBottom = "8px";
    div.style.padding = "4px";
    div.style.backgroundColor = "#ffffe0";
    div.style.border = "1px solid #666659";
    div.innerHTML = `${new Date().getTime()}: ${content}`;
    const root = document.getElementById("app");
    root.appendChild(div);
  });
}

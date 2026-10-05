export default defineNuxtPlugin(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.userway.org/widget.js";
    script.async = true;

    // wajib: UserWay account ID
    script.setAttribute("data-account", "9qViJRaeq4");

    document.head.appendChild(script);
});

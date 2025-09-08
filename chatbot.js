async function sendMessage() {
    const input = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");

    if (!input.trim()) return;

    chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

    const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

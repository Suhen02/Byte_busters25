document.getElementById("dataForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch("/process", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        document.getElementById("result").innerHTML = `
            <h2>Processed Data:</h2>
            <p>Name: ${data.pregency}</p>
            <p>Email: ${data.glucose}</p>
            <p>Age + 5: ${data.blood}</p>
            <p>skin thickness:${data.skin}</p>
        `;
    } catch (error) {
        console.error("Error:", error);
    }
});
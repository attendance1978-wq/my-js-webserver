fetch("/api/hello")
    .then(res => res.json())
    .then(data => {
        document.getElementById("apiText").innerText = data.message;
    });

document.getElementById("generateBtn").addEventListener("click", function () {
    const container = document.getElementById("tableContainer");
    container.innerHTML = "";
    const message = document.getElementById("message");
    message.textContent = ""; 

    let n = parseInt(document.getElementById("numberInput").value);

    if (isNaN(n) || n < 5 || n > 20) {
        const defaultValue = 10;
        message.textContent = `Invalid input. Using default n=${defaultValue}.`;
        n = defaultValue;
    }

    const numbers = Array.from({ length: n }, () => Math.floor(Math.random() * 99) + 1);

    const table = document.createElement("table");

    // table header row
    const headerRow = document.createElement("tr");

    const emptyCorner = document.createElement("th");
    headerRow.appendChild(emptyCorner);

    numbers.forEach(num => {
        const th = document.createElement("th");
        th.textContent = num;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    // table body
    numbers.forEach(rowNum => {
        const row = document.createElement("tr");

        // row header
        const th = document.createElement("th");
        th.textContent = rowNum;
        row.appendChild(th);

        // data cells
        numbers.forEach(colNum => {
            const td = document.createElement("td");
            const result = rowNum * colNum;

            td.textContent = result;
            td.className = result % 2 === 0 ? "even" : "odd";

            row.appendChild(td);
        });

        table.appendChild(row);
    });

    container.appendChild(table);
});

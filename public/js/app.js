document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('keyValueForm');
    const keyInput = document.getElementById('keyInput');
    const valueInput = document.getElementById('valueInput');
    const output = document.getElementById('output');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const key = keyInput.value;
        const value = valueInput.value;

        await storeKeyValue(key, value);
        keyInput.value = '';
        valueInput.value = '';
        await retrieveAllKeyValues();
    });

    async function storeKeyValue(key, value) {
        await fetch('/api/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key, value }),
        });
    }

    async function retrieveAllKeyValues() {
        const response = await fetch('/api/retrieveAll');
        const data = await response.json();
        output.innerHTML = '';

        for (const [key, value] of Object.entries(data)) {
            const div = document.createElement('div');
            div.textContent = `${key}: ${value}`;
            output.appendChild(div);
        }
    }

    retrieveAllKeyValues();
});
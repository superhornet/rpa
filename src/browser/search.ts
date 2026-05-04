(() => {
    const queryTextBox = document.getElementById('search');
    const queryText = document.getElementById('search')?.getAttribute('value');

    for (let index = 1; index <= 10; index++) {

        const results = document.getElementById('results');

        const result = document.createElement('div');
        result.className = 'result';
        result.innerHTML = `<span class='resultIndex'>${index}</span><span class='resultTitle'><strong>${queryText}</strong></span><div>${queryText}</div>`;
        results?.appendChild(result);

    }

    queryTextBox?.addEventListener('change', queryTextChangeHandler);
    function queryTextChangeHandler(ev: Event) {
        try {
            if (ev.target) {
                const el = ev.target as HTMLInputElement;
                const results = document.getElementById('results');
                
                while (results?.firstChild) {
                    results.firstChild.remove();
                }
                for (let index = 1; index <= 10; index++) {
                    const result = document.createElement('div');
                    result.className = 'result';
                    result.innerHTML = `<span class='resultIndex'>${index}</span><span class='resultTitle'><strong>${el.value}</strong></span><div>${el.value}</div>`;
                    results?.appendChild(result);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    setInterval(() => {
        globalThis.history.forward();
    }, 5000);
})()


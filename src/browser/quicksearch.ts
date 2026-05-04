(() => {
    const queryTextBox = document.getElementById('quicksearch') as HTMLInputElement;
    const querySubmit = document.querySelector('button[type=submit]') as HTMLButtonElement;
    queryTextBox?.addEventListener('input', textInputHandler);
    querySubmit?.addEventListener('click', querySubmitHandler);
    function textInputHandler(this: HTMLInputElement) {
            querySubmit.disabled = this.value.trim() === '';
    }

    function querySubmitHandler(this: HTMLButtonElement) {
        try {
            if (queryTextBox) {
                const query = queryTextBox.value;
                //window.open(`https://www.bing.com/?q=${encodeURIComponent(el.value)}`, 'searchTab');
                //console.log(`https://www.bing.com/?q=${encodeURIComponent(el.value)}`, 'searchTab');
                const resultElements = document.querySelectorAll('.result .resultTitle, .result div');
                for (const el of resultElements) {
                    while (el?.firstChild) {
                        el.firstChild.remove();
                    }
                }
                for (const element of resultElements) {
                    const val = document.createTextNode(query);
                    element.appendChild(val);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
})()



import noUiSlider from 'nouislider';

function calc(value) {
    const val = Number(value[0].replace(/\./g, ''));
    const calcRes2 = ((val / 100) * 30);
    const calcRes1 = calcRes2 + val;

    document.querySelector("#calcFormRes1").textContent = calcRes1.toLocaleString("ru-RU");
    document.querySelector("#calcFormRes2").textContent = calcRes2.toLocaleString("ru-RU");
}

function calculator() {
    if (document.querySelector("#calcFormRange")) {
        const range = document.querySelector("#calcFormRange");

        noUiSlider.create(range, {
            start: [0],
            connect: true,
            tooltips: true,
            range: {
                'min': 1000000,
                'max': 30000000
            },
            step: 250000,
            format: {
                to: (value) => {
                    return value.toLocaleString('de-DE');
                },
                from: (value) => {
                    return value.replace('.', '');
                }
            }
        });

        range.noUiSlider.on("update", (values) => {
            calc(values)
        })
    }

}

export default calculator;
'use strict';

const inputs = document.querySelectorAll('.controls input');

function hanleUpdate() {
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listen to changes of each of the inputs:
inputs.forEach(input => input.addEventListener('change', hanleUpdate));
// Listen to dynamic changes (so as the mouse drags)
inputs.forEach(input => input.addEventListener('mousemove', hanleUpdate));
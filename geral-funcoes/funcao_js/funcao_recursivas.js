function recursivas(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursivas(max);
}

recursivas(0);
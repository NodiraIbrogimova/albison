function main(params) {
    // document.addEventListener('keydown', (event) => {
    //     console.log(event);
    // });

    // document.addEventListener('keyup', (event) => {
    //     console.log('keyup event: ', event);
    // });

    // document.getElementById('name').addEventListener('input', (event) => {
    //     document.getElementById('heading').textContent = event.target.value;
    // });

    // document.getElementById('name').addEventListener('blur', (event) => {
    //     if (event.target.value == "") {
    //         document.getElementById('name').style.border = '2px solid red';
    //     }
    // });

    // document.getElementById('name').addEventListener('focus', (event) => {
    //     document.getElementById('name').style.border = '10px solid blue';
    // });

    document.querySelector('input[name="color"]').addEventListener('change', (event) => {
        document.getElementById('box').style.backgroundColor = event.target.value;
    });

    document.querySelector('input[name="range"]').addEventListener('change', (event) => {
        console.log('range value is: ', event.target.value);
        document.getElementById('box').style.borderRadius = `${event.target.value}px`;
    });

}

main();
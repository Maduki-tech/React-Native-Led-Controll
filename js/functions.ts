export function callURL (state: string) {
    fetch(`http://192.168.0.76/${state}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
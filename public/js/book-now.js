const counter = (function() {
    let count = 0;
    
    return {
        increment: () => {
            count++;
            updateCount();
        },
        decrement: () => {
            count--;
            updateCount()
        },
        getCount: () => {
            return (count);
        }
    }

    function updateCount() {
        document.getElementById("count").innerText = count;
    }
})();

// const dropdown = (function () {
//     const dropdownBtn = document.querySelector(".dropdownBtn");
//     const dropdownMenu = document.querySelector(".dropdownMenu");

//     return {
//         show: function() {
//             dropdownMenu.classList.add("show");
//         }
//     }
// })();

const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector(".dropdownMenu");

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.add("show");
});
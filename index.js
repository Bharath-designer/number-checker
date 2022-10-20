const selectTab = event => {
    const tab = event.target.dataset.tab;
    const element = document.querySelector("#" + tab);
    showSelected(element);

    const nav_indicator = document.querySelector(".nav-bar-active-indicator")

    if (tab == "item1") {
        nav_indicator.classList.remove("middle", "right")
    } else if (tab == "item2") {
        nav_indicator.classList.remove("right")
        nav_indicator.classList.add("middle")
    } else if (tab == "item3") {
        nav_indicator.classList.remove("middle")
        nav_indicator.classList.add("right")
    }
};

const showSelected = selected => {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.display = "none";
    });

    selected.style.display = "block";
};

document.querySelectorAll(".select-btn").forEach(tabSelectButton => {
    tabSelectButton.addEventListener("click", selectTab);
});




showSelected(document.querySelector("#item1"))





const armstrongSubmit = e => {
    e.preventDefault()
    let value = document.querySelector(".armstrong-input").value
    document.querySelector(".armstrong-input").value = ""
    let result = document.querySelector(".armstrong-result")
    if (!value) return 

    var flag, remainder, addition = 0;

    flag = value;
    while (flag > 0) {
        remainder = flag % 10;
        addition = addition + remainder * remainder * remainder;
        flag = parseInt(flag / 10);
    }

    result.style.display = "block"

    if (addition == value) {
        result.classList.remove("warning")
        result.innerHTML = value + " is an Amstrong number"
    } else {
        result.classList.add("warning")
        result.innerHTML = value + " is not an Amstrong number"

    }


}

const primeSubmit = e => {
    e.preventDefault()
    const value = parseInt(document.querySelector(".prime-input").value)
    document.querySelector(".prime-input").value = ""
    const result = document.querySelector(".prime-result")

    if (!value) return 


    let flag = true;

    for (let i = 2; i <= value - 1; i++) {
        if (value % i == 0) {
            flag = false;
            break;
        }
    }

    result.style.display = "block"


    if (!flag) {
        result.classList.add("warning")
        result.innerHTML = value + " is not a Prime number"
    } else {

        result.classList.remove("warning")
        result.innerHTML = value + " is a Prime number"

    }



}

const palindromeSubmit = e => {
    e.preventDefault()
    const value = document.querySelector(".palindrome-input").value
    if (!value) return
    document.querySelector(".palindrome-input").value = ""
    const result = document.querySelector(".palindrome-result")

    if (!value) return 



    result.style.display = "block"
    var re = /[\W_]/g;

    var lowRegStr = value.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
        result.classList.remove("warning")
        result.innerHTML = "'" + value + "' is Palindrome"
    } else {
        result.classList.add("warning")
        result.innerHTML = "'" + value + "' is not Palindrome"

    }


}



const res_container = document.querySelectorAll(".result-container")

res_container.forEach(node => {
    node.addEventListener("click",(e)=>{
        e.target.style.display = "none"
    })
})
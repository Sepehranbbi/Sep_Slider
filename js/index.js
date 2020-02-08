
// const SlideContainer = document.querySelector('.Sep_SliderItems')
// const Slideritems = SlideContainer.children;
// let margin = 30;
// let items = 0;

// const SlideContainerWidth = SlideContainer.offsetWidth;

// responsive = [
//     { set: { width: 0, items: 1 } },
//     { set: { width: 600, items: 2 } },
//     { set: { width: 1000, items: 4 } },
// ]

// function loading() {
//     for (let index = 0; index < responsive.length; index++) {
//         if (SlideContainerWidth > responsive[index].set.width) {
//             items = responsive[index].set.items
//         }
//     }
//     console.log(items)
// }

// function start() {
//     for (let index = 0; index < Slideritems.length; index++) {
//         Slideritems[index].style.width = SlideContainer.offsetWidth;

//     }
// }


// window.onload = loading()

// console.log(SlideContainerWidth)

let SliderContainer = document.querySelector('.Sep_SliderItems')
let SliderAllItems = SliderContainer.children;
let items = 0
let margin = 10;

let ControllerContent = document.querySelector('.Sep_Container')


let windowsWidth = SliderContainer.offsetWidth;

responsive = [
    { state: { width: 0, items: 1 } },
    { state: { width: 600, items: 2 } },
    { state: { width: 1000, items: 4 } },
]

window.onload = function () {
    for (let index = 0; index < responsive.length; index++) {
        if (windowsWidth > responsive[index].state.width) {
            items = responsive[index].state.items
        }
    }
    //  slider function
    startSlidng();
}

function startSlidng() {
    let itemWidth = (windowsWidth / items) - margin + 'px';
    let totoalContainerSliderWidth = 0
    for (let index = 0; index < SliderAllItems.length; index++) {
        SliderAllItems[index].style.width = itemWidth;
        SliderAllItems[index].style.margin = (margin / 2) + 'px';
        totoalContainerSliderWidth += SliderAllItems[index].offsetWidth;
    }
    SliderContainer.style.width = totoalContainerSliderWidth + 'px';

    //  control sliding
    Controller()
}

function Controller() {
    let numbers = Math.ceil(SliderAllItems.length / items);
    console.log(numbers)
    const UlElement = document.createElement('ul')
    for (let index = 0; index < numbers; index++) {
        const lielement = document.createElement('li');
        lielement.innerHTML = index + 1;
        lielement.setAttribute('onclick', 'sliderController(this)');
        UlElement.appendChild(lielement);
        if (index == 0) {
            lielement.className = "active";
        }
    }
    ControllerContent.append(UlElement)
}

function sliderController(elem) {
    let htmlnumber = elem.innerHTML;
    console.log(htmlnumber)
    let numberss = ControllerContent.querySelectorAll('ul li');
    for (let index = 0; index < numberss.length; index++) {
        numberss[index].classList.remove("active");
    }

    elem.className = 'active';

    let itemWidth = (windowsWidth / items);
    SliderContainer.style.marginLeft = -(items * itemWidth * (htmlnumber - 1)) + 'px'

}



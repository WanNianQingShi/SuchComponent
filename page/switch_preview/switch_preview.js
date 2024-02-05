function openSwitchPage() {

    var page = document.createElement('div')
    var pageHead = document.createElement('div')
    var pageBody = document.createElement('div')
    var pageName = document.createElement('div')
    var showArea = document.createElement('div')
    var plusBtn = document.createElement('button')
    var lowBtn = document.createElement('button')
    ///////////////////
    pageHead.classList.add('page-head')
    pageBody.classList.add('page-body')
    page.classList.add('page')
    page.style.display = 'block'
    pageName.classList.add('page-name')
    pageName.innerHTML = '<i class="bi bi-arrow-left-circle-fill"></i> Switch Preview'
    pageHead.appendChild(pageName)
    page.appendChild(pageHead)
    page.appendChild(pageBody)

    pageName.addEventListener("click", function (e) {
        //点击page-name是关闭该页面
        e.target.parentElement.parentElement.style.left = "120%";
        setTimeout(function () {
            e.target.parentElement.parentElement.remove();
        }, 350);

    })
    //////////////MAIN////////////

    const swi1=createSwitch({state: true})

    const swi2=createSwitch({state: false})

    const text1=document.createElement("div")
    text1.innerHTML='On'

    const text2=document.createElement("div")
    text2.innerHTML='Off'

    pageBody.appendChild(text1)
    pageBody.appendChild(swi1)
    pageBody.appendChild(text2)
    pageBody.appendChild(swi2)

    //////////////////////////////


    document.querySelectorAll('body').forEach(function (e) {
        e.appendChild(page)
    })

    //////////////////////////////
    setDispalyLayout()


}
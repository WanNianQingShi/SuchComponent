/**
 * 创建一个开关组件
 * @param {Object} props - 组件属性对象
 *      @param {boolean} props.state - 开关的状态
 * @returns {HTMLElement} - 返回一个包含开关的div元素
 */
function createSwitch(props) {
    const main = document.createElement("div")
    main.classList.add("switch_back")
    main.state = props.state

    const spot = document.createElement("div")
    spot.classList.add("switch_spot")

    /**
     * 切换开关到打开状态
     */
    function ShiftToOn() {
        spot.style.background = 'rgb(0, 130, 255)'
        spot.style.marginLeft='45px'
        spot.style.transform='scale(2.5)'
        main.style.transform='scale(0.9)'

        setTimeout(function (){
            spot.style.marginLeft='30px'
            spot.style.transform='scale(2)'
            main.style.transform='scale(0.9)'
            main.state = true
        },200)
    }

    /**
     * 切换开关到关闭状态
     */
    function ShiftToOff() {
        spot.style.background = '#626262'
        spot.style.marginLeft='-10px'
        spot.style.transform='scale(0.8)'
        main.style.transform='scale(1)'

        setTimeout(function (){
            spot.style.marginLeft='0px'
            spot.style.transform='scale(1)'
            main.style.transform='scale(1)'
            main.state = false
        },200)
    }

    try {
        if (props.state === true) {
            ShiftToOn()
        } else if (props.state === false || null) {
            ShiftToOff()
        } else {
            console.error('[SuchComponentSwitch] 无法评估状态（只能为true、false或null）')
        }
    } catch (Error) {
        console.error(`[SuchComponentSwitch] ${Error}`)
    }

    main.addEventListener("click", function () {
        if (main.state === true) {
            ShiftToOff()
        } else if (main.state === false) {
            ShiftToOn()
        }
        //console.log(main.state)
    })

    main.appendChild(spot)

    return main
}

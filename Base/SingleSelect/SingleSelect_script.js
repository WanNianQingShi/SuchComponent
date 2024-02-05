/**
 * 创建单选框组件
 * @param {Object} props - 组件属性
 *      @param {string} props.value - 组件的值
 *      @param {string} props.context - 上下文内容
 *      @param {Array} props.list - 选项列表
 */
function createSingleSelect(props) {
    const main=document.createElement('div')
        const TextArea=document.createElement('div')
            const context=document.createElement('div')
            const SelectedItem=document.createElement('div')
        const IconArea=document.createElement('div')
            const ico=document.createElement('div')

    //构造模块元素
    try {
        TextArea.appendChild(context);TextArea.appendChild(SelectedItem)
        IconArea.appendChild(ico);
        main.appendChild(TextArea);main.appendChild(IconArea)
    }
    catch (Error) {
        console.log(`[SingleSelect] ${Error}`)
    }

    //设置main的value值
    main.value=props.value;

    //设置context
    context.innerHTML=props.context;


    //创建默认选中项
    try {
        if (props.value!=null && typeof (props.value) !=="boolean" && props.list.indexOf(`${props.value}`)!==-1){
            SelectedItem.innerHTML=`Selected:${props.value}`;
        }
        else {
            SelectedItem.innerHTML="Select Item...";
        }
    }
    catch(Error){
        console.log(`[SingleSelect] ${Error}`)
    }


    //设置Select选项页面
    try {
        main.addEventListener('click', () => {
            const SelectListPage = createPage({
                showPage: false,         //是否显示窗口
                title: props[context]    //页面标题
            })
            props.list.forEach((item) => {
                const ChooseBtn = document.createElement('button');
                ChooseBtn.classList.add('btn')

                //当是默认选中的值是设为强调色
                if (item === props.value) {
                    ChooseBtn.style.background = '#007bff';
                }

                //按下每个选择按钮是变更select的值
                ChooseBtn.addEventListener('click', () => {
                    SelectedItem.innerHTML = `Selected:${item}`;
                    main.value = item;
                    SelectListPage.closeThisPage();

                })

                SelectListPage.appendChild(ChooseBtn)   //加入选择页面中
            })

            SelectListPage.show()   //显示页面
        })
    }
    catch (Error){
        console.log(`[SingleSelect] ${Error}`)
    }

    return main

}

/**
 * 创建页面
 * @param {Object} props - 页面属性
 *      @param {string} props.title -页面标题
 *      @param {boolean} props.showPage - 是否直接显示页面
 * @returns {Element} - 创建的页面元素
 *
 * @define 可用对象：
 *      entry.closeThisPage() - 关闭页面
 *      entry.show() - 显示页面(only {showPage=false})
 */
function createPage(props) {
    // 创建页面元素
    const page = document.createElement('div');
    const pageHead = document.createElement('div');
    const pageBody = document.createElement('div');
    const pageName = document.createElement('div');

    // 添加类名
    pageHead.classList.add('page-head');
    pageBody.classList.add('page-body');
    page.classList.add('page');
    page.style.display = 'block';
    pageName.classList.add('page-name');

    // 设置页面名称内容
    pageName.innerHTML = `<i class="bi bi-arrow-left-circle-fill"></i>${props.tittle}`;

    // 添加页面名称到页面头部
    pageHead.appendChild(pageName);
    // 添加页面头部和页面主体到页面元素
    page.appendChild(pageHead);
    page.appendChild(pageBody);

    // 点击页面名称时关闭页面
    pageName.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.style.left = "120%";
        setTimeout(function () {
            e.target.parentElement.parentElement.remove();
        }, 350);
    });

    //通过obj.pageBody获取页面主体
    page.pageBody=pageBody;

    //通过obj.closePage()关闭页面
    page.closeThisPage=function (){
        page.style.left = "120%";
        setTimeout(function () {
            page.remove();
        }, 350);
    }

    // 判断是否直接显示页面
    if (props.showPage === true || null || undefined) {
        // 将页面添加到body中
        document.querySelectorAll('body').forEach(function (e) {
            e.appendChild(page);
        })
        return page;
    } else if (props.showPage === false) {
        page.show = function () {
            document.appendChild(page);
            page.show = null;
        };
        return page;
    } else {
        console.log('[SingleSelect] The property of {showPage:} is error, only true, false, null, or Empty');
    }

    // 设置页面布局
    setDispalyLayout();
}

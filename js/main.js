const tabMenu = () => {

    // 「tab-menu-item」がついている要素を全て取得し、配列名「tabItems」とする
    const tabItems = document.querySelectorAll(".tab-menu-item");
    // 「tab-panel」がついている要素を全て取得し、配列名「tabPanels」とする
    const tabContents = document.querySelectorAll(".tab-content-box");

    // tab-menu-item がマウスオーバーした時の設定
    tabItems.forEach(mouseOverItem => {
        mouseOverItem.addEventListener("click", () => {
            tabItems.forEach(item => {
                item.classList.remove("is-active");
            });
            mouseOverItem.classList.add("is-active");
        });
    });

    // tab-panelの設定
    tabItems.forEach(clickItem => {
        clickItem.addEventListener("click", () => {
            tabContents.forEach(tabContent => {
                tabContent.classList.remove("is-active");
            });
            document.getElementById(clickItem.dataset.id).classList.add("is-active");
        });
    });
};

tabMenu();


const indicationTabMenu = () => {
    const tabs = document.querySelectorAll("[data-id]");
    const contents = document.querySelectorAll("[id]");

    tabClick = (event) => {
        const targetValue = event.target.dataset.li;
        console.log(targetValue);
    }
};

indicationTabMenu();



window.onload = function () {
    getSquareItem();
    getBowlItem();
    getSideItem();
    getBeverageItem();
};


/*사각도시락 메뉴 불러오기 메서드*/
function getSquareItem() {
    var menudata = JSON.parse(squaremenu);
    var menuHtml = "";

    for (var i = 0; i < menudata.length; i++) {
        menuHtml += '<div class="menu">';
        menuHtml += '<table>';
        menuHtml += '<tr>';
        menuHtml += '<td><img src="'
        menuHtml += menudata[i].src;
        menuHtml += '" width=200px height=200px></td></tr>'
        menuHtml += '<tr><td><a1>'
        menuHtml += menudata[i].name;
        menuHtml += '</a1></td></tr>'
        menuHtml += '<tr><td><a2>'
        menuHtml += menudata[i].price;
        menuHtml += '</a2></td></tr></table></div>'

        var div_sq = document.getElementById("square");
        div_sq.innerHTML = menuHtml;
    };

};

/*보울도시락 메뉴 불러오기 메서드*/
function getBowlItem() {

    var menudata = JSON.parse(bowlmenu);
    var menuHtml = "";

    for (var i = 0; i < menudata.length; i++) {
        menuHtml += '<div class="menu">';
        menuHtml += '<table>';
        menuHtml += '<tr>';
        menuHtml += '<td><img src="'
        menuHtml += menudata[i].src;
        menuHtml += '" width=200px height=200px></td></tr>'
        menuHtml += '<tr><td><a1>'
        menuHtml += menudata[i].name;
        menuHtml += '</a1></td></tr>'
        menuHtml += '<tr><td><a2>'
        menuHtml += menudata[i].price;
        menuHtml += '</a2></td></tr></table></div>'

        var div_bowl = document.getElementById("bowl");
        div_bowl.innerHTML = menuHtml;
    };

};


/*사이드 메뉴 불러오기 메서드*/
function getSideItem() {

    var menudata = JSON.parse(sidemenu);
    var menuHtml = "";

    for (var i = 0; i < menudata.length; i++) {
        menuHtml += '<div class="menu">';
        menuHtml += '<table>';
        menuHtml += '<tr>';
        menuHtml += '<td><img src="'
        menuHtml += menudata[i].src;
        menuHtml += '" width=200px height=200px></td></tr>'
        menuHtml += '<tr><td><a1>'
        menuHtml += menudata[i].name;
        menuHtml += '</a1></td></tr>'
        menuHtml += '<tr><td><a2>'
        menuHtml += menudata[i].price;
        menuHtml += '</a2></td></tr></table></div>'

        var side = document.getElementById("side");
        side.innerHTML = menuHtml;
    };

};


/*음료 메뉴 불러오기 메서드*/
function getBeverageItem() {
    var menudata = JSON.parse(beverage);
    var menuHtml = "";

    for (var i = 0; i < menudata.length; i++) {
        menuHtml += '<div class="menu">';
        menuHtml += '<table>';
        menuHtml += '<tr>';
        menuHtml += '<td><img src="'
        menuHtml += menudata[i].src;
        menuHtml += '" width=200px height=200px></td></tr>'
        menuHtml += '<tr><td><a1>'
        menuHtml += menudata[i].name;
        menuHtml += '</a1></td></tr>'
        menuHtml += '<tr><td><a2>'
        menuHtml += menudata[i].price;
        menuHtml += '</a2></td></tr></table></div>'

        var div_bv = document.getElementById("beverage");
        div_bv.innerHTML = menuHtml;
    };

};



function callbowllist() {

    document.querySelector('#square').style.display = 'none';
    document.querySelector('#bowl').style.display = 'block';
    document.querySelector('#side').style.display = 'none';
    document.querySelector('#beverage').style.display = 'none';
    

};

function callsqlist() {
    document.querySelector('#square').style.display = 'block';
    document.querySelector('#bowl').style.display = 'none';
    document.querySelector('#side').style.display = 'none';
    document.querySelector('#beverage').style.display = 'none';
};

function callsidelist() {
    document.querySelector('#square').style.display = 'none';
    document.querySelector('#bowl').style.display = 'none';
    document.querySelector('#side').style.display = 'block';
    document.querySelector('#beverage').style.display = 'none';
}

function callbvlist() {
    document.querySelector('#square').style.display = 'none';
    document.querySelector('#bowl').style.display = 'none';
    document.querySelector('#side').style.display = 'none';
    document.querySelector('#beverage').style.display = 'block';
}



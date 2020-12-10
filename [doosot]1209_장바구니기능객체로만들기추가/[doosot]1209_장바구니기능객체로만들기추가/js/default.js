var toppingList = [];
var nowTabNum = 0; // 현재 선택된 탭번호
var nowItemNum = 0; // 현재 선택된 메뉴번호
var ChooseCnt = 0;
// 카트 정보 저장할 함수
var cartList = [];

function save_cartList(img, name, price, cnt, toppings) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.cnt = cnt;
    this.toppings = toppings;
}



window.onload = function () {
    // 메뉴 불러오기
    getItem();

    // 팝업창 제어 프로세스
    fnPopupProc();

    //팝업외에다른곳클릭X;
    noClick();

};


/* 메뉴 불러오기 메서드 */
function getItem() {

    for (var i = 0; i < arrTabList.length; i++) {

        var menudata = JSON.parse(itemList[i]);
        var menuHtml = "";

        for (var j = 0; j < menudata.length; j++) {
            menuHtml += '<div class="menu" onclick = "javascript:addmenuOpen(' + i + ', ' + j + ');">';
            menuHtml += '<table>';
            menuHtml += '<tr>';
            menuHtml += '<td><img src="'
            menuHtml += menudata[j].src;
            menuHtml += '" width=200px height=200px></td></tr>'
            menuHtml += '<tr><td><a1>'
            menuHtml += menudata[j].name;
            menuHtml += '</a1></td></tr>'
            menuHtml += '<tr><td><a2>'
            menuHtml += menudata[j].price;
            menuHtml += '</a2></td></tr></table></div>'

            var div_sq = document.getElementById(arrTabList[i]);
            console.log(div_sq);
            div_sq.innerHTML = menuHtml;
        };
    };

};

/* [팝업창] 사이드 메뉴 불러오기 메서드 */
function getSidemenuItem(tabNum, itemNum) {


    var menudata = JSON.parse(itemList[tabNum]);

    // 현재 선택된 내역 저장 
    nowTabNum = tabNum;
    nowItemNum = itemNum;

    // 메뉴명, 이미지 넣기        
    $('#menu_name').text(menudata[itemNum].name);
    $("#view_img").attr("src", menudata[itemNum].src);
    // 음식 개수 1로 재셋팅
    $("input[name='pop_out']").val(1);

    // 토핑 데이터 가져오기(음료수 탭만 제외 )
    if (tabNum != 3) {
        var tabNum = 4;
        var menudata = JSON.parse(itemList[tabNum]);

        var menuHtml = '<h2>밥 추가 변경</h2>';

        for (var i = 0; i < 6; i++) {
            if (i == 3) {
                menuHtml += '<h2>토핑 추가</h2>';
            }
            menuHtml += '<div class="addmenu" id="addmenu' + i + '" onclick="javascript:fnEtcClick(' + tabNum + ', ' + i + ');"><a1>';
            menuHtml += menudata[i].name
            menuHtml += '</a1><br><a2>';
            menuHtml += menudata[i].price
            menuHtml += '</a2></div>'
        }

        console.log(menuHtml);


        var div_side = document.querySelector("#div_addmenu");
        div_side.innerHTML = menuHtml;
        $('#menuinfo').height("500px");

        // 음료수 탭인 경우     
    } else {
        var div_side = document.querySelector("#div_addmenu");
        div_side.innerHTML = '';
        $('#menuinfo').height("300px");
    }
};


// 메뉴탭 클릭시 메뉴목록 Display
function menulist(tabNum) {
    for (var i = 0; i < arrTabList.length; i++) {
        if (i == tabNum) {
            eval("document.querySelector('#" + arrTabList[i] + "').style.display = 'block';");
        } else {
            eval("document.querySelector('#" + arrTabList[i] + "').style.display = 'none';");
        }
    }
};

// 추가메뉴창 닫기 >> 제이쿼리로 변경
function addmenuClose() {
    document.querySelector('#menuinfo').style.display = 'none'
    document.querySelector('#addmenu1').style.border = '0px';

};

// [팝업창] 추가메뉴창 열기
function addmenuOpen(tabNum, itemNum) {

    // 팝업창 셋팅
    getSidemenuItem(tabNum, itemNum);

    // 팝업창 노출 
    document.querySelector('#menuinfo').style.display = 'block';

    // 다른곳 클릭금지
    noClick();
}


/*매장or포장*/
function takeout(takeout) {
    var takeout = takeout;
    console.log(takeout);
    document.querySelector('#takeout').style.display = 'none';

    // 다른곳 클릭금지
    okClick();
}

/*고른 음식 수량 선택*/
function fnCalCount(type, ths) {
    var $input = $(ths).parents("td").find("input[name='pop_out']");
    var tCount = Number($input.val());

    if (type == 'p') {
        $input.val(Number(tCount) + 1);

    } else {
        if (tCount > 1) $input.val(Number(tCount) - 1);
    }
}

/*카트에 담아둔 음식 삭제*/
function removeCart() {
    var chk = confirm('모두 삭제하시겠습니까?');

    if (chk) {
        removeHtml = '';
        var removecart = document.getElementById("addmenu_tbody");
        removecart.innerHTML = removeHtml;
        var removecart = document.getElementById("sum");
        removecart.innerHTML = removeHtml;
        // 카트에 저장된 것들도 삭제함.
        var cartList = [];

    }
};


// 토핑 클릭 
function fnEtcClick(tabNum, itemNum) {

    // 토핑인 경우 
    if (toppingList[itemNum] > 0) {
        // 이미 선택되어져 있는경우 선택 해제 
        $('#addmenu' + itemNum).css('border', '0px solid red');
        toppingList[itemNum] = 0;

    } else {
        // 선택 안되어 있는 경우 선택
        $('#addmenu' + itemNum).css('border', '3px solid red');
        toppingList[itemNum] = 1;
    }
}


// 팝업창 제어 프로세스
function fnPopupProc() {

    // 배열 초기화
    popSelect.length = 0;

    // 선택완료 버튼 클릭
    $('#addmenuSubmit').click(function () {

        //사이드 메뉴 호출
        var sidemenudata = JSON.parse(itemList[4])

        // 메인 메뉴      >>>>>>> 생성자로 저장할거라 블럭처리함
        /*        popSelect.push({
                    tabNum: nowTabNum,
                    itemNum: nowItemNum,
                    cnt: $("input[name='pop_out']").val()
                });*/

        // 음료수탭 제외 
        if (nowTabNum != 3) {

            for (var i = 0; i < 6; i++) {

                // 토핑 선택한 경우에만 데이터 저장
                if (toppingList[i] == 1) {
                    popSelect.push({
                        sidename: sidemenudata[i].name,
                        sideprice: sidemenudata[i].price
                    });
                }

            }
        }


        // 고른 도시락 종류[사각/보울..등등]에 맞는 아이템리스트 호출
        var menudata = JSON.parse(itemList[nowTabNum]);


        // 변수에 넣어줌
        var img = menudata[nowItemNum].src;
        var name = menudata[nowItemNum].name;
        var price = menudata[nowItemNum].price;
        var cnt = $("input[name='pop_out']").val();
        var toppings = popSelect;


        // 생성자에 넣어줌
        var list = new save_cartList(img, name, price, cnt, toppings);

        //확인용 콘솔출력
        console.log(img + ':' + name + ':' + price + ':' + cnt + ':' + toppings)

        // 카트리스트 배열에 넣어줌
        cartList.push(list);

        //확인용 콘솔출력
        console.log(cartList)

        // 토핑담는 용도로 전락한 popSelect는 초기화해준다.
        popSelect = [];



        $('#menuinfo').css('display', 'none');

        for (var i = 0; i < 6; i++) {
            $('#addmenu' + i).css('border', '0px solid red');
            toppingList[i] = 0;
        }

        // 장바구니 출력해주기
        show_cartList();

        // 클릭되게하기
        okClick();

    });

    // 추가메뉴창 닫기
    $('#addmenuClose').click(function () {
        $('#menuinfo').css('display', 'none');

        for (var i = 0; i < 6; i++) {
            $('#addmenu' + i).css('border', '0px solid red');
            toppingList[i] = 0;
        }

    });
}


// 팝업뜨면 바탕에 다른 메뉴 클릭 못하게하기
function noClick() {
    $('#bowl').addClass('clicknone');
    $('#square').addClass('clicknone');
    $('#side').addClass('clicknone');
    $('#beverage').addClass('clicknone');
    $('.menuselect >button').addClass('clicknone');
    $('.cart').addClass('clicknone');
}

// 팝업창 닫으면 클릭되게 하기
function okClick() {
    $('#bowl').removeClass('clicknone');
    $('#square').removeClass('clicknone');
    $('#side').removeClass('clicknone');
    $('#beverage').removeClass('clicknone');
    $('.menuselect >button').removeClass('clicknone');
    $('.cart').removeClass('clicknone');

}

// 장바구니에 리스트 출력
function show_cartList() {

    var carthtml = '';

    for (var i = 0; i < cartList.length; i++) {
        carthtml += '<table class="tg">';
        carthtml += '<form class=""><tbody id="addmenu_tbody"><tr>';
        carthtml += '<td rowspan="2"><img src="'
        carthtml += cartList[i].img;
        carthtml += '"></td><td colspan="3"><a1>';
        carthtml += cartList[i].name;
        carthtml += '</a1></td></tr>';
        carthtml += '<tr class="trline"><td><a2>'
        carthtml += cartList[i].price;
        carthtml += '</a2></td><td><a3>X'
        carthtml += cartList[i].cnt;
        carthtml += '</a3></td><td><input type="button" class="cancel" value="삭제"  onclick="javascript: delete_cartmenu(' + i + ');"></td>'
        carthtml += '</tr><tr><td class="sidemenu_show" colspan="4">'
        carthtml += '<ul>'

        for (var j = 0; j < cartList[i].toppings.length; j++) {
            carthtml += '<li><a1>'
            carthtml += cartList[i].toppings[j].sidename;
            carthtml += '</a1><a2>'
            carthtml += cartList[i].toppings[j].sideprice;
            carthtml += '</a2></li>'
        }
        carthtml += '</ul></td></tr></tbody></form></table><hr>'

    }


    console.log(carthtml);

    var ct = document.querySelector('.cartlist');
    ct.innerHTML = carthtml;
}

function delete_cartmenu(index) {

    var chk = confirm('선택하신 메뉴를 삭제하시겠습니까?');

    if (chk) {
        cartList.splice(index, 1);
        alert('삭제완료!');
        show_cartList();
    }


}

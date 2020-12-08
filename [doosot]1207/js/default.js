
window.onload = function () {
    // 메뉴 불러오기
    getItem();   
};


/* 메뉴 불러오기 메서드 */
function getItem() {

    for(var i = 0; i < arrTabList.length; i++){

        var menudata = JSON.parse(itemList[i]);
        var menuHtml = "";
   
        for (var j = 0; j < menudata.length; j++) {
            menuHtml += '<div class="menu" onclick = "javascript:addmenuOpen(' + i +', ' + j + ');">';
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

    // 메뉴명, 이미지 넣기        
    $('#menu_name').text(menudata[itemNum].name);
    $("#view_img").attr("src", menudata[itemNum].src);

    
    // 토핑 데이터 가져오기(음료수 탭만 제외 )
   
    if(tabNum != 3){    
        var tabNum = 4; 
        var menudata = JSON.parse(itemList[tabNum]);

        var menuHtml = '<h2>밥 추가 변경</h2>';

        for (var i = 0; i < 6; i++) {
            if(i == 3){
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
function menulist(tabNum){
    for(var i = 0; i < arrTabList.length; i++){
        if(i == tabNum){
            eval("document.querySelector('#" + arrTabList[i] + "').style.display = 'block';");
        }else {
            eval("document.querySelector('#" + arrTabList[i] + "').style.display = 'none';");
        }                
    }
};

/*// 추가메뉴창 닫기 >> 제이쿼리로 변경
function addmenuClose() {
    document.querySelector('#menuinfo').style.display = 'none'
    document.querySelector('#addmenu1').style.border= '0px';
    
};*/



// [팝업창] 추가메뉴창 열기
function addmenuOpen(tabNum, itemNum) {
    
    // 팝업창 셋팅
    getSidemenuItem(tabNum, itemNum);    
    
    // 팝업창 노출 
    document.querySelector('#menuinfo').style.display = 'block';
}


/*매장or포장*/
function takeout(takeout) {
    var takeout = takeout;
    console.log(takeout);
    document.querySelector('#takeout').style.display = 'none';
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
// 나중에 데이터 삭제 추가해줘야함

function removeCart() {
    var chk = confirm('모두 삭제하시겠습니까?');

    if (chk) {
        removeHtml = '';
        var removecart = document.getElementById("addmenu_tbody");
        removecart.innerHTML = removeHtml;
        var removecart = document.getElementById("sum");
        removecart.innerHTML = removeHtml;
        
    }
};


// 토핑 클릭 
var toppingList = [];
function fnEtcClick(tabNum, itemNum){

    // 토핑인 경우 
    if(toppingList[itemNum] > 0){    
        // 이미 선택되어져 있는경우 선택 해제 
        $('#addmenu' + itemNum).css('border', '0px solid red');
        toppingList[itemNum] = 0;

    }else {
        // 선택 안되어 있는 경우 선택
        $('#addmenu' + itemNum).css('border', '3px solid red');
        toppingList[itemNum] = 1;
    }

 
}




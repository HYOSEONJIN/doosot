// 결제 배열
// payArr = [사진파일, 결제안내멘트]
var payArr = '[{"img":"image/pay/cash.png","name":"현금을 선택하셨습니다.<br>현금을 투입해 주세요."},{"img": "image/pay/card.png","name": "카드를 선택하셨습니다.<br>카드를 투입해 주세요."}, {"img": "image/pay/sam.png","name": "삼성페이를 선택하셨습니다.<br>단말기를 터치해 주세요."},{   "img": "image/pay/kakao.png","name": "카카오페이를 선택하셨습니다.<br>바코드를 인식시켜 주세요."}]';


// 메뉴 목록 지정 
var arrTabList = ['square', 'bowl', 'side', 'beverage'];

// 음식 목록 
// 0 : 사각도시락, 1:보울도시락, 2:실속반찬, 3:음료, 4:토핑
var itemList =
    [
        '[{"index" : "1", "src" : "image/menu/square/1.jpg", "name" : "생선까스도련님고기고기", "price" : "5,500원"},{"index" : "2","src" : "image/menu/square/2.jpg", "name" : "돈까스도련님고기고기", "price" : "5,500원"},{"index" : "3","src" : "image/menu/square/3.jpg", "name" : "제육 김치찌개 정식", "price" : "8,000원"},{"index" : "4","src" : "image/menu/square/4.jpg", "name" : "메가치킨제육", "price" : "6,900원"},{"index" : "5","src" : "image/menu/square/5.jpg", "name" : "고추장숯불삼겹정식", "price" : "9,000원"},{"index" : "6","src" : "image/menu/square/6.jpg", "name" : "두솥밥", "price" : "1,000원"}]'
    ,          
        '[{"index" : "1","src" : "image/menu/bowl/1.jpg", "name" : "치킨마요", "price" : "2,900원"},{"index" : "2","src" : "image/menu/bowl/2.jpg", "name" : "참치마요", "price" : "2,900원"},{"index" : "3","src" : "image/menu/bowl/3.jpg", "name" : "스팸철판볶음밥", "price" : "4,500원"},{"index" : "4","src" : "image/menu/bowl/4.jpg", "name" : "묵은지김치찌개", "price" : "4,300원"},{"index" : "5","src" : "image/menu/bowl/5.jpg", "name" : "돈까스 카레", "price" : "3,900원"}]'
    ,
        '[{"index" : "1","src" : "image/menu/side/1.jpg", "name" : "반찬계란말이", "price" : "2,200원"},{"index" : "2","src" : "image/menu/side/2.jpg", "name" : "반찬소불고기", "price" : "3,900원"},{"index" : "3","src" : "image/menu/side/3.jpg", "name" : "치킨샐러드", "price" : "3,600원"},{"index" : "4","src" : "image/menu/side/4.jpg", "name" : "볶음김치", "price" : "400원"}]'
    ,
        '[{"index" : "1","src" : "image/menu/beverage/1.jpg", "name" : "웰치스포도355ml", "price" : "950원"},{"index" : "2","src" : "image/menu/beverage/2.jpg", "name" : "코카콜라355ml", "price" : "1,300원"},{"index" : "3","src" : "image/menu/beverage/3.jpg", "name" : "칠성사이다355ml", "price" : "1,300원"},{"index" : "4","src" : "image/menu/beverage/4.jpg", "name" : "뽀로로밀크맛235ml", "price" : "1,100원"}]'
    ,
        '[{"index":"1","src":null,"name":"밥","price" : "1,000원"},{"index":"2","src":null,"name":"현미밥","price" : "1,500원"},{"index":"3","src":null,"name":"잡곡밥","price" : "2,000원"},{"index":"4","src":null,"name":"스팸","price" : "2,000원"},{"index":"5","src":null,"name":"계란후라이","price" : "1,000원"},{"index":"6","src":null,"name":"청양고추","price" : "500원"}]'
    ];


// 팝업 선택 내역 
// popSelect = [탭번호, 음식번호, 갯수]
var popSelect = [];





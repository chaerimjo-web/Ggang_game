/* 코드를 작성하세요 */
/* 1.` 윈도우에 이벤트 추가 하는 함수-> 키, 마우스 등 
 2프로그램 시작에 필요한 함수,메소드 호출 (윈도우 이벤트 함수를 이닛함수에 호출)
 3모든 요소 로드된 후 게임 실행 -> 온로드함수-> 이닛함수 실행 
키다운, 키업 이벤트 추가
필요한 키코드만 keyvalue에추가 

windowEvent 키를 눌렀을 때 작동하는 keydown event
windowEvent 키를 땠을 때 작동하는 keyup event

변수 key 필요한 키 코드만 eyyValue
*/
const key = {
	keyDown: {},
	keyValue : {
		37: 'left',
		39: 'right',
		38: 'up',
		40: 'down',
		88: 'x_key'
	}
}

const renderGame = () => {
		window.requestAnimationFrame(renderGame); //재귀함수/ 자기자신을 호출 
		hero.keyMotion(); //키를 누를때 key메소드를 호출한다. 		
	}

const windowEvent = () => {
	window.addEventListener('keydown', e => {
		key.keyDown[key.keyValue[e.which]] = true;
	});
	window.addEventListener('keyup', e => {
		key.keyDown[key.keyValue[e.which]] = false;
	})
}
let hero;

const loadImg = () => {
	const preLoadImgSrc = ['../../lib/images/ninja_run.png', '../../lib/images/ninja_attack.png']; //미리 로드할 이미지 경로들의 배열 
	preLoadImgSrc.forEach(arr => {
		const img = new Image(); //새로운 객체 생성 | new Image()로 img 객체를 만들었을 때 → 빈 <img> 태그를 만든 것과 같음.
		img.src = arr; 
		/*
			img.src는 이미지의 경로(URL) 를 설정하는 속성
			src 속성에 값을 넣으면 브라우저가 자동으로 해당 이미지를 로드
			여기서 arr은 preLoadImgSrc 배열에 있는 문자열('../../lib/images/ninja_run.png') 
		*/
	});
}

const init = () => {
	hero = new Hero('.hero'); //hero 인스턴스 호출
	loadImg();
	windowEvent();
	renderGame();
}

window.onload = () => {
	init();
}
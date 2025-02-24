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
		40: 'down'
	}
}

const windowEvent = () => {
	window.addEventListener('keydown', e => {
		key.keyDown[key.keyValue[e.which]] = true;
		console.log(key.keyDown);
	});
	window.addEventListener('keyup', e => {
		key.keyDown[key.keyValue[e.which]] = false;
		console.log(key.keyDown);
	})
}

const init = () => {
	windowEvent();
}

window.onload = () => {
	init();
}
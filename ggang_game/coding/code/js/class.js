class Hero{
	constructor(el){
		this.el = document.querySelector(el);
		this.movex = 0;
		this.speed = 16; //변수선언
		this.direction = 'right'; //히어로의 방향 
	}



	keyMotion(){
		/* keydown오브젝트로 키눌림을 체크 후 조건문을 만든다. */
		if(key.keyDown['left']){
			this.direction = 'left';
			this.el.classList.add('run');
			this.el.classList.add('flip');
			
			this.movex = this.movex - this.speed;
		}else if(key.keyDown['right']){
			this.direction = 'right';
			this.el.classList.add('run');
			this.el.classList.remove('flip');
			this.movex = this.movex + this.speed;
		}
		
		if(!key.keyDown['left'] && !key.keyDown['right']){
			this.el.classList.remove('run');
		}
		if(key.keyDown['x_key']){
			if(!bulletComProp.launch){
				this.el.classList.add('attack');
				//수리검
				bulletComProp.arr.push(new Bullet()); 
				// console.log(bulletComProp.arr.length);
				bulletComProp.launch = true;
			}
		}
		if(!key.keyDown['x_key']){
			this.el.classList.remove('attack');
			bulletComProp.launch = false;
		}
		this.el.parentNode.style.transform = `translateX(${this.movex}px)`;
	}
	position(){
		return{
			left: this.el.getBoundingClientRect().left,
			right: this.el.getBoundingClientRect().right,
			top: gameProp.screenHeight - this.el.getBoundingClientRect().top,
			bottom: gameProp.screenHeight - this.el.getBoundingClientRect().top -this.el.getBoundingClientRect().height
		}
	}
	size(){ //수리검 크기
		return{
			width: this.el.offsetWidth,
			height: this.el.offsetHeight
		}
	}
}

class Bullet{ 
	constructor(){ //수리검 생성하기
		this.parentNode = document.querySelector('.game');
		this.el = document.createElement('div');
		this.el.className = 'hero_bullet';
		this.x=0;
		this.y=0;
		this.speed=30;
		this.distance=0;
		this.bulletDirection='right';
		this.init();
	}
	init(){ //수리검 추가하기 
		this.bulletDirection = hero.direction === 'left' ? 'left' : 'right';
		this.x = hero.position().left + hero.size().width / 2;
		this.y = hero.position().bottom - hero.size().height / 2;
		this.distance = this.x;
		this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
		this.parentNode.appendChild(this.el);
	}
	moveBullet(){ //수리검 이동 메소드 
		let setRotate ='';
		if(this.bulletDirection === 'left'){
			this.distance -= this.speed;
			setRotate='rotate(180deg)';
		}else{
			this.distance += this.speed;
		}
		this.el.style.transform = `translate(${this.distance}px, ${this.y}px) ${setRotate}`;
		//수리검 이동-> x좌표를 distance에 넣어준다./수리검이 생성한 위치에
		this.crashBullet();
	}
	position(){
		return{
			left: this.el.getBoundingClientRect().left,
			right: this.el.getBoundingClientRect().right,
			top: gameProp.screenHeight - this.el.getBoundingClientRect().top,
			bottom: gameProp.screenHeight - this.el.getBoundingClientRect().top -this.el.getBoundingClientRect().height
		}
	}
	crashBullet(){ //화면 벗어났는지, 충돌했는지 여부 / 수리검 이동 시 호출출
		if(this.position().left>gameProp.screenWidth || this.position().right<0){
			this.el.remove();
		} //수리검->화면을 벗어났다면 
	}
}
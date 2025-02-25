class Hero{
	constructor(el){
		this.el = document.querySelector(el);
		this.movex = 0;
		this.speed = 16; //변수선언

	}

	keyMotion(){
		/* keydown오브젝트로 키눌림을 체크 후 조건문을 만든다. */
		if(key.keyDown['left']){
			this.el.classList.add('run');
			this.el.classList.add('flip');
			
			this.movex = this.movex - this.speed;
		}else if(key.keyDown['right']){
			this.el.classList.add('run');
			this.el.classList.remove('flip');
			this.movex = this.movex + this.speed;
		}
		
		if(!key.keyDown['left'] && !key.keyDown['right']){
			this.el.classList.remove('run');
		}
		if(key.keyDown['x_key']){
			this.el.classList.add('attack');
		}
		if(!key.keyDown['x_key']){
			this.el.classList.remove('attack');
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
}
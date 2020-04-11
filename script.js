const particles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)

  const particlesLength = Math.min(Math.floor(window.innerWidth/10), 100);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

// function draw() {
//     // add bg to get rid of line from old value
//     particles.forEach((p, index) => {
//       p.update();
//       p.draw();
//       p.checkParticles(particles.slice(index))
//     })
    
// }

// class Particle {
//   constructor() {
//     // Position
//     this.pos = createVector(random(width) , random(height));

//     //Velocity
//     this.vel = createVector(random(-2,2), random(-2,2));

//     //Size
//     this.size = 10;
//   }

//   update() {
//     // move each circle 
//     
//     this.pos.add(this.vel);
//     this.edges();
//   }

//   draw() {
//     noStroke();
//     fill('rgba(255,255,255,0.5)')
//     circle(this.pos.x, this.pos.y, this.size)
//   }

//   // Detect edges
//   edges() {
//     if (this.pos.x < 0 || this.pos.x > width) {
//       this.vel.x *= -1;
//     }
//     if (this.pos.y < 0 || this.pos.y > height) {
//       this.vel.y *= -1;
//     }
//   }

//   checkParticles(particles) {
//     let d;
//     particles.forEach(particle => {
//       const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
//     });

//     if ( d< 120) {
//       stroke(rgba(255,255,255,0.1));
//     }
//   }
// }


function setup() {
  let bg = loadImage("439003.jpg")
	createCanvas(window.innerWidth, window.innerHeight);
	
	const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
	for(let i=0; i<particlesLength; i++) {
		particles.push(new Particle());
	}
}

function draw() {
	clear();
  loadImage('439003.jpg');
	particles.forEach((particle, idx) => {
		particle.update();
		particle.draw();
		particle.checkParticles(particles.slice(idx));
	});
}

class Particle {
	constructor() {
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(random(-1, 1), random(-1, 1));
		this.size = 5;
	}
	
	update() {
		this.pos.add(this.vel);
		this.edges();
	}
	
	draw() {
    fill('rgba(255,255,255,0.45)');
		noStroke();
		circle(this.pos.x, this.pos.y, this.size * 3);
	}
	
	edges() {
		if(this.pos.x < 0 || this.pos.x > width) {
			this.vel.x *= -1;
		}
		
		if(this.pos.y < 0 || this.pos.y > height) {
			this.vel.y *= -1;
		}
		
		if(this.pos.x > width) {
			this.pos.x = 0;
		}
		
		if(this.pos.y > height) {
			this.pos.y = 0;
		}
	}
	
	checkParticles(particles) {
		particles.forEach(particle => {
			const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
			if(d < 120) {
				line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
			}
		});
	}
}



let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let battlecry = document.querySelector("#shing02");

play.addEventListener('click', () => {
  battlecry.play();
});

pause.addEventListener('click', () => {
  battlecry.pause();
});
// Spotlight.js
class Spotlight {
    constructor(containerElement, options = {}) {
      this.container = containerElement;
      this.cards = Array.from(this.container.children);
      this.mouse = { x: 0, y: 0 };
      this.containerSize = { w: 0, h: 0 };
      this.options = { ...Spotlight.defaultOptions, ...options };
  
      this.initContainer();
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.init();
    }
  
    static defaultOptions = {
      transitionDuration: '0.3s',
      spotlightSize: 200,
      spotlightColor: 'rgba(255, 255, 255)'
    };
  
    initContainer() {
      this.containerSize.w = this.container.offsetWidth;
      this.containerSize.h = this.container.offsetHeight;
    }
  
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      const rect = this.container.getBoundingClientRect();
      const { w, h } = this.containerSize;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        this.mouse.x = x;
        this.mouse.y = y;
        this.cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardX = -(cardRect.left - rect.left) + this.mouse.x;
          const cardY = -(cardRect.top - rect.top) + this.mouse.y;
          const spotlightStyle = `
            radial-gradient(circle ${this.options.spotlightSize}px at ${cardX}px ${cardY}px, ${this.options.spotlightColor}, transparent)
          `;
          card.style.transitionDuration = this.options.transitionDuration;
          card.style.background = spotlightStyle;
        });
      }
    }
  
    init() {
        window.addEventListener('resize', this.initContainer.bind(this));
        window.addEventListener('mousemove', this.handleMouseMove);
      }
  }
  
  export default Spotlight;
  
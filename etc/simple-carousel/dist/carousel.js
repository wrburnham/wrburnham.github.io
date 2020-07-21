class CDLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CDLL {
    head = null;
    insert(data) {
        const el = new CDLLNode();
        el.data = data;
        if (this.head === null) {
            el.next = el;
            el.prev = el;
            this.head = el;
        } else {
            const lastEl = this.head.prev;
            el.next = this.head;
            this.head.prev = el;
            el.prev = lastEl;
            lastEl.next = el;
        }
    }
}

class Carousel extends CDLL {
    constructor(containerId) {
        super();
        const container = document.getElementById(containerId);
        container.classList.add("carousel__container");
        const slides = container.children;
        for (let i = 0; i < slides.length; i++) {
            this.insert(slides[i]);
        }
    }
    start(ms) {
        let el = this.head;
        el.data.classList.add("current");
        setInterval(() => {
            el.data.classList.add("previous");
            el.prev.data.classList.remove("previous");
            el = el.next;
            el.data.classList.add("current");
            el.prev.data.classList.remove("current");
        }, ms);
    }
}

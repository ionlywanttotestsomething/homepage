import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appTyping]'
})
export class TypingDirective implements AfterViewInit {
  @Input('appTyping') speed: number = 25;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const paragraphs = this.el.nativeElement.querySelectorAll('div p');
    let delay = 50; // Initial delay

    paragraphs.forEach((p: HTMLElement) => {
      if (p.getAttribute("finalText") == null) return;
      const text = p.getAttribute('finalText');
      // @ts-ignore
      delay += this.calculateTypingDuration(text); // Increment delay
      // @ts-ignore
      this.applyTypingEffectWithDelay(p, text, delay);
    });
  }

  private applyTypingEffectWithDelay(element: HTMLElement, text: string, delay: number) {
    let index = 0;
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, this.speed);
    }, delay);
  }

  private calculateTypingDuration(text: string): number {
    return text.length * this.speed;
  }
}

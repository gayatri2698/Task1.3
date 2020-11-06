import { Component,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Working With Host Listeners';
  constructor(private el:ElementRef,private renderer:Renderer2){

  }
@HostBinding('style.backgroundColor') background:string;



@HostListener('click') onclick()
{
  alert('Clicked');
}
@HostListener('mouseover')onmousemove(eventData:Event){
   console.log("Mouseover");
   this.changebgcolor("red");
   //this.background("yellow");
  

}
@HostListener('mouseleave' ) onmouseleave(){
  console.log("Mouseleave");
  this.changebgcolor("blue");
}
changebgcolor(color:string){
  this.renderer.setStyle(this.el.nativeElement,'color',color);
}
}
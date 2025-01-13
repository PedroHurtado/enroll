import { MediaMatcher } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from '../menu/menu.component';
import { ActivatedRoute } from '@angular/router';
import { Sidenav } from '../sidenav';

@Component({
  selector: 'app-toolbar',
  imports: [MatButtonModule, MatIconModule, MenuComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  protected readonly isMobile = signal(false);
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  protected _sidenav:Sidenav|undefined
  constructor(private route:ActivatedRoute) {
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia('(max-width: 720px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => {
      this.isMobile.set(this._mobileQuery.matches);
    };
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);

  }
  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
  handlerClick(){
    if(this.isMobile()){
      this._sidenav?.canOpen &&  this._sidenav?.open()
    }
  }
  activate(ev:any){
    this._sidenav = ev as Sidenav
  }
  protected isSidenavVisible(){
    return this._sidenav?.canOpen
  }
}

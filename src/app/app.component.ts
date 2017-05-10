import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTML Playground!';
  codeMirrorConfig = { lineNumbers: true };
  codeMirrorContent:any;
  @ViewChild('iframeResult')
  iframe: any;

  constructor() {
    this.codeMirrorContent = "I am here!"
  }

  codeRun(textareaCode: string){
  	let content = '<!DOCTYPE html>' + textareaCode
  	let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
  	doc.open();
  	doc.write(content);
  	doc.close();
  }

  // codeRun() {
  //   let content = '<!DOCTYPE html>' + this.codeMirrorContent
  //   let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
  //   doc.open();
  //   doc.write(content);
  //   doc.close();
  }
}

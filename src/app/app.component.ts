import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  input:string ="";
  result:string ="";
  op ="";
  d="";
  c="";
  sub="";
  i=0;
  err=0;
  recent:boolean =false;
  ngOnInit(){

  }

  delete(){
    if (this.input !="" && !(this.input=="SYNTAX ERROR") && this.sub=="") {
      this.input=this.input.substr(0, this.input.length-1);
    }
  }
  clear(){
    this.result = "";
    this.input ='';
  }

  ecrire(valu:string){
    if(valu=="0"){
      if(this.input.length==0){
        valu="";
      }
    else if ((this.input[this.input.length-1]=="+")||(this.input[this.input.length-1]=="*")||(this.input[this.input.length-1]=="-")||(this.input[this.input.length-1]=="/")){
      valu="";
    }
    }
    if((this.input[this.input.length-1]=="+")||(this.input[this.input.length-1]=="*")||(this.input[this.input.length-1]=="-")||(this.input[this.input.length-1]=="/")){ 
      if((valu=="+")||(valu=="*")||(valu=="-")||(valu=="/")){ 
        this.err=1;
      }
    }
    if(this.sub[this.sub.length-1]=="=" && !(valu=="+")&& !(valu=="*") && !(valu=="-") && !(valu=="/")){
      this.input="";
    }
    if(valu=="("){
      this.i+=1;
    }
    if(valu==")"){
      this.i-=1;
    }
    this.input=this.input+valu;
    this.sub="";
  }

  egal(){
    
    if(this.i!=0 || this.err==1||(this.input[0]=="*")||(this.input[0]=="/")||(this.input[this.input.length-1]=="*")||(this.input[this.input.length-1]=="/")||(this.input[this.input.length-1]=="+")||(this.input[this.input.length-1]=="-")){
      this.input="SYNTAX ERROR"
    }else if(eval(this.input).length>14){
      this.input=this.input.substr(0,15);
    }
    else{this.input=eval(this.input)}

    this.sub=this.sub+"=";
    this.i=0;
    this.err=0;
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  input:string ="";
  sub="";
  temp:string ="";
  resultat ="0."
  c="";
  i=0;
  err=0;
  j=0;
  no=0;
  vide=0;
  ngOnInit(){

  }

  delete(){
    if(this.temp !=""&& this.input[this.input.length]!="0" && this.input.substr(this.input.length-2 , this.input.length)!="++" && this.input.substr(this.input.length-2 , this.input.length)!="--" ){
      this.temp=this.temp.substr(0, this.temp.length-1);
    }
    if (this.input !="" && !(this.input=="SYNTAX ERROR") && !(this.input=="MATH ERROR") && this.sub=="") {
      this.input=this.input.substr(0, this.input.length-1);
      this.j-=this.j;
    }
   
  }
  clear(){
    this.input ='';
    this.resultat="0."
    this.temp="";
    this.j=0;
  }

  ecrire(valu:string){
    this.c=valu;
    if(this.input[this.input.length-1]=="/" && valu=="0"){
      this.no=1;
    }
    if(valu=="0"){
      if(this.input.length==0){
        this.c="";
      }
    else if ((this.input[this.input.length-1]=="+")||(this.input[this.input.length-1]=="*")||(this.input[this.input.length-1]=="-")||(this.input[this.input.length-1]=="/")){
      this.c="";
    }
    }
    if((this.input[this.input.length-1]=="+")||(this.input[this.input.length-1]=="*")||(this.input[this.input.length-1]=="-")||(this.input[this.input.length-1]=="/")){ 
      if((valu=="*")||(valu=="/")){ 
        this.err=1;
      }
    }
    if((this.input[this.input.length-1]=="*")||(this.input[this.input.length-1]=="/")){ 
      if((valu=="*")|| (valu=="/")){ 
        this.err=1;
      }
    }
    if((this.input[this.input.length-1]=="+")){ 
      if((valu=="+")){ 
        this.c="";
      }
    }
    if((this.input[this.input.length-1]=="-")){ 
      if((valu=="-")){ 
        this.c="";
      }
    }
    if(this.sub[this.sub.length-1]=="=" && !(valu=="+")&& !(valu=="*") && !(valu=="-") && !(valu=="/")){
      this.input="";
      this.j=0;
    }
    if(this.sub[this.sub.length-1]=="=" ){
      if((valu=="+")||(valu=="*")||(valu=="-") || (valu=="/"))
      this.input="Ans";
      this.j=0;
    }
    if(valu=="("){
      this.i+=1;
    }
    if(valu==")"){
      this.i-=1;
    }
   /* if(this.j>20){
      valu="";
      this.c="";
    }*/
    if(!(valu=="")){
      this.j+=1;
    }
    
    this.temp=this.temp+this.c;
    this.input=this.input+valu;
    this.sub="";
    this.c="";
  }

  egal(){
    if(this.input=="" || this.input=="."){
      this.vide=1;
    }
    if(this.i!=0 || this.err==1||(this.input[0]=="*")||(this.input[0]=="/")||(this.input[this.input.length-1]=="*")||(this.input[this.input.length-1]=="/")||(this.input[this.input.length-1]=="+")||(this.input[this.input.length-1]=="-")||(this.temp==".") ||(this.no==1)){
      if(this.temp=="."){
        this.resultat="0.";
        this.temp="";
      }else if(this.no==1){
        this.input="MATH ERROR";
        this.resultat="";
      
      }else{
      this.input="SYNTAX ERROR"
      this.resultat="";
      this.temp="";}
    }
    else if(this.vide!=1){
      this.resultat=eval(this.temp);
      this.temp=this.resultat;
      
    }
    
   /* if(this.resultat=""){
      this.resultat="0."
    }*/
    this.sub=this.sub+"=";
    this.i=0;
    this.err=0;
    this.no=0;
    this.vide=0;
    
    
  }
}

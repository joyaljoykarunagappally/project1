import './polyfills.server.mjs';
import{F as S,a as s,b as o,c as u,d as n,e as i,f as d,g as r,h as f,i as e,j as l,k as h,l as v,s as _,u as E,v as C,w as g,z as A}from"./chunk-KGJDZI3P.mjs";var b=(()=>{let a=class a{constructor(){this.title={First:"INTERPOLATION",Second:"STYLE BINDING",Third:"EVENT HANDLING"},this.str="",this.count=0,this.oddeven="EVEN",this.data={tech1:"JOYAL JOY",tech2:"SOFTWARE DEVELOPER",tech3:"KOCHI, KERALA"},this.admin="joyaljoykarunagappally@gmail.com"}functionCall(){return this.str="Blue","blue"}functionCall1(){this.str="Orange"}functionCall2(){this.str="Violet"}increment(){this.count=this.count+1,this.count%2==0?this.oddeven="EVEN":this.oddeven="ODD"}decrement(){this.count=this.count-1,this.count%2==0?this.oddeven="EVEN":this.oddeven="ODD"}reset(){this.count=0,this.oddeven="EVEN"}colorFunction(){return"rgb(188, 249, 142)"}};a.\u0275fac=function(m){return new(m||a)},a.\u0275cmp=s({type:a,selectors:[["app-root"]],standalone:!0,features:[v],decls:33,vars:12,consts:[[1,"title"],[2,"background-color","rgb(60, 186, 253)"],["type","text",3,"value"],[3,"click"]],template:function(m,t){m&1&&(n(0,"h1",0),e(1),i(),n(2,"h1"),e(3),i(),n(4,"h1"),e(5),i(),n(6,"h1"),e(7),i(),n(8,"div",1),d(9,"input",2),n(10,"h1"),e(11),i(),n(12,"button",3),r("click",function(){return t.functionCall()}),e(13,"Blue"),i(),e(14,"\xA0\xA0 "),n(15,"button",3),r("click",function(){return t.functionCall1()}),e(16,"orange"),i(),e(17,"\xA0\xA0 "),n(18,"button",3),r("click",function(){return t.functionCall2()}),e(19,"Violet"),i()(),n(20,"div")(21,"h2"),e(22),i(),n(23,"h3"),e(24),i(),n(25,"button",3),r("click",function(){return t.increment()}),e(26,"increment"),i(),e(27,"\xA0\xA0 "),n(28,"button",3),r("click",function(){return t.decrement()}),e(29,"decrement"),i(),n(30,"p")(31,"button",3),r("click",function(){return t.reset()}),e(32,"reset"),i()()()),m&2&&(o(1),h(" ",t.title.First,", ",t.title.Second,", ",t.title.Third,""),o(2),l(" Name : ",t.data.tech1,""),o(2),l(" Designation : ",t.data.tech2,""),o(2),l(" Place : ",t.data.tech3,""),o(2),f("value",t.admin),o(2),l(" My fav color is ",t.str,""),o(9),u("background-color",t.colorFunction()),o(2),l("count = ",t.count,""),o(2),l("COUNT IS AN ",t.oddeven,""))},dependencies:[E],styles:["h1[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{color:#093fe3;font-style:italic}"]});let p=a;return p})();var k=[];var I={providers:[S(k),g()]};var x={providers:[A()]},O=_(I,x);var N=()=>C(b,O),w=N;export{w as a};
(this["webpackJsonpgraphql-typescript-react"]=this["webpackJsonpgraphql-typescript-react"]||[]).push([[0],{30:function(e,n,t){e.exports=t.p+"static/media/background.2c86cf5e.jpg"},47:function(e,n,t){e.exports=t.p+"static/media/starwars.293e5f7b.png"},50:function(e,n,t){e.exports=t(61)},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(39),o=t.n(l),i=t(15),c=t(10),u=t(19),d=t(4),s=t(17),m=t(48),v=t(49);var p,h,f=function(e){var n=new v.a({uri:e});return new s.a({link:n,cache:new m.a})},g=t(5),b=t(31),E=t(29),O=t(9),j=O.a.div(p||(p=Object(g.a)(["\n  color: #fff;\n  font-weight: 300;\n  font-size: 1rem;\n"]))),y=function(e){var n=e.person,t=e.player;return r.a.createElement(j,null,r.a.createElement("p",null,"Player: Player ",t),r.a.createElement("p",null,"Name: ",null===n||void 0===n?void 0:n.name),r.a.createElement("p",null,"Height: ",null===n||void 0===n?void 0:n.height))},w=t(28),k=t.n(w),S=k()(h||(h=Object(g.a)(["\n{\n  allPeople {\n \tedges {\n      node {\n        name\n        height\n      }\n    }\n  }\n}"])));var C=function(e){for(var n,t,a=e.length;0!==a;)t=Math.floor(Math.random()*a),n=e[a-=1],e[a]=e[t],e[t]=n;return e},R=function(e,n){var t=C(e);return null===t||void 0===t?void 0:t.slice(0,n)};var x,H,P,W,G=function(e,n){return e.reduce((function(e,t){return e.node[n]<t.node[n]?e:t}))},A=O.a.div(x||(x=Object(g.a)(["\n    border: 1px solid white;\n    padding-left: 20px;\n    background-color: black;\n    height: 30vh;\n"]))),L=function(e){return r.a.createElement(A,null,e.children)},z=r.a.createContext({}),B=z.Provider,M=(z.Consumer,z),q=function(){return r.a.createElement("div",null,"LOADING")},D=function(){return r.a.createElement("div",null,"ERROR")},F=function(e){var n=e.numberOfPeople,t=e.currentRound,l=Object(E.a)(S),o=l.data,c=l.error,u=l.loading,d=Object(a.useContext)(M),s=d.setLastWinner,m=d.gameHistory,v=d.setGameHistory,p=Object(a.useState)(),h=Object(i.a)(p,2),f=h[0],g=h[1];return Object(a.useEffect)((function(){var e,t,a,r;if(null===o||void 0===o||null===(e=o.allPeople)||void 0===e?void 0:e.edges){var l=R(null===o||void 0===o||null===(t=o.allPeople)||void 0===t?void 0:t.edges,n),i=G(l,"height");g(l),s&&s(null===i||void 0===i||null===(a=i.node)||void 0===a?void 0:a.name),v&&v([].concat(Object(b.a)(m||[]),[null===i||void 0===i||null===(r=i.node)||void 0===r?void 0:r.name]))}}),[t]),u?r.a.createElement(q,null):c||!o?r.a.createElement(D,null):r.a.createElement(a.Fragment,null,null===f||void 0===f?void 0:f.map((function(e,n){if(null===e||void 0===e?void 0:e.node)return r.a.createElement(L,{key:n},r.a.createElement(y,{player:n+1,person:e.node}))})))},I=O.a.div(H||(H=Object(g.a)(["\n  color: #fff;\n  font-weight: 300;\n"]))),J=function(e){var n=e.ship,t=e.player;return r.a.createElement(I,null,r.a.createElement("p",null,"Player: Player ",t),r.a.createElement("p",null,"Model: ",null===n||void 0===n?void 0:n.model),r.a.createElement("p",null,"HyperdriveRating: ",null===n||void 0===n?void 0:n.hyperdriveRating))},N=k()(P||(P=Object(g.a)(["\n{\n  allStarships {\n    edges {\n      node {\n        name\n        model\n        hyperdriveRating\n      }\n    }\n  }\n}"]))),T=function(e){var n=e.numberOfShips,t=e.currentRound,l=Object(E.a)(N),o=l.data,c=l.error,u=l.loading,d=Object(a.useContext)(M),s=d.setLastWinner,m=d.gameHistory,v=d.setGameHistory,p=Object(a.useState)(),h=Object(i.a)(p,2),f=h[0],g=h[1];return Object(a.useEffect)((function(){var e,t,a,r;if(null===o||void 0===o||null===(e=o.allStarships)||void 0===e?void 0:e.edges){var l=R(null===o||void 0===o||null===(t=o.allStarships)||void 0===t?void 0:t.edges,n),i=G(l,"hyperdriveRating");g(l),s&&s(null===i||void 0===i||null===(a=i.node)||void 0===a?void 0:a.name),v&&v([].concat(Object(b.a)(m||[]),[null===i||void 0===i||null===(r=i.node)||void 0===r?void 0:r.name]))}}),[t]),u?r.a.createElement(q,null):c||!o?r.a.createElement(D,null):r.a.createElement(a.Fragment,null,null===f||void 0===f?void 0:f.map((function(e,n){if(null===e||void 0===e?void 0:e.node)return r.a.createElement(L,{key:n},r.a.createElement(J,{player:n+1,ship:e.node}))})))};!function(e){e[e.Character=0]="Character",e[e.Spaceship=1]="Spaceship"}(W||(W={}));var $,K,Q,U,V,X=W,Y=O.a.div($||($=Object(g.a)(["\n  padding-left: 20px;\n  display: grid\n"]))),Z=O.a.button(K||(K=Object(g.a)(["\n  height: 10vh\n"]))),_=O.a.h3(Q||(Q=Object(g.a)(["\n  color: white;\n  text-align: center;\n"]))),ee=function(e){var n=e.handleGameClick,t=Object(a.useContext)(M).lastWinner;return r.a.createElement(Y,null,r.a.createElement(_,null,t?"Winner is ".concat(t):"STARCARDS")," }",r.a.createElement(Z,{onClick:function(){return n(X.Character)}},"Actor Round"),r.a.createElement(Z,{onClick:function(){return n(X.Spaceship)}},"Spaceship Round"),r.a.createElement(Z,null,r.a.createElement(u.b,{to:"/history"},"History")))},ne=t(47),te=t.n(ne),ae=t(30),re=t.n(ae),le=O.a.div(U||(U=Object(g.a)(["\n  background-image: url(",");\n  background-repeat: repeat;\n"])),re.a),oe=O.a.div(V||(V=Object(g.a)(["\n  display: grid;\n  margin: 2rem;\n  grid-template-columns: 30% 25% 25%;\n  grid-column-gap: 5%;\n  height: 60vh;\n"])));var ie,ce,ue=function(){var e=Object(a.useState)(X.Character),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(a.useState)(0),c=Object(i.a)(o,2),u=c[0],d=c[1];return r.a.createElement(le,null,r.a.createElement("img",{src:te.a,height:"250",width:"350",alt:"Starwars"}),r.a.createElement(oe,null,r.a.createElement(ee,{handleGameClick:function(e){t!==e&&l(t),d(u+1)}}),t===X.Character&&r.a.createElement(F,{numberOfPeople:2,currentRound:u}),t===X.Spaceship&&r.a.createElement(T,{numberOfShips:2,currentRound:u})))},de=O.a.div(ie||(ie=Object(g.a)(["\n  background-image: url(",");\n  background-repeat: repeat;\n  color: white;\n  font-size: 1rem;\n"])),re.a),se=O.a.div(ce||(ce=Object(g.a)(["\n  color: #fff;\n  font-size: 2rem;\n"]))),me=function(){var e=Object(a.useContext)(M).gameHistory;return r.a.createElement(de,null,r.a.createElement(se,null,"Game History"),e&&(null===e||void 0===e?void 0:e.map((function(e){return r.a.createElement("div",null,e)}))),r.a.createElement(u.c,{to:"/"},"Back"))};var ve=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(a.useState)(),s=Object(i.a)(o,2),m=s[0],v=s[1],p=f("https://starwars-api-poc.netlify.app/.netlify/functions/index");return r.a.createElement(B,{value:{gameHistory:t,setGameHistory:l,lastWinner:m,setLastWinner:v}},r.a.createElement(u.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(c.a,{client:p},r.a.createElement(ue,null))),r.a.createElement(d.a,{path:"/history"},r.a.createElement(me,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.e86869c1.chunk.js.map
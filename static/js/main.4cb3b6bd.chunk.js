(this.webpackJsonppiotroskifscore=this.webpackJsonppiotroskifscore||[]).push([[0],{22:function(e,r,a){e.exports=a(31)},31:function(e,r,a){"use strict";a.r(r);var t=a(0),o=a.n(t),n=a(16),c=a.n(n),s=a(13),l=a(34),i=a(33),d=a(21),u=a(18),m=a(19),p=function(){var e=Object(t.useState)([]),r=Object(d.a)(e,2),a=r[0],n=r[1],c=["ticker","name","score","roa","ocf","deltaroa","accruals","deltacurrent","deltaleverage","deltashares","deltagross","deltaturnover"];Object(u.parse)("data.csv",{download:!0,complete:function(e){var r=[];e.data.map((function(e){var a=c.reduce((function(r,a,t){return r[a]=e[t],r}),{});r.push(a)})),n(r)}});var s=Object(m.useTable)({columns:g,data:a}),l=s.getTableProps,i=s.getTableBodyProps,p=s.headerGroups,h=s.rows,f=s.prepareRow;return 0===a.length?o.a.createElement("p",null,"Loading from CSV..."):o.a.createElement("table",l(),o.a.createElement("thead",null,p.map((function(e){return o.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return o.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),o.a.createElement("tbody",i(),h.map((function(e,r){return f(e),o.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return o.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))},g=[{accessor:"ticker",Header:"Ticker"},{accessor:"name",Header:"Name"},{accessor:"score",Header:"Piotroski F-Score"},{accessor:"roa",Header:"Return on Assets"},{accessor:"ocf",Header:"Operating Cash Flow"},{accessor:"deltaroa",Header:"Change in ROA"},{accessor:"accruals",Header:"Accruals"},{accessor:"deltacurrent",Header:"Change in Current Ratio"},{accessor:"deltaleverage",Header:"Change in Leverage"},{accessor:"deltashares",Header:"Change in # of Shares"},{accessor:"deltagross",Header:"Change in Gross Margin"},{accessor:"deltaturnover",Header:"Change in Asset Turnover Ratio"}];var h=function(){return o.a.createElement(s.a,null,o.a.createElement("title",null,"Piotroski's F-Score"),o.a.createElement(l.a,{href:"https://en.wikipedia.org/wiki/Piotroski_F-score#:~:text=Piotroski%20F%2Dscore%20is%20a,Stanford%20accounting%20professor%20Joseph%20Piotroski",isExternal:!0},o.a.createElement(i.a,{textAlign:"center"},"Piotroski's F-Score")),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4cb3b6bd.chunk.js.map
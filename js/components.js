const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const peso=n=>"₱"+Number(n).toFixed(2);
const STAT={in:["In Stock","ok","●"],low:["Low Stock","warn","▲"],out:["Out of Stock","bad","✕"]};
const badge=k=>`<span class="badge ${STAT[k][1]}"><i aria-hidden="true">${STAT[k][2]}</i>${STAT[k][0]}</span>`;
function toast(msg){const t=document.createElement("div");t.className="toast";t.textContent=msg;$("#toasts").append(t);setTimeout(()=>t.remove(),3200)}
function openModal(html){$("#mbox").innerHTML=html;$("#modal").hidden=false;const f=$("#mbox button,#mbox input");f&&f.focus()}
function closeModal(){$("#modal").hidden=true}
function kpi(i,l,v,s){return `<div class="kpi"><span class="ci" aria-hidden="true">${i}</span><div><small>${l}</small><strong>${v}</strong><em>${s}</em></div></div>`}
function medCard(m,tag){const st=m.price>8?"low":"in",n=3+m.id*2;
 return `<article class="card med"><div class="row"><h4>${m.name}</h4><span class="tag">${tag||(m.type==="generic"?"Generic equivalent":"Brand")}</span></div>
 <p class="mut">${m.brand} · ${m.ing} · ${m.dose} · ${m.form}</p><div class="price">${peso(m.price)}</div>
 <div class="row">${badge(st)}<span class="mut">${n} pharmacies · ${(0.4+m.id*0.3).toFixed(1)} km · updated ${m.id*3}m ago</span></div>
 <div class="row"><button class="btn ghost" data-act="detail" data-id="${m.id}">View Details</button><button class="btn" data-act="reserve" data-id="${m.id}">Reserve</button></div></article>`}
function pharmCard(p,m){return `<article class="card ph"><div class="row"><h4>${p.name}</h4><span class="badge ${p.open?"ok":"bad"}">${p.open?"Open":"Closed"}</span></div>
 <p class="mut">${p.dist} km · ${p.addr}<br>${p.hours}</p><div class="row"><span>${m.name} <b>${peso(m.price)}</b></span>${badge(p.stock)}</div>
 <p class="mut">Updated 12 min ago</p><div class="row"><button class="btn ghost" data-act="pharm" data-id="${p.id}">Details</button><button class="btn" data-act="reserve" data-id="${m.id}" data-ph="${p.id}" ${p.stock==="out"?"disabled":""}>Reserve</button></div></article>`}
function table(cols,rows){return `<div class="tw"><table><thead><tr>${cols.map(c=>`<th scope="col">${c}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td data-l="${cols[i]}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`}

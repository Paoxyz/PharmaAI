// Mock data only — swap these for API calls later.
const DB = {
 meds:[
 {id:1,name:"Biogesic 500mg",brand:"Biogesic",ing:"Paracetamol",dose:"500mg",form:"Tablet",price:8.5,type:"brand"},
 {id:2,name:"Paracetamol 500mg",brand:"Generic",ing:"Paracetamol",dose:"500mg",form:"Tablet",price:2.5,type:"generic"},
 {id:3,name:"Tempra 500mg",brand:"Tempra",ing:"Paracetamol",dose:"500mg",form:"Tablet",price:7,type:"brand"},
 {id:4,name:"Neozep Forte",brand:"Neozep",ing:"Phenylephrine + Chlorphenamine + Paracetamol",dose:"10/2/500mg",form:"Tablet",price:9,type:"brand"},
 {id:5,name:"Amoxicillin 500mg",brand:"Generic",ing:"Amoxicillin",dose:"500mg",form:"Capsule",price:12,type:"generic"},
 {id:6,name:"Mefenamic Acid 500mg",brand:"Generic",ing:"Mefenamic Acid",dose:"500mg",form:"Capsule",price:6,type:"generic"},
 {id:7,name:"Cetirizine 10mg",brand:"Generic",ing:"Cetirizine",dose:"10mg",form:"Tablet",price:5,type:"generic"}],
 pharmacies:[
 {id:1,name:"Mercury Care Pharmacy",lat:6.9214,lng:122.0790,dist:0.4,open:true,hours:"7:00 AM – 10:00 PM",addr:"Mayor Jaldon St, Zamboanga City",phone:"(062) 555-0101",stock:"in",verified:true},
 {id:2,name:"CityMed Drugstore",lat:6.9130,lng:122.0730,dist:0.9,open:true,hours:"8:00 AM – 9:00 PM",addr:"Veterans Ave, Zamboanga City",phone:"(062) 555-0142",stock:"low",verified:true},
 {id:3,name:"Healthline Pharmacy",lat:6.9290,lng:122.0860,dist:1.4,open:false,hours:"9:00 AM – 6:00 PM",addr:"Gov. Lim Ave, Zamboanga City",phone:"(062) 555-0177",stock:"in",verified:true},
 {id:4,name:"Botica Familia",lat:6.9050,lng:122.0660,dist:2.1,open:true,hours:"24 hours",addr:"Tetuan, Zamboanga City",phone:"(062) 555-0190",stock:"out",verified:false},
 {id:5,name:"WellCare Rx",lat:6.9480,lng:122.0800,dist:2.8,open:true,hours:"8:00 AM – 11:00 PM",addr:"Putik, Zamboanga City",phone:"(062) 555-0123",stock:"in",verified:true}],
 inventory:["Paracetamol 500mg","Biogesic 500mg","Amoxicillin 500mg","Cetirizine 10mg","Mefenamic Acid 500mg","Losartan 50mg","Metformin 500mg","Omeprazole 20mg","Ibuprofen 200mg","Salbutamol Inhaler","Vitamin C 500mg","Loperamide 2mg"].map((m,i)=>({id:i+1,name:m,ing:m.split(" ")[0],batch:"P-"+(2048+i*7),stock:[18,142,60,95,9,0,210,33,76,12,300,41][i],price:+(2+i*1.7).toFixed(2),expiry:"2026-"+String(10+(i%3)).padStart(2,"0")+"-"+String(10+i).padStart(2,"0"),updated:(i+1)+"h ago"})),
 users:[["Maria Reyes","Consumer","Active"],["Jon Dela Cruz","Consumer","Active"],["Mercury Care","Vendor","Verified"],["CityMed","Vendor","Verified"],["Botica Familia","Vendor","Pending"]],
 nlp:[["cheap alternative to Biogesic","Generic → Paracetamol","97%"],["medicine with paracetamol","Ingredient match","99%"],["pang-ubo gamot","Needs review","61%"],["amoxicilin 500","Spell-corrected","93%"]],
 forecast:{hist:[22,25,24,30,28,33,31,29,35,38,36,40,42,39,44,41,45,47,46,50,48,52,55,53,57,60,58,62,64,61],pred:[66,70,74,80,86,92,88,84,80,78,76,74,72,70],stock:18}
};

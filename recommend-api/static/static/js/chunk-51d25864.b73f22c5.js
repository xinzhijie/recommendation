(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d25864"],{"2e19":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var r=a("b32d"),o=function(e){return Object(r["a"])({url:"/api/predictionScore/list",method:"post",data:e})},n=function(e){return Object(r["a"])({url:"/api/predictionScore/add",method:"post",data:e})},i=function(e){return Object(r["a"])({url:"/api/predictionScore/generate/".concat(e),method:"post"})}},"405d":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return l}));var r=a("b32d"),o=function(e){return Object(r["a"])({url:"/api/submit/list",method:"post",data:e})},n=function(e){return Object(r["a"])({url:"/api/submit/add",method:"post",data:e})},i=function(e){return Object(r["a"])({url:"/api/submit/get/".concat(e),method:"post"})},l=function(e){return Object(r["a"])({url:"/api/submit/delete/".concat(e),method:"post"})}},"4bb5":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("2fe1"),o=a("2f62"),n=u("computed",o["e"]),i=u("computed",o["c"]),l=u("methods",o["b"]),c=u("methods",o["d"]);function s(e,t){function a(t){function a(a,r){if("string"===typeof r){var o=r,n=a;return t(o,{namespace:e})(n,o)}var i=a,l=p(r||{},{namespace:e});return t(i,l)}return a}return t?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),a(t)):{State:a(n),Getter:a(i),Mutation:a(c),Action:a(l)}}function u(e,t){function a(a,o){return Object(r["a"])((function(r,n){r[e]||(r[e]={});var i,l=(i={},i[n]=a,i);r[e][n]=void 0!==o?t(o,l)[n]:t(l)[n]}))}function o(e,t){if("string"===typeof t){var r=t,o=e;return a(r,void 0)(o,r)}var n=m(t),i=e;return a(i,n)}return o}function m(e){var t=e&&e.namespace;if("string"===typeof t)return"/"!==t[t.length-1]?t+"/":t}function p(e,t){var a={};return[e,t].forEach((function(e){Object.keys(e).forEach((function(t){a[t]=e[t]}))})),a}},ae9a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"0 0 0 0"}},[e._m(0),a("el-row",[a("el-col",{attrs:{push:1,span:22}},[a("el-card",[a("div",{staticStyle:{float:"right"}},[e._v(" 周期产水量："),a("el-input",{staticStyle:{width:"70px"},attrs:{size:"mini"},model:{value:e.range.minNum,callback:function(t){e.$set(e.range,"minNum",t)},expression:"range.minNum"}}),e._v("- "),a("el-input",{staticStyle:{width:"70px"},attrs:{size:"mini"},model:{value:e.range.maxNum,callback:function(t){e.$set(e.range,"maxNum",t)},expression:"range.maxNum"}})],1),1===e.submit.deleted?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addData()}}},[e._v("新增")]):e._e(),1===e.submit.deleted?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.generate()}}},[e._v("生成推荐")]):e._e(),a("el-button",{on:{click:function(t){return e.back()}}},[e._v("返回")]),1===e.submit.deleted?a("div",{staticStyle:{float:"left","margin-right":"10px"}},[a("el-upload",{ref:"upload",attrs:{"show-file-list":!1,"on-success":e.handleSuccess,headers:e.header,data:{createId:e.user.id,submitId:e.$route.params.id},"before-upload":e.beforeUpload,action:"/api/upload/excel"}},[a("el-button",{attrs:{slot:"trigger",type:"primary"},slot:"trigger"},[e._v("导入Excel")])],1)],1):e._e(),a("el-table",{attrs:{data:e.tableData,height:"70vh"}},[a("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"100"}}),a("el-table-column",{attrs:{align:"center",label:"油藏参数"}},[a("el-table-column",{attrs:{align:"center",prop:"cycle",label:"周期",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"perforatingSection",label:"射孔并段",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"perforationThickness",label:"射孔厚度",width:"300"}}),a("el-table-column",{attrs:{align:"center",prop:"perforationLayer",label:"射孔层数"}}),a("el-table-column",{attrs:{align:"center",prop:"perforationPermeability",label:"射孔段渗透率",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"porosityPerforationSection",label:"射孔段孔隙度",width:"300"}}),a("el-table-column",{attrs:{align:"center",prop:"reservoirThickness",label:"油藏厚度",width:"120"}})],1),a("el-table-column",{attrs:{align:"center",label:"注剂参数"}},[a("el-table-column",{attrs:{align:"center",prop:"noteType",label:"注剂类型"}}),a("el-table-column",{attrs:{align:"center",prop:"injectionPattern",label:"注入方式",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"noteDose",label:"注剂量",width:"120"}})],1),a("el-table-column",{attrs:{align:"center",label:"注气参数"}},[a("el-table-column",{attrs:{align:"center",prop:"steamInjectionIntensity",label:"注汽强度",width:"300"}}),a("el-table-column",{attrs:{align:"center",prop:"numberDays",label:"注入天数"}}),a("el-table-column",{attrs:{align:"center",prop:"oilPressure",label:"油压"}}),a("el-table-column",{attrs:{align:"center",prop:"periodicSteamInjection",label:"周期注汽量"}})],1),a("el-table-column",{attrs:{align:"center",label:"生产参数"}},[a("el-table-column",{attrs:{align:"center",prop:"soakThePressure",label:"焖井压力",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"soakTime",label:"焖井时间",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"productionCycle",label:"周期生产",width:"300"}}),a("el-table-column",{attrs:{align:"center",prop:"cycleOilProduction",label:"周期产油量"}}),a("el-table-column",{attrs:{align:"center",prop:"periodicYield",label:"周期产水量"}})],1),a("el-table-column",{attrs:{label:"周期产水量",width:"100",align:"center",prop:"periodicYield",fixed:"right"}})],1)],1)],1)],1),a("el-dialog",{attrs:{visible:e.dialogOrgVisible},on:{"update:visible":function(t){e.dialogOrgVisible=t}}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"text",staticStyle:{"max-height":"40em",overflow:"auto"}},[a("el-form",{ref:"model",attrs:{"label-width":"100px",model:e.formData}},[a("el-form-item",{attrs:{label:"周期： ",prop:"name"}},[a("el-input",{model:{value:e.formData.cycle,callback:function(t){e.$set(e.formData,"cycle",t)},expression:"formData.cycle"}})],1),a("el-form-item",{attrs:{label:"射孔并段： ",prop:"name"}},[a("el-input",{model:{value:e.formData.perforatingSection,callback:function(t){e.$set(e.formData,"perforatingSection",t)},expression:"formData.perforatingSection"}})],1),a("el-form-item",{attrs:{label:"射孔厚度： ",prop:"name"}},[a("el-input",{model:{value:e.formData.perforationThickness,callback:function(t){e.$set(e.formData,"perforationThickness",t)},expression:"formData.perforationThickness"}})],1),a("el-form-item",{attrs:{label:"射孔层数： ",prop:"name"}},[a("el-input",{model:{value:e.formData.perforationLayer,callback:function(t){e.$set(e.formData,"perforationLayer",t)},expression:"formData.perforationLayer"}})],1),a("el-form-item",{attrs:{label:"油藏厚度： ",prop:"name"}},[a("el-input",{model:{value:e.formData.reservoirThickness,callback:function(t){e.$set(e.formData,"reservoirThickness",t)},expression:"formData.reservoirThickness"}})],1),a("el-form-item",{attrs:{label:"射孔段渗透率： ",prop:"name"}},[a("el-input",{model:{value:e.formData.perforationPermeability,callback:function(t){e.$set(e.formData,"perforationPermeability",t)},expression:"formData.perforationPermeability"}})],1),a("el-form-item",{attrs:{label:"射孔段孔隙度： ",prop:"name"}},[a("el-input",{model:{value:e.formData.porosityPerforationSection,callback:function(t){e.$set(e.formData,"porosityPerforationSection",t)},expression:"formData.porosityPerforationSection"}})],1),a("el-form-item",{attrs:{label:"注剂类型： ",prop:"name"}},[a("el-input",{model:{value:e.formData.noteType,callback:function(t){e.$set(e.formData,"noteType",t)},expression:"formData.noteType"}})],1),a("el-form-item",{attrs:{label:"注入方式： ",prop:"name"}},[a("el-input",{model:{value:e.formData.injectionPattern,callback:function(t){e.$set(e.formData,"injectionPattern",t)},expression:"formData.injectionPattern"}})],1),a("el-form-item",{attrs:{label:"注剂量： ",prop:"name"}},[a("el-input",{model:{value:e.formData.noteDose,callback:function(t){e.$set(e.formData,"noteDose",t)},expression:"formData.noteDose"}})],1),a("el-form-item",{attrs:{label:"注汽强度： ",prop:"name"}},[a("el-input",{model:{value:e.formData.steamInjectionIntensity,callback:function(t){e.$set(e.formData,"steamInjectionIntensity",t)},expression:"formData.steamInjectionIntensity"}})],1),a("el-form-item",{attrs:{label:"注入天数： ",prop:"name"}},[a("el-input",{model:{value:e.formData.numberDays,callback:function(t){e.$set(e.formData,"numberDays",t)},expression:"formData.numberDays"}})],1),a("el-form-item",{attrs:{label:"油压： ",prop:"name"}},[a("el-input",{model:{value:e.formData.oilPressure,callback:function(t){e.$set(e.formData,"oilPressure",t)},expression:"formData.oilPressure"}})],1),a("el-form-item",{attrs:{label:"周期注汽量： ",prop:"name"}},[a("el-input",{model:{value:e.formData.periodicSteamInjection,callback:function(t){e.$set(e.formData,"periodicSteamInjection",t)},expression:"formData.periodicSteamInjection"}})],1),a("el-form-item",{attrs:{label:"焖井压力： ",prop:"name"}},[a("el-input",{model:{value:e.formData.soakThePressure,callback:function(t){e.$set(e.formData,"soakThePressure",t)},expression:"formData.soakThePressure"}})],1),a("el-form-item",{attrs:{label:"焖井时间： ",prop:"name"}},[a("el-input",{model:{value:e.formData.soakTime,callback:function(t){e.$set(e.formData,"soakTime",t)},expression:"formData.soakTime"}})],1),a("el-form-item",{attrs:{label:"周期生产： ",prop:"name"}},[a("el-input",{model:{value:e.formData.productionCycle,callback:function(t){e.$set(e.formData,"productionCycle",t)},expression:"formData.productionCycle"}})],1),a("el-form-item",{attrs:{label:"周期产液量： ",prop:"name"}},[a("el-input",{model:{value:e.formData.periodicLiquidProduction,callback:function(t){e.$set(e.formData,"periodicLiquidProduction",t)},expression:"formData.periodicLiquidProduction"}})],1),a("el-form-item",{attrs:{label:"周期产油量： ",prop:"name"}},[a("el-input",{model:{value:e.formData.cycleOilProduction,callback:function(t){e.$set(e.formData,"cycleOilProduction",t)},expression:"formData.cycleOilProduction"}})],1),a("el-form-item",{attrs:{label:"周期产水量： ",prop:"name"}},[a("el-input",{model:{value:e.formData.periodicYield,callback:function(t){e.$set(e.formData,"periodicYield",t)},expression:"formData.periodicYield"}})],1)],1)],1)]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.clickNode()}}},[e._v("确 定")])],1)],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"text-align":"center"}},[a("h2",[e._v("推荐油藏")])])}],n=a("d4ec"),i=a("bee2"),l=a("262e"),c=a("2caf"),s=a("9ab4"),u=a("4bb5"),m=a("60a3"),p=a("5274"),f=a("2e19"),d=a("405d"),b=Object(u["a"])("user"),h=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.tableData=[],e.header={token:Object(p["a"])()},e.submit={},e.range={minNum:"",maxNum:""},e.formData={cycle:"12",perforatingSection:"12",perforationThickness:"12",perforationLayer:"12",reservoirThickness:"12",perforationPermeability:"12",porosityPerforationSection:"12",noteType:"12",injectionPattern:"12",noteDose:"12",steamInjectionIntensity:"12",numberDays:"12",oilPressure:"12",periodicSteamInjection:"12",soakThePressure:"12",soakTime:"12",productionCycle:"12",periodicLiquidProduction:"12",cycleOilProduction:"12",periodicYield:"12",submitId:""},e.dialogOrgVisible=!1,e}return Object(i["a"])(a,[{key:"back",value:function(){window.history.go(-1)}},{key:"handleSuccess",value:function(e,t,a){this.list()}},{key:"beforeUpload",value:function(e){var t=e.size/1024/1024<1;return!!t||(this.$message({message:"上传的Excel文件不能大于1mb.",type:"warning"}),!1)}},{key:"list",value:function(){var e=this;Object(f["c"])({submitId:this.$route.params.id}).then((function(t){e.tableData=t.data}))}},{key:"addData",value:function(){this.dialogOrgVisible=!0}},{key:"clickNode",value:function(){var e=this;Object(f["a"])(this.formData).then((function(t){e.list()})),this.dialogOrgVisible=!1}},{key:"generate",value:function(){var e=this;Object(f["b"])(this.$route.params.id).then((function(t){e.tableData=t.data,Object(d["c"])(e.$route.params.id).then((function(t){e.submit=t.data}))}))}},{key:"handleClose",value:function(){this.dialogOrgVisible=!1}},{key:"created",value:function(){var e=this;this.formData.submitId=this.$route.params.id,Object(d["c"])(this.$route.params.id).then((function(t){e.submit=t.data})),this.list()}}]),a}(m["b"]);Object(s["a"])([b.State((function(e){return e.user}))],h.prototype,"user",void 0),h=Object(s["a"])([Object(m["a"])({name:"index"})],h);var v=h,D=v,y=a("2877"),g=Object(y["a"])(D,r,o,!1,null,null,null);t["default"]=g.exports}}]);
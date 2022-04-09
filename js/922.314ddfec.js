"use strict";(self["webpackChunkhex_vue_cli"]=self["webpackChunkhex_vue_cli"]||[]).push([[922],{331:function(a,t,e){e.d(t,{Z:function(){return w}});var l=e(252),n=e(577);const s={"aria-label":"Page navigation example"},i={class:"pagination"},o={key:0,class:"page-item"},d={key:0,class:"page-item"},r=["onClick"],c={key:1,class:"page-item disabled"},u=["onClick"],p={key:1,class:"page-item"};function g(a,t,e,g,m,b){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("ul",i,[e.data?.has_pre?((0,l.wg)(),(0,l.iD)("li",o,[(0,l._)("button",{type:"button",class:"page-link",onClick:t[0]||(t[0]=a=>b.changePage(e.data?.current_page-1))}," 上一頁 ")])):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.data?.total_pages,(a=>((0,l.wg)(),(0,l.iD)(l.HY,{key:a},[a!=e.data?.current_page?((0,l.wg)(),(0,l.iD)("li",d,[(0,l._)("button",{type:"button",class:"page-link",onClick:t=>b.changePage(a)},(0,n.zw)(a),9,r)])):((0,l.wg)(),(0,l.iD)("li",c,[(0,l._)("button",{type:"button",class:"page-link",onClick:t=>b.changePage(a)},(0,n.zw)(a),9,u)]))],64)))),128)),e.data?.has_next?((0,l.wg)(),(0,l.iD)("li",p,[(0,l._)("button",{type:"button",class:"page-link",onClick:t[1]||(t[1]=a=>b.changePage(e.data?.current_page+1))}," 下一頁 ")])):(0,l.kq)("",!0)])])}var m={methods:{changePage(a){this.$emit("return-page",a)}},props:["data"]},b=e(744);const _=(0,b.Z)(m,[["render",g]]);var w=_},922:function(a,t,e){e.r(t),e.d(t,{default:function(){return ka}});var l=e(252),n=e(577);const s=a=>((0,l.dD)("data-v-1a5561e3"),a=a(),(0,l.Cn)(),a),i=s((()=>(0,l._)("h1",{class:"h3"},"商品列表",-1))),o={class:"table table-hover table-striped table-borderless shadow","data-aos":"zoom-in"},d=s((()=>(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"percenTwenly"},"產品名稱"),(0,l._)("th",{class:"percenTwenly"},"原價"),(0,l._)("th",{class:"percenTwenly"},"售價"),(0,l._)("th",{class:"percenTwenly"},"是否啟用"),(0,l._)("th",{class:"percenTwenly"},"查看細節")])],-1))),r={key:0,class:"rounded-2 bg-success p-1"},c={key:1,class:"rounded-2 bg-danger p-1"},u=["onClick"],p=["onClick"];function g(a,t,e,s,g,m){const b=(0,l.up)("Pagination"),_=(0,l.up)("deleteProduct"),w=(0,l.up)("updateProduct");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("button",{type:"button",onClick:t[0]||(t[0]=a=>g.temp={}),class:"btn btn-success","data-bs-toggle":"modal","data-bs-target":"#productDetail"}," 新增商品 "),(0,l.Uk)(" "+(0,n.zw)(a.text)+" ",1),(0,l._)("table",o,[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.products,(a=>((0,l.wg)(),(0,l.iD)("tr",{key:a},[(0,l._)("td",null,(0,n.zw)(a.title),1),(0,l._)("td",null,[(0,l._)("del",null,(0,n.zw)(a.origin_price),1)]),(0,l._)("td",null,(0,n.zw)(a.price),1),(0,l._)("td",null,[a.is_enabled?((0,l.wg)(),(0,l.iD)("span",r,"啟用")):((0,l.wg)(),(0,l.iD)("span",c,"未啟用"))]),(0,l._)("td",null,[(0,l._)("button",{type:"button",onClick:t=>g.temp={...a},class:"btn btn-secondary","data-bs-toggle":"modal","data-bs-target":"#productDetail"}," 編輯 ",8,u),(0,l._)("button",{type:"button",class:"btn btn-danger ms-2",onClick:t=>g.temp={...a},"data-bs-toggle":"modal","data-bs-target":"#deleteModal"},"刪除",8,p)])])))),128))])]),(0,l.Wm)(b,{data:g.pagination,onReturnPage:m.getProducts},null,8,["data","onReturnPage"]),(0,l.Wm)(_,{data:g.temp,onRenderProducts:m.getProducts},null,8,["data","onRenderProducts"]),(0,l.Wm)(w,{data:g.temp,onRenderProducts:m.getProducts},null,8,["data","onRenderProducts"])],64)}var m=e(669),b=e.n(m),_=e(810),w=e(331);const h={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},D={class:"modal-dialog"},y={class:"modal-content"},k=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除商品")],-1),v={class:"modal-body"},P=(0,l.Uk)("確定刪除 "),f={class:"text-danger"},x=(0,l.Uk)(" 商品？"),C={class:"modal-footer"},U=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Close"},"取消",-1);function O(a,t,e,s,i,o){return(0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",D,[(0,l._)("div",y,[k,(0,l._)("div",v,[(0,l._)("p",null,[P,(0,l._)("span",f,(0,n.zw)(e.data?.title),1),x])]),(0,l._)("div",C,[U,(0,l._)("button",{onClick:t[0]||(t[0]=(...a)=>o.deleteProduct&&o.deleteProduct(...a)),"data-bs-dismiss":"modal",type:"button",class:"btn btn-danger"},"刪除")])])])])}var z={methods:{renderProducts(){this.$emit("render-products")},deleteProduct(){b()["delete"](`https://vue3-course-api.hexschool.io/v2/api/guitimliu/admin/product/${this.data.id}`).then((()=>{alert("已成功刪除商品"),this.renderProducts()})).catch((()=>{}))}},props:["data"]},I=e(744);const M=(0,I.Z)(z,[["render",O]]);var V=M,Z=e(963);const q={class:"modal fade",id:"productDetail",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},R={class:"modal-dialog"},$={class:"modal-content"},H={class:"modal-header"},L={key:0,class:"modal-title",id:"exampleModalLabel"},T={key:1,class:"modal-title",id:"exampleModalLabel"},Y={class:"ms-2"},F=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),K={class:"modal-body"},W={class:"list-unstyled"},N={class:"py-1"},j=(0,l._)("label",{for:"productName",class:"form-label"}," 商品標題 ",-1),S={class:"py-1"},A=(0,l._)("label",{for:"productCategory",class:"form-label"}," 商品分類 ",-1),B={class:"py-1"},E=(0,l._)("label",{for:"productDescription",class:"form-label"}," 商品描述 ",-1),G={class:"py-1"},J=(0,l._)("label",{for:"productContent",class:"form-label"}," 商品內容 ",-1),Q={class:"py-1"},X=(0,l._)("label",{for:"productPrice",class:"form-label"}," 商品價格 ",-1),aa={class:"py-1"},ta={class:"py-1"},ea=(0,l._)("label",{for:"setOriginPrice",class:"form-check-label ms-1"}," 此價格為特價，輸入商品原價 ",-1),la={key:0,class:"py-1"},na=(0,l._)("label",{for:"productOriginPrice",class:"form-label"}," 商品原價 ",-1),sa={key:0,class:"py-1"},ia={class:"h2 text-danger"},oa=(0,l.Uk)(),da={key:0},ra=(0,l.Uk)(" / 元 "),ca={class:"py-1"},ua=(0,l._)("label",{for:"productImages"},"圖片",-1),pa={class:"py-3"},ga=["src"],ma={class:"text-end py-3"};function ba(a,t,e,s,i,o){const d=(0,l.up)("datalate");return(0,l.wg)(),(0,l.iD)("div",q,[(0,l._)("div",R,[(0,l._)("div",$,[(0,l._)("div",H,[a.is_edit?((0,l.wg)(),(0,l.iD)("h5",L,"編輯商品")):((0,l.wg)(),(0,l.iD)("h5",T,"新增商品")),(0,l._)("div",Y,[i.newData.is_enabled?((0,l.wg)(),(0,l.iD)("button",{key:0,onClick:t[0]||(t[0]=a=>i.newData.is_enabled=!i.newData.is_enabled),class:"btn btn-success"},"啟用")):((0,l.wg)(),(0,l.iD)("button",{key:1,onClick:t[1]||(t[1]=a=>i.newData.is_enabled=!i.newData.is_enabled),class:"btn btn-danger"},"未啟用"))]),F]),(0,l._)("div",K,[(0,l._)("ul",W,[(0,l._)("li",N,[j,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"productName","onUpdate:modelValue":t[2]||(t[2]=a=>i.newData.title=a)},null,512),[[Z.nr,i.newData.title]])]),(0,l._)("li",S,[A,(0,l.wy)((0,l._)("input",{type:"text",id:"productCategory",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=a=>i.newData.category=a)},null,512),[[Z.nr,i.newData.category]])]),(0,l._)("li",B,[E,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"productDescription","onUpdate:modelValue":t[4]||(t[4]=a=>i.newData.description=a)},null,512),[[Z.nr,i.newData.description]])]),(0,l._)("li",G,[J,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"productContent","onUpdate:modelValue":t[5]||(t[5]=a=>i.newData.content=a),rows:"3"},null,512),[[Z.nr,i.newData.content]])]),(0,l._)("li",Q,[X,(0,l.wy)((0,l._)("input",{type:"number",min:"0",class:"form-control",id:"productPrice","onUpdate:modelValue":t[6]||(t[6]=a=>i.newData.price=a)},null,512),[[Z.nr,i.newData.price]])]),(0,l._)("li",aa,[(0,l._)("div",ta,[(0,l.wy)((0,l._)("input",{type:"checkbox",class:"form-check-input",id:"setOriginPrice","onUpdate:modelValue":t[7]||(t[7]=a=>i.setOriginPrice=a)},null,512),[[Z.e8,i.setOriginPrice]]),ea]),i.setOriginPrice?((0,l.wg)(),(0,l.iD)("div",la,[na,(0,l.wy)((0,l._)("input",{type:"number",min:"0",class:"form-control",id:"productOriginPrice","onUpdate:modelValue":t[8]||(t[8]=a=>i.newData.origin_price=a)},null,512),[[Z.nr,i.newData.origin_price]])])):(0,l.kq)("",!0)]),i.newData.price?((0,l.wg)(),(0,l.iD)("li",sa,[(0,l._)("span",ia,(0,n.zw)(i.newData.price),1),oa,i.setOriginPrice?((0,l.wg)(),(0,l.iD)("del",da,(0,n.zw)(i.newData.origin_price),1)):(0,l.kq)("",!0),ra])):(0,l.kq)("",!0),(0,l._)("li",ca,[ua,(0,l._)("input",{type:"file",id:"productImages",class:"productImages",onChange:t[9]||(t[9]=(...a)=>o.uploadImage&&o.uploadImage(...a))},null,32),(0,l._)("div",pa,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.newData.imagesUrl,((a,t)=>((0,l.wg)(),(0,l.j4)(d,{key:t},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a,alt:"圖片",class:"w-100"},null,8,ga)])),_:2},1024)))),128))])]),(0,l._)("li",ma,[(0,l._)("button",{onClick:t[10]||(t[10]=(...a)=>o.pushData&&o.pushData(...a)),"data-bs-dismiss":"modal",type:"button",class:"btn btn-success rounded-2 w-25 ms-2"},"送出")])])])])])])}var _a={data(){return{setOriginPrice:!0,newData:{}}},props:["data"],watch:{data(){this.newData=this.data,this.setOriginPrice=this.newData.origin_price!==this.newData.price}},methods:{pushData(){let a;a=this.newData.id?"put":"post",this.setOriginPrice||(this.newData.origin_price=this.newData.price),void 0===this.newData.id&&(this.newData.id=""),b()[a](`https://vue3-course-api.hexschool.io/v2/api/guitimliu/admin/product/${this.newData.id}`,{data:{title:this.newData.title,category:this.newData.category,origin_price:parseFloat(this.newData.origin_price),price:parseFloat(this.newData.price),unit:"個",description:this.newData.description,content:this.newData.content,is_enabled:this.newData.is_enabled,imageUrl:this.newData.imageUrl,imagesUrl:this.newData.imagesUrl}}).then((a=>{alert(a.data.message),this.$emit("render-products")})).catch((()=>{alert("資料有誤")}))},uploadImage(){const a=document.querySelector("#productImages");console.log(a);const t=a.files,e=new FormData;e.append("file-to-upload",t[0]),b().post("https://vue3-course-api.hexschool.io/v2/api/guitimliu/admin/upload/",e).then((a=>{this.newData.imageUrl=a.data.imageUrl,this.newData.imagesUrl||(this.newData.imagesUrl=[]),this.newData.imagesUrl.push(this.newData.imageUrl)})).catch((()=>{}))}}};const wa=(0,I.Z)(_a,[["render",ba]]);var ha=wa,Da={components:{Pagination:w.Z,deleteProduct:V,updateProduct:ha},data(){return{products:null,pagination:null,temp:null}},methods:{getProducts(a=1){b().get(`https://vue3-course-api.hexschool.io/v2/api/guitimliu/admin/products?page=${a}`).then((a=>{this.products=a.data.products,this.pagination=a.data.pagination})).catch((()=>{}))}},mounted(){(0,_.Z)(),this.getProducts()}};const ya=(0,I.Z)(Da,[["render",g],["__scopeId","data-v-1a5561e3"]]);var ka=ya}}]);
//# sourceMappingURL=922.314ddfec.js.map
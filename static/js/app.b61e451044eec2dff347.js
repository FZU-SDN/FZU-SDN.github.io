webpackJsonp([1],{"+bes":function(t,e){},"0NMd":function(t,e,n){t.exports=n.p+"static/img/show.4a88e42.jpg"},"56ZB":function(t,e){},"5iED":function(t,e){},"7qKB":function(t,e){},Cx5Z:function(t,e){},GAZ6:function(t,e,n){t.exports=n.p+"static/img/show.46f3cba.jpg"},HYSc:function(t,e,n){t.exports=n.p+"static/img/show.7c8517c.jpg"},IEId:function(t,e){},KgBB:function(t,e){},L00o:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xd7I"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("C7Lr")({name:"App"},o,!1,function(t){n("KgBB")},null,null).exports,r=n("7LQH"),s=n("a3Yh"),c=n.n(s);var l={mainPageInfo:{libName:"SDN未来网络实验室",navContent:["首页","学术论文","学术动态","科研项目","SDN之路","学术团队","招生简介","生活娱乐"],slider:["./slider/0.jpg","./slider/1.png","./slider/2.png"],footerContent:['<div style="font-size:15px;height:50px;width:100%;position:fixed;bottom:0px;display:block;background-color:#545c64;line-height:25px;color:white;"><p><strong></strong>地址：350116，福建省，福州市，学园路，福州大学数学与计算机科学学院2号楼504-2室</p>        <p>Copyright@福州大学 SDN未来网络实验室 All Rights Reserved</p></div>']}},p=n("ZLEe"),h=n.n(p),d=(n("0Nqt"),n("hBSA"),{name:"mainPage",components:{},data:function(){return{constPath:"../../static/首页展示/",showImg:l.mainPageInfo.slider}},computed:{imgCnt:function(){return h()(this.showImg).length},imgPath:function(){for(var t=[],e=0;e<this.showImg.length;e++)t.push(this.constPath+this.showImg[e]);return t}},created:function(){},methods:{func:function(){console.log(this.showImg)}}}),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainPage"}},[n("el-carousel",{attrs:{height:"calc(100vh - 111px)"}},t._l(t.imgCnt,function(e){return n("el-carousel-item",{key:e.id},[n("img",{staticStyle:{"margin-top":"calc((100vh - 111px)/2)",transform:"translateY(-50%)",height:"80vh"},attrs:{src:t.imgPath[e-1]}})])}),1)],1)},staticRenderFns:[]};var f=n("C7Lr")(d,m,!1,function(t){n("L00o")},null,null).exports;var g={teacherInfo:[["张栋","SDN网络","副教授","张栋.jpg",""],["朱丹红","","","朱丹红.jpg",""]]};var u={graduateInfo:[["汪培侨","数据平面，FPGA","2018级","./2018级/汪培侨.jpg","https://peiqiaowang.github.io/personal"],["陈翔","SDN数据平面可编程","2019级","./2019级/陈翔.png","https://wasdns.github.io/Hall-of-Fame/"],["刘宇欣","数据中心，拥塞控制","2015级","./2015级/刘宇欣.jpg","https://yuxinliu.github.io"],["彭建云","歌声合成，IoT技术研究","2015级","./2015级/彭建云.jpg","https://sstriver.github.io/sdnlab/"],["张为凡","软件定义网络","2015级","./2015级/张为凡.png","https://keepthebeats.github.io/"],["高仁贵","SDN/NFV","2016级","./2016级/高仁贵.jpg","http://www.cnblogs.com/grglym/ "],["何斌杰","SDN/NFV","2016级","./2016级/何斌杰.jpg","275640880@qq.com"],["李洪","运动手环,Android App开发","2017级","./2017级/李洪.jpg","511758077@qq.com"],["林翔","SDN","2017级","./2017级/林翔.jpg","bazinga4869.github.io"],["孙敏铭","SDN/故障恢复","2017级","","https://www.cnblogs.com/sunminming/"],["叶倩兰","SDN","2017级","./2017级/叶倩兰.jpg","chochi1st.github.io"],["张合胜","网络安全","2017级","./2017级/张合胜.jpg","https://maskerk.github.io"],["张瑞","SDN","2017级","/2017级/张瑞.jpg","15563952639@163.com"],["卞文涛","SDN","2018级","","604718015@qq.com"],["陈俞锦","SDN/AI","2018级","","124672851@qq.com"],["李陈辉","SDN","2018级","","ilinf@foxmail.com"],["潘锡意","SDN/P4","2018级","","https://www.cnblogs.com/Pan-xi-yi/"],["张瑞","SDN","2018级","/2017级/张瑞.jpg","15563952639@163.com"]]};var v={bachelorInfo:[["黄志文","数据平面可编程","2014级","./2014级/黄志文.jpg","superhzw.github.io"],["肖小强","网络","2015级","./2015级/肖小强.jpg","http://faberry.github.io/"],["杨艺","ONOS研究","2015级","./2015级/杨艺.png","deepYY.github.io"],["陈俞辛","SDN","2016级","./2016级/陈俞辛.jpg","cyx835599652@qq.com"],["胡展瑞","SDN","2016级","./2016级/胡展瑞.jpg","876336895@qq.com"],["刘宏岩","SDN","2016级","./2016级/刘宏岩.jpg","405383051@qq.com"],["赵畅","SDWan研究","2016级","./2016级/赵畅.jpg","www.zcplayground.cc"],["周政演","SDN","2016级","./2016级/周政演.jpg","616923882@qq.com"]]},_={name:"academicTeam",data:function(){return{constTeacherPath:"../../static/学术团队/教师/",teacherInfo:g.teacherInfo,constGraduatePath:"../../static/学术团队/研究生/",graduateInfo:u.graduateInfo,constBachelorPath:"../../static/学术团队/本科生/",bachelorInfo:v.bachelorInfo,nonePhoto:"../../static/学术团队/config_file/nonePhoto.jpg"}},computed:{newTeacherInfo:function(){for(var t=[],e=[],n=0;n<this.teacherInfo.length;n++){t=[];for(var i=0;i<this.teacherInfo[0].length;i++)3!=i?t.push(this.teacherInfo[n][i]):t.push(this.constTeacherPath+this.teacherInfo[n][i]);e.push(t)}return e},newGraduateInfo:function(){for(var t=[],e=[],n=0;n<this.graduateInfo.length;n++){t=[];for(var i=0;i<this.graduateInfo[0].length;i++)3!=i?t.push(this.graduateInfo[n][i]):t.push(this.constGraduatePath+this.graduateInfo[n][i]);e.push(t)}return e},newBachelorInfo:function(){for(var t=[],e=[],n=0;n<this.bachelorInfo.length;n++){t=[];for(var i=0;i<this.bachelorInfo[0].length;i++)3!=i?t.push(this.bachelorInfo[n][i]):t.push(this.constBachelorPath+this.bachelorInfo[n][i]);e.push(t)}return e}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"20px",border:"5px solid gray",width:"80vw","margin-left":"10vw","margin-bottom":"60px"},attrs:{id:"academicTeam"}},[i("img",{staticStyle:{width:"80vw",height:"30vh",border:"1px solid gray"},attrs:{src:n("GAZ6")}}),t._v(" "),""!=t.newTeacherInfo?i("div",[i("h1",{staticStyle:{"margin-top":"30px","margin-left":"50px","margin-bottom":"20px","font-size":"30px",color:"#F15A23"},attrs:{align:"left"}},[t._v("Faculty")]),t._v(" "),i("div",{attrs:{id:"teacher"}},t._l(t.newTeacherInfo,function(e){return i("div",[i("div",{staticClass:"teacherItem"},["/"==e[3].slice(-1)?i("div",{attrs:{title:e[4]}},[i("img",{staticStyle:{"border-radius":"10px","box-shadow":"2px 2px 5px #333333"},attrs:{src:t.nonePhoto,width:"114",height:"156"}})]):i("div",[i("img",{staticStyle:{"border-radius":"10px","box-shadow":"2px 2px 5px #333333"},attrs:{src:e[3],width:"114",height:"156"}})]),t._v(" "),""==e[4]?i("div",[i("p",{staticStyle:{color:"black","font-weight":"bold","font-size":"20px"}},[t._v(t._s(e[0]))])]):i("div",[i("a",{staticStyle:{"text-decoration":"none",color:"black","font-weight":"bold"},attrs:{href:e[4],target:"_blank"}},[i("p",{staticStyle:{"font-size":"20px"}},[t._v(t._s(e[0]))])])]),t._v(" "),i("p",{staticStyle:{"font-size":"15px"}},[t._v(t._s(e[1]))]),t._v(" "),i("p",{staticStyle:{"font-size":"15px"}},[t._v(t._s(e[2]))])])])}),0)]):t._e(),t._v(" "),t._m(0),t._v(" "),""!=t.newGraduateInfo?i("div",[i("h1",{staticStyle:{"margin-top":"30px","margin-left":"50px","margin-bottom":"20px","font-size":"30px",color:"#F15A23"},attrs:{align:"left"}},[t._v("Graduate Students")]),t._v(" "),i("div",{attrs:{id:"teacher"}},t._l(t.newGraduateInfo,function(e){return i("div",[i("div",{staticClass:"teacherItem",attrs:{title:e[4]}},["/"==e[3].slice(-1)?i("div",[i("img",{staticStyle:{"border-radius":"10px","box-shadow":"2px 2px 5px #333333"},attrs:{src:t.nonePhoto,width:"114",height:"156"}})]):i("div",[i("img",{staticStyle:{"border-radius":"10px","box-shadow":"2px 2px 5px #333333"},attrs:{src:e[3],width:"114",height:"156"}})]),t._v(" "),i("p",{staticStyle:{color:"black","font-weight":"bold","font-size":"20px"}},[t._v(t._s(e[0]))]),t._v(" "),i("p",{staticStyle:{"font-size":"15px"}},[t._v(t._s(e[1]))]),t._v(" "),i("p",{staticStyle:{"font-size":"15px"}},[t._v(t._s(e[2]))])])])}),0)]):t._e(),t._v(" "),t._m(1),t._v(" "),""!=t.newBachelorInfo?i("div",[i("h1",{staticStyle:{"margin-top":"30px","margin-left":"50px","margin-bottom":"20px","font-size":"30px",color:"#F15A23"},attrs:{align:"left"}},[t._v("Undergraduate Students")]),t._v(" "),i("div",{attrs:{id:"teacher"}},t._l(t.newBachelorInfo,function(e){return i("div",[i("div",{staticClass:"teacherItem",attrs:{title:e[4]}},["/"==e[3].slice(-1)?i("div",[i("img",{staticStyle:{"border-radius":"10px","box-shadow":"2px 2px 5px #333333"},attrs:{src:t.nonePhoto,width:"114",height:"156"}})]):i("div",[i("img",{staticStyle:{"border-radius":"10px","box-shadow":"2px 2px 5px #333333"},attrs:{src:e[3],width:"114",height:"156"}})]),t._v(" "),i("p",{staticStyle:{color:"black","font-weight":"bold","font-size":"20px"}},[t._v(t._s(e[0]))]),t._v(" "),i("p",{staticStyle:{"font-size":"15px"}},[t._v(t._s(e[1]))]),t._v(" "),i("p",{staticStyle:{"font-size":"15px"}},[t._v(t._s(e[2]))])])])}),0)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{margin:"10px"}},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{margin:"10px"}},[e("hr")])}]};var w=n("C7Lr")(_,x,!1,function(t){n("IEId")},null,null).exports;var y={roadInfo:[["Coursera Network History:密歇根大学网络课程","https://www.coursera.org/learn/internet-history"],["SDN Course:2014年SDN课程，需翻墙","https://www.youtube.com/watch?v=I-XdDffLMqc&list=PLpherdrLyny-4Y6jXKvi0Ia9jJAk3M_Bs"],["SDNLAB《重构网络》","https://www.sdnlab.com/book/18762.html"],["mininet安装:通过脚本快速安装Open vSwitch2.3.0和Mininet","https://www.sdnlab.com/3046.html"],["mininet学习指南 李呈","https://www.sdnlab.com/11495.html"],["控制平面:OpenDaylight与Mininet应用实战之基本环境搭建","https://www.sdnlab.com/1749.html"],["控制平面:RYU Github","https://github.com/osrg/ryu"],["控制平面:RYU 入门教程","https://www.sdnlab.com/1785.html"],["控制平面:RYU tutorial","https://ryu.readthedocs.io/en/latest/getting_started.html"],["控制平面:《RYU BOOK》","https://github.com/peiqiaoWang/The-Road-to-SDN/blob/master/RYU/Ryubook.pdf"],["数据平面:OVS基本命令","https://github.com/peiqiaoWang/The-Road-to-SDN/blob/master/OVS/ovs-commands-reference.pdf"],["The Road to P4","https://github.com/Wasdns/The-Road-to-P4"],["Official Website","https://p4.org/"],["2017 FZU P4 Workshop","https://github.com/Wasdns/P4Day17"],["Open SDN Engineer Skill Map: P4","https://github.com/PONOUBA/opensdn_engineer_skill_map/blob/master/skill_map_md/data_plane.md#p4"],["P4 Github: p4lang","https://github.com/p4lang"],["入门论文:《The Road to SDN》",""],["入门论文:《OpenFlow: Enabling Innovation in Campus Networks》",""],["入门论文:《Software-Defined Networking: A Comprehensive Survey》",""],["SDNLAB 实验平台","https://www.sdnlab.com/1749.html"],["SDNLAB SDN Guide","https://www.sdnlab.com/sdn-guide/"]]},b={name:"theRoadofSDN",data:function(){return{roadInfo:y.roadInfo}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"20px",border:"5px solid gray",width:"80vw","margin-left":"10vw"},attrs:{id:"theRoadofSDN"}},[i("img",{staticStyle:{width:"80vw",height:"30vh",border:"1px solid gray"},attrs:{src:n("kmOd")}}),t._v(" "),i("div",{staticStyle:{"margin-bottom":"50px"}}),t._v(" "),i("div",{staticClass:"block"},t._l(t.roadInfo,function(e,n){return i("el-timeline",{key:n},[i("el-timeline-item",[i("el-card",[i("a",{staticStyle:{"text-decoration":"none",color:"#04BFEA","font-size":"20px"},attrs:{href:e[1]}},[t._v(t._s(e[0]))])])],1)],1)}),1)])},staticRenderFns:[]};var I={entertainmentInfo:[["./以前/1024.jpg"],["./以前/1024_2.jpg"],["./以前/1024_3.jpg"],["./以前/1024_4.jpg"],["./以前/1024_5.jpg"],["./2014年/白沙湾.jpg"],["./2014年/白沙湾_3.jpg"],["./2014年/白沙湾_4.jpg"],["./2014年/白沙湾_5.jpg"],["./2014年/白沙湾_5.jpg"],["./2014年/白沙湾20140401.jpg"],["./以前/程序员节.jpg"],["./以前/聚餐.jpg"],["./2013年/三叠井森林公园.jpg"],["./2013年/三叠井森林公园_2.jpg"],["./2013年/三叠井森林公园_3.jpg"],["./2013年/三叠井森林公园_4.jpg"],["./2013年/三叠井森林公园_20130518.jpg"],["./以前/同门小聚.jpg"],["./以前/同门小聚2.jpg"],["./2014年/c.jpg"]]},N={name:"entertainment",data:function(){return{constEntertainmentPath:"../../static/生活娱乐/娱乐照片/",entertainmentInfo:I.entertainmentInfo}},computed:{newEntertainmentInfo:function(){for(var t=[],e=[],n=0;n<this.entertainmentInfo.length;n++){t=[];for(var i=0;i<this.entertainmentInfo[0].length;i++)t.push(this.constEntertainmentPath+this.entertainmentInfo[n][i]);e.push(t)}return e}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"20px",border:"5px solid gray",width:"80vw","margin-left":"10vw","margin-bottom":"60px"},attrs:{id:"entertainment"}},[i("img",{staticStyle:{width:"80vw",height:"30vh",border:"1px solid gray"},attrs:{src:n("RXHQ")}}),t._v(" "),i("div",{staticStyle:{"margin-bottom":"50px"}}),t._v(" "),""!=t.newEntertainmentInfo?i("div",[i("div",{attrs:{id:"picLayout"}},t._l(t.newEntertainmentInfo,function(e,n){return i("div",{staticStyle:{"margin-bottom":"20px"}},[i("div",[i("img",{staticStyle:{width:"22vw","border-radius":"15px","box-shadow":"2px 2px 5px #333333"},attrs:{src:e}})]),t._v(" "),i("span",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v(t._s(t.entertainmentInfo[n][0].split("/").slice(-1)[0].split(".")[0]))])])}),0)]):t._e()])},staticRenderFns:[]};var P={projectInfo:{"纵向项目":["福建省引导性项目，2016Y0060，面向胎盘缺血性疾病的知识图谱构建、挖掘与应用，2016/04-2019/03，15万元，在研，主持。","国家自然科学基金青年项目，81200824，基于隐马尔科夫模型的牙齿漂白机理研究，2013/01-2015/12，23万元，已结题，参加。","福建省卫生教育联合攻关项目，WKJ-FJ-09，基于隐马尔科夫模型的胎盘植入机理研究，2013/10-2016/02，25万元，已结题，参加。","福建省自然科学基金项目，2011J05150，虚拟网络自愈的智能演化模型研究，2011/04-2014/04，3万元，已结题，主持。"],"横向项目":["基于隐马尔科夫的牙齿漂白模型软件（一期），2014/9-2015/9，9万元。","基于深层神经网络的胎盘植入、前置胎盘模型软件，2017/3-2018/3，6万元。"]}},j={name:"researchProject",data:function(){return{projectInfo:P.projectInfo}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"20px",border:"5px solid gray",width:"80vw","margin-left":"10vw","margin-bottom":"60px"},attrs:{id:"researchProject"}},[i("img",{staticStyle:{width:"80vw",height:"30vh",border:"1px solid gray"},attrs:{src:n("HYSc")}}),t._v(" "),t.projectInfo!=[]?i("div",t._l(t.projectInfo,function(e,n){return i("div",{staticStyle:{margin:"18px","margin-bottom":"30px"}},[i("h1",{staticStyle:{margin:"15px"},attrs:{align:""}},[t._v(t._s(n))]),t._v(" "),t._l(e,function(e,n){return i("div",{staticStyle:{"font-size":"19px","margin-left":"15px"},attrs:{align:"left"}},[i("span",[i("i",{staticClass:"el-icon-circle-check",staticStyle:{color:"#04BFEA"}}),t._v(" "+t._s(n+1)+". "+t._s(e))])])})],2)}),0):t._e()])},staticRenderFns:[]};var k={paperInfo:[{year:"2017",paper:["张栋, 郭俊杰, 吴春明. 层次型多中心的SDN控制器部署[J]. 电子学报, 2017, 45(3):680-686.","张栋, 薛锦. 命名数据移动自组织网络节能转发策略[J]. 福州大学学报, 2017, 45(1):63-68.","郭俊杰, 张栋. 面向OpenFlow的内容分发网络视频流传输策略[J]. 福州大学学报, 2017, 45(1):58-62.","张栋, 陈凯, 颜建英,朱丹红, 叶东毅. 基于隐马尔科夫模型的胎盘植入产前诊断方法[J]. 模式识别与人工智能, 2017, 30(4):353-358."]},{year:"2016",paper:["Lin, Xin An, and D. Zhang. Kemy: An AQM generator based on machine learning[C]. International Conference on Communications and NETWORKING in China IEEE, 2016:556-561.","Lin,Qingxiang, and D. Zhang. Traffic-aware compatible controller deployment[C]. International Conference on Communications and NETWORKING in China IEEE, 2016:847-852.","张栋, 苏晓强. 开放模式的软件工程实践教学探索[J]. 计算机教育, 2016, No.259(7):149-153."]},{year:"2015",paper:["潘晓晓, 叶东毅, 颜建英,张栋,杨丹林. 面向胎盘植入产前诊断的医学语义特征提取算法[J]. 模式识别与人工智能, 2015, 28(6):481-489.","王秀, 谢志成, 张栋. 一种基于特征差异度和SVM投票机制的数字音乐语音情感识别算法[J]. 福州大学学报（自然科学版）, 2015(4):460-465."]},{year:"2014",paper:["薛锦, 张栋, 唐滨. 命名数据网络中主动探测的转发策略研究[J]. 计算机工程与应用, 2014, 50(18):89-93.","ZHANG Dong,GAO Long. Virtual Network Mapping Through Locality-aware Topological Potential and Influence Node Ranking[J]. Chinese Journal of Electronics, 2014, 23(CJE-1): 61-64.(电子学报英文版)","谢志成, 张栋. 基于粒子群优化的哼唱语音端点检测算法[J]. 福州大学学报（自然科学版）, 2014, 42(2):195-199.","杨晶菁, 张栋, 余春艳. 以应用为中心的嵌入式系统教学[J]. 计算机教育, 2014(15):75-78."]},{year:"2013",paper:["ZHANG Dong, Chen Xi.RNET: A Reconfigurable Network Emulation Testbed Based on Click Modular Router[J]. Journal of Applied Sciences.2013, 13(22), 5003-5011.","张栋, 高龙. 基于跨层协同的MANET网络拥塞控制算法仿真研究[J]. 云南大学学报自然科学版, 2013, 35(1):26-30.","张栋, 余春艳. 基于校企合作的嵌入式复合型人才培养[J]. 计算机教育, 2013(22):16-18."]},{year:"2012",paper:["张栋, 高龙. 基于双向搜索的虚拟网映射算法[J]. 福州大学学报, 2012(5):572-577.","Zhang Dong. Virtual A study on virtual network decomposing mapping based on network balance, Chinese Journal of Electronics, 4th International Conference on Computational and Information Sciences, IEEE 2012, Chongqing, P.R. China, 2012.8.17-8.19"]},{year:"2011",paper:["齐宁, 王保进, 汪斌强, 张栋. 均衡虚拟网构建算法研究[J]. 电子与信息学报. 2011, 33(6), 35-40."]},{year:"2010",paper:["吴春明, 王保进, 陈均华, 姜明, 张栋. 一种基于游标的多径流量分割算法[J]. 电子学报, 2010, 38(11), 88-92.","黄磊, 吴春明, 姜明, 张栋. REDu:一种新的识别并惩罚非适应流的主动式队列管理算法[J]. 电子学报, 2010, 38(8), 33-36.","张栋, 吴春明, 姜明, 熊伟. 大规模服务覆盖网拓扑设计[J]. 电子与信息学报. 2010, 32(4), 83-87.","张伟, 吴春明, 姜明, 张栋. 一体化承载网络的互斥问题研究[J]. 计算机应用研究. 2010, 27(3), 354-356."]},{year:"2009",paper:["吴春明, 张栋, 姜明. 面向服务提供的一体化承载网络体系结构的探讨[J]. 信息工程大学学报, 2009, 10(1), 27-31.","Zhang Dong, Wu Chunming, Xiong Wei, Jiang Ming, Yu jing. Research on virtual network design based on virtual router, 1st International Conference on Future Information Networks, IEEE 2009. Beijing, P.R. China, 2009.10.14-10.17"]}]},E={name:"paper",data:function(){return{paperInfo:k.paperInfo,tmpCnt:0}},methods:{yearSort:function(t,e){return t.year-e.year}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"20px",border:"5px solid gray",width:"80vw","margin-left":"10vw","margin-bottom":"60px"},attrs:{id:"paper"}},[i("img",{staticStyle:{width:"80vw",height:"30vh",border:"1px solid gray"},attrs:{src:n("p9bt")}}),t._v(" "),t._l(t.paperInfo,function(e,n){return i("div",[i("div",{staticStyle:{"font-size":"22px","margin-left":"1vw",color:"#f15a23"},attrs:{align:"left"}},[t._v(t._s(e.year))]),t._v(" "),t._l(e.paper,function(e,n){return i("div",[i("div",{staticStyle:{margin:"10px","margin-left":"2vw","font-size":"19px","font-family":"'微软雅黑'"},attrs:{align:"left"}},[i("i",{staticClass:"el-icon-circle-check",staticStyle:{color:"#04BFEA"}}),t._v(" "+t._s(n+1)+". \n              "),i("span",{domProps:{innerHTML:t._s(e)}})])])})],2)})],2)},staticRenderFns:[]};var T={dynamicInfo:[{year:"2018",content:['<a href="./动态内容/2018年/P4 2018 中国峰会.html" style="text-decoration:none;">P4 2018 中国峰会</a>','<a href="./动态内容/2018年/GNTC全球网络技术大会.html" style="text-decoration:none;">GNTC全球网络技术大会</a>','<a href="./动态内容/2018年/第一届“先进计算与防御技术”学术会议.html" style="text-decoration:none;">第一届“先进计算与防御技术”学术会议</a>','<a href="./动态内容/2018年/2018中国高校计算机大赛之网络技术挑战赛.html" style="text-decoration:none;">2018中国高校计算机大赛之网络技术挑战赛</a>','<a href="./动态内容/2018年/第五届全国高校SDN应用创新开发大赛.html" style="text-decoration:none;">第五届全国高校SDN应用创新开发大赛</a>','<a href="./动态内容/2018年/锐捷SDN培训福州专场.html" style="text-decoration:none;">锐捷SDN培训福州专场</a>']},{year:"2017",content:['<a href="./动态内容/2017年/P4 2017中国峰会.html" style="text-decoration:none;">P4 2017中国峰会</a>','<a href="./动态内容/2017年/江苏省高等职业院校技能大赛 出题、赛题发布、设备部署.html" style="text-decoration:none;;">"江苏省高等职业院校技能大赛”出题、赛题发布、设备部署</a>']},{year:"2016",content:['<a href="./动态内容/2016年/GNTC全球网络技术大会.html" style="text-decoration:none;">GNTC全球网络技术大会</a>','<a href="./动态内容/2016年/深圳 P4技术交流会.html" style="text-decoration:none;">深圳 P4技术交流会</a>']}]},A={name:"dynamic",data:function(){return{dynamicInfo:T.dynamicInfo,contentPathConst:"../../static/学术动态/动态内容/",contentPath:"",iframePage:""}},methods:{func:function(t){this.contentPath=t.srcElement.href,this.contentPath=this.contentPathConst+this.contentPath.split("/").slice(-2).join("/"),console.log(this.contentPath),t.preventDefault(),t.stopPropagation()},test:function(t){}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-top":"20px",border:"5px solid gray",width:"80vw","margin-left":"10vw","margin-bottom":"60px"},attrs:{id:"dynamic"}},[i("img",{staticStyle:{width:"80vw",height:"30vh",border:"1px solid gray"},attrs:{src:n("l6UT")}}),t._v(" "),""!==t.contentPath?i("div",[i("iframe",{staticStyle:{width:"100%",height:"60vh"},attrs:{src:t.contentPath}})]):t._e(),t._v(" "),t._l(t.dynamicInfo,function(e,n){return i("div",{staticStyle:{"margin-left":"5vw","margin-top":"20px"}},[i("div",{staticStyle:{"font-size":"22px","margin-left":"1vw",color:"#f15a23"},attrs:{align:"left"}},[t._v(t._s(e.year))]),t._v(" "),t._l(e.content,function(e,n){return i("div",[i("div",{staticStyle:{margin:"20px","margin-left":"3vw","font-size":"19px","font-family":"'微软雅黑'"},attrs:{align:"left"}},[i("i",{staticClass:"el-icon-circle-check",staticStyle:{color:"#04BFEA"}}),t._v(" "+t._s(n+1)+".\n                  "),i("span",{staticClass:"linkWords",domProps:{innerHTML:t._s(e)},on:{click:t.func}})])])})],2)})],2)},staticRenderFns:[]};var L="本实验室以软件定义网络SDN为核心，围绕网络虚拟化、数据平面可编程、IoT等；推动本科生通过科研、论文、竞赛等多种形式扩展视野，至今有3篇本科生一作的CCF C类论文，两位本科生参加国际会议并做论文报告；持续与锐捷网络、未来网络研究院、浙江大学、中科院计算所等交流与合作。",z={name:"recruit",data:function(){return{recruitInfo:L}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"20px",border:"5px solid gray",width:"80vw","margin-left":"10vw","margin-bottom":"60px"},attrs:{id:"recruit"}},[e("img",{staticStyle:{width:"80vw",height:"30vh",border:"1px solid gray"},attrs:{src:n("0NMd")}}),this._v(" "),e("div",{staticStyle:{"font-size":"20px",margin:"120px"},attrs:{align:"left"},domProps:{innerHTML:this._s(this.recruitInfo)}})])},staticRenderFns:[]};var B={components:{mainPage:f,theRoadofSDN:n("C7Lr")(b,S,!1,function(t){n("SLlo")},null,null).exports,academicTeam:w,entertainment:n("C7Lr")(N,C,!1,function(t){n("Cx5Z")},null,null).exports,researchProject:n("C7Lr")(j,D,!1,function(t){n("56ZB")},null,null).exports,paper:n("C7Lr")(E,R,!1,function(t){n("UpeN")},null,null).exports,dynamic:n("C7Lr")(A,J,!1,function(t){n("7qKB")},null,null).exports,recruit:n("C7Lr")(z,F,!1,function(t){n("5iED")},null,null).exports},data:function(){var t;return t={mySlot:"mainPage",activeIndex:"1",activeIndex2:"1",footerContent:"",navContent:l.mainPageInfo.navContent},c()(t,"footerContent",l.mainPageInfo.footerContent),c()(t,"libName",l.mainPageInfo.libName),t},methods:{handleSelect:function(t,e){console.log(t,e)}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"HelloWorld"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[n("div",{attrs:{id:"SDN"}},[t._v(t._s(t.libName))]),t._v(" "),n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){t.mySlot="mainPage"}}},[t._v(t._s(t.navContent[0]))]),t._v(" "),n("el-menu-item",{attrs:{index:"8"},on:{click:function(e){t.mySlot="paper"}}},[t._v(t._s(t.navContent[1]))]),t._v(" "),n("el-menu-item",{attrs:{index:"7"},on:{click:function(e){t.mySlot="dynamic"}}},[t._v(t._s(t.navContent[2]))]),t._v(" "),n("el-menu-item",{attrs:{index:"3"},on:{click:function(e){t.mySlot="researchProject"}}},[t._v(t._s(t.navContent[3]))]),t._v(" "),n("el-menu-item",{attrs:{index:"4"},on:{click:function(e){t.mySlot="theRoadofSDN"}}},[t._v(t._s(t.navContent[4]))]),t._v(" "),n("el-menu-item",{attrs:{index:"5"},on:{click:function(e){t.mySlot="academicTeam"}}},[t._v(t._s(t.navContent[5]))]),t._v(" "),n("el-menu-item",{attrs:{index:"9"},on:{click:function(e){t.mySlot="recruit"}}},[t._v(t._s(t.navContent[6]))]),t._v(" "),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){t.mySlot="entertainment"}}},[t._v(t._s(t.navContent[7]))])],1),t._v(" "),n(t.mySlot,{tag:"component"}),t._v(" "),n("footer",{domProps:{innerHTML:t._s(t.footerContent)}})],1)},staticRenderFns:[]};var G=n("C7Lr")(B,q,!1,function(t){n("+bes")},null,null).exports;i.default.use(r.a);var O=new r.a({mode:"hash",routes:[{path:"/",name:"HelloWorld",component:G}]}),M=n("NxjZ"),H=n.n(M);n("zlkP");i.default.config.productionTip=!1,i.default.use(H.a),new i.default({el:"#app",router:O,components:{App:a},template:"<App/>"})},RXHQ:function(t,e,n){t.exports=n.p+"static/img/show.5eda265.jpg"},SLlo:function(t,e){},UpeN:function(t,e){},kmOd:function(t,e,n){t.exports=n.p+"static/img/show.b6d5e19.jpg"},l6UT:function(t,e,n){t.exports=n.p+"static/img/show.3de4cdd.jpg"},p9bt:function(t,e,n){t.exports=n.p+"static/img/show.2d3901d.jpg"},zlkP:function(t,e){}},["NHnr"]);
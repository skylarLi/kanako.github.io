(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c0065f7"],{"04f6":function(t,a,e){"use strict";e("a1dc")},"06bd":function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"grammar"},t._l(t.list,(function(a,c){return e("li",{key:c,staticClass:"grammar-item"},[e("p",{staticClass:"sentence"},[t._v(" "+t._s(a.sentence)+" ")]),e("p",{staticClass:"explain"},[t._v(t._s(a.explain))])])})),0)},n=[],s={props:{list:{type:Array,default:function(){return[]}}}},l=s,i=(e("edb9"),e("2877")),r=Object(i["a"])(l,c,n,!1,null,"44ddaeb8",null);a["a"]=r.exports},1993:function(t,a,e){},"1bd0":function(t,a,e){"use strict";e("1993")},"2b84":function(t,a,e){"use strict";e("b684")},"2c1c":function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("wrap",[e("el-tabs",{attrs:{type:"border-card"}},[e("el-tab-pane",{attrs:{label:"单词"}},[e("Word",{attrs:{list:t.wordList}})],1),e("el-tab-pane",{attrs:{label:"文型"}},[e("el-collapse",{on:{change:t.handleChange},model:{value:t.activeNames,callback:function(a){t.activeNames=a},expression:"activeNames"}},[e("el-collapse-item",{attrs:{title:"文型",name:"1"}},[e("Grammar",{attrs:{list:t.grammarList}})],1),e("el-collapse-item",{attrs:{title:"例文",name:"2"}},[e("Model",{attrs:{list:t.modelList}})],1),e("el-collapse-item",{attrs:{title:"会话",name:"3"}},[e("session")],1)],1)],1)],1)],1)},n=[],s=e("f277"),l=e("900a"),i=e("89ac"),r=e("06bd"),b=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h4",{staticClass:"session-title"},[t._v("残念です")]),e("div",{staticClass:"session"},[e("div",[e("label",[t._v("米勒：")]),t._v(" もしもし、ミラーです。#喂，喂，我是米勒。 ")]),e("div",[e("label",[t._v("木村：")]),t._v(" ああ、ミラーさん、こんばんは。お元気ですか。 #啊，米勒，晚上好，你身体好吗？ ")]),e("div",[e("label",[t._v("米勒：")]),t._v("ええ、元気です。 #啊，我挺好的。")]),e("div",[e("label",[t._v("米勒：")]),t._v("あのう、木村さん、小沢征爾のコンサート、いっしょにいかがですか。#嗯，木村，一起去听小泽征尔的演奏会怎么样？ ")]),e("div",[e("label",[t._v("木村：")]),t._v("いいですね。いつですか。 #好啊，什么时候？ ")]),e("div",[e("label",[t._v("米勒：")]),t._v("来週の金曜日の晩です。 #下礼拜五晚上。")]),e("div",[e("label",[t._v("木村：")]),t._v("金曜日ですか。 金曜日の晩はちょっと……。#礼拜五啊。礼拜五的晚上我……。 ")]),e("div",[e("label",[t._v("米勒：")]),t._v("だめですか。#不行吗？")]),e("div",[e("label",[t._v("木村：")]),t._v("ええ、友達と約束がありますから、……。#是的，和朋友约好了……。 ")]),e("div",[e("label",[t._v("米勒：")]),t._v("そうですか。残念ですね。#是吗，真遗憾。")]),e("div",[e("label",[t._v("木村：")]),t._v("ええ。また今度お願いします。#是啊，下次请再叫我。 ")])])])}],o=(e("1bd0"),e("2877")),v={},_=Object(o["a"])(v,b,u,!1,null,"b14e8056",null),f=_.exports,d={components:{Wrap:s["a"],Word:l["a"],Model:i["a"],Grammar:r["a"],Session:f},data:function(){return{activeNames:["1"],wordList:[{a:"わかります",b:"\tわかります",c:"\t了解，明白，懂"},{a:"あります",b:"\tあります",c:"\t有"},{a:"好き［な］\t",b:"すき［な］\t",c:"喜欢（的），爱好（的）"},{a:"嫌い［な］\t",b:"きらい［な］",c:"\t讨厌（的），不喜欢（的）"},{a:"上手［な］\t",b:"じょうず［な］",c:"\t好（的），高明（的）"},{a:"下手［な］\t",b:"へた［な］\t",c:"不行〔的〕，笨拙〔的〕"},{a:"料理\t",b:"りょうり",c:"\t料理，菜"},{a:"飲み物",b:"\tのみもの",c:"\t饮料"},{a:"スポーツ",b:"\tスポーツ\t",c:"运动，体育（～をします：做运动）"},{a:"野球",b:"\tやきゅう\t",c:"棒球（～をします：打棒球）"},{a:"ダンス",b:"\tダンス",c:"\t跳舞，舞蹈（～をします：跳舞）"},{a:"音楽\t",b:"おんがく",c:"\t音乐"},{a:"歌",b:"\tうた",c:"\t歌曲，歌"},{a:"クラシック",b:"\tクラシック",c:"\t古典音乐"},{a:"ジャズ",b:"\tジャズ",c:"\t爵士乐"},{a:"コンサート",b:"\tコンサート\t",c:"音乐会，演奏会"},{a:"カラオケ",b:"\tカラオケ",c:"\t卡拉OK"},{a:"歌舞伎",b:"\tかぶき",c:"\t歌舞伎(日本的传统戏剧）"},{a:"絵\t",b:"え",c:"\t画"},{a:"字",b:"\tじ",c:"\t字"},{a:"漢字\t",b:"かんじ\t",c:"汉字"},{a:"ひらがな",b:"ひらがな",c:"\t平假名"},{a:"かたかな",b:"かたかな\t",c:"片假名"},{a:"ローマ字",b:"ローマじ\t",c:"罗马拼音"},{a:"細かい(お金)",b:"\tこまかい(おかね)\t",c:"零钱"},{a:"チケット",b:"\tチケット",c:"\t票"},{a:"時間\t",b:"じかん\t",c:"时间"},{a:"用事\t",b:"ようじ\t",c:"（必须办的）事情，工作"},{a:"約束\t",b:"やくそく\t",c:"约定，承诺"},{a:"ご主人\t",b:"ごしゅじん\t",c:"（他人的）丈夫"},{a:"夫／主人\t",b:"おっと／しゅじん",c:"\t（自己的）丈夫"},{a:"奥さん\t",b:"おくさん\t",c:"（他人的）妻子"},{a:"妻／家内\t",b:"つま／かない",c:"\t（自己的）妻子"},{a:"子ども\t",b:"こども\t",c:"小孩"},{a:"よく\t",b:"よく",c:"\t很，十分"},{a:"だいたい\t",b:"だいたい",c:"\t大致，大概"},{a:"たくさん",b:"\tたくさん",c:"\t很多"},{a:"少し",b:"\tすこし\t",c:"少，稍微"},{a:"全然",b:"\tぜんぜん\t",c:"完全，一点也（用于否定句）"},{a:"早く、速く",b:"\tはやく",c:"\t早些，快些"},{a:"～から",b:"\t～から\t",c:"因为～"},{a:"残念です［ね］\t",b:"ざんねんです［ね］。",c:"\t真遗憾（呀）。"},{a:"すみません。\t",b:"すみません。",c:"\t很抱歉。"}],grammarList:[{sentence:"わたしはイタリア料理が好きです。#我喜欢意大利菜。",explain:"表嗜好、欲求、能力、所有的时候助词要用が、N5部分有这几个词：わかります、あります、上手です、下手です、好きです、嫌いです。"},{sentence:"わたしは日本語が少しわかります。#我懂一点儿日语。",explain:"副词的位置在动词之前。"},{sentence:"きょうは子どもの誕生日ですから、早く帰ります。#今天是孩子的生日，所以要早点儿回去。",explain:"から接在句子后面表示原因，“因为～所以”的意思。"}],modelList:[["お酒が好きですか。#你喜欢喝酒吗？","…いいえ、好き(では)じゃありません。#…，不喜欢。"],["どんなスポーツが好きですか。#你喜欢什么运动？","…サッカーが好きです。#…喜欢足球。"],["カリナさんは絵が上手ですか。#卡莉娜的画儿画得好吗？","…はい、［カリナさんは］とても上手です。#…是的，她画的很棒。"],["田中さんはインドネシア語がわかりますか。#田中先生会印尼语吗？"," …いいえ、全然わかりません。#…不，一点儿也不会。"],["細かいお金がありますか。#你有零钱吗？"," …いいえ、ありません。#…不，没有。"],["毎朝新聞を読みますか。#每天早上看报纸吗？","…いいえ、時間がありませんから、読みません。#…不，因为没有时间，所以不看。"],["どうしてきのう早く帰りましたか。#昨天为什么早回去了？","…用事がありましたから。#…因为有事。"]]}},methods:{handleChange:function(t){console.log(t)}}},p=d,m=Object(o["a"])(p,c,n,!1,null,"78c0ec39",null);a["default"]=m.exports},8825:function(t,a,e){},"89ac":function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"model"},t._l(t.list,(function(a,c){return e("li",{key:c,staticClass:"model-part"},t._l(a,(function(a,c){return e("p",{key:c,staticClass:"sentence"},[t._v(" "+t._s(a)+" ")])})),0)})),0)},n=[],s={props:{list:{type:Array,default:function(){return[]}}}},l=s,i=(e("f73f"),e("2877")),r=Object(i["a"])(l,c,n,!1,null,"11f602da",null);a["a"]=r.exports},"900a":function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.list,(function(a,c){return e("div",{key:c,staticClass:"word-item"},[e("span",[t._v(t._s(a.a))]),e("span",[t._v(t._s(a.b))]),e("span",[t._v(t._s(a.c))])])})),0)},n=[],s={props:{list:{type:Array,default:function(){return[]}}}},l=s,i=(e("04f6"),e("2877")),r=Object(i["a"])(l,c,n,!1,null,"1caa9622",null);a["a"]=r.exports},a1dc:function(t,a,e){},b684:function(t,a,e){},b720:function(t,a,e){},edb9:function(t,a,e){"use strict";e("8825")},f277:function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"core-content-wrap"},[t._t("default")],2)},n=[],s=(e("2b84"),e("2877")),l={},i=Object(s["a"])(l,c,n,!1,null,"a2347834",null);a["a"]=i.exports},f73f:function(t,a,e){"use strict";e("b720")}}]);
//# sourceMappingURL=chunk-5c0065f7.5865d0c6.js.map
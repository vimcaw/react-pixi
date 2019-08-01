(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/BitmapText.mdx":function(A,e,o){"use strict";o.r(e);var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),B=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/react/index.js"),s=o.n(a),i=o("./node_modules/@mdx-js/react/dist/index.es.js"),C=o("./node_modules/docz/dist/index.esm.js"),g=o("./src/stage/index.js"),Q=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),E=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),I=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),m=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),p=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),c=o("./node_modules/pixi.js/lib/pixi.es.js"),h=o("./src/index.js"),r=function(A){function e(){var A,o;Object(Q.a)(this,e);for(var t=arguments.length,B=new Array(t),a=0;a<t;a++)B[a]=arguments[a];return o=Object(E.a)(this,(A=Object(I.a)(e)).call.apply(A,[this].concat(B))),Object(p.a)(Object(l.a)(o),"displayName","BitmapText"),Object(p.a)(Object(l.a)(o),"loader",null),Object(p.a)(Object(l.a)(o),"state",{loaded:!1}),o}return Object(m.a)(e,A),Object(n.a)(e,[{key:"componentDidMount",value:function(){var A=this;this.loader=new c.g,this.loader.add("desyrel","https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/bitmapfont.xml").load(function(){A.setState({loaded:!0})})}},{key:"componentWillUnmount",value:function(){this.loader&&this.loader.destroy()}},{key:"componentDidCatch",value:function(A,e){console.log({err:A,info:e})}},{key:"render",value:function(){var A=this.state.loaded,e=this.props,o=e.x,t=void 0===o?0:o,B=e.y,a=void 0===B?0:B;return A?s.a.createElement(h.a,this.props):s.a.createElement(h.i,{anchor:.5,x:t,y:a,text:"\u231b Loading font...",style:{fontFamily:"Arial",fontSize:15}})}}]),e}(s.a.PureComponent);"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BitmapTextWithLoader",filename:"src/components/BitmapTextDocz.js"}}),"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BitmapTextWithLoader",filename:"src/components/BitmapTextDocz.js"}}),o.d(e,"default",function(){return F});var d={},w="wrapper";function F(A){var e=A.components,o=Object(B.a)(A,["components"]);return Object(i.b)(w,Object(t.a)({},d,o,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"bitmaptext"},"BitmapText"),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"http://pixijs.download/dev/docs/PIXI.extras.BitmapText.html"}),"http://pixijs.download/dev/docs/PIXI.extras.BitmapText.html")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)(C.c,{__position:0,__code:"<Stage width={500} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <BitmapText\n    anchor={0.5}\n    x={250}\n    y={150}\n    text=\"Hello World!\"\n    style={{ font: '50px Desyrel' }}\n  />\n</Stage>",__scope:{props:this?this.props:o,Playground:C.c,Stage:g.a,BitmapText:r},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZnAIVw0nQ2V2g9OABHISQUWImBcIg9hrxeKIZksbApTdciaKogF030OBJGY4hZnYrBtVOHCVVQPD1XYQNJVIk1NXaMFUF0FFjkkwjEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGcLIAFjs9gADY7Ic9YwGAgAxb1oESCz-GcQ4EQdTAYKEfgliIahKDgZyEX86tApoZwICwy52AARncxz5DUjSpgAQTmfT2AjKDyBsKB0DDVCOX0sQ6ujGR2BRXSYG4YBsJ0rF5C3GtgEa6AWuCAAyWbxkSeZKGaKbmta7hNrlMBkMlAZUHadgAH4NmmsMI3aq41pm1AyurKQZCrN8zBhOTMDAMIoCmC6Oq6-7quXasEwUggcCCzIUivAhxprWtCLovMuAmQaAFZLMstDNggFJCEGpN0bQygZm7VA4EGqCPAlbZELaDBHCgIUrksmoYDAQqwBR1CxpXWHGGE1ixNEIHYZrdxGqFQbLJwFG7pFkWsEGgAmNHZblmtEkGwqVZ5kXaHEvgQAACXnBn2AAdSFZqAEJ-B12G-tgcnDWAiy0a8rV4ESLooEO-RVblzcdakeG0hh2tJBBsGIah8apABp6zC_EBKOo2i0kkVRsH_LQKGA_QGFk-0QaU-UzVUmTGKggGoFiaJ9tQkuZggLAIGz8vC6maCB0sJb4EbgdzQIXu4Hbxi0FYVx-ncTiMLADxNEkGuPAz1AJ6nmhR_wwyYJFHVoOcAB9LUGmcaCABlKoATQPnVrwAKTPexLAbo0yJwD1wmgQT-yJkfbTkqCaJUAyRnA0VA14hAjDgBkF-XF36SE2FAWEf8K5bygtBZuEAgoQECEcNCr93Qei6Locg0AMibwAZwVA6gtjahgKwCIlAoB2HwXAohdApwUPtFXOYXdKCsC4DA1hGEPQ_wEZw8q1BNKoGEDMWqP1uCdWAHdMwxhTDmCMOwc02idG6L0fogxhiDFFE0SHboxc1zUBdBGPI3QJi2CoROTUlpIhvnYOo9x7AAACeQ6ImJMbDCq7AAbyPaoov6niRaMDMYjdAyNgBowxgEtWIssY4wIKjAmySUk1iJiTMmFMqY02QugemjN2DMzAGAdG6NULZJyXsVAepaYZOABGJx4YugCCWHEVe_h2BhKUfUhphZSZML_AzFIj5oINAABoNA6VODIFkliTguAINxmiRk1g0uMnAkzHz2HcBPOw84YBQxWasPpcBNnbK5luLZFhNkBKMa8t57zzQmN5P6dSUipg_zYsPWqRlqyPGOPyOg-QpHrBxHEvAVw-GAvmHAHAqBQhEFwY5CwaTCAIu7sPVF6LMVqQsGCnECQnEED6OYNZXSmRNJaXiomPdkU4B2upLFjSACqqBkrIQIEypF8A2W7UcusMFQDxixG2DA6IvUiLCiOusTIYBBUsuFV4JhYrQWSEWTAz465MzMgNVYzMNcwBbESOQWAGx3BpDgEq6stKdSoEsRmAg9g_AzgKoi9VKLNVQG1RYa6YY1UEpkZgIN7AwUzPmXsYm-04BLGgd0QgtwHiSCbi3TQOATgjFQAzDs0h6HSFOIJWNDQcDV1riTfAxAoBMgTVIsNrK4B-HmPVFc08IDxB7fceKzKCUBs5RYMIER4bChbRq4QgaVywomFOlFaKMUZBHb4GA2NcUDqFUuolq6VyoncGlSe-hF04GHSufs8AMisBgFqTIOIZzXlCFU5Z26_XnpnWurocAmGf2oGe5dxLhaBSojAI51yz0XuFpTHYxS6ZMPKb68Ne7ukrmteKAQ15WZChgGKTpUGv0riQhgDBNRmGEa1SuUDCIgqzMqpVSjs7hawBSBKcK76h1EeFoKEYGQu6swuOpH1-LW2ogKGuttJ70CWGlW-5DrLoP2z8F0dAZ9KAdnk6J6dVGfmwzBQImAYwHF5P2vEJYtjODNDEYI9AK5DMjCuBGAFSa-wDgAHLehgD0x0pqCCeaPIMwyOsgnzlqi5gA2gCgLMAAC6OsIDNAjGFzaBkSmszQNkdqIKUldCpQIPTIt_Y1nHpPHtNAozC1hmFtAtFhMrXYIbSweoz4QZORec5-g12w2KGAieNccgAvYLwXgxQHMjeKHsZoQ95jsAACTABmzABr84lC9VCHMGuuYIjzcmr591MW1swlobmCbjBeknM6h1qGE3ig6zcTWJQ6x5AclKpI0mUx3qfQIIiuwBkcuxIXewAAHOjTlOKBU-TB_S5p_KrgyKJpy6gPK-U0Hh7IzlKqriogZJjjhGQXVuv0J6u1BUcfebMCo50WAt7sr2syU8bX_C_ecwOG5wXqxBJ_Te3MBkIvvxwDqeetCcAysSHAVng7kWvfYALoXNDJSi5gOLiM0Fd77yPifc-V8b730fpYDk8XCt5epeweXIuxcS5cw9iwbLoC0AEM536VtucCFvegHAaBrWhHKM5jkNvZeqdCAiCMEZ4iBrc0TIL9VZfv3D0sKLA5YtXEiwC2LbUljKLfFT61_g7AxI4hwuwkcieZgBwfC7_SDJooSOsWYcjq-hFr4Vrl7nnCVSCmeCv-39Bm2gFAWHFXssrlK-vAgEYgEgJSGAiBoxoGO5l8UCDMjmwtPYGYpYj6817GF4pBxK_jgZedOgYoD2qfBp7zQLUXBB_j-H8LIJUFqC3830jPASwIdLFM1I1ZrhmhoQMnsRRRcxJRrCAJwHr1qmdDGGrTiBJk7Sq0B3fx1k_x1gc2xwJBwAr2OX8G61jxwG_1JjXRe1AIsHAPrxwBiB2AyAgPCEoAnSmAMg-mYUZEKzIMwIoKoJlQEAixVWOjlFomFEOgshRCJnaFiwulIPxFsBwFR380BFqjIywRwRoPIFNFoEcBoFcEy0d3ILmBwDThgADyUOwVwRwA23QCyE0KIh0IjHAMZyahuguiWHALkPc0BBcIJGemFjQAVzoQYRnQl28NhmfxaTsI4LmAD3ANpTMUkOrHP0LH4ivy4C5RmEsNoFZ3oV-1JC6FYHhloByPoWsI4nv0CT-W3nnXf3XU3QIF_3_1qnAJALYOjV1S9XQBtR_TylYNhkSzqivVYF-3wA3XSXYCti2gh3YAAB9Ji3Msi2ccBKjRitpKjSjdYIiZhQx8culNj8h8oIxKiP9hjCAA8EjSVWjKgOi_9bVvUR8kt-jBi-CxiDIVVVjYY9CNiuCMheCriTp2hBCXx2ARCIgZhxC4jYZTiWjpgMAOj4A_0SZjopCwUwAoA8g8RIBcEVwTCVCBBzC0irDgJtDnRdDMCHCzo6BnDpCUU3CPDKSojMCYiiI0gwS6lCtST1pyTXjRlNIGpHDWoADKScAmjYYTcCtawAY-FxEYF-sGRBp3ixpJpeS6B5A45eEhBJSBBxoEiTV3Vr9SlohGpksBAhBuloQjShQwFApOTdlYAcAMhjSIxigzwzSjhThegjTcw0BhtRszEJscBT90MpE9k7ShRDTjSA9rS_xgzHcoyLTKAz9QCGS6IfoAcL8Ptt5nVXVL8PUvU0g6iG5ADMCmjbi6oXcrj5o9UBBCcsySdvVOT2CZCKDaUaDaVwiGz9DDCTjntQDtTe9-8UcwjOTGj5jkdeUwj3jgiawsSzCLD8StDbCa8I9XCWl3DI1aSD16StjYi6S2yNjyhURKBEhmSEiWyrTyin8m1SZ8yBSiyfCktCC7Byz7ycAHM6yqE15ytx8nyHMqE6sEQGsmsWsmc4Brsus5QvyIAjN2A2x0A7AdtAgQh2BigALWscDgLLx9BihXwdYRTzAFyVwIScLaxK87BgABdGdUKWchzf4OQ0IugwBBpyBfpWyUVsDrlapyAaLo1NTKc1IzFBTtM_tI8d0zA-Kvsm8fs2daoxKvpfs1JXp7RpKCJGTWCk4U4-JDUCBBJ-ZRIOItRJJs5AJdAQIDAwIO55JNQS5TRFR_57QFM-4CF2gAVB5h4uFIJ2B1NNM8FG5ME24bK3LtK2IOIlhBZYEREPRM57I5Kac3pWZvseg4I4A7AArBY-8JgPKpxoRxIi9zKzQcBoI-hwMsyOcLAWA0o4JEgYtap2hkqOJy51hC0MrG9m91haJaBgV2AGrsgrhmDoEWT1gezkj0Bb9kz1yZDOqjhq9IL0rIwJz6yUVxqIDOxHxygvZ5wHI5Q007gM04AkxzQ8hzQ-MURzRFYICogsIewoEPhIgaIPh0AZhUBPdKBJBvIABOJMbyQqRWSQDwFiWYbKUGLAEgV8fZDTB8BRIZRA8A6BAgfImAGPTq9AbHNEboEg4WVGiwLUrMvvBIfs_lEa4WcA8a9gcswm0GmgvcoQQ8-MwrAa7ULgI5AgA0u0pYNAS04qnZQMm0g5KCZmqhQKNqLs43LY_GsotMqCBGq8qGoiWgAMsW9gHwAySyJYZIRWyWwstnKQwiiWk6SrOWPmX6wK8SQyAXKiu4NCQOYWS6CJKJEKsWYYAQSWaWNCBWYALANCDWYARINCPWDJfgQAbGJ3LQaChnYaABd-B5V-onZ_qQoiAwoLJKop4fYlh_rcp8orgtYuYuKVxqaqcarxJUq8BpqcSAU_VgV1gsBANUNOUOM7Ld0V00Nqwfaz0URpwUg3tUBVLeJP5mFM15iAJtAjL85TKx44B3NoAS4GZLC20M5R7oBXK3yytp4S454F4l4V53zp556oJBYCqlhr8yr4JzdFJhEyIs1W5NAt7oRb0aBDYLiMhXNoaAA1eIBkUKt-TNTBS-lfD_fwAAaWVzfsIQQXnGQTqupy3iCXsENgaDPi1BFDPHcyqpDToHLjUQCTFHn3dyErgH8Q0W8SW0MiPoIFlh5BemivtCCTVz3kPngecDPBFEfrPC1DLurAiygZgbgYQeT3GGRs5WcjDEh3J05RGEtnQEqiQT8CRtxxhVEcsEyFJlAyICkYp2rBEYEGakftsBwVgGUfbtURMACQ9g-nEvBQPuSEoF33-Q1rwecCCGuFuHuEeGeFeHeE-EkFjsaniFODwCiFQEkCsotDPvNHRIyG-oZmXlcHciqE7ECGqSqQ8DiZRm8iTHIG8iifxgAHZvJvJxRFZgdFYCnXAUZCpxQeJqIXNs4ABiM-F63BzxLxAh4AIhkh75eSqYSh9XQ-Y-U-C-a-W-B-J-Fh0dCR1wdOzlDwcICIBlTAbq-IaBTlOIRqGASqOAAK2ZlghZvoX9MsKCpvZjCwSAL6DIBO8UeHPZzlQ5h3ftBc8HF4E50Z3ZhITlNAB3M0NgAqHqlRiwKIOAbYM5p59YJuVgEQJmPh1KF4faUF5VLY1wDwHRnh6Rp1EQOuADCpTlOAOIeFwqdFmVRzNF9YQ9BRoUJRx5_Z9gARfIOFsnXh8uqF6sDjJWnin5NBvB42JBGBbu52I4C1RmmwGcfEOxDiAqpSIUzRCDdgeCjdCYGBH24VoULMPxDRAJLxfh70QyFugoNCM5KGdVZV1V2UYACxvwtCUV7xHCkiitHAHeroSYhclpshiB8o08a1mAcGSIX7eRbV_QdVHI3-YFF7X6AHIJJZnYeRNAH18l3tdIoUILFMqzPo-YvwOAHUfNRFDIIeCMcN3uf3dm0WzSfrLgfSO2SNgbaIIUSg3uFaFFX9I8Ow36JbBrSLLN-YdPVLcYdqaY4tgt6NnE2rIierMAatyIOGiAX6Jt1AdVdPPtsWZbZoCAAPCwUfD8iMbtpYYoBbL1mgdVNCBbZtmAE1gcTgOwUrAbf0xAwi8dyd_CwW9YXoyXO4SgoVroTkpd6ee9lFWVroH8_tv85oF1tdjd9Crd3ub2p97oaC2C4ceCht5oCbS1l127APC9-Yz97ohuecXquNrneAExvgRAkN7YR8fkOidaqCGD_tCLP48TGccQlmj7Gdqtq4CLZChoKINIECmgdPANzt_DzYHYR8SUygUjxaZaQdpjqj1u2j79hjsT9gZj5rM-TRzASgDjggLjjtyYkLPjwjv46KeiTPYt8j8TjVmjpYdoIDchWLPAxd-jgdijljtjmAVTpYZCpT5bZzxrBToCjzl1qznWVGkfPpMfCMK2F3HDr6AD4ATdggbdwsJvHIA_U8cYMDkVtnM94U0cU3F1tlGUCfcLggHO97TSS5_jSS6vEQCMJN_-w8_nd-IhpXFXKhjXWh-hxhrUGXAXehfQW-6E--2Lf3NSFlzxauZIRS7BxpdgfeskeCM3Sx6T4TOqEYGwRqEIL98PRIjSm5OpzRFVyeNV4AS1qb8q5p-bhEPVvbg1k7phdAWSvB3bzIS7yxtCaA279xVp8hqUXaeE-vJIIx77Fnad4TL_ZqbIqCozX7VY19irFcI7w-yx_ikQEQXuT3OAPhCIJbHUMATN2zhEV7FcdoQHmKCDocCVuxSt5oYoQ72wabxIIh4oMz9gAAajlBSBEEQoAFI4BMK10YPTu0OJywUZy2quvMw2jYABAcHqw72rYXv5jsYZEugzxr7NLTy0yk2xRkpb0z5bAQIYFADye-fNjNeYBteUR0gJqtp2g6cSZy482pgk2XUGiDfCe_xmQ22revv9owHYZQM6pYAxxapLIlROBawr7uu76Jf9k6AUgJhg-IBGfGfXzQsGFaoReCAev2j76IsIAjc5Y73rvfsIt6E1OljJqRhC_i_-vc2RY73eeC-2ci-GFW3LfrevfiaFp1fzl-ETedfzfXyeice_wuhjfTfdfoyGFgebuG_K-F3Hti3a-DfZff5G-S_3fW_qBDpyyHf3xq-8_B-CDUBksJ-wfy_p-m_Z-Mb_Pr34juzyil-ZhqvBL6vLcIx7-7BpjDIAudVpgBAchu-BARg_QNqutxcwnRekvUeYLmA2x9gMgijGdreySxv8CCt6AAUAJgAQ9q-vvCMP7xD6K04-ofe_o_yj4zhY-nABPkn3KIN4T-iKR_tn1z4187yIPBvjMHTxPFqBzAqvnG3tijhn6KJEdoP1JBLA3-UWfrlfzRrEZMuBWG9pzkoFld2BRMIgSV0dxKCIeoBLATgNHZ4CQ-jAbBsQJj54A4-5A6vkEiGwGQm29A1MvmxfrdAy-hfNPFIWl62Ax6UAFdtYJzZcDIS0NEtq_V6LvRMsdmRAk_WsHY9fy3mISksGlJGF8K0IFgvGxC5ODoAIQn9jAETxEwq-5ZIbJ6Sa5dMtcvTXXAMwNy79ISDiVwIfmMZfRvBYQyzBMGiAhZOaf4EYJPEP7FBoaMQflmN0iFXAFsAKNbK_C6HAAXeqQlgd7UoD9DIh-CIUPTz56z8ghfApITO19YzAlg2QzXD0x1z9N9cQw0QWjRiGYc6hYyG0o0IKwOl5eQoYOgCn6E9Dk6boXdoPy2EjDds4wrllMJd6dkb-t0ROEoGTi8REEyCFeGoAMoD084oEEAG0y5Jjg4AQUT3m7zqgC5J4KQdnOEnhEoouuAgQ8hwHCS88MRLfaEQdG8JgigktgIhrVCNa_R6uP8dHsj3HTUcUgHwcPBGCNZhJLeEWI1rQlm5-FYsYDAkeUSq4AMDIVABILQnrjhIAcOAgUVAHYpMJYA9OH5AgJLIJ1MgiQFHgqPggRhxR7g4spm2TaWM1RUooUdQA1H4cpRtUZ_srglzij9R74aIRh26AeCJgkCE_uwCdL2l2gFomUWD2yCQdSeIQcwCqPMZHAiGWFcQe8P6rlEIq_rUMQkDZRCgzwEoPABGDFyBtAuagCLGLlbYIs0OX_CwIRUTGYjne4YLAKmOVysDLe6WSAMfnLhU5uRaZA_AZADRBRzA4SCMHCNMiIjOoVsesYfxbEIj8RH3cEROGQhT4Z8kCefKEnrYG8t8owUvnKDLH-Dy4ndaiMQmoCkJxe_wrOP3Vzh6AQRZlMUCQjITcsuIATc0EuPUj7j56MwamCXHgTwJ0o2wOiNnA35-VfAqURmtQEgCzgHKHoYYCiF0DviuRfYyhpglMJ69zKe48XpVxfG_jsYb4asZpEYYihnADQHUIgzMHUxny99faA6zkiUNKo9gX-pVAADiXedzJVD1BnhwsaE1AF5k-HKA1KtKNcRoBzhAQtxJlcCFvCh4zwyIK9QSGvQ4mX1rChJIRN5Rbi-VUElCKcquhgi4T8JREg-CRLIlLB4JiE5CYA3IjsIwJ5CQbrqkWabAJwz4UZDYSJKS9YJUwIQCIEErQF2AeoWYHEX0YeIxWeQCILKHwxLIBAASLlL1SAKIwJg-wHKpKHNDBhtu3ifVoZCMBasgOQsepiFIO5zJK0AknQmhCMqCSjgmbW0vUGlbr5lKtye7vtyhHqQSYiU8PLBm2BfIsJ9odfjSmFrRcfMc5Ikj0iKlUxaos44_JDyC7LsVw8Uokgj0pHzAUeaPJHvMEx66japGQPHsLHaB9Yo2q3FIOihdClACSOhKYcdklAelB-U2RCpa06m1AcAtvAZKARwFmTGCek8ySeFHDDTDJo0uUSF0OmckwUSXDKciVRK5gQmRwJKToWIz6SDIEknEmoXFAaEFpRJc6clKQ7Phq2Z0t6XVOOkFdpBZxXqEs3QBN4-4pQ4Eh1S64SiheaHb6biXSKFURp0ZCKasmfAWZww5Y7IPVISDFSBeuqXwmyJebDgAmh-AIkwkl42c_CHsJmcwlsnf9CKGUw6Xz2hb5ZzAWM08PlThaxARQz4MBKEInzPhs8g3AxngzAR-EqEO2YuOzMYTMJSp4DOSBVKoRszi-gREWjBCAnYlPc1CWhGAgiDszLAhsuNhM167qoU8QgBEIlVtKrwcA7mHUFqC7wINH604xykIARkyjDoJ0QqICXxbCwUBUKcyOwCUlIT3M36LYvxiph0QYsCKaSYROImkSzwa6csegENgvipZyQ28MBJ2ZYy85BclEEXIWHPY5ZHdL4WpUMK91-EgiHEhuOYnGUC4jEYuA5QCZgNIGecI2gZEji_TZyPtV_ns28JBJxSapVubVGKLiQ8qs8qcGYGnlzBNC9II8BNQdB6BF5G82aW5J-RBJ8weAJQiEgMjXgKQpeRghDUsFTBAB9eECZHFAxHD0AYoLHu-1WSsxo8K4RgADH3lbyxAwASAuEj5hXyiqpFd-C5loqsxBodFNCPXkGj15zaYgZUpIH_lSID540Abqo0yBzBya1PcqpVQMjFAT5FaAGBGAWyXzoE183NIQvgiVUP-1CwqkkVBhUSjwL2O7E6kkHmAH5-Cw-VWL7FQQyFmCAGEsBnktypw4i9eZgq3lLAF5UwO6AuIYmAjNxnc4emgisCXxoIZ4ZwMsMwTXzVJH8GID3Wi6X1aURi_xlsXnoxJPxNEZSpfW-mWKTxK4zSWJO4Q7yfaIQOwBgt3m1FgkqpSRZJN8WbzJJIiluCEhPruh7FdEZueqUvq2JZMOwCzNAkiVXiEEwgbYCgjMpQQfuiQP7uJQ9ZRLuI3db-GzjAZDdNEHyapTUs-R4NRZNcRipVBmQvJalbSoxFrLKluVaUSwDfN5NPmiK5g-iluNfOGXKFcELJMETwhmASlW50imYAAuCUyK_FkyoRbkGgRJLtgKS5ZjVDuhTKQgm2fJbFUKWSVBFjrNMnnSOmWBtFuinAJcq6X9itp2865ToucA4AnlDyoJARLwXLdBKLy25d8tmC_LPl5RMes6GcCNL0BcEZ0LVH-VvKwVMACFbEChXuBWCJkmCJPCoKwAnlsKm5W8ugiYrYg2KgGaCG1kUNyizgfsC8BsFaLXlOASlWgJBVpkQqBkOFVaw4hMrNIsmGuDOAZXUrcVdK7lQUD5Uy0yV7TClXhFgB6h4AeIVlXivpWSqYA0qttJyoIiKqJZs2OVXStyi_gNVKlBuV3RMXfwfK7cwetuMrgwRKALzJYELkwawtYA0EK1ZmGKVn1RJZlDicvXng8ScE69RehvCfFcAfADlQNfPQSESiHKk9fwHgBnrOCKlCszxASol7dAK0fYJ1VMEiEk9J4io9aVQCFCuQsgLM-ycFIu6hS0IkQ5Vua0Mh-j7WYqw0LiL7CTxoEjql5q4L4GrEcBWa2qBFiNxXSsR1g_SKWJJlzjOShFLNc9l2HdAF-onSoQOoMgScCgr4avp2oMiRCDCZIF4I-EUBBiMaE6uIX2r4Gzq5QFnAQIurjbLq5OkQ-geFN6p3s_Ryoo0qqMiGGjYY562rs-WsFXrd1d7DNWwIXLt8ROs7Gde71ZGKhVemkBWpwHQBYBW1uOdgAfF-gHwcAWADThUllqaQVakG6DZEKWDwbwkiGxIChsshdojSXakkC0E_U2jq-o6o0jDMpSm4s1duI5o7gbztiw1fuf9VbCcGuB3MfuDkLIRsnuZUMdcuyYY1HAZBY6MKjNQ4gIYNZm1RqAMR4DtVUs5NkU0xHY02qOMngrIVxtdQ8Z-AGYjUXxlYrNDmggmL0sJhY0kCRNomVQVmJZHiaJNkmqTdJpZCyY5NXAeTAporCKYlNXAZTSQKUqqZnx3IwOIKTlINZhTKhFanhSRQDTigPhGid7rTnrW2AVN6qGDUYXZqEUpNg_WTWmqmIzEctoQhrLapvT2r0BaapliJrwZK8XQYve-mFsaYmcUg3amteirT4Z9xeglCLOsFdGNLtgmUCwO0D5TQI80B0TlMNsGBd9b0g2uUCNuWzhBZtk22xP_yW3zaNsa2qbRtn2D5BMAS2oiCCQm0RBg8eAf4vtraCGbu-52k7Rwmu1LMMAO2wREtsFAvMMgvSBEEnV60va9ASEF8BNu-0O5Vt_2tNem1mDPaQdv_UYONq-0Q6NtwO17WiEFDhBdt-nGHQjuN5Lb-g6Sa1NKkx01ExteO9JHDt61Y7CA225HU9qO0Xa8A72talTpu0PaKde2-nZdpm0s7TtCqP7WYB7V-N41am9Nf2uZClCqeZjIhgElsapobgW1JxtpqupfAGgWELCMR0ajGb_JZ9CzRE2ViFQXq3kLXa4EKhJhsgL1DwB4EKiFRvIrgYHCjCyboA3qMAF6mAARAShvNxUVOLxBBiWtNA1TM3e5DC3RSRdNPE7i73O4Pd1WNIg9kTBD37dIt5axLQ8t1mzCGQ8woHuEMqGQ8ksqWtNelsGFp52o5ZTPS83S1Prbp2komMkFj0D9QhWwq6jMESBusiAGWs_F-oz2o8s9vcZPQiC2HPqawYKfhr1Sk3NBShMiVAOaBU0Aaj2pPYOnnnl7bZhwwu_LUtjQ3iq81aAAteFkbUVaW1T6hwW1LfY6xeeua3_qvtoB2A2B7QZqdkE34LRD9-ak_XoILCdRrI5ZG_cfuFSwASBeIHQUmDwLtBrA3QAFOm2SDFBOek2EoRtNil5U01k2eVpTwgOla3c5WlTZNkqDsAiAjk70V4J2ylDPgUQc0NAlVa0AcgzW9aYdEZ7Ft2gUrTYEcDDnytFYhYFfVRJP1LBShNBo4HQei6rds1EM4Oi_sYPwAv8RwYXbFMtUvNJA8BieMprTX1BSD5BiENQCSCNJugvBrIBPueDX0BW5gWZD6JyCXxEYFKeCpgeHAZSbMmAHIKutAkbp3cVwYA1z3WkEMbDdQWbbDABR4E74zgZCQYRpGJZ0RbgvAvuoZDZ0d9VetPAYXBnCAj9fB6tjYDAB34fMDBgtQYWiN34m9lGuNmCnUDoGVMOQafSkHMAV6SsdwtPLVHyN3QlFXw28feM0DUBDKwI1iQDn4DsLGQSAYbEBHKB_BSw5oH8GSCaOcp-AUczCc0f4BSxhjiUdYPwHKBqEIAF5fgFcH4CVReoiqzKt6G6OH4yQB5KAfkH5ZHifgxYaoKCBAC9GQAUQNADMZaMRVs4ox6sOMZgDzBwwp4-AKcbjbjHJIpx_gAAD1CoOAE6kRoOMrh-AATV4yAA-PeQcAwOHAN5EuOwx-ArqzQICZRg4ApYvu348LGhMDwlsODQY0Ca1g4AMmXxyEzWH4DcTATHxhEwifxMWB-AkalVZibePuQcAhUXE8VHJMtGjxLi_cYCaliKxPjlkc0PEBmB-AyTyJqEyoCg3EmTq8JiE0KYJMgBYQcA4TOaBkQjAxT9JwU2un-POIrQxJ83aCfBO2x3h8gZRWydXHfjXxqAd8aoo7lD0QAlSrRO0rtN6IAklcqYJoXfGGgyEOAIKRLsQDZINNGaZxngDZBuMPoCITVNsFV0EBJAqIIIO438AO5M0Kc-1OGePFbBlx7JvBtiil2ab_TgZ66sGZgChnwzGumM2bwEDxmdgdEQSKyZTOnjVxalUDFkojiahS5Tpl09jA-COTIgFxvBvaZ7PaJOl7iscLvszAOVuJi8H1XxKfGyniWM7dwmMAcpTmBAvjBEAqdGBgMclPQdQk5wilGLjFX8T0BFP4nQNYG8DBOQcrJBHLyhElP1sUvgSlLm5dwMBrrMfl0xHCzmE9DQB6SOF09fRd86DBciepponJfhseH_Ovnros1PdQb2uh0Khqa-NfriNPVadpoMF2_HSISBqjHCn56aKSF_NvDL-CWswLrOH7d8ALzUN8wIywvNRvzdhKC44QWJ9lRy_KQ9R73yle8rSdF8lFAFxqh1MWLg66JRcWANqBG1NQFr-aN4kWwLX5_qnRYpoHk4iVOXWbVnTbYZQMcNYCx-dOjNQlgsTXDKRfQCtSN6FWa6NOJ0tdA9LZnJxb0gPxKX7QEaboKZcnWaV5wYAIMaGLTLXQzwLcFEIJXUugxkGD1CKkNPAvTjzQhUNy5pHDFmCxLbJdAGAjUARgHLelich5a8uaV-Cvl0I9mWmhxXsAGF7C1QjUBW0MroF6aJVHHz8WCr2AYTX411RJcWAVSUngQD4zBA6DIGzSqolaKZm_TsuoMxKHzOZLCzcLSzS9QyYwBFYL1M3WWbvGJmjxVofzTjv0CNmgw-oUubQq91nwUY7kCE2afrX1WwAabYUBBStyYIPOS2JYAlSvN3AhBHEUHodKeWqd21o4XIHiVoAErdIoNKAnszUHytsBT1gFNV0cQXWMBcbO9tTkusooHeqbAcIAfvbVcUNVsIG4m38AptUAB1jNv9eVwobEby_DG4kGb6ksKBNANAAEeDE9E7iA4AG223YbHmEGr5MFO4SJj1AQq_lqCmz3pBzB1Q2Qa0bEI8Fgogo8rdbiICoOH5_euYAA4db7h8YQgnYTgFMB2wZSAAjgyAZD1AzY3QWxDrDBQZSlu1KmuBFfMAZScD44fkxSG_bigPcCWJLFbAxlvWGq_fZ6zjNtsfW-cFgufogRtvwQGqgpVErDeVxCDJ51_fCwFB-s4DcbjiMG8DaX1g9xIiKKAjdeYEU3ixUd7G1QJTun6mqEok6GnaGHVd08VwC_QEM1Ey947v8fAMjahtEwYbuNlDRHcPZtsU7BWuqLXaJgDrSW_6hu1tAXLd7RabQkm-CQcHk2FBfIraNTc4buY6buqBmxsSsAcRNLN0Vm1MHZv4QubOw1I5rd1T83BDqAcxtKyODi2h4c4EIFAEaHi5pbOQccPLd0lK2YAr9FA9K14Vod9MuqJQbLb2DhB1lwdbWzYFoB63PsfQT-7pKNugxLbJZD2-9Y7D22wHDVLta7fwtywoHoNb222l9uJBrrMdgcHhZZLZieFDtrIE7Y7BVba1Y3AHKeAlkiAWzg88fHdZJUCBq5wmEdTg-od4y6HZ3eIlGhisUO_FRs7B4LM_7PZ2Ho4PS5w59qb3atNAa-eRe64viFFDD3h75eEccq2HoBEWW8EaUsP-BoQ2R6bmD1KPCsV6YC5vbTCx0781fMFAjhmD8OEy16AgJVBiMZAjHG6kvazcj26P-qm59R1dE3POdQCNgTAOo472ZaQb-_CltoxpWfNLHhWZCL45gD-OXeiw9nFh3KIhOqW4WSSmwILv_qXM04v9RkKRvJsK7sIDNu0GSe-h2oJ0CpiU-6DKMgjyQ58loxScrr6nsACJ3XnwUYAwEELeIHpauDPnSkmFtQavprj5QOnMQLp4qUP5qN0Ap13uPE60eilwnrjpyF0GAupEcZzmE6wTIA2T9Qeb_QmSICeXqOP80jyh3M_MB7W0bR19Zy3GmfzBtnbOa66f1_h7OPUND9R2fijRto2gzUWxjFw4jFEKsZ17Bqc8NBzNMxHz4YPFw9hUqzhMQfKM4DeBRm4agL63MYLDFwBxGJtzRpSxtT69p1FTPk34GYsF3DoH_fFyM3YCP6o7tgFyRkHK1O88X8xWlHS_d7EvG7FTJlw062jk4qXcALF6E_peAaKnTTmwYOr8EVi2X8xSp4eu5fNFCKVsLURi78B8uUn-euADS8yAquFotgZV7AHefdlNzgsfxz7WecHOBBKsjIFRKgDqPOto06vhxIjCfMLLJsiZScD7gH4l7ckLxS7xRTsAPJ3QYoIwBCqbgNufmUAx9nNs7S9XhWOQmI5eesLuHkJcxy0-rAYzY3Ejpx0m8WfYo76sbywPCLOkZvZEybiwBi02AIzYAsmI8PsCuDQ1K3C22ot2RnZQA631b-KphhbfhAo0MiDt5DlCtRojhpMJoO4Rsd7Q3IILjZqAUVMp5YB054TLOajSpb-gJkRIOq7fSOvQCHr4UHAD1DhAUWMcoRhu42z4RUeGEs3sJnWbzND3HNrd4bESAtQ93F7lRuKnjUWAqlvZ-0_GE0Q7vpamEoGG-_fftLP33yVp7cb6fYXQCvTvSzbKeU9O2nYHrS1Y-N7mXEPEl6aPXpg9OIkP_TwrDZYIAqXcMC70mOmzARPL8PXQK4Lh7I9PuZBRAYx6s6yABOLML19AZ7dBouEZnewJgU8_kF3BOSHaw5R6wMgu9_1LvCAgJ-sZk26ovPPJR6zP0VTELiBGT3ILyUFKZKEnt2y-vE-_xGPnHqftx7f5RvQxtHl4MNTie4PXrrHjsOx9ue6edn4PNnIW5ccY0o0QDwWPR4yI-1DnunwWA88FiOeLHWbpxLW7-e1GrnEAB66Y91SZvnPTLZRXeei4WmzVrE91UOc4nbQvVY55eBOYHOYaS4Iap8bksOWqfwblilzPPU0T9JaadgT8R6Cq9xqi1lUCeNADpeMkANha5Vo02aZaz0VcKoZkxANqCwLIly2bRh_aBPLZtgK_k7EH7TtBJvvy2bQiqRUIhYIqKiyIt8hUrfnQs2xNVitxkXSdm7QHb0Sr2_JTZtIqgqO0HO-zbBvcoQWNd-gDCqqVtACyEKt5VPfUd1YHVd0eVXwo5QX3qVTKrO_qrK7Fkf73hkruZQc85RM8GfDPBkT3MlgZwCaPh4v84VfGoPCHmSwRTXMS2aPFBE67Y-E8S2bhlV4izE-M8n_bwjaaVlsj0TjW3uIQye7deAJ5ROFQfAaDuYChTDCMcyz50OBNzPomIZ1kzCUxRtE3Vr4vpsb8hmvRwHbLNciB_FEKI8rxxFIuhcL3EUeg1s1u9oM_VOAGzX4z-NbjdDFprcLYb9oS0V9JZDwc6EOi2CyLWEBowJMQLtta-xus0ebQFU40WbPWT_7Gtj5kZ3ViQSMAI2KdGw_4fiPsn73B50WANBg_eqk9aU-_xQCU6wDSH-YvyeX2a0pgof0OmzPaNjgwfoW6lC0xBL0mqgzSGSA0yVpOQXoKIVlC01HUdvPWSdhyBardF7Pzn_riYZR-W2mo6v4QdfLCehP5smvx8E3PvtZ-onlgLBaYsj-_C2QFC2vhOgD_F_M_1Cz9QwABOraBdhLPv04vcWjpq_j3Af8YuZgV_o_wg_RZxpn_QYm_h8K8PDm7_EConpP4OHn-t-xP55j1hf4X8e43__qKoDb-T_kOrH4gdn1Tf8eSlQidOEoi5g2wUvBnpF-S6lp7v-mGjp64anUIhoABAeKn4NYAAf7KZ-RQvgEGQKnscpqeyfqTaiwKARLhmeyiPn4hi3Crw46OVODab2AAvtfJ-6JasADa--vndzRSJ3OaiWoGGKgajgwwDBTM-yWqxbMgShBI6AuggeQBWouruzT2uoXIC7tAnlvMCKQBDHBTdAYrmTKpAbPA4brUuPreypeIXHCq9-cWGZyGKDhnFzNQC9t6Ie--gfECmg6AMkDYAOvMexnOZAeKqsKKKMYHZsoBGz4c-XPlqCWB6YvIGKBrBALKm4kvmUa0SPwpkqCQ5xqaq1GDAGCKaIdiokq46DypkFwIAWqkpzA84garUQVXioqpBLEl3JbwlyukrDeT4jip2K43k-Jze03ukotBZwPPTreyKpt7dAdil0HLe0KvRBPiR3hhgNB-QSMHEqeMjYrve6Sld5PiIVHYp3e8wQ95veaAukqveKQHME5eYPj96zBiqj942KwPrNh2KYPnqr_iaCOsCXKnKE8qco7QUmjrA_QSirOgnKBMEneOhJyjnenKD57rAGwZ8HrAOwTKofBRwSozxB3wtRDDAlAA2bZBOwIl5pBGinJAeqI5hl68SqXpfSwEe7qpIwm2St3KagmeOspOcr6JKDbKCitsrvyqkn3IFenirPY3mFEMpRxKrco-b1q0IYRy8WxUksB0A5Wm34ZiQfuUQgK-IQooRgMjqYGGW4-F2g1QLvA1johJMGujtA7hFSFG0gUCUj9KHPFzz1A1kjKjrYX7Dth8KIbu6jKhRgTKGWsUoV7wyhEivErrAyVuUQVA7uGSFpY0CO_ITyC4KAS2IZ4ISHj44NNXzWh2QO_Ltm7pJmD8iDUjsD8OcnKyFUw2wusAuhboaHixsmohyFUs-lkUJBIXBFJTzgREL9Behb8qzC-hAjBGCYAX0K4Cz8nBHJg4kLkHYTSoEFjw6m4HoR4Kjo-hJ8Q4kxFrehlhOwLPzFYqsGthF8VEvGHbCZypQjMhLJMooQhUIYUEbEFQeopsSckCDB4htiAorkhKkJSGzhNITErpwJhm4rx6TISOFGyhFDOGUOgoSc6xeJQepR-YWlAN4cQsIZUHwhHijUH9IShDUEuqJqigiry5RDUEGQMsiICzOSYjIJy0xrhHQ2o_JEKR0aopJZK3hp4eJB2EQVL-FRCBFkQ4-B_XiJCG0QsMoplBTyueHjh65jio3hBijQ6YhD4f3LlEOKq-FBYwEVhF4yXMmCJjcHyvXIJBpQVmSCQdwahFWm65ncHeKxsi3DMR94SJIX0lIaQGXmRSleK7mPdGV5FcUwMxGvhefkC6fhd8qkBx2YwEoR3BXMhYC0ixAXVBme9fPp72e1FJJEc0ctPe4jASwALhZO_JG_xih55sV4A8ZrmpFXWQLgPZ1Qukf-q88dkfBZSBeIkUK6RaFi4Jt0qQJg7HkODoUDQR5EbBF3BNEmCFHh7qIJCPBPQQxHmqmihFGDBLEUoSxRqKjhGcR2IZorOsYHPXqg8PEf9ynK_EQFpGq95o-G_IaZIlEwqYkUTISRIouFZuUsADEZ94cKLVCFQStEOAzAxsDUSNRzUaToEA9UQWAGQTUdpYiATkm1EjEfUdZD_h6nkmEpcBkOlHiQBVJlFs4j4KVH6c1kTTR38mWEt5PBNKsREtwS0eBGzRXQOdasw3UW_guERMMNGEAqyDUQ9RVRF4A3AkQOdHQyhWCAiIqG3oMFf-SQIJ4qRFkVx5WRBnlpFSRUEMRy5kyXPtFhCBkblG2C6nrWGmRPgeZGhCdztx7W4NkZmyOcjdqhxD--_Khy1QM0fliusMoCziyh60a9Goq61AZ7gBPkbw7PRG0T0GEOAUZebsAS0cFFqUZQa8EoRY4YxEWqrMdhGYRLcFzF4yyUefRFRlDISqjB2EeVHvhlUbfL9iUEFEBYAqdDSpawYOBKz6keAPLGNRyTMDglQIQHQQYMXRLVCfMV5DeRSR-9kdZ9etuO_AeCKAlQTwAj7ngQYs8QNSyIscsIKD5AJMLozYUyLG7EZieBKECsA_aAe6Q0LzO7Fo0a6ALjvsCPIU6mxH_FnicomNGmSyWtPBeSCUcbALgeC_lrbH76YHBnGIEovjAAus2ceCShx78OHEJxOoEnGN2McbRrBsYsY6JKEfMft4RgssfLGLC6bEdbaWKsc3HaxEQLrH5QloXjLX-XFrf5hsZrhVa-WMYT4T78CcbmHwA-5InH5IIlowGm4EMqSq9hClLBH1xyUkzG8QZQed5RRyXharne8UZgiHxHEYLGX0OMXNH4x9zmea_csMblE1e-UXuZCRR8hSozB4sf4oouVUV-GaQaUGsFl8rERADneEYBfFdA80dp6Xe73utTW4E5L_HUq70YkCfROnpZGuYf0V_HN-gMY5wuEYHPpFQKEMTx4syVATDG8RC0apE_RrmEjHNEd7HtG4x_6sgmPsoMdk4aRD7OjGN2KMQjCPkZCZ7ioxv6kwkooQMUYQYxoQvQk0J00aOAusYCXcCPgV3g86qClARTGm4sCaKqrxn2LBHneW8TRF-BkgILB7xVQZQi20dgEoQhUp8aJJPhzKrPbvxH4WgnSxIMUdLtA61A7A0qyiIbHqehFNtEQAgsNQnJoQ8Lq60xfYmNyCw6iaFECQWiSsGbB73jomXhblL8EzBPMe4mhJJ8cJJnxlISAl4x7rNfHZRJyteZ5Rd5s_HrmfepvrOq2SQVFn0eEcyrxJb8XVDiRn8VLGP4SBB1HNRExKNFjRqThQFSRWMaIm_OoMRIkS4v-uUloCUCQ5638aZGlb_xhiX0nUq1CbvRIEhxDUQTkmlPAmIJpCXp6_RvCePHoJUqLADOAmLGEImKFWq7H7QLNJgk2JUyeDFZJkMa0mEJt8cQnaeSyaDwUJmorsmOq-yQaJFCono8ngstaNDTNiUChvoqaZYQ6ofJ-0Dgr92lCUli7JWyQ7GCJtTuCnbJmVt8mCkvyWmr_JiKtsnApbtv36oxH_CwkeCbyVNEjgnSbjHdJUiZAkyJgyXIlWOvDu1b-RfibBHRJjKlREhRO8fsEyqESROEeKAIW2hHxLcBylVEcDJVBmwB8HqBeyuigLFuqFqhknkBVkSkndJO5o_GCR5SsJHr4zKZykWJksezSTRDCR0niJV8eAkHB9AQDHksrcS7IWYfsXRwsAxqccAPozSHFAGQfKQKlCp3sm8qWAIoA0CVQ7mARKw-SPuNEUB1UQsa_guwaMnHxyqfGKocEQkan8GuQKakFWyKq5i6R1qVBEtUwaQslyCSCWQmkpmkVYkGp_CVgmgxOCRHEsIMka9yXJF5jlE3J30csnkJZKRikIwWKWBxQpM7MInCsWqRlE6pkie0B6p-Cd5EUpCicGm-JW8GNw8pgSUym6qldqynrmpwZXZcpgCcCGipXETl6IhXEKOYohIoefFiJLaWknceEqSV5LhOSQqkvxaZBOmaqlSRVHVJ6qeUTtJ-KdqkbpbaYenLRFCQakA6BaWYLWMvqdDYyRACbemTJB0amovMW3MbijpykamkVp6abx7_R1idmnHJ36acmDgRkbwk76IoRGB3qtgH6Kv8vCYKRpqNyGZy3pP6TQB2AxPDoHsAnPOtTtAfoowCWsKmmIDbqxaWZEkJ5aXclVpt5CpGYpMxNil7-QiRenSpraT0m3ppMasnkx3aaKTQ2faTFT0xt6UzHtGuAFBK0iVRh3RAiF4SABGQIALQA-gWQDMb8ATgcmYma9ePwAGmfsPIBAAA",mdxType:"Playground"},Object(i.b)(g.a,{width:500,height:300,options:{backgroundColor:15659509},mdxType:"Stage"},Object(i.b)(r,{anchor:.5,x:250,y:150,text:"Hello World!",style:{font:"50px Desyrel"},mdxType:"BitmapText"}))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Make sure to load the bitmap font data before mounting."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://pixijs.io/examples/#/demos/text-demo.js"}),"https://pixijs.io/examples/#/demos/text-demo.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import { render } from 'react-dom'\nimport { Stage, BitmapText } from '@inlet/react-pixi'\n\nPIXI.loader\n  .add('desyrel', './assets/desyrel.xml')\n  .load(onAssetsLoaded)\n\nconst App = () => (\n  <Stage>\n    <BitmapText text=\"Hello World\" style={{ font: '35px Desyrel' }}>\n  </Stage>\n)\n\nfunction onAssetsLoaded() {\n  render(<App />, document.getElementById('root'))\n}\n")))}F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/BitmapText.mdx"}}),F.isMDXComponent=!0}}]);
//# sourceMappingURL=src-components-bitmap-text.3b045cdafaa302fec6a6.js.map
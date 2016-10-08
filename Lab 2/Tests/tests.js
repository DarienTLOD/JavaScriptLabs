var $$Q = QUnit;

$$Q.module("lab2",{
				before: function(){
					this.sandbox = sinon.sandbox.create();
				},
				afterEach: function(){
					this.sandbox.restore();
				}
			}, 
			function(){
				QUnit.test( "getType Test", function( assert ) {
				  assert.strictEqual( getType(10), "number", "getType(number)" );
				  assert.strictEqual( getType("1"), "string", "getType(string)" );
				  assert.strictEqual( getType(true), "boolean", "getType(boolean)" );
				  assert.strictEqual( getType(undefined), "undefined", "getType(undefined)" );
				  assert.strictEqual( getType(null), "null", "getType(null)" );
				  assert.strictEqual( getType({}), "object", "getType(object)" );
				  assert.strictEqual( getType(function(){}), "function", "getType(function)" );
				});
				
				QUnit.test( "askForAge Test", function( assert ) {
					var promptStub = this.sandbox.stub(window,"prompt");
				  promptStub.withArgs("Введите ваш возраст").returns(5);
				  assert.strictEqual( askForAge(), "до 18", "user's input : 5" );
				  promptStub.withArgs("Введите ваш возраст").returns(19);
				  assert.strictEqual( askForAge(), "от 18 до 25", "user's input : 19" );
				  promptStub.withArgs("Введите ваш возраст").returns(33);
				  assert.strictEqual( askForAge(), "от 25 до 50", "user's input : 33" );
				  promptStub.withArgs("Введите ваш возраст").returns(98);
				  assert.strictEqual( askForAge(), "от 50 и старше", "user's input : 98" );
				  promptStub.withArgs("Введите ваш возраст").returns("hello");
				  assert.strictEqual( askForAge(), "Возраст не определен", "user's input : hello" );
				  promptStub.withArgs("Введите ваш возраст").returns('');
				  assert.strictEqual( askForAge(), "Возраст не определен", "user's input : \[nothing\]" );
				  promptStub.withArgs("Введите ваш возраст").returns(0);
				  assert.strictEqual( askForAge(), "до 18", "user's input : 0" );
				});
				
				QUnit.test( "doubleFactorial Test", function( assert ) {
					assert.strictEqual( doubleFactorial(10), 3840, "doubleFactorial(10) must be 3840" );
					assert.strictEqual( doubleFactorial(5), 15, "doubleFactorial(5) must be 15" );
					assert.strictEqual( doubleFactorial("str"), null, "doubleFactorial(\"str\") must be null" );
					assert.strictEqual( doubleFactorial(0), null, "doubleFactorial(0) must be null" );
					assert.strictEqual( doubleFactorial(-1), null, "doubleFactorial(-1) must be null" );
					
				});
				
				QUnit.test( "getCharCount Test", function( assert ) {
					assert.strictEqual( getCharCount("h", "hello"), 1, 'getCharCount("h", hello")' );
					assert.strictEqual( getCharCount("a", "Australia"), 3,'getCharCount("a", "Australia")' );
					assert.strictEqual( getCharCount("", "Belarus"), 0, 'getCharCount("", "Belarus")' );
					assert.strictEqual( getCharCount("A", "Canada"), 3, 'getCharCount("A", "Canada")' );
					assert.strictEqual( getCharCount("B", ""), 0, 'getCharCount("B", "")' );
					assert.strictEqual( getCharCount("", ""), 0, 'getCharCount("", "")' );
					assert.strictEqual( getCharCount("ANZ", "Australia"), 3, 'getCharCount("ANZ", "Australia")' );
				});
				
				QUnit.test("askForNumber Test. User's inputs: -1, 0, 10, str, Infinity, 123", function (assert){
					var inputs = ["-1","0","10","str","Infinity","123"];
					var i=0;
					var promptStub = this.sandbox.stub(window,"prompt", function () {
						i++;
						return inputs[i-1];
					});
					
					var alertStub = this.sandbox.stub(window,"alert");
					
					askForNumber();
					
					assert.strictEqual(promptStub.callCount,6, "prompt must be called 6 times");
					assert.ok(alertStub.calledWith("Вы ввели "+inputs[5]), "Message must be: \"Вы ввели "+inputs[5]+"\"");
				})
				
				QUnit.test("isNuneric Test", function(assert){
					var inputs = [1,"qwerrt","10px",true, null,undefined,{},{id:5, toString:function(){return "{id:5}"}},10,0,-1,15.2];
					var results = [true, false, false,false,false,false,false,false,true,true,true, true];
					
					inputs.forEach(function(item,i){
						assert.strictEqual(isNumeric(item),results[i],"isNuneric("+(typeof item === "string" ? "\""+item+"\"" : item) +") must be " +  (typeof results[i] === "string" ? "\""+results[i]+"\"" : results[i]));
					})
				})
			
				QUnit.test("toHex Test", function(assert){
					var inputs = [1,"qwerrt","10px",true, null,undefined,{},{id:5, toString:function(){return "{id:5}"}},10,0,-1, 255];
					var results = ["1", "qwerrt", "10px","true","null","undefined","[object Object]","{id:5}","a","0","-1","ff"];
					
					inputs.forEach(function(item,i){
						assert.strictEqual(toHex(item),results[i],"toHex("+item+") must be " + results[i]);
					})
				})
				
				QUnit.test("getDecimal Test", function(assert){
					var inputs = [1.25,0.2,12.5,-0.2,-7.65,0.0008,5.66666];
					var results = [0.25, 0.2, 0.5,0.2,0.65,0.0008,0.66666];
					
					inputs.forEach(function(item,i){
						assert.strictEqual(getDecimal(item),results[i],"getDecimal("+(typeof item === "string" ? "\""+item+"\"" : item) +") must be " +  (typeof results[i] === "string" ? "\""+results[i]+"\"" : results[i]));
					})
				});
				
				QUnit.test("fibonachi Test", function(assert){
					var inputs = [5,10,40,12,-6,0,22];
					var results = ["1,1,2,3", "1,1,2,3,5,8", "1,1,2,3,5,8,13,21,34","1,1,2,3,5,8","","","1,1,2,3,5,8,13,21"];
					
					inputs.forEach(function(item,i){
						assert.strictEqual(fibonachi(item),results[i],"fibonachi("+(typeof item === "string" ? "\""+item+"\"" : item) +") must be " +  (typeof results[i] === "string" ? "\""+results[i]+"\"" : results[i]));
					})
				});
				
				QUnit.test("changeCase Test", function(assert){
					var inputs = ["QWE","rty", "QWErty123!@#", true, 10, 40, "1233463463sdvsdvs"];
					var results = ["qwe", "RTY", "qweRTY123!@#","TRUE","10","40","1233463463SDVSDVS"];
					
					inputs.forEach(function(item,i){
						assert.strictEqual(changeCase(item),results[i],"changeCase("+(typeof item === "string" ? "\""+item+"\"" : item) +") must be " +  (typeof results[i] === "string" ? "\""+results[i]+"\"" : results[i]));
					})
				});
				
				QUnit.test("round Test", function(assert){
					var numbers = [10.288,0.5558,11.92,6.35,1.09,214.000000000000008];
					var counts =  [1,2,-1,1,0,-2];
					var results = [10.3, 0.56, 10,6.4,1,200];
					
					numbers.forEach(function(item,i){
						assert.strictEqual(round(item, counts[i]),results[i],"round("+item+ ","+counts[i]+ ") must be "  + results[i]);
					});
				});
				
				QUnit.test("contains Test", function(assert){
					var strs = ["123456","QWErty!@#","","Hello world","11111111"];
					var substrs =  ["123",""," "," ","0"];
					var results = [true,null,null,true,false];
					
					strs.forEach(function(item,i){
						assert.strictEqual(contains(item, substrs[i]),results[i],"contains(\""+item+ "\",\""+substrs[i]+ "\") must be \""  + results[i]+"\"");
					});
				});
				
				QUnit.test("substringCount Test", function(assert){
					var strs = ["123123123456","a b c d t ","","Hello world","11111111"];
					var substrs =  ["12"," ","a","l",""];
					var results = [3,5,0,3,0];
					
					strs.forEach(function(item,i){
						assert.strictEqual(substringCount(item, substrs[i]),results[i],"substringCount(\""+item+ "\",\""+substrs[i]+ "\") must be \""  + results[i]+"\"");
					});
				});
				
				QUnit.test("compare Test", function(assert){
					var strs = ["QWErty","QWErty","a b c d t ","","",""];
					var strs2 =  ["qweRTy","qweRTy","a b c d t ","a","",""];
					var flags =  [false,true,true,false,true,false];
					var results = [true,false,true,false,true,true];
					
					strs.forEach(function(item,i){
						assert.strictEqual(	compare(item, strs2[i], flags[i])
						,results[i]
						,"compare(\""+item+ "\",\""+strs2[i]+ "\"," +flags[i] + ") must be \""  + results[i]+"\"");
					});
				});
				
				QUnit.test("truncate Test", function(assert){
					var strs = ["123123123456","a b c d t ","Hello world"];
					var substrs =  [6,8,12];
					var results = ["123...","a b c...","Hello world"];
					
					strs.forEach(function(item,i){
						assert.strictEqual(truncate(item, substrs[i]),results[i],"truncate(\""+item+ "\",\""+substrs[i]+ "\") must be \""  + results[i]+"\"");
					});
				});
				
			}
		);

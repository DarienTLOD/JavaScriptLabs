var $$Q = QUnit;

$$Q.module("lab3",{
				before: function(){
					this.sandbox = sinon.sandbox.create();
				},
				afterEach: function(){
					this.sandbox.restore();
				}
			}, 
			function(){
				$$Q.test( "1)lab3 object test", function( assert ) {
				  assert.ok( lab3, "lab3 must be defined" );
				  assert.strictEqual( typeof lab3, "object", "lab3 must be an object" );
				  assert.ok( lab3.id, "lab3 must have an id" );
				  assert.strictEqual( typeof lab3.id, "number", "lab3.id must be a number" );
				  assert.ok( lab3.students && lab3.students.length>0, "lab3 must have an array students with 1 or more string elements" );
				  assert.ok( lab3.students.every(function(item){return typeof item === "string"}), "all elements in lab3.students array must be string" );
				  assert.strictEqual( lab3.teacher, "Безручко Алексей Николаевич", "lab 3 must have a teacher property, and you must know your teacher" );
				});
				
				$$Q.test( "2) checkProp test", function( assert ) {
				  assert.strictEqual( checkProp({id:5},"id"), 5, "checkProp({id:5},\"id\") must return 5" );
				  assert.strictEqual( checkProp({id:5},"name"), false, "checkProp({id:5},\"name\") must return false" );
				  assert.strictEqual( checkProp({id:5, "full name": "Jonn Clark"},"full name"), "Jonn Clark", "checkProp({id:5, \"full name\": \"Jonn Clark\"},\"full name\") must return Jonn Clark" );
				});
				
				$$Q.test( "3) lab3.getAllProperties test", function( assert ) {
				  assert.strictEqual( lab3.getAllProperties({id:5, name:"Jonn", address:"London"}), "address, id, name", "lab3.getAllProperties({id:5, name:\"Jonn\", address:\"London\"}) must return \"address, id, name\"" );
				   assert.strictEqual( lab3.getAllProperties({5:5, 3:"Jonn", 9:"London"}), "3, 5, 9", "lab3.getAllProperties({5:5, 3:\"Jonn\", 9:\"London\"}) must return \"3, 5, 9\"" );
				  
				});
				
				$$Q.test( "4) lab3 clone object test", function( assert ) {
					var o = {id:5, name:"Jonn", address:"London"};
					var clone = lab3["clone object"](o);
					var c = o;
				  assert.notStrictEqual(o,clone, "method must return different object");
				  assert.propEqual(o,clone, "clone must have the same properties with the same values")
				  
				});
				
				$$Q.test( "5) addToBeginingOfArray test", function( assert ) {
					this.sandbox.stub(Array.prototype, "toString", function(){
						return "["+this.join()+"]"
					});
					
					var cases = [{
						inputs:[true,[5,6,7]],
						output:[true,5,6,7]
					},{
						inputs:["a",['b',1,true]],
						output:["a",'b',1,true]
					},{
						inputs:[1,[]],
						output:[1]
					},{
						inputs:[1],
						output:[1]
					}]
					
					for(var i =0;i<cases.length;i++){ 
						assert.deepEqual(addToBeginingOfArray(cases[i].inputs[0],cases[i].inputs[1]),cases[i].output, 
						"addToBeginingOfArray("+cases[i].inputs[0]+","+cases[i].inputs[1]+") must return "+ cases[i].output);
					}
				  
				});
				
				$$Q.test( "6) getLastElement test", function( assert ) {
					this.sandbox.stub(Array.prototype, "toString", function(){
						return "["+this.join()+"]"
					});
					
					var cases = [{
						input:[5,6,7],
						outputs:[7,[5,6]]
					},{
						input:['b',1,true],
						outputs:[true,['b',1,]]
					},{
						input:[],
						outputs:[undefined,[]]
					},{
						input:undefined,
						outputs:[undefined,undefined]
					}]
					
					for(var i =0;i<cases.length;i++){ 
						assert.strictEqual(getLastElement(cases[i].input),cases[i].outputs[0], 
						"getLastElement("+cases[i].input+") must return "+ cases[i].outputs[0]);
						assert.deepEqual(cases[i].input,cases[i].outputs[1], "array must be "+ cases[i].outputs[1])
					}
				  
				});
				
				$$Q.test( "7) getFirstElement test", function( assert ) {
					var arr = [5,6,7];
					assert.strictEqual(getFirstElement(arr),5,"getFirstElement([5,6,7]) must return 5");
					assert.deepEqual(arr,[6,7], "array must become [6,7]")
					assert.strictEqual(getFirstElement([]),undefined,"getFirstElement([]) must return undefined");
					assert.strictEqual(getFirstElement(),undefined,"getFirstElement() must return undefined");
					
				});
				
					
				$$Q.test( "8) addToEndOfArray test", function( assert ) {
					
					assert.deepEqual(addToEndOfArray(5),[5], "addToEndOfArray(5) must return [5]");
					assert.deepEqual(addToEndOfArray(5,null),[5,null], "addToEndOfArray(5,null) must return [5,null]");
					assert.deepEqual(addToEndOfArray([5,undefined,null], true),[5,undefined,null,true], "addToEndOfArray([5,undefined,null], true) must return [5,undefined,null,true]");
					assert.deepEqual(addToEndOfArray(true, false,true,false,1,null,undefined,NaN),[true, false,true,false,1,null,undefined,NaN], 'addToEndOfArray(true, false,true,false,1,null,undefined,NaN) must return [true, false,true,false,1,null,undefined,NaN]');
					
					assert.deepEqual(addToEndOfArray([],true, false,true,false,1,null,undefined,NaN),[true, false,true,false,1,null,undefined,NaN],'addToEndOfArray([],true, false,true,false,1,null,undefined,NaN) must return [true, false,true,false,1,null,undefined,NaN]');
				});
				
				$$Q.test( "9) setSize test", function( assert ) {
					var arr = [5,6,7];
					assert.strictEqual(setSize(arr,1),1,"setSize([5,6,7],1) must return 1");
					assert.deepEqual(arr,[5], "array must become [5]")
					assert.strictEqual(setSize([]),0,"setSize([]) must return 0");
					assert.strictEqual(setSize([5,6,7],12),3,"setSize([5,6,7],12) must return 3");
					assert.strictEqual(setSize([5,6,7],NaN),3,"setSize([5,6,7],NaN) must return 3");
					assert.strictEqual(setSize([5,6,7],true),3,"setSize([5,6,7],true) must return 3");
					assert.strictEqual(setSize([5,6,7],0),0,"setSize([5,6,7],0) must return 0");
					
				});
				
				$$Q.test( "10) remove3 test", function( assert ) {
					this.sandbox.stub(Array.prototype, "toString", function(){
						return "['"+this.join("','")+"']"
					});
					
					var inputs = [
					"Duplicates and extends the functionality of a native HTML select element to overcome the limitations of the native control",
					"The datasource is a native select element. Supports optgroups.",
					"Displays collapsible content",
					""
					];
					
					var outputs = [
						[  "Duplicates",  "HTML",  "element",  "extends",  "functionality",  "limitations",  "native",  "native",  "of",  "of",  "overcome",  "select",  "the",  "the",  "the",  "to"],
						[  "Supports",  "The",  "is",  "native",  "optgroups.",  "select"],
						[  "Displays",  "collapsible"],
						[""]
					];
					
					for(var i =0;i<inputs.length;i++){ 
						assert.deepEqual(remove3(inputs[i]),outputs[i],
						"remove3("+inputs[i]+") must return "+outputs[i]) ;
					}
				});
				
				
				$$Q.test( "11) sortCars test", function( assert ) {
					var spy = this.sandbox.spy(Array.prototype, "sort");
					
					var Car = function(brand,model,year){
						this.brand=brand;
						this.model=model;
						this.year=year;
					}
					var cars = [];
					cars.push(new Car("Opel","Astra",1995));
					cars.push(new Car("Opel","Astra",1999));
					cars.push(new Car("Opel","Astra",1996));
					cars.push(new Car("Opel","Movano",2002));
					cars.push(new Car("Audi","A6",2003));
					cars.push(new Car("Audi","A4",1992));
					cars.push(new Car("Bmw","X5",2011));
					cars.push(new Car("Mersedes","A170",2010));
					
					sortCars(cars);
					
					assert.ok(cars.every(function(c,i,arr){
						if(i>0 && i<arr.length){
							return arr[i].brand>arr[i-1].brand 
							|| (arr[i].brand===arr[i-1].brand  && arr[i].model>arr[i-1].model )
							|| (arr[i].brand===arr[i-1].brand  && arr[i].model === arr[i-1].model && arr[i-1].year>=arr[i-1].year);
						}
						return true;
					}),"cars must be sorted");
					
					assert.ok(spy.calledOnce,"function sort must be called once");
				});	

				$$Q.test( "12) updateCase test", function( assert ) {
					
					var Car = function(brand,model,year){
						this.brand=brand;
						this.model=model;
						this.year=year;
					}
					var cars = [];
					cars.push(new Car("Opel","Astra",1995));
					cars.push(new Car("Opel","Astra",1999));
					cars.push(new Car("Opel","Astra",1996));
					cars.push(new Car("Opel","Movano",2002));
					cars.push(new Car("Audi","A6",2003));
					cars.push(new Car("Audi","A4",1992));
					cars.push(new Car("Bmw","X5",2011));
					cars.push(new Car("Mersedes","A170",2010));
					cars1=cars;
					
					updateCase(cars,3)
					
					assert.ok(cars.every(function(c,i,arr){
						return c.brand.toUpperCase()===c.brand && c.model.toUpperCase()===c.model
					}));
					assert.ok(cars1===cars,"array must be the same");
				});	

				$$Q.test( "13) getCarsNewerThan test", function( assert ) {
					this.sandbox.stub(Array.prototype, "toString", function(){
						return "["+this.join(",")+"]"
					});	
					
					var Car = function(brand,model,year){
						this.brand=brand;
						this.model=model;
						this.year=year;
						this.toString = function(){
							return "\n{brand:'"+this.brand+"', model:'"+this.model+"', year:"+this.year+"}"
						}
					}
								
					var cars = [];
					cars.push(new Car("Iveco","Daily",1982));
					cars.push(new Car("Opel","Astra",1995));
					cars.push(new Car("Opel","Astra",1999));
					cars.push(new Car("Opel","Astra",2001));
					cars.push(new Car("Opel","Movano",2002));
					cars.push(new Car("Audi","A6",2003));
					cars.push(new Car("Audi","A4",2009));
					cars.push(new Car("Bmw","X5",2011));
					cars.push(new Car("Mersedes","A170",2010));
					cars.push(new Car("Mersedes","w123",1984));
					
					var result = getCarsNewerThan(cars,2000)
					
					assert.deepEqual(result, ["Audi","Bmw","Mersedes","Opel"],"getCarsNewerThan("+cars.toString()+',2000) must return ["Audi","Bmw","Mersedes","Opel"]');
				});	
				
				

				$$Q.test( "14) checkSort test", function( assert ) {
						
					assert.strictEqual(checkSort(["1","2","3"]), true,'checkSort(["1","2","3"]) must return true');
					assert.strictEqual(checkSort(["1","33","22"]), false,'checkSort(["1","33","22"]) must return false');
					assert.strictEqual(checkSort(["1","11","22","3","33"]), true,'checkSort(["1","11","22","3","33"]) must return true');
					assert.strictEqual(checkSort(["1","11","22","3","3"]), true,'checkSort(["1","11","22","3","3"]) must return true');
					assert.strictEqual(checkSort(["1","11","22","33","3"]), false,'checkSort(["1","11","22","33","3"]) must return false');
				});	

				$$Q.test( "15) contain test", function( assert ) {
						
					this.sandbox.stub(Array.prototype, "toString", function(){
						return "["+this.join(",")+"]"
					});	
					
					var Car = function(brand,model,year){
						this.brand=brand;
						this.model=model;
						this.year=year;
						this.toString = function(){
							return "\n{brand:'"+this.brand+"', model:'"+this.model+"', year:"+this.year+"}"
						}
					}
					
									
					var cars = [];
					cars.push(new Car("Iveco","Daily",1982));
					cars.push(new Car("Opel","Astra",1995));
					cars.push(new Car("Opel","Astra",1999));
					cars.push(new Car("Opel","Astra",2001));
					cars.push(new Car("Opel","Movano",2002));
					cars.push(new Car("Audi","A6",2003));
					cars.push(new Car("Audi","A4",2009));
					cars.push(new Car("Bmw","X5",2011));
					cars.push(new Car("Mersedes","A170",2010));
					cars.push(new Car("Mersedes","w123",1984));
					
									
					assert.strictEqual(contain(cars, new Car("Bmw","X5",2011)), true,"contain("+cars.toString()+','+ (new Car("Bmw","X5",2011)).toString()+') must return true');
					assert.strictEqual(contain(cars, new Car("Volvo","S40",2011)), false,"contain("+cars.toString()+','+ (new Car("Volvo","S40",2011)).toString()+') must return false');
					assert.strictEqual(contain(cars, cars[4]), true,"contain("+cars.toString()+','+ (cars[4]).toString()+') must return true');
				});		

				$$Q.test( "16) getAvgAge test", function( assert ) {
						
					this.sandbox.stub(Array.prototype, "toString", function(){
						return "["+this.join(",")+"]"
					});	
					
					var Car = function(brand,model,year){
						this.brand=brand;
						this.model=model;
						this.year=year;
						this.toString = function(){
							return "\n{brand:'"+this.brand+"', model:'"+this.model+"', year:"+this.year+"}"
						}
					}
					
									
					var cars = [];
					cars.push(new Car("Iveco","Daily",1982));
					cars.push(new Car("Opel","Astra",1995));
					cars.push(new Car("Opel","Astra",1999));
					cars.push(new Car("Opel","Astra",2001));
					cars.push(new Car("Opel","Movano",2002));
					cars.push(new Car("Audi","A6",2003));
					cars.push(new Car("Audi","A4",2009));
					cars.push(new Car("Bmw","X5",2011));
					cars.push(new Car("Mersedes","A170",2010));
					cars.push(new Car("Mersedes","w123",1984));
					
									
					assert.strictEqual(getAvgAge(cars), 16,"contain("+cars.toString()+') must return true');
				});						
				
				
			}
		);

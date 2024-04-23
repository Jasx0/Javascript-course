//Set Object - Collection of values 

               //values are unique(not display repeated values)

               let arr =[1,1,22,4,5,6,7,7,7,8,9]

               let mySet1 = new Set(arr)
               console.log(arr);
               console.log(mySet1);

               let mySet2 = new Set ()
               mySet2.add(4)
               mySet2.add(5)
               mySet2.add('pqr')
               mySet2.add({'a':1,'b':2})
               mySet2.add(4)

               console.log(mySet2);
               let obj={'a':1,'b':2}
               mySet2.add(obj)

               console.log(mySet2);
               console.log(mySet2.size);

               console.log(mySet2.has(4));

               console.log(mySet2.delete(4));

               let arr2 = Array.from(mySet2)

               console.log(arr2);

            

               //Map - objects are collections of key value pairs
               //a key  in the map may only occur once

               //key or value  can be object


               let map1 = new Map()

               map1.set('a',1)
               map1.set('b',2)
               map1.set('a',3)

               console.log(map1);
               console.log(map1.size);
               console.log(map1.has('b'));

               map1.delete('a')
               map1.set('d',2)
               map1.set('e',3)

               for (let i of map1){
                console.log(i);
               }

               for (let [k,v] of map1){
                console.log(v);
               }

               for (let k of map1.keys()){
                console.log(k);
               }

               map1.forEach((v,k)=> {
                console.log('key',k,'values',v);
               })

               // 2d array to map

               let kvArray = [['a',1],['b',1]]
               let map2 = new  Map (kvArray)

               console.log(map2);
               console.log(...map2);
 


               











               

        
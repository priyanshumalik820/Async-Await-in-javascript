function getData(dataId) {
   return new Promise((resolve, reject) =>{
     setTimeout(() => {
     console.log("data" ,dataId);
     resolve("sucess");
   },3000);
 });
}
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
 }
// I have a simple fix but of course you can refactor it to make life easy for you.

    result = [
    { name: "Wild", lat: "47.9163329", long: "-97.0467415" },
    [[[[[[[[[[[[[[[[[[[{ name: "Diamond", lat: "47.9163295", long: "-97.0495925" }]]]]]]]]]]]]]]]]]]],
    [[{ name: "Gold", lat: "57.9163295", long: "-17.0495925" }]]
    ];

    //this is just to hold the record from the loop
    let loopFlag;

    //the first loop from result
    result.map(eachRecord => {

    //set eachRecord to the flag
    loopFlag = eachRecord;

    //checks to make sure it is an object otherwise run another loop(if an array)
    while (Array.isArray(loopFlag)) {
        loopFlag.map(eachRecordInArray => {
        loopFlag = eachRecordInArray;
        });
    }

    // print keys
    console.log('-------------------------------');
    Object.keys(loopFlag).map(theKeys=>{
        console.log(theKeys);
    });
    // print values
    console.log('-------------------------------');
    Object.values(loopFlag).map(theValues=>{
        console.log(theValues);
    });
    });

// In this case it will always check and find only the object you need to retrieve the data from. 
// You can try to add more `[]` to the second index of the result and you will see that it will loop till it finds an object to retrieve the data you need.
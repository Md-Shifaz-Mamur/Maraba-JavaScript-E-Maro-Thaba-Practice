// Alternative
const profile = {
    name:"Shifaz",
    age:28,
    city: "Dhaka"
};
const keysArray = Object.keys(profile);
for(const singleKeysColumn of keysArray){
     console.log(singleKeysColumn, profile[singleKeysColumn]);
    // 1. console.log(keysArray);    //1  Get an Array
    // console.log(singleKeysColumn);   //2  Get keys printed separately in a column
    // console.log(profile[singleKeysColumn]); //3 value of 2 {Get keys printed separately in a column}
}


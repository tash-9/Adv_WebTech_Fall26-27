function getStudentResult(){
    return new Promise((resolve, reject) =>{
        console.log("Requesting student result...");

        setTimeout(() =>{
            const success = true;

            if (success){
                const student = {
                    ID: 101,
                    name: "Rahim",
                    dept: "CSE",
                    marks: 85
                }
                resolve(student);

            } else {
                reject("Failed")
            }
        }
        , 3000);
    });
}

getStudentResult().then((student) => {
    console.log("Gwtting student result...")
    console.log(student)
})

.catch((error) => {
    console.log("Error")
})

diplayResult();
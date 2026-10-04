function getStudentResult(){
    return new Promise((resolve, reject) =>{
        console.log("Requesting student result...");

        setTimeout(() =>{
            const success = true;

            if (success){
                const student = {
                    id: 101,
                    name: "Rahim",
                    dept: "CSE",
                    marks: 85
                }
                resolve(student);
            } else {
                reject("Failed")
            }
        }, 3000);
    });
}

async function diplayResult(){
    console.log("Getting student result...");
    try{
        const student = await getStudentResult();
        console.log("Getting student result...")
        console.log("ID: " + student.id);
        console.log("Name: " + student.name);
        console.log("Department: " + student.dept);
        console.log("Marks: " + student.marks);
        console.log(student)
    } 
    catch(error) {
        console.log("Error: " +error);
    } 
    finally {
    console.log("Result processing complete")
    }
}

diplayResult();
let formbtn=document.getElementById("formbtn")
formbtn.addEventListener("click",displayDetails);

let row=1;

function displayDetails(event){
    let name=document.getElementById("inputName").value
    let age=document.getElementById("inputAge").value


    let selectGender=document.getElementById("selectGender")
    let gender=selectGender.options[selectGender.selectedIndex].text

    let selectCourse=document.getElementById("selectCourse")
    let course=selectCourse.options[selectCourse.selectedIndex].text


    let mail=document.getElementById("inputMail").value

  

    if(!name || !age || !mail ){
        alert("Please Fill")
        return;
    }

    let display=document.getElementById("table-line")
    let newRow=display.insertRow(row)
    newRow.style.backgroundColor="blue";
    newRow.style.color="white"
    
    let cell1=newRow.insertCell(0)
    let cell2=newRow.insertCell(1)
    let cell3=newRow.insertCell(2)
    let cell4=newRow.insertCell(3)
    let cell5=newRow.insertCell(4)

    



    cell1.innerHTML=name
    cell2.innerHTML=age
    cell3.innerHTML=gender
    cell4.innerHTML=course
    cell5.innerHTML=mail

   

    row++;
  event.preventDefault()
}


// function onGenderChange(event){
//     console.log(event.target.value);

//     event.preventDefault()
//   }

// // function deleteitem(event){
// //     event.target.parentElement.remove()
// //  }


// let inputs=document.querySelectorAll('input[type="radio"')

// console.log(inputs[1].checked)




 
 
const createTd = (newRow,inputValue) =>{
   td = newRow.insertCell();
   let textNode =document.createTextNode(inputValue);
   td.appendChild(textNode);
   return td;
 
 }
//  Delete Function
// haveto figure out how to do it****

const deleteRow = (amountCell, newRow) =>{
  //Create Delete button
  const deleteButton = document.createElement("i");
  deleteButton.classList.add("fa");
  deleteButton.classList.add("fa-trash-o");
  deleteButton.classList.add("ml-4");
 amountCell.appendChild(deleteButton);

 //Create delete function
 deleteButton.addEventListener("click", function(){
   this.parentElement.parentElement.parentElement.removeChild(newRow);
 });

}

const editRow = (amountCell)=>{
  // Create edit button
  const editButton = document.createElement("i");
  editButton.classList.add("fa");
  editButton.classList.add("fa-pencil-square-o");
  editButton.classList.add("ml-4");
  amountCell.appendChild(editButton);

  // create edit row function
  editButton.addEventListener("click", function(){
    let td =[];
    for(let i=0; i<3; i++){
      // console.log(this.parentElement.parentElement.childNodes[i]);
      
       td[i]= this.parentElement.parentElement.childNodes[i];
      
       let inputCell =document.createElement("input");
       inputCell.value =td[i].textContent;
       td[i].textContent="";
       td[i].appendChild(inputCell);
    }
    
    const changeValuesButton = document.createElement("button");
    changeValuesButton.textContent = "Change values";
    td[2].appendChild(changeValuesButton);

    // Get the new edited values from the td input fields, then delete input fields and place edited values in appropriate td cells.
    changeValuesButton.addEventListener("click", function(){

      let newEditValue =[];
      for(let i =0; i<3; i++){
        // console.log(td[i].firstChild.value);
        newEditValue[i] = td[i].firstChild.value;
        td[i].removeChild;
        td[i].textContent = newEditValue[i];


      }
      
    });
    
    

  });
}
 
 const renderValues = (nameInput, dateInput, amountInput)=> {
   
  //Create row
   let table = document.querySelector("table");
  //Create row
   let newRow = table.insertRow();
  //run createTd function
   let nameCell = createTd(newRow, nameInput);
   let dateCell = createTd(newRow, dateInput);
   let amountCell = createTd(newRow, amountInput);
  
   deleteRow(amountCell, newRow);
   editRow(amountCell);


 }


const getInputValues = ()=>{
  
  let nameInput = document.querySelector("#name-input").value;
  let dateInput = document.querySelector("#date-input").value;
  let amountInput = document.querySelector("#amount-input").value;

  // console.log(`Here is the Name: ${nameInput} , here is the Date input: ${dateInput} and here is the Amount input: ${amountInput}.`);
  renderValues(nameInput, dateInput, amountInput);

  let inputs =document.querySelectorAll("input");
  for(let i =0; i <inputs.length;i++){
    inputs[i].value="";
  }
}

const expenseButton = document.querySelector("button");
expenseButton.addEventListener("click", getInputValues);

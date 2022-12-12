const name = document.querySelector('.name');
const gender = document.querySelector('.gender');
const age = document.querySelector('.age');
const campus = document.querySelector('.campus');
const tableBody= document.querySelector('.tableBody')
let allData = [
    {
        name: 'Maria',
        gender: 'female',
        age:"18",
        campus: "Chicago"
    },{
        name:"Sharpova",
        gender:"female",
        age:"18",
        campus:"Pune"
    },{
        name:"Sh",
        gender:"male",
        age:"18",
        campus:"Pune"
    }
    
];
function editName(index){
   let editedText =  prompt("Enter the changing value name")
   allData[index].name =editedText
   displayData()
}
function deleteRow(index){
    allData.splice(index,1);
    displayData()
}
function displayData(){
    tableBody.innerHTML="";
    allData.map((item,index)=>{
        tableBody.innerHTML+=`
        <tr>
        <td>${item.name}  </td>
        <td>${item.gender}</td>        
        <td>${item.age}</td>
       <td>${item.campus} </a>  </td>
       <td> <button id="deleteButton"onclick="deleteRow(${index})">Delete </button>
       <button class="editButton" onclick="editName(${index})">edit</button> </td>

        </tr>
        `
    })

}
function storeData(){
    allData = [...allData,
        {
            "name": name.value,
            "gender": gender.value,
            "age": age.value,
            "campus": campus.value
        }
    ];
   
    displayData()
}

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', storeData)
displayData()
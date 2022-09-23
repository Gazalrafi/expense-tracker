
function saveToLocalStorage(event) {
    event.preventDefault();
    const expenseamount = event.target.expenseamount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    
    const obj = {
        expenseamount,
        description,
        category
    }
    localStorage.setItem(obj.category, JSON.stringify(obj))
    showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const DetailsString = localStorageObj[key];
        const DetailsObj = JSON.parse(DetailsString);
        showNewUserOnScreen(DetailsObj)
    }
})

function showNewUserOnScreen(user){
    document.getElementById('ea').value = '';
    document.getElementById('des').value = '';
    document.getElementById('cat').value ='';
    
    if(localStorage.getItem(user.category) !== null){
        removeExpenseFromScreen(user.category)
    }

    const parentNode = document.getElementById('abcde');
    const childHTML = `<li id=${user.expenseamount}> ${user.description} ${user.category}- ${user.category}
                            <button onclick=deleteExpense('${user.category}')> Delete expense </button>
                            <button onclick=editExpense('${user.expenseamount}','${user.description}','${user.category}')>Edit expense </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editExpense(expenseamount, description, category){

    document.getElementById('ea').value = expenseamount;
    document.getElementById('des').value = description;
    document.getElementById('cat').value =category;

    deleteExpense(category)
 }


function deleteExpense(category){
    console.log(category)
    localStorage.removeItem(category);
    removeExpenseFromScreen(category);

}

function removeExpenseFromScreen(category){
    const parentNode = document.getElementById('cat');
    const childNodeToBeDeleted = document.getElementById(cat);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}
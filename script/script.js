console.log("Script loaded successfully.");
const renameBoardBtn = document.getElementById("rename-board-btn");
let savedname = localStorage.getItem("boardName");
if (savedname) {
    const boardNameElement = document.getElementById("board-title");
    boardNameElement.textContent = savedname;
}

renameBoardBtn.addEventListener("click", () => {
    console.log("Rename board button clicked.");
    const newBoardName = prompt("Enter the new board name:");
    if (newBoardName) {
        const boardNameElement = document.getElementById("board-title");
        boardNameElement.textContent = newBoardName;
        localStorage.setItem("boardName", newBoardName);
    }
});


const deleteBoardBtn = document.getElementById("delete-board-btn");
deleteBoardBtn.addEventListener("click", () => {
    console.log("Delete board button clicked.");
    const confirmation = confirm("Are you sure you want to delete this board?");
    if (confirmation) {

        
        console.log("Board deleted.");
        localStorage.removeItem("cards");
        newCardList = document.getElementById("todo-list");
        newCardList.innerHTML = "";
        
    }
    
});

let savedCards = JSON.parse(localStorage.getItem("cards")) || [];
const cardList = document.getElementById("todo-list");
savedCards.forEach((card) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
        <h3>${card.heading}</h3>
        <p>${card.description}</p>
        <p class="date">${card.date}</p>
    `;
    cardList.appendChild(newCard);
});
    

const addCardBtns = document.querySelectorAll(".add-card-btn");
addCardBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Add card button clicked.");
        const heading = prompt("Enter the heading for the new card:");
        const description = prompt("Enter the description for the new card:");
        const date = new Date();
        const cardList = btn.previousElementSibling;
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML = `
            <h3>${heading}</h3>
            <p>${description}</p>
            <p class="date">${date.toLocaleString()}</p>
        `;
        cardList.appendChild(newCard);
        const carddata = { 
            heading: heading, description: description, 
            date: date.toLocaleString() 
            };
        const saved = JSON.parse(localStorage.getItem("cards")) || [];
        saved.push(carddata);
        localStorage.setItem("cards", JSON.stringify(saved));
}   );}); 

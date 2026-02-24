//interview count
 let count = 0;
const interviewBtn = document.getElementById('interview-btn').addEventListener('click', function() {
    const countDisplay = document.getElementById('interview-count');

   
    count = count + 1;
    countDisplay.innerText = count;
})

//rejected count
let rejectedCount = 0;

const rejectedBtn = document.getElementById('rejected-btn').addEventListener('click', function() {
    const rejectedDisplay = document.getElementById('rejected-count');

    rejectedCount = rejectedCount + 1;
    rejectedDisplay.innerText = rejectedCount;
})

//interview btn
// document.getElementById('interview-btn').addEventListener('click', function() {
//     window.location.href = 'index.html';
// })

//delete btn

function deleteCard(element) {
    element.closest('.job-card').remove();
}

//
const jobContainer = document.getElementById('job-container');

jobContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const card = event.target.closest('.job-card');
        if (card) {
            card.remove();
        }
    }
});

//sir ar
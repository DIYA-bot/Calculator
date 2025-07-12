const boxes = document.querySelectorAll('.calculator-box');
const continueBtn = document.getElementById('continueBtn');
let selectedMode = "";

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Remove classes from all boxes
    boxes.forEach(b => {
      b.classList.remove('selected', 'ring-2', 'ring-offset-2', 'ring-blue-500');
      b.querySelector('.calc-text')?.classList.remove('opacity-100');
    });

    // Add classes to the clicked box
    box.classList.add('selected', 'ring-2', 'ring-offset-2', 'ring-blue-500');
    box.querySelector('.calc-text')?.classList.add('opacity-100');

    // Save selected mode
    selectedMode = box.getAttribute("data-mode");

    // Show continue button
    continueBtn.classList.remove('hidden');
  });
});
continueBtn.addEventListner('click',()=>{
if(selectedMode){
window.location.href=`${selectedMode}.html`;
}
});

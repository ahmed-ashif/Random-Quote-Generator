const btn = document.querySelector("#btn");
const output = document.querySelector(".output");

let quote = [
  "Hard Work is the Key to Success","Work Hard Dream Big","Never Give Up","You are the most Important Person in your Life", "Only demonstrate your strength when it's really required","When you forgive you win.”,“Forgiveness is the power to choose how things affect you.","Forgiveness is choosing to be happy.","Forgiveness is simply freeing ourselves from wanting to punish.","We experience what we intend for others.","Fear is wisdom as a child.","Forgiveness is always possible, but reconciliation is not always possible.","Forgiveness gives us the freedom to stay and the freedom to walk away."
]

btn.addEventListener("click",()=>{
  let random = Math.floor(Math.random()*quote.length);

  output.textContent = quote[random];
})
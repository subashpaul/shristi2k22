const arr = document.querySelectorAll(`.arr`)

console.log("This is my js");
const navtop = (id) => {
  const navTop = document.querySelector(`${id}`);
  navTop.style.display = "block";
  console.log('in')
};

const mouseOut = (id) => {
  document.querySelector(`#${id}`).style.display = 'none';
  console.log('leave')
  arr.forEach(i =>
    i.style.transform = 'rotate(0deg)'
  )

}
const show = (name, ul) => {
  const arr = document.querySelector(`.${name}`)
  arr.style.transform = 'rotate(-180deg)'
  if (document.querySelector(`${ul}`).style.display === 'block') {
    document.querySelector(`${ul}`).style.display = 'none'
    arr.style.transform = 'rotate(0deg)'

  }
  else {
    arr.style.transform = 'rotate(-180deg)'
    document.querySelector(`${ul}`).style.display = 'block'
  }

}
// document.querySelector('.arrow1').addEventListener('click', () => {
//   if (document.querySelector(`#navtp`).style.display === 'block') {
//     document.querySelector(`#navtp`).style.display = 'none'
//   }
//   else
//     document.querySelector(`#navtp`).style.display = 'block'
// })

const ham = () => {
  const content = document.querySelector('.content');
  console.log(document.querySelector('.top').style.transform)
  if (content.style.filter === 'blur(5px)')
    content.style.filter = 'none'
  else {
    content.style.filter = 'blur(5px)'

  }

  if (document.querySelector('.top').style.transform === '' || document.querySelector('.top').style.transform === 'translateX(100%)') {
    console.log('first')
    document.querySelector('.top').style.transform = 'translateX(0%)'
    // document.querySelector('.top').style.display = 'flex'
  }

  else {
    document.querySelector('.top').style.transform = 'translateX(100%)'
    // document.querySelector('.top').style.display = 'none'
  }
  // document.querySelector('.top').style.transform = 'translateX(0%)';
}
document.querySelector('.ham').addEventListener('click', ham)
// document.querySelector('.top').addEventListener('mouseout', ham)
console.log(document.querySelector('.top'))
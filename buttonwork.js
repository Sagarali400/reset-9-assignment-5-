const historyButton = document.getElementById('history');
historyButton.addEventListener('click', function () {
    document.getElementById('card-sec').classList.add('hidden');
    document.getElementById('second-card').classList.add('hidden');
    document.getElementById('third-card').classList.add('hidden');

    document.getElementById('history').style.backgroundColor = '#B4F461';
    document.getElementById('donation').style.backgroundColor ='white';
    document.getElementById('history-container').classList.remove('hidden');

});
const cardButton = document.getElementById('donation');
cardButton.addEventListener('click', function () {
    document.getElementById('donation').style.backgroundColor = '#B4F461';
    document.getElementById('history').style.backgroundColor ='white'
    document.getElementById("card-sec").classList.remove("hidden");
      document.getElementById("second-card").classList.remove("hidden");
      document.getElementById("third-card").classList.remove("hidden");
      document.getElementById('history-container').classList.add('hidden');

});
document.getElementById('blog').addEventListener('click',function(){
    window.location.href='card.html';
})



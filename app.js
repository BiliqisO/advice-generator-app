async function changeAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const { id, advice} = data.slip;
        document.getElementById('number').innerText = id
        document.getElementById('advices').innerHTML = `<p>"${advice}"</p>` ;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

document.getElementById("button").addEventListener("click", changeAdvice)
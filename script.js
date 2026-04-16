function generatePlan() {
  let name = document.getElementById("name").value;

  let t1 = document.getElementById("task1").value;
  let t2 = document.getElementById("task2").value;
  let t3 = document.getElementById("task3").value;
  let t4 = document.getElementById("task4").value;
  let t5 = document.getElementById("task5").value;

  let doneInputs = document.querySelectorAll(".check-grid input");

  let doneList = "<ul>";
  doneInputs.forEach(input => {
    if (input.value.trim() !== "") {
      doneList += "<li>" + input.value + "</li>";
    }
  });
  doneList += "</ul>";

  let notes = document.getElementById("notes").value;

  document.getElementById("result").innerHTML =
    "<h3>خطة يوم " + name + " ✨</h3>" +
    "<b>📌 أهم المهام:</b>" +
    "<ul>" +
    "<li>" + t1 + "</li>" +
    "<li>" + t2 + "</li>" +
    "<li>" + t3 + "</li>" +
    "<li>" + t4 + "</li>" +
    "<li>" + t5 + "</li>" +
    "</ul>" +
    "<b>✅ المهام المُنجزة:</b>" +
    doneList +
    "<p><b>📝 ملاحظات:</b><br>" + notes + "</p>";
}
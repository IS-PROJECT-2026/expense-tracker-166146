const form = document.querySelector("form");

if (form) {
  const dateField = form.elements.date;
  const today = new Date().toISOString().split("T")[0];
  const toast = document.createElement("p");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.append(toast);

  dateField.max = today;

  const showToast = (message, type) => {
    toast.textContent = message;
    toast.className = `toast toast-${type}`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      showToast("Please complete all fields with valid values.", "error");
      return;
    }

    const data = new FormData(form);
    const amount = Number(data.get("amount"));
    const date = String(data.get("date"));

    if (
      amount <= 0 ||
      Number.isNaN(amount) ||
      Number.isNaN(Date.parse(date)) ||
      date > today
    ) {
      showToast("Enter a positive amount and a date that is not in the future.", "error");
      return;
    }

    showToast("Expense details accepted.", "success");
    form.reset();
  });
}

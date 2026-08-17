const form = document.querySelector("form");

if (form) {
  const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  const dialog = document.querySelector("#expense-dialog");
  const openForm = document.querySelector("#open-form");
  const dateField = form.elements.date;
  const list = document.querySelector("#expense-items");
  const table = document.querySelector("#expense-table");
  const emptyState = document.querySelector("#empty-state");
  const categoryFilter = document.querySelector("#category-filter");
  const totalSpending = document.querySelector("#total-spending");
  const categoryCount = document.querySelector("#category-count");
  const categorySummary = document.querySelector("#category-summary");
  const formTitle = document.querySelector("#form-title");
  const saveButton = form.querySelector("[type=submit]");
  const cancelEdit = document.querySelector("#cancel-edit");
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

  const saveExpenses = () => localStorage.setItem("expenses", JSON.stringify(expenses));

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);

  const renderExpenses = () => {
    const visibleExpenses = categoryFilter.value === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === categoryFilter.value);

    list.innerHTML = visibleExpenses.map((expense) => `
      <tr>
        <th scope="row">${escapeHtml(expense.description)}</th>
        <td>${escapeHtml(expense.category)}</td>
        <td>${escapeHtml(expense.date)}</td>
        <td>${Number(expense.amount).toFixed(2)}</td>
        <td class="item-actions">
          <button class="text-button" data-action="edit" data-id="${expense.id}" type="button">Edit</button>
          <button class="text-button danger" data-action="delete" data-id="${expense.id}" type="button">Delete</button>
        </td>
      </tr>
    `).join("");

    const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
    const categories = [...new Set(expenses.map((expense) => expense.category))];
    const totalsByCategory = expenses.reduce((totals, expense) => {
      totals[expense.category] = (totals[expense.category] || 0) + Number(expense.amount);
      return totals;
    }, {});

    totalSpending.textContent = total.toFixed(2);
    categoryCount.textContent = categories.length;
    categorySummary.innerHTML = categories.map((category) =>
      `<span>${escapeHtml(category)}: <strong>${totalsByCategory[category].toFixed(2)}</strong></span>`
    ).join("");
    emptyState.textContent = expenses.length === 0
      ? "No expenses saved yet."
      : "No expenses match this category.";
    emptyState.hidden = visibleExpenses.length > 0;
    table.hidden = visibleExpenses.length === 0;
  };

  const resetEditor = () => {
    form.reset();
    form.dataset.editingId = "";
    formTitle.textContent = "Add an expense";
    saveButton.textContent = "Save expense";
    cancelEdit.hidden = true;
  };

  openForm.addEventListener("click", () => dialog.showModal());

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

    const expense = {
      id: form.dataset.editingId || crypto.randomUUID(),
      description: String(data.get("description")).trim(),
      amount,
      date,
      category: String(data.get("category")),
    };
    const index = expenses.findIndex((item) => item.id === expense.id);

    if (index === -1) expenses.push(expense);
    else expenses[index] = expense;

    saveExpenses();
    renderExpenses();
    showToast(index === -1 ? "Expense saved." : "Expense updated.", "success");
    resetEditor();
    dialog.close();
  });

  cancelEdit.addEventListener("click", () => {
    resetEditor();
    dialog.close();
  });

  categoryFilter.addEventListener("change", renderExpenses);

  list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const index = expenses.findIndex((expense) => expense.id === button.dataset.id);
    if (index === -1) return;

    if (button.dataset.action === "delete") {
      expenses.splice(index, 1);
      saveExpenses();
      renderExpenses();
      showToast("Expense deleted.", "success");
      return;
    }

    const expense = expenses[index];
    form.elements.description.value = expense.description;
    form.elements.amount.value = expense.amount;
    form.elements.date.value = expense.date;
    form.elements.category.value = expense.category;
    form.dataset.editingId = expense.id;
    formTitle.textContent = "Edit an expense";
    saveButton.textContent = "Update expense";
    cancelEdit.hidden = false;
    dialog.showModal();
    form.scrollIntoView({ behavior: "smooth" });
  });

  renderExpenses();
}

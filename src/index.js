import "./style/style.css";

const form = document.querySelector("form");
const titleInput = form.elements.noteTitle;
const bodyInput = form.elements.noteBody;
const baseUrl = "https://notes-api.dicoding.dev/v2";
let notesList;

form.addEventListener("submit", (event) => event.preventDefault());

const customValidationHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Wajib diisi.");
    return;
  }
};

titleInput.addEventListener("change", customValidationHandler);
titleInput.addEventListener("invalid", customValidationHandler);

bodyInput.addEventListener("change", customValidationHandler);
bodyInput.addEventListener("invalid", customValidationHandler);

titleInput.addEventListener("blur", handleValidation);
bodyInput.addEventListener("blur", handleValidation);

function handleValidation(event) {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute("aria-describedby");
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl) {
    if (errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
    } else {
      connectedValidationEl.innerText = "";
    }
  }
}

const showResponseMessage = (message = "Check your internet connection") => {
  alert(message);
};

document.addEventListener("DOMContentLoaded", function () {
  customElements.define("custom-heading", CustomHeading);
  customElements.define("notes-list", NotesList);
  customElements.define("footer-custom", FooterCustom);
  customElements.define("loading-indicator", LoadingIndicator);

  const noteForm = document.getElementById("noteForm");
  notesList = document.querySelector("notes-list");

  noteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const loadingIndicator = document.querySelector("loading-indicator");
    loadingIndicator.show();

    const title = titleInput.value;
    const body = bodyInput.value;

    fetch(`${baseUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          showResponseMessage(data.message);
        } else {
          getNotes();
          showResponseMessage("Note added successfully");
        }
        loadingIndicator.hide();
      })
      .catch((error) => {
        showResponseMessage(error);
        loadingIndicator.hide();
      });
  });

  getNotes();
});

const getNotes = () => {
  const loadingIndicator = document.querySelector("loading-indicator");
  loadingIndicator.show();
  fetch(`${baseUrl}/notes`)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        notesList.updateList(responseJson);
      }
      loadingIndicator.hide();
    })
    .catch((error) => {
      showResponseMessage(error);
      loadingIndicator.hide();
    });
};

const deleteNote = (noteId) => {
  fetch(`${baseUrl}/notes/${noteId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        showResponseMessage(data.message);
      } else {
        getNotes();
        showResponseMessage("Note deleted successfully");
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};

class CustomHeading extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const title = this.getAttribute("title") || "Custom Heading";
    this.shadowRoot.innerHTML = `
            <style>
                h1 {
                    margin: 0;
                    color: #fff;
                }
            </style>
            <h1>${title}</h1>
        `;
  }
}

class NotesList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  updateList(notes) {
    this.shadowRoot.innerHTML = `
            <style>
                .notes-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 40px 60px;
                    justify-items: center;
                    padding: 20px;
                    border: 4px solid #008DDA;
                    border-radius: 20px;
                }

                .note {
                    position: relative;
                    border: 5px solid #008DDA;
                    border-radius: 20px;
                    padding: 20px;
                    background-color: #008DDA;
                    color: #fff;
                    width: calc(100% - 40px);
                    margin: 20px;
                }
                
                .note h2 {
                    margin-top: 0;
                }

                .delete-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 1;
                    background-color: #ff5252;
                    color: #fff;
                    border: none;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    font-size: 13px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 25px;
                    font-weight: bold;
                }

                .delete-button:hover {
                    background-color: #cc0000;
                }
            </style>
        `;
    const notesDataElement = document.createElement("div");
    notesDataElement.classList.add("notes-grid");

    console.log(notes);
    notes.data.forEach((note) => {
      const noteElement = document.createElement("div");
      noteElement.classList.add("note");

      const titleElement = document.createElement("h2");
      titleElement.textContent = note.title;

      const bodyElement = document.createElement("p");
      bodyElement.textContent = note.body;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteNote(note.id);
      });

      noteElement.appendChild(titleElement);
      noteElement.appendChild(bodyElement);
      noteElement.appendChild(deleteButton);

      notesDataElement.appendChild(noteElement);
    });

    this.shadowRoot.appendChild(notesDataElement);
  }
}

class FooterCustom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const text = this.getAttribute("text") || "Custom Footer";
    this.shadowRoot.innerHTML = `
            <footer>${text}</footer>
        `;
  }
}

class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                .loading-container {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.5);
                    z-index: 9999;
                    justify-content: center;
                    align-items: center;
                }

                .loading-spinner {
                    border: 8px solid #f3f3f3;
                    border-top: 8px solid #3498db;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <div class="loading-container">
                <div class="loading-spinner"></div>
            </div>
        `;
  }

  show() {
    const loadingContainer =
      this.shadowRoot.querySelector(".loading-container");
    loadingContainer.style.display = "flex";
  }

  hide() {
    const loadingContainer =
      this.shadowRoot.querySelector(".loading-container");
    loadingContainer.style.display = "none";
  }
}

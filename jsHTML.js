alert("ссылка на пул реквест https://github.com/Kreastor/RSS-Virtual-Keyboard/pull/1")

const Form = document.createElement('form'); 
document.body.append(Form);
Form.id = "teaxarea-form";
Form.action = "#";
Form.method = "post";

Form.insertAdjacentHTML("afterbegin", '<textarea id="textarea" class="use-keyboard-input"></textarea>');

const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "del",
            "caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "\'", "enter",
            "shift", "\\", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "R-Shift",
            "ctrl", "win", "alt", "space", "alt", "ctrl", "←", "↓", "→", "done"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "del", "enter", "R-Shift", "→"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {

                case "`":
                    keyElement.classList.add("ё");
                    keyElement.innerHTML = "`";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;

                case "backspace":
                    keyElement.classList.add("backspace");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "tab":
                    keyElement.classList.add("tab");
                    keyElement.innerHTML = "Tab";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "  ";
                        this._triggerEvent("oninput");
                    });

                    break;  

                case "del":
                    keyElement.classList.add("del");
                    keyElement.innerHTML = "Del";

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(1, this.properties.value.length);
                        this._triggerEvent("oninput");
                    });

                    break; 

                case "caps":
                    keyElement.classList.add("keyboard__key--activatable", "caps-lock");
                    keyElement.innerHTML = "Caps Lock";

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("enter");
                    keyElement.innerHTML = "Enter";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "shift":
                keyElement.classList.add("shift");
                keyElement.innerHTML = "Shift";

                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";
                    this._triggerEvent("oninput");
                });

                break;

                case "R-Shift":
                    keyElement.classList.add("r-shift");
                    keyElement.innerHTML = "Shift";

                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";
                    this._triggerEvent("oninput");
                });
    
                break;

                case "ctrl":
                    keyElement.classList.add("ctrl");
                    keyElement.innerHTML = "Ctrl"; 

                break;


                case "win":
                    keyElement.classList.add("win");
                    keyElement.innerHTML = "Win"; 

                break;

                case "alt":
                    keyElement.classList.add("alt");
                    keyElement.innerHTML = "Alt"; 

                    break;

                case "space":
                    keyElement.classList.add("space");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toUpperCase();
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
    
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});

const elements = document.getElementsByClassName('keyboard__key');
for(let i=0; i < elements.length; i++) {
    elements[i].addEventListener("keydown", function (e) {
        elements.style.background ="rgba(85, 113, 238, 1)";
    });
};

